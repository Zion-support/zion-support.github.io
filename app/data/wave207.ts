import { Service } from './servicesData';

// Wave 207 — FinTech, HealthTech & Industry 4.0 (10 services)
export const wave207AiServices: Service[] = [
  {
    id: "ai-credit-risk-scorer",
    title: "AI Credit Risk Scoring Platform",
    description: "AI-powered credit risk assessment platform that analyzes traditional and alternative data sources for lending decisions. Explainable AI models with regulatory compliance, bias monitoring, and real-time scoring APIs.",
    category: "Ai",
    icon: "💳",
    href: "/services/ai-credit-risk-scorer",
    industry: "Financial Services",
    stage: "published",
    popular: true,
    pricing: { basic: "$349/mo", pro: "$799/mo", enterprise: "$1699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Alternative data analysis (cash flow, behavioral, social signals)",
      "Explainable AI with reason codes for every decision",
      "Bias monitoring with demographic parity tracking",
      "Real-time scoring API with sub-100ms response",
      "Regulatory compliance (ECOA, Fair Lending, GDPR)",
      "Model performance monitoring with drift detection"
    ],
    benefits: [
      "Approve 20% more creditworthy applicants with alternative data",
      "Reduce default rates with more accurate risk assessment",
      "Ensure fair lending compliance with bias monitoring",
      "Make instant credit decisions with real-time scoring"
    ]
  },
  {
    id: "ai-patient-scheduling",
    title: "AI Patient Scheduling & Flow Optimizer",
    description: "Intelligent patient scheduling platform for healthcare systems that optimizes appointment slots, reduces no-shows, and balances provider workloads. Predictive no-show modeling with automated reminder campaigns.",
    category: "Ai",
    icon: "🏥",
    href: "/services/ai-patient-scheduling",
    industry: "Healthcare",
    stage: "published",
    popular: true,
    pricing: { basic: "$199/mo", pro: "$449/mo", enterprise: "$999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Predictive no-show modeling with patient risk scoring",
      "Intelligent overbooking based on cancellation probability",
      "Automated reminder campaigns via SMS, email, and phone",
      "Multi-location and multi-provider schedule optimization",
      "Waitlist management with automated backfill",
      "Patient self-service rescheduling with mobile app"
    ],
    benefits: [
      "Reduce no-shows by 35% with predictive interventions",
      "Increase provider utilization by 20% with smart scheduling",
      "Improve patient satisfaction with reduced wait times",
      "Maximize revenue with optimized appointment density"
    ]
  }
];

export const wave207DataServices: Service[] = [
  {
    id: "financial-data-warehouse",
    title: "Financial Data Warehouse Platform",
    description: "Purpose-built financial data warehouse with pre-built schemas for banking, insurance, and capital markets. Regulatory reporting, risk analytics, and real-time position tracking with SOX-compliant audit trails.",
    category: "Data",
    icon: "🏦",
    href: "/services/financial-data-warehouse",
    industry: "Financial Services",
    stage: "published",
    popular: false,
    pricing: { basic: "$499/mo", pro: "$1199/mo", enterprise: "$2499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Pre-built financial data models (banking, insurance, capital markets)",
      "Regulatory reporting templates (CCAR, Basel III, Solvency II)",
      "Real-time position tracking with P&L attribution",
      "Risk analytics with VaR, stress testing, and scenario analysis",
      "SOX-compliant audit trails with immutable data lineage",
      "Data quality rules specific to financial data standards"
    ],
    benefits: [
      "Accelerate regulatory reporting from weeks to days",
      "Reduce risk of regulatory non-compliance",
      "Unify financial data across business lines",
      "Enable real-time risk monitoring and decision-making"
    ]
  }
];

export const wave207CloudServices: Service[] = [
  {
    id: "hybrid-cloud-orchestrator",
    title: "Hybrid Cloud Orchestration Platform",
    description: "Unified hybrid cloud management platform that orchestrates workloads across on-premises, private cloud, and public cloud. Intelligent placement, cost optimization, and consistent security policies across all environments.",
    category: "Cloud",
    icon: "☁️",
    href: "/services/hybrid-cloud-orchestrator",
    industry: "Cloud Operations",
    stage: "published",
    popular: true,
    pricing: { basic: "$299/mo", pro: "$699/mo", enterprise: "$1499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Unified management console for on-prem, private, and public cloud",
      "Intelligent workload placement based on cost, performance, and compliance",
      "Consistent security and governance policies across environments",
      "Automated burst-to-cloud for peak demand handling",
      "Data synchronization with conflict resolution",
      "Cost optimization with cross-cloud resource right-sizing"
    ],
    benefits: [
      "Avoid vendor lock-in with true hybrid cloud flexibility",
      "Optimize costs by placing workloads in the right environment",
      "Maintain consistent security across all infrastructure",
      "Scale to public cloud for peaks without over-provisioning on-prem"
    ]
  }
];

export const wave207SecurityServices: Service[] = [
  {
    id: "fraud-detection-engine",
    title: "Real-Time Fraud Detection Engine",
    description: "AI-powered fraud detection platform that analyzes transactions in real-time using behavioral biometrics, device intelligence, and network analysis. Sub-50ms scoring with adaptive models that evolve with fraud patterns.",
    category: "Security",
    icon: "🕵️",
    href: "/services/fraud-detection-engine",
    industry: "Financial Security",
    stage: "published",
    popular: true,
    pricing: { basic: "$349/mo", pro: "$799/mo", enterprise: "$1699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real-time transaction scoring with sub-50ms latency",
      "Behavioral biometrics (typing, mouse, touch patterns)",
      "Device intelligence with fingerprinting and emulation detection",
      "Network analysis with mule account identification",
      "Adaptive ML models that learn from new fraud patterns",
      "Case management with investigator workflow tools"
    ],
    benefits: [
      "Detect fraud in real-time before transactions complete",
      "Reduce false positives by 60% with behavioral biometrics",
      "Adapt to new fraud schemes without manual rule updates",
      "Minimize fraud losses while maintaining customer experience"
    ]
  }
];

export const wave207AutomationServices: Service[] = [
  {
    id: "smart-manufacturing-ops",
    title: "Smart Manufacturing Operations Platform",
    description: "Industry 4.0 platform that connects factory equipment, monitors production in real-time, and optimizes manufacturing processes. OEE tracking, predictive quality, and digital twin integration.",
    category: "Automation",
    icon: "🏭",
    href: "/services/smart-manufacturing-ops",
    industry: "Manufacturing",
    stage: "published",
    popular: true,
    pricing: { basic: "$399/mo", pro: "$899/mo", enterprise: "$1999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real-time OEE (Overall Equipment Effectiveness) tracking",
      "Predictive quality with in-line defect detection",
      "Digital twin integration for process simulation",
      "Energy monitoring with consumption optimization",
      "Production scheduling with constraint-based optimization",
      "Integration with PLCs, SCADA, and MES systems"
    ],
    benefits: [
      "Increase OEE by 15-25% with real-time visibility",
      "Reduce defect rates by 40% with predictive quality",
      "Optimize energy consumption by 20%",
      "Simulate process changes with digital twins before implementing"
    ]
  }
];

export const wave207ItServices: Service[] = [
  {
    id: "unified-endpoint-management",
    title: "Unified Endpoint Management (UEM)",
    description: "Comprehensive endpoint management platform that secures and manages laptops, desktops, mobile devices, and IoT from a single console. Zero-touch enrollment, compliance enforcement, and remote troubleshooting.",
    category: "It",
    icon: "📱",
    href: "/services/unified-endpoint-management",
    industry: "IT Operations",
    stage: "published",
    popular: true,
    pricing: { basic: "$49/mo", pro: "$129/mo", enterprise: "$299/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Single console for Windows, macOS, iOS, Android, and IoT",
      "Zero-touch enrollment with automated device provisioning",
      "Compliance enforcement with conditional access policies",
      "Remote troubleshooting with screen sharing and command execution",
      "Application management with silent install and update",
      "Asset inventory with hardware and software tracking"
    ],
    benefits: [
      "Manage all endpoints from one platform",
      "Reduce device provisioning time from hours to minutes",
      "Enforce security compliance across all devices",
      "Support remote workforce with self-service capabilities"
    ]
  }
];

export const wave207MicroSaasServices: Service[] = [
  {
    id: "proposal-software",
    title: "AI Proposal & RFP Response Platform",
    description: "AI-powered proposal management platform that automates RFP responses, proposal creation, and contract drafting. Content library, collaboration workflows, and win rate analytics.",
    category: "MicroSaas",
    icon: "📋",
    href: "/services/proposal-software",
    industry: "Sales & Business Development",
    stage: "published",
    popular: true,
    pricing: { basic: "$79/mo", pro: "$199/mo", enterprise: "$449/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "AI content generation from RFP requirements and past wins",
      "Content library with version control and approval workflows",
      "Collaborative editing with role-based access",
      "Win/loss analytics with proposal performance tracking",
      "CRM integration for opportunity-linked proposals",
      "E-signature integration for proposal acceptance"
    ],
    benefits: [
      "Reduce proposal creation time by 70%",
      "Increase win rates with data-driven content optimization",
      "Eliminate redundant content creation across teams",
      "Track what content wins and what doesn't"
    ]
  }
];

export const wave207HealthcareItServices: Service[] = [
  {
    id: "telehealth-platform",
    title: "Telehealth & Virtual Care Platform",
    description: "Complete telehealth solution for healthcare providers with HD video consultations, e-prescribing, appointment scheduling, and integrated billing. HIPAA-compliant with EHR integration and patient portal.",
    category: "HealthcareIt",
    icon: "🩺",
    href: "/services/telehealth-platform",
    industry: "Healthcare",
    stage: "published",
    popular: true,
    pricing: { basic: "$299/mo", pro: "$699/mo", enterprise: "$1499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "HD video consultations with screen sharing",
      "E-prescribing with pharmacy network integration",
      "Automated appointment scheduling with reminders",
      "Integrated billing with insurance verification",
      "HIPAA-compliant messaging and file sharing",
      "EHR integration (Epic, Cerner, Allscripts)"
    ],
    benefits: [
      "Expand patient reach beyond geographic limits",
      "Reduce no-shows with automated reminders",
      "Streamline workflows with EHR integration",
      "Increase revenue with virtual visit billing"
    ]
  },
  {
    id: "healthcare-data-interoperability",
    title: "Healthcare Data Interoperability Hub",
    description: "HL7 FHIR-compliant data integration platform that connects EHRs, labs, pharmacies, and medical devices. Real-time data exchange with patient identity matching and consent management.",
    category: "HealthcareIt",
    icon: "🔗",
    href: "/services/healthcare-data-interoperability",
    industry: "Healthcare IT",
    stage: "published",
    popular: false,
    pricing: { basic: "$499/mo", pro: "$1199/mo", enterprise: "$2499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "HL7 FHIR R4 compliant API gateway",
      "Patient identity matching across systems",
      "Real-time data exchange with event streaming",
      "Consent management with patient preferences",
      "Lab results integration with LOINC mapping",
      "Medical device data ingestion (IoT/IoMT)"
    ],
    benefits: [
      "Break down data silos across healthcare systems",
      "Enable coordinated care with unified patient records",
      "Meet interoperability mandates (21st Century Cures Act)",
      "Reduce manual data entry and transcription errors"
    ]
  }
];
