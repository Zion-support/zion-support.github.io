#!/usr/bin/env python3
"""Insert Waves 63, 64, 65 — 18 new services into servicesData.ts"""
import json, re

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

def svc(svc_id, title, desc, features, benefits, pricing, icon, category, popular, industry):
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
    svc("ai-competitive-moat-analyzer","AI Competitive Moat Analyzer",
        "Analyzes competitive position from email intelligence, market data, and customer feedback. Identifies sustainable advantages, vulnerability gaps, and strategic recommendations. Features Porter's Five Forces and SWOT generation.",
        ["Competitive positioning","Vulnerability gap analysis","Porter's Five Forces","SWOT generation","Strategic recommendations","Market data integration"],
        ["Stronger strategy","Gap identification","Data-driven positioning","Competitive resilience"],
        ("Custom","Custom","Custom"),"Shield","ai","True","Strategy & Consulting"),

    svc("soc2-compliance-evidence-collector","AI SOC 2 Compliance Evidence Collector",
        "Automatically collects and organizes SOC 2 compliance evidence from emails, Slack, Jira, and cloud platforms. Maps evidence to Trust Services Criteria, generates audit-ready packages, and identifies gaps. Reduces audit prep time by 70%.",
        ["Automated evidence collection","TSC mapping","Audit-ready packages","Gap identification","Slack/Jira integration","Evidence tracking","Continuous monitoring"],
        ["70% faster audit prep","Complete evidence trail","Gap visibility","Audit confidence"],
        ("$1,499/mo","$4,499/mo","Custom"),"ShieldCheck","saas","True","Compliance"),

    svc("predictive-hiring-signal-detector","Predictive Hiring Signal Detector",
        "Analyzes candidate emails to predict hiring success, cultural fit, and retention risk. Features communication style analysis, engagement scoring, and interview question generation. Integrates with Greenhouse, Lever, and Workday.",
        ["Candidate email analysis","Cultural fit prediction","Retention risk scoring","Communication analysis","Engagement scoring","Interview question generation","ATS integration"],
        ["Better hires","Reduced turnover","Cultural alignment","Predictive insights"],
        ("Custom","Custom","Custom"),"UserCheck","ai","True","Human Resources"),

    svc("email-driven-product-roadmap","Email-Driven Product Roadmap Prioritizer",
        "Analyzes customer emails to automatically prioritize product features and roadmap items. Features demand quantification, sentiment-weighted scoring, and competitor gap identification. Integrates with Productboard, Aha!, and Jira.",
        ["Email demand quantification","Sentiment-weighted scoring","Feature prioritization","Competitor gap analysis","Roadmap generation","Productboard integration","Customer impact scoring"],
        ["Data-driven roadmap","Customer-aligned features","Competitive gaps","Prioritization clarity"],
        ("Custom","Custom","Custom"),"Map","ai","True","Product Management"),

    svc("automated-partner-program-manager","Automated Partner Program Manager",
        "AI platform for managing technology partner programs. Features partner scoring, deal registration, MDF management, co-marketing automation, and partner portal. Tracks partner-sourced revenue and ROI by tier.",
        ["Partner scoring","Deal registration","MDF management","Co-marketing automation","Partner portal","Revenue tracking","ROI by tier"],
        ["Scalable partnerships","Better partner ROI","Automated operations","Revenue attribution"],
        ("$1,299/mo","$3,999/mo","Custom"),"HandHeart","automation","True","Partnerships"),

    svc("ai-invoice-factoring-platform","AI Invoice Factoring Platform",
        "ML-powered invoice factoring for SMBs. Analyzes buyer credit risk in real-time, offers instant advance rates up to 97%, and automates collections. Features dynamic pricing, fraud detection, and accounting integration.",
        ["Real-time credit analysis","Up to 97% advance","Instant funding","Dynamic pricing","Fraud detection","Collections automation","Accounting integration"],
        ["Instant cash flow","No debt","Fraud protection","Automated collections"],
        ("2% fee","1.5% fee","Custom"),"DollarSign","saas","True","Finance"),

    svc("ai-menu-engine","AI Menu and Pricing Optimization Engine",
        "ML platform for restaurants and food service to optimize menus and pricing. Analyzes sales data, food costs, demand patterns, and competitor pricing. Generates profit-maximizing menu layouts and dynamic pricing recommendations.",
        ["Menu profit optimization","Dynamic pricing","Demand pattern analysis","Food cost tracking","Competitor pricing","Menu layout suggestions","Waste reduction"],
        ["15% profit increase","Optimized pricing","Reduced waste","Better layouts"],
        ("$199/mo","$599/mo","Custom"),"UtensilsCrossed","ai","True","Food and Beverage"),

    svc("ai-parking-management","AI Smart Parking Management Platform",
        "Computer vision platform for parking facilities. Features real-time occupancy detection, license plate recognition, dynamic pricing, violation detection, and EV charger management. Reduces congestion by 40% and increases revenue by 22%.",
        ["Real-time occupancy","License plate recognition","Dynamic pricing","Violation detection","EV charger management","Mobile app","Revenue analytics"],
        ["40% less congestion","22% more revenue","Automated enforcement","EV support"],
        ("$399/mo","$1,199/mo","Custom"),"Car","ai","True","Smart Cities"),

    svc("ai-recruiting-copilot","AI Recruiting Copilot",
        "AI assistant for recruiting teams. Features candidate rediscovery, outreach personalization, interview scheduling, and offer negotiation support. Analyzes passive candidates from LinkedIn and GitHub.",
        ["Candidate rediscovery","Outreach personalization","Interview scheduling","Offer negotiation","Passive candidate search","LinkedIn/GitHub analysis","Pipeline analytics"],
        ["50% faster sourcing","Better candidate quality","Personalized outreach","Hidden talent"],
        ("$299/mo","$899/mo","Custom"),"UserPlus","ai","True","Human Resources"),

    svc("ai-subscription-billing-platform","AI Subscription Billing Platform",
        "Intelligent billing platform for SaaS companies. Features smart dunning, revenue recognition, churn prediction-based retention offers, and usage-based pricing. Integrates with Stripe, Chargebee, and Recurly.",
        ["Smart dunning","Revenue recognition","Churn prediction","Usage-based pricing","Retention offers","Billing analytics","Payment gateway integration"],
        ["20% lower churn","Optimized revenue","Smart recovery","Usage monetization"],
        ("1% of revenue","0.75% of revenue","Custom"),"CreditCard","saas","True","Finance"),

    svc("ai-phantom-bidding-detector","AI Auction and Phantom Bidding Detector",
        "Fraud detection platform for online auctions and marketplaces. Detects phantom bidding, shill bidding, price manipulation, and collusion patterns. Protects marketplace integrity and increases trust.",
        ["Phantom bidding detection","Shill bidding detection","Price manipulation","Collusion detection","Real-time alerts","Historical analysis","Platform integrity"],
        ["Marketplace trust","Fraud prevention","Real-time protection","Historical insights"],
        ("$499/mo","$1,499/mo","Custom"),"SearchX","ai","True","E-Commerce"),

    svc("ai-ambience-designer","AI Ambient Experience Designer",
        "Generates dynamic ambient environments (lighting, sound, scent, temperature) for hotels, offices, and retail stores using IoT sensors and ML. Adapts to occupancy, time of day, and customer preferences. Increases dwell time by 25%.",
        ["Dynamic lighting control","Sound environment","Scent distribution","Temperature optimization","IoT sensor fusion","Occupancy adaptation","Preference learning"],
        ["25% longer dwell time","30% higher satisfaction","Adaptive environments","Energy optimization"],
        ("$349/mo","$999/mo","Custom"),"Lightbulb","automation","True","Hospitality"),

    svc("ai-cold-chain-monitor","AI Cold Chain Monitoring Platform",
        "IoT and ML platform for cold chain logistics (pharmaceuticals, food, chemicals). Features real-time temperature/humidity monitoring, excursion prediction, compliance documentation, and automated alerts. Reduces spoilage by 60%.",
        ["Real-time temperature monitoring","Excursion prediction","Compliance documentation","Automated alerts","GPS tracking","Sensor integration","Audit trail"],
        ["60% less spoilage","Compliance assurance","Predictive alerts","Full traceability"],
        ("$299/mo","$899/mo","Custom"),"Thermometer","automation","True","Logistics"),

    svc("ai-legal-billing-analyzer","AI Legal Billing Analyzer",
        "Analyzes legal bills for inefficiencies, overbilling, and compliance with billing guidelines. Features time entry analysis, fee benchmarking, and alternative fee arrangement recommendations. Reduces legal spend by 22%.",
        ["Bill analysis","Overbilling detection","Time entry review","Fee benchmarking","Billing guidelines","AFA recommendations","Invoice analytics"],
        ["22% cost reduction","Billing compliance","Benchmarking data","AFA optimization"],
        ("$199/mo","$599/mo","Custom"),"Scale","ai","True","Legal"),

    svc("ai-flood-prediction","AI Flood Prediction Platform",
        "ML platform for flood risk prediction using satellite imagery, weather data, river sensors, and terrain models. Features 72-hour advance warning, evacuation planning, and insurance risk scoring.",
        ["72-hour advance warning","Satellite imagery analysis","River sensor integration","Terrain modeling","Evacuation planning","Insurance risk scoring","Damage estimation"],
        ["Early warning","Lives saved","Insurance optimization","Evacuation planning"],
        ("Custom","Custom","Custom"),"CloudRain","ai","True","Government"),

    svc("ai-automated-captioning","AI Automated Captioning and Subtitling",
        "Real-time captioning and subtitling platform for media, education, and corporate communications. Supports 80+ languages, speaker identification, and custom vocabulary. Accuracy exceeds 99% for major languages.",
        ["Real-time captioning","80+ languages","Speaker identification","Custom vocabulary","99%+ accuracy","Live streaming","SDK integration"],
        ["Accessibility compliance","Global reach","Live captioning","Custom terms"],
        ("$99/mo","$299/mo","Custom"),"Captions","ai","True","Media"),

    svc("ai-green-building-optimizer","AI Green Building Optimizer",
        "ML platform for optimizing energy, water, and waste in commercial buildings. Integrates with BMS, HVAC, lighting, and water systems. Reduces energy costs by 35%, water by 25%, and helps achieve LEED/WELL certification.",
        ["Energy optimization","Water management","Waste reduction","BMS integration","LEED/WELL support","Tenant comfort","Carbon tracking"],
        ["35% energy savings","25% water reduction","Certification support","Tenant satisfaction"],
        ("$999/mo","$2,999/mo","Custom"),"Leaf","automation","True","Real Estate"),

    svc("ai-supplier-diversity-tracker","AI Supplier Diversity Tracker",
        "Tracks and optimizes supplier diversity spending for enterprise procurement. Features certification verification, spend analytics, goal tracking, and automated reporting. Meets federal, state, and corporate diversity requirements.",
        ["Certification verification","Spend analytics","Goal tracking","Federal/state compliance","Automated reporting","Diversity scoring","Opportunity matching"],
        ["Compliance assurance","Spend visibility","Goal achievement","Automated reporting"],
        ("$599/mo","$1,799/mo","Custom"),"Users","saas","True","Procurement"),
]

wave_block = "\n".join(waves) + "\n"
new_content = content[:last_close] + wave_block + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

count = re.findall(r'\{\s*\n\s*id:', new)
print(f"Waves 63-65: Inserted {len(waves)} services!")
print(f"Total service blocks: {len(count)}")
print(f"Total lines: {len(new.splitlines())}")
