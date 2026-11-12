import requests
from bs4 import BeautifulSoup

routes = [
    ('/public-roadmap', 'Public Roadmap'),
    ('/status-page', 'Status Page'),
    ('/use-cases', 'Use Cases'),
    ('/solutions/healthcare', 'Healthcare Solution'),
    ('/industries/financial-services', 'Financial Services'),
    ('/free-consultation', 'Free Consultation'),
    ('/tools/phishing-analyzer', 'Phishing Analyzer'),
]

for path, label in routes:
    url = f'https://ziontechgroup.com{path}'
    try:
        r = requests.get(url, timeout=20, allow_redirects=True)
        soup = BeautifulSoup(r.text, 'html.parser')
        title = soup.title.string.strip() if soup.title and soup.title.string else 'NO TITLE'
        canonical = ''
        for l in soup.find_all('link', rel='canonical'):
            canonical = l.get('href', '')
        h1 = soup.find('h1')
        h1_text = h1.get_text(strip=True) if h1 else 'NO H1'
        print(f'--- {label} ({path}) ---')
        print(f'  title: {title}')
        print(f'  canonical: {canonical}')
        print(f'  h1: {h1_text}')
        print(f'  size: {len(r.text)}B | status: {r.status_code}')
        print()
    except Exception as e:
        print(f'ERROR {path}: {e}')
