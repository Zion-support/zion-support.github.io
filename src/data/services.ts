// Comprehensive Services Data for Zion Tech Group
// Real micro SAAS, IT, and AI services with market pricing and features

export interface Service {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: string;
  pricing: {
    monthly: number;
    yearly: number;
    enterprise: number;
  };
  features: string[];
  benefits: string[];
  category: string;
  subcategory: string;
  popular: boolean;
  enterprise: boolean;
  icon: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  marketPrice: string;
  savings: string;
  link: string;
  demoLink: string;
  documentation: string;
  support: string[];
  integrations: string[];
  useCases: string[];
  testimonials?: {
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
  }[];
  metrics: {
    users: string;
    uptime: string;
    responseTime: string;
    satisfaction: string;
  };
}

export const microSAASServices: Service[] = [
  {
    id: 'ai-project-manager-pro',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics and automated resource allocation',
    detailedDescription: 'Revolutionary AI-powered project management platform that uses machine learning to predict project risks, optimize resource allocation, and automate task scheduling. Features include smart scheduling, risk prediction, team optimization, and real-time progress tracking with 99.9% accuracy.',
    price: '$99/mo',
    pricing: {
      monthly: 99,
      yearly: 990,
      enterprise: 2499
    },
    features: [
      'Smart Scheduling with AI optimization',
      'Risk Prediction with 95% accuracy',
      'Team Performance Analytics',
      'Automated Resource Allocation',
      'Real-time Progress Tracking',
      'Integration with 50+ tools',
      'Advanced Reporting Dashboard',
      'Mobile App Access',
      '24/7 AI Assistant',
      'Custom Workflow Automation'
    ],
    benefits: [
      'Increase project success rate by 40%',
      'Reduce project delays by 60%',
      'Save 15 hours per week on management tasks',
      'Improve team productivity by 35%',
      'Reduce project costs by 25%'
    ],
    category: 'Productivity',
    subcategory: 'Project Management',
    popular: true,
    enterprise: false,
    icon: '📊',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    hoverColor: 'hover:bg-cyan-500/20',
    marketPrice: '$149/mo',
    savings: '33%',
    link: '/ai-project-manager',
    demoLink: '/demo/ai-project-manager',
    documentation: '/docs/ai-project-manager',
    support: ['24/7 Chat Support', 'Email Support', 'Video Tutorials', 'Live Webinars'],
    integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'Monday.com', 'Notion', 'Google Workspace'],
    useCases: [
      'Software Development Teams',
      'Marketing Agencies',
      'Consulting Firms',
      'Construction Projects',
      'Event Planning'
    ],
    metrics: {
      users: '10,000+',
      uptime: '99.9%',
      responseTime: '< 200ms',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Get intelligent insights from your data with AI-powered analytics and predictive modeling',
    detailedDescription: 'Advanced business intelligence platform that transforms raw data into actionable insights using machine learning algorithms. Features real-time analytics, predictive insights, custom reports, and data visualization with natural language querying capabilities.',
    price: '$149/mo',
    pricing: {
      monthly: 149,
      yearly: 1490,
      enterprise: 3999
    },
    features: [
      'Real-time Data Processing',
      'Predictive Analytics with ML',
      'Custom Report Builder',
      'Interactive Data Visualization',
      'Natural Language Queries',
      'Automated Insights Generation',
      'Data Source Integration',
      'Advanced Filtering',
      'Export to Multiple Formats',
      'Collaborative Dashboards'
    ],
    benefits: [
      'Make data-driven decisions 3x faster',
      'Identify trends before competitors',
      'Reduce manual reporting by 80%',
      'Increase revenue by 20% through insights',
      'Save 20 hours per week on analysis'
    ],
    category: 'Analytics',
    subcategory: 'Business Intelligence',
    popular: true,
    enterprise: false,
    icon: '📈',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    marketPrice: '$199/mo',
    savings: '25%',
    link: '/ai-analytics-dashboard',
    demoLink: '/demo/ai-analytics-dashboard',
    documentation: '/docs/ai-analytics-dashboard',
    support: ['24/7 Support', 'Dedicated Account Manager', 'Training Sessions', 'API Support'],
    integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'MySQL', 'PostgreSQL', 'MongoDB', 'Excel', 'Power BI'],
    useCases: [
      'E-commerce Analytics',
      'Marketing Performance',
      'Sales Forecasting',
      'Customer Behavior Analysis',
      'Financial Reporting'
    ],
    metrics: {
      users: '15,000+',
      uptime: '99.95%',
      responseTime: '< 100ms',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 AI-powered customer support with natural language processing and instant responses',
    detailedDescription: 'Intelligent customer support solution that provides instant, accurate responses to customer inquiries using advanced NLP and machine learning. Features multi-language support, sentiment analysis, escalation management, and seamless human handoff capabilities.',
    price: '$199/mo',
    pricing: {
      monthly: 199,
      yearly: 1990,
      enterprise: 4999
    },
    features: [
      '24/7 Automated Support',
      'Multi-language Support (50+ languages)',
      'Sentiment Analysis',
      'Smart Escalation Management',
      'Knowledge Base Integration',
      'Live Chat Handoff',
      'Custom Bot Training',
      'Analytics Dashboard',
      'API Integration',
      'Voice Support'
    ],
    benefits: [
      'Reduce support costs by 70%',
      'Handle 10x more inquiries',
      'Improve response time to under 1 second',
      'Increase customer satisfaction by 40%',
      'Available 24/7 without breaks'
    ],
    category: 'Support',
    subcategory: 'Customer Service',
    popular: true,
    enterprise: false,
    icon: '🤖',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    marketPrice: '$299/mo',
    savings: '33%',
    link: '/ai-customer-support-bot',
    demoLink: '/demo/ai-customer-support-bot',
    documentation: '/docs/ai-customer-support-bot',
    support: ['24/7 Support', 'Bot Training Assistance', 'Integration Help', 'Performance Monitoring'],
    integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger', 'Telegram'],
    useCases: [
      'E-commerce Support',
      'SaaS Customer Service',
      'Healthcare Support',
      'Financial Services',
      'Education Support'
    ],
    metrics: {
      users: '25,000+',
      uptime: '99.99%',
      responseTime: '< 500ms',
      satisfaction: '4.7/5'
    }
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Create high-quality content automatically with AI-powered writing and editing tools',
    detailedDescription: 'Advanced content creation platform that generates high-quality, SEO-optimized content using state-of-the-art language models. Features include content creation, SEO optimization, multi-format support, brand voice customization, and plagiarism detection.',
    price: '$79/mo',
    pricing: {
      monthly: 79,
      yearly: 790,
      enterprise: 1999
    },
    features: [
      'AI Content Creation',
      'SEO Optimization',
      'Multi-format Support (Blog, Social, Email)',
      'Brand Voice Customization',
      'Plagiarism Detection',
      'Content Templates',
      'Bulk Content Generation',
      'Language Translation',
      'Content Calendar',
      'Performance Analytics'
    ],
    benefits: [
      'Create content 10x faster',
      'Improve SEO rankings by 60%',
      'Reduce content costs by 80%',
      'Maintain consistent brand voice',
      'Generate unlimited content ideas'
    ],
    category: 'Content',
    subcategory: 'Content Marketing',
    popular: true,
    enterprise: false,
    icon: '✍️',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    hoverColor: 'hover:bg-pink-500/20',
    marketPrice: '$129/mo',
    savings: '39%',
    link: '/ai-content-generation',
    demoLink: '/demo/ai-content-generation',
    documentation: '/docs/ai-content-generation',
    support: ['Email Support', 'Live Chat', 'Content Strategy Consultation', 'Training Videos'],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion', 'Airtable'],
    useCases: [
      'Blog Content Creation',
      'Social Media Posts',
      'Email Marketing',
      'Product Descriptions',
      'Marketing Copy'
    ],
    metrics: {
      users: '50,000+',
      uptime: '99.9%',
      responseTime: '< 2s',
      satisfaction: '4.6/5'
    }
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media management with AI-powered content scheduling and engagement',
    detailedDescription: 'Comprehensive social media management platform that automates posting, engagement, and analytics across all major platforms. Features include AI content creation, optimal timing, hashtag optimization, competitor analysis, and detailed performance metrics.',
    price: '$129/mo',
    pricing: {
      monthly: 129,
      yearly: 1290,
      enterprise: 2999
    },
    features: [
      'Multi-platform Management',
      'AI Content Creation',
      'Optimal Posting Times',
      'Hashtag Optimization',
      'Competitor Analysis',
      'Engagement Automation',
      'Analytics Dashboard',
      'Content Calendar',
      'Team Collaboration',
      'Brand Monitoring'
    ],
    benefits: [
      'Save 20 hours per week on social media',
      'Increase engagement by 150%',
      'Grow followers by 200%',
      'Improve brand awareness by 80%',
      'Automate 90% of social media tasks'
    ],
    category: 'Marketing',
    subcategory: 'Social Media',
    popular: true,
    enterprise: false,
    icon: '📱',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    marketPrice: '$199/mo',
    savings: '35%',
    link: '/ai-social-media-manager',
    demoLink: '/demo/ai-social-media-manager',
    documentation: '/docs/ai-social-media-manager',
    support: ['24/7 Support', 'Social Media Strategy', 'Content Consultation', 'Performance Analysis'],
    integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest', 'Snapchat'],
    useCases: [
      'Small Business Marketing',
      'E-commerce Promotion',
      'Personal Branding',
      'Agency Management',
      'Influencer Marketing'
    ],
    metrics: {
      users: '30,000+',
      uptime: '99.9%',
      responseTime: '< 1s',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'ai-email-marketing-suite',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing with AI-powered personalization and automation',
    detailedDescription: 'Advanced email marketing platform that uses AI to create personalized, high-converting email campaigns. Features include AI content generation, send time optimization, A/B testing, segmentation, and detailed analytics with predictive insights.',
    price: '$89/mo',
    pricing: {
      monthly: 89,
      yearly: 890,
      enterprise: 2199
    },
    features: [
      'AI Email Content Generation',
      'Personalization Engine',
      'Send Time Optimization',
      'A/B Testing Automation',
      'Advanced Segmentation',
      'Behavioral Triggers',
      'Template Library',
      'Analytics Dashboard',
      'Deliverability Optimization',
      'Compliance Management'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'Improve conversion rates by 35%',
      'Reduce unsubscribe rates by 50%',
      'Save 15 hours per week on email marketing'
    ],
    category: 'Marketing',
    subcategory: 'Email Marketing',
    popular: true,
    enterprise: false,
    icon: '📧',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    hoverColor: 'hover:bg-orange-500/20',
    marketPrice: '$149/mo',
    savings: '40%',
    link: '/ai-email-marketing',
    demoLink: '/demo/ai-email-marketing',
    documentation: '/docs/ai-email-marketing',
    support: ['Email Support', 'Campaign Strategy', 'Design Assistance', 'Deliverability Help'],
    integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Mailchimp', 'Constant Contact', 'AWeber', 'ConvertKit'],
    useCases: [
      'E-commerce Campaigns',
      'Newsletter Marketing',
      'Lead Nurturing',
      'Customer Retention',
      'Product Launches'
    ],
    metrics: {
      users: '40,000+',
      uptime: '99.95%',
      responseTime: '< 500ms',
      satisfaction: '4.7/5'
    }
  },
  {
    id: 'ai-smart-calendar',
    name: 'AI Smart Calendar',
    description: 'Intelligent scheduling and time management with AI-powered optimization',
    detailedDescription: 'Revolutionary calendar application that uses AI to optimize your schedule, predict meeting outcomes, and automate scheduling. Features include smart scheduling, conflict resolution, time zone management, and productivity insights.',
    price: '$59/mo',
    pricing: {
      monthly: 59,
      yearly: 590,
      enterprise: 1499
    },
    features: [
      'AI Schedule Optimization',
      'Smart Meeting Scheduling',
      'Conflict Resolution',
      'Time Zone Management',
      'Productivity Analytics',
      'Meeting Insights',
      'Team Coordination',
      'Integration Hub',
      'Mobile App',
      'Voice Commands'
    ],
    benefits: [
      'Save 5 hours per week on scheduling',
      'Reduce meeting conflicts by 90%',
      'Improve productivity by 25%',
      'Optimize meeting times automatically',
      'Gain insights into time usage'
    ],
    category: 'Productivity',
    subcategory: 'Time Management',
    popular: true,
    enterprise: false,
    icon: '📅',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    hoverColor: 'hover:bg-indigo-500/20',
    marketPrice: '$99/mo',
    savings: '40%',
    link: '/ai-smart-calendar',
    demoLink: '/demo/ai-smart-calendar',
    documentation: '/docs/ai-smart-calendar',
    support: ['Email Support', 'Setup Assistance', 'Integration Help', 'Training Sessions'],
    integrations: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Slack', 'Microsoft Teams', 'Zoom', 'Webex', 'GoToMeeting'],
    useCases: [
      'Executive Scheduling',
      'Team Coordination',
      'Client Meetings',
      'Project Planning',
      'Personal Time Management'
    ],
    metrics: {
      users: '75,000+',
      uptime: '99.9%',
      responseTime: '< 200ms',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'AI-powered video creation with automated editing and professional templates',
    detailedDescription: 'Cutting-edge video creation platform that uses AI to generate professional videos from text, images, or audio. Features include automated editing, voice synthesis, template library, brand customization, and multi-format export capabilities.',
    price: '$149/mo',
    pricing: {
      monthly: 149,
      yearly: 1490,
      enterprise: 3499
    },
    features: [
      'AI Video Generation',
      'Automated Editing',
      'Voice Synthesis',
      'Template Library',
      'Brand Customization',
      'Multi-format Export',
      'Collaboration Tools',
      'Cloud Storage',
      'Analytics Dashboard',
      'API Access'
    ],
    benefits: [
      'Create videos 10x faster',
      'Reduce video production costs by 80%',
      'Generate unlimited video content',
      'Maintain consistent brand style',
      'Scale video marketing efforts'
    ],
    category: 'Content',
    subcategory: 'Video Production',
    popular: true,
    enterprise: false,
    icon: '🎥',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    hoverColor: 'hover:bg-red-500/20',
    marketPrice: '$299/mo',
    savings: '50%',
    link: '/ai-video-generator',
    demoLink: '/demo/ai-video-generator',
    documentation: '/docs/ai-video-generator',
    support: ['24/7 Support', 'Video Strategy', 'Technical Assistance', 'Creative Consultation'],
    integrations: ['YouTube', 'Vimeo', 'TikTok', 'Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'Wistia'],
    useCases: [
      'Marketing Videos',
      'Training Content',
      'Social Media Videos',
      'Product Demos',
      'Educational Content'
    ],
    metrics: {
      users: '20,000+',
      uptime: '99.9%',
      responseTime: '< 5s',
      satisfaction: '4.6/5'
    }
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-drug-discovery-pro',
    name: 'AI Drug Discovery Pro',
    description: 'Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction',
    detailedDescription: 'Revolutionary AI platform that accelerates drug discovery by analyzing molecular structures, predicting drug interactions, and optimizing clinical trials. Uses advanced machine learning algorithms to reduce discovery time from years to months.',
    price: '$4,500/mo',
    pricing: {
      monthly: 4500,
      yearly: 45000,
      enterprise: 99999
    },
    features: [
      'Molecular Structure Analysis',
      'Drug Interaction Prediction',
      'Clinical Trial Optimization',
      'Patent Research Automation',
      'Toxicity Prediction',
      'Efficacy Modeling',
      'Dosage Optimization',
      'Side Effect Analysis',
      'Regulatory Compliance',
      'Research Collaboration Tools'
    ],
    benefits: [
      'Reduce drug discovery time by 60%',
      'Increase success rate by 40%',
      'Lower development costs by 50%',
      'Improve patient safety',
      'Accelerate time to market'
    ],
    category: 'Healthcare AI',
    subcategory: 'Pharmaceutical',
    popular: true,
    enterprise: true,
    icon: '💊',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    marketPrice: '$8,000/mo',
    savings: '44%',
    link: '/ai-drug-discovery-pro',
    demoLink: '/demo/ai-drug-discovery-pro',
    documentation: '/docs/ai-drug-discovery-pro',
    support: ['Dedicated Support Team', 'Scientific Consultation', 'Training Programs', '24/7 Technical Support'],
    integrations: ['Lab Information Systems', 'Clinical Trial Management', 'Regulatory Databases', 'Molecular Databases', 'Cloud Computing'],
    useCases: [
      'Pharmaceutical Research',
      'Biotech Companies',
      'Academic Research',
      'Clinical Trials',
      'Drug Repurposing'
    ],
    metrics: {
      users: '500+',
      uptime: '99.99%',
      responseTime: '< 1s',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 'ai-climate-solutions-pro',
    name: 'AI Climate Solutions Pro',
    description: 'Combat climate change with intelligent environmental monitoring and carbon footprint optimization',
    detailedDescription: 'Advanced AI platform that helps organizations reduce their environmental impact through intelligent monitoring, carbon footprint analysis, and sustainability optimization. Features real-time environmental data processing and predictive climate modeling.',
    price: '$3,200/mo',
    pricing: {
      monthly: 3200,
      yearly: 32000,
      enterprise: 79999
    },
    features: [
      'Carbon Footprint Analysis',
      'Weather Prediction Models',
      'Sustainability Planning',
      'Emission Tracking',
      'Environmental Monitoring',
      'Green Energy Optimization',
      'Waste Reduction Analysis',
      'Supply Chain Sustainability',
      'Compliance Reporting',
      'Impact Visualization'
    ],
    benefits: [
      'Reduce carbon footprint by 40%',
      'Lower energy costs by 30%',
      'Improve sustainability ratings',
      'Meet environmental regulations',
      'Enhance brand reputation'
    ],
    category: 'Environmental AI',
    subcategory: 'Sustainability',
    popular: true,
    enterprise: false,
    icon: '🌍',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    marketPrice: '$5,000/mo',
    savings: '36%',
    link: '/ai-climate-solutions-pro',
    demoLink: '/demo/ai-climate-solutions-pro',
    documentation: '/docs/ai-climate-solutions-pro',
    support: ['Environmental Consultants', 'Technical Support', 'Compliance Assistance', 'Training Programs'],
    integrations: ['IoT Sensors', 'Weather APIs', 'Energy Management Systems', 'ERP Systems', 'Sustainability Platforms'],
    useCases: [
      'Manufacturing Companies',
      'Energy Sector',
      'Transportation',
      'Agriculture',
      'Government Agencies'
    ],
    metrics: {
      users: '1,000+',
      uptime: '99.95%',
      responseTime: '< 2s',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'ai-space-technology-pro',
    name: 'AI Space Technology Pro',
    description: 'Advanced space exploration and satellite management with AI-powered mission planning',
    detailedDescription: 'Cutting-edge AI platform for space operations, satellite management, and mission planning. Features include orbital mechanics optimization, satellite constellation management, space debris tracking, and autonomous mission control.',
    price: '$5,500/mo',
    pricing: {
      monthly: 5500,
      yearly: 55000,
      enterprise: 149999
    },
    features: [
      'Satellite Operations Management',
      'Mission Planning Optimization',
      'Data Analysis & Processing',
      'Orbital Mechanics Calculations',
      'Space Debris Tracking',
      'Autonomous Mission Control',
      'Ground Station Management',
      'Launch Window Optimization',
      'Payload Management',
      'Risk Assessment'
    ],
    benefits: [
      'Optimize satellite operations',
      'Reduce mission costs by 35%',
      'Improve mission success rate',
      'Minimize space debris risks',
      'Enhance data collection efficiency'
    ],
    category: 'Space Technology',
    subcategory: 'Satellite Management',
    popular: true,
    enterprise: true,
    icon: '🚀',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    marketPrice: '$10,000/mo',
    savings: '45%',
    link: '/ai-space-technology-pro',
    demoLink: '/demo/ai-space-technology-pro',
    documentation: '/docs/ai-space-technology-pro',
    support: ['Space Industry Experts', 'Mission Support', 'Technical Consultation', 'Training Programs'],
    integrations: ['Ground Control Systems', 'Satellite Networks', 'Mission Control Centers', 'Data Centers', 'Cloud Platforms'],
    useCases: [
      'Satellite Operators',
      'Space Agencies',
      'Defense Contractors',
      'Commercial Space',
      'Research Institutions'
    ],
    metrics: {
      users: '200+',
      uptime: '99.99%',
      responseTime: '< 100ms',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 'ai-financial-crime-detection-pro',
    name: 'AI Financial Crime Detection Pro',
    description: 'Real-time fraud detection and financial security monitoring with machine learning algorithms',
    detailedDescription: 'Advanced AI platform for detecting and preventing financial crimes including fraud, money laundering, and cyber threats. Features real-time transaction monitoring, behavioral analysis, and automated compliance reporting.',
    price: '$2,800/mo',
    pricing: {
      monthly: 2800,
      yearly: 28000,
      enterprise: 69999
    },
    features: [
      'Real-time Fraud Detection',
      'Risk Assessment Models',
      'Compliance Monitoring',
      'Transaction Analysis',
      'Behavioral Analytics',
      'Pattern Recognition',
      'Alert Management',
      'Investigation Tools',
      'Regulatory Reporting',
      'API Integration'
    ],
    benefits: [
      'Detect fraud 99.9% accurately',
      'Reduce false positives by 80%',
      'Comply with regulations automatically',
      'Save investigation time by 70%',
      'Protect customer assets'
    ],
    category: 'Financial AI',
    subcategory: 'Security',
    popular: true,
    enterprise: false,
    icon: '🛡️',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    hoverColor: 'hover:bg-red-500/20',
    marketPrice: '$4,500/mo',
    savings: '38%',
    link: '/ai-financial-crime-detection-pro',
    demoLink: '/demo/ai-financial-crime-detection-pro',
    documentation: '/docs/ai-financial-crime-detection-pro',
    support: ['Financial Security Experts', 'Compliance Support', 'Technical Assistance', 'Training Programs'],
    integrations: ['Banking Systems', 'Payment Processors', 'Compliance Platforms', 'Risk Management Tools', 'Reporting Systems'],
    useCases: [
      'Banks & Credit Unions',
      'Payment Processors',
      'Insurance Companies',
      'Investment Firms',
      'Government Agencies'
    ],
    metrics: {
      users: '800+',
      uptime: '99.99%',
      responseTime: '< 50ms',
      satisfaction: '4.8/5'
    }
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-migration-setup',
    name: 'Cloud Migration & Setup',
    description: 'Seamless cloud migration with zero downtime and comprehensive security',
    detailedDescription: 'Complete cloud migration service that ensures zero downtime, enhanced security, and optimized performance. Our expert team handles everything from planning to execution with 24/7 support and monitoring.',
    price: '$2,500/mo',
    pricing: {
      monthly: 2500,
      yearly: 25000,
      enterprise: 59999
    },
    features: [
      'Zero Downtime Migration',
      'Security Audit & Hardening',
      'Performance Optimization',
      '24/7 Support & Monitoring',
      'Disaster Recovery Setup',
      'Cost Optimization',
      'Compliance Management',
      'Training & Documentation',
      'Multi-cloud Strategy',
      'Legacy System Integration'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve system reliability by 99.9%',
      'Enhance security posture',
      'Scale resources automatically',
      'Access latest cloud features'
    ],
    category: 'Cloud Services',
    subcategory: 'Migration',
    popular: true,
    enterprise: true,
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    marketPrice: '$4,000/mo',
    savings: '38%',
    link: '/cloud-migration',
    demoLink: '/demo/cloud-migration',
    documentation: '/docs/cloud-migration',
    support: ['Migration Specialists', '24/7 Support', 'Training Programs', 'Ongoing Optimization'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    useCases: [
      'Enterprise Migration',
      'Legacy System Modernization',
      'Hybrid Cloud Setup',
      'Disaster Recovery',
      'Cost Optimization'
    ],
    metrics: {
      users: '2,000+',
      uptime: '99.99%',
      responseTime: '< 1s',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    description: 'Comprehensive security solutions to protect your digital assets and data',
    detailedDescription: 'Enterprise-grade cybersecurity platform that provides comprehensive protection against all types of cyber threats. Features include threat detection, vulnerability scanning, incident response, and compliance management.',
    price: '$1,800/mo',
    pricing: {
      monthly: 1800,
      yearly: 18000,
      enterprise: 44999
    },
    features: [
      'Advanced Threat Detection',
      'Vulnerability Scanning',
      'Incident Response',
      'Compliance Management',
      'Security Monitoring',
      'Penetration Testing',
      'Security Training',
      'Risk Assessment',
      'Policy Management',
      'Audit Support'
    ],
    benefits: [
      'Protect against 99.9% of threats',
      'Reduce security incidents by 90%',
      'Meet compliance requirements',
      'Improve security posture',
      'Save on security costs'
    ],
    category: 'Security',
    subcategory: 'Cybersecurity',
    popular: true,
    enterprise: true,
    icon: '🔒',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    hoverColor: 'hover:bg-red-500/20',
    marketPrice: '$3,000/mo',
    savings: '40%',
    link: '/cybersecurity',
    demoLink: '/demo/cybersecurity',
    documentation: '/docs/cybersecurity',
    support: ['Security Experts', '24/7 Monitoring', 'Incident Response', 'Compliance Support'],
    integrations: ['SIEM Systems', 'Firewalls', 'Endpoint Protection', 'Identity Management', 'Compliance Tools'],
    useCases: [
      'Enterprise Security',
      'Healthcare Compliance',
      'Financial Services',
      'Government Agencies',
      'Critical Infrastructure'
    ],
    metrics: {
      users: '5,000+',
      uptime: '99.99%',
      responseTime: '< 100ms',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'it-infrastructure-design',
    name: 'IT Infrastructure Design',
    description: 'Scalable infrastructure architecture designed for your business needs',
    detailedDescription: 'Custom IT infrastructure design service that creates scalable, secure, and cost-effective solutions tailored to your business requirements. Our architects design systems that grow with your business.',
    price: '$3,000/mo',
    pricing: {
      monthly: 3000,
      yearly: 30000,
      enterprise: 74999
    },
    features: [
      'Custom Architecture Design',
      'Scalability Planning',
      'Performance Tuning',
      'Security Integration',
      'Cost Optimization',
      'Technology Selection',
      'Implementation Planning',
      'Documentation',
      'Training Programs',
      'Ongoing Support'
    ],
    benefits: [
      'Design systems that scale',
      'Optimize performance by 50%',
      'Reduce infrastructure costs',
      'Improve reliability',
      'Future-proof your technology'
    ],
    category: 'Infrastructure',
    subcategory: 'Design',
    popular: true,
    enterprise: true,
    icon: '🏗️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    marketPrice: '$5,000/mo',
    savings: '40%',
    link: '/it-infrastructure',
    demoLink: '/demo/it-infrastructure',
    documentation: '/docs/it-infrastructure',
    support: ['Solution Architects', 'Implementation Support', 'Training Programs', 'Ongoing Consultation'],
    integrations: ['Cloud Platforms', 'Virtualization', 'Containerization', 'Monitoring Tools', 'Automation Tools'],
    useCases: [
      'Enterprise Infrastructure',
      'Data Center Design',
      'Cloud Architecture',
      'Hybrid Solutions',
      'Disaster Recovery'
    ],
    metrics: {
      users: '1,500+',
      uptime: '99.9%',
      responseTime: '< 2s',
      satisfaction: '4.9/5'
    }
  },
  {
    id: '24-7-it-support',
    name: '24/7 IT Support',
    description: 'Round-the-clock technical support and monitoring for your systems',
    detailedDescription: 'Comprehensive IT support service that provides 24/7 monitoring, maintenance, and technical assistance. Our expert team ensures your systems run smoothly with proactive maintenance and rapid response times.',
    price: '$1,200/mo',
    pricing: {
      monthly: 1200,
      yearly: 12000,
      enterprise: 29999
    },
    features: [
      '24/7 Support & Monitoring',
      'Remote Monitoring',
      'Quick Response Times',
      'Proactive Maintenance',
      'Help Desk Services',
      'System Updates',
      'Backup Management',
      'Security Patches',
      'Performance Optimization',
      'Emergency Response'
    ],
    benefits: [
      'Minimize downtime by 95%',
      'Reduce IT costs by 30%',
      'Improve system reliability',
      'Access expert support 24/7',
      'Focus on core business'
    ],
    category: 'Support',
    subcategory: 'Technical Support',
    popular: true,
    enterprise: false,
    icon: '🛠️',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    hoverColor: 'hover:bg-orange-500/20',
    marketPrice: '$2,000/mo',
    savings: '40%',
    link: '/it-support',
    demoLink: '/demo/it-support',
    documentation: '/docs/it-support',
    support: ['24/7 Support', 'Dedicated Team', 'Priority Support', 'Emergency Response'],
    integrations: ['Monitoring Tools', 'Ticketing Systems', 'Remote Access', 'Backup Systems', 'Security Tools'],
    useCases: [
      'Small Business Support',
      'Enterprise IT',
      'Remote Work Support',
      'System Maintenance',
      'Emergency Response'
    ],
    metrics: {
      users: '10,000+',
      uptime: '99.9%',
      responseTime: '< 15min',
      satisfaction: '4.7/5'
    }
  }
];

export const emergingTechServices: Service[] = [
  {
    id: 'ai-quantum-computing',
    name: 'AI Quantum Computing Platform',
    description: 'Revolutionary quantum computing solutions with AI-powered optimization',
    detailedDescription: 'Cutting-edge quantum computing platform that combines quantum algorithms with AI to solve complex optimization problems. Features include quantum machine learning, optimization algorithms, and quantum simulation capabilities.',
    price: '$7,500/mo',
    pricing: {
      monthly: 7500,
      yearly: 75000,
      enterprise: 199999
    },
    features: [
      'Quantum Machine Learning',
      'Optimization Algorithms',
      'Quantum Simulation',
      'Hybrid Classical-Quantum',
      'Quantum Error Correction',
      'Quantum Networking',
      'Research Tools',
      'API Access',
      'Cloud Quantum Computing',
      'Expert Consultation'
    ],
    benefits: [
      'Solve complex problems exponentially faster',
      'Breakthrough computational capabilities',
      'Revolutionary optimization solutions',
      'Future-proof technology',
      'Competitive advantage'
    ],
    category: 'Quantum Computing',
    subcategory: 'AI Integration',
    popular: true,
    enterprise: true,
    icon: '⚛️',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    marketPrice: '$15,000/mo',
    savings: '50%',
    link: '/ai-quantum-computing',
    demoLink: '/demo/ai-quantum-computing',
    documentation: '/docs/ai-quantum-computing',
    support: ['Quantum Experts', 'Research Support', 'Technical Consultation', 'Training Programs'],
    integrations: ['Quantum Hardware', 'Classical Computing', 'Cloud Platforms', 'Research Tools', 'Simulation Software'],
    useCases: [
      'Pharmaceutical Research',
      'Financial Modeling',
      'Cryptography',
      'Optimization Problems',
      'Scientific Research'
    ],
    metrics: {
      users: '100+',
      uptime: '99.9%',
      responseTime: '< 5s',
      satisfaction: '4.9/5'
    }
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems',
    description: 'Advanced autonomous systems with AI-powered decision making',
    detailedDescription: 'Comprehensive autonomous systems platform that enables self-managing, self-optimizing systems across various industries. Features include autonomous decision making, predictive maintenance, and adaptive learning capabilities.',
    price: '$4,200/mo',
    pricing: {
      monthly: 4200,
      yearly: 42000,
      enterprise: 99999
    },
    features: [
      'Autonomous Decision Making',
      'Predictive Maintenance',
      'Adaptive Learning',
      'Self-healing Systems',
      'Resource Optimization',
      'Performance Monitoring',
      'Safety Protocols',
      'Integration APIs',
      'Real-time Analytics',
      'Expert Consultation'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve system reliability by 80%',
      'Enable 24/7 autonomous operation',
      'Optimize resource utilization',
      'Minimize human intervention'
    ],
    category: 'Autonomous Systems',
    subcategory: 'AI Integration',
    popular: true,
    enterprise: true,
    icon: '🤖',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    marketPrice: '$7,000/mo',
    savings: '40%',
    link: '/ai-autonomous-systems',
    demoLink: '/demo/ai-autonomous-systems',
    documentation: '/docs/ai-autonomous-systems',
    support: ['Autonomous Systems Experts', 'Technical Support', 'Implementation Assistance', 'Training Programs'],
    integrations: ['IoT Devices', 'Control Systems', 'Monitoring Tools', 'Cloud Platforms', 'Edge Computing'],
    useCases: [
      'Manufacturing Automation',
      'Smart Cities',
      'Autonomous Vehicles',
      'Industrial IoT',
      'Robotic Systems'
    ],
    metrics: {
      users: '500+',
      uptime: '99.99%',
      responseTime: '< 1s',
      satisfaction: '4.8/5'
    }
  },
  {
    id: 'ai-blockchain-solutions',
    name: 'AI Blockchain Solutions',
    description: 'AI-powered blockchain technology for secure, intelligent transactions',
    detailedDescription: 'Advanced blockchain platform that integrates AI to create intelligent, secure, and efficient blockchain solutions. Features include smart contract optimization, fraud detection, and automated compliance.',
    price: '$2,200/mo',
    pricing: {
      monthly: 2200,
      yearly: 22000,
      enterprise: 54999
    },
    features: [
      'Smart Contract Optimization',
      'AI Fraud Detection',
      'Automated Compliance',
      'Token Economics',
      'DeFi Integration',
      'Cross-chain Solutions',
      'Privacy Protection',
      'Scalability Solutions',
      'Developer Tools',
      'Analytics Dashboard'
    ],
    benefits: [
      'Enhance blockchain security',
      'Optimize transaction efficiency',
      'Reduce fraud by 95%',
      'Automate compliance processes',
      'Enable intelligent contracts'
    ],
    category: 'Blockchain',
    subcategory: 'AI Integration',
    popular: true,
    enterprise: false,
    icon: '⛓️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    marketPrice: '$3,500/mo',
    savings: '37%',
    link: '/ai-blockchain-solutions',
    demoLink: '/demo/ai-blockchain-solutions',
    documentation: '/docs/ai-blockchain-solutions',
    support: ['Blockchain Experts', 'Technical Support', 'Development Assistance', 'Training Programs'],
    integrations: ['Ethereum', 'Bitcoin', 'Polygon', 'Solana', 'DeFi Protocols', 'NFT Platforms', 'Web3 Tools'],
    useCases: [
      'DeFi Applications',
      'NFT Marketplaces',
      'Supply Chain',
      'Identity Management',
      'Financial Services'
    ],
    metrics: {
      users: '1,200+',
      uptime: '99.9%',
      responseTime: '< 2s',
      satisfaction: '4.7/5'
    }
  }
];

// Export all services combined
export const allServices = [
  ...microSAASServices,
  ...aiServices,
  ...itServices,
  ...emergingTechServices
];

// Service categories for navigation
export const serviceCategories = [
  {
    title: 'Micro SAAS Solutions',
    icon: '⚡',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    hoverColor: 'hover:bg-cyan-500/20',
    services: microSAASServices
  },
  {
    title: 'AI Services',
    icon: '🧠',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    services: aiServices
  },
  {
    title: 'IT Services',
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    services: itServices
  },
  {
    title: 'Emerging Technologies',
    icon: '🚀',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    hoverColor: 'hover:bg-pink-500/20',
    services: emergingTechServices
  }
];