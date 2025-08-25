export interface SpecializedITService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  websiteUrl: string;
  demoUrl?: string;
  documentationUrl?: string;
  technicalSpecs?: string[];
  integrations?: string[];
  compliance?: string[];
}

export const SPECIALIZED_IT_SERVICES: SpecializedITService[] = [
  // Cloud-Native Application Development
  {
    id: "cloud-native-app-development",
    title: "Cloud-Native Application Development Platform",
    description: "Enterprise-grade platform for building, deploying, and managing cloud-native applications with microservices architecture, container orchestration, and DevOps automation.",
    category: "Cloud & DevOps",
    subcategory: "Application Development",
    price: 3499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Microservices architecture design",
      "Container orchestration with Kubernetes",
      "CI/CD pipeline automation",
      "Service mesh implementation",
      "Auto-scaling and load balancing",
      "Multi-cloud deployment",
      "Monitoring and observability",
      "Security and compliance"
    ],
    benefits: [
      "Reduce deployment time by 80%",
      "Improve application scalability by 300%",
      "Reduce infrastructure costs by 40%",
      "Increase development velocity",
      "Enhanced reliability and uptime"
    ],
    useCases: [
      "Enterprise applications",
      "E-commerce platforms",
      "SaaS applications",
      "Mobile backends",
      "API services"
    ],
    targetAudience: [
      "CTOs",
      "DevOps engineers",
      "Software architects",
      "Development teams",
      "IT managers"
    ],
    tags: ["Cloud-Native", "Microservices", "Kubernetes", "DevOps", "Containerization"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,499 - $9,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/cloud-native-development",
    demoUrl: "https://ziontechgroup.com/demo/cloud-native-development",
    documentationUrl: "https://ziontechgroup.com/docs/cloud-native-development",
    technicalSpecs: [
      "Kubernetes 1.28+",
      "Docker containers",
      "Service mesh (Istio/Linkerd)",
      "CI/CD tools integration",
      "Monitoring stack (Prometheus/Grafana)"
    ],
    integrations: [
      "AWS/Azure/GCP",
      "GitHub/GitLab",
      "Jenkins/ArgoCD",
      "Datadog/New Relic",
      "HashiCorp tools"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"]
  },

  // Zero-Trust Security Framework
  {
    id: "zero-trust-security-framework",
    title: "Zero-Trust Security Framework Implementation",
    description: "Comprehensive zero-trust security framework that implements identity verification, continuous monitoring, and least-privilege access across all network resources and applications.",
    category: "Cybersecurity",
    subcategory: "Zero-Trust Security",
    price: 4299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Identity and access management (IAM)",
      "Multi-factor authentication (MFA)",
      "Network segmentation",
      "Continuous monitoring",
      "Threat detection and response",
      "Compliance reporting",
      "Security automation",
      "Risk assessment tools"
    ],
    benefits: [
      "Reduce security incidents by 70%",
      "Improve compliance posture",
      "Enhanced threat detection",
      "Simplified security management",
      "Reduced attack surface"
    ],
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Enterprise corporations",
      "Critical infrastructure"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "IT security managers",
      "Compliance officers",
      "Network administrators"
    ],
    tags: ["Zero-Trust", "Cybersecurity", "IAM", "Network Security", "Compliance"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,299 - $12,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/zero-trust-security",
    demoUrl: "https://ziontechgroup.com/demo/zero-trust-security",
    documentationUrl: "https://ziontechgroup.com/docs/zero-trust-security",
    technicalSpecs: [
      "Identity providers (Okta, Azure AD)",
      "Network access control (NAC)",
      "Security information and event management (SIEM)",
      "Endpoint detection and response (EDR)",
      "Privileged access management (PAM)"
    ],
    integrations: [
      "Active Directory",
      "LDAP systems",
      "VPN solutions",
      "Firewall platforms",
      "Security tools"
    ],
    compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"]
  },

  // Data Lake and Analytics Platform
  {
    id: "data-lake-analytics-platform",
    title: "Enterprise Data Lake and Analytics Platform",
    description: "Scalable data lake platform with advanced analytics capabilities, real-time processing, and AI-powered insights for enterprise data management and business intelligence.",
    category: "Data & Analytics",
    subcategory: "Data Lake",
    price: 3799,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data ingestion and processing",
      "Real-time streaming analytics",
      "Data governance and cataloging",
      "Advanced analytics and ML",
      "Data visualization tools",
      "Self-service analytics",
      "Data quality management",
      "Performance optimization"
    ],
    benefits: [
      "Unify data from multiple sources",
      "Enable real-time decision making",
      "Reduce data silos",
      "Improve data quality",
      "Accelerate insights delivery"
    ],
    useCases: [
      "Business intelligence",
      "Customer analytics",
      "Operational analytics",
      "Predictive modeling",
      "Data science projects"
    ],
    targetAudience: [
      "Data architects",
      "Business analysts",
      "Data scientists",
      "IT managers",
      "Business intelligence teams"
    ],
    tags: ["Data Lake", "Analytics", "Big Data", "Real-time Processing", "Machine Learning"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,799 - $10,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/data-lake-analytics",
    demoUrl: "https://ziontechgroup.com/demo/data-lake-analytics",
    documentationUrl: "https://ziontechgroup.com/docs/data-lake-analytics",
    technicalSpecs: [
      "Apache Hadoop ecosystem",
      "Apache Spark for processing",
      "Apache Kafka for streaming",
      "Data warehouse integration",
      "ML/AI frameworks"
    ],
    integrations: [
      "Cloud storage (S3, Azure Blob)",
      "Databases (PostgreSQL, MySQL)",
      "ETL tools (Informatica, Talend)",
      "BI tools (Tableau, Power BI)",
      "ML platforms (TensorFlow, PyTorch)"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "CCPA", "Data residency"]
  },

  // Edge Computing and IoT Platform
  {
    id: "edge-computing-iot-platform",
    title: "Edge Computing and IoT Management Platform",
    description: "Comprehensive edge computing platform that enables real-time data processing, IoT device management, and edge AI applications for distributed computing environments.",
    category: "Edge Computing & IoT",
    subcategory: "Platform Management",
    price: 2899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge device management",
      "Real-time data processing",
      "Edge AI and ML deployment",
      "IoT connectivity management",
      "Edge security and authentication",
      "Performance monitoring",
      "Automated scaling",
      "Integration APIs"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 60%",
      "Enable real-time applications",
      "Improve data privacy",
      "Enhanced reliability"
    ],
    useCases: [
      "Smart cities",
      "Industrial IoT",
      "Connected vehicles",
      "Retail analytics",
      "Healthcare monitoring"
    ],
    targetAudience: [
      "IoT architects",
      "Edge computing engineers",
      "System integrators",
      "Operations managers",
      "Technology consultants"
    ],
    tags: ["Edge Computing", "IoT", "Real-time Processing", "Device Management", "Edge AI"],
    estimatedDelivery: "5-7 weeks",
    supportLevel: "premium",
    marketPrice: "$2,899 - $7,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/edge-computing-iot",
    demoUrl: "https://ziontechgroup.com/demo/edge-computing-iot",
    documentationUrl: "https://ziontechgroup.com/docs/edge-computing-iot",
    technicalSpecs: [
      "Edge runtime environments",
      "IoT protocols (MQTT, CoAP)",
      "Container orchestration",
      "Real-time databases",
      "AI/ML inference engines"
    ],
    integrations: [
      "IoT devices and sensors",
      "Cloud platforms",
      "Data analytics tools",
      "Security frameworks",
      "Monitoring systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "IoT security standards", "Data privacy"]
  },

  // API Management and Integration Platform
  {
    id: "api-management-integration",
    title: "Enterprise API Management and Integration Platform",
    description: "Comprehensive API management platform that enables secure, scalable, and efficient API development, deployment, and integration across enterprise systems and third-party services.",
    category: "Integration & APIs",
    subcategory: "API Management",
    price: 2499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "API gateway and proxy",
      "API design and documentation",
      "Developer portal",
      "Rate limiting and throttling",
      "Authentication and authorization",
      "API analytics and monitoring",
      "Integration connectors",
      "Workflow automation"
    ],
    benefits: [
      "Accelerate API development by 50%",
      "Improve API security and governance",
      "Enable seamless system integration",
      "Reduce integration costs",
      "Enhanced developer experience"
    ],
    useCases: [
      "System integration",
      "Third-party API management",
      "Microservices communication",
      "Partner integrations",
      "Internal API governance"
    ],
    targetAudience: [
      "API architects",
      "Integration specialists",
      "Developers",
      "IT managers",
      "Business analysts"
    ],
    tags: ["API Management", "Integration", "Microservices", "Developer Experience", "Security"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,499 - $6,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/api-management",
    demoUrl: "https://ziontechgroup.com/demo/api-management",
    documentationUrl: "https://ziontechgroup.com/docs/api-management",
    technicalSpecs: [
      "API gateway (Kong, AWS API Gateway)",
      "OAuth 2.0 and JWT",
      "GraphQL support",
      "REST and SOAP APIs",
      "API versioning"
    ],
    integrations: [
      "Identity providers",
      "Message queues",
      "Databases",
      "Cloud services",
      "Legacy systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "GDPR", "API security standards"]
  },

  // Digital Twin Platform
  {
    id: "digital-twin-platform",
    title: "Digital Twin Platform for Industrial Applications",
    description: "Advanced digital twin platform that creates virtual representations of physical assets, processes, and systems for real-time monitoring, simulation, and predictive analytics.",
    category: "Digital Twin & Simulation",
    subcategory: "Industrial Applications",
    price: 3999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D modeling and visualization",
      "Real-time data synchronization",
      "Predictive analytics",
      "Simulation and testing",
      "Performance optimization",
      "Remote monitoring",
      "Collaborative workspace",
      "Integration APIs"
    ],
    benefits: [
      "Reduce operational costs by 25%",
      "Improve asset performance by 30%",
      "Enable predictive maintenance",
      "Enhance decision making",
      "Remote asset management"
    ],
    useCases: [
      "Manufacturing plants",
      "Smart buildings",
      "Infrastructure monitoring",
      "Product development",
      "Training and simulation"
    ],
    targetAudience: [
      "Operations managers",
      "Asset managers",
      "Engineers",
      "Facility managers",
      "Technology consultants"
    ],
    tags: ["Digital Twin", "IoT", "3D Modeling", "Simulation", "Predictive Analytics"],
    estimatedDelivery: "8-10 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,999 - $11,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/digital-twin-platform",
    demoUrl: "https://ziontechgroup.com/demo/digital-twin",
    documentationUrl: "https://ziontechgroup.com/docs/digital-twin",
    technicalSpecs: [
      "3D rendering engines",
      "Real-time data processing",
      "IoT connectivity",
      "Simulation engines",
      "Visualization tools"
    ],
    integrations: [
      "IoT platforms",
      "CAD systems",
      "PLM software",
      "SCADA systems",
      "Analytics platforms"
    ],
    compliance: ["SOC 2", "ISO 27001", "Industry-specific standards"]
  },

  // Blockchain Enterprise Platform
  {
    id: "blockchain-enterprise-platform",
    title: "Enterprise Blockchain Platform",
    description: "Scalable enterprise blockchain platform that enables secure, transparent, and efficient business processes through distributed ledger technology and smart contracts.",
    category: "Blockchain & Web3",
    subcategory: "Enterprise Solutions",
    price: 4499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Permissioned blockchain networks",
      "Smart contract development",
      "Consensus mechanisms",
      "Identity management",
      "Asset tokenization",
      "Interoperability solutions",
      "Performance optimization",
      "Security and compliance"
    ],
    benefits: [
      "Increase transparency and trust",
      "Reduce transaction costs by 40%",
      "Automate business processes",
      "Enhance security",
      "Enable new business models"
    ],
    useCases: [
      "Supply chain management",
      "Financial services",
      "Healthcare records",
      "Identity verification",
      "Asset management"
    ],
    targetAudience: [
      "Blockchain architects",
      "Enterprise architects",
      "Business strategists",
      "Compliance officers",
      "Technology leaders"
    ],
    tags: ["Blockchain", "Smart Contracts", "Distributed Ledger", "Tokenization", "Web3"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$4,499 - $14,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/blockchain-enterprise",
    demoUrl: "https://ziontechgroup.com/demo/blockchain-enterprise",
    documentationUrl: "https://ziontechgroup.com/docs/blockchain-enterprise",
    technicalSpecs: [
      "Hyperledger Fabric",
      "Ethereum compatibility",
      "Smart contract languages",
      "Consensus algorithms",
      "Cryptographic security"
    ],
    integrations: [
      "ERP systems",
      "Financial platforms",
      "Identity providers",
      "IoT platforms",
      "Legacy systems"
    ],
    compliance: ["SOC 2", "ISO 27001", "Financial regulations", "Industry standards"]
  },

  // Quantum Computing Services
  {
    id: "quantum-computing-services",
    title: "Quantum Computing Services and Solutions",
    description: "Comprehensive quantum computing services including algorithm development, quantum software development, and hybrid quantum-classical computing solutions for research and enterprise applications.",
    category: "Quantum Computing",
    subcategory: "Quantum Services",
    price: 5999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm development",
      "Quantum software development",
      "Hybrid computing solutions",
      "Quantum simulation",
      "Performance optimization",
      "Research collaboration",
      "Training and education",
      "Consulting services"
    ],
    benefits: [
      "Solve complex computational problems",
      "Accelerate research and development",
      "Enable new applications",
      "Future-proof technology",
      "Competitive advantage"
    ],
    useCases: [
      "Cryptography and security",
      "Drug discovery",
      "Financial modeling",
      "Optimization problems",
      "Machine learning"
    ],
    targetAudience: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial institutions",
      "Technology companies",
      "Academic researchers"
    ],
    tags: ["Quantum Computing", "Quantum Algorithms", "Research", "Innovation", "Future Tech"],
    estimatedDelivery: "12-16 weeks",
    supportLevel: "enterprise",
    marketPrice: "$5,999 - $19,999/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    websiteUrl: "https://ziontechgroup.com/quantum-computing",
    demoUrl: "https://ziontechgroup.com/demo/quantum-computing",
    documentationUrl: "https://ziontechgroup.com/docs/quantum-computing",
    technicalSpecs: [
      "Quantum programming languages",
      "Quantum simulators",
      "Hybrid frameworks",
      "Quantum algorithms",
      "Research tools"
    ],
    integrations: [
      "Classical computing platforms",
      "Research databases",
      "Simulation tools",
      "Cloud quantum services",
      "Academic platforms"
    ],
    compliance: ["Research standards", "Academic requirements", "Industry protocols"]
  }
];

export const SPECIALIZED_SERVICE_CATEGORIES = [
  {
    id: 'enterprise-infrastructure',
    name: 'Enterprise Infrastructure',
    icon: '🏢',
    count: 2,
    description: 'Modern enterprise infrastructure solutions for large organizations'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: '🔄',
    count: 2,
    description: 'End-to-end digital transformation services'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: '🏭',
    count: 2,
    description: 'Specialized solutions for specific industries'
  },
  {
    id: 'advanced-analytics',
    name: 'Advanced Analytics',
    icon: '📊',
    count: 1,
    description: 'Advanced analytics and business intelligence solutions'
  },
  {
    id: 'integration-services',
    name: 'Integration Services',
    icon: '🔗',
    count: 1,
    description: 'Enterprise integration and system connectivity services'
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    icon: '⚙️',
    count: 1,
    description: 'Comprehensive managed IT services'
  }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};