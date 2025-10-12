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

export const allServices = [...aiServices, ...microSaasServices, ...itServices];