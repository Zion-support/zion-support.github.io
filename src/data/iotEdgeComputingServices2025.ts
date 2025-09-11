export interface IoTEdgeService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  category: 'smart-cities' | 'industrial-iot' | 'edge-ai' | 'connected-devices' | 'sensor-networks' | 'edge-computing' | 'iot-security' | 'data-analytics';
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
    custom: string;
  };
  estimatedTime: string;
  technologies: string[];
  image?: string;
  iotScore: number;
  marketPrice: string;
  contactLink: string;
  status: 'active' | 'beta' | 'coming-soon';
  scalability: string;
  deployment: string;
}
export const IOT_EDGE_COMPUTING_SERVICES_2025: IoTEdgeService[] = [
  {
    id: 'smart-city-platform',
    title: 'Smart City IoT Platform',
    description: 'Comprehensive IoT platform for smart city infrastructure and management',
    longDescription: 'Transform your city into a smart, connected ecosystem with our comprehensive IoT platform. Features traffic management, environmental monitoring, energy optimization, and citizen services.',
    icon: 'Building',
    color: 'from-blue-500 to-indigo-600',
    category: 'smart-cities',
    features: [
      'Traffic management',
      'Environmental monitoring',
      'Energy optimization',
      'Citizen services',
      'Public safety',
      'Infrastructure monitoring'
    ],
    benefits: [
      'Improved city efficiency',
      'Reduced energy consumption',
      'Enhanced citizen experience',
      'Better resource management'
    ],
    useCases: [
      'Municipal governments',
      'City planners',
      'Urban developers',
      'Smart city initiatives'
    ],
    pricing: {
      starter: '$5,999/month',
      professional: '$15,999/month',
      enterprise: '$39,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '16-32 weeks',
    technologies: ['IoT Sensors', 'Edge Computing', '5G Networks', 'Cloud Computing', 'AI/ML', 'Data Analytics'],
    iotScore: 98,
    marketPrice: '$5,999-$39,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'City-wide deployment',
    deployment: 'Phased rollout with pilot programs'
  },
  {
    id: 'industrial-iot-suite',
    title: 'Industrial IoT Suite',
    description: 'Advanced IoT solutions for manufacturing and industrial operations',
    longDescription: 'Optimize your industrial operations with our comprehensive IoT suite. Features predictive maintenance, quality control, energy management, and real-time monitoring.',
    icon: 'Factory',
    color: 'from-gray-500 to-slate-600',
    category: 'industrial-iot',
    features: [
      'Predictive maintenance',
      'Quality control',
      'Energy management',
      'Real-time monitoring',
      'Asset tracking',
      'Performance analytics'
    ],
    benefits: [
      '30% reduction in downtime',
      'Improved product quality',
      'Energy cost savings',
      'Enhanced operational efficiency'
    ],
    useCases: [
      'Manufacturing plants',
      'Industrial facilities',
      'Warehouses',
      'Processing plants'
    ],
    pricing: {
      starter: '$3,999/month',
      professional: '$9,999/month',
      enterprise: '$24,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '12-24 weeks',
    technologies: ['Industrial Sensors', 'Edge Computing', 'PLC Integration', 'SCADA Systems', 'AI/ML', 'Cloud Computing'],
    iotScore: 97,
    marketPrice: '$3,999-$24,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Plant-wide deployment',
    deployment: 'Modular installation with existing systems'
  },
  {
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description: 'Intelligent edge computing with AI capabilities for real-time processing',
    longDescription: 'Bring AI to the edge with our intelligent computing platform. Process data locally, reduce latency, and enable real-time decision making for IoT applications.',
    icon: 'Cpu',
    color: 'from-green-500 to-emerald-600',
    category: 'edge-ai',
    features: [
      'Local AI processing',
      'Real-time analytics',
      'Edge machine learning',
      'Low-latency computing',
      'Offline capabilities',
      'Scalable deployment'
    ],
    benefits: [
      '90% reduction in latency',
      'Real-time insights',
      'Offline operation',
      'Reduced bandwidth usage'
    ],
    useCases: [
      'Autonomous vehicles',
      'Smart cameras',
      'Industrial robots',
      'Edge devices'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['Edge Computing', 'AI/ML', 'TensorFlow Lite', 'Edge GPUs', '5G Networks', 'Edge Analytics'],
    iotScore: 96,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Edge device deployment',
    deployment: 'Edge device installation with cloud management'
  },
  {
    id: 'connected-device-management',
    title: 'Connected Device Management Platform',
    description: 'Comprehensive management platform for IoT devices and sensors',
    longDescription: 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning, monitoring, updates, and security management.',
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-600',
    category: 'connected-devices',
    features: [
      'Device provisioning',
      'Remote monitoring',
      'Over-the-air updates',
      'Security management',
      'Performance analytics',
      'Device lifecycle management'
    ],
    benefits: [
      'Centralized device management',
      'Reduced operational costs',
      'Improved security',
      'Better device performance'
    ],
    useCases: [
      'IoT deployments',
      'Device manufacturers',
      'Service providers',
      'Enterprise IoT'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$12,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['Device Management', 'IoT Protocols', 'Cloud Computing', 'Security', 'Analytics', 'APIs'],
    iotScore: 95,
    marketPrice: '$1,999-$12,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Unlimited device support',
    deployment: 'Cloud-based with device agents'
  },
  {
    id: 'sensor-network-platform',
    title: 'IoT Sensor Network Platform',
    description: 'Advanced sensor network solutions for data collection and monitoring',
    longDescription: 'Deploy and manage comprehensive sensor networks with our advanced platform. Features sensor deployment, data collection, real-time monitoring, and analytics.',
    icon: 'Radio',
    color: 'from-teal-500 to-cyan-600',
    category: 'sensor-networks',
    features: [
      'Sensor deployment',
      'Data collection',
      'Real-time monitoring',
      'Network optimization',
      'Power management',
      'Data analytics'
    ],
    benefits: [
      'Comprehensive monitoring',
      'Real-time insights',
      'Optimized network performance',
      'Reduced maintenance costs'
    ],
    useCases: [
      'Environmental monitoring',
      'Agricultural IoT',
      'Infrastructure monitoring',
      'Research applications'
    ],
    pricing: {
      starter: '$1,499/month',
      professional: '$3,999/month',
      enterprise: '$9,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-12 weeks',
    technologies: ['IoT Sensors', 'Wireless Networks', 'Edge Computing', 'Data Collection', 'Analytics', 'Cloud Computing'],
    iotScore: 94,
    marketPrice: '$1,499-$9,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Network expansion support',
    deployment: 'Sensor deployment with network setup'
  },
  {
    id: 'edge-computing-infrastructure',
    title: 'Edge Computing Infrastructure',
    description: 'Scalable edge computing infrastructure for distributed applications',
    longDescription: 'Build robust edge computing infrastructure with our comprehensive platform. Features edge nodes, distributed computing, load balancing, and high availability.',
    icon: 'Server',
    color: 'from-orange-500 to-red-600',
    category: 'edge-computing',
    features: [
      'Edge nodes',
      'Distributed computing',
      'Load balancing',
      'High availability',
      'Edge storage',
      'Network optimization'
    ],
    benefits: [
      'Improved performance',
      'Reduced latency',
      'Better reliability',
      'Scalable infrastructure'
    ],
    useCases: [
      'Edge applications',
      'Distributed systems',
      'Content delivery',
      'Edge computing'
    ],
    pricing: {
      starter: '$2,499/month',
      professional: '$6,999/month',
      enterprise: '$17,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '8-16 weeks',
    technologies: ['Edge Computing', 'Kubernetes', 'Docker', 'Load Balancers', 'Storage', 'Networking'],
    iotScore: 95,
    marketPrice: '$2,499-$17,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Multi-node deployment',
    deployment: 'Edge node installation with management'
  },
  {
    id: 'iot-security-platform',
    title: 'IoT Security & Privacy Platform',
    description: 'Comprehensive security solutions for IoT devices and networks',
    longDescription: 'Protect your IoT ecosystem with our comprehensive security platform. Features device authentication, network security, data encryption, and threat detection.',
    icon: 'Shield',
    color: 'from-red-500 to-orange-600',
    category: 'iot-security',
    features: [
      'Device authentication',
      'Network security',
      'Data encryption',
      'Threat detection',
      'Access control',
      'Security monitoring'
    ],
    benefits: [
      'Enhanced security',
      'Data protection',
      'Threat prevention',
      'Compliance support'
    ],
    useCases: [
      'IoT deployments',
      'Smart cities',
      'Industrial IoT',
      'Connected devices'
    ],
    pricing: {
      starter: '$2,999/month',
      professional: '$7,999/month',
      enterprise: '$19,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '6-12 weeks',
    technologies: ['IoT Security', 'Encryption', 'Authentication', 'Network Security', 'Threat Detection', 'Compliance'],
    iotScore: 98,
    marketPrice: '$2,999-$19,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Security across all devices',
    deployment: 'Security layer integration'
  },
  {
    id: 'iot-data-analytics',
    title: 'IoT Data Analytics Platform',
    description: 'Advanced analytics and insights for IoT data streams',
    longDescription: 'Unlock the value of your IoT data with our advanced analytics platform. Features real-time processing, predictive analytics, data visualization, and automated insights.',
    icon: 'BarChart3',
    color: 'from-indigo-500 to-purple-600',
    category: 'data-analytics',
    features: [
      'Real-time processing',
      'Predictive analytics',
      'Data visualization',
      'Automated insights',
      'Data integration',
      'Performance monitoring'
    ],
    benefits: [
      'Data-driven insights',
      'Predictive capabilities',
      'Automated decision making',
      'Improved efficiency'
    ],
    useCases: [
      'IoT deployments',
      'Smart cities',
      'Industrial monitoring',
      'Environmental tracking'
    ],
    pricing: {
      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$12,999/month',
      custom: 'Contact us'
    },
    estimatedTime: '4-8 weeks',
    technologies: ['Big Data', 'AI/ML', 'Real-time Processing', 'Data Visualization', 'Analytics', 'Cloud Computing'],
    iotScore: 95,
    marketPrice: '$1,999-$12,999/month',
    contactLink: 'https://ziontechgroup.com/contact',
    status: 'active',
    scalability: 'Unlimited data processing',
    deployment: 'Cloud-based analytics platform'
  }
];
export const getIoTEdgeServicesByCategory = (category: string): IoTEdgeService[] => {
  if (category === 'All') {
    return IOT_EDGE_COMPUTING_SERVICES_2025;
  }
  return IOT_EDGE_COMPUTING_SERVICES_2025.filter(service => service.category === category);
};
export const getAllIoTEdgeServices = (): IoTEdgeService[] => {
  return IOT_EDGE_COMPUTING_SERVICES_2025;
};
