export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  features: string[];
  icon: string;
  path: string;
  category: 'ai' | 'it' | 'micro-saas';
  popular?: boolean;
  marketPrice?: string;
  benefits: string[];
  capabilities: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export const aiServices: Service[] = [
  {
    id: 'ai-content-generator-pro',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation with natural language processing',
    longDescription: 'Transform your content strategy with our state-of-the-art AI content generator. Create high-quality, SEO-optimized content across multiple formats including blogs, social media posts, marketing copy, and technical documentation. Our AI understands context, brand voice, and industry-specific terminology to deliver content that resonates with your audience.',
    price: '$299/month',
    marketPrice: '$500-800/month',
    features: [
      'Multi-language support (50+ languages)',
      'SEO optimization with real-time suggestions',
      'Brand voice training and customization',
      'Content analytics and performance tracking',
      'Plagiarism detection and originality scoring',
      'Team collaboration tools',
      'API integration for automated workflows',
      'Content scheduling and publishing'
    ],
    benefits: [
      'Increase content production by 300%',
      'Reduce content creation costs by 60%',
      'Improve SEO rankings with optimized content',
      'Maintain consistent brand voice across all channels'
    ],
    capabilities: [
      'Blog posts and articles',
      'Social media content',
      'Email marketing campaigns',
      'Product descriptions',
      'Technical documentation',
      'Press releases and announcements'
    ],
    icon: 'FileText',
    path: '/ai-content-generator',
    category: 'ai',
    popular: true,
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-chatbot-enterprise',
    name: 'AI Chatbot Enterprise',
    description: 'Intelligent conversational AI for customer service and support',
    longDescription: 'Deploy enterprise-grade conversational AI that understands context, handles complex queries, and provides 24/7 customer support. Our advanced NLP models can integrate with your existing systems, learn from interactions, and escalate to human agents when needed.',
    price: '$499/month',
    marketPrice: '$800-1200/month',
    features: [
      '24/7 multilingual customer support',
      'Multi-channel integration (web, mobile, social)',
      'Sentiment analysis and emotion detection',
      'Custom training on your data',
      'Integration with CRM and helpdesk systems',
      'Analytics dashboard with conversation insights',
      'Voice and text support',
      'Escalation to human agents'
    ],
    benefits: [
      'Reduce customer service costs by 70%',
      'Improve response time to under 2 seconds',
      'Increase customer satisfaction scores',
      'Handle 10x more inquiries simultaneously'
    ],
    capabilities: [
      'Customer support automation',
      'Lead qualification and nurturing',
      'FAQ automation',
      'Order tracking and status updates',
      'Appointment scheduling',
      'Technical support assistance'
    ],
    icon: 'MessageSquare',
    path: '/ai-chatbot-enterprise',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics',
    longDescription: 'Unlock the power of your data with our AI-powered analytics platform. Get real-time insights, predictive modeling, and automated reporting that helps you make data-driven decisions. Our platform integrates with all major data sources and provides intuitive visualizations.',
    price: '$399/month',
    marketPrice: '$600-1000/month',
    features: [
      'Real-time data visualization',
      'Predictive modeling and forecasting',
      'Custom report generation',
      'API integration with 100+ platforms',
      'Automated anomaly detection',
      'Mobile-responsive dashboards',
      'Data export in multiple formats',
      'Role-based access control'
    ],
    benefits: [
      'Make 40% faster business decisions',
      'Identify trends 3x earlier than competitors',
      'Reduce manual reporting time by 80%',
      'Increase revenue through data insights'
    ],
    capabilities: [
      'Sales performance analytics',
      'Customer behavior analysis',
      'Financial forecasting',
      'Marketing campaign optimization',
      'Operational efficiency metrics',
      'Risk assessment and management'
    ],
    icon: 'BarChart3',
    path: '/ai-analytics-dashboard',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-cybersecurity-suite',
    name: 'AI Cybersecurity Suite',
    description: 'Advanced threat detection and prevention using machine learning',
    longDescription: 'Protect your digital assets with our AI-powered cybersecurity suite. Our machine learning algorithms continuously monitor your network, detect threats in real-time, and automatically respond to security incidents. Stay ahead of evolving cyber threats with predictive security analytics.',
    price: '$1,299/month',
    marketPrice: '$2000-3500/month',
    features: [
      'Real-time threat monitoring',
      'AI-powered threat intelligence',
      'Automated incident response',
      'Compliance reporting (SOC2, GDPR, HIPAA)',
      'Network traffic analysis',
      'Endpoint protection',
      'Email security scanning',
      'Vulnerability assessment'
    ],
    benefits: [
      'Detect threats 10x faster than traditional methods',
      'Reduce false positives by 85%',
      'Achieve 99.9% threat detection accuracy',
      'Comply with industry security standards'
    ],
    capabilities: [
      'Advanced persistent threat detection',
      'Malware and ransomware protection',
      'Insider threat monitoring',
      'Security incident response',
      'Compliance management',
      'Security awareness training'
    ],
    icon: 'Shield',
    path: '/ai-cybersecurity-suite',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const microSaasServices: Service[] = [
  {
    id: 'ai-crm-assistant',
    name: 'AI CRM Assistant',
    description: 'Intelligent customer relationship management with AI insights',
    longDescription: 'Transform your sales process with our AI-powered CRM that learns from every interaction. Automatically score leads, predict customer behavior, and suggest the best actions to close deals faster. Integrates seamlessly with your existing tools.',
    price: '$99/month',
    marketPrice: '$150-300/month',
    features: [
      'AI-powered lead scoring',
      'Automated follow-up sequences',
      'Sales forecasting with 90% accuracy',
      'Integration with 50+ platforms',
      'Email tracking and analytics',
      'Custom pipeline management',
      'Team collaboration tools',
      'Mobile app for on-the-go access'
    ],
    benefits: [
      'Increase sales conversion by 35%',
      'Reduce sales cycle time by 25%',
      'Improve lead qualification accuracy',
      'Boost team productivity by 40%'
    ],
    capabilities: [
      'Lead management and scoring',
      'Contact and company profiles',
      'Deal tracking and forecasting',
      'Email marketing automation',
      'Task and activity management',
      'Reporting and analytics'
    ],
    icon: 'Users',
    path: '/ai-crm-assistant',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Pro',
    description: 'Smart email campaigns with AI optimization and personalization',
    longDescription: 'Create highly personalized email campaigns that convert. Our AI analyzes customer behavior, optimizes send times, A/B tests subject lines, and personalizes content for each recipient. Increase open rates, click-through rates, and revenue.',
    price: '$149/month',
    marketPrice: '$200-400/month',
    features: [
      'AI-powered subject line optimization',
      'Send time optimization for each contact',
      'Dynamic content personalization',
      'Advanced segmentation and targeting',
      'A/B testing automation',
      'Deliverability monitoring',
      'Unsubscribe prediction and prevention',
      'Revenue attribution tracking'
    ],
    benefits: [
      'Increase open rates by 45%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates by 30%',
      'Generate 25% more revenue from email'
    ],
    capabilities: [
      'Welcome email sequences',
      'Abandoned cart recovery',
      'Birthday and anniversary campaigns',
      'Product recommendation emails',
      'Re-engagement campaigns',
      'Transactional email automation'
    ],
    icon: 'Mail',
    path: '/ai-email-marketing',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-automated-testing',
    name: 'AI Automated Testing Suite',
    description: 'AI-driven automated testing for web and mobile applications',
    longDescription: 'Accelerate your testing process with AI-powered automation. Our platform automatically generates test cases, identifies bugs, and provides detailed reports. Supports web, mobile, and API testing with intelligent test maintenance.',
    price: '$199/month',
    marketPrice: '$300-600/month',
    features: [
      'Cross-browser and cross-device testing',
      'AI-generated test cases',
      'Visual regression testing',
      'API testing and validation',
      'Performance testing automation',
      'Test data management',
      'CI/CD integration',
      'Detailed reporting and analytics'
    ],
    benefits: [
      'Reduce testing time by 70%',
      'Increase test coverage by 90%',
      'Catch bugs 5x faster',
      'Improve software quality significantly'
    ],
    capabilities: [
      'Functional testing automation',
      'UI/UX testing',
      'Performance and load testing',
      'Security testing',
      'Accessibility testing',
      'Mobile app testing'
    ],
    icon: 'Cpu',
    path: '/ai-automated-testing',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processor',
    description: 'Intelligent document processing and data extraction',
    longDescription: 'Automate document processing with AI that understands context and extracts data accurately. Process invoices, contracts, forms, and other documents with 99% accuracy. Integrates with your existing workflows and systems.',
    price: '$179/month',
    marketPrice: '$250-500/month',
    features: [
      'OCR with 99% accuracy',
      'Intelligent data extraction',
      'Document classification and routing',
      'Form field recognition',
      'Multi-language support',
      'Batch processing capabilities',
      'API integration',
      'Custom workflow automation'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual data entry by 95%',
      'Eliminate human errors',
      'Improve compliance and audit trails'
    ],
    capabilities: [
      'Invoice processing',
      'Contract analysis',
      'Form data extraction',
      'Receipt digitization',
      'ID document verification',
      'Medical record processing'
    ],
    icon: 'FileText',
    path: '/ai-document-processor',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    longDescription: 'Transform your IT infrastructure with our comprehensive cloud solutions. We design, implement, and manage cloud environments that scale with your business. From migration to optimization, we ensure maximum performance and security.',
    price: '$899/month',
    marketPrice: '$1200-2000/month',
    features: [
      'Multi-cloud strategy and implementation',
      'Cloud migration and modernization',
      'Infrastructure as Code (IaC)',
      'Auto-scaling and load balancing',
      'Disaster recovery and backup',
      'Security and compliance management',
      '24/7 monitoring and support',
      'Cost optimization and management'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhance security and compliance',
      'Increase system reliability and uptime'
    ],
    capabilities: [
      'AWS, Azure, and GCP expertise',
      'Container orchestration (Kubernetes)',
      'Serverless architecture design',
      'Database migration and optimization',
      'Network architecture and security',
      'DevOps and CI/CD implementation'
    ],
    icon: 'Cloud',
    path: '/cloud-infrastructure',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'cybersecurity-services',
    name: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your business',
    longDescription: 'Safeguard your digital assets with our comprehensive cybersecurity services. We provide end-to-end security solutions including risk assessment, penetration testing, security monitoring, and incident response. Stay protected against evolving cyber threats.',
    price: '$1,499/month',
    marketPrice: '$2000-4000/month',
    features: [
      'Security risk assessment and audit',
      'Penetration testing and vulnerability scanning',
      'Security monitoring and incident response',
      'Employee security training',
      'Compliance management (SOC2, GDPR, HIPAA)',
      'Security policy development',
      'Threat intelligence and analysis',
      '24/7 security operations center'
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Reduce security incidents by 80%',
      'Ensure compliance with regulations',
      'Minimize business disruption from attacks'
    ],
    capabilities: [
      'Network security assessment',
      'Application security testing',
      'Identity and access management',
      'Data protection and encryption',
      'Security awareness training',
      'Incident response planning'
    ],
    icon: 'Shield',
    path: '/cybersecurity-services',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'software-development',
    name: 'Custom Software Development',
    description: 'Custom software solutions tailored to your business needs',
    longDescription: 'Build powerful, scalable software solutions that drive your business forward. Our expert developers use modern technologies and best practices to create applications that meet your specific requirements and integrate seamlessly with your existing systems.',
    price: '$2,999/month',
    marketPrice: '$4000-8000/month',
    features: [
      'Full-stack web application development',
      'Mobile app development (iOS/Android)',
      'API development and integration',
      'Database design and optimization',
      'UI/UX design and implementation',
      'Quality assurance and testing',
      'DevOps and deployment automation',
      'Ongoing maintenance and support'
    ],
    benefits: [
      'Accelerate time-to-market by 50%',
      'Reduce development costs by 30%',
      'Improve user experience and satisfaction',
      'Ensure scalability and maintainability'
    ],
    capabilities: [
      'Web applications and portals',
      'Mobile applications',
      'E-commerce platforms',
      'CRM and ERP systems',
      'Data analytics platforms',
      'IoT and embedded systems'
    ],
    icon: 'Code',
    path: '/software-development',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & Business Intelligence',
    description: 'Transform data into actionable business insights',
    longDescription: 'Unlock the value of your data with our comprehensive analytics and business intelligence services. We help you collect, process, and analyze data to make informed decisions and drive business growth.',
    price: '$1,199/month',
    marketPrice: '$1500-3000/month',
    features: [
      'Data warehouse design and implementation',
      'ETL/ELT pipeline development',
      'Real-time analytics dashboards',
      'Predictive modeling and machine learning',
      'Data visualization and reporting',
      'Data governance and quality management',
      'Self-service analytics tools',
      'Training and knowledge transfer'
    ],
    benefits: [
      'Make data-driven decisions 3x faster',
      'Increase revenue through data insights',
      'Improve operational efficiency by 40%',
      'Reduce data processing costs by 50%'
    ],
    capabilities: [
      'Sales and marketing analytics',
      'Financial reporting and forecasting',
      'Customer behavior analysis',
      'Operational performance metrics',
      'Risk analysis and management',
      'Compliance and regulatory reporting'
    ],
    icon: 'BarChart3',
    path: '/data-analytics',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Additional AI Services
export const additionalAiServices: Service[] = [
  {
    id: 'ai-smart-scheduler',
    name: 'AI Smart Scheduler',
    description: 'Intelligent scheduling that learns from your patterns and optimizes meetings automatically',
    longDescription: 'Revolutionize your time management with our AI-powered scheduling assistant. It learns from your preferences, automatically finds optimal meeting times, handles conflicts, and integrates with all major calendar platforms. Reduce scheduling friction by 80% and never miss important meetings again.',
    price: '$79/month',
    marketPrice: '$120-200/month',
    features: [
      'Smart meeting optimization',
      'Multi-calendar integration',
      'Time zone management',
      'Conflict resolution',
      'Meeting analytics',
      'Team coordination',
      'Recurring meeting management',
      'Mobile app support'
    ],
    benefits: [
      'Save 5+ hours per week on scheduling',
      'Reduce meeting conflicts by 90%',
      'Improve meeting attendance rates',
      'Optimize team productivity'
    ],
    capabilities: [
      'Calendar synchronization',
      'Meeting room booking',
      'Attendee availability checking',
      'Automated reminders',
      'Meeting preparation suggestions',
      'Follow-up scheduling'
    ],
    icon: 'Calendar',
    path: '/ai-smart-scheduler',
    category: 'ai',
    popular: true,
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-ecommerce-optimizer-pro',
    name: 'AI E-commerce Optimizer Pro',
    description: 'Boost sales by up to 40% with AI-powered e-commerce optimization and personalization',
    longDescription: 'Transform your online store with our comprehensive AI e-commerce optimization platform. Increase conversions, reduce cart abandonment, and personalize the shopping experience for each customer. Our AI analyzes behavior patterns and automatically optimizes product recommendations, pricing, and checkout flow.',
    price: '$399/month',
    marketPrice: '$600-1000/month',
    features: [
      'Dynamic pricing optimization',
      'Personalized product recommendations',
      'Cart abandonment recovery',
      'A/B testing automation',
      'Customer segmentation',
      'Inventory optimization',
      'Search and filter enhancement',
      'Mobile experience optimization'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Reduce cart abandonment by 35%',
      'Boost average order value by 25%',
      'Improve customer lifetime value'
    ],
    capabilities: [
      'Product recommendation engine',
      'Price optimization algorithms',
      'Customer behavior analysis',
      'Checkout flow optimization',
      'Email marketing automation',
      'Performance analytics dashboard'
    ],
    icon: 'ShoppingCart',
    path: '/ai-ecommerce-optimizer-pro',
    category: 'ai',
    popular: true,
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-3d-generation',
    name: 'AI 3D Generation Studio',
    description: 'Create stunning 3D models and animations with AI-powered generation tools',
    longDescription: 'Revolutionize 3D content creation with our AI-powered 3D generation platform. Create photorealistic 3D models, animations, and environments from simple text descriptions or 2D images. Perfect for game development, architectural visualization, product design, and marketing materials.',
    price: '$599/month',
    marketPrice: '$800-1500/month',
    features: [
      'Text-to-3D model generation',
      'Image-to-3D conversion',
      'Animation keyframe generation',
      'Material and texture creation',
      'Lighting optimization',
      'Rendering acceleration',
      'VR/AR compatibility',
      'Export to major 3D formats'
    ],
    benefits: [
      'Reduce 3D creation time by 70%',
      'Lower production costs by 50%',
      'Enable non-technical users to create 3D content',
      'Accelerate product development cycles'
    ],
    capabilities: [
      '3D model generation',
      'Character animation',
      'Environment creation',
      'Product visualization',
      'Architectural rendering',
      'Game asset creation'
    ],
    icon: 'Box',
    path: '/ai-3d-generation',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-accounting-assistant',
    name: 'AI Accounting Assistant Pro',
    description: 'Automate accounting tasks with AI-powered financial management and reporting',
    longDescription: 'Streamline your financial operations with our intelligent accounting assistant. Automatically categorize transactions, generate financial reports, detect anomalies, and ensure compliance. Integrates with all major accounting software and provides real-time insights into your business finances.',
    price: '$199/month',
    marketPrice: '$300-500/month',
    features: [
      'Automated transaction categorization',
      'Real-time financial reporting',
      'Expense tracking and approval',
      'Tax preparation assistance',
      'Invoice generation and management',
      'Bank reconciliation automation',
      'Compliance monitoring',
      'Financial forecasting'
    ],
    benefits: [
      'Reduce accounting time by 60%',
      'Eliminate manual data entry errors',
      'Improve financial accuracy',
      'Ensure regulatory compliance'
    ],
    capabilities: [
      'Bookkeeping automation',
      'Financial statement generation',
      'Tax document preparation',
      'Expense management',
      'Cash flow analysis',
      'Audit trail maintenance'
    ],
    icon: 'Calculator',
    path: '/ai-accounting-assistant',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-agricultural-intelligence-pro',
    name: 'AI Agricultural Intelligence Pro',
    description: 'Optimize farming operations with AI-powered crop monitoring and yield prediction',
    longDescription: 'Transform modern agriculture with our comprehensive AI platform for smart farming. Monitor crop health, predict yields, optimize irrigation, detect diseases early, and maximize harvest efficiency. Uses satellite imagery, IoT sensors, and machine learning to provide actionable insights for sustainable farming.',
    price: '$299/month',
    marketPrice: '$500-800/month',
    features: [
      'Satellite crop monitoring',
      'Yield prediction algorithms',
      'Disease and pest detection',
      'Irrigation optimization',
      'Weather pattern analysis',
      'Soil health assessment',
      'Harvest timing recommendations',
      'Sustainability tracking'
    ],
    benefits: [
      'Increase crop yields by 25%',
      'Reduce water usage by 30%',
      'Minimize pesticide use by 40%',
      'Improve farm profitability'
    ],
    capabilities: [
      'Crop health monitoring',
      'Precision agriculture',
      'Resource optimization',
      'Risk assessment',
      'Compliance reporting',
      'Market analysis'
    ],
    icon: 'TreePine',
    path: '/ai-agricultural-intelligence-pro',
    category: 'ai',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Additional Micro SAAS Services
export const additionalMicroSaasServices: Service[] = [
  {
    id: 'ai-url-shortener',
    name: 'AI URL Shortener Pro',
    description: 'Smart URL shortening with analytics, customization, and AI-powered insights',
    longDescription: 'Create branded short links with advanced analytics and AI-powered insights. Track clicks, demographics, device types, and geographic data. Automatically optimize link performance and provide actionable recommendations to improve your marketing campaigns.',
    price: '$29/month',
    marketPrice: '$50-100/month',
    features: [
      'Custom branded domains',
      'Advanced click analytics',
      'Geographic tracking',
      'Device and browser insights',
      'QR code generation',
      'Bulk link management',
      'API integration',
      'Link expiration controls'
    ],
    benefits: [
      'Improve click-through rates by 20%',
      'Gain detailed audience insights',
      'Enhance brand recognition',
      'Optimize marketing campaigns'
    ],
    capabilities: [
      'Link shortening and management',
      'Analytics and reporting',
      'Custom branding',
      'QR code generation',
      'API access',
      'Team collaboration'
    ],
    icon: 'Link',
    path: '/ai-url-shortener',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-password-manager',
    name: 'AI Password Manager Enterprise',
    description: 'Secure password management with AI-powered security recommendations',
    longDescription: 'Protect your organization with our enterprise-grade password manager featuring AI-powered security analysis. Automatically detect weak passwords, suggest improvements, monitor for breaches, and ensure compliance with security policies. Includes team management and advanced reporting.',
    price: '$99/month',
    marketPrice: '$150-300/month',
    features: [
      'AI-powered password analysis',
      'Breach monitoring and alerts',
      'Team password sharing',
      'Multi-factor authentication',
      'Password generation',
      'Security policy enforcement',
      'Compliance reporting',
      'SSO integration'
    ],
    benefits: [
      'Reduce security risks by 80%',
      'Improve password hygiene',
      'Ensure compliance',
      'Simplify team management'
    ],
    capabilities: [
      'Password storage and encryption',
      'Security analysis',
      'Team collaboration',
      'Compliance management',
      'Integration with business tools',
      'Audit and reporting'
    ],
    icon: 'Key',
    path: '/ai-password-manager',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-qr-generator',
    name: 'AI QR Code Generator Pro',
    description: 'Create dynamic QR codes with AI-powered analytics and customization',
    longDescription: 'Generate beautiful, trackable QR codes with our AI-powered platform. Create dynamic QR codes that can be updated without reprinting, track scans in real-time, and get AI-powered insights about your audience. Perfect for marketing campaigns, events, and business operations.',
    price: '$49/month',
    marketPrice: '$80-150/month',
    features: [
      'Dynamic QR code generation',
      'Real-time scan tracking',
      'Custom design and branding',
      'Bulk QR code creation',
      'Analytics dashboard',
      'Geographic tracking',
      'Device detection',
      'API integration'
    ],
    benefits: [
      'Track campaign performance',
      'Update content without reprinting',
      'Gain audience insights',
      'Improve engagement rates'
    ],
    capabilities: [
      'QR code generation',
      'Analytics and tracking',
      'Custom branding',
      'Bulk operations',
      'API access',
      'Team management'
    ],
    icon: 'QrCode',
    path: '/ai-qr-generator',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator Pro',
    description: 'Automate invoice creation with AI-powered templates and smart data extraction',
    longDescription: 'Streamline your billing process with our intelligent invoice generator. Create professional invoices automatically, extract data from contracts and emails, track payments, and send automated reminders. Integrates with accounting software and provides detailed analytics.',
    price: '$79/month',
    marketPrice: '$120-250/month',
    features: [
      'AI-powered template generation',
      'Automated data extraction',
      'Payment tracking',
      'Automated reminders',
      'Multi-currency support',
      'Tax calculation',
      'Client portal',
      'Accounting integration'
    ],
    benefits: [
      'Reduce invoice creation time by 70%',
      'Improve payment collection',
      'Eliminate manual errors',
      'Enhance professional image'
    ],
    capabilities: [
      'Invoice creation and management',
      'Payment processing',
      'Client communication',
      'Financial reporting',
      'Tax compliance',
      'Integration with business tools'
    ],
    icon: 'FileText',
    path: '/ai-invoice-generator',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'ai-social-media-scheduler',
    name: 'AI Social Media Scheduler Pro',
    description: 'Intelligent social media management with AI-powered content optimization',
    longDescription: 'Master social media with our AI-powered scheduling and optimization platform. Automatically find the best times to post, optimize content for each platform, generate engaging captions, and track performance across all major social networks. Increase engagement and grow your following.',
    price: '$149/month',
    marketPrice: '$200-400/month',
    features: [
      'AI-powered posting optimization',
      'Content generation assistance',
      'Multi-platform scheduling',
      'Hashtag optimization',
      'Engagement analytics',
      'Competitor analysis',
      'Content calendar',
      'Team collaboration'
    ],
    benefits: [
      'Increase engagement by 45%',
      'Save 10+ hours per week',
      'Grow follower base faster',
      'Improve content performance'
    ],
    capabilities: [
      'Social media scheduling',
      'Content optimization',
      'Analytics and reporting',
      'Hashtag research',
      'Competitor monitoring',
      'Team management'
    ],
    icon: 'Share2',
    path: '/ai-social-media-scheduler',
    category: 'micro-saas',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Additional IT Services
export const additionalItServices: Service[] = [
  {
    id: '5g-implementation',
    name: '5G Network Implementation',
    description: 'Complete 5G network deployment and optimization services',
    longDescription: 'Transform your connectivity with our comprehensive 5G implementation services. We design, deploy, and optimize 5G networks for businesses, providing ultra-fast speeds, low latency, and massive device connectivity. Perfect for IoT deployments, smart cities, and high-performance applications.',
    price: '$2,999/month',
    marketPrice: '$4000-8000/month',
    features: [
      '5G network design and planning',
      'Infrastructure deployment',
      'Performance optimization',
      'IoT device integration',
      'Security implementation',
      'Monitoring and maintenance',
      'Compliance certification',
      '24/7 technical support'
    ],
    benefits: [
      'Achieve 10x faster data speeds',
      'Enable real-time applications',
      'Support massive IoT deployments',
      'Future-proof your infrastructure'
    ],
    capabilities: [
      '5G network architecture',
      'IoT connectivity solutions',
      'Edge computing deployment',
      'Network security',
      'Performance monitoring',
      'Compliance management'
    ],
    icon: 'Wifi',
    path: '/5g-implementation',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'blockchain-solutions',
    name: 'Blockchain Development & Integration',
    description: 'Custom blockchain solutions for secure, transparent business processes',
    longDescription: 'Leverage blockchain technology to enhance security, transparency, and efficiency in your business processes. We develop custom blockchain solutions, smart contracts, and integrate existing systems with blockchain networks. Perfect for supply chain, finance, healthcare, and identity management.',
    price: '$1,999/month',
    marketPrice: '$3000-6000/month',
    features: [
      'Custom blockchain development',
      'Smart contract creation',
      'DApp development',
      'System integration',
      'Security auditing',
      'Token development',
      'DeFi solutions',
      'Compliance consulting'
    ],
    benefits: [
      'Enhance data security',
      'Improve transparency',
      'Reduce transaction costs',
      'Enable new business models'
    ],
    capabilities: [
      'Blockchain architecture design',
      'Smart contract development',
      'Cryptocurrency integration',
      'Supply chain solutions',
      'Identity management',
      'Financial applications'
    ],
    icon: 'Shield',
    path: '/blockchain-solutions',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'iot-development',
    name: 'IoT Development & Integration',
    description: 'Complete IoT solutions from device development to cloud integration',
    longDescription: 'Build connected solutions with our comprehensive IoT development services. We design and develop IoT devices, create cloud platforms for data management, and integrate everything into your existing systems. Perfect for smart homes, industrial monitoring, and connected products.',
    price: '$1,499/month',
    marketPrice: '$2000-4000/month',
    features: [
      'IoT device development',
      'Sensor integration',
      'Cloud platform development',
      'Data analytics and visualization',
      'Mobile app development',
      'Security implementation',
      'Device management',
      'Scalability planning'
    ],
    benefits: [
      'Enable smart operations',
      'Improve efficiency and monitoring',
      'Create new revenue streams',
      'Enhance customer experience'
    ],
    capabilities: [
      'Hardware development',
      'Firmware programming',
      'Cloud integration',
      'Data processing',
      'Mobile applications',
      'System monitoring'
    ],
    icon: 'Cpu',
    path: '/iot-development',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation & CI/CD',
    description: 'Streamline development workflows with automated DevOps pipelines',
    longDescription: 'Accelerate your software delivery with our comprehensive DevOps automation services. We set up CI/CD pipelines, implement infrastructure as code, configure monitoring and logging, and optimize your entire development workflow. Reduce deployment time and improve reliability.',
    price: '$1,299/month',
    marketPrice: '$1800-3500/month',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Automated testing',
      'Monitoring and alerting',
      'Security scanning',
      'Performance optimization',
      'Disaster recovery'
    ],
    benefits: [
      'Reduce deployment time by 80%',
      'Improve code quality',
      'Increase system reliability',
      'Enable faster feature delivery'
    ],
    capabilities: [
      'Pipeline automation',
      'Infrastructure management',
      'Container deployment',
      'Monitoring setup',
      'Security implementation',
      'Performance optimization'
    ],
    icon: 'Settings',
    path: '/devops-automation',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    longDescription: 'Create powerful mobile applications that engage users and drive business growth. We develop both native and cross-platform apps using the latest technologies. From concept to deployment, we handle UI/UX design, development, testing, and app store optimization.',
    price: '$2,499/month',
    marketPrice: '$3500-7000/month',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'API integration',
      'Push notifications',
      'Offline functionality',
      'App store optimization',
      'Maintenance and updates'
    ],
    benefits: [
      'Reach mobile users effectively',
      'Improve customer engagement',
      'Create new revenue streams',
      'Enhance brand presence'
    ],
    capabilities: [
      'iOS app development',
      'Android app development',
      'Cross-platform development',
      'UI/UX design',
      'Backend integration',
      'App store deployment'
    ],
    icon: 'Smartphone',
    path: '/mobile-app-development',
    category: 'it',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

// Combine all services
export const allServices = [
  ...aiServices, 
  ...microSaasServices, 
  ...itServices,
  ...additionalAiServices,
  ...additionalMicroSaasServices,
  ...additionalItServices
];