export interface IoTEdgeService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const IOT_EDGE_SERVICES_2025: IoTEdgeService[] = [
  // Industrial IoT Platform
  {
    id: 'industrial-iot-platform',
    title: 'Industrial IoT Platform',
    description: 'Comprehensive industrial IoT platform that connects, monitors, and optimizes industrial equipment and processes for maximum efficiency.',
    category: 'IoT & Edge',
    subcategory: 'Industrial IoT',
    price: 9500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Device connectivity management',
      'Real-time data collection',
      'Predictive maintenance',
      'Asset performance monitoring',
      'Energy optimization',
      'Quality control automation',
      'Safety monitoring',
      'Remote equipment control',
      'Analytics dashboard',
      'Mobile app access',
      'Integration APIs',
      'Edge computing capabilities'
    ],
    benefits: [
      'Reduce operational costs by 25%',
      'Improve equipment uptime by 30%',
      'Prevent unplanned downtime',
      'Optimize energy consumption',
      'Enhanced safety compliance'
    ],
    useCases: [
      'Manufacturing plants',
      'Oil and gas facilities',
      'Power plants',
      'Mining operations',
      'Chemical plants'
    ],
    targetAudience: [
      'Manufacturing managers',
      'Operations directors',
      'Maintenance teams',
      'Plant managers',
      'Safety officers'
    ],
    tags: ['IIoT', 'Predictive Maintenance', 'Asset Management', 'Industry 4.0', 'Automation'],
    estimatedDelivery: '12-16 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$9,500 - $30,000/month',
    roi: '250-400%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['MQTT', 'OPC UA', 'Python', 'React', 'Node.js', 'Kubernetes'],
      integrations: ['SAP', 'Oracle', 'Siemens', 'Rockwell', 'ABB'],
      apiEndpoints: 150,
      uptime: '99.9%',
      security: ['End-to-end encryption', 'Device authentication', 'Data integrity']
    },
    competitors: ['Siemens Mindsphere', 'GE Predix', 'PTC ThingWorx', 'Bosch IoT Suite'],
    marketSize: '$35 billion',
    demoUrl: 'https://ziontechgroup.com/demo/industrial-iot',
    documentationUrl: 'https://ziontechgroup.com/docs/industrial-iot'
  },

  // Smart City Platform
  {
    id: 'smart-city-platform',
    title: 'Smart City Platform',
    description: 'Comprehensive smart city platform that integrates IoT sensors, data analytics, and automation to optimize urban infrastructure and services.',
    category: 'IoT & Edge',
    subcategory: 'Smart Cities',
    price: 15000,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Traffic management system',
      'Smart lighting control',
      'Waste management optimization',
      'Air quality monitoring',
      'Parking management',
      'Public safety monitoring',
      'Energy grid optimization',
      'Water management',
      'Citizen engagement portal',
      'Emergency response system',
      'Data analytics dashboard',
      'Mobile applications'
    ],
    benefits: [
      'Reduce traffic congestion by 30%',
      'Lower energy consumption by 25%',
      'Improve public safety',
      'Enhanced citizen services',
      'Optimized resource allocation'
    ],
    useCases: [
      'Municipal governments',
      'City planning departments',
      'Transportation agencies',
      'Utility companies',
      'Public safety departments'
    ],
    targetAudience: [
      'City managers',
      'Urban planners',
      'Transportation officials',
      'Utility managers',
      'Public safety directors'
    ],
    tags: ['Smart Cities', 'Urban Planning', 'Traffic Management', 'Public Safety', 'Sustainability'],
    estimatedDelivery: '16-24 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$15,000 - $50,000/month',
    roi: '200-350%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['LoRaWAN', '5G', 'Python', 'React', 'Node.js', 'PostgreSQL'],
      integrations: ['Traffic systems', 'Utility networks', 'Emergency services', 'Public transport'],
      apiEndpoints: 200,
      uptime: '99.95%',
      security: ['Data encryption', 'Privacy protection', 'Cybersecurity protocols']
    },
    competitors: ['Cisco Smart Cities', 'IBM Watson IoT', 'Microsoft Azure IoT', 'Siemens'],
    marketSize: '$45 billion',
    demoUrl: 'https://ziontechgroup.com/demo/smart-city',
    documentationUrl: 'https://ziontechgroup.com/docs/smart-city'
  },

  // Edge Computing Platform
  {
    id: 'edge-computing-platform',
    title: 'Edge Computing Platform',
    description: 'Advanced edge computing platform that processes data locally for real-time applications, reducing latency and bandwidth requirements.',
    category: 'IoT & Edge',
    subcategory: 'Edge Computing',
    price: 6800,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Local data processing',
      'Real-time analytics',
      'Edge AI capabilities',
      'Low-latency applications',
      'Bandwidth optimization',
      'Offline operation',
      'Edge device management',
      'Security at the edge',
      'Scalable architecture',
      'Cloud integration',
      'Monitoring and alerts',
      'Automated updates'
    ],
    benefits: [
      'Reduce latency by 90%',
      'Lower bandwidth costs by 60%',
      'Enable real-time processing',
      'Enhanced data privacy',
      'Improved reliability'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial automation',
      'Retail analytics',
      'Healthcare monitoring',
      'Gaming applications'
    ],
    targetAudience: [
      'IoT developers',
      'System architects',
      'DevOps engineers',
      'Data scientists',
      'Application developers'
    ],
    tags: ['Edge Computing', 'Real-time Processing', 'AI', 'Low Latency', 'IoT'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'premium',
    marketPrice: '$6,800 - $20,000/month',
    roi: '180-300%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Kubernetes', 'Docker', 'Python', 'TensorFlow', 'React', 'Node.js'],
      integrations: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU', 'NVIDIA Jetson'],
      apiEndpoints: 100,
      uptime: '99.9%',
      security: ['Edge encryption', 'Secure boot', 'Device authentication']
    },
    competitors: ['AWS Greengrass', 'Azure IoT Edge', 'Google Edge TPU', 'NVIDIA Jetson'],
    marketSize: '$20 billion',
    demoUrl: 'https://ziontechgroup.com/demo/edge-computing',
    documentationUrl: 'https://ziontechgroup.com/docs/edge-computing'
  },

  // Connected Healthcare Platform
  {
    id: 'connected-healthcare-platform',
    title: 'Connected Healthcare Platform',
    description: 'IoT-powered healthcare platform that enables remote patient monitoring, telemedicine, and connected medical devices for improved patient care.',
    category: 'IoT & Edge',
    subcategory: 'Healthcare IoT',
    price: 8200,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Remote patient monitoring',
      'Medical device integration',
      'Telemedicine platform',
      'Health data analytics',
      'Medication management',
      'Emergency alert system',
      'Care coordination tools',
      'Patient engagement portal',
      'Clinical decision support',
      'Compliance management',
      'Mobile health apps',
      'Wearable device integration'
    ],
    benefits: [
      'Improve patient outcomes by 40%',
      'Reduce hospital readmissions by 30%',
      'Lower healthcare costs',
      'Enhanced patient engagement',
      'Better care coordination'
    ],
    useCases: [
      'Hospitals and clinics',
      'Home healthcare providers',
      'Long-term care facilities',
      'Insurance companies',
      'Pharmaceutical companies'
    ],
    targetAudience: [
      'Healthcare providers',
      'Hospital administrators',
      'Care coordinators',
      'Patients and families',
      'Insurance providers'
    ],
    tags: ['Healthcare IoT', 'Remote Monitoring', 'Telemedicine', 'Patient Care', 'Medical Devices'],
    estimatedDelivery: '12-18 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$8,200 - $25,000/month',
    roi: '200-350%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['HL7 FHIR', 'DICOM', 'Python', 'React', 'Node.js', 'PostgreSQL'],
      integrations: ['Epic', 'Cerner', 'Medical devices', 'Wearables', 'EHR systems'],
      apiEndpoints: 120,
      uptime: '99.99%',
      security: ['HIPAA compliance', 'Data encryption', 'Access controls']
    },
    competitors: ['Philips Healthcare', 'GE Healthcare', 'Siemens Healthineers', 'Medtronic'],
    marketSize: '$30 billion',
    demoUrl: 'https://ziontechgroup.com/demo/healthcare-iot',
    documentationUrl: 'https://ziontechgroup.com/docs/healthcare-iot'
  },

  // Retail IoT Platform
  {
    id: 'retail-iot-platform',
    title: 'Retail IoT Platform',
    description: 'Comprehensive retail IoT platform that optimizes store operations, enhances customer experience, and provides real-time analytics for retail businesses.',
    category: 'IoT & Edge',
    subcategory: 'Retail IoT',
    price: 4500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Customer behavior analytics',
      'Inventory management',
      'Smart checkout systems',
      'Digital signage management',
      'Queue optimization',
      'Energy management',
      'Security monitoring',
      'Loss prevention',
      'Customer engagement',
      'Mobile app integration',
      'Real-time analytics',
      'Predictive analytics'
    ],
    benefits: [
      'Increase sales by 15-25%',
      'Reduce operational costs by 20%',
      'Improve customer experience',
      'Optimize inventory levels',
      'Enhanced security'
    ],
    useCases: [
      'Retail stores',
      'Shopping malls',
      'Convenience stores',
      'Department stores',
      'Specialty retailers'
    ],
    targetAudience: [
      'Retail managers',
      'Store owners',
      'Marketing teams',
      'Operations managers',
      'Loss prevention teams'
    ],
    tags: ['Retail IoT', 'Customer Analytics', 'Inventory Management', 'Digital Signage', 'Smart Retail'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'premium',
    marketPrice: '$4,500 - $15,000/month',
    roi: '150-300%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Computer Vision', 'Python', 'React', 'Node.js', 'Redis', 'MongoDB'],
      integrations: ['POS systems', 'CRM platforms', 'Inventory systems', 'Payment processors'],
      apiEndpoints: 80,
      uptime: '99.9%',
      security: ['PCI DSS compliance', 'Data encryption', 'Privacy protection']
    },
    competitors: ['Sensormatic', 'RetailNext', 'ShopperTrak', 'Brickstream'],
    marketSize: '$18 billion',
    demoUrl: 'https://ziontechgroup.com/demo/retail-iot',
    documentationUrl: 'https://ziontechgroup.com/docs/retail-iot'
  }
];