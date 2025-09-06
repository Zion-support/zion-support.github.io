export interface AdditionalRealService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
<<<<<<< HEAD
<<<<<<< HEAD
    address: string
  }
=======
    address: string;
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
}

export const additionalEnhancedServices: AdditionalRealService[] = [
  {
<<<<<<< HEAD
    id: "ai-automation-suite";
    name: "AI Automation Suite";
    tagline: "Intelligent automation for modern businesses";
    price: "$79/month";
    description: "Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.";
    features: [
      "Workflow automation";
      "AI decision making";
      "Integration APIs";
      "Custom workflows",
      "Analytics dashboard"
    ],
    link: "/services/ai-automation-suite";
    category: "AI & Automation";
    realImplementation: true;
    contactInfo: {
      mobile: "+1 302 464 0950";
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  },
  {
    id: "data-warehouse-solution";
    name: "Data Warehouse Solution";
    tagline: "Enterprise-grade data management and analytics";
    price: "$149/month";
    description: "Scalable data warehouse solution with advanced analytics and business intelligence capabilities.";
    features: [
      "Data integration";
      "Real-time processing";
      "Advanced analytics";
      "Scalable architecture",
      "Security compliance"
    ],
    link: "/services/data-warehouse-solution";
    category: "Data & Analytics";
    realImplementation: true;
    contactInfo: {
      mobile: "+1 302 464 0950";
=======
    address: string;
  }
export const additionalEnhancedServices: AdditionalRealService[] = [
  {
    id: 'ai-automation-suite'
    name: 'AI Automation Suite'
    tagline: 'Intelligent automation for modern businesses'
    price: '$79/month'
    description:
      'Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.'
    features: [
      'Workflow automation'
      'AI decision making'
      'Integration APIs'
      'Custom workflows'
      'Analytics dashboard'
    ]
    link: '/services/ai-automation-suite'
    category: 'AI & Automation'
    realImplementation: true
    contactInfo: {
      mobile: '+1 302 464 0950'
      email: 'kleber@ziontechgroup.com'
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
  {
    id: 'data-warehouse-solution'
    name: 'Data Warehouse Solution'
    tagline: 'Enterprise-grade data management and analytics'
    price: '$149/month'
    description:
      'Scalable data warehouse solution with advanced analytics and business intelligence capabilities.'
    features: [
      'Data integration'
      'Real-time processing'
      'Advanced analytics'
      'Scalable architecture'
      'Security compliance'
    ]
    link: '/services/data-warehouse-solution'
    category: 'Data & Analytics'
    realImplementation: true
    contactInfo: {
      mobile: '+1 302 464 0950'
      email: 'kleber@ziontechgroup.com'
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];      mobile: "+1 302 464 0950";
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      email: "kleber@ziontechgroup.com";
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
=======
    id: 'ai-automation-suite',
    name: 'AI Automation Suite',
    tagline: 'Intelligent automation for modern businesses',
    price: '$79/month',
    description:
      'Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.',
    features: [
      'Workflow automation',
      'AI decision making',
      'Integration APIs',
      'Custom workflows',
      'Analytics dashboard',
    ],
    link: '/services/ai-automation-suite',
    category: 'AI & Automation',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
  {
    id: 'data-warehouse-solution',
    name: 'Data Warehouse Solution',
    tagline: 'Enterprise-grade data management and analytics',
    price: '$149/month',
    description:
      'Scalable data warehouse solution with advanced analytics and business intelligence capabilities.',
    features: [
      'Data integration',
      'Real-time processing',
      'Advanced analytics',
      'Scalable architecture',
      'Security compliance',
    ],
    link: '/services/data-warehouse-solution',
    category: 'Data & Analytics',
    realImplementation: true,
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
    },
  },
];
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
