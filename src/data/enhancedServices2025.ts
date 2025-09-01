export interface EnhancedService {
  id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Edge Computing' | 'Quantum AI' | 'Sustainable Tech';
  price: string;
  billing: 'month' | 'project' | 'hour' | 'year';
  features: string[];
  benefits: string[];
  useCases: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
  featured?: boolean;
  marketPrice: string;
  roi: string;
  implementationTime: string;
  support: string;
  compliance: string[];
  integrations: string[];
  icon: string;
  color: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  items: EnhancedService[];
}

export const enhancedServices2025: ServiceCategory[] = [
  {
    name: 'AI-Powered Micro SaaS',
    slug: 'ai-micro-saas',
    description: 'Intelligent, scalable SaaS solutions powered by cutting-edge AI',
    items: [
      {
        id: 'ai-sales-predictor-pro',
        title: 'AI Sales Predictor Pro',
        description: 'Predictive sales analytics platform that forecasts revenue, identifies high-value prospects, and optimizes sales strategies using machine learning.',
        category: 'Micro SaaS',
        price: '$299',
        billing: 'month',
        marketPrice: '$500-800/month',
        roi: '300-500% within 6 months',
        implementationTime: '2-4 weeks',
        support: '24/7 AI-powered support + human experts',
        features: [
          'AI-powered lead scoring and prioritization',
          'Revenue forecasting with 95% accuracy',
          'Customer churn prediction and prevention',
          'Sales pipeline optimization',
          'Real-time performance analytics',
          'CRM integration (Salesforce, HubSpot, Pipedrive)',
          'Custom AI model training for your industry',
          'Multi-language support'
        ],
        benefits: [
          'Increase sales conversion rates by 40-60%',
          'Reduce customer churn by 25-35%',
          'Improve sales forecasting accuracy by 90%',
          'Automate 70% of manual sales tasks',
          'Generate 3x more qualified leads'
        ],
        useCases: [
          'B2B SaaS companies',
          'Enterprise sales teams',
          'E-commerce businesses',
          'Real estate agencies',
          'Financial services'
        ],
        ctaLabel: 'Start Free Trial',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
        integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zapier', 'Slack', 'Teams'],
        icon: '📊',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        id: 'ai-content-optimizer-elite',
        title: 'AI Content Optimizer Elite',
        description: 'Advanced content optimization platform that uses GPT-4 and Claude to create, optimize, and distribute content across all digital channels.',
        category: 'Micro SaaS',
        price: '$199',
        billing: 'month',
        marketPrice: '$300-600/month',
        roi: '250-400% within 3 months',
        implementationTime: '1-2 weeks',
        support: 'AI chat support + content strategy consultation',
        features: [
          'GPT-4 and Claude 3.5 integration',
          'Multi-language content generation',
          'SEO optimization with real-time suggestions',
          'Content performance analytics',
          'Automated A/B testing',
          'Social media scheduling and optimization',
          'Brand voice consistency checker',
          'Plagiarism detection and prevention'
        ],
        benefits: [
          'Increase organic traffic by 50-80%',
          'Improve content engagement by 40-60%',
          'Reduce content creation time by 70%',
          'Boost conversion rates by 25-40%',
          'Maintain consistent brand voice across all channels'
        ],
        useCases: [
          'Digital marketing agencies',
          'E-commerce businesses',
          'Content creators',
          'SaaS companies',
          'Educational institutions'
        ],
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['GDPR', 'CCPA', 'Content Safety'],
        integrations: ['WordPress', 'Shopify', 'Mailchimp', 'Buffer', 'Hootsuite', 'Google Analytics'],
        icon: '✍️',
        color: 'from-purple-500 to-pink-500'
      },
      {
        id: 'ai-customer-support-automation',
        title: 'AI Customer Support Automation',
        description: 'Intelligent customer support platform that automates responses, routes tickets, and provides 24/7 support using advanced AI.',
        category: 'Micro SaaS',
        price: '$399',
        billing: 'month',
        marketPrice: '$600-1200/month',
        roi: '400-600% within 4 months',
        implementationTime: '2-3 weeks',
        support: 'Dedicated support manager + AI assistance',
        features: [
          'AI-powered ticket classification and routing',
          'Automated response generation',
          'Multi-language support (50+ languages)',
          'Sentiment analysis and escalation',
          'Knowledge base auto-generation',
          'Integration with major helpdesk platforms',
          'Real-time analytics and reporting',
          'Custom AI training for industry-specific queries'
        ],
        benefits: [
          'Reduce response time by 80%',
          'Handle 70% of support queries automatically',
          'Improve customer satisfaction by 35%',
          'Reduce support costs by 50%',
          'Provide 24/7 multilingual support'
        ],
        useCases: [
          'E-commerce platforms',
          'SaaS companies',
          'Financial services',
          'Healthcare providers',
          'Educational institutions'
        ],
        ctaLabel: 'Schedule Demo',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['GDPR', 'CCPA', 'HIPAA', 'SOC 2'],
        integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Teams', 'WhatsApp'],
        icon: '🤖',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'Quantum AI Solutions',
    slug: 'quantum-ai-solutions',
    description: 'Next-generation solutions combining quantum computing with artificial intelligence',
    items: [
      {
        id: 'quantum-ai-optimization-platform',
        title: 'Quantum AI Optimization Platform',
        description: 'Revolutionary platform that combines quantum computing with AI to solve complex optimization problems in logistics, finance, and manufacturing.',
        category: 'Quantum AI',
        price: '$2,999',
        billing: 'month',
        marketPrice: '$5,000-15,000/month',
        roi: '1000-2000% within 12 months',
        implementationTime: '8-12 weeks',
        support: 'Dedicated quantum AI specialists + 24/7 support',
        features: [
          'Hybrid quantum-classical algorithms',
          'Real-time optimization for complex systems',
          'AI-powered quantum error correction',
          'Multi-qubit quantum processing',
          'Industry-specific optimization models',
          'Quantum-safe encryption',
          'Real-time performance monitoring',
          'Custom algorithm development'
        ],
        benefits: [
          'Solve optimization problems 1000x faster',
          'Reduce operational costs by 30-50%',
          'Improve efficiency by 40-60%',
          'Enable previously impossible calculations',
          'Future-proof quantum-ready infrastructure'
        ],
        useCases: [
          'Supply chain optimization',
          'Financial portfolio optimization',
          'Manufacturing process optimization',
          'Logistics and routing',
          'Drug discovery and molecular modeling'
        ],
        ctaLabel: 'Request Quantum Assessment',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['Quantum-safe standards', 'ISO 27001', 'NIST guidelines'],
        integrations: ['AWS Braket', 'IBM Quantum', 'Azure Quantum', 'Google Quantum AI'],
        icon: '⚛️',
        color: 'from-indigo-500 to-purple-500'
      }
    ]
  },
  {
    name: 'Advanced Cybersecurity',
    slug: 'advanced-cybersecurity',
    description: 'Military-grade cybersecurity solutions for the modern digital landscape',
    items: [
      {
        id: 'zero-trust-security-platform',
        title: 'Zero Trust Security Platform',
        description: 'Comprehensive zero-trust security platform that provides continuous verification and adaptive access control for modern enterprises.',
        category: 'Cybersecurity',
        price: '$1,499',
        billing: 'month',
        marketPrice: '$2,500-8,000/month',
        roi: '300-500% within 6 months',
        implementationTime: '6-10 weeks',
        support: '24/7 security operations center + dedicated security engineers',
        features: [
          'Continuous identity verification',
          'Adaptive access control',
          'Real-time threat detection',
          'Behavioral analytics',
          'Multi-factor authentication',
          'Privileged access management',
          'Security posture scoring',
          'Compliance reporting and automation'
        ],
        benefits: [
          'Reduce security incidents by 80%',
          'Improve compliance scores by 95%',
          'Reduce security costs by 40%',
          'Enable secure remote work',
          'Meet regulatory requirements automatically'
        ],
        useCases: [
          'Financial institutions',
          'Healthcare organizations',
          'Government agencies',
          'Manufacturing companies',
          'Educational institutions'
        ],
        ctaLabel: 'Security Assessment',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['SOC 2', 'ISO 27001', 'NIST', 'GDPR', 'HIPAA', 'PCI DSS'],
        integrations: ['Active Directory', 'Okta', 'Azure AD', 'AWS IAM', 'Google Workspace'],
        icon: '🔒',
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'Sustainable Technology',
    slug: 'sustainable-technology',
    description: 'Green technology solutions for a sustainable future',
    items: [
      {
        id: 'green-it-optimization-platform',
        title: 'Green IT Optimization Platform',
        description: 'AI-powered platform that optimizes IT infrastructure for energy efficiency, reducing carbon footprint while improving performance.',
        category: 'Sustainable Tech',
        price: '$799',
        billing: 'month',
        marketPrice: '$1,200-3,000/month',
        roi: '200-350% within 8 months',
        implementationTime: '4-6 weeks',
        support: 'Sustainability consultants + technical support',
        features: [
          'Energy consumption monitoring and optimization',
          'Carbon footprint tracking and reporting',
          'Green cloud migration strategies',
          'Sustainable procurement recommendations',
          'Compliance with environmental standards',
          'Real-time sustainability metrics',
          'Automated energy-saving recommendations',
          'Green certification support'
        ],
        benefits: [
          'Reduce energy costs by 30-50%',
          'Decrease carbon footprint by 40-60%',
          'Improve sustainability ratings',
          'Meet ESG compliance requirements',
          'Enhance brand reputation'
        ],
        useCases: [
          'Data centers',
          'Enterprise IT departments',
          'Cloud service providers',
          'Manufacturing companies',
          'Educational institutions'
        ],
        ctaLabel: 'Sustainability Assessment',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['ISO 14001', 'LEED', 'BREEAM', 'ESG standards'],
        integrations: ['AWS', 'Azure', 'GCP', 'VMware', 'Docker', 'Kubernetes'],
        icon: '🌱',
        color: 'from-green-500 to-teal-500'
      }
    ]
  },
  {
    name: 'Edge Computing Solutions',
    slug: 'edge-computing-solutions',
    description: 'Next-generation edge computing for real-time processing and low-latency applications',
    items: [
      {
        id: 'edge-ai-inference-engine',
        title: 'Edge AI Inference Engine',
        description: 'High-performance AI inference engine optimized for edge devices, enabling real-time AI processing without cloud dependency.',
        category: 'Edge Computing',
        price: '$599',
        billing: 'month',
        marketPrice: '$800-2,000/month',
        roi: '250-400% within 6 months',
        implementationTime: '3-5 weeks',
        support: 'Edge computing specialists + 24/7 monitoring',
        features: [
          'Ultra-low latency AI processing',
          'Offline AI capabilities',
          'Model compression and optimization',
          'Multi-device synchronization',
          'Real-time data processing',
          'Edge-to-cloud hybrid processing',
          'Custom model deployment',
          'Performance analytics and monitoring'
        ],
        benefits: [
          'Reduce latency by 90%',
          'Lower bandwidth costs by 70%',
          'Improve reliability with offline processing',
          'Enable real-time AI applications',
          'Reduce cloud dependency'
        ],
        useCases: [
          'IoT devices and sensors',
          'Autonomous vehicles',
          'Smart cities',
          'Industrial automation',
          'Healthcare monitoring'
        ],
        ctaLabel: 'Edge Assessment',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['ISO 27001', 'IEC 62443', 'NIST IoT guidelines'],
        integrations: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU', 'NVIDIA Jetson'],
        icon: '🌐',
        color: 'from-cyan-500 to-blue-500'
      }
    ]
  },
  {
    name: 'FinTech & DeFi Solutions',
    slug: 'fintech-defi-solutions',
    description: 'Innovative financial technology solutions for the digital economy',
    items: [
      {
        id: 'ai-financial-risk-management',
        title: 'AI Financial Risk Management',
        description: 'Intelligent financial risk assessment platform that uses AI to predict market risks, optimize portfolios, and ensure regulatory compliance.',
        category: 'FinTech & DeFi',
        price: '$1,999',
        billing: 'month',
        marketPrice: '$3,000-10,000/month',
        roi: '500-800% within 12 months',
        implementationTime: '8-12 weeks',
        support: 'Financial risk specialists + compliance experts',
        features: [
          'AI-powered risk prediction models',
          'Real-time market risk monitoring',
          'Portfolio optimization algorithms',
          'Regulatory compliance automation',
          'Stress testing and scenario analysis',
          'Fraud detection and prevention',
          'Multi-asset class support',
          'Custom risk models for your business'
        ],
        benefits: [
          'Reduce financial losses by 40-60%',
          'Improve compliance scores by 95%',
          'Optimize portfolio returns by 20-35%',
          'Automate regulatory reporting',
          'Enable real-time risk management'
        ],
        useCases: [
          'Banks and financial institutions',
          'Investment firms',
          'Insurance companies',
          'Hedge funds',
          'Corporate treasuries'
        ],
        ctaLabel: 'Risk Assessment',
        href: 'https://ziontechgroup.com/contact',
        featured: true,
        compliance: ['Basel III', 'Solvency II', 'Dodd-Frank', 'SOX', 'GDPR'],
        integrations: ['Bloomberg', 'Reuters', 'FactSet', 'SAP', 'Oracle', 'Salesforce'],
        icon: '💰',
        color: 'from-yellow-500 to-orange-500'
      }
    ]
  }
];

export default enhancedServices2025;