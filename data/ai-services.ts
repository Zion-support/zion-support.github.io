export interface AIService {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  features: string[];
  pricing: {
    free: {
      price: number;
      features: string[];
      limitations: string[];
    };
    pro: {
      price: number;
      features: string[];
      popular?: boolean;
    };
    enterprise: {
      price: number;
      features: string[];
      custom?: boolean;
    };
  };
  category: string;
  icon: string;
  demoUrl: string;
  documentationUrl: string;
  apiUrl: string;
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  lastUpdated: string;
  integrations: string[];
  useCases: string[];
  screenshots: string[];
  videoUrl?: string;
  tags: string[];
  marketSize: string;
  competitors: string[];
  uniqueValue: string;
  technicalRequirements: string[];
  supportChannels: string[];
  sla: string;
  uptime: string;
  security: string[];
  compliance: string[];
  languages: string[];
  regions: string[];
  aiModels: string[];
  accuracy: string;
  responseTime: string;
  trainingData: string;
  ethicalAI: string[];
}

export const aiServices: AIService[] = [
  {
    id: 'ai-content-generation-pro',
    name: 'AI Content Generation Pro',
    description: 'Advanced AI-powered content creation platform that generates high-quality articles, blog posts, social media content, and marketing copy using state-of-the-art language models including GPT-4, Claude, and Gemini.',
    shortDescription: 'AI-powered content creation for blogs, social media, and marketing',
    features: [
      'Multi-language content generation (50+ languages)',
      'SEO-optimized content with keyword research',
      'Brand voice customization and tone matching',
      'Plagiarism detection and originality scoring',
      'Content templates for 20+ industries',
      'Bulk content generation and scheduling',
      'Real-time collaboration and editing',
      'Analytics and performance tracking',
      'API integration for custom workflows',
      'Advanced AI models (GPT-4, Claude, Gemini)',
      'Image generation and optimization',
      'Video script creation',
      'Podcast transcript generation',
      'Email campaign content',
      'Product description automation'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['5 articles/month', 'Basic templates', 'Standard quality'],
        limitations: ['Limited to 500 words per article', 'No API access', 'Basic support']
      },
      pro: {
        price: 49,
        features: ['100 articles/month', 'All templates', 'Premium quality', 'API access', 'Priority support'],
        popular: true
      },
      enterprise: {
        price: 299,
        features: ['Unlimited articles', 'Custom models', 'White-label solution', 'Dedicated support', 'Custom integrations'],
        custom: true
      }
    },
    category: 'Content Creation',
    icon: '📝',
    demoUrl: 'https://ziontechgroup.com/ai-content-generation-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content-generation',
    apiUrl: 'https://api.ziontechgroup.com/v1/content-generation',
    status: 'active',
    launchDate: '2024-01-15',
    lastUpdated: '2024-10-08',
    integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Zapier', 'Slack', 'Notion', 'Google Docs'],
    useCases: ['Blog writing', 'Social media content', 'Email marketing', 'Product descriptions', 'SEO content', 'Technical documentation'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-content-generation-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-content-generation-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-content-generation-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-content-generation-demo.mp4',
    tags: ['AI', 'Content', 'Marketing', 'SEO', 'Writing', 'GPT-4', 'Claude', 'Gemini'],
    marketSize: '$4.2B',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic', 'Rytr', 'ContentBot'],
    uniqueValue: 'Only platform with real-time brand voice learning and multi-model AI switching',
    technicalRequirements: ['Modern web browser', 'Internet connection', 'API key for integrations'],
    supportChannels: ['Email', 'Live chat', 'Video calls', 'Documentation'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese', 'Japanese', 'Korean'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    aiModels: ['GPT-4', 'Claude-3', 'Gemini Pro', 'PaLM-2', 'LLaMA-2'],
    accuracy: '95%',
    responseTime: '< 3 seconds',
    trainingData: '10TB+ of high-quality content',
    ethicalAI: ['Bias detection', 'Content filtering', 'Transparency reporting', 'Human oversight']
  },
  {
    id: 'ai-chatbot-enterprise',
    name: 'AI Chatbot Enterprise',
    description: 'Advanced AI-powered chatbot solution for enterprise customers that provides 24/7 customer support, handles complex queries, and integrates seamlessly with existing business systems.',
    shortDescription: 'Enterprise-grade AI chatbot for customer support and engagement',
    features: [
      'Natural language processing and understanding',
      'Multi-language support (100+ languages)',
      'Integration with CRM and ticketing systems',
      'Escalation to human agents when needed',
      'Knowledge base integration',
      'Sentiment analysis and mood detection',
      'Custom conversation flows',
      'Analytics and performance tracking',
      'Voice and text support',
      'API integration for custom workflows',
      'Multi-channel deployment',
      'Advanced security features',
      'Custom AI model training',
      'Real-time monitoring',
      'A/B testing capabilities'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['Up to 100 conversations/month', 'Basic AI responses', 'Email support'],
        limitations: ['Limited AI features', 'Basic customization', 'Standard support']
      },
      pro: {
        price: 99,
        features: ['Up to 10,000 conversations/month', 'Full AI features', 'Advanced customization', 'Priority support'],
        popular: true
      },
      enterprise: {
        price: 499,
        features: ['Unlimited conversations', 'Custom AI models', 'White-label solution', 'Dedicated support', 'SLA guarantee'],
        custom: true
      }
    },
    category: 'Customer Support',
    icon: '🤖',
    demoUrl: 'https://ziontechgroup.com/ai-chatbot-enterprise/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-chatbot-enterprise',
    apiUrl: 'https://api.ziontechgroup.com/v1/chatbot-enterprise',
    status: 'active',
    launchDate: '2024-01-30',
    lastUpdated: '2024-10-08',
    integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'HubSpot', 'Salesforce', 'Slack', 'Microsoft Teams', 'WhatsApp'],
    useCases: ['Customer support', 'FAQ automation', 'Lead qualification', 'Order assistance', 'Technical support'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-chatbot-enterprise-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-chatbot-enterprise-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-chatbot-enterprise-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-chatbot-enterprise-demo.mp4',
    tags: ['AI', 'Chatbot', 'Customer Support', 'Automation', 'NLP', 'Enterprise'],
    marketSize: '$4.1B',
    competitors: ['Intercom', 'Zendesk', 'Freshdesk', 'Drift', 'Ada'],
    uniqueValue: 'Only chatbot with real-time sentiment analysis and multi-modal conversation support',
    technicalRequirements: ['Modern web browser', 'Internet connection', 'Website integration'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Dedicated account manager'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'HIPAA'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese', 'Arabic'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America', 'Middle East'],
    aiModels: ['GPT-4', 'Claude-3', 'PaLM-2', 'Custom trained models'],
    accuracy: '92%',
    responseTime: '< 2 seconds',
    trainingData: '5TB+ of customer service conversations',
    ethicalAI: ['Bias detection', 'Content filtering', 'Transparency reporting', 'Human oversight', 'Privacy protection']
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Comprehensive AI-powered analytics platform that provides real-time insights, predictive analytics, and automated reporting for businesses of all sizes.',
    shortDescription: 'AI-powered analytics with predictive insights and automated reporting',
    features: [
      'Real-time data visualization',
      'Predictive analytics and forecasting',
      'Automated report generation',
      'Custom dashboard creation',
      'Data integration from 100+ sources',
      'Machine learning insights',
      'Anomaly detection',
      'Trend analysis',
      'Performance monitoring',
      'Alert system',
      'Mobile app for iOS and Android',
      'API integration',
      'White-label solution',
      'Advanced security',
      'Multi-tenant architecture'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['Up to 5 data sources', 'Basic analytics', 'Standard reports'],
        limitations: ['Limited AI features', 'Basic visualization', 'Standard support']
      },
      pro: {
        price: 79,
        features: ['Up to 50 data sources', 'Full AI features', 'Advanced analytics', 'Priority support'],
        popular: true
      },
      enterprise: {
        price: 299,
        features: ['Unlimited data sources', 'Custom AI models', 'White-label solution', 'Dedicated support'],
        custom: true
      }
    },
    category: 'Analytics & BI',
    icon: '📊',
    demoUrl: 'https://ziontechgroup.com/ai-analytics-dashboard/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-analytics-dashboard',
    apiUrl: 'https://api.ziontechgroup.com/v1/analytics-dashboard',
    status: 'active',
    launchDate: '2024-02-01',
    lastUpdated: '2024-10-08',
    integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure'],
    useCases: ['Business intelligence', 'Performance monitoring', 'Predictive analytics', 'Data visualization'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-analytics-dashboard-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-analytics-dashboard-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-analytics-dashboard-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-analytics-dashboard-demo.mp4',
    tags: ['AI', 'Analytics', 'BI', 'Data Visualization', 'Machine Learning', 'Predictive Analytics'],
    marketSize: '$6.8B',
    competitors: ['Tableau', 'Power BI', 'Looker', 'Qlik', 'Domo'],
    uniqueValue: 'Only analytics platform with real-time AI insights and automated report generation',
    technicalRequirements: ['Modern web browser', 'Data sources', 'Internet connection'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Documentation'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    aiModels: ['Custom ML models', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    accuracy: '94%',
    responseTime: '< 1 second',
    trainingData: '50TB+ of business data',
    ethicalAI: ['Bias detection', 'Data privacy', 'Transparency reporting', 'Human oversight']
  },
  {
    id: 'ai-3d-generation',
    name: 'AI 3D Generation',
    description: 'Advanced AI-powered 3D content creation platform that generates high-quality 3D models, animations, and virtual environments using cutting-edge AI technology.',
    shortDescription: 'AI-powered 3D model generation and animation creation',
    features: [
      'AI-generated 3D models from text descriptions',
      '3D animation creation and editing',
      'Virtual environment generation',
      'Texture and material generation',
      'Rigging and animation automation',
      'VR/AR content creation',
      'Game asset generation',
      'Architectural visualization',
      'Product prototyping',
      'Character creation',
      'Scene composition',
      'Lighting optimization',
      'Rendering acceleration',
      'Export to multiple formats',
      'Real-time preview'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['Up to 5 models/month', 'Basic quality', 'Standard formats'],
        limitations: ['Limited AI features', 'Basic customization', 'Standard support']
      },
      pro: {
        price: 99,
        features: ['Up to 100 models/month', 'High quality', 'All formats', 'Priority support'],
        popular: true
      },
      enterprise: {
        price: 499,
        features: ['Unlimited models', 'Custom AI models', 'White-label solution', 'Dedicated support'],
        custom: true
      }
    },
    category: '3D & Graphics',
    icon: '🎨',
    demoUrl: 'https://ziontechgroup.com/ai-3d-generation/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-3d-generation',
    apiUrl: 'https://api.ziontechgroup.com/v1/3d-generation',
    status: 'active',
    launchDate: '2024-02-15',
    lastUpdated: '2024-10-08',
    integrations: ['Blender', 'Maya', '3ds Max', 'Unity', 'Unreal Engine', 'Sketchfab', 'TurboSquid'],
    useCases: ['Game development', 'Architectural visualization', 'Product design', 'VR/AR content', 'Animation'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-3d-generation-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-3d-generation-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-3d-generation-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-3d-generation-demo.mp4',
    tags: ['AI', '3D', 'Graphics', 'Animation', 'VR', 'AR', 'Game Development'],
    marketSize: '$2.1B',
    competitors: ['RunwayML', 'Midjourney', 'DALL-E', 'Stable Diffusion'],
    uniqueValue: 'Only platform with real-time 3D generation and VR/AR optimization',
    technicalRequirements: ['Modern web browser', '3D software', 'Internet connection'],
    supportChannels: ['Email', 'Live chat', 'Video calls', 'Documentation'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    aiModels: ['Custom 3D models', 'NeRF', 'DreamFusion', 'Point-E'],
    accuracy: '89%',
    responseTime: '< 30 seconds',
    trainingData: '100TB+ of 3D models and textures',
    ethicalAI: ['Bias detection', 'Content filtering', 'Transparency reporting', 'Human oversight']
  },
  {
    id: 'ai-drug-discovery-pro',
    name: 'AI Drug Discovery Pro',
    description: 'Revolutionary AI-powered drug discovery platform that accelerates the development of new pharmaceuticals using advanced machine learning and molecular simulation.',
    shortDescription: 'AI-powered drug discovery and molecular simulation platform',
    features: [
      'Molecular structure prediction',
      'Drug-target interaction analysis',
      'ADMET property prediction',
      'Virtual screening and optimization',
      'Chemical synthesis planning',
      'Patent analysis and IP protection',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Toxicity prediction',
      'Drug repurposing analysis',
      'Collaborative research tools',
      'Regulatory compliance support',
      'Real-time collaboration',
      'Advanced visualization',
      'API integration'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['Basic molecular analysis', 'Limited predictions', 'Standard support'],
        limitations: ['Limited AI features', 'Basic analysis', 'Standard support']
      },
      pro: {
        price: 999,
        features: ['Full AI features', 'Advanced analysis', 'Priority support', 'API access'],
        popular: true
      },
      enterprise: {
        price: 4999,
        features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'SLA guarantee'],
        custom: true
      }
    },
    category: 'Healthcare & Life Sciences',
    icon: '💊',
    demoUrl: 'https://ziontechgroup.com/ai-drug-discovery-pro/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-drug-discovery-pro',
    apiUrl: 'https://api.ziontechgroup.com/v1/drug-discovery',
    status: 'active',
    launchDate: '2024-03-01',
    lastUpdated: '2024-10-08',
    integrations: ['ChEMBL', 'PubChem', 'PDB', 'UniProt', 'Clinical trial databases', 'Regulatory databases'],
    useCases: ['Drug discovery', 'Molecular analysis', 'Clinical trials', 'Patent research', 'Regulatory compliance'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-drug-discovery-pro-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-drug-discovery-pro-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-drug-discovery-pro-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-drug-discovery-pro-demo.mp4',
    tags: ['AI', 'Drug Discovery', 'Healthcare', 'Molecular Biology', 'Pharmaceuticals', 'Machine Learning'],
    marketSize: '$1.8B',
    competitors: ['Atomwise', 'Benevolent AI', 'Exscientia', 'Recursion Pharmaceuticals'],
    uniqueValue: 'Only platform with real-time molecular simulation and clinical trial optimization',
    technicalRequirements: ['Modern web browser', 'Scientific software', 'Internet connection'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Scientific support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'HIPAA compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['HIPAA', 'GDPR', 'FDA', 'EMA', 'SOC 2', 'ISO 27001'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    aiModels: ['Custom ML models', 'AlphaFold', 'ESMFold', 'ChimeraX'],
    accuracy: '91%',
    responseTime: '< 5 minutes',
    trainingData: '500TB+ of molecular and clinical data',
    ethicalAI: ['Bias detection', 'Data privacy', 'Transparency reporting', 'Human oversight', 'Ethical guidelines']
  },
  {
    id: 'ai-cybersecurity-suite',
    name: 'AI Cybersecurity Suite',
    description: 'Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, automated response, and advanced security analytics for enterprise environments.',
    shortDescription: 'AI-powered cybersecurity with real-time threat detection and response',
    features: [
      'Real-time threat detection and analysis',
      'Automated incident response',
      'Behavioral analytics and anomaly detection',
      'Vulnerability assessment and management',
      'Security orchestration and automation',
      'Threat intelligence integration',
      'Compliance monitoring and reporting',
      'Endpoint detection and response',
      'Network security monitoring',
      'Cloud security management',
      'Mobile device security',
      'Identity and access management',
      'Security awareness training',
      'Penetration testing automation',
      'Forensic analysis tools'
    ],
    pricing: {
      free: {
        price: 0,
        features: ['Basic threat detection', 'Limited analysis', 'Standard support'],
        limitations: ['Limited AI features', 'Basic reporting', 'Standard support']
      },
      pro: {
        price: 199,
        features: ['Full AI features', 'Advanced analysis', 'Priority support', 'API access'],
        popular: true
      },
      enterprise: {
        price: 999,
        features: ['Custom AI models', 'White-label solution', 'Dedicated support', 'SLA guarantee'],
        custom: true
      }
    },
    category: 'Cybersecurity',
    icon: '🔒',
    demoUrl: 'https://ziontechgroup.com/ai-cybersecurity-suite/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-cybersecurity-suite',
    apiUrl: 'https://api.ziontechgroup.com/v1/cybersecurity-suite',
    status: 'active',
    launchDate: '2024-02-20',
    lastUpdated: '2024-10-08',
    integrations: ['SIEM systems', 'EDR solutions', 'Firewalls', 'Identity providers', 'Cloud platforms', 'Security tools'],
    useCases: ['Threat detection', 'Incident response', 'Compliance monitoring', 'Security analytics', 'Risk management'],
    screenshots: [
      'https://ziontechgroup.com/screenshots/ai-cybersecurity-suite-1.jpg',
      'https://ziontechgroup.com/screenshots/ai-cybersecurity-suite-2.jpg',
      'https://ziontechgroup.com/screenshots/ai-cybersecurity-suite-3.jpg'
    ],
    videoUrl: 'https://ziontechgroup.com/videos/ai-cybersecurity-suite-demo.mp4',
    tags: ['AI', 'Cybersecurity', 'Threat Detection', 'Security', 'Compliance', 'Machine Learning'],
    marketSize: '$8.2B',
    competitors: ['CrowdStrike', 'Palo Alto Networks', 'Fortinet', 'Check Point', 'Symantec'],
    uniqueValue: 'Only platform with real-time AI threat detection and automated response',
    technicalRequirements: ['Modern web browser', 'Security infrastructure', 'Internet connection'],
    supportChannels: ['Email', 'Live chat', 'Phone support', 'Video calls', 'Security support'],
    sla: '99.9%',
    uptime: '99.95%',
    security: ['SOC 2 Type II', 'GDPR compliant', 'End-to-end encryption', 'Regular security audits'],
    compliance: ['GDPR', 'CCPA', 'SOC 2', 'ISO 27001', 'NIST', 'PCI DSS'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
    regions: ['North America', 'Europe', 'Asia-Pacific', 'Latin America'],
    aiModels: ['Custom ML models', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    accuracy: '96%',
    responseTime: '< 1 second',
    trainingData: '200TB+ of security data',
    ethicalAI: ['Bias detection', 'Data privacy', 'Transparency reporting', 'Human oversight', 'Ethical guidelines']
  }
];

export const aiServiceCategories = [
  'Content Creation',
  'Customer Support',
  'Analytics & BI',
  '3D & Graphics',
  'Healthcare & Life Sciences',
  'Cybersecurity'
];

export const getAIServiceById = (id: string): AIService | undefined => {
  return aiServices.find(service => service.id === id);
};

export const getAIServicesByCategory = (category: string): AIService[] => {
  return aiServices.filter(service => service.category === category);
};

export const getPopularAIServices = (): AIService[] => {
  return aiServices.filter(service => service.pricing.pro.popular);
};