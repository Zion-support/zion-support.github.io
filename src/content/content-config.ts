export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  pricing: {
    starting: string;
    popular?: boolean;
  };
  features: string[];
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  icon: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export interface PromotionalBanner {
  id: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  showClose: boolean;
  autoHide: boolean;
  hideAfter: number;
  active: boolean;
  priority: number;
}

// Blog Posts Configuration
export const blogPosts: BlogPost[] = [
  {
    id: 'ai-revolution-2025',
    title: 'AI Revolution 2025: The Complete Business Transformation Guide',
    excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
    date: 'January 17, 2025',
    category: 'AI Trends',
    readTime: '12 min',
    image: '🚀',
    featured: true,
    slug: '/blog/ai-revolution-2025',
    tags: ['AI', 'Business Strategy', 'Transformation', '2025 Trends']
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation: Transforming Business Operations',
    excerpt: 'Discover how AI-powered workflow automation is revolutionizing business processes, reducing manual work by 80% and improving efficiency across industries.',
    date: 'January 15, 2025',
    category: 'Automation',
    readTime: '6 min',
    image: '🤖',
    featured: false,
    slug: '/blog/ai-workflow-automation',
    tags: ['Automation', 'Workflow', 'AI', 'Productivity']
  },
  {
    id: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for 2025',
    excerpt: 'Learn the essential strategies for successful cloud migration, including zero-downtime approaches and cost optimization techniques.',
    date: 'January 12, 2025',
    category: 'Cloud',
    readTime: '7 min',
    image: '☁️',
    featured: false,
    slug: '/blog/cloud-migration-best-practices',
    tags: ['Cloud', 'Migration', 'Best Practices', 'DevOps']
  },
  {
    id: 'cybersecurity-ai-era',
    title: 'Cybersecurity in the AI Era: Protecting Your Digital Assets',
    excerpt: 'Explore advanced cybersecurity strategies for AI-powered environments, including zero-trust architecture and automated threat detection.',
    date: 'January 10, 2025',
    category: 'Security',
    readTime: '5 min',
    image: '🔒',
    featured: false,
    slug: '/blog/cybersecurity-ai-era',
    tags: ['Cybersecurity', 'AI Security', 'Zero Trust', 'Threat Detection']
  },
  {
    id: 'data-analytics-revolution',
    title: 'Data Analytics Revolution: From Insights to Action',
    excerpt: 'See how modern data analytics platforms are transforming raw data into actionable business insights with real-time dashboards and predictive modeling.',
    date: 'January 8, 2025',
    category: 'Analytics',
    readTime: '6 min',
    image: '📊',
    featured: false,
    slug: '/blog/data-analytics-revolution',
    tags: ['Data Analytics', 'Insights', 'Predictive Modeling', 'Business Intelligence']
  },
  {
    id: 'devops-automation-scaling',
    title: 'DevOps Automation: Scaling Infrastructure with Intelligence',
    excerpt: 'Learn how automated DevOps practices are enabling rapid deployment, infrastructure scaling, and continuous integration at enterprise scale.',
    date: 'January 5, 2025',
    category: 'DevOps',
    readTime: '8 min',
    image: '⚙️',
    featured: false,
    slug: '/blog/devops-automation-scaling',
    tags: ['DevOps', 'Automation', 'Infrastructure', 'CI/CD']
  },
  {
    id: 'ai-virtual-assistants-customer-service',
    title: 'The Rise of AI Virtual Assistants in Customer Service',
    excerpt: 'Discover how AI virtual assistants are revolutionizing customer support with 24/7 availability, natural language processing, and personalized interactions.',
    date: 'January 3, 2025',
    category: 'AI',
    readTime: '5 min',
    image: '💬',
    featured: false,
    slug: '/blog/ai-virtual-assistants-customer-service',
    tags: ['AI', 'Virtual Assistant', 'Customer Service', 'NLP']
  }
];

// Case Studies Configuration
export const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp-ai-transformation',
    title: 'TechCorp AI Transformation: 90% Efficiency Gain',
    excerpt: 'How a leading e-commerce company transformed their operations with AI-powered automation, achieving unprecedented efficiency gains and cost savings.',
    company: 'TechCorp Inc.',
    industry: 'E-commerce',
    challenge: 'Manual data processing taking 40 hours/week',
    solution: 'AI Data Analytics automation',
    result: '90% time reduction, 60% cost savings',
    metric: '$500K saved annually',
    featured: true,
    slug: '/case-studies/techcorp-ai-transformation',
    tags: ['AI Transformation', 'E-commerce', 'Automation', 'Cost Savings']
  },
  {
    id: 'healthtech-solutions',
    title: 'HealthTech Solutions: AI Virtual Assistant Success',
    excerpt: 'Healthcare company achieves 95% customer satisfaction with AI virtual assistant implementation.',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    challenge: 'Customer support overwhelmed with queries',
    solution: 'AI Virtual Assistant implementation',
    result: '80% faster response time, 24/7 support',
    metric: '95% customer satisfaction',
    featured: true,
    slug: '/case-studies/healthtech-solutions',
    tags: ['Healthcare', 'AI Assistant', 'Customer Service', 'Automation']
  },
  {
    id: 'financeflow-automation',
    title: 'FinanceFlow: AI Workflow Automation Success',
    excerpt: 'Fintech startup achieves 300% ROI with AI workflow automation platform.',
    company: 'FinanceFlow Ltd.',
    industry: 'Fintech',
    challenge: 'Complex workflow bottlenecks',
    solution: 'AI Workflow Automation platform',
    result: '75% process efficiency improvement',
    metric: '300% ROI in 6 months',
    featured: true,
    slug: '/case-studies/financeflow-automation',
    tags: ['Fintech', 'Workflow Automation', 'ROI', 'Process Efficiency']
  }
];

// Services Configuration
export const services: Service[] = [
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform',
    description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
    category: 'AI & Analytics',
    pricing: {
      starting: '$199/month',
      popular: true
    },
    features: [
      'Predictive Analytics',
      'Real-time Dashboards',
      'Data Integration',
      'Automated Reporting',
      'Machine Learning Models',
      'Custom Visualizations'
    ],
    metrics: [
      { value: '85%', label: 'Faster Decision Making' },
      { value: '98%', label: 'Prediction Accuracy' },
      { value: '300%', label: 'ROI Improvement' }
    ],
    testimonial: {
      quote: 'The AI Analytics Platform transformed how we make decisions. We can now predict trends and optimize operations like never before.',
      author: 'Sarah Chen',
      company: 'TechCorp Inc.'
    },
    cta: {
      primary: 'Start Free Trial',
      secondary: 'View Case Studies'
    },
    icon: '📊',
    featured: true,
    slug: '/services/ai-analytics-platform',
    tags: ['Analytics', 'AI', 'Data Visualization', 'Predictive Modeling']
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Automate business processes with intelligent workflow design and smart triggers',
    category: 'AI & Automation',
    pricing: {
      starting: '$149/month'
    },
    features: [
      'Process Automation',
      'Smart Triggers',
      'Performance Monitoring',
      'Exception Handling',
      'Integration APIs',
      'Custom Workflows'
    ],
    metrics: [
      { value: '75%', label: 'Process Efficiency' },
      { value: '60%', label: 'Time Savings' },
      { value: '90%', label: 'Error Reduction' }
    ],
    cta: {
      primary: 'Get Started',
      secondary: 'View Demo'
    },
    icon: '⚙️',
    featured: true,
    slug: '/services/ai-workflow-automation',
    tags: ['Automation', 'Workflow', 'AI', 'Process Optimization']
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant',
    description: '24/7 intelligent customer support with natural language processing',
    category: 'AI & Customer Service',
    pricing: {
      starting: '$99/month'
    },
    features: [
      '24/7 Support',
      'Multi-channel',
      'Personalized Responses',
      'Natural Language Processing',
      'Sentiment Analysis',
      'Escalation Management'
    ],
    metrics: [
      { value: '95%', label: 'Customer Satisfaction' },
      { value: '80%', label: 'Faster Response' },
      { value: '50%', label: 'Cost Reduction' }
    ],
    cta: {
      primary: 'Try Demo',
      secondary: 'Learn More'
    },
    icon: '💬',
    featured: true,
    slug: '/services/ai-virtual-assistant',
    tags: ['AI Assistant', 'Customer Service', 'NLP', 'Automation']
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure with zero downtime',
    category: 'Cloud Services',
    pricing: {
      starting: '$2,999'
    },
    features: [
      'Zero Downtime',
      'Security Compliance',
      'Cost Optimization',
      'Performance Monitoring',
      'Disaster Recovery',
      'Scalability Planning'
    ],
    cta: {
      primary: 'Get Quote',
      secondary: 'View Process'
    },
    icon: '☁️',
    featured: false,
    slug: '/services/cloud-migration',
    tags: ['Cloud', 'Migration', 'Infrastructure', 'DevOps']
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description: 'Automate CI/CD pipelines and infrastructure management',
    category: 'DevOps & Infrastructure',
    pricing: {
      starting: '$399/month'
    },
    features: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Auto-scaling',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization'
    ],
    cta: {
      primary: 'Start Setup',
      secondary: 'View Benefits'
    },
    icon: '🔧',
    featured: false,
    slug: '/services/devops-automation',
    tags: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation']
  },
  {
    id: 'cybersecurity-consulting',
    title: 'Cybersecurity Consulting',
    description: 'Advanced threat detection and zero-trust security architecture',
    category: 'Security & Compliance',
    pricing: {
      starting: '$599/month'
    },
    features: [
      'Threat Detection',
      'Zero-trust Architecture',
      'Compliance',
      'Security Audits',
      'Incident Response',
      'Security Training'
    ],
    cta: {
      primary: 'Security Audit',
      secondary: 'View Services'
    },
    icon: '🛡️',
    featured: false,
    slug: '/services/cybersecurity-consulting',
    tags: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Threat Detection']
  }
];

// Promotional Banners Configuration
export const promotionalBanners: PromotionalBanner[] = [
  {
    id: 'fresh-content-oct-2025',
    message: '✨ New: Governance Scorecards 2026, Freshness‑Aware RAG v2, Edge Flags 2026',
    ctaText: 'Read the latest',
    ctaLink: '/blog',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 15,
    active: true,
    priority: 0
  },
  {
    id: 'governance-scorecards-2026',
    message: '📚 AI Governance 2026: Scorecards Engineers Actually Use',
    ctaText: 'Read Article',
    ctaLink: '/blog/ai-governance-scorecards-2026',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 1
  },
  {
    id: 'freshness-aware-rag-v2',
    message: '🧭 Freshness‑Aware RAG v2: TTL Budgets and SLAs',
    ctaText: 'Explore',
    ctaLink: '/blog/freshness-aware-rag-v2',
    backgroundColor: 'bg-gradient-to-r from-cyan-600 to-blue-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2
  },
  {
    id: 'edge-flags-blueprint-2026',
    message: '⚡ Edge Flags Blueprint 2026: <100ms Global Releases',
    ctaText: 'Read Blueprint',
    ctaLink: '/blog/edge-flags-blueprint-2026',
    backgroundColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2
  },
  {
    id: 'new-blog-banner',
    message: '🔥 New: AI Platform Engineering 2025 + Secure ML Supply Chain',
    ctaText: 'Read Now',
    ctaLink: '/blog/ai-platform-engineering-2025',
    backgroundColor: 'bg-gradient-to-r from-orange-600 to-red-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 15,
    active: true,
    priority: 1
  },
  {
    id: 'ai-risk-register-banner',
    message: '🛡️ New: AI Risk Register That Drives Action',
    ctaText: 'Read Playbook',
    ctaLink: '/blog/ai-risk-register-2025',
    backgroundColor: 'bg-gradient-to-r from-red-600 to-rose-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 1
  },
  {
    id: 'practical-evals-banner',
    message: '📈 Practical AI Evals That Predict Outcomes',
    ctaText: 'See Scorecards',
    ctaLink: '/blog/practical-evals-scorecards-2025',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 2
  },
  {
    id: 'analytics-platform-banner',
    message: '🚀 Launch: AI Analytics Platform - Transform Data into Actionable Insights',
    ctaText: 'Explore Platform',
    ctaLink: '/services/ai-analytics-platform',
    backgroundColor: 'bg-gradient-to-r from-teal-600 to-cyan-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 18,
    active: true,
    priority: 2
  },
  {
    id: 'techcorp-success-banner',
    message: '🏆 Success Story: TechCorp Achieved 90% Efficiency Gain with AI Transformation',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/techcorp-ai-transformation',
    backgroundColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 20,
    active: true,
    priority: 3
  },
  {
    id: 'free-trial-banner',
    message: '🎯 Limited Time: 30-Day Free Trial for AI Analytics Platform - No Credit Card Required',
    ctaText: 'Start Free Trial',
    ctaLink: '/services/ai-analytics-platform#pricing',
    backgroundColor: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: false,
    hideAfter: 0,
    active: true,
    priority: 4
  },
  {
    id: 'cloud-finops-guardrails-banner',
    message: '💸 Cloud FinOps Guardrails Engineers Actually Use',
    ctaText: 'Cut Spend',
    ctaLink: '/blog/cloud-finops-guardrails-2025',
    backgroundColor: 'bg-gradient-to-r from-sky-600 to-blue-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2
  },
  {
    id: 'practical-evals-2025-banner',
    message: '📈 Practical AI Evals That Predict Business Outcomes',
    ctaText: 'See Scorecards',
    ctaLink: '/blog/practical-evals-scorecards-2025',
    backgroundColor: 'bg-gradient-to-r from-indigo-600 to-purple-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 2
  },
  {
    id: 'serverless-inference-costs-banner',
    message: '🧰 Serverless Inference Cost Playbook',
    ctaText: 'Optimize',
    ctaLink: '/blog/serverless-inference-cost-playbook-2025',
    backgroundColor: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    textColor: 'text-white',
    showClose: true,
    autoHide: true,
    hideAfter: 16,
    active: true,
    priority: 3
  }
];

// Utility functions for content management
export const getFeaturedContent = () => {
  return {
    blogPosts: blogPosts.filter(post => post.featured),
    caseStudies: caseStudies.filter(study => study.featured),
    services: services.filter(service => service.featured)
  };
};

export const getActiveBanners = () => {
  return promotionalBanners
    .filter(banner => banner.active)
    .sort((a, b) => a.priority - b.priority);
};

export const getContentByTag = (tag: string) => {
  return {
    blogPosts: blogPosts.filter(post => post.tags.includes(tag)),
    caseStudies: caseStudies.filter(study => study.tags.includes(tag)),
    services: services.filter(service => service.tags.includes(tag))
  };
};

export const getRecentContent = (limit: number = 3) => {
  const allContent = [
    ...blogPosts.map(post => ({ ...post, type: 'blog' as const })),
    ...caseStudies.map(study => ({ ...study, type: 'case-study' as const })),
    ...services.map(service => ({ ...service, type: 'service' as const }))
  ];
  
  return allContent
    .sort((a, b) => {
      const aTime = 'date' in a ? new Date((a as { date: string }).date).getTime() : 0;
      const bTime = 'date' in b ? new Date((b as { date: string }).date).getTime() : 0;
      return bTime - aTime;
    })
    .slice(0, limit);
};
