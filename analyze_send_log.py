import json

# Read the send log and extract unique companies
send_log_path = "/Users/miami2/zion.app/outreach-send-log-campaign.jsonl"
companies = {}
total_sends = 0

with open(send_log_path, 'r') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            entry = json.loads(line)
            total_sends += 1
            empresa = entry.get("empresa", "unknown")
            to_email = entry.get("to", "")
            domain = to_email.split('@')[-1] if '@' in to_email else 'unknown'
            
            if empresa not in companies:
                companies[empresa] = {
                    "domain": domain,
                    "emails": set(),
                    "count": 0,
                    "service": entry.get("service", "")
                }
            companies[empresa]["emails"].add(to_email)
            companies[empresa]["count"] += 1
        except:
            pass

# Convert sets to lists for JSON serialization
for k in companies:
    companies[k]["emails"] = list(companies[k]["emails"])

print(f"Total send log entries: {total_sends}")
print(f"Unique companies in send log: {len(companies)}")
print(f"\nTop companies by send count:")
sorted_cos = sorted(companies.items(), key=lambda x: x[1]["count"], reverse=True)
for name, data in sorted_cos[:15]:
    print(f"  {name}: {data['count']} sends, domain: {data['domain']}, emails: {len(data['emails'])}")
print(f"\nService breakdown:")
services = {}
for name, data in companies.items():
    svc = data["service"]
    services[svc] = services.get(svc, 0) + 1
for svc, count in sorted(services.items(), key=lambda x: x[1], reverse=True):
    print(f"  {svc}: {count} companies")
