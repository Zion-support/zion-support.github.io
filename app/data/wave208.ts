import { Service } from './servicesData';

// Wave 208 — GreenTech, SpaceTech & Advanced Analytics (10 services)
export const wave208AiServices: Service[] = [
  {
    id: "ai-carbon-footprint-tracker",
    title: "AI Carbon Footprint Tracker",
    description: "AI-powered carbon emissions monitoring and reduction platform for enterprises. Tracks Scope 1, 2, and 3 emissions across supply chains, recommends reduction strategies, and automates ESG reporting.",
    category: "Ai",
    icon: "🌱",
    href: "/services/ai-carbon-footprint-tracker",
    industry: "Sustainability",
    stage: "published",
    popular: true,
    pricing: { basic: "$299/mo", pro: "$699/mo", enterprise: "$1499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Scope 1, 2, and 3 emissions tracking across operations",
      "AI-powered reduction recommendations with ROI analysis",
      "Automated ESG reporting (GRI, SASB, TCFD frameworks)",
      "Supply chain emissions mapping with supplier scoring",
      "Carbon offset marketplace integration",
      "Real-time emissions dashboard with trend analysis"
    ],
    benefits: [
      "Reduce carbon emissions by 30% with AI-guided actions",
      "Automate ESG reporting and ensure compliance",
      "Identify highest-impact reduction opportunities",
      "Demonstrate sustainability leadership to stakeholders"
    ]
  },
  {
    id: "ai-satellite-imagery-analytics",
    title: "AI Satellite Imagery Analytics Platform",
    description: "Process and analyze satellite and drone imagery with AI for agriculture, urban planning, disaster response, and environmental monitoring. Change detection, object classification, and predictive modeling.",
    category: "Ai",
    icon: "🛰️",
    href: "/services/ai-satellite-imagery-analytics",
    industry: "Geospatial Intelligence",
    stage: "published",
    popular: false,
    pricing: { basic: "$499/mo", pro: "$1199/mo", enterprise: "$2499/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Multi-spectral and SAR imagery processing",
      "AI object detection and land use classification",
      "Change detection with automated alerts",
      "Crop health monitoring with NDVI analysis",
      "Disaster damage assessment with rapid deployment",
      "Integration with major satellite data providers"
    ],
    benefits: [
      "Monitor vast areas cost-effectively with satellite data",
      "Detect changes and anomalies in near real-time",
      "Make data-driven decisions for land and resource management",
      "Respond faster to natural disasters with damage mapping"
    ]
  }
];

export const wave208DataServices: Service[] = [
  {
    id: "data-mesh-platform",
    title: "Data Mesh Platform",
    description: "Implement data mesh architecture with domain-oriented data ownership, self-serve data infrastructure, and federated governance. Enables scalable data management across large organizations.",
    category: "Data",
    icon: "🕸️",
    href: "/services/data-mesh-platform",
    industry: "Data Architecture",
    stage: "published",
    popular: true,
    pricing: { basic: "$599/mo", pro: "$1399/mo", enterprise: "$2999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Domain-oriented data product management",
      "Self-serve data infrastructure portal",
      "Federated data governance with policy automation",
      "Data product discovery and catalog",
      "Cross-domain data sharing with contracts",
      "Automated data quality monitoring per domain"
    ],
    benefits: [
      "Scale data management across hundreds of teams",
      "Reduce data bottlenecks with domain ownership",
      "Maintain governance without central bottlenecks",
      "Accelerate data product delivery by 5x"
    ]
  }
];

export const wave208CloudServices: Service[] = [
  {
    id: "multi-cloud-cost-optimizer",
    title: "Multi-Cloud Cost Optimizer",
    description: "AI-driven cloud cost management across AWS, Azure, and GCP. Identifies waste, recommends reserved instance purchases, and automates resource right-sizing. Real-time cost allocation and chargeback.",
    category: "Cloud",
    icon: "💰",
    href: "/services/multi-cloud-cost-optimizer",
    industry: "Cloud FinOps",
    stage: "published",
    popular: true,
    pricing: { basic: "$199/mo", pro: "$499/mo", enterprise: "$999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Cross-cloud cost visibility and analytics",
      "AI-powered waste detection and recommendations",
      "Reserved instance and savings plan optimization",
      "Automated resource right-sizing and scheduling",
      "Cost allocation with showback and chargeback",
      "Budget alerts with anomaly detection"
    ],
    benefits: [
      "Reduce cloud spend by 35% on average",
      "Eliminate wasted resources automatically",
      "Accurate cost allocation across teams and projects",
      "Predict and prevent budget overruns"
    ]
  }
];

export const wave208SecurityServices: Service[] = [
  {
    id: "supply-chain-security",
    title: "Software Supply Chain Security",
    description: "End-to-end supply chain security platform that scans dependencies, builds, and deployments for vulnerabilities. SBOM generation, license compliance, and automated remediation.",
    category: "Security",
    icon: "🔒",
    href: "/services/supply-chain-security",
    industry: "Application Security",
    stage: "published",
    popular: true,
    pricing: { basic: "$249/mo", pro: "$599/mo", enterprise: "$1299/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Dependency vulnerability scanning (SCA)",
      "SBOM generation and management (SPDX, CycloneDX)",
      "Build pipeline security with signed artifacts",
      "License compliance automation",
      "Container image scanning with CVE matching",
      "Automated pull request remediation"
    ],
    benefits: [
      "Prevent supply chain attacks before they reach production",
      "Automate compliance with SBOM mandates",
      "Reduce vulnerability remediation time by 80%",
      "Maintain license compliance across all dependencies"
    ]
  }
];

export const wave208AutomationServices: Service[] = [
  {
    id: "intelligent-document-processing",
    title: "Intelligent Document Processing (IDP)",
    description: "AI-powered document processing that extracts, classifies, and validates data from any document type. Handles invoices, contracts, forms, and unstructured documents with human-in-the-loop verification.",
    category: "Automation",
    icon: "📄",
    href: "/services/intelligent-document-processing",
    industry: "Enterprise Automation",
    stage: "published",
    popular: true,
    pricing: { basic: "$199/mo", pro: "$449/mo", enterprise: "$999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Multi-format document ingestion (PDF, scan, email, image)",
      "AI classification with 99% accuracy",
      "Structured and unstructured data extraction",
      "Human-in-the-loop verification workflow",
      "ERP and accounting system integration",
      "Continuous learning from corrections"
    ],
    benefits: [
      "Process documents 10x faster than manual entry",
      "Reduce data entry errors by 95%",
      "Free staff from repetitive document handling",
      "Scale document processing without hiring"
    ]
  }
];

export const wave208ItServices: Service[] = [
  {
    id: "digital-experience-monitoring",
    title: "Digital Experience Monitoring (DEM)",
    description: "Monitor end-user experience across web, mobile, and desktop applications. Real user monitoring, synthetic testing, and AI-powered root cause analysis for performance issues.",
    category: "It",
    icon: "📊",
    href: "/services/digital-experience-monitoring",
    industry: "IT Operations",
    stage: "published",
    popular: false,
    pricing: { basic: "$149/mo", pro: "$399/mo", enterprise: "$899/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "Real user monitoring (RUM) with session replay",
      "Synthetic transaction testing from global locations",
      "AI-powered anomaly detection and root cause analysis",
      "Mobile app performance monitoring",
      "SLA tracking with automated alerting",
      "Integration with ITSM and incident management"
    ],
    benefits: [
      "Detect performance issues before users complain",
      "Reduce MTTR with AI-powered root cause analysis",
      "Optimize user experience across all digital channels",
      "Meet SLA commitments with proactive monitoring"
    ]
  }
];

export const wave208MicroSaasServices: Service[] = [
  {
    id: "churn-prediction-saas",
    title: "Churn Prediction & Prevention Platform",
    description: "AI-powered churn prediction for SaaS and subscription businesses. Identifies at-risk customers, recommends retention actions, and automates win-back campaigns with personalized offers.",
    category: "MicroSaas",
    icon: "🎯",
    href: "/services/churn-prediction-saas",
    industry: "SaaS & Subscriptions",
    stage: "published",
    popular: true,
    pricing: { basic: "$99/mo", pro: "$299/mo", enterprise: "$699/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "AI churn risk scoring with behavioral signals",
      "Early warning alerts with risk factor breakdown",
      "Automated retention campaign triggers",
      "Personalized win-back offer recommendations",
      "Cohort analysis with lifetime value impact",
      "Integration with CRM and billing systems"
    ],
    benefits: [
      "Reduce churn by 25% with early intervention",
      "Increase customer lifetime value by 30%",
      "Automate retention workflows at scale",
      "Understand why customers leave before they do"
    ]
  }
];

export const wave208HealthcareItServices: Service[] = [
  {
    id: "clinical-trial-management",
    title: "AI Clinical Trial Management Platform",
    description: "Streamline clinical trials with AI-powered patient recruitment, site selection, and protocol optimization. Real-time monitoring, adverse event detection, and regulatory submission automation.",
    category: "HealthcareIt",
    icon: "🧪",
    href: "/services/clinical-trial-management",
    industry: "Pharmaceutical",
    stage: "published",
    popular: false,
    pricing: { basic: "$799/mo", pro: "$1799/mo", enterprise: "$3999/mo" },
    contactInfo: { website: "https://ziontechgroup.com", email: "commercial@ziontechgroup.com", phone: "+1 302 464 0950" },
    features: [
      "AI patient recruitment with EHR data matching",
      "Site selection optimization with enrollment forecasting",
      "Protocol deviation detection with automated alerts",
      "Adverse event monitoring with safety signal detection",
      "eCRF data capture with validation rules",
      "Regulatory submission document automation"
    ],
    benefits: [
      "Accelerate patient recruitment by 40%",
      "Reduce trial costs with optimized site selection",
      "Improve data quality with automated validation",
      "Speed regulatory submissions with auto-generated documents"
    ]
  }
];
