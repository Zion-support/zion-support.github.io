export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Transform your business with cutting-edge AI and machine learning solutions.',
    icon: 'Brain',
    features: [
      'Custom AI model development',
      'Machine learning pipeline automation',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'AI strategy consulting'
    ],
    benefits: [
      'Automated decision making',
      'Improved accuracy and efficiency',
      'Reduced operational costs',
      'Enhanced customer experience'
    ],
    price: 'Starting at $5,000',
    duration: '2-6 months'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
    icon: 'Cloud',
    features: [
      'Cloud migration and optimization',
      'Multi-cloud strategy implementation',
      'Serverless architecture design',
      'Container orchestration',
      'Cloud security and compliance',
      'Cost optimization strategies'
    ],
    benefits: [
      'Improved scalability and flexibility',
      'Reduced infrastructure costs',
      'Enhanced security and compliance',
      'Faster time to market'
    ],
    price: 'Starting at $3,000',
    duration: '1-4 months'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive cybersecurity solutions.',
    icon: 'Shield',
    features: [
      'Security assessment and auditing',
      'Threat detection and response',
      'Identity and access management',
      'Data encryption and protection',
      'Compliance and regulatory support',
      'Security training and awareness'
    ],
    benefits: [
      'Enhanced data protection',
      'Reduced security risks',
      'Compliance with regulations',
      'Peace of mind for stakeholders'
    ],
    price: 'Starting at $2,500',
    duration: '1-3 months'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Unlock insights from your data with advanced analytics and visualization.',
    icon: 'Database',
    features: [
      'Data warehouse design and implementation',
      'Real-time analytics dashboards',
      'Business intelligence solutions',
      'Data visualization and reporting',
      'Data quality and governance',
      'Advanced statistical analysis'
    ],
    benefits: [
      'Data-driven decision making',
      'Improved business insights',
      'Enhanced operational efficiency',
      'Competitive advantage'
    ],
    price: 'Starting at $4,000',
    duration: '2-5 months'
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    description: 'Connect and optimize your devices with Internet of Things solutions.',
    icon: 'Zap',
    features: [
      'IoT device integration',
      'Sensor data collection and analysis',
      'Real-time monitoring systems',
      'Predictive maintenance solutions',
      'Edge computing implementation',
      'IoT security and management'
    ],
    benefits: [
      'Improved operational efficiency',
      'Real-time monitoring and control',
      'Predictive maintenance capabilities',
      'Reduced downtime and costs'
    ],
    price: 'Starting at $6,000',
    duration: '3-8 months'
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'Tailored software solutions designed specifically for your business needs.',
    icon: 'Brain',
    features: [
      'Custom web applications',
      'Mobile app development',
      'API development and integration',
      'Legacy system modernization',
      'Microservices architecture',
      'Quality assurance and testing'
    ],
    benefits: [
      'Perfect fit for your business',
      'Scalable and maintainable solutions',
      'Competitive advantage',
      'Long-term cost savings'
    ],
    price: 'Starting at $8,000',
    duration: '2-12 months'
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'ai-ml', name: 'AI & Machine Learning' },
  { id: 'cloud-computing', name: 'Cloud Computing' },
  { id: 'cybersecurity', name: 'Cybersecurity' },
  { id: 'data-analytics', name: 'Data Analytics' },
  { id: 'iot-solutions', name: 'IoT Solutions' },
  { id: 'custom-development', name: 'Custom Development' }
];