export const SAMPLE_SERVICES = [
  // AI & Machine Learning Services
  { 
<<<<<<< HEAD
    id: 'ai-development-1', 
    title: 'AI Development & Integration', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    description: 'Full-stack AI development services including custom ML models, API integration, and deployment',
    price: 5000,
    currency: '$',
    tags: ['AI', 'Machine Learning', 'API Integration']
  },
  { 
    id: 'ai-consulting-1', 
    title: 'AI Strategy Consulting', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    description: 'Strategic AI implementation planning, ROI analysis, and technology roadmap development',
    price: 3500,
    currency: '$',
    tags: ['AI Strategy', 'Consulting', 'ROI Analysis']
  },
  { 
    id: 'ml-training-1', 
    title: 'Custom ML Model Training', 
    category: 'ai-service', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    description: 'Specialized machine learning model training for computer vision, NLP, and predictive analytics',
    price: 8000,
    currency: '$',
    tags: ['ML Training', 'Computer Vision', 'NLP']
  },
  
  // IT Infrastructure Services
  { 
    id: 'cloud-migration-1', 
    title: 'Cloud Migration & Support', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format',
    description: 'End-to-end cloud migration services with 24/7 support and optimization',
    price: 3000,
    currency: '$',
    tags: ['Cloud Migration', 'AWS', 'Azure', 'DevOps']
  },
  { 
    id: 'it-consulting-1', 
    title: 'IT Infrastructure Consulting', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    description: 'Comprehensive IT infrastructure assessment, planning, and modernization services',
    price: 4500,
    currency: '$',
    tags: ['Infrastructure', 'Digital Transformation', 'Consulting']
  },
  { 
    id: 'cybersecurity-1', 
    title: 'Cybersecurity Assessment', 
    category: 'it-service', 
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format',
    description: 'Full security audit, penetration testing, and compliance framework implementation',
    price: 6000,
    currency: '$',
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance']
  },
  
  // Micro SAAS Solutions
  { 
    id: 'saas-automation-1', 
    title: 'Business Process Automation', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    description: 'Custom workflow automation and business process optimization solutions',
    price: 2500,
    currency: '$',
    tags: ['Automation', 'Workflow', 'Process Optimization']
  },
  { 
    id: 'saas-analytics-1', 
    title: 'Business Intelligence Dashboard', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    description: 'Custom BI dashboards with real-time analytics and KPI tracking',
    price: 4000,
    currency: '$',
    tags: ['BI', 'Analytics', 'Dashboard', 'KPI Tracking']
  },
  { 
    id: 'saas-crm-1', 
    title: 'Custom CRM Development', 
    category: 'saas-service', 
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    description: 'Tailored customer relationship management system with advanced features',
    price: 7000,
    currency: '$',
    tags: ['CRM', 'Custom Development', 'Customer Management']
  },
  
  // Talent & Equipment
  { 
    id: 'talent-1', 
    title: 'AI Engineer', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format',
    description: 'Senior AI engineer with 5+ years experience in ML, deep learning, and production deployment',
    price: 120,
    currency: '$/hr',
    tags: ['AI Engineer', 'Machine Learning', 'Deep Learning']
  },
  { 
    id: 'talent-2', 
    title: 'Data Scientist', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format',
    description: 'Expert data scientist specializing in big data analytics and predictive modeling',
    price: 95,
    currency: '$/hr',
    tags: ['Data Science', 'Big Data', 'Predictive Analytics']
  },
  { 
    id: 'equipment-1', 
    title: 'High-Performance Workstation', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format',
    description: 'GPU-accelerated workstation for AI/ML development and data processing',
    price: 3500,
    currency: '$',
    tags: ['Workstation', 'GPU', 'AI Development']
  },
  { 
    id: 'equipment-2', 
    title: 'Server Rack Infrastructure', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    description: 'Enterprise-grade server rack with networking equipment for scalable deployments',
    price: 8500,
    currency: '$',
    tags: ['Server Rack', 'Networking', 'Enterprise']
  },
];

// New comprehensive service categories
export const SERVICE_CATEGORIES = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    services: [
      'Custom AI Development',
      'ML Model Training',
      'AI Strategy Consulting',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Integration Services',
      'Model Deployment & MLOps'
    ],
    avgPrice: 6000,
    icon: '🤖'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    description: 'Comprehensive IT infrastructure and digital transformation services',
    services: [
      'Cloud Migration',
      'DevOps Implementation',
      'Infrastructure Modernization',
      'Cybersecurity Services',
      'Network Architecture',
      'Data Center Design',
      'IT Strategy Consulting',
      '24/7 Support & Monitoring'
    ],
    avgPrice: 4500,
    icon: '🖥️'
  },
  {
    id: 'saas-solutions',
    name: 'Micro SAAS Solutions',
    description: 'Custom software-as-a-service applications for business automation',
    services: [
      'Business Process Automation',
      'Custom CRM Development',
      'BI Dashboard Creation',
      'Workflow Management',
      'Project Management Tools',
      'Inventory Management',
      'Customer Portal Development',
      'API Integration Services'
    ],
    avgPrice: 3500,
    icon: '☁️'
  },
  {
    id: 'data-services',
    name: 'Data & Analytics',
    description: 'Advanced data engineering, analytics, and business intelligence',
    services: [
      'Big Data Engineering',
      'Data Pipeline Development',
      'Business Intelligence',
      'Data Visualization',
      'ETL Process Design',
      'Data Quality Management',
      'Real-time Analytics',
      'Data Strategy Consulting'
    ],
    avgPrice: 5000,
    icon: '📊'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions and compliance services',
    services: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Framework',
      'Incident Response',
      'Security Training',
      'Vulnerability Assessment',
      'Security Architecture',
      'Threat Intelligence'
    ],
    avgPrice: 5500,
    icon: '🔒'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'End-to-end digital transformation and innovation consulting',
    services: [
      'Digital Strategy',
      'Process Reengineering',
      'Technology Assessment',
      'Change Management',
      'Innovation Consulting',
      'Legacy System Modernization',
      'Digital Maturity Assessment',
      'Transformation Roadmap'
    ],
    avgPrice: 7000,
    icon: '🚀'
  }
];

// Service pricing tiers
export const SERVICE_PRICING_TIERS = [
  {
    name: 'Starter',
    price: 1500,
    currency: '$',
    description: 'Basic implementation and setup',
    features: [
      'Initial consultation',
      'Basic implementation',
      'Documentation',
      '30 days support'
    ]
  },
  {
    name: 'Professional',
    price: 4500,
    currency: '$',
    description: 'Full-service implementation with customization',
    features: [
      'Comprehensive consultation',
      'Custom development',
      'Testing & deployment',
      '90 days support',
      'Training & documentation'
    ]
  },
  {
    name: 'Enterprise',
    price: 12000,
    currency: '$',
    description: 'Enterprise-grade solution with ongoing support',
    features: [
      'Strategic planning',
      'Enterprise customization',
      'Full deployment',
      '1 year support',
      'Training & certification',
      'Performance optimization',
      'Scalability planning'
    ]
=======
    id: 'ai-development', 
    title: 'AI Development & Integration', 
    category: 'ai-services', 
    image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format',
    price: '$5,000 - $25,000',
    description: 'Custom AI model development, integration, and deployment services'
  },
  { 
    id: 'ai-consulting', 
    title: 'AI Strategy Consulting', 
    category: 'ai-services', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format',
    price: '$3,000 - $15,000',
    description: 'Strategic AI implementation planning and business transformation'
  },
  { 
    id: 'ml-training', 
    title: 'Machine Learning Model Training', 
    category: 'ai-services', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    price: '$4,000 - $20,000',
    description: 'Custom ML model training and optimization services'
  },
  
  // Cloud & Infrastructure Services
  { 
    id: 'cloud-migration', 
    title: 'Cloud Migration & Support', 
    category: 'cloud-services', 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format',
    price: '$3,000 - $18,000',
    description: 'Complete cloud migration and ongoing management support'
  },
  { 
    id: 'devops-automation', 
    title: 'DevOps Automation', 
    category: 'cloud-services', 
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&auto=format',
    price: '$2,500 - $12,000',
    description: 'CI/CD pipeline setup and infrastructure automation'
  },
  { 
    id: 'kubernetes-management', 
    title: 'Kubernetes Management', 
    category: 'cloud-services', 
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format',
    price: '$4,000 - $20,000',
    description: 'Kubernetes cluster setup, management, and optimization'
  },
  
  // Cybersecurity Services
  { 
    id: 'cybersecurity-audit', 
    title: 'Cybersecurity Assessment', 
    category: 'security-services', 
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format',
    price: '$5,000 - $25,000',
    description: 'Comprehensive security audits and penetration testing'
  },
  { 
    id: 'compliance-framework', 
    title: 'Compliance Framework Setup', 
    category: 'security-services', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    price: '$6,000 - $30,000',
    description: 'SOC 2, ISO 27001, and GDPR compliance implementation'
  },
  { 
    id: 'incident-response', 
    title: 'Incident Response Planning', 
    category: 'security-services', 
    image: 'https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?w=800&auto=format',
    price: '$3,000 - $15,000',
    description: 'Security incident response planning and training'
  },
  
  // Data & Analytics Services
  { 
    id: 'big-data-engineering', 
    title: 'Big Data Engineering', 
    category: 'data-services', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    price: '$4,500 - $22,000',
    description: 'Data pipeline development and ETL process optimization'
  },
  { 
    id: 'business-intelligence', 
    title: 'Business Intelligence Setup', 
    category: 'data-services', 
    image: 'https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?w=800&auto=format',
    price: '$3,500 - $18,000',
    description: 'BI dashboard creation and data visualization'
  },
  { 
    id: 'data-governance', 
    title: 'Data Governance Framework', 
    category: 'data-services', 
    image: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800&auto=format',
    price: '$5,000 - $25,000',
    description: 'Data quality, lineage, and governance implementation'
  },
  
  // Digital Transformation Services
  { 
    id: 'digital-transformation', 
    title: 'Digital Transformation Strategy', 
    category: 'transformation-services', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    price: '$7,500 - $35,000',
    description: 'End-to-end digital transformation planning and execution'
  },
  { 
    id: 'legacy-modernization', 
    title: 'Legacy System Modernization', 
    category: 'transformation-services', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    price: '$8,500 - $40,000',
    description: 'Legacy system upgrade and modernization services'
  },
  { 
    id: 'process-automation', 
    title: 'Process Automation', 
    category: 'transformation-services', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format',
    price: '$4,000 - $20,000',
    description: 'RPA and business process automation implementation'
  },
  
  // Web & Mobile Development
  { 
    id: 'web-development', 
    title: 'Custom Web Development', 
    category: 'development-services', 
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format',
    price: '$3,000 - $25,000',
    description: 'Custom web applications and e-commerce solutions'
  },
  { 
    id: 'mobile-app-development', 
    title: 'Mobile App Development', 
    category: 'development-services', 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format',
    price: '$5,000 - $35,000',
    description: 'iOS and Android app development services'
  },
  { 
    id: 'api-development', 
    title: 'API Development & Integration', 
    category: 'development-services', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format',
    price: '$2,500 - $15,000',
    description: 'RESTful API development and third-party integrations'
  },
  
  // IT Support & Management
  { 
    id: 'it-consulting', 
    title: 'IT Consulting & Strategy', 
    category: 'it-services', 
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format',
    price: '$2,000 - $12,000',
    description: 'IT strategy consulting and technology roadmapping'
  },
  { 
    id: 'managed-it-services', 
    title: 'Managed IT Services', 
    category: 'it-services', 
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format',
    price: '$1,500 - $8,000/month',
    description: '24/7 IT monitoring, support, and maintenance'
  },
  { 
    id: 'network-infrastructure', 
    title: 'Network Infrastructure Setup', 
    category: 'it-services', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    price: '$4,000 - $20,000',
    description: 'Network design, setup, and security implementation'
  },
  
  // Blockchain & Web3 Services
  { 
    id: 'blockchain-development', 
    title: 'Blockchain Development', 
    category: 'blockchain-services', 
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format',
    price: '$8,000 - $40,000',
    description: 'Smart contract development and blockchain solutions'
  },
  { 
    id: 'defi-protocols', 
    title: 'DeFi Protocol Development', 
    category: 'blockchain-services', 
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format',
    price: '$10,000 - $50,000',
    description: 'Decentralized finance protocol development'
  },
  { 
    id: 'nft-marketplace', 
    title: 'NFT Marketplace Development', 
    category: 'blockchain-services', 
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format',
    price: '$6,000 - $30,000',
    description: 'Custom NFT marketplace and collection management'
  },
  
  // IoT & Hardware Services
  { 
    id: 'iot-solutions', 
    title: 'IoT Solution Development', 
    category: 'iot-services', 
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format',
    price: '$5,000 - $25,000',
    description: 'Internet of Things device and platform development'
  },
  { 
    id: 'hardware-prototyping', 
    title: 'Hardware Prototyping', 
    category: 'iot-services', 
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format',
    price: '$3,000 - $18,000',
    description: 'Hardware prototyping and PCB design services'
  },
  { 
    id: 'edge-computing', 
    title: 'Edge Computing Solutions', 
    category: 'iot-services', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    price: '$4,500 - $22,000',
    description: 'Edge computing infrastructure and deployment'
  },
  
  // Talent & Recruitment
  { 
    id: 'ai-engineer', 
    title: 'AI Engineer', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format',
    price: '$80 - $150/hour',
    description: 'Experienced AI engineer for machine learning projects'
  },
  { 
    id: 'data-scientist', 
    title: 'Data Scientist', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format',
    price: '$70 - $130/hour',
    description: 'Senior data scientist for analytics and ML projects'
  },
  { 
    id: 'devops-engineer', 
    title: 'DevOps Engineer', 
    category: 'talent', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format',
    price: '$60 - $120/hour',
    description: 'DevOps engineer for infrastructure automation'
  },
  
  // Equipment & Hardware
  { 
    id: 'workstation', 
    title: 'High-Performance Workstation', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format',
    price: '$2,000 - $8,000',
    description: 'AI/ML development workstations with GPU acceleration'
  },
  { 
    id: 'server-rack', 
    title: 'Server Rack & Infrastructure', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format',
    price: '$5,000 - $25,000',
    description: 'Enterprise server infrastructure and networking equipment'
  },
  { 
    id: 'gpu-cluster', 
    title: 'GPU Cluster for AI Training', 
    category: 'equipment', 
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format',
    price: '$15,000 - $100,000',
    description: 'High-performance GPU clusters for machine learning'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
  }
];
