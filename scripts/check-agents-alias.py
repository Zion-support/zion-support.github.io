"""Validate the public /agents/ compatibility alias, without network access."""

from html.parser import HTMLParser
from pathlib import Path
import re
import sys

TARGET = "/autonomous-ai-agents/"
CANONICAL = "https://ziontechgroup.com" + TARGET


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.canonicals = []
        self.refreshes = []
        self.robots = []
        self.links = []
        self.scripts = []
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonicals.append(attrs.get("href"))
        if tag == "meta" and attrs.get("http-equiv", "").lower() == "refresh":
            self.refreshes.append(attrs.get("content", ""))
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            self.robots.append(attrs.get("content", "").lower())
        if tag == "a":
            self.links.append(attrs.get("href"))
        if tag == "script":
            self.scripts.append(attrs.get("src", "inline"))


def check(root):
    root = Path(root)
    alias = root / "agents/index.html"
    if not alias.is_file():
        raise ValueError("Missing published alias: agents/index.html")
    page = Page(alias.read_text(encoding="utf-8"))
    if page.canonicals != [CANONICAL]:
        raise ValueError("Alias must have exactly the intended canonical URL")
    if len(page.refreshes) != 1 or not re.fullmatch(
        r"0\s*;\s*url\s*=\s*/autonomous-ai-agents/", page.refreshes[0], re.I
    ):
        raise ValueError("Alias must refresh immediately to the canonical hub")
    if TARGET not in page.links:
        raise ValueError("Missing accessible fallback link to the canonical hub")
    if len(page.robots) != 1 or "noindex" not in re.split(r"[\s,]+", page.robots[0]):
        raise ValueError("The compatibility alias must be noindex")
    if page.scripts:
        raise ValueError("The alias must not depend on JavaScript")
    target = root / TARGET.lstrip("/") / "index.html"
    if not target.is_file():
        raise ValueError("Canonical target is missing from the same artifact")
    target_page = Page(target.read_text(encoding="utf-8"))
    if target_page.refreshes or target_page.canonicals != [CANONICAL]:
        raise ValueError("Canonical target must be self-canonical, without a redirect loop")


if __name__ == "__main__":
    try:
        check(sys.argv[1] if len(sys.argv) > 1 else "public")
    except (OSError, ValueError) as error:
        print(f"FAIL agents alias: {error}", file=sys.stderr)
        sys.exit(1)
    print("PASS agents alias: published fallback and canonical target are valid")
