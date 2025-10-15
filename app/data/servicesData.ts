export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'ai' | 'it' | 'saas' | 'infrastructure' | 'business';
  features: string[];
  benefits: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  tags: string[];
}

export const servicesData: Service[] = [
  // AI Services
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced AI.',
    icon: '🤖',
    category: 'ai',
    features: [
      'SEO-optimized content generation',
      'Multiple content formats (blogs, social media, emails)',
      'Brand voice customization',
      'Plagiarism detection',
      'Content scheduling',
      'Analytics and performance tracking'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Increase content output by 5x',
      'Improve SEO rankings',
      'Maintain consistent brand voice'
    ],
    pricing: {
      basic: 29,
      pro: 79,
      enterprise: 199
    },
    marketPrice: '$50-200/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generator'
    },
    tags: ['AI', 'Content', 'SEO', 'Marketing']
  },
  {
    id: 'ai-chatbot-builder',
    title: 'AI Chatbot Builder',
    description: 'Create intelligent, conversational chatbots for customer support, sales, and lead generation.',
    icon: '💬',
    category: 'ai',
    features: [
      'No-code chatbot builder',
      'Multi-language support',
      'Integration with CRM systems',
      'Live chat handoff',
      'Analytics and insights',
      'Custom branding'
    ],
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer availability',
      'Increase lead conversion by 40%',
      'Improve customer satisfaction'
    ],
    pricing: {
      basic: 49,
      pro: 99,
      enterprise: 299
    },
    marketPrice: '$100-500/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-chatbot-builder'
    },
    tags: ['AI', 'Chatbot', 'Customer Support', 'Automation']
  },
  {
    id: 'ai-document-processor',
    title: 'AI Document Processor',
    description: 'Automate document processing, data extraction, and intelligent document analysis.',
    icon: '📄',
    category: 'ai',
    features: [
      'OCR and text extraction',
      'Document classification',
      'Data validation and verification',
      'Batch processing',
      'API integration',
      'Custom workflow automation'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual errors by 95%',
      'Save 70% of processing time',
      'Improve data accuracy'
    ],
    pricing: {
      basic: 39,
      pro: 89,
      enterprise: 249
    },
    marketPrice: '$80-300/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-document-processor'
    },
    tags: ['AI', 'Document Processing', 'Automation', 'OCR']
  },
  {
    id: 'ai-scheduling-assistant',
    title: 'AI Scheduling Assistant',
    description: 'Intelligent scheduling system that automates meeting coordination and calendar management.',
    icon: '📅',
    category: 'ai',
    features: [
      'Smart meeting scheduling',
      'Calendar integration',
      'Time zone management',
      'Meeting room booking',
      'Automated reminders',
      'Conflict resolution'
    ],
    benefits: [
      'Eliminate scheduling conflicts',
      'Save 2+ hours per week',
      'Improve meeting attendance',
      'Streamline coordination'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    marketPrice: '$30-150/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-scheduling-assistant'
    },
    tags: ['AI', 'Scheduling', 'Productivity', 'Calendar']
  },
  {
    id: 'ai-social-media-manager',
    title: 'AI Social Media Manager',
    description: 'Automate social media management with AI-powered content creation, posting, and engagement.',
    icon: '📱',
    category: 'ai',
    features: [
      'Content creation and curation',
      'Multi-platform posting',
      'Hashtag optimization',
      'Engagement automation',
      'Performance analytics',
      'Competitor analysis'
    ],
    benefits: [
      'Increase social media engagement by 300%',
      'Save 15+ hours per week',
      'Improve brand visibility',
      'Generate more leads'
    ],
    pricing: {
      basic: 59,
      pro: 129,
      enterprise: 299
    },
    marketPrice: '$100-400/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-social-media-manager'
    },
    tags: ['AI', 'Social Media', 'Marketing', 'Automation']
  },
  {
    id: 'ai-crm-optimizer',
    title: 'AI CRM Optimizer',
    description: 'Enhance your CRM with AI-powered insights, lead scoring, and automated workflows.',
    icon: '📊',
    category: 'ai',
    features: [
      'Lead scoring and qualification',
      'Automated data entry',
      'Predictive analytics',
      'Workflow automation',
      'Customer segmentation',
      'Sales forecasting'
    ],
    benefits: [
      'Increase sales by 25%',
      'Improve lead quality by 40%',
      'Reduce manual data entry by 80%',
      'Better customer insights'
    ],
    pricing: {
      basic: 79,
      pro: 159,
      enterprise: 399
    },
    marketPrice: '$150-600/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-crm-optimizer'
    },
    tags: ['AI', 'CRM', 'Sales', 'Analytics']
  },
  {
    id: 'ai-email-optimizer',
    title: 'AI Email Optimizer',
    description: 'Optimize email campaigns with AI-powered subject lines, content, and send time optimization.',
    icon: '📧',
    category: 'ai',
    features: [
      'Subject line optimization',
      'Content personalization',
      'Send time optimization',
      'A/B testing automation',
      'Deliverability monitoring',
      'Performance analytics'
    ],
    benefits: [
      'Increase open rates by 35%',
      'Boost click-through rates by 50%',
      'Reduce unsubscribe rates',
      'Improve email ROI'
    ],
    pricing: {
      basic: 39,
      pro: 89,
      enterprise: 199
    },
    marketPrice: '$60-250/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-email-optimizer'
    },
    tags: ['AI', 'Email Marketing', 'Optimization', 'Automation']
  },
  {
    id: 'ai-website-analyzer',
    title: 'AI Website Analyzer',
    description: 'Comprehensive website analysis with AI-powered insights for performance, SEO, and user experience.',
    icon: '🔍',
    category: 'ai',
    features: [
      'Performance analysis',
      'SEO audit and recommendations',
      'User experience insights',
      'Competitor analysis',
      'Conversion optimization',
      'Technical issue detection'
    ],
    benefits: [
      'Improve website performance by 50%',
      'Increase organic traffic by 40%',
      'Boost conversion rates by 25%',
      'Identify and fix technical issues'
    ],
    pricing: {
      basic: 29,
      pro: 69,
      enterprise: 149
    },
    marketPrice: '$50-200/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-website-analyzer'
    },
    tags: ['AI', 'Website Analysis', 'SEO', 'Performance']
  },
  {
    id: 'ai-data-visualizer',
    title: 'AI Data Visualizer',
    description: 'Transform complex data into interactive, AI-generated visualizations and insights.',
    icon: '📈',
    category: 'ai',
    features: [
      'Automated chart generation',
      'Interactive dashboards',
      'Data storytelling',
      'Real-time updates',
      'Custom visualization types',
      'Export and sharing options'
    ],
    benefits: [
      'Create visualizations 10x faster',
      'Improve data comprehension',
      'Make data-driven decisions',
      'Enhance presentations'
    ],
    pricing: {
      basic: 49,
      pro: 99,
      enterprise: 249
    },
    marketPrice: '$80-300/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-data-visualizer'
    },
    tags: ['AI', 'Data Visualization', 'Analytics', 'Dashboards']
  },
  {
    id: 'ai-form-builder',
    title: 'AI Form Builder',
    description: 'Create intelligent, dynamic forms with AI-powered field suggestions and validation.',
    icon: '📝',
    category: 'ai',
    features: [
      'Drag-and-drop form builder',
      'AI field suggestions',
      'Smart validation rules',
      'Conditional logic',
      'Multi-step forms',
      'Analytics and insights'
    ],
    benefits: [
      'Build forms 5x faster',
      'Reduce form abandonment by 30%',
      'Improve data quality',
      'Enhance user experience'
    ],
    pricing: {
      basic: 19,
      pro: 49,
      enterprise: 129
    },
    marketPrice: '$30-150/month',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/zion-ai-form-builder'
    },
    tags: ['AI', 'Forms', 'Data Collection', 'Automation']
  },
  // IT Services
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '🌐',
    category: 'it',
    features: [
      'Responsive design',
      'Modern frameworks (React, Next.js)',
      'Performance optimization',
      'SEO optimization',
      'Security implementation',
      'Maintenance and support'
    ],
    benefits: [
      'Professional web presence',
      'Improved user experience',
      'Better search rankings',
      'Mobile-friendly design'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    marketPrice: '$5,000-50,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/web-development'
    },
    tags: ['Web Development', 'React', 'Next.js', 'Responsive']
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    category: 'it',
    features: [
      'iOS and Android apps',
      'Cross-platform development',
      'Native performance',
      'App store optimization',
      'Push notifications',
      'Offline functionality'
    ],
    benefits: [
      'Reach mobile users',
      'Native app performance',
      'App store presence',
      'Enhanced user engagement'
    ],
    pricing: {
      basic: 4999,
      pro: 12999,
      enterprise: 29999
    },
    marketPrice: '$10,000-100,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/mobile-development'
    },
    tags: ['Mobile Development', 'iOS', 'Android', 'Cross-platform']
  },
  {
    id: 'database-management',
    title: 'Database Management',
    description: 'Comprehensive database design, optimization, and management services.',
    icon: '🗄️',
    category: 'it',
    features: [
      'Database design and architecture',
      'Performance optimization',
      'Data migration',
      'Backup and recovery',
      'Security implementation',
      'Monitoring and maintenance'
    ],
    benefits: [
      'Improved performance',
      'Data security',
      'Reduced downtime',
      'Scalable architecture'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 9999
    },
    marketPrice: '$3,000-25,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/database-management'
    },
    tags: ['Database', 'Optimization', 'Security', 'Migration']
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network infrastructure solutions.',
    icon: '🌐',
    category: 'infrastructure',
    features: [
      'Network design and planning',
      'Security implementation',
      'Performance monitoring',
      'Disaster recovery',
      'Cloud integration',
      '24/7 support'
    ],
    benefits: [
      'Reliable connectivity',
      'Enhanced security',
      'Improved performance',
      'Reduced downtime'
    ],
    pricing: {
      basic: 2999,
      pro: 7999,
      enterprise: 19999
    },
    marketPrice: '$5,000-50,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/network-infrastructure'
    },
    tags: ['Network', 'Infrastructure', 'Security', 'Monitoring']
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions using AWS, Azure, and Google Cloud platforms.',
    icon: '☁️',
    category: 'infrastructure',
    features: [
      'Multi-cloud deployment',
      'Auto-scaling',
      'Load balancing',
      'Security implementation',
      'Cost optimization',
      'Disaster recovery'
    ],
    benefits: [
      'Scalable infrastructure',
      'Cost efficiency',
      'High availability',
      'Global reach'
    ],
    pricing: {
      basic: 1999,
      pro: 4999,
      enterprise: 9999
    },
    marketPrice: '$3,000-30,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    tags: ['Cloud', 'AWS', 'Azure', 'Scalability']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Complete digital transformation services to modernize your business processes.',
    icon: '🔄',
    category: 'business',
    features: [
      'Process automation',
      'Legacy system modernization',
      'Digital strategy consulting',
      'Change management',
      'Training and support',
      'Performance monitoring'
    ],
    benefits: [
      'Improved efficiency',
      'Reduced costs',
      'Better customer experience',
      'Competitive advantage'
    ],
    pricing: {
      basic: 9999,
      pro: 24999,
      enterprise: 49999
    },
    marketPrice: '$15,000-100,000',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/digital-transformation'
    },
    tags: ['Digital Transformation', 'Automation', 'Modernization', 'Strategy']
  }
];

export const serviceCategories = [
  { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', count: 9 },
  { id: 'it', name: 'IT Services', icon: '💻', count: 3 },
  { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️', count: 2 },
  { id: 'business', name: 'Business Solutions', icon: '💼', count: 1 }
];