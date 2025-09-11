import { UnifiedService } from '@/types/unifiedServiceTypes';

export const SPECIALIZED_INDUSTRY_SERVICES_2025: UnifiedService[] = [
  // Healthcare & Life Sciences
  {
    id: 'ai-medical-imaging-analysis',
    title: 'AI Medical Imaging Analysis Platform',
    description: 'Advanced AI-powered medical imaging analysis for radiology, pathology, and diagnostic imaging with FDA compliance.',
    category: 'Healthcare & Life Sciences',
    price: { monthly: 399, yearly: 3990, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Multi-modality image analysis (X-ray, MRI, CT, ultrasound)',
      'AI-powered diagnosis assistance',
      'Radiology workflow integration',
      'Pathology slide analysis',
      'Clinical decision support',
      'HIPAA compliance',
      'Integration with PACS systems',
      'Performance analytics and reporting'
    ],
    benefits: [
      'Improve diagnostic accuracy by 25%',
      'Reduce radiologist workload by 40%',
      'Faster diagnosis and treatment',
      'Better patient outcomes',
      'Compliance with healthcare regulations'
    ],
    useCases: ['Radiology', 'Pathology', 'Diagnostic Imaging', 'Clinical Research'],
    tags: ['AI', 'Healthcare', 'Medical Imaging', 'Diagnostics', 'FDA'],
    marketPrice: '$299–$999/mo',
    roi: '5–20x ROI through improved diagnostics',
    innovationLevel: 'FDA-compliant AI medical imaging',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-medical-imaging',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Financial Services & FinTech
  {
    id: 'ai-fraud-detection-financial',
    title: 'AI Financial Fraud Detection System',
    description: 'Real-time AI-powered fraud detection for banking, payments, and financial transactions with advanced pattern recognition.',
    category: 'Financial Services & FinTech',
    price: { monthly: 299, yearly: 2990, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Real-time transaction monitoring',
      'AI pattern recognition',
      'Behavioral analysis',
      'Risk scoring algorithms',
      'Multi-channel fraud detection',
      'Compliance reporting',
      'Integration with banking systems',
      'Customizable fraud rules'
    ],
    benefits: [
      'Detect fraud 10x faster than traditional methods',
      'Reduce false positives by 80%',
      'Prevent financial losses',
      'Compliance with financial regulations',
      'Real-time protection'
    ],
    useCases: ['Banking', 'Payment Processing', 'Credit Cards', 'Insurance'],
    tags: ['AI', 'Fraud Detection', 'Financial Services', 'Security', 'Compliance'],
    marketPrice: '$199–$799/mo',
    roi: '10–50x ROI through fraud prevention',
    innovationLevel: 'AI-powered financial fraud detection',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-fraud-detection',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Manufacturing & Industrial
  {
    id: 'ai-predictive-maintenance-manufacturing',
    title: 'AI Predictive Maintenance for Manufacturing',
    description: 'Intelligent predictive maintenance platform for manufacturing equipment with IoT sensors and machine learning.',
    category: 'Manufacturing & Industrial',
    price: { monthly: 249, yearly: 2490, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'IoT sensor integration',
      'Machine learning algorithms',
      'Predictive failure detection',
      'Maintenance scheduling',
      'Equipment performance monitoring',
      'Cost optimization',
      'Integration with MES/ERP systems',
      'Mobile app for technicians'
    ],
    benefits: [
      'Reduce unplanned downtime by 60%',
      'Lower maintenance costs by 30%',
      'Extend equipment lifespan',
      'Improve production efficiency',
      'Data-driven maintenance decisions'
    ],
    useCases: ['Manufacturing', 'Industrial Equipment', 'Production Lines', 'Heavy Machinery'],
    tags: ['AI', 'IoT', 'Predictive Maintenance', 'Manufacturing', 'Industry 4.0'],
    marketPrice: '$199–$599/mo',
    roi: '5–15x ROI through reduced downtime',
    innovationLevel: 'AI-powered predictive maintenance',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-predictive-maintenance',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Retail & E-commerce
  {
    id: 'ai-personalized-retail-experience',
    title: 'AI Personalized Retail Experience Platform',
    description: 'AI-powered personalized shopping experience with product recommendations, dynamic pricing, and customer behavior analysis.',
    category: 'Retail & E-commerce',
    price: { monthly: 179, yearly: 1790, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Personalized product recommendations',
      'Dynamic pricing optimization',
      'Customer behavior analysis',
      'Inventory optimization',
      'Marketing automation',
      'Customer segmentation',
      'Integration with e-commerce platforms',
      'Real-time analytics dashboard'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Improve customer lifetime value',
      'Reduce cart abandonment',
      'Optimize inventory levels',
      'Personalized marketing campaigns'
    ],
    useCases: ['E-commerce', 'Retail Stores', 'Marketplaces', 'Direct-to-Consumer'],
    tags: ['AI', 'Retail', 'Personalization', 'E-commerce', 'Marketing'],
    marketPrice: '$149–$499/mo',
    roi: '4–12x ROI through increased sales',
    innovationLevel: 'AI-powered retail personalization',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-personalized-retail',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Transportation & Logistics
  {
    id: 'ai-fleet-optimization-transportation',
    title: 'AI Fleet Optimization & Route Planning',
    description: 'Intelligent fleet management and route optimization platform for transportation and logistics companies.',
    category: 'Transportation & Logistics',
    price: { monthly: 199, yearly: 1990, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'AI route optimization',
      'Fleet performance monitoring',
      'Fuel consumption optimization',
      'Driver behavior analysis',
      'Real-time tracking',
      'Predictive maintenance',
      'Integration with logistics systems',
      'Mobile app for drivers'
    ],
    benefits: [
      'Reduce fuel costs by 20%',
      'Improve delivery times by 30%',
      'Better fleet utilization',
      'Enhanced driver safety',
      'Real-time fleet visibility'
    ],
    useCases: ['Trucking', 'Delivery Services', 'Logistics', 'Public Transportation'],
    tags: ['AI', 'Fleet Management', 'Route Optimization', 'Transportation', 'Logistics'],
    marketPrice: '$149–$599/mo',
    roi: '4–15x ROI through fleet optimization',
    innovationLevel: 'AI-powered fleet optimization',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-fleet-optimization',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Energy & Utilities
  {
    id: 'ai-energy-grid-optimization',
    title: 'AI Energy Grid Optimization Platform',
    description: 'Intelligent energy grid management with demand forecasting, load balancing, and renewable energy integration.',
    category: 'Energy & Utilities',
    price: { monthly: 349, yearly: 3490, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Energy demand forecasting',
      'Grid load balancing',
      'Renewable energy integration',
      'Predictive maintenance',
      'Real-time monitoring',
      'Energy efficiency optimization',
      'Integration with SCADA systems',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce energy waste by 25%',
      'Improve grid reliability',
      'Optimize renewable energy usage',
      'Lower operational costs',
      'Better energy distribution'
    ],
    useCases: ['Power Grids', 'Renewable Energy', 'Utility Companies', 'Smart Cities'],
    tags: ['AI', 'Energy', 'Grid Optimization', 'Renewables', 'Utilities'],
    marketPrice: '$299–$999/mo',
    roi: '5–20x ROI through energy optimization',
    innovationLevel: 'AI-powered energy grid optimization',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-energy-grid-optimization',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Agriculture & Food
  {
    id: 'ai-precision-agriculture-platform',
    title: 'AI Precision Agriculture Platform',
    description: 'Intelligent farming platform with crop monitoring, yield prediction, and automated irrigation management.',
    category: 'Agriculture & Food',
    price: { monthly: 129, yearly: 1290, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Satellite and drone imagery analysis',
      'Crop health monitoring',
      'Yield prediction models',
      'Automated irrigation control',
      'Soil analysis',
      'Weather integration',
      'Mobile app for farmers',
      'Integration with farm equipment'
    ],
    benefits: [
      'Increase crop yields by 20%',
      'Reduce water usage by 30%',
      'Lower input costs',
      'Better resource management',
      'Sustainable farming practices'
    ],
    useCases: ['Crop Farming', 'Livestock Management', 'Greenhouse Operations', 'Precision Agriculture'],
    tags: ['AI', 'Agriculture', 'Precision Farming', 'IoT', 'Sustainability'],
    marketPrice: '$99–$299/mo',
    roi: '3–10x ROI through increased yields',
    innovationLevel: 'AI-powered precision agriculture',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-precision-agriculture',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Construction & Real Estate
  {
    id: 'ai-construction-project-management',
    title: 'AI Construction Project Management Platform',
    description: 'Intelligent construction project management with progress tracking, resource optimization, and risk assessment.',
    category: 'Construction & Real Estate',
    price: { monthly: 199, yearly: 1990, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Project progress tracking',
      'Resource optimization',
      'Risk assessment and mitigation',
      'Schedule optimization',
      'Cost management',
      'Quality control monitoring',
      'Integration with BIM systems',
      'Mobile app for field workers'
    ],
    benefits: [
      'Complete projects 15% faster',
      'Reduce project costs by 20%',
      'Better resource utilization',
      'Improved quality control',
      'Risk mitigation'
    ],
    useCases: ['Construction Projects', 'Infrastructure Development', 'Building Management', 'Project Planning'],
    tags: ['AI', 'Construction', 'Project Management', 'BIM', 'Infrastructure'],
    marketPrice: '$149–$499/mo',
    roi: '4–12x ROI through project efficiency',
    innovationLevel: 'AI-powered construction management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-construction-management',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Education & Training
  {
    id: 'ai-adaptive-learning-platform',
    title: 'AI Adaptive Learning Platform',
    description: 'Personalized learning platform with adaptive content, progress tracking, and intelligent tutoring systems.',
    category: 'Education & Training',
    price: { monthly: 89, yearly: 890, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Adaptive learning algorithms',
      'Personalized content delivery',
      'Progress tracking and analytics',
      'Intelligent tutoring',
      'Assessment and testing',
      'Content library management',
      'Integration with LMS systems',
      'Mobile app access'
    ],
    benefits: [
      'Improve learning outcomes by 40%',
      'Personalized education experience',
      'Better student engagement',
      'Efficient learning paths',
      'Data-driven insights'
    ],
    useCases: ['K-12 Education', 'Higher Education', 'Corporate Training', 'Online Learning'],
    tags: ['AI', 'Education', 'Adaptive Learning', 'Personalization', 'EdTech'],
    marketPrice: '$69–$199/mo',
    roi: '3–8x ROI through improved learning',
    innovationLevel: 'AI-powered adaptive learning',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-adaptive-learning',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Legal & Compliance
  {
    id: 'ai-legal-research-automation',
    title: 'AI Legal Research & Document Automation',
    description: 'Intelligent legal research platform with document analysis, case law research, and compliance automation.',
    category: 'Legal & Compliance',
    price: { monthly: 249, yearly: 2490, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'AI-powered legal research',
      'Document analysis and review',
      'Case law research',
      'Compliance monitoring',
      'Contract analysis',
      'Legal precedent search',
      'Integration with legal databases',
      'Automated reporting'
    ],
    benefits: [
      'Reduce research time by 70%',
      'Improve case preparation',
      'Better compliance management',
      'Lower legal costs',
      'Faster document review'
    ],
    useCases: ['Law Firms', 'Corporate Legal', 'Compliance', 'Legal Research'],
    tags: ['AI', 'Legal', 'Research', 'Compliance', 'Document Analysis'],
    marketPrice: '$199–$599/mo',
    roi: '4–15x ROI through legal efficiency',
    innovationLevel: 'AI-powered legal research',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-legal-research',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Media & Entertainment
  {
    id: 'ai-content-recommendation-engine',
    title: 'AI Content Recommendation Engine',
    description: 'Intelligent content recommendation platform for streaming services, news, and digital media with personalization.',
    category: 'Media & Entertainment',
    price: { monthly: 159, yearly: 1590, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'AI content recommendation',
      'User behavior analysis',
      'Content personalization',
      'Engagement optimization',
      'A/B testing automation',
      'Real-time analytics',
      'Integration with content platforms',
      'Multi-platform support'
    ],
    benefits: [
      'Increase user engagement by 45%',
      'Improve content discovery',
      'Reduce churn rates',
      'Better user experience',
      'Data-driven content decisions'
    ],
    useCases: ['Streaming Services', 'News Platforms', 'Digital Media', 'Content Platforms'],
    tags: ['AI', 'Content Recommendation', 'Personalization', 'Media', 'Entertainment'],
    marketPrice: '$129–$399/mo',
    roi: '4–12x ROI through increased engagement',
    innovationLevel: 'AI-powered content recommendation',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-content-recommendation',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  },

  // Hospitality & Tourism
  {
    id: 'ai-hospitality-management-platform',
    title: 'AI Hospitality Management Platform',
    description: 'Intelligent hospitality management with guest experience optimization, revenue management, and operational efficiency.',
    category: 'Hospitality & Tourism',
    price: { monthly: 199, yearly: 1990, currency: 'USD', pricingModel: 'subscription' },
    features: [
      'Guest experience optimization',
      'Revenue management',
      'Operational efficiency',
      'Predictive analytics',
      'Guest behavior analysis',
      'Integration with PMS systems',
      'Mobile app for guests',
      'Real-time reporting'
    ],
    benefits: [
      'Increase guest satisfaction by 30%',
      'Improve revenue per available room',
      'Reduce operational costs',
      'Better guest experience',
      'Data-driven decisions'
    ],
    useCases: ['Hotels', 'Resorts', 'Restaurants', 'Tourism Services'],
    tags: ['AI', 'Hospitality', 'Guest Experience', 'Revenue Management', 'Tourism'],
    marketPrice: '$149–$499/mo',
    roi: '4–15x ROI through improved guest experience',
    innovationLevel: 'AI-powered hospitality management',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/services/ai-hospitality-management',
      address: '364 E Main St STE 1008 Middletown DE 19709'
    }
  }
];

export default SPECIALIZED_INDUSTRY_SERVICES_2025;