import json
import re

with open('/Users/miami2/.hermes/cache/spillover/call_301e82cb7bce42d8ba2e3e34.txt') as f:
    raw = f.read()

# The file may be JSON with escaped content
try:
    data = json.loads(raw)
    out = data.get('output', '')
except json.JSONDecodeError:
    # Might be the raw output directly
    out = raw

lines = out.split('\n')
print(f"Total lines in output: {len(lines)}")
print("=== LAST 50 LINES ===")
for line in lines[-50:]:
    print(line)
print("\n=== PATTERN MATCHES (summary/forge/merge/novo) ===")
for i, line in enumerate(lines):
    lower = line.lower()
    if any(kw in lower for kw in ['summary','total','forged','novo','merged','merge','final','direto','definitivo','consulta','pagina','page','query','busca','forjar','forge','gerado',' Gerou']):
        print(f"{i}: {line}")
