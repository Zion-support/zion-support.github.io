#!/usr/bin/env python3
"""Offline source guard; never decode or rewrite a broken homepage automatically."""
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

FREE = re.compile(r"\b(?:free|gr[aá]tis|gratuit[oaes]*)\b", re.I)
PRICE = re.compile(r"(?:\$|€|£|USD\s*|EUR\s*)\s*[1-9]\d*(?:[.,]\d+)?", re.I)
DISCOVERY_PRICE = re.compile(r"\bdiscovery\s*(?:[:—–-]\s*)?(?:USD\s*)?\$\s*[1-9]\d*", re.I)

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.anchor = None
        self.links = []
        self.visible = []
        self.hidden = 0

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.hidden += 1
        if tag == 'a':
            self.anchor = [dict(attrs).get('href', ''), []]

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.hidden = max(0, self.hidden - 1)
        if tag == 'a' and self.anchor is not None:
            self.links.append((self.anchor[0], ' '.join(self.anchor[1])))
            self.anchor = None

    def handle_data(self, data):
        if not self.hidden:
            self.visible.append(data)
            if self.anchor is not None:
                self.anchor[1].append(data)

def inspect_source(source):
    errors = []
    try:
        text = source.decode('utf-8-sig', errors='strict')
    except UnicodeDecodeError:
        return ['source is not valid UTF-8']
    if not re.match(r'\s*<!doctype\s+html\s*>', text, re.I):
        errors.append('source must start with an HTML doctype, not encoded text')
    for tag in ('html', 'head', 'body'):
        if not re.search(r'<' + tag + r'(?:\s|>)', text, re.I) or not re.search(r'</' + tag + r'\s*>', text, re.I):
            errors.append('missing document boundary: ' + tag)
    if '\ufffd' in text:
        errors.append('replacement characters found; recover canonical source first')
    page = Page()
    try:
        page.feed(text)
        page.close()
    except Exception as exc:
        errors.append('HTML parsing failed: ' + str(exc))
    links = [(href, label) for href, label in page.links if urlsplit(href).path.rstrip('/') == '/discovery']
    if not links:
        errors.append('missing /discovery/ call to action')
    elif not any(FREE.search(label) for _, label in links):
        errors.append('Discovery call to action must explicitly say free')
    if any(PRICE.search(label) for _, label in links):
        errors.append('nonzero price on Discovery call to action')
    if DISCOVERY_PRICE.search(' '.join(page.visible)):
        errors.append('nonzero Discovery price marker')
    return errors

def main(argv=None):
    args = sys.argv[1:] if argv is None else argv
    path = Path(args[0]) if args else Path(__file__).resolve().parents[1] / 'index.html'
    try:
        errors = inspect_source(path.read_bytes())
    except OSError as exc:
        errors = ['cannot read source: ' + str(exc)]
    for error in errors:
        print('FAIL: ' + error, file=sys.stderr)
    if errors:
        return 1
    print('PASS: HTML source and free Discovery CTA checks (not a delivery or live-site test)')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
