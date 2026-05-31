#!/usr/bin/env python3
"""Append Waves 75, 76, 77 — 21 new services to servicesData.json"""
import json

path = "app/data/servicesData.json"
with open(path) as f:
    services = json.load(f)
existing = {s['id'] for s in services}

def svc(sid, title, desc, features, benefits, pricing, icon, cat, pop, ind):
    return {"id":sid,"title":title,"description":desc,"features":features,"benefits":benefits,
            "pricing":{"basic":pricing[0],"pro":pricing[1],"enterprise":pricing[2]},
            "contactInfo":{"website":"https://ziontechgroup.com","email":"kleber@ziontechgroup.com","phone":"+1 302 464 0950"},
            "icon":icon,"category":cat,"popular":pop,"href":f"/services/{sid}","industry":ind}

new = [
svc("ai-sentiment-trajectory-2","AI Sentiment Trajectory Analyzer v2","Advanced sentiment tracking with predictive escalation detection and automated intervention triggers.",\
["Predictive escalation","Automated triggers","Trend forecasting","Intervention recommendations"],\
["Proactive intervention","Reduced churn","Better outcomes"],("$499/mo","$1,499/mo","Custom"),"TrendingUp","ai","True","Customer Experience"),
svc("ai-meeting-intelligence-suite","AI Meeting Intelligence Suite","Complete meeting lifecycle management from scheduling to follow-up with AI-generated summaries.",\
["Smart scheduling","Action item tracking","Follow-up automation","Decision documentation"],\
["Never miss actions","Faster follow-ups","Decision clarity"],("$99/mo","$299/mo","Custom"),"CalendarCheck","ai","True","Productivity"),
svc("ai-knowledge-graph-builder-v2","AI Knowledge Graph Builder v2","Enterprise knowledge graph with NLP extraction from emails, documents, and databases.",\
["NLP extraction","Relationship mapping","Semantic search","Visual exploration"],\
["Connected knowledge","Faster discovery","Silo breakdown"],("$999/mo","$2,999/mo","Custom"),"GitFork","ai","True","Technology"),
svc("ai-priority-decay-engine","AI Priority Decay Engine","Automatically decays email priority over time to reduce inbox overwhelm and surface what matters.",\
["Time-based decay","Importance scoring","Auto-archival","Smart resurfacing"],\
["Reduced overwhelm","Better focus","Auto-cleanup"],("$49/mo","$149/mo","Custom"),"Clock","ai","True","Productivity"),
svc("ai-compliance-guardian-pro","AI Compliance Guardian Pro","Multi-regulation compliance monitoring with auto-remediation and audit trail generation.",\
["Multi-regulation","Auto-remediation","Audit trail","Policy enforcement"],\
["Automated compliance","Audit ready","Policy violations prevented"],("$1,499/mo","$4,499/mo","Custom"),"ShieldCheck","saas","True","Compliance"),
svc("ai-negotiation-coach-pro","AI Negotiation Coach Pro","Real-time negotiation coaching with strategy suggestions, BATNA calculation, and deal scoring.",\
["Real-time coaching","Strategy suggestions","BATNA calculation","Deal scoring","Scenario modeling"],\
["Better outcomes","Reduced anxiety","Data-driven strategy"],("$99/mo","$299/mo","Custom"),"Scale","ai","True","Business Operations"),
svc("ai-burnout-prevention-2","AI Burnout Prevention Platform v2","Advanced burnout prediction using email patterns, calendar data, and communication analysis.",\
["Email pattern analysis","Calendar overload detection","Communication analysis","Wellness recommendations"],\
["35% less burnout","Better balance","Early warning"],("$19/user/mo","$39/user/mo","Custom"),"Heart","saas","True","Human Resources"),
svc("ai-revenue-attribution-2","AI Revenue Attribution Platform v2","Multi-touch revenue attribution across email, ads, and sales touchpoints.",\
["Multi-touch attribution","Email campaign tracking","ROI by channel","Forecast integration"],\
["Clear ROI","Better attribution","Optimized spend"],("$499/mo","$1,499/mo","Custom"),"DollarSign","ai","True","Sales & Marketing"),
svc("ai-cross-cultural-adapter","AI Cross-Cultural Communication Adapter","Adapts email communication style for different cultures and communication preferences.",\
["Cultural adaptation","Communication style matching","Tone adjustment","Language localization"],\
["Better global communication","Cultural sensitivity","Improved relationships"],("$49/mo","$149/mo","Custom"),"Globe","ai","True","Communications"),
svc("ai-autonomous-agent-platform","AI Autonomous Agent Platform","Deploy autonomous AI agents that handle tasks from email triggers. Features workflow builder and agent marketplace.",\
["Autonomous agents","Agent marketplace","Workflow builder","Email triggers","Monitoring"],\
["Automated workflows","Scalable agents","Email-driven tasks"],("$299/mo","$899/mo","Custom"),"Bot","automation","True","Technology"),
svc("ai-thread-summarizer","AI Email Thread Summarizer","Summarizes long email threads into actionable briefs with decision extraction and action items.",\
["Thread summarization","Decision extraction","Action items","Follow-up reminders"],\
["Faster reading","Decision clarity","Never miss items"],("$49/mo","$149/mo","Custom"),"FileText","ai","True","Productivity"),
svc("ai-attachment-intelligence","AI Attachment Intelligence Engine","Auto-analyzes email attachments (PDFs, images, spreadsheets) for context-aware responses.",\
["PDF analysis","Image recognition","Spreadsheet parsing","Context extraction"],\
["Faster processing","Context-aware","Automated extraction"],("$199/mo","$599/mo","Custom"),"Paperclip","ai","True","Productivity"),
svc("ai-workflow-automation","AI Workflow Automation Platform","No-code workflow automation triggered by email content. Features 200+ integrations and AI-assisted workflow builder.",\
["No-code builder","Email triggers","200+ integrations","AI suggestions","Approval workflows"],\
["10x faster automation","Self-service","AI-assisted"],("$249/mo","$699/mo","Custom"),"Workflow","automation","True","Business Operations"),
svc("ai-meeting-minutes","AI Meeting Minutes Generator","Auto-generates meeting minutes from email threads and calendar events with speaker attribution.",\
["Auto minutes","Speaker attribution","Decision tracking","Action items","Calendar integration"],\
["Never miss decisions","Auto documentation","Action clarity"],("$49/mo","$149/mo","Custom"),"FileCheck","ai","True","Productivity"),
svc("ai-email-translation-engine","AI Email Translation Engine","Real-time email translation for 80+ languages with tone preservation and cultural adaptation.",\
["80+ languages","Tone preservation","Cultural adaptation","Real-time translation"],\
["Global communication","Cultural sensitivity","Real-time"],("$99/mo","$299/mo","Custom"),"Languages","ai","True","Communications"),
svc("ai-compliance-checker","AI Email Compliance Checker","Checks outbound emails for regulatory compliance before sending. Features GDPR, HIPAA, PCI-DSS, and SOX.",\
["Pre-send checking","Multi-regulation","Policy enforcement","Audit trail"],\
["Compliance assurance","Prevention","Audit readiness"],("$149/mo","$449/mo","Custom"),"ShieldAlert","saas","True","Compliance"),
svc("ai-accessibility-checker","AI Email Accessibility Checker","Ensures emails meet accessibility standards (WCAG, Section 508) before sending.",\
["WCAG compliance","Screen reader optimization","Alt text suggestions","Color contrast checking"],\
["Accessibility compliance","Inclusive communication","Legal protection"],("$29/mo","$99/mo","Custom"),"Eye","saas","True","Compliance"),
svc("ai-carbon-footprint-calculator","AI Email Carbon Footprint Calculator","Calculates and offsets the carbon footprint of email communications.",\
["Carbon calculation","Offset suggestions","Green alternatives","Team dashboard"],\
["Carbon awareness","Offset tracking","Green communication"],("$19/mo","$49/mo","Custom"),"Leaf","saas","True","Sustainability"),
svc("ai-inclusive-language-enforcer","AI Inclusive Language Enforcer","Detects and suggests improvements for inclusive language in outbound emails.",\
["Bias detection","Inclusive suggestions","Cultural sensitivity","Team guidelines"],\
["Inclusive communication","Bias reduction","Better culture"],("$29/mo","$99/mo","Custom"),"HeartHandshake","saas","True","Human Resources"),
svc("ai-action-tracker","AI Action Item Tracker","Extracts and tracks action items from emails with deadline monitoring and follow-up reminders.",\
["Action extraction","Deadline monitoring","Follow-up reminders","Progress tracking"],\
["Never miss deadlines","Accountability","Follow-up automation"],("$49/mo","$149/mo","Custom"),"CheckSquare","ai","True","Productivity"),
]

added = [s for s in new if s['id'] not in existing]
services.extend(added)
with open(path, 'w') as f:
    json.dump(services, f, indent=2)
print(f"Added {len(added)}. Total: {len(services)}")
