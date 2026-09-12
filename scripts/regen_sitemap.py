#!/usr/bin/env python3
"""Regenerate sitemap.xml from all pages in public/ directory."""
import os
import html
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SITEMAP_PATH = PUBLIC / "sitemap.xml"
ROOT_SITEMAP = ROOT / "sitemap.xml"
SITE = "https://ziontechgroup.com"

def scan_pages():
    """Yield all URL paths that have index.html."""
    if (PUBLIC / "index.html").exists():
        yield "/"
    for root, dirs, files in os.walk(PUBLIC):
        if "index.html" in files:
            rel = os.path.relpath(root, PUBLIC)
            if rel == ".":
                continue
            yield "/" + rel.replace(os.sep, "/") + "/"

def get_lastmod(url_path):
    rel = url_path.strip("/")
    fpath = PUBLIC / rel / "index.html" if rel else PUBLIC / "index.html"
    if fpath.exists():
        mtime = fpath.stat().st_mtime
        dt = datetime.fromtimestamp(mtime, tz=timezone.utc)
        return dt.strftime("%Y-%m-%dT%H:%M:%S.000Z")
    return "2026-09-08T00:00:00.000Z"

def priority_for(path):
    if path == "/":
        return "1.0"
    depth = path.count("/")
    if depth <= 2:
        return "0.8"
    return "0.6"

def build_sitemap(paths):
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for path in sorted(paths):
        url = SITE + path
        # Escape XML special chars in URL (& etc)
        url_escaped = html.escape(url, quote=True)
        lastmod = get_lastmod(path)
        prio = priority_for(path)
        lines.append(f"<url><loc>{url_escaped}</loc><lastmod>{lastmod}</lastmod><changefreq>weekly</changefreq><priority>{prio}</priority></url>")
    lines.append("</urlset>")
    return "\n".join(lines) + "\n"

def main():
    PUBLIC.mkdir(exist_ok=True)
    paths = list(scan_pages())
    print(f"Found {len(paths)} pages on disk")
    xml = build_sitemap(paths)
    SITEMAP_PATH.write_text(xml, encoding="utf-8")
    ROOT_SITEMAP.write_text(xml, encoding="utf-8")
    print(f"Written sitemap.xml with {len(paths)} URLs")

if __name__ == "__main__":
    main()
