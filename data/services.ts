// Comprehensive Services Data for Zion Tech Group
// Real micro SAAS, IT, and AI services with market pricing and features

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'ai' | 'it' | 'saas' | 'emerging';
  subcategory: string;
  price: string;
  marketPrice: string;
  features: string[];
  benefits: string[];
  icon: string;
  popular: boolean;
  url: string;
  pricing: {
    basic: { price: string; features: string[] };
    pro: { price: string; features: string[] };
    enterprise: { price: string; features: string[] };
  };
  integrations: string[];
  support: string[];
  compliance: string[];
  sla: string;
  setupTime: string;
  freeTrial: boolean;
  demoAvailable: boolean;
}

export const aiServices: Service[] = [
  {
    id: 'ai-chatbot-enterprise',
    name: 'AI Enterprise Chatbot Platform',
    description: 'Advanced conversational AI with multi-language support, sentiment analysis, and seamless CRM integration for enterprise customer service.',
    category: 'ai',
    subcategory: 'Customer Service',
    price: '$2,499/month',
    marketPrice: '$5,000-15,000/month',
    features: [
      'GPT-4 powered conversations',
      'Multi-language support (50+ languages)',
      'Sentiment analysis & emotion detection',
      'CRM integration (Salesforce, HubSpot, Pipedrive)',
      'Voice & text channels',
      'Custom knowledge base training',
      'Analytics & performance metrics',
      'A/B testing capabilities',
      'White-label solutions',
      'API access & webhooks'
    ],
    benefits: [
      'Reduce support costs by 70%',
      '24/7 multilingual customer support',
      'Improve customer satisfaction by 40%',
      'Handle 10,000+ conversations simultaneously',
      'Seamless human agent handoff',
      'Real-time conversation analytics'
    ],
    icon: '🤖',
    popular: true,
    url: '/ai-chatbot-enterprise',
    pricing: {
      basic: { price: '$499/month', features: ['Up to 1,000 conversations', 'Basic integrations', 'Email support'] },
      pro: { price: '$1,499/month', features: ['Up to 10,000 conversations', 'Advanced integrations', 'Priority support', 'Analytics dashboard'] },
      enterprise: { price: '$2,499/month', features: ['Unlimited conversations', 'Custom integrations', 'Dedicated support', 'White-label options', 'SLA guarantee'] }
    },
    integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
    support: ['24/7 Technical Support', 'Dedicated Account Manager', 'Training & Onboarding', 'Custom Development'],
    compliance: ['SOC 2 Type II', 'GDPR', 'HIPAA', 'CCPA', 'ISO 27001'],
    sla: '99.9% uptime guarantee',
    setupTime: '2-4 weeks',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'ai-content-generation-pro',
    name: 'AI Content Generation Pro',
    description: 'Advanced AI-powered content creation platform with brand voice training, SEO optimization, and multi-platform publishing capabilities.',
    category: 'ai',
    subcategory: 'Content Creation',
    price: '$799/month',
    marketPrice: '$1,500-4,000/month',
    features: [
      'GPT-4 & Claude integration',
      'Brand voice training & consistency',
      'SEO optimization & keyword research',
      'Multi-platform content adaptation',
      'Image generation (DALL-E, Midjourney)',
      'Video script generation',
      'Content calendar automation',
      'Plagiarism detection',
      'Tone & style customization',
      'Bulk content generation'
    ],
    benefits: [
      'Save 80% content creation time',
      'Increase content output by 500%',
      'Improve SEO rankings by 60%',
      'Maintain consistent brand voice',
      'Generate 100+ pieces daily',
      'Multi-language content support'
    ],
    icon: '✍️',
    popular: true,
    url: '/ai-content-generation-pro',
    pricing: {
      basic: { price: '$199/month', features: ['10,000 words/month', 'Basic templates', 'Email support'] },
      pro: { price: '$499/month', features: ['50,000 words/month', 'Advanced templates', 'Priority support', 'SEO tools'] },
      enterprise: { price: '$799/month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'API access', 'White-label'] }
    },
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion'],
    support: ['Email Support', 'Live Chat', 'Video Training', 'Content Strategy Consultation'],
    compliance: ['GDPR', 'CCPA', 'SOC 2'],
    sla: '99.5% uptime guarantee',
    setupTime: '1-2 weeks',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'ai-data-analytics-advanced',
    name: 'AI Advanced Data Analytics',
    description: 'Enterprise-grade AI analytics platform with predictive modeling, real-time insights, and automated business intelligence reporting.',
    category: 'ai',
    subcategory: 'Analytics',
    price: '$3,999/month',
    marketPrice: '$8,000-25,000/month',
    features: [
      'Machine learning predictive models',
      'Real-time data processing',
      'Custom dashboard builder',
      'Automated report generation',
      'Anomaly detection & alerts',
      'Data visualization (100+ chart types)',
      'Multi-source data integration',
      'Natural language queries',
      'Advanced statistical analysis',
      'Custom ML model training'
    ],
    benefits: [
      'Increase data-driven decisions by 90%',
      'Reduce analysis time by 85%',
      'Predict trends with 95% accuracy',
      'Automate 100+ reports monthly',
      'Real-time business insights',
      'Custom ML model deployment'
    ],
    icon: '📊',
    popular: true,
    url: '/ai-data-analytics-advanced',
    pricing: {
      basic: { price: '$999/month', features: ['Up to 1M data points', 'Basic dashboards', 'Email support'] },
      pro: { price: '$2,499/month', features: ['Up to 10M data points', 'Advanced dashboards', 'Priority support', 'Custom reports'] },
      enterprise: { price: '$3,999/month', features: ['Unlimited data points', 'Custom dashboards', 'Dedicated support', 'ML model training', 'API access'] }
    },
    integrations: ['Salesforce', 'Google Analytics', 'HubSpot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery'],
    support: ['24/7 Support', 'Data Scientist Consultation', 'Custom Model Development', 'Training & Onboarding'],
    compliance: ['SOC 2 Type II', 'GDPR', 'HIPAA', 'ISO 27001', 'FedRAMP'],
    sla: '99.9% uptime guarantee',
    setupTime: '3-6 weeks',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'ai-computer-vision-pro',
    name: 'AI Computer Vision Pro',
    description: 'Advanced computer vision platform with object detection, facial recognition, quality control automation, and real-time video analysis.',
    category: 'ai',
    subcategory: 'Computer Vision',
    price: '$4,999/month',
    marketPrice: '$10,000-30,000/month',
    features: [
      'Real-time object detection & tracking',
      'Facial recognition & verification',
      'Quality control automation',
      'Video content analysis',
      'Custom model training',
      'Edge computing deployment',
      'Multi-camera support',
      'API & SDK access',
      'Cloud & on-premise deployment',
      'Advanced analytics dashboard'
    ],
    benefits: [
      'Automate quality control 100%',
      'Reduce inspection time by 90%',
      'Improve accuracy by 95%',
      'Real-time processing capabilities',
      'Custom model development',
      'Edge deployment options'
    ],
    icon: '👁️',
    popular: false,
    url: '/ai-computer-vision-pro',
    pricing: {
      basic: { price: '$1,999/month', features: ['Up to 1M images/month', 'Basic models', 'Email support'] },
      pro: { price: '$3,499/month', features: ['Up to 10M images/month', 'Advanced models', 'Priority support', 'Custom training'] },
      enterprise: { price: '$4,999/month', features: ['Unlimited images', 'Custom models', 'Dedicated support', 'Edge deployment', 'SLA guarantee'] }
    },
    integrations: ['AWS', 'Azure', 'GCP', 'NVIDIA Jetson', 'Intel OpenVINO', 'TensorRT', 'ONNX'],
    support: ['24/7 Support', 'Computer Vision Expert', 'Custom Model Development', 'Hardware Integration'],
    compliance: ['SOC 2 Type II', 'GDPR', 'ISO 27001', 'FCC'],
    sla: '99.9% uptime guarantee',
    setupTime: '4-8 weeks',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'ai-workflow-automation-enterprise',
    name: 'AI Workflow Automation Enterprise',
    description: 'Intelligent process automation platform that learns, adapts, and optimizes business workflows with advanced AI decision-making capabilities.',
    category: 'ai',
    subcategory: 'Automation',
    price: '$2,999/month',
    marketPrice: '$6,000-20,000/month',
    features: [
      'Process mining & discovery',
      'Intelligent workflow optimization',
      'RPA + AI integration',
      'Exception handling & learning',
      '500+ pre-built connectors',
      'Custom workflow builder',
      'Performance monitoring',
      'Compliance automation',
      'Multi-tenant architecture',
      'Advanced analytics & reporting'
    ],
    benefits: [
      'Automate 90% of repetitive tasks',
      'Reduce process time by 75%',
      'Improve accuracy by 95%',
      'Scale automation across departments',
      'Self-learning capabilities',
      'ROI within 3 months'
    ],
    icon: '⚡',
    popular: true,
    url: '/ai-workflow-automation-enterprise',
    pricing: {
      basic: { price: '$799/month', features: ['Up to 10 workflows', 'Basic connectors', 'Email support'] },
      pro: { price: '$1,999/month', features: ['Up to 50 workflows', 'Advanced connectors', 'Priority support', 'Analytics'] },
      enterprise: { price: '$2,999/month', features: ['Unlimited workflows', 'Custom connectors', 'Dedicated support', 'AI training', 'SLA guarantee'] }
    },
    integrations: ['Salesforce', 'SAP', 'Oracle', 'Microsoft 365', 'Google Workspace', 'Slack', 'ServiceNow', 'Workday'],
    support: ['24/7 Support', 'Process Automation Expert', 'Custom Development', 'Training & Onboarding'],
    compliance: ['SOC 2 Type II', 'GDPR', 'SOX', 'ISO 27001'],
    sla: '99.9% uptime guarantee',
    setupTime: '2-4 weeks',
    freeTrial: true,
    demoAvailable: true
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure-enterprise',
    name: 'Enterprise Cloud Infrastructure',
    description: 'Complete cloud infrastructure solutions with AWS, Azure, and GCP expertise, including migration, optimization, and 24/7 management.',
    category: 'it',
    subcategory: 'Cloud Computing',
    price: '$15,000/month',
    marketPrice: '$25,000-75,000/month',
    features: [
      'Multi-cloud architecture design',
      'Zero-downtime migration',
      'Auto-scaling & load balancing',
      'Disaster recovery & backup',
      'Security & compliance setup',
      'Cost optimization (40% savings)',
      '24/7 monitoring & management',
      'Performance optimization',
      'DevOps & CI/CD pipelines',
      'Dedicated cloud engineers'
    ],
    benefits: [
      '99.99% uptime guarantee',
      'Reduce cloud costs by 40%',
      'Faster deployment times',
      'Enhanced security posture',
      'Scalable infrastructure',
      'Expert cloud management'
    ],
    icon: '☁️',
    popular: true,
    url: '/cloud-infrastructure-enterprise',
    pricing: {
      basic: { price: '$5,000/month', features: ['Single cloud provider', 'Basic monitoring', 'Email support'] },
      pro: { price: '$10,000/month', features: ['Multi-cloud setup', 'Advanced monitoring', 'Priority support', 'Cost optimization'] },
      enterprise: { price: '$15,000/month', features: ['Hybrid cloud', '24/7 management', 'Dedicated team', 'SLA guarantee', 'Custom solutions'] }
    },
    integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
    support: ['24/7 Support', 'Dedicated Cloud Architect', 'Migration Planning', 'Training & Documentation'],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP', 'HIPAA', 'PCI DSS'],
    sla: '99.99% uptime guarantee',
    setupTime: '4-12 weeks',
    freeTrial: false,
    demoAvailable: true
  },
  {
    id: 'cybersecurity-advanced',
    name: 'Advanced Cybersecurity Suite',
    description: 'Comprehensive cybersecurity solutions with threat hunting, incident response, compliance management, and 24/7 security operations center.',
    category: 'it',
    subcategory: 'Cybersecurity',
    price: '$8,999/month',
    marketPrice: '$15,000-50,000/month',
    features: [
      '24/7 Security Operations Center',
      'Advanced threat hunting',
      'Incident response & forensics',
      'Vulnerability assessment & management',
      'Penetration testing',
      'Compliance automation (SOC 2, ISO 27001)',
      'Security awareness training',
      'Managed detection & response',
      'Zero-trust architecture',
      'Custom security policies'
    ],
    benefits: [
      'Reduce security incidents by 95%',
      '24/7 threat monitoring',
      'Faster incident response',
      'Compliance automation',
      'Proactive threat hunting',
      'Custom security strategies'
    ],
    icon: '🔒',
    popular: true,
    url: '/cybersecurity-advanced',
    pricing: {
      basic: { price: '$2,999/month', features: ['Basic monitoring', 'Email support', 'Monthly reports'] },
      pro: { price: '$5,999/month', features: ['Advanced monitoring', 'Priority support', 'Weekly reports', 'Incident response'] },
      enterprise: { price: '$8,999/month', features: ['24/7 SOC', 'Dedicated team', 'Real-time alerts', 'Custom policies', 'SLA guarantee'] }
    },
    integrations: ['SIEM', 'EDR', 'XDR', 'Firewalls', 'IDS/IPS', 'Email Security', 'Web Security', 'Identity Management'],
    support: ['24/7 SOC', 'Security Expert Consultation', 'Incident Response', 'Compliance Support'],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'NIST', 'CIS Controls', 'GDPR', 'HIPAA'],
    sla: '15-minute response time',
    setupTime: '2-6 weeks',
    freeTrial: false,
    demoAvailable: true
  },
  {
    id: 'devops-enterprise',
    name: 'Enterprise DevOps & SRE',
    description: 'Complete DevOps transformation with Site Reliability Engineering, automated CI/CD pipelines, and infrastructure as code implementation.',
    category: 'it',
    subcategory: 'DevOps',
    price: '$12,000/month',
    marketPrice: '$20,000-60,000/month',
    features: [
      'CI/CD pipeline automation',
      'Infrastructure as Code (Terraform)',
      'Container orchestration (Kubernetes)',
      'Monitoring & observability',
      'Site Reliability Engineering',
      'Automated testing & deployment',
      'Disaster recovery automation',
      'Performance optimization',
      'Security integration',
      'Team training & mentoring'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment failures by 90%',
      'Improve system reliability',
      'Automate infrastructure management',
      'Scale development teams',
      'Reduce operational costs'
    ],
    icon: '⚙️',
    popular: true,
    url: '/devops-enterprise',
    pricing: {
      basic: { price: '$4,000/month', features: ['Basic CI/CD', 'Email support', 'Monthly reviews'] },
      pro: { price: '$8,000/month', features: ['Advanced CI/CD', 'Priority support', 'Weekly reviews', 'Monitoring setup'] },
      enterprise: { price: '$12,000/month', features: ['Full SRE', 'Dedicated team', '24/7 support', 'Custom solutions', 'SLA guarantee'] }
    },
    integrations: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Prometheus'],
    support: ['24/7 Support', 'DevOps Expert', 'SRE Consultation', 'Team Training'],
    compliance: ['SOC 2 Type II', 'ISO 27001', 'PCI DSS'],
    sla: '99.9% uptime guarantee',
    setupTime: '3-8 weeks',
    freeTrial: false,
    demoAvailable: true
  }
];

export const microSaasServices: Service[] = [
  {
    id: 'zion-analytics-pro',
    name: 'Zion Analytics Pro',
    description: 'Advanced business intelligence platform with AI-powered insights, real-time dashboards, and automated reporting for data-driven decision making.',
    category: 'saas',
    subcategory: 'Analytics',
    price: '$199/month',
    marketPrice: '$400-1,200/month',
    features: [
      'Real-time data visualization',
      'AI-powered insights & predictions',
      'Custom dashboard builder',
      '100+ data connectors',
      'Automated report generation',
      'Advanced filtering & segmentation',
      'Collaborative dashboards',
      'Mobile app access',
      'API & webhook integration',
      'White-label options'
    ],
    benefits: [
      'Make data-driven decisions 5x faster',
      'Reduce report creation time by 90%',
      'Identify trends & opportunities',
      'Improve business performance',
      'Real-time monitoring',
      'Custom insights & alerts'
    ],
    icon: '📊',
    popular: true,
    url: '/zion-analytics-pro',
    pricing: {
      basic: { price: '$49/month', features: ['Up to 5 dashboards', 'Basic connectors', 'Email support'] },
      pro: { price: '$199/month', features: ['Unlimited dashboards', 'Advanced connectors', 'Priority support', 'AI insights'] },
      enterprise: { price: '$499/month', features: ['Custom dashboards', 'White-label', 'Dedicated support', 'API access', 'SLA guarantee'] }
    },
    integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    support: ['Email Support', 'Live Chat', 'Video Training', 'Custom Dashboard Design'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    sla: '99.5% uptime guarantee',
    setupTime: '1-3 days',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'zion-crm-intelligence',
    name: 'Zion CRM Intelligence',
    description: 'AI-enhanced CRM platform with intelligent lead scoring, automated follow-ups, and predictive analytics for sales optimization.',
    category: 'saas',
    subcategory: 'CRM',
    price: '$299/month',
    marketPrice: '$600-1,800/month',
    features: [
      'AI-powered lead scoring',
      'Automated follow-up sequences',
      'Predictive sales analytics',
      'Contact & deal management',
      'Email & phone integration',
      'Custom pipeline stages',
      'Team collaboration tools',
      'Mobile app access',
      'API & webhook integration',
      'Advanced reporting & insights'
    ],
    benefits: [
      'Increase sales by 40%',
      'Improve lead conversion by 60%',
      'Automate follow-up processes',
      'Predict deal closure probability',
      'Optimize sales strategies',
      'Reduce manual data entry'
    ],
    icon: '👥',
    popular: true,
    url: '/zion-crm-intelligence',
    pricing: {
      basic: { price: '$99/month', features: ['Up to 1,000 contacts', 'Basic AI features', 'Email support'] },
      pro: { price: '$299/month', features: ['Up to 10,000 contacts', 'Advanced AI', 'Priority support', 'Custom fields'] },
      enterprise: { price: '$599/month', features: ['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'API access', 'White-label'] }
    },
    integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Mailchimp', 'HubSpot', 'Salesforce', 'Pipedrive'],
    support: ['Email Support', 'Live Chat', 'Video Training', 'Sales Process Optimization'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    sla: '99.5% uptime guarantee',
    setupTime: '1-2 days',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'zion-content-studio',
    name: 'Zion Content Studio',
    description: 'Complete AI-powered content creation suite with writing, design, video editing, and social media automation for modern marketing teams.',
    category: 'saas',
    subcategory: 'Content Creation',
    price: '$399/month',
    marketPrice: '$800-2,400/month',
    features: [
      'AI writing assistant (GPT-4)',
      'Image generation & editing',
      'Video creation & editing',
      'Social media automation',
      'Content calendar management',
      'SEO optimization tools',
      'Brand voice training',
      'Multi-language support',
      'Team collaboration',
      'Analytics & performance tracking'
    ],
    benefits: [
      'Create content 10x faster',
      'Maintain consistent brand voice',
      'Automate social media posting',
      'Improve SEO performance',
      'Scale content production',
      'Reduce design costs'
    ],
    icon: '🎨',
    popular: true,
    url: '/zion-content-studio',
    pricing: {
      basic: { price: '$99/month', features: ['Basic AI writing', 'Limited designs', 'Email support'] },
      pro: { price: '$399/month', features: ['Advanced AI', 'Unlimited designs', 'Priority support', 'Video editing'] },
      enterprise: { price: '$799/month', features: ['Custom AI models', 'White-label', 'Dedicated support', 'API access', 'SLA guarantee'] }
    },
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Canva', 'Figma', 'Slack'],
    support: ['Email Support', 'Live Chat', 'Content Strategy Consultation', 'Design Training'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    sla: '99.5% uptime guarantee',
    setupTime: '1-2 days',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'zion-security-shield',
    name: 'Zion Security Shield',
    description: 'Comprehensive cybersecurity monitoring platform with threat detection, vulnerability scanning, and automated incident response for small to medium businesses.',
    category: 'saas',
    subcategory: 'Security',
    price: '$499/month',
    marketPrice: '$1,000-3,000/month',
    features: [
      '24/7 threat monitoring',
      'Vulnerability scanning',
      'Automated incident response',
      'Security awareness training',
      'Compliance reporting',
      'Dark web monitoring',
      'Email security scanning',
      'Network security assessment',
      'Mobile device management',
      'Security dashboard & alerts'
    ],
    benefits: [
      'Protect against 99.9% of threats',
      'Reduce security incidents by 90%',
      'Automate security responses',
      'Maintain compliance easily',
      'Educate employees on security',
      'Monitor dark web exposure'
    ],
    icon: '🛡️',
    popular: true,
    url: '/zion-security-shield',
    pricing: {
      basic: { price: '$199/month', features: ['Basic monitoring', 'Email support', 'Monthly reports'] },
      pro: { price: '$499/month', features: ['Advanced monitoring', 'Priority support', 'Weekly reports', 'Training'] },
      enterprise: { price: '$999/month', features: ['24/7 monitoring', 'Dedicated support', 'Real-time alerts', 'Custom policies', 'SLA guarantee'] }
    },
    integrations: ['Active Directory', 'Office 365', 'Google Workspace', 'Slack', 'Teams', 'SIEM', 'EDR'],
    support: ['Email Support', 'Live Chat', 'Security Consultation', 'Incident Response'],
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'CIS Controls'],
    sla: '99.9% uptime guarantee',
    setupTime: '1-3 days',
    freeTrial: true,
    demoAvailable: true
  },
  {
    id: 'zion-project-master',
    name: 'Zion Project Master',
    description: 'AI-powered project management platform with intelligent task allocation, resource optimization, and predictive project analytics.',
    category: 'saas',
    subcategory: 'Project Management',
    price: '$249/month',
    marketPrice: '$500-1,500/month',
    features: [
      'AI task prioritization',
      'Resource optimization',
      'Predictive project analytics',
      'Team collaboration tools',
      'Time tracking & reporting',
      'Gantt charts & Kanban boards',
      'Budget tracking & forecasting',
      'Risk assessment & mitigation',
      'Mobile app access',
      'Integration with 100+ tools'
    ],
    benefits: [
      'Complete projects 30% faster',
      'Improve resource utilization by 40%',
      'Predict project risks early',
      'Optimize team productivity',
      'Reduce project overruns',
      'Better budget management'
    ],
    icon: '📋',
    popular: true,
    url: '/zion-project-master',
    pricing: {
      basic: { price: '$79/month', features: ['Up to 10 projects', 'Basic AI features', 'Email support'] },
      pro: { price: '$249/month', features: ['Unlimited projects', 'Advanced AI', 'Priority support', 'Custom fields'] },
      enterprise: { price: '$499/month', features: ['Custom AI models', 'White-label', 'Dedicated support', 'API access', 'SLA guarantee'] }
    },
    integrations: ['Slack', 'Teams', 'Jira', 'Asana', 'Trello', 'Monday.com', 'Google Workspace', 'Microsoft 365'],
    support: ['Email Support', 'Live Chat', 'Project Management Training', 'Custom Workflow Design'],
    compliance: ['SOC 2', 'GDPR', 'CCPA'],
    sla: '99.5% uptime guarantee',
    setupTime: '1-2 days',
    freeTrial: true,
    demoAvailable: true
  }
];

export const emergingTechServices: Service[] = [
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing services for complex optimization problems, cryptography, and advanced scientific simulations.',
    category: 'emerging',
    subcategory: 'Quantum Computing',
    price: 'Custom Pricing',
    marketPrice: '$50,000-500,000/month',
    features: [
      'Quantum algorithm development',
      'Optimization problem solving',
      'Quantum cryptography',
      'Quantum machine learning',
      'Quantum simulation services',
      'Hybrid classical-quantum systems',
      'Quantum software development',
      'Quantum hardware access',
      'Research collaboration',
      'Custom quantum solutions'
    ],
    benefits: [
      'Solve impossible classical problems',
      'Exponential speed improvements',
      'Advanced cryptography',
      'Breakthrough research capabilities',
      'Competitive advantage',
      'Future-proof technology'
    ],
    icon: '⚛️',
    popular: false,
    url: '/quantum-computing-solutions',
    pricing: {
      basic: { price: 'Starting at $10,000/month', features: ['Basic quantum access', 'Consultation', 'Email support'] },
      pro: { price: 'Starting at $50,000/month', features: ['Advanced quantum access', 'Priority support', 'Custom algorithms'] },
      enterprise: { price: 'Custom Pricing', features: ['Dedicated quantum resources', 'Custom development', 'Research partnership', 'SLA guarantee'] }
    },
    integrations: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Rigetti', 'IonQ'],
    support: ['Quantum Expert Consultation', 'Research Collaboration', 'Custom Development', 'Training & Education'],
    compliance: ['Custom Security Requirements', 'Research Ethics', 'Export Controls'],
    sla: 'Custom SLA',
    setupTime: '3-12 months',
    freeTrial: false,
    demoAvailable: true
  },
  {
    id: 'ai-holographic-workspace',
    name: 'AI Holographic Workspace',
    description: 'Revolutionary holographic workspace platform with AI-powered virtual collaboration, 3D data visualization, and immersive meeting experiences.',
    category: 'emerging',
    subcategory: 'Holographic Technology',
    price: '$9,999/month',
    marketPrice: '$20,000-100,000/month',
    features: [
      '3D holographic displays',
      'AI-powered virtual collaboration',
      'Immersive meeting experiences',
      '3D data visualization',
      'Virtual whiteboarding',
      'Spatial computing interface',
      'Multi-user holographic sessions',
      'AR/VR integration',
      'Custom holographic applications',
      'Enterprise security & compliance'
    ],
    benefits: [
      'Revolutionary collaboration experience',
      'Immersive data visualization',
      'Enhanced remote work capabilities',
      'Next-generation meetings',
      'Competitive advantage',
      'Future-ready workspace'
    ],
    icon: '🌐',
    popular: false,
    url: '/ai-holographic-workspace',
    pricing: {
      basic: { price: '$2,999/month', features: ['Basic holographic setup', 'Email support', 'Standard applications'] },
      pro: { price: '$6,999/month', features: ['Advanced holographic setup', 'Priority support', 'Custom applications'] },
      enterprise: { price: '$9,999/month', features: ['Full holographic suite', 'Dedicated support', 'Custom development', 'SLA guarantee'] }
    },
    integrations: ['Microsoft HoloLens', 'Magic Leap', 'Oculus', 'HTC Vive', 'WebRTC', 'Unity', 'Unreal Engine'],
    support: ['Holographic Expert', 'Custom Development', 'Training & Onboarding', 'Technical Support'],
    compliance: ['Custom Security Requirements', 'Data Privacy', 'Export Controls'],
    sla: '99.5% uptime guarantee',
    setupTime: '2-6 months',
    freeTrial: false,
    demoAvailable: true
  }
];

export const allServices = [...aiServices, ...itServices, ...microSaasServices, ...emergingTechServices];

export const serviceCategories = {
  ai: 'AI Services',
  it: 'IT Services', 
  saas: 'Micro SAAS',
  emerging: 'Emerging Technologies'
};

export const serviceSubcategories = {
  'Customer Service': 'Customer Service',
  'Content Creation': 'Content Creation',
  'Analytics': 'Analytics',
  'Computer Vision': 'Computer Vision',
  'Automation': 'Automation',
  'Cloud Computing': 'Cloud Computing',
  'Cybersecurity': 'Cybersecurity',
  'DevOps': 'DevOps',
  'CRM': 'CRM',
  'Security': 'Security',
  'Project Management': 'Project Management',
  'Quantum Computing': 'Quantum Computing',
  'Holographic Technology': 'Holographic Technology'
};