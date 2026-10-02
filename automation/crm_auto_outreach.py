#!/usr/bin/env python3
"""Wrapper: delegates to send_cold_outreach_v2.py and writes a JSON summary report."""
import json, subprocess, sys, re
from pathlib import Path

SCRIPT = Path(__file__).parent / "send_cold_outreach_v2.py"
REPORT = Path(__file__).parent / "reports" / "crm-auto-outreach-report.json"

def main():
    r = subprocess.run([sys.executable, str(SCRIPT)], capture_output=True, text=True, timeout=300)
    print(r.stdout)
    if r.stderr:
        print("STDERR:", r.stderr, file=sys.stderr)

    # Extract summary from stdout
    total = sent = skipped = errors = 0
    source = "unknown"
    send_enabled = False

    # Source
    m = re.search(r"Fonte utilizada:\s*(.+)", r.stdout)
    if m:
        src = m.group(1).strip()
        if "zion_leads_free" in src:
            source = str(Path(src).name)
        elif "outreach_ready_canonical" in src:
            source = "lead-crm/outreach_ready_canonical.json"
        else:
            source = src

    # Counts from RESUMO block
    m = re.search(r"Total de leads processados\s*:\s*(\d+)", r.stdout)
    if m: total = int(m.group(1))
    m = re.search(r"Enviados com sucesso\s*:\s*(\d+)", r.stdout)
    if m: sent = int(m.group(1))
    m = re.search(r"Pulados\s*\(sem email/contato\):\s*(\d+)", r.stdout)
    if m: skipped = int(m.group(1))
    m = re.search(r"Falhados\s*:\s*(\d+)", r.stdout)
    if m: errors = int(m.group(1))

    # send_enabled: any "✅ Enviado" in output
    send_enabled = "✅ Enviado" in r.stdout

    report = {
        "source": source,
        "leads_processed": total,
        "sent": sent,
        "skipped": skipped,
        "errors": errors,
        "send_enabled": send_enabled,
    }

    REPORT.parent.mkdir(parents=True, exist_ok=True)
    with open(REPORT, "w") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    print(f"\nReport written to {REPORT}")

if __name__ == "__main__":
    main()
