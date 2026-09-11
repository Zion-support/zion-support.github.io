"""Publish quality posts, rebuild the index, RSS, sitemap, and llms.txt."""

from __future__ import annotations

import json
import re
from datetime import date, datetime, timezone
from html import unescape
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

from . import BLOG_DIR, CONFIG_PATH, PUBLIC, STATE_PATH
from .quality import is_quality_post, load_config, word_count

TITLE_RE = re.compile(r"<title>(.*?)</title>", re.I | re.S)
H1_RE = re.compile(r"<h1[^>]*>(.*?)</h1>", re.I | re.S)
DESC_RE = re.compile(r'<meta\s+name="description"\s+content="([^"]*)"', re.I)
DATE_RE = re.compile(r'"datePublished"\s*:\s*"([^"]+)"')
LANG_RE = re.compile(r'<html[^>]*lang="([^"]+)"', re.I)


def _strip_tags(text: str) -> str:
    return unescape(re.sub(r"<[^>]+>", "", text)).strip()


def load_state() -> dict:
    if STATE_PATH.exists():
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    return {"published": [], "queue_spawned": 0, "runs": []}


def save_state(state: dict) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def write_post(slug: str, html: str) -> Path:
    dest = BLOG_DIR / slug / "index.html"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(html, encoding="utf-8")
    return dest


def iter_quality_posts() -> list[dict]:
    posts = []
    if not BLOG_DIR.exists():
        return posts
    for path in sorted(BLOG_DIR.glob("*/index.html")):
        html = path.read_text(encoding="utf-8", errors="ignore")
        if not is_quality_post(html):
            continue
        slug = path.parent.name
        title_m = H1_RE.search(html) or TITLE_RE.search(html)
        desc_m = DESC_RE.search(html)
        date_m = DATE_RE.search(html)
        lang_m = LANG_RE.search(html)
        title = _strip_tags(title_m.group(1) if title_m else slug)
        title = re.sub(r"\s*\|\s*Zion Tech Group.*$", "", title)
        posts.append(
            {
                "slug": slug,
                "url": f"/blog/{slug}/",
                "title": title,
                "description": unescape(desc_m.group(1)) if desc_m else "",
                "date": date_m.group(1) if date_m else "",
                "lang": lang_m.group(1) if lang_m else "en",
                "words": word_count(html),
            }
        )
    posts.sort(key=lambda p: (p["date"], p["slug"]), reverse=True)
    return posts


def rebuild_blog_index(posts: list[dict]) -> Path:
    featured = posts[:24]
    rest = posts[24:]
    cards = []
    for post in featured:
        cards.append(
            f'<article class="post"><h2><a href="{post["url"]}">{_esc(post["title"])}</a></h2>'
            f'<p class="meta">{_esc(post["date"] or "Guide")} · {post["words"]} words · {post["lang"]}</p>'
            f'<p>{_esc(post["description"])}</p></article>'
        )
    more = ""
    if rest:
        items = "\n".join(
            f'<li><a href="{p["url"]}">{_esc(p["title"])}</a></li>' for p in rest[:80]
        )
        more = f"<h2>More guides</h2><ul class=\"more\">{items}</ul>"
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Blog — AI agents, managed IT, FinOps | Zion Tech Group</title>
  <meta name="description" content="Practical guides on AI agents, managed IT, FinOps, and Brazilian SME automation. Honest scope, then a $99 Discovery — no free consultation, no fake ROI." />
  <link rel="canonical" href="https://ziontechgroup.com/blog/" />
  <link rel="alternate" type="application/rss+xml" title="Zion Tech Group Blog" href="https://ziontechgroup.com/blog/feed.xml" />
  <meta property="og:title" content="Blog | Zion Tech Group" />
  <meta property="og:url" content="https://ziontechgroup.com/blog/" />
  <meta property="og:type" content="website" />
  <style>
    :root {{ color-scheme: dark; }}
    body {{ font-family: system-ui, -apple-system, sans-serif; background:#020617; color:#e2e8f0; margin:0; }}
    a {{ color:#c4b5fd; }}
    .wrap {{ max-width:880px; margin:0 auto; padding:48px 24px; }}
    .brand {{ text-decoration:none; font-weight:800; background:linear-gradient(90deg,#c084fc,#f472b6); -webkit-background-clip:text; color:transparent; }}
    h1 {{ font-size:clamp(1.8rem,4vw,2.6rem); }}
    .sub {{ color:#94a3b8; max-width:46rem; }}
    .cta {{ display:inline-block; margin:16px 8px 32px 0; padding:12px 20px; border-radius:999px; background:linear-gradient(90deg,#7c3aed,#db2777); color:#fff; text-decoration:none; font-weight:650; }}
    .post {{ border-bottom:1px solid #1e293b; padding:22px 0; }}
    .post h2 {{ margin:0 0 8px; font-size:1.25rem; }}
    .post h2 a {{ color:#f8fafc; text-decoration:none; }}
    .meta {{ color:#64748b; font-size:.85rem; }}
    .more {{ columns:1; }}
    footer {{ margin-top:48px; color:#64748b; }}
  </style>
</head>
<body>
  <div class="wrap">
    <a class="brand" href="/">Zion Tech Group</a>
    <h1>Guides that map to a real first workflow</h1>
    <p class="sub">AI agents, managed IT, FinOps, WhatsApp operations, and Brazilian SME automation. Quality pages only — leftover catalog stubs stay noindex. The live offer is Discovery at $99.</p>
    <a class="cta" href="/book/">Book Discovery — $99</a>
    <a class="cta" href="/plans/" style="background:#0f172a;border:1px solid #334155;">Plans</a>
    {''.join(cards)}
    {more}
    <footer>
      <p>{len(posts)} indexable guides · <a href="/blog/feed.xml">RSS</a> · <a href="/llms.txt">llms.txt</a></p>
    </footer>
  </div>
</body>
</html>
"""
    dest = BLOG_DIR / "index.html"
    dest.write_text(html, encoding="utf-8")
    return dest


def _esc(text: str) -> str:
    return (
        (text or "")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def rebuild_rss(posts: list[dict]) -> Path:
    items = []
    for post in posts[:30]:
        items.append(
            "  <item>\n"
            f"    <title>{xml_escape(post['title'])}</title>\n"
            f"    <link>https://ziontechgroup.com{post['url']}</link>\n"
            f"    <guid>https://ziontechgroup.com{post['url']}</guid>\n"
            f"    <description>{xml_escape(post['description'])}</description>\n"
            f"    <pubDate>{xml_escape(post['date'])}</pubDate>\n"
            "  </item>"
        )
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<rss version="2.0">\n<channel>\n'
        "<title>Zion Tech Group Blog</title>\n"
        "<link>https://ziontechgroup.com/blog/</link>\n"
        "<description>AI agents, managed IT, FinOps, and SME automation.</description>\n"
        + "\n".join(items)
        + "\n</channel>\n</rss>\n"
    )
    dest = BLOG_DIR / "feed.xml"
    dest.write_text(xml, encoding="utf-8")
    return dest


def rebuild_blog_sitemap(posts: list[dict]) -> Path:
    today = date.today().isoformat()
    urls = [
        f"<url><loc>https://ziontechgroup.com/blog/</loc><lastmod>{today}</lastmod>"
        f"<changefreq>daily</changefreq><priority>0.8</priority></url>"
    ]
    for post in posts:
        lastmod = post["date"] or today
        urls.append(
            f"<url><loc>https://ziontechgroup.com{post['url']}</loc><lastmod>{lastmod}</lastmod>"
            f"<changefreq>weekly</changefreq><priority>0.7</priority></url>"
        )
    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )
    dest = PUBLIC / "sitemap-blog.xml"
    dest.write_text(xml, encoding="utf-8")
    return dest


def patch_robots() -> None:
    robots = PUBLIC / "robots.txt"
    text = robots.read_text(encoding="utf-8") if robots.exists() else "User-agent: *\nAllow: /\n"
    needed = [
        "Sitemap: https://ziontechgroup.com/sitemap-blog.xml",
        "Sitemap: https://ziontechgroup.com/sitemap-money.xml",
        "Sitemap: https://ziontechgroup.com/sitemap-para-icp.xml",
    ]
    for line in needed:
        if line not in text:
            text = text.rstrip() + "\n" + line + "\n"
    ai_block = (
        "\nUser-agent: GPTBot\nAllow: /\n"
        "User-agent: ChatGPT-User\nAllow: /\n"
        "User-agent: ClaudeBot\nAllow: /\n"
        "User-agent: PerplexityBot\nAllow: /\n"
        "User-agent: Google-Extended\nAllow: /\n"
        "User-agent: Amazonbot\nAllow: /\n"
    )
    if "User-agent: GPTBot" not in text:
        text = text.rstrip() + ai_block
    robots.write_text(text if text.endswith("\n") else text + "\n", encoding="utf-8")


def patch_llms_txt(posts: list[dict]) -> None:
    path = PUBLIC / "llms.txt"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    block_lines = ["## Indexable blog (quality loop)", ""]
    for post in posts[:20]:
        block_lines.append(f"- {post['title']}: https://ziontechgroup.com{post['url']}")
    block_lines.append("")
    block = "\n".join(block_lines)
    marker = "## Indexable blog (quality loop)"
    if marker in text:
        # Replace existing block until the next ## or EOF
        text = re.sub(r"## Indexable blog \(quality loop\)[\s\S]*?(?=\n## |\Z)", block, text)
    else:
        text = text.rstrip() + "\n\n" + block
    path.write_text(text if text.endswith("\n") else text + "\n", encoding="utf-8")


def write_distribution(brief: dict, dest_dir: Path) -> Path:
    dest_dir.mkdir(parents=True, exist_ok=True)
    slug = brief["slug"]
    url = f"https://ziontechgroup.com/blog/{slug}/"
    linkedin = (
        f"{brief['title']}\n\n{brief.get('excerpt') or brief['description']}\n\n"
        f"Live path: Discovery $99 — no free consultation.\n{url}\n"
    )
    telegram = f"New guide: {brief['title']}\n{url}\nBook: https://ziontechgroup.com/book/"
    payload = {
        "slug": slug,
        "url": url,
        "linkedin": linkedin,
        "telegram": telegram,
        "generated_at": datetime.now(timezone.utc).isoformat(),
    }
    path = dest_dir / f"{slug}.json"
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def refresh_indexes() -> dict:
    posts = iter_quality_posts()
    rebuild_blog_index(posts)
    rebuild_rss(posts)
    rebuild_blog_sitemap(posts)
    patch_robots()
    patch_llms_txt(posts)
    return {"quality_posts": len(posts)}
