#!/usr/bin/env python3
"""
Web Search Lead Strategies - High frequency, fast execution
Uses free tools to find leads via web search
"""
import urllib.request, urllib.parse, json, time, re

queries = [
    "site:linkedin.com \"looking for partnership\" 2024..2025",
    "site:crunchbase.com \"AI automation\" \"early stage\"",
    "site:angel.co \"seed funding\" \"AI\" \"seeking partnership\"",
    "\"business inquiry\" -jobs -career -recruiting",
    "inurl:contact \"looking for tech partner\" OR \"seeking collaboration\""
]

leads_found = []
for query in queries:
    try:
        encoded = urllib.parse.quote(query)
        url = f"https://duckduckgo.com/html?q={encoded}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req, timeout=5)
        html = resp.read().decode()
        # Extract emails from results
        emails = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', html)
        for email in set(emails[:5]):
            leads_found.append({'email': email, 'source': query[:30]})
    except Exception as e:
        print(f"Search error for '{query[:20]}...': {str(e)[:30]}")

print(f"✅ Web search lead scan - found {len(leads_found)} potential leads")
for lead in leads_found[:5]:
    print(f"   Web Lead: {lead['email']}")