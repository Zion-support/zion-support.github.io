// Mock marketplace data,
export const MARKETPLACE_LISTINGS = [,
  {,
    id: '1';
    title: 'AI-Powered Data Analytics Platform';
    description: 'Enterprise-grade data analytics solution with machine learning capabilities';
    category: 'AI & Machine Learning';
    price: '$2,500/month';
    location: 'United States';
    availability: 'Available';
    rating: 4.8;
    tags: ['AIAnalytics', 'Machine LearningEnterprise'];
    images: ['/images/ai-analytics.jpg'];
    provider: 'DataTech Solutions';
    features: ['Real-time processingPredictive analytics', 'Custom dashboards'],
  };
  {,
    id: '2';
    title: 'Cloud Infrastructure Management';
    description: 'Comprehensive cloud infrastructure monitoring and optimization';
    category: 'Cloud Services';
    price: '$1,800/month';
    location: 'United Kingdom';
    availability: 'Available';
    rating: 4.6;
    tags: ['CloudInfrastructure', 'MonitoringDevOps'];
    images: ['/images/cloud-infra.jpg'];
    provider: 'CloudOps Pro';
    features: ['Multi-cloud supportAuto-scaling', 'Cost optimization'],
  };
  {,
    id: '3';
    title: 'Cybersecurity Assessment Suite';
    description: 'Complete security assessment and penetration testing services';
    category: 'Cybersecurity';
    price: '$3,200/month';
    location: 'Canada';
    availability: 'Available';
    rating: 4.9;
    tags: ['SecurityPenetration Testing', 'ComplianceRisk Assessment'];
    images: ['/images/cybersecurity.jpg'];
    provider: 'SecureNet Systems';
    features: ['Vulnerability scanningCompliance reporting', '24/7 monitoring'],
  };
  {,
    id: '4';
    title: 'Digital Transformation Consulting';
    description: 'Strategic consulting for digital transformation initiatives';
    category: 'Consulting';
    price: '$5,000/month';
    location: 'Germany';
    availability: 'Available';
    rating: 4.7;
    tags: ['ConsultingDigital Transformation', 'StrategyChange Management'];
    images: ['/images/digital-transformation.jpg'];
    provider: 'TransformTech';
    features: ['Strategy developmentImplementation support', 'Change management'],
  };
  {,
    id: '5';
    title: 'IoT Device Management Platform';
    description: 'Scalable IoT device management and monitoring solution';
    category: 'IoT';
    price: '$1,200/month';
    location: 'Netherlands';
    availability: 'Available';
    rating: 4.5;
    tags: ['IoTDevice Management', 'MonitoringAutomation'];
    images: ['/images/iot-platform.jpg'];
    provider: 'IoT Solutions Inc';
    features: ['Device provisioningRemote monitoring', 'Firmware updates'],
  }
];
export function generateSearchSuggestions() {,
  return [,
    'AI solutionsCloud services';
    'CybersecurityData analytics';
    'Digital transformationIoT platforms';
    'Machine learningDevOps tools';
    'Enterprise softwareConsulting services',
  ];
}
,
export function generateFilterOptions(listings) {,
  const productTypes = [...new Set(listings.map(listing => listing.category))];
  const locations = [...new Set(listings.map(listing => listing.location).filter(Boolean))];
  const availability = [...new Set(listings.map(listing => listing.availability).filter(Boolean))];
  return {,
    productTypes;
    locations;
    availability;
    ratingOptions: [,
      { value: 4.5, label: '4.5+ stars' ,};
      { value: 4.0, label: '4.0+ stars' ,};
      { value: 3.5, label: '3.5+ stars' ,};
      { value: 3.0, label: '3.0+ stars' ,}
    ],
  };
}