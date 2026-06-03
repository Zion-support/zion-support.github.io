#!/usr/bin/env python3
"""Wave 169 — 15 new services."""
import json

WAVE = 169
PREFIX = f"wave{WAVE}"

SERVICES = [
  {"id":"ai-legal-document-analysis","title":"AI Legal Document Analysis Platform","description":"AI-powered legal document analysis for contract review, clause extraction, risk assessment, and precedent search. Reduces legal review time by 80%.","features":["Contract clause extraction","Risk scoring per clause","Precedent search across case law","Redline generation","Obligation extraction","Integration with DocuSign, Ironclad","Custom legal domain models","Multi-language support"],"benefits":["Reduce legal review time by 80%","Identify risky clauses automatically","Standardize contract language","Scale legal team capacity"],"pricing":{"basic":"$999/mo","pro":"$2,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-legal-document-analysis","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"⚖️","href":"/services/ai-legal-document-analysis","popular":True,"category":"ai","industry":"Legal"},
  {"id":"ai-meeting-room-booking","title":"AI Smart Meeting Room Booking","description":"AI-powered meeting room optimization with automatic room selection based on attendee count, equipment needs, and calendar analysis.","features":["Auto room selection by requirements","Conflict detection and resolution","Equipment matching","Automatic release of unused rooms","Calendar integration","Occupancy analytics","Waitlist management","Mobile check-in"],"benefits":["Eliminate meeting room conflicts","Increase room utilization by 35%","Reduce phantom bookings","Optimize space planning"],"pricing":{"basic":"$199/mo","pro":"$599/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-meeting-room-booking","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🏢","href":"/services/ai-meeting-room-booking","popular":False,"category":"ai","industry":"Corporate"},
  {"id":"ai-social-listening-platform","title":"AI Social Listening & Brand Monitoring","description":"Real-time brand monitoring across social media, news, forums, and review sites. AI-powered sentiment analysis, trend detection, and crisis alerting.","features":["Multi-platform monitoring (20+ sources)","Real-time sentiment analysis","Trend and topic detection","Competitor benchmarking","Crisis detection and alerting","Influencer identification","Custom reporting dashboards","API and webhook integration"],"benefits":["Protect brand reputation in real-time","Identify crises before they escalate","Track competitor movements","Data-driven PR strategy"],"pricing":{"basic":"$399/mo","pro":"$1,299/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-social-listening-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"👂","href":"/services/ai-social-listening-platform","popular":True,"category":"ai","industry":"Marketing"},
  {"id":"ai-expense-auditor","title":"AI Expense Audit & Compliance","description":"Automated expense report auditing with AI. Detect policy violations, duplicate submissions, suspicious patterns, and non-compliant receipts.","features":["Receipt OCR and validation","Policy violation detection","Duplicate expense detection","Suspicious pattern analysis","Per diem and mileage calculation","Integration with SAP Concur, Expensify","Audit trail and reporting","Real-time submission feedback"],"benefits":["Reduce expense fraud by 60%","Cut audit time by 90%","Ensure policy compliance","Reclaim overpayments"],"pricing":{"basic":"$299/mo","pro":"$899/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-expense-auditor","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🧾","href":"/services/ai-expense-auditor","popular":False,"category":"ai","industry":"Finance"},
  {"id":"ai-video-interview-analyzer","title":"AI Video Interview Analysis Platform","description":"AI-powered video interview analysis for hiring. Evaluate candidate responses, communication skills, and role fit with standardized assessment criteria.","features":["Response quality analysis","Communication skills scoring","Sentiment and confidence detection","Structured interview templates","Bias detection and mitigation","Candidate comparison reports","Integration with ATS","Interview recording and playback"],"benefits":["Reduce time-to-hire by 40%","Standardize interview evaluation","Reduce unconscious bias","Scale hiring without adding recruiters"],"pricing":{"basic":"$599/mo","pro":"$1,799/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-video-interview-analyzer","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🎥","href":"/services/ai-video-interview-analyzer","popular":False,"category":"ai","industry":"HR"},
  {"id":"ai-customer-feedback-analyzer","title":"AI Customer Feedback Analyzer","description":"Analyze customer feedback from surveys, reviews, support tickets, and social media. AI-powered theme extraction, sentiment tracking, and actionable insight generation.","features":["Multi-source feedback aggregation","AI theme and topic extraction","Sentiment trend tracking","NPS and CSAT analysis","Actionable insight generation","Integration with Zendesk, SurveyMonkey","Custom categorization models","Executive summary reports"],"benefits":["Understand customer pain points at scale","Track satisfaction trends over time","Prioritize product improvements","Close the feedback loop faster"],"pricing":{"basic":"$299/mo","pro":"$899/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/ai-customer-feedback-analyzer","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"💬","href":"/services/ai-customer-feedback-analyzer","popular":True,"category":"ai","industry":"Customer Success"},
  # Micro-SaaS (4)
  {"id":"micro-saas-waitlist-manager","title":"LaunchList — Waitlist Management Micro-SaaS","description":"Beautiful waitlist pages with referral tracking, position management, and email campaigns. Perfect for product launches, beta access, and exclusive memberships.","features":["Custom waitlist landing pages","Referral tracking and rewards","Position management","Email drip campaigns","Analytics and conversion tracking","Custom branding","API and webhook integration","Priority tier management"],"benefits":["Build pre-launch buzz","Grow waitlist through referrals","Convert waitlist to customers","Professional launch experience"],"pricing":{"basic":"$29/mo","pro":"$89/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/micro-saas-waitlist-manager","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"📋","href":"/services/micro-saas-waitlist-manager","popular":True,"category":"micro-saas","industry":"Marketing"},
  {"id":"micro-saas-status-page","title":"StatusPulse — Status Page Micro-SaaS","description":"Beautiful status pages for SaaS companies. Real-time incident communication, subscriber notifications, and uptime tracking. Custom domain and branding.","features":["Real-time status updates","Incident communication","Email/SMS subscriber notifications","Uptime tracking and SLA reporting","Custom domain and branding","Integration with monitoring tools","Historical incident archive","Team management"],"benefits":["Build customer trust with transparency","Reduce support tickets during incidents","Professional incident communication","Custom branded status page"],"pricing":{"basic":"$19/mo","pro":"$59/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/micro-saas-status-page","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🟢","href":"/services/micro-saas-status-page","popular":False,"category":"micro-saas","industry":"SaaS"},
  {"id":"micro-saas-knowledge-base","title":"KnowledgeBase Pro — Knowledge Base Micro-SaaS","description":"Self-service knowledge base for SaaS companies. AI-powered search, article suggestions, and analytics. Reduce support tickets by 40%.","features":["AI-powered search","Article editor with templates","Category and tag management","Analytics and search insights","Custom branding and domain","Integration with Intercom, Zendesk","Multi-language support","Feedback and rating system"],"benefits":["Reduce support tickets by 40%","Improve customer self-service","AI-powered content suggestions","Professional knowledge base"],"pricing":{"basic":"$39/mo","pro":"$119/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/micro-saas-knowledge-base","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"📚","href":"/services/micro-saas-knowledge-base","popular":True,"category":"micro-saas","industry":"SaaS"},
  {"id":"micro-saas-affiliate-manager","title":"AffiliateHub — Affiliate Management Micro-SaaS","description":"Affiliate program management for SaaS and e-commerce. Track referrals, manage commissions, and provide affiliates with marketing materials and dashboards.","features":["Affiliate signup and onboarding","Referral tracking (cookies, links)","Commission management and payouts","Affiliate dashboard","Marketing material library","Fraud detection","Integration with Stripe, PayPal","Custom commission rules"],"benefits":["Grow through affiliate marketing","Automate commission tracking","Prevent affiliate fraud","Professional affiliate program"],"pricing":{"basic":"$49/mo","pro":"$149/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/micro-saas-affiliate-manager","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🤝","href":"/services/micro-saas-affiliate-manager","popular":False,"category":"micro-saas","industry":"Marketing"},
  # Security (3)
  {"id":"security-penetration-testing-service","title":"Automated Penetration Testing Service","description":"AI-powered automated penetration testing for web applications, APIs, and networks. Continuous vulnerability assessment with detailed remediation guidance.","features":["Automated web app scanning","API security testing","Network vulnerability assessment","OWASP Top 10 coverage","Detailed remediation reports","Continuous monitoring","Integration with Jira, ServiceNow","Compliance reporting (PCI, SOC2)"],"benefits":["Continuous security assessment","Find vulnerabilities before attackers","Automated compliance reporting","Reduce pen testing costs by 70%"],"pricing":{"basic":"$999/mo","pro":"$2,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/security-penetration-testing-service","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🔓","href":"/services/security-penetration-testing-service","popular":True,"category":"security","industry":"Technology"},
  {"id":"security-cloud-access-security-broker","title":"Cloud Access Security Broker (CASB)","description":"CASB solution for visibility and control over cloud applications. Shadow IT discovery, data loss prevention, threat protection, and compliance monitoring across SaaS.","features":["Shadow IT discovery","Cloud app risk assessment","Data loss prevention for cloud","Threat protection (UEBA)","Compliance monitoring (GDPR, HIPAA)","Integration with 1000+ cloud apps","Real-time policy enforcement","Cloud security posture dashboard"],"benefits":["Discover and control shadow IT","Prevent data leaks in cloud apps","Meet compliance requirements","Unified cloud security visibility"],"pricing":{"basic":"$1,499/mo","pro":"$4,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/security-cloud-access-security-broker","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"☁️","href":"/services/security-cloud-access-security-broker","popular":False,"category":"security","industry":"Technology"},
  {"id":"security-endpoint-detection-response","title":"Endpoint Detection & Response (EDR) Platform","description":"Next-gen EDR with AI-powered threat detection, automated response, and forensic investigation. Protect endpoints from malware, ransomware, and advanced threats.","features":["AI-powered threat detection","Automated threat response","Behavioral analysis","Ransomware protection","Forensic investigation tools","Threat intelligence integration","Integration with SIEM/SOAR","Managed detection option"],"benefits":["Detect advanced threats in real-time","Automated response reduces MTTR","Protect against ransomware","Full forensic visibility"],"pricing":{"basic":"$799/mo","pro":"$2,499/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/security-endpoint-detection-response","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🛡️","href":"/services/security-endpoint-detection-response","popular":True,"category":"security","industry":"Technology"},
  # IT Services (2)
  {"id":"it-it-asset-management","title":"IT Asset Management Platform","description":"Comprehensive IT asset management covering hardware, software, and cloud resources. Automated discovery, lifecycle management, and compliance tracking.","features":["Automated asset discovery","Hardware and software inventory","License management","Lifecycle tracking","Compliance reporting","Integration with SCCM, Intune","Cost optimization insights","Disposal and decommissioning workflows"],"benefits":["Complete IT asset visibility","Optimize software license costs","Ensure compliance","Reduce shadow IT"],"pricing":{"basic":"$399/mo","pro":"$1,299/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/it-it-asset-management","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🖥️","href":"/services/it-it-asset-management","popular":False,"category":"it","industry":"Technology"},
  {"id":"it-network-automation-platform","title":"Network Automation Platform","description":"Automate network configuration, monitoring, and troubleshooting. Infrastructure as Code for networks with compliance checking and change management.","features":["Network configuration automation","Compliance checking","Change management workflows","Network monitoring and alerting","Integration with Cisco, Juniper, Arista","Rollback capabilities","Network documentation auto-generation","Zero-touch provisioning"],"benefits":["Reduce network configuration errors","Automate repetitive network tasks","Ensure compliance","Faster network deployments"],"pricing":{"basic":"$1,999/mo","pro":"$5,999/mo","enterprise":"Custom"},"contactInfo":{"website":"/services/it-network-automation-platform","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},"icon":"🌐","href":"/services/it-network-automation-platform","popular":False,"category":"it","industry":"Technology"},
]

# Fix the malformed entry
for s in SERVICES:
    if 'id' not in s:
        # Fix entries with wrong key
        for k in list(s.keys()):
            if k.startswith('it-') or k.startswith('ai-') or k.startswith('micro-saas-') or k.startswith('security-'):
                s['id'] = k
                del s[k]
                break

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

insert_after = "  ...wave168EdtechServices,\n"
new_spreads = ''.join(l + '\n' for l in spread_lines)
content = content.replace(insert_after, insert_after + new_spreads)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(content)

print(f"TS arrays: {', '.join(wave_arrays.keys())}")
print("Done!")
