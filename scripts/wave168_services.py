#!/usr/bin/env python3
"""Wave 168 — 15 new industry-focused services."""
import json

WAVE = 168
PREFIX = f"wave{WAVE}"

NEW_SERVICES = [
  # === HEALTHCARE IT (3) ===
  {
    "id": "healthcare-patient-engagement-platform",
    "title": "Healthcare Patient Engagement Platform",
    "description": "HIPAA-compliant patient engagement platform with appointment scheduling, reminders, telehealth, patient portal, and automated follow-ups. Improve patient satisfaction and reduce no-shows by 40%.",
    "features": ["Online appointment scheduling", "Automated SMS/email reminders", "Telehealth integration", "Patient portal with records access", "Post-visit surveys", "Prescription refill requests", "Secure messaging with providers", "HIPAA-compliant messaging"],
    "benefits": ["Reduce no-shows by 40%", "Improve patient satisfaction scores", "Automate administrative tasks", "Increase patient retention"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/healthcare-patient-engagement-platform", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🏥", "href": "/services/healthcare-patient-engagement-platform", "popular": True, "category": "healthcare-it", "industry": "Healthcare"
  },
  {
    "id": "healthcare-clinical-decision-support",
    "title": "AI Clinical Decision Support System",
    "description": "AI-powered clinical decision support that analyzes patient data, medical literature, and clinical guidelines to provide evidence-based treatment recommendations. Integrates with EHR systems.",
    "features": ["Evidence-based treatment suggestions", "Drug interaction alerts", "Clinical guideline integration", "Patient risk stratification", "EHR integration (Epic, Cerner)", "Lab result interpretation", "Clinical trial matching", "Physician workflow integration"],
    "benefits": ["Reduce diagnostic errors by 30%", "Improve treatment outcomes", "Stay current with medical literature", "Enhance clinical efficiency"],
    "pricing": {"basic": "$1,999/mo", "pro": "$5,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/healthcare-clinical-decision-support", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🩺", "href": "/services/healthcare-clinical-decision-support", "popular": False, "category": "healthcare-it", "industry": "Healthcare"
  },
  {
    "id": "healthcare-revenue-cycle-management",
    "title": "AI Revenue Cycle Management Platform",
    "description": "Automate healthcare revenue cycle from patient registration to final payment. AI-powered coding, claims submission, denial management, and payment reconciliation.",
    "features": ["Automated medical coding (ICD-10, CPT)", "Electronic claims submission", "Denial prediction and prevention", "Payment reconciliation", "Patient cost estimation", "Prior authorization automation", "Compliance reporting", "Integration with billing systems"],
    "benefits": ["Reduce claim denials by 50%", "Accelerate payment cycles", "Improve coding accuracy", "Increase revenue capture"],
    "pricing": {"basic": "$2,499/mo", "pro": "$7,499/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/healthcare-revenue-cycle-management", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "💰", "href": "/services/healthcare-revenue-cycle-management", "popular": False, "category": "healthcare-it", "industry": "Healthcare"
  },

  # === FINTECH (3) ===
  {
    "id": "fintech-aml-compliance-platform",
    "title": "Anti-Money Laundering (AML) Compliance Platform",
    "description": "AI-powered AML compliance with transaction monitoring, suspicious activity detection, customer due diligence, and regulatory reporting. Meet FinCEN, FATF, and BSA requirements.",
    "features": ["Real-time transaction monitoring", "Suspicious activity detection (AI)", "Customer due diligence (CDD/EDD)", "Sanctions screening", "SAR filing automation", "Risk scoring models", "Regulatory reporting", "Audit trail and documentation"],
    "benefits": ["Reduce false positives by 60%", "Automate compliance reporting", "Meet regulatory requirements", "Reduce compliance costs"],
    "pricing": {"basic": "$2,999/mo", "pro": "$8,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/fintech-aml-compliance-platform", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🏦", "href": "/services/fintech-aml-compliance-platform", "popular": True, "category": "fintech", "industry": "Finance"
  },
  {
    "id": "fintech-open-banking-platform",
    "title": "Open Banking API Platform",
    "description": "PSD2-compliant open banking platform with API gateway, consent management, and third-party integration. Enable account aggregation, payment initiation, and data sharing.",
    "features": ["PSD2-compliant APIs", "Consent management", "Account aggregation", "Payment initiation", "Third-party provider management", "Strong customer authentication", "API analytics and reporting", "Sandbox environment"],
    "benefits": ["Enable open banking partnerships", "PSD2 compliance", "New revenue streams from APIs", "Enhanced customer experience"],
    "pricing": {"basic": "$1,999/mo", "pro": "$5,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/fintech-open-banking-platform", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🔓", "href": "/services/fintech-open-banking-platform", "popular": False, "category": "fintech", "industry": "Finance"
  },
  {
    "id": "fintech-credit-scoring-engine",
    "title": "AI Credit Scoring Engine",
    "description": "Alternative credit scoring using AI and non-traditional data sources. Analyze bank transactions, utility payments, social signals, and behavioral data for more inclusive lending decisions.",
    "features": ["Alternative data analysis", "ML-based credit scoring", "Bank transaction analysis", "Behavioral scoring", "Explainable AI decisions", "Fair lending compliance", "API for loan origination", "Model monitoring and validation"],
    "benefits": ["Expand credit access to underbanked", "Reduce default rates by 25%", "Faster credit decisions", "Regulatory compliance"],
    "pricing": {"basic": "$1,499/mo", "pro": "$4,499/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/fintech-credit-scoring-engine", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "📊", "href": "/services/fintech-credit-scoring-engine", "popular": False, "category": "fintech", "industry": "Finance"
  },

  # === RETAIL TECH (3) ===
  {
    "id": "retail-inventory-optimization",
    "title": "AI Retail Inventory Optimization",
    "description": "AI-powered inventory optimization for retail chains. Demand forecasting, automatic replenishment, markdown optimization, and omnichannel inventory visibility.",
    "features": ["Demand forecasting by SKU and location", "Automatic purchase orders", "Markdown optimization", "Omnichannel inventory visibility", "Seasonal trend analysis", "Supplier lead time optimization", "Dead stock identification", "Integration with POS and ERP"],
    "benefits": ["Reduce stockouts by 45%", "Decrease excess inventory by 30%", "Optimize markdown timing", "Improve inventory turnover"],
    "pricing": {"basic": "$799/mo", "pro": "$2,499/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/retail-inventory-optimization", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🛍️", "href": "/services/retail-inventory-optimization", "popular": True, "category": "retail-tech", "industry": "Retail"
  },
  {
    "id": "retail-personalization-engine",
    "title": "Retail Personalization Engine",
    "description": "AI-powered product recommendations and personalized shopping experiences. Real-time personalization across web, mobile, email, and in-store channels.",
    "features": ["Real-time product recommendations", "Personalized search results", "Dynamic pricing optimization", "Customer segmentation", "A/B testing framework", "Cross-sell and upsell engine", "Email personalization", "In-store beacon integration"],
    "benefits": ["Increase conversion by 25%", "Improve average order value", "Enhance customer loyalty", "Unified personalization across channels"],
    "pricing": {"basic": "$599/mo", "pro": "$1,799/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/retail-personalization-engine", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🎯", "href": "/services/retail-personalization-engine", "popular": False, "category": "retail-tech", "industry": "Retail"
  },
  {
    "id": "retail-loss-prevention-system",
    "title": "AI Retail Loss Prevention System",
    "description": "Computer vision and AI-powered loss prevention for retail. Detect shoplifting, employee theft, and inventory shrinkage in real-time using existing CCTV cameras.",
    "features": ["Real-time video analytics", "Shoplifting detection", "Employee theft detection", "Self-checkout monitoring", "POS exception detection", "Heatmap analytics", "Integration with existing CCTV", "Alert management dashboard"],
    "benefits": ["Reduce shrinkage by 35%", "Real-time theft alerts", "Improve store safety", "Data-driven loss prevention"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/retail-loss-prevention-system", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🔒", "href": "/services/retail-loss-prevention-system", "popular": False, "category": "retail-tech", "industry": "Retail"
  },

  # === MANUFACTURING TECH (3) ===
  {
    "id": "manufacturing-quality-inspection",
    "title": "AI Visual Quality Inspection System",
    "description": "Computer vision-based quality inspection for manufacturing lines. Detect defects, measure dimensions, and classify products in real-time with 99.5% accuracy.",
    "features": ["Real-time defect detection", "Dimensional measurement", "Surface inspection", "Assembly verification", "Statistical process control", "Integration with PLC/SCADA", "Custom model training", "Defect trend analytics"],
    "benefits": ["Reduce defect escape rate by 90%", "Eliminate manual inspection", "Improve product quality", "Reduce warranty costs"],
    "pricing": {"basic": "$2,999/mo", "pro": "$7,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/manufacturing-quality-inspection", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🔍", "href": "/services/manufacturing-quality-inspection", "popular": True, "category": "manufacturing-tech", "industry": "Manufacturing"
  },
  {
    "id": "manufacturing-production-scheduling",
    "title": "AI Production Scheduling Optimizer",
    "description": "AI-powered production scheduling that optimizes for delivery, cost, and resource utilization. Handle complex constraints, changeovers, and multi-site scheduling.",
    "features": ["Constraint-based scheduling", "Multi-site optimization", "Changeover minimization", "What-if scenario planning", "Real-time schedule adjustment", "Integration with MES/ERP", "Resource utilization analytics", "On-time delivery tracking"],
    "benefits": ["Improve on-time delivery by 25%", "Reduce changeover time by 30%", "Optimize resource utilization", "Handle complex scheduling constraints"],
    "pricing": {"basic": "$1,999/mo", "pro": "$5,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/manufacturing-production-scheduling", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "📅", "href": "/services/manufacturing-production-scheduling", "popular": False, "category": "manufacturing-tech", "industry": "Manufacturing"
  },
  {
    "id": "manufacturing-energy-management",
    "title": "Manufacturing Energy Management System",
    "description": "AI-powered energy management for manufacturing facilities. Monitor, optimize, and reduce energy consumption across production lines while maintaining output quality.",
    "features": ["Real-time energy monitoring", "Peak demand management", "Energy consumption forecasting", "Equipment efficiency analysis", "Carbon footprint tracking", "Integration with smart meters", "Energy cost optimization", "Sustainability reporting"],
    "benefits": ["Reduce energy costs by 20-35%", "Meet sustainability targets", "Optimize peak demand charges", "Improve equipment efficiency"],
    "pricing": {"basic": "$999/mo", "pro": "$2,999/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/manufacturing-energy-management", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "⚡", "href": "/services/manufacturing-energy-management", "popular": False, "category": "manufacturing-tech", "industry": "Manufacturing"
  },

  # === EDTECH (3) ===
  {
    "id": "edtech-learning-management-system",
    "title": "AI-Powered Learning Management System",
    "description": "Next-generation LMS with AI-powered content recommendations, automated grading, learning analytics, and adaptive learning paths. For K-12, higher education, and corporate training.",
    "features": ["Adaptive learning paths", "AI content recommendations", "Automated grading and feedback", "Learning analytics dashboard", "Video lecture with AI summaries", "Discussion forum with AI moderation", "SCORM/xAPI compliance", "Mobile learning app"],
    "benefits": ["Improve learning outcomes by 30%", "Reduce instructor workload", "Personalized learning at scale", "Data-driven education decisions"],
    "pricing": {"basic": "$399/mo", "pro": "$1,299/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/edtech-learning-management-system", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🎓", "href": "/services/edtech-learning-management-system", "popular": True, "category": "edtech", "industry": "Education"
  },
  {
    "id": "edtech-virtual-lab-platform",
    "title": "Virtual Lab Platform for STEM Education",
    "description": "Cloud-based virtual laboratory platform for science, technology, engineering, and math education. Simulate physics, chemistry, biology, and engineering experiments.",
    "features": ["Physics simulations", "Chemistry lab simulations", "Biology virtual dissections", "Engineering design tools", "Collaborative experiments", "Assessment and grading integration", "VR/AR support", "Curriculum alignment"],
    "benefits": ["Enable remote STEM education", "Reduce lab costs by 70%", "Safe experimentation environment", "Unlimited experiment repetitions"],
    "pricing": {"basic": "$299/mo", "pro": "$899/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/edtech-virtual-lab-platform", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "🧪", "href": "/services/edtech-virtual-lab-platform", "popular": False, "category": "edtech", "industry": "Education"
  },
  {
    "id": "edtech-student-success-platform",
    "title": "AI Student Success Platform",
    "description": "Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.",
    "features": ["Early warning system for at-risk students", "Engagement tracking across platforms", "Predictive analytics for retention", "Automated intervention recommendations", "Advisor dashboard", "Communication automation", "Success outcome tracking", "Integration with SIS and LMS"],
    "benefits": ["Improve retention rates by 20%", "Identify at-risk students early", "Data-driven intervention strategies", "Improve graduation rates"],
    "pricing": {"basic": "$499/mo", "pro": "$1,499/mo", "enterprise": "Custom"},
    "contactInfo": {"website": "/services/edtech-student-success-platform", "email": "kleber@ziontechgroup.com", "phone": "+1 302 464 0950"},
    "icon": "📈", "href": "/services/edtech-student-success-platform", "popular": False, "category": "edtech", "industry": "Education"
  },
]

# Categorize
by_cat = {}
for s in NEW_SERVICES:
    c = s['category']
    by_cat.setdefault(c, []).append(s)

for c, svcs in by_cat.items():
    print(f"  {c}: {len(svcs)}")

# 1. Add to JSON
with open('app/data/servicesData.json') as f:
    existing = json.load(f)
existing_ids = {s['id'] for s in existing}
added = 0
for s in NEW_SERVICES:
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

insert_after = "  ...wave167AutomationServices,\n"
new_spreads = ''.join(l + '\n' for l in spread_lines)
content = content.replace(insert_after, insert_after + new_spreads)

with open('app/data/servicesData.ts', 'w') as f:
    f.write(content)

print(f"TS arrays: {', '.join(wave_arrays.keys())}")
print("Done!")
