#!/usr/bin/env python3
"""Wave 173 — 10 new services."""
import json

WAVE = 173
PREFIX = f"wave{WAVE}"

SERVICES = [
  {"id":"ai-voice-assistant-builder","title":"AI Voice Assistant Builder Platform","description":"Build custom voice assistants for call centers, smart devices, and customer service. No-code dialog builder, NLU engine, and multi-channel deployment.","features":["No-code dialog builder","Natural language understanding","Multi-language support (30+)","Integration with telephony (Twilio, Vonage)","Analytics and call analytics","Custom voice cloning","Smart device integration","A/B testing for dialog flows"],"benefits":["Build voice assistants without coding","Reduce call center costs by 50%","Deploy across channels instantly","Continuous improvement with analytics"],"pricing":{"basic":"$499/mo","pro":"$1,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-voice-assistant-builder","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🗣️","href":"/services/ai-voice-assistant-builder","popular":True,"category":"ai","industry":"Technology"},
  {"id":"ai-knowledge-management-platform","title":"AI Knowledge Management Platform","description":"Enterprise knowledge management with AI-powered search, auto-tagging, and expert identification. Capture, organize, and surface institutional knowledge.","features":["AI-powered search across all sources","Auto-tagging and classification","Expert identification","Knowledge gap analysis","Integration with Confluence, SharePoint, Slack","Knowledge verification workflows","Analytics and usage insights","Mobile access"],"benefits":["Find knowledge 10x faster","Identify subject matter experts","Prevent knowledge loss","Improve decision-making"],"pricing":{"basic":"$599/mo","pro":"$1,799/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-knowledge-management-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🧠","href":"/services/ai-knowledge-management-platform","popular":False,"category":"ai","industry":"Technology"},
  {"id":"ai-predictive-maintenance-aviation","title":"AI Predictive Maintenance for Aviation","description":"Predict aircraft component failures before they happen. Sensor data analysis, flight data monitoring, and maintenance scheduling for airlines and MRO providers.","features":["Flight data monitoring","Component failure prediction","Remaining useful life estimation","Maintenance scheduling optimization","Integration with airline MRO systems","Regulatory compliance (FAA, EASA)","Fleet-wide analytics","Mobile maintenance app"],"benefits":["Reduce AOG events by 40%","Optimize maintenance costs","Improve flight safety","Meet regulatory requirements"],"pricing":{"basic":"$4,999/mo","pro":"$14,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-predictive-maintenance-aviation","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"✈️","href":"/services/ai-predictive-maintenance-aviation","popular":False,"category":"ai","industry":"Aviation"},
  {"id":"ai-digital-twin-manufacturing","title":"AI Digital Twin for Manufacturing","description":"Create digital twins of manufacturing processes for simulation, optimization, and predictive analytics. Reduce downtime and improve throughput.","features":["Process digital twin creation","Real-time simulation","What-if scenario analysis","Quality prediction","Energy optimization","Integration with MES/ERP","3D visualization","Predictive analytics"],"benefits":["Optimize production processes","Reduce downtime by 30%","Improve product quality","Enable data-driven decisions"],"pricing":{"basic":"$3,999/mo","pro":"$12,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-digital-twin-manufacturing","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🏭","href":"/services/ai-digital-twin-manufacturing","popular":True,"category":"ai","industry":"Manufacturing"},
  {"id":"ai-compliance-document-generator","title":"AI Compliance Document Generator","description":"Auto-generate compliance documents for GDPR, HIPAA, SOC2, PCI-DSS, and industry-specific regulations. Keep policies current with regulatory change tracking.","features":["Auto-generate policies and procedures","Regulatory change tracking","Multi-framework support","Approval workflows","Version control and audit trail","Integration with GRC platforms","Custom templates","Employee acknowledgment tracking"],"benefits":["Reduce compliance document creation time by 90%","Stay current with regulatory changes","Ensure consistent policy language","Automate compliance workflows"],"pricing":{"basic":"$799/mo","pro":"$2,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-compliance-document-generator","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"📋","href":"/services/ai-compliance-document-generator","popular":False,"category":"ai","industry":"Compliance"},
  {"id":"it-devsecops-platform","title":"DevSecOps Platform","description":"Integrate security into CI/CD pipelines. Automated security scanning, compliance gates, and developer-friendly security tools for shift-left security.","features":["SAST/DAST scanning in CI/CD","Container image scanning","Infrastructure as Code scanning","Secret detection","Compliance gates","Developer-friendly remediation","Integration with GitHub, GitLab, Jenkins","Security metrics dashboard"],"benefits":["Shift security left","Reduce vulnerabilities in production","Automate compliance checking","Developer-friendly security"],"pricing":{"basic":"$999/mo","pro":"$2,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/it-devsecops-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔐","href":"/services/it-devsecops-platform","popular":True,"category":"it","industry":"Technology"},
  {"id":"it-data-center-management","title":"AI Data Center Management Platform","description":"AI-powered data center management with capacity planning, energy optimization, and predictive maintenance for data center infrastructure.","features":["Capacity planning AI","Energy optimization (PUE reduction)","Predictive maintenance for cooling/power","Asset lifecycle management","Integration with DCIM tools","Real-time environmental monitoring","Automated incident response","Sustainability reporting"],"benefits":["Reduce energy costs by 20%","Optimize capacity utilization","Prevent infrastructure failures","Meet sustainability goals"],"pricing":{"basic":"$2,999/mo","pro":"$8,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/it-data-center-management","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🏢","href":"/services/it-data-center-management","popular":False,"category":"it","industry":"Technology"},
  {"id":"security-application-security-testing","title":"Application Security Testing Platform","description":"Comprehensive application security testing with SAST, DAST, SCA, and API security testing. Unified platform for DevSecOps teams.","features":["Static application security testing (SAST)","Dynamic application security testing (DAST)","Software composition analysis (SCA)","API security testing","Interactive application security testing (IAST)","Integration with CI/CD pipelines","Vulnerability prioritization","Remediation guidance"],"benefits":["Find vulnerabilities early","Unified security testing platform","Developer-friendly remediation","Automate security in CI/CD"],"pricing":{"basic":"$799/mo","pro":"$2,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/security-application-security-testing","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔍","href":"/services/security-application-security-testing","popular":True,"category":"security","industry":"Technology"},
  {"id":"security-privacy-management","title":"Privacy Management Platform","description":"Comprehensive privacy management for GDPR, CCPA, LGPD, and global privacy regulations. Data mapping, consent management, and DSR automation.","features":["Data mapping and inventory","Consent management","Data subject request (DSR) automation","Privacy impact assessments","Cookie consent management","Integration with marketing and analytics tools","Breach notification automation","Global regulation coverage"],"benefits":["Automate privacy compliance","Reduce DSR processing time by 80%","Manage consent across channels","Prevent privacy violations"],"pricing":{"basic":"$599/mo","pro":"$1,799/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/security-privacy-management","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔒","href":"/services/security-privacy-management","popular":False,"category":"security","industry":"Technology"},
  {"id":"micro-saas-customer-portal","title":"PortalPro — Customer Portal Micro-SaaS","description":"Branded customer portal for SaaS companies. Ticket management, knowledge base, billing, and account settings in one customizable portal.","features":["Branded customer portal","Ticket management","Knowledge base integration","Billing and subscription management","Account settings","Custom workflows","Integration with Stripe, Zendesk, Intercom","White-label customization"],"benefits":["Reduce support tickets by 30%","Improve customer self-service","Branded customer experience","Unified customer view"],"pricing":{"basic":"$49/mo","pro":"$149/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/micro-saas-customer-portal","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🌐","href":"/services/micro-saas-customer-portal","popular":True,"category":"micro-saas","industry":"SaaS"},
]

# Categorize
by_cat = {}
for s in SERVICES:
    c = s.get('category','?')
    by_cat.setdefault(c, []).append(s)

for c, svcs in by_cat.items():
    print(f"  {c}: {len(svcs)}")

# 1. Add to JSON
with open('app/data/servicesData.json') as f:
    existing = json.load(f)
existing_ids = {s['id'] for s in existing}
added = 0
for s in SERVICES:
    if s['id'] not in existing_ids:
        existing.append(s)
        added += 1
with open('app/data/servicesData.json', 'w') as f:
    json.dump(existing, f, indent=2)
print(f"JSON: +{added} services (total: {len(existing)})")

# 2. Generate TS entries
def make_ts_entry(s, last=False):
    comma = '' if last else ','
    return f"""  {{
    id: '{s['id']}',
    title: '{s['title']}',
    description: '{s['description']}',
    features: {json.dumps(s['features'])},
    benefits: {json.dumps(s['benefits'])},
    pricing: {json.dumps(s['pricing'])},
    contactInfo: {json.dumps(s['contactInfo'])},
    icon: '{s['icon']}', href: '{s['href']}', popular: {str(s.get('popular', False)).lower()}, category: '{s['category']}', industry: '{s['industry']}',
  }}{comma}"""

def build_entries(svcs):
    return '\n'.join(make_ts_entry(s, last=(i==len(svcs)-1)) for i,s in enumerate(svcs))

# Build wave arrays
wave_arrays = {}
for cat_key, var_suffix in [('ai','AiServices'),('it','ItServices'),('micro-saas','MicroSaasServices'),
                             ('security','SecurityServices'),('cloud','CloudServices'),
                             ('data','DataServices'),('automation','AutomationServices'),
                             ('healthcare-it','HealthcareItServices'),('fintech','FintechServices'),
                             ('retail-tech','RetailTechServices'),('manufacturing-tech','ManufacturingTechServices'),
                             ('edtech','EdtechServices'),('agritech','AgritechServices'),
                             ('construction-tech','ConstructionTechServices'),('energy-tech','EnergyTechServices'),
                             ('logistics-tech','LogisticsTechServices'),('cybersecurity','CybersecurityServices')]:
    svcs = by_cat.get(cat_key, [])
    if svcs:
        wave_arrays[f"{PREFIX}{var_suffix}"] = svcs

# Write to TS file
with open('app/data/servicesData.ts') as f:
    content = f.read()

# Insert before allServices
wave_ts = ""
for var_name, svcs in wave_arrays.items():
    entries = build_entries(svcs)
    wave_ts += f"\nexport const {var_name}: Service[] = [\n{entries}\n];\n\n"

all_services_marker = "\nexport const allServices: Service[] = ["
content = content.replace(all_services_marker, wave_ts + all_services_marker)

# Add spreads
spread_lines = [f"  ...{n}," for n in wave_arrays]
insert_after = "  ...wave172DataServices,\n"
new_spreads = ''.join(l + '\n' for l in spread_lines)
content = content.replace(insert_after, insert_after + new_spreads)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(content)

print(f"TS arrays: {', '.join(wave_arrays.keys())}")
print("Done!")
