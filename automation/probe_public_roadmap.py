import requests, re

url = "https://ziontechgroup.com/public-roadmap/"
r = requests.get(url, allow_redirects=True, timeout=20, headers={"User-Agent":"Mozilla/5.0"})
print("final:", r.url, "status:", r.status_code)
html = r.text
print("--- title ---", re.search(r'<title>(.*?)</title>', html, re.S).group(1).strip())
print("--- meta description ---", re.search(r'<meta name="description" content="([^"]*)"', html))
print("--- robots ---", re.search(r'<meta name="robots" content="([^"]*)"', html))
print("--- refresh ---", re.search(r'<meta http-equiv="refresh"[^>]*>', html))
print("--- canonical ---", re.search(r'<link rel="canonical" href="([^"]*)"', html))
print("--- h1 ---", re.search(r'<h1[^>]*>(.*?)</h1>', html, re.S))
print("--- body snippet ---")
m = re.search(r'<body[^>]*>(.*?)</body>', html, re.S)
print((m.group(1)[:800] if m else "no body"))
