export type NewServiceItem = {
  id: string;
  title: string;
  description: string;
  category: 'AI Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Healthcare Tech' | 'FinTech' | 'Real Estate Tech' | 'Supply Chain' | 'Education Tech' | 'Legal Tech' | 'Marketing Tech' | 'HR Tech' | 'Sustainability Tech';
  price: string;
  billing: 'month' | 'project' | 'hour';
  features: string[];
  benefits: string[];
  marketSize: string;
  targetAudience: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  accuracy?: string;
  compliance?: string[];
  integrations?: string[];
  useCases?: string[];
  competitiveAdvantage: string;
};

export type NewServiceCategory = {
  name: string;
  slug: string;
  description: string;
  items: NewServiceItem[];
};

export const newServices2026: NewServiceCategory[] = [
  {
    name: 'AI-Powered Real Estate Solutions',
    slug: 'ai-real-estate-solutions',
    description: 'Intelligent real estate investment and management solutions powered by cutting-edge AI',
    items: [
      {
        id: 'ai-real-estate-investment-analyzer',
        title: 'AI Real Estate Investment Analyzer',
        description: 'Transform your real estate investments with AI-powered market analysis, predictive analytics, and portfolio optimization. Get 85%+ accuracy on market predictions.',
        category: 'Real Estate Tech',
        price: '$299',
        billing: 'month',
        features: [
          'AI-powered market analysis with 85%+ accuracy',
          'Predictive analytics for property appreciation',
          'Geographic intelligence and neighborhood insights',
          'ROI calculator and investment analysis',
          'Big data integration from multiple sources',
          'Portfolio optimization recommendations',
          'Real-time market alerts and updates',
          'Mobile app access and API integration'
        ],
        benefits: [
          'Increase investment returns by 25-40% through data-driven decisions',
          'Reduce research time from weeks to hours with automated analysis',
          'Minimize risk with comprehensive market intelligence',
          'Access institutional-grade analytics previously only available to large firms',
          'Stay ahead of market changes with real-time alerts',
          'Optimize portfolio performance with AI-powered recommendations'
        ],
        marketSize: '$15.8B (Real Estate Analytics)',
        targetAudience: 'Real estate investors, agents, property managers, investment firms',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-real-estate-investment-analyzer',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '85%+',
        compliance: ['GDPR', 'CCPA'],
        integrations: ['MLS Systems', 'Property Databases', 'Financial APIs', 'Market Data Feeds'],
        useCases: ['Individual Investors', 'Real Estate Agents', 'Property Managers', 'Investment Firms'],
        competitiveAdvantage: 'AI-first approach with 85%+ prediction accuracy and real-time global market monitoring'
      }
    ]
  },
  {
    name: 'AI-Powered Supply Chain Solutions',
    slug: 'ai-supply-chain-solutions',
    description: 'Intelligent supply chain risk management and optimization solutions',
    items: [
      {
        id: 'ai-supply-chain-risk-management',
        title: 'AI Supply Chain Risk Management Platform',
        description: 'Protect your supply chain with AI-powered risk prediction, real-time monitoring, and proactive disruption prevention. Get 90%+ accuracy on risk forecasting.',
        category: 'Supply Chain',
        price: '$499',
        billing: 'month',
        features: [
          'AI risk prediction with 90%+ accuracy up to 6 months ahead',
          'Global supply chain mapping and visualization',
          'Early warning system for disruptions',
          'Real-time risk analytics dashboard',
          'Supplier risk assessment and monitoring',
          'Compliance monitoring and tracking',
          'Multi-source data integration',
          'Custom reporting and API access'
        ],
        benefits: [
          'Reduce supply chain disruptions by 60-80% through predictive analytics',
          'Save 15-25% on logistics costs with optimized routing',
          'Improve supplier relationships with data-driven insights',
          'Ensure regulatory compliance and avoid costly penalties',
          'Enhance customer satisfaction with reliable delivery',
          'Gain competitive advantage with resilient operations'
        ],
        marketSize: '$8.9B (Supply Chain Risk Management)',
        targetAudience: 'Manufacturers, retailers, logistics companies, healthcare organizations',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-supply-chain-risk-management',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '90%+',
        compliance: ['ISO 28000', 'C-TPAT', 'GDPR'],
        integrations: ['ERP Systems', 'WMS', 'TMS', 'Supplier Portals', 'Market Data APIs'],
        useCases: ['Manufacturing', 'Retail & E-commerce', 'Healthcare', 'Logistics'],
        competitiveAdvantage: 'AI-first approach with 90%+ prediction accuracy and real-time global monitoring'
      }
    ]
  },
  {
    name: 'AI-Powered Healthcare Solutions',
    slug: 'ai-healthcare-solutions',
    description: 'Intelligent healthcare predictive analytics and patient care optimization',
    items: [
      {
        id: 'ai-healthcare-predictive-analytics',
        title: 'AI Healthcare Predictive Analytics Platform',
        description: 'Transform healthcare with AI-powered disease prediction, patient risk scoring, and treatment optimization. Get 92%+ accuracy on health predictions with full HIPAA compliance.',
        category: 'Healthcare Tech',
        price: '$799',
        billing: 'month',
        features: [
          'AI disease prediction with 92%+ accuracy up to 12 months ahead',
          'Real-time patient risk scoring and assessment',
          'Population health analytics and trend identification',
          'Multi-source data integration (EHR, labs, wearables)',
          'Treatment outcome prediction and optimization',
          'HIPAA-compliant security and encryption',
          'Custom dashboards and reporting',
          'API access and mobile applications'
        ],
        benefits: [
          'Reduce hospital readmissions by 30-50% through early intervention',
          'Improve patient outcomes by 25-40% with personalized care',
          'Save 20-35% on healthcare costs through preventive care',
          'Enhance clinical decision-making with data-driven insights',
          'Increase patient engagement through personalized recommendations',
          'Ensure regulatory compliance with built-in HIPAA guidelines'
        ],
        marketSize: '$67.2B (Healthcare Analytics)',
        targetAudience: 'Hospitals, clinics, research institutions, insurance companies, pharmaceutical companies',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-healthcare-predictive-analytics',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '92%+',
        compliance: ['HIPAA', 'HITECH', 'GDPR', 'FDA Guidelines'],
        integrations: ['EHR Systems', 'Lab Information Systems', 'Wearable Devices', 'Genomic Databases'],
        useCases: ['Hospitals', 'Clinics', 'Research Institutions', 'Insurance Companies'],
        competitiveAdvantage: 'AI-first approach with 92%+ prediction accuracy and full HIPAA compliance'
      }
    ]
  },
  {
    name: 'AI-Powered Financial Services',
    slug: 'ai-financial-services',
    description: 'Intelligent financial trading, risk management, and fraud detection solutions',
    items: [
      {
        id: 'ai-financial-trading-risk-management',
        title: 'AI Financial Trading Risk Management Platform',
        description: 'Advanced AI-powered platform for financial trading risk management, portfolio optimization, and real-time market analysis with 88%+ prediction accuracy.',
        category: 'FinTech',
        price: '$899',
        billing: 'month',
        features: [
          'AI-powered risk assessment with 88%+ accuracy',
          'Real-time portfolio monitoring and alerts',
          'Advanced trading algorithms and strategies',
          'Market sentiment analysis and prediction',
          'Compliance monitoring and reporting',
          'Multi-asset class support',
          'Custom risk models and backtesting',
          'API integration with major exchanges'
        ],
        benefits: [
          'Reduce trading losses by 40-60% through AI risk management',
          'Improve portfolio returns by 25-35% with optimized strategies',
          'Ensure regulatory compliance and avoid penalties',
          'Real-time monitoring and automated risk controls',
          'Access institutional-grade analytics and insights',
          'Scale operations with automated trading systems'
        ],
        marketSize: '$12.4B (Financial Risk Management)',
        targetAudience: 'Hedge funds, investment banks, trading firms, institutional investors',
        ctaLabel: 'Schedule Demo',
        href: '/services/ai-financial-trading-risk-management',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '88%+',
        compliance: ['SOX', 'Basel III', 'MiFID II', 'Dodd-Frank'],
        integrations: ['Bloomberg Terminal', 'Reuters Eikon', 'Major Exchanges', 'Risk Management Systems'],
        useCases: ['Hedge Funds', 'Investment Banks', 'Trading Firms', 'Institutional Investors'],
        competitiveAdvantage: 'AI-first approach with 88%+ prediction accuracy and real-time global market monitoring'
      }
    ]
  },
  {
    name: 'AI-Powered Legal Services',
    slug: 'ai-legal-services',
    description: 'Intelligent legal research, document automation, and compliance solutions',
    items: [
      {
        id: 'ai-legal-document-automation',
        title: 'AI Legal Document Automation Platform',
        description: 'Streamline legal document creation, review, and analysis with AI-powered automation. Reduce document processing time by 70% while maintaining accuracy.',
        category: 'Legal Tech',
        price: '$399',
        billing: 'month',
        features: [
          'AI-powered document generation and templates',
          'Intelligent contract analysis and review',
          'Legal research automation and case law analysis',
          'Compliance monitoring and risk assessment',
          'Document version control and collaboration',
          'Integration with legal practice management systems',
          'Custom workflow automation',
          'Multi-language support and localization'
        ],
        benefits: [
          'Reduce document processing time by 70%',
          'Improve accuracy and reduce human errors',
          'Lower legal costs by 30-50%',
          'Enhance compliance and risk management',
          'Increase productivity and efficiency',
          'Enable 24/7 document processing capabilities'
        ],
        marketSize: '$4.2B (Legal Tech)',
        targetAudience: 'Law firms, corporate legal departments, government agencies, legal service providers',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-legal-document-automation',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '95%+',
        compliance: ['GDPR', 'CCPA', 'Legal Industry Standards'],
        integrations: ['Practice Management Systems', 'Document Management', 'E-Discovery Platforms', 'Court Filing Systems'],
        useCases: ['Law Firms', 'Corporate Legal', 'Government Agencies', 'Legal Service Providers'],
        competitiveAdvantage: 'AI-first approach with 95%+ accuracy and comprehensive legal workflow automation'
      }
    ]
  },
  {
    name: 'AI-Powered Education Solutions',
    slug: 'ai-education-solutions',
    description: 'Intelligent personalized learning, student analytics, and educational content optimization',
    items: [
      {
        id: 'ai-education-platform',
        title: 'AI Education Platform',
        description: 'Revolutionize education with AI-powered personalized learning, adaptive content, and student performance analytics. Improve learning outcomes by 40-60%.',
        category: 'Education Tech',
        price: '$199',
        billing: 'month',
        features: [
          'AI-powered personalized learning paths',
          'Adaptive content and difficulty adjustment',
          'Student performance analytics and insights',
          'Intelligent tutoring and feedback systems',
          'Content recommendation engines',
          'Progress tracking and reporting',
          'Multi-platform support (web, mobile, tablet)',
          'Integration with existing LMS platforms'
        ],
        benefits: [
          'Improve learning outcomes by 40-60%',
          'Reduce teacher workload by 50%',
          'Personalize education for each student',
          'Identify and address learning gaps early',
          'Increase student engagement and motivation',
          'Provide data-driven insights for educators'
        ],
        marketSize: '$18.7B (EdTech)',
        targetAudience: 'K-12 schools, universities, corporate training, online education platforms',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-education-platform',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '90%+',
        compliance: ['FERPA', 'COPPA', 'GDPR', 'Accessibility Standards'],
        integrations: ['LMS Platforms', 'Student Information Systems', 'Content Management Systems', 'Assessment Tools'],
        useCases: ['K-12 Schools', 'Universities', 'Corporate Training', 'Online Education'],
        competitiveAdvantage: 'AI-first approach with 90%+ accuracy and comprehensive personalized learning capabilities'
      }
    ]
  },
  {
    name: 'AI-Powered Marketing Solutions',
    slug: 'ai-marketing-solutions',
    description: 'Intelligent marketing automation, content optimization, and customer engagement solutions',
    items: [
      {
        id: 'ai-content-marketing-automation',
        title: 'AI Content Marketing Automation Platform',
        description: 'Automate and optimize your content marketing with AI-powered content generation, SEO optimization, and performance analytics. Increase organic traffic by 40-60%.',
        category: 'Marketing Tech',
        price: '$299',
        billing: 'month',
        features: [
          'AI-powered content generation and optimization',
          'Advanced SEO optimization and keyword research',
          'Content performance analytics and insights',
          'Automated A/B testing and optimization',
          'Multi-language content support',
          'Social media optimization and scheduling',
          'Competitor analysis and monitoring',
          'Integration with major CMS platforms'
        ],
        benefits: [
          'Increase organic traffic by 40-60%',
          'Improve content engagement by 35%',
          'Reduce content creation time by 50%',
          'Boost conversion rates by 25%',
          'Automate repetitive marketing tasks',
          'Gain competitive insights and market intelligence'
        ],
        marketSize: '$15.2B (Content Marketing)',
        targetAudience: 'Marketing teams, content creators, SEO agencies, e-commerce businesses',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-content-marketing-automation',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '85%+',
        compliance: ['GDPR', 'CCPA', 'Marketing Standards'],
        integrations: ['WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Social Media Platforms'],
        useCases: ['Marketing Teams', 'Content Creators', 'SEO Agencies', 'E-commerce Businesses'],
        competitiveAdvantage: 'AI-first approach with 85%+ accuracy and comprehensive content marketing automation'
      }
    ]
  },
  {
    name: 'AI-Powered HR Solutions',
    slug: 'ai-hr-solutions',
    description: 'Intelligent human resources management, talent acquisition, and employee engagement solutions',
    items: [
      {
        id: 'ai-hr-platform',
        title: 'AI HR Platform',
        description: 'Transform your HR operations with AI-powered talent acquisition, employee engagement, and performance management. Reduce hiring time by 60% and improve retention.',
        category: 'HR Tech',
        price: '$399',
        billing: 'month',
        features: [
          'AI-powered candidate screening and matching',
          'Automated interview scheduling and assessment',
          'Employee engagement monitoring and analytics',
          'Performance management and feedback systems',
          'Predictive analytics for retention and turnover',
          'Skills gap analysis and training recommendations',
          'Integration with major HRIS platforms',
          'Custom workflow automation and reporting'
        ],
        benefits: [
          'Reduce hiring time by 60%',
          'Improve candidate quality by 40%',
          'Increase employee retention by 30%',
          'Reduce HR administrative workload by 50%',
          'Provide data-driven insights for HR decisions',
          'Enhance employee experience and satisfaction'
        ],
        marketSize: '$8.9B (HR Tech)',
        targetAudience: 'HR departments, recruitment agencies, staffing firms, enterprise organizations',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-hr-platform',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '87%+',
        compliance: ['EEOC', 'ADA', 'GDPR', 'HR Industry Standards'],
        integrations: ['Workday', 'BambooHR', 'Greenhouse', 'LinkedIn', 'Job Boards'],
        useCases: ['HR Departments', 'Recruitment Agencies', 'Staffing Firms', 'Enterprise Organizations'],
        competitiveAdvantage: 'AI-first approach with 87%+ accuracy and comprehensive HR workflow automation'
      }
    ]
  },
  {
    name: 'AI-Powered Sustainability Solutions',
    slug: 'ai-sustainability-solutions',
    description: 'Intelligent environmental monitoring, carbon footprint tracking, and sustainability optimization',
    items: [
      {
        id: 'ai-sustainability-platform',
        title: 'AI Sustainability Platform',
        description: 'Drive sustainability initiatives with AI-powered environmental monitoring, carbon footprint tracking, and optimization recommendations. Reduce environmental impact by 25-40%.',
        category: 'Sustainability Tech',
        price: '$599',
        billing: 'month',
        features: [
          'AI-powered environmental impact assessment',
          'Real-time carbon footprint tracking and monitoring',
          'Sustainability optimization recommendations',
          'Compliance monitoring and reporting',
          'Energy efficiency analysis and optimization',
          'Waste reduction and recycling optimization',
          'Integration with IoT sensors and devices',
          'Custom sustainability dashboards and reporting'
        ],
        benefits: [
          'Reduce environmental impact by 25-40%',
          'Lower operational costs through efficiency gains',
          'Ensure regulatory compliance and avoid penalties',
          'Enhance brand reputation and customer loyalty',
          'Meet sustainability goals and targets',
          'Gain competitive advantage in green markets'
        ],
        marketSize: '$6.8B (Sustainability Tech)',
        targetAudience: 'Manufacturing companies, energy providers, logistics firms, government agencies',
        ctaLabel: 'Start Free Trial',
        href: '/services/ai-sustainability-platform',
        contactInfo: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008 Middletown DE 19709'
        },
        accuracy: '89%+',
        compliance: ['ISO 14001', 'EPA Standards', 'Carbon Disclosure Project', 'Sustainability Reporting'],
        integrations: ['IoT Sensors', 'Energy Management Systems', 'ERP Platforms', 'Environmental Databases'],
        useCases: ['Manufacturing', 'Energy Providers', 'Logistics Firms', 'Government Agencies'],
        competitiveAdvantage: 'AI-first approach with 89%+ accuracy and comprehensive sustainability monitoring and optimization'
      }
    ]
  }
];

export default newServices2026;