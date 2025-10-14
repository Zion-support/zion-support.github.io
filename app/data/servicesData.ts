export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
  glowColor: 'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow';
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-enterprise',
    title: 'AI Enterprise Chatbot Platform',
    description: 'Advanced conversational AI platform with natural language processing, multi-language support, and seamless integration with existing business systems.',
    shortDescription: 'Enterprise-grade AI chatbots with advanced NLP capabilities',
    category: 'AI',
    icon: '🤖',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support (50+ languages)',
      'Voice Recognition & Synthesis',
      'Sentiment Analysis',
      'Custom Knowledge Base Integration',
      'Real-time Analytics Dashboard',
      'API Integration (REST, GraphQL)',
      '24/7 Customer Support'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 2499
    },
    benefits: [
      'Reduce customer support costs by 60%',
      '24/7 availability for customer inquiries',
      'Scalable to handle unlimited conversations',
      'Easy integration with existing systems',
      'Advanced analytics and reporting'
    ],
    useCases: [
      'Customer Support Automation',
      'Lead Qualification',
      'FAQ Automation',
      'Appointment Scheduling',
      'E-commerce Support'
    ],
    technologies: ['OpenAI GPT-4', 'TensorFlow', 'Python', 'React', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-enterprise'
    },
    href: '/ai-chatbot-enterprise',
    glowColor: 'purple'
  },
  {
    id: 'ai-code-assistant-pro',
    title: 'AI Code Assistant Pro',
    description: 'Intelligent code generation and assistance platform that helps developers write better code faster with AI-powered suggestions, debugging, and optimization.',
    shortDescription: 'AI-powered coding assistant for developers',
    category: 'AI',
    icon: '💻',
    features: [
      'Code Generation & Completion',
      'Bug Detection & Fixing',
      'Code Review & Optimization',
      'Multi-language Support',
      'Documentation Generation',
      'Test Case Creation',
      'Security Vulnerability Scanning',
      'Performance Analysis'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Increase coding speed by 40%',
      'Reduce bugs and errors',
      'Improve code quality',
      'Automated testing',
      'Better documentation'
    ],
    useCases: [
      'Software Development',
      'Code Review',
      'Bug Fixing',
      'Documentation',
      'Testing'
    ],
    technologies: ['GPT-4', 'Codex', 'Python', 'JavaScript', 'TypeScript', 'GitHub'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-code-assistant-pro'
    },
    href: '/ai-code-assistant-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation Suite',
    description: 'Comprehensive AI-powered marketing automation platform that personalizes customer experiences, optimizes campaigns, and drives conversions.',
    shortDescription: 'AI-driven marketing automation for better conversions',
    category: 'AI',
    icon: '📈',
    features: [
      'Personalized Email Campaigns',
      'Behavioral Targeting',
      'Predictive Analytics',
      'A/B Testing Automation',
      'Lead Scoring',
      'Customer Journey Mapping',
      'Social Media Automation',
      'ROI Optimization'
    ],
    pricing: {
      basic: 399,
      pro: 899,
      enterprise: 2499
    },
    benefits: [
      'Increase conversion rates by 35%',
      'Reduce marketing costs by 50%',
      'Personalized customer experiences',
      'Automated campaign optimization',
      'Better lead qualification'
    ],
    useCases: [
      'Email Marketing',
      'Social Media Management',
      'Lead Nurturing',
      'Customer Retention',
      'Campaign Optimization'
    ],
    technologies: ['Machine Learning', 'Python', 'React', 'Node.js', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    href: '/ai-marketing-automation',
    glowColor: 'pink'
  },
  {
    id: 'ai-cybersecurity-monitor-pro',
    title: 'AI Cybersecurity Monitor Pro',
    description: 'Advanced AI-powered cybersecurity monitoring system that detects threats in real-time, analyzes patterns, and provides automated incident response.',
    shortDescription: 'AI-powered cybersecurity threat detection and response',
    category: 'AI',
    icon: '🔒',
    features: [
      'Real-time Threat Detection',
      'Behavioral Analysis',
      'Automated Incident Response',
      'Threat Intelligence Integration',
      'Anomaly Detection',
      'Security Orchestration',
      'Compliance Monitoring',
      '24/7 AI Monitoring'
    ],
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      'Automated response to incidents',
      'Continuous monitoring',
      'Better compliance reporting'
    ],
    useCases: [
      'Threat Detection',
      'Incident Response',
      'Compliance Management',
      'Security Monitoring',
      'Risk Assessment'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Python', 'Elasticsearch', 'Kafka'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-cybersecurity-monitor-pro'
    },
    href: '/ai-cybersecurity-monitor-pro',
    glowColor: 'purple'
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Revolutionary AI-powered content creation platform that generates high-quality articles, marketing copy, social media posts, and technical documentation.',
    shortDescription: 'AI-powered content creation for all your marketing needs',
    category: 'AI',
    icon: '✍️',
    features: [
      'Article & Blog Post Generation',
      'Marketing Copy Creation',
      'Social Media Content',
      'Technical Documentation',
      'SEO-Optimized Content',
      'Multi-language Support',
      'Brand Voice Customization',
      'Plagiarism Detection'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Save 80% of content creation time',
      'Consistent brand voice across all content',
      'SEO-optimized content for better rankings',
      'Unlimited content generation',
      'Professional quality output'
    ],
    useCases: [
      'Blog Content Creation',
      'Marketing Campaigns',
      'Social Media Management',
      'Technical Documentation',
      'Product Descriptions'
    ],
    technologies: ['GPT-4', 'BERT', 'Python', 'FastAPI', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    href: '/ai-content-generation-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-data-analytics-pro',
    title: 'AI Data Analytics Pro',
    description: 'Advanced AI-powered data analytics platform that provides real-time insights, predictive analytics, and automated reporting for business intelligence.',
    shortDescription: 'AI-driven analytics platform for data-driven decision making',
    category: 'AI',
    icon: '📊',
    features: [
      'Real-time Data Processing',
      'Predictive Analytics',
      'Automated Report Generation',
      'Interactive Dashboards',
      'Machine Learning Models',
      'Data Visualization',
      'Custom Metrics & KPIs',
      'API Integration'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2999
    },
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends and patterns automatically',
      'Reduce manual reporting by 90%',
      'Real-time insights and alerts',
      'Scalable data processing'
    ],
    useCases: [
      'Business Intelligence',
      'Sales Forecasting',
      'Customer Behavior Analysis',
      'Financial Reporting',
      'Marketing Analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'D3.js', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    href: '/ai-data-analytics-pro',
    glowColor: 'green'
  },

  // Micro SaaS Services
  {
    id: 'project-management-saas',
    title: 'Project Management SaaS',
    description: 'Comprehensive project management platform with task tracking, team collaboration, time tracking, and advanced reporting capabilities.',
    shortDescription: 'Complete project management solution for teams of all sizes',
    category: 'SaaS',
    icon: '📋',
    features: [
      'Task & Project Tracking',
      'Team Collaboration Tools',
      'Time Tracking & Reporting',
      'Gantt Charts & Timelines',
      'File Sharing & Storage',
      'Custom Workflows',
      'Mobile App Access',
      'Integration with 100+ tools'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    benefits: [
      'Increase team productivity by 40%',
      'Centralized project visibility',
      'Automated time tracking',
      'Seamless team collaboration',
      'Comprehensive reporting'
    ],
    useCases: [
      'Software Development',
      'Marketing Campaigns',
      'Event Planning',
      'Construction Projects',
      'Consulting Services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/project-management-saas'
    },
    href: '/project-management-saas',
    glowColor: 'blue'
  },
  {
    id: 'social-media-scheduler',
    title: 'Social Media Scheduler Pro',
    description: 'Advanced social media management platform that allows businesses to schedule, analyze, and optimize their social media presence across all major platforms.',
    shortDescription: 'Complete social media management and scheduling platform',
    category: 'SaaS',
    icon: '📱',
    features: [
      'Multi-platform Scheduling',
      'Content Calendar',
      'Analytics & Insights',
      'Hashtag Research',
      'Auto-posting',
      'Team Collaboration',
      'Content Library',
      'Competitor Analysis'
    ],
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399
    },
    benefits: [
      'Save 10+ hours per week',
      'Increase engagement by 60%',
      'Better content planning',
      'Detailed analytics',
      'Team coordination'
    ],
    useCases: [
      'Social Media Marketing',
      'Content Planning',
      'Brand Management',
      'Community Building',
      'Influencer Marketing'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Social APIs', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/social-media-scheduler'
    },
    href: '/social-media-scheduler',
    glowColor: 'pink'
  },
  {
    id: 'email-marketing-automation',
    title: 'Email Marketing Automation',
    description: 'Powerful email marketing platform with advanced automation, segmentation, and analytics to help businesses grow their email lists and increase conversions.',
    shortDescription: 'Advanced email marketing with automation and analytics',
    category: 'SaaS',
    icon: '📧',
    features: [
      'Drag & Drop Email Builder',
      'Advanced Automation Workflows',
      'List Segmentation',
      'A/B Testing',
      'Analytics & Reporting',
      'Landing Page Builder',
      'Lead Magnets',
      'Integration with 100+ tools'
    ],
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 599
    },
    benefits: [
      'Increase email open rates by 40%',
      'Automate lead nurturing',
      'Better subscriber segmentation',
      'Detailed performance analytics',
      'Easy integration'
    ],
    useCases: [
      'Lead Nurturing',
      'Customer Retention',
      'Product Launches',
      'Newsletter Management',
      'E-commerce Marketing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Stripe', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/email-marketing-automation'
    },
    href: '/email-marketing-automation',
    glowColor: 'cyan'
  },
  {
    id: 'invoicing-billing-saas',
    title: 'Invoicing & Billing SaaS',
    description: 'Complete invoicing and billing solution for freelancers, agencies, and small businesses with automated invoicing, payment processing, and financial reporting.',
    shortDescription: 'Complete invoicing and billing solution for businesses',
    category: 'SaaS',
    icon: '💰',
    features: [
      'Professional Invoice Templates',
      'Automated Recurring Billing',
      'Payment Processing',
      'Expense Tracking',
      'Financial Reporting',
      'Client Portal',
      'Tax Calculations',
      'Multi-currency Support'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    benefits: [
      'Get paid 50% faster',
      'Reduce billing errors',
      'Automated payment reminders',
      'Professional invoices',
      'Better cash flow management'
    ],
    useCases: [
      'Freelancer Billing',
      'Agency Management',
      'Small Business Invoicing',
      'Subscription Billing',
      'Project-based Billing'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PDF Generation', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/invoicing-billing-saas'
    },
    href: '/invoicing-billing-saas',
    glowColor: 'green'
  },
  {
    id: 'team-communication-saas',
    title: 'Team Communication SaaS',
    description: 'Modern team communication platform with chat, video calls, file sharing, and project collaboration tools designed for remote and hybrid teams.',
    shortDescription: 'Complete team communication and collaboration platform',
    category: 'SaaS',
    icon: '💬',
    features: [
      'Real-time Messaging',
      'Video & Voice Calls',
      'File Sharing & Storage',
      'Screen Sharing',
      'Project Channels',
      'Task Management',
      'Mobile Apps',
      'Integration Hub'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      'Improve team collaboration',
      'Reduce email overload',
      'Better project visibility',
      'Seamless communication',
      'Mobile accessibility'
    ],
    useCases: [
      'Remote Team Management',
      'Project Collaboration',
      'Client Communication',
      'Internal Messaging',
      'Team Meetings'
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/team-communication-saas'
    },
    href: '/team-communication-saas',
    glowColor: 'blue'
  },
  {
    id: 'analytics-dashboard-saas',
    title: 'Analytics Dashboard SaaS',
    description: 'Comprehensive business analytics platform that aggregates data from multiple sources and provides real-time insights, custom dashboards, and automated reporting.',
    shortDescription: 'Business intelligence and analytics dashboard platform',
    category: 'SaaS',
    icon: '📊',
    features: [
      'Custom Dashboard Builder',
      'Real-time Data Visualization',
      'Multi-source Data Integration',
      'Automated Reports',
      'KPI Tracking',
      'Alert System',
      'White-label Options',
      'API Access'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Make data-driven decisions',
      'Save 20+ hours on reporting',
      'Real-time insights',
      'Custom dashboards',
      'Automated alerts'
    ],
    useCases: [
      'Business Intelligence',
      'Performance Monitoring',
      'Client Reporting',
      'KPI Tracking',
      'Data Visualization'
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/analytics-dashboard-saas'
    },
    href: '/analytics-dashboard-saas',
    glowColor: 'yellow'
  },
  {
    id: 'crm-saas-platform',
    title: 'CRM SaaS Platform',
    description: 'Advanced Customer Relationship Management platform with lead tracking, sales pipeline management, and customer communication tools.',
    shortDescription: 'Complete CRM solution for sales and customer management',
    category: 'SaaS',
    icon: '👥',
    features: [
      'Lead & Contact Management',
      'Sales Pipeline Tracking',
      'Email Marketing Integration',
      'Customer Communication History',
      'Automated Follow-ups',
      'Sales Analytics & Reporting',
      'Mobile App Access',
      'API Integration'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      'Increase sales conversion by 35%',
      'Centralized customer data',
      'Automated sales processes',
      'Better customer relationships',
      'Data-driven sales insights'
    ],
    useCases: [
      'Sales Team Management',
      'Lead Nurturing',
      'Customer Support',
      'Marketing Automation',
      'Account Management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Stripe', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/crm-saas-platform'
    },
    href: '/crm-saas-platform',
    glowColor: 'pink'
  },
  {
    id: 'inventory-management-saas',
    title: 'Inventory Management SaaS',
    description: 'Comprehensive inventory management system with real-time tracking, automated reordering, and advanced analytics for businesses.',
    shortDescription: 'Real-time inventory tracking and management solution',
    category: 'SaaS',
    icon: '📦',
    features: [
      'Real-time Inventory Tracking',
      'Automated Reorder Points',
      'Barcode Scanning',
      'Multi-location Support',
      'Supplier Management',
      'Cost Tracking & Analysis',
      'Mobile App Access',
      'API Integration'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Eliminate stockouts and overstock',
      'Automated reordering',
      'Real-time visibility',
      'Improved cash flow'
    ],
    useCases: [
      'Retail Stores',
      'E-commerce',
      'Manufacturing',
      'Warehousing',
      'Distribution'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Barcode Scanner API', 'AWS', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/inventory-management-saas'
    },
    href: '/inventory-management-saas',
    glowColor: 'yellow'
  },

  // IT Services
  {
    id: 'cloud-migration-service',
    title: 'Cloud Migration Service',
    description: 'Complete cloud migration service that helps businesses move their infrastructure, applications, and data to the cloud securely and efficiently.',
    shortDescription: 'Seamless cloud migration for businesses of all sizes',
    category: 'IT',
    icon: '☁️',
    features: [
      'Infrastructure Assessment',
      'Migration Planning & Strategy',
      'Data Migration Services',
      'Application Modernization',
      'Security Implementation',
      'Performance Optimization',
      '24/7 Support & Monitoring',
      'Cost Optimization'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improved scalability and flexibility',
      'Enhanced security and compliance',
      'Better disaster recovery',
      '24/7 monitoring and support'
    ],
    useCases: [
      'Legacy System Migration',
      'Multi-cloud Strategy',
      'Disaster Recovery Setup',
      'Application Modernization',
      'Cost Optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-migration-service'
    },
    href: '/cloud-migration-service',
    glowColor: 'cyan'
  },
  {
    id: 'devops-automation-service',
    title: 'DevOps Automation Service',
    description: 'Complete DevOps transformation service that automates deployment pipelines, infrastructure management, and monitoring for faster, more reliable software delivery.',
    shortDescription: 'Complete DevOps automation and CI/CD pipeline setup',
    category: 'IT',
    icon: '⚙️',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Automated Testing',
      'Container Orchestration',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization',
      '24/7 Support'
    ],
    pricing: {
      basic: 8000,
      pro: 20000,
      enterprise: 60000
    },
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment failures by 90%',
      'Automated infrastructure management',
      'Better monitoring and alerting',
      'Improved team productivity'
    ],
    useCases: [
      'Software Development',
      'Application Deployment',
      'Infrastructure Management',
      'Quality Assurance',
      'Performance Monitoring'
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Prometheus'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/devops-automation-service'
    },
    href: '/devops-automation-service',
    glowColor: 'green'
  },
  {
    id: 'database-optimization-service',
    title: 'Database Optimization Service',
    description: 'Comprehensive database performance optimization service that improves query performance, reduces costs, and ensures high availability for your critical data.',
    shortDescription: 'Database performance optimization and management service',
    category: 'IT',
    icon: '🗄️',
    features: [
      'Performance Analysis',
      'Query Optimization',
      'Index Optimization',
      'Database Tuning',
      'Backup & Recovery Setup',
      'High Availability Configuration',
      'Security Hardening',
      'Monitoring & Alerting'
    ],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Improve query performance by 80%',
      'Reduce database costs by 50%',
      'Better data security',
      'High availability setup',
      'Automated monitoring'
    ],
    useCases: [
      'Database Performance',
      'Data Management',
      'Backup & Recovery',
      'Security Compliance',
      'Scalability Planning'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/database-optimization-service'
    },
    href: '/database-optimization-service',
    glowColor: 'blue'
  },
  {
    id: 'api-development-service',
    title: 'API Development Service',
    description: 'Complete API development and management service that creates secure, scalable, and well-documented APIs for your applications and third-party integrations.',
    shortDescription: 'Custom API development and management service',
    category: 'IT',
    icon: '🔌',
    features: [
      'RESTful API Development',
      'GraphQL API Design',
      'API Documentation',
      'Rate Limiting & Throttling',
      'Authentication & Authorization',
      'API Testing & Validation',
      'Monitoring & Analytics',
      'Version Management'
    ],
    pricing: {
      basic: 5000,
      pro: 12000,
      enterprise: 35000
    },
    benefits: [
      'Secure and scalable APIs',
      'Better third-party integrations',
      'Comprehensive documentation',
      'API monitoring and analytics',
      'Faster development cycles'
    ],
    useCases: [
      'Application Integration',
      'Third-party Services',
      'Mobile App Backend',
      'Microservices Architecture',
      'Data Exchange'
    ],
    technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-development-service'
    },
    href: '/api-development-service',
    glowColor: 'purple'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Complete mobile application development service for iOS and Android platforms with modern technologies, beautiful UI/UX, and robust backend integration.',
    shortDescription: 'Native and cross-platform mobile app development',
    category: 'IT',
    icon: '📱',
    features: [
      'Native iOS & Android Apps',
      'Cross-platform Development',
      'UI/UX Design',
      'Backend Integration',
      'Push Notifications',
      'Offline Functionality',
      'App Store Optimization',
      'Maintenance & Support'
    ],
    pricing: {
      basic: 15000,
      pro: 35000,
      enterprise: 75000
    },
    benefits: [
      'Professional mobile apps',
      'Cross-platform compatibility',
      'Beautiful user interface',
      'Robust backend integration',
      'App store optimization'
    ],
    useCases: [
      'Business Applications',
      'E-commerce Apps',
      'Social Media Apps',
      'Productivity Tools',
      'Gaming Applications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/mobile-app-development'
    },
    href: '/mobile-app-development',
    glowColor: 'pink'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    description: 'Modern web application development service using cutting-edge technologies to create fast, secure, and scalable web applications for businesses.',
    shortDescription: 'Modern web application development with latest technologies',
    category: 'IT',
    icon: '🌐',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'Single Page Applications',
      'Server-side Rendering',
      'API Integration',
      'Database Design',
      'Security Implementation',
      'Performance Optimization'
    ],
    pricing: {
      basic: 8000,
      pro: 20000,
      enterprise: 50000
    },
    benefits: [
      'Modern, responsive web apps',
      'Fast loading times',
      'Mobile-friendly design',
      'SEO optimization',
      'Scalable architecture'
    ],
    useCases: [
      'Business Websites',
      'E-commerce Platforms',
      'Web Applications',
      'Portals & Dashboards',
      'Content Management Systems'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/web-application-development'
    },
    href: '/web-application-development',
    glowColor: 'cyan'
  },
  {
    id: 'cybersecurity-suite-pro',
    title: 'Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution providing advanced threat protection, security monitoring, and compliance management for businesses.',
    shortDescription: 'Complete cybersecurity protection for your business',
    category: 'Cybersecurity',
    icon: '🛡️',
    features: [
      'Advanced Threat Detection',
      '24/7 Security Monitoring',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Training',
      'Compliance Management',
      'Incident Response',
      'Security Analytics'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Protect against 99.9% of threats',
      'Reduce security incidents by 80%',
      'Ensure compliance with regulations',
      '24/7 security monitoring',
      'Expert security team support'
    ],
    useCases: [
      'Threat Protection',
      'Compliance Management',
      'Security Audits',
      'Incident Response',
      'Security Training'
    ],
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'AI/ML'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cybersecurity-suite-pro'
    },
    href: '/cybersecurity-suite-pro',
    glowColor: 'purple'
  },
  {
    id: '5g-network-solutions',
    title: '5G Network Solutions',
    description: 'Complete 5G network implementation and optimization services for businesses looking to leverage next-generation connectivity.',
    shortDescription: 'Next-generation 5G network solutions for businesses',
    category: '5G',
    icon: '📡',
    features: [
      '5G Network Planning',
      'Infrastructure Deployment',
      'Network Optimization',
      'IoT Integration',
      'Edge Computing Setup',
      'Performance Monitoring',
      'Security Implementation',
      '24/7 Support'
    ],
    pricing: {
      basic: 10000,
      pro: 25000,
      enterprise: 75000
    },
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive IoT connectivity',
      'Enhanced mobile experiences',
      'Future-proof infrastructure'
    ],
    useCases: [
      'Smart City Implementation',
      'Industrial IoT',
      'Autonomous Vehicles',
      'Remote Work Solutions',
      'Healthcare Applications'
    ],
    technologies: ['5G NR', 'Edge Computing', 'IoT', 'AI/ML', 'Cloud Computing', 'SDN'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-network-solutions'
    },
    href: '/5g-network-solutions',
    glowColor: 'green'
  },

  // Blockchain Services
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    description: 'Custom blockchain solutions including smart contracts, DeFi applications, NFT platforms, and enterprise blockchain integration.',
    shortDescription: 'Custom blockchain solutions for modern businesses',
    category: 'Blockchain',
    icon: '⛓️',
    features: [
      'Smart Contract Development',
      'DeFi Application Development',
      'NFT Platform Creation',
      'Blockchain Integration',
      'Cryptocurrency Development',
      'Security Audits',
      'Token Economics Design',
      'DApp Development'
    ],
    pricing: {
      basic: 15000,
      pro: 35000,
      enterprise: 75000
    },
    benefits: [
      'Decentralized and secure solutions',
      'Transparent and immutable records',
      'Reduced transaction costs',
      'Global accessibility',
      'Future-proof technology'
    ],
    useCases: [
      'Supply Chain Management',
      'Digital Identity',
      'Financial Services',
      'Gaming & NFTs',
      'Healthcare Records'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'React', 'Node.js'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/blockchain-development'
    },
    href: '/blockchain-development',
    glowColor: 'blue'
  },

  // IoT Services
  {
    id: 'iot-platform-solution',
    title: 'IoT Platform Solution',
    description: 'Complete IoT platform for device management, data collection, real-time monitoring, and analytics for connected devices.',
    shortDescription: 'Comprehensive IoT platform for connected devices',
    category: 'IoT',
    icon: '🌐',
    features: [
      'Device Management',
      'Real-time Data Collection',
      'Data Analytics & Visualization',
      'Remote Monitoring',
      'Alert & Notification System',
      'API Integration',
      'Mobile App Access',
      'Cloud Storage'
    ],
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      'Centralized device management',
      'Real-time insights and monitoring',
      'Scalable IoT infrastructure',
      'Reduced operational costs',
      'Improved efficiency'
    ],
    useCases: [
      'Smart Home Automation',
      'Industrial Monitoring',
      'Asset Tracking',
      'Environmental Monitoring',
      'Healthcare Devices'
    ],
    technologies: ['MQTT', 'CoAP', 'REST APIs', 'React', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/iot-platform-solution'
    },
    href: '/iot-platform-solution',
    glowColor: 'yellow'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};