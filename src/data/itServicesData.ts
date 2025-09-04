export interface ITService {
  "id": string;
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
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string};
  technicalSpecs?: {
    "technology": string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[]};
  competitors?: string[];
  marketSize?: string}

export const "IT_SERVICES": ITService[] = [// Cloud Infrastructure Migration & Management
  {
    id: "cloud-infrastructure-migration",
    "title": "Cloud Infrastructure Migration & Management",
    "description": "Comprehensive cloud migration and management services that help businesses seamlessly transition to cloud platforms while optimizing costs and performance.",
    "category": "Cloud Services",
    "subcategory": "Migration & Management",
    "price": 15000,
    "currency": "$",
    "pricingModel": "project",
    "features": [
      "Multi-cloud strategy planning",
      "Legacy system migration",
      "Data migration and synchronization",
      "Cloud cost optimization",
      "Security and compliance setup",
      "Performance monitoring",
      "Disaster recovery planning",
      "24/7 cloud management",
      "Automated scaling",
      "Backup and recovery"
    ],
    "benefits": ["Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhance security and compliance",
      "Increase system reliability",
      "Enable remote work capabilities"
    ],
    "useCases": ["Enterprise cloud migration",
      "Hybrid cloud implementation",
      "Cloud cost optimization",
      "Disaster recovery setup",
      "Legacy system modernization"
    ],
    "targetAudience": ["Enterprise companies",
      "Mid-size businesses",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    "tags": ["Cloud", "Migration", "AWS", "Azure", "GCP", "Infrastructure"],
    "estimatedDelivery": "8-16 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$15,000 - $100,000/project",
    "roi": "200-400%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"],
      "integrations": ["On-premise systems", "SaaS applications", "Monitoring tools", "Security platforms"],
      "apiEndpoints": 500,
      "uptime": "99.99%",
      "security": ["SOC 2", "ISO 27001", "HIPAA", "GDPR", "Zero-trust architecture"]
    },
    "competitors": ["Accenture", "Deloitte", "IBM", "Capgemini"],
    "marketSize": "$178 billion by 2025"
  },

  // Cybersecurity Assessment & Implementation
  {
    "id": "cybersecurity-assessment-implementation",
    "title": "Cybersecurity Assessment & Implementation",
    "description": "Comprehensive cybersecurity services including risk assessment, security implementation, monitoring, and incident response to protect businesses from cyber threats.",
    "category": "Cybersecurity",
    "subcategory": "Assessment & Implementation",
    "price": 25000,
    "currency": "$",
    "pricingModel": "project",
    "features": ["Security risk assessment",
      "Penetration testing",
      "Security architecture design",
      "Identity and access management",
      "Endpoint protection",
      "Network security",
      "Security monitoring (SOC)",
      "Incident response planning",
      "Security training",
      "Compliance auditing"
    ],
    "benefits": ["Protect against cyber threats",
      "Meet compliance requirements",
      "Reduce security risks by 80%",
      "Improve security posture",
      "Minimize breach impact"
    ],
    "useCases": ["Security posture assessment",
      "Compliance implementation",
      "Incident response setup",
      "Security training programs",
      "Ongoing security monitoring"
    ],
    "targetAudience": ["All business sizes",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Critical infrastructure"
    ],
    "tags": ["Cybersecurity", "Risk Assessment", "Compliance", "SOC", "Incident Response"],
    "estimatedDelivery": "4-12 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$25,000 - $150,000/project",
    "roi": "300-600%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["SIEM", "EDR", "XDR", "IAM", "PAM", "Zero Trust"],
      "integrations": ["Security tools", "Monitoring systems", "Compliance platforms", "Incident response tools"],
      "apiEndpoints": 200,
      "uptime": "99.99%",
      "security": ["SOC 2", "ISO 27001", "NIST", "CIS Controls", "Zero-trust architecture"]
    },
    "competitors": ["CrowdStrike", "Palo Alto Networks", "Fortinet", "Check Point"],
    "marketSize": "$248 billion by 2025"
  },

  // Digital Transformation Consulting
  {
    "id": "digital-transformation-consulting",
    "title": "Digital Transformation Consulting",
    "description": "Strategic digital transformation services that help businesses modernize their operations, processes, and technology stack to stay competitive in the digital age.",
    "category": "Digital Transformation",
    "subcategory": "Strategic Consulting",
    "price": 50000,
    "currency": "$",
    "pricingModel": "project",
    "features": ["Digital strategy development",
      "Process automation",
      "Technology modernization",
      "Change management",
      "Data analytics implementation",
      "Customer experience optimization",
      "Workflow digitization",
      "Integration planning",
      "Training and support",
      "Performance measurement"
    ],
    "benefits": ["Increase operational efficiency by 50%",
      "Improve customer satisfaction",
      "Reduce operational costs",
      "Enable data-driven decisions",
      "Future-proof business operations"
    ],
    "useCases": ["Business process automation",
      "Legacy system modernization",
      "Customer experience enhancement",
      "Data-driven decision making",
      "Remote work enablement"
    ],
    "targetAudience": ["Enterprise companies",
      "Mid-size businesses",
      "Government agencies",
      "Healthcare organizations",
      "Manufacturing companies"
    ],
    "tags": ["Digital Transformation", "Process Automation", "Modernization", "Strategy", "Change Management"],
    "estimatedDelivery": "12-24 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$50,000 - $500,000/project",
    "roi": "200-500%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["RPA", "AI/ML", "Cloud platforms", "APIs", "Data analytics", "Mobile solutions"],
      "integrations": ["ERP systems", "CRM platforms", "Legacy systems", "Cloud services", "Third-party APIs"],
      "apiEndpoints": 1000,
      "uptime": "99.9%",
      "security": ["Data protection", "Access control", "Audit logging", "Compliance frameworks"]
    },
    "competitors": ["McKinsey", "BCG", "Deloitte", "PwC", "Accenture"],
    "marketSize": "$1.3 trillion by 2025"
  },

  // Enterprise Application Development
  {
    "id": "enterprise-application-development",
    "title": "Enterprise Application Development",
    "description": "Custom enterprise application development services that create scalable, secure, and high-performance applications tailored to specific business needs.",
    "category": "Application Development",
    "subcategory": "Enterprise Applications",
    "price": 75000,
    "currency": "$",
    "pricingModel": "project",
    "features": ["Custom application development",
      "Microservices architecture",
      "API development and integration",
      "Database design and optimization",
      "User interface design",
      "Mobile application development",
      "Performance optimization",
      "Security implementation",
      "Testing and quality assurance",
      "Deployment and maintenance"
    ],
    "benefits": ["Streamline business processes",
      "Improve operational efficiency",
      "Enhance user experience",
      "Reduce manual work",
      "Enable data-driven decisions"
    ],
    "useCases": ["ERP system development",
      "CRM application creation",
      "Workflow management systems",
      "Data analytics platforms",
      "Mobile business applications"
    ],
    "targetAudience": ["Enterprise companies",
      "Mid-size businesses",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    "tags": ["Application Development", "Enterprise", "Custom Software", "Microservices", "API Development"],
    "estimatedDelivery": "16-32 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$75,000 - $500,000/project",
    "roi": "250-500%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
      "integrations": ["Third-party APIs", "Legacy systems", "Cloud services", "Mobile platforms", "Analytics tools"],
      "apiEndpoints": 2000,
      "uptime": "99.9%",
      "security": ["OWASP", "SOC 2", "Data encryption", "Access control", "Secure coding practices"]
    },
    "competitors": ["IBM", "Accenture", "Capgemini", "Infosys", "TCS"],
    "marketSize": "$456 billion by 2025"
  },

  // Data Analytics & Business Intelligence
  {
    "id": "data-analytics-business-intelligence",
    "title": "Data Analytics & Business Intelligence",
    "description": "Comprehensive data analytics and business intelligence services that transform raw data into actionable insights for better business decision-making.",
    "category": "Data Analytics",
    "subcategory": "Business Intelligence",
    "price": 30000,
    "currency": "$",
    "pricingModel": "project",
    "features": ["Data warehouse design",
      "ETL/ELT processes",
      "Data visualization dashboards",
      "Predictive analytics",
      "Machine learning models",
      "Real-time reporting",
      "Data governance",
      "Data quality management",
      "Self-service analytics",
      "Mobile BI access"
    ],
    "benefits": ["Make data-driven decisions",
      "Identify business opportunities",
      "Improve operational efficiency",
      "Reduce costs through insights",
      "Enhance competitive advantage"
    ],
    "useCases": ["Sales performance analysis",
      "Customer behavior insights",
      "Financial reporting automation",
      "Operational efficiency tracking",
      "Market trend analysis"
    ],
    "targetAudience": ["Enterprise companies",
      "Mid-size businesses",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    "tags": ["Data Analytics", "Business Intelligence", "Data Visualization", "Machine Learning", "Reporting"],
    "estimatedDelivery": "8-16 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$30,000 - $200,000/project",
    "roi": "300-600%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["Python", "R", "SQL", "Tableau", "Power BI", "Apache Spark", "Hadoop", "Snowflake"],
      "integrations": ["ERP systems", "CRM platforms", "Cloud data sources", "APIs", "Real-time data streams"],
      "apiEndpoints": 500,
      "uptime": "99.9%",
      "security": ["Data encryption", "Access control", "Audit logging", "GDPR compliance", "Data anonymization"]
    },
    "competitors": ["Tableau", "Microsoft Power BI", "Qlik", "SAS", "IBM Cognos"],
    "marketSize": "$33.3 billion by 2025"
  },

  // IT Infrastructure Management
  {
    "id": "it-infrastructure-management",
    "title": "IT Infrastructure Management",
    "description": "Comprehensive IT infrastructure management services that ensure optimal performance, security, and reliability of your IT systems and networks.",
    "category": "Infrastructure Management",
    "subcategory": "IT Operations",
    "price": 20000,
    "currency": "$",
    "pricingModel": "monthly",
    "features": ["24/7 infrastructure monitoring",
      "Proactive maintenance",
      "Performance optimization",
      "Security management",
      "Backup and disaster recovery",
      "Patch management",
      "Capacity planning",
      "Vendor management",
      "Compliance monitoring",
      "Incident response"
    ],
    "benefits": ["Reduce downtime by 90%",
      "Improve system performance",
      "Lower operational costs",
      "Enhance security posture",
      "Ensure business continuity"
    ],
    "useCases": ["Server and network management",
      "Cloud infrastructure optimization",
      "Security monitoring and response",
      "Disaster recovery planning",
      "Compliance maintenance"
    ],
    "targetAudience": ["All business sizes",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions"
    ],
    "tags": ["Infrastructure", "Monitoring", "Maintenance", "Security", "Compliance"],
    "estimatedDelivery": "2-4 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$20,000 - $100,000/month",
    "roi": "200-400%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["Monitoring tools", "Automation platforms", "Security tools", "Backup systems", "Cloud platforms"],
      "integrations": ["IT systems", "Security platforms", "Monitoring tools", "Cloud services", "Third-party tools"],
      "apiEndpoints": 300,
      "uptime": "99.99%",
      "security": ["SOC 2", "ISO 27001", "NIST", "Continuous monitoring", "Incident response"]
    },
    "competitors": ["IBM", "HPE", "Dell Technologies", "Cisco", "VMware"],
    "marketSize": "$89 billion by 2025"
  },

  // DevOps & CI/CD Implementation
  {
    "id": "devops-cicd-implementation",
    "title": "DevOps & CI/CD Implementation",
    "description": "Complete DevOps transformation services that implement continuous integration, continuous deployment, and automation to accelerate software delivery and improve quality.",
    "category": "DevOps",
    "subcategory": "CI/CD Implementation",
    "price": 40000,
    "currency": "$",
    "pricingModel": "project",
    "features": ["CI/CD pipeline setup",
      "Automated testing",
      "Infrastructure as Code",
      "Container orchestration",
      "Monitoring and logging",
      "Security integration",
      "Release management",
      "Environment management",
      "Team training",
      "Process optimization"
    ],
    "benefits": ["Reduce deployment time by 80%",
      "Improve code quality",
      "Increase deployment frequency",
      "Reduce manual errors",
      "Enable faster time to market"
    ],
    "useCases": ["Software development acceleration",
      "Quality assurance automation",
      "Infrastructure automation",
      "Release management optimization",
      "Team productivity improvement"
    ],
    "targetAudience": ["Software development companies",
      "Enterprise IT departments",
      "Startups and scale-ups",
      "Government agencies",
      "Financial institutions"
    ],
    "tags": ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes", "Jenkins"],
    "estimatedDelivery": "8-16 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$40,000 - $200,000/project",
    "roi": "300-600%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible"],
      "integrations": ["Version control", "Testing tools", "Monitoring platforms", "Security scanners", "Cloud platforms"],
      "apiEndpoints": 400,
      "uptime": "99.9%",
      "security": ["Secure CI/CD", "Secret management", "Vulnerability scanning", "Compliance automation"]
    },
    "competitors": ["GitLab", "GitHub", "Azure DevOps", "AWS CodePipeline", "CircleCI"],
    "marketSize": "$12.2 billion by 2025"
  },

  // Network Security & Firewall Management
  {
    "id": "network-security-firewall-management",
    "title": "Network Security & Firewall Management",
    "description": "Comprehensive network security services including firewall configuration, network monitoring, threat detection, and security policy implementation.",
    "category": "Network Security",
    "subcategory": "Firewall Management",
    "price": 18000,
    "currency": "$",
    "pricingModel": "monthly",
    "features": ["Firewall configuration and management",
      "Network monitoring and analysis",
      "Threat detection and prevention",
      "VPN setup and management",
      "Intrusion detection systems",
      "Network segmentation",
      "Security policy implementation",
      "Compliance monitoring",
      "Incident response",
      "Security training"
    ],
    "benefits": ["Protect against network threats",
      "Ensure network compliance",
      "Improve network performance",
      "Reduce security risks",
      "Enable secure remote access"
    ],
    "useCases": ["Network security hardening",
      "Remote access security",
      "Compliance implementation",
      "Threat monitoring",
      "Network optimization"
    ],
    "targetAudience": ["All business sizes",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions",
      "Educational institutions"
    ],
    "tags": ["Network Security", "Firewall", "VPN", "Threat Detection", "Compliance"],
    "estimatedDelivery": "2-6 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$18,000 - $80,000/month",
    "roi": "250-500%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["Palo Alto", "Cisco", "Fortinet", "Check Point", "pfSense", "OpenVPN"],
      "integrations": ["SIEM platforms", "Monitoring tools", "Identity management", "Security scanners"],
      "apiEndpoints": 200,
      "uptime": "99.99%",
      "security": ["Zero-trust", "Network segmentation", "Threat intelligence", "Compliance frameworks"]
    },
    "competitors": ["Palo Alto Networks", "Cisco", "Fortinet", "Check Point", "SonicWall"],
    "marketSize": "$45.6 billion by 2025"
  },

  // Database Administration & Optimization
  {
    "id": "database-administration-optimization",
    "title": "Database Administration & Optimization",
    "description": "Professional database administration services that ensure optimal performance, security, and reliability of your database systems.",
    "category": "Database Services",
    "subcategory": "Administration & Optimization",
    "price": 12000,
    "currency": "$",
    "pricingModel": "monthly",
    "features": ["Database performance tuning",
      "Backup and recovery management",
      "Security hardening",
      "Capacity planning",
      "Query optimization",
      "Index management",
      "Monitoring and alerting",
      "Patch management",
      "Disaster recovery planning",
      "24/7 support"
    ],
    "benefits": ["Improve database performance",
      "Ensure data security",
      "Reduce downtime",
      "Optimize storage costs",
      "Enable business continuity"
    ],
    "useCases": ["Database performance optimization",
      "Security hardening",
      "Backup and recovery setup",
      "Capacity planning",
      "Migration and upgrades"
    ],
    "targetAudience": ["Enterprise companies",
      "Mid-size businesses",
      "Government agencies",
      "Healthcare organizations",
      "Financial institutions"
    ],
    "tags": ["Database", "Performance", "Security", "Backup", "Optimization"],
    "estimatedDelivery": "1-4 weeks",
    "supportLevel": "enterprise",
    "marketPrice": "$12,000 - $60,000/month",
    "roi": "200-400%",
    "innovationLevel": "Advanced",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "MongoDB", "Redis"],
      "integrations": ["Applications", "Backup systems", "Monitoring tools", "Security platforms"],
      "apiEndpoints": 100,
      "uptime": "99.99%",
      "security": ["Data encryption", "Access control", "Audit logging", "Compliance frameworks"]
    },
    "competitors": ["Oracle", "Microsoft", "Amazon RDS", "MongoDB Atlas", "PlanetScale"],
    "marketSize": "$67.8 billion by 2025"
  },

  // IT Support & Help Desk Services
  {
    "id": "it-support-help-desk-services",
    "title": "IT Support & Help Desk Services",
    "description": "Comprehensive IT support and help desk services that provide technical assistance, troubleshooting, and user support to ensure smooth IT operations.",
    "category": "IT Support",
    "subcategory": "Help Desk Services",
    "price": 8000,
    "currency": "$",
    "pricingModel": "monthly",
    "features": ["24/7 technical support",
      "Remote desktop assistance",
      "Hardware and software troubleshooting",
      "User account management",
      "Password reset services",
      "Software installation and updates",
      "Email and communication support",
      "Mobile device support",
      "Network connectivity issues",
      "Training and documentation"
    ],
    "benefits": ["Reduce IT downtime",
      "Improve user productivity",
      "Lower IT support costs",
      "Enhance user satisfaction",
      "Enable faster issue resolution"
    ],
    "useCases": ["End-user technical support",
      "Hardware troubleshooting",
      "Software installation",
      "Account management",
      "Training and onboarding"
    ],
    "targetAudience": ["All business sizes",
      "Government agencies",
      "Healthcare organizations",
      "Educational institutions",
      "Non-profit organizations"
    ],
    "tags": ["IT Support", "Help Desk", "Technical Support", "Troubleshooting", "User Support"],
    "estimatedDelivery": "1-2 weeks",
    "supportLevel": "standard",
    "marketPrice": "$8,000 - $40,000/month",
    "roi": "150-300%",
    "innovationLevel": "Standard",
    "contactInfo": {
      phone: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "website": "https://ziontechgroup.com"
    },
    "technicalSpecs": {
      technology: ["Remote desktop", "Ticketing systems", "Monitoring tools", "Asset management", "Knowledge base"],
      "integrations": ["Active Directory", "Email systems", "Cloud services", "Security tools"],
      "apiEndpoints": 50,
      "uptime": "99.9%",
      "security": ["Secure remote access", "User authentication", "Audit logging", "Data protection"]
    },
    "competitors": ["IBM", "HPE", "Dell Technologies", "Cisco", "Microsoft"],
    "marketSize": "$23.4 billion by 2025"
  };
];