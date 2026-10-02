#!/usr/bin/env python3
import json

for name in ['outreach_send_queue_verified.json', 'outreach_send_queue.json', 'outreach_send_package.json']:
    path = f"/Users/miami2/zion.app/automation/data/{name}"
    d = json.load(open(path))
    print(f"\n=== {name} ===")
    print("top keys:", list(d.keys()))
    summary = {k: (v if not isinstance(v, list) else f"list[{len(v)}]") for k, v in d.items()}
    print(json.dumps(summary, indent=2, ensure_ascii=False))

    # Try to find items list
    for key in ['items', 'leads', 'queue']:
        if key in d and isinstance(d[key], list):
            print(f"\n{key} count: {len(d[key])}")
            if d[key]:
                print("sample item:", json.dumps(d[key][0], indent=2, ensure_ascii=False)[:800])
            break
