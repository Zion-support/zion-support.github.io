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
    id: 'ai-powered-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business analytics platform with AI-driven insights, predictive modeling, and automated reporting for data-driven decision making.',
    shortDescription: 'AI-powered analytics dashboard with real-time insights and predictive modeling',
    category: 'SaaS',
    icon: '📊',
    features: [
      'Real-time Data Visualization',
      'AI-Powered Predictive Analytics',
      'Custom Dashboard Builder',
      'Automated Report Generation',
      'Multi-source Data Integration',
      'Mobile-responsive Design',
      'API Integration',
      'Advanced Filtering & Search'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    benefits: [
      '40% faster business insights',
      'Real-time data updates',
      'Custom dashboard creation',
      'Automated reporting saves 20 hours/week',
      'Predictive analytics for better decisions'
    ],
    useCases: [
      'E-commerce Analytics',
      'Marketing Performance Tracking',
      'Financial Reporting',
      'Sales Pipeline Analysis',
      'Customer Behavior Insights'
    ],
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    href: '/ai-analytics-dashboard',
    glowColor: 'purple'
  },
  {
    id: 'ai-content-management-system',
    title: 'AI Content Management System',
    description: 'Intelligent content management platform with AI-powered optimization, SEO tools, automated content generation, and multi-language support.',
    shortDescription: 'AI-powered CMS with automated content generation and SEO optimization',
    category: 'SaaS',
    icon: '✍️',
    features: [
      'AI Content Generation',
      'SEO Optimization Tools',
      'Multi-language Support',
      'Content Scheduling',
      'Performance Analytics',
      'Team Collaboration',
      'Version Control',
      'Automated Publishing'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      '80% time savings on content creation',
      'SEO-optimized content automatically',
      'Multi-language content generation',
      'Consistent brand voice',
      'Automated publishing workflows'
    ],
    useCases: [
      'Blog Management',
      'E-commerce Content',
      'Marketing Campaigns',
      'Documentation Sites',
      'News Portals'
    ],
    technologies: ['Next.js', 'OpenAI GPT-4', 'MongoDB', 'Redis', 'AWS S3', 'CloudFront'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-management'
    },
    href: '/ai-content-management',
    glowColor: 'cyan'
  },
  {
    id: 'ai-customer-support-bot',
    title: 'AI Customer Support Bot',
    description: 'Intelligent customer support automation with natural language processing, sentiment analysis, and 24/7 availability for enhanced customer experience.',
    shortDescription: 'AI-powered customer support bot with NLP and sentiment analysis',
    category: 'SaaS',
    icon: '🤖',
    features: [
      '24/7 AI Chatbot',
      'Sentiment Analysis',
      'Ticket Automation',
      'Knowledge Base Integration',
      'Multi-channel Support',
      'Performance Analytics',
      'Human Handoff',
      'Custom Training'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      '24/7 customer availability',
      '95% customer satisfaction rate',
      'Instant response times',
      'Reduced support costs by 60%',
      'Scalable to unlimited conversations'
    ],
    useCases: [
      'Customer Service',
      'Lead Qualification',
      'FAQ Automation',
      'Order Support',
      'Technical Help'
    ],
    technologies: ['React', 'Node.js', 'OpenAI GPT-4', 'WebSocket', 'MongoDB', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    href: '/ai-customer-support-bot',
    glowColor: 'pink'
  },
  {
    id: 'ai-project-management-suite',
    title: 'AI Project Management Suite',
    description: 'Smart project management platform with AI-powered task optimization, resource allocation, deadline prediction, and risk assessment.',
    shortDescription: 'AI-enhanced project management with predictive analytics and optimization',
    category: 'SaaS',
    icon: '📋',
    features: [
      'AI Task Optimization',
      'Resource Allocation',
      'Deadline Prediction',
      'Team Collaboration',
      'Progress Tracking',
      'Risk Assessment',
      'Time Estimation',
      'Automated Reporting'
    ],
    pricing: {
      basic: 249,
      pro: 599,
      enterprise: 1499
    },
    benefits: [
      '30% efficiency improvement',
      'Predictive project planning',
      'Risk mitigation',
      'Automated resource optimization',
      'Real-time project insights'
    ],
    useCases: [
      'Software Development',
      'Marketing Campaigns',
      'Event Planning',
      'Construction Projects',
      'Consulting Services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Socket.io', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-project-management'
    },
    href: '/ai-project-management',
    glowColor: 'blue'
  },
  {
    id: 'ai-ecommerce-optimizer',
    title: 'AI E-commerce Optimizer',
    description: 'Complete e-commerce optimization platform with AI-powered product recommendations, dynamic pricing, inventory management, and customer segmentation.',
    shortDescription: 'AI-powered e-commerce optimization with recommendations and dynamic pricing',
    category: 'SaaS',
    icon: '🛒',
    features: [
      'AI Product Recommendations',
      'Dynamic Pricing Engine',
      'Inventory Optimization',
      'Customer Segmentation',
      'Sales Forecasting',
      'A/B Testing Tools',
      'Conversion Analytics',
      'Personalization Engine'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2499
    },
    benefits: [
      '25% increase in sales',
      'Optimized pricing strategies',
      'Reduced inventory costs by 30%',
      'Personalized shopping experience',
      'Automated marketing campaigns'
    ],
    useCases: [
      'Online Stores',
      'Marketplace Optimization',
      'Retail Analytics',
      'Subscription Services',
      'B2B E-commerce'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
    },
    href: '/ai-ecommerce-optimizer',
    glowColor: 'green'
  },
  {
    id: 'ai-hr-management-system',
    title: 'AI HR Management System',
    description: 'Intelligent HR management platform with AI-powered recruitment, employee analytics, performance tracking, and retention prediction.',
    shortDescription: 'AI-powered HR management with recruitment and performance analytics',
    category: 'SaaS',
    icon: '👥',
    features: [
      'AI Resume Screening',
      'Employee Analytics',
      'Performance Tracking',
      'Training Recommendations',
      'Retention Prediction',
      'Compliance Monitoring',
      'Payroll Integration',
      'Benefits Management'
    ],
    pricing: {
      basic: 179,
      pro: 449,
      enterprise: 1199
    },
    benefits: [
      '50% faster hiring process',
      'Reduced employee turnover',
      'Better performance insights',
      'Automated compliance',
      'Predictive HR analytics'
    ],
    useCases: [
      'Recruitment',
      'Performance Management',
      'Employee Development',
      'Compliance Tracking',
      'Workforce Planning'
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'OpenAI', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-hr-management'
    },
    href: '/ai-hr-management',
    glowColor: 'yellow'
  },
  {
    id: 'ai-financial-analytics',
    title: 'AI Financial Analytics',
    description: 'Advanced financial analytics platform with AI-powered forecasting, risk assessment, automated reporting, and investment analysis.',
    shortDescription: 'AI-powered financial analytics with forecasting and risk assessment',
    category: 'SaaS',
    icon: '💰',
    features: [
      'Financial Forecasting',
      'Risk Assessment',
      'Automated Reporting',
      'Expense Tracking',
      'Investment Analysis',
      'Compliance Monitoring',
      'Cash Flow Prediction',
      'Portfolio Optimization'
    ],
    pricing: {
      basic: 329,
      pro: 799,
      enterprise: 1999
    },
    benefits: [
      'Accurate financial forecasting',
      'Risk mitigation strategies',
      'Automated compliance reporting',
      'Real-time financial insights',
      'Optimized investment decisions'
    ],
    useCases: [
      'Financial Planning',
      'Investment Analysis',
      'Risk Management',
      'Compliance Reporting',
      'Portfolio Management'
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-financial-analytics'
    },
    href: '/ai-financial-analytics',
    glowColor: 'green'
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    description: 'Comprehensive marketing automation platform with AI-powered campaign optimization, lead scoring, email personalization, and ROI tracking.',
    shortDescription: 'AI-powered marketing automation with campaign optimization and personalization',
    category: 'SaaS',
    icon: '📈',
    features: [
      'AI Campaign Optimization',
      'Lead Scoring',
      'Email Personalization',
      'Social Media Automation',
      'ROI Tracking',
      'A/B Testing',
      'Customer Journey Mapping',
      'Predictive Analytics'
    ],
    pricing: {
      basic: 279,
      pro: 699,
      enterprise: 1799
    },
    benefits: [
      '300% ROI improvement',
      'Personalized campaigns',
      'Automated optimization',
      'Better lead qualification',
      'Comprehensive analytics'
    ],
    useCases: [
      'Email Marketing',
      'Social Media Management',
      'Lead Generation',
      'Customer Retention',
      'Brand Awareness'
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'SendGrid', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    href: '/ai-marketing-automation',
    glowColor: 'pink'
  },
  {
    id: 'ai-inventory-management',
    title: 'AI Inventory Management',
    description: 'Smart inventory management system with AI-powered demand forecasting, automated reordering, optimization, and real-time tracking.',
    shortDescription: 'AI-powered inventory management with demand forecasting and automation',
    category: 'SaaS',
    icon: '📦',
    features: [
      'Demand Forecasting',
      'Automated Reordering',
      'Inventory Optimization',
      'Supplier Management',
      'Cost Analysis',
      'Real-time Tracking',
      'Barcode Scanning',
      'Multi-location Support'
    ],
    pricing: {
      basic: 219,
      pro: 549,
      enterprise: 1399
    },
    benefits: [
      '30% reduction in inventory costs',
      'Zero stockouts',
      'Optimized inventory levels',
      'Automated reordering',
      'Real-time visibility'
    ],
    useCases: [
      'Retail Management',
      'Manufacturing',
      'Supply Chain',
      'Warehousing',
      'Distribution'
    ],
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-inventory-management'
    },
    href: '/ai-inventory-management',
    glowColor: 'yellow'
  },
  {
    id: 'ai-document-processing',
    title: 'AI Document Processing',
    description: 'Intelligent document processing platform with AI-powered OCR, data extraction, workflow automation, and compliance management.',
    shortDescription: 'AI-powered document processing with OCR and workflow automation',
    category: 'SaaS',
    icon: '📄',
    features: [
      'AI OCR Technology',
      'Data Extraction',
      'Workflow Automation',
      'Document Classification',
      'Version Control',
      'Security Compliance',
      'Batch Processing',
      'API Integration'
    ],
    pricing: {
      basic: 159,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      '90% accuracy in data extraction',
      '80% time savings',
      'Automated workflows',
      'Compliance management',
      'Scalable processing'
    ],
    useCases: [
      'Document Management',
      'Data Entry Automation',
      'Compliance Processing',
      'Invoice Processing',
      'Contract Management'
    ],
    technologies: ['React', 'Python', 'OpenCV', 'Tesseract', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-document-processing'
    },
    href: '/ai-document-processing',
    glowColor: 'blue'
  },
  {
    id: 'ai-social-media-manager',
    title: 'AI Social Media Manager',
    description: 'Intelligent social media management platform with AI-powered content creation, optimal posting times, engagement optimization, and analytics.',
    shortDescription: 'AI-powered social media management with content creation and optimization',
    category: 'SaaS',
    icon: '📱',
    features: [
      'AI Content Creation',
      'Optimal Posting Times',
      'Engagement Optimization',
      'Hashtag Suggestions',
      'Performance Analytics',
      'Multi-platform Management',
      'Scheduling Automation',
      'Trend Analysis'
    ],
    pricing: {
      basic: 129,
      pro: 329,
      enterprise: 799
    },
    benefits: [
      '200% engagement increase',
      'Automated posting',
      'Optimized timing',
      'AI-generated content',
      'Comprehensive analytics'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Community Building',
      'Content Strategy',
      'Influencer Marketing'
    ],
    technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'Social APIs', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    href: '/ai-social-media-manager',
    glowColor: 'pink'
  },
  {
    id: 'ai-email-marketing-suite',
    title: 'AI Email Marketing Suite',
    description: 'Advanced email marketing platform with AI-powered personalization, send time optimization, subject line testing, and performance analytics.',
    shortDescription: 'AI-powered email marketing with personalization and optimization',
    category: 'SaaS',
    icon: '📧',
    features: [
      'AI Personalization',
      'Send Time Optimization',
      'Subject Line Testing',
      'Segmentation',
      'Performance Analytics',
      'A/B Testing',
      'Automation Workflows',
      'Deliverability Optimization'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      '40% higher open rates',
      'Personalized content',
      'Optimized timing',
      'Automated campaigns',
      'Better deliverability'
    ],
    useCases: [
      'Email Campaigns',
      'Newsletter Management',
      'Lead Nurturing',
      'Customer Retention',
      'Product Announcements'
    ],
    technologies: ['React', 'Node.js', 'SendGrid', 'MongoDB', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-marketing'
    },
    href: '/ai-email-marketing',
    glowColor: 'cyan'
  },
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
    id: 'devops-automation-platform',
    title: 'DevOps Automation Platform',
    description: 'Comprehensive DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.',
    shortDescription: 'Complete DevOps automation with CI/CD and infrastructure management',
    category: 'IT',
    icon: '⚙️',
    features: [
      'CI/CD Pipeline Automation',
      'Infrastructure as Code',
      'Automated Testing',
      'Deployment Automation',
      'Monitoring & Alerting',
      'Container Orchestration',
      'Security Scanning',
      'Performance Optimization'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    benefits: [
      '90% faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Automated scaling',
      'Comprehensive monitoring'
    ],
    useCases: [
      'Software Development',
      'Microservices Architecture',
      'Cloud Infrastructure',
      'Continuous Integration',
      'Automated Testing'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/devops-automation'
    },
    href: '/devops-automation',
    glowColor: 'blue'
  },
  {
    id: 'api-development-service',
    title: 'API Development Service',
    description: 'Professional API development and management service with RESTful APIs, GraphQL, microservices architecture, and comprehensive documentation.',
    shortDescription: 'Professional API development with microservices and comprehensive documentation',
    category: 'IT',
    icon: '🔌',
    features: [
      'RESTful API Development',
      'GraphQL Implementation',
      'Microservices Architecture',
      'API Documentation',
      'Rate Limiting & Security',
      'API Testing & Validation',
      'Performance Optimization',
      'Version Management'
    ],
    pricing: {
      basic: 3999,
      pro: 9999,
      enterprise: 24999
    },
    benefits: [
      'Scalable API architecture',
      'Comprehensive documentation',
      'High performance APIs',
      'Security best practices',
      'Easy integration'
    ],
    useCases: [
      'Mobile App Backend',
      'Third-party Integrations',
      'Microservices',
      'Data Exchange',
      'System Integration'
    ],
    technologies: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-development'
    },
    href: '/api-development',
    glowColor: 'green'
  },
  {
    id: 'database-optimization-service',
    title: 'Database Optimization Service',
    description: 'Comprehensive database optimization service with performance tuning, query optimization, scaling, and migration services.',
    shortDescription: 'Database optimization with performance tuning and scaling',
    category: 'IT',
    icon: '🗄️',
    features: [
      'Performance Tuning',
      'Query Optimization',
      'Database Scaling',
      'Migration Services',
      'Backup & Recovery',
      'Security Hardening',
      'Monitoring & Alerting',
      'Capacity Planning'
    ],
    pricing: {
      basic: 2499,
      pro: 6999,
      enterprise: 17999
    },
    benefits: [
      '50% performance improvement',
      'Reduced query times',
      'Better scalability',
      'Enhanced security',
      'Automated monitoring'
    ],
    useCases: [
      'Performance Issues',
      'Database Migration',
      'Scaling Requirements',
      'Security Compliance',
      'Backup Strategy'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS RDS', 'Docker'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/database-optimization'
    },
    href: '/database-optimization',
    glowColor: 'yellow'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Professional mobile app development service with native iOS, Android, and cross-platform solutions using React Native and Flutter.',
    shortDescription: 'Professional mobile app development for iOS, Android, and cross-platform',
    category: 'IT',
    icon: '📱',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Performance Optimization'
    ],
    pricing: {
      basic: 9999,
      pro: 24999,
      enterprise: 59999
    },
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'Modern UI/UX design',
      'App store optimization',
      'Scalable architecture'
    ],
    useCases: [
      'Business Applications',
      'E-commerce Apps',
      'Social Media Apps',
      'Productivity Tools',
      'Gaming Applications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
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
    description: 'Professional web application development with modern frameworks, responsive design, and scalable architecture for businesses.',
    shortDescription: 'Professional web application development with modern frameworks',
    category: 'IT',
    icon: '🌐',
    features: [
      'Modern Web Frameworks',
      'Responsive Design',
      'Progressive Web Apps',
      'API Integration',
      'Database Design',
      'Security Implementation',
      'Performance Optimization',
      'SEO Optimization'
    ],
    pricing: {
      basic: 7999,
      pro: 19999,
      enterprise: 49999
    },
    benefits: [
      'Modern web technologies',
      'Responsive design',
      'Fast loading times',
      'SEO optimized',
      'Scalable architecture'
    ],
    useCases: [
      'Business Websites',
      'E-commerce Platforms',
      'Web Applications',
      'Portals & Dashboards',
      'Content Management'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/web-application-development'
    },
    href: '/web-application-development',
    glowColor: 'cyan'
  },
  {
    id: 'system-integration-service',
    title: 'System Integration Service',
    description: 'Comprehensive system integration service connecting different software systems, APIs, and databases for seamless data flow.',
    shortDescription: 'System integration connecting different software and databases',
    category: 'IT',
    icon: '🔗',
    features: [
      'API Integration',
      'Database Integration',
      'Legacy System Integration',
      'Data Synchronization',
      'Real-time Processing',
      'Error Handling',
      'Monitoring & Logging',
      'Documentation'
    ],
    pricing: {
      basic: 5999,
      pro: 14999,
      enterprise: 39999
    },
    benefits: [
      'Seamless data flow',
      'Reduced manual work',
      'Real-time synchronization',
      'Error handling',
      'Comprehensive monitoring'
    ],
    useCases: [
      'ERP Integration',
      'CRM Integration',
      'E-commerce Integration',
      'Payment Processing',
      'Data Migration'
    ],
    technologies: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/system-integration'
    },
    href: '/system-integration',
    glowColor: 'purple'
  },
  {
    id: 'it-consulting-service',
    title: 'IT Consulting Service',
    description: 'Strategic IT consulting service providing technology roadmap, architecture design, and digital transformation guidance.',
    shortDescription: 'Strategic IT consulting with technology roadmap and architecture design',
    category: 'IT',
    icon: '💼',
    features: [
      'Technology Assessment',
      'Architecture Design',
      'Digital Transformation',
      'Technology Roadmap',
      'Cost Optimization',
      'Security Audit',
      'Performance Analysis',
      'Strategic Planning'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 12999
    },
    benefits: [
      'Strategic technology guidance',
      'Cost optimization',
      'Digital transformation',
      'Security improvements',
      'Performance enhancement'
    ],
    useCases: [
      'Technology Strategy',
      'Digital Transformation',
      'Architecture Review',
      'Cost Optimization',
      'Security Assessment'
    ],
    technologies: ['Cloud Computing', 'Microservices', 'AI/ML', 'DevOps', 'Security', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-consulting'
    },
    href: '/it-consulting',
    glowColor: 'blue'
  },
  {
    id: 'data-engineering-service',
    title: 'Data Engineering Service',
    description: 'Comprehensive data engineering service with ETL pipelines, data warehousing, analytics infrastructure, and real-time processing.',
    shortDescription: 'Data engineering with ETL pipelines and analytics infrastructure',
    category: 'IT',
    icon: '📊',
    features: [
      'ETL Pipeline Development',
      'Data Warehousing',
      'Real-time Processing',
      'Data Lake Architecture',
      'Analytics Infrastructure',
      'Data Quality Management',
      'Monitoring & Alerting',
      'Documentation'
    ],
    pricing: {
      basic: 8999,
      pro: 22999,
      enterprise: 54999
    },
    benefits: [
      'Scalable data infrastructure',
      'Real-time data processing',
      'Data quality assurance',
      'Analytics ready data',
      'Comprehensive monitoring'
    ],
    useCases: [
      'Business Intelligence',
      'Data Analytics',
      'Machine Learning',
      'Reporting Systems',
      'Data Migration'
    ],
    technologies: ['Python', 'Apache Spark', 'Kafka', 'PostgreSQL', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/data-engineering'
    },
    href: '/data-engineering',
    glowColor: 'green'
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