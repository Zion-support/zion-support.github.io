#!/usr/bin/env python3
import json
from pathlib import Path
p = Path("/Users/miami2/zion.app/automation/data/zion_leads_free.json")
if p.exists():
    d = json.loads(p.read_text())
    leads = d.get("leads", d) if isinstance(d, dict) else d
    print(f"existing_pool: {len(leads)}")
else:
    print("existing_pool: 0 (file not found)")
