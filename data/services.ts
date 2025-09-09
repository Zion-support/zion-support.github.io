export type Service = {
  id: string;
  name: string;
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics';
  description: string;
  features: string[];
  benefits: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    period: string};
  link: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-platform',
    name: 'AI Chatbot Platform',
    category: 'AI',
    description: 'Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration.',
    features[
      'Advanced NLP with GPT-4 integration',
      'Multi-language support (50+ languages)',
      'Custom training on your data',
      'Analytics and performance insights',
      'API integration and webhooks',
      '24/7 customer support'
    ],
    benefits[
      'Reduce customer service costs by 60%',
      'Handle 1000+ conversations simultaneously',
      'Improve customer satisfaction by 40%',
      '24/7 availability without human intervention'
    ],
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 999,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-chatbot-platform',
    icon: '🤖',
    isPopular: true
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    category: 'AI',
    description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.',
    features[
      'SEO-optimized content generation',
      'Multiple content types (blogs, social, ads)',
      'Plagiarism-free content',
      'Brand voice customization',
      'Content calendar management',
      'Performance analytics'
    ],
    benefits[
      'Save 80% of content creation time',
      'Improve SEO rankings by 45%',
      'Generate 100+ articles per month',
      'Maintain consistent brand voice'
    ],
    pricing: {
      starter: 49,
      professional: 149,
      enterprise: 499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-content-generator',
    icon: '✍️'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI-Powered Data Analytics',
    category: 'AI',
    description: 'Transform raw data into actionable insights with machine learning algorithms and predictive analytics.',
    features[
      'Real-time data processing',
      'Predictive analytics models',
      'Custom dashboard creation',
      'Automated reporting',
      'Data visualization tools',
      'API integration capabilities'
    ],
    benefits[
      'Increase data-driven decisions by 70%',
      'Reduce analysis time by 85%',
      'Predict trends with 90% accuracy',
      'Automate routine reporting tasks'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/ai-data-analytics',
    icon: '📊',
    isNew: true
  },

  // IT Services
  {
    id: 'managed-it-services',
    name: 'Managed IT Services',
    category: 'IT',
    description: 'Comprehensive IT management including network monitoring, security, and 24/7 technical support.',
    features[
      '24/7 network monitoring',
      'Proactive issue resolution',
      'Security patch management',
      'Backup and disaster recovery',
      'Help desk support',
      'Monthly reporting and analytics'
    ],
    benefits[
      'Reduce IT downtime by 95%',
      'Lower IT costs by 30%',
      'Improve system reliability',
      'Focus on core business activities'
    ],
    pricing: {
      starter: 299,
      professional: 599,
      enterprise: 1499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/managed-it-services',
    icon: '🖥️'
  },
  {
    id: 'cybersecurity-suite',
    name: 'Cybersecurity Suite',
    category: 'Security',
    description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and incident response.',
    features[
      'Real-time threat detection',
      'Vulnerability scanning',
      'Penetration testing',
      'Security awareness training',
      'Incident response planning',
      'Compliance reporting'
    ],
    benefits[
      'Protect against 99.9% of cyber threats',
      'Meet industry compliance standards',
      'Reduce security breach risk by 80%',
      '24/7 security monitoring'
    ],
    pricing: {
      starter: 399,
      professional: 799,
      enterprise: 1999,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/cybersecurity-suite',
    icon: '🔒',
    isPopular: true
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    category: 'Cloud',
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
    features[
      'Migration strategy planning',
      'Data migration tools',
      'Performance optimization',
      'Security implementation',
      'Training and documentation',
      'Post-migration support'
    ],
    benefits[
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhanced disaster recovery',
      'Access to latest technologies'
    ],
    pricing: {
      starter: 2999,
      professional: 7999,
      enterprise: 19999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/cloud-migration',
    icon: '☁️'
  },

  // SAAS Services
  {
    id: 'project-management-platform',
    name: 'Project Management Platform',
    category: 'SAAS',
    description: 'Collaborative project management tool with task tracking, team collaboration, and progress monitoring.',
    features[
      'Task and project tracking',
      'Team collaboration tools',
      'Time tracking and reporting',
      'File sharing and storage',
      'Mobile app access',
      'Integration with popular tools'
    ],
    benefits[
      'Increase team productivity by 35%',
      'Reduce project delays by 50%',
      'Improve communication efficiency',
      'Centralized project information'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/project-management-platform',
    icon: '📋'
  },
  {
    id: 'crm-system',
    name: 'Customer Relationship Management',
    category: 'SAAS',
    description: 'Comprehensive CRM solution for managing customer relationships, sales pipeline, and marketing campaigns.',
    features[
      'Contact and lead management',
      'Sales pipeline tracking',
      'Email marketing automation',
      'Customer support integration',
      'Analytics and reporting',
      'Mobile app access'
    ],
    benefits[
      'Increase sales by 30%',
      'Improve customer retention by 25%',
      'Streamline sales processes',
      'Better customer insights'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 299,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/crm-system',
    icon: '👥',
    isPopular: true
  },
  {
    id: 'hr-management-system',
    name: 'HR Management System',
    category: 'SAAS',
    description: 'Complete HR solution for employee management, payroll, benefits, and performance tracking.',
    features[
      'Employee database management',
      'Payroll processing',
      'Benefits administration',
      'Performance reviews',
      'Time and attendance',
      'Compliance reporting'
    ],
    benefits[
      'Reduce HR administrative tasks by 60%',
      'Improve employee satisfaction',
      'Ensure compliance with regulations',
      'Better workforce analytics'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 399,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/hr-management-system',
    icon: '👨‍💼'
  },

  // Development Services
  {
    id: 'web-development',
    name: 'Custom Web Development',
    category: 'Development',
    description: 'Professional web development services including responsive design, e-commerce, and custom applications.',
    features[
      'Responsive web design',
      'E-commerce integration',
      'Custom functionality',
      'SEO optimization',
      'Performance optimization',
      'Ongoing maintenance'
    ],
    benefits[
      'Professional online presence',
      'Improved user experience',
      'Better search engine rankings',
      'Scalable and maintainable code'
    ],
    pricing: {
      starter: 2999,
      professional: 7999,
      enterprise: 19999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/web-development',
    icon: '🌐'
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    category: 'Development',
    description: 'Native and cross-platform mobile app development for iOS and Android platforms.',
    features[
      'Native iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Testing and quality assurance',
      'Post-launch support'
    ],
    benefits[
      'Reach mobile users effectively',
      'Improve customer engagement',
      'Increase brand visibility',
      'Generate additional revenue streams'
    ],
    pricing: {
      starter: 4999,
      professional: 14999,
      enterprise: 49999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/mobile-app-development',
    icon: '📱'
  },
  {
    id: 'api-development',
    name: 'API Development & Integration',
    category: 'Development',
    description: 'Custom API development and third-party service integration for seamless data exchange.',
    features[
      'RESTful API development',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
      'Testing and monitoring',
      'Performance optimization'
    ],
    benefits[
      'Enable system interoperability',
      'Improve data flow efficiency',
      'Reduce development time',
      'Enhance user experience'
    ],
    pricing: {
      starter: 1999,
      professional: 5999,
      enterprise: 14999,
      currency: 'USD',
      period: 'one-time'
    },
    link: '/services/api-development',
    icon: '🔌'
  },

  // Analytics Services
  {
    id: 'business-intelligence',
    name: 'Business Intelligence Solutions',
    category: 'Analytics',
    description: 'Transform business data into actionable insights with advanced analytics and reporting tools.',
    features[
      'Data warehousing',
      'Interactive dashboards',
      'Custom reporting',
      'Data visualization',
      'Predictive analytics',
      'Real-time monitoring'
    ],
    benefits[
      'Make data-driven decisions',
      'Identify business opportunities',
      'Improve operational efficiency',
      'Gain competitive advantage'
    ],
    pricing: {
      starter: 399,
      professional: 899,
      enterprise: 2499,
      currency: 'USD',
      period: 'month'
    },
    link: '/services/business-intelligence',
    icon: '📈'
  },

  // Additional Innovative Micro SaaS Services
  {
    id: 'ai-video-editor',
    name: 'AI Video Editor Pro',
    category: 'micro-saas',
    description: 'Intelligent video editing platform with AI-powered auto-editing, scene detection, and professional effects for content creators.',
    features: [
      'AI-powered auto-editing',
      'Smart scene detection',
      'Automatic color correction',
      'Background removal',
      'Voice-to-text transcription',
      'Auto-subtitle generation',
      'Template library',
      'Cloud rendering'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Reduce editing time by 80%',
      'Professional-quality results',
      'No technical skills required',
      'Faster content production',
      'Cost-effective video creation'
    ],
    useCases: [
      'Content creators',
      'Marketing agencies',
      'Small businesses',
      'Educational institutions'
    ],
    technologies: ['AI Video Processing', 'React', 'Node.js', 'FFmpeg', 'WebRTC'],
    link: 'https://ziontechgroup.com/services/ai-video-editor',
    icon: '🎬'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Security Auditor',
    category: 'micro-saas',
    description: 'Automated smart contract security auditing platform with AI-powered vulnerability detection and compliance checking.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Compliance checking',
      'Security best practices validation',
      'Audit report generation',
      'Integration with development tools',
      'Real-time monitoring',
      'Expert review recommendations'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Prevent costly security breaches',
      'Reduce audit time by 90%',
      'Comprehensive security coverage',
      'Automated compliance checking',
      'Expert-level analysis'
    ],
    useCases: [
      'Blockchain developers',
      'DeFi projects',
      'NFT platforms',
      'Crypto startups'
    ],
    technologies: ['Solidity Analysis', 'AI Security', 'React', 'Node.js', 'Blockchain'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔍'
  },
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Review Assistant',
    category: 'micro-saas',
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code quality scoring',
      'Best practices recommendations',
      'Integration with Git workflows',
      'Team collaboration tools',
      'Custom rule configuration'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Improve code quality by 40%',
      'Reduce security vulnerabilities',
      'Faster development cycles',
      'Consistent coding standards',
      'Reduced technical debt'
    ],
    useCases: [
      'Software development teams',
      'DevOps teams',
      'Code review processes',
      'Quality assurance'
    ],
    technologies: ['AI Code Analysis', 'React', 'Node.js', 'Git Integration', 'Static Analysis'],
    link: 'https://ziontechgroup.com/services/ai-code-reviewer',
    icon: '👨‍💻'
  },
  {
    id: 'ai-customer-insights',
    name: 'AI Customer Insights Platform',
    category: 'micro-saas',
    description: 'Advanced customer analytics platform that uses AI to analyze customer behavior, predict churn, and optimize retention strategies.',
    features: [
      'Customer behavior analysis',
      'Churn prediction models',
      'Sentiment analysis',
      'Customer segmentation',
      'Lifetime value prediction',
      'Personalization recommendations',
      'Real-time dashboards',
      'Automated alerts'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Increase customer retention by 35%',
      'Reduce churn by 50%',
      'Better customer understanding',
      'Data-driven decisions',
      'Improved customer experience'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Subscription services',
      'Customer success teams'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-customer-insights',
    icon: '👥'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Suite',
    category: 'micro-saas',
    description: 'Intelligent workflow automation platform that learns from your processes and automates repetitive tasks across your organization.',
    features: [
      'Process discovery and mapping',
      'AI-powered automation suggestions',
      'Cross-platform integrations',
      'Custom workflow builder',
      'Performance analytics',
      'Error handling and recovery',
      'Team collaboration tools',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Improve process efficiency',
      'Eliminate human errors',
      'Faster task completion',
      'Better resource allocation'
    ],
    useCases: [
      'Business process automation',
      'HR workflows',
      'Finance operations',
      'Customer service'
    ],
    technologies: ['RPA', 'AI/ML', 'React', 'Node.js', 'Integration APIs'],
    link: 'https://ziontechgroup.com/services/ai-workflow-automation',
    icon: '⚙️'
  },
  {
    id: 'ai-seo-content-writer',
    name: 'AI SEO Content Writer',
    category: 'micro-saas',
    description: 'Advanced AI-powered content writing platform that creates SEO-optimized articles, blog posts, and marketing copy with human-like quality.',
    features: [
      'SEO-optimized content generation',
      'Keyword research integration',
      'Content planning and scheduling',
      'Multi-language support',
      'Brand voice customization',
      'Plagiarism detection',
      'Content performance tracking',
      'Team collaboration tools'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      'Increase content production by 10x',
      'Improve SEO rankings',
      'Consistent brand messaging',
      'Cost-effective content creation',
      'Better engagement rates'
    ],
    useCases: [
      'Content marketing teams',
      'SEO agencies',
      'Blog owners',
      'E-commerce businesses'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'SEO APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-seo-content-writer',
    icon: '✍️'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    category: 'micro-saas',
    description: 'Intelligent social media management platform that creates, schedules, and optimizes content across all major platforms with AI insights.',
    features: [
      'AI content creation',
      'Multi-platform scheduling',
      'Hashtag optimization',
      'Engagement prediction',
      'Competitor analysis',
      'Influencer identification',
      'Performance analytics',
      'Crisis management alerts'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Increase engagement by 60%',
      'Save 15+ hours per week',
      'Better content performance',
      'Automated optimization',
      'Data-driven strategies'
    ],
    useCases: [
      'Social media managers',
      'Marketing agencies',
      'Small businesses',
      'Content creators'
    ],
    technologies: ['AI Content Generation', 'React', 'Node.js', 'Social APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-social-media-manager',
    icon: '📱'
  },
  {
    id: 'ai-email-personalization',
    name: 'AI Email Personalization Engine',
    category: 'micro-saas',
    description: 'Advanced email personalization platform that uses AI to create highly targeted, personalized email campaigns with dynamic content.',
    features: [
      'AI-powered personalization',
      'Dynamic content insertion',
      'Behavioral trigger automation',
      'A/B testing optimization',
      'Send time optimization',
      'Subject line generation',
      'Performance analytics',
      'Customer journey mapping'
    ],
    pricing: {
      starter: 45,
      professional: 119,
      enterprise: 299,
      currency: 'USD'
    },
    benefits: [
      'Increase open rates by 45%',
      'Boost click-through rates by 80%',
      'Better customer engagement',
      'Automated optimization',
      'Higher conversion rates'
    ],
    useCases: [
      'Email marketing teams',
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies'
    ],
    technologies: ['AI Personalization', 'React', 'Node.js', 'Email APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-email-personalization',
    icon: '📧'
  },
  {
    id: 'ai-customer-support-chatbot',
    name: 'AI Customer Support Chatbot',
    category: 'micro-saas',
    description: 'Intelligent customer support chatbot that provides instant, accurate responses and seamlessly escalates complex issues to human agents.',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Knowledge base integration',
      'Escalation to human agents',
      'Sentiment analysis',
      'Custom training capabilities',
      'Analytics and insights',
      'Integration with CRM systems'
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 399,
      currency: 'USD'
    },
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer assistance',
      'Faster response times',
      'Improved customer satisfaction',
      'Scalable support operations'
    ],
    useCases: [
      'Customer support teams',
      'E-commerce businesses',
      'SaaS companies',
      'Service providers'
    ],
    technologies: ['NLP', 'React', 'Node.js', 'Chatbot APIs', 'CRM Integration'],
    link: 'https://ziontechgroup.com/services/ai-customer-support-chatbot',
    icon: '🤖'
  },
  {
    id: 'ai-inventory-optimizer',
    name: 'AI Inventory Optimization Platform',
    category: 'micro-saas',
    description: 'Smart inventory management system that uses AI to predict demand, optimize stock levels, and reduce carrying costs.',
    features: [
      'Demand forecasting',
      'Stock level optimization',
      'Reorder point automation',
      'Seasonal trend analysis',
      'Supplier performance tracking',
      'Cost optimization',
      'Real-time alerts',
      'Integration with POS systems'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 599,
      currency: 'USD'
    },
    benefits: [
      'Reduce inventory costs by 30%',
      'Minimize stockouts by 80%',
      'Optimize cash flow',
      'Improve supplier relationships',
      'Better demand planning'
    ],
    useCases: [
      'Retail businesses',
      'E-commerce platforms',
      'Manufacturing companies',
      'Distribution centers'
    ],
    technologies: ['Predictive Analytics', 'React', 'Node.js', 'Machine Learning', 'ERP Integration'],
    link: 'https://ziontechgroup.com/services/ai-inventory-optimizer',
    icon: '📦'
  },
  {
    id: 'ai-pricing-optimizer',
    name: 'AI Pricing Optimization Engine',
    category: 'micro-saas',
    description: 'Intelligent pricing platform that uses AI to optimize product prices based on market conditions, competitor analysis, and demand patterns.',
    features: [
      'Dynamic pricing algorithms',
      'Competitor price monitoring',
      'Demand elasticity analysis',
      'Market trend analysis',
      'A/B testing for pricing',
      'Revenue optimization',
      'Real-time price adjustments',
      'Performance analytics'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Increase revenue by 15-25%',
      'Optimize profit margins',
      'Competitive pricing advantage',
      'Data-driven pricing decisions',
      'Automated price management'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail chains',
      'SaaS companies',
      'Marketplace platforms'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'Price APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-pricing-optimizer',
    icon: '💰'
  },
  {
    id: 'ai-lead-qualification',
    name: 'AI Lead Qualification Platform',
    category: 'micro-saas',
    description: 'Intelligent lead qualification system that automatically scores, prioritizes, and routes leads to the right sales representatives.',
    features: [
      'AI-powered lead scoring',
      'Behavioral analysis',
      'Intent detection',
      'Lead routing automation',
      'CRM integration',
      'Real-time notifications',
      'Performance tracking',
      'Custom scoring models'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Increase conversion rates by 40%',
      'Reduce sales cycle time',
      'Better lead prioritization',
      'Improved sales efficiency',
      'Higher quality leads'
    ],
    useCases: [
      'Sales teams',
      'Marketing agencies',
      'B2B companies',
      'Lead generation services'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'CRM APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-lead-qualification',
    icon: '🎯'
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processing Platform',
    category: 'micro-saas',
    description: 'Intelligent document processing system that extracts, analyzes, and categorizes information from various document types using AI.',
    features: [
      'OCR and text extraction',
      'Document classification',
      'Data extraction and validation',
      'Workflow automation',
      'Integration with business systems',
      'Quality assurance checks',
      'Audit trails',
      'Custom field mapping'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Reduce processing time by 85%',
      'Eliminate manual data entry',
      'Improve accuracy',
      'Faster document workflows',
      'Cost-effective automation'
    ],
    useCases: [
      'Accounting firms',
      'Insurance companies',
      'Legal practices',
      'Healthcare organizations'
    ],
    technologies: ['OCR', 'NLP', 'React', 'Node.js', 'Document Processing'],
    link: 'https://ziontechgroup.com/services/ai-document-processor',
    icon: '📄'
  },
  {
    id: 'ai-performance-monitor',
    name: 'AI Performance Monitoring Suite',
    category: 'micro-saas',
    description: 'Advanced performance monitoring platform that uses AI to detect anomalies, predict issues, and optimize system performance.',
    features: [
      'Real-time performance monitoring',
      'Anomaly detection',
      'Predictive alerting',
      'Root cause analysis',
      'Performance optimization suggestions',
      'Custom dashboards',
      'Integration with monitoring tools',
      'Automated reporting'
    ],
    pricing: {
      starter: 69,
      professional: 179,
      enterprise: 449,
      currency: 'USD'
    },
    benefits: [
      'Reduce downtime by 70%',
      'Proactive issue detection',
      'Better system performance',
      'Cost-effective monitoring',
      'Improved user experience'
    ],
    useCases: [
      'DevOps teams',
      'IT departments',
      'SaaS companies',
      'E-commerce platforms'
    ],
    technologies: ['AI Monitoring', 'React', 'Node.js', 'Performance APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-performance-monitor',
    icon: '📊'
  },
  {
    id: 'ai-translation-platform',
    name: 'AI Translation Platform',
    category: 'micro-saas',
    description: 'Advanced AI-powered translation platform that provides accurate, context-aware translations for websites, documents, and applications.',
    features: [
      'Multi-language translation',
      'Context-aware translations',
      'Website translation',
      'Document translation',
      'Real-time translation',
      'Translation quality scoring',
      'Custom terminology management',
      'API integration'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reach global audiences',
      'Reduce translation costs',
      'Faster time to market',
      'Consistent translations',
      'Scalable translation services'
    ],
    useCases: [
      'Global businesses',
      'E-commerce platforms',
      'Content creators',
      'Educational institutions'
    ],
    technologies: ['NLP', 'Machine Translation', 'React', 'Node.js', 'Translation APIs'],
    link: 'https://ziontechgroup.com/services/ai-translation-platform',
    icon: '🌍'
  },

  // Additional Advanced IT Services
  {
    id: 'aiops-platform',
    name: 'AIOps Platform Implementation',
    category: 'it-services',
    description: 'Comprehensive AIOps platform that combines AI and machine learning to automate IT operations, predict issues, and optimize performance.',
    features: [
      'Intelligent monitoring and alerting',
      'Automated incident response',
      'Predictive analytics',
      'Root cause analysis',
      'Performance optimization',
      'Capacity planning',
      'Security monitoring',
      'Compliance automation'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Reduce MTTR by 80%',
      'Proactive issue prevention',
      'Improved system reliability',
      'Cost-effective operations',
      'Better resource utilization'
    ],
    useCases: [
      'Enterprise IT operations',
      'Cloud infrastructure',
      'DevOps teams',
      'Managed service providers'
    ],
    technologies: ['AIOps', 'Machine Learning', 'Monitoring Tools', 'Automation', 'Analytics'],
    link: 'https://ziontechgroup.com/services/aiops-platform',
    icon: '🤖'
  },
  {
    id: 'cloud-native-architecture',
    name: 'Cloud-Native Architecture Design',
    category: 'it-services',
    description: 'Complete cloud-native architecture design and implementation using microservices, containers, and serverless technologies.',
    features: [
      'Microservices architecture design',
      'Container orchestration',
      'Serverless implementation',
      'API gateway setup',
      'Service mesh configuration',
      'CI/CD pipeline automation',
      'Monitoring and observability',
      'Security and compliance'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability and flexibility',
      'Faster time to market',
      'Reduced operational costs',
      'Better resource utilization',
      'Enhanced reliability'
    ],
    useCases: [
      'Digital transformation projects',
      'Legacy system modernization',
      'High-scale applications',
      'Startup scaling'
    ],
    technologies: ['Kubernetes', 'Docker', 'Serverless', 'Microservices', 'Cloud Platforms'],
    link: 'https://ziontechgroup.com/services/cloud-native-architecture',
    icon: '☁️'
  },
  {
    id: 'cybersecurity-operations-center',
    name: 'Cybersecurity Operations Center (SOC)',
    category: 'it-services',
    description: '24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring services.',
    features: [
      '24/7 security monitoring',
      'Threat detection and analysis',
      'Incident response automation',
      'Vulnerability management',
      'Security awareness training',
      'Compliance monitoring',
      'Forensic analysis',
      'Threat intelligence integration'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security posture',
      'Faster threat response',
      'Reduced security risks',
      'Compliance adherence',
      'Peace of mind'
    ],
    useCases: [
      'Enterprise organizations',
      'Financial institutions',
      'Healthcare systems',
      'Government agencies'
    ],
    technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Security Analytics', 'Automation'],
    link: 'https://ziontechgroup.com/services/cybersecurity-operations-center',
    icon: '🛡️'
  },
  {
    id: 'data-lake-architecture',
    name: 'Data Lake Architecture & Implementation',
    category: 'it-services',
    description: 'Comprehensive data lake architecture design and implementation for big data analytics, machine learning, and business intelligence.',
    features: [
      'Data lake architecture design',
      'Data ingestion pipelines',
      'Data cataloging and governance',
      'ETL/ELT processes',
      'Data quality management',
      'Security and access control',
      'Analytics platform integration',
      'Performance optimization'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Centralized data management',
      'Improved data accessibility',
      'Better analytics capabilities',
      'Cost-effective storage',
      'Scalable data processing'
    ],
    useCases: [
      'Big data analytics',
      'Machine learning projects',
      'Business intelligence',
      'Data science initiatives'
    ],
    technologies: ['AWS S3', 'Azure Data Lake', 'Apache Spark', 'Hadoop', 'Data Governance'],
    link: 'https://ziontechgroup.com/services/data-lake-architecture',
    icon: '🏞️'
  },
  {
    id: 'iot-platform-development',
    name: 'IoT Platform Development',
    category: 'it-services',
    description: 'Complete IoT platform development with device management, data processing, analytics, and security for connected devices.',
    features: [
      'Device management and provisioning',
      'Data ingestion and processing',
      'Real-time analytics',
      'Edge computing integration',
      'Security and encryption',
      'API management',
      'Dashboard and visualization',
      'Integration with business systems'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Scalable IoT infrastructure',
      'Real-time data insights',
      'Enhanced device security',
      'Reduced development time',
      'Better operational efficiency'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Connected vehicles',
      'Smart buildings'
    ],
    technologies: ['IoT Platforms', 'Edge Computing', 'MQTT', 'Time Series DB', 'Analytics'],
    link: 'https://ziontechgroup.com/services/iot-platform-development',
    icon: '🌐'
  },
  {
    id: 'api-first-architecture',
    name: 'API-First Architecture Design',
    category: 'it-services',
    description: 'Comprehensive API-first architecture design and implementation for modern, scalable, and maintainable applications.',
    features: [
      'API architecture design',
      'RESTful and GraphQL APIs',
      'API gateway implementation',
      'API documentation and testing',
      'Rate limiting and security',
      'Versioning and lifecycle management',
      'Developer portal creation',
      'Performance monitoring'
    ],
    pricing: {
      starter: 35000,
      professional: 105000,
      enterprise: 280000,
      currency: 'USD'
    },
    benefits: [
      'Improved system integration',
      'Faster development cycles',
      'Better scalability',
      'Enhanced security',
      'Developer-friendly interfaces'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Partner ecosystem development'
    ],
    technologies: ['API Gateway', 'GraphQL', 'OpenAPI', 'API Management', 'Documentation'],
    link: 'https://ziontechgroup.com/services/api-first-architecture',
    icon: '🔗'
  },
  {
    id: 'observability-platform',
    name: 'Observability Platform Implementation',
    category: 'it-services',
    description: 'Complete observability platform with logging, metrics, tracing, and alerting for comprehensive system monitoring and debugging.',
    features: [
      'Centralized logging',
      'Metrics collection and analysis',
      'Distributed tracing',
      'Real-time alerting',
      'Dashboard creation',
      'Anomaly detection',
      'Performance optimization',
      'Integration with existing tools'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Complete system visibility',
      'Faster issue resolution',
      'Proactive monitoring',
      'Better performance insights',
      'Reduced downtime'
    ],
    useCases: [
      'Microservices applications',
      'Cloud-native systems',
      'DevOps teams',
      'Enterprise applications'
    ],
    technologies: ['ELK Stack', 'Prometheus', 'Grafana', 'Jaeger', 'OpenTelemetry'],
    link: 'https://ziontechgroup.com/services/observability-platform',
    icon: '👁️'
  },
  {
    id: 'gitops-implementation',
    name: 'GitOps Implementation & Automation',
    category: 'it-services',
    description: 'Complete GitOps implementation with automated deployment, configuration management, and infrastructure as code.',
    features: [
      'GitOps workflow setup',
      'Automated deployment pipelines',
      'Infrastructure as code',
      'Configuration management',
      'Environment promotion',
      'Rollback automation',
      'Security scanning',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Faster and safer deployments',
      'Improved collaboration',
      'Better audit trails',
      'Reduced manual errors',
      'Enhanced security'
    ],
    useCases: [
      'DevOps transformation',
      'Cloud-native applications',
      'Microservices deployment',
      'Infrastructure automation'
    ],
    technologies: ['GitOps', 'ArgoCD', 'Flux', 'Terraform', 'Helm'],
    link: 'https://ziontechgroup.com/services/gitops-implementation',
    icon: '🔄'
  },
  {
    id: 'service-mesh-implementation',
    name: 'Service Mesh Implementation',
    category: 'it-services',
    description: 'Complete service mesh implementation with traffic management, security, observability, and policy enforcement for microservices.',
    features: [
      'Service mesh deployment',
      'Traffic management and routing',
      'Security and encryption',
      'Observability and monitoring',
      'Policy enforcement',
      'Load balancing',
      'Circuit breaking',
      'Canary deployments'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced microservices communication',
      'Improved security posture',
      'Better observability',
      'Simplified operations',
      'Faster development cycles'
    ],
    useCases: [
      'Microservices architecture',
      'Cloud-native applications',
      'Multi-cloud deployments',
      'Legacy system integration'
    ],
    technologies: ['Istio', 'Linkerd', 'Consul Connect', 'Envoy', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/service-mesh-implementation',
    icon: '🕸️'
  },

  // Additional Advanced AI Services
  {
    id: 'ai-mlops-platform',
    name: 'AI/MLOps Platform Implementation',
    category: 'ai-services',
    description: 'Complete MLOps platform for machine learning model lifecycle management, deployment, monitoring, and governance.',
    features: [
      'Model development and training',
      'Model versioning and registry',
      'Automated model deployment',
      'Model monitoring and drift detection',
      'A/B testing framework',
      'Model governance and compliance',
      'Feature store implementation',
      'Pipeline automation'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Faster model deployment',
      'Improved model reliability',
      'Better model governance',
      'Reduced operational overhead',
      'Scalable ML operations'
    ],
    useCases: [
      'Data science teams',
      'ML engineering teams',
      'AI product development',
      'Enterprise AI initiatives'
    ],
    technologies: ['MLflow', 'Kubeflow', 'TensorFlow', 'PyTorch', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/ai-mlops-platform',
    icon: '🔬'
  },
  {
    id: 'ai-conversational-platform',
    name: 'AI Conversational Platform',
    category: 'ai-services',
    description: 'Advanced conversational AI platform with multi-modal interactions, voice, text, and visual understanding for next-generation user experiences.',
    features: [
      'Multi-modal conversation support',
      'Voice and text integration',
      'Visual understanding capabilities',
      'Context-aware responses',
      'Emotion recognition',
      'Multi-language support',
      'Custom personality development',
      'Integration with business systems'
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 600000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced user engagement',
      'Natural interaction experiences',
      'Multi-channel consistency',
      'Improved accessibility',
      'Advanced personalization'
    ],
    useCases: [
      'Customer service automation',
      'Virtual assistants',
      'Educational platforms',
      'Healthcare applications'
    ],
    technologies: ['NLP', 'Computer Vision', 'Speech Recognition', 'GPT', 'Multimodal AI'],
    link: 'https://ziontechgroup.com/services/ai-conversational-platform',
    icon: '💬'
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems Development',
    category: 'ai-services',
    description: 'Development of autonomous AI systems for robotics, vehicles, and smart infrastructure with advanced decision-making capabilities.',
    features: [
      'Autonomous decision-making algorithms',
      'Real-time sensor processing',
      'Path planning and navigation',
      'Obstacle detection and avoidance',
      'Learning and adaptation',
      'Safety and fail-safe systems',
      'Human-robot interaction',
      'Performance optimization'
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 1500000,
      currency: 'USD'
    },
    benefits: [
      'Increased automation efficiency',
      'Reduced human intervention',
      'Improved safety standards',
      '24/7 operational capability',
      'Cost-effective operations'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial robotics',
      'Smart city infrastructure',
      'Warehouse automation'
    ],
    technologies: ['Reinforcement Learning', 'Computer Vision', 'Robotics', 'Sensor Fusion', 'Control Systems'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems',
    icon: '🤖'
  },
  {
    id: 'ai-generative-platform',
    name: 'AI Generative Content Platform',
    category: 'ai-services',
    description: 'Advanced generative AI platform for creating text, images, videos, and code with custom models and fine-tuning capabilities.',
    features: [
      'Text generation and completion',
      'Image and video generation',
      'Code generation and optimization',
      'Custom model fine-tuning',
      'Multi-modal content creation',
      'Quality control and filtering',
      'API and integration support',
      'Performance optimization'
    ],
    pricing: {
      starter: 125000,
      professional: 375000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Accelerated content creation',
      'Creative automation',
      'Cost-effective production',
      'Consistent quality output',
      'Scalable content generation'
    ],
    useCases: [
      'Content creation agencies',
      'Marketing departments',
      'Software development teams',
      'Creative industries'
    ],
    technologies: ['GPT', 'DALL-E', 'Stable Diffusion', 'Codex', 'Generative AI'],
    link: 'https://ziontechgroup.com/services/ai-generative-platform',
    icon: '🎨'
  },
  {
    id: 'ai-edge-intelligence',
    name: 'AI Edge Intelligence Solutions',
    category: 'ai-services',
    description: 'Edge AI solutions for real-time processing, inference, and decision-making at the network edge with optimized models and hardware.',
    features: [
      'Edge-optimized AI models',
      'Real-time inference processing',
      'Low-latency decision making',
      'Offline operation capability',
      'Model compression and optimization',
      'Edge device management',
      'Data privacy and security',
      'Performance monitoring'
    ],
    pricing: {
      starter: 150000,
      professional: 450000,
      enterprise: 1200000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency processing',
      'Enhanced data privacy',
      'Reduced bandwidth usage',
      'Improved reliability',
      'Cost-effective edge computing'
    ],
    useCases: [
      'IoT applications',
      'Autonomous vehicles',
      'Smart manufacturing',
      'Real-time surveillance'
    ],
    technologies: ['Edge AI', 'Model Optimization', 'TensorRT', 'OpenVINO', 'Edge Computing'],
    link: 'https://ziontechgroup.com/services/ai-edge-intelligence',
    icon: '⚡'
  },
  {
    id: 'ai-ethical-governance',
    name: 'AI Ethical Governance & Compliance',
    category: 'ai-services',
    description: 'Comprehensive AI ethics and governance framework ensuring responsible AI development, deployment, and monitoring with bias detection and fairness.',
    features: [
      'AI ethics framework development',
      'Bias detection and mitigation',
      'Fairness and transparency monitoring',
      'Compliance with AI regulations',
      'Risk assessment and management',
      'Audit and reporting tools',
      'Training and awareness programs',
      'Continuous monitoring systems'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Responsible AI implementation',
      'Regulatory compliance',
      'Reduced legal and reputational risks',
      'Enhanced trust and transparency',
      'Ethical decision-making support'
    ],
    useCases: [
      'Enterprise AI initiatives',
      'Government AI projects',
      'Healthcare AI applications',
      'Financial AI systems'
    ],
    technologies: ['AI Ethics', 'Bias Detection', 'Fairness Metrics', 'Compliance Tools', 'Governance'],
    link: 'https://ziontechgroup.com/services/ai-ethical-governance',
    icon: '⚖️'
  },
  {
    id: 'ai-quantum-computing',
    name: 'AI-Quantum Computing Integration',
    category: 'ai-services',
    description: 'Cutting-edge AI solutions leveraging quantum computing for optimization, cryptography, and advanced machine learning algorithms.',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum cryptography implementation',
      'Hybrid classical-quantum systems',
      'Quantum algorithm development',
      'Performance benchmarking',
      'Quantum error correction',
      'Integration with existing AI systems'
    ],
    pricing: {
      starter: 500000,
      professional: 1500000,
      enterprise: 4000000,
      currency: 'USD'
    },
    benefits: [
      'Exponential computational advantage',
      'Advanced optimization capabilities',
      'Enhanced security through quantum cryptography',
      'Future-proof technology investment',
      'Competitive edge in research and development'
    ],
    useCases: [
      'Financial modeling and risk analysis',
      'Drug discovery and molecular simulation',
      'Cryptography and cybersecurity',
      'Scientific research and simulation'
    ],
    technologies: ['Quantum Computing', 'Qiskit', 'Cirq', 'Quantum ML', 'Quantum Algorithms'],
    link: 'https://ziontechgroup.com/services/ai-quantum-computing',
    icon: '⚛️'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category)};

export const getPopularServices = () => {
  return services.filter(service => service.isPopular)};

export const getNewServices = () => {
  return services.filter(service => service.isNew)};