export interface ServiceContact {
  phone: string;
  email: string;
  website: string;
  address: string;
}

export interface IoTEdgeComputingService {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: string;
  price: number;
  pricingModel: string;
  features: string[];
  benefits: string[];
  targetAudience: string[];
  tags: string[];
  contactInfo: ServiceContact;
  marketPrice: string;
  competitors: string[];
  iotScore: number;
  useCases: string[];
  compliance: string[];
  apiAccess: boolean;
  whiteLabel: boolean;
  customBranding: boolean;
  prioritySupport: boolean;
  trainingIncluded: boolean;
  dataRetention: string;
  uptime: string;
  securityFeatures: string[];
  integrationTime: string;
  scalability: string;
  realTimeProcessing: boolean;
  multilingualSupport: boolean;
  industrySpecific: boolean;
  edgeNative: boolean;
  aiIntegration: boolean;
  predictiveAnalytics: boolean;
}

// IoT & Edge Computing Services for 2025
export const iotEdgeComputingServices2025: IoTEdgeComputingService[] = [
  {
    id: 1,
    name: "Smart City IoT Platform",
    category: "Smart Cities",
    description: "Comprehensive IoT platform for smart city management with real-time monitoring, predictive analytics, and automated response systems",
    pricing: "Enterprise",
    price: 2500,
    pricingModel: "monthly",
    features: [
      "Traffic management",
      "Environmental monitoring",
      "Smart lighting control",
      "Waste management",
      "Public safety systems",
      "Energy optimization",
      "Water management",
      "Air quality monitoring"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved citizen services",
      "Environmental sustainability",
      "Enhanced public safety",
      "Data-driven decisions",
      "Infrastructure optimization"
    ],
    targetAudience: ["City governments", "Municipalities", "Urban planners", "Infrastructure companies", "Public utilities"],
    tags: ["Smart Cities", "IoT", "Urban Planning", "Sustainability", "Public Services", "Infrastructure"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/smart-city-iot-platform",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$2,500-15,000/month",
    competitors: ["Cisco Smart Cities", "Siemens City Performance", "IBM Smarter Cities", "Microsoft Azure IoT"],
    iotScore: 98,
    useCases: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Management", "Waste Management", "Water Systems"],
    compliance: ["ISO 27001", "SOC 2", "GDPR", "NIST", "City regulations"],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true,
    prioritySupport: true,
    trainingIncluded: true,
    dataRetention: "10 years",
    uptime: "99.9%",
    securityFeatures: ["End-to-end encryption", "Device authentication", "Secure data transmission", "Privacy protection"],
    integrationTime: "6-12 weeks",
    scalability: "City-wide deployment",
    realTimeProcessing: true,
    multilingualSupport: true,
    industrySpecific: true,
    edgeNative: true,
    aiIntegration: true,
    predictiveAnalytics: true
  },
  {
    id: 2,
    name: "Industrial IoT Edge AI",
    category: "Industrial IoT",
    description: "Advanced edge AI platform for industrial IoT with real-time processing, predictive maintenance, and autonomous decision-making",
    pricing: "Enterprise",
    price: 1800,
    pricingModel: "monthly",
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Energy optimization",
      "Asset tracking",
      "Safety monitoring",
      "Performance analytics",
      "Remote diagnostics",
      "Autonomous operations"
    ],
    benefits: [
      "Reduced downtime",
      "Improved efficiency",
      "Cost savings",
      "Enhanced safety",
      "Better quality",
      "Real-time insights"
    ],
    targetAudience: ["Manufacturing companies", "Industrial plants", "Energy companies", "Mining operations", "Chemical plants"],
    tags: ["Industrial IoT", "Edge AI", "Predictive Maintenance", "Manufacturing", "Automation", "Safety"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/industrial-iot-edge-ai",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$1,800-8,000/month",
    competitors: ["Siemens Mindsphere", "GE Predix", "PTC ThingWorx", "Rockwell Automation"],
    iotScore: 97,
    useCases: ["Predictive Maintenance", "Quality Control", "Energy Management", "Asset Management", "Safety Monitoring", "Performance Optimization"],
    compliance: ["ISO 27001", "SOC 2", "ISA-95", "OPC UA", "Industry standards"],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true,
    prioritySupport: true,
    trainingIncluded: true,
    dataRetention: "15 years",
    uptime: "99.9%",
    securityFeatures: ["Industrial security", "Network segmentation", "Access controls", "Audit logging"],
    integrationTime: "4-8 weeks",
    scalability: "Enterprise deployment",
    realTimeProcessing: true,
    multilingualSupport: true,
    industrySpecific: true,
    edgeNative: true,
    aiIntegration: true,
    predictiveAnalytics: true
  },
  {
    id: 3,
    name: "Healthcare IoT Monitor",
    category: "Healthcare IoT",
    description: "Comprehensive healthcare IoT monitoring platform with patient tracking, medical device management, and health analytics",
    pricing: "Professional",
    price: 1200,
    pricingModel: "monthly",
    features: [
      "Patient monitoring",
      "Medical device integration",
      "Health analytics",
      "Remote patient care",
      "Medication tracking",
      "Vital signs monitoring",
      "Alert systems",
      "Data visualization"
    ],
    benefits: [
      "Improved patient care",
      "Reduced readmissions",
      "Better outcomes",
      "Cost savings",
      "Remote monitoring",
      "Data-driven decisions"
    ],
    targetAudience: ["Hospitals", "Clinics", "Nursing homes", "Home healthcare", "Medical device companies"],
    tags: ["Healthcare IoT", "Patient Monitoring", "Medical Devices", "Health Analytics", "Remote Care", "Medical"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/healthcare-iot-monitor",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$1,200-6,000/month",
    competitors: ["Philips Healthcare", "GE Healthcare", "Siemens Healthineers", "Medtronic"],
    iotScore: 96,
    useCases: ["Patient Monitoring", "Remote Care", "Medical Device Management", "Health Analytics", "Chronic Disease Management", "Emergency Response"],
    compliance: ["HIPAA", "FDA", "CE", "ISO 13485", "GDPR"],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true,
    prioritySupport: true,
    trainingIncluded: true,
    dataRetention: "Lifetime (medical records)",
    uptime: "99.99%",
    securityFeatures: ["HIPAA compliance", "Data encryption", "Access controls", "Audit trails"],
    integrationTime: "3-6 weeks",
    scalability: "Multi-facility deployment",
    realTimeProcessing: true,
    multilingualSupport: true,
    industrySpecific: true,
    edgeNative: true,
    aiIntegration: true,
    predictiveAnalytics: true
  },
  {
    id: 'connected-device-management',
    title: 'Connected Smartphone Management Platform',
    description: 'Comprehensive management platform for IoT devices and sensors',
    longDescription: 'Manage thousands of IoT devices with our comprehensive platform. Features device provisioning, monitoring, updates, and security management.',
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-600',
    category: 'connected-devices',
    features: [
      'Smartphone provisioning',
      'Remote monitoring',
      'Over-the-air updates',
      'Security management',
      'Performance analytics',
      'Smartphone lifecycle management'
    ],
    benefits: [
      "Increased sales",
      "Better customer experience",
      "Reduced costs",
      "Improved efficiency",
      "Data insights",
      "Competitive advantage"
    ],
    useCases: [
      'IoT deployments',
      'Smartphone manufacturers',
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
    technologies: ['Smartphone Management', 'IoT Protocols', 'Cloud Computing', 'Security', 'Analytics', 'APIs'],
    iotScore: 95,
    useCases: ["Customer Analytics", "Inventory Management", "Loss Prevention", "Marketing Optimization", "Store Performance", "Customer Experience"],
    compliance: ["PCI DSS", "GDPR", "CCPA", "SOC 2"],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true,
    prioritySupport: true,
    trainingIncluded: true,
    dataRetention: "5 years",
    uptime: "99.9%",
    securityFeatures: ["Data encryption", "Privacy protection", "Access controls", "Secure transmission"],
    integrationTime: "2-4 weeks",
    scalability: "Multi-store deployment",
    realTimeProcessing: true,
    multilingualSupport: true,
    industrySpecific: true,
    edgeNative: true,
    aiIntegration: true,
    predictiveAnalytics: true
  },
  {
    id: 5,
    name: "Agricultural IoT Suite",
    category: "Agricultural IoT",
    description: "Comprehensive agricultural IoT platform with precision farming, crop monitoring, and automated irrigation systems",
    pricing: "Professional",
    price: 600,
    pricingModel: "monthly",
    features: [
      "Soil monitoring",
      "Weather tracking",
      "Crop health monitoring",
      "Automated irrigation",
      "Pest detection",
      "Yield prediction",
      "Equipment monitoring",
      "Supply chain tracking"
    ],
    benefits: [
      "Increased crop yields",
      "Reduced water usage",
      "Lower costs",
      "Better sustainability",
      "Data-driven farming",
      "Precision agriculture"
    ],
    targetAudience: ["Farmers", "Agricultural companies", "Food producers", "Research institutions", "Government agencies"],
    tags: ["Agricultural IoT", "Precision Farming", "Crop Monitoring", "Smart Agriculture", "Sustainability", "Food Security"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/agricultural-iot-suite",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$600-3,000/month",
    competitors: ["John Deere", "Climate Corporation", "FarmLogs", "Granular"],
    iotScore: 94,
    useCases: ["Precision Farming", "Crop Monitoring", "Irrigation Management", "Weather Analysis", "Yield Prediction", "Supply Chain"],
    compliance: ["Organic standards", "Food safety", "Environmental regulations", "Data privacy"],
    apiAccess: true,
    whiteLabel: true,
    customBranding: true,
    prioritySupport: true,
    trainingIncluded: true,
    dataRetention: "10 years",
    uptime: "99.9%",
    securityFeatures: ["Data encryption", "Secure transmission", "Access controls", "Privacy protection"],
    integrationTime: "2-4 weeks",
    scalability: "Multi-farm deployment",
    realTimeProcessing: true,
    multilingualSupport: true,
    industrySpecific: true,
    edgeNative: true,
    aiIntegration: true,
    predictiveAnalytics: true
  },
  {
    id: 6,
    name: "Energy IoT Grid",
    category: "Energy IoT",
    description: "Advanced energy IoT platform with smart grid management, renewable energy integration, and demand response optimization",
    pricing: "Enterprise",
    price: 1500,
    pricingModel: "monthly",
    features: [
      "Smart grid management",
      "Renewable energy integration",
      "Demand response",
      "Energy storage optimization",
      "Grid monitoring",
      "Predictive maintenance",
      "Customer engagement",
      "Energy analytics"
    ],
    benefits: [
      "Grid reliability",
      "Energy efficiency",
      "Cost savings",
      "Renewable integration",
      "Customer satisfaction",
      "Environmental impact"
    ],
    targetAudience: ["Utility companies", "Energy providers", "Grid operators", "Renewable energy companies", "Government agencies"],
    tags: ["Energy IoT", "Smart Grid", "Renewable Energy", "Grid Management", "Energy Efficiency", "Sustainability"],
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/energy-iot-grid",
      address: "364 E Main St STE 1008 Middletown DE 19709"
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
      'Smartphone authentication',
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

export default iotEdgeComputingServices2025;