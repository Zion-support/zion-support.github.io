#!/usr/bin/env python3
"""Wave 170 — 10 new AI services."""
import json

WAVE = 170
PREFIX = f"wave{WAVE}"

SERVICES = [
  {"id":"ai-medical-imaging-analysis","title":"AI Medical Imaging Analysis","description":"AI-powered analysis of X-rays, CT scans, MRIs, and pathology slides. Detect anomalies, assist radiologists, and prioritize urgent cases. FDA-cleared algorithms for common conditions.","features":["X-ray analysis (fractures, pneumonia)","CT scan anomaly detection","MRI analysis for neurological conditions","Pathology slide analysis","Urgent case prioritization","Integration with PACS/RIS systems","Radiologist workflow integration","Audit trail for compliance"],"benefits":["Reduce diagnostic time by 50%","Catch subtle findings humans may miss","Prioritize urgent cases automatically","Improve diagnostic consistency"],"pricing":{"basic":"$2,999/mo","pro":"$7,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-medical-imaging-analysis","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🩻","href":"/services/ai-medical-imaging-analysis","popular":True,"category":"ai","industry":"Healthcare"},
  {"id":"ai-drug-discovery-platform","title":"AI Drug Discovery Platform","description":"Accelerate drug discovery with AI-powered molecular simulation, target identification, and compound screening. Reduce time-to-candidate by 60%.","features":["Molecular dynamics simulation","Target protein identification","Compound virtual screening","ADMET prediction","Lead optimization suggestions","Integration with lab information systems","Patent landscape analysis","Collaboration tools for research teams"],"benefits":["Reduce drug discovery timeline by 60%","Lower R&D costs","Identify promising candidates faster","De-risk early-stage research"],"pricing":{"basic":"$4,999/mo","pro":"$14,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-drug-discovery-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"💊","href":"/services/ai-drug-discovery-platform","popular":False,"category":"ai","industry":"Pharmaceutical"},
  {"id":"ai-fraud-investigation-platform","title":"AI Fraud Investigation Platform","description":"Automate fraud investigation with AI. Link analysis, pattern detection, evidence compilation, and case management for financial institutions and insurance companies.","features":["Link analysis and network visualization","Transaction pattern detection","Evidence auto-compilation","Case management workflow","SAR/STR report generation","Integration with core banking","Regulatory compliance templates","Team collaboration tools"],"benefits":["Reduce investigation time by 70%","Detect complex fraud schemes","Automate regulatory reporting","Improve fraud detection rates"],"pricing":{"basic":"$2,499/mo","pro":"$7,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-fraud-investigation-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔍","href":"/services/ai-fraud-investigation-platform","popular":True,"category":"ai","industry":"Finance"},
  {"id":"ai-cybersecurity-operations","title":"AI Cybersecurity Operations Center","description":"AI-powered SOC that automates threat detection, investigation, and response. Reduce alert fatigue by 90% and mean time to respond by 80%.","features":["AI alert triage and correlation","Automated threat investigation","Playbook-driven response","Threat hunting automation","Integration with 200+ security tools","Executive security dashboards","Compliance reporting","Managed SOC option"],"benefits":["Reduce alert fatigue by 90%","Automate 80% of tier-1 investigations","Improve threat detection coverage","Scale security team without hiring"],"pricing":{"basic":"$3,999/mo","pro":"$12,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-cybersecurity-operations","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🛡️","href":"/services/ai-cybersecurity-operations","popular":True,"category":"ai","industry":"Cybersecurity"},
  {"id":"ai-supply-chain-risk-management","title":"AI Supply Chain Risk Management","description":"Monitor and mitigate supply chain risks with AI. Supplier risk scoring, disruption prediction, alternative sourcing recommendations, and real-time monitoring.","features":["Supplier risk scoring","Geopolitical risk monitoring","Disruption prediction","Alternative sourcing recommendations","Financial health monitoring","ESG compliance tracking","Real-time alerting","Scenario modeling"],"benefits":["Predict disruptions weeks in advance","Diversify supplier base proactively","Reduce supply chain costs","Improve resilience"],"pricing":{"basic":"$1,999/mo","pro":"$5,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-supply-chain-risk-management","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔗","href":"/services/ai-supply-chain-risk-management","popular":False,"category":"ai","industry":"Supply Chain"},
  {"id":"ai-talent-acquisition-platform","title":"AI Talent Acquisition Platform","description":"End-to-end AI-powered recruiting. Sourcing, screening, interview scheduling, and offer optimization. Reduce time-to-fill by 50% and improve quality of hire.","features":["AI candidate sourcing","Resume screening and ranking","Interview scheduling automation","Candidate engagement chatbot","Offer optimization analytics","Diversity and bias monitoring","Integration with ATS/CRM","Employer branding analytics"],"benefits":["Reduce time-to-fill by 50%","Improve quality of hire","Reduce recruiting costs","Enhance candidate experience"],"pricing":{"basic":"$799/mo","pro":"$2,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-talent-acquisition-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"👥","href":"/services/ai-talent-acquisition-platform","popular":True,"category":"ai","industry":"HR"},
  {"id":"ai-real-estate-valuation","title":"AI Real Estate Valuation Engine","description":"Automated property valuation using AI. Analyze comparable sales, market trends, property features, and neighborhood data for accurate valuations.","features":["Automated valuation model (AVM)","Comparable sales analysis","Market trend forecasting","Property condition assessment","Rent estimation","Investment risk scoring","Integration with MLS and county records","Portfolio valuation"],"benefits":["Instant property valuations","Improve appraisal accuracy","Identify investment opportunities","Scale valuation operations"],"pricing":{"basic":"$499/mo","pro":"$1,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-real-estate-valuation","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🏠","href":"/services/ai-real-estate-valuation","popular":False,"category":"ai","industry":"Real Estate"},
  {"id":"ai-content-moderation-platform","title":"AI Content Moderation Platform","description":"Real-time content moderation for user-generated content. Detect hate speech, violence, nudity, spam, and policy violations across text, images, and video.","features":["Text moderation (hate speech, harassment)","Image moderation (nudity, violence)","Video moderation (frame-by-frame)","Spam and bot detection","Custom policy rules","Human review queue","Analytics and reporting","API and SDK for integration"],"benefits":["Moderate content at scale","Reduce moderator workload by 80%","Consistent policy enforcement","Real-time protection"],"pricing":{"basic":"$599/mo","pro":"$1,799/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-content-moderation-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🛡️","href":"/services/ai-content-moderation-platform","popular":True,"category":"ai","industry":"Technology"},
  {"id":"ai-predictive-analytics-healthcare","title":"AI Predictive Analytics for Healthcare","description":"Predict patient outcomes, readmission risk, and disease progression with AI. Enable proactive care and reduce hospital readmissions by 30%.","features":["Readmission risk prediction","Disease progression modeling","Length of stay prediction","ICU deterioration alerts","Population health analytics","Integration with EHR systems","Clinical decision support","Outcome tracking and reporting"],"benefits":["Reduce readmissions by 30%","Enable proactive care","Improve patient outcomes","Optimize resource allocation"],"pricing":{"basic":"$2,499/mo","pro":"$7,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-predictive-analytics-healthcare","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🏥","href":"/services/ai-predictive-analytics-healthcare","popular":False,"category":"ai","industry":"Healthcare"},
  {"id":"ai-autonomous-vehicle-perception","title":"AI Autonomous Vehicle Perception System","description":"Computer vision and sensor fusion for autonomous vehicles. Object detection, lane tracking, pedestrian prediction, and real-time decision making.","features":["3D object detection","Lane and road boundary tracking","Pedestrian and cyclist prediction","Traffic sign and signal recognition","Sensor fusion (camera, LiDAR, radar)","Real-time processing (< 50ms)","Simulation environment","HD map integration"],"benefits":["Improve autonomous driving safety","Reduce perception latency","Handle edge cases with AI","Accelerate AV development"],"pricing":{"basic":"$9,999/mo","pro":"$29,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-autonomous-vehicle-perception","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🚗","href":"/services/ai-autonomous-vehicle-perception","popular":False,"category":"ai","industry":"Automotive"},
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
                             ('edtech','EdtechServices')]:
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

# Add spreads to allServices
spread_lines = []
for var_name in wave_arrays:
    spread_lines.append(f"  ...{var_name},")

insert_after = "  ...wave169SecurityServices,\n"
new_spreads = ''.join(l + '\n' for l in spread_lines)
content = content.replace(insert_after, insert_after + new_spreads)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(content)

print(f"TS arrays: {', '.join(wave_arrays.keys())}")
print("Done!")
