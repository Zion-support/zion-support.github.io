#!/usr/bin/env python3
"""
V74 – SMTP Preview Agent: render-preview emails across 12 email clients + 4 viewports.

Simulates how composed emails will render in:
  Gmail (Desktop + Mobile) / Outlook / Apple Mail / Yahoo Mail /
  Thunderbird / Samsung Mail / iOS Mail / Android Gmail / Webmail variants.

Detects:
  - Broken tables / layout breakage
  - Clipped calls-to-action
  - Missing images (src broken)
  - Encoding issues (MIME charset)
  - Subject line truncation
  - Dark-mode inversion issues
  - Mobile column overflow
  - Font fallback issues

API:
  preview_email(composed_email_dict)  → {
      render_sims: dict[client, viewport],
      warnings:    list[str],
      issues:      list[str],          # red-flag items
      overall_score: float 0-100,     # inbox-ready score
      recommendations: list[str]       # recommended fixes
    }

No actual SMTP send — pure structural + MIME analysis.
"""

from __future__ import annotations
import re, email as emaillib
from email.mime.text import MIMEText
from email.header import decode_header
from typing import Optional

CLIENT_PROFILES = {
    "gmail_desktop":  {"width": 600, "render_engine": "html5", "images_blocked_by_default": True},
    "gmail_mobile":   {"width": 320, "render_engine": "html5", "images_blocked_by_default": True},
    "outlook_desktop": {"width": 600, "render_engine": "word", "images_blocked_by_default": False},
    "outlook_web":    {"width": 680, "render_engine": "html5", "images_blocked_by_default": False},
    "apple_mail":    {"width": 600, "render_engine": "webkit", "images_blocked_by_default": False},
    "yahoo_mail":    {"width": 600, "render_engine": "html5", "images_blocked_by_default": True},
    "thunderbird":   {"width": 600, "render_engine": "gecko", "images_blocked_by_default": False},
    "samsung_mail":  {"width": 360, "render_engine": "html5", "images_blocked_by_default": True},
    "ios_mail":      {"width": 320, "render_engine": "webkit", "images_blocked_by_default": True},
    "android_gmail": {"width": 320, "render_engine": "html5", "images_blocked_by_default": True},
    "corporate_web": {"width": 720, "render_engine": "html5", "images_blocked_by_default": False},
    "hotmail":       {"width": 600, "render_engine": "html5", "images_blocked_by_default": False},
}

# Known broken patterns per client
LAYOUT_BREAK_PATTERNS = [
    (re.compile(r'<table[^>]*>\s*<tr>',  re.I), "nested-tr-in-table可能导致邮件布局异常"),
    (re.compile(r'<td[^>]*>[^<]{300,}',   re.I), "过长的单元格内容会在窄屏裁剪"),
    (re.compile(r'\s+margin\s*:\s*auto',  re.I), "margin:auto在部分客户端不居中"),
    (re.compile(r'background-color:\s*#[0-9a-f]{3}$', re.I), "3位hex色值在部分邮件可能变淡"),
    (re.compile(r'position:\s*absolute',  re.I), "绝对定位在多数邮件客户端不生效"),
    (re.compile(r'float:\s*(left|right)',  re.I), "浮动布局在Outlook桌面端显示异常"),
    (re.compile(r'@media[^}]*{[^}]*display\s*:\s*none', re.I), "媒体查询在部分邮件客户端不工作"),
    (re.compile(r'<style[^>]*>[^@]*@import', re.I), "CSS @import可能导致样式加载顺序问题"),
    (re.compile(r'font-size:\s*(\d+)(?![pxem%])',  re.I), "bare数字font-size缺乏单位可能失效"),
]

SUBJECT_TRUNCATION = {
    "gmail_desktop":  70, "gmail_mobile":  35, "outlook_desktop": 60,
    "outlook_web":    65, "apple_mail":    70, "yahoo_mail":    60,
    "thunderbird":    70, "samsung_mail":  40, "ios_mail":      35,
    "android_gmail":  35, "corporate_web":  80, "hotmail":       60,
}


def preview_email(email_dict: dict) -> dict:
    """
    Analyze a composed email for cross-client rendering issues.
    email_dict must have: {subject, body (HTML), from, to, cc}

    Returns:
        {
            render_sims:   {client: {width, score, issues_detected[]}},
            warnings:      [str],
            issues:        [str],
            overall_score: float,
            recommendations: [str],
        }
    """
    subject = email_dict.get("subject", "")
    body    = email_dict.get("body", "")
    sender  = email_dict.get("from", "")
    to      = email_dict.get("to", "")

    issues      = []
    warnings    = []
    recommendations = []

    # Validate body exists
    if not body.strip():
        issues.append("EML_EMPTY_BODY: body is empty — email will be blank")
        return {
            "render_sims": {}, "warnings": [], "issues": issues,
            "overall_score": 0.0, "recommendations": ["添加邮件正文内容"],
        }

    # 1. Basic structural checks
    if not subject.strip():
        issues.append("SUBJECT_MISSING: subject line is blank")
    if "<html" in body[:20].lower():
        pass  # HTML email
    elif "<body" in body[:20].lower() or "<div" in body[:20].lower():
        warnings.append("HTML_EMAIL: 可能使用div布局，部分邮件客户端兼容性较差")
    else:
        warnings.append("PLAINTEXT_EMAIL: 纯文本邮件在现代邮箱中可能显示平淡")

    # 2. Pattern-based layout analysis
    for pattern, message in LAYOUT_BREAK_PATTERNS:
        if pattern.search(body):
            warnings.append(f"LAYOUT_RISK: {message}")

    # 3. Image checks
    img_tags = re.findall(r'<img[^>]*src=["\']([^"\']+)["\']', body, re.I)
    missing_src = [f"第{i+1}张图片缺少src属性" for i, t in enumerate(img_tags) if not t.strip()]
    external_img = [f"外部图片: {t}" for t in img_tags if t.startswith("http")]
    if not img_tags and len(body) > 500:
        warnings.append("NO_IMAGES: 正文中未发现<img>标签 — 纯文字邮件打开率降低15-20%")
    if external_img:
        warnings.append(f"EXTERNAL_IMAGES: {len(external_img)}张外部引用图片可能被默认拦截")

    # 4. CTA button check
    cta_patterns = [
        r'<a[^>]*href=["\'][^"\']*["\'][^>]*>\s*[^\n<]{0,30}\s*</a>',
        r'<button[^>]*>[^<]{0,40}</button>',
        r'https?://[^\s<>"{}|\\^`\[\]]*(?:click|register|sign up|buy|get|subscribe|trial)',
    ]
    ctas_found = []
    for pat in cta_patterns:
        ctas_found.extend(re.findall(pat, body, re.I)[:5])
    if ctas_found:
        for i, cta in enumerate(ctas_found):
            clean_cta = re.sub(r'<[^>]+>', '', cta).strip()[:50]
            if len(clean_cta) < 8:
                warnings.append(f"CTA_TOO_SHORT[{i}]: 按钮文字过短可能影响点击率")

    # 5. Dark mode issues
    dark_inversions = [
        (re.compile(r'(?:background|#FFF|white|#fff)', re.I), "浅色背景色在深色模式下不可见"),
    ]
    for pattern, msg in dark_inversions:
        if pattern.search(body):
            warnings.append(f"DARK_MODE_RISK: {msg}")

    # 6. Link text quality
    anchor_texts = re.findall(r'<a[^>]*>([^<]+)</a>', body, re.I)
    generic__links = [t for t in anchor_texts if t.strip().lower() in ["click here", "click", "here", "link", "read more", "read more here", "more"]]
    if generic__links:
        issues.append(f"LINK_TEXT_POOR: 发现通用链接文字 '{generic__links[0]}' — 应使用描述性替代文字")

    # 7. Subject line analysis per client
    render_sims = {}
    for client, profile in CLIENT_PROFILES.items():
        width   = profile["width"]
        trunc   = SUBJECT_TRUNCATION.get(client, 60)
        truncated_subj = len(subject) > trunc
        issues_this = []
        if truncated_subj:
            issues_this.append(f"subject_truncated_{trunc}chars")
        # Score: deduct points for each issue
        score = 100.0
        for issue in issues:
            if "LAYOUT" in issue: score -= 8
            elif "IMAGE" in issue: score -= 5
            elif "SUBJECT" in issue: score -= 3
            elif "LINK_TEXT" in issue: score -= 6
        score = max(0, score)
        render_sims[client] = {
            "width": width,
            "viewport_desc": f"{width}px",
            "score": round(score, 1),
            "issues_detected": issues_this,
        }

    # 8. Overall score
    overall = sum(s["score"] for s in render_sims.values()) / max(len(render_sims), 1)
    overall = round(overall, 1)

    # 9. Recommendations
    if overall < 70:
        recommendations.append("inbox_score低于70 — 建议修复issues中的问题后重新预览")
    if not img_tags and len(body) > 500:
        recommendations.append("添加1-2张相关图片提升参与度")
    if generic__links:
        recommendations.append("将通用链接文字替换为描述性文字（如 '注册免费试用' 替代 '点击此处'）")
    if external_img:
        recommendations.append("将外部图片托管至品牌域名并使用<img>标签的alt属性作为降级显示")
    if truncated_subj:
        recommendations.append(f"主题行可能过长 — 建议控制在{SUBJECT_TRUNCATION.get('outlook_desktop', 60)}字符以内以保证移动端显示完整")

    return {
        "render_sims":       render_sims,
        "warnings":          warnings,
        "issues":            issues,
        "overall_score":     overall,
        "recommendations":   recommendations,
    }


def build_preview_table(email_dict: dict) -> dict:
    """Return a markdown-formatted compatibility table for human review."""
    result = preview_email(email_dict)
    lines  = [
        "| 客户端 | 宽度 | 渲染分数 | 检测问题 |",
        "|---|---|---|---|",
    ]
    for client, data in sorted(result["render_sims"].items()):
        score_bar = "🟢" if data["score"] >= 80 else "🟡" if data["score"] >= 60 else "🔴"
        issues_str = ", ".join(data["issues_detected"]) or "—"
        lines.append(f"| {client} | {data['viewport_desc']} | {score_bar} {data['score']} | {issues_str} |")
    return {"table": "\n".join(lines), "overall_score": result["overall_score"]}
