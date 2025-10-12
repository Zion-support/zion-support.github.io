// Comprehensive Services Data for Zion Tech Group
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  color: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging';
  marketPrice?: string;
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const aiServices: Service[] = [
  {
    id: 'ai-analytics-dashboard-pro',
    title: 'AI Analytics Dashboard Pro',
    description: 'Advanced business intelligence platform with real-time AI-powered insights, predictive analytics, and automated reporting.',
    price: '$299/month',
    marketPrice: '$500-800/month',
    features: [
      'Real-time data visualization',
      'Predictive modeling & forecasting',
      'Custom dashboard builder',
      'API integrations (50+ platforms)',
      'Automated report generation',
      'Multi-user collaboration',
      'Mobile-responsive design',
      'White-label options'
    ],
    icon: 'BarChart',
    color: 'from-purple-500 to-pink-500',
    category: 'ai',
    benefits: [
      'Increase decision-making speed by 300%',
      'Reduce manual reporting time by 80%',
      'Improve forecast accuracy by 45%',
      'Enable data-driven strategies'
    ],
    useCases: [
      'E-commerce sales optimization',
      'Financial performance tracking',
      'Marketing campaign analysis',
      'Supply chain monitoring'
    ],
    technologies: ['Machine Learning', 'Python', 'React', 'D3.js', 'TensorFlow', 'PostgreSQL'],
    link: '/ai-analytics-dashboard-pro',
    isPopular: true
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Enterprise-grade AI content creation platform with multi-language support, brand voice training, and SEO optimization.',
    price: '$199/month',
    marketPrice: '$300-500/month',
    features: [
      'Multi-language content generation',
      'Brand voice training & consistency',
      'SEO optimization & keyword research',
      'Content scheduling & automation',
      'Plagiarism detection',
      'Tone & style customization',
      'Bulk content generation',
      'Integration with major CMS platforms'
    ],
    icon: 'FileText',
    color: 'from-blue-500 to-cyan-500',
    category: 'ai',
    benefits: [
      'Reduce content creation time by 70%',
      'Maintain consistent brand voice',
      'Improve SEO rankings by 40%',
      'Scale content production 10x'
    ],
    useCases: [
      'Blog post automation',
      'Social media content',
      'Product descriptions',
      'Email marketing campaigns'
    ],
    technologies: ['GPT-4', 'BERT', 'NLP', 'Python', 'FastAPI', 'MongoDB'],
    link: '/ai-content-generation-pro',
    isNew: true
  },
  {
    id: 'ai-customer-support-enterprise',
    title: 'AI Customer Support Enterprise',
    description: '24/7 intelligent customer service solution with natural language processing, sentiment analysis, and seamless human handoff.',
    price: '$399/month',
    marketPrice: '$600-1000/month',
    features: [
      'Multi-channel support (web, mobile, social)',
      'Advanced sentiment analysis',
      'Intelligent ticket routing',
      'Knowledge base integration',
      'Live chat handoff to humans',
      'Performance analytics & insights',
      'Custom bot training',
      'API for custom integrations'
    ],
    icon: 'MessageCircle',
    color: 'from-green-500 to-emerald-500',
    category: 'ai',
    benefits: [
      'Reduce response time by 90%',
      'Increase customer satisfaction by 35%',
      'Handle 80% of queries automatically',
      'Reduce support costs by 60%'
    ],
    useCases: [
      'E-commerce customer service',
      'SaaS product support',
      'Financial services inquiries',
      'Healthcare patient support'
    ],
    technologies: ['NLP', 'BERT', 'Dialogflow', 'Node.js', 'WebSocket', 'Redis'],
    link: '/ai-customer-support-enterprise',
    isPopular: true
  },
  {
    id: 'ai-workflow-automation-pro',
    title: 'AI Workflow Automation Pro',
    description: 'Intelligent business process automation with AI-powered decision making, custom workflow builder, and integration capabilities.',
    price: '$249/month',
    marketPrice: '$400-700/month',
    features: [
      'Visual workflow builder',
      'AI-powered decision nodes',
      '100+ pre-built integrations',
      'Custom API connections',
      'Real-time monitoring & analytics',
      'Error handling & recovery',
      'Role-based permissions',
      'Audit trail & compliance'
    ],
    icon: 'Workflow',
    color: 'from-orange-500 to-red-500',
    category: 'ai',
    benefits: [
      'Automate 70% of repetitive tasks',
      'Reduce human errors by 85%',
      'Improve process efficiency by 200%',
      'Ensure compliance & auditability'
    ],
    useCases: [
      'Invoice processing automation',
      'Lead qualification workflows',
      'Employee onboarding',
      'Inventory management'
    ],
    technologies: ['AI/ML', 'Python', 'Celery', 'PostgreSQL', 'Docker', 'Kubernetes'],
    link: '/ai-workflow-automation-pro'
  },
  {
    id: 'ai-cybersecurity-monitor-pro',
    title: 'AI Cybersecurity Monitor Pro',
    description: 'Advanced threat detection and response system with real-time monitoring, behavioral analysis, and automated incident response.',
    price: '$449/month',
    marketPrice: '$700-1200/month',
    features: [
      'Real-time threat detection',
      'Behavioral analysis & anomaly detection',
      'Automated incident response',
      'Compliance reporting (SOC2, GDPR)',
      'Network traffic analysis',
      'Endpoint protection',
      'Threat intelligence feeds',
      'Custom security policies'
    ],
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    category: 'ai',
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 60%',
      'Automate 80% of incident response',
      'Ensure regulatory compliance'
    ],
    useCases: [
      'Enterprise security monitoring',
      'Financial services protection',
      'Healthcare data security',
      'E-commerce fraud prevention'
    ],
    technologies: ['Machine Learning', 'Python', 'ELK Stack', 'TensorFlow', 'Kafka', 'Docker'],
    link: '/ai-cybersecurity-monitor-pro',
    isPopular: true
  },
  {
    id: 'ai-predictive-analytics-enterprise',
    title: 'AI Predictive Analytics Enterprise',
    description: 'Advanced predictive modeling platform with machine learning algorithms, automated model training, and business forecasting.',
    price: '$349/month',
    marketPrice: '$500-900/month',
    features: [
      'Automated model training',
      'Multiple ML algorithms',
      'Real-time predictions',
      'Custom model deployment',
      'A/B testing framework',
      'Model performance monitoring',
      'Data preprocessing tools',
      'Integration with BI tools'
    ],
    icon: 'TrendingUp',
    color: 'from-indigo-500 to-purple-500',
    category: 'ai',
    benefits: [
      'Improve forecast accuracy by 50%',
      'Reduce planning time by 70%',
      'Identify opportunities 3x faster',
      'Optimize resource allocation'
    ],
    useCases: [
      'Sales forecasting',
      'Demand planning',
      'Risk assessment',
      'Customer lifetime value prediction'
    ],
    technologies: ['Scikit-learn', 'TensorFlow', 'Python', 'Pandas', 'Jupyter', 'MLflow'],
    link: '/ai-predictive-analytics-enterprise'
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure-enterprise',
    title: 'Cloud Infrastructure Enterprise',
    description: 'Comprehensive cloud migration and management services with AWS, Azure, and Google Cloud expertise.',
    price: 'Starting at $5,000',
    marketPrice: '$8,000-15,000',
    features: [
      'Zero-downtime migration',
      'Multi-cloud architecture design',
      'Security compliance (SOC2, HIPAA)',
      'Cost optimization strategies',
      '24/7 monitoring & support',
      'Disaster recovery planning',
      'Auto-scaling implementation',
      'Performance optimization'
    ],
    icon: 'Cloud',
    color: 'from-cyan-500 to-blue-500',
    category: 'it',
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability & reliability',
      'Enhance security posture',
      'Enable global deployment'
    ],
    useCases: [
      'Legacy system modernization',
      'Multi-region deployment',
      'High-availability setup',
      'Compliance requirements'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
    link: '/cloud-infrastructure-enterprise',
    isPopular: true
  },
  {
    id: 'cybersecurity-solutions-advanced',
    title: 'Cybersecurity Solutions Advanced',
    description: 'Comprehensive security assessment, implementation, and ongoing monitoring services.',
    price: 'Starting at $3,000',
    marketPrice: '$5,000-10,000',
    features: [
      'Vulnerability assessment & penetration testing',
      'Security architecture design',
      'Compliance implementation (SOC2, GDPR)',
      'Security awareness training',
      'Incident response planning',
      'Ongoing security monitoring',
      'Security policy development',
      'Regular security audits'
    ],
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    category: 'it',
    benefits: [
      'Protect against 99.9% of threats',
      'Ensure regulatory compliance',
      'Reduce security incidents by 90%',
      'Build customer trust & confidence'
    ],
    useCases: [
      'Financial services security',
      'Healthcare compliance',
      'E-commerce protection',
      'Enterprise security posture'
    ],
    technologies: ['Nessus', 'Burp Suite', 'OWASP', 'SIEM', 'Firewall', 'IDS/IPS'],
    link: '/cybersecurity-solutions-advanced',
    isPopular: true
  },
  {
    id: 'custom-web-development-enterprise',
    title: 'Custom Web Development Enterprise',
    description: 'Modern, scalable web applications built with cutting-edge technologies and best practices.',
    price: 'Starting at $8,000',
    marketPrice: '$12,000-25,000',
    features: [
      'Responsive design & mobile optimization',
      'SEO optimization & performance tuning',
      'Progressive Web App (PWA) features',
      'API development & integration',
      'Database design & optimization',
      'Security implementation',
      'Testing & quality assurance',
      'Ongoing maintenance & support'
    ],
    icon: 'Code',
    color: 'from-green-500 to-emerald-500',
    category: 'it',
    benefits: [
      'Increase conversion rates by 30%',
      'Improve page load speed by 50%',
      'Enhance user experience',
      'Ensure mobile compatibility'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS applications',
      'Corporate websites',
      'Web portals & dashboards'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    link: '/custom-web-development-enterprise',
    isPopular: true
  },
  {
    id: 'mobile-development-enterprise',
    title: 'Mobile Development Enterprise',
    description: 'Native and cross-platform mobile applications with advanced features and seamless user experience.',
    price: 'Starting at $12,000',
    marketPrice: '$18,000-35,000',
    features: [
      'iOS & Android native development',
      'Cross-platform solutions (React Native, Flutter)',
      'App store optimization',
      'Push notifications & analytics',
      'Offline functionality',
      'Biometric authentication',
      'Payment integration',
      'App store submission & maintenance'
    ],
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-500',
    category: 'it',
    benefits: [
      'Reach mobile users effectively',
      'Improve customer engagement',
      'Enable offline functionality',
      'Access device features & sensors'
    ],
    useCases: [
      'E-commerce mobile apps',
      'SaaS mobile applications',
      'Healthcare mobile solutions',
      'Financial services apps'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
    link: '/mobile-development-enterprise'
  },
  {
    id: 'api-development-enterprise',
    title: 'API Development Enterprise',
    description: 'Robust, scalable API solutions with comprehensive documentation, testing, and monitoring.',
    price: 'Starting at $4,000',
    marketPrice: '$6,000-12,000',
    features: [
      'RESTful & GraphQL API design',
      'Comprehensive API documentation',
      'Rate limiting & authentication',
      'API testing & monitoring',
      'Versioning & backward compatibility',
      'SDK generation',
      'API gateway implementation',
      'Performance optimization'
    ],
    icon: 'LinkIcon',
    color: 'from-blue-500 to-indigo-500',
    category: 'it',
    benefits: [
      'Enable third-party integrations',
      'Improve system scalability',
      'Reduce development time',
      'Ensure API reliability & security'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Data sharing platforms'
    ],
    technologies: ['Node.js', 'Express', 'GraphQL', 'Postman', 'Swagger', 'Redis'],
    link: '/api-development-enterprise'
  },
  {
    id: 'devops-cicd-enterprise',
    title: 'DevOps & CI/CD Enterprise',
    description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and monitoring.',
    price: 'Starting at $6,000',
    marketPrice: '$10,000-18,000',
    features: [
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Monitoring & logging setup',
      'Security scanning integration',
      'Automated testing frameworks',
      'Deployment strategies',
      'Disaster recovery automation'
    ],
    icon: 'Settings',
    color: 'from-orange-500 to-yellow-500',
    category: 'it',
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality & reliability',
      'Enable rapid scaling',
      'Minimize downtime & errors'
    ],
    useCases: [
      'Software development acceleration',
      'Cloud-native applications',
      'Microservices deployment',
      'Legacy system modernization'
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus', 'Grafana'],
    link: '/devops-cicd-enterprise',
    isPopular: true
  }
];

export const microSaasServices: Service[] = [
  {
    id: 'zion-analytics-pro',
    title: 'Zion Analytics Pro',
    description: 'Advanced business intelligence platform with AI-powered insights, real-time dashboards, and predictive analytics.',
    price: '$99/month',
    marketPrice: '$150-300/month',
    features: [
      'Real-time data visualization',
      'AI-powered insights & recommendations',
      'Custom dashboard builder',
      '50+ data source integrations',
      'Automated report generation',
      'Team collaboration tools',
      'Mobile app access',
      'White-label options'
    ],
    icon: 'BarChart',
    color: 'from-blue-500 to-purple-500',
    category: 'micro-saas',
    benefits: [
      'Make data-driven decisions faster',
      'Identify growth opportunities',
      'Reduce manual reporting time',
      'Improve team productivity'
    ],
    useCases: [
      'E-commerce analytics',
      'Marketing performance tracking',
      'Financial reporting',
      'Operations monitoring'
    ],
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    link: '/zion-analytics-pro',
    isPopular: true
  },
  {
    id: 'zion-chat-ai',
    title: 'Zion Chat AI',
    description: 'Intelligent customer support chatbot with natural language processing and seamless human handoff.',
    price: '$79/month',
    marketPrice: '$120-250/month',
    features: [
      'Multi-language support',
      'Custom bot training',
      'Live chat integration',
      'Knowledge base management',
      'Analytics & insights',
      'API integrations',
      'Custom branding',
      '24/7 availability'
    ],
    icon: 'MessageCircle',
    color: 'from-green-500 to-teal-500',
    category: 'micro-saas',
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Increase customer satisfaction',
      'Handle multiple languages'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification',
      'FAQ automation',
      'Order status inquiries'
    ],
    technologies: ['NLP', 'Dialogflow', 'Node.js', 'MongoDB', 'WebSocket', 'Redis'],
    link: '/zion-chat-ai',
    isPopular: true
  },
  {
    id: 'zion-security-shield',
    title: 'Zion Security Shield',
    description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
    price: '$149/month',
    marketPrice: '$200-400/month',
    features: [
      'Real-time threat monitoring',
      'Vulnerability scanning',
      'Incident response automation',
      'Compliance reporting',
      'Security awareness training',
      '24/7 security operations center',
      'Custom security policies',
      'Integration with existing tools'
    ],
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    category: 'micro-saas',
    benefits: [
      'Protect against cyber threats',
      'Ensure compliance requirements',
      'Reduce security incidents',
      'Gain peace of mind'
    ],
    useCases: [
      'Small business security',
      'E-commerce protection',
      'Healthcare compliance',
      'Financial services security'
    ],
    technologies: ['SIEM', 'Machine Learning', 'Python', 'ELK Stack', 'Docker', 'Kubernetes'],
    link: '/zion-security-shield',
    isPopular: true
  },
  {
    id: 'zion-content-studio',
    title: 'Zion Content Studio',
    description: 'AI-powered content creation and management platform with multi-platform publishing and brand consistency.',
    price: '$79/month',
    marketPrice: '$120-250/month',
    features: [
      'AI content generation',
      'Multi-platform publishing',
      'Brand voice training',
      'SEO optimization',
      'Content calendar management',
      'Team collaboration',
      'Performance analytics',
      'Template library'
    ],
    icon: 'FileText',
    color: 'from-green-500 to-teal-500',
    category: 'micro-saas',
    benefits: [
      'Scale content production 10x',
      'Maintain brand consistency',
      'Improve SEO performance',
      'Save time on content creation'
    ],
    useCases: [
      'Blog content automation',
      'Social media management',
      'Email marketing',
      'Product descriptions'
    ],
    technologies: ['GPT-4', 'React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
    link: '/zion-content-studio'
  },
  {
    id: 'zion-crm-intelligence',
    title: 'Zion CRM Intelligence',
    description: 'Smart customer relationship management with AI insights, lead scoring, and sales forecasting.',
    price: '$129/month',
    marketPrice: '$200-400/month',
    features: [
      'AI-powered lead scoring',
      'Sales forecasting & analytics',
      'Customer journey mapping',
      'Email automation',
      'Pipeline management',
      'Integration with 100+ tools',
      'Custom reporting',
      'Mobile app access'
    ],
    icon: 'Users',
    color: 'from-purple-500 to-pink-500',
    category: 'micro-saas',
    benefits: [
      'Increase sales by 25%',
      'Improve lead quality',
      'Reduce sales cycle time',
      'Better customer insights'
    ],
    useCases: [
      'Sales team management',
      'Lead qualification',
      'Customer retention',
      'Sales forecasting'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'Stripe', 'SendGrid'],
    link: '/zion-crm-intelligence',
    isPopular: true
  },
  {
    id: 'zion-project-master',
    title: 'Zion Project Master',
    description: 'Advanced project management platform with AI-powered insights, resource optimization, and team collaboration.',
    price: '$89/month',
    marketPrice: '$150-300/month',
    features: [
      'AI-powered project insights',
      'Resource optimization',
      'Team collaboration tools',
      'Time tracking & reporting',
      'Risk assessment & mitigation',
      'Integration with 50+ tools',
      'Custom workflows',
      'Mobile app access'
    ],
    icon: 'CheckSquare',
    color: 'from-indigo-500 to-blue-500',
    category: 'micro-saas',
    benefits: [
      'Improve project success rate by 40%',
      'Optimize resource allocation',
      'Reduce project delays',
      'Enhance team productivity'
    ],
    useCases: [
      'Software development projects',
      'Marketing campaigns',
      'Event planning',
      'Construction projects'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker'],
    link: '/zion-project-master'
  },
  {
    id: 'zion-email-automation',
    title: 'Zion Email Automation',
    description: 'Intelligent email marketing platform with AI-powered personalization, segmentation, and campaign optimization.',
    price: '$59/month',
    marketPrice: '$100-200/month',
    features: [
      'AI-powered personalization',
      'Advanced segmentation',
      'A/B testing automation',
      'Behavioral triggers',
      'Email template builder',
      'Analytics & reporting',
      'Integration with 100+ tools',
      'Compliance management'
    ],
    icon: 'Mail',
    color: 'from-orange-500 to-red-500',
    category: 'micro-saas',
    benefits: [
      'Increase email open rates by 35%',
      'Improve click-through rates by 50%',
      'Reduce unsubscribe rates',
      'Automate email campaigns'
    ],
    useCases: [
      'E-commerce marketing',
      'Lead nurturing',
      'Customer onboarding',
      'Newsletter automation'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Machine Learning', 'Redis'],
    link: '/zion-email-automation'
  },
  {
    id: 'zion-inventory-smart',
    title: 'Zion Inventory Smart',
    description: 'AI-powered inventory management system with demand forecasting, automated reordering, and optimization.',
    price: '$99/month',
    marketPrice: '$150-300/month',
    features: [
      'AI demand forecasting',
      'Automated reorder points',
      'Multi-location inventory',
      'Barcode scanning',
      'Supplier management',
      'Cost optimization',
      'Integration with e-commerce',
      'Mobile app access'
    ],
    icon: 'Box',
    color: 'from-green-500 to-emerald-500',
    category: 'micro-saas',
    benefits: [
      'Reduce inventory costs by 20%',
      'Eliminate stockouts',
      'Optimize cash flow',
      'Improve supplier relationships'
    ],
    useCases: [
      'E-commerce inventory',
      'Retail management',
      'Manufacturing',
      'Distribution centers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'Barcode API', 'Docker'],
    link: '/zion-inventory-smart'
  },
  {
    id: 'zion-invoice-genius',
    title: 'Zion Invoice Genius',
    description: 'Smart invoicing and payment platform with AI-powered automation, payment tracking, and financial insights.',
    price: '$69/month',
    marketPrice: '$100-200/month',
    features: [
      'AI-powered invoice generation',
      'Automated payment reminders',
      'Multi-currency support',
      'Payment gateway integration',
      'Financial reporting',
      'Client portal access',
      'Tax calculation',
      'Mobile app access'
    ],
    icon: 'DollarSign',
    color: 'from-yellow-500 to-orange-500',
    category: 'micro-saas',
    benefits: [
      'Reduce payment time by 50%',
      'Eliminate manual invoicing',
      'Improve cash flow',
      'Simplify financial management'
    ],
    useCases: [
      'Freelancer invoicing',
      'Small business billing',
      'Service-based companies',
      'Contractor payments'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PDF Generation', 'Email API'],
    link: '/zion-invoice-genius'
  },
  {
    id: 'zion-workflow-automation',
    title: 'Zion Workflow Automation',
    description: 'Visual workflow automation platform with AI-powered decision making and 100+ integrations.',
    price: '$79/month',
    marketPrice: '$120-250/month',
    features: [
      'Visual workflow builder',
      'AI decision nodes',
      '100+ app integrations',
      'Custom API connections',
      'Real-time monitoring',
      'Error handling',
      'Team collaboration',
      'Analytics & reporting'
    ],
    icon: 'Workflow',
    color: 'from-purple-500 to-indigo-500',
    category: 'micro-saas',
    benefits: [
      'Automate repetitive tasks',
      'Reduce human errors',
      'Improve efficiency',
      'Scale business processes'
    ],
    useCases: [
      'Lead processing',
      'Order fulfillment',
      'Customer onboarding',
      'Data synchronization'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Zapier API', 'Webhook', 'Docker'],
    link: '/zion-workflow-automation'
  }
];

export const emergingTechServices: Service[] = [
  {
    id: '5g-implementation-enterprise',
    title: '5G Implementation Enterprise',
    description: 'Complete 5G network implementation and optimization services for enterprise applications and IoT solutions.',
    price: 'Starting at $25,000',
    marketPrice: '$40,000-80,000',
    features: [
      '5G network planning & design',
      'Private 5G network deployment',
      'IoT device integration',
      'Edge computing implementation',
      'Network optimization',
      'Security implementation',
      'Performance monitoring',
      'Training & support'
    ],
    icon: 'Wifi',
    color: 'from-cyan-500 to-blue-500',
    category: 'emerging',
    benefits: [
      'Ultra-low latency connectivity',
      'Massive IoT device support',
      'Enhanced mobile broadband',
      'Enable new use cases'
    ],
    useCases: [
      'Smart manufacturing',
      'Autonomous vehicles',
      'AR/VR applications',
      'Smart city infrastructure'
    ],
    technologies: ['5G NR', 'Edge Computing', 'IoT', 'Kubernetes', 'Docker', 'AI/ML'],
    link: '/5g-implementation-enterprise',
    isNew: true
  },
  {
    id: 'ai-3d-generation-pro',
    title: 'AI 3D Generation Pro',
    description: 'Advanced AI-powered 3D content generation for gaming, AR/VR, and architectural visualization.',
    price: '$199/month',
    marketPrice: '$300-600/month',
    features: [
      'AI 3D model generation',
      'Texture & material creation',
      'Animation generation',
      'AR/VR optimization',
      'Real-time rendering',
      'Custom model training',
      'API integration',
      'Cloud processing'
    ],
    icon: 'Cpu',
    color: 'from-purple-500 to-pink-500',
    category: 'emerging',
    benefits: [
      'Reduce 3D creation time by 80%',
      'Lower production costs',
      'Enable rapid prototyping',
      'Scale 3D content production'
    ],
    useCases: [
      'Game development',
      'Architectural visualization',
      'E-commerce 3D models',
      'AR/VR content creation'
    ],
    technologies: ['Neural Networks', 'Blender', 'Unity', 'Unreal Engine', 'Python', 'CUDA'],
    link: '/ai-3d-generation-pro',
    isNew: true
  },
  {
    id: 'quantum-computing-solutions',
    title: 'Quantum Computing Solutions',
    description: 'Quantum computing consulting and implementation services for optimization, cryptography, and research applications.',
    price: 'Starting at $50,000',
    marketPrice: '$80,000-150,000',
    features: [
      'Quantum algorithm development',
      'Quantum cryptography implementation',
      'Optimization problem solving',
      'Quantum machine learning',
      'Research collaboration',
      'Quantum security assessment',
      'Training & education',
      'Ongoing support'
    ],
    icon: 'Cpu',
    color: 'from-indigo-500 to-purple-500',
    category: 'emerging',
    benefits: [
      'Solve complex optimization problems',
      'Enhance cryptographic security',
      'Accelerate research & development',
      'Future-proof technology adoption'
    ],
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Supply chain optimization',
      'Cryptographic security'
    ],
    technologies: ['Qiskit', 'Cirq', 'Q#', 'Python', 'Quantum Gates', 'Quantum Algorithms'],
    link: '/quantum-computing-solutions',
    isNew: true
  },
  {
    id: 'ar-vr-solutions-enterprise',
    title: 'AR/VR Solutions Enterprise',
    description: 'Immersive augmented and virtual reality solutions for training, visualization, and customer engagement.',
    price: 'Starting at $15,000',
    marketPrice: '$25,000-50,000',
    features: [
      'Custom AR/VR applications',
      '3D content creation',
      'Multi-platform deployment',
      'Hand tracking & gesture recognition',
      'Spatial audio integration',
      'Analytics & user tracking',
      'Cloud-based rendering',
      'Training & support'
    ],
    icon: 'Eye',
    color: 'from-green-500 to-cyan-500',
    category: 'emerging',
    benefits: [
      'Enhance user engagement',
      'Improve training effectiveness',
      'Enable remote collaboration',
      'Create immersive experiences'
    ],
    useCases: [
      'Employee training',
      'Product visualization',
      'Virtual showrooms',
      'Remote collaboration'
    ],
    technologies: ['Unity', 'Unreal Engine', 'WebXR', 'ARCore', 'ARKit', 'OpenVR'],
    link: '/ar-vr-solutions-enterprise'
  },
  {
    id: 'blockchain-development-enterprise',
    title: 'Blockchain Development Enterprise',
    description: 'Comprehensive blockchain solutions including smart contracts, DeFi applications, and enterprise blockchain implementation.',
    price: 'Starting at $20,000',
    marketPrice: '$35,000-70,000',
    features: [
      'Smart contract development',
      'DeFi protocol implementation',
      'NFT marketplace creation',
      'Enterprise blockchain solutions',
      'Cryptocurrency integration',
      'Security auditing',
      'Token economics design',
      'Ongoing maintenance'
    ],
    icon: 'LinkIcon',
    color: 'from-orange-500 to-yellow-500',
    category: 'emerging',
    benefits: [
      'Ensure transaction transparency',
      'Reduce intermediary costs',
      'Enable decentralized applications',
      'Enhance security & trust'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity management',
      'Decentralized finance',
      'NFT marketplaces'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Node.js', 'React'],
    link: '/blockchain-development-enterprise'
  }
];

export const allServices = [
  ...aiServices,
  ...itServices,
  ...microSaasServices,
  ...emergingTechServices
];

export const getServicesByCategory = (category: string) => {
  return allServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return allServices.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return allServices.filter(service => service.isNew);
};