#!/usr/bin/env python3
"""Insert Waves 60, 61, 62 — 20 new services into servicesData.ts"""
import json

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

def make_svc(svc_id, title, desc, features, benefits, pricing, icon, category, popular, industry):
    return f"""  {{
    id: "{svc_id}",
    title: "{title}",
    description: "{desc}",
    features: {json.dumps(features)},
    benefits: {json.dumps(benefits)},
    pricing: {{ basic: "{pricing[0]}", pro: "{pricing[1]}", enterprise: "{pricing[2]}" }},
    contactInfo: {{ website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" }},
    icon: "{icon}",
    category: "{category}",
    popular: {"true" if popular else "false"},
    href: "/services/{svc_id}",
    industry: "{industry}"
  }},"""

waves = [
    make_svc("ai-email-negotiation-agent","AI Email Negotiation Agent",
        "Autonomous email negotiation engine that handles pricing discussions, contract terms, and deal structuring via email. Uses game theory and concession strategies to reach optimal outcomes while preserving relationships.",
        ["Autonomous pricing negotiation","Contract term optimization","Concession strategy engine","Multi-round tracking","BATNA analysis","Relationship preservation"],
        ["Better deal outcomes","Faster negotiations","Consistent strategy","Data-driven concessions"],
        ("$499/mo","$1,499/mo","Custom"),"Scale","ai","True","Business Operations"),

    make_svc("omnichannel-customer-orchestrator","Omnichannel Customer Orchestrator",
        "Unified customer communication platform that orchestrates email, SMS, WhatsApp, live chat, and phone. Features channel preference learning, conversation handoff, and consistent context across all touchpoints.",
        ["Unified conversation view","Channel preference learning","Smart handoff","Context preservation","Multi-channel integration","Automated routing"],
        ["Consistent experience","Higher satisfaction","Reduced response time","Single customer view"],
        ("$399/mo","$1,199/mo","Custom"),"Workflow","automation","True","Customer Experience"),

    make_svc("predictive-revenue-analytics","Predictive Revenue Analytics Platform",
        "ML platform that forecasts revenue from email engagement, CRM data, and market signals. Features pipeline health scoring, win probability, churn prediction, and expansion revenue identification.",
        ["Revenue forecasting","Pipeline health scoring","Win probability","Churn prediction","Expansion identification","Scenario modeling"],
        ["Accurate forecasting","Better pipeline management","Reduced churn","Revenue growth"],
        ("$999/mo","$2,999/mo","Custom"),"BarChart3","ai","True","Sales & Revenue"),

    make_svc("autonomous-content-moderation","Autonomous Content Moderation AI",
        "Real-time content moderation for user-generated content platforms. Detects hate speech, harassment, spam, adult content, and misinformation in text, images, and video. Supports 50+ languages with cultural context.",
        ["Text/image/video moderation","50+ language support","Cultural context awareness","Human-in-the-loop","Customizable policies","Real-time processing"],
        ["99.5% accuracy","Reduced moderator burnout","Cultural sensitivity","Scalable safety"],
        ("$499/mo","$1,499/mo","Custom"),"ShieldCheck","ai","True","Trust & Safety"),

    make_svc("multi-model-ai-router","Multi-Model AI Router",
        "Intelligent routing platform that selects the optimal AI model for each task based on cost, quality, and latency. Supports OpenAI, Anthropic, Google, and open-source models.",
        ["Intelligent model selection","Cost optimization","Quality-based routing","Latency optimization","A/B testing","Fallback chains"],
        ["60% cost reduction","Optimal quality","Reduced latency","Vendor independence"],
        ("$299/mo","$899/mo","Custom"),"Cpu","ai","True","Technology"),

    make_svc("digital-twin-supply-chain","Digital Twin for Supply Chain",
        "Real-time digital twin of your entire supply chain from suppliers to customers. Simulates disruptions, optimizes inventory, and predicts delivery times. Integrates with ERP, TMS, WMS, and IoT sensors.",
        ["Real-time supply chain twin","Disruption simulation","Inventory optimization","Delivery prediction","IoT sensor fusion","Scenario planning"],
        ["30% inventory reduction","Faster disruption response","Better delivery accuracy","Live visibility"],
        ("$2,499/mo","$7,499/mo","Custom"),"GitFork","ai","True","Supply Chain"),

    make_svc("ai-academic-research-assistant","AI Academic Research Assistant",
        "Research assistant for academics and graduate students. Features paper discovery, literature review generation, citation management, grant proposal writing, and plagiarism checking.",
        ["Paper discovery","Literature review generation","Citation management","Grant proposal writing","Plagiarism checking","Research database integration"],
        ["10x faster literature review","Better discovery","Grant success","Originality assurance"],
        ("$49/mo","$149/mo","Custom"),"GraduationCap","ai","True","Education & Research"),

    make_svc("blockchain-supply-chain-trace","Blockchain Supply Chain Traceability",
        "End-to-end product traceability using blockchain. Tracks products from raw materials to consumer, ensuring authenticity and ethical sourcing. Features QR code verification and consumer-facing transparency.",
        ["Raw-to-consumer tracking","Authenticity verification","Ethical sourcing auditing","QR code verification","Consumer transparency","Regulatory compliance"],
        ["Brand protection","Consumer trust","Ethical compliance","Counterfeit prevention"],
        ("$1,999/mo","$5,999/mo","Custom"),"Blocks","saas","False","Supply Chain"),

    make_svc("ai-student-success-platform","AI Student Success Platform",
        "Predictive analytics platform for higher education institutions. Identifies at-risk students, recommends interventions, and improves graduation rates. Features early alert, advising workflow, and LMS integration.",
        ["At-risk student identification","Intervention recommendations","Graduation prediction","Early alert system","Advising workflows","LMS integration"],
        ["15% higher graduation rates","Early intervention","Reduced attrition","Advisor efficiency"],
        ("$2,499/mo","$7,499/mo","Custom"),"GraduationCap","ai","True","Education"),

    make_svc("smart-grid-load-balancer","AI Smart Grid Load Balancer",
        "Real-time energy grid balancing platform for utilities and microgrids. Uses predictive ML to balance supply/demand, integrate renewables, and optimize battery storage.",
        ["Real-time load balancing","Renewable integration","Battery optimization","Predictive demand","Outage prediction","Carbon optimization"],
        ["80% fewer instabilities","35% less waste","Higher renewable utilization","Grid resilience"],
        ("$4,999/mo","Custom","Custom"),"Zap","ai","True","Energy & Utilities"),

    make_svc("ai-workers-comp-analyzer","AI Workers Compensation Analyzer",
        "ML platform for insurance companies to analyze workers comp claims. Features injury severity prediction, return-to-work estimation, fraud detection, and reserve calculation.",
        ["Injury severity prediction","Return-to-work estimation","Claims fraud detection","Reserve calculation","Medical bill review","Regulatory reporting"],
        ["60% faster processing","15% better loss ratios","Fraud prevention","Accurate reserves"],
        ("$799/mo","$2,499/mo","Custom"),"ShieldPlus","ai","False","Insurance"),

    make_svc("voice-ai-phone-agent","AI Voice Phone Agent",
        "Autonomous AI phone agent that handles inbound and outbound calls. Features natural conversation, CRM integration, appointment scheduling, and multi-language support.",
        ["Autonomous call handling","Natural conversation","CRM integration","Appointment scheduling","Multi-language (30+)","Human handoff"],
        ["24/7 availability","Reduced call center costs","Consistent service","Scalable support"],
        ("$999/mo","$2,999/mo","Custom"),"PhoneCall","ai","True","Customer Service"),

    make_svc("ai-esg-carbon-tracker","AI ESG Carbon Tracking Platform",
        "Automated carbon footprint tracking and ESG reporting. Connects to utility bills, travel data, supply chain systems, and financial records to calculate Scope 1, 2, and 3 emissions.",
        ["Scope 1/2/3 calculation","Automated data collection","Reduction recommendations","Supplier carbon tracking","Audit-ready reports","Benchmarking"],
        ["90% faster reporting","Accurate emissions data","Regulatory compliance","Reduction visibility"],
        ("$1,299/mo","$3,999/mo","Custom"),"Leaf","saas","True","Sustainability"),

    make_svc("predictive-quality-assurance","AI Predictive Quality Assurance",
        "ML platform for software quality prediction. Analyzes code, test results, and deployment data to predict defect hotspots, optimize test coverage, and prevent production incidents.",
        ["Defect hotspot prediction","Test optimization","Incident prevention","Code quality scoring","CI/CD integration","Release readiness"],
        ["40% fewer defects","Faster releases","Optimized testing","Incident prevention"],
        ("$399/mo","$1,199/mo","Custom"),"Bug","ai","True","Technology"),

    make_svc("ai-freight-bidding-platform","AI Freight Bidding Platform",
        "ML platform for freight carriers and shippers. Predicts optimal shipping rates, recommends carriers, and automates bidding. Covers FTL, LTL, ocean, and air freight.",
        ["Rate prediction","Carrier recommendation","Automated bidding","Multi-modal support","Empty mile reduction","Real-time tracking"],
        ["18% cost reduction","25% fewer empty miles","Optimized carrier selection","Automated bidding"],
        ("$699/mo","$2,199/mo","Custom"),"Truck","ai","True","Logistics"),

    make_svc("data-mesh-governance","Data Mesh Governance Platform",
        "Governance platform for data mesh architectures. Features automated data product discovery, quality scoring, access policy enforcement, and lineage tracking.",
        ["Data product discovery","Quality scoring","Access policy enforcement","Lineage tracking","Domain ownership","Federated governance"],
        ["Faster data discovery","Quality assurance","Decentralized ownership","Compliance automation"],
        ("$1,799/mo","$5,499/mo","Custom"),"DatabaseZap","saas","True","Technology"),

    make_svc("ai-speech-therapy-assistant","AI Speech Therapy Assistant",
        "AI-powered speech therapy platform for clinics and schools. Features articulation analysis, progress tracking, exercise generation, and teletherapy support.",
        ["Articulation analysis","Progress tracking","Exercise generation","Teletherapy support","ASHA compliance","Parent portal"],
        ["More therapy sessions","Better outcomes","Reduced wait times","Remote access"],
        ("$149/mo","$449/mo","Custom"),"Mic","saas","False","Healthcare"),

    make_svc("cyber-range-simulator","AI Cyber Range Simulator",
        "Cybersecurity training platform with AI-generated attack simulations. Features realistic threat scenarios, team-based exercises, skill assessment, and compliance training.",
        ["AI attack simulation","Realistic scenarios","Team exercises","Skill assessment","Compliance training","Performance analytics"],
        ["Better preparedness","Realistic training","Team coordination","Measured improvement"],
        ("$899/mo","$2,699/mo","Custom"),"ShieldAlert","it","True","Cybersecurity"),

    make_svc("ai-crop-insurance-analyst","AI Crop Insurance Analyst",
        "Computer vision and weather data platform for crop insurance. Analyzes satellite imagery, drone footage, and weather data to assess crop damage, estimate yields, and automate claims.",
        ["Satellite imagery analysis","Crop damage assessment","Yield estimation","Automated claims","Weather data integration","Drone processing"],
        ["Hours vs weeks","Accurate assessments","Reduced fraud","Automated processing"],
        ("$599/mo","$1,799/mo","Custom"),"Sprout","ai","True","Insurance"),
]

wave_block = "\n".join(waves) + "\n"
new_content = content[:last_close] + wave_block + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

import re
count = re.findall(r'\{\s*\n\s*id:', new)
print(f"Waves 60-62: Inserted {len(waves)} services!")
print(f"Total service blocks: {len(count)}")
print(f"Total lines: {len(new.splitlines())}")
