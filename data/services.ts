export type Service =
  id: string;
  name: string;
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics'
  description: string;
  features: string[];
  benefits: string[];
  pricing: any;
    starter: number;
    professional: number;
    enterprise: number;
    currency: string,
    period: string};
  link: string;
  icon: string;
  isPopular?: boolean,
  isNew?: boolean}
export const services: Service[] = [,
  // AI Services
    id: 'ai-chatbot-platform',
    name: 'AI Chatbot Platform',
    category: 'AI',
    description: 'Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration.',
    features[
      'Advanced NLP with GPT-4 integration',
      'Multi-language support (50+ languages)',
      'Custom training on your data',
      'Analytics and performance insights',
      'API integration and webhooks',
      '24/7 customer support'
    ],
    benefits[
      'Reduce customer service costs by 60%',
      'Handle 1000+ conversations simultaneously',
      'Improve customer satisfaction by 40%',
      '24/7 availability without human intervention'
    ],
    pricing: any,
      starter: 99,
      professional: 299,
      enterprise: 999,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-chatbot-platform',
    icon: '',
    isPopular: true,
  },
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    category: 'AI',
    description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.',
    features[
      'SEO-optimized content generation',
      'Multiple content types (blogs, social) ads)',
      'Plagiarism-free content',
      'Brand voice customization',
      'Content calendar management',
      'Performance analytics'
    ],
    benefits[
      'Save 80% of content creation time',
      'Improve SEO rankings by 45%',
      'Generate 100+ articles per month',
      'Maintain consistent brand voice'
    ],
    pricing: any,
      starter: 49,
      professional: 149,
      enterprise: 499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-content-generator',
    icon: '',
  },
    id: 'ai-data-analytics',
    name: 'AI-Powered Data Analytics',
    category: 'AI',
    description: 'Transform raw data into actionable insights with machine learning algorithms and predictive analytics.',
    features[
      'Real-time data processing',
      'Predictive analytics models',
      'Custom dashboard creation',
      'Automated reporting',
      'Data visualization tools',
      'API integration capabilities'
    ],
    benefits[
      'Increase data-driven decisions by 70%',
      'Reduce analysis time by 85%',
      'Predict trends with 90% accuracy',
      'Automate routine reporting tasks'
    ],
    pricing: any,
      starter: 199,
      professional: 499,
      enterprise: 1499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-data-analytics',
    icon: '',
    isNew: true,
  },
  // IT Services
    id: 'managed-it-services',
    name: 'Managed IT Services',
    category: 'IT',
    description: 'Comprehensive IT management including network monitoring, security, and 24/7 technical support.',
    features[
      '24/7 network monitoring',
      'Proactive issue resolution',
      'Security patch management',
      'Backup and disaster recovery',
      'Help desk support',
      'Monthly reporting and analytics'
    ],
    benefits[
      'Reduce IT downtime by 95%',
      'Lower IT costs by 30%',
      'Improve system reliability',
      'Focus on core business activities'
    ],
    pricing: any,
      starter: 299,
      professional: 599,
      enterprise: 1499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/managed-it-services',
    icon: '',
  },
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    category: 'Security',
    description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
    features[
      'Real-time threat detection',
      'Vulnerability scanning',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      'Compliance reporting'
    ],
    benefits[
      'Protect against 99.9% of cyber threats',
      'Meet industry compliance standards',
      'Reduce security breach risk by 80%',
      '24/7 security monitoring'
    ],
    pricing: any,
      starter: 399,
      professional: 799,
      enterprise: 1999,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/cybersecurity-suite',
    icon: '',
    isPopular: true,
  },
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    category: 'Cloud',
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
    features[
      'Migration strategy planning',
      'Data migration tools',
      'Performance optimization',
      'Security implementation',
      'Training and documentation',
      'Post-migration support'
    ],
    benefits[
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhanced disaster recovery',
      'Access to latest technologies'
    ],
    pricing: any,
      starter: 2999,
      professional: 7999,
      enterprise: 19999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/cloud-migration',
    icon: '',
  },
  // SAAS Services
    id: 'project-management-platform',
    name: 'Project Management Platform',
    category: 'SAAS',
    description: 'Collaborative project management tool with task tracking, team collaboration, and progress monitoring.',
    features[
      'Task and project tracking',
      'Team collaboration tools',
      'Time tracking and reporting',
      'File sharing and storage',
      'Mobile app access',
      'Integration with popular tools'
    ],
    benefits[
      'Increase team productivity by 35%',
      'Reduce project delays by 50%',
      'Improve communication efficiency',
      'Centralized project information'
    ],
    pricing: any,
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/project-management-platform',
    icon: '',
  },
    id: 'crm-system',
    name: 'Customer Relationship Management',
    category: 'SAAS',
    description: 'Comprehensive CRM solution for managing customer relationships, sales pipeline, and marketing campaigns.',
    features[
      'Contact and lead management',
      'Sales pipeline tracking',
      'Email marketing automation',
      'Customer support integration',
      'Analytics and reporting',
      'Mobile app access'
    ],
    benefits[
      'Increase sales by 30%',
      'Improve customer retention by 25%',
      'Streamline sales processes',
      'Better customer insights'
    ],
    pricing: any,
      starter: 39,
      professional: 99,
      enterprise: 299,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/crm-system',
    icon: '',
    isPopular: true,
  },
    id: 'hr-management-system',
    name: 'HR Management System',
    category: 'SAAS',
    description: 'Complete HR solution for employee management, payroll, benefits, and performance tracking.',
    features[
      'Employee database management',
      'Payroll processing',
      'Benefits administration',
      'Performance reviews',
      'Time and attendance',
      'Compliance reporting'
    ],
    benefits[
      'Reduce HR administrative tasks by 60%',
      'Improve employee satisfaction',
      'Ensure compliance with regulations',
      'Better workforce analytics'
    ],
    pricing: any,
      starter: 49,
      professional: 129,
      enterprise: 399,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/hr-management-system',
    icon: '',
  },
  // Development Services
    id: 'web-development',
    name: 'Custom Web Development',
    category: 'Development',
    description: 'Professional web development services including responsive design, e-commerce, and custom applications.',
    features[
      'Responsive web design',
      'E-commerce integration',
      'Custom functionality',
      'SEO optimization',
      'Performance optimization',
      'Ongoing maintenance'
    ],
    benefits[
      'Professional online presence',
      'Improved user experience',
      'Better search engine rankings',
      'Scalable and maintainable code'
    ],
    pricing: any,
      starter: 2999,
      professional: 7999,
      enterprise: 19999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/web-development',
    icon: '',
  },
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'Development',
    description: 'Native and cross-platform mobile app development for iOS and Android platforms.',
    features[
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Testing and quality assurance',
      'Post-launch support'
    ],
    benefits[
      'Reach mobile users effectively',
      'Improve customer engagement',
      'Increase brand visibility',
      'Generate additional revenue streams'
    ],
    pricing: any,
      starter: 4999,
      professional: 14999,
      enterprise: 49999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/mobile-app-development',
    icon: '',
  },
    id: 'api-development',
    name: 'API Development & Integration',
    category: 'Development',
    description: 'Custom API development and third-party service integration for seamless data exchange.',
    features[
      'RESTful API development',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Testing and monitoring',
      'Performance optimization'
    ],
    benefits[
      'Enable system interoperability',
      'Improve data flow efficiency',
      'Reduce development time',
      'Enhance user experience'
    ],
    pricing: any,
      starter: 1999,
      professional: 5999,
      enterprise: 14999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/api-development',
    icon: '',
  },
  // Analytics Services
    id: 'business-intelligence',
    name: 'Business Intelligence Solutions',
    category: 'Analytics',
    description: 'Transform business data into actionable insights with advanced analytics and reporting tools.',
    features[
      'Data warehousing',
      'Interactive dashboards',
      'Custom reporting',
      'Data visualization',
      'Predictive analytics',
      'Real-time monitoring'
    ],
    benefits[
      'Make data-driven decisions',
      'Identify business opportunities',
      'Improve operational efficiency',
      'Gain competitive advantage'
    ],
    pricing: any,
      starter: 399,
      professional: 899,
      enterprise: 2499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/business-intelligence',
    icon: '',
  }
];
export const getServicesByCategory = (category: Service['category']) =>,
  return services.filter(service => service.category === category)};
export const getPopularServices = () =>
  return services.filter(service => service.isPopular)};
export const getNewServices = () =>
  return services.filter(service => service.isNew)};
export type Service = id: string; name: string; category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics' description: string; features: string[]; benefits: string[]; pricing: starter: number; professional: number; enterprise: number; currency: string, period: string}; link: string; icon: string; isPopular?: boolean, isNew?: boolean} export const services: Service[] = [ // AI Services ' id: 'ai-chatbot-platform',' name: 'AI Chatbot Platform',' category: 'AI',' description: 'Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration.', features[' 'Advanced NLP with GPT-4 integration',' 'Multi-language support (50+ languages)',' 'Custom training on your data',' 'Analytics and performance insights',' 'API integration and webhooks',' '24/7 customer support' ], benefits[' 'Reduce customer service costs by 60%',' 'Handle 1000+ conversations simultaneously',' 'Improve customer satisfaction by 40%',' '24/7 availability without human intervention' ], pricing: starter: 99, professional: 299, enterprise: 999,' currency: 'USD',' period: 'month' },' link: '/services/ai-chatbot-platform',' icon: '🤖', isPopular: true }, ' id: 'ai-content-generator',' name: 'AI Content Generator',' category: 'AI',' description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.', features[' 'SEO-optimized content generation',' 'Multiple content types (blogs, social) ads)',' 'Plagiarism-free content',' 'Brand voice customization',' 'Content calendar management',' 'Performance analytics' ], benefits[' 'Save 80% of content creation time',' 'Improve SEO rankings by 45%',' 'Generate 100+ articles per month',' 'Maintain consistent brand voice' ], pricing: starter: 49, professional: 149, enterprise: 499,' currency: 'USD',' period: 'month' },' link: '/services/ai-content-generator',' icon: '✍️' }, ' id: 'ai-data-analytics',' name: 'AI-Powered Data Analytics',' category: 'AI',' description: 'Transform raw data into actionable insights with machine learning algorithms and predictive analytics.', features[' 'Real-time data processing',' 'Predictive analytics models',' 'Custom dashboard creation',' 'Automated reporting',' 'Data visualization tools',' 'API integration capabilities' ], benefits[' 'Increase data-driven decisions by 70%',' 'Reduce analysis time by 85%',' 'Predict trends with 90% accuracy',' 'Automate routine reporting tasks' ], pricing: starter: 199, professional: 499, enterprise: 1499,' currency: 'USD',' period: 'month' },' link: '/services/ai-data-analytics',' icon: '📊', isNew: true }, // IT Services ' id: 'managed-it-services',' name: 'Managed IT Services',' category: 'IT',' description: 'Comprehensive IT management including network monitoring, security, and 24/7 technical support.', features[' '24/7 network monitoring',' 'Proactive issue resolution',' 'Security patch management',' 'Backup and disaster recovery',' 'Help desk support',' 'Monthly reporting and analytics' ], benefits[' 'Reduce IT downtime by 95%',' 'Lower IT costs by 30%',' 'Improve system reliability',' 'Focus on core business activities' ], pricing: starter: 299, professional: 599, enterprise: 1499,' currency: 'USD',' period: 'month' },' link: '/services/managed-it-services',' icon: '🖥️' }, ' id: 'cybersecurity-suite',' name: 'Cybersecurity Suite',' category: 'Security',' description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and incident response.', features[' 'Real-time threat detection',' 'Vulnerability scanning',' 'Penetration testing',' 'Security awareness training',' 'Incident response planning',' 'Compliance reporting' ], benefits[' 'Protect against 99.9% of cyber threats',' 'Meet industry compliance standards',' 'Reduce security breach risk by 80%',' '24/7 security monitoring' ], pricing: starter: 399, professional: 799, enterprise: 1999,' currency: 'USD',' period: 'month' },' link: '/services/cybersecurity-suite',' icon: '🔒', isPopular: true }, ' id: 'cloud-migration',' name: 'Cloud Migration Services',' category: 'Cloud',' description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.', features[' 'Migration strategy planning',' 'Data migration tools',' 'Performance optimization',' 'Security implementation',' 'Training and documentation',' 'Post-migration support' ], benefits[' 'Reduce infrastructure costs by 40%',' 'Improve scalability and flexibility',' 'Enhanced disaster recovery',' 'Access to latest technologies' ], pricing: starter: 2999, professional: 7999, enterprise: 19999,' currency: 'USD',' period: 'one-time' },' link: '/services/cloud-migration',' icon: '☁️' }, // SAAS Services ' id: 'project-management-platform',' name: 'Project Management Platform',' category: 'SAAS',' description: 'Collaborative project management tool with task tracking, team collaboration, and progress monitoring.', features[' 'Task and project tracking',' 'Team collaboration tools',' 'Time tracking and reporting',' 'File sharing and storage',' 'Mobile app access',' 'Integration with popular tools' ], benefits[' 'Increase team productivity by 35%',' 'Reduce project delays by 50%',' 'Improve communication efficiency',' 'Centralized project information' ], pricing: starter: 29, professional: 79, enterprise: 199,' currency: 'USD',' period: 'month' },' link: '/services/project-management-platform',' icon: '📋' }, ' id: 'crm-system',' name: 'Customer Relationship Management',' category: 'SAAS',' description: 'Comprehensive CRM solution for managing customer relationships, sales pipeline, and marketing campaigns.', features[' 'Contact and lead management',' 'Sales pipeline tracking',' 'Email marketing automation',' 'Customer support integration',' 'Analytics and reporting',' 'Mobile app access' ], benefits[' 'Increase sales by 30%',' 'Improve customer retention by 25%',' 'Streamline sales processes',' 'Better customer insights' ], pricing: starter: 39, professional: 99, enterprise: 299,' currency: 'USD',' period: 'month' },' link: '/services/crm-system',' icon: '👥', isPopular: true }, ' id: 'hr-management-system',' name: 'HR Management System',' category: 'SAAS',' description: 'Complete HR solution for employee management, payroll, benefits, and performance tracking.', features[' 'Employee database management',' 'Payroll processing',' 'Benefits administration',' 'Performance reviews',' 'Time and attendance',' 'Compliance reporting' ], benefits[' 'Reduce HR administrative tasks by 60%',' 'Improve employee satisfaction',' 'Ensure compliance with regulations',' 'Better workforce analytics' ], pricing: starter: 49, professional: 129, enterprise: 399,' currency: 'USD',' period: 'month' },' link: '/services/hr-management-system',' icon: '👨‍💼' }, // Development Services ' id: 'web-development',' name: 'Custom Web Development',' category: 'Development',' description: 'Professional web development services including responsive design, e-commerce, and custom applications.', features[' 'Responsive web design',' 'E-commerce integration',' 'Custom functionality',' 'SEO optimization',' 'Performance optimization',' 'Ongoing maintenance' ], benefits[' 'Professional online presence',' 'Improved user experience',' 'Better search engine rankings',' 'Scalable and maintainable code' ], pricing: starter: 2999, professional: 7999, enterprise: 19999,' currency: 'USD',' period: 'one-time' },' link: '/services/web-development',' icon: '🌐' }, ' id: 'mobile-app-development',' name: 'Mobile App Development',' category: 'Development',' description: 'Native and cross-platform mobile app development for iOS and Android platforms.', features[' 'Native iOS and Android development',' 'Cross-platform solutions',' 'UI/UX design',' 'App store optimization',' 'Testing and quality assurance',' 'Post-launch support' ], benefits[' 'Reach mobile users effectively',' 'Improve customer engagement',' 'Increase brand visibility',' 'Generate additional revenue streams' ], pricing: starter: 4999, professional: 14999, enterprise: 49999,' currency: 'USD',' period: 'one-time' },' link: '/services/mobile-app-development',' icon: '📱' }, ' id: 'api-development',' name: 'API Development & Integration',' category: 'Development',' description: 'Custom API development and third-party service integration for seamless data exchange.', features[' 'RESTful API development',' 'GraphQL implementation',' 'Third-party integrations',' 'API documentation',' 'Testing and monitoring',' 'Performance optimization' ], benefits[' 'Enable system interoperability',' 'Improve data flow efficiency',' 'Reduce development time',' 'Enhance user experience' ], pricing: starter: 1999, professional: 5999, enterprise: 14999,' currency: 'USD',' period: 'one-time' },' link: '/services/api-development',' icon: '🔌' }, // Analytics Services ' id: 'business-intelligence',' name: 'Business Intelligence Solutions',' category: 'Analytics',' description: 'Transform business data into actionable insights with advanced analytics and reporting tools.', features[' 'Data warehousing',' 'Interactive dashboards',' 'Custom reporting',' 'Data visualization',' 'Predictive analytics',' 'Real-time monitoring' ], benefits[' 'Make data-driven decisions',' 'Identify business opportunities',' 'Improve operational efficiency',' 'Gain competitive advantage' ], pricing: starter: 399, professional: 899, enterprise: 2499,' currency: 'USD',' period: 'month' },' link: '/services/business-intelligence',' icon: '📈' } ]; ' export const getServicesByCategory = (category: Service['category']) => return services.filter(service => service.category === category)}; export const getPopularServices = () => return services.filter(service => service.isPopular)}; export const getNewServices = () => return services.filter(service => service.isNew)};'