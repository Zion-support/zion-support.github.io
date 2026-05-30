#!/usr/bin/env python3
"""V242 - AI Email Accessibility Checker
Ensure emails meet WCAG 2.1 standards with color contrast checking,
alt text validation, screen reader compatibility, and readability scoring.
Always enforces reply-all for multi-recipient emails.
"""
import json, re, datetime
from dataclasses import dataclass, field
from typing import List, Dict

@dataclass
class AccessibilityIssue:
    wcag_criterion: str
    severity: str  # "critical", "major", "minor"
    element: str
    issue: str
    fix: str

class AccessibilityChecker:
    CONTRAST_MIN_RATIO = 4.5  # WCAG AA normal text
    CONTRAST_MIN_LARGE = 3.0  # WCAG AA large text
    MAX_LINE_LENGTH = 80
    MIN_FONT_SIZE = 12

    COLOR_NAMES = {
        "red": (255, 0, 0), "green": (0, 128, 0), "blue": (0, 0, 255),
        "black": (0, 0, 0), "white": (255, 255, 255), "gray": (128, 128, 128),
        "yellow": (255, 255, 0), "orange": (255, 165, 0), "purple": (128, 0, 128),
    }

    def check_email(self, email: Dict) -> Dict:
        body = email.get("body", "")
        html = email.get("html_body", "")
        issues = []

        issues.extend(self._check_images(body, html))
        issues.extend(self._check_links(body, html))
        issues.extend(self._check_readability(body))
        issues.extend(self._check_structure(body, html))
        issues.extend(self._check_color_contrast(html))

        critical = sum(1 for i in issues if i.severity == "critical")
        major = sum(1 for i in issues if i.severity == "major")
        minor = sum(1 for i in issues if i.severity == "minor")
        score = max(0, 100 - critical * 25 - major * 10 - minor * 3)

        return {
            "email_id": email.get("id", ""),
            "accessibility_score": score,
            "grade": self._get_grade(score),
            "issues": [i.__dict__ for i in issues],
            "critical_count": critical,
            "major_count": major,
            "minor_count": minor,
            "wcag_level": "AA" if score >= 80 else "Partial" if score >= 50 else "Non-compliant",
            "reply_all_required": len(email.get("to", [])) > 1,
            "timestamp": datetime.datetime.now().isoformat()
        }

    def _check_images(self, body: str, html: str) -> List[AccessibilityIssue]:
        issues = []
        img_tags = re.findall(r'<img[^>]*>', html, re.IGNORECASE)
        for img in img_tags:
            if 'alt=' not in img.lower() or 'alt=""' in img.lower():
                issues.append(AccessibilityIssue(
                    "1.1.1", "critical", "<img>", "Missing alt text", "Add descriptive alt text"
                ))
        if re.search(r'\[image\]|\[photo\]|\[screenshot\]', body, re.IGNORECASE):
            issues.append(AccessibilityIssue(
                "1.1.1", "major", "inline image", "Image referenced without description",
                "Describe image content for screen readers"
            ))
        return issues

    def _check_links(self, body: str, html: str) -> List[AccessibilityIssue]:
        issues = []
        vague_links = ["click here", "here", "this", "read more", "learn more", "more"]
        for link_text in vague_links:
            if link_text in body.lower():
                issues.append(AccessibilityIssue(
                    "2.4.4", "major", f"link text '{link_text}'",
                    "Vague link text not descriptive", f"Use descriptive text like 'View the Q3 report'"
                ))
        return issues

    def _check_readability(self, body: str) -> List[AccessibilityIssue]:
        issues = []
        sentences = [s.strip() for s in re.split(r'[.!?]+', body) if s.strip()]
        if sentences:
            avg_length = sum(len(s.split()) for s in sentences) / len(sentences)
            if avg_length > 25:
                issues.append(AccessibilityIssue(
                    "3.1.5", "minor", "text",
                    f"Average sentence length {avg_length:.0f} words (recommend <20)",
                    "Break long sentences into shorter ones"
                ))
        long_lines = [l for l in body.split("\n") if len(l) > self.MAX_LINE_LENGTH]
        if long_lines:
            issues.append(AccessibilityIssue(
                "1.4.10", "minor", "text layout",
                f"{len(long_lines)} lines exceed {self.MAX_LINE_LENGTH} chars",
                "Keep lines under 80 characters for readability"
            ))
        return issues

    def _check_structure(self, body: str, html: str) -> List[AccessibilityIssue]:
        issues = []
        if html and '<h1' not in html.lower() and '<h2' not in html.lower():
            issues.append(AccessibilityIssue(
                "1.3.1", "minor", "document structure",
                "No headings found in HTML email",
                "Use proper heading hierarchy (H1, H2, H3)"
            ))
        tables = re.findall(r'<table[^>]*>', html, re.IGNORECASE)
        for table in tables:
            if 'role="presentation"' not in table and '<th' not in html.lower():
                issues.append(AccessibilityIssue(
                    "1.3.1", "major", "<table>",
                    "Data table without header cells",
                    "Add <th> elements or mark as presentation table"
                ))
        return issues

    def _check_color_contrast(self, html: str) -> List[AccessibilityIssue]:
        issues = []
        color_mentions = re.findall(r'color[:\s]+(\w+)', html, re.IGNORECASE)
        bg_mentions = re.findall(r'background(?:-color)?[:\s]+(\w+)', html, re.IGNORECASE)
        low_contrast_pairs = [("yellow", "white"), ("lightgray", "white"), ("gray", "black")]
        for fg, bg in low_contrast_pairs:
            if fg in [c.lower() for c in color_mentions] and bg in [c.lower() for c in bg_mentions]:
                issues.append(AccessibilityIssue(
                    "1.4.3", "critical", "color contrast",
                    f"Low contrast: {fg} on {bg}",
                    "Use colors with minimum 4.5:1 contrast ratio"
                ))
        return issues

    def _get_grade(self, score: int) -> str:
        if score >= 95: return "A+"
        if score >= 85: return "A"
        if score >= 75: return "B"
        if score >= 65: return "C"
        if score >= 50: return "D"
        return "F"

if __name__ == "__main__":
    checker = AccessibilityChecker()
    email = {
        "id": "a11y-001",
        "body": "Please click here to view the report. The image shows our Q3 results which were absolutely fantastic and exceeded all expectations by a significant margin across every single department and business unit.",
        "html_body": '<img src="chart.png"> <table><tr><td>Data</td></tr></table> <p style="color: yellow; background: white">Important</p>',
        "to": ["team@co.com", "manager@co.com"]
    }
    print(json.dumps(checker.check_email(email), indent=2))
