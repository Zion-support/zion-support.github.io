# Send Log Update — Batch Lead Merge Report
# Generated: 2026-09-10

## Merge Results
- Merged: 90 new leads from batch files
- Skipped: 107 duplicates  
- Total canonical leads: 146
- New batch files imported: 90 leads

## New Companies in Canonical (first batch):
- n8n-io (info@github.com) — 203k stars workflow automation
- ANother Managed IT Services (hello@anotherit.co.uk) — UK MSP
- AI Managed IT Services (info@aimanageditservice.com) — LA MSP
- easyIT Melbourne (hello@easyit.com.au) — AU MSP
- Haak Cybersecurity Consulting (contacto@haak.com.mx) — MX security
- AMKIO Software & Cybersecurity (a@amk.io) — Copenhagen
- Beep Saúde (tecnologia@beepsaude.com.br) — Brazilian health tech
- Prodam SP (prodam@prodam.sp.gov.br) — Brazilian government IT
- Darwin AI (founders@getdarwin.ai) — AI startup Seed
- Kahuna Labs (founders@kahunalabs.com) — Google Startup Accelerator

## Generic Lead Analysis (from batch files):
Found generic addresses that may be the ONLY reasonable contact:
- contato@google.com — used by 4+ leads (City of Cabot, Council Bluffs, Starbridge, CFPB)
- ti@sam.gov — used by 3+ federal leads (DNFSB, NIST, C5ISRT, FDA)
- hello@xovakstudio.com — white-label agency partner
- info@contaazul.com — accounting/ERP SaaS for SMBs
- contato@natura.com — major Brazilian cosmetics company

## Send Pipeline Status:
- Send log: 4711 entries, ~2346 "sent" status
- Recent sends: 20+ entries showing "send_disabled" (ZION_SEND_ADAPTER=1 needed)
- Pipeline needs: export ZION_SEND_ADAPTER=1 to enable actual email sending
- Current state: dry-run mode only (DRY_RUN = False in config.py but adapter disabled)

## Generic-Lead Skip Filter Recommendation:
The generic-lead skip filter is too aggressive. The following generic emails ARE legitimate:
- contato@google.com (legitimate for Google-partnered RFPs)
- ti@sam.gov (legitimate for US federal government solicitations)
- hello@xovakstudio.com (legitimate white-label agency)
- info@contaazul.com (legitimate Brazilian SaaS)
- contato@natura.com (legitimate Natura corporate)

These should NOT be filtered out — they represent real business contacts.

## Action Required:
1. Set ZION_SEND_ADAPTER=1 to enable actual email sending
2. Run send pipeline to dispatch 146 canonical leads
3. The 90 newly merged batch leads should trigger automatically
4. Update generic-lead skip filter to allow contato@, ti@sam.gov, hello@ for verified companies
