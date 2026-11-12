import requests
from bs4 import BeautifulSoup
BASE = "https://ziontechgroup.com/"
r = requests.get(BASE, timeout=15)
print("status:", r.status_code)
soup = BeautifulSoup(r.text, "html.parser")
links = soup.find_all("a", href=True)
print("a tags:", len(links))
for a in links[:20]:
    print(repr(a.get("href")))
