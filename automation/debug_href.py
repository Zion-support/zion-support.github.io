import requests
BASE = "https://ziontechgroup.com/"
r = requests.get(BASE, timeout=15)
print("status:", r.status_code)
print("len:", len(r.text))
# Find all href occurrences
import re
hrefs = re.findall(r'href=["\']([^"\']+)["\']', r.text[:3000])
print("href count:", len(hrefs))
for h in hrefs[:20]:
    print(repr(h))
