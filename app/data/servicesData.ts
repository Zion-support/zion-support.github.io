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
    id: 'ai-machine-learning-models',
    title: 'AI Machine Learning Models',
    description: 'Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing capabilities.',
    shortDescription: 'Custom ML models for predictive analytics and automation',
    category: 'AI',
    icon: '🧠',
    features: [
      'Custom Algorithm Development',
      'Real-time Model Training',
      'A/B Testing Framework',
      'Model Performance Monitoring',
      'Automated Retraining',
      'Edge Deployment',
      'Multi-cloud Support',
      'API Integration'
    ],
    pricing: {
      basic: 3500,
      pro: 7500,
      enterprise: 15000
    },
    benefits: [
      '95% accuracy in predictions',
      'Real-time processing capabilities',
      'Custom algorithms for your data',
      'Scalable to any data size',
      'Continuous learning and improvement'
    ],
    useCases: [
      'Predictive Analytics',
      'Recommendation Engines',
      'Fraud Detection',
      'Demand Forecasting',
      'Quality Control'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker', 'Kubernetes'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-machine-learning-models'
    },
    href: '/ai-machine-learning-models',
    glowColor: 'cyan'
  },
  {
    id: 'ai-computer-vision',
    title: 'AI Computer Vision Solutions',
    description: 'Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analytics.',
    shortDescription: 'AI-powered computer vision for visual data analysis',
    category: 'AI',
    icon: '👁️',
    features: [
      'Object Detection & Recognition',
      'Facial Recognition System',
      'OCR Technology',
      'Video Analysis',
      'Quality Inspection',
      'Real-time Processing',
      'Multi-format Support',
      'Custom Model Training'
    ],
    pricing: {
      basic: 2800,
      pro: 5500,
      enterprise: 12000
    },
    benefits: [
      '99.5% accuracy in image recognition',
      'Real-time processing capabilities',
      'Multi-format image support',
      'Custom model training',
      'Scalable visual analytics'
    ],
    useCases: [
      'Quality Control',
      'Security Monitoring',
      'Medical Imaging',
      'Retail Analytics',
      'Autonomous Vehicles'
    ],
    technologies: ['OpenCV', 'YOLO', 'ResNet', 'Python', 'TensorFlow', 'CUDA'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-computer-vision'
    },
    href: '/ai-computer-vision',
    glowColor: 'green'
  },
  {
    id: 'ai-natural-language-processing',
    title: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
    shortDescription: 'NLP solutions for text understanding and generation',
    category: 'AI',
    icon: '💬',
    features: [
      'Sentiment Analysis',
      'Text Classification',
      'Language Translation',
      'Named Entity Recognition',
      'Text Summarization',
      'Conversational AI',
      'Multi-language Support',
      'Real-time Processing'
    ],
    pricing: {
      basic: 2200,
      pro: 4500,
      enterprise: 9000
    },
    benefits: [
      'Multi-language support (100+ languages)',
      'Real-time text analysis',
      'High accuracy in understanding',
      'Custom model training',
      'Scalable processing'
    ],
    useCases: [
      'Customer Feedback Analysis',
      'Content Moderation',
      'Chatbots',
      'Document Processing',
      'Market Research'
    ],
    technologies: ['BERT', 'GPT-4', 'spaCy', 'NLTK', 'Python', 'Transformers'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-natural-language-processing'
    },
    href: '/ai-natural-language-processing',
    glowColor: 'blue'
  },
  {
    id: 'ai-predictive-analytics',
    title: 'AI Predictive Analytics',
    description: 'Advanced predictive analytics using AI to forecast trends, customer behavior, and business outcomes.',
    shortDescription: 'AI-powered forecasting and trend analysis',
    category: 'AI',
    icon: '📈',
    features: [
      'Demand Forecasting',
      'Customer Churn Prediction',
      'Sales Forecasting',
      'Risk Assessment',
      'Market Trend Analysis',
      'Anomaly Detection',
      'Real-time Insights',
      'Automated Alerts'
    ],
    pricing: {
      basic: 2500,
      pro: 5000,
      enterprise: 10000
    },
    benefits: [
      '90% forecast accuracy',
      'Real-time insights and alerts',
      'Automated trend detection',
      'Custom forecasting models',
      'Data-driven decision making'
    ],
    useCases: [
      'Sales Forecasting',
      'Inventory Management',
      'Risk Management',
      'Customer Analytics',
      'Financial Planning'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Prophet', 'XGBoost', 'Apache Spark'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-predictive-analytics'
    },
    href: '/ai-predictive-analytics',
    glowColor: 'yellow'
  },
  {
    id: 'ai-voice-recognition',
    title: 'AI Voice Recognition',
    description: 'Advanced voice recognition and speech processing solutions for voice commands and transcription.',
    shortDescription: 'AI-powered voice recognition and speech processing',
    category: 'AI',
    icon: '🎤',
    features: [
      'Speech-to-Text Conversion',
      'Voice Commands',
      'Multi-language Support',
      'Noise Cancellation',
      'Speaker Identification',
      'Real-time Processing',
      'Custom Voice Training',
      'API Integration'
    ],
    pricing: {
      basic: 1500,
      pro: 3000,
      enterprise: 6000
    },
    benefits: [
      '95% accuracy in speech recognition',
      'Multi-language support',
      'Real-time processing',
      'Custom voice training',
      'Noise cancellation'
    ],
    useCases: [
      'Voice Assistants',
      'Transcription Services',
      'Accessibility',
      'Call Centers',
      'Smart Home'
    ],
    technologies: ['DeepSpeech', 'Wav2Vec2', 'Whisper', 'Python', 'TensorFlow', 'PyTorch'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-voice-recognition'
    },
    href: '/ai-voice-recognition',
    glowColor: 'pink'
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
    id: 'ai-analytics-dashboard-pro',
    title: 'AI Analytics Dashboard Pro',
    description: 'Real-time business analytics with AI-driven insights, predictive modeling, and automated reporting for data-driven decision making.',
    shortDescription: 'AI-powered analytics dashboard with real-time insights',
    category: 'SaaS',
    icon: '📊',
    features: [
      'Real-time Data Visualization',
      'AI-powered Insights',
      'Custom Dashboard Creation',
      'Automated Reporting',
      'Multi-source Data Integration',
      'Mobile-responsive Design',
      'Predictive Analytics',
      'Custom Alerts & Notifications'
    ],
    pricing: {
      basic: 299,
      pro: 599,
      enterprise: 1299
    },
    benefits: [
      '40% faster insights delivery',
      'Real-time data updates',
      'Custom dashboards for each user',
      'Automated report generation',
      'Predictive analytics capabilities'
    ],
    useCases: [
      'E-commerce Analytics',
      'Marketing Performance',
      'Financial Reporting',
      'Sales Analytics',
      'Operations Monitoring'
    ],
    technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-analytics-dashboard-pro'
    },
    href: '/ai-analytics-dashboard-pro',
    glowColor: 'cyan'
  },
  {
    id: 'ai-content-management-system',
    title: 'AI Content Management System',
    description: 'Intelligent content management with AI-powered optimization, SEO tools, automated content generation, and multi-language support.',
    shortDescription: 'AI-powered CMS with automated content optimization',
    category: 'SaaS',
    icon: '📝',
    features: [
      'AI Content Generation',
      'SEO Optimization',
      'Multi-language Support',
      'Content Scheduling',
      'Performance Analytics',
      'Team Collaboration Tools',
      'Version Control',
      'Automated Publishing'
    ],
    pricing: {
      basic: 199,
      pro: 399,
      enterprise: 899
    },
    benefits: [
      '80% time savings in content creation',
      'SEO optimized content',
      'Multi-language support',
      'Automated content scheduling',
      'Performance tracking'
    ],
    useCases: [
      'Blog Management',
      'E-commerce Content',
      'Marketing Campaigns',
      'Documentation',
      'News Publishing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Next.js', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-management-system'
    },
    href: '/ai-content-management-system',
    glowColor: 'green'
  },
  {
    id: 'ai-customer-support-bot',
    title: 'AI Customer Support Bot',
    description: 'Intelligent customer support automation with natural language processing, sentiment analysis, and 24/7 availability.',
    shortDescription: 'AI-powered customer support with 24/7 availability',
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
      pro: 299,
      enterprise: 699
    },
    benefits: [
      '24/7 availability',
      'Instant responses',
      '95% customer satisfaction',
      'Reduced support costs',
      'Scalable support'
    ],
    useCases: [
      'Customer Service',
      'Lead Qualification',
      'FAQ Automation',
      'Order Support',
      'Technical Support'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'WebSocket', 'MongoDB', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    href: '/ai-customer-support-bot',
    glowColor: 'purple'
  },
  {
    id: 'ai-project-management-suite',
    title: 'AI Project Management Suite',
    description: 'Smart project management with AI-powered task optimization, resource allocation, deadline prediction, and risk assessment.',
    shortDescription: 'AI-enhanced project management with predictive capabilities',
    category: 'SaaS',
    icon: '📋',
    features: [
      'AI Task Optimization',
      'Resource Allocation',
      'Deadline Prediction',
      'Team Collaboration',
      'Progress Tracking',
      'Risk Assessment',
      'Automated Scheduling',
      'Performance Analytics'
    ],
    pricing: {
      basic: 249,
      pro: 499,
      enterprise: 999
    },
    benefits: [
      '30% efficiency gain',
      'Predictive planning',
      'Risk mitigation',
      'Automated resource allocation',
      'Better project outcomes'
    ],
    useCases: [
      'Software Development',
      'Marketing Campaigns',
      'Event Planning',
      'Construction Projects',
      'Consulting Services'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Python', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-project-management-suite'
    },
    href: '/ai-project-management-suite',
    glowColor: 'blue'
  },
  {
    id: 'ai-ecommerce-optimizer',
    title: 'AI E-commerce Optimizer',
    description: 'Complete e-commerce optimization with AI-powered product recommendations, dynamic pricing, inventory management, and sales forecasting.',
    shortDescription: 'AI-powered e-commerce optimization and analytics',
    category: 'SaaS',
    icon: '🛒',
    features: [
      'AI Product Recommendations',
      'Dynamic Pricing',
      'Inventory Optimization',
      'Customer Segmentation',
      'Sales Forecasting',
      'A/B Testing Tools',
      'Conversion Optimization',
      'Real-time Analytics'
    ],
    pricing: {
      basic: 399,
      pro: 799,
      enterprise: 1599
    },
    benefits: [
      '25% sales increase',
      'Optimized pricing strategies',
      'Reduced inventory costs',
      'Better customer targeting',
      'Automated optimization'
    ],
    useCases: [
      'Online Stores',
      'Marketplace Optimization',
      'Retail Analytics',
      'Product Recommendations',
      'Pricing Strategy'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
    },
    href: '/ai-ecommerce-optimizer',
    glowColor: 'yellow'
  },
  {
    id: 'ai-hr-management-system',
    title: 'AI HR Management System',
    description: 'Intelligent HR management with AI-powered recruitment, employee analytics, performance optimization, and retention prediction.',
    shortDescription: 'AI-powered HR management with recruitment automation',
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
      pro: 359,
      enterprise: 799
    },
    benefits: [
      '50% faster hiring process',
      'Reduced employee turnover',
      'Better performance tracking',
      'Automated compliance',
      'Data-driven HR decisions'
    ],
    useCases: [
      'Recruitment',
      'Performance Management',
      'Employee Development',
      'Compliance',
      'Workforce Analytics'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Scikit-learn', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-hr-management-system'
    },
    href: '/ai-hr-management-system',
    glowColor: 'pink'
  },
  {
    id: 'ai-financial-analytics',
    title: 'AI Financial Analytics',
    description: 'Advanced financial analytics with AI-powered forecasting, risk assessment, automated reporting, and investment analysis.',
    shortDescription: 'AI-powered financial analytics and forecasting',
    category: 'SaaS',
    icon: '💰',
    features: [
      'Financial Forecasting',
      'Risk Assessment',
      'Automated Reporting',
      'Expense Tracking',
      'Investment Analysis',
      'Compliance Monitoring',
      'Budget Optimization',
      'Real-time Alerts'
    ],
    pricing: {
      basic: 329,
      pro: 659,
      enterprise: 1299
    },
    benefits: [
      'Accurate financial forecasting',
      'Risk mitigation',
      'Automated compliance',
      'Cost optimization',
      'Real-time financial insights'
    ],
    useCases: [
      'Financial Planning',
      'Investment Analysis',
      'Risk Management',
      'Budget Planning',
      'Compliance Reporting'
    ],
    technologies: ['React', 'Python', 'Pandas', 'TensorFlow', 'PostgreSQL', 'AWS'],
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
    description: 'Comprehensive marketing automation with AI-powered campaign optimization, lead scoring, personalization, and ROI tracking.',
    shortDescription: 'AI-powered marketing automation and optimization',
    category: 'SaaS',
    icon: '📈',
    features: [
      'AI Campaign Optimization',
      'Lead Scoring',
      'Email Personalization',
      'Social Media Automation',
      'ROI Tracking',
      'A/B Testing',
      'Customer Segmentation',
      'Performance Analytics'
    ],
    pricing: {
      basic: 279,
      pro: 559,
      enterprise: 1199
    },
    benefits: [
      '300% ROI increase',
      'Personalized campaigns',
      'Automated optimization',
      'Better lead quality',
      'Comprehensive analytics'
    ],
    useCases: [
      'Email Marketing',
      'Social Media',
      'Lead Generation',
      'Campaign Management',
      'Customer Retention'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    href: '/ai-marketing-automation',
    glowColor: 'cyan'
  },
  {
    id: 'ai-inventory-management',
    title: 'AI Inventory Management',
    description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, optimization, and real-time tracking.',
    shortDescription: 'AI-powered inventory management and optimization',
    category: 'SaaS',
    icon: '📦',
    features: [
      'Demand Forecasting',
      'Automated Reordering',
      'Inventory Optimization',
      'Supplier Management',
      'Cost Analysis',
      'Real-time Tracking',
      'Multi-location Support',
      'Barcode Integration'
    ],
    pricing: {
      basic: 219,
      pro: 439,
      enterprise: 899
    },
    benefits: [
      '30% cost reduction',
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
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-inventory-management'
    },
    href: '/ai-inventory-management',
    glowColor: 'blue'
  },
  {
    id: 'ai-document-processing',
    title: 'AI Document Processing',
    description: 'Intelligent document processing with AI-powered OCR, data extraction, workflow automation, and compliance management.',
    shortDescription: 'AI-powered document processing and automation',
    category: 'SaaS',
    icon: '📄',
    features: [
      'AI OCR Technology',
      'Data Extraction',
      'Workflow Automation',
      'Document Classification',
      'Version Control',
      'Security Compliance',
      'Multi-format Support',
      'Batch Processing'
    ],
    pricing: {
      basic: 159,
      pro: 319,
      enterprise: 699
    },
    benefits: [
      '90% accuracy in data extraction',
      '80% time savings',
      'Automated workflows',
      'Compliance management',
      'Multi-format support'
    ],
    useCases: [
      'Document Management',
      'Data Entry',
      'Compliance Processing',
      'Invoice Processing',
      'Contract Management'
    ],
    technologies: ['React', 'Python', 'OpenCV', 'Tesseract', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-document-processing'
    },
    href: '/ai-document-processing',
    glowColor: 'yellow'
  },
  {
    id: 'ai-social-media-manager',
    title: 'AI Social Media Manager',
    description: 'Intelligent social media management with AI-powered content creation, optimal posting times, engagement optimization, and analytics.',
    shortDescription: 'AI-powered social media management and optimization',
    category: 'SaaS',
    icon: '📱',
    features: [
      'AI Content Creation',
      'Optimal Posting Times',
      'Engagement Optimization',
      'Hashtag Suggestions',
      'Performance Analytics',
      'Multi-platform Management',
      'Automated Scheduling',
      'Trend Analysis'
    ],
    pricing: {
      basic: 129,
      pro: 259,
      enterprise: 599
    },
    benefits: [
      '200% engagement increase',
      'Automated posting',
      'Optimized timing',
      'Better content performance',
      'Multi-platform management'
    ],
    useCases: [
      'Social Media Marketing',
      'Brand Management',
      'Community Building',
      'Content Creation',
      'Engagement Optimization'
    ],
    technologies: ['React', 'Node.js', 'Python', 'OpenAI API', 'MongoDB', 'AWS'],
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
    description: 'Advanced email marketing with AI-powered personalization, send time optimization, subject line testing, and performance analytics.',
    shortDescription: 'AI-powered email marketing with personalization',
    category: 'SaaS',
    icon: '📧',
    features: [
      'AI Personalization',
      'Send Time Optimization',
      'Subject Line Testing',
      'Segmentation',
      'Performance Analytics',
      'A/B Testing',
      'Automated Campaigns',
      'Deliverability Optimization'
    ],
    pricing: {
      basic: 99,
      pro: 199,
      enterprise: 499
    },
    benefits: [
      '40% higher open rates',
      'Personalized content',
      'Optimized timing',
      'Better deliverability',
      'Automated campaigns'
    ],
    useCases: [
      'Email Campaigns',
      'Newsletter Management',
      'Lead Nurturing',
      'Customer Retention',
      'Promotional Marketing'
    ],
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-email-marketing-suite'
    },
    href: '/ai-email-marketing-suite',
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
    id: 'it-infrastructure-management',
    title: 'IT Infrastructure Management',
    description: 'Comprehensive IT infrastructure management including servers, networks, storage, data center operations, and performance optimization.',
    shortDescription: 'Complete IT infrastructure management and monitoring',
    category: 'IT',
    icon: '🖥️',
    features: [
      'Server Management & Monitoring',
      'Network Infrastructure',
      'Storage Solutions',
      'Data Center Operations',
      'Performance Optimization',
      'Disaster Recovery Planning',
      '24/7 Monitoring',
      'Proactive Maintenance'
    ],
    pricing: {
      basic: 2500,
      pro: 5000,
      enterprise: 12000
    },
    benefits: [
      '99.9% uptime guarantee',
      '24/7 monitoring and support',
      'Proactive maintenance',
      'Cost optimization',
      'Scalable infrastructure'
    ],
    useCases: [
      'Enterprise Infrastructure',
      'Data Center Management',
      'Server Optimization',
      'Network Management',
      'Disaster Recovery'
    ],
    technologies: ['VMware', 'Hyper-V', 'Cisco', 'Dell', 'HP', 'AWS'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-infrastructure-management'
    },
    href: '/it-infrastructure-management',
    glowColor: 'blue'
  },
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
    id: 'database-management',
    title: 'Database Management',
    description: 'Expert database administration, optimization, and management services for all major database systems with 24/7 monitoring.',
    shortDescription: 'Professional database administration and optimization',
    category: 'IT',
    icon: '🗄️',
    features: [
      'Database Design & Optimization',
      'Performance Tuning',
      'Backup & Recovery',
      'Security Implementation',
      'Migration Services',
      '24/7 Monitoring',
      'Capacity Planning',
      'Disaster Recovery'
    ],
    pricing: {
      basic: 1800,
      pro: 3500,
      enterprise: 8000
    },
    benefits: [
      'Optimized database performance',
      'Zero data loss guarantee',
      'Automated backups',
      '24/7 monitoring',
      'Expert administration'
    ],
    useCases: [
      'MySQL Optimization',
      'PostgreSQL Management',
      'MongoDB Administration',
      'Oracle Database',
      'SQL Server Management'
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/database-management'
    },
    href: '/database-management',
    glowColor: 'green'
  },
  {
    id: 'network-security-monitoring',
    title: 'Network Security & Monitoring',
    description: 'Advanced network security solutions with real-time monitoring, threat detection, firewall management, and intrusion prevention.',
    shortDescription: 'Comprehensive network security and monitoring',
    category: 'IT',
    icon: '🔒',
    features: [
      'Network Monitoring',
      'Firewall Management',
      'Intrusion Detection',
      'VPN Solutions',
      'Traffic Analysis',
      'Security Policies',
      'Threat Prevention',
      'Compliance Management'
    ],
    pricing: {
      basic: 1500,
      pro: 3000,
      enterprise: 7000
    },
    benefits: [
      'Real-time threat monitoring',
      'Proactive threat prevention',
      'Network optimization',
      'Compliance management',
      '24/7 security monitoring'
    ],
    useCases: [
      'Network Security',
      'VPN Management',
      'Traffic Monitoring',
      'Threat Detection',
      'Compliance'
    ],
    technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Check Point', 'Splunk', 'Wireshark'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/network-security-monitoring'
    },
    href: '/network-security-monitoring',
    glowColor: 'purple'
  },
  {
    id: 'it-support-helpdesk',
    title: 'IT Support & Helpdesk',
    description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, hardware maintenance, and technical support.',
    shortDescription: '24/7 IT support and helpdesk services',
    category: 'IT',
    icon: '🛠️',
    features: [
      '24/7 Technical Support',
      'Remote Assistance',
      'Hardware Maintenance',
      'Software Installation',
      'User Training',
      'Issue Resolution',
      'Preventive Maintenance',
      'Asset Management'
    ],
    pricing: {
      basic: 1200,
      pro: 2400,
      enterprise: 5000
    },
    benefits: [
      '24/7 availability',
      'Quick response times',
      'Expert technicians',
      'Proactive maintenance',
      'Cost-effective support'
    ],
    useCases: [
      'Technical Support',
      'Helpdesk Services',
      'User Assistance',
      'Hardware Maintenance',
      'Software Support'
    ],
    technologies: ['TeamViewer', 'Remote Desktop', 'ServiceNow', 'Jira', 'Confluence', 'Slack'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-support-helpdesk'
    },
    href: '/it-support-helpdesk',
    glowColor: 'yellow'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software development services for web applications, mobile apps, enterprise solutions, and API development.',
    shortDescription: 'Custom software development and modernization',
    category: 'IT',
    icon: '💻',
    features: [
      'Custom Web Applications',
      'Mobile App Development',
      'API Development',
      'Legacy System Modernization',
      'Quality Assurance',
      'Maintenance & Support',
      'DevOps Implementation',
      'Cloud Integration'
    ],
    pricing: {
      basic: 4000,
      pro: 8000,
      enterprise: 20000
    },
    benefits: [
      'Custom solutions',
      'Modern technology stack',
      'Ongoing support',
      'Scalable architecture',
      'Quality assurance'
    ],
    useCases: [
      'Web Development',
      'Mobile Apps',
      'API Development',
      'System Modernization',
      'Enterprise Solutions'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/software-development'
    },
    href: '/software-development',
    glowColor: 'cyan'
  },
  {
    id: 'it-consulting-strategy',
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT consulting services to align technology with business objectives, digital transformation, and process optimization.',
    shortDescription: 'Strategic IT consulting and digital transformation',
    category: 'IT',
    icon: '🎯',
    features: [
      'IT Strategy Planning',
      'Technology Assessment',
      'Digital Transformation',
      'Process Optimization',
      'Vendor Management',
      'ROI Analysis',
      'Technology Roadmap',
      'Change Management'
    ],
    pricing: {
      basic: 2000,
      pro: 4000,
      enterprise: 10000
    },
    benefits: [
      'Strategic guidance',
      'Cost optimization',
      'Technology alignment',
      'Digital transformation',
      'ROI improvement'
    ],
    useCases: [
      'IT Strategy',
      'Digital Transformation',
      'Technology Planning',
      'Process Optimization',
      'Vendor Selection'
    ],
    technologies: ['Strategy', 'Analysis', 'Planning', 'Consulting', 'Management', 'Optimization'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-consulting-strategy'
    },
    href: '/it-consulting-strategy',
    glowColor: 'pink'
  },
  {
    id: 'data-backup-recovery',
    title: 'Data Backup & Recovery',
    description: 'Comprehensive data backup and disaster recovery solutions to ensure business continuity and data protection.',
    shortDescription: 'Complete data backup and disaster recovery',
    category: 'IT',
    icon: '💾',
    features: [
      'Automated Backups',
      'Disaster Recovery Planning',
      'Data Encryption',
      'Offsite Storage',
      'Recovery Testing',
      'Compliance Support',
      'Ransomware Protection',
      'Business Continuity'
    ],
    pricing: {
      basic: 800,
      pro: 1600,
      enterprise: 4000
    },
    benefits: [
      'Zero data loss guarantee',
      'Quick recovery times',
      'Automated backups',
      'Compliance support',
      'Ransomware protection'
    ],
    useCases: [
      'Data Protection',
      'Disaster Recovery',
      'Compliance',
      'Business Continuity',
      'Ransomware Protection'
    ],
    technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS S3', 'Azure Backup', 'Google Cloud'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/data-backup-recovery'
    },
    href: '/data-backup-recovery',
    glowColor: 'green'
  },
  {
    id: 'it-asset-management',
    title: 'IT Asset Management',
    description: 'Complete IT asset management services including inventory, lifecycle management, cost optimization, and license management.',
    shortDescription: 'Comprehensive IT asset management and optimization',
    category: 'IT',
    icon: '📋',
    features: [
      'Asset Inventory',
      'Lifecycle Management',
      'Cost Tracking',
      'License Management',
      'Depreciation Tracking',
      'Procurement Support',
      'Asset Disposal',
      'Compliance Reporting'
    ],
    pricing: {
      basic: 1000,
      pro: 2000,
      enterprise: 5000
    },
    benefits: [
      'Cost optimization',
      'Asset tracking',
      'License compliance',
      'Lifecycle management',
      'Procurement optimization'
    ],
    useCases: [
      'Asset Tracking',
      'Cost Management',
      'License Compliance',
      'Procurement',
      'Asset Disposal'
    ],
    technologies: ['ServiceNow', 'Lansweeper', 'PDQ', 'SCCM', 'JAMF', 'ManageEngine'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-asset-management'
    },
    href: '/it-asset-management',
    glowColor: 'blue'
  },
  {
    id: 'remote-work-solutions',
    title: 'Remote Work Solutions',
    description: 'Complete remote work infrastructure including VPN setup, collaboration tools, security solutions, and device management.',
    shortDescription: 'Comprehensive remote work infrastructure and support',
    category: 'IT',
    icon: '🏠',
    features: [
      'VPN Setup & Management',
      'Collaboration Tools',
      'Security Solutions',
      'Device Management',
      'Training & Support',
      'Performance Monitoring',
      'Cloud Integration',
      'Mobile Device Management'
    ],
    pricing: {
      basic: 1500,
      pro: 3000,
      enterprise: 7000
    },
    benefits: [
      'Secure remote access',
      'Productivity tools',
      'Seamless collaboration',
      'Device management',
      'Performance monitoring'
    ],
    useCases: [
      'Remote Work Setup',
      'VPN Management',
      'Collaboration Tools',
      'Device Management',
      'Security'
    ],
    technologies: ['Cisco VPN', 'Microsoft Teams', 'Slack', 'Zoom', 'Office 365', 'Google Workspace'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/remote-work-solutions'
    },
    href: '/remote-work-solutions',
    glowColor: 'purple'
  },
  {
    id: 'it-compliance-governance',
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance and governance services to ensure regulatory compliance, risk management, and best practices.',
    shortDescription: 'IT compliance and governance management',
    category: 'IT',
    icon: '📊',
    features: [
      'Compliance Auditing',
      'Policy Development',
      'Risk Assessment',
      'Regulatory Reporting',
      'Training Programs',
      'Documentation',
      'Audit Preparation',
      'Continuous Monitoring'
    ],
    pricing: {
      basic: 2800,
      pro: 5600,
      enterprise: 12000
    },
    benefits: [
      'Full compliance assurance',
      'Risk mitigation',
      'Audit readiness',
      'Policy development',
      'Continuous monitoring'
    ],
    useCases: [
      'SOX Compliance',
      'GDPR Compliance',
      'HIPAA Compliance',
      'PCI DSS',
      'Risk Management'
    ],
    technologies: ['GRC Tools', 'Compliance Software', 'Risk Management', 'Audit Tools', 'Policy Management', 'Reporting'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/it-compliance-governance'
    },
    href: '/it-compliance-governance',
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
    id: 'ai-cybersecurity-monitor',
    title: 'AI Cybersecurity Monitor',
    description: 'AI-powered cybersecurity monitoring with real-time threat detection, behavioral analysis, and automated incident response.',
    shortDescription: 'AI-powered cybersecurity monitoring and response',
    category: 'Cybersecurity',
    icon: '🤖',
    features: [
      'AI Threat Detection',
      'Behavioral Analysis',
      'Real-time Monitoring',
      'Automated Response',
      'Anomaly Detection',
      'Risk Scoring',
      'Incident Management',
      'Compliance Reporting'
    ],
    pricing: {
      basic: 1200,
      pro: 2400,
      enterprise: 6000
    },
    benefits: [
      '99.9% threat detection accuracy',
      'Real-time monitoring',
      'Automated incident response',
      'Behavioral analysis',
      'Reduced false positives'
    ],
    useCases: [
      'Threat Detection',
      'Incident Response',
      'Compliance Monitoring',
      'Risk Assessment',
      'Security Analytics'
    ],
    technologies: ['AI/ML', 'SIEM', 'EDR', 'SOAR', 'Python', 'TensorFlow'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-cybersecurity-monitor'
    },
    href: '/ai-cybersecurity-monitor',
    glowColor: 'cyan'
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Services',
    description: 'Comprehensive penetration testing services to identify vulnerabilities, assess security posture, and provide remediation recommendations.',
    shortDescription: 'Professional penetration testing and vulnerability assessment',
    category: 'Cybersecurity',
    icon: '🔍',
    features: [
      'Web Application Testing',
      'Network Penetration Testing',
      'Mobile App Testing',
      'Social Engineering',
      'Physical Security Testing',
      'Wireless Security Testing',
      'Compliance Testing',
      'Remediation Guidance'
    ],
    pricing: {
      basic: 2500,
      pro: 5000,
      enterprise: 12000
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with regulations',
      'Detailed remediation guidance',
      'Expert security assessment',
      'Ongoing security improvement'
    ],
    useCases: [
      'Security Assessment',
      'Compliance Testing',
      'Vulnerability Management',
      'Security Audits',
      'Risk Assessment'
    ],
    technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'OWASP', 'NIST'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/penetration-testing'
    },
    href: '/penetration-testing',
    glowColor: 'red'
  },
  {
    id: 'security-awareness-training',
    title: 'Security Awareness Training',
    description: 'Comprehensive security awareness training programs to educate employees about cybersecurity threats and best practices.',
    shortDescription: 'Employee security awareness training and education',
    category: 'Cybersecurity',
    icon: '🎓',
    features: [
      'Interactive Training Modules',
      'Phishing Simulation',
      'Security Best Practices',
      'Compliance Training',
      'Risk Assessment',
      'Progress Tracking',
      'Certification Programs',
      'Ongoing Education'
    ],
    pricing: {
      basic: 500,
      pro: 1000,
      enterprise: 2500
    },
    benefits: [
      'Reduced security incidents',
      'Improved security culture',
      'Compliance training',
      'Measurable progress',
      'Ongoing education'
    ],
    useCases: [
      'Employee Training',
      'Compliance Education',
      'Security Culture',
      'Risk Reduction',
      'Awareness Programs'
    ],
    technologies: ['LMS', 'Interactive Content', 'Simulation', 'Analytics', 'Reporting', 'Assessment'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/security-awareness-training'
    },
    href: '/security-awareness-training',
    glowColor: 'green'
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
  {
    id: '5g-edge-computing',
    title: '5G Edge Computing',
    description: 'Advanced 5G edge computing solutions for ultra-low latency applications, real-time processing, and distributed computing.',
    shortDescription: '5G edge computing for ultra-low latency applications',
    category: '5G',
    icon: '⚡',
    features: [
      'Edge Server Deployment',
      'Ultra-low Latency Processing',
      'Real-time Analytics',
      'Distributed Computing',
      'Edge AI/ML',
      'Content Delivery',
      'IoT Data Processing',
      'Performance Optimization'
    ],
    pricing: {
      basic: 8000,
      pro: 20000,
      enterprise: 50000
    },
    benefits: [
      'Ultra-low latency (1-5ms)',
      'Real-time processing',
      'Distributed computing',
      'Edge AI capabilities',
      'Improved performance'
    ],
    useCases: [
      'Autonomous Vehicles',
      'Industrial Automation',
      'AR/VR Applications',
      'Real-time Gaming',
      'Smart Manufacturing'
    ],
    technologies: ['5G', 'Edge Computing', 'Kubernetes', 'Docker', 'AI/ML', 'Microservices'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-edge-computing'
    },
    href: '/5g-edge-computing',
    glowColor: 'blue'
  },
  {
    id: '5g-iot-solutions',
    title: '5G IoT Solutions',
    description: 'Comprehensive 5G IoT solutions for massive device connectivity, real-time monitoring, and intelligent automation.',
    shortDescription: '5G-powered IoT solutions for massive connectivity',
    category: '5G',
    icon: '🌐',
    features: [
      'Massive IoT Connectivity',
      'Real-time Device Monitoring',
      'Intelligent Automation',
      'Edge Data Processing',
      'Predictive Maintenance',
      'Remote Device Management',
      'Data Analytics',
      'Security Implementation'
    ],
    pricing: {
      basic: 6000,
      pro: 15000,
      enterprise: 40000
    },
    benefits: [
      'Massive device connectivity',
      'Real-time monitoring',
      'Intelligent automation',
      'Predictive maintenance',
      'Cost optimization'
    ],
    useCases: [
      'Smart Cities',
      'Industrial IoT',
      'Agriculture',
      'Healthcare',
      'Environmental Monitoring'
    ],
    technologies: ['5G', 'IoT', 'Edge Computing', 'AI/ML', 'MQTT', 'LoRaWAN'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-iot-solutions'
    },
    href: '/5g-iot-solutions',
    glowColor: 'cyan'
  },
  {
    id: '5g-smart-city-solutions',
    title: '5G Smart City Solutions',
    description: 'Complete 5G smart city solutions including traffic management, public safety, environmental monitoring, and citizen services.',
    shortDescription: '5G-powered smart city infrastructure and services',
    category: '5G',
    icon: '🏙️',
    features: [
      'Traffic Management',
      'Public Safety Systems',
      'Environmental Monitoring',
      'Citizen Services',
      'Smart Lighting',
      'Waste Management',
      'Energy Management',
      'Data Analytics'
    ],
    pricing: {
      basic: 15000,
      pro: 40000,
      enterprise: 100000
    },
    benefits: [
      'Improved city efficiency',
      'Better citizen services',
      'Environmental monitoring',
      'Public safety enhancement',
      'Data-driven decisions'
    ],
    useCases: [
      'Smart City Planning',
      'Traffic Optimization',
      'Public Safety',
      'Environmental Control',
      'Citizen Engagement'
    ],
    technologies: ['5G', 'IoT', 'AI/ML', 'Big Data', 'Cloud Computing', 'Analytics'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-smart-city-solutions'
    },
    href: '/5g-smart-city-solutions',
    glowColor: 'purple'
  },
  {
    id: '5g-private-networks',
    title: '5G Private Networks',
    description: 'Dedicated 5G private networks for enterprises with enhanced security, control, and customization for specific business needs.',
    shortDescription: 'Dedicated 5G private networks for enterprises',
    category: '5G',
    icon: '🏢',
    features: [
      'Private 5G Network',
      'Enhanced Security',
      'Custom Configuration',
      'Dedicated Resources',
      'Quality of Service',
      'Network Slicing',
      'Edge Computing',
      '24/7 Management'
    ],
    pricing: {
      basic: 20000,
      pro: 50000,
      enterprise: 150000
    },
    benefits: [
      'Enhanced security',
      'Custom configuration',
      'Dedicated resources',
      'Better performance',
      'Full control'
    ],
    useCases: [
      'Manufacturing',
      'Healthcare',
      'Financial Services',
      'Government',
      'Critical Infrastructure'
    ],
    technologies: ['5G', 'Private Networks', 'Network Slicing', 'Edge Computing', 'Security', 'SDN'],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-private-networks'
    },
    href: '/5g-private-networks',
    glowColor: 'yellow'
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