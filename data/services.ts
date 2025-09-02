export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  // Micro SaaS Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'project-management-suite',
    name: 'Smart Project Manager',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization and team collaboration.',
    features: [
      'AI task prioritization',
      'Real-time collaboration',
      'Time tracking',
      'Resource allocation',
      'Progress analytics',
      'Mobile app'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      '30% faster project completion',
      'Improved team productivity',
      'Better resource utilization',
      'Real-time insights'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://ziontechgroup.com/services/project-management',
    icon: '📊'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Tracker Pro',
    category: 'micro-saas',
    description: 'Smart inventory management system with predictive analytics and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support',
      'Integration APIs'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 80%',
      'Optimize inventory levels',
      'Automated procurement',
      'Cost savings'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail stores',
      'Manufacturing',
      'Warehouse management'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'AI Support Assistant',
    category: 'micro-saas',
    description: 'Intelligent customer support platform with AI chatbots and automated ticket routing.',
    features: [
      'AI-powered chatbots',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Service businesses',
      'Educational institutions'
    ],
    technologies: ['Next.js', 'OpenAI', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/customer-support',
    icon: '🤖'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Expert',
    category: 'it-services',
    description: 'Comprehensive cloud migration services for seamless transition to AWS, Azure, or Google Cloud.',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Data migration',
      'Application modernization',
      'Security implementation',
      'Performance optimization'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 50000,
      currency: 'USD'
    },
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Disaster recovery setup',
      'Application scaling'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/cloud-migration',
    icon: '☁️'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Assessment',
    category: 'it-services',
    description: 'Comprehensive cybersecurity audit and penetration testing services to protect your business.',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance auditing',
      'Incident response planning',
      'Security training'
    ],
    pricing: {
      starter: 3000,
      professional: 8000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with regulations',
      'Protect customer data',
      'Reduce security risks'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    link: 'https://ziontechgroup.com/services/cybersecurity',
    icon: '🔒'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Suite',
    category: 'it-services',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Automated testing',
      'Deployment automation'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Better collaboration'
    ],
    useCases: [
      'Software development teams',
      'Startups scaling up',
      'Enterprise applications',
      'Microservices architecture'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Kubernetes', 'Prometheus'],
    link: 'https://ziontechgroup.com/services/devops',
    icon: '⚙️'
  },
  {
    id: 'data-backup-recovery',
    name: 'Data Backup & Recovery',
    category: 'it-services',
    description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
    features: [
      'Automated backup scheduling',
      'Incremental backups',
      'Disaster recovery planning',
      'Data encryption',
      'Backup testing',
      'Recovery time objectives'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Data protection',
      'Business continuity',
      'Compliance adherence',
      'Peace of mind'
    ],
    useCases: [
      'Database systems',
      'File servers',
      'Virtual machines',
      'Cloud applications'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS S3', 'Azure Backup'],
    link: 'https://ziontechgroup.com/services/backup-recovery',
    icon: '💾'
  },

  // AI Services
  {
    id: 'custom-ai-models',
    name: 'Custom AI Model Development',
    category: 'ai-services',
    description: 'Custom AI model development tailored to your specific business needs and data.',
    features: [
      'Custom model training',
      'Data preprocessing',
      'Model optimization',
      'API development',
      'Integration support',
      'Ongoing maintenance'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Tailored to your data',
      'Better accuracy',
      'Competitive advantage',
      'Scalable solutions'
    ],
    useCases: [
      'Predictive analytics',
      'Image recognition',
      'Natural language processing',
      'Recommendation systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker'],
    link: 'https://ziontechgroup.com/services/custom-ai-models',
    icon: '🧠'
  },
  {
    id: 'ai-process-automation',
    name: 'AI Process Automation',
    category: 'ai-services',
    description: 'Intelligent process automation using AI to streamline business operations and reduce manual work.',
    features: [
      'Process analysis',
      'RPA implementation',
      'AI decision making',
      'Workflow automation',
      'Integration with existing systems',
      'Performance monitoring'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Improve accuracy',
      'Faster processing',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Data entry automation',
      'Report generation'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR'],
    link: 'https://ziontechgroup.com/services/ai-automation',
    icon: '🤖'
  },
  {
    id: 'ai-analytics-platform',
    name: 'AI Analytics Platform',
    category: 'ai-services',
    description: 'Advanced analytics platform powered by AI for deep business insights and predictive analytics.',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Real-time dashboards',
      'Automated reporting',
      'Anomaly detection',
      'Custom alerts'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Predictive insights',
      'Real-time monitoring',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Risk assessment',
      'Performance monitoring'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-analytics',
    icon: '📈'
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    category: 'ai-services',
    description: 'Custom AI chatbot development for customer service, sales, and internal communication.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales qualification',
      'Appointment booking',
      'FAQ handling'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'React', 'Node.js', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/ai-chatbot',
    icon: '💬'
  },

  // Additional Micro SaaS Services
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Advanced social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & insights',
      'Team collaboration',
      'Content calendar'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Save 10+ hours per week',
      'Increase engagement by 40%',
      'Consistent brand presence',
      'Data-driven content strategy'
    ],
    useCases: [
      'Marketing agencies',
      'Small businesses',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'expense-tracker',
    name: 'Smart Expense Tracker',
    category: 'micro-saas',
    description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
    features: [
      'Receipt scanning with OCR',
      'Automatic categorization',
      'Multi-currency support',
      'Tax preparation',
      'Team expense management',
      'Mobile app'
    ],
    pricing: {
      starter: 12,
      professional: 35,
      enterprise: 95,
      currency: 'USD'
    },
    benefits: [
      'Reduce expense processing time by 80%',
      'Accurate tax deductions',
      'Real-time expense insights',
      'Compliance with regulations'
    ],
    useCases: [
      'Small businesses',
      'Freelancers',
      'Sales teams',
      'Remote workers'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'OCR'],
    link: 'https://ziontechgroup.com/services/expense-tracker',
    icon: '💰'
  },
  {
    id: 'lead-scoring-platform',
    name: 'AI Lead Scoring Platform',
    category: 'micro-saas',
    description: 'Intelligent lead scoring system that uses AI to identify and prioritize high-value prospects.',
    features: [
      'AI-powered lead scoring',
      'Behavioral tracking',
      'CRM integration',
      'Custom scoring models',
      'Real-time alerts',
      'Performance analytics'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Increase conversion rates by 35%',
      'Focus on high-value leads',
      'Automated lead qualification',
      'Better sales efficiency'
    ],
    useCases: [
      'Sales teams',
      'Marketing agencies',
      'B2B companies',
      'Lead generation services'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/lead-scoring',
    icon: '🎯'
  },
  {
    id: 'time-tracking-analytics',
    name: 'Time Tracking Analytics Pro',
    category: 'micro-saas',
    description: 'Advanced time tracking with productivity analytics, project insights, and team performance metrics.',
    features: [
      'Automatic time tracking',
      'Productivity analytics',
      'Project profitability analysis',
      'Team performance metrics',
      'Client billing integration',
      'Mobile time tracking'
    ],
    pricing: {
      starter: 8,
      professional: 25,
      enterprise: 65,
      currency: 'USD'
    },
    benefits: [
      'Increase billable hours by 25%',
      'Better project profitability',
      'Improved team productivity',
      'Accurate client billing'
    ],
    useCases: [
      'Consulting firms',
      'Freelancers',
      'Remote teams',
      'Project-based businesses'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Comprehensive email marketing platform with advanced automation, segmentation, and personalization.',
    features: [
      'Drag-and-drop email builder',
      'Advanced automation workflows',
      'Behavioral segmentation',
      'A/B testing',
      'Deliverability optimization',
      'Analytics & reporting'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Increase email ROI by 300%',
      'Automated customer journeys',
      'Personalized messaging',
      'Better deliverability rates'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Content creators'
    ],
    technologies: ['React', 'Node.js', 'Redis', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/email-marketing',
    icon: '📧'
  },
  {
    id: 'website-speed-optimizer',
    name: 'Website Speed Optimizer',
    category: 'micro-saas',
    description: 'AI-powered website performance optimization tool that automatically improves loading speeds and Core Web Vitals.',
    features: [
      'Automatic image optimization',
      'Code minification',
      'CDN integration',
      'Core Web Vitals monitoring',
      'Performance reports',
      'One-click optimization'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Improve page speed by 60%',
      'Better SEO rankings',
      'Reduced bounce rates',
      'Improved user experience'
    ],
    useCases: [
      'Website owners',
      'Digital agencies',
      'E-commerce sites',
      'Content websites'
    ],
    technologies: ['AI Optimization', 'CDN', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/speed-optimizer',
    icon: '⚡'
  },
  {
    id: 'api-monitoring-platform',
    name: 'API Monitoring Platform',
    category: 'micro-saas',
    description: 'Comprehensive API monitoring and testing platform with real-time alerts and performance analytics.',
    features: [
      'Real-time API monitoring',
      'Automated testing',
      'Performance analytics',
      'Uptime monitoring',
      'Error tracking',
      'SLA monitoring'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      '99.9% API uptime',
      'Faster issue resolution',
      'Better user experience',
      'Proactive monitoring'
    ],
    useCases: [
      'API developers',
      'SaaS companies',
      'Mobile app developers',
      'Enterprise applications'
    ],
    technologies: ['Node.js', 'MongoDB', 'Monitoring APIs', 'React'],
    link: 'https://ziontechgroup.com/services/api-monitoring',
    icon: '🔍'
  },
  {
    id: 'password-manager-business',
    name: 'Business Password Manager',
    category: 'micro-saas',
    description: 'Enterprise-grade password management solution with team sharing, security policies, and audit trails.',
    features: [
      'Secure password storage',
      'Team password sharing',
      'Security policies',
      'Audit trails',
      'SSO integration',
      'Mobile apps'
    ],
    pricing: {
      starter: 3,
      professional: 8,
      enterprise: 20,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Reduced password-related breaches',
      'Centralized access management',
      'Compliance with security standards'
    ],
    useCases: [
      'Small businesses',
      'Remote teams',
      'IT departments',
      'Security-conscious organizations'
    ],
    technologies: ['Encryption', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/password-manager',
    icon: '🔐'
  },
  {
    id: 'form-builder-platform',
    name: 'Advanced Form Builder',
    category: 'micro-saas',
    description: 'Powerful form builder with conditional logic, payment integration, and advanced analytics.',
    features: [
      'Drag-and-drop builder',
      'Conditional logic',
      'Payment integration',
      'Multi-step forms',
      'Analytics dashboard',
      'API access'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Increase form conversions by 40%',
      'Reduce form abandonment',
      'Streamlined data collection',
      'Better user experience'
    ],
    useCases: [
      'Lead generation',
      'Event registration',
      'Customer feedback',
      'Order processing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment APIs'],
    link: 'https://ziontechgroup.com/services/form-builder',
    icon: '📋'
  },
  {
    id: 'screenshot-api-service',
    name: 'Screenshot API Service',
    category: 'micro-saas',
    description: 'High-performance screenshot API for websites, PDFs, and web applications with advanced customization options.',
    features: [
      'High-quality screenshots',
      'PDF generation',
      'Custom dimensions',
      'Mobile device simulation',
      'Batch processing',
      'API integration'
    ],
    pricing: {
      starter: 20,
      professional: 60,
      enterprise: 160,
      currency: 'USD'
    },
    benefits: [
      'Fast screenshot generation',
      'Scalable infrastructure',
      'Multiple output formats',
      'Developer-friendly API'
    ],
    useCases: [
      'Web development',
      'Quality assurance',
      'Documentation',
      'Social media automation'
    ],
    technologies: ['Puppeteer', 'Node.js', 'AWS', 'React'],
    link: 'https://ziontechgroup.com/services/screenshot-api',
    icon: '📸'
  },

  // Additional IT Services
  {
    id: 'kubernetes-orchestration',
    name: 'Kubernetes Orchestration',
    category: 'it-services',
    description: 'Complete Kubernetes setup, management, and optimization for containerized applications.',
    features: [
      'Cluster setup & configuration',
      'Auto-scaling implementation',
      'Service mesh integration',
      'Monitoring & logging',
      'Security hardening',
      'Disaster recovery'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Improved application reliability',
      'Automatic scaling',
      'Reduced infrastructure costs',
      'Better resource utilization'
    ],
    useCases: [
      'Microservices architecture',
      'Cloud-native applications',
      'High-traffic websites',
      'Enterprise applications'
    ],
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Istio'],
    link: 'https://ziontechgroup.com/services/kubernetes',
    icon: '☸️'
  },
  {
    id: 'api-gateway-setup',
    name: 'API Gateway & Management',
    category: 'it-services',
    description: 'Enterprise API gateway setup with rate limiting, authentication, monitoring, and analytics.',
    features: [
      'API gateway configuration',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API versioning',
      'Analytics & monitoring',
      'Developer portal'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Better performance',
      'Simplified integration'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Enterprise systems'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Nginx'],
    link: 'https://ziontechgroup.com/services/api-gateway',
    icon: '🚪'
  },
  {
    id: 'database-optimization',
    name: 'Database Performance Optimization',
    category: 'it-services',
    description: 'Comprehensive database optimization including query tuning, indexing, and performance monitoring.',
    features: [
      'Query performance analysis',
      'Index optimization',
      'Database tuning',
      'Performance monitoring',
      'Backup optimization',
      'Scaling strategies'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster query execution',
      'Reduced resource usage',
      'Better scalability',
      'Improved user experience'
    ],
    useCases: [
      'High-traffic applications',
      'Data-intensive systems',
      'E-commerce platforms',
      'Analytics systems'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
  },
  {
    id: 'network-security-audit',
    name: 'Network Security Audit',
    category: 'it-services',
    description: 'Comprehensive network security assessment including penetration testing and vulnerability scanning.',
    features: [
      'Network vulnerability scanning',
      'Penetration testing',
      'Firewall configuration review',
      'Wireless security audit',
      'Compliance assessment',
      'Security recommendations'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with standards',
      'Protect against threats',
      'Improve security posture'
    ],
    useCases: [
      'Corporate networks',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Nessus', 'Metasploit', 'Wireshark', 'Burp Suite'],
    link: 'https://ziontechgroup.com/services/network-security',
    icon: '🛡️'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery Planning',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    features: [
      'Business impact analysis',
      'Recovery time objectives',
      'Backup strategy design',
      'Failover implementation',
      'Testing & validation',
      'Documentation & training'
    ],
    pricing: {
      starter: 7000,
      professional: 20000,
      enterprise: 60000,
      currency: 'USD'
    },
    benefits: [
      'Minimize downtime',
      'Protect critical data',
      'Ensure business continuity',
      'Compliance requirements'
    ],
    useCases: [
      'Enterprise systems',
      'Critical applications',
      'Data centers',
      'Cloud infrastructure'
    ],
    technologies: ['AWS', 'Azure', 'VMware', 'Veeam', 'Commvault'],
    link: 'https://ziontechgroup.com/services/disaster-recovery',
    icon: '🔄'
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices Architecture Design',
    category: 'it-services',
    description: 'Complete microservices architecture design and implementation for scalable applications.',
    features: [
      'Architecture design',
      'Service decomposition',
      'API design',
      'Container orchestration',
      'Service mesh implementation',
      'Monitoring setup'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Better maintainability',
      'Faster development',
      'Technology flexibility'
    ],
    useCases: [
      'Legacy system modernization',
      'High-scale applications',
      'Multi-team development',
      'Cloud-native applications'
    ],
    technologies: ['Docker', 'Kubernetes', 'Istio', 'gRPC', 'Redis'],
    link: 'https://ziontechgroup.com/services/microservices',
    icon: '🏗️'
  },
  {
    id: 'performance-monitoring',
    name: 'Application Performance Monitoring',
    category: 'it-services',
    description: 'Comprehensive APM solution with real-time monitoring, alerting, and performance optimization.',
    features: [
      'Real-time performance monitoring',
      'Error tracking & alerting',
      'User experience monitoring',
      'Infrastructure monitoring',
      'Custom dashboards',
      'Performance optimization'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Proactive issue detection',
      'Improved application performance',
      'Better user experience',
      'Reduced downtime'
    ],
    useCases: [
      'Web applications',
      'Mobile apps',
      'API services',
      'Enterprise systems'
    ],
    technologies: ['New Relic', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack'],
    link: 'https://ziontechgroup.com/services/apm',
    icon: '📊'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management',
    category: 'it-services',
    description: 'Enterprise IAM solution with SSO, multi-factor authentication, and role-based access control.',
    features: [
      'Single Sign-On (SSO)',
      'Multi-factor authentication',
      'Role-based access control',
      'User provisioning',
      'Audit & compliance',
      'API security'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 40000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Simplified user management',
      'Compliance adherence',
      'Reduced IT overhead'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Okta', 'Azure AD', 'Auth0', 'SAML', 'OAuth'],
    link: 'https://ziontechgroup.com/services/iam',
    icon: '👤'
  },

  // Additional AI Services
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Custom computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection',
      'Facial recognition',
      'OCR & text extraction',
      'Quality inspection',
      'Real-time processing'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Improved accuracy',
      'Cost reduction',
      '24/7 operation'
    ],
    useCases: [
      'Manufacturing quality control',
      'Retail analytics',
      'Security surveillance',
      'Medical imaging'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'YOLO', 'PyTorch', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
    features: [
      'Text classification',
      'Sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Question answering'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Improved content management',
      'Multilingual support'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Document processing',
      'Chatbot enhancement'
    ],
    technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
    link: 'https://ziontechgroup.com/services/nlp',
    icon: '📝'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    category: 'ai-services',
    description: 'Advanced predictive analytics using machine learning for forecasting and trend analysis.',
    features: [
      'Demand forecasting',
      'Risk assessment',
      'Customer behavior prediction',
      'Market trend analysis',
      'Anomaly detection',
      'Real-time predictions'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Reduced risks',
      'Improved efficiency',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Sales forecasting',
      'Maintenance scheduling'
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'Python', 'Apache Spark'],
    link: 'https://ziontechgroup.com/services/predictive-analytics',
    icon: '🔮'
  },
  {
    id: 'recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation system for personalized content, products, and services.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendations',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Better user experience',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Content platforms',
      'Social media'
    ],
    technologies: ['TensorFlow', 'Apache Spark', 'Redis', 'Python', 'MLlib'],
    link: 'https://ziontechgroup.com/services/recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-powered-search',
    name: 'AI-Powered Search Engine',
    category: 'ai-services',
    description: 'Intelligent search solution with semantic understanding, auto-complete, and personalized results.',
    features: [
      'Semantic search',
      'Auto-complete suggestions',
      'Personalized results',
      'Multi-language support',
      'Voice search',
      'Search analytics'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Better search accuracy',
      'Improved user experience',
      'Increased engagement',
      'Reduced bounce rates'
    ],
    useCases: [
      'E-commerce search',
      'Document management',
      'Knowledge bases',
      'Content platforms'
    ],
    technologies: ['Elasticsearch', 'BERT', 'Vector Search', 'Python', 'React'],
    link: 'https://ziontechgroup.com/services/ai-search',
    icon: '🔍'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    category: 'ai-services',
    description: 'Automated content moderation using AI to detect and filter inappropriate content across platforms.',
    features: [
      'Text content filtering',
      'Image content detection',
      'Video content analysis',
      'Real-time moderation',
      'Custom policy enforcement',
      'Human review integration'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 content monitoring',
      'Reduced moderation costs',
      'Consistent policy enforcement',
      'Scalable solution'
    ],
    useCases: [
      'Social media platforms',
      'User-generated content',
      'Online communities',
      'Marketplace platforms'
    ],
    technologies: ['Computer Vision', 'NLP', 'TensorFlow', 'OpenCV', 'Python'],
    link: 'https://ziontechgroup.com/services/content-moderation',
    icon: '🛡️'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection System',
    category: 'ai-services',
    description: 'Advanced fraud detection using machine learning to identify and prevent fraudulent activities.',
    features: [
      'Real-time fraud detection',
      'Transaction monitoring',
      'Behavioral analysis',
      'Risk scoring',
      'Alert system',
      'False positive reduction'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduced fraud losses',
      'Faster detection',
      'Lower false positives',
      'Compliance adherence'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies'
    ],
    technologies: ['Machine Learning', 'Anomaly Detection', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/fraud-detection',
    icon: '🚨'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant Development',
    category: 'ai-services',
    description: 'Custom voice assistant development with natural language understanding and multi-platform integration.',
    features: [
      'Voice recognition',
      'Natural language understanding',
      'Multi-platform support',
      'Custom wake words',
      'Integration APIs',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Hands-free operation',
      'Improved accessibility',
      'Enhanced user experience',
      'Multi-language support'
    ],
    useCases: [
      'Smart home automation',
      'Customer service',
      'Healthcare applications',
      'Automotive systems'
    ],
    technologies: ['Speech Recognition', 'NLP', 'WebRTC', 'Python', 'Node.js'],
    link: 'https://ziontechgroup.com/services/voice-assistant',
    icon: '🎤'
  },

  // Additional Innovative Micro SaaS Services
  {
    id: 'ai-meeting-transcriber',
    name: 'AI Meeting Transcriber Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered meeting transcription with real-time translation, action items extraction, and smart summaries.',
    features: [
      'Real-time transcription',
      'Multi-language translation',
      'Action items extraction',
      'Smart meeting summaries',
      'Speaker identification',
      'Integration with calendar apps'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours per week on note-taking',
      'Never miss important action items',
      'Multi-language meeting support',
      'Improved meeting productivity'
    ],
    useCases: [
      'Remote teams',
      'Client meetings',
      'Board meetings',
      'Training sessions'
    ],
    technologies: ['OpenAI Whisper', 'React', 'Node.js', 'WebRTC', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/meeting-transcriber',
    icon: '🎙️'
  },
  {
    id: 'smart-invoice-generator',
    name: 'Smart Invoice Generator',
    category: 'micro-saas',
    description: 'AI-powered invoice generation with automatic data extraction, payment tracking, and tax compliance.',
    features: [
      'AI data extraction from emails',
      'Automatic invoice generation',
      'Payment tracking',
      'Tax compliance automation',
      'Multi-currency support',
      'Client portal integration'
    ],
    pricing: {
      starter: 18,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Reduce invoicing time by 80%',
      'Automated payment reminders',
      'Tax compliance built-in',
      'Professional invoice templates'
    ],
    useCases: [
      'Freelancers',
      'Small businesses',
      'Consulting firms',
      'Service providers'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'Stripe', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/smart-invoice',
    icon: '🧾'
  },
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Reviewer',
    category: 'micro-saas',
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and best practices.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Best practices enforcement',
      'Team collaboration tools',
      'Integration with Git platforms'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 225,
      currency: 'USD'
    },
    benefits: [
      'Catch bugs before deployment',
      'Improve code quality',
      'Reduce security risks',
      'Faster development cycles'
    ],
    useCases: [
      'Development teams',
      'Code quality assurance',
      'Security auditing',
      'Technical debt management'
    ],
    technologies: ['AI/ML', 'GitHub API', 'React', 'Node.js', 'Docker'],
    link: 'https://ziontechgroup.com/services/ai-code-reviewer',
    icon: '🔍'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Auditor',
    category: 'micro-saas',
    description: 'AI-powered smart contract security auditing and vulnerability detection for blockchain applications.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Security best practices check',
      'Audit report generation',
      'Multi-blockchain support',
      'Integration with development tools'
    ],
    pricing: {
      starter: 150,
      professional: 400,
      enterprise: 1000,
      currency: 'USD'
    },
    benefits: [
      'Prevent costly security breaches',
      'Optimize gas usage',
      'Ensure compliance',
      'Professional audit reports'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'Blockchain startups',
      'Enterprise blockchain'
    ],
    technologies: ['Solidity', 'AI/ML', 'React', 'Node.js', 'Blockchain APIs'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔐'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    category: 'micro-saas',
    description: 'Advanced SEO optimization platform with AI-powered content analysis, keyword research, and ranking predictions.',
    features: [
      'AI content optimization',
      'Keyword research & analysis',
      'Competitor analysis',
      'Ranking predictions',
      'Technical SEO audits',
      'Content gap analysis'
    ],
    pricing: {
      starter: 45,
      professional: 115,
      enterprise: 295,
      currency: 'USD'
    },
    benefits: [
      'Increase organic traffic by 200%',
      'AI-powered content optimization',
      'Competitive advantage insights',
      'Automated SEO monitoring'
    ],
    useCases: [
      'Content creators',
      'Digital marketing agencies',
      'E-commerce businesses',
      'Blog owners'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'SEO APIs', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-seo-optimizer',
    icon: '📈'
  },
  {
    id: 'blockchain-analytics-platform',
    name: 'Blockchain Analytics Platform',
    category: 'micro-saas',
    description: 'Comprehensive blockchain analytics platform for tracking transactions, wallet analysis, and market insights.',
    features: [
      'Transaction tracking',
      'Wallet analysis',
      'Market insights',
      'DeFi protocol monitoring',
      'Risk assessment',
      'Custom alerts'
    ],
    pricing: {
      starter: 75,
      professional: 195,
      enterprise: 495,
      currency: 'USD'
    },
    benefits: [
      'Real-time blockchain insights',
      'Risk assessment tools',
      'Market intelligence',
      'Compliance monitoring'
    ],
    useCases: [
      'Crypto traders',
      'DeFi protocols',
      'Compliance teams',
      'Investment firms'
    ],
    technologies: ['Blockchain APIs', 'React', 'Node.js', 'GraphQL', 'Redis'],
    link: 'https://ziontechgroup.com/services/blockchain-analytics',
    icon: '⛓️'
  },
  {
    id: 'ai-video-editor',
    name: 'AI Video Editor Pro',
    category: 'micro-saas',
    description: 'Intelligent video editing platform with AI-powered auto-editing, scene detection, and content optimization.',
    features: [
      'AI auto-editing',
      'Scene detection',
      'Auto-subtitle generation',
      'Background removal',
      'Video enhancement',
      'Multi-format export'
    ],
    pricing: {
      starter: 30,
      professional: 75,
      enterprise: 195,
      currency: 'USD'
    },
    benefits: [
      'Reduce editing time by 70%',
      'Professional-quality results',
      'Automated subtitles',
      'One-click enhancements'
    ],
    useCases: [
      'Content creators',
      'Marketing teams',
      'Educational institutions',
      'Social media managers'
    ],
    technologies: ['AI/ML', 'FFmpeg', 'React', 'Node.js', 'AWS'],
    link: 'https://ziontechgroup.com/services/ai-video-editor',
    icon: '🎬'
  },
  {
    id: 'smart-document-processor',
    name: 'Smart Document Processor',
    category: 'micro-saas',
    description: 'AI-powered document processing with OCR, data extraction, and intelligent classification for business documents.',
    features: [
      'Advanced OCR technology',
      'Data extraction & validation',
      'Document classification',
      'Workflow automation',
      'Integration APIs',
      'Compliance tracking'
    ],
    pricing: {
      starter: 40,
      professional: 100,
      enterprise: 260,
      currency: 'USD'
    },
    benefits: [
      'Process documents 10x faster',
      'Reduce manual data entry',
      'Improve accuracy',
      'Automated compliance'
    ],
    useCases: [
      'Insurance companies',
      'Legal firms',
      'Healthcare organizations',
      'Financial institutions'
    ],
    technologies: ['OCR', 'AI/ML', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/document-processor',
    icon: '📄'
  },
  {
    id: 'ai-customer-insights',
    name: 'AI Customer Insights Platform',
    category: 'micro-saas',
    description: 'Advanced customer analytics platform with AI-powered insights, sentiment analysis, and predictive behavior modeling.',
    features: [
      'Customer behavior analysis',
      'Sentiment analysis',
      'Predictive modeling',
      'Churn prediction',
      'Personalization insights',
      'Real-time dashboards'
    ],
    pricing: {
      starter: 55,
      professional: 140,
      enterprise: 360,
      currency: 'USD'
    },
    benefits: [
      'Increase customer retention by 40%',
      'Predict customer behavior',
      'Personalized experiences',
      'Data-driven decisions'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Retail businesses',
      'Subscription services'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'Analytics APIs', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/customer-insights',
    icon: '👥'
  },
  {
    id: 'smart-workflow-automator',
    name: 'Smart Workflow Automator',
    category: 'micro-saas',
    description: 'Intelligent workflow automation platform that learns from your processes and suggests optimizations.',
    features: [
      'Visual workflow builder',
      'AI process optimization',
      'Integration with 500+ apps',
      'Conditional logic',
      'Performance analytics',
      'Team collaboration'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 145,
      currency: 'USD'
    },
    benefits: [
      'Automate repetitive tasks',
      'Reduce errors by 90%',
      'Improve efficiency',
      'Scale operations'
    ],
    useCases: [
      'Business process automation',
      'Customer onboarding',
      'Data processing',
      'Approval workflows'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'Workflow Engine', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/workflow-automator',
    icon: '⚡'
  },
  {
    id: 'ai-market-research',
    name: 'AI Market Research Platform',
    category: 'micro-saas',
    description: 'Intelligent market research platform with AI-powered data collection, analysis, and competitive intelligence.',
    features: [
      'Automated data collection',
      'AI-powered analysis',
      'Competitive intelligence',
      'Trend identification',
      'Custom reports',
      'Real-time monitoring'
    ],
    pricing: {
      starter: 65,
      professional: 165,
      enterprise: 425,
      currency: 'USD'
    },
    benefits: [
      'Faster market insights',
      'Competitive advantage',
      'Data-driven strategies',
      'Automated reporting'
    ],
    useCases: [
      'Market research firms',
      'Product managers',
      'Business analysts',
      'Investment firms'
    ],
    technologies: ['AI/ML', 'Web Scraping', 'React', 'Node.js', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/ai-market-research',
    icon: '📊'
  },
  {
    id: 'smart-contract-deployer',
    name: 'Smart Contract Deployer',
    category: 'micro-saas',
    description: 'Automated smart contract deployment platform with testing, verification, and monitoring capabilities.',
    features: [
      'Automated deployment',
      'Contract testing',
      'Verification services',
      'Gas optimization',
      'Multi-network support',
      'Monitoring & alerts'
    ],
    pricing: {
      starter: 50,
      professional: 125,
      enterprise: 325,
      currency: 'USD'
    },
    benefits: [
      'Reduce deployment errors',
      'Automated testing',
      'Gas optimization',
      'Multi-chain support'
    ],
    useCases: [
      'Blockchain developers',
      'DeFi protocols',
      'NFT projects',
      'Enterprise blockchain'
    ],
    technologies: ['Solidity', 'Hardhat', 'React', 'Node.js', 'Blockchain APIs'],
    link: 'https://ziontechgroup.com/services/smart-contract-deployer',
    icon: '🚀'
  },
  {
    id: 'ai-content-moderator',
    name: 'AI Content Moderator',
    category: 'micro-saas',
    description: 'Advanced content moderation platform with AI-powered detection of inappropriate content across text, images, and videos.',
    features: [
      'Multi-modal content analysis',
      'Real-time moderation',
      'Custom policy enforcement',
      'Human review integration',
      'Analytics dashboard',
      'API integration'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 225,
      currency: 'USD'
    },
    benefits: [
      '24/7 content monitoring',
      'Reduce moderation costs',
      'Consistent enforcement',
      'Scalable solution'
    ],
    useCases: [
      'Social media platforms',
      'User-generated content',
      'Online communities',
      'Marketplace platforms'
    ],
    technologies: ['AI/ML', 'Computer Vision', 'NLP', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-content-moderator',
    icon: '🛡️'
  },
  {
    id: 'smart-inventory-predictor',
    name: 'Smart Inventory Predictor',
    category: 'micro-saas',
    description: 'AI-powered inventory prediction platform that forecasts demand, optimizes stock levels, and prevents stockouts.',
    features: [
      'Demand forecasting',
      'Stock optimization',
      'Seasonal trend analysis',
      'Supplier integration',
      'Automated reordering',
      'Cost optimization'
    ],
    pricing: {
      starter: 45,
      professional: 115,
      enterprise: 295,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 85%',
      'Optimize inventory costs',
      'Improve cash flow',
      'Automated procurement'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail chains',
      'Manufacturing',
      'Wholesale distributors'
    ],
    technologies: ['AI/ML', 'Time Series', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/inventory-predictor',
    icon: '📦'
  },
  {
    id: 'ai-price-optimizer',
    name: 'AI Price Optimizer',
    category: 'micro-saas',
    description: 'Intelligent pricing optimization platform that uses AI to maximize revenue and profit margins.',
    features: [
      'Dynamic pricing algorithms',
      'Competitor price monitoring',
      'Demand elasticity analysis',
      'A/B testing framework',
      'Revenue optimization',
      'Real-time adjustments'
    ],
    pricing: {
      starter: 60,
      professional: 150,
      enterprise: 390,
      currency: 'USD'
    },
    benefits: [
      'Increase revenue by 15-25%',
      'Optimize profit margins',
      'Competitive pricing',
      'Automated adjustments'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Hotel booking',
      'Airlines & travel'
    ],
    technologies: ['AI/ML', 'Optimization', 'React', 'Node.js', 'Redis'],
    link: 'https://ziontechgroup.com/services/ai-price-optimizer',
    icon: '💰'
  },

  // Additional Innovative IT Services
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Implementation',
    category: 'it-services',
    description: 'Complete zero trust security architecture implementation with identity verification, network segmentation, and continuous monitoring.',
    features: [
      'Identity and access management',
      'Network micro-segmentation',
      'Continuous verification',
      'Device compliance monitoring',
      'Data encryption at rest and in transit',
      'Security analytics and monitoring'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance with regulations',
      'Improved visibility and control'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare systems',
      'Financial institutions'
    ],
    technologies: ['Okta', 'Cisco', 'Palo Alto', 'Microsoft', 'AWS'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔐'
  },
  {
    id: 'edge-computing-setup',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Edge computing infrastructure setup for low-latency applications, IoT devices, and distributed processing.',
    features: [
      'Edge server deployment',
      'IoT device integration',
      'Low-latency networking',
      'Distributed data processing',
      'Edge AI/ML deployment',
      'Monitoring and management'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Reduced latency',
      'Improved performance',
      'Bandwidth optimization',
      'Enhanced reliability'
    ],
    useCases: [
      'IoT applications',
      'Real-time analytics',
      'Autonomous vehicles',
      'Smart cities'
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS Wavelength', 'Azure Edge', '5G'],
    link: 'https://ziontechgroup.com/services/edge-computing',
    icon: '🌐'
  },
  {
    id: 'quantum-ready-security',
    name: 'Quantum-Ready Security',
    category: 'it-services',
    description: 'Future-proof security implementation preparing for quantum computing threats with post-quantum cryptography.',
    features: [
      'Post-quantum cryptography implementation',
      'Quantum key distribution',
      'Hybrid encryption systems',
      'Security assessment',
      'Migration planning',
      'Compliance framework'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof security',
      'Quantum threat protection',
      'Regulatory compliance',
      'Competitive advantage'
    ],
    useCases: [
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations',
      'Critical infrastructure'
    ],
    technologies: ['Post-Quantum Crypto', 'QKD', 'Hybrid Systems', 'NIST Standards'],
    link: 'https://ziontechgroup.com/services/quantum-security',
    icon: '🔮'
  },
  {
    id: '5g-network-optimization',
    name: '5G Network Optimization',
    category: 'it-services',
    description: '5G network infrastructure optimization for enhanced performance, coverage, and capacity management.',
    features: [
      'Network performance analysis',
      'Coverage optimization',
      'Capacity planning',
      'Interference management',
      'Quality of service optimization',
      'Network slicing implementation'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Improved network performance',
      'Better user experience',
      'Cost optimization',
      'Future-ready infrastructure'
    ],
    useCases: [
      'Telecommunications providers',
      'Smart city implementations',
      'Industrial IoT',
      'Mobile operators'
    ],
    technologies: ['5G NR', 'Network Slicing', 'MIMO', 'Beamforming', 'SDN'],
    link: 'https://ziontechgroup.com/services/5g-optimization',
    icon: '📶'
  },
  {
    id: 'ai-infrastructure-setup',
    name: 'AI Infrastructure Setup',
    category: 'it-services',
    description: 'Complete AI infrastructure setup including GPU clusters, ML pipelines, and model deployment platforms.',
    features: [
      'GPU cluster configuration',
      'ML pipeline setup',
      'Model deployment platform',
      'Data preprocessing infrastructure',
      'Monitoring and logging',
      'Auto-scaling configuration'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 140000,
      currency: 'USD'
    },
    benefits: [
      'Scalable AI infrastructure',
      'Faster model training',
      'Efficient resource utilization',
      'Production-ready deployment'
    ],
    useCases: [
      'AI research organizations',
      'Machine learning teams',
      'Data science departments',
      'AI startups'
    ],
    technologies: ['NVIDIA GPUs', 'Kubernetes', 'TensorFlow', 'PyTorch', 'MLflow'],
    link: 'https://ziontechgroup.com/services/ai-infrastructure',
    icon: '🤖'
  },
  {
    id: 'blockchain-infrastructure',
    name: 'Blockchain Infrastructure',
    category: 'it-services',
    description: 'Enterprise blockchain infrastructure setup with private networks, smart contract deployment, and integration services.',
    features: [
      'Private blockchain networks',
      'Smart contract deployment',
      'Node management',
      'Consensus mechanism setup',
      'Integration with existing systems',
      'Monitoring and maintenance'
    ],
    pricing: {
      starter: 22000,
      professional: 65000,
      enterprise: 160000,
      currency: 'USD'
    },
    benefits: [
      'Secure blockchain infrastructure',
      'Scalable network architecture',
      'Integration capabilities',
      'Enterprise-grade security'
    ],
    useCases: [
      'Supply chain management',
      'Financial services',
      'Healthcare data sharing',
      'Identity management'
    ],
    technologies: ['Hyperledger', 'Ethereum', 'Quorum', 'Corda', 'Docker'],
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    icon: '⛓️'
  },
  {
    id: 'multi-cloud-orchestration',
    name: 'Multi-Cloud Orchestration',
    category: 'it-services',
    description: 'Multi-cloud orchestration platform for managing workloads across AWS, Azure, Google Cloud, and private clouds.',
    features: [
      'Multi-cloud workload management',
      'Cost optimization',
      'Disaster recovery',
      'Compliance management',
      'Performance monitoring',
      'Automated scaling'
    ],
    pricing: {
      starter: 16000,
      professional: 48000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Vendor lock-in avoidance',
      'Cost optimization',
      'Improved reliability',
      'Flexible deployment options'
    ],
    useCases: [
      'Enterprise organizations',
      'Global businesses',
      'Compliance-heavy industries',
      'High-availability applications'
    ],
    technologies: ['Terraform', 'Kubernetes', 'Ansible', 'Cloud APIs', 'Monitoring'],
    link: 'https://ziontechgroup.com/services/multi-cloud',
    icon: '☁️'
  },
  {
    id: 'iot-security-audit',
    name: 'IoT Security Audit',
    category: 'it-services',
    description: 'Comprehensive IoT security assessment including device vulnerability testing, network security, and data protection.',
    features: [
      'IoT device vulnerability assessment',
      'Network security analysis',
      'Data encryption review',
      'Access control evaluation',
      'Compliance assessment',
      'Security recommendations'
    ],
    pricing: {
      starter: 8000,
      professional: 24000,
      enterprise: 60000,
      currency: 'USD'
    },
    benefits: [
      'Identify IoT vulnerabilities',
      'Protect connected devices',
      'Ensure data privacy',
      'Compliance adherence'
    ],
    useCases: [
      'Smart home systems',
      'Industrial IoT',
      'Healthcare devices',
      'Automotive systems'
    ],
    technologies: ['IoT Security Tools', 'Penetration Testing', 'Network Analysis', 'Compliance Frameworks'],
    link: 'https://ziontechgroup.com/services/iot-security',
    icon: '🔒'
  },
  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture Design',
    category: 'it-services',
    description: 'Complete serverless architecture implementation with auto-scaling, event-driven processing, and cost optimization.',
    features: [
      'Serverless function design',
      'Event-driven architecture',
      'Auto-scaling configuration',
      'Cost optimization',
      'Monitoring and logging',
      'Integration services'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduced operational overhead',
      'Automatic scaling',
      'Cost efficiency',
      'Faster development cycles'
    ],
    useCases: [
      'Web applications',
      'API services',
      'Data processing',
      'Event-driven systems'
    ],
    technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework'],
    link: 'https://ziontechgroup.com/services/serverless',
    icon: '⚡'
  },
  {
    id: 'data-governance-framework',
    name: 'Data Governance Framework',
    category: 'it-services',
    description: 'Comprehensive data governance framework implementation with policies, procedures, and compliance monitoring.',
    features: [
      'Data governance policies',
      'Data quality management',
      'Privacy compliance',
      'Data lineage tracking',
      'Access control implementation',
      'Audit and monitoring'
    ],
    pricing: {
      starter: 12000,
      professional: 36000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Improved data quality',
      'Regulatory compliance',
      'Better decision making',
      'Risk mitigation'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Large enterprises'
    ],
    technologies: ['Data Governance Tools', 'Compliance Frameworks', 'Data Catalogs', 'Privacy Tools'],
    link: 'https://ziontechgroup.com/services/data-governance',
    icon: '📊'
  },

  // Additional Cutting-Edge AI Services
  {
    id: 'generative-ai-platform',
    name: 'Generative AI Platform',
    category: 'ai-services',
    description: 'Custom generative AI platform for content creation, image generation, and creative applications using advanced language models.',
    features: [
      'Custom language model training',
      'Image and video generation',
      'Creative content automation',
      'Multi-modal AI capabilities',
      'API integration',
      'Content customization'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Automated content creation',
      'Creative workflow optimization',
      'Scalable AI solutions',
      'Competitive advantage'
    ],
    useCases: [
      'Marketing agencies',
      'Content creators',
      'E-commerce platforms',
      'Creative industries'
    ],
    technologies: ['GPT-4', 'DALL-E', 'Stable Diffusion', 'Transformers', 'Python'],
    link: 'https://ziontechgroup.com/services/generative-ai',
    icon: '🎨'
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Adverse effect prediction',
      'Drug repurposing analysis',
      'Regulatory compliance support'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Faster drug development',
      'Reduced R&D costs',
      'Improved success rates',
      'Accelerated time to market'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical research organizations'
    ],
    technologies: ['Deep Learning', 'Molecular AI', 'Bioinformatics', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems',
    category: 'ai-services',
    description: 'Development of autonomous AI systems for robotics, autonomous vehicles, and intelligent automation.',
    features: [
      'Autonomous decision making',
      'Real-time environment perception',
      'Path planning and navigation',
      'Obstacle avoidance',
      'Learning and adaptation',
      'Safety and compliance'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Increased automation',
      'Improved safety',
      'Reduced operational costs',
      'Enhanced efficiency'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial robotics',
      'Smart manufacturing',
      'Service robots'
    ],
    technologies: ['Reinforcement Learning', 'Computer Vision', 'ROS', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems',
    icon: '🤖'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for climate modeling, environmental monitoring, and sustainability analytics.',
    features: [
      'Climate pattern prediction',
      'Environmental impact assessment',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Disaster risk modeling',
      'Sustainability reporting'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Accurate climate predictions',
      'Environmental risk mitigation',
      'Sustainability optimization',
      'Regulatory compliance'
    ],
    useCases: [
      'Environmental agencies',
      'Energy companies',
      'Government organizations',
      'Sustainability consultants'
    ],
    technologies: ['Climate AI', 'Satellite Data', 'Python', 'TensorFlow', 'Geospatial Analysis'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-financial-modeling',
    name: 'AI Financial Modeling Platform',
    category: 'ai-services',
    description: 'Sophisticated AI platform for financial modeling, risk assessment, and algorithmic trading strategies.',
    features: [
      'Portfolio optimization',
      'Risk assessment and modeling',
      'Algorithmic trading strategies',
      'Market prediction models',
      'Credit risk analysis',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 160000,
      currency: 'USD'
    },
    benefits: [
      'Improved investment returns',
      'Risk reduction',
      'Automated trading',
      'Better decision making'
    ],
    useCases: [
      'Investment banks',
      'Hedge funds',
      'Asset management firms',
      'Financial advisors'
    ],
    technologies: ['Quantitative Finance', 'Machine Learning', 'Python', 'TensorFlow', 'Financial APIs'],
    link: 'https://ziontechgroup.com/services/ai-financial-modeling',
    icon: '📈'
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    category: 'ai-services',
    description: 'Intelligent supply chain optimization platform with demand forecasting, logistics optimization, and risk management.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Supply chain visibility',
      'Cost optimization'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 140000,
      currency: 'USD'
    },
    benefits: [
      'Reduced supply chain costs',
      'Improved efficiency',
      'Risk mitigation',
      'Better customer service'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'E-commerce platforms'
    ],
    technologies: ['Supply Chain AI', 'Optimization', 'Python', 'TensorFlow', 'IoT Integration'],
    link: 'https://ziontechgroup.com/services/ai-supply-chain',
    icon: '🚚'
  },
  {
    id: 'ai-cybersecurity-threat-detection',
    name: 'AI Cybersecurity Threat Detection',
    category: 'ai-services',
    description: 'Advanced AI-powered cybersecurity platform for threat detection, incident response, and security automation.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence',
      'Security orchestration',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 22000,
      professional: 65000,
      enterprise: 170000,
      currency: 'USD'
    },
    benefits: [
      'Faster threat detection',
      'Reduced false positives',
      'Automated response',
      'Enhanced security posture'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Financial institutions',
      'Healthcare systems'
    ],
    technologies: ['Cybersecurity AI', 'Machine Learning', 'Python', 'TensorFlow', 'SIEM Integration'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity',
    icon: '🛡️'
  },
  {
    id: 'ai-personalization-engine',
    name: 'AI Personalization Engine',
    category: 'ai-services',
    description: 'Advanced personalization platform that creates unique user experiences through AI-driven content and product recommendations.',
    features: [
      'Real-time personalization',
      'Multi-channel optimization',
      'Behavioral analysis',
      'A/B testing automation',
      'Content optimization',
      'Performance analytics'
    ],
    pricing: {
      starter: 12000,
      professional: 36000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Improved user experience',
      'Revenue optimization'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'News websites',
      'Mobile applications'
    ],
    technologies: ['Personalization AI', 'Machine Learning', 'Python', 'TensorFlow', 'Real-time Processing'],
    link: 'https://ziontechgroup.com/services/ai-personalization',
    icon: '🎯'
  },
  {
    id: 'ai-quality-assurance',
    name: 'AI Quality Assurance Platform',
    category: 'ai-services',
    description: 'Intelligent quality assurance platform that automates testing, defect detection, and quality monitoring across software and manufacturing.',
    features: [
      'Automated test generation',
      'Defect prediction',
      'Quality metrics analysis',
      'Continuous monitoring',
      'Root cause analysis',
      'Quality reporting'
    ],
    pricing: {
      starter: 16000,
      professional: 48000,
      enterprise: 125000,
      currency: 'USD'
    },
    benefits: [
      'Reduced testing time',
      'Improved quality',
      'Early defect detection',
      'Cost savings'
    ],
    useCases: [
      'Software development',
      'Manufacturing quality control',
      'Product testing',
      'Service quality monitoring'
    ],
    technologies: ['Quality AI', 'Computer Vision', 'Python', 'TensorFlow', 'Testing Frameworks'],
    link: 'https://ziontechgroup.com/services/ai-quality-assurance',
    icon: '✅'
  },
  {
    id: 'ai-energy-optimization',
    name: 'AI Energy Optimization Platform',
    category: 'ai-services',
    description: 'Smart energy optimization platform that uses AI to optimize energy consumption, reduce costs, and improve sustainability.',
    features: [
      'Energy consumption optimization',
      'Renewable energy integration',
      'Demand response management',
      'Energy storage optimization',
      'Carbon footprint reduction',
      'Cost optimization'
    ],
    pricing: {
      starter: 14000,
      professional: 42000,
      enterprise: 110000,
      currency: 'USD'
    },
    benefits: [
      'Reduced energy costs',
      'Improved sustainability',
      'Optimized energy usage',
      'Environmental compliance'
    ],
    useCases: [
      'Commercial buildings',
      'Industrial facilities',
      'Smart cities',
      'Energy utilities'
    ],
    technologies: ['Energy AI', 'IoT Sensors', 'Python', 'TensorFlow', 'Energy Management Systems'],
    link: 'https://ziontechgroup.com/services/ai-energy-optimization',
    icon: '⚡'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};