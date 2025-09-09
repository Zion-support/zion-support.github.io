export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number | null;
  currency: string;
  rating: number;
  reviewCount: number;
  images: string[];
  tags: string[];
  location: string;
  availability: string;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  features: string[];
  createdAt: string;
  updatedAt: string;
}

export const marketplaceData: MarketplaceItem[] = [
  {
    id: '1',
    title: 'AI-Powered Business Intelligence Dashboard',
    description: 'Comprehensive business intelligence solution with AI-driven insights, real-time analytics, and customizable dashboards for enterprise decision making.',
    category: 'AI & Analytics',
    price: 2999,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 156,
    images: ['/images/ai-dashboard-1.jpg', '/images/ai-dashboard-2.jpg'],
    tags: ['AI', 'Analytics', 'Dashboard', 'Business Intelligence'],
    location: 'United States',
    availability: 'Available',
    seller: {
      name: 'TechSolutions Pro',
      rating: 4.9,
      verified: true
    },
    features: [
      'Real-time data processing',
      'AI-powered insights',
      'Customizable dashboards',
      'Multi-platform support',
      'Advanced reporting'
    ],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '2',
    title: 'Cybersecurity Assessment & Implementation',
    description: 'Comprehensive cybersecurity solution including threat assessment, vulnerability scanning, and security implementation for enterprise protection.',
    category: 'Cybersecurity',
    price: 4500,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 89,
    images: ['/images/cybersecurity-1.jpg', '/images/cybersecurity-2.jpg'],
    tags: ['Security', 'Assessment', 'Implementation', 'Enterprise'],
    location: 'United Kingdom',
    availability: 'Available',
    seller: {
      name: 'SecureTech Solutions',
      rating: 4.8,
      verified: true
    },
    features: [
      'Threat assessment',
      'Vulnerability scanning',
      'Security implementation',
      '24/7 monitoring',
      'Compliance reporting'
    ],
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: '3',
    title: 'Cloud Migration & DevOps Automation',
    description: 'End-to-end cloud migration service with automated DevOps pipelines, infrastructure as code, and continuous deployment solutions.',
    category: 'Cloud & DevOps',
    price: 3500,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 124,
    images: ['/images/cloud-migration-1.jpg', '/images/cloud-migration-2.jpg'],
    tags: ['Cloud', 'Migration', 'DevOps', 'Automation'],
    location: 'Canada',
    availability: 'Available',
    seller: {
      name: 'CloudTech Experts',
      rating: 4.7,
      verified: true
    },
    features: [
      'Multi-cloud migration',
      'DevOps automation',
      'Infrastructure as code',
      'CI/CD pipelines',
      'Performance optimization'
    ],
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19'
  },
  {
    id: '4',
    title: 'Machine Learning Model Development',
    description: 'Custom machine learning model development for business applications, including data preprocessing, model training, and deployment.',
    category: 'AI & Machine Learning',
    price: 2500,
    currency: 'USD',
    rating: 4.6,
    reviewCount: 78,
    images: ['/images/ml-development-1.jpg', '/images/ml-development-2.jpg'],
    tags: ['Machine Learning', 'AI', 'Development', 'Custom Models'],
    location: 'Germany',
    availability: 'Available',
    seller: {
      name: 'AI Innovations Lab',
      rating: 4.6,
      verified: true
    },
    features: [
      'Custom model development',
      'Data preprocessing',
      'Model training',
      'Performance optimization',
      'Deployment support'
    ],
    createdAt: '2024-01-08',
    updatedAt: '2024-01-17'
  },
  {
    id: '5',
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation consulting services to modernize business processes, technology infrastructure, and customer experiences.',
    category: 'Consulting',
    price: null,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 203,
    images: ['/images/consulting-1.jpg', '/images/consulting-2.jpg'],
    tags: ['Consulting', 'Digital Transformation', 'Strategy', 'Modernization'],
    location: 'Australia',
    availability: 'Available',
    seller: {
      name: 'Digital Strategy Partners',
      rating: 4.9,
      verified: true
    },
    features: [
      'Strategic planning',
      'Process optimization',
      'Technology assessment',
      'Change management',
      'Implementation support'
    ],
    createdAt: '2024-01-05',
    updatedAt: '2024-01-16'
  },
  {
    id: '6',
    title: 'IoT Platform Development',
    description: 'Custom IoT platform development for connected devices, including device management, data collection, and analytics dashboard.',
    category: 'IoT & Hardware',
    price: 4000,
    currency: 'USD',
    rating: 4.5,
    reviewCount: 67,
    images: ['/images/iot-platform-1.jpg', '/images/iot-platform-2.jpg'],
    tags: ['IoT', 'Platform', 'Development', 'Connected Devices'],
    location: 'Netherlands',
    availability: 'Available',
    seller: {
      name: 'IoT Solutions Hub',
      rating: 4.5,
      verified: true
    },
    features: [
      'Device management',
      'Data collection',
      'Real-time analytics',
      'Scalable architecture',
      'Security features'
    ],
    createdAt: '2024-01-14',
    updatedAt: '2024-01-21'
  }
];

export const filterOptions = {
  productTypes: ['AI & Analytics', 'Cybersecurity', 'Cloud & DevOps', 'AI & Machine Learning', 'Consulting', 'IoT & Hardware'],
  locations: ['United States', 'United Kingdom', 'Canada', 'Germany', 'Australia', 'Netherlands'],
  availability: ['Available', 'Coming Soon', 'Limited']
};