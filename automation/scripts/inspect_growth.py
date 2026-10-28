#!/usr/bin/env python3
import json

d = json.load(open('/Users/miami2/zion.app/automation/reports/growth-engine-report-latest.json'))
print('growth_engine keys:', list(d.keys()))
stdout = d.get('stdout', '')
print('stdout length:', len(stdout))
enviado = stdout.count('email já enviado')
sem_email = stdout.count('sem email disponível')
print(f'email ja enviado: {enviado}')
print(f'sem email disponivel: {sem_email}')
print(f'total leads in stdout: {enviado + sem_email}')

# Now check the latest live-discovered-send-cycle
print("\n=== live-discovered-send-cycle-latest ===")
live = json.load(open('/Users/miami2/zion.app/automation/reports/live-discovered-send-cycle-latest.json'))
print(json.dumps(live, indent=2, ensure_ascii=False)[:3000])
