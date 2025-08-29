export interface ComprehensiveITService {
  id: string;
  title: string;
  description: string;
  category: 'Cloud & DevOps' | 'Cybersecurity' | 'Data & Analytics' | 'Digital Transformation' | 'Enterprise Solutions' | 'Infrastructure' | 'Managed Services' | 'Consulting' | 'Integration' | 'AI & ML' | 'Blockchain' | 'IoT' | 'Quantum Computing' | 'Edge Computing' | 'Green IT';
  serviceType: 'Consulting' | 'Implementation' | 'Managed Service' | 'Support' | 'Training' | 'Audit' | 'Strategy';
  price: string;
  billing: 'hour' | 'project' | 'month' | 'year' | 'retainer';
  duration: string;
  features: string[];
  benefits: string[];
  deliverables: string[];
  targetIndustries: string[];
  teamSize: string;
  certifications: string[];
  technologies: string[];
  compliance: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
  marketSize: string;
  competitiveAdvantage: string;
  caseStudies: string[];
  testimonials: string[];
  partners: string[];
  support: string;
  sla: string;
  uptime: string;
  security: string;
}

export const comprehensiveITServices2029: ComprehensiveITService[] = [
  {
    id: 'enterprise-cloud-migration-strategy',
    title: 'Enterprise Cloud Migration Strategy & Implementation',
    description: 'Comprehensive cloud migration service that helps enterprises transition from legacy systems to modern cloud infrastructure with minimal disruption and maximum ROI.',
    category: 'Cloud & DevOps',
    serviceType: 'Strategy',
    price: '$150',
    billing: 'hour',
    duration: '3-12 months',
    features: [
      'Cloud readiness assessment',
      'Migration strategy planning',
      'Cost optimization analysis',
      'Security & compliance review',
      'Performance testing',
      'Data migration planning',
      'Training & change management',
      'Post-migration support'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-40%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      'Faster time to market',
      'Better disaster recovery',
      'Improved performance'
    ],
    deliverables: [
      'Cloud migration roadmap',
      'Architecture design documents',
      'Implementation plan',
      'Risk assessment report',
      'Cost analysis',
      'Training materials',
      'Post-migration support plan'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Manufacturing',
      'Retail',
      'Technology',
      'Government'
    ],
    teamSize: '5-15 specialists',
    certifications: [
      'AWS Solutions Architect',
      'Azure Solutions Architect',
      'Google Cloud Professional',
      'PMP',
      'ITIL'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Ansible'
    ],
    compliance: [
      'SOC 2',
      'ISO 27001',
      'GDPR',
      'HIPAA',
      'PCI DSS'
    ],
    ctaLabel: 'Schedule Cloud Assessment',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$8.5B',
    competitiveAdvantage: 'Proven migration methodology, certified experts, and comprehensive post-migration support',
    caseStudies: [
      'Fortune 500 Bank Migration',
      'Healthcare Provider Cloud Transition',
      'Manufacturing ERP Migration'
    ],
    testimonials: [
      'Reduced our infrastructure costs by 35%',
      'Zero downtime during migration',
      'Excellent post-migration support'
    ],
    partners: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud',
      'VMware',
      'Red Hat'
    ],
    support: '24/7 Premium Support',
    sla: '99.9% Response Time',
    uptime: '99.95%',
    security: 'Enterprise-grade security with encryption at rest and in transit'
  },
  {
    id: 'zero-trust-security-implementation',
    title: 'Zero Trust Security Architecture Implementation',
    description: 'Comprehensive zero trust security implementation that provides enterprise-grade protection through identity verification, micro-segmentation, and continuous monitoring.',
    category: 'Cybersecurity',
    serviceType: 'Implementation',
    price: '$200',
    billing: 'hour',
    duration: '6-18 months',
    features: [
      'Identity and access management',
      'Network micro-segmentation',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance automation',
      'Security analytics',
      'Incident response planning',
      'Security training'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      'Meet compliance requirements',
      'Improve threat detection',
      'Better access control',
      'Reduced attack surface',
      'Enhanced audit capabilities'
    ],
    deliverables: [
      'Zero trust architecture design',
      'Implementation roadmap',
      'Security policies and procedures',
      'Training materials',
      'Compliance reports',
      'Monitoring dashboards',
      'Incident response playbooks'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Government',
      'Technology',
      'Manufacturing',
      'Energy'
    ],
    teamSize: '8-20 security specialists',
    certifications: [
      'CISSP',
      'CISM',
      'CEH',
      'CompTIA Security+',
      'SANS GIAC'
    ],
    technologies: [
      'Okta',
      'CrowdStrike',
      'Palo Alto Networks',
      'Cisco',
      'Microsoft Defender',
      'Splunk',
      'Qualys'
    ],
    compliance: [
      'SOC 2',
      'ISO 27001',
      'NIST',
      'GDPR',
      'HIPAA',
      'PCI DSS'
    ],
    ctaLabel: 'Security Assessment',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$6.2B',
    competitiveAdvantage: 'Proven zero trust methodology, certified security experts, and comprehensive compliance support',
    caseStudies: [
      'Global Bank Security Implementation',
      'Healthcare Network Protection',
      'Government Agency Security'
    ],
    testimonials: [
      'Significantly improved our security posture',
      'Excellent compliance support',
      'Professional team with deep expertise'
    ],
    partners: [
      'CrowdStrike',
      'Palo Alto Networks',
      'Cisco',
      'Microsoft',
      'Okta'
    ],
    support: '24/7 Security Operations Center',
    sla: '15-minute response time for critical issues',
    uptime: '99.99%',
    security: 'Multi-layered security with continuous monitoring and threat intelligence'
  },
  {
    id: 'enterprise-data-analytics-platform',
    title: 'Enterprise Data Analytics Platform Development',
    description: 'Custom data analytics platform that transforms raw data into actionable insights, enabling data-driven decision making across the organization.',
    category: 'Data & Analytics',
    serviceType: 'Implementation',
    price: '$175',
    billing: 'hour',
    duration: '4-16 months',
    features: [
      'Data warehouse design',
      'ETL pipeline development',
      'Real-time analytics',
      'Machine learning integration',
      'Data visualization dashboards',
      'Predictive analytics',
      'Data governance',
      'Performance optimization'
    ],
    benefits: [
      'Improve decision making by 60%',
      'Reduce operational costs',
      'Identify new business opportunities',
      'Better customer insights',
      'Enhanced operational efficiency',
      'Competitive advantage'
    ],
    deliverables: [
      'Data architecture design',
      'Analytics platform',
      'Custom dashboards',
      'Data governance framework',
      'Training materials',
      'Documentation',
      'Support plan'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Retail',
      'Manufacturing',
      'Technology',
      'Energy'
    ],
    teamSize: '6-18 data specialists',
    certifications: [
      'AWS Data Analytics',
      'Azure Data Engineer',
      'Google Cloud Data Engineer',
      'Snowflake',
      'Tableau'
    ],
    technologies: [
      'Snowflake',
      'AWS Redshift',
      'Azure Synapse',
      'Apache Spark',
      'Python',
      'R',
      'Tableau',
      'Power BI'
    ],
    compliance: [
      'GDPR',
      'CCPA',
      'HIPAA',
      'SOX',
      'ISO 27001'
    ],
    ctaLabel: 'Data Strategy Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$7.8B',
    competitiveAdvantage: 'Proven data platform methodology, certified data engineers, and comprehensive analytics expertise',
    caseStudies: [
      'Retail Analytics Platform',
      'Healthcare Data Warehouse',
      'Financial Risk Analytics'
    ],
    testimonials: [
      'Transformed our data capabilities',
      'Excellent technical expertise',
      'Delivered on time and budget'
    ],
    partners: [
      'Snowflake',
      'AWS',
      'Microsoft',
      'Google Cloud',
      'Tableau'
    ],
    support: '24/7 Data Platform Support',
    sla: '99.9% Platform Availability',
    uptime: '99.95%',
    security: 'Enterprise-grade security with data encryption and access controls'
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation Strategy & Consulting',
    description: 'Strategic digital transformation consulting that helps organizations modernize their operations, improve customer experience, and drive innovation.',
    category: 'Digital Transformation',
    serviceType: 'Consulting',
    price: '$250',
    billing: 'hour',
    duration: '6-24 months',
    features: [
      'Digital maturity assessment',
      'Transformation roadmap',
      'Change management strategy',
      'Technology evaluation',
      'Process optimization',
      'Customer experience design',
      'Innovation workshops',
      'Implementation support'
    ],
    benefits: [
      'Improve operational efficiency by 40%',
      'Enhance customer experience',
      'Increase market competitiveness',
      'Drive innovation',
      'Reduce operational costs',
      'Improve employee productivity'
    ],
    deliverables: [
      'Digital transformation strategy',
      'Implementation roadmap',
      'Change management plan',
      'Technology recommendations',
      'Process documentation',
      'Training materials',
      'Success metrics'
    ],
    targetIndustries: [
      'Manufacturing',
      'Healthcare',
      'Financial Services',
      'Retail',
      'Energy',
      'Transportation'
    ],
    teamSize: '10-25 consultants',
    certifications: [
      'PMP',
      'ITIL',
      'Agile',
      'Six Sigma',
      'Change Management'
    ],
    technologies: [
      'Enterprise Architecture',
      'Process Mining',
      'RPA',
      'AI/ML',
      'Cloud Platforms',
      'IoT'
    ],
    compliance: [
      'ISO 27001',
      'SOX',
      'GDPR',
      'Industry-specific regulations'
    ],
    ctaLabel: 'Transformation Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$12.5B',
    competitiveAdvantage: 'Proven transformation methodology, experienced consultants, and comprehensive change management support',
    caseStudies: [
      'Manufacturing Digital Transformation',
      'Healthcare Process Modernization',
      'Financial Services Innovation'
    ],
    testimonials: [
      'Transformed our entire organization',
      'Excellent strategic guidance',
      'Delivered measurable results'
    ],
    partners: [
      'Microsoft',
      'SAP',
      'Oracle',
      'Salesforce',
      'ServiceNow'
    ],
    support: 'Strategic Advisory Support',
    sla: '48-hour response for strategic questions',
    uptime: 'N/A',
    security: 'Confidentiality agreements and secure consulting practices'
  },
  {
    id: 'managed-it-services',
    title: 'Comprehensive Managed IT Services',
    description: 'Full-service managed IT solution that handles all aspects of IT operations, from infrastructure management to end-user support, allowing businesses to focus on core operations.',
    category: 'Managed Services',
    serviceType: 'Managed Service',
    price: '$5,000',
    billing: 'month',
    duration: 'Ongoing',
    features: [
      '24/7 infrastructure monitoring',
      'Proactive maintenance',
      'Help desk support',
      'Security management',
      'Backup and disaster recovery',
      'Cloud management',
      'Vendor management',
      'Strategic IT planning'
    ],
    benefits: [
      'Reduce IT costs by 25-40%',
      'Improve system reliability',
      'Enhanced security posture',
      'Better user experience',
      'Predictable IT costs',
      'Access to expertise'
    ],
    deliverables: [
      'Service level agreements',
      'Monthly reports',
      'Security assessments',
      'Performance metrics',
      'Recommendation reports',
      'Emergency support',
      'Strategic planning sessions'
    ],
    targetIndustries: [
      'Small to Medium Business',
      'Healthcare',
      'Legal',
      'Financial Services',
      'Manufacturing',
      'Retail'
    ],
    teamSize: 'Dedicated team based on needs',
    certifications: [
      'ITIL',
      'CompTIA',
      'Microsoft',
      'Cisco',
      'VMware'
    ],
    technologies: [
      'Microsoft 365',
      'Azure',
      'VMware',
      'Cisco',
      'Backup solutions',
      'Security tools'
    ],
    compliance: [
      'SOC 2',
      'ISO 27001',
      'HIPAA',
      'PCI DSS'
    ],
    ctaLabel: 'Managed Services Quote',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$15.2B',
    competitiveAdvantage: 'Proven managed services methodology, certified technicians, and comprehensive service coverage',
    caseStudies: [
      'Healthcare Practice Management',
      'Legal Firm IT Operations',
      'Manufacturing IT Support'
    ],
    testimonials: [
      'Significantly improved our IT operations',
      'Excellent response times',
      'Proactive problem prevention'
    ],
    partners: [
      'Microsoft',
      'Cisco',
      'VMware',
      'Dell',
      'HP'
    ],
    support: '24/7 Help Desk & Support',
    sla: '15-minute response for critical issues',
    uptime: '99.9%',
    security: 'Enterprise-grade security with continuous monitoring and threat prevention'
  },
  {
    id: 'enterprise-integration-services',
    title: 'Enterprise System Integration Services',
    description: 'Comprehensive integration services that connect disparate systems, automate workflows, and create seamless data flow across the organization.',
    category: 'Integration',
    serviceType: 'Implementation',
    price: '$180',
    billing: 'hour',
    duration: '3-12 months',
    features: [
      'System architecture design',
      'API development',
      'Data mapping and transformation',
      'Workflow automation',
      'Real-time synchronization',
      'Error handling and monitoring',
      'Testing and validation',
      'Documentation and training'
    ],
    benefits: [
      'Improve operational efficiency by 35%',
      'Reduce manual data entry',
      'Better data accuracy',
      'Faster process execution',
      'Enhanced visibility',
      'Cost savings'
    ],
    deliverables: [
      'Integration architecture',
      'Custom APIs',
      'Data transformation rules',
      'Workflow automations',
      'Testing documentation',
      'User training materials',
      'Support documentation'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Manufacturing',
      'Retail',
      'Technology',
      'Energy'
    ],
    teamSize: '5-15 integration specialists',
    certifications: [
      'AWS Integration',
      'Azure Integration',
      'MuleSoft',
      'Boomi',
      'Informatica'
    ],
    technologies: [
      'MuleSoft',
      'Boomi',
      'Informatica',
      'AWS Lambda',
      'Azure Functions',
      'Apache Kafka',
      'REST APIs',
      'GraphQL'
    ],
    compliance: [
      'SOX',
      'GDPR',
      'HIPAA',
      'PCI DSS'
    ],
    ctaLabel: 'Integration Assessment',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$4.8B',
    competitiveAdvantage: 'Proven integration methodology, certified specialists, and comprehensive testing and validation',
    caseStudies: [
      'ERP Integration Project',
      'Healthcare System Integration',
      'Financial Data Synchronization'
    ],
    testimonials: [
      'Seamlessly connected our systems',
      'Excellent technical expertise',
      'Delivered robust solution'
    ],
    partners: [
      'MuleSoft',
      'Boomi',
      'Informatica',
      'AWS',
      'Microsoft'
    ],
    support: '24/7 Integration Support',
    sla: '99.9% Integration Availability',
    uptime: '99.95%',
    security: 'Enterprise-grade security with data encryption and access controls'
  },
  {
    id: 'ai-ml-enterprise-solutions',
    title: 'AI & Machine Learning Enterprise Solutions',
    description: 'Custom AI and machine learning solutions that automate processes, provide predictive insights, and create competitive advantages for enterprise organizations.',
    category: 'AI & ML',
    serviceType: 'Implementation',
    price: '$200',
    billing: 'hour',
    duration: '6-18 months',
    features: [
      'AI strategy development',
      'Custom ML model development',
      'Data preparation and engineering',
      'Model training and validation',
      'Deployment and monitoring',
      'Performance optimization',
      'Integration with existing systems',
      'User training and support'
    ],
    benefits: [
      'Automate repetitive tasks by 70%',
      'Improve decision making',
      'Reduce operational costs',
      'Enhance customer experience',
      'Create new revenue streams',
      'Competitive advantage'
    ],
    deliverables: [
      'AI strategy roadmap',
      'Custom ML models',
      'Data pipelines',
      'Deployment infrastructure',
      'Monitoring dashboards',
      'Training materials',
      'Support documentation'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Manufacturing',
      'Retail',
      'Technology',
      'Energy'
    ],
    teamSize: '8-20 AI/ML specialists',
    certifications: [
      'AWS Machine Learning',
      'Azure AI Engineer',
      'Google Cloud ML Engineer',
      'TensorFlow',
      'PyTorch'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'AWS SageMaker',
      'Azure ML',
      'Google Cloud AI',
      'Python',
      'R'
    ],
    compliance: [
      'GDPR',
      'CCPA',
      'HIPAA',
      'SOX'
    ],
    ctaLabel: 'AI Strategy Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$9.8B',
    competitiveAdvantage: 'Proven AI/ML methodology, certified specialists, and comprehensive model lifecycle management',
    caseStudies: [
      'Financial Fraud Detection',
      'Healthcare Diagnosis AI',
      'Manufacturing Predictive Maintenance'
    ],
    testimonials: [
      'Transformed our operations with AI',
      'Excellent technical expertise',
      'Delivered measurable ROI'
    ],
    partners: [
      'AWS',
      'Microsoft',
      'Google Cloud',
      'NVIDIA',
      'Intel'
    ],
    support: '24/7 AI Platform Support',
    sla: '99.9% Model Availability',
    uptime: '99.95%',
    security: 'Enterprise-grade security with model protection and data privacy'
  },
  {
    id: 'blockchain-enterprise-solutions',
    title: 'Blockchain Enterprise Solutions Development',
    description: 'Custom blockchain solutions that provide transparency, security, and efficiency for enterprise applications including supply chain, finance, and identity management.',
    category: 'Blockchain',
    serviceType: 'Implementation',
    price: '$225',
    billing: 'hour',
    duration: '8-24 months',
    features: [
      'Blockchain strategy development',
      'Smart contract development',
      'Consensus mechanism design',
      'Security implementation',
      'Integration with existing systems',
      'Performance optimization',
      'Compliance and governance',
      'User training and support'
    ],
    benefits: [
      'Improve transparency and traceability',
      'Reduce fraud and counterfeiting',
      'Automate complex processes',
      'Enhance security',
      'Reduce intermediaries',
      'Improve efficiency'
    ],
    deliverables: [
      'Blockchain strategy',
      'Smart contracts',
      'Consensus mechanism',
      'Security framework',
      'Integration APIs',
      'Governance framework',
      'Training materials'
    ],
    targetIndustries: [
      'Financial Services',
      'Healthcare',
      'Manufacturing',
      'Supply Chain',
      'Government',
      'Energy'
    ],
    teamSize: '10-25 blockchain specialists',
    certifications: [
      'Hyperledger',
      'Ethereum',
      'Corda',
      'Blockchain Security',
      'Smart Contract Development'
    ],
    technologies: [
      'Hyperledger Fabric',
      'Ethereum',
      'Corda',
      'Polkadot',
      'Cosmos',
      'Solidity',
      'Go',
      'JavaScript'
    ],
    compliance: [
      'GDPR',
      'SOX',
      'Industry-specific regulations'
    ],
    ctaLabel: 'Blockchain Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$3.2B',
    competitiveAdvantage: 'Proven blockchain methodology, certified specialists, and comprehensive security implementation',
    caseStudies: [
      'Supply Chain Transparency',
      'Financial Settlement System',
      'Identity Management Platform'
    ],
    testimonials: [
      'Revolutionized our supply chain',
      'Excellent security implementation',
      'Delivered innovative solution'
    ],
    partners: [
      'Hyperledger',
      'Ethereum Foundation',
      'R3 Corda',
      'IBM',
      'Microsoft'
    ],
    support: '24/7 Blockchain Support',
    sla: '99.9% Network Availability',
    uptime: '99.95%',
    security: 'Enterprise-grade security with cryptographic protection and access controls'
  },
  {
    id: 'iot-enterprise-platform',
    title: 'IoT Enterprise Platform Development',
    description: 'Comprehensive IoT platform that connects devices, collects data, and provides real-time insights for enterprise applications including smart cities, manufacturing, and healthcare.',
    category: 'IoT',
    serviceType: 'Implementation',
    price: '$190',
    billing: 'hour',
    duration: '6-20 months',
    features: [
      'IoT strategy development',
      'Device connectivity management',
      'Data collection and processing',
      'Real-time analytics',
      'Security implementation',
      'Scalability design',
      'Integration capabilities',
      'Monitoring and maintenance'
    ],
    benefits: [
      'Improve operational efficiency by 45%',
      'Real-time monitoring and control',
      'Predictive maintenance',
      'Better resource utilization',
      'Enhanced safety',
      'Cost savings'
    ],
    deliverables: [
      'IoT strategy roadmap',
      'Device management platform',
      'Data processing pipeline',
      'Analytics dashboards',
      'Security framework',
      'Integration APIs',
      'Training materials'
    ],
    targetIndustries: [
      'Manufacturing',
      'Healthcare',
      'Smart Cities',
      'Energy',
      'Transportation',
      'Agriculture'
    ],
    teamSize: '8-20 IoT specialists',
    certifications: [
      'AWS IoT',
      'Azure IoT',
      'Google Cloud IoT',
      'Cisco IoT',
      'IoT Security'
    ],
    technologies: [
      'AWS IoT Core',
      'Azure IoT Hub',
      'Google Cloud IoT',
      'MQTT',
      'CoAP',
      'Node.js',
      'Python',
      'Kubernetes'
    ],
    compliance: [
      'ISO 27001',
      'GDPR',
      'Industry-specific regulations'
    ],
    ctaLabel: 'IoT Strategy Consultation',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$5.6B',
    competitiveAdvantage: 'Proven IoT methodology, certified specialists, and comprehensive security implementation',
    caseStudies: [
      'Smart Manufacturing Platform',
      'Healthcare Monitoring System',
      'Smart City Infrastructure'
    ],
    testimonials: [
      'Transformed our operations with IoT',
      'Excellent security implementation',
      'Scalable and reliable platform'
    ],
    partners: [
      'AWS',
      'Microsoft',
      'Google Cloud',
      'Cisco',
      'Intel'
    ],
    support: '24/7 IoT Platform Support',
    sla: '99.9% Platform Availability',
    uptime: '99.95%',
    security: 'Enterprise-grade security with device authentication and data encryption'
  }
];

export const getServiceById = (id: string): ComprehensiveITService | undefined => {
  return comprehensiveITServices2029.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): ComprehensiveITService[] => {
  return comprehensiveITServices2029.filter(service => service.category === category);
};

export const getServicesByType = (type: string): ComprehensiveITService[] => {
  return comprehensiveITServices2029.filter(service => service.serviceType === type);
};

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): ComprehensiveITService[] => {
  return comprehensiveITServices2029.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};

export const searchServices = (query: string): ComprehensiveITService[] => {
  const lowercaseQuery = query.toLowerCase();
  return comprehensiveITServices2029.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.category.toLowerCase().includes(lowercaseQuery) ||
    service.targetIndustries.some(industry => industry.toLowerCase().includes(lowercaseQuery))
  );
};