export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  comingSoon?: boolean;
  marketPrice?: string;
  technologies?: string[];
  contactInfo?: string;
  link: string;
  benefits: string[];
  capabilities: string[];
  roi: string;
  trial: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  services: Service[];
}

export const microSaasServices: Service[] = [
  // AI-Powered Business Tools
  {
    id: 'ai-project-manager-pro',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics, automated resource allocation, and smart task prioritization for maximum team productivity.',
    features: [
      'Smart Task Assignment & Prioritization',
      'Predictive Risk Analysis',
      'Resource Optimization',
      'Real-time Progress Tracking',
      'Team Collaboration Tools',
      'Automated Reporting',
      'Integration with 50+ tools',
      'Custom Workflow Builder'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 0 },
    category: 'AI Tools',
    icon: '📊',
    popular: true,
    link: 'https://ziontechgroup.com/ai-project-manager-pro',
    benefits: ['300% increase in project completion rates', '40% reduction in project delays', '50% improvement in resource utilization'],
    capabilities: ['Process 1000+ tasks simultaneously', 'Predict project risks with 95% accuracy', 'Integrate with major project management tools'],
    roi: '300% ROI in 6 months',
    trial: '14-day free trial',
    marketPrice: '$500-800/month',
    technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'REST APIs'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media content creation, scheduling, and engagement optimization across all major platforms with AI-powered insights.',
    features: [
      'AI Content Generation',
      'Optimal Post Scheduling',
      'Engagement Analytics',
      'Hashtag Optimization',
      'Multi-platform Management',
      'Competitor Analysis',
      'Influencer Collaboration Tools',
      'White-label Options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'Marketing',
    icon: '📱',
    popular: true,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    benefits: ['Save 20+ hours per week', 'Increase engagement by 150%', 'Grow followers by 200%'],
    capabilities: ['Generate 100+ posts daily', 'Support 10+ social platforms', 'Real-time trend analysis'],
    roi: '250% ROI in 3 months',
    trial: '7-day free trial',
    marketPrice: '$300-600/month',
    technologies: ['GPT-4', 'Computer Vision', 'Social Media APIs', 'Analytics Engine'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and custom dashboards for data-driven decision making.',
    features: [
      'Real-time Analytics',
      'Predictive Insights',
      'Custom Dashboards',
      'Automated Reports',
      'Data Visualization',
      'KPI Tracking',
      'Alert System',
      'API Integrations'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 299 },
    category: 'Analytics',
    icon: '📈',
    popular: true,
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    benefits: ['Make decisions 5x faster', 'Identify trends before competitors', 'Reduce reporting time by 80%'],
    capabilities: ['Process 1TB+ data daily', 'Generate 50+ report types', 'Connect to 100+ data sources'],
    roi: '400% ROI in 4 months',
    trial: '14-day free trial',
    marketPrice: '$600-1200/month',
    technologies: ['Big Data Processing', 'Machine Learning', 'Data Visualization', 'Cloud Computing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-email-marketing-suite',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization for maximum conversion rates.',
    features: [
      'Smart Personalization',
      'A/B Testing Automation',
      'Send Time Optimization',
      'Performance Analytics',
      'List Segmentation',
      'Template Library',
      'Deliverability Monitoring',
      'Revenue Attribution'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 0 },
    category: 'Marketing',
    icon: '📧',
    popular: false,
    link: 'https://ziontechgroup.com/ai-email-marketing-suite',
    benefits: ['Increase open rates by 40%', 'Boost click-through rates by 60%', 'Generate 3x more revenue'],
    capabilities: ['Send 1M+ emails monthly', 'Personalize 1000+ variables', 'Test 50+ variations automatically'],
    roi: '200% ROI in 2 months',
    trial: '7-day free trial',
    marketPrice: '$200-500/month',
    technologies: ['Machine Learning', 'Email APIs', 'Personalization Engine', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },

  // Customer Experience Solutions
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and seamless human handoff capabilities.',
    features: [
      '24/7 Availability',
      'Multi-language Support',
      'Sentiment Analysis',
      'Escalation Management',
      'Knowledge Base Integration',
      'Live Chat Handoff',
      'Performance Analytics',
      'Custom Training'
    ],
    pricing: { monthly: 249, yearly: 2490, setup: 199 },
    category: 'Customer Service',
    icon: '🤖',
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    benefits: ['Resolve 80% of queries automatically', 'Reduce response time by 90%', 'Improve customer satisfaction by 50%'],
    capabilities: ['Handle 10,000+ conversations daily', 'Support 50+ languages', '95% accuracy in query understanding'],
    roi: '350% ROI in 5 months',
    trial: '14-day free trial',
    marketPrice: '$400-800/month',
    technologies: ['NLP', 'Machine Learning', 'Chat APIs', 'Sentiment Analysis'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-lead-generation-engine',
    name: 'AI Lead Generation Engine',
    description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring and personalized outreach campaigns.',
    features: [
      'AI Lead Scoring',
      'Automated Outreach',
      'Qualification Logic',
      'CRM Integration',
      'Performance Tracking',
      'Email Sequences',
      'Social Media Mining',
      'Lead Enrichment'
    ],
    pricing: { monthly: 349, yearly: 3490, setup: 299 },
    category: 'Sales',
    icon: '🎯',
    popular: true,
    link: 'https://ziontechgroup.com/ai-lead-generation-engine',
    benefits: ['Generate 500+ qualified leads monthly', 'Increase conversion rates by 200%', 'Reduce lead cost by 60%'],
    capabilities: ['Process 100,000+ prospects daily', 'Score leads with 90% accuracy', 'Integrate with 20+ CRMs'],
    roi: '450% ROI in 6 months',
    trial: '14-day free trial',
    marketPrice: '$500-1000/month',
    technologies: ['Machine Learning', 'Web Scraping', 'CRM APIs', 'Email Automation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'No-code chatbot creation platform with advanced conversation flows, multi-channel deployment, and comprehensive analytics.',
    features: [
      'Drag & Drop Builder',
      'Multi-channel Deployment',
      'Analytics Dashboard',
      'Integration APIs',
      'Custom Templates',
      'Voice Support',
      'A/B Testing',
      'White-label Options'
    ],
    pricing: { monthly: 99, yearly: 990, setup: 0 },
    category: 'Customer Service',
    icon: '💬',
    popular: false,
    link: 'https://ziontechgroup.com/ai-chatbot-builder',
    benefits: ['Build chatbots in 30 minutes', 'Deploy across 10+ channels', 'Reduce support costs by 70%'],
    capabilities: ['Create unlimited chatbots', 'Deploy on web, mobile, social', 'Handle 1000+ conversations simultaneously'],
    roi: '150% ROI in 2 months',
    trial: '7-day free trial',
    marketPrice: '$150-400/month',
    technologies: ['NLP', 'Conversation AI', 'Multi-channel APIs', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },

  // Content & Marketing Automation
  {
    id: 'ai-content-studio',
    name: 'AI Content Studio',
    description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support for all marketing needs.',
    features: [
      'AI Writing Assistant',
      'Content Optimization',
      'SEO Analysis',
      'Brand Voice Training',
      'Multi-format Support',
      'Plagiarism Checker',
      'Content Calendar',
      'Team Collaboration'
    ],
    pricing: { monthly: 179, yearly: 1790, setup: 0 },
    category: 'Content Creation',
    icon: '✍️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-studio',
    benefits: ['Create 10x more content', 'Improve SEO rankings by 80%', 'Maintain consistent brand voice'],
    capabilities: ['Generate 1000+ articles daily', 'Support 40+ languages', 'Optimize for 50+ SEO factors'],
    roi: '200% ROI in 3 months',
    trial: '7-day free trial',
    marketPrice: '$300-700/month',
    technologies: ['GPT-4', 'SEO Analysis', 'Content Optimization', 'Brand AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Automated SEO analysis, keyword research, and content optimization recommendations for maximum search visibility.',
    features: [
      'Keyword Research',
      'Content Analysis',
      'Technical SEO',
      'Competitor Analysis',
      'Rank Tracking',
      'Link Building',
      'Local SEO',
      'Performance Reports'
    ],
    pricing: { monthly: 129, yearly: 1290, setup: 0 },
    category: 'SEO',
    icon: '🔍',
    popular: false,
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    benefits: ['Increase organic traffic by 150%', 'Improve rankings for 100+ keywords', 'Save 15 hours per week'],
    capabilities: ['Track 10,000+ keywords', 'Analyze 100+ websites', 'Generate 500+ content suggestions'],
    roi: '180% ROI in 4 months',
    trial: '7-day free trial',
    marketPrice: '$200-500/month',
    technologies: ['SEO APIs', 'Keyword Research', 'Content Analysis', 'Rank Tracking'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-social-media-analytics',
    name: 'AI Social Media Analytics',
    description: 'Advanced social media performance tracking with sentiment analysis, trend prediction, and ROI measurement across all platforms.',
    features: [
      'Performance Tracking',
      'Sentiment Analysis',
      'Trend Prediction',
      'Competitor Analysis',
      'ROI Measurement',
      'Influencer Tracking',
      'Crisis Management',
      'Custom Reports'
    ],
    pricing: { monthly: 159, yearly: 1590, setup: 0 },
    category: 'Analytics',
    icon: '📊',
    popular: false,
    link: 'https://ziontechgroup.com/ai-social-media-analytics',
    benefits: ['Track performance across 15+ platforms', 'Predict viral trends 48 hours early', 'Measure true ROI'],
    capabilities: ['Monitor 1000+ accounts', 'Analyze 1M+ posts daily', 'Generate 20+ report types'],
    roi: '220% ROI in 3 months',
    trial: '7-day free trial',
    marketPrice: '$250-600/month',
    technologies: ['Social Media APIs', 'Sentiment Analysis', 'Trend Prediction', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },

  // Financial & Business Intelligence
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    description: 'Automated invoice creation, tracking, and payment processing with smart reminders and multi-currency support.',
    features: [
      'Auto Invoice Generation',
      'Payment Tracking',
      'Smart Reminders',
      'Multi-currency Support',
      'Integration APIs',
      'Tax Calculations',
      'Client Portal',
      'Financial Reports'
    ],
    pricing: { monthly: 79, yearly: 790, setup: 0 },
    category: 'Finance',
    icon: '🧾',
    popular: false,
    link: 'https://ziontechgroup.com/ai-invoice-generator',
    benefits: ['Reduce invoicing time by 90%', 'Get paid 30% faster', 'Eliminate manual errors'],
    capabilities: ['Generate 1000+ invoices daily', 'Support 50+ currencies', 'Integrate with 20+ payment gateways'],
    roi: '120% ROI in 2 months',
    trial: '7-day free trial',
    marketPrice: '$100-300/month',
    technologies: ['Invoice APIs', 'Payment Processing', 'Multi-currency', 'Automation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Intelligent expense categorization, receipt scanning, and budget management with automated reporting and tax preparation.',
    features: [
      'Receipt Scanning',
      'Auto Categorization',
      'Budget Alerts',
      'Tax Preparation',
      'Mobile App',
      'Team Management',
      'Policy Enforcement',
      'Financial Reports'
    ],
    pricing: { monthly: 59, yearly: 590, setup: 0 },
    category: 'Finance',
    icon: '💰',
    popular: false,
    link: 'https://ziontechgroup.com/ai-expense-tracker',
    benefits: ['Save 5 hours per week', 'Reduce expense errors by 95%', 'Simplify tax preparation'],
    capabilities: ['Process 10,000+ receipts monthly', 'Support 100+ expense categories', 'Generate tax-ready reports'],
    roi: '100% ROI in 1 month',
    trial: '7-day free trial',
    marketPrice: '$80-200/month',
    technologies: ['OCR', 'Machine Learning', 'Mobile Apps', 'Tax APIs'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-financial-advisor',
    name: 'AI Financial Advisor',
    description: 'Personalized financial planning and investment recommendations based on AI analysis of market trends and personal goals.',
    features: [
      'Portfolio Analysis',
      'Risk Assessment',
      'Investment Recommendations',
      'Goal Tracking',
      'Market Insights',
      'Retirement Planning',
      'Tax Optimization',
      'Performance Monitoring'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 99 },
    category: 'Finance',
    icon: '💼',
    popular: true,
    link: 'https://ziontechgroup.com/ai-financial-advisor',
    benefits: ['Optimize investment returns by 25%', 'Reduce financial risk by 40%', 'Achieve goals 30% faster'],
    capabilities: ['Analyze 1000+ investment options', 'Monitor 50+ market indicators', 'Generate personalized strategies'],
    roi: '300% ROI in 6 months',
    trial: '14-day free trial',
    marketPrice: '$300-800/month',
    technologies: ['Financial APIs', 'Machine Learning', 'Risk Analysis', 'Portfolio Optimization'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },

  // Productivity & Workflow Tools
  {
    id: 'ai-scheduler-pro',
    name: 'AI Scheduler Pro',
    description: 'Intelligent meeting scheduling with conflict resolution, time zone management, and automated follow-up reminders.',
    features: [
      'Smart Scheduling',
      'Conflict Resolution',
      'Time Zone Management',
      'Calendar Integration',
      'Meeting Analytics',
      'Auto Reminders',
      'Resource Booking',
      'Team Coordination'
    ],
    pricing: { monthly: 89, yearly: 890, setup: 0 },
    category: 'Productivity',
    icon: '📅',
    popular: false,
    link: 'https://ziontechgroup.com/ai-scheduler-pro',
    benefits: ['Reduce scheduling time by 80%', 'Eliminate double bookings', 'Improve meeting attendance by 40%'],
    capabilities: ['Schedule 1000+ meetings daily', 'Support 50+ calendar types', 'Handle 20+ time zones'],
    roi: '140% ROI in 2 months',
    trial: '7-day free trial',
    marketPrice: '$120-300/month',
    technologies: ['Calendar APIs', 'AI Scheduling', 'Time Zone Logic', 'Automation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-password-manager',
    name: 'AI Password Manager',
    description: 'Secure password management with AI-powered security recommendations, breach monitoring, and multi-device synchronization.',
    features: [
      'Secure Storage',
      'Password Generation',
      'Breach Monitoring',
      'Multi-device Sync',
      'Security Alerts',
      'Team Sharing',
      '2FA Integration',
      'Dark Web Monitoring'
    ],
    pricing: { monthly: 39, yearly: 390, setup: 0 },
    category: 'Security',
    icon: '🔐',
    popular: false,
    link: 'https://ziontechgroup.com/ai-password-manager',
    benefits: ['Eliminate password reuse', 'Prevent 99% of account breaches', 'Save 2 hours per week'],
    capabilities: ['Store 10,000+ passwords', 'Monitor 100+ accounts', 'Generate 1000+ passwords daily'],
    roi: '80% ROI in 1 month',
    trial: '7-day free trial',
    marketPrice: '$50-150/month',
    technologies: ['Encryption', 'Security APIs', 'Multi-device Sync', 'Breach Monitoring'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation',
    description: 'Visual workflow builder with AI-powered process optimization and integration capabilities for maximum efficiency.',
    features: [
      'Visual Builder',
      'Process Optimization',
      'Integration Library',
      'Performance Analytics',
      'Custom Triggers',
      'Error Handling',
      'Team Collaboration',
      'API Management'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 199 },
    category: 'Automation',
    icon: '⚙️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    benefits: ['Automate 80% of repetitive tasks', 'Reduce errors by 95%', 'Save 20+ hours per week'],
    capabilities: ['Connect 500+ apps', 'Create 1000+ workflows', 'Process 1M+ actions daily'],
    roi: '400% ROI in 5 months',
    trial: '14-day free trial',
    marketPrice: '$400-1000/month',
    technologies: ['Workflow Engine', 'API Integration', 'Process Mining', 'Automation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },

  // Coming Soon Services
  {
    id: 'ai-voice-assistant-builder',
    name: 'AI Voice Assistant Builder',
    description: 'Create custom voice assistants for your business with natural language processing and multi-platform deployment.',
    features: [
      'Custom Voice Training',
      'Multi-language Support',
      'Integration APIs',
      'Analytics Dashboard',
      'Custom Wake Words',
      'Offline Capabilities',
      'Team Management',
      'White-label Options'
    ],
    pricing: { monthly: 149, yearly: 1490, setup: 299 },
    category: 'AI Tools',
    icon: '🎙️',
    comingSoon: true,
    link: 'https://ziontechgroup.com/ai-voice-assistant-builder',
    benefits: ['Create voice assistants in 1 hour', 'Deploy across 10+ platforms', 'Reduce support calls by 60%'],
    capabilities: ['Support 50+ languages', 'Handle 1000+ voice commands', 'Integrate with 100+ services'],
    roi: '250% ROI in 4 months',
    trial: '14-day free trial',
    marketPrice: '$300-800/month',
    technologies: ['Voice AI', 'NLP', 'Speech Recognition', 'Multi-platform APIs'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  },
  {
    id: 'ai-video-generator',
    name: 'AI Video Generator',
    description: 'Create professional videos from text prompts with AI-powered video generation, editing, and optimization.',
    features: [
      'Text-to-Video Generation',
      'Multiple Video Styles',
      'Voice Synthesis',
      'Background Music',
      'Subtitle Generation',
      'Brand Customization',
      'Batch Processing',
      'HD Export Options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 399 },
    category: 'Content Creation',
    icon: '🎬',
    comingSoon: true,
    link: 'https://ziontechgroup.com/ai-video-generator',
    benefits: ['Create videos 10x faster', 'Reduce production costs by 80%', 'Generate 100+ videos daily'],
    capabilities: ['Generate 4K videos', 'Support 20+ video styles', 'Process 1000+ videos daily'],
    roi: '300% ROI in 5 months',
    trial: '14-day free trial',
    marketPrice: '$500-1500/month',
    technologies: ['Video AI', 'Text-to-Video', 'Voice Synthesis', 'Video Processing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-tools',
    name: 'AI-Powered Business Tools',
    description: 'Intelligent tools that automate and optimize your business processes',
    icon: '🧠',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    services: microSaasServices.filter(s => s.category === 'AI Tools')
  },
  {
    id: 'marketing',
    name: 'Marketing & Content',
    description: 'AI-driven marketing tools for content creation, social media, and SEO',
    icon: '📈',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    services: microSaasServices.filter(s => ['Marketing', 'Content Creation', 'SEO'].includes(s.category))
  },
  {
    id: 'customer-service',
    name: 'Customer Experience',
    description: 'Tools to enhance customer support and engagement',
    icon: '👥',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    services: microSaasServices.filter(s => s.category === 'Customer Service')
  },
  {
    id: 'analytics',
    name: 'Analytics & Intelligence',
    description: 'Data-driven insights and business intelligence tools',
    icon: '📊',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    services: microSaasServices.filter(s => s.category === 'Analytics')
  },
  {
    id: 'finance',
    name: 'Financial Tools',
    description: 'AI-powered financial management and planning tools',
    icon: '💰',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    services: microSaasServices.filter(s => s.category === 'Finance')
  },
  {
    id: 'productivity',
    name: 'Productivity & Automation',
    description: 'Tools to streamline workflows and boost productivity',
    icon: '⚡',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    services: microSaasServices.filter(s => ['Productivity', 'Automation', 'Security'].includes(s.category))
  }
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: 99,
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 users',
      'Basic AI features',
      'Email support',
      'Standard integrations',
      'Basic analytics',
      '1 service included'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: 299,
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced AI features',
      'Priority support',
      'All integrations',
      'Advanced analytics',
      'Custom workflows',
      '3 services included'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Full AI capabilities',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'White-label options',
      'Unlimited services'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    role: 'CEO',
    content: 'AI Project Manager Pro transformed our productivity. We saw a 300% increase in project completion rates within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    company: 'Digital Marketing Co.',
    role: 'Marketing Director',
    content: 'The AI Social Media Manager saved us 20 hours per week and increased our engagement by 150%.',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    company: 'E-commerce Solutions',
    role: 'Operations Manager',
    content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg'
  }
];