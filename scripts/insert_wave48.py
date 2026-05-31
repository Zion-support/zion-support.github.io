#!/usr/bin/env python3
"""Insert Wave 48 services into servicesData.ts"""
import re

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

# Wave 48 — 12 new real services (diversified)
wave48 = """
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance Platform",
    description: "Machine learning platform that predicts equipment failures before they happen. Analyzes vibration, temperature, pressure, and acoustic sensor data to detect anomalies. Integrates with existing SCADA, CMMS, and IoT platforms. Reduces unplanned downtime by up to 50% and extends asset lifespan by 25%.",
    features: ["Multi-sensor anomaly detection", "Failure prediction models", "CMMS integration", "Maintenance scheduling optimization", "Asset health scoring", "Spare parts forecasting", "Root cause analysis"],
    benefits: ["50% downtime reduction", "25% longer asset life", "Lower maintenance costs", "Improved safety", "Data-driven decisions"],
    pricing: { basic: "$799/mo", pro: "$2,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Wrench",
    category: "ai",
    popular: false
  },
  {
    id: "virtual-reality-training",
    title: "VR Training Simulator Platform",
    description: "Immersive virtual reality training platform for high-risk industries (oil & gas, mining, healthcare, aviation). Builds realistic 3D training scenarios without real-world risk. Tracks trainee performance, provides instant difficulty adjustment, and generates compliance certificates. Supports Meta Quest, HTC Vive, and custom hardware.",
    features: ["Realistic 3D scenario builder", "Performance analytics", "Adaptive difficulty", "Compliance certification", "Multi-device support", "Team collaboration mode", "Incident replay analysis"],
    benefits: ["70% safer training", "50% faster onboarding", "Lower training costs", "Measurable outcomes", "Scalable deployment"],
    pricing: { basic: "$999/mo", pro: "$3,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Eye",
    category: "it",
    popular: false
  },
  {
    id: "ai-recruitment-suite",
    title: "AI Recruitment Suite",
    description: "End-to-end AI recruitment platform that automates candidate sourcing, screening, interviewing, and onboarding. Features AI-powered resume parsing, video interview analysis with emotion/sentiment detection, skill assessment generation, and bias detection. Integrates with LinkedIn, Indeed, Greenhouse, and Lever.",
    features: ["AI resume parsing", "Video interview analysis", "Skill assessment generation", "Bias detection", "ATS integration", "Candidate ranking", "Automated scheduling", "Onboarding workflows"],
    benefits: ["65% faster hiring", "Better quality hires", "Reduced bias", "Lower cost-per-hire", "Improved candidate experience"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "UserPlus",
    category: "automation",
    popular: true
  },
  {
    id: "carbon-credit-marketplace",
    title: "Carbon Credit Marketplace",
    description: "Blockchain-verified carbon credit trading platform that connects offset projects with corporate buyers. Features automated MRV (Measurement, Reporting, Verification), credit issuance, retirement tracking, and portfolio management. Compliant with Verra, Gold Standard, and CDM methodologies.",
    features: ["Automated MRV", "Credit issuance & retirement", "Portfolio management", "Verra/Gold Standard compliance", "Project verification", "Real-time pricing", "Impact reporting"],
    benefits: ["Transparent carbon trading", "Faster offset verification", "Lower transaction costs", "Regulatory compliance", "Impact measurement"],
    pricing: { basic: "$599/mo", pro: "$1,799/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Leaf",
    category: "saas",
    popular: false
  },
  {
    id: "ai-financial-advisor",
    title: "AI Financial Advisor Platform",
    description: "Robo-advisor platform that provides personalized financial planning, investment portfolio optimization, and tax-loss harvesting. Uses modern machine learning for risk assessment, market prediction, and goal-based planning. SEC/FINRA compliant with fiduciary duty safeguards. White-label ready for banks and wealth managers.",
    features: ["Personalized financial planning", "Portfolio optimization", "Tax-loss harvesting", "Risk assessment ML", "Goal-based planning", "SEC/FINRA compliance", "White-label deployment"],
    benefits: ["Democratized financial advice", "Lower advisory fees", "Better risk-adjusted returns", "Scalable wealth management", "Regulatory compliance"],
    pricing: { basic: "$1,299/mo", pro: "$3,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "DollarSign",
    category: "ai",
    popular: true
  },
  {
    id: "smart-city-iot-platform",
    title: "Smart City IoT Platform",
    description: "Comprehensive IoT platform for smart city management. Integrates traffic sensors, air quality monitors, smart lighting, waste management, and public safety systems. Features real-time dashboards, predictive analytics, citizen engagement portal, and automated incident response. Used by municipalities to improve quality of life and reduce operational costs.",
    features: ["Multi-sensor integration", "Real-time city dashboards", "Predictive analytics", "Citizen engagement portal", "Automated incident response", "Traffic optimization", "Air quality monitoring"],
    benefits: ["30% operational cost reduction", "Improved citizen satisfaction", "Data-driven urban planning", "Faster emergency response", "Environmental monitoring"],
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Building",
    category: "it",
    popular: false
  },
  {
    id: "ai-content-moderation",
    title: "AI Content Moderation Engine",
    description: "Real-time content moderation for social platforms, forums, and user-generated content. Detects hate speech, harassment, spam, NSFW content, and misinformation in text, images, and video. Supports 40+ languages with cultural context awareness. Customizable policy engine with human-in-the-loop review queues.",
    features: ["Multi-modal detection (text/image/video)", "40+ language support", "Cultural context awareness", "Customizable policy engine", "Human-in-the-loop review", "Real-time processing", "Appeal management"],
    benefits: ["99.5% detection accuracy", "80% faster moderation", "Reduced moderator burnout", "Scalable content safety", "Regulatory compliance"],
    pricing: { basic: "$399/mo", pro: "$1,199/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ShieldCheck",
    category: "ai",
    popular: false
  },
  {
    id: "precision-fermentation-bio",
    title: "Precision Fermentation Bio Platform",
    description: "AI-optimized precision fermentation platform for biotech and food tech companies. Models microbial strain behavior, optimizes fermentation parameters in real-time, and predicts yield outcomes. Integrates with bioreactor control systems and lab information management systems (LIMS).",
    features: ["Strain behavior modeling", "Real-time parameter optimization", "Yield prediction", "Bioreactor integration", "LIMS connectivity", "Scale-up simulation", "Regulatory documentation"],
    benefits: ["40% higher yields", "Faster process development", "Reduced batch failures", "Lower R&D costs", "Accelerated time to market"],
    pricing: { basic: "$1,999/mo", pro: "$5,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "FlaskConical",
    category: "ai",
    popular: false
  },
  {
    id: "ai-insurance-claims",
    title: "AI Insurance Claims Processor",
    description: "Automated insurance claims processing with AI-powered damage assessment, fraud detection, and payout calculation. Processes photos, documents, and sensor data to evaluate claims in minutes instead of weeks. Integrates with major insurance core systems and regulatory reporting frameworks.",
    features: ["Photo-based damage assessment", "Fraud detection ML", "Automated payout calculation", "Document processing", "Regulatory reporting", "Customer self-service portal", "Adjuster workflow optimization"],
    benefits: ["90% faster claims processing", "35% fraud detection improvement", "Lower operational costs", "Better customer satisfaction", "Regulatory compliance"],
    pricing: { basic: "$899/mo", pro: "$2,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "FileCheck",
    category: "automation",
    popular: true
  },
  {
    id: "neural-machine-translation",
    title: "Neural Machine Translation Engine",
    description: "Enterprise-grade neural machine translation platform supporting 100+ language pairs. Features domain-specific fine-tuning (legal, medical, technical), real-time translation API, document translation with formatting preservation, and custom glossary management. On-premise deployment option for data-sensitive organizations.",
    features: ["100+ language pairs", "Domain-specific fine-tuning", "Real-time translation API", "Document translation", "Formatting preservation", "Custom glossary management", "On-premise deployment"],
    benefits: ["Human-quality translation", "100x faster than manual", "Consistent terminology", "Lower localization costs", "Data sovereignty option"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Languages",
    category: "ai",
    popular: false
  },
  {
    id: "ai-energy-trading",
    title: "AI Energy Trading Platform",
    description: "Algorithmic energy trading platform that uses machine learning to predict energy prices, optimize trading strategies, and manage portfolio risk. Integrates with wholesale energy markets, renewable generation forecasts, and weather data. Features backtesting, real-time execution, and regulatory reporting for energy traders and utilities.",
    features: ["Price prediction models", "Strategy optimization", "Portfolio risk management", "Market integration", "Renewable generation forecasting", "Backtesting engine", "Regulatory reporting"],
    benefits: ["15% trading profit increase", "Reduced portfolio risk", "Faster market response", "Automated compliance", "Data-driven strategies"],
    pricing: { basic: "$1,499/mo", pro: "$4,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "TrendingUp",
    category: "ai",
    popular: false
  },
  {
    id: "digital-wellness-platform",
    title: "Digital Wellness & Mental Health Platform",
    description: "AI-powered mental health and wellness platform for employers and healthcare providers. Features mood tracking, AI-guided CBT exercises, crisis detection with automatic escalation, therapist matching, and anonymized population health analytics. HIPAA compliant with end-to-end encryption.",
    features: ["AI mood tracking", "Guided CBT exercises", "Crisis detection & escalation", "Therapist matching", "Population health analytics", "HIPAA compliance", "End-to-end encryption"],
    benefits: ["Early intervention", "Reduced absenteeism", "Improved employee wellbeing", "Lower healthcare costs", "Data-driven wellness programs"],
    pricing: { basic: "$199/mo", pro: "$599/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Heart",
    category: "saas",
    popular: true
  }
"""

new_content = content[:last_close] + wave48 + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

import re
services = re.findall(r'\{\s*\n\s*id:', new)
print(f"Wave 48: Inserted successfully!")
print(f"Total service blocks: {len(services)}")
print(f"Total lines: {len(new.splitlines())}")
