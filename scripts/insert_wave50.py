#!/usr/bin/env python3
"""Insert Wave 50 services into servicesData.ts"""

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

wave50 = """
  {
    id: "ai-space-debris-tracker",
    title: "AI Space Debris Tracking System",
    description: "Real-time space debris tracking and collision avoidance platform for satellite operators and space agencies. Uses ML to predict orbital trajectories, calculate collision probability, and recommend avoidance maneuvers. Integrates with Space-Track data and ground-based radar networks.",
    features: ["Real-time debris tracking", "Collision probability prediction", "Avoidance maneuver recommendations", "Space-Track integration", "Ground radar data fusion", "Multi-satellite management", "Regulatory compliance reporting"],
    benefits: ["Prevent satellite losses", "Reduce collision risk by 80%", "Automated maneuver planning", "Lower insurance costs", "Space sustainability"],
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Rocket",
    category: "ai",
    popular: false
  },
  {
    id: "ai-journalism-assistant",
    title: "AI Journalism Assistant",
    description: "Research and writing assistant for journalists and newsrooms. Features automated fact-checking, source credibility scoring, document analysis, FOIA request generation, and multi-language translation. Fact-checks against 100+ trusted sources and provides citation-ready references.",
    features: ["Automated fact-checking", "Source credibility scoring", "Document analysis", "FOIA request generation", "Multi-language translation", "Citation generation", "Plagiarism detection"],
    benefits: ["50% faster research", "Higher accuracy", "Better source diversity", "Reduced libel risk", "Multilingual coverage"],
    pricing: { basic: "$99/mo", pro: "$299/mo", enterprise: "$799/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Newspaper",
    category: "ai",
    popular: false
  },
  {
    id: "smart-contract-audit",
    title: "Smart Contract Security Auditor",
    description: "Automated smart contract security audit platform that detects vulnerabilities, gas optimizations, and compliance issues. Supports Solidity, Vyper, Rust (Solana), and Move (Aptos/Sui). Generates detailed audit reports with severity ratings, proof-of-concept exploits, and remediation recommendations.",
    features: ["Vulnerability detection", "Gas optimization analysis", "Compliance checking", "Multi-chain support", "Proof-of-concept exploits", "Remediation recommendations", "Continuous monitoring"],
    benefits: ["80% faster audits", "Detect critical vulnerabilities", "Reduce gas costs", "Ensure compliance", "Protect user funds"],
    pricing: { basic: "$499/audit", pro: "$1,499/audit", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "FileSearch",
    category: "it",
    popular: true
  },
  {
    id: "ai-elderly-care-companion",
    title: "AI Elderly Care Companion",
    description: "Voice-activated AI companion for elderly individuals living independently. Features medication reminders, fall detection, emergency alert, family connectivity, health monitoring integration, and conversational engagement to reduce loneliness. HIPAA compliant with family portal access.",
    features: ["Voice-activated interaction", "Medication reminders", "Fall detection alerts", "Emergency SOS", "Family video calls", "Health device integration", "Lonelyeness reduction chat"],
    benefits: ["Independent living support", "Family peace of mind", "Reduced hospitalizations", "Social engagement", "24/7 safety monitoring"],
    pricing: { basic: "$49/mo", pro: "$99/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "HeartHandshake",
    category: "saas",
    popular: true
  },
  {
    id: "ai-weather-prediction",
    title: "AI Hyperlocal Weather Prediction",
    description: "Machine learning weather forecasting platform with hyperlocal accuracy (1km resolution). Predicts precipitation, wind, temperature, and severe weather events up to 14 days in advance. Serves agriculture, aviation, energy, and event planning industries. Integrates with IoT weather stations for ground-truth data.",
    features: ["Hyperlocal 1km resolution", "14-day forecasts", "Severe weather alerts", "Agricultural microclimate", "Wind energy optimization", "Event planning forecasts", "IoT station integration"],
    benefits: ["More accurate forecasts", "Better crop planning", "Aviation safety", "Energy grid optimization", "Event risk reduction"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "CloudSun",
    category: "ai",
    popular: false
  },
  {
    id: "ai-fashion-design",
    title: "AI Fashion Design Assistant",
    description: "Generative AI platform for fashion designers that creates original designs based on trends, mood boards, and specifications. Features virtual try-on, fabric optimization, size grading, and production-ready pattern generation. Reduces design-to-production time by 60%.",
    features: ["Original design generation", "Trend analysis", "Virtual try-on", "Fabric optimization", "Auto size grading", "Production pattern generation", "Sustainability scoring"],
    benefits: ["60% faster design cycle", "Reduced fabric waste", "Trend-responsive collections", "Virtual prototyping", "Inclusive sizing"],
    pricing: { basic: "$199/mo", pro: "$599/mo", enterprise: "$1,499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Shirt",
    category: "ai",
    popular: false
  },
  {
    id: "industrial-cybersecurity",
    title: "Industrial Control System (ICS) Cybersecurity",
    description: "Specialized cybersecurity platform for SCADA, PLC, and ICS environments. Features OT network monitoring, anomaly detection, asset inventory, and threat intelligence for industrial protocols (Modbus, DNP3, EtherNet/IP). Zero-trust segmentation and air-gapped deployment options.",
    features: ["OT network monitoring", "ICS anomaly detection", "Asset auto-discovery", "Industrial protocol analysis", "Threat intelligence feeds", "Zero-trust segmentation", "Air-gapped deployment"],
    benefits: ["Protect critical infrastructure", "Detect OT-specific threats", "Regulatory compliance (NERC CIP)", "Minimal production impact", "Rapid incident response"],
    pricing: { basic: "$2,999/mo", pro: "$7,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ShieldAlert",
    category: "it",
    popular: true
  },
  {
    id: "ai-language-preservation",
    title: "AI Endangered Language Preservation",
    description: "AI platform dedicated to preserving endangered and indigenous languages. Features automatic speech recognition for low-resource languages, text-to-speech synthesis, translation tools, and educational content generation. Partners with UNESCO and indigenous communities worldwide.",
    features: ["Low-resource ASR", "Text-to-speech synthesis", "Translation tools", "Educational content generation", "Community collaboration platform", "UNESCO partnership", "Oral history archiving"],
    benefits: ["Preserve linguistic heritage", "Community empowerment", "Educational access", "Cultural documentation", "Academic research support"],
    pricing: { basic: "$0 (non-profit)", pro: "$99/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "LanguagesText",
    category: "saas",
    popular: false
  },
  {
    id: "ai-supply-chain-finance",
    title: "AI Supply Chain Finance Platform",
    description: "Trade finance and supply chain financing platform using AI for credit risk assessment, invoice fraud detection, and dynamic discounting. Connects buyers, suppliers, and financial institutions on a single platform. Reduces financing costs by 40% and speeds up payment cycles.",
    features: ["AI credit risk assessment", "Invoice fraud detection", "Dynamic discounting", "Multi-party financing", "Payment automation", "Real-time analytics", "ERP/accounting integration"],
    benefits: ["40% lower financing costs", "Faster supplier payments", "Reduced fraud losses", "Improved cash flow", "Stronger supplier relationships"],
    pricing: { basic: "$799/mo", pro: "$2,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Landmark",
    category: "saas",
    popular: false
  },
  {
    id: "generative-ai-video-production",
    title: "Generative AI Video Production Studio",
    description: "AI-powered video production platform that generates marketing videos, product demos, and social media content from text prompts. Features AI avatars, voice cloning in 50+ languages, automatic subtitling, and brand template enforcement. Reduces video production costs by 90%.",
    features: ["Text-to-video generation", "AI avatar presenters", "Voice cloning (50+ languages)", "Auto subtitling", "Brand template enforcement", "Social media optimization", "Analytics integration"],
    benefits: ["90% cost reduction", "10x faster production", "Multilingual content at scale", "Consistent branding", "No filming required"],
    pricing: { basic: "$199/mo", pro: "$599/mo", enterprise: "$1,499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Video",
    category: "ai",
    popular: true
  },
  {
    id: "ai-sleep-optimization",
    title: "AI Sleep Optimization Platform",
    description: "Personalized sleep improvement platform using AI to analyze sleep patterns, environmental factors, and wearable device data. Generates custom sleep protocols with light exposure, temperature, sound, and supplement recommendations. Integrates with Apple Health, Google Fit, Oura Ring, and WHOOP.",
    features: ["Sleep pattern analysis", "Environmental optimization", "Wearable device integration", "Personalized protocols", "Light exposure planning", "Sound therapy library", "Progress tracking & analytics"],
    benefits: ["35% more deep sleep", "Faster sleep onset", "Better daytime alertness", "Personalized recommendations", "Evidence-based protocols"],
    pricing: { basic: "$19/mo", pro: "$49/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Moon",
    category: "saas",
    popular: false
  },
  {
    id: "ai-mining-exploration",
    title: "AI Mining Exploration Platform",
    description: "Machine learning platform for mineral exploration that analyzes geological, geochemical, and geophysical data to identify high-potential drilling targets. Reduces exploration costs by 45% and increases discovery rates. Integrates with Leapfrog, Micromine, and GIS platforms.",
    features: ["Multi-source data integration", "Mineral prospectivity mapping", "Drilling target ranking", "Cost estimation", "Environmental baseline", "GIS platform integration", "3D ore body modeling"],
    benefits: ["45% lower exploration costs", "Higher discovery rates", "Reduced environmental impact", "Faster permitting", "Better resource estimates"],
    pricing: { basic: "$1,999/mo", pro: "$5,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Pickaxe",
    category: "ai",
    popular: false
  }
"""

new_content = content[:last_close] + wave50 + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

import re
services = re.findall(r'\{\s*\n\s*id:', new)
print(f"Wave 50: Inserted successfully!")
print(f"Total service blocks: {len(services)}")
print(f"Total lines: {len(new.splitlines())}")
