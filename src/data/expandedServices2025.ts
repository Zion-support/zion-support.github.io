export type ServiceItem = { id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Digital Marketing' | 'Business Intelligence' | 'Supply Chain' | 'Healthcare Tech' | 'Education Tech' | 'Legal Tech' | 'Real Estate Tech';
  price: string; // average market starting price
  billing: 'month' | 'project' | 'hour';
  features: string[];
  benefits: string[];
  marketSize: string;
  targetAudience: string;
  ctaLabel: string;
  href: string; // internal path or external URL
  external?: boolean;
  contactInfo: {  
    phone: string;
    email: string
    address: string
      };
};

export type ServiceCategory = { name: string;
  slug: string;
  description: string;
  items: ServiceItem[];
    };

export const expandedServices2025: ServiceCategory[] = [
  { name: 'AI-Powered Micro SaaS',
    slug: 'ai-micro-saas',
    description: 'Intelligent software-as-a-service solutions powered by cutting-edge AI',
    items: [
      { id: 'ai-content-optimizer-pro',
        title: 'AI Content Optimizer Pro',
        description: 'Advanced content optimization using AI to improve SEO, readability, and engagement across all digital platforms with real-time performance analytics.',
        category: 'Micro SaaS',
        price: '$299',
        billing: 'month',
        features: [
          'AI-powered SEO optimization',
          'Content readability scoring',
          'Multi-language support',
          'Performance analytics',
          'Automated A/B testing',
          'Content plagiarism detection',
          'Social media optimization',
          'Competitor analysis'
        ],
        benefits: [
          'Increase organic traffic by 40-60%',
          'Improve content engagement by 35%',
          'Reduce content creation time by 50%',
          'Boost conversion rates by 25%'
        ],
        marketSize: '$15.2B (Content Marketing)',
        targetAudience: 'Marketing teams, Content creators, SEO agencies, E-commerce businesses',
        ctaLabel: 'Start Free Trial',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'ai-sales-intelligence-platform',
        title: 'AI Sales Intelligence Platform',
        description: 'Comprehensive sales intelligence platform that uses AI to identify prospects, predict buying behavior, and automate sales processes.',
        category: 'Micro SaaS',
        price: '$499',
        billing: 'month',
        features: [
          'AI-powered lead scoring',
          'Predictive analytics',
          'Automated outreach sequences',
          'CRM integration',
          'Sales forecasting',
          'Competitor monitoring',
          'Market trend analysis',
          'Performance tracking'
        ],
        benefits: [
          'Increase sales productivity by 45%',
          'Improve lead conversion by 30%',
          'Reduce sales cycle by 25%',
          'Boost revenue by 35%'
        ],
        marketSize: '$8.7B (Sales Intelligence)',
        targetAudience: 'Sales teams, B2B companies, Sales managers, Business development',
        ctaLabel: 'Schedule Demo',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'ai-customer-success-automation',
        title: 'AI Customer Success Automation',
        description: 'Intelligent customer success platform that automates onboarding, engagement, and retention strategies using predictive analytics.',
        category: 'Micro SaaS',
        price: '$399',
        billing: 'month',
        features: [
          'Automated onboarding workflows',
          'Churn prediction',
          'Customer health scoring',
          'Personalized engagement',
          'Success metrics tracking',
          'Integration capabilities',
          'Reporting dashboard',
          'Mobile app support'
        ],
        benefits: [
          'Reduce churn by 40%',
          'Increase customer lifetime value by 50%',
          'Improve customer satisfaction by 35%',
          'Automate 80% of manual tasks'
        ],
        marketSize: '$6.8B (Customer Success)',
        targetAudience: 'SaaS companies, Customer success teams, Subscription businesses',
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'ai-workflow-automation-suite',
        title: 'AI Workflow Automation Suite',
        description: 'Comprehensive workflow automation platform that uses AI to streamline business processes, reduce manual work, and improve efficiency.',
        category: 'Micro SaaS',
        price: '$599',
        billing: 'month',
        features: [
          'Visual workflow builder',
          'AI process optimization',
          'Integration with 100+ apps',
          'Real-time monitoring',
          'Custom automation rules',
          'Mobile workflow access',
          'Analytics and reporting',
          'Multi-tenant support'
        ],
        benefits: [
          'Reduce manual work by 70%',
          'Improve process efficiency by 45%',
          'Cut operational costs by 30%',
          'Increase team productivity by 40%'
        ],
        marketSize: '$12.4B (Workflow Automation)',
        targetAudience: 'Operations teams, HR departments, Finance teams, Manufacturing',
        ctaLabel: 'Start Free Trial',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      }
    ]
  },
  { name: 'Advanced IT Infrastructure',
    slug: 'advanced-it-infrastructure',
    description: 'Enterprise-grade IT infrastructure solutions for modern businesses',
    items: [
      { id: 'zero-trust-security-framework',
        title: 'Zero Trust Security Framework',
        description: 'Comprehensive zero-trust security implementation that provides continuous verification and strict access controls across all network resources.',
        category: 'IT Services',
        price: '$15,000',
        billing: 'project',
        features: [
          'Identity and access management',
          'Network segmentation',
          'Continuous monitoring',
          'Threat detection',
          'Compliance reporting',
          'Security automation',
          'Incident response',
          '24/7 security operations'
        ],
        benefits: [
          'Reduce security incidents by 80%',
          'Improve compliance scores by 95%',
          'Lower security costs by 30%',
          'Enhance audit readiness'
        ],
        marketSize: '$38.5B (Cybersecurity)',
        targetAudience: 'Enterprises, Healthcare, Financial services, Government',
        ctaLabel: 'Request Quote',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'hybrid-cloud-migration',
        title: 'Hybrid Cloud Migration Services',
        description: 'End-to-end hybrid cloud migration services that optimize costs, improve performance, and ensure business continuity during transition.',
        category: 'IT Services',
        price: '$25,000',
        billing: 'project',
        features: [
          'Cloud readiness assessment',
          'Migration strategy planning',
          'Data migration services',
          'Application modernization',
          'Performance optimization',
          'Cost optimization',
          'Security implementation',
          'Post-migration support'
        ],
        benefits: [
          'Reduce infrastructure costs by 40%',
          'Improve application performance by 60%',
          'Increase scalability and flexibility',
          'Enhance disaster recovery'
        ],
        marketSize: '$83.5B (Cloud Services)',
        targetAudience: 'Medium to large enterprises, Digital transformation initiatives',
        ctaLabel: 'Schedule Consultation',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'devops-automation-platform',
        title: 'DevOps Automation Platform',
        description: 'Comprehensive DevOps automation platform that streamlines CI/CD pipelines, infrastructure management, and deployment processes.',
        category: 'IT Services',
        price: '$8,500',
        billing: 'project',
        features: [
          'CI/CD pipeline automation',
          'Infrastructure as code',
          'Container orchestration',
          'Monitoring and alerting',
          'Security scanning',
          'Performance testing',
          'Deployment automation',
          'Team collaboration tools'
        ],
        benefits: [
          'Reduce deployment time by 80%',
          'Improve code quality by 45%',
          'Lower operational costs by 35%',
          'Increase team productivity by 50%'
        ],
        marketSize: '$25.8B (DevOps)',
        targetAudience: 'Development teams, IT operations, Software companies',
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      }
    ]
  },
  { name: 'AI-Powered Business Solutions',
    slug: 'ai-business-solutions',
    description: 'Intelligent AI solutions that transform business operations and decision-making',
    items: [
      { id: 'ai-business-intelligence-suite',
        title: 'AI Business Intelligence Suite',
        description: 'Advanced business intelligence platform powered by AI that provides real-time insights, predictive analytics, and automated reporting.',
        category: 'AI Solutions',
        price: '$12,000',
        billing: 'project',
        features: [
          'Real-time data analytics',
          'Predictive modeling',
          'Automated reporting',
          'Interactive dashboards',
          'Data visualization',
          'Natural language queries',
          'Mobile BI access',
          'Integration capabilities'
        ],
        benefits: [
          'Improve decision-making by 60%',
          'Reduce reporting time by 75%',
          'Increase data accuracy by 90%',
          'Boost operational efficiency by 40%'
        ],
        marketSize: '$29.5B (Business Intelligence)',
        targetAudience: 'Executives, Data analysts, Business managers, Operations teams',
        ctaLabel: 'Request Demo',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'ai-supply-chain-optimization',
        title: 'AI Supply Chain Optimization',
        description: 'Intelligent supply chain optimization platform that uses AI to predict demand, optimize inventory, and reduce costs across the supply chain.',
        category: 'AI Solutions',
        price: '$18,000',
        billing: 'project',
        features: [
          'Demand forecasting',
          'Inventory optimization',
          'Route optimization',
          'Supplier management',
          'Risk assessment',
          'Cost optimization',
          'Real-time tracking',
          'Performance analytics'
        ],
        benefits: [
          'Reduce inventory costs by 25%',
          'Improve forecast accuracy by 40%',
          'Optimize delivery routes by 30%',
          'Enhance supplier relationships'
        ],
        marketSize: '$45.2B (Supply Chain Management)',
        targetAudience: 'Manufacturing, Retail, Logistics, Distribution',
        ctaLabel: 'Schedule Consultation',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'ai-customer-experience-platform',
        title: 'AI Customer Experience Platform',
        description: 'Comprehensive customer experience platform that uses AI to personalize interactions, predict customer needs, and improve satisfaction.',
        category: 'AI Solutions',
        price: '$9,500',
        billing: 'project',
        features: [
          'Customer journey mapping',
          'Personalization engine',
          'Sentiment analysis',
          'Predictive analytics',
          'Omnichannel support',
          'Customer feedback management',
          'Performance metrics',
          'Integration capabilities'
        ],
        benefits: [
          'Increase customer satisfaction by 45%',
          'Improve customer retention by 35%',
          'Boost conversion rates by 30%',
          'Reduce support costs by 25%'
        ],
        marketSize: '$18.7B (Customer Experience)',
        targetAudience: 'Customer service teams, Marketing teams, E-commerce businesses',
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      }
    ]
  },
  { name: 'Emerging Technology Solutions',
    slug: 'emerging-tech-solutions',
    description: 'Cutting-edge technology solutions for forward-thinking organizations',
    items: [
      { id: 'quantum-computing-solutions',
        title: 'Quantum Computing Solutions',
        description: 'Advanced quantum computing solutions for complex problem-solving, optimization, and research applications.',
        category: 'Quantum Computing',
        price: '$50,000',
        billing: 'project',
        features: [
          'Quantum algorithm development',
          'Optimization problems',
          'Research collaboration',
          'Performance benchmarking',
          'Custom quantum solutions',
          'Training and support',
          'Cloud quantum access',
          'Application development'
        ],
        benefits: [
          'Solve complex problems 1000x faster',
          'Optimize business processes',
          'Gain competitive advantage',
          'Future-proof technology investment'
        ],
        marketSize: '$8.7B (Quantum Computing)',
        targetAudience: 'Research institutions, Financial services, Pharmaceutical companies, Government',
        ctaLabel: 'Schedule Consultation',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'blockchain-enterprise-solutions',
        title: 'Blockchain Enterprise Solutions',
        description: 'Enterprise-grade blockchain solutions for supply chain transparency, digital identity, and secure transactions.',
        category: 'Blockchain & Web3',
        price: '$35,000',
        billing: 'project',
        features: [
          'Smart contract development',
          'Supply chain tracking',
          'Digital identity management',
          'Tokenization services',
          'DeFi solutions',
          'Security auditing',
          'Integration services',
          'Training and support'
        ],
        benefits: [
          'Increase transparency by 100%',
          'Reduce fraud by 90%',
          'Lower transaction costs by 60%',
          'Improve trust and security'
        ],
        marketSize: '$67.4B (Blockchain)',
        targetAudience: 'Financial services, Supply chain, Healthcare, Government',
        ctaLabel: 'Request Quote',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'iot-edge-computing-platform',
        title: 'IoT Edge Computing Platform',
        description: 'Comprehensive IoT edge computing platform that enables real-time data processing, analytics, and automation at the edge.',
        category: 'IoT & Edge',
        price: '$22,000',
        billing: 'project',
        features: [
          'Edge device management',
          'Real-time analytics',
          'Data processing',
          'Security implementation',
          'Integration services',
          'Monitoring dashboard',
          'Scalability support',
          '24/7 support'
        ],
        benefits: [
          'Reduce latency by 80%',
          'Lower bandwidth costs by 60%',
          'Improve reliability by 90%',
          'Enable real-time decision making'
        ],
        marketSize: '$32.7B (IoT Edge Computing)',
        targetAudience: 'Manufacturing, Smart cities, Healthcare, Transportation',
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      }
    ]
  },
  { name: 'Industry-Specific Solutions',
    slug: 'industry-solutions',
    description: 'Tailored solutions for specific industry verticals',
    items: [
      { id: 'healthcare-ai-platform',
        title: 'Healthcare AI Platform',
        description: 'AI-powered healthcare platform for diagnosis assistance, patient monitoring, and medical research.',
        category: 'Healthcare Tech',
        price: '$45,000',
        billing: 'project',
        features: [
          'Medical image analysis',
          'Patient data analytics',
          'Drug discovery support',
          'Clinical decision support',
          'Compliance management',
          'Integration with EHR',
          'Security and privacy',
          'Training and support'
        ],
        benefits: [
          'Improve diagnosis accuracy by 30%',
          'Reduce medical errors by 40%',
          'Lower healthcare costs by 25%',
          'Enhance patient outcomes'
        ],
        marketSize: '$45.2B (Healthcare AI)',
        targetAudience: 'Hospitals, Clinics, Research institutions, Pharmaceutical companies',
        ctaLabel: 'Schedule Demo',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'fintech-innovation-suite',
        title: 'FinTech Innovation Suite',
        description: 'Comprehensive fintech solutions for digital banking, payment processing, and financial analytics.',
        category: 'FinTech & DeFi',
        price: '$28,000',
        billing: 'project',
        features: [
          'Digital banking platform',
          'Payment processing',
          'Risk assessment',
          'Compliance automation',
          'Fraud detection',
          'Customer analytics',
          'API integration',
          'Security implementation'
        ],
        benefits: [
          'Reduce operational costs by 35%',
          'Improve customer experience by 50%',
          'Increase transaction security by 95%',
          'Enable digital transformation'
        ],
        marketSize: '$179.8B (FinTech)',
        targetAudience: 'Banks, Credit unions, Payment processors, Financial services',
        ctaLabel: 'Request Consultation',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      },
      { id: 'education-technology-platform',
        title: 'Education Technology Platform',
        description: 'Innovative edtech platform for personalized learning, student analytics, and educational content management.',
        category: 'Education Tech',
        price: '$15,000',
        billing: 'project',
        features: [
          'Personalized learning paths',
          'Student performance analytics',
          'Content management system',
          'Assessment tools',
          'Collaboration features',
          'Mobile learning support',
          'Integration capabilities',
          'Training and support'
        ],
        benefits: [
          'Improve student engagement by 40%',
          'Increase learning outcomes by 35%',
          'Reduce administrative workload by 50%',
          'Enable remote learning'
        ],
        marketSize: '$89.1B (EdTech)',
        targetAudience: 'Schools, Universities, Training organizations, Corporate L&D',
        ctaLabel: 'Get Started',
        href: 'https://ziontechgroup.com/contact',
        contactInfo: { phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        }
      }
    ]
  }
];

export default expandedServices2025;