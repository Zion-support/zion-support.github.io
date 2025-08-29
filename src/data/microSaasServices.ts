export interface MicroSaasService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  marketPrice: string;
  website: string;
  contactEmail: string;
  tags: string[];
  aiScore: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  location: string;
  availability: string;
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    verified: boolean;
  };
  images: string[];
  createdAt: string;
}
export const MICRO_SAAS_SERVICES = [
  // AI Services
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation Platform',
    category: 'AI Services',
    description: 'Intelligent process automation with AI-powered optimization and real-time analytics',
    price: 'From $3,500/month',
    features: [
      'Process mapping and analysis',
      'AI implementation and training',
      'Real-time monitoring dashboard',
      'Ongoing optimization',
      'API integrations',
      'Custom workflow builder'
    ],
    benefits: [
      'Reduce manual tasks by 80%',
      'Improve process efficiency by 60%',
      'Real-time insights and analytics',
      'Scalable automation workflows'
    ],
    useCases: ['HR processes', 'Customer onboarding', 'Invoice processing', 'Data entry automation'],
    link: '/services/ai-workflow-automation',
    popular: true,
    icon: '🤖',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'ai-customer-experience-platform',
    title: 'AI Customer Experience Platform',
    category: 'AI Services',
    description: 'AI-powered personalization and customer journey optimization with predictive analytics',
    price: 'From $4,500/month',
    features: [
      'CX assessment and mapping',
      'AI platform implementation',
      'Personalization engine',
      'Performance optimization',
      'A/B testing tools',
      'Customer sentiment analysis'
    ],
    benefits: [
      'Increase customer satisfaction by 40%',
      'Improve conversion rates by 35%',
      'Reduce churn by 25%',
      'Personalized customer journeys'
    ],
    useCases: ['E-commerce', 'SaaS platforms', 'Financial services', 'Healthcare'],
    link: '/services/ai-customer-experience-platform',
    popular: false,
    icon: '💫',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    category: 'AI Services',
    description: 'Intelligent supply chain management and logistics optimization with predictive analytics',
    price: 'From $5,500/month',
    features: [
      'Supply chain assessment',
      'AI platform implementation',
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Continuous optimization'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve delivery times by 25%',
      'Optimize warehouse operations',
      'Predictive maintenance alerts'
    ],
    useCases: ['Manufacturing', 'Retail', 'Logistics', 'Distribution'],
    link: '/services/ai-supply-chain-optimization',
    popular: false,
    icon: '📦',
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 'ai-cybersecurity-suite',
    title: 'AI Cybersecurity Suite',
    category: 'AI Services',
    description: 'Advanced AI-powered threat detection and security automation with 24/7 monitoring',
    price: 'From $2,500/month',
    features: [
      'Threat intelligence platform',
      'SOC services',
      'Compliance monitoring',
      'Incident response automation',
      'Vulnerability assessment',
      'Security awareness training'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      '24/7 security monitoring',
      'Automated incident response'
    ],
    useCases: ['Financial services', 'Healthcare', 'Government', 'Enterprise'],
    link: '/services/ai-cybersecurity-suite',
    popular: true,
    icon: '🔒',
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    category: 'AI Services',
    description: 'Next-generation quantum computing platform for complex AI computations',
    price: 'From $8,500/month',
    features: [
      'Quantum algorithm optimization',
      'AI model training acceleration',
      'Complex problem solving',
      'Quantum-safe encryption',
      'Hybrid classical-quantum computing',
      'Research collaboration tools'
    ],
    benefits: [
      'Solve complex problems 1000x faster',
      'Breakthrough AI model training',
      'Quantum advantage in specific domains',
      'Future-proof technology'
    ],
    useCases: ['Drug discovery', 'Financial modeling', 'Climate research', 'AI research'],
    link: '/services/quantum-ai-platform',
    popular: false,
    icon: '⚛️',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'ai-healthcare-analytics',
    title: 'AI Healthcare Analytics Platform',
    category: 'AI Services',
    description: 'AI-powered healthcare data analytics and predictive medicine platform',
    price: 'From $6,500/month',
    features: [
      'Patient data analytics',
      'Predictive diagnostics',
      'Treatment optimization',
      'Clinical trial insights',
      'Healthcare compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve diagnosis accuracy by 40%',
      'Reduce treatment costs by 30%',
      'Personalized medicine approach',
      'Early disease detection'
    ],
    useCases: ['Hospitals', 'Clinics', 'Research institutions', 'Pharmaceutical companies'],
    link: '/services/ai-healthcare-analytics',
    popular: false,
    icon: '🏥',
    color: 'from-teal-600 to-green-600'
  },

  // IT Services
  {
    id: 'cloud-devops',
    title: 'Cloud DevOps Transformation',
    category: 'IT Services',
    description: 'End-to-end cloud migration and DevOps transformation with automated CI/CD pipelines',
    price: 'From $5,000/month',
    features: [
      'Cloud migration strategy',
      'DevOps implementation',
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      '24/7 managed services',
      'Performance optimization'
    ],
    benefits: [
      'Reduce deployment time by 90%',
      'Improve system reliability by 99.9%',
      'Cost optimization up to 40%',
      'Automated scaling and monitoring'
    ],
    useCases: ['Startups', 'Enterprises', 'E-commerce', 'SaaS platforms'],
    link: '/services/cloud-devops',
    popular: true,
    icon: '☁️',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    category: 'IT Services',
    description: 'Strategic digital transformation consulting and implementation for modern businesses',
    price: 'From $7,500/month',
    features: [
      'Digital maturity assessment',
      'Transformation roadmap',
      'Technology implementation',
      'Change management',
      'Process optimization',
      'Training and support'
    ],
    benefits: [
      'Increase operational efficiency by 50%',
      'Improve customer experience',
      'Reduce operational costs by 30%',
      'Future-ready technology stack'
    ],
    useCases: ['Manufacturing', 'Retail', 'Financial services', 'Healthcare'],
    link: '/services/digital-transformation',
    popular: false,
    icon: '🚀',
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'it-infrastructure',
    title: 'Enterprise IT Infrastructure',
    category: 'IT Services',
    description: 'Robust IT infrastructure design, implementation, and management services',
    price: 'From $4,500/month',
    features: [
      'Infrastructure design',
      'Network optimization',
      'Security implementation',
      'Backup and disaster recovery',
      '24/7 monitoring',
      'Performance tuning'
    ],
    benefits: [
      '99.99% uptime guarantee',
      'Reduce IT costs by 25%',
      'Enhanced security posture',
      'Scalable infrastructure'
    ],
    useCases: ['Enterprises', 'Government', 'Healthcare', 'Education'],
    link: '/services/it-infrastructure',
    popular: false,
    icon: '🏗️',
    color: 'from-gray-600 to-slate-600'
  },
  {
    id: 'green-it-solutions',
    title: 'Green IT Solutions',
    category: 'IT Services',
    description: 'Sustainable IT solutions for environmentally conscious organizations',
    price: 'From $3,500/month',
    features: [
      'Energy-efficient infrastructure',
      'Carbon footprint reduction',
      'Sustainable procurement',
      'Green data centers',
      'Environmental compliance',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 40%',
      'Meet sustainability goals',
      'Improve brand reputation',
      'Regulatory compliance'
    ],
    useCases: ['Corporations', 'Government', 'Educational institutions', 'Non-profits'],
    link: '/services/green-it',
    popular: false,
    icon: '🌱',
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions',
    category: 'IT Services',
    description: 'Quantum computing consulting and implementation for cutting-edge applications',
    price: 'From $12,500/month',
    features: [
      'Quantum readiness assessment',
      'Algorithm development',
      'Hardware integration',
      'Quantum software development',
      'Research collaboration',
      'Training and education'
    ],
    benefits: [
      'Solve previously impossible problems',
      'Competitive advantage',
      'Research breakthroughs',
      'Future technology leadership'
    ],
    useCases: ['Research institutions', 'Pharmaceutical companies', 'Financial services', 'Government'],
    link: '/services/quantum-computing',
    popular: false,
    icon: '⚛️',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'space-tech-solutions',
    title: 'Space Technology Solutions',
    category: 'IT Services',
    description: 'Advanced space technology solutions for aerospace and satellite industries',
    price: 'From $15,000/month',
    features: [
      'Satellite system design',
      'Space data analytics',
      'Orbital mechanics optimization',
      'Ground station operations',
      'Space cybersecurity',
      'Regulatory compliance'
    ],
    benefits: [
      'Access to space data',
      'Innovation leadership',
      'Regulatory expertise',
      'Cutting-edge technology'
    ],
    useCases: ['Aerospace companies', 'Satellite operators', 'Government agencies', 'Research institutions'],
    link: '/services/space-tech',
    popular: false,
    icon: '🚀',
    color: 'from-slate-600 to-gray-600'
  },

  // Micro SaaS Solutions
  {
    id: 'ai-sales-copilot',
    title: 'AI Sales Copilot',
    category: 'Micro SaaS',
    description: 'AI-powered sales automation and lead optimization platform',
    price: 'From $1,999/month',
    features: [
      'Lead scoring and prioritization',
      'Sales automation workflows',
      'Performance analytics',
      'CRM integration',
      'Email automation',
      'Sales forecasting'
    ],
    benefits: [
      'Increase sales by 35%',
      'Reduce sales cycle by 40%',
      'Improve lead conversion by 50%',
      'Automated follow-up sequences'
    ],
    useCases: ['B2B sales', 'Real estate', 'Insurance', 'Financial services'],
    link: '/services/ai-sales-copilot',
    popular: true,
    icon: '💼',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'ai-compliance-assistant',
    title: 'AI Compliance Assistant',
    category: 'Micro SaaS',
    description: 'Automated regulatory compliance monitoring and reporting platform',
    price: 'From $2,500/month',
    features: [
      'Regulatory monitoring',
      'Compliance reporting',
      'Risk assessment',
      'Audit trail management',
      'Policy management',
      'Training modules'
    ],
    benefits: [
      'Reduce compliance costs by 60%',
      'Automated reporting',
      'Real-time compliance status',
      'Reduced audit risk'
    ],
    useCases: ['Financial services', 'Healthcare', 'Manufacturing', 'Government'],
    link: '/services/ai-compliance-assistant',
    popular: false,
    icon: '📋',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 'ai-auto-email-responder',
    title: 'AI Auto Email Responder',
    category: 'Micro SaaS',
    description: 'Intelligent email automation with AI-powered responses and CRM integration',
    price: 'From $1,500/month',
    features: [
      'AI email responses',
      'CRM integration',
      'Response templates',
      'Sentiment analysis',
      'Performance tracking',
      'Custom workflows'
    ],
    benefits: [
      'Respond to emails 10x faster',
      'Improve customer satisfaction',
      'Reduce manual email work',
      '24/7 availability'
    ],
    useCases: ['Customer support', 'Sales teams', 'HR departments', 'Small businesses'],
    link: '/services/ai-auto-email-responder',
    popular: true,
    icon: '📧',
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'customer-feedback-surveys',
    title: 'Customer Feedback Surveys',
    category: 'Micro SaaS',
    description: 'AI-powered customer feedback collection and analysis platform',
    price: 'From $1,200/month',
    features: [
      'Survey creation tools',
      'AI-powered insights',
      'NPS/CSAT tracking',
      'Response analysis',
      'Action planning',
      'Integration APIs'
    ],
    benefits: [
      'Increase response rates by 45%',
      'Get actionable insights',
      'Improve customer satisfaction',
      'Data-driven decisions'
    ],
    useCases: ['E-commerce', 'SaaS companies', 'Service businesses', 'Retail'],
    link: '/services/mobile-feedback-surveys',
    popular: false,
    icon: '📊',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'llm-content-studio',
    title: 'LLM Content Studio',
    category: 'Micro SaaS',
    description: 'AI-powered content generation and management platform with brand consistency',
    price: 'From $2,800/month',
    features: [
      'AI content generation',
      'Brand voice training',
      'Content optimization',
      'SEO integration',
      'Multi-language support',
      'Content analytics'
    ],
    benefits: [
      'Create content 10x faster',
      'Maintain brand consistency',
      'Improve SEO performance',
      'Multi-language content'
    ],
    useCases: ['Marketing agencies', 'E-commerce', 'Content creators', 'Enterprises'],
    link: '/services/llm-content-studio',
    popular: false,
    icon: '✍️',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'finops-advisor',
    title: 'FinOps Advisor',
    category: 'Micro SaaS',
    description: 'Cloud financial operations optimization and cost management platform',
    price: 'From $2,200/month',
    features: [
      'Cloud cost analysis',
      'Optimization recommendations',
      'Budget management',
      'Cost allocation',
      'Performance monitoring',
      'ROI tracking'
    ],
    benefits: [
      'Reduce cloud costs by 30%',
      'Improve resource utilization',
      'Better budget control',
      'Performance optimization'
    ],
    useCases: ['Enterprises', 'Startups', 'Cloud-heavy companies', 'DevOps teams'],
    link: '/services/finops-advisor',
    popular: false,
    icon: '💰',
    color: 'from-yellow-600 to-orange-600'
  }
];

export const SERVICE_CATEGORIES = [
  {
    name: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'AI Services')
  },
  {
    name: 'IT Services',
    description: 'Comprehensive IT infrastructure and digital transformation',
    icon: '💻',
    color: 'from-blue-600 to-cyan-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'IT Services')
  },
  {
    name: 'Micro SaaS',
    description: 'Scalable software solutions for specific business needs',
    icon: '🚀',
    color: 'from-green-600 to-emerald-600',
    services: MICRO_SAAS_SERVICES.filter(s => s.category === 'Micro SaaS')
  }
];

export const PRICING_TIERS = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 29,
    features: [
      'Basic features',
      'Email support',
      '1 user',
      'Standard integrations',
      'Community forum access'
    ],
    color: 'from-cyan-500 to-blue-600',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: 99,
    features: [
      'Advanced features',
      'Priority support',
      'Up to 10 users',
      'Advanced integrations',
      'API access',
      'Custom branding',
      'Analytics dashboard'
    ],
    color: 'from-purple-500 to-cyan-500',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 299,
    features: [
      'Custom features',
      '24/7 dedicated support',
      'Unlimited users',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Dedicated account manager'
    ],
    color: 'from-blue-500 to-purple-500',
    popular: false
  }
];
export const CONTACT_INFO = {
  email: 'kleber@ziontechgroup.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, IC 12345'
};
export const getMicroSaasServiceById = (id: string): MicroSaasService | undefined => {
  return MICRO_SAAS_SERVICES.find(service => service.id === id);
};
export const MICRO_SAAS_CATEGORIES = [
  'AI Business Solutions',
  'IT Infrastructure', 
  'Data Analytics',
  'AI Development',
  'FinTech',
  'HealthTech',
  'E-commerce',
  'EdTech'
];
export const getMicroSaasServicesByCategory = (category: string): MicroSaasService[] => {
  return MICRO_SAAS_SERVICES.filter(service => service.category === category);
};
export const getMicroSaasCategories = (): string[] => {
  return [...new Set(MICRO_SAAS_SERVICES.map(service => service.category))];
};