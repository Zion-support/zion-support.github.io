// Comprehensive Services Data for Zion Tech Group
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'ai' | 'it' | 'micro-saas' | '5g' | 'cybersecurity' | 'cloud' | 'analytics' | 'automation';
  icon: string;
  color: string;
  price: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: string;
  link: string;
  featured: boolean;
  tags: string[];
  technicalSpecs: {
    apiSupport: boolean;
    integrations: string[];
    scalability: string;
    uptime: string;
    support: string;
  };
  pricing: {
    basic: { price: number; features: string[] };
    pro: { price: number; features: string[] };
    enterprise: { price: number; features: string[] };
  };
}

export const aiServices: Service[] = [
  {
    id: 'ai-business-intelligence-pro',
    title: 'AI Business Intelligence Pro',
    description: 'Advanced AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated insights.',
    longDescription: 'Transform your business data into actionable insights with our cutting-edge AI Business Intelligence Pro platform. Features advanced machine learning algorithms, real-time data processing, and intuitive dashboards that help you make data-driven decisions faster than ever before.',
    category: 'ai',
    icon: 'BarChart3',
    color: 'from-blue-500 to-cyan-500',
    price: 'Starting at $299/month',
    features: [
      'Real-time Analytics Dashboard',
      'Predictive Modeling & Forecasting',
      'Custom Report Generation',
      'API Integration & Webhooks',
      'Multi-tenant Architecture',
      'Advanced Data Visualization',
      'Automated Insights & Alerts',
      'Custom ML Model Training'
    ],
    benefits: [
      '40% faster decision making',
      '60% reduction in manual reporting',
      'Real-time business insights',
      'Predictive analytics accuracy up to 95%',
      'Seamless integration with existing systems',
      'Scalable cloud infrastructure'
    ],
    useCases: [
      'Sales performance analysis and forecasting',
      'Customer behavior prediction',
      'Financial risk assessment',
      'Supply chain optimization',
      'Marketing campaign effectiveness',
      'Operational efficiency monitoring'
    ],
    marketPrice: '$500-2000/month',
    link: '/ai-business-intelligence-pro',
    featured: true,
    tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning', 'Predictive Analytics'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Microsoft Power BI', 'Tableau', 'Slack', 'Teams'],
      scalability: 'Unlimited users and data sources',
      uptime: '99.9% SLA',
      support: '24/7 premium support with dedicated account manager'
    },
    pricing: {
      basic: { price: 299, features: ['Up to 5 data sources', 'Basic analytics', 'Email support', 'Standard reports'] },
      pro: { price: 599, features: ['Unlimited data sources', 'Advanced analytics', 'Priority support', 'Custom dashboards', 'API access'] },
      enterprise: { price: 1299, features: ['Everything in Pro', 'Dedicated infrastructure', 'Custom ML models', 'White-label solution', 'Dedicated support team'] }
    }
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Professional AI content creation platform with advanced language models, brand voice training, and multi-format output.',
    longDescription: 'Create high-quality, engaging content at scale with our AI Content Generation Pro platform. Features advanced natural language processing, brand voice customization, SEO optimization, and support for multiple content formats including blogs, social media, emails, and marketing materials.',
    category: 'ai',
    icon: 'FileText',
    color: 'from-purple-500 to-pink-500',
    price: 'Starting at $149/month',
    features: [
      'Advanced Language Models (GPT-4, Claude)',
      'Brand Voice Training & Customization',
      'SEO-Optimized Content Generation',
      'Multi-format Output (Blog, Social, Email)',
      'Plagiarism Detection & Originality Check',
      'Content Calendar & Scheduling',
      'Team Collaboration Tools',
      'Analytics & Performance Tracking'
    ],
    benefits: [
      '80% reduction in content creation time',
      'Consistent brand voice across all content',
      'SEO-optimized content that ranks higher',
      'Scalable content production',
      'Cost-effective content marketing',
      'Improved content quality and engagement'
    ],
    useCases: [
      'Blog post and article generation',
      'Social media content creation',
      'Email marketing campaigns',
      'Product descriptions and copy',
      'Technical documentation',
      'Marketing materials and brochures'
    ],
    marketPrice: '$200-800/month',
    link: '/ai-content-generation-pro',
    featured: true,
    tags: ['AI', 'Content Creation', 'Marketing', 'SEO', 'Natural Language Processing'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion'],
      scalability: 'Unlimited content generation',
      uptime: '99.9% SLA',
      support: '24/7 support with content strategy consultation'
    },
    pricing: {
      basic: { price: 149, features: ['10,000 words/month', 'Basic templates', 'Email support', 'Standard quality'] },
      pro: { price: 299, features: ['50,000 words/month', 'Advanced templates', 'Priority support', 'Brand voice training', 'API access'] },
      enterprise: { price: 599, features: ['Unlimited words', 'Custom models', 'White-label', 'Dedicated support', 'Custom integrations'] }
    }
  },
  {
    id: 'ai-cybersecurity-suite-pro',
    title: 'AI Cybersecurity Suite Pro',
    description: 'Advanced AI-powered cybersecurity platform with real-time threat detection, automated response, and compliance management.',
    longDescription: 'Protect your business with our comprehensive AI Cybersecurity Suite Pro. Features advanced threat detection using machine learning, automated incident response, compliance reporting, and 24/7 monitoring to keep your systems secure against evolving cyber threats.',
    category: 'cybersecurity',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    price: 'Starting at $399/month',
    features: [
      'AI-Powered Threat Detection',
      'Real-time Security Monitoring',
      'Automated Incident Response',
      'Compliance Reporting (SOC2, GDPR, HIPAA)',
      'Vulnerability Assessment & Management',
      'Security Analytics & Intelligence',
      'Multi-cloud Security Coverage',
      '24/7 Security Operations Center'
    ],
    benefits: [
      '99.9% threat detection accuracy',
      '60% faster incident response',
      'Automated compliance reporting',
      'Reduced security team workload',
      'Proactive threat prevention',
      'Comprehensive security coverage'
    ],
    useCases: [
      'Enterprise security monitoring',
      'Compliance and audit management',
      'Threat hunting and investigation',
      'Security incident response',
      'Vulnerability management',
      'Security awareness training'
    ],
    marketPrice: '$800-3000/month',
    link: '/ai-cybersecurity-suite-pro',
    featured: true,
    tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Compliance', 'Security Monitoring'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms', 'Ticketing systems', 'Slack', 'Teams'],
      scalability: 'Unlimited endpoints and users',
      uptime: '99.99% SLA',
      support: '24/7 SOC support with security experts'
    },
    pricing: {
      basic: { price: 399, features: ['Up to 100 endpoints', 'Basic monitoring', 'Email support', 'Standard reports'] },
      pro: { price: 799, features: ['Up to 500 endpoints', 'Advanced monitoring', 'Priority support', 'Custom dashboards', 'API access'] },
      enterprise: { price: 1599, features: ['Unlimited endpoints', 'Dedicated SOC', 'Custom integrations', 'White-label', 'Dedicated support team'] }
    }
  },
  {
    id: 'ai-customer-support-chatbot',
    title: 'AI Customer Support Chatbot',
    description: 'Intelligent customer support chatbot with natural language processing, sentiment analysis, and seamless human handoff.',
    longDescription: 'Enhance your customer experience with our AI Customer Support Chatbot. Features advanced natural language understanding, sentiment analysis, multi-language support, and seamless integration with your existing CRM and support systems.',
    category: 'ai',
    icon: 'Bot',
    color: 'from-green-500 to-emerald-500',
    price: 'Starting at $199/month',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support (50+ languages)',
      'Sentiment Analysis & Emotion Detection',
      'CRM Integration & Data Sync',
      'Live Chat Handoff to Human Agents',
      'Knowledge Base Management',
      'Analytics & Performance Metrics',
      'Custom Bot Personality & Branding'
    ],
    benefits: [
      '70% reduction in support tickets',
      '24/7 customer support availability',
      'Instant response to common queries',
      'Improved customer satisfaction',
      'Reduced support team workload',
      'Scalable customer service'
    ],
    useCases: [
      'Customer service automation',
      'Sales qualification and lead generation',
      'FAQ and knowledge base queries',
      'Order status and tracking',
      'Technical support assistance',
      'Appointment scheduling'
    ],
    marketPrice: '$300-1200/month',
    link: '/ai-customer-support-chatbot',
    featured: true,
    tags: ['AI', 'Customer Support', 'Chatbot', 'NLP', 'Automation'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Slack', 'Teams', 'WhatsApp', 'Facebook Messenger'],
      scalability: 'Unlimited conversations',
      uptime: '99.9% SLA',
      support: '24/7 support with chatbot optimization'
    },
    pricing: {
      basic: { price: 199, features: ['Up to 1,000 conversations/month', 'Basic NLP', 'Email support', 'Standard templates'] },
      pro: { price: 399, features: ['Up to 10,000 conversations/month', 'Advanced NLP', 'Priority support', 'Custom integrations', 'Analytics'] },
      enterprise: { price: 799, features: ['Unlimited conversations', 'Custom training', 'White-label', 'Dedicated support', 'Advanced analytics'] }
    }
  },
  {
    id: 'ai-code-assistant-pro',
    title: 'AI Code Assistant Pro',
    description: 'Intelligent code generation, review, and optimization platform with support for multiple programming languages.',
    longDescription: 'Accelerate your development process with our AI Code Assistant Pro. Features advanced code generation, automated code review, bug detection, performance optimization, and support for 20+ programming languages with intelligent suggestions and best practices.',
    category: 'ai',
    icon: 'Code',
    color: 'from-yellow-500 to-orange-500',
    price: 'Starting at $129/month',
    features: [
      'Multi-language Code Generation (20+ languages)',
      'Automated Code Review & Quality Analysis',
      'Bug Detection & Security Vulnerability Scanning',
      'Performance Optimization Suggestions',
      'Code Documentation Generation',
      'Refactoring Recommendations',
      'Git Integration & Version Control',
      'Team Collaboration & Code Sharing'
    ],
    benefits: [
      '50% faster development cycles',
      'Reduced bugs and security vulnerabilities',
      'Improved code quality and maintainability',
      'Automated documentation generation',
      'Enhanced team productivity',
      'Best practices enforcement'
    ],
    useCases: [
      'Rapid prototyping and MVP development',
      'Code review and quality assurance',
      'Legacy code modernization',
      'API development and integration',
      'Test case generation',
      'Technical documentation'
    ],
    marketPrice: '$200-1000/month',
    link: '/ai-code-assistant-pro',
    featured: true,
    tags: ['AI', 'Development', 'Code Generation', 'Code Review', 'Automation'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'IntelliJ', 'Slack', 'Teams', 'Jira'],
      scalability: 'Unlimited repositories and users',
      uptime: '99.9% SLA',
      support: '24/7 support with development consultation'
    },
    pricing: {
      basic: { price: 129, features: ['Up to 5 repositories', 'Basic code generation', 'Email support', 'Standard languages'] },
      pro: { price: 299, features: ['Up to 25 repositories', 'Advanced features', 'Priority support', 'Custom models', 'API access'] },
      enterprise: { price: 599, features: ['Unlimited repositories', 'Custom training', 'White-label', 'Dedicated support', 'Advanced analytics'] }
    }
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure-management',
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support.',
    longDescription: 'Optimize your cloud infrastructure with our comprehensive management services. Features automated scaling, cost optimization, disaster recovery, security hardening, and support for AWS, Azure, and Google Cloud platforms.',
    category: 'cloud',
    icon: 'Cloud',
    color: 'from-indigo-500 to-purple-500',
    price: 'Starting at $249/month',
    features: [
      'Multi-cloud Architecture Design',
      'Automated Scaling & Load Balancing',
      'Disaster Recovery & Backup Solutions',
      'Cost Optimization & Resource Management',
      'Security Hardening & Compliance',
      'Performance Monitoring & Analytics',
      '24/7 Infrastructure Monitoring',
      'Custom Migration Strategies'
    ],
    benefits: [
      '30% reduction in cloud costs',
      '99.9% uptime guarantee',
      'Automated disaster recovery',
      'Enhanced security posture',
      'Scalable infrastructure',
      'Expert cloud management'
    ],
    useCases: [
      'Cloud migration and modernization',
      'Hybrid cloud architecture',
      'Disaster recovery planning',
      'Cost optimization initiatives',
      'Security compliance management',
      'Performance optimization'
    ],
    marketPrice: '$500-2000/month',
    link: '/cloud-infrastructure-management',
    featured: true,
    tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure', 'DevOps', 'Scalability'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
      scalability: 'Unlimited resources',
      uptime: '99.9% SLA',
      support: '24/7 cloud engineering support'
    },
    pricing: {
      basic: { price: 249, features: ['Basic monitoring', 'Email support', 'Standard backup', 'Monthly reports'] },
      pro: { price: 499, features: ['Advanced monitoring', 'Priority support', 'Automated scaling', 'Cost optimization', 'API access'] },
      enterprise: { price: 999, features: ['Dedicated infrastructure', 'Custom solutions', 'White-label', 'Dedicated support team', 'Advanced analytics'] }
    }
  },
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services including penetration testing, security audits, and compliance management.',
    longDescription: 'Protect your business with our comprehensive cybersecurity solutions. Features penetration testing, security audits, compliance management, employee training, and ongoing security monitoring to keep your systems secure.',
    category: 'cybersecurity',
    icon: 'Shield',
    color: 'from-red-500 to-pink-500',
    price: 'Starting at $199/month',
    features: [
      'Penetration Testing & Vulnerability Assessment',
      'Security Audit & Risk Assessment',
      'Compliance Management (SOC2, GDPR, HIPAA)',
      'Employee Security Training',
      'Security Policy Development',
      'Incident Response Planning',
      'Ongoing Security Monitoring',
      'Security Awareness Programs'
    ],
    benefits: [
      'Enhanced security posture',
      'Compliance with industry standards',
      'Reduced security risks',
      'Improved employee awareness',
      'Proactive threat prevention',
      'Expert security guidance'
    ],
    useCases: [
      'Security compliance audits',
      'Penetration testing services',
      'Security policy development',
      'Employee training programs',
      'Incident response planning',
      'Ongoing security monitoring'
    ],
    marketPrice: '$400-1500/month',
    link: '/cybersecurity-solutions',
    featured: true,
    tags: ['Cybersecurity', 'Penetration Testing', 'Compliance', 'Security Audit', 'Risk Assessment'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['SIEM systems', 'Security tools', 'Compliance platforms', 'Training systems', 'Ticketing systems'],
      scalability: 'Unlimited assessments',
      uptime: 'N/A',
      support: '24/7 security expert support'
    },
    pricing: {
      basic: { price: 199, features: ['Basic security audit', 'Email support', 'Standard reports', 'Monthly monitoring'] },
      pro: { price: 399, features: ['Advanced security audit', 'Priority support', 'Penetration testing', 'Compliance management', 'API access'] },
      enterprise: { price: 799, features: ['Comprehensive security program', 'Dedicated security team', 'Custom solutions', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'web-development-services',
    title: 'Web Development Services',
    description: 'Professional web development services including custom websites, web applications, and e-commerce solutions.',
    longDescription: 'Create stunning, high-performance websites and web applications with our professional development services. Features modern frameworks, responsive design, SEO optimization, and custom functionality tailored to your business needs.',
    category: 'it',
    icon: 'Code',
    color: 'from-blue-500 to-cyan-500',
    price: 'Starting at $99/hour',
    features: [
      'Custom Website Development',
      'Web Application Development',
      'E-commerce Solutions',
      'Responsive Design & Mobile Optimization',
      'SEO Optimization & Performance',
      'Content Management Systems',
      'API Development & Integration',
      'Maintenance & Support Services'
    ],
    benefits: [
      'Modern, responsive websites',
      'SEO-optimized for better rankings',
      'Fast loading and performance',
      'Mobile-friendly design',
      'Custom functionality',
      'Ongoing maintenance and support'
    ],
    useCases: [
      'Corporate website development',
      'E-commerce platform creation',
      'Web application development',
      'Website redesign and optimization',
      'API development and integration',
      'Ongoing maintenance and updates'
    ],
    marketPrice: '$75-200/hour',
    link: '/web-development-services',
    featured: true,
    tags: ['Web Development', 'React', 'Next.js', 'E-commerce', 'SEO', 'Responsive Design'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Payment gateways', 'CRM systems', 'Analytics tools', 'Marketing platforms', 'Third-party APIs'],
      scalability: 'Unlimited scalability',
      uptime: '99.9% SLA',
      support: '24/7 development support'
    },
    pricing: {
      basic: { price: 99, features: ['Basic website', 'Email support', 'Standard hosting', 'Basic SEO'] },
      pro: { price: 149, features: ['Advanced website', 'Priority support', 'Advanced SEO', 'Custom features', 'API integration'] },
      enterprise: { price: 199, features: ['Custom web application', 'Dedicated team', 'White-label', 'Advanced analytics', 'Dedicated support'] }
    }
  },
  {
    id: 'mobile-development-services',
    title: 'Mobile Development Services',
    description: 'Professional mobile app development for iOS and Android with cross-platform solutions and native performance.',
    longDescription: 'Build powerful mobile applications with our professional development services. Features native iOS and Android development, cross-platform solutions, app store optimization, and ongoing maintenance and support.',
    category: 'it',
    icon: 'Smartphone',
    color: 'from-green-500 to-teal-500',
    price: 'Starting at $125/hour',
    features: [
      'Native iOS & Android Development',
      'Cross-platform Development (React Native, Flutter)',
      'App Store Optimization (ASO)',
      'UI/UX Design & Prototyping',
      'Backend Development & API Integration',
      'Push Notifications & Analytics',
      'App Testing & Quality Assurance',
      'App Store Publishing & Maintenance'
    ],
    benefits: [
      'Native performance and user experience',
      'Cross-platform code reusability',
      'App store optimization for better visibility',
      'Professional UI/UX design',
      'Scalable backend architecture',
      'Ongoing maintenance and updates'
    ],
    useCases: [
      'Consumer mobile applications',
      'Business productivity apps',
      'E-commerce mobile solutions',
      'IoT and connected device apps',
      'Gaming applications',
      'Enterprise mobile solutions'
    ],
    marketPrice: '$100-250/hour',
    link: '/mobile-development-services',
    featured: true,
    tags: ['Mobile Development', 'iOS', 'Android', 'React Native', 'Flutter', 'App Store'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Payment systems', 'Social media', 'Analytics platforms', 'Push notification services', 'Cloud services'],
      scalability: 'Unlimited users',
      uptime: '99.9% SLA',
      support: '24/7 mobile development support'
    },
    pricing: {
      basic: { price: 125, features: ['Basic mobile app', 'Email support', 'Standard features', 'Basic testing'] },
      pro: { price: 175, features: ['Advanced mobile app', 'Priority support', 'Advanced features', 'Comprehensive testing', 'API integration'] },
      enterprise: { price: 225, features: ['Custom mobile solution', 'Dedicated team', 'White-label', 'Advanced analytics', 'Dedicated support'] }
    }
  }
];

export const microSaasServices: Service[] = [
  {
    id: 'zion-analytics-pro',
    title: 'Zion Analytics Pro',
    description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting.',
    longDescription: 'Transform your business data into actionable insights with Zion Analytics Pro. Features advanced AI-powered analytics, real-time dashboards, predictive modeling, and automated reporting to help you make data-driven decisions.',
    category: 'micro-saas',
    icon: 'BarChart3',
    color: 'from-purple-500 to-cyan-500',
    price: 'Starting at $29/month',
    features: [
      'Real-time Analytics Dashboard',
      'AI-Powered Insights & Predictions',
      'Custom Report Builder',
      'Data Visualization Tools',
      'Automated Report Scheduling',
      'Multi-Data Source Integration',
      'Team Collaboration Features',
      'Mobile App Access'
    ],
    benefits: [
      '40% faster decision making',
      'Real-time business insights',
      'Automated reporting saves 10+ hours/week',
      'Easy-to-use interface',
      'Scalable for any business size',
      'No technical expertise required'
    ],
    useCases: [
      'Sales performance tracking',
      'Marketing campaign analysis',
      'Financial reporting and forecasting',
      'Customer behavior analysis',
      'Operational efficiency monitoring',
      'KPI tracking and management'
    ],
    marketPrice: '$50-200/month',
    link: '/zion-analytics-pro',
    featured: true,
    tags: ['Analytics', 'Business Intelligence', 'AI', 'Reporting', 'Dashboard'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'QuickBooks', 'Excel'],
      scalability: 'Unlimited data sources and users',
      uptime: '99.9% SLA',
      support: '24/7 email and chat support'
    },
    pricing: {
      basic: { price: 29, features: ['Up to 5 data sources', 'Basic dashboards', 'Email support', 'Standard reports'] },
      pro: { price: 59, features: ['Up to 20 data sources', 'Advanced dashboards', 'Priority support', 'Custom reports', 'API access'] },
      enterprise: { price: 99, features: ['Unlimited data sources', 'Custom dashboards', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'zion-security-shield',
    title: 'Zion Security Shield',
    description: 'Advanced cybersecurity protection with real-time threat detection, automated response, and compliance monitoring.',
    longDescription: 'Protect your business with Zion Security Shield, our comprehensive cybersecurity solution. Features real-time threat detection, automated incident response, compliance monitoring, and security awareness training.',
    category: 'micro-saas',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    price: 'Starting at $49/month',
    features: [
      'Real-time Threat Detection',
      'Automated Incident Response',
      'Compliance Monitoring (SOC2, GDPR)',
      'Security Awareness Training',
      'Vulnerability Scanning',
      'Security Analytics Dashboard',
      'Email Security Protection',
      'Mobile Device Management'
    ],
    benefits: [
      '99.9% threat detection accuracy',
      'Automated security response',
      'Compliance with industry standards',
      'Reduced security risks',
      'Employee security awareness',
      '24/7 security monitoring'
    ],
    useCases: [
      'Small business security protection',
      'Compliance management',
      'Threat monitoring and response',
      'Employee security training',
      'Vulnerability management',
      'Security incident response'
    ],
    marketPrice: '$100-400/month',
    link: '/zion-security-shield',
    featured: true,
    tags: ['Cybersecurity', 'Threat Detection', 'Compliance', 'Security Monitoring', 'Protection'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['SIEM systems', 'Firewalls', 'Email systems', 'Cloud platforms', 'Ticketing systems'],
      scalability: 'Up to 100 endpoints',
      uptime: '99.9% SLA',
      support: '24/7 security support'
    },
    pricing: {
      basic: { price: 49, features: ['Up to 10 endpoints', 'Basic monitoring', 'Email support', 'Standard reports'] },
      pro: { price: 99, features: ['Up to 50 endpoints', 'Advanced monitoring', 'Priority support', 'Custom dashboards', 'API access'] },
      enterprise: { price: 199, features: ['Up to 100 endpoints', 'Dedicated monitoring', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'zion-cloud-vault',
    title: 'Zion Cloud Vault',
    description: 'Secure cloud storage solution with advanced encryption, file sharing, and collaboration features.',
    longDescription: 'Store, share, and collaborate on your files securely with Zion Cloud Vault. Features end-to-end encryption, advanced file sharing, team collaboration tools, and seamless integration with your existing workflow.',
    category: 'micro-saas',
    icon: 'Cloud',
    color: 'from-blue-500 to-indigo-500',
    price: 'Starting at $9/month',
    features: [
      'End-to-End Encryption',
      'Advanced File Sharing & Permissions',
      'Team Collaboration Tools',
      'Version Control & File History',
      'Mobile App Access',
      'Integration with Popular Tools',
      'Automated Backup & Sync',
      'Advanced Security Features'
    ],
    benefits: [
      'Military-grade encryption',
      'Easy file sharing and collaboration',
      'Automatic backup and sync',
      'Mobile access from anywhere',
      'Integration with existing tools',
      'Scalable storage options'
    ],
    useCases: [
      'Document storage and sharing',
      'Team collaboration and file sharing',
      'Backup and disaster recovery',
      'Client file management',
      'Project file organization',
      'Secure file transfer'
    ],
    marketPrice: '$15-50/month',
    link: '/zion-cloud-vault',
    featured: true,
    tags: ['Cloud Storage', 'File Sharing', 'Collaboration', 'Encryption', 'Backup'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Google Workspace', 'Microsoft 365', 'Slack', 'Teams', 'Dropbox', 'Box', 'OneDrive'],
      scalability: 'Unlimited storage',
      uptime: '99.9% SLA',
      support: '24/7 email and chat support'
    },
    pricing: {
      basic: { price: 9, features: ['100GB storage', 'Basic sharing', 'Email support', 'Standard security'] },
      pro: { price: 19, features: ['1TB storage', 'Advanced sharing', 'Priority support', 'Advanced security', 'API access'] },
      enterprise: { price: 39, features: ['Unlimited storage', 'Custom features', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'zion-content-studio',
    title: 'Zion Content Studio',
    description: 'AI-powered content creation platform with templates, brand voice training, and multi-format output.',
    longDescription: 'Create engaging content at scale with Zion Content Studio. Features AI-powered content generation, brand voice customization, SEO optimization, and support for multiple content formats including blogs, social media, and marketing materials.',
    category: 'micro-saas',
    icon: 'FileText',
    color: 'from-pink-500 to-rose-500',
    price: 'Starting at $19/month',
    features: [
      'AI Content Generation',
      'Brand Voice Training',
      'SEO Optimization Tools',
      'Content Templates & Library',
      'Multi-format Output',
      'Content Calendar & Scheduling',
      'Team Collaboration Features',
      'Analytics & Performance Tracking'
    ],
    benefits: [
      '80% reduction in content creation time',
      'Consistent brand voice',
      'SEO-optimized content',
      'Scalable content production',
      'Easy-to-use interface',
      'Cost-effective content marketing'
    ],
    useCases: [
      'Blog post creation',
      'Social media content',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing materials',
      'Content calendar management'
    ],
    marketPrice: '$30-120/month',
    link: '/zion-content-studio',
    featured: true,
    tags: ['Content Creation', 'AI', 'Marketing', 'SEO', 'Social Media'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion'],
      scalability: 'Unlimited content generation',
      uptime: '99.9% SLA',
      support: '24/7 email and chat support'
    },
    pricing: {
      basic: { price: 19, features: ['5,000 words/month', 'Basic templates', 'Email support', 'Standard quality'] },
      pro: { price: 39, features: ['25,000 words/month', 'Advanced templates', 'Priority support', 'Brand voice training', 'API access'] },
      enterprise: { price: 79, features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'zion-data-sync',
    title: 'Zion Data Sync',
    description: 'Automated data synchronization platform with real-time updates, conflict resolution, and multi-source integration.',
    longDescription: 'Keep your data synchronized across all platforms with Zion Data Sync. Features real-time data synchronization, conflict resolution, multi-source integration, and automated data transformation to ensure data consistency.',
    category: 'micro-saas',
    icon: 'Database',
    color: 'from-teal-500 to-cyan-500',
    price: 'Starting at $39/month',
    features: [
      'Real-time Data Synchronization',
      'Multi-source Data Integration',
      'Conflict Resolution & Data Validation',
      'Automated Data Transformation',
      'Data Quality Monitoring',
      'Custom Mapping & Rules',
      'API Integration & Webhooks',
      'Data Backup & Recovery'
    ],
    benefits: [
      'Real-time data consistency',
      'Automated data synchronization',
      'Reduced manual data entry',
      'Improved data quality',
      'Seamless integration',
      'Scalable data management'
    ],
    useCases: [
      'CRM and marketing platform sync',
      'E-commerce data synchronization',
      'Financial data integration',
      'Customer data management',
      'Inventory synchronization',
      'Multi-platform data consistency'
    ],
    marketPrice: '$60-200/month',
    link: '/zion-data-sync',
    featured: true,
    tags: ['Data Sync', 'Integration', 'Automation', 'Data Management', 'API'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Salesforce', 'HubSpot', 'Shopify', 'QuickBooks', 'Stripe', 'Google Analytics', 'MySQL', 'PostgreSQL'],
      scalability: 'Unlimited data sources',
      uptime: '99.9% SLA',
      support: '24/7 email and chat support'
    },
    pricing: {
      basic: { price: 39, features: ['Up to 5 data sources', 'Basic sync', 'Email support', 'Standard mapping'] },
      pro: { price: 79, features: ['Up to 20 data sources', 'Advanced sync', 'Priority support', 'Custom mapping', 'API access'] },
      enterprise: { price: 149, features: ['Unlimited data sources', 'Custom sync', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  },
  {
    id: 'zion-lead-magnet',
    title: 'Zion Lead Magnet',
    description: 'AI-powered lead generation platform with automated nurturing, scoring, and conversion optimization.',
    longDescription: 'Generate and nurture high-quality leads with Zion Lead Magnet. Features AI-powered lead scoring, automated email nurturing, conversion optimization, and integration with popular CRM and marketing platforms.',
    category: 'micro-saas',
    icon: 'Target',
    color: 'from-orange-500 to-red-500',
    price: 'Starting at $29/month',
    features: [
      'AI-Powered Lead Scoring',
      'Automated Email Nurturing',
      'Lead Capture Forms & Landing Pages',
      'CRM Integration & Sync',
      'Conversion Tracking & Analytics',
      'A/B Testing & Optimization',
      'Lead Qualification & Routing',
      'Custom Lead Magnets'
    ],
    benefits: [
      '50% increase in lead quality',
      'Automated lead nurturing',
      'Higher conversion rates',
      'Reduced manual lead management',
      'Better lead qualification',
      'Scalable lead generation'
    ],
    useCases: [
      'Lead generation campaigns',
      'Email marketing automation',
      'Lead nurturing sequences',
      'Conversion rate optimization',
      'Lead qualification and routing',
      'Marketing campaign management'
    ],
    marketPrice: '$50-150/month',
    link: '/zion-lead-magnet',
    featured: true,
    tags: ['Lead Generation', 'Marketing Automation', 'Email Marketing', 'CRM', 'Conversion'],
    technicalSpecs: {
      apiSupport: true,
      integrations: ['Salesforce', 'HubSpot', 'Mailchimp', 'Constant Contact', 'Zapier', 'Google Analytics', 'Facebook Ads'],
      scalability: 'Unlimited leads and contacts',
      uptime: '99.9% SLA',
      support: '24/7 email and chat support'
    },
    pricing: {
      basic: { price: 29, features: ['Up to 1,000 leads/month', 'Basic automation', 'Email support', 'Standard templates'] },
      pro: { price: 59, features: ['Up to 10,000 leads/month', 'Advanced automation', 'Priority support', 'Custom templates', 'API access'] },
      enterprise: { price: 99, features: ['Unlimited leads', 'Custom automation', 'Dedicated support', 'White-label', 'Advanced analytics'] }
    }
  }
];

export const allServices: Service[] = [
  ...aiServices,
  ...itServices,
  ...microSaasServices
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return allServices.filter(service => service.featured);
};