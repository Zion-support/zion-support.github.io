#!/usr/bin/env python3
"""Re-append Waves 69-74 (36 services) to servicesData.json after remote overwrite"""
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
svc("ai-customer-effort-score","AI Customer Effort Score","Measures and reduces customer effort from email and support.",\
["Friction detection","Resolution path","Process improvement","Automated suggestions","Journey mapping"],\
["35% less effort","Better CX","Reduced churn"],("$399/mo","$1,199/mo","Custom"),"Gauge","ai","True","Customer Experience"),
svc("ai-pricing-strategy-engine","AI Pricing Strategy Engine","Optimizes pricing using email negotiation data and WTP analysis.",\
["WTP analysis","Competitive pricing","Value-based modeling","Price testing"],\
["12% revenue increase","Better pricing","Value capture"],("$499/mo","$1,499/mo","Custom"),"DollarSign","ai","True","Strategy"),
svc("ai-supplier-risk-monitor","AI Supplier Risk Monitor","Real-time supplier risk from news, financial, and geopolitical signals.",\
["Risk scoring","News monitoring","Financial health","Geopolitical risk","Early warning"],\
["Risk visibility","Supply chain resilience","Early warning"],("$1,199/mo","$3,499/mo","Custom"),"AlertTriangle","ai","True","Supply Chain"),
svc("ai-conversational-commerce","AI Conversational Commerce","AI shopping assistant with NLP product discovery. +45% conversion.",\
["NLP product search","Personal recommendations","Chat checkout","Cart recovery"],\
["45% higher conversion","Personalized shopping","Cart recovery"],("$349/mo","$999/mo","Custom"),"MessageSquare","ai","True","E-Commerce"),
svc("ai-data-retention-manager","AI Data Retention Manager","Automates GDPR/CCPA-compliant data lifecycle. -40% storage costs.",\
["Policy enforcement","Lifecycle management","GDPR/CCPA compliance","Storage optimization"],\
["40% storage savings","Compliance automation","Audit readiness"],("$599/mo","$1,799/mo","Custom"),"Database","saas","True","Compliance"),
svc("ai-employee-onboarding-ai","AI Employee Onboarding","Personalized journeys with 50% faster time-to-productivity.",\
["Personalized journeys","Learning paths","Buddy matching","Progress tracking"],\
["50% faster productivity","Better engagement","Automated tracking"],("$29/user/mo","$59/user/mo","Custom"),"UserPlus","saas","True","Human Resources"),
svc("ai-cryptocurrency-compliance","AI Crypto Compliance","AML/KYC for crypto exchanges across 40+ jurisdictions.",\
["Transaction monitoring","Wallet screening","AML/KYC","Regulatory reporting"],\
["Compliance assurance","Fraud prevention","Multi-jurisdiction"],("$1,999/mo","$5,999/mo","Custom"),"Wallet","saas","True","Finance"),
svc("ai-predictive-maintenance-maritime","AI Maritime Predictive Maintenance","Predictive maintenance for ships. -45% downtime.",\
["Engine monitoring","Hull integrity","Voyage planning","Parts prediction"],\
["45% less downtime","Optimized maintenance","Compliance"],("$2,499/mo","$7,499/mo","Custom"),"Ship","ai","True","Maritime"),
svc("ai-voc-platform","AI Voice of Customer","NLP analysis of customer feedback from emails and surveys.",\
["NLP feedback analysis","Topic clustering","Sentiment tracking","Actionable insights"],\
["Faster insight","Customer-centric","Topic visibility"],("$349/mo","$999/mo","Custom"),"MessageCircle","ai","True","Customer Experience"),
svc("ai-edge-ml-deployer","AI Edge ML Deployer","Deploy ML models on edge devices with OTA updates and monitoring.",\
["Model optimization","Edge deployment","OTA updates","Monitoring","Multi-hardware"],\
["Low latency","Offline inference","Easy deployment"],("$499/mo","$1,499/mo","Custom"),"Cpu","automation","True","Technology"),
svc("ai-rental-property-optimizer","AI Rental Property Optimizer","ML for rental properties. +18% NOI.",\
["Rent pricing","Tenant screening","Maintenance prediction","Vacancy reduction"],\
["18% higher NOI","Better tenants","Reduced vacancies"],("$99/mo","$299/mo","Custom"),"Home","ai","True","Real Estate"),
svc("ai-food-safety-compliance","AI Food Safety Compliance","CV and IoT for food safety. -75% violations.",\
["Hygiene detection","Temperature monitoring","HACCP documentation","IoT sensors"],\
["75% fewer violations","HACCP compliance","Audit readiness"],("$399/mo","$1,199/mo","Custom"),"ShieldCheck","automation","True","Food and Beverage"),
svc("ai-music-licensing-platform","AI Music Licensing Platform","Blockchain licensing with AI content ID and royalty distribution.",\
["Content ID","Royalty distribution","Usage tracking","Rights management"],\
["Fair compensation","Automated licensing","Usage transparency"],("5% license","3% license","Custom"),"Music","saas","True","Entertainment"),
svc("ai-cyber-insurance-assessor","AI Cyber Insurance Assessor","Cyber risk assessment with automated underwriting.",\
["Security assessment","Automated underwriting","Continuous monitoring","Risk scoring"],\
["Better risk selection","Automated assessment","Accurate pricing"],("$799/mo","$2,499/mo","Custom"),"ShieldAlert","ai","True","Insurance"),
svc("ai-veterinary-diagnostics","AI Veterinary Diagnostics","CV and ML for vet diagnostics. 94% accuracy across species.",\
["X-ray analysis","Ultrasound","Blood work","94% accuracy","Multi-species"],\
["Faster diagnosis","94% accuracy","Treatment support"],("$149/mo","$449/mo","Custom"),"HeartPulse","ai","True","Veterinary"),
svc("ai-waste-reduction-platform","AI Industrial Waste Reduction","Analyzes production data to minimize waste. -35%.",\
["Material optimization","Process adjustment","Waste scoring","Circular economy"],\
["35% waste reduction","Cost savings","Process efficiency"],("$599/mo","$1,799/mo","Custom"),"Recycle","ai","True","Manufacturing"),
svc("ai-personalized-nutrition","AI Personalized Nutrition","Personalized meal plans from health data with grocery integration.",\
["Personalized plans","Health data","Grocery integration","Macro tracking"],\
["Better outcomes","Personalized plans","Easy tracking"],("$19/mo","$49/mo","Custom"),"Apple","saas","True","Health and Wellness"),
svc("ai-construction-safety-v2","AI Construction Safety v2","CV, wearables, and predictive analytics. -65% incidents.",\
["Computer vision","Wearable sensors","Incident prediction","Real-time alerts"],\
["65% fewer incidents","Real-time protection","OSHA compliance"],("$799/mo","$2,499/mo","Custom"),"HardHat","automation","True","Construction"),
svc("ai-return-abuse-detector","AI Return Abuse Detector","Detects fraudulent returns. -55% fraud.",\
["Return pattern analysis","Fraud detection","Customer profiling","Policy compliance"],\
["55% less fraud","Policy consistency","Automated detection"],("$299/mo","$899/mo","Custom"),"RotateCcw","ai","True","E-Commerce"),
svc("ai-ticket-scalper-detector","AI Ticket Scalper Detector","Detects scalping and bot purchases. -70% scalping.",\
["Scalping detection","Bot blocking","Identity verification","Real-time alerts"],\
["70% less scalping","Fair fan access","Real-time protection"],("$349/mo","$999/mo","Custom"),"Ticket","ai","True","Entertainment"),
svc("ai-water-quality-monitor","AI Water Quality Monitor","Real-time water quality with IoT and contamination detection.",\
["Contamination detection","Predictive failure","Regulatory compliance","IoT sensors"],\
["Early detection","Compliance assurance","Predictive maintenance"],("$399/mo","$1,199/mo","Custom"),"Droplet","ai","True","Utilities"),
svc("ai-archival-digitization","AI Archival Digitization","Digitizes archives with handwriting recognition in 30+ languages.",\
["Handwriting recognition","30+ languages","Damage assessment","Semantic search"],\
["Archive accessibility","Preservation","Searchable archives"],("$299/mo","$899/mo","Custom"),"FileSearch","ai","True","Government"),
svc("ai-noise-pollution-mapper","AI Noise Pollution Mapper","Urban noise monitoring with real-time mapping.",\
["Real-time mapping","Source identification","Regulatory reporting"],\
["Regulatory compliance","Source identification","Mitigation planning"],("$249/mo","$749/mo","Custom"),"Volume2","ai","True","Government"),
svc("ai-digital-wellness-score","AI Digital Wellness Score","Measures employee wellness and prevents burnout.",\
["Screen time analysis","Meeting optimization","Focus protection","Burnout prediction"],\
["35% less burnout","Optimized meetings","Protected focus"],("$19/user/mo","$39/user/mo","Custom"),"Heart","saas","True","Human Resources"),
svc("ai-invoice-reconciliation","AI Invoice Reconciliation","Auto invoice matching with 99.5% accuracy.",\
["3-way matching","Duplicate detection","Pricing discrepancies","Approval workflows"],\
["99.5% accuracy","Duplicate prevention","Faster reconciliation"],("$299/mo","$899/mo","Custom"),"FileCheck","automation","True","Finance"),
svc("ai-plant-disease-detector","AI Plant Disease Detector","Detects plant disease from photos. 97% accuracy, 200+ species.",\
["Disease detection","200+ species","97% accuracy","Treatment recommendations"],\
["Early detection","Crop protection","Yield preservation"],("$99/mo","$299/mo","Custom"),"Sprout","ai","True","Agriculture"),
svc("ai-meeting-notes-summarizer","AI Meeting Notes Summarizer","Auto-summarizes email threads into meeting notes with action items.",\
["Thread summarization","Action items","Speaker attribution","Decision tracking"],\
["Never miss actions","Auto documentation","Decision clarity"],("$49/mo","$149/mo","Custom"),"FileText","ai","True","Productivity"),
svc("ai-competitive-moat-analyzer","AI Competitive Moat Analyzer","Porter's Five Forces and SWOT from email intelligence.",\
["Competitive positioning","Vulnerability analysis","Porter's Five Forces","SWOT"],\
["Stronger strategy","Gap identification","Data-driven positioning"],("Custom","Custom","Custom"),"Shield","ai","True","Strategy"),
svc("soc2-compliance-evidence-collector","AI SOC 2 Evidence Collector","Auto-collects SOC 2 evidence. -70% audit prep.",\
["Evidence collection","TSC mapping","Audit-ready packages","Gap identification"],\
["70% faster audit prep","Complete evidence","Audit confidence"],("$1,499/mo","$4,499/mo","Custom"),"ShieldCheck","saas","True","Compliance"),
svc("predictive-hiring-signal-detector","Predictive Hiring Signal Detector","Predicts candidate success from email patterns.",\
["Candidate analysis","Cultural fit","Retention risk","Communication analysis"],\
["Better hires","Reduced turnover","Cultural alignment"],("Custom","Custom","Custom"),"UserCheck","ai","True","Human Resources"),
svc("email-driven-product-roadmap","Email-Driven Product Roadmap","Auto-prioritizes features from customer emails.",\
["Demand quantification","Sentiment scoring","Feature prioritization","Competitor gaps"],\
["Data-driven roadmap","Customer-aligned","Competitive gaps"],("Custom","Custom","Custom"),"Map","ai","True","Product Management"),
svc("automated-partner-program-manager","Automated Partner Program Manager","Partner scoring, deal registration, and MDF management.",\
["Partner scoring","Deal registration","MDF management","Co-marketing"],\
["Scalable partnerships","Better partner ROI","Automated operations"],("$1,299/mo","$3,999/mo","Custom"),"HandHeart","automation","True","Partnerships"),
svc("ai-invoice-factoring-platform","AI Invoice Factoring Platform","ML invoice factoring with up to 97% advance rates.",\
["Credit analysis","97% advance","Instant funding","Fraud detection"],\
["Instant cash flow","No debt","Fraud protection"],("2% fee","1.5% fee","Custom"),"DollarSign","saas","True","Finance"),
svc("ai-menu-engine","AI Menu and Pricing Optimizer","ML for restaurant menu optimization. +15% profit.",\
["Menu optimization","Dynamic pricing","Demand analysis","Food cost tracking"],\
["15% profit increase","Optimized pricing","Reduced waste"],("$199/mo","$599/mo","Custom"),"UtensilsCrossed","ai","True","Food and Beverage"),
svc("ai-parking-management","AI Smart Parking Management","CV parking with occupancy, LPR, and dynamic pricing. -40% congestion.",\
["Real-time occupancy","License plate recognition","Dynamic pricing","Violation detection"],\
["40% less congestion","22% more revenue","Automated enforcement"],("$399/mo","$1,199/mo","Custom"),"Car","ai","True","Smart Cities"),
svc("ai-recruiting-copilot","AI Recruiting Copilot","AI assistant for recruiting with rediscovery and personalization.",\
["Candidate rediscovery","Outreach personalization","Interview scheduling","Offer negotiation"],\
["50% faster sourcing","Better quality","Personalized outreach"],("$299/mo","$899/mo","Custom"),"UserPlus","ai","True","Human Resources"),
svc("ai-subscription-billing-platform","AI Subscription Billing Platform","Smart billing with dunning and churn-based retention.",\
["Smart dunning","Revenue recognition","Churn prediction","Usage-based pricing"],\
["20% lower churn","Optimized revenue","Smart recovery"],("1% revenue","0.75% revenue","Custom"),"CreditCard","saas","True","Finance"),
svc("ai-phantom-bidding-detector","AI Phantom Bidding Detector","Fraud detection for auctions. -70% fraud.",\
["Phantom bidding detection","Shill detection","Collusion detection","Real-time alerts"],\
["Marketplace trust","Fraud prevention","Real-time protection"],("$499/mo","$1,499/mo","Custom"),"SearchX","ai","True","E-Commerce"),
svc("ai-ambience-designer","AI Ambient Experience Designer","Dynamic ambient environments for hotels, offices, and retail.",\
["Dynamic lighting","Sound environment","Scent distribution","Temperature optimization"],\
["25% longer dwell time","30% higher satisfaction"],("$349/mo","$999/mo","Custom"),"Lightbulb","automation","True","Hospitality"),
svc("ai-cold-chain-monitor","AI Cold Chain Monitor","IoT platform for cold chain. -60% spoilage.",\
["Temperature monitoring","Excursion prediction","Compliance documentation","Automated alerts"],\
["60% less spoilage","Compliance assurance","Full traceability"],("$299/mo","$899/mo","Custom"),"Thermometer","automation","True","Logistics"),
svc("ai-legal-billing-analyzer","AI Legal Billing Analyzer","Analyzes legal bills for inefficiencies. -22% spend.",\
["Bill analysis","Overbilling detection","Time entry review","Fee benchmarking"],\
["22% cost reduction","Billing compliance","Benchmarking data"],("$199/mo","$599/mo","Custom"),"Scale","ai","True","Legal"),
svc("ai-flood-prediction","AI Flood Prediction Platform","ML flood risk with 72-hour warning and evacuation planning.",\
["72-hour warning","Satellite imagery","River sensors","Evacuation planning"],\
["Early warning","Lives saved","Insurance optimization"],("Custom","Custom","Custom"),"CloudRain","ai","True","Government"),
]

added = [s for s in new if s['id'] not in existing]
services.extend(added)
with open(path, 'w') as f:
    json.dump(services, f, indent=2)
print(f"Added {len(added)}. Total: {len(services)}")
