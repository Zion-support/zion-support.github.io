export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;
  category: 'ai' | 'it' | 'micro-saas' | 'specialized';
  subcategory: string;
  features: string[];
  benefits: string[];
  pricing: {
    starting: string;
    plans: Array<{
      name: string;
      price: string;
      features: string[];
      popular?: boolean;
    }>;
  };
  useCases: string[];
  technologies: string[];
  targetAudience: string[];
  link: string;
  popular?: boolean;
  new?: boolean;
}

export const services: Service[] = [
  // AI Services
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation',
    description: 'Create high-quality content 10x faster with our advanced AI platform.',
    longDescription: 'Transform your content strategy with our cutting-edge AI content generation platform. Generate blog posts, social media content, marketing copy, and technical documentation in minutes, not hours. Our AI understands your brand voice and creates content that resonates with your audience.',
    icon: '✍️',
    category: 'ai',
    subcategory: 'Content & Marketing',
    features: [
      '10x Faster Content Creation',
      '50+ Languages Supported',
      'SEO Optimized Content',
      'Brand Voice Training',
      'Plagiarism Detection',
      'Content Templates Library',
      'Multi-format Export',
      'Team Collaboration Tools'
    ],
    benefits: [
      'Save 80% of content creation time',
      'Increase content output by 10x',
      'Improve SEO rankings',
      'Maintain consistent brand voice',
      'Reduce content costs by 70%'
    ],
    pricing: {
      starting: '$29/month',
      plans: [
        {
          name: 'Starter',
          price: '$29/month',
          features: ['10,000 words/month', '5 users', 'Basic templates', 'Email support']
        },
        {
          name: 'Professional',
          price: '$99/month',
          features: ['100,000 words/month', '25 users', 'All templates', 'Priority support', 'API access'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$299/month',
          features: ['Unlimited words', 'Unlimited users', 'Custom templates', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Email marketing campaigns',
      'Product descriptions',
      'Technical documentation'
    ],
    technologies: ['GPT-4', 'Claude', 'Custom AI Models', 'NLP', 'Machine Learning'],
    targetAudience: ['Content Marketers', 'Bloggers', 'E-commerce', 'Agencies', 'SMBs'],
    link: '/ai-content-generation',
    popular: true,
    new: false
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support',
    description: 'Provide 24/7 intelligent customer support with AI that never sleeps.',
    longDescription: 'Revolutionize your customer service with our AI-powered support system. Handle customer inquiries instantly, provide accurate responses, and escalate complex issues to human agents seamlessly. Reduce response times by 90% while improving customer satisfaction.',
    icon: '💬',
    category: 'ai',
    subcategory: 'Customer Service',
    features: [
      '24/7 AI Chat Support',
      '90% Faster Response Time',
      'Multi-language Support',
      'Human Handoff System',
      'Sentiment Analysis',
      'Knowledge Base Integration',
      'Ticket Management',
      'Performance Analytics'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve customer satisfaction',
      'Handle 10x more inquiries',
      'Provide instant responses',
      'Scale support globally'
    ],
    pricing: {
      starting: '$199/month',
      plans: [
        {
          name: 'Basic',
          price: '$199/month',
          features: ['1,000 conversations/month', 'Basic AI responses', 'Email support']
        },
        {
          name: 'Professional',
          price: '$499/month',
          features: ['10,000 conversations/month', 'Advanced AI', 'Human handoff', 'Analytics'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$1,299/month',
          features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support', 'API access']
        }
      ]
    },
    useCases: [
      'E-commerce support',
      'SaaS customer service',
      'Technical support',
      'FAQ automation',
      'Lead qualification'
    ],
    technologies: ['NLP', 'Machine Learning', 'Chatbots', 'Sentiment Analysis', 'API Integration'],
    targetAudience: ['E-commerce', 'SaaS Companies', 'Service Providers', 'Enterprise'],
    link: '/ai-customer-support',
    popular: true,
    new: false
  },
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation',
    description: 'Automate your sales process and close more deals with AI-powered tools.',
    longDescription: 'Supercharge your sales team with AI-driven automation. From lead scoring to follow-up sequences, our platform helps you identify the best prospects, personalize outreach, and close deals faster than ever before.',
    icon: '📈',
    category: 'ai',
    subcategory: 'Sales & Marketing',
    features: [
      'Intelligent Lead Scoring',
      'Automated Follow-ups',
      'Predictive Analytics',
      'Sales Performance Optimization',
      'CRM Integration',
      'Email Sequence Automation',
      'Call Scheduling',
      'Deal Forecasting'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Reduce sales cycle by 30%',
      'Improve lead quality',
      'Automate repetitive tasks',
      'Boost revenue by 25%'
    ],
    pricing: {
      starting: '$299/month',
      plans: [
        {
          name: 'Starter',
          price: '$299/month',
          features: ['1,000 leads/month', 'Basic automation', 'Email integration']
        },
        {
          name: 'Professional',
          price: '$799/month',
          features: ['10,000 leads/month', 'Advanced AI', 'CRM integration', 'Analytics'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$1,999/month',
          features: ['Unlimited leads', 'Custom AI models', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Lead qualification',
      'Email marketing automation',
      'Sales pipeline management',
      'Customer retention',
      'Revenue forecasting'
    ],
    technologies: ['Machine Learning', 'Predictive Analytics', 'CRM APIs', 'Email Automation', 'Data Science'],
    targetAudience: ['Sales Teams', 'Marketing Agencies', 'B2B Companies', 'SaaS'],
    link: '/ai-sales-automation',
    popular: true,
    new: false
  },
  {
    id: 'ai-data-analytics',
    name: 'AI Data Analytics',
    description: 'Transform raw data into actionable insights with AI-powered analytics.',
    longDescription: 'Unlock the power of your data with our advanced AI analytics platform. Get real-time insights, predictive analytics, and automated reporting that helps you make data-driven decisions and stay ahead of the competition.',
    icon: '📊',
    category: 'ai',
    subcategory: 'Analytics & Intelligence',
    features: [
      'Real-time Analytics',
      'Predictive Modeling',
      'Automated Reporting',
      'Data Visualization',
      'Anomaly Detection',
      'Custom Dashboards',
      'API Integration',
      'Machine Learning Insights'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends and patterns',
      'Reduce analysis time by 80%',
      'Improve forecasting accuracy',
      'Automate reporting processes'
    ],
    pricing: {
      starting: '$599/month',
      plans: [
        {
          name: 'Basic',
          price: '$599/month',
          features: ['5 data sources', 'Basic analytics', 'Standard reports']
        },
        {
          name: 'Professional',
          price: '$1,299/month',
          features: ['20 data sources', 'Advanced AI', 'Custom dashboards', 'API access'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$2,999/month',
          features: ['Unlimited sources', 'Custom AI models', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Business intelligence',
      'Customer behavior analysis',
      'Financial forecasting',
      'Marketing performance',
      'Operational optimization'
    ],
    technologies: ['Machine Learning', 'Big Data', 'Python', 'R', 'SQL', 'Cloud Computing'],
    targetAudience: ['Data Analysts', 'Business Intelligence', 'Marketing Teams', 'Finance', 'Enterprise'],
    link: '/ai-data-analytics',
    popular: false,
    new: false
  },
  {
    id: 'ai-cybersecurity',
    name: 'AI Cybersecurity',
    description: 'Advanced AI-powered security solutions with threat detection and automated response.',
    longDescription: 'Protect your business with next-generation AI cybersecurity. Our platform uses machine learning to detect threats in real-time, automate incident response, and provide 24/7 security monitoring to keep your data safe.',
    icon: '🔒',
    category: 'ai',
    subcategory: 'Security',
    features: [
      'AI Threat Detection',
      'Real-time Monitoring',
      'Automated Incident Response',
      'Vulnerability Assessment',
      'Compliance Management',
      'Security Analytics',
      'Threat Intelligence',
      '24/7 SOC Services'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 90%',
      'Automate security responses',
      'Ensure compliance',
      'Protect against zero-day attacks'
    ],
    pricing: {
      starting: '$799/month',
      plans: [
        {
          name: 'Essential',
          price: '$799/month',
          features: ['Basic threat detection', 'Email security', 'Web filtering']
        },
        {
          name: 'Professional',
          price: '$1,999/month',
          features: ['Advanced AI detection', 'Network monitoring', 'Incident response'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$4,999/month',
          features: ['Full SOC services', 'Custom AI models', 'Dedicated team', 'Compliance support']
        }
      ]
    },
    useCases: [
      'Threat detection',
      'Incident response',
      'Compliance management',
      'Network security',
      'Data protection'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Threat Intelligence', 'Cloud Security'],
    targetAudience: ['Enterprise', 'Healthcare', 'Finance', 'Government', 'SMBs'],
    link: '/ai-cybersecurity',
    popular: false,
    new: false
  },

  // Micro SAAS Services
  {
    id: 'ai-email-automation',
    name: 'AI Email Automation',
    description: 'Intelligent email marketing automation that increases engagement and conversions.',
    longDescription: 'Revolutionize your email marketing with AI-powered automation. Create personalized email campaigns, optimize send times, and increase engagement rates with our intelligent email platform.',
    icon: '📧',
    category: 'micro-saas',
    subcategory: 'Marketing',
    features: [
      'AI-Powered Personalization',
      'Send Time Optimization',
      'Subject Line Generation',
      'A/B Testing Automation',
      'Behavioral Triggers',
      'Email Templates',
      'Analytics Dashboard',
      'List Segmentation'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 60%',
      'Reduce unsubscribe rates',
      'Save 10 hours per week',
      'Improve ROI by 300%'
    ],
    pricing: {
      starting: '$49/month',
      plans: [
        {
          name: 'Starter',
          price: '$49/month',
          features: ['5,000 subscribers', 'Basic automation', 'Email templates']
        },
        {
          name: 'Professional',
          price: '$149/month',
          features: ['25,000 subscribers', 'Advanced AI', 'A/B testing', 'Analytics'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$399/month',
          features: ['Unlimited subscribers', 'Custom AI models', 'Dedicated support', 'API access']
        }
      ]
    },
    useCases: [
      'Welcome email sequences',
      'Abandoned cart recovery',
      'Newsletter campaigns',
      'Lead nurturing',
      'Customer retention'
    ],
    technologies: ['Machine Learning', 'Email APIs', 'A/B Testing', 'Analytics', 'Personalization'],
    targetAudience: ['E-commerce', 'SaaS', 'Marketing Agencies', 'SMBs', 'Enterprise'],
    link: '/ai-email-automation',
    popular: true,
    new: true
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automate your social media presence with AI-powered content creation and scheduling.',
    longDescription: 'Take your social media to the next level with our AI social media manager. Create engaging posts, schedule content, analyze performance, and grow your following across all major platforms.',
    icon: '📱',
    category: 'micro-saas',
    subcategory: 'Social Media',
    features: [
      'AI Content Creation',
      'Multi-platform Scheduling',
      'Hashtag Optimization',
      'Engagement Analytics',
      'Competitor Analysis',
      'Content Calendar',
      'Auto-posting',
      'Performance Tracking'
    ],
    benefits: [
      'Save 15 hours per week',
      'Increase engagement by 50%',
      'Grow followers organically',
      'Improve content quality',
      'Boost brand awareness'
    ],
    pricing: {
      starting: '$79/month',
      plans: [
        {
          name: 'Basic',
          price: '$79/month',
          features: ['3 social accounts', 'Basic scheduling', 'Content templates']
        },
        {
          name: 'Professional',
          price: '$199/month',
          features: ['10 social accounts', 'AI content creation', 'Analytics', 'Competitor analysis'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$499/month',
          features: ['Unlimited accounts', 'Custom AI training', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Content creation',
      'Social media scheduling',
      'Engagement management',
      'Brand monitoring',
      'Influencer outreach'
    ],
    technologies: ['AI Content Generation', 'Social Media APIs', 'Analytics', 'Image Processing', 'NLP'],
    targetAudience: ['Social Media Managers', 'Marketing Agencies', 'Influencers', 'SMBs', 'Enterprise'],
    link: '/ai-social-media-manager',
    popular: true,
    new: true
  },
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager',
    description: 'Intelligent project management with AI-powered insights and automation.',
    longDescription: 'Streamline your project management with AI-driven insights, automated task assignment, and intelligent resource allocation. Keep projects on track and deliver results faster.',
    icon: '📋',
    category: 'micro-saas',
    subcategory: 'Productivity',
    features: [
      'AI Task Assignment',
      'Resource Optimization',
      'Risk Prediction',
      'Progress Tracking',
      'Team Collaboration',
      'Time Estimation',
      'Budget Management',
      'Performance Analytics'
    ],
    benefits: [
      'Complete projects 30% faster',
      'Reduce project overruns by 50%',
      'Improve team productivity',
      'Better resource allocation',
      'Predict and prevent risks'
    ],
    pricing: {
      starting: '$99/month',
      plans: [
        {
          name: 'Team',
          price: '$99/month',
          features: ['10 team members', 'Basic AI features', 'Project templates']
        },
        {
          name: 'Professional',
          price: '$299/month',
          features: ['50 team members', 'Advanced AI', 'Analytics', 'Integrations'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$799/month',
          features: ['Unlimited members', 'Custom AI models', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Software development',
      'Marketing campaigns',
      'Event planning',
      'Construction projects',
      'Product launches'
    ],
    technologies: ['Machine Learning', 'Project Management APIs', 'Analytics', 'Collaboration Tools', 'AI Planning'],
    targetAudience: ['Project Managers', 'Development Teams', 'Marketing Teams', 'Consultants', 'Agencies'],
    link: '/ai-project-manager',
    popular: false,
    new: true
  },
  {
    id: 'ai-crm',
    name: 'AI-Powered CRM',
    description: 'Intelligent customer relationship management with AI insights and automation.',
    longDescription: 'Transform your customer relationships with our AI-powered CRM. Get intelligent lead scoring, automated follow-ups, and predictive analytics to close more deals and retain customers.',
    icon: '👥',
    category: 'micro-saas',
    subcategory: 'Sales',
    features: [
      'AI Lead Scoring',
      'Automated Follow-ups',
      'Predictive Analytics',
      'Contact Management',
      'Sales Pipeline',
      'Email Integration',
      'Performance Tracking',
      'Custom Dashboards'
    ],
    benefits: [
      'Increase sales by 25%',
      'Improve lead quality',
      'Automate repetitive tasks',
      'Better customer insights',
      'Faster deal closure'
    ],
    pricing: {
      starting: '$149/month',
      plans: [
        {
          name: 'Starter',
          price: '$149/month',
          features: ['1,000 contacts', 'Basic AI features', 'Email integration']
        },
        {
          name: 'Professional',
          price: '$399/month',
          features: ['10,000 contacts', 'Advanced AI', 'Analytics', 'API access'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$999/month',
          features: ['Unlimited contacts', 'Custom AI models', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Lead management',
      'Sales pipeline tracking',
      'Customer retention',
      'Email marketing',
      'Performance analysis'
    ],
    technologies: ['Machine Learning', 'CRM APIs', 'Email Integration', 'Analytics', 'Automation'],
    targetAudience: ['Sales Teams', 'Small Businesses', 'Agencies', 'Consultants', 'Enterprise'],
    link: '/ai-crm',
    popular: true,
    new: false
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    description: 'Seamless cloud transformation with zero downtime and cost optimization.',
    longDescription: 'Migrate your infrastructure to the cloud with our expert team. We ensure zero downtime, optimize costs, and enhance security while modernizing your IT infrastructure.',
    icon: '☁️',
    category: 'it',
    subcategory: 'Cloud Services',
    features: [
      'Zero Downtime Migration',
      'Cost Optimization',
      'Security Enhancement',
      'Performance Monitoring',
      'Disaster Recovery',
      'Compliance Support',
      '24/7 Support',
      'Training & Documentation'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability',
      'Enhance security',
      'Increase reliability',
      'Enable remote work'
    ],
    pricing: {
      starting: '$2,999/project',
      plans: [
        {
          name: 'Small Business',
          price: '$2,999/project',
          features: ['Up to 10 servers', 'Basic migration', 'Email support']
        },
        {
          name: 'Enterprise',
          price: '$9,999/project',
          features: ['Up to 100 servers', 'Advanced migration', 'Priority support', 'Training'],
          popular: true
        },
        {
          name: 'Custom',
          price: 'Contact us',
          features: ['Unlimited servers', 'Custom solution', 'Dedicated team', 'Ongoing support']
        }
      ]
    },
    useCases: [
      'AWS migration',
      'Azure migration',
      'Google Cloud migration',
      'Hybrid cloud setup',
      'Legacy system modernization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    targetAudience: ['Enterprise', 'SMBs', 'Startups', 'Government', 'Healthcare'],
    link: '/cloud-migration',
    popular: false,
    new: false
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
    longDescription: 'Accelerate your software delivery with our DevOps automation services. Set up CI/CD pipelines, implement infrastructure as code, and ensure reliable deployments with comprehensive monitoring.',
    icon: '🛠️',
    category: 'it',
    subcategory: 'Development',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Automated Testing',
      'Deployment Automation',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization',
      'Documentation'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 90%',
      'Improve code quality',
      'Enable continuous delivery',
      'Scale development teams'
    ],
    pricing: {
      starting: '$299/month',
      plans: [
        {
          name: 'Basic',
          price: '$299/month',
          features: ['Basic CI/CD', 'Git integration', 'Email support']
        },
        {
          name: 'Professional',
          price: '$799/month',
          features: ['Advanced automation', 'Monitoring', 'Security scanning', 'Priority support'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$1,999/month',
          features: ['Custom solutions', 'Dedicated support', 'Training', 'Ongoing optimization']
        }
      ]
    },
    useCases: [
      'Software development',
      'Mobile app deployment',
      'Web application delivery',
      'Microservices architecture',
      'Legacy system modernization'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    targetAudience: ['Development Teams', 'Startups', 'SMBs', 'Enterprise', 'Agencies'],
    link: '/devops-automation',
    popular: true,
    new: false
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Audit & Assessment',
    description: 'Comprehensive security assessment and vulnerability management services.',
    longDescription: 'Protect your business with our comprehensive cybersecurity audit. We identify vulnerabilities, assess risks, and provide actionable recommendations to strengthen your security posture.',
    icon: '🛡️',
    category: 'it',
    subcategory: 'Security',
    features: [
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Policy Review',
      'Compliance Audit',
      'Risk Assessment',
      'Security Training',
      'Incident Response Plan',
      'Ongoing Monitoring'
    ],
    benefits: [
      'Identify security gaps',
      'Meet compliance requirements',
      'Reduce security risks',
      'Improve security posture',
      'Protect sensitive data'
    ],
    pricing: {
      starting: '$1,999/audit',
      plans: [
        {
          name: 'Basic Assessment',
          price: '$1,999/audit',
          features: ['Vulnerability scan', 'Basic report', 'Email support']
        },
        {
          name: 'Comprehensive Audit',
          price: '$4,999/audit',
          features: ['Full assessment', 'Penetration testing', 'Detailed report', 'Recommendations'],
          popular: true
        },
        {
          name: 'Ongoing Security',
          price: '$999/month',
          features: ['Continuous monitoring', 'Regular assessments', 'Security updates', 'Priority support']
        }
      ]
    },
    useCases: [
      'Compliance requirements',
      'Security assessment',
      'Vulnerability management',
      'Incident response',
      'Security training'
    ],
    technologies: ['Penetration Testing Tools', 'Vulnerability Scanners', 'SIEM', 'Compliance Frameworks', 'Security Standards'],
    targetAudience: ['Enterprise', 'Healthcare', 'Finance', 'Government', 'SMBs'],
    link: '/cybersecurity-audit',
    popular: false,
    new: false
  },

  // Specialized Services
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing capabilities for complex problem solving.',
    longDescription: 'Harness the power of quantum computing for optimization, cryptography, and complex simulations. Our quantum solutions provide exponential speedup for specific computational problems.',
    icon: '⚛️',
    category: 'specialized',
    subcategory: 'Advanced Computing',
    features: [
      'Quantum Algorithm Development',
      'Optimization Problems',
      'Cryptography Solutions',
      'Quantum Simulation',
      'Quantum Machine Learning',
      'Research & Development',
      'Custom Quantum Solutions',
      'Expert Consultation'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve complex optimization problems',
      'Enhanced security with quantum cryptography',
      'Breakthrough research capabilities',
      'Competitive advantage'
    ],
    pricing: {
      starting: 'Custom Pricing',
      plans: [
        {
          name: 'Research Project',
          price: '$25,000/project',
          features: ['Quantum algorithm development', 'Research support', 'Basic implementation']
        },
        {
          name: 'Commercial Solution',
          price: '$100,000/project',
          features: ['Custom quantum solution', 'Full implementation', 'Ongoing support'],
          popular: true
        },
        {
          name: 'Enterprise Partnership',
          price: 'Contact us',
          features: ['Long-term partnership', 'Dedicated quantum team', 'Custom development', 'Exclusive access']
        }
      ]
    },
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Cryptography',
      'Optimization problems',
      'Scientific research'
    ],
    technologies: ['Quantum Algorithms', 'Qiskit', 'Cirq', 'Quantum Hardware', 'Quantum Software'],
    targetAudience: ['Research Institutions', 'Financial Services', 'Pharmaceutical', 'Government', 'Enterprise'],
    link: '/quantum-computing',
    popular: false,
    new: true
  },
  {
    id: 'blockchain-development',
    name: 'Blockchain & Web3 Development',
    description: 'Decentralized applications, smart contracts, and Web3 solutions for the future.',
    longDescription: 'Build the future with our blockchain and Web3 development services. Create decentralized applications, smart contracts, and DeFi protocols that revolutionize how businesses operate.',
    icon: '🔗',
    category: 'specialized',
    subcategory: 'Blockchain',
    features: [
      'Smart Contract Development',
      'DeFi Protocol Creation',
      'NFT Marketplace Development',
      'Web3 Application Development',
      'Blockchain Integration',
      'Token Development',
      'Security Auditing',
      'Consulting Services'
    ],
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparent transactions',
      'Reduced intermediaries',
      'Innovation opportunities'
    ],
    pricing: {
      starting: '$8,000/project',
      plans: [
        {
          name: 'Smart Contract',
          price: '$8,000/project',
          features: ['Basic smart contract', 'Testing', 'Deployment']
        },
        {
          name: 'DApp Development',
          price: '$25,000/project',
          features: ['Full DApp development', 'Frontend & backend', 'Testing & deployment'],
          popular: true
        },
        {
          name: 'Enterprise Solution',
          price: '$100,000/project',
          features: ['Custom blockchain solution', 'Full ecosystem', 'Ongoing support', 'Training']
        }
      ]
    },
    useCases: [
      'DeFi applications',
      'NFT marketplaces',
      'Supply chain tracking',
      'Digital identity',
      'Tokenization'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Polygon', 'Avalanche'],
    targetAudience: ['Startups', 'Enterprise', 'Financial Services', 'Gaming', 'Art & Media'],
    link: '/blockchain-development',
    popular: true,
    new: false
  },
  {
    id: 'iot-solutions',
    name: 'IoT & Edge Computing Solutions',
    description: 'Connected devices and edge computing solutions for smart cities and industrial automation.',
    longDescription: 'Transform your business with IoT and edge computing solutions. Connect devices, collect data, and make intelligent decisions at the edge for improved efficiency and automation.',
    icon: '🌐',
    category: 'specialized',
    subcategory: 'IoT',
    features: [
      'Device Management',
      'Edge Analytics',
      'Real-time Processing',
      'Industrial IoT',
      'Smart City Solutions',
      'Data Visualization',
      'Security & Compliance',
      'Scalable Architecture'
    ],
    benefits: [
      'Real-time data processing',
      'Reduced latency',
      'Improved efficiency',
      'Cost optimization',
      'Enhanced automation'
    ],
    pricing: {
      starting: '$499/month',
      plans: [
        {
          name: 'Small Scale',
          price: '$499/month',
          features: ['Up to 100 devices', 'Basic analytics', 'Email support']
        },
        {
          name: 'Industrial',
          price: '$1,999/month',
          features: ['Up to 1,000 devices', 'Advanced analytics', 'Priority support', 'Custom dashboards'],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '$4,999/month',
          features: ['Unlimited devices', 'Custom solutions', 'Dedicated support', 'White-label']
        }
      ]
    },
    useCases: [
      'Smart manufacturing',
      'Predictive maintenance',
      'Environmental monitoring',
      'Smart buildings',
      'Fleet management'
    ],
    technologies: ['IoT Platforms', 'Edge Computing', 'Machine Learning', '5G', 'LoRaWAN', 'MQTT'],
    targetAudience: ['Manufacturing', 'Smart Cities', 'Agriculture', 'Healthcare', 'Transportation'],
    link: '/iot-solutions',
    popular: false,
    new: true
  }
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

export const getNewServices = () => {
  return services.filter(service => service.new);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};