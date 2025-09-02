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
    description: 'Advanced AI-powered meeting transcription with real-time notes, action items, and intelligent summaries.',
    features: [
      'Real-time transcription',
      'Speaker identification',
      'Action item extraction',
      'Meeting summaries',
      'Multi-language support',
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
      'Improved meeting productivity',
      'Searchable meeting history'
    ],
    useCases: [
      'Remote teams',
      'Consulting firms',
      'Legal practices',
      'Healthcare providers'
    ],
    technologies: ['OpenAI Whisper', 'React', 'Node.js', 'WebRTC'],
    link: 'https://ziontechgroup.com/services/meeting-transcriber',
    icon: '🎙️'
  },
  {
    id: 'smart-invoice-processor',
    name: 'Smart Invoice Processor',
    category: 'micro-saas',
    description: 'AI-powered invoice processing with automatic data extraction, approval workflows, and payment integration.',
    features: [
      'OCR invoice scanning',
      'Automatic data extraction',
      'Approval workflows',
      'Payment integration',
      'Expense categorization',
      'Compliance checking'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 225,
      currency: 'USD'
    },
    benefits: [
      'Reduce invoice processing time by 90%',
      'Eliminate manual data entry',
      'Faster payment cycles',
      'Better cash flow management'
    ],
    useCases: [
      'Accounting firms',
      'Small businesses',
      'Construction companies',
      'Healthcare practices'
    ],
    technologies: ['OCR', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/invoice-processor',
    icon: '🧾'
  },
  {
    id: 'ai-customer-insights',
    name: 'AI Customer Insights Platform',
    category: 'micro-saas',
    description: 'Intelligent customer analytics platform that analyzes behavior patterns and predicts customer lifetime value.',
    features: [
      'Customer behavior analysis',
      'Lifetime value prediction',
      'Churn risk assessment',
      'Personalization recommendations',
      'Real-time dashboards',
      'CRM integration'
    ],
    pricing: {
      starter: 45,
      professional: 115,
      enterprise: 295,
      currency: 'USD'
    },
    benefits: [
      'Increase customer retention by 30%',
      'Identify high-value customers',
      'Predict churn before it happens',
      'Optimize marketing spend'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Subscription services',
      'Retail chains'
    ],
    technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/customer-insights',
    icon: '👥'
  },
  {
    id: 'smart-contract-generator',
    name: 'Smart Contract Generator',
    category: 'micro-saas',
    description: 'AI-powered legal document generator for contracts, agreements, and legal templates with customization.',
    features: [
      'AI contract generation',
      'Legal template library',
      'Custom clause creation',
      'Electronic signatures',
      'Version control',
      'Compliance checking'
    ],
    pricing: {
      starter: 55,
      professional: 145,
      enterprise: 385,
      currency: 'USD'
    },
    benefits: [
      'Reduce legal costs by 60%',
      'Faster contract creation',
      'Standardized templates',
      'Reduced legal risks'
    ],
    useCases: [
      'Law firms',
      'Real estate agencies',
      'Freelancers',
      'Small businesses'
    ],
    technologies: ['AI Legal Tech', 'React', 'Node.js', 'Blockchain', 'PDF Generation'],
    link: 'https://ziontechgroup.com/services/contract-generator',
    icon: '📄'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    category: 'micro-saas',
    description: 'Advanced SEO optimization tool with AI-powered content analysis, keyword research, and ranking predictions.',
    features: [
      'AI content optimization',
      'Keyword research & analysis',
      'Competitor tracking',
      'Ranking predictions',
      'Technical SEO audits',
      'Content gap analysis'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 259,
      currency: 'USD'
    },
    benefits: [
      'Increase organic traffic by 150%',
      'Higher search rankings',
      'Better content performance',
      'Competitive advantage'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce stores',
      'Content creators',
      'SaaS companies'
    ],
    technologies: ['AI SEO', 'React', 'Node.js', 'Python', 'SEO APIs'],
    link: 'https://ziontechgroup.com/services/seo-optimizer',
    icon: '🔍'
  },
  {
    id: 'smart-inventory-forecaster',
    name: 'Smart Inventory Forecaster',
    category: 'micro-saas',
    description: 'AI-powered inventory forecasting with demand prediction, seasonal analysis, and automated reorder points.',
    features: [
      'Demand forecasting',
      'Seasonal trend analysis',
      'Automated reorder points',
      'Supplier performance tracking',
      'Cost optimization',
      'Multi-location support'
    ],
    pricing: {
      starter: 49,
      professional: 125,
      enterprise: 325,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 85%',
      'Optimize inventory investment',
      'Improve cash flow',
      'Better supplier relationships'
    ],
    useCases: [
      'Retail chains',
      'Manufacturing',
      'E-commerce',
      'Distribution centers'
    ],
    technologies: ['Machine Learning', 'Time Series Analysis', 'React', 'Python', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/inventory-forecaster',
    icon: '📊'
  },
  {
    id: 'ai-social-listener',
    name: 'AI Social Media Listener',
    category: 'micro-saas',
    description: 'Intelligent social media monitoring with sentiment analysis, brand mention tracking, and crisis detection.',
    features: [
      'Real-time social monitoring',
      'Sentiment analysis',
      'Brand mention tracking',
      'Crisis detection alerts',
      'Competitor analysis',
      'Influencer identification'
    ],
    pricing: {
      starter: 29,
      professional: 75,
      enterprise: 195,
      currency: 'USD'
    },
    benefits: [
      'Protect brand reputation',
      'Identify growth opportunities',
      'Monitor competitor activity',
      'Crisis prevention'
    ],
    useCases: [
      'Brand management',
      'Marketing agencies',
      'PR firms',
      'E-commerce brands'
    ],
    technologies: ['NLP', 'Social APIs', 'React', 'Node.js', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/social-listener',
    icon: '👂'
  },
  {
    id: 'smart-appointment-scheduler',
    name: 'Smart Appointment Scheduler',
    category: 'micro-saas',
    description: 'AI-powered appointment scheduling with intelligent time optimization, conflict resolution, and customer preferences.',
    features: [
      'AI time optimization',
      'Conflict resolution',
      'Customer preference learning',
      'Multi-timezone support',
      'Payment integration',
      'Calendar synchronization'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Reduce no-shows by 40%',
      'Optimize schedule efficiency',
      'Improve customer satisfaction',
      'Automated reminders'
    ],
    useCases: [
      'Healthcare practices',
      'Beauty salons',
      'Consulting services',
      'Fitness trainers'
    ],
    technologies: ['AI Scheduling', 'React', 'Node.js', 'Calendar APIs', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/appointment-scheduler',
    icon: '📅'
  },
  {
    id: 'ai-content-planner',
    name: 'AI Content Planning Suite',
    category: 'micro-saas',
    description: 'Intelligent content planning platform with trend analysis, audience insights, and automated content calendars.',
    features: [
      'Trend analysis & prediction',
      'Audience behavior insights',
      'Content calendar automation',
      'Performance prediction',
      'Cross-platform optimization',
      'Team collaboration tools'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 235,
      currency: 'USD'
    },
    benefits: [
      'Increase content engagement by 200%',
      'Data-driven content strategy',
      'Optimize publishing times',
      'Better audience targeting'
    ],
    useCases: [
      'Content marketing teams',
      'Social media managers',
      'Bloggers',
      'Digital agencies'
    ],
    technologies: ['AI Analytics', 'React', 'Node.js', 'Social APIs', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/content-planner',
    icon: '📝'
  },
  {
    id: 'smart-pricing-optimizer',
    name: 'Smart Pricing Optimizer',
    category: 'micro-saas',
    description: 'AI-powered dynamic pricing optimization with competitor analysis, demand forecasting, and revenue maximization.',
    features: [
      'Dynamic pricing algorithms',
      'Competitor price monitoring',
      'Demand forecasting',
      'Revenue optimization',
      'A/B testing framework',
      'Real-time adjustments'
    ],
    pricing: {
      starter: 65,
      professional: 165,
      enterprise: 425,
      currency: 'USD'
    },
    benefits: [
      'Increase revenue by 15-25%',
      'Optimize profit margins',
      'Stay competitive',
      'Automated pricing decisions'
    ],
    useCases: [
      'E-commerce platforms',
      'Hotel booking sites',
      'Airlines',
      'Ride-sharing services'
    ],
    technologies: ['Machine Learning', 'Price Optimization', 'React', 'Python', 'Real-time Analytics'],
    link: 'https://ziontechgroup.com/services/pricing-optimizer',
    icon: '💰'
  },
  {
    id: 'ai-customer-support-analytics',
    name: 'AI Customer Support Analytics',
    category: 'micro-saas',
    description: 'Advanced customer support analytics with sentiment analysis, response time optimization, and agent performance insights.',
    features: [
      'Sentiment analysis',
      'Response time optimization',
      'Agent performance metrics',
      'Customer satisfaction prediction',
      'Ticket categorization',
      'Knowledge base optimization'
    ],
    pricing: {
      starter: 42,
      professional: 108,
      enterprise: 285,
      currency: 'USD'
    },
    benefits: [
      'Improve customer satisfaction by 35%',
      'Optimize support team performance',
      'Reduce response times',
      'Identify training needs'
    ],
    useCases: [
      'Customer support teams',
      'Help desk services',
      'SaaS companies',
      'E-commerce platforms'
    ],
    technologies: ['NLP', 'Sentiment Analysis', 'React', 'Node.js', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/support-analytics',
    icon: '📞'
  },
  {
    id: 'smart-workflow-automator',
    name: 'Smart Workflow Automator',
    category: 'micro-saas',
    description: 'Intelligent workflow automation with AI decision-making, conditional logic, and integration with 500+ apps.',
    features: [
      'AI-powered automation',
      'Conditional logic builder',
      '500+ app integrations',
      'Custom triggers & actions',
      'Workflow templates',
      'Performance analytics'
    ],
    pricing: {
      starter: 38,
      professional: 95,
      enterprise: 245,
      currency: 'USD'
    },
    benefits: [
      'Save 20+ hours per week',
      'Reduce human errors',
      'Improve process efficiency',
      'Scalable automation'
    ],
    useCases: [
      'Business process automation',
      'Marketing automation',
      'Sales workflows',
      'HR processes'
    ],
    technologies: ['Workflow Engine', 'AI Decision Making', 'React', 'Node.js', 'Integration APIs'],
    link: 'https://ziontechgroup.com/services/workflow-automator',
    icon: '⚡'
  },
  {
    id: 'ai-brand-monitor',
    name: 'AI Brand Monitoring Suite',
    category: 'micro-saas',
    description: 'Comprehensive brand monitoring with trademark protection, domain monitoring, and reputation management.',
    features: [
      'Trademark monitoring',
      'Domain name tracking',
      'Brand reputation analysis',
      'Competitor brand tracking',
      'Legal threat detection',
      'Brand compliance monitoring'
    ],
    pricing: {
      starter: 58,
      professional: 148,
      enterprise: 385,
      currency: 'USD'
    },
    benefits: [
      'Protect brand assets',
      'Early threat detection',
      'Maintain brand integrity',
      'Legal compliance'
    ],
    useCases: [
      'Brand management',
      'Legal departments',
      'Marketing agencies',
      'Enterprise companies'
    ],
    technologies: ['Brand Intelligence', 'React', 'Node.js', 'Legal APIs', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/brand-monitor',
    icon: '🛡️'
  },
  {
    id: 'smart-recruitment-ai',
    name: 'Smart Recruitment AI',
    category: 'micro-saas',
    description: 'AI-powered recruitment platform with resume screening, candidate matching, and interview scheduling automation.',
    features: [
      'AI resume screening',
      'Candidate-job matching',
      'Interview scheduling',
      'Skills assessment',
      'Bias detection',
      'Recruitment analytics'
    ],
    pricing: {
      starter: 48,
      professional: 125,
      enterprise: 325,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 50%',
      'Improve candidate quality',
      'Eliminate hiring bias',
      'Better candidate experience'
    ],
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Startups',
      'Enterprise companies'
    ],
    technologies: ['AI Recruitment', 'NLP', 'React', 'Node.js', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/recruitment-ai',
    icon: '👔'
  },
  {
    id: 'ai-market-research',
    name: 'AI Market Research Platform',
    category: 'micro-saas',
    description: 'Intelligent market research with competitor analysis, trend identification, and market opportunity assessment.',
    features: [
      'Competitor analysis',
      'Market trend identification',
      'Opportunity assessment',
      'Customer behavior analysis',
      'Pricing intelligence',
      'Market reports'
    ],
    pricing: {
      starter: 75,
      professional: 195,
      enterprise: 495,
      currency: 'USD'
    },
    benefits: [
      'Data-driven business decisions',
      'Identify market opportunities',
      'Stay ahead of competitors',
      'Reduce research costs'
    ],
    useCases: [
      'Market research firms',
      'Business consultants',
      'Startups',
      'Product managers'
    ],
    technologies: ['Market Intelligence', 'Data Analytics', 'React', 'Python', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/market-research',
    icon: '📈'
  },

  // Additional IT Services
  {
    id: 'blockchain-development',
    name: 'Blockchain Development Services',
    category: 'it-services',
    description: 'Complete blockchain development including smart contracts, DApps, and cryptocurrency solutions.',
    features: [
      'Smart contract development',
      'DApp creation',
      'Cryptocurrency development',
      'DeFi solutions',
      'NFT marketplace development',
      'Blockchain consulting'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Future-proof technology'
    ],
    useCases: [
      'Financial services',
      'Supply chain management',
      'Digital identity',
      'Gaming platforms'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'MetaMask'],
    link: 'https://ziontechgroup.com/services/blockchain-development',
    icon: '⛓️'
  },
  {
    id: 'iot-solutions',
    name: 'IoT Solutions & Integration',
    category: 'it-services',
    description: 'Comprehensive IoT solutions including device management, data analytics, and cloud integration.',
    features: [
      'IoT device management',
      'Real-time data collection',
      'Cloud platform integration',
      'Predictive maintenance',
      'Remote monitoring',
      'Security implementation'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Predictive insights',
      'Cost reduction',
      'Automated processes'
    ],
    useCases: [
      'Smart manufacturing',
      'Healthcare monitoring',
      'Smart cities',
      'Agriculture automation'
    ],
    technologies: ['MQTT', 'AWS IoT', 'Azure IoT', 'Raspberry Pi', 'Arduino'],
    link: 'https://ziontechgroup.com/services/iot-solutions',
    icon: '🌐'
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'it-services',
    description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
    features: [
      'Native iOS & Android apps',
      'Cross-platform development',
      'UI/UX design',
      'App store optimization',
      'Push notifications',
      'Analytics integration'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced user engagement',
      'Mobile-first approach',
      'Cross-platform compatibility',
      'App store presence'
    ],
    useCases: [
      'E-commerce apps',
      'Business productivity',
      'Healthcare applications',
      'Entertainment platforms'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    link: 'https://ziontechgroup.com/services/mobile-development',
    icon: '📱'
  },
  {
    id: 'web-application-development',
    name: 'Web Application Development',
    category: 'it-services',
    description: 'Modern web application development with responsive design, performance optimization, and security.',
    features: [
      'Responsive web design',
      'Performance optimization',
      'Security implementation',
      'SEO optimization',
      'Progressive Web Apps',
      'API integration'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Modern user experience',
      'Fast loading times',
      'Mobile-friendly design',
      'Search engine optimized'
    ],
    useCases: [
      'Business websites',
      'E-commerce platforms',
      'SaaS applications',
      'Corporate portals'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://ziontechgroup.com/services/web-development',
    icon: '💻'
  },
  {
    id: 'data-warehouse-solutions',
    name: 'Data Warehouse Solutions',
    category: 'it-services',
    description: 'Enterprise data warehouse design and implementation with ETL processes and business intelligence.',
    features: [
      'Data warehouse design',
      'ETL process development',
      'Data modeling',
      'Business intelligence setup',
      'Data governance',
      'Performance optimization'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Centralized data management',
      'Improved decision making',
      'Data consistency',
      'Scalable architecture'
    ],
    useCases: [
      'Enterprise reporting',
      'Business intelligence',
      'Data analytics',
      'Compliance reporting'
    ],
    technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Talend', 'Power BI'],
    link: 'https://ziontechgroup.com/services/data-warehouse',
    icon: '🏗️'
  },
  {
    id: 'api-development-integration',
    name: 'API Development & Integration',
    category: 'it-services',
    description: 'Custom API development and third-party integration services for seamless system connectivity.',
    features: [
      'RESTful API development',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Rate limiting & security',
      'Testing & monitoring'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'System interoperability',
      'Improved efficiency',
      'Scalable architecture',
      'Better data flow'
    ],
    useCases: [
      'System integration',
      'Third-party services',
      'Mobile app backends',
      'Microservices architecture'
    ],
    technologies: ['Node.js', 'Express', 'GraphQL', 'Postman', 'Swagger'],
    link: 'https://ziontechgroup.com/services/api-development',
    icon: '🔌'
  },
  {
    id: 'cloud-native-development',
    name: 'Cloud-Native Development',
    category: 'it-services',
    description: 'Cloud-native application development with containerization, microservices, and serverless architecture.',
    features: [
      'Containerization with Docker',
      'Microservices architecture',
      'Serverless development',
      'Cloud deployment',
      'Auto-scaling implementation',
      'Monitoring & logging'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Cost optimization',
      'Faster deployment',
      'Better resource utilization'
    ],
    useCases: [
      'Modern applications',
      'Startup scaling',
      'Enterprise modernization',
      'High-traffic systems'
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS Lambda', 'Azure Functions', 'Google Cloud Run'],
    link: 'https://ziontechgroup.com/services/cloud-native',
    icon: '☁️'
  },
  {
    id: 'quality-assurance-testing',
    name: 'Quality Assurance & Testing',
    category: 'it-services',
    description: 'Comprehensive QA services including automated testing, performance testing, and security testing.',
    features: [
      'Automated testing setup',
      'Performance testing',
      'Security testing',
      'Load testing',
      'User acceptance testing',
      'Test automation frameworks'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Improved software quality',
      'Reduced bugs in production',
      'Better user experience',
      'Cost-effective testing'
    ],
    useCases: [
      'Software development',
      'Web applications',
      'Mobile apps',
      'Enterprise systems'
    ],
    technologies: ['Selenium', 'Jest', 'Cypress', 'JMeter', 'OWASP ZAP'],
    link: 'https://ziontechgroup.com/services/qa-testing',
    icon: '🧪'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation Consulting',
    category: 'it-services',
    description: 'Strategic digital transformation consulting to modernize business processes and technology infrastructure.',
    features: [
      'Digital strategy development',
      'Process optimization',
      'Technology assessment',
      'Change management',
      'ROI analysis',
      'Implementation planning'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Improved efficiency',
      'Competitive advantage',
      'Cost reduction',
      'Future-ready business'
    ],
    useCases: [
      'Legacy system modernization',
      'Business process improvement',
      'Technology adoption',
      'Organizational change'
    ],
    technologies: ['Business Analysis', 'Process Mapping', 'Change Management', 'Technology Consulting'],
    link: 'https://ziontechgroup.com/services/digital-transformation',
    icon: '🔄'
  },
  {
    id: 'managed-it-services',
    name: 'Managed IT Services',
    category: 'it-services',
    description: 'Comprehensive managed IT services including 24/7 monitoring, maintenance, and support.',
    features: [
      '24/7 system monitoring',
      'Proactive maintenance',
      'Help desk support',
      'Security management',
      'Backup & recovery',
      'Performance optimization'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Reduced IT overhead',
      'Improved system reliability',
      'Expert support',
      'Predictable costs'
    ],
    useCases: [
      'Small businesses',
      'Medium enterprises',
      'Remote teams',
      'IT resource constraints'
    ],
    technologies: ['Remote Monitoring', 'Help Desk', 'Security Tools', 'Backup Solutions'],
    link: 'https://ziontechgroup.com/services/managed-it',
    icon: '🛠️'
  },

  // Additional AI Services
  {
    id: 'ai-powered-chatbots',
    name: 'AI-Powered Chatbots & Virtual Assistants',
    category: 'ai-services',
    description: 'Advanced conversational AI solutions with natural language understanding and multi-channel deployment.',
    features: [
      'Natural language processing',
      'Multi-channel deployment',
      'Context-aware conversations',
      'Integration with business systems',
      'Analytics & insights',
      'Custom training'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer service automation',
      'Sales qualification',
      'Lead generation',
      'Internal help desk'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'NLP'],
    link: 'https://ziontechgroup.com/services/ai-chatbots',
    icon: '💬'
  },
  {
    id: 'ai-document-processing',
    name: 'AI Document Processing & OCR',
    category: 'ai-services',
    description: 'Intelligent document processing with OCR, data extraction, and automated workflow integration.',
    features: [
      'Advanced OCR technology',
      'Document classification',
      'Data extraction & validation',
      'Workflow automation',
      'Multi-format support',
      'Quality assurance'
    ],
    pricing: {
      starter: 7000,
      professional: 20000,
      enterprise: 60000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual data entry by 95%',
      'Faster document processing',
      'Improved accuracy',
      'Automated workflows'
    ],
    useCases: [
      'Invoice processing',
      'Insurance claims',
      'Legal document review',
      'Medical records'
    ],
    technologies: ['OCR', 'Computer Vision', 'NLP', 'Machine Learning', 'Document AI'],
    link: 'https://ziontechgroup.com/services/document-processing',
    icon: '📄'
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    category: 'ai-services',
    description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Cost optimization',
      'Real-time monitoring'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Reduce supply chain costs by 20%',
      'Improve delivery times',
      'Optimize inventory levels',
      'Better risk management'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'E-commerce platforms'
    ],
    technologies: ['Machine Learning', 'Optimization Algorithms', 'IoT', 'Blockchain', 'Predictive Analytics'],
    link: 'https://ziontechgroup.com/services/supply-chain-ai',
    icon: '🚚'
  },
  {
    id: 'ai-personalization-engine',
    name: 'AI Personalization Engine',
    category: 'ai-services',
    description: 'Advanced personalization engine for content, products, and user experiences across all touchpoints.',
    features: [
      'Real-time personalization',
      'Multi-channel consistency',
      'Behavioral analysis',
      'A/B testing framework',
      'Performance optimization',
      'Privacy-compliant'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Increase conversion rates by 40%',
      'Improve user engagement',
      'Better customer experience',
      'Higher customer lifetime value'
    ],
    useCases: [
      'E-commerce platforms',
      'Content websites',
      'Mobile applications',
      'Marketing campaigns'
    ],
    technologies: ['Machine Learning', 'Real-time Analytics', 'Personalization APIs', 'A/B Testing', 'Behavioral Analytics'],
    link: 'https://ziontechgroup.com/services/personalization-engine',
    icon: '🎯'
  },
  {
    id: 'ai-risk-assessment',
    name: 'AI Risk Assessment & Management',
    category: 'ai-services',
    description: 'Intelligent risk assessment and management system for financial, operational, and compliance risks.',
    features: [
      'Real-time risk monitoring',
      'Predictive risk modeling',
      'Compliance checking',
      'Risk scoring algorithms',
      'Automated reporting',
      'Alert systems'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Proactive risk management',
      'Reduced financial losses',
      'Compliance automation',
      'Better decision making'
    ],
    useCases: [
      'Financial institutions',
      'Insurance companies',
      'Healthcare organizations',
      'Government agencies'
    ],
    technologies: ['Risk Analytics', 'Machine Learning', 'Compliance APIs', 'Real-time Monitoring', 'Predictive Modeling'],
    link: 'https://ziontechgroup.com/services/risk-assessment',
    icon: '⚠️'
  },
  {
    id: 'ai-energy-optimization',
    name: 'AI Energy Optimization Platform',
    category: 'ai-services',
    description: 'Smart energy management system with consumption optimization, predictive maintenance, and cost reduction.',
    features: [
      'Energy consumption optimization',
      'Predictive maintenance',
      'Cost reduction algorithms',
      'Renewable energy integration',
      'Real-time monitoring',
      'Sustainability reporting'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 85000,
      currency: 'USD'
    },
    benefits: [
      'Reduce energy costs by 25%',
      'Improve sustainability',
      'Predictive maintenance',
      'Better resource utilization'
    ],
    useCases: [
      'Manufacturing facilities',
      'Commercial buildings',
      'Data centers',
      'Smart cities'
    ],
    technologies: ['IoT Sensors', 'Machine Learning', 'Energy Analytics', 'Predictive Maintenance', 'Smart Grid'],
    link: 'https://ziontechgroup.com/services/energy-optimization',
    icon: '⚡'
  },
  {
    id: 'ai-medical-diagnosis',
    name: 'AI Medical Diagnosis Assistant',
    category: 'ai-services',
    description: 'AI-powered medical diagnosis assistance with image analysis, symptom checking, and treatment recommendations.',
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Treatment recommendations',
      'Drug interaction checking',
      'Patient monitoring',
      'Clinical decision support'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Improved diagnostic accuracy',
      'Faster diagnosis times',
      'Reduced medical errors',
      'Better patient outcomes'
    ],
    useCases: [
      'Hospitals and clinics',
      'Telemedicine platforms',
      'Medical imaging centers',
      'Healthcare research'
    ],
    technologies: ['Medical AI', 'Computer Vision', 'NLP', 'Machine Learning', 'Medical Imaging'],
    link: 'https://ziontechgroup.com/services/medical-diagnosis',
    icon: '🏥'
  },
  {
    id: 'ai-autonomous-vehicles',
    name: 'AI Autonomous Vehicle Solutions',
    category: 'ai-services',
    description: 'Advanced AI solutions for autonomous vehicles including perception, decision-making, and safety systems.',
    features: [
      'Computer vision systems',
      'Sensor fusion',
      'Path planning algorithms',
      'Safety monitoring',
      'Real-time decision making',
      'Fleet management'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced safety',
      'Improved efficiency',
      'Reduced human error',
      'Future-ready transportation'
    ],
    useCases: [
      'Autonomous cars',
      'Delivery vehicles',
      'Industrial automation',
      'Public transportation'
    ],
    technologies: ['Computer Vision', 'LiDAR', 'Sensor Fusion', 'Reinforcement Learning', 'Real-time Systems'],
    link: 'https://ziontechgroup.com/services/autonomous-vehicles',
    icon: '🚗'
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    category: 'ai-services',
    description: 'Intelligent trading platform with algorithmic trading, market analysis, and risk management.',
    features: [
      'Algorithmic trading',
      'Market sentiment analysis',
      'Risk management',
      'Portfolio optimization',
      'Real-time market data',
      'Backtesting framework'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 160000,
      currency: 'USD'
    },
    benefits: [
      'Automated trading decisions',
      'Improved market timing',
      'Risk reduction',
      'Better portfolio performance'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Individual traders',
      'Financial institutions'
    ],
    technologies: ['Algorithmic Trading', 'Machine Learning', 'Financial APIs', 'Risk Analytics', 'Real-time Processing'],
    link: 'https://ziontechgroup.com/services/financial-trading',
    icon: '📊'
  },
  {
    id: 'ai-cybersecurity-threat-detection',
    name: 'AI Cybersecurity Threat Detection',
    category: 'ai-services',
    description: 'Advanced AI-powered cybersecurity with threat detection, incident response, and security automation.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Incident response automation',
      'Vulnerability assessment',
      'Security orchestration',
      'Threat intelligence'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Faster incident response',
      'Reduced security risks',
      'Automated security operations'
    ],
    useCases: [
      'Enterprise security',
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations'
    ],
    technologies: ['Threat Intelligence', 'Machine Learning', 'Security Analytics', 'SIEM', 'SOAR'],
    link: 'https://ziontechgroup.com/services/cybersecurity-ai',
    icon: '🔐'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};