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
    id: 'ai-voice-assistant-pro',
    title: 'AI Voice Assistant Pro',
    description: 'Advanced voice AI assistant with natural conversation capabilities, multi-language support, and seamless integration with business systems.',
    shortDescription: 'Intelligent voice assistant for business automation',
    category: 'AI',
    icon: '🎤',
    features: [
      'Natural Voice Recognition',
      'Multi-language Support',
      'Context-Aware Conversations',
      'Voice Command Processing',
      'Integration with Business Systems',
      'Real-time Transcription',
      'Custom Voice Training',
      'Analytics & Insights'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2999
    },
    benefits: [
      'Hands-free business operations',
      'Multi-language accessibility',
      'Seamless system integration',
      'Real-time processing',
      'Custom voice training'
    ],
    useCases: [
      'Customer Service',
      'Meeting Transcription',
      'Voice Commands',
      'Accessibility Solutions',
      'Smart Office Automation'
    ],
    technologies: ['OpenAI Whisper', 'Google Speech API', 'Python', 'WebRTC', 'React', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-voice-assistant-pro'
    },
    href: '/ai-voice-assistant-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance',
    description: 'Intelligent predictive maintenance system using AI to predict equipment failures, optimize maintenance schedules, and reduce downtime.',
    shortDescription: 'AI-powered predictive maintenance for equipment optimization',
    category: 'AI',
    icon: '🔧',
    features: [
      'Equipment Failure Prediction',
      'Maintenance Schedule Optimization',
      'Real-time Monitoring',
      'Anomaly Detection',
      'Cost Optimization',
      'Predictive Analytics',
      'Alert System',
      'Performance Reports'
    ],
    pricing: {
      basic: 599,
      pro: 1499,
      enterprise: 3999
    },
    benefits: [
      'Reduce downtime by 70%',
      'Optimize maintenance costs by 40%',
      'Predict failures before they happen',
      'Real-time monitoring',
      'Automated scheduling'
    ],
    useCases: [
      'Manufacturing Equipment',
      'HVAC Systems',
      'Industrial Machinery',
      'Fleet Management',
      'Building Maintenance'
    ],
    technologies: ['TensorFlow', 'Python', 'IoT Sensors', 'Time Series Analysis', 'React', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-predictive-maintenance'
    },
    href: '/ai-predictive-maintenance',
    glowColor: 'green'
  },
  {
    id: 'ai-image-recognition-pro',
    title: 'AI Image Recognition Pro',
    description: 'Advanced computer vision solution with object detection, facial recognition, OCR, and custom image classification for business applications.',
    shortDescription: 'Advanced computer vision for business image processing',
    category: 'AI',
    icon: '👁️',
    features: [
      'Object Detection & Classification',
      'Facial Recognition',
      'OCR & Text Extraction',
      'Custom Model Training',
      'Real-time Processing',
      'Batch Processing',
      'API Integration',
      'Analytics Dashboard'
    ],
    pricing: {
      basic: 299,
      pro: 799,
      enterprise: 1999
    },
    benefits: [
      '99.5% accuracy in image recognition',
      'Real-time processing capabilities',
      'Custom model training',
      'Multi-format support',
      'Scalable architecture'
    ],
    useCases: [
      'Quality Control',
      'Security Monitoring',
      'Document Processing',
      'Medical Imaging',
      'Retail Analytics'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'Python', 'React', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-image-recognition-pro'
    },
    href: '/ai-image-recognition-pro',
    glowColor: 'blue'
  },
  {
    id: 'ai-personalization-engine',
    title: 'AI Personalization Engine',
    description: 'Intelligent personalization platform that creates customized experiences for users based on behavior, preferences, and real-time data.',
    shortDescription: 'AI-powered personalization for enhanced user experiences',
    category: 'AI',
    icon: '🎯',
    features: [
      'Behavioral Analysis',
      'Preference Learning',
      'Real-time Personalization',
      'A/B Testing',
      'Recommendation Engine',
      'Content Optimization',
      'User Segmentation',
      'Performance Analytics'
    ],
    pricing: {
      basic: 499,
      pro: 1299,
      enterprise: 2999
    },
    benefits: [
      'Increase engagement by 300%',
      'Boost conversion rates by 45%',
      'Real-time personalization',
      'Automated optimization',
      'Comprehensive analytics'
    ],
    useCases: [
      'E-commerce Personalization',
      'Content Platforms',
      'Marketing Campaigns',
      'Mobile Apps',
      'Web Applications'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'React', 'Node.js', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-personalization-engine'
    },
    href: '/ai-personalization-engine',
    glowColor: 'pink'
  },
  {
    id: 'ai-risk-assessment',
    title: 'AI Risk Assessment',
    description: 'Advanced AI-powered risk assessment platform that analyzes financial, operational, and compliance risks with predictive modeling.',
    shortDescription: 'AI-driven risk assessment and management platform',
    category: 'AI',
    icon: '⚠️',
    features: [
      'Financial Risk Analysis',
      'Operational Risk Assessment',
      'Compliance Monitoring',
      'Predictive Risk Modeling',
      'Real-time Alerts',
      'Risk Scoring',
      'Compliance Reporting',
      'Custom Risk Models'
    ],
    pricing: {
      basic: 799,
      pro: 1999,
      enterprise: 4999
    },
    benefits: [
      'Reduce risk exposure by 60%',
      'Predict risks before they occur',
      'Automated compliance monitoring',
      'Real-time risk scoring',
      'Comprehensive reporting'
    ],
    useCases: [
      'Financial Services',
      'Insurance',
      'Compliance Management',
      'Investment Analysis',
      'Operational Risk'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-risk-assessment'
    },
    href: '/ai-risk-assessment',
    glowColor: 'red'
  },
  {
    id: 'ai-supply-chain-optimizer',
    title: 'AI Supply Chain Optimizer',
    description: 'Intelligent supply chain optimization using AI to predict demand, optimize inventory, and streamline logistics operations.',
    shortDescription: 'AI-powered supply chain optimization and management',
    category: 'AI',
    icon: '🚚',
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Route Optimization',
      'Supplier Performance Analysis',
      'Risk Assessment',
      'Cost Optimization',
      'Real-time Tracking',
      'Predictive Analytics'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Reduce supply chain costs by 35%',
      'Improve delivery times by 50%',
      'Optimize inventory levels',
      'Predict supply disruptions',
      'Real-time optimization'
    ],
    useCases: [
      'Logistics Management',
      'Inventory Optimization',
      'Demand Planning',
      'Supplier Management',
      'Cost Reduction'
    ],
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'React', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-supply-chain-optimizer'
    },
    href: '/ai-supply-chain-optimizer',
    glowColor: 'yellow'
  },
  {
    id: 'ai-customer-churn-predictor',
    title: 'AI Customer Churn Predictor',
    description: 'Advanced AI system that predicts customer churn and provides actionable insights to improve customer retention and loyalty.',
    shortDescription: 'AI-powered customer churn prediction and prevention',
    category: 'AI',
    icon: '📉',
    features: [
      'Churn Prediction Models',
      'Customer Segmentation',
      'Retention Strategies',
      'Behavioral Analysis',
      'Early Warning System',
      'Retention Campaigns',
      'Performance Tracking',
      'ROI Analysis'
    ],
    pricing: {
      basic: 399,
      pro: 999,
      enterprise: 2499
    },
    benefits: [
      'Reduce churn by 40%',
      'Increase customer lifetime value by 60%',
      'Predict churn before it happens',
      'Automated retention campaigns',
      'Data-driven insights'
    ],
    useCases: [
      'Customer Retention',
      'Subscription Services',
      'E-commerce',
      'SaaS Platforms',
      'Customer Success'
    ],
    technologies: ['Machine Learning', 'Python', 'Scikit-learn', 'React', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-churn-predictor'
    },
    href: '/ai-customer-churn-predictor',
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
    id: 'ai-powered-crm-saas',
    title: 'AI-Powered CRM SaaS',
    description: 'Next-generation CRM with AI-driven lead scoring, automated follow-ups, predictive analytics, and intelligent customer insights.',
    shortDescription: 'AI-enhanced CRM that transforms customer relationships',
    category: 'SaaS',
    icon: '🤖',
    features: [
      'AI Lead Scoring & Qualification',
      'Automated Follow-up Sequences',
      'Predictive Customer Analytics',
      'Smart Email Templates',
      'Real-time Sales Forecasting',
      'Customer Sentiment Analysis',
      'Integration with 200+ tools',
      'Mobile-First Design'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      'Increase sales conversion by 45%',
      'Reduce manual work by 60%',
      'AI-powered insights',
      'Automated lead nurturing',
      'Real-time performance tracking'
    ],
    useCases: [
      'Sales Team Management',
      'Lead Generation',
      'Customer Retention',
      'Marketing Automation',
      'Account Management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI GPT-4', 'Stripe', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-powered-crm-saas'
    },
    href: '/ai-powered-crm-saas',
    glowColor: 'purple'
  },
  {
    id: 'smart-inventory-optimizer',
    title: 'Smart Inventory Optimizer',
    description: 'AI-powered inventory management with demand forecasting, automated reordering, waste reduction, and real-time analytics.',
    shortDescription: 'Intelligent inventory management with AI optimization',
    category: 'SaaS',
    icon: '📦',
    features: [
      'AI Demand Forecasting',
      'Automated Reorder Points',
      'Waste Reduction Analytics',
      'Multi-location Management',
      'Supplier Performance Tracking',
      'Cost Optimization',
      'Barcode & QR Scanning',
      'Real-time Alerts'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Reduce inventory costs by 35%',
      'Eliminate stockouts by 90%',
      'AI-powered optimization',
      'Real-time visibility',
      'Automated decision making'
    ],
    useCases: [
      'Retail Management',
      'E-commerce Operations',
      'Manufacturing',
      'Warehouse Management',
      'Supply Chain Optimization'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/smart-inventory-optimizer'
    },
    href: '/smart-inventory-optimizer',
    glowColor: 'green'
  },
  {
    id: 'ai-social-media-scheduler',
    title: 'AI Social Media Scheduler',
    description: 'Intelligent social media management with AI content creation, optimal posting times, engagement prediction, and performance analytics.',
    shortDescription: 'AI-powered social media automation and optimization',
    category: 'SaaS',
    icon: '📱',
    features: [
      'AI Content Generation',
      'Optimal Posting Times',
      'Engagement Prediction',
      'Hashtag Optimization',
      'Multi-platform Management',
      'Performance Analytics',
      'Brand Voice Consistency',
      'Competitor Analysis'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      'Increase engagement by 200%',
      'Save 80% of content creation time',
      'AI-optimized posting',
      'Consistent brand voice',
      'Data-driven insights'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Content Creation',
      'Community Building',
      'Influencer Marketing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Social APIs', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-social-media-scheduler'
    },
    href: '/ai-social-media-scheduler',
    glowColor: 'pink'
  },
  {
    id: 'smart-email-marketing-suite',
    title: 'Smart Email Marketing Suite',
    description: 'AI-powered email marketing with personalization, send time optimization, A/B testing, and advanced analytics for maximum ROI.',
    shortDescription: 'Intelligent email marketing with AI optimization',
    category: 'SaaS',
    icon: '📧',
    features: [
      'AI Personalization Engine',
      'Send Time Optimization',
      'Subject Line Testing',
      'Advanced Segmentation',
      'Behavioral Triggers',
      'Performance Analytics',
      'Template Library',
      'Compliance Management'
    ],
    pricing: {
      basic: 79,
      pro: 199,
      enterprise: 499
    },
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'AI-powered personalization',
      'Automated optimization',
      'Comprehensive analytics'
    ],
    useCases: [
      'Email Campaigns',
      'Newsletter Management',
      'Lead Nurturing',
      'Customer Retention',
      'Product Launches'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'AI/ML', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/smart-email-marketing-suite'
    },
    href: '/smart-email-marketing-suite',
    glowColor: 'cyan'
  },
  {
    id: 'ai-expense-tracker',
    title: 'AI Expense Tracker',
    description: 'Intelligent expense management with receipt scanning, categorization, compliance monitoring, and automated reporting.',
    shortDescription: 'Smart expense tracking with AI automation',
    category: 'SaaS',
    icon: '💰',
    features: [
      'Receipt Scanning & OCR',
      'AI Categorization',
      'Compliance Monitoring',
      'Automated Reporting',
      'Expense Approval Workflows',
      'Budget Tracking',
      'Tax Preparation',
      'Mobile App'
    ],
    pricing: {
      basic: 49,
      pro: 129,
      enterprise: 299
    },
    benefits: [
      'Save 90% of expense processing time',
      'Reduce errors by 95%',
      'Automated compliance',
      'Real-time tracking',
      'Seamless integration'
    ],
    useCases: [
      'Business Expense Management',
      'Travel Expense Tracking',
      'Tax Preparation',
      'Budget Management',
      'Compliance Reporting'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'OCR API', 'AI/ML', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-expense-tracker'
    },
    href: '/ai-expense-tracker',
    glowColor: 'yellow'
  },
  {
    id: 'smart-hr-management',
    title: 'Smart HR Management',
    description: 'AI-powered HR platform with resume screening, employee analytics, performance tracking, and automated workflows.',
    shortDescription: 'Intelligent HR management with AI automation',
    category: 'SaaS',
    icon: '👥',
    features: [
      'AI Resume Screening',
      'Employee Analytics',
      'Performance Tracking',
      'Automated Onboarding',
      'Leave Management',
      'Payroll Integration',
      'Compliance Monitoring',
      'Employee Self-Service'
    ],
    pricing: {
      basic: 199,
      pro: 499,
      enterprise: 1299
    },
    benefits: [
      'Reduce hiring time by 50%',
      'Improve employee retention by 30%',
      'AI-powered insights',
      'Automated workflows',
      'Comprehensive analytics'
    ],
    useCases: [
      'Recruitment & Hiring',
      'Performance Management',
      'Employee Development',
      'Compliance Management',
      'Workforce Analytics'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Payroll APIs', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/smart-hr-management'
    },
    href: '/smart-hr-management',
    glowColor: 'blue'
  },
  {
    id: 'ai-customer-feedback-analyzer',
    title: 'AI Customer Feedback Analyzer',
    description: 'Advanced feedback analysis platform with sentiment analysis, trend identification, and actionable insights for customer experience improvement.',
    shortDescription: 'AI-powered customer feedback analysis and insights',
    category: 'SaaS',
    icon: '💬',
    features: [
      'Sentiment Analysis',
      'Trend Identification',
      'Topic Modeling',
      'Competitor Analysis',
      'Real-time Monitoring',
      'Custom Dashboards',
      'Alert System',
      'API Integration'
    ],
    pricing: {
      basic: 149,
      pro: 399,
      enterprise: 999
    },
    benefits: [
      'Process 10,000+ feedback items daily',
      'Identify trends in real-time',
      'Improve customer satisfaction by 25%',
      'Automated insights',
      'Competitive intelligence'
    ],
    useCases: [
      'Customer Experience Management',
      'Product Development',
      'Market Research',
      'Brand Monitoring',
      'Competitive Analysis'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'NLP', 'AI/ML', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-feedback-analyzer'
    },
    href: '/ai-customer-feedback-analyzer',
    glowColor: 'purple'
  },
  {
    id: 'smart-document-manager',
    title: 'Smart Document Manager',
    description: 'AI-powered document management with OCR, intelligent categorization, version control, and automated workflows.',
    shortDescription: 'Intelligent document management with AI automation',
    category: 'SaaS',
    icon: '📄',
    features: [
      'AI Document Classification',
      'OCR & Text Extraction',
      'Version Control',
      'Automated Workflows',
      'Search & Discovery',
      'Compliance Management',
      'Digital Signatures',
      'Integration APIs'
    ],
    pricing: {
      basic: 99,
      pro: 249,
      enterprise: 599
    },
    benefits: [
      'Reduce document processing time by 85%',
      'Improve search accuracy by 90%',
      'Automated categorization',
      'Version control',
      'Compliance automation'
    ],
    useCases: [
      'Document Management',
      'Contract Management',
      'Compliance Processing',
      'Knowledge Management',
      'Workflow Automation'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'OCR', 'AI/ML', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/smart-document-manager'
    },
    href: '/smart-document-manager',
    glowColor: 'green'
  },
  {
    id: 'ai-project-management-saas',
    title: 'AI Project Management SaaS',
    description: 'Intelligent project management with AI task optimization, resource allocation, risk prediction, and automated reporting.',
    shortDescription: 'AI-enhanced project management for optimal efficiency',
    category: 'SaaS',
    icon: '📋',
    features: [
      'AI Task Optimization',
      'Resource Allocation',
      'Risk Prediction',
      'Automated Reporting',
      'Team Collaboration',
      'Time Tracking',
      'Budget Management',
      'Integration Hub'
    ],
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799
    },
    benefits: [
      'Increase project success rate by 40%',
      'Reduce project delays by 60%',
      'AI-powered optimization',
      'Automated insights',
      'Real-time monitoring'
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
      website: 'https://ziontechgroup.com/ai-project-management-saas'
    },
    href: '/ai-project-management-saas',
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
    id: 'devops-automation-suite',
    title: 'DevOps Automation Suite',
    description: 'Comprehensive DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring, and deployment automation.',
    shortDescription: 'Complete DevOps automation and deployment solution',
    category: 'IT',
    icon: '⚙️',
    features: [
      'CI/CD Pipeline Automation',
      'Infrastructure as Code',
      'Container Orchestration',
      'Automated Testing',
      'Deployment Automation',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 12999
    },
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality by 60%',
      'Automated testing and deployment',
      'Infrastructure automation',
      '24/7 monitoring'
    ],
    useCases: [
      'Software Development',
      'Application Deployment',
      'Infrastructure Management',
      'Quality Assurance',
      'Release Management'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/devops-automation-suite'
    },
    href: '/devops-automation-suite',
    glowColor: 'blue'
  },
  {
    id: 'api-management-platform',
    title: 'API Management Platform',
    description: 'Enterprise-grade API management solution with gateway, security, analytics, and developer portal for comprehensive API lifecycle management.',
    shortDescription: 'Complete API management and security platform',
    category: 'IT',
    icon: '🔗',
    features: [
      'API Gateway Management',
      'Security & Authentication',
      'Rate Limiting & Throttling',
      'API Analytics & Monitoring',
      'Developer Portal',
      'API Documentation',
      'Version Management',
      'Integration Hub'
    ],
    pricing: {
      basic: 999,
      pro: 2499,
      enterprise: 5999
    },
    benefits: [
      'Centralized API management',
      'Enhanced security and compliance',
      'Developer-friendly portal',
      'Comprehensive analytics',
      'Scalable architecture'
    ],
    useCases: [
      'API Gateway',
      'Microservices Architecture',
      'Third-party Integrations',
      'Developer Ecosystem',
      'API Monetization'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/api-management-platform'
    },
    href: '/api-management-platform',
    glowColor: 'green'
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture',
    description: 'Modern microservices architecture design and implementation with service mesh, containerization, and distributed system management.',
    shortDescription: 'Scalable microservices architecture for modern applications',
    category: 'IT',
    icon: '🏗️',
    features: [
      'Service Design & Architecture',
      'Container Orchestration',
      'Service Mesh Implementation',
      'API Gateway Integration',
      'Distributed Database Design',
      'Monitoring & Observability',
      'Security Implementation',
      'Performance Optimization'
    ],
    pricing: {
      basic: 15000,
      pro: 35000,
      enterprise: 75000
    },
    benefits: [
      'Improved scalability and flexibility',
      'Faster development cycles',
      'Better fault isolation',
      'Technology diversity',
      'Easier maintenance'
    ],
    useCases: [
      'Legacy System Modernization',
      'Scalable Application Development',
      'Cloud-native Applications',
      'Distributed Systems',
      'High-performance Applications'
    ],
    technologies: ['Docker', 'Kubernetes', 'Istio', 'gRPC', 'React', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/microservices-architecture'
    },
    href: '/microservices-architecture',
    glowColor: 'purple'
  },
  {
    id: 'data-warehouse-solution',
    title: 'Data Warehouse Solution',
    description: 'Enterprise data warehouse design and implementation with ETL processes, data modeling, and business intelligence integration.',
    shortDescription: 'Comprehensive data warehouse and analytics solution',
    category: 'IT',
    icon: '📊',
    features: [
      'Data Warehouse Design',
      'ETL/ELT Processes',
      'Data Modeling',
      'Business Intelligence Integration',
      'Data Quality Management',
      'Performance Optimization',
      'Security & Compliance',
      'Real-time Analytics'
    ],
    pricing: {
      basic: 25000,
      pro: 50000,
      enterprise: 100000
    },
    benefits: [
      'Centralized data management',
      'Improved data quality',
      'Faster analytics and reporting',
      'Better business insights',
      'Scalable architecture'
    ],
    useCases: [
      'Business Intelligence',
      'Data Analytics',
      'Reporting Systems',
      'Data Integration',
      'Compliance Reporting'
    ],
    technologies: ['Snowflake', 'AWS Redshift', 'Apache Airflow', 'dbt', 'React', 'PostgreSQL'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/data-warehouse-solution'
    },
    href: '/data-warehouse-solution',
    glowColor: 'cyan'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Custom mobile application development for iOS and Android with native and cross-platform solutions, including backend integration.',
    shortDescription: 'Professional mobile app development for all platforms',
    category: 'IT',
    icon: '📱',
    features: [
      'Native iOS & Android Development',
      'Cross-platform Solutions',
      'Backend API Integration',
      'Push Notifications',
      'Offline Capabilities',
      'Security Implementation',
      'Performance Optimization',
      'App Store Deployment'
    ],
    pricing: {
      basic: 15000,
      pro: 35000,
      enterprise: 75000
    },
    benefits: [
      'Native performance and user experience',
      'Cross-platform compatibility',
      'Secure and scalable architecture',
      'Professional design and UX',
      'Ongoing support and maintenance'
    ],
    useCases: [
      'Business Applications',
      'E-commerce Apps',
      'Customer Portals',
      'Internal Tools',
      'Consumer Applications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'MongoDB'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/mobile-app-development'
    },
    href: '/mobile-app-development',
    glowColor: 'pink'
  },
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