#!/usr/bin/env python3
"""
Sitemap maintenance for zion-pages-repo.
- Deduplicate <loc> entries in sitemap.xml and public/sitemap.xml
- Validate XML well-formedness
- Report stats and missing top-value routes
Usage:
  python3 scripts/sitemap_maintain.py
  python3 scripts/sitemap_maintain.py --dry-run
"""
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SITEMAP_PATHS = [ROOT / 'sitemap.xml', ROOT / 'public' / 'sitemap.xml']
TOP_MISSING = [
    '/industries/',
    '/free-tools-hub/',
    '/consultation/',
    '/status/',
    '/configurator/',
    '/dashboard/',
    '/docs/',
    '/services/cloud/',
    '/services/security/',
    '/services/data/',
]


def dedupe_sitemap(path: Path) -> dict:
    if not path.exists():
        return {'path': str(path), 'status': 'missing'}
    txt = path.read_text(encoding='utf-8', errors='ignore')
    blocks = re.findall(r'(<url>.*?</url>)', txt, re.DOTALL)
    seen = set()
    unique = []
    for block in blocks:
        m = re.search(r'<loc>(.*?)</loc>', block)
        if not m:
            continue
        loc = m.group(1).strip()
        if loc in seen:
            continue
        seen.add(loc)
        unique.append(block)
    before = len(blocks)
    after = len(unique)
    result = {
        'path': str(path),
        'before': before,
        'after': after,
        'removed': before - after,
        'status': 'ok' if before == after else 'fixed',
    }
    if before != after:
        new_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(unique) + '\n</urlset>\n'
        path.write_text(new_xml, encoding='utf-8')
    return result


def validate_xml(path: Path) -> dict:
    try:
        ET.parse(path)
        return {'path': str(path), 'valid': True}
    except Exception as e:
        return {'path': str(path), 'valid': False, 'error': str(e)}


def check_missing(path: Path) -> list:
    if not path.exists():
        return []
    txt = path.read_text(encoding='utf-8', errors='ignore')
    locs = set(re.findall(r'<loc>(.*?)</loc>', txt))
    return [r for r in TOP_MISSING if r not in locs]


def main() -> int:
    dry_run = '--dry-run' in sys.argv
    report = {'dry_run': dry_run, 'sitemaps': [], 'missing': []}
    for p in SITEMAP_PATHS:
        r = dedupe_sitemap(p)
        report['sitemaps'].append(r)
        if not dry_run:
            vr = validate_xml(p)
            r['xml_valid'] = vr.get('valid')
            r['xml_error'] = vr.get('error')
        report['missing'].append({'path': str(p), 'missing_routes': check_missing(p)})
    for r in report['sitemaps']:
        print(r)
    for m in report['missing']:
        print(m)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
