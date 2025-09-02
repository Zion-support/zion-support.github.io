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
      'Digital marketing agencies',
      'E-commerce brands',
      'Content creators',
      'Small businesses'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'expense-tracker',
    name: 'Smart Expense Tracker',
    category: 'micro-saas',
    description: 'Intelligent expense management system with receipt scanning, categorization, and automated reporting.',
    features: [
      'Receipt scanning with OCR',
      'Automatic categorization',
      'Multi-currency support',
      'Tax preparation',
      'Team expense management',
      'Integration with accounting software'
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
      'Freelancers & consultants',
      'Small businesses',
      'Sales teams',
      'Remote workers'
    ],
    technologies: ['React Native', 'Python', 'OCR', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/expense-tracker',
    icon: '💰'
  },
  {
    id: 'lead-generation-tool',
    name: 'Lead Gen Pro',
    category: 'micro-saas',
    description: 'AI-powered lead generation platform that finds and qualifies prospects across multiple channels.',
    features: [
      'AI prospect identification',
      'Email verification',
      'LinkedIn automation',
      'Lead scoring',
      'CRM integration',
      'Campaign analytics'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 299,
      currency: 'USD'
    },
    benefits: [
      '3x more qualified leads',
      'Reduce manual research time',
      'Higher conversion rates',
      'Automated follow-up sequences'
    ],
    useCases: [
      'Sales teams',
      'Marketing agencies',
      'B2B companies',
      'Recruitment firms'
    ],
    technologies: ['Python', 'Selenium', 'APIs', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/lead-generation',
    icon: '🎯'
  },
  {
    id: 'time-tracking-analytics',
    name: 'Time Analytics Pro',
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
    technologies: ['React', 'Node.js', 'Analytics', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation',
    category: 'micro-saas',
    description: 'Intelligent email marketing platform with AI-driven personalization and advanced automation workflows.',
    features: [
      'AI content personalization',
      'Behavioral triggers',
      'A/B testing',
      'Advanced segmentation',
      'Deliverability optimization',
      'Revenue attribution'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Increase open rates by 60%',
      'Higher conversion rates',
      'Automated nurturing sequences',
      'ROI tracking and optimization'
    ],
    useCases: [
      'E-commerce stores',
      'SaaS companies',
      'Online courses',
      'Service businesses'
    ],
    technologies: ['React', 'Node.js', 'AI/ML', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/email-marketing',
    icon: '📧'
  },
  {
    id: 'website-speed-optimizer',
    name: 'Website Speed Optimizer',
    category: 'micro-saas',
    description: 'Automated website performance optimization with real-time monitoring and instant fixes.',
    features: [
      'Automatic image optimization',
      'CDN integration',
      'Code minification',
      'Performance monitoring',
      'Core Web Vitals tracking',
      'One-click optimization'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Improve page speed by 70%',
      'Better SEO rankings',
      'Higher conversion rates',
      'Reduced bounce rates'
    ],
    useCases: [
      'E-commerce websites',
      'Blogs and content sites',
      'Business websites',
      'Web agencies'
    ],
    technologies: ['Node.js', 'Image Processing', 'CDN', 'Performance APIs'],
    link: 'https://ziontechgroup.com/services/website-optimizer',
    icon: '⚡'
  },
  {
    id: 'appointment-booking-system',
    name: 'Smart Booking System',
    category: 'micro-saas',
    description: 'Intelligent appointment booking platform with automated scheduling, reminders, and payment processing.',
    features: [
      'Automated scheduling',
      'Payment integration',
      'SMS/Email reminders',
      'Calendar synchronization',
      'Multi-service support',
      'Client management'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      'Reduce no-shows by 50%',
      'Automated payment collection',
      '24/7 booking availability',
      'Streamlined operations'
    ],
    useCases: [
      'Healthcare providers',
      'Beauty salons',
      'Consulting services',
      'Fitness trainers'
    ],
    technologies: ['React', 'Node.js', 'Payment APIs', 'Calendar APIs'],
    link: 'https://ziontechgroup.com/services/booking-system',
    icon: '📅'
  },
  {
    id: 'inventory-forecasting',
    name: 'Inventory Forecasting AI',
    category: 'micro-saas',
    description: 'AI-powered inventory forecasting system that predicts demand and optimizes stock levels.',
    features: [
      'AI demand forecasting',
      'Seasonal trend analysis',
      'Supplier lead time optimization',
      'Stock-out prevention',
      'Cost optimization',
      'Multi-location management'
    ],
    pricing: {
      starter: 45,
      professional: 125,
      enterprise: 325,
      currency: 'USD'
    },
    benefits: [
      'Reduce excess inventory by 30%',
      'Prevent stockouts',
      'Optimize cash flow',
      'Improve supplier relationships'
    ],
    useCases: [
      'Retail chains',
      'E-commerce businesses',
      'Manufacturing',
      'Wholesale distributors'
    ],
    technologies: ['Python', 'Machine Learning', 'Time Series', 'APIs'],
    link: 'https://ziontechgroup.com/services/inventory-forecasting',
    icon: '📊'
  },
  {
    id: 'customer-feedback-analyzer',
    name: 'Customer Feedback Analyzer',
    category: 'micro-saas',
    description: 'AI-powered customer feedback analysis platform that extracts insights from reviews, surveys, and support tickets.',
    features: [
      'Sentiment analysis',
      'Topic extraction',
      'Trend identification',
      'Competitor analysis',
      'Actionable insights',
      'Real-time monitoring'
    ],
    pricing: {
      starter: 35,
      professional: 95,
      enterprise: 245,
      currency: 'USD'
    },
    benefits: [
      'Understand customer sentiment',
      'Identify improvement opportunities',
      'Track competitor performance',
      'Data-driven decisions'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Restaurants',
      'Service businesses'
    ],
    technologies: ['NLP', 'Machine Learning', 'APIs', 'Data Visualization'],
    link: 'https://ziontechgroup.com/services/feedback-analyzer',
    icon: '💭'
  },
  {
    id: 'seo-rank-tracker',
    name: 'SEO Rank Tracker Pro',
    category: 'micro-saas',
    description: 'Advanced SEO rank tracking with competitor analysis, keyword research, and performance insights.',
    features: [
      'Multi-keyword tracking',
      'Competitor analysis',
      'Local SEO tracking',
      'SERP feature monitoring',
      'Ranking alerts',
      'Performance reports'
    ],
    pricing: {
      starter: 22,
      professional: 59,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Track SEO progress',
      'Beat competitors',
      'Identify opportunities',
      'Improve search visibility'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'Local businesses',
      'Content creators'
    ],
    technologies: ['Python', 'Web Scraping', 'APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/seo-tracker',
    icon: '🔍'
  },

  // Additional IT Services
  {
    id: 'network-security-monitoring',
    name: 'Network Security Monitoring',
    category: 'it-services',
    description: '24/7 network security monitoring with threat detection, incident response, and compliance reporting.',
    features: [
      'Real-time threat detection',
      'SIEM implementation',
      'Incident response automation',
      'Compliance reporting',
      'Vulnerability scanning',
      'Security awareness training'
    ],
    pricing: {
      starter: 2500,
      professional: 7000,
      enterprise: 20000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Reduced security incidents',
      'Compliance adherence',
      '24/7 security monitoring'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise companies'
    ],
    technologies: ['Splunk', 'QRadar', 'CrowdStrike', 'Palo Alto'],
    link: 'https://ziontechgroup.com/services/network-security',
    icon: '🛡️'
  },
  {
    id: 'cloud-architecture-design',
    name: 'Cloud Architecture Design',
    category: 'it-services',
    description: 'Expert cloud architecture design and implementation for scalable, secure, and cost-effective solutions.',
    features: [
      'Cloud strategy planning',
      'Architecture design',
      'Cost optimization',
      'Security implementation',
      'Performance tuning',
      'Disaster recovery planning'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Optimized cloud costs',
      'Improved performance',
      'Enhanced security',
      'Scalable architecture'
    ],
    useCases: [
      'Digital transformation',
      'Legacy system migration',
      'Startup scaling',
      'Enterprise modernization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/cloud-architecture',
    icon: '🏗️'
  },
  {
    id: 'database-optimization',
    name: 'Database Optimization Expert',
    category: 'it-services',
    description: 'Comprehensive database optimization services to improve performance, scalability, and reliability.',
    features: [
      'Performance analysis',
      'Query optimization',
      'Index optimization',
      'Database tuning',
      'Backup optimization',
      'Monitoring setup'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Faster query performance',
      'Reduced server costs',
      'Improved scalability',
      'Better reliability'
    ],
    useCases: [
      'High-traffic applications',
      'E-commerce platforms',
      'Analytics systems',
      'Legacy database systems'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
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
      'Performance optimization'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Seamless system integration',
      'Improved data flow',
      'Enhanced functionality',
      'Better user experience'
    ],
    useCases: [
      'System integration',
      'Mobile app backends',
      'E-commerce platforms',
      'SaaS applications'
    ],
    technologies: ['Node.js', 'Python', 'GraphQL', 'Postman', 'Swagger'],
    link: 'https://ziontechgroup.com/services/api-development',
    icon: '🔌'
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'it-services',
    description: 'Native and cross-platform mobile app development with modern UI/UX and backend integration.',
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'Backend integration',
      'App store optimization',
      'Performance optimization'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 80000,
      currency: 'USD'
    },
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'Modern UI/UX',
      'Scalable architecture'
    ],
    useCases: [
      'Business applications',
      'E-commerce apps',
      'Social platforms',
      'Productivity tools'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    link: 'https://ziontechgroup.com/services/mobile-development',
    icon: '📱'
  },
  {
    id: 'web-application-development',
    name: 'Web Application Development',
    category: 'it-services',
    description: 'Custom web application development with modern frameworks, responsive design, and scalable architecture.',
    features: [
      'Custom web applications',
      'Responsive design',
      'Progressive Web Apps',
      'Performance optimization',
      'SEO optimization',
      'Security implementation'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 70000,
      currency: 'USD'
    },
    benefits: [
      'Modern web technologies',
      'Responsive design',
      'Fast loading times',
      'SEO optimized'
    ],
    useCases: [
      'Business applications',
      'E-commerce platforms',
      'Content management',
      'Customer portals'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript'],
    link: 'https://ziontechgroup.com/services/web-development',
    icon: '🌐'
  },
  {
    id: 'it-consulting-services',
    name: 'IT Consulting Services',
    category: 'it-services',
    description: 'Strategic IT consulting to help businesses make informed technology decisions and digital transformation.',
    features: [
      'Technology strategy',
      'Digital transformation',
      'IT infrastructure planning',
      'Vendor selection',
      'Cost optimization',
      'Risk assessment'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Strategic technology guidance',
      'Cost-effective solutions',
      'Risk mitigation',
      'Competitive advantage'
    ],
    useCases: [
      'Technology planning',
      'Digital transformation',
      'Vendor evaluation',
      'IT strategy development'
    ],
    technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis'],
    link: 'https://ziontechgroup.com/services/it-consulting',
    icon: '💼'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery Planning',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
    features: [
      'Business impact analysis',
      'Recovery strategy design',
      'Backup system implementation',
      'Testing & validation',
      'Documentation & training',
      'Ongoing maintenance'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Business continuity',
      'Reduced downtime',
      'Data protection',
      'Compliance adherence'
    ],
    useCases: [
      'Critical business systems',
      'Data centers',
      'Cloud infrastructure',
      'Enterprise applications'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS DR', 'Azure Site Recovery'],
    link: 'https://ziontechgroup.com/services/disaster-recovery',
    icon: '🔄'
  },

  // Additional AI Services
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection & tracking',
      'Facial recognition',
      'OCR & document processing',
      'Quality inspection',
      'Real-time video analysis'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Improved accuracy',
      '24/7 monitoring',
      'Cost reduction'
    ],
    useCases: [
      'Manufacturing quality control',
      'Retail analytics',
      'Security surveillance',
      'Medical imaging'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet'],
    link: 'https://ziontechgroup.com/services/computer-vision',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, language understanding, and automated content processing.',
    features: [
      'Text classification',
      'Sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Question answering systems'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 70000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Multilingual support',
      'Improved content understanding',
      'Enhanced user experience'
    ],
    useCases: [
      'Content moderation',
      'Customer service automation',
      'Document analysis',
      'Language translation'
    ],
    technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
    link: 'https://ziontechgroup.com/services/nlp',
    icon: '📝'
  },
  {
    id: 'predictive-analytics-engine',
    name: 'Predictive Analytics Engine',
    category: 'ai-services',
    description: 'Advanced predictive analytics platform for forecasting, risk assessment, and business intelligence.',
    features: [
      'Time series forecasting',
      'Risk prediction models',
      'Customer behavior analysis',
      'Demand forecasting',
      'Fraud detection',
      'Churn prediction'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven predictions',
      'Risk mitigation',
      'Improved decision making',
      'Competitive advantage'
    ],
    useCases: [
      'Financial services',
      'E-commerce',
      'Healthcare',
      'Supply chain management'
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Prophet', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/predictive-analytics',
    icon: '🔮'
  },
  {
    id: 'ai-powered-recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation systems for personalized user experiences and increased engagement.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 85000,
      currency: 'USD'
    },
    benefits: [
      'Increased user engagement',
      'Higher conversion rates',
      'Personalized experiences',
      'Revenue optimization'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Content platforms',
      'Social media'
    ],
    technologies: ['Apache Spark', 'TensorFlow', 'Python', 'Redis', 'Kafka'],
    link: 'https://ziontechgroup.com/services/recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant',
    category: 'ai-services',
    description: 'Custom AI voice assistants with natural language understanding and multi-modal interactions.',
    features: [
      'Speech recognition',
      'Natural language understanding',
      'Voice synthesis',
      'Multi-language support',
      'Integration APIs',
      'Conversation management'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Hands-free interaction',
      'Improved accessibility',
      '24/7 availability',
      'Natural conversation flow'
    ],
    useCases: [
      'Customer service',
      'Smart home automation',
      'Healthcare assistance',
      'Educational platforms'
    ],
    technologies: ['Google Cloud Speech', 'Amazon Polly', 'OpenAI Whisper', 'WebRTC'],
    link: 'https://ziontechgroup.com/services/voice-assistant',
    icon: '🎤'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection System',
    category: 'ai-services',
    description: 'Advanced AI-powered fraud detection system for real-time transaction monitoring and risk assessment.',
    features: [
      'Real-time fraud detection',
      'Behavioral analysis',
      'Risk scoring',
      'Pattern recognition',
      'False positive reduction',
      'Compliance reporting'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Real-time protection',
      'Reduced fraud losses',
      'Improved accuracy',
      'Regulatory compliance'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies'
    ],
    technologies: ['Machine Learning', 'Anomaly Detection', 'Graph Analytics', 'Real-time Processing'],
    link: 'https://ziontechgroup.com/services/fraud-detection',
    icon: '🛡️'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    category: 'ai-services',
    description: 'Automated content moderation system for text, images, and videos with human-in-the-loop validation.',
    features: [
      'Multi-modal content analysis',
      'Real-time moderation',
      'Custom policy enforcement',
      'Human review integration',
      'Bias detection',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 50000,
      currency: 'USD'
    },
    benefits: [
      'Automated content screening',
      'Reduced moderation costs',
      'Consistent policy enforcement',
      'Scalable operations'
    ],
    useCases: [
      'Social media platforms',
      'E-commerce marketplaces',
      'Content platforms',
      'Gaming communities'
    ],
    technologies: ['Computer Vision', 'NLP', 'Deep Learning', 'Content Analysis'],
    link: 'https://ziontechgroup.com/services/content-moderation',
    icon: '🔍'
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    category: 'ai-services',
    description: 'Intelligent supply chain optimization using AI for demand forecasting, inventory management, and logistics.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Cost optimization',
      'Sustainability tracking'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 160000,
      currency: 'USD'
    },
    benefits: [
      'Reduced supply chain costs',
      'Improved efficiency',
      'Risk mitigation',
      'Sustainability improvements'
    ],
    useCases: [
      'Manufacturing',
      'Retail chains',
      'Logistics companies',
      'Food & beverage'
    ],
    technologies: ['Optimization Algorithms', 'Machine Learning', 'IoT Integration', 'Blockchain'],
    link: 'https://ziontechgroup.com/services/supply-chain-ai',
    icon: '🚚'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};