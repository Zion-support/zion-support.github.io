export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'ai' | 'it' | 'micro-saas' | 'emerging-tech';
  pricing: {
    starting: number;
    currency: string;
    period: string;
    features: string[];
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  marketPrice: number;
  ourPrice: number;
  savings: number;
  link: string;
  popular?: boolean;
  new?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'No-code AI chatbot creation with advanced NLP capabilities',
    longDescription: 'Create intelligent chatbots that understand context, handle complex queries, and provide 24/7 customer support. Our platform uses state-of-the-art NLP models to deliver human-like conversations.',
    icon: '🤖',
    category: 'ai',
    pricing: {
      starting: 99,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited conversations', 'Multi-language support', 'Custom training', 'Analytics dashboard']
    },
    features: [
      'Drag-and-drop interface',
      'Multi-language support (50+ languages)',
      'Custom AI model training',
      'Real-time analytics',
      'API integration',
      'Voice and text support',
      'Sentiment analysis',
      'Lead qualification'
    ],
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer availability',
      'Instant response times',
      'Scalable to millions of users',
      'Easy integration with existing systems'
    ],
    useCases: [
      'Customer support automation',
      'Lead generation and qualification',
      'E-commerce assistance',
      'Internal HR support',
      'Educational tutoring'
    ],
    technologies: ['OpenAI GPT-4', 'Google Dialogflow', 'Microsoft Bot Framework', 'TensorFlow', 'PyTorch'],
    marketPrice: 299,
    ourPrice: 99,
    savings: 67,
    link: '/ai-chatbot-builder',
    popular: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Revolutionary AI-powered content creation for all marketing needs',
    longDescription: 'Generate high-quality, SEO-optimized content for blogs, social media, emails, and marketing materials. Our AI understands your brand voice and creates content that converts.',
    icon: '✍️',
    category: 'ai',
    pricing: {
      starting: 199,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited content generation', 'SEO optimization', 'Brand voice training', 'Multi-format support']
    },
    features: [
      'Blog post generation',
      'Social media content',
      'Email marketing campaigns',
      'Product descriptions',
      'SEO optimization',
      'Brand voice consistency',
      'Multi-language support',
      'Content scheduling'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Consistent brand voice',
      'SEO-optimized content',
      'Scalable content production',
      'A/B testing capabilities'
    ],
    useCases: [
      'Content marketing automation',
      'Social media management',
      'Email campaign creation',
      'E-commerce product descriptions',
      'Blog content strategy'
    ],
    technologies: ['GPT-4', 'Claude AI', 'BERT', 'RoBERTa', 'Custom NLP models'],
    marketPrice: 499,
    ourPrice: 199,
    savings: 60,
    link: '/ai-content-generation',
    popular: true
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Advanced business intelligence with predictive analytics',
    longDescription: 'Transform your data into actionable insights with our AI-powered analytics platform. Get predictive analytics, automated reporting, and real-time business intelligence.',
    icon: '📊',
    category: 'ai',
    pricing: {
      starting: 299,
      currency: 'USD',
      period: 'month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Automated reports']
    },
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Custom dashboard creation',
      'Automated reporting',
      'Data integration',
      'Machine learning insights',
      'Alert system',
      'Mobile app access'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends before competitors',
      'Automate reporting processes',
      'Improve operational efficiency',
      'Reduce manual analysis time'
    ],
    useCases: [
      'Sales performance tracking',
      'Customer behavior analysis',
      'Financial forecasting',
      'Marketing ROI optimization',
      'Operational efficiency monitoring'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'R', 'TensorFlow', 'Apache Spark'],
    marketPrice: 799,
    ourPrice: 299,
    savings: 63,
    link: '/ai-analytics-dashboard'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing',
    description: 'Intelligent email campaigns with personalization and automation',
    longDescription: 'Create highly personalized email campaigns that convert. Our AI analyzes customer behavior to send the right message at the right time to the right person.',
    icon: '📧',
    category: 'ai',
    pricing: {
      starting: 149,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited emails', 'AI personalization', 'A/B testing', 'Advanced segmentation']
    },
    features: [
      'AI-powered personalization',
      'Automated campaign creation',
      'Advanced segmentation',
      'A/B testing optimization',
      'Send time optimization',
      'Subject line generation',
      'Content recommendations',
      'Performance analytics'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'Automate campaign creation',
      'Personalize at scale',
      'Optimize send times automatically'
    ],
    useCases: [
      'E-commerce marketing',
      'Lead nurturing campaigns',
      'Customer retention',
      'Product announcements',
      'Newsletter automation'
    ],
    technologies: ['Mailchimp API', 'SendGrid', 'AWS SES', 'Machine Learning', 'Customer Data Platform'],
    marketPrice: 399,
    ourPrice: 149,
    savings: 63,
    link: '/ai-email-marketing'
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Management',
    description: 'Complete cloud infrastructure setup and management',
    longDescription: 'Migrate to the cloud with confidence. We handle everything from planning and migration to ongoing management and optimization of your cloud infrastructure.',
    icon: '☁️',
    category: 'it',
    pricing: {
      starting: 999,
      currency: 'USD',
      period: 'month',
      features: ['24/7 monitoring', 'Security management', 'Cost optimization', 'Disaster recovery']
    },
    features: [
      'Cloud migration planning',
      'Infrastructure as Code',
      'Security compliance',
      'Cost optimization',
      'Disaster recovery',
      'Performance monitoring',
      'Auto-scaling setup',
      'Backup management'
    ],
    benefits: [
      'Reduce infrastructure costs by 30%',
      'Improve scalability and flexibility',
      'Enhanced security and compliance',
      '24/7 monitoring and support',
      'Disaster recovery protection'
    ],
    useCases: [
      'Digital transformation',
      'Legacy system migration',
      'Scalable application hosting',
      'Disaster recovery setup',
      'Compliance requirements'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
    marketPrice: 2499,
    ourPrice: 999,
    savings: 60,
    link: '/cloud-infrastructure',
    popular: true
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions for enterprise protection',
    longDescription: 'Protect your business with our comprehensive cybersecurity suite. From threat detection to incident response, we provide complete security coverage.',
    icon: '🔒',
    category: 'it',
    pricing: {
      starting: 799,
      currency: 'USD',
      period: 'month',
      features: ['Threat monitoring', 'Incident response', 'Security training', 'Compliance management']
    },
    features: [
      '24/7 threat monitoring',
      'Incident response team',
      'Security awareness training',
      'Compliance management',
      'Penetration testing',
      'Vulnerability assessments',
      'Security policy development',
      'Emergency response'
    ],
    benefits: [
      'Protect against cyber threats',
      'Meet compliance requirements',
      'Reduce security risks',
      'Professional incident response',
      'Ongoing security education'
    ],
    useCases: [
      'Enterprise security',
      'Compliance requirements',
      'Threat protection',
      'Incident response',
      'Security training'
    ],
    technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'Multi-factor Authentication'],
    marketPrice: 1999,
    ourPrice: 799,
    savings: 60,
    link: '/cybersecurity-suite'
  },

  // Micro SAAS Services
  {
    id: 'ai-crm',
    name: 'AI-Powered CRM',
    description: 'Intelligent customer relationship management with AI insights',
    longDescription: 'Revolutionize your customer relationships with our AI-powered CRM. Get intelligent lead scoring, automated follow-ups, and predictive analytics.',
    icon: '👥',
    category: 'micro-saas',
    pricing: {
      starting: 79,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited contacts', 'AI lead scoring', 'Automated workflows', 'Advanced analytics']
    },
    features: [
      'AI lead scoring',
      'Automated follow-ups',
      'Predictive analytics',
      'Sales forecasting',
      'Customer segmentation',
      'Email integration',
      'Mobile app',
      'API access'
    ],
    benefits: [
      'Increase sales by 35%',
      'Improve lead quality',
      'Automate repetitive tasks',
      'Better customer insights',
      'Streamlined sales process'
    ],
    useCases: [
      'Sales team management',
      'Lead generation',
      'Customer retention',
      'Sales forecasting',
      'Pipeline management'
    ],
    technologies: ['Salesforce API', 'HubSpot', 'Machine Learning', 'Predictive Analytics', 'REST APIs'],
    marketPrice: 199,
    ourPrice: 79,
    savings: 60,
    link: '/ai-crm',
    popular: true
  },
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    description: 'Automated invoice creation and management system',
    longDescription: 'Streamline your invoicing process with our AI-powered system. Automatically generate, send, and track invoices while reducing errors and improving cash flow.',
    icon: '🧾',
    category: 'micro-saas',
    pricing: {
      starting: 49,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited invoices', 'Automated reminders', 'Payment tracking', 'Tax calculations']
    },
    features: [
      'Automated invoice generation',
      'Payment tracking',
      'Automated reminders',
      'Tax calculations',
      'Multi-currency support',
      'Client portal',
      'Reporting dashboard',
      'API integration'
    ],
    benefits: [
      'Reduce invoicing time by 90%',
      'Improve payment collection',
      'Eliminate manual errors',
      'Better cash flow management',
      'Professional invoice templates'
    ],
    useCases: [
      'Freelancer invoicing',
      'Small business billing',
      'Service-based companies',
      'Recurring billing',
      'International payments'
    ],
    technologies: ['Stripe', 'PayPal', 'QuickBooks API', 'PDF Generation', 'Email Automation'],
    marketPrice: 129,
    ourPrice: 49,
    savings: 62,
    link: '/ai-invoice-generator'
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered insights',
    longDescription: 'Take your project management to the next level with AI-powered insights, automated task assignment, and predictive project analytics.',
    icon: '📋',
    category: 'micro-saas',
    pricing: {
      starting: 89,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited projects', 'AI task assignment', 'Predictive analytics', 'Team collaboration']
    },
    features: [
      'AI task assignment',
      'Predictive project analytics',
      'Resource optimization',
      'Risk assessment',
      'Team collaboration tools',
      'Time tracking',
      'Progress monitoring',
      'Custom workflows'
    ],
    benefits: [
      'Improve project success rate by 40%',
      'Optimize resource allocation',
      'Predict project risks',
      'Enhance team productivity',
      'Better project visibility'
    ],
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Event planning',
      'Construction projects',
      'Consulting engagements'
    ],
    technologies: ['Jira API', 'Asana', 'Machine Learning', 'Predictive Analytics', 'Agile Methodologies'],
    marketPrice: 199,
    ourPrice: 89,
    savings: 55,
    link: '/ai-project-manager'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Automated SEO analysis and optimization tool',
    longDescription: 'Boost your search rankings with our AI-powered SEO tool. Get automated keyword research, content optimization, and technical SEO analysis.',
    icon: '🔍',
    category: 'micro-saas',
    pricing: {
      starting: 69,
      currency: 'USD',
      period: 'month',
      features: ['Unlimited analysis', 'Keyword research', 'Content optimization', 'Rank tracking']
    },
    features: [
      'Automated SEO analysis',
      'Keyword research',
      'Content optimization',
      'Rank tracking',
      'Technical SEO audit',
      'Competitor analysis',
      'Link building suggestions',
      'Performance reporting'
    ],
    benefits: [
      'Increase organic traffic by 50%',
      'Automate SEO tasks',
      'Improve search rankings',
      'Save time on analysis',
      'Data-driven optimization'
    ],
    useCases: [
      'Website optimization',
      'Content marketing',
      'E-commerce SEO',
      'Local business SEO',
      'Blog optimization'
    ],
    technologies: ['Google Search Console', 'SEMrush API', 'Ahrefs', 'Machine Learning', 'NLP'],
    marketPrice: 179,
    ourPrice: 69,
    savings: 61,
    link: '/ai-seo-optimizer'
  },

  // Emerging Tech Services
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing capabilities',
    longDescription: 'Harness the power of quantum computing for complex problem solving, optimization, and advanced simulations. Get access to cutting-edge quantum hardware and algorithms.',
    icon: '⚛️',
    category: 'emerging-tech',
    pricing: {
      starting: 0,
      currency: 'USD',
      period: 'consultation',
      features: ['Custom pricing', 'Quantum algorithm development', 'Hardware access', 'Expert consultation']
    },
    features: [
      'Quantum algorithm development',
      'Hardware access',
      'Expert consultation',
      'Custom solutions',
      'Performance optimization',
      'Security applications',
      'Research collaboration',
      'Training programs'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Advance research capabilities',
      'Gain competitive advantage',
      'Access cutting-edge technology',
      'Future-proof your business'
    ],
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Cryptography',
      'Machine learning',
      'Supply chain optimization'
    ],
    technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Rigetti Forest', 'D-Wave'],
    marketPrice: 0,
    ourPrice: 0,
    savings: 0,
    link: '/quantum-computing',
    new: true
  },
  {
    id: 'ar-vr-solutions',
    name: 'AR/VR Solutions',
    description: 'Immersive augmented and virtual reality experiences',
    longDescription: 'Create immersive AR/VR experiences for training, marketing, and customer engagement. From concept to deployment, we deliver cutting-edge immersive solutions.',
    icon: '🥽',
    category: 'emerging-tech',
    pricing: {
      starting: 2999,
      currency: 'USD',
      period: 'project',
      features: ['Custom development', 'Hardware integration', 'User testing', 'Ongoing support']
    },
    features: [
      'Custom AR/VR development',
      'Hardware integration',
      'User experience design',
      'Performance optimization',
      'Cross-platform compatibility',
      'Analytics and tracking',
      'Content management',
      'Training and support'
    ],
    benefits: [
      'Enhance customer engagement',
      'Improve training effectiveness',
      'Create unique experiences',
      'Increase brand differentiation',
      'Future-ready solutions'
    ],
    useCases: [
      'Employee training',
      'Product demonstrations',
      'Virtual showrooms',
      'Educational content',
      'Marketing campaigns'
    ],
    technologies: ['Unity', 'Unreal Engine', 'WebXR', 'ARCore', 'ARKit', 'Oculus SDK'],
    marketPrice: 7999,
    ourPrice: 2999,
    savings: 63,
    link: '/ar-vr-solutions'
  }
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

export const getNewServices = () => {
  return services.filter(service => service.new);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};
