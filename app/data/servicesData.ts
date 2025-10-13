export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: 'AI' | 'IT' | 'SaaS' | '5G' | 'Security' | 'Analytics' | 'Automation' | 'Development';
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  href: string;
  color: string;
  gradient: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const microSaasServices: Service[] = [
  // AI Services
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy using state-of-the-art language models.',
    shortDescription: 'AI-powered content creation for blogs, social media, and marketing',
    icon: 'CpuChipIcon',
    category: 'AI',
    features: [
      'Multi-language content generation',
      'SEO-optimized articles',
      'Social media post automation',
      'Brand voice customization',
      'Plagiarism detection',
      'Content scheduling',
      'Analytics dashboard',
      'API integration'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199
    },
    benefits: [
      'Save 80% time on content creation',
      'Increase content output by 500%',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Scale content marketing efforts'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Technical documentation'
    ],
    technologies: ['GPT-4', 'Claude', 'BERT', 'React', 'Node.js', 'MongoDB'],
    href: '/ai-content-generator',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    isPopular: true
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Intelligent business analytics platform that provides real-time insights, predictive analytics, and automated reporting using machine learning algorithms.',
    shortDescription: 'AI-powered business intelligence and analytics platform',
    icon: 'ChartBarIcon',
    category: 'AI',
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Automated reporting',
      'Custom dashboard builder',
      'Data source integration',
      'Alert system',
      'Mobile responsive',
      'White-label options'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 299
    },
    benefits: [
      'Make data-driven decisions',
      'Identify trends and patterns',
      'Reduce manual reporting time',
      'Improve business performance',
      'Gain competitive advantage'
    ],
    useCases: [
      'Sales performance tracking',
      'Marketing campaign analysis',
      'Financial reporting',
      'Customer behavior insights',
      'Operational efficiency metrics'
    ],
    technologies: ['Python', 'TensorFlow', 'D3.js', 'React', 'PostgreSQL', 'Redis'],
    href: '/ai-analytics-dashboard',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'ai-customer-support-bot',
    title: 'AI Customer Support Bot',
    description: 'Intelligent customer service automation platform that handles inquiries, provides instant responses, and escalates complex issues to human agents.',
    shortDescription: 'Automated customer support with AI chatbot technology',
    icon: 'ChatBubbleLeftRightIcon',
    category: 'AI',
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Sentiment analysis',
      'Knowledge base integration',
      'Live agent handoff',
      'Performance analytics',
      'Custom training',
      'API integration'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249
    },
    benefits: [
      '24/7 customer support',
      'Reduce response time by 90%',
      'Lower support costs',
      'Improve customer satisfaction',
      'Scale support operations'
    ],
    useCases: [
      'E-commerce support',
      'SaaS customer service',
      'Technical support',
      'Lead qualification',
      'FAQ automation'
    ],
    technologies: ['OpenAI', 'Dialogflow', 'React', 'Node.js', 'WebSocket', 'MongoDB'],
    href: '/ai-customer-support-bot',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    isNew: true
  },
  {
    id: 'ai-code-assistant',
    title: 'AI Code Assistant Pro',
    description: 'Advanced AI-powered coding assistant that helps developers write better code, debug issues, and learn new technologies with intelligent suggestions.',
    shortDescription: 'AI-powered coding assistant for developers',
    icon: 'CodeBracketIcon',
    category: 'AI',
    features: [
      'Code completion and suggestions',
      'Bug detection and fixes',
      'Code review automation',
      'Documentation generation',
      'Multi-language support',
      'IDE integration',
      'Learning recommendations',
      'Team collaboration'
    ],
    pricing: {
      starter: 19,
      professional: 59,
      enterprise: 149
    },
    benefits: [
      'Increase coding productivity',
      'Reduce bugs and errors',
      'Learn new technologies faster',
      'Improve code quality',
      'Accelerate development cycles'
    ],
    useCases: [
      'Software development',
      'Code review process',
      'Learning new languages',
      'Debugging assistance',
      'Documentation writing'
    ],
    technologies: ['GitHub Copilot', 'Codex', 'VS Code', 'IntelliJ', 'Vim', 'Emacs'],
    href: '/ai-code-assistant',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500'
  },

  // IT Services
  {
    id: 'cloud-infrastructure-manager',
    title: 'Cloud Infrastructure Manager',
    description: 'Comprehensive cloud management platform that automates deployment, monitoring, and optimization of cloud resources across multiple providers.',
    shortDescription: 'Automated cloud infrastructure management and optimization',
    icon: 'CloudIcon',
    category: 'IT',
    features: [
      'Multi-cloud support',
      'Auto-scaling',
      'Cost optimization',
      'Security monitoring',
      'Backup automation',
      'Performance analytics',
      'Compliance reporting',
      'API management'
    ],
    pricing: {
      starter: 99,
      professional: 249,
      enterprise: 499
    },
    benefits: [
      'Reduce cloud costs by 30%',
      'Improve system reliability',
      'Automate routine tasks',
      'Enhance security posture',
      'Scale efficiently'
    ],
    useCases: [
      'AWS management',
      'Azure optimization',
      'Google Cloud monitoring',
      'Hybrid cloud solutions',
      'Disaster recovery'
    ],
    technologies: ['Terraform', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP'],
    href: '/cloud-infrastructure-manager',
    color: 'sky',
    gradient: 'from-sky-500 to-blue-500',
    isPopular: true
  },
  {
    id: 'api-gateway-manager',
    title: 'API Gateway Manager',
    description: 'Enterprise-grade API management platform that provides security, monitoring, and analytics for all your APIs with advanced rate limiting and authentication.',
    shortDescription: 'Enterprise API management with security and analytics',
    icon: 'GlobeAltIcon',
    category: 'IT',
    features: [
      'API security',
      'Rate limiting',
      'Authentication & authorization',
      'Analytics dashboard',
      'Developer portal',
      'API versioning',
      'Load balancing',
      'Documentation generation'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 399
    },
    benefits: [
      'Secure API endpoints',
      'Monitor API performance',
      'Control access and usage',
      'Improve developer experience',
      'Scale API infrastructure'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Partner API access',
      'Internal service communication'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Nginx', 'Redis', 'PostgreSQL', 'Docker'],
    href: '/api-gateway-manager',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'database-optimizer',
    title: 'Database Performance Optimizer',
    description: 'Intelligent database optimization platform that analyzes performance, suggests improvements, and automates maintenance tasks for better efficiency.',
    shortDescription: 'AI-powered database performance optimization and monitoring',
    icon: 'CircleStackIcon',
    category: 'IT',
    features: [
      'Performance monitoring',
      'Query optimization',
      'Index recommendations',
      'Automated maintenance',
      'Capacity planning',
      'Security auditing',
      'Backup management',
      'Multi-database support'
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 299
    },
    benefits: [
      'Improve query performance',
      'Reduce database costs',
      'Prevent downtime',
      'Automate maintenance',
      'Optimize resource usage'
    ],
    useCases: [
      'MySQL optimization',
      'PostgreSQL tuning',
      'MongoDB performance',
      'Redis caching',
      'Database migration'
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Python', 'Grafana'],
    href: '/database-optimizer',
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500'
  },

  // Security Services
  {
    id: 'cybersecurity-monitor',
    title: 'Cybersecurity Monitor Pro',
    description: 'Advanced security monitoring platform that provides real-time threat detection, vulnerability assessment, and incident response automation.',
    shortDescription: 'Real-time cybersecurity monitoring and threat detection',
    icon: 'ShieldCheckIcon',
    category: 'Security',
    features: [
      'Real-time threat detection',
      'Vulnerability scanning',
      'Incident response automation',
      'Compliance monitoring',
      'Security analytics',
      'Threat intelligence',
      'Automated remediation',
      'Custom alerts'
    ],
    pricing: {
      starter: 149,
      professional: 299,
      enterprise: 599
    },
    benefits: [
      'Detect threats instantly',
      'Reduce security risks',
      'Automate incident response',
      'Maintain compliance',
      'Protect sensitive data'
    ],
    useCases: [
      'Network security monitoring',
      'Endpoint protection',
      'Cloud security',
      'Compliance auditing',
      'Incident management'
    ],
    technologies: ['SIEM', 'SOAR', 'Machine Learning', 'Elasticsearch', 'Kibana', 'Python'],
    href: '/cybersecurity-monitor',
    color: 'red',
    gradient: 'from-red-500 to-pink-500',
    isPopular: true
  },
  {
    id: 'password-manager-enterprise',
    title: 'Enterprise Password Manager',
    description: 'Secure password management solution for teams with advanced encryption, access controls, and compliance features for enterprise environments.',
    shortDescription: 'Enterprise-grade password management and security',
    icon: 'KeyIcon',
    category: 'Security',
    features: [
      'Zero-knowledge encryption',
      'Team collaboration',
      'Access controls',
      'Audit logging',
      'SSO integration',
      'Password sharing',
      'Breach monitoring',
      'Compliance reporting'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 199
    },
    benefits: [
      'Enhance password security',
      'Simplify team management',
      'Reduce security risks',
      'Maintain compliance',
      'Improve productivity'
    ],
    useCases: [
      'Team password sharing',
      'Enterprise security',
      'Compliance requirements',
      'SSO integration',
      'Password auditing'
    ],
    technologies: ['AES-256', 'OAuth', 'SAML', 'React', 'Node.js', 'PostgreSQL'],
    href: '/password-manager-enterprise',
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500'
  },

  // Analytics Services
  {
    id: 'website-analytics-pro',
    title: 'Website Analytics Pro',
    description: 'Advanced web analytics platform that provides detailed insights into user behavior, conversion tracking, and performance optimization recommendations.',
    shortDescription: 'Advanced website analytics and user behavior tracking',
    icon: 'ChartBarIcon',
    category: 'Analytics',
    features: [
      'Real-time analytics',
      'User behavior tracking',
      'Conversion funnel analysis',
      'A/B testing tools',
      'Heatmap visualization',
      'Custom dashboards',
      'API access',
      'White-label options'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199
    },
    benefits: [
      'Understand user behavior',
      'Optimize conversion rates',
      'Improve website performance',
      'Make data-driven decisions',
      'Increase revenue'
    ],
    useCases: [
      'E-commerce optimization',
      'Content performance',
      'User experience analysis',
      'Marketing campaign tracking',
      'Conversion optimization'
    ],
    technologies: ['Google Analytics', 'Mixpanel', 'Amplitude', 'React', 'D3.js', 'Node.js'],
    href: '/website-analytics-pro',
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics Suite',
    description: 'Comprehensive social media analytics platform that tracks performance across all platforms, provides insights, and suggests optimization strategies.',
    shortDescription: 'Multi-platform social media analytics and insights',
    icon: 'ShareIcon',
    category: 'Analytics',
    features: [
      'Multi-platform tracking',
      'Engagement analytics',
      'Content performance',
      'Audience insights',
      'Competitor analysis',
      'Scheduling tools',
      'ROI tracking',
      'Custom reports'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 299
    },
    benefits: [
      'Track social media ROI',
      'Optimize content strategy',
      'Understand audience better',
      'Monitor competitors',
      'Increase engagement'
    ],
    useCases: [
      'Brand monitoring',
      'Content strategy',
      'Campaign analysis',
      'Influencer tracking',
      'Social commerce'
    ],
    technologies: ['Facebook API', 'Twitter API', 'Instagram API', 'LinkedIn API', 'React', 'Python'],
    href: '/social-media-analytics',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500'
  },

  // Automation Services
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Platform',
    description: 'Powerful automation platform that connects apps and services to create custom workflows, reducing manual work and improving efficiency.',
    shortDescription: 'Connect apps and automate workflows with no-code platform',
    icon: 'CogIcon',
    category: 'Automation',
    features: [
      'No-code automation',
      '500+ app integrations',
      'Custom triggers',
      'Conditional logic',
      'Data transformation',
      'Error handling',
      'Team collaboration',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249
    },
    benefits: [
      'Eliminate manual tasks',
      'Reduce human errors',
      'Improve efficiency',
      'Scale operations',
      'Save time and costs'
    ],
    useCases: [
      'Lead management',
      'Data synchronization',
      'Email marketing automation',
      'Customer onboarding',
      'Invoice processing'
    ],
    technologies: ['Zapier', 'Make', 'n8n', 'React', 'Node.js', 'Webhooks'],
    href: '/workflow-automation',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    isNew: true
  },
  {
    id: 'email-marketing-automation',
    title: 'Email Marketing Automation',
    description: 'Advanced email marketing platform with AI-powered personalization, automated campaigns, and detailed analytics for maximum engagement.',
    shortDescription: 'AI-powered email marketing with automation and personalization',
    icon: 'EnvelopeIcon',
    category: 'Automation',
    features: [
      'AI-powered personalization',
      'Automated campaigns',
      'A/B testing',
      'Segmentation tools',
      'Template builder',
      'Analytics dashboard',
      'CRM integration',
      'Deliverability optimization'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199
    },
    benefits: [
      'Increase email engagement',
      'Automate marketing campaigns',
      'Personalize customer experience',
      'Improve deliverability',
      'Track ROI effectively'
    ],
    useCases: [
      'Welcome sequences',
      'Abandoned cart recovery',
      'Lead nurturing',
      'Customer retention',
      'Product announcements'
    ],
    technologies: ['SendGrid', 'Mailchimp', 'HubSpot', 'React', 'Node.js', 'MongoDB'],
    href: '/email-marketing-automation',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500'
  },

  // 5G Services
  {
    id: '5g-iot-platform',
    title: '5G IoT Management Platform',
    description: 'Comprehensive IoT device management platform optimized for 5G networks, providing real-time monitoring, analytics, and control capabilities.',
    shortDescription: '5G-optimized IoT device management and monitoring platform',
    icon: 'SignalIcon',
    category: '5G',
    features: [
      '5G network optimization',
      'Device management',
      'Real-time monitoring',
      'Edge computing support',
      'Data analytics',
      'Alert system',
      'API management',
      'Scalable architecture'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 999
    },
    benefits: [
      'Leverage 5G capabilities',
      'Manage IoT devices efficiently',
      'Real-time data processing',
      'Reduce latency',
      'Scale IoT operations'
    ],
    useCases: [
      'Smart city solutions',
      'Industrial IoT',
      'Connected vehicles',
      'Smart agriculture',
      'Healthcare monitoring'
    ],
    technologies: ['5G', 'MQTT', 'Kubernetes', 'Edge Computing', 'React', 'Python'],
    href: '/5g-iot-platform',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-500',
    isPopular: true
  },

  // Development Services
  {
    id: 'api-testing-suite',
    title: 'API Testing Suite Pro',
    description: 'Comprehensive API testing platform that automates testing, monitors performance, and ensures reliability of your APIs with advanced analytics.',
    shortDescription: 'Automated API testing and performance monitoring platform',
    icon: 'WrenchScrewdriverIcon',
    category: 'Development',
    features: [
      'Automated API testing',
      'Performance monitoring',
      'Load testing',
      'Security testing',
      'Documentation generation',
      'CI/CD integration',
      'Custom test scenarios',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 299
    },
    benefits: [
      'Ensure API reliability',
      'Automate testing processes',
      'Improve performance',
      'Reduce bugs in production',
      'Accelerate development'
    ],
    useCases: [
      'API development',
      'Microservices testing',
      'Performance optimization',
      'Security auditing',
      'CI/CD pipelines'
    ],
    technologies: ['Postman', 'Newman', 'Jest', 'K6', 'React', 'Node.js'],
    href: '/api-testing-suite',
    color: 'lime',
    gradient: 'from-lime-500 to-green-500'
  }
];

export const serviceCategories = [
  { id: 'AI', name: 'AI Services', count: 4, color: 'purple' },
  { id: 'IT', name: 'IT Services', count: 3, color: 'blue' },
  { id: 'Security', name: 'Security', count: 2, color: 'red' },
  { id: 'Analytics', name: 'Analytics', count: 2, color: 'emerald' },
  { id: 'Automation', name: 'Automation', count: 2, color: 'violet' },
  { id: '5G', name: '5G Solutions', count: 1, color: 'indigo' },
  { id: 'Development', name: 'Development', count: 1, color: 'lime' }
];

export const getServicesByCategory = (category: string) => {
  return microSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return microSaasServices.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return microSaasServices.filter(service => service.isNew);
};