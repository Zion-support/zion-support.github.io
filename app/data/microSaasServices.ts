export interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    freeTrial: boolean;
    freeTrialDays: number;
  };
  category: string;
  icon: string;
  popular: boolean;
  marketPrice: number;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  support: string[];
  launchDate: string;
  lastUpdated: string;
  rating: number;
  reviews: number;
  website: string;
  demo: string;
}

export const microSaasServices: MicroSaasService[] = [
  // Productivity & Business Tools
  {
    id: 'ai-writing-assistant',
    name: 'AI Writing Assistant Pro',
    description: 'Advanced AI-powered writing tool with 50+ templates, plagiarism detection, and multi-language support for content creators, marketers, and businesses.',
    features: [
      '50+ Professional Templates',
      'Multi-language Support (25+ languages)',
      'Plagiarism Detection & Prevention',
      'SEO Optimization Suggestions',
      'Tone & Style Adjustment',
      'Grammar & Spell Check',
      'Content Planning & Outlines',
      'Team Collaboration Tools',
      'Brand Voice Training',
      'Performance Analytics'
    ],
    pricing: {
      monthly: 29,
      yearly: 290,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Productivity',
    icon: '✍️',
    popular: true,
    marketPrice: 39,
    benefits: [
      'Save 10+ hours per week on content creation',
      'Improve content quality by 300%',
      'Reduce editing time by 80%',
      'Increase SEO rankings by 150%'
    ],
    useCases: [
      'Blog posts and articles',
      'Marketing copy and ads',
      'Email campaigns',
      'Social media content',
      'Product descriptions',
      'Technical documentation'
    ],
    integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Slack', 'Google Docs', 'Notion'],
    support: ['24/7 Chat Support', 'Email Support', 'Video Tutorials', 'Live Webinars'],
    launchDate: '2024-01-15',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 1247,
    website: 'https://ziontechgroup.com/ai-writing-assistant',
    demo: 'https://ziontechgroup.com/demo/ai-writing-assistant'
  },
  {
    id: 'smart-analytics',
    name: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence platform with AI-powered insights, automated reporting, and predictive forecasting for data-driven decisions.',
    features: [
      'Real-time Data Visualization',
      'AI-Powered Insights & Predictions',
      'Custom Dashboard Builder',
      'Automated Report Generation',
      '100+ Data Source Integrations',
      'Advanced Filtering & Segmentation',
      'Mobile App Access',
      'Team Collaboration',
      'White-label Options',
      'API Access'
    ],
    pricing: {
      monthly: 49,
      yearly: 490,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Analytics',
    icon: '📊',
    popular: true,
    marketPrice: 79,
    benefits: [
      'Make data-driven decisions 5x faster',
      'Identify trends before competitors',
      'Reduce manual reporting by 90%',
      'Increase revenue by 25% through insights'
    ],
    useCases: [
      'Sales performance tracking',
      'Marketing campaign analysis',
      'Customer behavior insights',
      'Financial reporting',
      'Operations monitoring',
      'KPI tracking'
    ],
    integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'Facebook Ads', 'Google Ads'],
    support: ['24/7 Support', 'Dedicated Account Manager', 'Training Sessions', 'Custom Onboarding'],
    launchDate: '2024-02-01',
    lastUpdated: '2024-12-01',
    rating: 4.9,
    reviews: 892,
    website: 'https://ziontechgroup.com/smart-analytics',
    demo: 'https://ziontechgroup.com/demo/smart-analytics'
  },
  {
    id: 'ai-scheduler',
    name: 'AI Smart Scheduler',
    description: 'Intelligent scheduling system with calendar optimization, meeting coordination, and time management for teams and individuals.',
    features: [
      'Smart Meeting Scheduling',
      'Calendar Optimization',
      'Time Zone Management',
      'Meeting Room Booking',
      'Recurring Event Management',
      'Conflict Resolution',
      'Team Availability Tracking',
      'Integration with Major Calendars',
      'Mobile App',
      'Custom Scheduling Rules'
    ],
    pricing: {
      monthly: 19,
      yearly: 190,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Productivity',
    icon: '📅',
    popular: false,
    marketPrice: 29,
    benefits: [
      'Save 2+ hours per week on scheduling',
      'Reduce scheduling conflicts by 95%',
      'Improve meeting attendance by 40%',
      'Optimize calendar efficiency by 60%'
    ],
    useCases: [
      'Team meeting coordination',
      'Client appointment booking',
      'Interview scheduling',
      'Event planning',
      'Resource booking',
      'Personal time management'
    ],
    integrations: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Zoom', 'Teams', 'Slack'],
    support: ['Email Support', 'Chat Support', 'Video Tutorials', 'User Guide'],
    launchDate: '2024-01-20',
    lastUpdated: '2024-11-15',
    rating: 4.6,
    reviews: 456,
    website: 'https://ziontechgroup.com/ai-scheduler',
    demo: 'https://ziontechgroup.com/demo/ai-scheduler'
  },
  {
    id: 'expense-tracker',
    name: 'AI Expense Tracker',
    description: 'Intelligent expense management with receipt scanning, auto-categorization, and budget insights for individuals and small businesses.',
    features: [
      'Receipt Scanning & OCR',
      'Auto-categorization',
      'Budget Planning & Tracking',
      'Tax Preparation Support',
      'Multi-currency Support',
      'Expense Approval Workflows',
      'Mobile Receipt Capture',
      'Integration with Accounting Software',
      'Spending Analytics',
      'Receipt Storage & Backup'
    ],
    pricing: {
      monthly: 15,
      yearly: 150,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Finance',
    icon: '💰',
    popular: false,
    marketPrice: 25,
    benefits: [
      'Save 5+ hours per month on expense tracking',
      'Reduce expense errors by 90%',
      'Improve budget adherence by 50%',
      'Simplify tax preparation by 80%'
    ],
    useCases: [
      'Business expense management',
      'Personal finance tracking',
      'Travel expense reporting',
      'Tax preparation',
      'Budget planning',
      'Receipt organization'
    ],
    integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Sage', 'Bank APIs', 'Credit Cards'],
    support: ['Email Support', 'Chat Support', 'Video Tutorials', 'Tax Support'],
    launchDate: '2024-03-01',
    lastUpdated: '2024-11-20',
    rating: 4.7,
    reviews: 623,
    website: 'https://ziontechgroup.com/expense-tracker',
    demo: 'https://ziontechgroup.com/demo/expense-tracker'
  },
  {
    id: 'task-manager-pro',
    name: 'Task Manager Pro',
    description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking for enhanced productivity.',
    features: [
      'AI Task Prioritization',
      'Team Collaboration Tools',
      'Project Templates',
      'Time Tracking',
      'Progress Analytics',
      'Deadline Management',
      'Custom Workflows',
      'Mobile App',
      'Integration APIs',
      'Automated Notifications'
    ],
    pricing: {
      monthly: 39,
      yearly: 390,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Productivity',
    icon: '✅',
    popular: true,
    marketPrice: 59,
    benefits: [
      'Increase team productivity by 40%',
      'Reduce project delays by 60%',
      'Improve task completion rates by 35%',
      'Save 3+ hours per week on planning'
    ],
    useCases: [
      'Project management',
      'Team task coordination',
      'Personal productivity',
      'Client work tracking',
      'Agile development',
      'Event planning'
    ],
    integrations: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Jira', 'Trello', 'Asana'],
    support: ['24/7 Support', 'Training Sessions', 'Custom Setup', 'API Documentation'],
    launchDate: '2024-02-15',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 789,
    website: 'https://ziontechgroup.com/task-manager-pro',
    demo: 'https://ziontechgroup.com/demo/task-manager-pro'
  },
  {
    id: 'crm-lite',
    name: 'CRM Lite',
    description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation for small to medium businesses.',
    features: [
      'AI Lead Scoring',
      'Contact Management',
      'Sales Pipeline Tracking',
      'Email Integration',
      'Mobile App',
      'Custom Fields',
      'Automated Follow-ups',
      'Sales Analytics',
      'Team Collaboration',
      'API Access'
    ],
    pricing: {
      monthly: 59,
      yearly: 590,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Sales',
    icon: '👥',
    popular: true,
    marketPrice: 99,
    benefits: [
      'Increase sales by 30%',
      'Improve lead conversion by 50%',
      'Reduce sales cycle by 25%',
      'Save 4+ hours per week on admin'
    ],
    useCases: [
      'Lead management',
      'Sales pipeline tracking',
      'Customer relationship management',
      'Sales team coordination',
      'Follow-up automation',
      'Sales reporting'
    ],
    integrations: ['Gmail', 'Outlook', 'Slack', 'Zapier', 'Mailchimp', 'Stripe'],
    support: ['24/7 Support', 'Dedicated Success Manager', 'Training', 'Custom Setup'],
    launchDate: '2024-01-10',
    lastUpdated: '2024-11-25',
    rating: 4.7,
    reviews: 945,
    website: 'https://ziontechgroup.com/crm-lite',
    demo: 'https://ziontechgroup.com/demo/crm-lite'
  },
  {
    id: 'email-optimizer',
    name: 'AI Email Optimizer',
    description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing for maximum engagement.',
    features: [
      'AI Subject Line Generation',
      'Send Time Optimization',
      'A/B Testing Automation',
      'Open Rate Tracking',
      'Spam Analysis',
      'Content Optimization',
      'Personalization Engine',
      'Performance Analytics',
      'Integration APIs',
      'Team Collaboration'
    ],
    pricing: {
      monthly: 25,
      yearly: 250,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Marketing',
    icon: '📧',
    popular: false,
    marketPrice: 39,
    benefits: [
      'Increase open rates by 40%',
      'Improve click-through rates by 60%',
      'Reduce unsubscribe rates by 50%',
      'Save 2+ hours per week on email optimization'
    ],
    useCases: [
      'Email marketing campaigns',
      'Newsletter optimization',
      'Transactional emails',
      'Lead nurturing',
      'Customer retention',
      'Sales follow-ups'
    ],
    integrations: ['Mailchimp', 'Constant Contact', 'SendGrid', 'HubSpot', 'Salesforce', 'Zapier'],
    support: ['Email Support', 'Chat Support', 'Video Tutorials', 'Best Practices Guide'],
    launchDate: '2024-03-15',
    lastUpdated: '2024-11-10',
    rating: 4.5,
    reviews: 312,
    website: 'https://ziontechgroup.com/email-optimizer',
    demo: 'https://ziontechgroup.com/demo/email-optimizer'
  },
  {
    id: 'social-media-manager',
    name: 'AI Social Media Manager',
    description: 'AI-driven social media management with content creation, scheduling, and performance analytics across all major platforms.',
    features: [
      'AI Content Creation',
      'Multi-platform Scheduling',
      'Performance Analytics',
      'Engagement Tracking',
      'Hashtag Optimization',
      'Competitor Analysis',
      'Content Calendar',
      'Team Collaboration',
      'Mobile App',
      'White-label Options'
    ],
    pricing: {
      monthly: 45,
      yearly: 450,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Marketing',
    icon: '📱',
    popular: true,
    marketPrice: 69,
    benefits: [
      'Increase engagement by 80%',
      'Save 5+ hours per week on social media',
      'Improve content performance by 120%',
      'Grow followers by 200%'
    ],
    useCases: [
      'Social media marketing',
      'Content planning',
      'Brand management',
      'Community engagement',
      'Influencer outreach',
      'Social selling'
    ],
    integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'],
    support: ['24/7 Support', 'Strategy Consultation', 'Training Sessions', 'Content Templates'],
    launchDate: '2024-02-20',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 678,
    website: 'https://ziontechgroup.com/social-media-manager',
    demo: 'https://ziontechgroup.com/demo/social-media-manager'
  },
  {
    id: 'ai-design-studio',
    name: 'AI Design Studio',
    description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools and professional templates.',
    features: [
      'AI Logo Generation',
      'Template Library (1000+ designs)',
      'Brand Kit Management',
      'Auto-resize for All Platforms',
      'Collaborative Design Tools',
      'Stock Photo Integration',
      'Vector Graphics Editor',
      'Export in Multiple Formats',
      'White-label Options',
      'API Access'
    ],
    pricing: {
      monthly: 35,
      yearly: 350,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Design',
    icon: '🎨',
    popular: true,
    marketPrice: 59,
    benefits: [
      'Create professional designs in minutes',
      'Save 10+ hours per week on design work',
      'Reduce design costs by 80%',
      'Maintain brand consistency across all materials'
    ],
    useCases: [
      'Logo design',
      'Marketing materials',
      'Social media graphics',
      'Website mockups',
      'Print materials',
      'Brand identity'
    ],
    integrations: ['Canva', 'Adobe Creative Suite', 'Figma', 'Sketch', 'Slack', 'Dropbox'],
    support: ['24/7 Support', 'Design Consultation', 'Video Tutorials', 'Template Library'],
    launchDate: '2024-01-25',
    lastUpdated: '2024-11-30',
    rating: 4.7,
    reviews: 523,
    website: 'https://ziontechgroup.com/ai-design-studio',
    demo: 'https://ziontechgroup.com/demo/ai-design-studio'
  },
  {
    id: 'landing-page-builder',
    name: 'AI Landing Page Builder',
    description: 'Build high-converting landing pages with AI optimization, A/B testing, and conversion tracking for maximum ROI.',
    features: [
      'Drag-and-drop Builder',
      'AI Conversion Optimization',
      'A/B Testing Tools',
      'Mobile Responsive Design',
      'Conversion Tracking',
      'Template Library (500+ designs)',
      'Form Builder',
      'Analytics Integration',
      'SEO Optimization',
      'White-label Options'
    ],
    pricing: {
      monthly: 29,
      yearly: 290,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Marketing',
    icon: '🌐',
    popular: false,
    marketPrice: 49,
    benefits: [
      'Increase conversion rates by 150%',
      'Build landing pages in 30 minutes',
      'Reduce bounce rates by 40%',
      'Save 8+ hours per week on page creation'
    ],
    useCases: [
      'Marketing campaigns',
      'Product launches',
      'Lead generation',
      'Event promotion',
      'E-commerce pages',
      'Service offerings'
    ],
    integrations: ['Google Analytics', 'Facebook Pixel', 'Mailchimp', 'HubSpot', 'Zapier', 'Stripe'],
    support: ['Email Support', 'Chat Support', 'Video Tutorials', 'Conversion Optimization Guide'],
    launchDate: '2024-03-01',
    lastUpdated: '2024-11-15',
    rating: 4.6,
    reviews: 387,
    website: 'https://ziontechgroup.com/landing-page-builder',
    demo: 'https://ziontechgroup.com/demo/landing-page-builder'
  },
  {
    id: 'seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'AI-powered SEO analysis and optimization with keyword research, content suggestions, and ranking tracking for better search visibility.',
    features: [
      'Keyword Research & Analysis',
      'On-page SEO Optimization',
      'Content Suggestions',
      'Ranking Tracking',
      'Competitor Analysis',
      'Technical SEO Audits',
      'Local SEO Tools',
      'Backlink Analysis',
      'Performance Reports',
      'White-label Options'
    ],
    pricing: {
      monthly: 49,
      yearly: 490,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Marketing',
    icon: '🔍',
    popular: true,
    marketPrice: 79,
    benefits: [
      'Improve search rankings by 200%',
      'Increase organic traffic by 150%',
      'Identify 100+ keyword opportunities',
      'Save 6+ hours per week on SEO tasks'
    ],
    useCases: [
      'Website SEO optimization',
      'Content marketing',
      'Local business promotion',
      'E-commerce SEO',
      'Blog optimization',
      'Competitive analysis'
    ],
    integrations: ['Google Search Console', 'Google Analytics', 'WordPress', 'Shopify', 'Wix', 'Squarespace'],
    support: ['24/7 Support', 'SEO Consultation', 'Training Sessions', 'Optimization Reports'],
    launchDate: '2024-02-10',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 756,
    website: 'https://ziontechgroup.com/seo-optimizer',
    demo: 'https://ziontechgroup.com/demo/seo-optimizer'
  },
  {
    id: 'ad-campaign-manager',
    name: 'AI Ad Campaign Manager',
    description: 'Automated ad campaign management with AI optimization across Google, Facebook, LinkedIn, and other platforms for maximum ROI.',
    features: [
      'Multi-platform Ad Management',
      'AI Bid Optimization',
      'Audience Targeting',
      'Creative Testing',
      'Performance Analytics',
      'Budget Management',
      'Automated Rules',
      'A/B Testing',
      'Conversion Tracking',
      'White-label Options'
    ],
    pricing: {
      monthly: 79,
      yearly: 790,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Marketing',
    icon: '📈',
    popular: true,
    marketPrice: 129,
    benefits: [
      'Reduce cost per acquisition by 40%',
      'Increase ROAS by 200%',
      'Save 10+ hours per week on ad management',
      'Improve campaign performance by 150%'
    ],
    useCases: [
      'Google Ads management',
      'Facebook advertising',
      'LinkedIn campaigns',
      'E-commerce ads',
      'Lead generation',
      'Brand awareness'
    ],
    integrations: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads', 'Snapchat Ads', 'Twitter Ads'],
    support: ['24/7 Support', 'Campaign Strategy', 'Training Sessions', 'Performance Reviews'],
    launchDate: '2024-01-30',
    lastUpdated: '2024-11-20',
    rating: 4.9,
    reviews: 892,
    website: 'https://ziontechgroup.com/ad-campaign-manager',
    demo: 'https://ziontechgroup.com/demo/ad-campaign-manager'
  },
  // Developer Tools
  {
    id: 'code-assistant',
    name: 'AI Code Assistant',
    description: 'AI-powered code completion, debugging, and optimization for multiple programming languages with intelligent suggestions.',
    features: [
      'Code Completion & Suggestions',
      'Bug Detection & Fixes',
      'Code Optimization',
      'Multi-language Support (20+ languages)',
      'Documentation Generation',
      'Code Review Assistance',
      'Refactoring Suggestions',
      'Security Vulnerability Detection',
      'Performance Analysis',
      'Team Collaboration'
    ],
    pricing: {
      monthly: 39,
      yearly: 390,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Development',
    icon: '💻',
    popular: true,
    marketPrice: 59,
    benefits: [
      'Increase coding speed by 50%',
      'Reduce bugs by 70%',
      'Improve code quality by 80%',
      'Save 5+ hours per week on debugging'
    ],
    useCases: [
      'Software development',
      'Code review',
      'Debugging assistance',
      'Documentation writing',
      'Code optimization',
      'Learning new languages'
    ],
    integrations: ['VS Code', 'IntelliJ', 'Sublime Text', 'Atom', 'Vim', 'GitHub', 'GitLab'],
    support: ['24/7 Support', 'Developer Community', 'Documentation', 'Video Tutorials'],
    launchDate: '2024-02-05',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 1123,
    website: 'https://ziontechgroup.com/code-assistant',
    demo: 'https://ziontechgroup.com/demo/code-assistant'
  },
  {
    id: 'api-builder',
    name: 'AI API Builder',
    description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools for seamless integration.',
    features: [
      'Visual API Designer',
      'Auto Documentation Generation',
      'API Testing Tools',
      'Version Control',
      'Rate Limiting',
      'Authentication Management',
      'Monitoring & Analytics',
      'SDK Generation',
      'Integration Testing',
      'White-label Options'
    ],
    pricing: {
      monthly: 59,
      yearly: 590,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Development',
    icon: '🔧',
    popular: false,
    marketPrice: 99,
    benefits: [
      'Build APIs 3x faster',
      'Reduce API development time by 60%',
      'Improve API documentation quality by 90%',
      'Save 8+ hours per week on API management'
    ],
    useCases: [
      'REST API development',
      'GraphQL APIs',
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Webhook management'
    ],
    integrations: ['Postman', 'Swagger', 'Insomnia', 'GitHub', 'GitLab', 'AWS', 'Azure'],
    support: ['24/7 Support', 'API Consultation', 'Training Sessions', 'Best Practices Guide'],
    launchDate: '2024-03-10',
    lastUpdated: '2024-11-25',
    rating: 4.7,
    reviews: 456,
    website: 'https://ziontechgroup.com/api-builder',
    demo: 'https://ziontechgroup.com/demo/api-builder'
  },
  {
    id: 'bug-tracker-pro',
    name: 'Bug Tracker Pro',
    description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions for development teams.',
    features: [
      'AI Issue Detection',
      'Priority Scoring',
      'Resolution Suggestions',
      'Team Collaboration',
      'Integration APIs',
      'Custom Workflows',
      'Sprint Planning',
      'Progress Tracking',
      'Mobile App',
      'White-label Options'
    ],
    pricing: {
      monthly: 25,
      yearly: 250,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Development',
    icon: '🐛',
    popular: false,
    marketPrice: 39,
    benefits: [
      'Reduce bug resolution time by 50%',
      'Improve bug detection by 80%',
      'Increase team productivity by 35%',
      'Save 3+ hours per week on bug management'
    ],
    useCases: [
      'Software bug tracking',
      'Quality assurance',
      'Sprint management',
      'Customer support',
      'Feature requests',
      'Project management'
    ],
    integrations: ['Jira', 'GitHub', 'GitLab', 'Slack', 'Microsoft Teams', 'Trello'],
    support: ['Email Support', 'Chat Support', 'Video Tutorials', 'Integration Guide'],
    launchDate: '2024-02-25',
    lastUpdated: '2024-11-15',
    rating: 4.6,
    reviews: 289,
    website: 'https://ziontechgroup.com/bug-tracker-pro',
    demo: 'https://ziontechgroup.com/demo/bug-tracker-pro'
  },
  {
    id: 'doc-generator',
    name: 'AI Doc Generator',
    description: 'Automatically generate technical documentation, API docs, and user guides from code with AI-powered analysis.',
    features: [
      'Auto Documentation from Code',
      'API Documentation Generation',
      'User Guide Creation',
      'Multiple Output Formats',
      'Code Comment Analysis',
      'Interactive Documentation',
      'Version Control Integration',
      'Team Collaboration',
      'Custom Templates',
      'White-label Options'
    ],
    pricing: {
      monthly: 19,
      yearly: 190,
      freeTrial: true,
      freeTrialDays: 14
    },
    category: 'Development',
    icon: '📚',
    popular: false,
    marketPrice: 29,
    benefits: [
      'Generate docs 5x faster',
      'Reduce documentation time by 80%',
      'Improve doc quality by 90%',
      'Save 4+ hours per week on documentation'
    ],
    useCases: [
      'API documentation',
      'Code documentation',
      'User manuals',
      'Technical guides',
      'Onboarding materials',
      'Project documentation'
    ],
    integrations: ['GitHub', 'GitLab', 'Bitbucket', 'Confluence', 'Notion', 'Slack'],
    support: ['Email Support', 'Video Tutorials', 'Template Library', 'Best Practices Guide'],
    launchDate: '2024-03-20',
    lastUpdated: '2024-11-10',
    rating: 4.5,
    reviews: 234,
    website: 'https://ziontechgroup.com/doc-generator',
    demo: 'https://ziontechgroup.com/demo/doc-generator'
  },
  // Healthcare & Medical
  {
    id: 'medical-records-manager',
    name: 'Medical Records Manager',
    description: 'HIPAA-compliant medical records management with AI-powered data extraction, analysis, and patient portal integration.',
    features: [
      'HIPAA Compliant Storage',
      'AI Data Extraction',
      'Patient Portal',
      'Medical Image Analysis',
      'Prescription Management',
      'Appointment Scheduling',
      'Insurance Integration',
      'Billing Integration',
      'Mobile App',
      'API Access'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Healthcare',
    icon: '🏥',
    popular: true,
    marketPrice: 499,
    benefits: [
      'Reduce administrative time by 60%',
      'Improve patient care by 40%',
      'Ensure HIPAA compliance 100%',
      'Save 8+ hours per week on record management'
    ],
    useCases: [
      'Medical practices',
      'Hospitals',
      'Clinics',
      'Specialists',
      'Telemedicine',
      'Patient care coordination'
    ],
    integrations: ['Epic', 'Cerner', 'Allscripts', 'eClinicalWorks', 'NextGen', 'Stripe'],
    support: ['24/7 Support', 'HIPAA Compliance Support', 'Training', 'Custom Setup'],
    launchDate: '2024-01-05',
    lastUpdated: '2024-12-01',
    rating: 4.9,
    reviews: 445,
    website: 'https://ziontechgroup.com/medical-records-manager',
    demo: 'https://ziontechgroup.com/demo/medical-records-manager'
  },
  {
    id: 'ai-accounting-assistant',
    name: 'AI Accounting Assistant',
    description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting for small to medium businesses.',
    features: [
      'Automated Bookkeeping',
      'Tax Preparation',
      'Financial Reporting',
      'Expense Tracking',
      'Invoice Management',
      'Payroll Integration',
      'Bank Reconciliation',
      'Compliance Monitoring',
      'Mobile App',
      'White-label Options'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Finance',
    icon: '📊',
    popular: true,
    marketPrice: 249,
    benefits: [
      'Reduce accounting time by 70%',
      'Improve accuracy by 95%',
      'Ensure tax compliance 100%',
      'Save 10+ hours per week on accounting'
    ],
    useCases: [
      'Small business accounting',
      'Freelancer finances',
      'Tax preparation',
      'Financial reporting',
      'Expense management',
      'Payroll processing'
    ],
    integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Sage', 'Stripe', 'PayPal', 'Bank APIs'],
    support: ['24/7 Support', 'Tax Support', 'Training Sessions', 'Compliance Support'],
    launchDate: '2024-01-12',
    lastUpdated: '2024-11-30',
    rating: 4.8,
    reviews: 567,
    website: 'https://ziontechgroup.com/ai-accounting-assistant',
    demo: 'https://ziontechgroup.com/demo/ai-accounting-assistant'
  },
  {
    id: 'property-management-ai',
    name: 'Property Management AI',
    description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization for real estate professionals.',
    features: [
      'Tenant Screening & Background Checks',
      'Maintenance Scheduling',
      'Rent Optimization',
      'Property Analytics',
      'Tenant Portal',
      'Lease Management',
      'Financial Reporting',
      'Mobile App',
      'Integration APIs',
      'White-label Options'
    ],
    pricing: {
      monthly: 179,
      yearly: 1790,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Real Estate',
    icon: '🏠',
    popular: false,
    marketPrice: 299,
    benefits: [
      'Increase rental income by 20%',
      'Reduce vacancy time by 40%',
      'Improve tenant satisfaction by 60%',
      'Save 6+ hours per week on management'
    ],
    useCases: [
      'Rental property management',
      'Commercial real estate',
      'HOA management',
      'Property investment',
      'Tenant relations',
      'Maintenance coordination'
    ],
    integrations: ['Zillow', 'Apartments.com', 'RentSpree', 'Stripe', 'QuickBooks', 'Slack'],
    support: ['24/7 Support', 'Property Management Consultation', 'Training', 'Custom Setup'],
    launchDate: '2024-02-08',
    lastUpdated: '2024-11-20',
    rating: 4.7,
    reviews: 234,
    website: 'https://ziontechgroup.com/property-management-ai',
    demo: 'https://ziontechgroup.com/demo/property-management-ai'
  },
  {
    id: 'legal-document-manager',
    name: 'Legal Document Manager',
    description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment for law firms and businesses.',
    features: [
      'Contract Analysis & Review',
      'Compliance Tracking',
      'Risk Assessment',
      'Document Templates',
      'Legal Research',
      'Deadline Management',
      'Client Portal',
      'Billing Integration',
      'Mobile App',
      'White-label Options'
    ],
    pricing: {
      monthly: 249,
      yearly: 2490,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Legal',
    icon: '⚖️',
    popular: false,
    marketPrice: 399,
    benefits: [
      'Reduce document review time by 70%',
      'Improve compliance by 90%',
      'Identify risks 3x faster',
      'Save 8+ hours per week on document management'
    ],
    useCases: [
      'Law firms',
      'Corporate legal departments',
      'Contract management',
      'Compliance monitoring',
      'Legal research',
      'Document automation'
    ],
    integrations: ['Clio', 'MyCase', 'PracticePanther', 'Slack', 'Microsoft Office', 'Google Workspace'],
    support: ['24/7 Support', 'Legal Consultation', 'Training Sessions', 'Compliance Support'],
    launchDate: '2024-01-18',
    lastUpdated: '2024-11-25',
    rating: 4.6,
    reviews: 156,
    website: 'https://ziontechgroup.com/legal-document-manager',
    demo: 'https://ziontechgroup.com/demo/legal-document-manager'
  },
  {
    id: 'online-learning-platform',
    name: 'AI Learning Platform',
    description: 'AI-powered educational platform with personalized learning paths, progress tracking, and certification for online education.',
    features: [
      'Personalized Learning Paths',
      'Progress Tracking',
      'Course Creation Tools',
      'Assessment & Quizzes',
      'Certification System',
      'Video Streaming',
      'Mobile App',
      'White-label Options',
      'Integration APIs',
      'Analytics Dashboard'
    ],
    pricing: {
      monthly: 99,
      yearly: 990,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Education',
    icon: '🎓',
    popular: true,
    marketPrice: 199,
    benefits: [
      'Increase student engagement by 80%',
      'Improve learning outcomes by 60%',
      'Reduce course creation time by 70%',
      'Save 10+ hours per week on course management'
    ],
    useCases: [
      'Online courses',
      'Corporate training',
      'Skill development',
      'Certification programs',
      'Educational institutions',
      'Professional development'
    ],
    integrations: ['Zoom', 'Google Meet', 'Stripe', 'PayPal', 'Mailchimp', 'Slack'],
    support: ['24/7 Support', 'Educational Consultation', 'Training Sessions', 'Content Creation Support'],
    launchDate: '2024-02-12',
    lastUpdated: '2024-12-01',
    rating: 4.8,
    reviews: 678,
    website: 'https://ziontechgroup.com/online-learning-platform',
    demo: 'https://ziontechgroup.com/demo/online-learning-platform'
  },
  {
    id: 'supply-chain-optimizer',
    name: 'Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization with demand forecasting, inventory management, and logistics planning for manufacturing and retail.',
    features: [
      'Demand Forecasting',
      'Inventory Optimization',
      'Supplier Analytics',
      'Risk Assessment',
      'Cost Optimization',
      'Logistics Planning',
      'Real-time Monitoring',
      'Integration APIs',
      'Mobile App',
      'White-label Options'
    ],
    pricing: {
      monthly: 399,
      yearly: 3990,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'Manufacturing',
    icon: '🏭',
    popular: false,
    marketPrice: 699,
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve demand accuracy by 80%',
      'Optimize logistics by 50%',
      'Save 12+ hours per week on planning'
    ],
    useCases: [
      'Manufacturing',
      'Retail',
      'E-commerce',
      'Distribution',
      'Procurement',
      'Logistics management'
    ],
    integrations: ['SAP', 'Oracle', 'NetSuite', 'Shopify', 'WooCommerce', 'Amazon'],
    support: ['24/7 Support', 'Supply Chain Consultation', 'Training Sessions', 'Custom Implementation'],
    launchDate: '2024-01-22',
    lastUpdated: '2024-11-15',
    rating: 4.7,
    reviews: 189,
    website: 'https://ziontechgroup.com/supply-chain-optimizer',
    demo: 'https://ziontechgroup.com/demo/supply-chain-optimizer'
  },
  // Additional Services
  {
    id: 'ai-recruitment-assistant',
    name: 'AI Recruitment Assistant',
    description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling for HR teams.',
    features: [
      'Resume Screening & Parsing',
      'Candidate Matching',
      'Interview Scheduling',
      'Skills Assessment',
      'Background Checks',
      'Job Posting Optimization',
      'Candidate Communication',
      'Analytics Dashboard',
      'Integration APIs',
      'White-label Options'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      freeTrial: true,
      freeTrialDays: 30
    },
    category: 'HR',
    icon: '👥',
    popular: true,
    marketPrice: 349,
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality by 80%',
      'Increase hiring efficiency by 100%',
      'Save 8+ hours per week on recruitment'
    ],
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Staffing companies',
      'Talent acquisition',
      'Candidate screening',
      'Interview coordination'
    ],
    integrations: ['LinkedIn', 'Indeed', 'Glassdoor', 'Slack', 'Microsoft Teams', 'Zoom'],
    support: ['24/7 Support', 'HR Consultation', 'Training Sessions', 'Best Practices Guide'],
    launchDate: '2024-02-28',
    lastUpdated: '2024-11-30',
    rating: 4.8,
    reviews: 423,
    website: 'https://ziontechgroup.com/ai-recruitment-assistant',
    demo: 'https://ziontechgroup.com/demo/ai-recruitment-assistant'
  }
];

export const categories = [
  'All',
  'Productivity',
  'Analytics',
  'Marketing',
  'Development',
  'Finance',
  'Sales',
  'Design',
  'Healthcare',
  'Real Estate',
  'Legal',
  'Education',
  'Manufacturing',
  'HR'
];

export const getServicesByCategory = (category: string) => {
  if (category === 'All') return microSaasServices;
  return microSaasServices.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return microSaasServices.filter(service => service.popular);
};

export const getServiceById = (id: string) => {
  return microSaasServices.find(service => service.id === id);
};