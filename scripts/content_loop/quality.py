"""Quality gates for SEO pages. Thin, stub, or hype copy never publishes."""

from __future__ import annotations

import json
import re
from html import unescape
from pathlib import Path

WORD_RE = re.compile(r"[A-Za-zÀ-ÿ0-9']+")
H2_RE = re.compile(r"<h2\b", re.I)
FAQ_RE = re.compile(r'class="faq-item"', re.I)
CANONICAL_RE = re.compile(r'rel="canonical"', re.I)
SCHEMA_RE = re.compile(r'"@type"\s*:\s*"BlogPosting"', re.I)
BOOK_RE = re.compile(r'href="/(book|discovery)/"', re.I)
DESC_RE = re.compile(r'<meta\s+name="description"\s+content="([^"]*)"', re.I)
INDEXABLE_RE = re.compile(r'name="robots"\s+content="[^"]*noindex', re.I)
STUB_MARKERS = (
    "temporarily unavailable",
    'http-equiv="refresh"',
    'content="0; url=',
)


def word_count(html: str) -> int:
    text = re.sub(r"<script[\s\S]*?</script>", " ", html, flags=re.I)
    text = re.sub(r"<style[\s\S]*?</style>", " ", text, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    return len(WORD_RE.findall(unescape(text)))


def load_config(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def evaluate_html(html: str, gates: dict) -> dict:
    issues = []
    words = word_count(html)
    if words < int(gates.get("min_words", 700)):
        issues.append(f"word_count {words} < {gates['min_words']}")
    if len(H2_RE.findall(html)) < int(gates.get("min_sections", 4)):
        issues.append("too few h2 sections")
    if len(FAQ_RE.findall(html)) < int(gates.get("min_faqs", 3)):
        issues.append("too few FAQs")
    if gates.get("require_canonical") and not CANONICAL_RE.search(html):
        issues.append("missing canonical")
    if gates.get("require_schema") and not SCHEMA_RE.search(html):
        issues.append("missing BlogPosting schema")
    if gates.get("require_cta_book") and not BOOK_RE.search(html):
        issues.append("missing /book/ or /discovery/ CTA")
    desc_match = DESC_RE.search(html)
    if not desc_match:
        issues.append("missing meta description")
    else:
        desc = unescape(desc_match.group(1))
        if len(desc) < int(gates.get("min_description", 110)):
            issues.append("meta description too short")
        if len(desc) > int(gates.get("max_description", 165)):
            issues.append("meta description too long")
    if INDEXABLE_RE.search(html):
        issues.append("noindex on a publish candidate")
    for marker in STUB_MARKERS:
        if marker.lower() in html.lower():
            issues.append(f"stub marker: {marker}")
    for needle in gates.get("forbid_substrings", []):
        if needle.lower() in html.lower():
            issues.append(f"forbidden copy: {needle}")
    internal = re.findall(r'href="(/[^"]+)"', html)
    unique_internal = {h for h in internal if not h.startswith("/blog/" + html[0:0])}
    if len(set(internal)) < int(gates.get("min_internal_links", 3)):
        issues.append("too few internal links")
    return {
        "ok": not issues,
        "issues": issues,
        "words": words,
        "internal_links": len(set(internal)),
        "unique_internal": len(unique_internal),
    }


def is_quality_post(html: str) -> bool:
    if any(m.lower() in html.lower() for m in STUB_MARKERS):
        return False
    if INDEXABLE_RE.search(html):
        return False
    return word_count(html) >= 500 and bool(SCHEMA_RE.search(html) or H2_RE.search(html))
