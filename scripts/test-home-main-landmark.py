#!/usr/bin/env python3
"""Read-only landmark checks; optional baseline verifies exact wrapper-only preservation.
Usage: python3 scripts/test-home-main-landmark.py [homepage] [baseline]
"""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=False)
        self.hrefs, self.ids, self.mains = [], [], []
        self.depth = self.h1_inside = self.footer_inside = self.nav_inside = 0
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'href' in attrs: self.hrefs.append(attrs['href'])
        if 'id' in attrs: self.ids.append(attrs['id'])
        if tag == 'main':
            self.mains.append(attrs)
            self.depth += 1
        if tag == 'h1' and self.depth: self.h1_inside += 1
        if tag == 'footer' and self.depth: self.footer_inside += 1
        if tag == 'nav' and self.depth: self.nav_inside += 1
    def handle_endtag(self, tag):
        if tag == 'main': self.depth -= 1

def verify(data, baseline=None):
    text = data.decode('utf-8')
    page = Page(text)
    assert len(page.mains) == 1, 'Expected exactly one main landmark'
    assert page.depth == 0, 'Unbalanced main landmark'
    assert page.mains[0].get('id') == 'main', 'Expected main ID'
    assert page.mains[0].get('tabindex') == '-1', 'Expected programmatic focus target'
    assert page.h1_inside == 1, 'Expected one H1 in main'
    assert page.footer_inside == 0, 'Footer must remain outside main'
    assert page.nav_inside == 0, 'Top navigation must remain outside main'
    assert len(page.ids) == len(set(page.ids)), 'Duplicate IDs'
    if baseline is not None:
        nl = b'\r\n' if b'\r\n' in baseline else b'\n'
        opening = nl + b'<main id="main" tabindex="-1">'
        closing = b'</main>' + nl + b'<footer class="site-foot">'
        assert data.count(opening) == data.count(closing) == 1
        restored = data.replace(opening, b'', 1).replace(closing, b'<footer class="site-foot">', 1)
        assert restored == baseline, 'Non-wrapper bytes changed (including line endings)'
        old = Page(baseline.decode('utf-8'))
        assert Counter(page.hrefs) == Counter(old.hrefs), 'Existing hrefs changed'
        assert Counter(page.ids) == Counter(old.ids) + Counter(['main']), 'Existing IDs changed'
    return True

if __name__ == '__main__':
    home = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / 'public/index.html'
    baseline = Path(sys.argv[2]).read_bytes() if len(sys.argv) > 2 else None
    verify(home.read_bytes(), baseline)
    print('PASS homepage main landmark' + (' and byte-exact baseline preservation' if baseline is not None else ''))
