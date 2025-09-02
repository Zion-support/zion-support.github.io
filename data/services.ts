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
      'Searchable meeting archives'
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
    description: 'AI-powered invoice generation with automatic data extraction, payment tracking, and financial analytics.',
    features: [
      'AI data extraction from emails',
      'Automatic invoice generation',
      'Payment tracking & reminders',
      'Multi-currency support',
      'Tax calculation',
      'Financial reporting'
    ],
    pricing: {
      starter: 18,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Reduce invoice processing time by 90%',
      'Faster payment collection',
      'Automated tax compliance',
      'Better cash flow management'
    ],
    useCases: [
      'Freelancers',
      'Small businesses',
      'Consulting firms',
      'Service providers'
    ],
    technologies: ['OCR', 'React', 'Node.js', 'Stripe', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/invoice-generator',
    icon: '🧾'
  },
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Reviewer',
    category: 'micro-saas',
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code quality scoring',
      'Integration with Git platforms',
      'Team collaboration tools'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 225,
      currency: 'USD'
    },
    benefits: [
      'Reduce code review time by 70%',
      'Catch bugs before deployment',
      'Improve code quality',
      'Faster development cycles'
    ],
    useCases: [
      'Software development teams',
      'Open source projects',
      'Code bootcamps',
      'Enterprise development'
    ],
    technologies: ['AI Code Analysis', 'GitHub API', 'React', 'Node.js', 'Docker'],
    link: 'https://ziontechgroup.com/services/code-reviewer',
    icon: '🔍'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Auditor',
    category: 'micro-saas',
    description: 'AI-powered smart contract security auditing platform for blockchain applications and DeFi protocols.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Security best practices check',
      'Audit report generation',
      'Integration with popular blockchains',
      'Real-time monitoring'
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
      'Build trust with users'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'Blockchain startups',
      'Enterprise blockchain'
    ],
    technologies: ['Solidity', 'AI Analysis', 'React', 'Node.js', 'Web3'],
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
      professional: 120,
      enterprise: 320,
      currency: 'USD'
    },
    benefits: [
      'Increase organic traffic by 200%',
      'Outrank competitors',
      'Automated SEO optimization',
      'Data-driven content strategy'
    ],
    useCases: [
      'Content creators',
      'E-commerce sites',
      'Marketing agencies',
      'Blog owners'
    ],
    technologies: ['AI SEO Analysis', 'React', 'Node.js', 'SEO APIs', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/seo-optimizer',
    icon: '📈'
  },
  {
    id: 'smart-document-processor',
    name: 'Smart Document Processor',
    category: 'micro-saas',
    description: 'AI-powered document processing platform that extracts, categorizes, and analyzes business documents automatically.',
    features: [
      'OCR text extraction',
      'Document classification',
      'Data extraction & validation',
      'Workflow automation',
      'Integration with business systems',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 30,
      professional: 75,
      enterprise: 200,
      currency: 'USD'
    },
    benefits: [
      'Process documents 10x faster',
      'Reduce manual data entry',
      'Improve accuracy',
      'Ensure compliance'
    ],
    useCases: [
      'Insurance companies',
      'Legal firms',
      'Healthcare organizations',
      'Financial institutions'
    ],
    technologies: ['OCR', 'AI Classification', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/document-processor',
    icon: '📄'
  },
  {
    id: 'ai-social-listener',
    name: 'AI Social Media Listener',
    category: 'micro-saas',
    description: 'Intelligent social media monitoring platform that tracks brand mentions, sentiment analysis, and competitor insights.',
    features: [
      'Real-time brand monitoring',
      'Sentiment analysis',
      'Competitor tracking',
      'Influencer identification',
      'Crisis detection',
      'Custom alerts & reports'
    ],
    pricing: {
      starter: 40,
      professional: 100,
      enterprise: 270,
      currency: 'USD'
    },
    benefits: [
      'Protect brand reputation',
      'Identify growth opportunities',
      'Monitor competitor strategies',
      'Crisis prevention'
    ],
    useCases: [
      'Brand managers',
      'Marketing agencies',
      'PR professionals',
      'E-commerce brands'
    ],
    technologies: ['AI Sentiment Analysis', 'Social APIs', 'React', 'Node.js', 'Redis'],
    link: 'https://ziontechgroup.com/services/social-listener',
    icon: '👂'
  },
  {
    id: 'smart-workflow-automator',
    name: 'Smart Workflow Automator',
    category: 'micro-saas',
    description: 'No-code workflow automation platform that connects apps and automates business processes with AI intelligence.',
    features: [
      'Visual workflow builder',
      '500+ app integrations',
      'AI decision making',
      'Conditional logic',
      'Error handling',
      'Analytics & monitoring'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 150,
      currency: 'USD'
    },
    benefits: [
      'Automate repetitive tasks',
      'Reduce human errors',
      'Improve efficiency',
      'Scale operations'
    ],
    useCases: [
      'Sales teams',
      'HR departments',
      'Customer service',
      'Marketing automation'
    ],
    technologies: ['Workflow Engine', 'API Integrations', 'React', 'Node.js', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/workflow-automator',
    icon: '⚡'
  },
  {
    id: 'ai-price-optimizer',
    name: 'AI Price Optimizer',
    category: 'micro-saas',
    description: 'Dynamic pricing optimization platform that uses AI to maximize revenue through intelligent price adjustments.',
    features: [
      'Dynamic pricing algorithms',
      'Competitor price monitoring',
      'Demand forecasting',
      'A/B testing framework',
      'Revenue optimization',
      'Real-time adjustments'
    ],
    pricing: {
      starter: 60,
      professional: 150,
      enterprise: 400,
      currency: 'USD'
    },
    benefits: [
      'Increase revenue by 15-30%',
      'Optimize profit margins',
      'Stay competitive',
      'Automated pricing strategy'
    ],
    useCases: [
      'E-commerce retailers',
      'SaaS companies',
      'Hotel booking',
      'Airlines & travel'
    ],
    technologies: ['Machine Learning', 'Price APIs', 'React', 'Node.js', 'Python'],
    link: 'https://ziontechgroup.com/services/price-optimizer',
    icon: '💰'
  },
  {
    id: 'smart-inventory-predictor',
    name: 'Smart Inventory Predictor',
    category: 'micro-saas',
    description: 'AI-powered inventory forecasting platform that predicts demand, prevents stockouts, and optimizes inventory levels.',
    features: [
      'Demand forecasting',
      'Seasonal trend analysis',
      'Stockout prevention',
      'Optimal reorder points',
      'Multi-location management',
      'Integration with ERPs'
    ],
    pricing: {
      starter: 50,
      professional: 125,
      enterprise: 330,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 85%',
      'Optimize cash flow',
      'Minimize waste',
      'Improve customer satisfaction'
    ],
    useCases: [
      'Retail chains',
      'E-commerce businesses',
      'Manufacturing',
      'Wholesale distributors'
    ],
    technologies: ['Time Series AI', 'React', 'Node.js', 'PostgreSQL', 'Python'],
    link: 'https://ziontechgroup.com/services/inventory-predictor',
    icon: '📊'
  },
  {
    id: 'ai-customer-insights',
    name: 'AI Customer Insights Platform',
    category: 'micro-saas',
    description: 'Advanced customer analytics platform that provides deep insights into customer behavior, preferences, and lifetime value.',
    features: [
      'Customer segmentation',
      'Behavioral analysis',
      'Lifetime value prediction',
      'Churn prediction',
      'Personalization recommendations',
      'Real-time dashboards'
    ],
    pricing: {
      starter: 35,
      professional: 90,
      enterprise: 240,
      currency: 'USD'
    },
    benefits: [
      'Increase customer retention by 40%',
      'Optimize marketing spend',
      'Improve customer experience',
      'Data-driven decisions'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Subscription services',
      'Retail businesses'
    ],
    technologies: ['Customer Analytics AI', 'React', 'Node.js', 'MongoDB', 'Python'],
    link: 'https://ziontechgroup.com/services/customer-insights',
    icon: '👥'
  },
  {
    id: 'smart-contract-generator',
    name: 'Smart Contract Generator',
    category: 'micro-saas',
    description: 'AI-powered smart contract generation platform that creates secure, audited contracts for various blockchain use cases.',
    features: [
      'AI contract generation',
      'Security audit integration',
      'Multiple blockchain support',
      'Template library',
      'Gas optimization',
      'Deployment automation'
    ],
    pricing: {
      starter: 80,
      professional: 200,
      enterprise: 550,
      currency: 'USD'
    },
    benefits: [
      'Reduce development time by 80%',
      'Ensure security best practices',
      'Lower deployment costs',
      'Faster time to market'
    ],
    useCases: [
      'Blockchain startups',
      'DeFi projects',
      'NFT platforms',
      'Enterprise blockchain'
    ],
    technologies: ['AI Code Generation', 'Solidity', 'React', 'Node.js', 'Web3'],
    link: 'https://ziontechgroup.com/services/smart-contract-generator',
    icon: '📜'
  },
  {
    id: 'ai-content-translator',
    name: 'AI Content Translator Pro',
    category: 'micro-saas',
    description: 'Advanced content translation platform with context-aware AI translation, brand voice preservation, and quality assurance.',
    features: [
      'Context-aware translation',
      'Brand voice preservation',
      'Quality assurance checks',
      'Multi-format support',
      'Translation memory',
      'Human review integration'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      'Maintain brand consistency',
      'Reduce translation costs',
      'Faster global expansion',
      'High-quality translations'
    ],
    useCases: [
      'Global businesses',
      'E-commerce expansion',
      'Content creators',
      'Marketing agencies'
    ],
    technologies: ['Advanced NLP', 'React', 'Node.js', 'Translation APIs', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/content-translator',
    icon: '🌍'
  },
  {
    id: 'smart-compliance-monitor',
    name: 'Smart Compliance Monitor',
    category: 'micro-saas',
    description: 'AI-powered compliance monitoring platform that tracks regulatory changes and ensures business compliance across industries.',
    features: [
      'Regulatory change tracking',
      'Compliance gap analysis',
      'Automated reporting',
      'Risk assessment',
      'Document management',
      'Audit trail maintenance'
    ],
    pricing: {
      starter: 45,
      professional: 115,
      enterprise: 310,
      currency: 'USD'
    },
    benefits: [
      'Avoid costly penalties',
      'Stay ahead of regulations',
      'Automated compliance',
      'Risk mitigation'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Manufacturing',
      'Government contractors'
    ],
    technologies: ['Regulatory AI', 'React', 'Node.js', 'PostgreSQL', 'Python'],
    link: 'https://ziontechgroup.com/services/compliance-monitor',
    icon: '📋'
  },
  {
    id: 'ai-talent-matcher',
    name: 'AI Talent Matcher',
    category: 'micro-saas',
    description: 'Intelligent recruitment platform that uses AI to match candidates with job opportunities based on skills, culture, and potential.',
    features: [
      'AI candidate matching',
      'Skills assessment',
      'Cultural fit analysis',
      'Bias reduction',
      'Interview scheduling',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 40,
      professional: 100,
      enterprise: 270,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Reduce bias in hiring',
      'Better cultural fit'
    ],
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Startups',
      'Enterprise companies'
    ],
    technologies: ['AI Matching', 'React', 'Node.js', 'MongoDB', 'Python'],
    link: 'https://ziontechgroup.com/services/talent-matcher',
    icon: '🎯'
  },
  {
    id: 'smart-energy-optimizer',
    name: 'Smart Energy Optimizer',
    category: 'micro-saas',
    description: 'AI-powered energy management platform that optimizes energy consumption, reduces costs, and improves sustainability.',
    features: [
      'Energy consumption monitoring',
      'Cost optimization',
      'Sustainability tracking',
      'Predictive maintenance',
      'Carbon footprint analysis',
      'Integration with smart devices'
    ],
    pricing: {
      starter: 30,
      professional: 75,
      enterprise: 200,
      currency: 'USD'
    },
    benefits: [
      'Reduce energy costs by 25%',
      'Improve sustainability',
      'Predictive maintenance',
      'Real-time monitoring'
    ],
    useCases: [
      'Commercial buildings',
      'Manufacturing facilities',
      'Data centers',
      'Retail chains'
    ],
    technologies: ['IoT Integration', 'React', 'Node.js', 'Time Series DB', 'Python'],
    link: 'https://ziontechgroup.com/services/energy-optimizer',
    icon: '⚡'
  },

  // Additional Modern IT Services
  {
    id: 'edge-computing-setup',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Complete edge computing setup and management for low-latency applications and IoT deployments.',
    features: [
      'Edge server deployment',
      'CDN optimization',
      'IoT device management',
      'Real-time data processing',
      'Security implementation',
      'Monitoring & maintenance'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce latency by 80%',
      'Improve application performance',
      'Better user experience',
      'Cost-effective scaling'
    ],
    useCases: [
      'IoT applications',
      'Real-time analytics',
      'Gaming platforms',
      'Autonomous vehicles'
    ],
    technologies: ['Kubernetes', 'Docker', 'Edge Computing', 'IoT Protocols', 'CDN'],
    link: 'https://ziontechgroup.com/services/edge-computing',
    icon: '🌐'
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Implementation',
    category: 'it-services',
    description: 'Complete zero trust security architecture implementation with identity verification and network segmentation.',
    features: [
      'Identity verification',
      'Network segmentation',
      'Device trust assessment',
      'Application security',
      'Data protection',
      'Continuous monitoring'
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
      'Compliance adherence',
      'Better threat detection'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare systems',
      'Financial institutions'
    ],
    technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'MFA'],
    link: 'https://ziontechgroup.com/services/zero-trust',
    icon: '🔐'
  },
  {
    id: 'container-security',
    name: 'Container Security Platform',
    category: 'it-services',
    description: 'Comprehensive container security solution with vulnerability scanning, runtime protection, and compliance monitoring.',
    features: [
      'Container vulnerability scanning',
      'Runtime security monitoring',
      'Image signing & verification',
      'Network segmentation',
      'Compliance reporting',
      'Threat detection'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Secure container deployments',
      'Prevent security breaches',
      'Compliance adherence',
      'Automated security'
    ],
    useCases: [
      'Microservices architecture',
      'Cloud-native applications',
      'DevOps teams',
      'Enterprise containerization'
    ],
    technologies: ['Docker', 'Kubernetes', 'Container Security', 'CIS Benchmarks', 'Falco'],
    link: 'https://ziontechgroup.com/services/container-security',
    icon: '🐳'
  },
  {
    id: 'api-security-gateway',
    name: 'API Security Gateway',
    category: 'it-services',
    description: 'Advanced API security gateway with threat protection, rate limiting, and comprehensive monitoring.',
    features: [
      'API threat protection',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'Data encryption',
      'Audit logging',
      'Real-time monitoring'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Protect against API attacks',
      'Ensure data security',
      'Compliance adherence',
      'Better performance'
    ],
    useCases: [
      'Public APIs',
      'Microservices',
      'Third-party integrations',
      'Mobile applications'
    ],
    technologies: ['API Gateway', 'WAF', 'OAuth', 'JWT', 'Rate Limiting'],
    link: 'https://ziontechgroup.com/services/api-security',
    icon: '🛡️'
  },
  {
    id: 'data-lake-architecture',
    name: 'Data Lake Architecture Design',
    category: 'it-services',
    description: 'Complete data lake setup with data ingestion, processing, and analytics capabilities for big data solutions.',
    features: [
      'Data lake architecture design',
      'Data ingestion pipelines',
      'Data processing frameworks',
      'Analytics platform setup',
      'Data governance',
      'Security implementation'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Scalable data storage',
      'Advanced analytics capabilities',
      'Cost-effective data processing',
      'Better data insights'
    ],
    useCases: [
      'Big data analytics',
      'Machine learning projects',
      'Business intelligence',
      'Data science initiatives'
    ],
    technologies: ['AWS S3', 'Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/data-lake',
    icon: '🏞️'
  },
  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture Implementation',
    category: 'it-services',
    description: 'Complete serverless architecture design and implementation for scalable, cost-effective applications.',
    features: [
      'Serverless architecture design',
      'Function optimization',
      'Event-driven workflows',
      'Auto-scaling setup',
      'Cost optimization',
      'Monitoring & debugging'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce infrastructure costs',
      'Automatic scaling',
      'Faster development',
      'Better resource utilization'
    ],
    useCases: [
      'Web applications',
      'API services',
      'Data processing',
      'IoT applications'
    ],
    technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework'],
    link: 'https://ziontechgroup.com/services/serverless',
    icon: '⚡'
  },
  {
    id: 'blockchain-infrastructure',
    name: 'Blockchain Infrastructure Setup',
    category: 'it-services',
    description: 'Complete blockchain infrastructure setup including nodes, smart contracts, and decentralized applications.',
    features: [
      'Blockchain node setup',
      'Smart contract deployment',
      'DApp development',
      'Security auditing',
      'Performance optimization',
      'Monitoring & maintenance'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Decentralized applications',
      'Enhanced security',
      'Transparent transactions',
      'Reduced intermediaries'
    ],
    useCases: [
      'DeFi applications',
      'NFT platforms',
      'Supply chain tracking',
      'Identity management'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'Blockchain Nodes'],
    link: 'https://ziontechgroup.com/services/blockchain',
    icon: '⛓️'
  },
  {
    id: 'quantum-ready-security',
    name: 'Quantum-Ready Security Implementation',
    category: 'it-services',
    description: 'Future-proof security implementation with quantum-resistant cryptography and post-quantum algorithms.',
    features: [
      'Quantum-resistant algorithms',
      'Post-quantum cryptography',
      'Key management systems',
      'Migration planning',
      'Security assessment',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof security',
      'Protect against quantum threats',
      'Compliance readiness',
      'Long-term data protection'
    ],
    useCases: [
      'Government agencies',
      'Financial institutions',
      'Healthcare organizations',
      'Critical infrastructure'
    ],
    technologies: ['Post-Quantum Crypto', 'NIST Standards', 'Key Management', 'Quantum Algorithms'],
    link: 'https://ziontechgroup.com/services/quantum-security',
    icon: '🔮'
  },
  {
    id: 'ai-infrastructure-setup',
    name: 'AI Infrastructure Setup',
    category: 'it-services',
    description: 'Complete AI infrastructure setup with GPU clusters, ML pipelines, and model deployment platforms.',
    features: [
      'GPU cluster setup',
      'ML pipeline automation',
      'Model deployment platform',
      'Data preprocessing pipelines',
      'Model monitoring',
      'Auto-scaling infrastructure'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Scalable AI infrastructure',
      'Faster model training',
      'Automated ML workflows',
      'Cost-effective AI deployment'
    ],
    useCases: [
      'Machine learning projects',
      'Deep learning applications',
      'Computer vision systems',
      'Natural language processing'
    ],
    technologies: ['GPU Clusters', 'Kubernetes', 'TensorFlow', 'PyTorch', 'MLflow'],
    link: 'https://ziontechgroup.com/services/ai-infrastructure',
    icon: '🤖'
  },
  {
    id: 'multi-cloud-management',
    name: 'Multi-Cloud Management Platform',
    category: 'it-services',
    description: 'Comprehensive multi-cloud management solution with cost optimization, security, and unified monitoring.',
    features: [
      'Multi-cloud orchestration',
      'Cost optimization',
      'Unified monitoring',
      'Security management',
      'Disaster recovery',
      'Compliance automation'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Avoid vendor lock-in',
      'Optimize costs',
      'Improve reliability',
      'Enhanced security'
    ],
    useCases: [
      'Enterprise organizations',
      'Global businesses',
      'High-availability systems',
      'Compliance requirements'
    ],
    technologies: ['Terraform', 'Kubernetes', 'Cloud APIs', 'Cost Management', 'Monitoring'],
    link: 'https://ziontechgroup.com/services/multi-cloud',
    icon: '☁️'
  },

  // Additional Advanced AI Services
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
      'Patent analysis',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Reduce drug development time by 50%',
      'Lower development costs',
      'Improve success rates',
      'Accelerate time to market'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical trial organizations'
    ],
    technologies: ['Deep Learning', 'Molecular AI', 'Bioinformatics', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-financial-modeling',
    name: 'AI Financial Modeling Suite',
    category: 'ai-services',
    description: 'Advanced AI-powered financial modeling platform for risk assessment, portfolio optimization, and market prediction.',
    features: [
      'Risk assessment models',
      'Portfolio optimization',
      'Market prediction algorithms',
      'Credit scoring',
      'Fraud detection',
      'Regulatory reporting'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Improve investment returns',
      'Reduce financial risks',
      'Automated compliance',
      'Better decision making'
    ],
    useCases: [
      'Investment banks',
      'Hedge funds',
      'Insurance companies',
      'Financial advisors'
    ],
    technologies: ['Quantitative Finance', 'Machine Learning', 'Risk Models', 'Python', 'R'],
    link: 'https://ziontechgroup.com/services/ai-financial-modeling',
    icon: '📊'
  },
  {
    id: 'ai-supply-chain-optimizer',
    name: 'AI Supply Chain Optimizer',
    category: 'ai-services',
    description: 'Intelligent supply chain optimization platform with demand forecasting, logistics optimization, and risk management.',
    features: [
      'Demand forecasting',
      'Logistics optimization',
      'Supplier risk assessment',
      'Inventory optimization',
      'Route planning',
      'Sustainability tracking'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Reduce supply chain costs by 20%',
      'Improve delivery times',
      'Minimize risks',
      'Enhance sustainability'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'E-commerce platforms'
    ],
    technologies: ['Supply Chain AI', 'Optimization Algorithms', 'IoT Integration', 'Python', 'Gurobi'],
    link: 'https://ziontechgroup.com/services/ai-supply-chain',
    icon: '🚚'
  },
  {
    id: 'ai-clinical-diagnostics',
    name: 'AI Clinical Diagnostics Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for medical image analysis, diagnostic assistance, and treatment recommendation systems.',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Treatment recommendations',
      'Patient risk stratification',
      'Drug interaction checking',
      'Clinical decision support'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 350000,
      currency: 'USD'
    },
    benefits: [
      'Improve diagnostic accuracy',
      'Reduce misdiagnosis rates',
      'Faster treatment decisions',
      'Better patient outcomes'
    ],
    useCases: [
      'Hospitals',
      'Medical imaging centers',
      'Telemedicine platforms',
      'Healthcare systems'
    ],
    technologies: ['Medical AI', 'Computer Vision', 'Deep Learning', 'DICOM', 'HL7'],
    link: 'https://ziontechgroup.com/services/ai-clinical-diagnostics',
    icon: '🏥'
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems Development',
    category: 'ai-services',
    description: 'Advanced AI development for autonomous vehicles, drones, and robotic systems with real-time decision making.',
    features: [
      'Real-time perception systems',
      'Path planning algorithms',
      'Obstacle avoidance',
      'Decision making systems',
      'Sensor fusion',
      'Safety monitoring'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced safety',
      'Improved efficiency',
      'Reduced human error',
      '24/7 operation'
    ],
    useCases: [
      'Autonomous vehicles',
      'Delivery drones',
      'Industrial robots',
      'Smart city systems'
    ],
    technologies: ['Autonomous AI', 'Computer Vision', 'Robotics', 'ROS', 'CUDA'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems',
    icon: '🤖'
  },
  {
    id: 'ai-personalization-engine',
    name: 'AI Personalization Engine',
    category: 'ai-services',
    description: 'Advanced personalization platform that creates unique user experiences through AI-driven content and product recommendations.',
    features: [
      'Real-time personalization',
      'Behavioral analysis',
      'Content optimization',
      'A/B testing automation',
      'Cross-platform consistency',
      'Privacy-compliant tracking'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Increase engagement by 40%',
      'Improve conversion rates',
      'Better user experience',
      'Higher customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'News websites',
      'Mobile applications'
    ],
    technologies: ['Personalization AI', 'Real-time ML', 'A/B Testing', 'Python', 'Redis'],
    link: 'https://ziontechgroup.com/services/ai-personalization',
    icon: '🎯'
  },
  {
    id: 'ai-cybersecurity-detector',
    name: 'AI Cybersecurity Threat Detector',
    category: 'ai-services',
    description: 'Advanced AI-powered cybersecurity platform that detects and prevents sophisticated cyber threats in real-time.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Anomaly detection',
      'Automated response',
      'Threat intelligence',
      'Incident forensics'
    ],
    pricing: {
      starter: 35000,
      professional: 100000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Prevent 99% of cyber attacks',
      'Reduce response time',
      'Lower security costs',
      'Compliance adherence'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Financial institutions',
      'Healthcare systems'
    ],
    technologies: ['Cybersecurity AI', 'Threat Detection', 'Behavioral Analysis', 'Python', 'SIEM'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity',
    icon: '🛡️'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for climate modeling, environmental impact assessment, and sustainability optimization.',
    features: [
      'Climate change modeling',
      'Environmental impact analysis',
      'Carbon footprint tracking',
      'Sustainability optimization',
      'Weather prediction',
      'Risk assessment'
    ],
    pricing: {
      starter: 45000,
      professional: 135000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Accurate climate predictions',
      'Optimize sustainability efforts',
      'Reduce environmental impact',
      'Compliance with regulations'
    ],
    useCases: [
      'Environmental agencies',
      'Energy companies',
      'Government organizations',
      'Sustainability consultants'
    ],
    technologies: ['Climate AI', 'Environmental Modeling', 'Big Data', 'Python', 'Climate APIs'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-legal-assistant',
    name: 'AI Legal Assistant Platform',
    category: 'ai-services',
    description: 'Intelligent legal platform that automates document analysis, contract review, and legal research with AI assistance.',
    features: [
      'Document analysis',
      'Contract review',
      'Legal research automation',
      'Compliance checking',
      'Case law analysis',
      'Risk assessment'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Reduce legal research time by 80%',
      'Improve accuracy',
      'Lower legal costs',
      'Faster case preparation'
    ],
    useCases: [
      'Law firms',
      'Corporate legal departments',
      'Legal research organizations',
      'Compliance teams'
    ],
    technologies: ['Legal AI', 'NLP', 'Document Analysis', 'Python', 'Legal Databases'],
    link: 'https://ziontechgroup.com/services/ai-legal-assistant',
    icon: '⚖️'
  },
  {
    id: 'ai-creative-suite',
    name: 'AI Creative Suite',
    category: 'ai-services',
    description: 'Comprehensive AI creative platform for content generation, design automation, and creative workflow optimization.',
    features: [
      'AI content generation',
      'Design automation',
      'Creative workflow optimization',
      'Brand consistency',
      'Multi-format output',
      'Collaboration tools'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'Reduce creative costs',
      'Scale creative operations'
    ],
    useCases: [
      'Marketing agencies',
      'Content creators',
      'Design studios',
      'E-commerce brands'
    ],
    technologies: ['Creative AI', 'Generative Models', 'Design Automation', 'Python', 'Creative APIs'],
    link: 'https://ziontechgroup.com/services/ai-creative-suite',
    icon: '🎨'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};