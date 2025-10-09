export interface Service {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  icon: string;
  category: 'micro-saas' | 'ai-services' | 'it-services' | 'emerging-tech';
  subcategory?: string;
  pricing: {
    starting: number;
    currency: string;
    period: 'month' | 'year' | 'one-time';
    tiers?: {
      name: string;
      price: number;
      features: string[];
    }[];
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  marketPrice: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  targetAudience: string[];
  technicalSpecs: {
    integrations: string[];
    apiAvailable: boolean;
    sdkAvailable: boolean;
    deployment: string[];
    scalability: string;
  };
  demoUrl?: string;
  documentationUrl?: string;
  supportLevel: 'basic' | 'standard' | 'premium' | 'enterprise';
  popular: boolean;
  new: boolean;
  featured: boolean;
}

export const microSaasServices: Service[] = [
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with AI-powered insights and automation',
    detailedDescription: 'Revolutionary project management platform that uses AI to predict project risks, optimize resource allocation, and automate task assignments. Features include intelligent scheduling, budget forecasting, team performance analytics, and automated reporting.',
    icon: '📊',
    category: 'micro-saas',
    subcategory: 'productivity',
    pricing: {
      starting: 29,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Starter',
          price: 29,
          features: ['Up to 5 projects', 'Basic AI insights', 'Team collaboration', 'Mobile app']
        },
        {
          name: 'Professional',
          price: 79,
          features: ['Unlimited projects', 'Advanced AI analytics', 'Custom workflows', 'API access', 'Priority support']
        },
        {
          name: 'Enterprise',
          price: 199,
          features: ['Everything in Pro', 'White-label solution', 'Custom integrations', 'Dedicated support', 'SLA guarantee']
        }
      ]
    },
    features: [
      'AI-powered risk prediction',
      'Automated task assignment',
      'Real-time project analytics',
      'Resource optimization',
      'Budget forecasting',
      'Team performance insights',
      'Custom workflow automation',
      'Mobile and desktop apps',
      'API and webhook support',
      'Integration with 50+ tools'
    ],
    benefits: [
      'Reduce project delivery time by 40%',
      'Improve team productivity by 35%',
      'Cut project costs by 25%',
      'Increase project success rate to 95%',
      'Automate 80% of routine tasks'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction companies',
      'Consulting firms',
      'Event management',
      'Product development'
    ],
    marketPrice: {
      min: 25,
      max: 200,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Project managers', 'Team leads', 'Agencies', 'Consultants', 'Startups', 'Enterprises'],
    technicalSpecs: {
      integrations: ['Slack', 'Microsoft Teams', 'Jira', 'Asana', 'Trello', 'GitHub', 'GitLab', 'Monday.com'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise', 'Hybrid'],
      scalability: 'Unlimited users and projects'
    },
    demoUrl: 'https://ziontechgroup.com/ai-project-manager/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-project-manager',
    supportLevel: 'standard',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media management with AI content creation and scheduling',
    detailedDescription: 'Complete social media management solution powered by AI. Automatically creates engaging content, schedules posts across all platforms, analyzes performance, and optimizes posting times for maximum engagement.',
    icon: '📱',
    category: 'micro-saas',
    subcategory: 'marketing',
    pricing: {
      starting: 49,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Basic',
          price: 49,
          features: ['3 social accounts', 'AI content generation', 'Basic analytics', 'Auto-scheduling']
        },
        {
          name: 'Professional',
          price: 99,
          features: ['10 social accounts', 'Advanced AI features', 'Detailed analytics', 'Team collaboration']
        },
        {
          name: 'Agency',
          price: 199,
          features: ['Unlimited accounts', 'White-label', 'Client management', 'Advanced reporting']
        }
      ]
    },
    features: [
      'AI content generation for all platforms',
      'Smart scheduling optimization',
      'Hashtag research and optimization',
      'Competitor analysis',
      'Engagement tracking',
      'ROI measurement',
      'Team collaboration tools',
      'Client management dashboard',
      'White-label options',
      'API access'
    ],
    benefits: [
      'Save 20+ hours per week',
      'Increase engagement by 60%',
      'Grow followers by 40%',
      'Improve content quality',
      'Reduce social media costs by 50%'
    ],
    useCases: [
      'Social media agencies',
      'E-commerce businesses',
      'Content creators',
      'Marketing teams',
      'Small businesses',
      'Influencers'
    ],
    marketPrice: {
      min: 30,
      max: 300,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Social media managers', 'Marketing agencies', 'Content creators', 'Small businesses', 'E-commerce'],
    technicalSpecs: {
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud'],
      scalability: 'Unlimited accounts and posts'
    },
    demoUrl: 'https://ziontechgroup.com/ai-social-media-manager/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-social-media-manager',
    supportLevel: 'standard',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'AI-powered business intelligence with predictive analytics and automated insights',
    detailedDescription: 'Advanced analytics platform that uses machine learning to provide actionable business insights. Features include predictive analytics, automated reporting, anomaly detection, and custom dashboard creation.',
    icon: '📈',
    category: 'micro-saas',
    subcategory: 'analytics',
    pricing: {
      starting: 79,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Starter',
          price: 79,
          features: ['5 data sources', 'Basic AI insights', 'Standard reports', 'Email alerts']
        },
        {
          name: 'Professional',
          price: 149,
          features: ['20 data sources', 'Advanced AI analytics', 'Custom dashboards', 'API access']
        },
        {
          name: 'Enterprise',
          price: 299,
          features: ['Unlimited sources', 'Custom AI models', 'White-label', 'Dedicated support']
        }
      ]
    },
    features: [
      'Predictive analytics and forecasting',
      'Automated insight generation',
      'Real-time data visualization',
      'Anomaly detection',
      'Custom dashboard builder',
      'Automated reporting',
      'Data source integrations',
      'Mobile analytics app',
      'Team collaboration',
      'Advanced security'
    ],
    benefits: [
      'Make data-driven decisions 3x faster',
      'Identify opportunities 40% earlier',
      'Reduce reporting time by 80%',
      'Improve forecast accuracy by 60%',
      'Increase revenue by 25%'
    ],
    useCases: [
      'E-commerce analytics',
      'Marketing performance tracking',
      'Financial analysis',
      'Operations monitoring',
      'Customer behavior analysis',
      'Sales forecasting'
    ],
    marketPrice: {
      min: 50,
      max: 500,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Data analysts', 'Business intelligence teams', 'Marketing managers', 'C-level executives', 'Operations teams'],
    technicalSpecs: {
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Shopify', 'Stripe', 'MySQL', 'PostgreSQL', 'MongoDB'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited data sources and users'
    },
    demoUrl: 'https://ziontechgroup.com/ai-analytics-dashboard/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-analytics-dashboard',
    supportLevel: 'premium',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing with AI-powered personalization and automation',
    detailedDescription: 'Complete email marketing solution that uses AI to create personalized campaigns, optimize send times, segment audiences, and maximize deliverability. Features include drag-and-drop editor, A/B testing, and advanced analytics.',
    icon: '📧',
    category: 'micro-saas',
    subcategory: 'marketing',
    pricing: {
      starting: 39,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Starter',
          price: 39,
          features: ['5,000 contacts', 'AI personalization', 'Email templates', 'Basic analytics']
        },
        {
          name: 'Professional',
          price: 89,
          features: ['25,000 contacts', 'Advanced AI features', 'A/B testing', 'Automation workflows']
        },
        {
          name: 'Enterprise',
          price: 199,
          features: ['Unlimited contacts', 'Custom AI models', 'White-label', 'Dedicated IP']
        }
      ]
    },
    features: [
      'AI-powered personalization',
      'Smart send time optimization',
      'Advanced audience segmentation',
      'Drag-and-drop email builder',
      'A/B testing automation',
      'Deliverability optimization',
      'Advanced analytics and reporting',
      'Automation workflows',
      'Template library',
      'API and webhook support'
    ],
    benefits: [
      'Increase open rates by 45%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates by 30%',
      'Save 15+ hours per week',
      'Improve ROI by 200%'
    ],
    useCases: [
      'E-commerce email campaigns',
      'Newsletter marketing',
      'Lead nurturing',
      'Customer retention',
      'Product announcements',
      'Event marketing'
    ],
    marketPrice: {
      min: 20,
      max: 300,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Email marketers', 'Marketing agencies', 'E-commerce businesses', 'Content creators', 'SaaS companies'],
    technicalSpecs: {
      integrations: ['Shopify', 'WooCommerce', 'Salesforce', 'HubSpot', 'Mailchimp', 'Constant Contact'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud'],
      scalability: 'Unlimited contacts and sends'
    },
    demoUrl: 'https://ziontechgroup.com/ai-email-marketing/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-email-marketing',
    supportLevel: 'standard',
    popular: true,
    new: false,
    featured: false
  },
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 AI-powered customer support with natural language processing',
    detailedDescription: 'Advanced customer support chatbot that uses natural language processing to understand customer queries and provide accurate responses. Features include multi-language support, sentiment analysis, and seamless handoff to human agents.',
    icon: '🤖',
    category: 'micro-saas',
    subcategory: 'customer-service',
    pricing: {
      starting: 59,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Basic',
          price: 59,
          features: ['1,000 conversations/month', 'Basic AI responses', 'Email support', 'Standard integrations']
        },
        {
          name: 'Professional',
          price: 129,
          features: ['10,000 conversations/month', 'Advanced AI training', 'Live chat integration', 'Custom branding']
        },
        {
          name: 'Enterprise',
          price: 299,
          features: ['Unlimited conversations', 'Custom AI models', 'White-label', 'Dedicated support']
        }
      ]
    },
    features: [
      'Natural language understanding',
      'Multi-language support (50+ languages)',
      'Sentiment analysis',
      'Intent recognition',
      'Knowledge base integration',
      'Live chat handoff',
      'Custom branding',
      'Analytics and reporting',
      'API integration',
      'Mobile app support'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Handle 80% of queries automatically',
      'Improve response time to under 1 second',
      'Increase customer satisfaction by 40%',
      'Available 24/7 without breaks'
    ],
    useCases: [
      'E-commerce customer support',
      'SaaS product support',
      'Technical support',
      'FAQ automation',
      'Lead qualification',
      'Appointment booking'
    ],
    marketPrice: {
      min: 30,
      max: 500,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Customer support teams', 'E-commerce businesses', 'SaaS companies', 'Service providers', 'Healthcare', 'Education'],
    technicalSpecs: {
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited conversations and users'
    },
    demoUrl: 'https://ziontechgroup.com/ai-customer-support-bot/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-customer-support-bot',
    supportLevel: 'premium',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'AI-powered content creation for blogs, social media, and marketing materials',
    detailedDescription: 'Advanced content creation platform that uses GPT-4 and other AI models to generate high-quality content for blogs, social media, emails, and marketing materials. Features include SEO optimization, brand voice training, and multi-format output.',
    icon: '✍️',
    category: 'micro-saas',
    subcategory: 'content-creation',
    pricing: {
      starting: 29,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Writer',
          price: 29,
          features: ['10,000 words/month', 'Basic AI models', 'Standard templates', 'Email support']
        },
        {
          name: 'Creator',
          price: 79,
          features: ['50,000 words/month', 'Advanced AI models', 'Custom templates', 'Priority support']
        },
        {
          name: 'Agency',
          price: 199,
          features: ['Unlimited words', 'Custom AI training', 'White-label', 'API access']
        }
      ]
    },
    features: [
      'Multiple AI writing models',
      'SEO-optimized content',
      'Brand voice training',
      'Content templates library',
      'Plagiarism detection',
      'Multi-language support',
      'Content scheduling',
      'Team collaboration',
      'API access',
      'White-label options'
    ],
    benefits: [
      'Create content 10x faster',
      'Improve SEO rankings by 50%',
      'Maintain consistent brand voice',
      'Reduce content costs by 70%',
      'Scale content production infinitely'
    ],
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Email marketing',
      'Product descriptions',
      'Ad copy writing',
      'Technical documentation'
    ],
    marketPrice: {
      min: 20,
      max: 200,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Content creators', 'Marketing teams', 'Bloggers', 'E-commerce businesses', 'Agencies', 'Writers'],
    technicalSpecs: {
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud'],
      scalability: 'Unlimited content generation'
    },
    demoUrl: 'https://ziontechgroup.com/ai-content-generator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-content-generator',
    supportLevel: 'standard',
    popular: true,
    new: false,
    featured: false
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'AI-powered SEO analysis and optimization for better search rankings',
    detailedDescription: 'Comprehensive SEO platform that uses AI to analyze websites, identify optimization opportunities, and provide actionable recommendations. Features include keyword research, content optimization, technical SEO analysis, and competitor tracking.',
    icon: '🎯',
    category: 'micro-saas',
    subcategory: 'seo',
    pricing: {
      starting: 49,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Starter',
          price: 49,
          features: ['1 website', 'Basic AI analysis', 'Keyword research', 'Monthly reports']
        },
        {
          name: 'Professional',
          price: 99,
          features: ['5 websites', 'Advanced AI features', 'Competitor analysis', 'Weekly reports']
        },
        {
          name: 'Agency',
          price: 199,
          features: ['Unlimited websites', 'Custom AI models', 'White-label', 'API access']
        }
      ]
    },
    features: [
      'AI-powered keyword research',
      'Content optimization suggestions',
      'Technical SEO analysis',
      'Competitor tracking',
      'Ranking monitoring',
      'Backlink analysis',
      'Site speed optimization',
      'Mobile optimization',
      'Local SEO features',
      'Automated reporting'
    ],
    benefits: [
      'Improve search rankings by 60%',
      'Increase organic traffic by 80%',
      'Identify optimization opportunities',
      'Save 20+ hours per week',
      'Stay ahead of competitors'
    ],
    useCases: [
      'Website SEO optimization',
      'E-commerce SEO',
      'Local business SEO',
      'Content marketing',
      'Competitor analysis',
      'Technical SEO audits'
    ],
    marketPrice: {
      min: 30,
      max: 300,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['SEO specialists', 'Digital marketers', 'Web developers', 'Agencies', 'E-commerce businesses', 'Content creators'],
    technicalSpecs: {
      integrations: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud'],
      scalability: 'Unlimited websites and keywords'
    },
    demoUrl: 'https://ziontechgroup.com/ai-seo-optimizer/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-seo-optimizer',
    supportLevel: 'standard',
    popular: true,
    new: false,
    featured: false
  },
  {
    id: 'ai-invoice-generator',
    name: 'AI Invoice Generator',
    description: 'Automated invoice generation with AI-powered data extraction and processing',
    detailedDescription: 'Smart invoicing solution that uses AI to automatically extract data from contracts, emails, and documents to generate accurate invoices. Features include automated follow-ups, payment tracking, and financial reporting.',
    icon: '🧾',
    category: 'micro-saas',
    subcategory: 'finance',
    pricing: {
      starting: 19,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Basic',
          price: 19,
          features: ['50 invoices/month', 'Basic AI extraction', 'Standard templates', 'Email support']
        },
        {
          name: 'Professional',
          price: 49,
          features: ['500 invoices/month', 'Advanced AI features', 'Custom templates', 'Priority support']
        },
        {
          name: 'Business',
          price: 99,
          features: ['Unlimited invoices', 'Custom AI training', 'API access', 'White-label']
        }
      ]
    },
    features: [
      'AI-powered data extraction',
      'Automated invoice generation',
      'Payment tracking and reminders',
      'Multi-currency support',
      'Tax calculation',
      'Client portal',
      'Financial reporting',
      'Integration with accounting software',
      'Mobile app',
      'API access'
    ],
    benefits: [
      'Reduce invoicing time by 90%',
      'Eliminate manual data entry',
      'Improve payment collection by 40%',
      'Reduce billing errors by 95%',
      'Save 10+ hours per week'
    ],
    useCases: [
      'Freelancers and consultants',
      'Service-based businesses',
      'Agencies',
      'Contractors',
      'E-commerce businesses',
      'Professional services'
    ],
    marketPrice: {
      min: 15,
      max: 100,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Freelancers', 'Consultants', 'Small businesses', 'Agencies', 'Contractors', 'Service providers'],
    technicalSpecs: {
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe', 'PayPal', 'Wise', 'Bank APIs'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud'],
      scalability: 'Unlimited invoices and clients'
    },
    demoUrl: 'https://ziontechgroup.com/ai-invoice-generator/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-invoice-generator',
    supportLevel: 'basic',
    popular: false,
    new: true,
    featured: false
  },
  {
    id: 'ai-expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Intelligent expense tracking with receipt scanning and automated categorization',
    detailedDescription: 'Smart expense tracking app that uses AI to scan receipts, categorize expenses, and generate financial reports. Features include receipt OCR, automatic categorization, budget tracking, and tax preparation.',
    icon: '💰',
    category: 'micro-saas',
    subcategory: 'finance',
    pricing: {
      starting: 9,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Personal',
          price: 9,
          features: ['100 receipts/month', 'Basic categorization', 'Expense reports', 'Mobile app']
        },
        {
          name: 'Business',
          price: 29,
          features: ['1,000 receipts/month', 'Advanced AI features', 'Team management', 'API access']
        },
        {
          name: 'Enterprise',
          price: 79,
          features: ['Unlimited receipts', 'Custom AI training', 'White-label', 'Dedicated support']
        }
      ]
    },
    features: [
      'Receipt scanning with OCR',
      'Automatic expense categorization',
      'Budget tracking and alerts',
      'Tax preparation features',
      'Multi-currency support',
      'Team expense management',
      'Financial reporting',
      'Integration with accounting software',
      'Mobile app',
      'API access'
    ],
    benefits: [
      'Save 5+ hours per week',
      'Eliminate manual data entry',
      'Improve expense accuracy by 95%',
      'Simplify tax preparation',
      'Better budget control'
    ],
    useCases: [
      'Personal expense tracking',
      'Small business expenses',
      'Travel expense management',
      'Team expense tracking',
      'Tax preparation',
      'Budget planning'
    ],
    marketPrice: {
      min: 5,
      max: 50,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Individuals', 'Small businesses', 'Travelers', 'Teams', 'Accountants', 'Tax preparers'],
    technicalSpecs: {
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Expensify', 'Concur', 'Bank APIs', 'Credit card APIs'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud', 'Mobile'],
      scalability: 'Unlimited receipts and users'
    },
    demoUrl: 'https://ziontechgroup.com/ai-expense-tracker/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-expense-tracker',
    supportLevel: 'basic',
    popular: false,
    new: true,
    featured: false
  },
  {
    id: 'ai-time-tracker',
    name: 'AI Time Tracker',
    description: 'Intelligent time tracking with automatic activity detection and productivity insights',
    detailedDescription: 'Smart time tracking solution that uses AI to automatically detect work activities, track productivity, and provide insights. Features include automatic time logging, productivity analysis, and team performance tracking.',
    icon: '⏰',
    category: 'micro-saas',
    subcategory: 'productivity',
    pricing: {
      starting: 15,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Individual',
          price: 15,
          features: ['1 user', 'Basic AI tracking', 'Productivity insights', 'Mobile app']
        },
        {
          name: 'Team',
          price: 45,
          features: ['10 users', 'Advanced AI features', 'Team analytics', 'Admin dashboard']
        },
        {
          name: 'Enterprise',
          price: 99,
          features: ['Unlimited users', 'Custom AI models', 'White-label', 'API access']
        }
      ]
    },
    features: [
      'Automatic activity detection',
      'AI-powered time categorization',
      'Productivity insights and analytics',
      'Team performance tracking',
      'Project time tracking',
      'Idle time detection',
      'Screenshot monitoring (optional)',
      'Integration with project management tools',
      'Mobile and desktop apps',
      'API access'
    ],
    benefits: [
      'Increase productivity by 25%',
      'Save 2+ hours per week',
      'Improve time management',
      'Better project estimation',
      'Identify productivity bottlenecks'
    ],
    useCases: [
      'Freelancers and consultants',
      'Remote teams',
      'Project managers',
      'Agencies',
      'Software development teams',
      'Professional services'
    ],
    marketPrice: {
      min: 10,
      max: 100,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Freelancers', 'Remote workers', 'Project managers', 'Teams', 'Agencies', 'Consultants'],
    technicalSpecs: {
      integrations: ['Jira', 'Asana', 'Trello', 'Monday.com', 'Slack', 'Microsoft Teams', 'GitHub'],
      apiAvailable: true,
      sdkAvailable: false,
      deployment: ['Cloud', 'Desktop', 'Mobile'],
      scalability: 'Unlimited users and projects'
    },
    demoUrl: 'https://ziontechgroup.com/ai-time-tracker/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-time-tracker',
    supportLevel: 'standard',
    popular: false,
    new: true,
    featured: false
  }
];

export const aiServices: Service[] = [
  {
    id: 'ai-machine-learning-platform',
    name: 'AI Machine Learning Platform',
    description: 'Complete ML platform for building, training, and deploying AI models',
    detailedDescription: 'Enterprise-grade machine learning platform that enables data scientists and developers to build, train, and deploy AI models at scale. Features include automated model training, MLOps pipeline, and real-time inference.',
    icon: '🧠',
    category: 'ai-services',
    subcategory: 'machine-learning',
    pricing: {
      starting: 999,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Developer',
          price: 999,
          features: ['10 models', 'Basic compute', 'Standard support', 'Community forum']
        },
        {
          name: 'Team',
          price: 2999,
          features: ['50 models', 'Advanced compute', 'Priority support', 'Dedicated resources']
        },
        {
          name: 'Enterprise',
          price: 9999,
          features: ['Unlimited models', 'Custom infrastructure', '24/7 support', 'SLA guarantee']
        }
      ]
    },
    features: [
      'Automated model training',
      'MLOps pipeline automation',
      'Real-time model inference',
      'Model versioning and management',
      'A/B testing for models',
      'Auto-scaling infrastructure',
      'Multi-cloud deployment',
      'Model monitoring and alerting',
      'Collaborative workspace',
      'API and SDK access'
    ],
    benefits: [
      'Reduce model development time by 70%',
      'Improve model accuracy by 40%',
      'Scale AI operations 10x',
      'Reduce infrastructure costs by 50%',
      'Accelerate time-to-market'
    ],
    useCases: [
      'Predictive analytics',
      'Computer vision applications',
      'Natural language processing',
      'Recommendation systems',
      'Fraud detection',
      'Demand forecasting'
    ],
    marketPrice: {
      min: 500,
      max: 5000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Data scientists', 'ML engineers', 'AI researchers', 'Enterprises', 'Startups', 'Consultants'],
    technicalSpecs: {
      integrations: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise', 'Hybrid'],
      scalability: 'Unlimited models and compute'
    },
    demoUrl: 'https://ziontechgroup.com/ai-machine-learning-platform/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-machine-learning-platform',
    supportLevel: 'enterprise',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-computer-vision',
    name: 'AI Computer Vision Suite',
    description: 'Advanced computer vision solutions for image and video analysis',
    detailedDescription: 'Comprehensive computer vision platform that provides pre-trained models and custom training capabilities for image classification, object detection, facial recognition, and video analysis.',
    icon: '👁️',
    category: 'ai-services',
    subcategory: 'computer-vision',
    pricing: {
      starting: 499,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Starter',
          price: 499,
          features: ['1,000 API calls/month', 'Basic models', 'Standard support', 'Documentation']
        },
        {
          name: 'Professional',
          price: 1499,
          features: ['10,000 API calls/month', 'Advanced models', 'Priority support', 'Custom training']
        },
        {
          name: 'Enterprise',
          price: 4999,
          features: ['Unlimited calls', 'Custom models', '24/7 support', 'On-premise deployment']
        }
      ]
    },
    features: [
      'Image classification and recognition',
      'Object detection and tracking',
      'Facial recognition and analysis',
      'Video content analysis',
      'OCR and text extraction',
      'Custom model training',
      'Real-time processing',
      'Batch processing',
      'REST API and SDK',
      'Cloud and edge deployment'
    ],
    benefits: [
      'Automate visual inspection processes',
      'Improve accuracy by 95%',
      'Reduce processing time by 80%',
      'Enable real-time decision making',
      'Scale visual analysis operations'
    ],
    useCases: [
      'Quality control in manufacturing',
      'Security and surveillance',
      'Medical image analysis',
      'Retail analytics',
      'Autonomous vehicles',
      'Content moderation'
    ],
    marketPrice: {
      min: 200,
      max: 2000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Manufacturing', 'Healthcare', 'Security', 'Retail', 'Automotive', 'Media'],
    technicalSpecs: {
      integrations: ['OpenCV', 'TensorFlow', 'PyTorch', 'AWS Rekognition', 'Azure Computer Vision', 'Google Vision API'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'Edge', 'On-premise'],
      scalability: 'Unlimited processing capacity'
    },
    demoUrl: 'https://ziontechgroup.com/ai-computer-vision/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-computer-vision',
    supportLevel: 'premium',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'ai-natural-language-processing',
    name: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
    detailedDescription: 'Comprehensive NLP platform that provides pre-trained models and custom training for text analysis, sentiment analysis, language translation, named entity recognition, and text generation.',
    icon: '💬',
    category: 'ai-services',
    subcategory: 'natural-language-processing',
    pricing: {
      starting: 299,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Basic',
          price: 299,
          features: ['5,000 API calls/month', 'Basic models', 'Email support', 'Documentation']
        },
        {
          name: 'Professional',
          price: 899,
          features: ['25,000 API calls/month', 'Advanced models', 'Priority support', 'Custom training']
        },
        {
          name: 'Enterprise',
          price: 2999,
          features: ['Unlimited calls', 'Custom models', '24/7 support', 'Dedicated resources']
        }
      ]
    },
    features: [
      'Text sentiment analysis',
      'Named entity recognition',
      'Language translation (100+ languages)',
      'Text summarization',
      'Question answering',
      'Text classification',
      'Custom model training',
      'Real-time processing',
      'Batch processing',
      'Multi-language support'
    ],
    benefits: [
      'Understand customer sentiment in real-time',
      'Automate text processing workflows',
      'Improve content quality',
      'Enable multilingual applications',
      'Reduce manual text analysis by 90%'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Language translation',
      'Document processing',
      'Chatbot development',
      'Market research'
    ],
    marketPrice: {
      min: 100,
      max: 1000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['E-commerce', 'Media', 'Customer service', 'Research', 'Education', 'Government'],
    technicalSpecs: {
      integrations: ['OpenAI GPT', 'Hugging Face', 'spaCy', 'NLTK', 'Google Cloud NLP', 'AWS Comprehend'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise'],
      scalability: 'Unlimited text processing'
    },
    demoUrl: 'https://ziontechgroup.com/ai-natural-language-processing/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/ai-natural-language-processing',
    supportLevel: 'premium',
    popular: true,
    new: false,
    featured: false
  }
];

export const itServices: Service[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Complete cloud infrastructure setup, migration, and management services',
    detailedDescription: 'Comprehensive cloud infrastructure services including setup, migration, optimization, and ongoing management. We support AWS, Azure, and Google Cloud with 99.9% uptime guarantee.',
    icon: '☁️',
    category: 'it-services',
    subcategory: 'cloud',
    pricing: {
      starting: 999,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Basic',
          price: 999,
          features: ['Cloud setup', 'Basic monitoring', 'Email support', 'Monthly reports']
        },
        {
          name: 'Professional',
          price: 2999,
          features: ['Migration services', 'Advanced monitoring', 'Priority support', 'Weekly reports']
        },
        {
          name: 'Enterprise',
          price: 9999,
          features: ['Custom solutions', '24/7 monitoring', 'Dedicated support', 'SLA guarantee']
        }
      ]
    },
    features: [
      'Cloud architecture design',
      'Migration planning and execution',
      'Infrastructure optimization',
      'Security configuration',
      'Monitoring and alerting',
      'Backup and disaster recovery',
      'Cost optimization',
      'Compliance management',
      '24/7 support',
      'Performance tuning'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve performance by 60%',
      'Ensure 99.9% uptime',
      'Enhance security posture',
      'Scale infrastructure automatically'
    ],
    useCases: [
      'Application hosting',
      'Data storage and backup',
      'Development environments',
      'Disaster recovery',
      'Hybrid cloud solutions',
      'Multi-cloud strategies'
    ],
    marketPrice: {
      min: 500,
      max: 5000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Enterprises', 'Startups', 'SaaS companies', 'E-commerce', 'Healthcare', 'Finance'],
    technicalSpecs: {
      integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'Hybrid', 'Multi-cloud'],
      scalability: 'Unlimited scaling'
    },
    demoUrl: 'https://ziontechgroup.com/cloud-infrastructure/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/cloud-infrastructure',
    supportLevel: 'enterprise',
    popular: true,
    new: false,
    featured: true
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    description: 'Comprehensive cybersecurity solutions including threat detection, prevention, and response',
    detailedDescription: 'Complete cybersecurity platform that provides threat detection, vulnerability assessment, incident response, and compliance management. Features include 24/7 monitoring, automated threat response, and security training.',
    icon: '🛡️',
    category: 'it-services',
    subcategory: 'security',
    pricing: {
      starting: 1999,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Essential',
          price: 1999,
          features: ['Basic threat detection', 'Vulnerability scanning', 'Email support', 'Monthly reports']
        },
        {
          name: 'Advanced',
          price: 4999,
          features: ['Advanced threat detection', 'Incident response', 'Priority support', 'Weekly reports']
        },
        {
          name: 'Enterprise',
          price: 9999,
          features: ['Full security suite', '24/7 SOC', 'Dedicated support', 'SLA guarantee']
        }
      ]
    },
    features: [
      'Threat detection and prevention',
      'Vulnerability assessment',
      'Incident response',
      'Security monitoring',
      'Compliance management',
      'Security training',
      'Penetration testing',
      'Security audits',
      '24/7 SOC monitoring',
      'Automated response'
    ],
    benefits: [
      'Prevent 99.9% of cyber threats',
      'Reduce security incidents by 95%',
      'Ensure compliance with regulations',
      'Improve security posture',
      'Minimize business disruption'
    ],
    useCases: [
      'Enterprise security',
      'Healthcare compliance',
      'Financial services',
      'Government agencies',
      'E-commerce security',
      'Data protection'
    ],
    marketPrice: {
      min: 1000,
      max: 10000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Enterprises', 'Healthcare', 'Finance', 'Government', 'E-commerce', 'SaaS companies'],
    technicalSpecs: {
      integrations: ['SIEM', 'EDR', 'Firewall', 'IDS/IPS', 'Vulnerability scanners', 'Compliance tools'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'On-premise', 'Hybrid'],
      scalability: 'Unlimited endpoints and users'
    },
    demoUrl: 'https://ziontechgroup.com/cybersecurity-suite/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/cybersecurity-suite',
    supportLevel: 'enterprise',
    popular: true,
    new: false,
    featured: true
  }
];

export const emergingTechServices: Service[] = [
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Quantum computing services for complex problem solving and optimization',
    detailedDescription: 'Cutting-edge quantum computing solutions for optimization problems, cryptography, drug discovery, and financial modeling. We provide access to quantum hardware and develop custom quantum algorithms.',
    icon: '⚛️',
    category: 'emerging-tech',
    subcategory: 'quantum',
    pricing: {
      starting: 9999,
      currency: 'USD',
      period: 'month',
      tiers: [
        {
          name: 'Research',
          price: 9999,
          features: ['Quantum simulator access', 'Basic algorithms', 'Research support', 'Documentation']
        },
        {
          name: 'Development',
          price: 29999,
          features: ['Quantum hardware access', 'Custom algorithms', 'Priority support', 'Dedicated resources']
        },
        {
          name: 'Enterprise',
          price: 99999,
          features: ['Full quantum access', 'Custom solutions', '24/7 support', 'SLA guarantee']
        }
      ]
    },
    features: [
      'Quantum algorithm development',
      'Quantum hardware access',
      'Optimization problem solving',
      'Cryptography solutions',
      'Quantum simulation',
      'Research collaboration',
      'Custom quantum applications',
      'Performance optimization',
      'Quantum education',
      'Consulting services'
    ],
    benefits: [
      'Solve complex optimization problems',
      'Achieve quantum advantage',
      'Accelerate research and development',
      'Enable breakthrough discoveries',
      'Future-proof your technology'
    ],
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Cryptography',
      'Optimization problems',
      'Machine learning',
      'Scientific research'
    ],
    marketPrice: {
      min: 5000,
      max: 50000,
      currency: 'USD',
      period: 'month'
    },
    targetAudience: ['Research institutions', 'Pharmaceutical companies', 'Financial services', 'Government', 'Tech companies', 'Universities'],
    technicalSpecs: {
      integrations: ['IBM Quantum', 'Google Quantum AI', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti', 'IonQ'],
      apiAvailable: true,
      sdkAvailable: true,
      deployment: ['Cloud', 'Hybrid'],
      scalability: 'Unlimited quantum resources'
    },
    demoUrl: 'https://ziontechgroup.com/quantum-computing/demo',
    documentationUrl: 'https://docs.ziontechgroup.com/quantum-computing',
    supportLevel: 'enterprise',
    popular: false,
    new: true,
    featured: true
  }
];

export const allServices = [
  ...microSaasServices,
  ...aiServices,
  ...itServices,
  ...emergingTechServices
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return allServices.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return allServices.filter(service => service.featured);
};

export const getPopularServices = (): Service[] => {
  return allServices.filter(service => service.popular);
};

export const getNewServices = (): Service[] => {
  return allServices.filter(service => service.new);
};