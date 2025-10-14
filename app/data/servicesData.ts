export interface Service {}
  id: "string;",title: "string;",description: "string;",shortDescription: "string;",category: "'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';'",icon: "string;",features: "string[];",pricing: {,basic: "number;",pro: "number;",enterprise: "number;"}"'
  }
  };
  benefits: "string[];",useCases: "string[];",technologies: "string[];",contactInfo: {,phone: "string;",email: "string;",website: "string;"}"
  }
  };
  href: "string;",glowColor: "'purple' | 'cyan' | 'pink' | 'green' | 'blue' | 'yellow' | 'red' | 'orange';'""'
}

export const services: "Service[] = ["]"
  // AI Services
  {''}'
    id: "'ai-chatbot-enterprise'",''"'
    title: "'AI Enterprise Chatbot Platform'",''"'
    description: "'Advanced conversational AI platform with natural language processing", multi-language support, and seamless integration with existing business systems.',''"'
    shortDescription: "'Enterprise-grade AI chatbots with advanced NLP capabilities'",''"'
    category: "'AI'",''"'
    icon: "'🤖'",'"'
    features: ['']'
      'Natural Language Processing (NLP)','''
      'Multi-language Support (50+ languages)','''
      'Voice Recognition & Synthesis','''
      'Sentiment Analysis','''
      'Custom Knowledge Base Integration','''
      'Real-time Analytics Dashboard','''
      'API Integration (REST, GraphQL)','''
      '24/7 Customer Support'''
    ],
    pricing: {,basic: 299,}
      pro: 799,
      enterprise: 2499}
    },
    benefits: ['']'
      'Reduce customer support costs by 60%','''
      '24/7 availability for customer inquiries','''
      'Scalable to handle unlimited conversations','''
      'Easy integration with existing systems','''
      'Advanced analytics and reporting'''
    ],
    useCases: ['']'
      'Customer Support Automation','''
      'Lead Qualification','''
      'FAQ Automation','''
      'Appointment Scheduling','''
      'E-commerce Support'''
    ],'''
    technologies: ['OpenAI GPT-4', 'TensorFlow', 'Python', 'React', 'Node.js', 'MongoDB'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/ai-chatbot-enterprise'"}'"'
    },'''
    href: "'/ai-chatbot-enterprise'",''"'
    glowColor: "'purple'""'
  },
  {''}'
    id: "'ai-content-generation-pro'",''"'
    title: "'AI Content Generation Pro'",''"'
    description: "'Revolutionary AI-powered content creation platform that generates high-quality articles", marketing copy, social media posts, and technical documentation.',''"'
    shortDescription: "'AI-powered content creation for all your marketing needs'",''"'
    category: "'AI'",''"'
    icon: "'✍️'",'"'
    features: ['']'
      'Article & Blog Post Generation','''
      'Marketing Copy Creation','''
      'Social Media Content','''
      'Technical Documentation','''
      'SEO-Optimized Content','''
      'Multi-language Support','''
      'Brand Voice Customization','''
      'Plagiarism Detection'''
    ],
    pricing: {,basic: 199,}
      pro: 499,
      enterprise: 1299}
    },
    benefits: ['']'
      'Save 80% of content creation time','''
      'Consistent brand voice across all content','''
      'SEO-optimized content for better rankings','''
      'Unlimited content generation','''
      'Professional quality output'''
    ],
    useCases: ['']'
      'Blog Content Creation','''
      'Marketing Campaigns','''
      'Social Media Management','''
      'Technical Documentation','''
      'Product Descriptions'''
    ],'''
    technologies: ['GPT-4', 'BERT', 'Python', 'FastAPI', 'React', 'PostgreSQL'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/ai-content-generation-pro'"}'"'
    },'''
    href: "'/ai-content-generation-pro'",''"'
    glowColor: "'cyan'""'
  },
  {''}'
    id: "'ai-data-analytics-pro'",''"'
    title: "'AI Data Analytics Pro'",''"'
    description: "'Advanced AI-powered data analytics platform that provides real-time insights", predictive analytics, and automated reporting for business intelligence.',''"'
    shortDescription: "'AI-driven analytics platform for data-driven decision making'",''"'
    category: "'AI'",''"'
    icon: "'📊'",'"'
    features: ['']'
      'Real-time Data Processing','''
      'Predictive Analytics','''
      'Automated Report Generation','''
      'Interactive Dashboards','''
      'Machine Learning Models','''
      'Data Visualization','''
      'Custom Metrics & KPIs','''
      'API Integration'''
    ],
    pricing: {,basic: 399,}
      pro: 999,
      enterprise: 2999}
    },
    benefits: ['']'
      'Make data-driven decisions faster','''
      'Identify trends and patterns automatically','''
      'Reduce manual reporting by 90%','''
      'Real-time insights and alerts','''
      'Scalable data processing'''
    ],
    useCases: ['']'
      'Business Intelligence','''
      'Sales Forecasting','''
      'Customer Behavior Analysis','''
      'Financial Reporting','''
      'Marketing Analytics'''
    ],'''
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'React', 'D3.js', 'PostgreSQL'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/ai-data-analytics-pro'"}'"'
    },'''
    href: "'/ai-data-analytics-pro'",''"'
    glowColor: "'green'""'
  },

  // Micro SaaS Services
  {''}'
    id: "'project-management-saas'",''"'
    title: "'Project Management SaaS'",''"'
    description: "'Comprehensive project management platform with task tracking", team collaboration, time tracking, and advanced reporting capabilities.',''"'
    shortDescription: "'Complete project management solution for teams of all sizes'",''"'
    category: "'SaaS'",''"'
    icon: "'📋'",'"'
    features: ['']'
      'Task & Project Tracking','''
      'Team Collaboration Tools','''
      'Time Tracking & Reporting','''
      'Gantt Charts & Timelines','''
      'File Sharing & Storage','''
      'Custom Workflows','''
      'Mobile App Access','''
      'Integration with 10o0+ tools'''
    ],
    pricing: {,basic: 99,}
      pro: 299,
      enterprise: 799}
    },
    benefits: ['']'
      'Increase team productivity by 40%','''
      'Centralized project visibility','''
      'Automated time tracking','''
      'Seamless team collaboration','''
      'Comprehensive reporting'''
    ],
    useCases: ['']'
      'Software Development','''
      'Marketing Campaigns','''
      'Event Planning','''
      'Construction Projects','''
      'Consulting Services'''
    ],'''
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'AWS'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/project-management-saas'"}'"'
    },'''
    href: "'/project-management-saas'",''"'
    glowColor: "'blue'""'
  },
  {''}'
    id: "'crm-saas-platform'",''"'
    title: "'CRM SaaS Platform'",''"'
    description: "'Advanced Customer Relationship Management platform with lead tracking", sales pipeline management, and customer communication tools.',''"'
    shortDescription: "'Complete CRM solution for sales and customer management'",''"'
    category: "'SaaS'",''"'
    icon: "'👥'",'"'
    features: ['']'
      'Lead & Contact Management','''
      'Sales Pipeline Tracking','''
      'Email Marketing Integration','''
      'Customer Communication History','''
      'Automated Follow-ups','''
      'Sales Analytics & Reporting','''
      'Mobile App Access','''
      'API Integration'''
    ],
    pricing: {,basic: 149,}
      pro: 399,
      enterprise: 999}
    },
    benefits: ['']'
      'Increase sales conversion by 35%','''
      'Centralized customer data','''
      'Automated sales processes','''
      'Better customer relationships','''
      'Data-driven sales insights'''
    ],
    useCases: ['']'
      'Sales Team Management','''
      'Lead Nurturing','''
      'Customer Support','''
      'Marketing Automation','''
      'Account Management'''
    ],'''
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Stripe', 'AWS'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/crm-saas-platform'"}'"'
    },'''
    href: "'/crm-saas-platform'",''"'
    glowColor: "'pink'""'
  },
  {''}'
    id: "'inventory-management-saas'",''"'
    title: "'Inventory Management SaaS'",''"'
    description: "'Comprehensive inventory management system with real-time tracking", automated reordering, and advanced analytics for businesses.',''"'
    shortDescription: "'Real-time inventory tracking and management solution'",''"'
    category: "'SaaS'",''"'
    icon: "'📦'",'"'
    features: ['']'
      'Real-time Inventory Tracking','''
      'Automated Reorder Points','''
      'Barcode Scanning','''
      'Multi-location Support','''
      'Supplier Management','''
      'Cost Tracking & Analysis','''
      'Mobile App Access','''
      'API Integration'''
    ],
    pricing: {,basic: 199,}
      pro: 499,
      enterprise: 1299}
    },
    benefits: ['']'
      'Reduce inventory costs by 25%','''
      'Eliminate stockouts and overstock','''
      'Automated reordering','''
      'Real-time visibility','''
      'Improved cash flow'''
    ],
    useCases: ['']'
      'Retail Stores','''
      'E-commerce','''
      'Manufacturing','''
      'Warehousing','''
      'Distribution'''
    ],'''
    technologies: ['React', 'Node.js', 'MongoDB', 'Barcode Scanner API', 'AWS', 'Redis'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/inventory-management-saas'"}'"'
    },'''
    href: "'/inventory-management-saas'",''"'
    glowColor: "'yellow'""'
  },

  // IT Services
  {''}'
    id: "'cloud-migration-service'",''"'
    title: "'Cloud Migration Service'",''"'
    description: "'Complete cloud migration service that helps businesses move their infrastructure", applications, and data to the cloud securely and efficiently.',''"'
    shortDescription: "'Seamless cloud migration for businesses of all sizes'",''"'
    category: "'IT'",''"'
    icon: "'☁️'",'"'
    features: ['']'
      'Infrastructure Assessment','''
      'Migration Planning & Strategy','''
      'Data Migration Services','''
      'Application Modernization','''
      'Security Implementation','''
      'Performance Optimization','''
      '24/7 Support & Monitoring','''
      'Cost Optimization'''
    ],
    pricing: {,basic: 50o00,}
      pro: 150o00,
      enterprise: 50o000}
    },
    benefits: ['']'
      'Reduce infrastructure costs by 40%','''
      'Improved scalability and flexibility','''
      'Enhanced security and compliance','''
      'Better disaster recovery','''
      '24/7 monitoring and support'''
    ],
    useCases: ['']'
      'Legacy System Migration','''
      'Multi-cloud Strategy','''
      'Disaster Recovery Setup','''
      'Application Modernization','''
      'Cost Optimization'''
    ],'''
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/cloud-migration-service'"}'"'
    },'''
    href: "'/cloud-migration-service'",''"'
    glowColor: "'cyan'""'
  },
  {''}'
    id: "'cybersecurity-suite-pro'",''"'
    title: "'Cybersecurity Suite Pro'",''"'
    description: "'Comprehensive cybersecurity solution providing advanced threat protection", security monitoring, and compliance management for businesses.',''"'
    shortDescription: "'Complete cybersecurity protection for your business'",''"'
    category: "'Cybersecurity'",''"'
    icon: "'🛡️'",'"'
    features: ['']'
      'Advanced Threat Detection','''
      '24/7 Security Monitoring','''
      'Vulnerability Assessment','''
      'Penetration Testing','''
      'Security Training','''
      'Compliance Management','''
      'Incident Response','''
      'Security Analytics'''
    ],
    pricing: {,basic: 999,}
      pro: 2499,
      enterprise: 5999}
    },
    benefits: ['']'
      'Protect against 99.9% of threats','''
      'Reduce security incidents by 80%','''
      'Ensure compliance with regulations','''
      '24/7 security monitoring','''
      'Expert security team support'''
    ],
    useCases: ['']'
      'Threat Protection','''
      'Compliance Management','''
      'Security Audits','''
      'Incident Response','''
      'Security Training'''
    ],'''
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'AI/ML'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/cybersecurity-suite-pro'"}'"'
    },'''
    href: "'/cybersecurity-suite-pro'",''"'
    glowColor: "'purple'""'
  },
  {''}'
    id: "'5g-network-solutions'",''"'
    title: "'5G Network Solutions'",''"'
    description: "'Complete 5G network implementation and optimization services for businesses looking to leverage next-generation connectivity.'",''"'
    shortDescription: "'Next-generation 5G network solutions for businesses'",''"'
    category: "'5G'",''"'
    icon: "'📡'",'"'
    features: ['']'
      '5G Network Planning','''
      'Infrastructure Deployment','''
      'Network Optimization','''
      'IoT Integration','''
      'Edge Computing Setup','''
      'Performance Monitoring','''
      'Security Implementation','''
      '24/7 Support'''
    ],
    pricing: {,basic: 10o000,}
      pro: 250o00,
      enterprise: 750o00}
    },
    benefits: ['']'
      'Ultra-fast connectivity','''
      'Low latency applications','''
      'Massive IoT connectivity','''
      'Enhanced mobile experiences','''
      'Future-proof infrastructure'''
    ],
    useCases: ['']'
      'Smart City Implementation','''
      'Industrial IoT','''
      'Autonomous Vehicles','''
      'Remote Work Solutions','''
      'Healthcare Applications'''
    ],'''
    technologies: ['5G NR', 'Edge Computing', 'IoT', 'AI/ML', 'Cloud Computing', 'SDN'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/5g-network-solutions'"}'"'
    },'''
    href: "'/5g-network-solutions'",''"'
    glowColor: "'green'""'
  },

  // Blockchain Services
  {''}'
    id: "'blockchain-development'",''"'
    title: "'Blockchain Development'",''"'
    description: "'Custom blockchain solutions including smart contracts", DeFi applications, NFT platforms, and enterprise blockchain integration.',''"'
    shortDescription: "'Custom blockchain solutions for modern businesses'",''"'
    category: "'Blockchain'",''"'
    icon: "'⛓️'",'"'
    features: ['']'
      'Smart Contract Development','''
      'DeFi Application Development','''
      'NFT Platform Creation','''
      'Blockchain Integration','''
      'Cryptocurrency Development','''
      'Security Audits','''
      'Token Economics Design','''
      'DApp Development'''
    ],
    pricing: {,basic: 150o00,}
      pro: 350o00,
      enterprise: 750o00}
    },
    benefits: ['']'
      'Decentralized and secure solutions','''
      'Transparent and immutable records','''
      'Reduced transaction costs','''
      'Global accessibility','''
      'Future-proof technology'''
    ],
    useCases: ['']'
      'Supply Chain Management','''
      'Digital Identity','''
      'Financial Services','''
      'Gaming & NFTs','''
      'Healthcare Records'''
    ],'''
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'React', 'Node.js'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/blockchain-development'"}'"'
    },'''
    href: "'/blockchain-development'",''"'
    glowColor: "'blue'""'
  },

  // IoT Services
  {''}'
    id: "'iot-platform-solution'",''"'
    title: "'IoT Platform Solution'",''"'
    description: "'Complete IoT platform for device management", data collection, real-time monitoring, and analytics for connected devices.',''"'
    shortDescription: "'Comprehensive IoT platform for connected devices'",''"'
    category: "'IoT'",''"'
    icon: "'🌐'",'"'
    features: ['']'
      'Device Management','''
      'Real-time Data Collection','''
      'Data Analytics & Visualization','''
      'Remote Monitoring','''
      'Alert & Notification System','''
      'API Integration','''
      'Mobile App Access','''
      'Cloud Storage'''
    ],
    pricing: {,basic: 799,}
      pro: 1999,
      enterprise: 4999}
    },
    benefits: ['']'
      'Centralized device management','''
      'Real-time insights and monitoring','''
      'Scalable IoT infrastructure','''
      'Reduced operational costs','''
      'Improved efficiency'''
    ],
    useCases: ['']'
      'Smart Home Automation','''
      'Industrial Monitoring','''
      'Asset Tracking','''
      'Environmental Monitoring','''
      'Healthcare Devices'''
    ],'''
    technologies: ['MQTT', 'CoAP', 'REST APIs', 'React', 'Node.js', 'MongoDB'],''
    contactInfo: {'',phone: "'+1-30o2-464-0o950'",''}"'
      email: "'kleber@ziontechgroup.com'",''"'
      website: "'http,s://ziontechgroup.com/iot-platform-solution'"}'"'
    },'''
    href: "'/iot-platform-solution'",''"'
    glowColor: "'yellow'""'
  },

  // Additional AI Services
  {}
    id: "'ai-code-assistant-pro'",'"'
    title: "'AI Code Assistant Pro'",'"'
    description: "'Advanced AI-powered coding assistant that helps developers write better code", debug issues, and learn new technologies with intelligent suggestions and real-time assistance.','"'
    shortDescription: "'AI-powered coding assistant for developers'",'"'
    category: "'AI'",'"'
    icon: "'💻'",'"'
    features: []
      'Intelligent Code Completion',''
      'Bug Detection & Fixing',''
      'Code Review & Optimization',''
      'Multi-language Support',''
      'Real-time Documentation',''
      'Code Generation',''
      'Refactoring Suggestions',''
      'Learning Recommendations'''
    ],
    pricing: {,basic: 49,}
      pro: 149,
      enterprise: 399
    },
    benefits: []
      'Increase coding productivity by 50%',''
      'Reduce bugs and errors',''
      'Learn new technologies faster',''
      'Consistent code quality',''
      '24/7 coding assistance'''
    ],
    useCases: []
      'Software Development',''
      'Code Review',''
      'Learning New Languages',''
      'Debugging',''
      'Code Optimization'''
    ],
    technologies: ['OpenAI Codex', 'GitHub Copilot', 'VS Code', 'IntelliJ', 'Python', 'JavaScript'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/ai-code-assistant-pro'""'
    },
    href: "'/ai-code-assistant-pro'",'"'
    glowColor: "'purple'""'
  },
  {}
    id: "'ai-customer-sentiment-tracker'",'"'
    title: "'AI Customer Sentiment Tracker'",'"'
    description: "'Real-time customer sentiment analysis platform that monitors social media", reviews, and feedback to help businesses understand customer emotions and improve satisfaction.','"'
    shortDescription: "'Real-time customer sentiment analysis and monitoring'",'"'
    category: "'AI'",'"'
    icon: "'😊'",'"'
    features: []
      'Real-time Sentiment Analysis',''
      'Multi-platform Monitoring',''
      'Emotion Detection',''
      'Trend Analysis',''
      'Alert System',''
      'Custom Dashboards',''
      'API Integration',''
      'Historical Data'''
    ],
    pricing: {,basic: 199,}
      pro: 499,
      enterprise: 1299
    },
    benefits: []
      'Understand customer emotions',''
      'Improve customer satisfaction',''
      'Prevent PR crises',''
      'Data-driven decisions',''
      'Competitive advantage'''
    ],
    useCases: []
      'Brand Monitoring',''
      'Customer Feedback Analysis',''
      'Social Media Management',''
      'Product Development',''
      'Marketing Campaigns'''
    ],
    technologies: ['NLP', 'Machine Learning', 'Python', 'React', 'MongoDB', 'APIs'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/ai-customer-sentiment-tracker'""'
    },
    href: "'/ai-customer-sentiment-tracker'",'"'
    glowColor: "'cyan'""'
  },
  {}
    id: "'ai-automated-testing'",'"'
    title: "'AI Automated Testing Suite'",'"'
    description: "'Intelligent automated testing platform that uses AI to generate test cases", execute tests, and identify bugs across web and mobile applications.','"'
    shortDescription: "'AI-powered automated testing for applications'",'"'
    category: "'AI'",'"'
    icon: "'🧪'",'"'
    features: []
      'AI Test Case Generation',''
      'Automated Test Execution',''
      'Cross-browser Testing',''
      'Mobile App Testing',''
      'Performance Testing',''
      'Visual Regression Testing',''
      'API Testing',''
      'Test Reporting'''
    ],
    pricing: {,basic: 299,}
      pro: 799,
      enterprise: 1999
    },
    benefits: []
      'Reduce testing time by 70%',''
      'Improve test coverage',''
      'Early bug detection',''
      'Consistent quality',''
      'Cost-effective testing'''
    ],
    useCases: []
      'Web Application Testing',''
      'Mobile App Testing',''
      'API Testing',''
      'Performance Testing',''
      'Regression Testing'''
    ],
    technologies: ['Selenium', 'Appium', 'Jest', 'Cypress', 'Python', 'JavaScript'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/ai-automated-testing'""'
    },
    href: "'/ai-automated-testing'",'"'
    glowColor: "'green'""'
  },

  // Additional Micro SaaS Services
  {}
    id: "'email-marketing-automation'",'"'
    title: "'Email Marketing Automation SaaS'",'"'
    description: "'Complete email marketing automation platform with AI-powered personalization", advanced segmentation, and detailed analytics for businesses.','"'
    shortDescription: "'AI-powered email marketing automation platform'",'"'
    category: "'SaaS'",'"'
    icon: "'📧'",'"'
    features: []
      'AI-Powered Personalization',''
      'Advanced Segmentation',''
      'Drag & Drop Email Builder',''
      'A/B Testing',''
      'Automation Workflows',''
      'Analytics & Reporting',''
      'Template Library',''
      'API Integration'''
    ],
    pricing: {,basic: 79,}
      pro: 199,
      enterprise: 599
    },
    benefits: []
      'Increase email open rates by 40%',''
      'Automate marketing campaigns',''
      'Personalized customer experiences',''
      'Detailed performance analytics',''
      'Easy-to-use interface'''
    ],
    useCases: []
      'Email Campaigns',''
      'Lead Nurturing',''
      'Customer Retention',''
      'Product Announcements',''
      'Newsletter Management'''
    ],
    technologies: ['React', 'Node.js', 'SendGrid', 'MongoDB', 'Redis', 'AWS'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/email-marketing-automation'""'
    },
    href: "'/email-marketing-automation'",'"'
    glowColor: "'pink'""'
  },
  {}
    id: "'social-media-management-saas'",'"'
    title: "'Social Media Management SaaS'",'"'
    description: "'Comprehensive social media management platform with AI-powered content creation", scheduling, analytics, and engagement tools for all major platforms.','"'
    shortDescription: "'Complete social media management and analytics platform'",'"'
    category: "'SaaS'",'"'
    icon: "'📱'",'"'
    features: []
      'Multi-platform Management',''
      'AI Content Generation',''
      'Post Scheduling',''
      'Engagement Analytics',''
      'Hashtag Research',''
      'Competitor Analysis',''
      'Team Collaboration',''
      'Brand Monitoring'''
    ],
    pricing: {,basic: 99,}
      pro: 299,
      enterprise: 799
    },
    benefits: []
      'Save 5+ hours per week',''
      'Increase engagement by 60%',''
      'Consistent brand voice',''
      'Data-driven insights',''
      'Team collaboration'''
    ],
    useCases: []
      'Social Media Marketing',''
      'Brand Management',''
      'Content Strategy',''
      'Community Management',''
      'Influencer Marketing'''
    ],
    technologies: ['React', 'Node.js', 'Social APIs', 'MongoDB', 'Redis', 'AWS'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/social-media-management-saas'""'
    },
    href: "'/social-media-management-saas'",'"'
    glowColor: "'blue'""'
  },
  {}
    id: "'hr-management-saas'",'"'
    title: "'HR Management SaaS'",'"'
    description: "'Complete human resources management platform with employee onboarding", time tracking, performance management, and payroll integration.','"'
    shortDescription: "'Comprehensive HR management and employee engagement platform'",'"'
    category: "'SaaS'",'"'
    icon: "'👥'",'"'
    features: []
      'Employee Database',''
      'Time & Attendance Tracking',''
      'Performance Management',''
      'Payroll Integration',''
      'Benefits Administration',''
      'Recruitment Tools',''
      'Document Management',''
      'Analytics & Reporting'''
    ],
    pricing: {,basic: 149,}
      pro: 399,
      enterprise: 999
    },
    benefits: []
      'Streamline HR processes',''
      'Reduce administrative tasks',''
      'Improve employee engagement',''
      'Compliance management',''
      'Data-driven HR decisions'''
    ],
    useCases: []
      'Employee Management',''
      'Payroll Processing',''
      'Performance Reviews',''
      'Recruitment',''
      'Benefits Administration'''
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/hr-management-saas'""'
    },
    href: "'/hr-management-saas'",'"'
    glowColor: "'yellow'""'
  },
  {}
    id: "'financial-accounting-saas'",'"'
    title: "'Financial Accounting SaaS'",'"'
    description: "'Advanced financial management and accounting platform with automated bookkeeping", invoicing, expense tracking, and financial reporting.','"'
    shortDescription: "'Complete financial management and accounting solution'",'"'
    category: "'SaaS'",'"'
    icon: "'💰'",'"'
    features: []
      'Automated Bookkeeping',''
      'Invoice Generation',''
      'Expense Tracking',''
      'Financial Reporting',''
      'Tax Preparation',''
      'Bank Integration',''
      'Multi-currency Support',''
      'Audit Trail'''
    ],
    pricing: {,basic: 199,}
      pro: 499,
      enterprise: 1299
    },
    benefits: []
      'Automate accounting tasks',''
      'Reduce errors by 90%',''
      'Real-time financial insights',''
      'Tax compliance',''
      'Time-saving automation'''
    ],
    useCases: []
      'Small Business Accounting',''
      'Freelancer Finances',''
      'Expense Management',''
      'Tax Preparation',''
      'Financial Planning'''
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'QuickBooks API', 'AWS'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/financial-accounting-saas'""'
    },
    href: "'/financial-accounting-saas'",'"'
    glowColor: "'green'""'
  },

  // Additional IT Services
  {}
    id: "'devops-automation-service'",'"'
    title: "'DevOps Automation Service'",'"'
    description: "'Complete DevOps automation service including CI/CD pipeline setup", infrastructure as code, monitoring, and deployment automation.','"'
    shortDescription: "'End-to-end DevOps automation and infrastructure management'",'"'
    category: "'IT'",'"'
    icon: "'⚙️'",'"'
    features: []
      'CI/CD Pipeline Setup',''
      'Infrastructure as Code',''
      'Container Orchestration',''
      'Monitoring & Alerting',''
      'Security Scanning',''
      'Automated Deployments',''
      'Backup & Recovery',''
      'Performance Optimization'''
    ],
    pricing: {,basic: 20o00,}
      pro: 50o00,
      enterprise: 150o00
    },
    benefits: []
      'Reduce deployment time by 80%',''
      'Improve system reliability',''
      'Automated infrastructure management',''
      'Enhanced security',''
      '24/7 monitoring'''
    ],
    useCases: []
      'Application Deployment',''
      'Infrastructure Management',''
      'Continuous Integration',''
      'Monitoring Setup',''
      'Security Automation'''
    ],
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Prometheus'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/devops-automation-service'""'
    },
    href: "'/devops-automation-service'",'"'
    glowColor: "'cyan'""'
  },
  {}
    id: "'api-development-service'",'"'
    title: "'API Development Service'",'"'
    description: "'Professional API development and integration services including RESTful APIs", GraphQL, microservices, and third-party integrations.','"'
    shortDescription: "'Custom API development and integration services'",'"'
    category: "'IT'",'"'
    icon: "'🔌'",'"'
    features: []
      'RESTful API Development',''
      'GraphQL Implementation',''
      'Microservices Architecture',''
      'API Documentation',''
      'Authentication & Security',''
      'Rate Limiting',''
      'Monitoring & Analytics',''
      'Third-party Integrations'''
    ],
    pricing: {,basic: 30o00,}
      pro: 80o00,
      enterprise: 20o000
    },
    benefits: []
      'Scalable API architecture',''
      'Enhanced security',''
      'Comprehensive documentation',''
      'Performance optimization',''
      'Easy integration'''
    ],
    useCases: []
      'Mobile App Backend',''
      'Third-party Integrations',''
      'Microservices',''
      'Data APIs',''
      'Authentication Services'''
    ],
    technologies: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/api-development-service'""'
    },
    href: "'/api-development-service'",'"'
    glowColor: "'purple'""'
  },
  {}
    id: "'database-optimization-service'",'"'
    title: "'Database Optimization Service'",'"'
    description: "'Professional database optimization and management services including performance tuning", scaling, backup strategies, and migration.','"'
    shortDescription: "'Database performance optimization and management services'",'"'
    category: "'IT'",'"'
    icon: "'🗄️'",'"'
    features: []
      'Performance Tuning',''
      'Query Optimization',''
      'Index Management',''
      'Backup & Recovery',''
      'Scaling Strategies',''
      'Migration Services',''
      'Security Hardening',''
      'Monitoring Setup'''
    ],
    pricing: {,basic: 150o0,}
      pro: 40o00,
      enterprise: 120o00
    },
    benefits: []
      'Improve query performance by 30o0%',''
      'Reduce database costs',''
      'Enhanced security',''
      'Reliable backup strategies',''
      'Scalable architecture'''
    ],
    useCases: []
      'Database Performance Issues',''
      'Migration Projects',''
      'Scaling Challenges',''
      'Security Hardening',''
      'Backup Optimization'''
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS RDS', 'Docker'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/database-optimization-service'""'
    },
    href: "'/database-optimization-service'",'"'
    glowColor: "'blue'""'
  },

  // Additional Cybersecurity Services
  {}
    id: "'penetration-testing-service'",'"'
    title: "'Penetration Testing Service'",'"'
    description: "'Comprehensive penetration testing and vulnerability assessment services to identify security weaknesses and provide remediation strategies.'",'"'
    shortDescription: "'Professional penetration testing and security assessment'",'"'
    category: "'Cybersecurity'",'"'
    icon: "'🔍'",'"'
    features: []
      'Web Application Testing',''
      'Network Penetration Testing',''
      'Mobile App Security',''
      'Social Engineering Tests',''
      'Physical Security Assessment',''
      'Compliance Testing',''
      'Detailed Reporting',''
      'Remediation Guidance'''
    ],
    pricing: {,basic: 250o0,}
      pro: 750o0,
      enterprise: 20o000
    },
    benefits: []
      'Identify security vulnerabilities',''
      'Meet compliance requirements',''
      'Improve security posture',''
      'Detailed remediation plans',''
      'Expert security guidance'''
    ],
    useCases: []
      'Security Audits',''
      'Compliance Requirements',''
      'Pre-deployment Testing',''
      'Regular Security Checks',''
      'Incident Response'''
    ],
    technologies: ['OWASP', 'Nmap', 'Burp Suite', 'Metasploit', 'Wireshark', 'Custom Tools'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/penetration-testing-service'""'
    },
    href: "'/penetration-testing-service'",'"'
    glowColor: "'red'""'
  },
  {}
    id: "'security-awareness-training'",'"'
    title: "'Security Awareness Training'",'"'
    description: "'Comprehensive cybersecurity training program for employees including phishing simulation", security best practices, and compliance training.','"'
    shortDescription: "'Employee cybersecurity awareness and training program'",'"'
    category: "'Cybersecurity'",'"'
    icon: "'🎓'",'"'
    features: []
      'Interactive Training Modules',''
      'Phishing Simulation',''
      'Security Best Practices',''
      'Compliance Training',''
      'Progress Tracking',''
      'Certification Programs',''
      'Custom Content',''
      'Regular Updates'''
    ],
    pricing: {,basic: 25,}
      pro: 50,
      enterprise: 10o0
    },
    benefits: []
      'Reduce human error by 70%',''
      'Improve security awareness',''
      'Meet compliance requirements',''
      'Engaging training content',''
      'Measurable progress'''
    ],
    useCases: []
      'Employee Training',''
      'Compliance Requirements',''
      'Security Awareness',''
      'Phishing Prevention',''
      'Best Practices Education'''
    ],
    technologies: ['LMS Platform', 'Interactive Content', 'Analytics', 'Gamification', 'Mobile App'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/security-awareness-training'""'
    },
    href: "'/security-awareness-training'",'"'
    glowColor: "'orange'""'
  },

  // Additional Cloud Services
  {}
    id: "'cloud-cost-optimization'",'"'
    title: "'Cloud Cost Optimization Service'",'"'
    description: "'Professional cloud cost optimization service that analyzes usage patterns and implements strategies to reduce cloud spending by up to 50%.'",'"'
    shortDescription: "'Cloud cost optimization and resource management service'",'"'
    category: "'Cloud'",'"'
    icon: "'💸'",'"'
    features: []
      'Cost Analysis & Reporting',''
      'Resource Optimization',''
      'Reserved Instance Planning',''
      'Auto-scaling Setup',''
      'Waste Identification',''
      'Budget Alerts',''
      'Cost Forecasting',''
      'ROI Analysis'''
    ],
    pricing: {,basic: 10o00,}
      pro: 30o00,
      enterprise: 80o00
    },
    benefits: []
      'Reduce cloud costs by 50%',''
      'Optimize resource usage',''
      'Better budget control',''
      'Detailed cost insights',''
      'Automated optimization'''
    ],
    useCases: []
      'Cost Reduction',''
      'Resource Optimization',''
      'Budget Management',''
      'Scaling Strategies',''
      'Performance Tuning'''
    ],
    technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'GCP Billing', 'Terraform', 'CloudWatch'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/cloud-cost-optimization'""'
    },
    href: "'/cloud-cost-optimization'",'"'
    glowColor: "'green'""'
  },
  {}
    id: "'multi-cloud-strategy'",'"'
    title: "'Multi-Cloud Strategy Service'",'"'
    description: "'Comprehensive multi-cloud strategy and implementation service to help businesses leverage multiple cloud providers for better resilience and cost optimization.'",'"'
    shortDescription: "'Multi-cloud strategy and implementation service'",'"'
    category: "'Cloud'",'"'
    icon: "'☁️'",'"'
    features: []
      'Cloud Strategy Planning',''
      'Multi-cloud Architecture',''
      'Vendor Management',''
      'Disaster Recovery',''
      'Compliance Management',''
      'Cost Optimization',''
      'Security Implementation',''
      'Migration Planning'''
    ],
    pricing: {,basic: 50o00,}
      pro: 150o00,
      enterprise: 40o000
    },
    benefits: []
      'Improved resilience',''
      'Vendor independence',''
      'Cost optimization',''
      'Better compliance',''
      'Reduced risk'''
    ],
    useCases: []
      'Cloud Strategy',''
      'Disaster Recovery',''
      'Vendor Diversification',''
      'Compliance Requirements',''
      'Cost Optimization'''
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],''
    contactInfo: {,phone: "'+1-30o2-464-0o950'",'}"'
      email: "'kleber@ziontechgroup.com'",'"'
      website: "'http,s://ziontechgroup.com/multi-cloud-strategy'""'
    },
    href: "'/multi-cloud-strategy'",'"'
    glowColor: "'blue'""'
  }
];
'''
export const getServicesByCategory = (category: "Service['category']) => {';"}"'
  return services.filter(service => service.category === category);}
};

export const getServiceById = (id: "string) => {;"}"
  return services.find(service => service.id === id);}
};''