export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    id: 'ai-development',
    title: 'AI Development Services',
    description: 'Custom AI solutions tailored to your business needs',
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI integration and deployment'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    category: 'AI & Machine Learning',
    icon: '🤖',
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Cost reduction',
      'Competitive advantage'
    ],
    useCases: [
      'Customer service automation',
      'Predictive maintenance',
      'Fraud detection',
      'Recommendation systems'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive web applications and websites',
    features: [
      'Responsive design',
      'Progressive web apps',
      'E-commerce solutions',
      'Content management systems',
      'API development'
    ],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000
    },
    category: 'Web Development',
    icon: '🌐',
    benefits: [
      'Enhanced user experience',
      'Mobile optimization',
      'SEO optimization',
      'Fast loading times'
    ],
    useCases: [
      'Corporate websites',
      'E-commerce platforms',
      'Web applications',
      'Portfolio sites'
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Backend integration'
    ],
    pricing: {
      basic: 8000,
      pro: 20000,
      enterprise: 60000
    },
    category: 'Mobile Development',
    icon: '📱',
    benefits: [
      'Increased user engagement',
      'Better customer reach',
      'Offline functionality',
      'Push notifications'
    ],
    useCases: [
      'Business applications',
      'E-commerce apps',
      'Social media apps',
      'Utility applications'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    features: [
      'Cloud migration',
      'Infrastructure setup',
      'Auto-scaling solutions',
      'Security implementation',
      'Cost optimization'
    ],
    pricing: {
      basic: 2000,
      pro: 5000,
      enterprise: 15000
    },
    category: 'Cloud Services',
    icon: '☁️',
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    useCases: [
      'Application hosting',
      'Data storage',
      'Backup solutions',
      'Disaster recovery'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Business intelligence and data visualization solutions',
    features: [
      'Data warehousing',
      'ETL processes',
      'Interactive dashboards',
      'Predictive modeling',
      'Real-time analytics'
    ],
    pricing: {
      basic: 4000,
      pro: 12000,
      enterprise: 35000
    },
    category: 'Data & Analytics',
    icon: '📊',
    benefits: [
      'Data-driven insights',
      'Improved decision making',
      'Performance tracking',
      'Competitive analysis'
    ],
    useCases: [
      'Sales analytics',
      'Marketing performance',
      'Financial reporting',
      'Operational metrics'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    description: 'Comprehensive security solutions for your digital assets',
    features: [
      'Security assessment',
      'Penetration testing',
      'Security monitoring',
      'Incident response',
      'Compliance consulting'
    ],
    pricing: {
      basic: 3000,
      pro: 8000,
      enterprise: 25000
    },
    category: 'Cybersecurity',
    icon: '🔒',
    benefits: [
      'Protect sensitive data',
      'Compliance assurance',
      'Risk mitigation',
      'Peace of mind'
    ],
    useCases: [
      'Data protection',
      'Network security',
      'Compliance audits',
      'Security training'
    ]
  }
];

export const serviceCategories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cloud Services',
  'Data & Analytics',
  'Cybersecurity'
];

export const serviceFeatures = [
  'Custom development',
  '24/7 support',
  'Scalable solutions',
  'Security focused',
  'Modern technologies',
  'Agile methodology',
  'Quality assurance',
  'Documentation'
];