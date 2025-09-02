export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'project' | 'hourly' | 'per-user';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: 'basic' | 'advanced' | 'cutting-edge';
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  demoUrl?: string;
  documentationUrl?: string;
  featured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export const COMPREHENSIVE_SERVICES_2025: Service[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-autonomous-business-manager',
    title: 'AI Autonomous Business Manager',
    description: 'Fully autonomous AI system that manages business operations, decision-making, and strategic planning with real-time optimization.',
    category: 'AI Solutions',
    subcategory: 'Business Automation',
    price: 2500,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Autonomous decision-making engine',
      'Real-time business intelligence',
      'Predictive analytics and forecasting',
      'Automated resource allocation',
      'Performance optimization algorithms',
      'Multi-channel communication management',
      'Risk assessment and mitigation',
      'Compliance monitoring and reporting',
      'Custom AI model training',
      'API integration capabilities'
    ],
    benefits: [
      '24/7 autonomous operation',
      'Data-driven decision making',
      'Reduced operational costs by 40%',
      'Improved efficiency and productivity',
      'Scalable business management',
      'Real-time insights and alerts',
      'Proactive problem resolution',
      'Continuous learning and improvement'
    ],
    useCases: [
      'Small to medium business automation',
      'E-commerce operations management',
      'Service industry optimization',
      'Startup scaling and management',
      'Multi-location business coordination'
    ],
    targetAudience: [
      'Small to medium businesses',
      'E-commerce companies',
      'Service-based organizations',
      'Startups and scale-ups',
      'Multi-location businesses'
    ],
    tags: ['AI', 'Automation', 'Business Intelligence', 'Predictive Analytics', 'Machine Learning'],
    estimatedDelivery: '2-4 weeks',
    supportLevel: '24/7 Premium Support',
    marketPrice: '$5,000/month',
    roi: '300% within 6 months',
    innovationLevel: 'cutting-edge',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    technicalSpecs: {
      technology: ['GPT-4', 'TensorFlow', 'PyTorch', 'AWS SageMaker', 'Azure ML'],
      integrations: ['Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'Zapier'],
      apiEndpoints: 50,
      uptime: '99.9%',
      security: ['SOC 2 Type II', 'GDPR Compliant', 'End-to-end encryption', 'Multi-factor authentication']
    },
    competitors: ['IBM Watson', 'Microsoft Copilot', 'Salesforce Einstein'],
    marketSize: '$15.2B by 2025',
    demoUrl: 'https://ziontechgroup.com/demo/ai-business-manager',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-business-manager',
    featured: true,
    isPopular: true
  },

  {
    id: 'ai-customer-experience-optimizer',
    title: 'AI Customer Experience Optimizer',
    description: 'Advanced AI system that analyzes customer interactions and optimizes experiences across all touchpoints in real-time.',
    category: 'AI Solutions',
    subcategory: 'Customer Experience',
    price: 1800,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Real-time customer sentiment analysis',
      'Predictive customer behavior modeling',
      'Automated response optimization',
      'Multi-channel experience orchestration',
      'Personalization engine',
      'Customer journey mapping',
      'Churn prediction and prevention',
      'A/B testing automation',
      'Voice and text analytics',
      'Integration with CRM systems'
    ],
    benefits: [
      'Increase customer satisfaction by 35%',
      'Reduce churn rate by 25%',
      'Improve conversion rates by 40%',
      'Automated customer insights',
      'Real-time experience optimization',
      'Predictive customer service',
      'Enhanced personalization',
      'Reduced support costs'
    ],
    useCases: [
      'E-commerce customer optimization',
      'SaaS customer success management',
      'Retail customer experience enhancement',
      'Financial services customer journey',
      'Healthcare patient experience'
    ],
    targetAudience: [
      'E-commerce businesses',
      'SaaS companies',
      'Retail organizations',
      'Financial institutions',
      'Healthcare providers'
    ],
    tags: ['AI', 'Customer Experience', 'Analytics', 'Personalization', 'Machine Learning'],
    estimatedDelivery: '3-5 weeks',
    supportLevel: '24/7 Premium Support',
    marketPrice: '$3,500/month',
    roi: '250% within 8 months',
    innovationLevel: 'advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    technicalSpecs: {
      technology: ['NLP', 'Computer Vision', 'Deep Learning', 'Real-time Analytics', 'Cloud Computing'],
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Shopify'],
      apiEndpoints: 30,
      uptime: '99.9%',
      security: ['SOC 2 Type II', 'GDPR Compliant', 'PCI DSS', 'HIPAA Ready']
    },
    featured: true
  },

  {
    id: 'cloud-native-transformation',
    title: 'Cloud-Native Transformation Platform',
    description: 'Complete cloud migration and modernization platform with automated infrastructure management and optimization.',
    category: 'Cloud Solutions',
    subcategory: 'Infrastructure',
    price: 3200,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Automated cloud migration',
      'Container orchestration with Kubernetes',
      'Serverless architecture implementation',
      'Multi-cloud management',
      'Cost optimization algorithms',
      'Auto-scaling infrastructure',
      'Disaster recovery automation',
      'Security compliance monitoring',
      'Performance monitoring and alerting',
      'DevOps pipeline automation'
    ],
    benefits: [
      'Reduce infrastructure costs by 50%',
      'Improve application performance by 60%',
      '99.9% uptime guarantee',
      'Automated scaling and optimization',
      'Enhanced security and compliance',
      'Faster deployment cycles',
      'Reduced operational overhead',
      'Future-proof architecture'
    ],
    useCases: [
      'Legacy system modernization',
      'Microservices architecture implementation',
      'Multi-cloud strategy execution',
      'Disaster recovery planning',
      'Performance optimization'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Mid-size companies',
      'Startups scaling infrastructure',
      'Government agencies',
      'Healthcare organizations'
    ],
    tags: ['Cloud', 'DevOps', 'Kubernetes', 'Microservices', 'Infrastructure'],
    estimatedDelivery: '4-8 weeks',
    supportLevel: '24/7 Enterprise Support',
    marketPrice: '$6,000/month',
    roi: '200% within 12 months',
    innovationLevel: 'advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    technicalSpecs: {
      technology: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      integrations: ['Jenkins', 'GitLab', 'GitHub Actions', 'Datadog', 'New Relic'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP Ready', 'Zero-trust architecture']
    },
    featured: true,
    isPopular: true
  },

  {
    id: 'ai-powered-cybersecurity-suite',
    title: 'AI-Powered Cybersecurity Suite',
    description: 'Comprehensive cybersecurity platform with AI-driven threat detection, prevention, and response capabilities.',
    category: 'Cybersecurity',
    subcategory: 'Threat Management',
    price: 2800,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'AI-powered threat detection',
      'Real-time security monitoring',
      'Automated incident response',
      'Vulnerability assessment and management',
      'Compliance monitoring and reporting',
      'Security awareness training',
      'Penetration testing automation',
      'Data loss prevention',
      'Identity and access management',
      'Security orchestration and automation'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      'Automated threat response',
      'Compliance automation',
      '24/7 security monitoring',
      'Reduced security costs',
      'Enhanced threat visibility',
      'Faster incident response',
      'Proactive security posture'
    ],
    useCases: [
      'Enterprise security management',
      'Compliance automation',
      'Threat hunting and analysis',
      'Incident response automation',
      'Security awareness training'
    ],
    targetAudience: [
      'Enterprise organizations',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'E-commerce businesses'
    ],
    tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Compliance', 'Automation'],
    estimatedDelivery: '3-6 weeks',
    supportLevel: '24/7 Security Operations Center',
    marketPrice: '$5,500/month',
    roi: '400% within 6 months',
    innovationLevel: 'cutting-edge',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    },
    technicalSpecs: {
      technology: ['Machine Learning', 'SIEM', 'SOAR', 'EDR', 'XDR', 'Zero Trust'],
      integrations: ['Splunk', 'QRadar', 'CrowdStrike', 'Palo Alto', 'Cisco'],
      apiEndpoints: 75,
      uptime: '99.99%',
      security: ['SOC 2 Type II', 'ISO 27001', 'NIST Framework', 'Zero-trust architecture']
    },
    featured: true
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'ai-solutions', name: 'AI Solutions', count: 2, icon: '🤖' },
  { id: 'cloud-solutions', name: 'Cloud Solutions', count: 1, icon: '☁️' },
  { id: 'cybersecurity', name: 'Cybersecurity', count: 1, icon: '🔒' },
  { id: 'data-analytics', name: 'Data Analytics', count: 1, icon: '📊' },
  { id: 'iot-solutions', name: 'IoT Solutions', count: 1, icon: '🌐' },
  { id: 'blockchain-solutions', name: 'Blockchain Solutions', count: 1, icon: '⛓️' },
  { id: 'digital-transformation', name: 'Digital Transformation', count: 1, icon: '🔄' },
  { id: 'healthcare-technology', name: 'Healthcare Technology', count: 1, icon: '🏥' },
  { id: 'financial-technology', name: 'Financial Technology', count: 1, icon: '💰' }
];

export const CONTACT_INFO = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};