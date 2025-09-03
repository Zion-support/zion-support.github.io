export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-sales-copilot',
    name: 'AI Sales Copilot',
    category: 'ai-services',
    description: 'Context-aware AI assistant that drafts emails, qualifies leads, and updates CRM with verifiable sources.',
    features: [
      'RAG with CRM + email context',
      'Auto-draft multi-thread replies',
      'Meeting summary to CRM notes',
      'Lead qualification scoring',
      'Governed prompt library',
      'SOC2-ready logging'
    ],
    pricing: { starter: 99.9, professional: 299.9, enterprise: 799.9, currency: 'USD' },
    benefits: ['Shorter sales cycles', 'Higher reply rates', 'Better CRM hygiene'],
    useCases: ['B2B outbound', 'Account management', 'Customer success'],
    technologies: ['OpenAI', 'Vector DB', 'OAuth', 'HubSpot/Salesforce APIs'],
    link: 'https://ziontechgroup.com/services/ai-sales-copilot',
    icon: '🤝'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    category: 'ai-services',
    description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
    features: [
      'Multi-format content generation',
      'Brand voice consistency',
      'SEO optimization',
      'Content scheduling',
      'Performance analytics',
      'Team collaboration tools'
    ],
    pricing: { starter: 49.9, professional: 149.9, enterprise: 399.9, currency: 'USD' },
    benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO optimized'],
    useCases: ['Content marketing', 'Social media', 'Blog writing'],
    technologies: ['GPT-4', 'BERT', 'Content API', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '✍️'
  },
  // IT Services
  {
    id: 'finops-cost-optimizer',
    name: 'Cloud FinOps Cost Optimizer',
    category: 'it-services',
    description: 'Continuous cloud spend optimization with rightsizing, RI/SP recommendations, and anomaly detection.',
    features: [
      'Multi-cloud ingest (AWS, GCP, Azure)',
      'Rightsizing recommendations',
      'RI/SP planning and coverage',
      'Kubernetes cost allocation',
      'Anomaly detection alerts',
      'Weekly savings reports'
    ],
    pricing: { starter: 200.0, professional: 650.0, enterprise: 1800.0, currency: 'USD' },
    benefits: ['15–35% cost reduction', 'Fewer surprise bills', 'Tagging hygiene'],
    useCases: ['Cloud cost management', 'Resource optimization', 'Budget planning'],
    technologies: ['AWS Cost Explorer', 'GCP Billing', 'Azure Cost Management'],
    link: 'https://ziontechgroup.com/services/finops-cost-optimizer',
    icon: '💰'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit',
    category: 'it-services',
    description: 'Comprehensive security assessment and vulnerability management for enterprise systems.',
    features: [
      'Vulnerability scanning',
      'Penetration testing',
      'Compliance assessment',
      'Security recommendations',
      'Incident response planning',
      'Security training'
    ],
    pricing: { starter: 500.0, professional: 1500.0, enterprise: 5000.0, currency: 'USD' },
    benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation'],
    useCases: ['Security assessment', 'Compliance audit', 'Risk management'],
    technologies: ['Nessus', 'OWASP ZAP', 'Burp Suite', 'Security frameworks'],
    link: 'https://ziontechgroup.com/services/cybersecurity-audit',
    icon: '🔒'
  },
  // Micro SaaS Services
  {
    id: 'smart-inventory-management',
    name: 'Smart Inventory Management',
    category: 'micro-saas',
    description: 'AI-powered inventory optimization with demand forecasting and automated reordering.',
    features: [
      'Demand forecasting',
      'Automated reordering',
      'Multi-location tracking',
      'Supplier management',
      'Analytics dashboard',
      'Mobile app access'
    ],
    pricing: { starter: 79.9, professional: 199.9, enterprise: 499.9, currency: 'USD' },
    benefits: ['Reduced stockouts', 'Lower carrying costs', 'Improved cash flow'],
    useCases: ['Retail management', 'Manufacturing', 'Distribution'],
    technologies: ['Machine Learning', 'IoT sensors', 'Cloud storage', 'Mobile APIs'],
    link: 'https://ziontechgroup.com/services/smart-inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'Customer Support Platform',
    category: 'micro-saas',
    description: 'Omnichannel customer support solution with AI-powered ticket routing and response automation.',
    features: [
      'Multi-channel support',
      'AI ticket routing',
      'Automated responses',
      'Knowledge base',
      'Performance analytics',
      'Team collaboration'
    ],
    pricing: { starter: 29.9, professional: 89.9, enterprise: 249.9, currency: 'USD' },
    benefits: ['Faster response times', 'Higher satisfaction', 'Reduced support costs'],
    useCases: ['Customer service', 'Technical support', 'Help desk'],
    technologies: ['NLP', 'Machine Learning', 'WebRTC', 'Analytics'],
    link: 'https://ziontechgroup.com/services/customer-support-platform',
    icon: '🎧'
  }
];

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getAllServices = (): Service[] => {
  return services;
};