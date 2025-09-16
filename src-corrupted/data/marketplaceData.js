// Marketplace data and search suggestions for Zion Tech Group

export const generateSearchSuggestions = () => [
  // Services
  'AI Services', 'Cloud Migration',
  'Cybersecurity', 'Digital Transformation',
  'IT Infrastructure', 'DevOps',
  'Machine Learning', 'Data Analytics',
  'Cloud Computing', 'Network Security',
  'Software Development', 'System Integration',
  'Business Intelligence', 'Automation',
  'IoT Solutions', 'Blockchain',
  'API Development', 'Mobile Development',
  'Web Development', 'Database Management',
  
  // Solutions
  'Manufacturing Solutions', 'Financial Services',
  'Healthcare Solutions', 'Retail Solutions',
  'Education Technology', 'Energy Management',
  'Supply Chain', 'Customer Experience',
  'Employee Productivity', 'Risk Management',
  'Compliance Solutions', 'Performance Optimization',
  'Scalability Solutions', 'Disaster Recovery',
  'Backup Solutions', // Industry Terms
  'Micro SAAS',
  'Enterprise Software', 'Cloud Native',
  'Serverless', 'Containerization',
  'Kubernetes', 'Docker',
  'AWS', 'Azure',
  'Google Cloud', 'Hybrid Cloud',
  'Multi Cloud', 'Edge Computing',
  '5G Solutions', 'Smart Cities',
  
  // Technologies
  'React', 'Node.js',
  'Python', 'Java',
  'JavaScript', 'TypeScript',
  'Angular', 'Vue.js',
  'MongoDB', 'PostgreSQL',
  'Redis', 'Elasticsearch',
  'Kafka', 'RabbitMQ',
  'GraphQL', 'REST API',
  'Microservices', 'Event Driven Architecture',
  'CQRS', 'Event Sourcing'
];

export const serviceCategories = [
  {
    id: 'ai-ml', name: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence', icon: '🤖',
    services: [
      'Machine Learning Models', 'Natural Language Processing',
      'Computer Vision', 'Predictive Analytics',
      'AI Chatbots', 'Recommendation Systems',
      'Data Mining', 'Neural Networks'
    ]
  }, {
    id: 'cloud-devops',
    name: 'Cloud & DevOps', description: 'Scalable infrastructure and automated operations',
    icon: '☁️', services: [
      'Cloud Migration',
      'DevOps Automation', 'Container Orchestration',
      'Infrastructure as Code', 'CI/CD Pipelines',
      'Monitoring & Logging', 'Auto Scaling',
      'Load Balancing'
    ]
  }, {
    id: 'cybersecurity',
    name: 'Cybersecurity', description: 'Protection and compliance solutions',
    icon: '🔒', services: [
      'Security Audits',
      'Penetration Testing', 'Vulnerability Assessment',
      'Incident Response', 'Security Monitoring',
      'Compliance Management', 'Identity & Access Management',
      'Data Protection'
    ]
  }, {
    id: 'digital-transformation',
    name: 'Digital Transformation', description: 'Business evolution through technology',
    icon: '🚀', services: [
      'Process Automation',
      'Workflow Optimization', 'Change Management',
      'Digital Strategy', 'Legacy Modernization',
      'Business Process Reengineering', 'Digital Adoption',
      'Innovation Consulting'
    ]
  }
];

export const industrySolutions = [
  {
    id: 'manufacturing', name: 'Manufacturing',
    description: 'Smart factory and Industry 4.0 solutions', icon: '🏭',
    solutions: [
      'Predictive Maintenance', 'Quality Control',
      'Supply Chain Optimization', 'Production Planning',
      'Asset Management', 'Performance Monitoring'
    ]
  }, {
    id: 'financial',
    name: 'Financial Services', description: 'FinTech and banking solutions',
    icon: '💳', solutions: [
      'Digital Banking',
      'Payment Processing', 'Risk Analytics',
      'Compliance Automation', 'Customer Onboarding',
      'Fraud Detection'
    ]
  }, {
    id: 'healthcare',
    name: 'Healthcare', description: 'Digital health and medical technology',
    icon: '🏥', solutions: [
      'Electronic Health Records',
      'Telemedicine Platforms', 'Medical Imaging',
      'Patient Management', 'Clinical Decision Support',
      'Healthcare Analytics'
    ]
  }, {
    id: 'retail',
    name: 'Retail', description: 'E-commerce and omnichannel solutions',
    icon: '🛒', solutions: [
      'E-commerce Platforms',
      'Inventory Management', 'Customer Analytics',
      'Omnichannel Integration', 'Personalization',
      'Mobile Commerce'
    ]
  }
];

export const testimonials = [
  {
    id: 1, name: 'Sarah Johnson',
    title: 'CTO', company: 'TechCorp Industries',
    content: 'Zion Tech Group transformed our legacy systems into a modern, scalable cloud infrastructure. Their expertise in DevOps and automation has increased our deployment speed by 300%.',
    rating: 5, avatar: '/avatars/sarah.jpg'
  },
  {
    id: 2, name: 'Michael Chen',
    title: 'VP of Engineering', company: 'InnovateBank',
    content: 'The AI-powered fraud detection system from Zion Tech Group has reduced our false positives by 60% while maintaining 99.9% accuracy. Outstanding results!', rating: 5,
    avatar: '/avatars/michael.jpg'
  }, {
    id: 3,
    name: 'Emily Rodriguez', title: 'Operations Director',
    company: 'GreenManufacturing Co.', content: 'Their digital transformation consulting helped us implement smart manufacturing solutions that increased our production efficiency by 40% and reduced waste by 25%.',
    rating: 5, avatar: '/avatars/emily.jpg'
  }
];

export const caseStudies = [
  {
    id: 'cloud-migration-bank', title: 'Major Bank Cloud Migration',
    industry: 'Financial Services', challenge: 'Legacy on-premise systems causing scalability issues and high maintenance costs',
    solution: 'Multi-cloud migration with automated DevOps pipelines', results: [
      '50% reduction in infrastructure costs',
      '99.9% uptime achieved', 'Deployment time reduced from weeks to hours'
    ], technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Jenkins']
  }, {
    id: 'ai-manufacturing',
    title: 'AI-Powered Manufacturing Optimization', industry: 'Manufacturing',
    challenge: 'Inefficient production processes and high defect rates', solution: 'Machine learning models for predictive maintenance and quality control',
    results: [
      '30% reduction in production downtime', '25% improvement in product quality',
      '15% increase in overall efficiency'
    ], technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Real-time Analytics']
  }, {
    id: 'cybersecurity-healthcare',
    title: 'Healthcare Security Enhancement', industry: 'Healthcare',
    challenge: 'Increasing cyber threats and compliance requirements', solution: 'Comprehensive security framework with 24/7 monitoring',
    results: [
      '100% compliance with HIPAA regulations', 'Zero security breaches in 2 years',
      '50% faster incident response time'
    ], technologies: ['SIEM', 'EDR', 'Vulnerability Scanning', 'Compliance Automation']
  }
];