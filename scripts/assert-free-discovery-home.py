"""Read-only source-copy guard for the approved free-Discovery homepage policy.
Uses Python's HTML parser, not browser-computed CSS or a full commercial audit.
"""
import re
import sys
from html.parser import HTMLParser

VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
SKIP = {'head', 'script', 'style', 'template', 'noscript'}
FREE = re.compile(r'\bfree\s+(?:ai\s+)?discovery\b|\bdiscovery\s+(?:gr[aá]tis|gratuito)\b', re.I)
CURRENCY = r'(?:US\s*\$|R\s*\$|USD|EUR|GBP|[$€£])\s*([0-9][0-9.,]*)'
PAID = re.compile(r'\bdiscovery\s*(?:(?:costs?|for|por|custa|from)\s*)?[:—–-]?\s*' + CURRENCY + r'|' + CURRENCY + r'\s*(?:for\s+|por\s+)?discovery\b', re.I)
NEGATED = re.compile(r'\bnot\s+free\s+(?:ai\s+)?discovery\b|\bdiscovery\s+(?:is\s+not|não\s+é|no\s+es)\s+(?:free|gr[aá]tis|gratuito)\b', re.I)

class CopyParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.visible, self.links, self.anchor = [], [], [], None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        style = re.sub(r'\s+', '', attrs.get('style', '')).lower()
        hidden = (any(h for _, h in self.stack) or tag in SKIP or 'hidden' in attrs or
                  attrs.get('aria-hidden', '').lower() == 'true' or
                  'display:none' in style or 'visibility:hidden' in style)
        if tag == 'a':
            assert self.anchor is None, 'Nested anchors require source review'
            self.anchor = [attrs.get('href', ''), []]
        if tag not in VOID:
            self.stack.append((tag, hidden))

    def handle_endtag(self, tag):
        if tag == 'a' and self.anchor is not None:
            self.links.append((self.anchor[0], ' '.join(self.anchor[1])))
            self.anchor = None
        for i in range(len(self.stack)-1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if not any(h for _, h in self.stack):
            self.visible.append(data)
            if self.anchor is not None:
                self.anchor[1].append(data)


def check(html):
    p = CopyParser()
    p.feed(html)
    p.close()
    assert p.anchor is None, 'Unclosed Discovery anchor'
    text = re.sub(r'\s+', ' ', ' '.join(p.visible))
    assert not NEGATED.search(text), 'Negated free-Discovery claim requires review'
    for match in PAID.finditer(text):
        assert not any(ch in '123456789' for amount in match.groups() if amount for ch in amount), 'Paid Discovery claim conflicts with approved free policy'
    assert any(href in ('/discovery/', 'https://ziontechgroup.com/discovery/') and FREE.search(re.sub(r'\s+', ' ', label)) for href, label in p.links), 'Missing visible free CTA to canonical Discovery route'
    return True

if __name__ == '__main__':
    try:
        with open(sys.argv[1], encoding='utf-8') as f:
            check(f.read())
        print('OK approved free Discovery homepage copy')
    except (AssertionError, OSError, IndexError) as exc:
        print('ERROR free Discovery policy: ' + str(exc), file=sys.stderr)
        sys.exit(1)
