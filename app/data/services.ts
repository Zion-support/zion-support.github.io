export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging-tech';
  subcategory: string;
  features: string[];
  benefits: string[];
  pricing: {
    starting: number;
    period: 'month' | 'year' | 'one-time';
    currency: 'USD';
    popular?: boolean;
  };
  marketPrice?: {
    min: number;
    max: number;
    period: 'month' | 'year';
  };
  capabilities: string[];
  useCases: string[];
  technologies: string[];
  targetAudience: string[];
  implementationTime: string;
  support: string[];
  compliance: string[];
  integrations: string[];
  demoUrl?: string;
  documentationUrl?: string;
  contactEmail: string;
  contactPhone: string;
}

export const microSaasServices: Service[] = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Generate high-quality content at scale with advanced AI technology',
    longDescription: 'Our AI Content Generator Pro is a comprehensive platform that uses cutting-edge natural language processing to create engaging, SEO-optimized content for blogs, social media, marketing materials, and more. With advanced AI models and customizable templates, you can produce professional content 10x faster than traditional methods.',
    icon: 'FileText',
    category: 'micro-saas',
    subcategory: 'content-creation',
    features: [
      'Multi-format content generation (blogs, social media, emails, ads)',
      'SEO optimization with keyword research integration',
      'Brand voice customization and tone adjustment',
      'Plagiarism detection and originality scoring',
      'Multi-language support (50+ languages)',
      'Content calendar and scheduling',
      'Team collaboration tools',
      'Analytics and performance tracking',
      'API integration for existing workflows',
      'Custom template creation'
    ],
    benefits: [
      'Save 80% time on content creation',
      'Increase content output by 500%',
      'Improve SEO rankings by 40%',
      'Reduce content costs by 60%',
      'Maintain consistent brand voice',
      'Scale content production effortlessly'
    ],
    pricing: {
      starting: 97,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 29,
      max: 299,
      period: 'month'
    },
    capabilities: [
      'Blog post generation (500-3000 words)',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions',
      'Ad copy generation',
      'Press releases',
      'Technical documentation',
      'Creative writing'
    ],
    useCases: [
      'Marketing agencies scaling content production',
      'E-commerce businesses creating product descriptions',
      'Bloggers and content creators',
      'SaaS companies needing documentation',
      'Real estate agents creating property listings',
      'Restaurants updating menus and descriptions'
    ],
    technologies: [
      'GPT-4 and Claude AI models',
      'Natural Language Processing',
      'Machine Learning algorithms',
      'RESTful API architecture',
      'React and Node.js frontend',
      'PostgreSQL database',
      'Redis caching',
      'AWS cloud infrastructure'
    ],
    targetAudience: [
      'Content marketers',
      'Digital agencies',
      'E-commerce businesses',
      'Bloggers and influencers',
      'SaaS companies',
      'Small to medium businesses'
    ],
    implementationTime: '1-2 weeks',
    support: [
      '24/7 email support',
      'Live chat during business hours',
      'Video tutorials and documentation',
      'Monthly webinars',
      'Dedicated account manager for enterprise'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'CCPA compliant',
      'ISO 27001 security standards'
    ],
    integrations: [
      'WordPress',
      'HubSpot',
      'Salesforce',
      'Mailchimp',
      'Hootsuite',
      'Google Analytics',
      'Zapier',
      'Custom API endpoints'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/ai-content-generator',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content-generator',
    contactEmail: 'content@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-crm-automation',
    name: 'AI-Powered CRM Automation Suite',
    description: 'Intelligent customer relationship management with AI-driven insights and automation',
    longDescription: 'Transform your sales and customer service with our AI-powered CRM that learns from your data to predict customer behavior, automate follow-ups, and optimize your sales pipeline. Built with advanced machine learning algorithms, it provides actionable insights and automates routine tasks to maximize your team\'s productivity.',
    icon: 'Users',
    category: 'micro-saas',
    subcategory: 'crm',
    features: [
      'AI-powered lead scoring and qualification',
      'Automated email sequences and follow-ups',
      'Predictive analytics for sales forecasting',
      'Customer sentiment analysis',
      'Smart task prioritization',
      'Automated data entry and enrichment',
      'Custom dashboard and reporting',
      'Mobile app for on-the-go access',
      'Integration with 100+ tools',
      'Advanced workflow automation'
    ],
    benefits: [
      'Increase sales conversion by 35%',
      'Reduce manual data entry by 90%',
      'Improve customer satisfaction by 45%',
      'Save 15 hours per week per sales rep',
      'Boost lead qualification accuracy by 60%',
      'Enhance customer retention by 25%'
    ],
    pricing: {
      starting: 149,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 25,
      max: 500,
      period: 'month'
    },
    capabilities: [
      'Lead management and tracking',
      'Sales pipeline automation',
      'Customer communication history',
      'Deal forecasting and analytics',
      'Email marketing automation',
      'Task and activity management',
      'Document and file storage',
      'Team collaboration tools'
    ],
    useCases: [
      'Sales teams managing leads and opportunities',
      'Customer service departments',
      'Real estate agencies',
      'Insurance companies',
      'Financial services',
      'Healthcare practices',
      'E-commerce businesses'
    ],
    technologies: [
      'Machine Learning algorithms',
      'Natural Language Processing',
      'Predictive analytics',
      'RESTful API',
      'React and Node.js',
      'MongoDB database',
      'Redis caching',
      'AWS cloud services'
    ],
    targetAudience: [
      'Sales teams',
      'Customer service managers',
      'Small to medium businesses',
      'Sales managers',
      'Marketing teams',
      'Customer success managers'
    ],
    implementationTime: '2-3 weeks',
    support: [
      '24/7 technical support',
      'Dedicated onboarding specialist',
      'Training sessions and workshops',
      'Custom integration support',
      'Priority support for enterprise'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'HIPAA compliant (healthcare)',
      'PCI DSS compliant'
    ],
    integrations: [
      'Salesforce',
      'HubSpot',
      'Pipedrive',
      'Zapier',
      'Mailchimp',
      'Slack',
      'Microsoft Teams',
      'Google Workspace'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/ai-crm',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-crm',
    contactEmail: 'crm@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-invoice-generator',
    name: 'Smart Invoice Generator',
    description: 'Automated invoice generation with AI-powered expense tracking and payment processing',
    longDescription: 'Streamline your billing process with our intelligent invoice generator that automatically creates professional invoices, tracks expenses, manages recurring billing, and processes payments. Our AI learns from your billing patterns to suggest optimal payment terms and identify potential issues before they become problems.',
    icon: 'Receipt',
    category: 'micro-saas',
    subcategory: 'finance',
    features: [
      'AI-powered invoice generation and customization',
      'Automated recurring billing setup',
      'Smart expense categorization and tracking',
      'Payment processing integration',
      'Late payment reminders and follow-ups',
      'Multi-currency support',
      'Tax calculation and compliance',
      'Client portal for invoice viewing',
      'Advanced reporting and analytics',
      'Mobile app for expense tracking'
    ],
    benefits: [
      'Reduce invoice processing time by 85%',
      'Improve payment collection by 40%',
      'Eliminate manual data entry errors',
      'Save 10+ hours per week on billing',
      'Increase cash flow visibility',
      'Reduce late payments by 60%'
    ],
    pricing: {
      starting: 29,
      period: 'month',
      currency: 'USD',
      popular: false
    },
    marketPrice: {
      min: 9,
      max: 99,
      period: 'month'
    },
    capabilities: [
      'Invoice creation and customization',
      'Expense tracking and categorization',
      'Payment processing',
      'Client management',
      'Recurring billing automation',
      'Financial reporting',
      'Tax preparation assistance',
      'Multi-business support'
    ],
    useCases: [
      'Freelancers and consultants',
      'Small businesses and startups',
      'Service-based companies',
      'E-commerce businesses',
      'Real estate professionals',
      'Healthcare practices',
      'Legal firms',
      'Creative agencies'
    ],
    technologies: [
      'Machine Learning for categorization',
      'OCR for receipt scanning',
      'Blockchain for secure transactions',
      'React and Node.js',
      'PostgreSQL database',
      'Stripe payment processing',
      'AWS cloud infrastructure',
      'Mobile React Native app'
    ],
    targetAudience: [
      'Freelancers',
      'Small business owners',
      'Accountants',
      'Bookkeepers',
      'Service providers',
      'E-commerce merchants'
    ],
    implementationTime: '1 week',
    support: [
      'Email support',
      'Live chat',
      'Video tutorials',
      'Phone support for premium users',
      'Account setup assistance'
    ],
    compliance: [
      'PCI DSS compliant',
      'SOC 2 Type II certified',
      'GDPR compliant',
      'Tax compliance automation'
    ],
    integrations: [
      'QuickBooks',
      'Xero',
      'Stripe',
      'PayPal',
      'Bank accounts',
      'Credit card processors',
      'Accounting software',
      'CRM systems'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/invoice-generator',
    documentationUrl: 'https://docs.ziontechgroup.com/invoice-generator',
    contactEmail: 'billing@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Management Suite',
    description: 'Intelligent project management with AI-powered resource optimization and risk prediction',
    longDescription: 'Revolutionize your project management with AI that predicts bottlenecks, optimizes resource allocation, and provides intelligent insights to keep projects on track. Our platform learns from your team\'s patterns to suggest the best project approaches and automatically adjusts timelines based on real-time data.',
    icon: 'Calendar',
    category: 'micro-saas',
    subcategory: 'project-management',
    features: [
      'AI-powered project planning and scheduling',
      'Resource optimization and allocation',
      'Risk prediction and mitigation suggestions',
      'Automated progress tracking',
      'Team performance analytics',
      'Smart task prioritization',
      'Budget tracking and forecasting',
      'Collaborative workspace',
      'Time tracking and reporting',
      'Integration with 50+ tools'
    ],
    benefits: [
      'Complete projects 30% faster',
      'Reduce project overruns by 50%',
      'Improve resource utilization by 40%',
      'Increase team productivity by 25%',
      'Better project visibility and control',
      'Proactive risk management'
    ],
    pricing: {
      starting: 79,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 5,
      max: 200,
      period: 'month'
    },
    capabilities: [
      'Project planning and scheduling',
      'Task and milestone tracking',
      'Team collaboration tools',
      'Resource management',
      'Budget and cost tracking',
      'Risk assessment and management',
      'Reporting and analytics',
      'Client communication tools'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction companies',
      'Consulting firms',
      'Event planning companies',
      'Creative agencies',
      'IT departments',
      'Non-profit organizations'
    ],
    technologies: [
      'Machine Learning algorithms',
      'Predictive analytics',
      'Natural Language Processing',
      'React and Node.js',
      'MongoDB database',
      'WebSocket for real-time updates',
      'AWS cloud services',
      'Mobile responsive design'
    ],
    targetAudience: [
      'Project managers',
      'Team leads',
      'Agency owners',
      'Consultants',
      'Small to medium businesses',
      'Enterprise teams'
    ],
    implementationTime: '1-2 weeks',
    support: [
      '24/7 email support',
      'Live chat during business hours',
      'Video training sessions',
      'Custom onboarding',
      'Dedicated success manager'
    ],
    compliance: [
      'SOC 2 Type II certified',
      'GDPR compliant',
      'ISO 27001 security standards',
      'Data encryption at rest and in transit'
    ],
    integrations: [
      'Slack',
      'Microsoft Teams',
      'Jira',
      'Trello',
      'Asana',
      'GitHub',
      'Google Workspace',
      'Microsoft Office 365'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/project-manager',
    documentationUrl: 'https://docs.ziontechgroup.com/project-manager',
    contactEmail: 'projects@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media management with AI-powered content creation and scheduling',
    longDescription: 'Take your social media presence to the next level with our AI-powered social media management platform. It creates engaging content, schedules posts at optimal times, analyzes performance, and provides actionable insights to grow your audience and engagement across all major social platforms.',
    icon: 'Share2',
    category: 'micro-saas',
    subcategory: 'social-media',
    features: [
      'AI-generated social media content',
      'Optimal posting time recommendations',
      'Hashtag research and optimization',
      'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
      'Engagement tracking and analytics',
      'Competitor analysis and monitoring',
      'Influencer identification and outreach',
      'Content calendar management',
      'Automated responses and engagement',
      'ROI tracking and reporting'
    ],
    benefits: [
      'Increase social media engagement by 200%',
      'Save 20+ hours per week on social media management',
      'Grow followers by 150% on average',
      'Improve content performance by 80%',
      'Reduce social media management costs by 70%',
      'Better brand consistency across platforms'
    ],
    pricing: {
      starting: 49,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 15,
      max: 299,
      period: 'month'
    },
    capabilities: [
      'Content creation and curation',
      'Post scheduling and automation',
      'Engagement monitoring',
      'Analytics and reporting',
      'Hashtag research',
      'Competitor tracking',
      'Influencer marketing',
      'Social listening'
    ],
    useCases: [
      'Small businesses managing social presence',
      'Marketing agencies',
      'E-commerce brands',
      'Personal brands and influencers',
      'Restaurants and local businesses',
      'Non-profit organizations',
      'Real estate agents',
      'Healthcare practices'
    ],
    technologies: [
      'Natural Language Processing',
      'Computer Vision for image analysis',
      'Machine Learning for optimization',
      'Social media APIs',
      'React and Node.js',
      'MongoDB database',
      'Redis for caching',
      'AWS cloud infrastructure'
    ],
    targetAudience: [
      'Social media managers',
      'Marketing professionals',
      'Small business owners',
      'Content creators',
      'Digital agencies',
      'E-commerce businesses'
    ],
    implementationTime: '1 week',
    support: [
      'Email support',
      'Live chat',
      'Video tutorials',
      'Social media strategy consultation',
      'Content creation tips and best practices'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'Platform API compliance',
      'Data privacy protection'
    ],
    integrations: [
      'Facebook Business',
      'Instagram Business',
      'Twitter API',
      'LinkedIn Business',
      'TikTok for Business',
      'Pinterest Business',
      'Google Analytics',
      'Canva for design'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/social-media-manager',
    documentationUrl: 'https://docs.ziontechgroup.com/social-media-manager',
    contactEmail: 'social@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Automation',
    description: 'Intelligent email marketing with AI-powered personalization and automation',
    longDescription: 'Maximize your email marketing ROI with our AI-powered platform that personalizes every email, optimizes send times, and automates complex campaigns. Our machine learning algorithms analyze subscriber behavior to deliver the right message to the right person at the right time, dramatically improving open rates and conversions.',
    icon: 'Mail',
    category: 'micro-saas',
    subcategory: 'email-marketing',
    features: [
      'AI-powered email personalization',
      'Automated campaign creation and optimization',
      'Smart send time optimization',
      'Advanced segmentation and targeting',
      'A/B testing with AI recommendations',
      'Subject line optimization',
      'Content generation and suggestions',
      'Behavioral trigger automation',
      'Advanced analytics and reporting',
      'Integration with 100+ platforms'
    ],
    benefits: [
      'Increase email open rates by 60%',
      'Boost click-through rates by 85%',
      'Improve conversion rates by 45%',
      'Reduce unsubscribe rates by 30%',
      'Save 15+ hours per week on email marketing',
      'Increase revenue by 200% from email campaigns'
    ],
    pricing: {
      starting: 99,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 9,
      max: 500,
      period: 'month'
    },
    capabilities: [
      'Email campaign creation',
      'List management and segmentation',
      'Automation workflows',
      'Template design and customization',
      'A/B testing',
      'Analytics and reporting',
      'Deliverability optimization',
      'Compliance management'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Non-profit organizations',
      'Real estate professionals',
      'Healthcare practices',
      'Educational institutions',
      'Event organizers'
    ],
    technologies: [
      'Machine Learning algorithms',
      'Natural Language Processing',
      'Predictive analytics',
      'Email deliverability optimization',
      'React and Node.js',
      'PostgreSQL database',
      'Redis caching',
      'AWS SES integration'
    ],
    targetAudience: [
      'Email marketers',
      'Digital marketing managers',
      'E-commerce businesses',
      'Marketing agencies',
      'Small business owners',
      'Content creators'
    ],
    implementationTime: '1-2 weeks',
    support: [
      '24/7 email support',
      'Live chat during business hours',
      'Email marketing strategy consultation',
      'Template customization assistance',
      'Deliverability optimization support'
    ],
    compliance: [
      'CAN-SPAM Act compliant',
      'GDPR compliant',
      'CASL compliant',
      'SOC 2 Type II certified'
    ],
    integrations: [
      'Shopify',
      'WooCommerce',
      'Salesforce',
      'HubSpot',
      'Mailchimp',
      'Constant Contact',
      'Zapier',
      'Google Analytics'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/email-marketing',
    documentationUrl: 'https://docs.ziontechgroup.com/email-marketing',
    contactEmail: 'email@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder Pro',
    description: 'Build intelligent chatbots with advanced natural language processing and machine learning',
    longDescription: 'Create sophisticated chatbots that understand context, learn from conversations, and provide human-like responses. Our platform uses state-of-the-art NLP models to build chatbots that can handle complex queries, integrate with your existing systems, and provide 24/7 customer support.',
    icon: 'MessageCircle',
    category: 'ai',
    subcategory: 'conversational-ai',
    features: [
      'Drag-and-drop chatbot builder',
      'Advanced NLP and intent recognition',
      'Multi-language support (100+ languages)',
      'Voice and text conversation modes',
      'Integration with CRM and helpdesk systems',
      'Analytics and conversation insights',
      'A/B testing for responses',
      'Custom training with your data',
      'API for custom integrations',
      'White-label solutions'
    ],
    benefits: [
      'Reduce customer support costs by 60%',
      'Improve response time by 90%',
      'Handle 80% of customer queries automatically',
      'Increase customer satisfaction by 40%',
      'Scale support 24/7 without additional staff',
      'Gather valuable customer insights'
    ],
    pricing: {
      starting: 199,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 29,
      max: 999,
      period: 'month'
    },
    capabilities: [
      'Natural language understanding',
      'Intent recognition and classification',
      'Context-aware conversations',
      'Multi-turn dialogue management',
      'Sentiment analysis',
      'Knowledge base integration',
      'Live agent handoff',
      'Conversation analytics'
    ],
    useCases: [
      'Customer support automation',
      'Lead qualification and nurturing',
      'E-commerce product recommendations',
      'Healthcare patient triage',
      'Financial services inquiries',
      'HR and recruitment screening',
      'Educational tutoring',
      'Real estate property inquiries'
    ],
    technologies: [
      'GPT-4 and Claude AI models',
      'Natural Language Processing',
      'Machine Learning algorithms',
      'WebSocket for real-time communication',
      'React and Node.js',
      'MongoDB for conversation storage',
      'Redis for session management',
      'AWS cloud infrastructure'
    ],
    targetAudience: [
      'Customer service managers',
      'E-commerce businesses',
      'SaaS companies',
      'Healthcare organizations',
      'Financial institutions',
      'Educational institutions'
    ],
    implementationTime: '2-4 weeks',
    support: [
      '24/7 technical support',
      'Dedicated implementation specialist',
      'Training and onboarding sessions',
      'Custom integration support',
      'Ongoing optimization assistance'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'HIPAA compliant (healthcare)',
      'PCI DSS compliant'
    ],
    integrations: [
      'Salesforce',
      'Zendesk',
      'Intercom',
      'Slack',
      'Microsoft Teams',
      'WhatsApp Business',
      'Facebook Messenger',
      'Custom APIs'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/chatbot-builder',
    documentationUrl: 'https://docs.ziontechgroup.com/chatbot-builder',
    contactEmail: 'chatbot@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics Platform',
    description: 'Advanced data analytics with AI-powered insights and predictive modeling',
    longDescription: 'Transform your raw data into actionable insights with our AI-powered analytics platform. It automatically identifies patterns, predicts trends, and generates intelligent reports that help you make data-driven decisions. Our machine learning algorithms continuously learn from your data to provide increasingly accurate predictions and recommendations.',
    icon: 'BarChart3',
    category: 'ai',
    subcategory: 'data-analytics',
    features: [
      'Automated data processing and cleaning',
      'AI-powered pattern recognition',
      'Predictive modeling and forecasting',
      'Natural language query interface',
      'Interactive dashboards and visualizations',
      'Real-time data monitoring',
      'Anomaly detection and alerting',
      'Custom model training',
      'API for data integration',
      'Automated report generation'
    ],
    benefits: [
      'Reduce data analysis time by 75%',
      'Improve decision accuracy by 50%',
      'Identify hidden patterns and opportunities',
      'Predict future trends with 85% accuracy',
      'Automate routine reporting tasks',
      'Enable data-driven decision making'
    ],
    pricing: {
      starting: 299,
      period: 'month',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 50,
      max: 2000,
      period: 'month'
    },
    capabilities: [
      'Data visualization and dashboards',
      'Statistical analysis and modeling',
      'Machine learning predictions',
      'Time series analysis',
      'Clustering and segmentation',
      'Regression analysis',
      'Classification algorithms',
      'Deep learning models'
    ],
    useCases: [
      'Business intelligence and reporting',
      'Sales forecasting and planning',
      'Customer behavior analysis',
      'Financial risk assessment',
      'Supply chain optimization',
      'Marketing campaign optimization',
      'Healthcare patient outcomes',
      'Manufacturing quality control'
    ],
    technologies: [
      'Python and R for data science',
      'TensorFlow and PyTorch',
      'Apache Spark for big data',
      'React and D3.js for visualization',
      'PostgreSQL and MongoDB',
      'Redis for caching',
      'AWS and Google Cloud',
      'Jupyter notebooks'
    ],
    targetAudience: [
      'Data scientists',
      'Business analysts',
      'Marketing managers',
      'Financial analysts',
      'Operations managers',
      'C-level executives'
    ],
    implementationTime: '3-6 weeks',
    support: [
      '24/7 technical support',
      'Dedicated data scientist consultation',
      'Custom model development',
      'Training and workshops',
      'Ongoing optimization'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'HIPAA compliant (healthcare)',
      'Data encryption and security'
    ],
    integrations: [
      'Google Analytics',
      'Salesforce',
      'HubSpot',
      'MySQL and PostgreSQL',
      'Excel and CSV files',
      'REST APIs',
      'Webhook integrations',
      'Cloud storage services'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/data-analytics',
    documentationUrl: 'https://docs.ziontechgroup.com/data-analytics',
    contactEmail: 'analytics@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'ai-image-recognition',
    name: 'AI Image Recognition System',
    description: 'Advanced computer vision for automated image analysis and object detection',
    longDescription: 'Leverage cutting-edge computer vision technology to automatically analyze, categorize, and extract insights from images. Our AI system can identify objects, faces, text, and scenes with high accuracy, making it perfect for content moderation, quality control, security, and automated image processing workflows.',
    icon: 'Camera',
    category: 'ai',
    subcategory: 'computer-vision',
    features: [
      'Object detection and classification',
      'Facial recognition and analysis',
      'Text extraction (OCR) from images',
      'Scene and context understanding',
      'Content moderation and filtering',
      'Quality assessment and enhancement',
      'Batch processing capabilities',
      'Real-time image analysis',
      'Custom model training',
      'API for easy integration'
    ],
    benefits: [
      'Automate image processing workflows',
      'Improve content quality and consistency',
      'Reduce manual image review time by 90%',
      'Enhance security and monitoring',
      'Enable automated content moderation',
      'Extract valuable data from images'
    ],
    pricing: {
      starting: 149,
      period: 'month',
      currency: 'USD',
      popular: false
    },
    marketPrice: {
      min: 20,
      max: 500,
      period: 'month'
    },
    capabilities: [
      'Object detection and recognition',
      'Facial recognition and verification',
      'Optical Character Recognition (OCR)',
      'Image classification and tagging',
      'Content moderation',
      'Quality assessment',
      'Custom model training',
      'Batch processing'
    ],
    useCases: [
      'E-commerce product categorization',
      'Security and surveillance',
      'Content moderation for social media',
      'Medical image analysis',
      'Quality control in manufacturing',
      'Document digitization',
      'Automotive safety systems',
      'Retail inventory management'
    ],
    technologies: [
      'Convolutional Neural Networks (CNN)',
      'TensorFlow and PyTorch',
      'OpenCV for image processing',
      'YOLO for object detection',
      'React and Node.js',
      'MongoDB for metadata storage',
      'AWS and Google Cloud',
      'GPU acceleration'
    ],
    targetAudience: [
      'E-commerce businesses',
      'Security companies',
      'Content platforms',
      'Healthcare organizations',
      'Manufacturing companies',
      'Software developers'
    ],
    implementationTime: '2-4 weeks',
    support: [
      '24/7 technical support',
      'Custom model development',
      'Integration assistance',
      'Performance optimization',
      'Training and documentation'
    ],
    compliance: [
      'GDPR compliant',
      'SOC 2 Type II certified',
      'Data privacy protection',
      'Secure image processing'
    ],
    integrations: [
      'AWS S3 and Google Cloud Storage',
      'REST APIs',
      'Webhook notifications',
      'Database systems',
      'Content management systems',
      'Mobile applications',
      'IoT devices',
      'Custom applications'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/image-recognition',
    documentationUrl: 'https://docs.ziontechgroup.com/image-recognition',
    contactEmail: 'vision@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security',
    longDescription: 'Migrate your applications and data to the cloud with our expert cloud migration services. We ensure zero downtime, enhanced security, and optimized performance while reducing costs. Our certified cloud architects handle everything from planning to execution, ensuring a smooth transition to AWS, Azure, or Google Cloud.',
    icon: 'Cloud',
    category: 'it',
    subcategory: 'cloud-services',
    features: [
      'Comprehensive cloud readiness assessment',
      'Zero-downtime migration strategy',
      'Data security and compliance validation',
      'Performance optimization and monitoring',
      'Cost optimization and management',
      'Disaster recovery and backup solutions',
      'Multi-cloud and hybrid cloud strategies',
      '24/7 monitoring and support',
      'Training and knowledge transfer',
      'Post-migration optimization'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve system performance by 60%',
      'Enhance security and compliance',
      'Enable scalability and flexibility',
      'Reduce maintenance overhead',
      'Improve disaster recovery capabilities'
    ],
    pricing: {
      starting: 5000,
      period: 'one-time',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 2000,
      max: 50000,
      period: 'one-time'
    },
    capabilities: [
      'Application migration',
      'Database migration',
      'Data migration and synchronization',
      'Infrastructure as Code (IaC)',
      'Container orchestration',
      'Load balancing and auto-scaling',
      'Security hardening',
      'Performance monitoring'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Disaster recovery planning',
      'Scalability improvements',
      'Cost reduction initiatives',
      'Compliance requirements',
      'Global expansion',
      'Digital transformation'
    ],
    technologies: [
      'AWS, Azure, Google Cloud',
      'Docker and Kubernetes',
      'Terraform and CloudFormation',
      'Ansible and Chef',
      'Jenkins and GitLab CI/CD',
      'Prometheus and Grafana',
      'ELK Stack for logging',
      'Security scanning tools'
    ],
    targetAudience: [
      'Enterprise companies',
      'Mid-size businesses',
      'Government agencies',
      'Healthcare organizations',
      'Financial institutions',
      'E-commerce businesses'
    ],
    implementationTime: '4-12 weeks',
    support: [
      '24/7 migration support',
      'Dedicated project manager',
      'Certified cloud architects',
      'Training and documentation',
      'Post-migration support'
    ],
    compliance: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'HIPAA compliant (healthcare)',
      'PCI DSS compliant'
    ],
    integrations: [
      'AWS services',
      'Microsoft Azure',
      'Google Cloud Platform',
      'On-premises systems',
      'Third-party applications',
      'Monitoring tools',
      'Security solutions',
      'Backup systems'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/cloud-migration',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-migration',
    contactEmail: 'cloud@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Comprehensive Cybersecurity Audit',
    description: 'Complete security assessment and vulnerability analysis with remediation recommendations',
    longDescription: 'Protect your business with our comprehensive cybersecurity audit that identifies vulnerabilities, assesses risks, and provides actionable recommendations. Our certified security experts use industry-leading tools and methodologies to evaluate your security posture and help you implement robust security measures.',
    icon: 'Shield',
    category: 'it',
    subcategory: 'cybersecurity',
    features: [
      'Vulnerability assessment and penetration testing',
      'Security policy review and recommendations',
      'Network security analysis',
      'Application security testing',
      'Compliance assessment (SOC 2, ISO 27001, HIPAA)',
      'Employee security awareness evaluation',
      'Incident response plan review',
      'Security architecture assessment',
      'Risk assessment and prioritization',
      'Detailed remediation roadmap'
    ],
    benefits: [
      'Identify and fix security vulnerabilities',
      'Improve compliance posture',
      'Reduce security risks by 80%',
      'Enhance incident response capabilities',
      'Protect sensitive data and assets',
      'Meet regulatory requirements'
    ],
    pricing: {
      starting: 2500,
      period: 'one-time',
      currency: 'USD',
      popular: true
    },
    marketPrice: {
      min: 1000,
      max: 25000,
      period: 'one-time'
    },
    capabilities: [
      'Network penetration testing',
      'Web application security testing',
      'Mobile application security',
      'Social engineering testing',
      'Physical security assessment',
      'Wireless security testing',
      'Database security assessment',
      'Cloud security evaluation'
    ],
    useCases: [
      'Compliance requirements',
      'Security incident investigation',
      'Merger and acquisition due diligence',
      'Regular security assessments',
      'Third-party vendor evaluation',
      'Insurance requirements',
      'Customer security requirements',
      'Regulatory compliance'
    ],
    technologies: [
      'Nessus and OpenVAS',
      'Burp Suite and OWASP ZAP',
      'Metasploit Framework',
      'Nmap and Wireshark',
      'Custom security tools',
      'SIEM platforms',
      'Vulnerability scanners',
      'Penetration testing tools'
    ],
    targetAudience: [
      'Enterprise companies',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies',
      'E-commerce businesses',
      'SaaS companies'
    ],
    implementationTime: '2-4 weeks',
    support: [
      '24/7 security support',
      'Certified security experts',
      'Detailed reporting',
      'Remediation assistance',
      'Follow-up assessments'
    ],
    compliance: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'CISSP certified professionals',
      'CISA certified auditors'
    ],
    integrations: [
      'SIEM platforms',
      'Security monitoring tools',
      'Incident response systems',
      'Compliance management tools',
      'Vulnerability management',
      'Security awareness platforms',
      'Identity management systems',
      'Network security tools'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/cybersecurity-audit',
    documentationUrl: 'https://docs.ziontechgroup.com/cybersecurity-audit',
    contactEmail: 'security@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  }
];

export const emergingTechServices: Service[] = [
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Harness the power of quantum computing for complex problem solving and optimization',
    longDescription: 'Explore the future of computing with our quantum computing solutions. We help businesses leverage quantum algorithms for optimization, cryptography, machine learning, and complex simulations. Our quantum experts work with leading quantum hardware providers to deliver practical quantum solutions for real-world problems.',
    icon: 'Atom',
    category: 'emerging-tech',
    subcategory: 'quantum-computing',
    features: [
      'Quantum algorithm development and optimization',
      'Quantum machine learning implementations',
      'Quantum cryptography and security',
      'Quantum simulation and modeling',
      'Hybrid classical-quantum workflows',
      'Quantum cloud access and management',
      'Quantum error correction strategies',
      'Performance benchmarking and analysis',
      'Custom quantum applications',
      'Quantum education and training'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Enhance cryptographic security',
      'Accelerate machine learning training',
      'Enable breakthrough discoveries',
      'Future-proof your technology stack',
      'Gain competitive advantage'
    ],
    pricing: {
      starting: 10000,
      period: 'month',
      currency: 'USD',
      popular: false
    },
    marketPrice: {
      min: 5000,
      max: 100000,
      period: 'month'
    },
    capabilities: [
      'Quantum algorithm design',
      'Quantum circuit optimization',
      'Quantum machine learning',
      'Quantum cryptography',
      'Quantum simulation',
      'Hybrid computing',
      'Quantum benchmarking',
      'Custom quantum software'
    ],
    useCases: [
      'Financial portfolio optimization',
      'Drug discovery and molecular simulation',
      'Supply chain optimization',
      'Cryptographic key generation',
      'Machine learning acceleration',
      'Climate modeling',
      'Traffic optimization',
      'Logistics and routing'
    ],
    technologies: [
      'IBM Qiskit',
      'Google Cirq',
      'Microsoft Q#',
      'Rigetti Forest',
      'D-Wave Ocean',
      'IonQ quantum computers',
      'Quantum simulators',
      'Hybrid quantum-classical frameworks'
    ],
    targetAudience: [
      'Research institutions',
      'Financial services',
      'Pharmaceutical companies',
      'Government agencies',
      'Technology companies',
      'Academic institutions'
    ],
    implementationTime: '6-12 months',
    support: [
      'Dedicated quantum experts',
      '24/7 technical support',
      'Quantum education programs',
      'Custom development',
      'Ongoing optimization'
    ],
    compliance: [
      'Research compliance',
      'Data security standards',
      'Export control regulations',
      'Intellectual property protection'
    ],
    integrations: [
      'Classical computing systems',
      'Cloud platforms',
      'High-performance computing',
      'Machine learning frameworks',
      'Database systems',
      'API endpoints',
      'Visualization tools',
      'Simulation software'
    ],
    demoUrl: 'https://ziontechgroup.com/demo/quantum-computing',
    documentationUrl: 'https://docs.ziontechgroup.com/quantum-computing',
    contactEmail: 'quantum@ziontechgroup.com',
    contactPhone: '+1 302 464 0950'
  }
];

export const allServices = [
  ...microSaasServices,
  ...aiServices,
  ...itServices,
  ...emergingTechServices
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getServicesBySubcategory = (subcategory: string): Service[] => {
  return allServices.filter(service => service.subcategory === subcategory);
};