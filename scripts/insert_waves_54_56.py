#!/usr/bin/env python3
"""Insert Waves 54, 55, 56 — 24 new services into servicesData.ts"""

path = "/data/data/com.termux/files/home/zion-support.github.io/app/data/servicesData.ts"

with open(path, 'r') as f:
    content = f.read()

last_close = content.rfind('];')
if last_close == -1:
    print("ERROR: Could not find closing ];")
    exit(1)

waves = """
  {
    id: "ai-defect-detection-manufacturing",
    title: "AI Visual Defect Detection for Manufacturing",
    description: "Computer vision platform for automated quality inspection on production lines. Detects surface defects, dimensional errors, and assembly issues at speeds up to 200 parts/minute. Integrates with PLCs, robots, and MES systems. Reduces defect escape rate by 95% and inspection labor by 70%.",
    features: ["High-speed defect detection", "Dimensional measurement", "Assembly verification", "PLC/MES integration", "Defect classification", "Root cause analysis", "Continuous model improvement"],
    benefits: ["95% fewer defect escapes", "70% labor reduction", "Consistent quality", "Real-time alerts", "Traceability"],
    pricing: { basic: "$999/mo", pro: "$2,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ScanLine",
    category: "ai",
    popular: true
  },
  {
    id: "ai-smart-contract-builder",
    title: "AI Smart Contract Builder",
    description: "No-code platform for building, testing, and deploying blockchain smart contracts. Features AI-assisted code generation, automated security audits, gas optimization, and deployment to Ethereum, Solana, Polygon, and more. Includes template library for DeFi, NFTs, DAOs, and enterprise use cases.",
    features: ["No-code contract builder", "AI code generation", "Automated security audit", "Gas optimization", "Multi-chain deployment", "Template library", "Testing framework"],
    benefits: ["Smart contracts without coding", "Security-first approach", "Lower gas costs", "Faster deployment", "Enterprise templates"],
    pricing: { basic: "$199/mo", pro: "$599/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Blocks",
    category: "automation",
    popular: true
  },
  {
    id: "ai-voice-cloning-studio",
    title: "AI Voice Cloning Studio",
    description: "Enterprise voice cloning platform for creating lifelike synthetic voices from minutes of audio. Features emotion control, multi-language cloning, real-time synthesis, and API access for integration. Used for audiobooks, IVR systems, video localization, and accessibility applications.",
    features: ["Minutes-to-voice cloning", "Emotion/pace control", "Multi-language cloning", "Real-time synthesis", "API access", "Voice marketplace", "Consent management"],
    benefits: ["Instant voice creation", "Perfect brand consistency", "Multilingual at scale", "Emotionally expressive", "Accessible content"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Mic",
    category: "ai",
    popular: false
  },
  {
    id: "ai-visa-immigration-assistant",
    title: "AI Visa & Immigration Assistant",
    description: "AI-powered platform for visa applications, immigration document preparation, and case tracking. Features country-specific requirement analysis, document checklist generation, form auto-filling, and deadline tracking. Covers 30+ visa categories across 50+ countries.",
    features: ["Country-specific analysis", "Document checklist", "Form auto-filling", "Deadline tracking", "Case status monitoring", "Interview prep", "Employer portal"],
    benefits: ["Fewer application errors", "Faster processing", "Deadline compliance", "Stress reduction", "Higher approval rates"],
    pricing: { basic: "$49/case", pro: "$149/case", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "PlaneLanding",
    category: "saas",
    popular: false
  },
  {
    id: "ai-procurement-optimization",
    title: "AI Procurement Optimization Platform",
    description: "End-to-end procurement optimization using machine learning. Features supplier discovery, RFQ automation, spend analytics, contract compliance monitoring, and predictive price forecasting. Reduces procurement costs by 18% and cycle times by 50%.",
    features: ["ML supplier discovery", "Automated RFQ", "Spend analytics", "Contract compliance", "Price forecasting", "PO automation", "Supplier performance scoring"],
    benefits: ["18% cost reduction", "50% faster cycles", "Better supplier selection", "Contract compliance", "Predictable pricing"],
    pricing: { basic: "$799/mo", pro: "$2,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ShoppingCart",
    category: "automation",
    popular: false
  },
  {
    id: "ai-deepfake-detection",
    title: "AI Deepfake Detection Platform",
    description: "Real-time deepfake detection for images, video, and audio. Uses ensemble of neural networks to detect manipulated media with 98% accuracy. Features API for social platforms, newsrooms, and identity verification services. Includes provenance tracking using C2PA standards.",
    features: ["Image deepfake detection", "Video manipulation detection", "Audio cloning detection", "Real-time API", "C2PA provenance tracking", "Batch processing", "Confidence scoring"],
    benefits: ["98% detection accuracy", "Protect brand reputation", "Content authenticity", "Platform integration", "Standard compliance"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "ScanFace",
    category: "ai",
    popular: true
  },
  {
    id: "ai-crowd-management",
    title: "AI Crowd Management & Safety",
    description: "Computer vision platform for crowd monitoring at events, stadiums, and public spaces. Features density estimation, flow analysis, anomaly detection, and emergency evacuation guidance. Integrates with CCTV, access control, and public announcement systems.",
    features: ["Real-time density estimation", "Flow analysis & prediction", "Anomaly detection", "Evacuation routing", "CCTV integration", "Access control integration", "Capacity management"],
    benefits: ["Prevent dangerous crowding", "Faster emergency response", "Optimized venue layouts", "Compliance with safety regulations", "Live capacity management"],
    pricing: { basic: "$699/mo", pro: "$1,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Users",
    category: "ai",
    popular: false
  },
  {
    id: "ai-soil-health-monitor",
    title: "AI Soil Health Monitoring Platform",
    description: "Precision agriculture platform that analyzes soil composition, moisture, nutrients, and microbial activity using IoT sensors and satellite data. Generates fertilization recommendations, erosion risk scores, and carbon sequestration estimates for farms and land managers.",
    features: ["Soil composition analysis", "Moisture & nutrient mapping", "Microbial activity assessment", "Erosion risk scoring", "Carbon sequestration estimation", "IoT sensor integration", "Satellite data fusion"],
    benefits: ["20% fertilizer reduction", "Improved crop yields", "Erosion prevention", "Carbon credit generation", "Data-driven land management"],
    pricing: { basic: "$199/mo", pro: "$599/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Sprout",
    category: "ai",
    popular: false
  },
  {
    id: "ai-customer-journey-orchestration",
    title: "AI Customer Journey Orchestration",
    description: "Omnichannel customer journey orchestration platform that uses AI to personalize every touchpoint. Features journey mapping, next-best-action prediction, channel optimization, and real-time decisioning. Integrates with Salesforce, HubSpot, Segment, and 100+ marketing tools.",
    features: ["Journey mapping", "Next-best-action AI", "Channel optimization", "Real-time decisioning", "CRM integration", "A/B testing", "Attribution modeling"],
    benefits: ["35% higher conversion", "Personalized at scale", "Optimal channel selection", "Measurable ROI", "Unified customer view"],
    pricing: { basic: "$999/mo", pro: "$2,999/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Route",
    category: "automation",
    popular: true
  },
  {
    id: "ai-protein-folding",
    title: "AI Protein Structure Prediction Platform",
    description: "Deep learning platform for predicting protein 3D structures from amino acid sequences. Integrates with AlphaFold-style models for research in drug discovery, enzyme engineering, and synthetic biology. Features batch prediction, visualization tools, and collaboration features for research teams.",
    features: ["Sequence-to-structure prediction", "Batch processing", "3D visualization", "Confidence scoring", "Mutation impact analysis", "Collaborative workspaces", "Research database integration"],
    benefits: ["Accelerate drug discovery", "Understand disease mechanisms", "Enzyme engineering", "Reduced wet lab costs", "Research collaboration"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Dna",
    category: "ai",
    popular: false
  },
  {
    id: "ai-port-security",
    title: "AI Port Security & Vessel Monitoring",
    description: "Computer vision and AIS data fusion platform for maritime port security. Features vessel identification, cargo anomaly detection, restricted zone monitoring, and integration with port community systems. Reduces security incidents by 60% and inspection times by 45%.",
    features: ["Vessel identification (AIS/CV)", "Cargo anomaly detection", "Restricted zone monitoring", "Port community integration", "Container tracking", "Dark vessel detection", "Automated reporting"],
    benefits: ["60% fewer security incidents", "45% faster inspections", "24/7 monitoring", "Automated compliance", "Dark vessel identification"],
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Ship",
    category: "ai",
    popular: false
  },
  {
    id: "ai-esg-reporting",
    title: "AI ESG Reporting & Compliance Platform",
    description: "Automated ESG (Environmental, Social, Governance) reporting platform. Collects data from across the organization, calculates ESG scores, generates reports compliant with GRI, SASB, TCFD, and CSRD frameworks. Features peer benchmarking and improvement recommendations.",
    features: ["Automated data collection", "ESG score calculation", "GRI/SASB/TCFD/CSRD compliance", "Peer benchmarking", "Improvement recommendations", "Audit trail", "Board-ready dashboards"],
    benefits: ["80% faster reporting", "Framework compliance", "Investor confidence", "Continuous improvement", "Audit readiness"],
    pricing: { basic: "$1,499/mo", pro: "$4,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "BarChart3",
    category: "saas",
    popular: true
  },
  {
    id: "ai-brain-mapping",
    title: "AI Brain Mapping & Neuroscience Platform",
    description: "Advanced neuroimaging analysis platform for brain mapping research. Features fMRI/EEG signal processing, connectivity analysis, lesion segmentation, and atlas-based parcellation. Used by universities, hospitals, and pharmaceutical companies for neuroscience research.",
    features: ["fMRI/EEG processing", "Connectivity analysis", "Lesion segmentation", "Atlas-based parcellation", "Longitudinal analysis", "Multi-modal fusion", "Statistical mapping"],
    benefits: ["Faster research insights", "Automated analysis", "Reproducible results", "Multi-modal integration", "Collaboration features"],
    pricing: { basic: "$599/mo", pro: "$1,799/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Brain",
    category: "ai",
    popular: false
  },
  {
    id: "ai-digital-twin-cities",
    title: "AI Digital Twin for Smart Cities",
    description: "City-scale digital twin platform that simulates urban systems (traffic, energy, water, waste, air quality). Features real-time data integration, scenario modeling, and policy impact simulation. Used by city planners to optimize infrastructure investments and sustainability goals.",
    features: ["Real-time city simulation", "Traffic/water/energy/waste modeling", "Policy impact simulation", "IoT data integration", "Sustainability scoring", "Investment optimization", "Citizen engagement portal"],
    benefits: ["20% infrastructure savings", "Data-driven policy", "Sustainability tracking", "Citizen engagement", "Disaster preparedness"],
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Building2",
    category: "ai",
    popular: false
  },
  {
    id: "ai-employee-engagement",
    title: "AI Employee Engagement Platform",
    description: "AI-powered employee engagement platform that analyzes sentiment from surveys, emails, and collaboration tools. Features pulse surveys, burnout prediction, retention risk scoring, and personalized development recommendations. HIPAA/GDPR compliant with anonymized analytics.",
    features: ["Sentiment analysis", "Pulse surveys", "Burnout prediction", "Retention risk scoring", "Development recommendations", "Anonymized analytics", "Manager dashboards"],
    benefits: ["30% lower turnover", "Early burnout detection", "Personalized development", "Data-driven HR decisions", "Employee satisfaction"],
    pricing: { basic: "$39/employee/mo", pro: "$69/employee/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Users",
    category: "saas",
    popular: false
  },
  {
    id: "ai-inventory-optimization",
    title: "AI Inventory Optimization Engine",
    description: "ML-powered inventory optimization for retail and manufacturing. Features demand forecasting, safety stock calculation, reorder point optimization, and multi-echelon inventory planning. Reduces carrying costs by 25% and stockouts by 40%.",
    features: ["Demand forecasting", "Safety stock optimization", "Reorder point calculation", "Multi-echelon planning", "Seasonal adjustment", "Supplier lead time analysis", "Dead stock identification"],
    benefits: ["25% lower carrying costs", "40% fewer stockouts", "Optimized reorder points", "Reduced dead stock", "Supply chain resilience"],
    pricing: { basic: "$499/mo", pro: "$1,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Package",
    category: "ai",
    popular: true
  },
  {
    id: "ai-weather-index-insurance",
    title: "AI Weather Index Insurance Platform",
    description: "Parametric insurance platform that uses satellite weather data to automatically trigger payouts for farmers and communities affected by drought, flood, or extreme weather. Features transparent pricing, automatic claims processing, and reinsurance integration.",
    features: ["Satellite weather monitoring", "Automatic trigger detection", "Instant payout processing", "Transparent pricing models", "Reinsurance integration", "Farmer mobile app", "Historical weather simulation"],
    benefits: "Instant claims payouts, Transparent triggers, Reduced fraud, Financial resilience for farmers, Scalable insurance",
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "CloudRain",
    category: "saas",
    popular: false
  },
  {
    id: "ai-art-authhentication",
    title: "AI Art Authentication & Provenance",
    description: "Computer vision platform for authenticating artworks and tracking provenance. Features brushstroke analysis, material composition detection, forgery detection, and blockchain-based provenance tracking. Used by auction houses, museums, galleries, and collectors.",
    features: ["Brushstroke analysis", "Material composition detection", "Forgery detection", "Provenance blockchain", "Condition reporting", "Market value estimation", "Artist attribution"],
    benefits: ["Detect forgeries", "Verify authenticity", "Track provenance", "Protect investments", "Museum-grade analysis"],
    pricing: { basic: "$99/appraisal", pro: "$299/appraisal", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Palette",
    category: "ai",
    popular: false
  },
  {
    id: "ai-negotiation-coach",
    title: "AI Negotiation Coach",
    description: "Real-time AI coaching platform for business negotiations. Features sentiment analysis of communication, strategy suggestions, BATNA calculation, and deal scoring. Integrates with email and video call platforms for real-time guidance during high-stakes negotiations.",
    features: ["Real-time sentiment analysis", "Strategy suggestions", "BATNA calculation", "Deal scoring", "Email/call integration", "Historical outcome analysis", "Scenario modeling"],
    benefits: ["Better deal outcomes", "Real-time coaching", "Reduced negotiation anxiety", "Data-driven strategy", "Continuous improvement"],
    pricing: { basic: "$99/mo", pro: "$299/mo", enterprise: "$799/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Scale",
    category: "ai",
    popular: false
  },
  {
    id: "ai-microgrid-management",
    title: "AI Microgrid Energy Management",
    description: "Intelligent microgrid controller that optimizes energy generation, storage, and consumption across solar, wind, battery, and grid sources. Features predictive load balancing, demand response, and energy arbitrage. Reduces energy costs by 30% and carbon footprint by 45%.",
    features: ["Predictive load balancing", "Battery optimization", "Demand response", "Energy arbitrage", "Carbon footprint tracking", "Grid export optimization", "Outage prediction"],
    benefits: ["30% energy cost reduction", "45% carbon reduction", "Grid independence", "Predictive maintenance", "Energy trading revenue"],
    pricing: { basic: "$1,199/mo", pro: "$3,499/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Zap",
    category: "automation",
    popular: false
  },
  {
    id: "ai-competitor-price-monitoring",
    title: "AI Competitor Price Monitoring",
    description: "Automated competitor price tracking and dynamic pricing intelligence. Monitors competitor pricing across e-commerce, marketplaces, and direct channels. Features price alerting, margin analysis, and dynamic pricing recommendations. Real-time dashboards and automated repricing.",
    features: ["Automated price tracking", "Dynamic pricing recommendations", "Margin analysis", "Price alerting", "Historical trend analysis", "Competitor catalog mapping", "Automated repricing API"],
    benefits: ["Competitive pricing", "Margin optimization", "Faster response to changes", "Automated repricing", "Market intelligence"],
    pricing: { basic: "$299/mo", pro: "$899/mo", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "TrendingDown",
    category: "automation",
    popular: true
  },
  {
    id: "ai-hospital-operations",
    title: "AI Hospital Operations Optimizer",
    description: "AI platform for hospital operational efficiency. Features patient flow prediction, staff scheduling optimization, bed management, OR scheduling, and supply chain forecasting. Reduces wait times by 30% and operational costs by 20%.",
    features: ["Patient flow prediction", "Staff scheduling optimization", "Bed management AI", "OR scheduling", "Supply chain forecasting", "ED wait time reduction", "Discharge prediction"],
    benefits: ["30% shorter wait times", "20% cost reduction", "Better staff utilization", "Improved patient experience", "Operational efficiency"],
    pricing: { basic: "Custom", pro: "Custom", enterprise: "Custom" },
    contactInfo: { website: "https://ziontechgroup.com", email: "kleber@ziontechgroup.com", phone: "+1 302 464 0950" },
    icon: "Hospital",
    category: "ai",
    popular: true
  }
"""

new_content = content[:last_close] + waves + content[last_close:]

with open(path, 'w') as f:
    f.write(new_content)

with open(path, 'r') as f:
    new = f.read()

import re
services = re.findall(r'\{\s*\n\s*id:', new)
print(f"Waves 54-56: Inserted successfully!")
print(f"Total service blocks: {len(services)}")
print(f"Total lines: {len(new.splitlines())}")
