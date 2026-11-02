#!/usr/bin/env python3
"""Reconcile only reviewed app routes, after artifact rendering.

Preserve first occurrence and existing metadata across advertised children. New
entries omit lastmod: a build timestamp is not a content modification date.
"""
from pathlib import Path
from html.parser import HTMLParser
import re
import sys
import xml.etree.ElementTree as ET

ORIGIN = 'https://ziontechgroup.com'
NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
ROUTES = [f'/{prefix}{slug}' for prefix in ('', 'pt/', 'es/', 'fr/', 'de/')
          for slug in ('ai-meeting-notes-copilot/', 'apps/finops-scenario-estimator.html')]

ROUTES.append('/en/services/automation-vendor-risk-workflow/')

class Metadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals = []
        self.blocked = False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and 'canonical' in attrs.get('rel', '').lower().split():
            self.canonicals.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name', '').lower() in ('robots', 'googlebot'):
            self.blocked |= bool(set(re.split(r'[\s,]+', attrs.get('content', '').lower())) & {'noindex', 'none'})
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh':
            self.blocked = True

def reconcile(output):
    output = Path(output)
    index = ET.fromstring((output / 'sitemap.xml').read_text())
    if index.tag != NS + 'sitemapindex':
        raise ValueError('Expected sitemap index')
    files = []
    for loc in index.findall(NS+'sitemap/'+NS+'loc'):
        if not loc.text or not loc.text.startswith(ORIGIN + '/'):
            raise ValueError('Unexpected sitemap origin')
        relative = loc.text[len(ORIGIN)+1:]
        if '..' in relative.split('/') or '?' in relative or '#' in relative:
            raise ValueError('Unsafe sitemap path')
        file = output / relative
        if file not in files:
            files.append(file)
    appmap = output / 'apps/apps-sitemap.xml'
    if appmap not in files:
        raise ValueError('Apps sitemap must already be advertised')
    seen, changes, removed = set(), {}, 0
    for file in files:
        text = file.read_text()
        root = ET.fromstring(text)
        if root.tag != NS+'urlset':
            raise ValueError('Expected urlset: '+str(file))
        # Validate the unprefixed serialization before surgical byte-preserving edits.
        blocks = list(re.finditer(r'<url\b[^>]*>.*?</url>', text, re.S))
        if len(blocks) != len(root.findall(NS+'url')):
            raise ValueError('Unsupported sitemap serialization')
        def keep(match):
            nonlocal removed
            node = ET.fromstring('<urlset xmlns="'+NS[1:-1]+'">'+match[0]+'</urlset>')[0]
            loc = node.findtext(NS+'loc')
            if not loc:
                raise ValueError('Missing URL')
            if loc in seen:
                removed += 1
                return ''
            seen.add(loc)
            return match[0]
        changes[file] = re.sub(r'(?m)^[ \t]*\n', '', re.sub(r'<url\b[^>]*>.*?</url>', keep, text, flags=re.S))
    added = []
    for route in ROUTES:
        file = output / (route.lstrip('/') + ('index.html' if route.endswith('/') else ''))
        if not file.is_file():
            continue  # Optional renderer may not have run yet; never invent routes.
        meta = Metadata()
        meta.feed(file.read_text())
        canonical = ORIGIN + route
        if meta.blocked or meta.canonicals != [canonical]:
            raise ValueError('Reviewed route is not self-canonical/indexable: '+route)
        if canonical not in seen:
            added.append(canonical)
            seen.add(canonical)
    if added:
        changes[appmap] = changes[appmap].replace('</urlset>', ''.join(
            '  <url><loc>'+url+'</loc></url>\n' for url in added)+'</urlset>')
    # Validate all results before touching any file.
    for text in changes.values():
        ET.fromstring(text)
    for file, text in changes.items():
        if text != file.read_text():
            file.write_text(text)
    return {'added': added, 'duplicates_removed': removed}

if __name__ == '__main__':
    print(reconcile(sys.argv[1] if len(sys.argv)>1 else 'out'))
