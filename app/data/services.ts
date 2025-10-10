export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  category: string;
  icon: string;
  pricing?: {
    starting: number;
    currency: string;
  };
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Custom Training'
    ],
    benefits: [
      'Automated decision making',
      'Improved efficiency',
      'Cost reduction',
      'Enhanced customer experience',
      'Data-driven insights',
      'Competitive advantage'
    ],
    category: 'AI & Machine Learning',
    icon: '🤖',
    pricing: {
      starting: 5000,
      currency: 'USD'
    },
    popular: true
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Auto-scaling',
      'Security Configuration',
      'Monitoring & Analytics',
      'Cost Optimization'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better performance',
      'Disaster recovery',
      'Global accessibility'
    ],
    category: 'Cloud Computing',
    icon: '☁️',
    pricing: {
      starting: 3000,
      currency: 'USD'
    }
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern, responsive web applications and websites',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Integration',
      'Security Implementation',
      'API Development',
      'Database Design'
    ],
    benefits: [
      'Improved user experience',
      'Better search rankings',
      'Mobile compatibility',
      'Fast loading times',
      'Secure transactions',
      'Easy maintenance'
    ],
    category: 'Web Development',
    icon: '🌐',
    pricing: {
      starting: 2000,
      currency: 'USD'
    }
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'UI/UX Design',
      'Push Notifications',
      'App Store Optimization'
    ],
    benefits: [
      'Increased user engagement',
      'Better brand presence',
      'Offline functionality',
      'Push notifications',
      'App store visibility',
      'Revenue opportunities'
    ],
    category: 'Mobile Development',
    icon: '📱',
    pricing: {
      starting: 4000,
      currency: 'USD'
    }
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable business insights',
    features: [
      'Data Visualization',
      'Business Intelligence',
      'Predictive Modeling',
      'Real-time Dashboards',
      'Data Integration',
      'Custom Reports'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved efficiency',
      'Cost optimization',
      'Better forecasting',
      'Competitive insights',
      'Risk mitigation'
    ],
    category: 'Data & Analytics',
    icon: '📊',
    pricing: {
      starting: 2500,
      currency: 'USD'
    }
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    features: [
      'Security Assessment',
      'Penetration Testing',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Security Training'
    ],
    benefits: [
      'Protection from threats',
      'Compliance assurance',
      'Reduced risk',
      'Business continuity',
      'Customer trust',
      'Cost savings'
    ],
    category: 'Cybersecurity',
    icon: '🔒',
    pricing: {
      starting: 3500,
      currency: 'USD'
    }
  },
  {
    id: 'devops',
    name: 'DevOps Services',
    description: 'Streamline development and deployment processes',
    features: [
      'CI/CD Pipeline',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging',
      'Automated Testing',
      'Deployment Automation'
    ],
    benefits: [
      'Faster deployments',
      'Reduced errors',
      'Better collaboration',
      'Improved reliability',
      'Cost efficiency',
      'Scalability'
    ],
    category: 'DevOps',
    icon: '⚙️',
    pricing: {
      starting: 2000,
      currency: 'USD'
    }
  },
  {
    id: 'consulting',
    name: 'IT Consulting',
    description: 'Strategic technology consulting and digital transformation',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Process Optimization',
      'Technology Selection',
      'Implementation Planning',
      'Change Management'
    ],
    benefits: [
      'Strategic guidance',
      'Technology alignment',
      'Process improvement',
      'Risk reduction',
      'Cost optimization',
      'Competitive advantage'
    ],
    category: 'Consulting',
    icon: '💼',
    pricing: {
      starting: 150,
      currency: 'USD'
    }
  }
];

export const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud Computing',
  'Web Development',
  'Mobile Development',
  'Data & Analytics',
  'Cybersecurity',
  'DevOps',
  'Consulting'
];

export const serviceCategories = {
  'AI & Machine Learning': {
    description: 'Cutting-edge AI solutions to transform your business',
    color: 'from-purple-500 to-pink-500'
  },
  'Cloud Computing': {
    description: 'Scalable cloud infrastructure for modern businesses',
    color: 'from-blue-500 to-cyan-500'
  },
  'Web Development': {
    description: 'Modern web applications that drive results',
    color: 'from-green-500 to-teal-500'
  },
  'Mobile Development': {
    description: 'Mobile apps that engage and convert users',
    color: 'from-orange-500 to-red-500'
  },
  'Data & Analytics': {
    description: 'Turn your data into competitive advantage',
    color: 'from-indigo-500 to-purple-500'
  },
  'Cybersecurity': {
    description: 'Protect your business with enterprise-grade security',
    color: 'from-red-500 to-pink-500'
  },
  'DevOps': {
    description: 'Streamline development and deployment processes',
    color: 'from-gray-500 to-blue-500'
  },
  'Consulting': {
    description: 'Strategic guidance for digital transformation',
    color: 'from-yellow-500 to-orange-500'
  }
};
