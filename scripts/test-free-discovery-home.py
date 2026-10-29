"""Scoped policy parser regression cases; no network or production writes."""
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location('free_guard', Path(__file__).with_name('assert-free-discovery-home.py'))
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)
cta = '<a href="/discovery/">Free Discovery</a>'
cases = [
    (True, cta),
    (True, '<a href="https://ziontechgroup.com/discovery/"><b>Free</b> Discovery</a>'),
    (True, '<a href="/discovery/">Discovery gratuito</a>'),
    (True, '<a href="/discovery/">Discovery gr&#225;tis</a>'),
    (True, '<a href="/discovery/">Free&nbsp;AI Discovery</a>'),
    (True, cta + '<p>Starter $99</p>'),
    (True, cta + '<!-- Discovery $99 -->'),
    (True, cta + '<p>Discovery $0</p>'),
    (False, '<p>Free Discovery</p>'),
    (False, '<a href="https://example.com/discovery/">Free Discovery</a>'),
    (False, '<!--' + cta + '-->'),
    (False, '<script>' + cta + '</script>'),
    (False, '<style>' + cta + '</style>'),
    (False, '<template>' + cta + '</template>'),
    (False, '<head>' + cta + '</head>'),
    (False, '<div hidden>' + cta + '</div>'),
    (False, '<div aria-hidden="true">' + cta + '</div>'),
    (False, '<div style="display: none">' + cta + '</div>'),
    (False, '<div style="visibility:hidden">' + cta + '</div>'),
    (False, cta + '<p>Discovery $99</p>'),
    (False, cta + '<p>Discovery <b>USD</b> 99</p>'),
    (False, cta + '<p>Discovery &#36;99</p>'),
    (False, cta + '<p>R$ 99 por Discovery</p>'),
    (False, cta + '<p>Not Free Discovery</p>'),
    (False, '<a href="/discovery/">Free Discovery'),
    (False, '<a href="/discovery/">Free <a href="/">Discovery</a></a>'),
]
for index, (expected, body) in enumerate(cases, 1):
    try:
        actual = guard.check('<html><body>' + body + '</body></html>')
    except AssertionError:
        actual = False
    assert actual == expected, f'Policy case {index}: expected {expected}, got {actual}'
print(f'PASS free Discovery policy: {len(cases)} parser cases; no browser or full pricing audit claim.')
