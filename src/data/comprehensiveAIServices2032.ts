export interface AIService {
  id: string;
  title: string;
  description: string;
  category: 'Machine Learning' | 'Natural Language Processing' | 'Computer Vision' | 'Predictive Analytics' | 'AI Automation' | 'AI Consulting' | 'AI Infrastructure' | 'AI Integration' | 'AI Security' | 'AI Ethics' | 'Quantum AI' | 'Edge AI';
  price: string;
  billing: 'month' | 'year' | 'project' | 'hour' | 'usage';
  features: string[];
  benefits: string[];
  useCases: string[];
  targetMarket: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
  marketSize?: string;
  competitiveAdvantage: string;
  technologyStack: string[];
  integrationCapabilities: string[];
  complianceStandards: string[];
  serviceLevel: 'Basic' | 'Standard' | 'Premium' | 'Enterprise';
  deploymentTime: string;
  scalability: string;
  securityFeatures: string[];
  accuracyMetrics: string[];
  trainingData: string;
  modelExplainability: boolean;
  biasDetection: boolean;
}

export const comprehensiveAIServices2032: AIService[] = [
  // Machine Learning Services
  {
    id: 'enterprise-ml-platform',
    title: 'Enterprise Machine Learning Platform',
    description: 'Comprehensive enterprise ML platform that enables organizations to build, deploy, and manage machine learning models at scale with enterprise-grade security and governance.',
    category: 'Machine Learning',
    price: '$4,999',
    billing: 'month',
    features: [
      'AutoML capabilities',
      'Model training and deployment',
      'Feature engineering tools',
      'Model monitoring and management',
      'A/B testing framework',
      'Scalable infrastructure',
      'Enterprise security',
      'Compliance reporting'
    ],
    benefits: [
      'Reduce ML development time by 70%',
      'Improve model accuracy by 25-40%',
      'Scale ML operations enterprise-wide',
      'Ensure model governance and compliance',
      'Reduce operational costs'
    ],
    useCases: [
      'Predictive analytics',
      'Customer segmentation',
      'Fraud detection',
      'Demand forecasting',
      'Process optimization'
    ],
    targetMarket: ['Enterprises', 'Financial services', 'Healthcare', 'Manufacturing', 'Retail'],
    ctaLabel: 'Start ML Journey',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$164.9B by 2030',
    competitiveAdvantage: 'Most comprehensive enterprise ML platform with quantum-enhanced algorithms and AI-powered automation',
    technologyStack: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Kubernetes', 'Docker', 'AI/ML', 'Quantum Computing'],
    integrationCapabilities: ['Data warehouses', 'Cloud platforms', 'Business applications', 'IoT devices', 'Legacy systems'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'SOX'],
    serviceLevel: 'Enterprise',
    deploymentTime: '6-8 weeks',
    scalability: 'Unlimited models and data',
    securityFeatures: ['Data encryption', 'Access controls', 'Model security', 'Audit logging', 'Compliance monitoring'],
    accuracyMetrics: ['Precision', 'Recall', 'F1-Score', 'AUC-ROC', 'RMSE'],
    trainingData: 'Custom enterprise data + pre-trained models',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'ai-nlp-platform',
    title: 'Advanced Natural Language Processing Platform',
    description: 'State-of-the-art NLP platform providing text analysis, language understanding, translation, and conversational AI capabilities for enterprise applications.',
    category: 'Natural Language Processing',
    price: '$2,999',
    billing: 'month',
    features: [
      'Text analysis and classification',
      'Sentiment analysis',
      'Language translation',
      'Named entity recognition',
      'Question answering',
      'Text summarization',
      'Conversational AI',
      'Multi-language support'
    ],
    benefits: [
      'Improve customer understanding by 60%',
      'Automate text processing by 80%',
      'Enhance customer service',
      'Global language support',
      'Real-time insights'
    ],
    useCases: [
      'Customer service automation',
      'Content analysis',
      'Document processing',
      'Market research',
      'Compliance monitoring'
    ],
    targetMarket: ['Enterprises', 'E-commerce', 'Media companies', 'Healthcare', 'Financial services'],
    ctaLabel: 'Enhance Language AI',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$127.7B by 2030',
    competitiveAdvantage: 'Most advanced NLP platform with quantum-enhanced language models and multi-modal understanding',
    technologyStack: ['BERT', 'GPT models', 'Transformer architecture', 'TensorFlow', 'PyTorch', 'Quantum Computing'],
    integrationCapabilities: ['CRM systems', 'Content management', 'Chat platforms', 'Analytics tools', 'Business applications'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'GDPR', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '4-6 weeks',
    scalability: 'Unlimited text processing',
    securityFeatures: ['Data privacy', 'Content filtering', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    accuracyMetrics: ['BLEU Score', 'ROUGE Score', 'Accuracy', 'Precision', 'Recall'],
    trainingData: 'Multi-language corpora + custom domain data',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'computer-vision-ai',
    title: 'Computer Vision AI Platform',
    description: 'Advanced computer vision platform providing image and video analysis, object detection, facial recognition, and visual AI capabilities for various industries.',
    category: 'Computer Vision',
    price: '$3,499',
    billing: 'month',
    features: [
      'Image classification',
      'Object detection and tracking',
      'Facial recognition',
      'Video analysis',
      'OCR capabilities',
      'Quality inspection',
      'Real-time processing',
      'Edge deployment'
    ],
    benefits: [
      'Automate visual tasks by 90%',
      'Improve accuracy by 30-50%',
      '24/7 monitoring capability',
      'Reduce manual inspection costs',
      'Enhanced security'
    ],
    useCases: [
      'Quality control',
      'Security surveillance',
      'Retail analytics',
      'Healthcare imaging',
      'Autonomous vehicles'
    ],
    targetMarket: ['Manufacturing', 'Security companies', 'Retail', 'Healthcare', 'Transportation'],
    ctaLabel: 'See with AI Vision',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$48.6B by 2030',
    competitiveAdvantage: 'Most advanced computer vision platform with quantum-enhanced image processing and real-time edge AI',
    technologyStack: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'Edge Computing', 'Quantum Computing'],
    integrationCapabilities: ['Cameras and sensors', 'IoT devices', 'Cloud platforms', 'Business applications', 'Security systems'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'GDPR', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '6-8 weeks',
    scalability: 'Unlimited images and videos',
    securityFeatures: ['Data encryption', 'Privacy protection', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    accuracyMetrics: ['mAP', 'Precision', 'Recall', 'IoU', 'FPS'],
    trainingData: 'Custom domain datasets + pre-trained models',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'predictive-analytics-ai',
    title: 'AI-Powered Predictive Analytics Platform',
    description: 'Advanced predictive analytics platform using AI and machine learning to forecast trends, identify patterns, and provide actionable insights for business decision-making.',
    category: 'Predictive Analytics',
    price: '$2,499',
    billing: 'month',
    features: [
      'Time series forecasting',
      'Pattern recognition',
      'Anomaly detection',
      'Risk assessment',
      'Scenario modeling',
      'Real-time predictions',
      'Interactive dashboards',
      'Automated insights'
    ],
    benefits: [
      'Improve forecast accuracy by 40-60%',
      'Reduce decision-making time by 70%',
      'Identify new opportunities',
      'Mitigate risks proactively',
      'Optimize resource allocation'
    ],
    useCases: [
      'Sales forecasting',
      'Demand planning',
      'Risk management',
      'Customer behavior analysis',
      'Operational optimization'
    ],
    targetMarket: ['Enterprises', 'Financial services', 'Retail', 'Manufacturing', 'Healthcare'],
    ctaLabel: 'Predict Your Future',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$67.2B by 2030',
    competitiveAdvantage: 'Most advanced predictive analytics with quantum-enhanced algorithms and real-time AI insights',
    technologyStack: ['Python', 'R', 'TensorFlow', 'Scikit-learn', 'Time series models', 'AI/ML', 'Quantum Computing'],
    integrationCapabilities: ['Data warehouses', 'Business intelligence tools', 'ERP systems', 'CRM platforms', 'IoT devices'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'GDPR', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '4-6 weeks',
    scalability: 'Unlimited data and predictions',
    securityFeatures: ['Data encryption', 'Access controls', 'Audit logging', 'Compliance monitoring', 'Privacy protection'],
    accuracyMetrics: ['MAPE', 'RMSE', 'MAE', 'R²', 'Forecast accuracy'],
    trainingData: 'Historical enterprise data + external datasets',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'ai-automation-platform',
    title: 'Intelligent Process Automation Platform',
    description: 'Comprehensive AI automation platform that combines RPA, machine learning, and cognitive automation to streamline business processes and improve operational efficiency.',
    category: 'AI Automation',
    price: '$3,999',
    billing: 'month',
    features: [
      'RPA automation',
      'Cognitive automation',
      'Process mining',
      'Workflow optimization',
      'Document processing',
      'Decision automation',
      'Integration capabilities',
      'Analytics dashboard'
    ],
    benefits: [
      'Reduce process costs by 50-70%',
      'Improve accuracy by 80-90%',
      '24/7 operation capability',
      'Faster process execution',
      'Enhanced compliance'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Claims processing',
      'Data entry automation',
      'Report generation'
    ],
    targetMarket: ['Enterprises', 'Financial services', 'Healthcare', 'Insurance', 'Manufacturing'],
    ctaLabel: 'Automate with AI',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$93.5B by 2030',
    competitiveAdvantage: 'Most comprehensive AI automation platform with quantum-enhanced optimization and cognitive capabilities',
    technologyStack: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'AI/ML', 'OCR', 'NLP', 'Quantum Computing'],
    integrationCapabilities: ['ERP systems', 'CRM platforms', 'Legacy applications', 'Cloud platforms', 'Business tools'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'GDPR', 'Industry-specific standards'],
    serviceLevel: 'Premium',
    deploymentTime: '6-8 weeks',
    scalability: 'Unlimited processes and workflows',
    securityFeatures: ['Process security', 'Data encryption', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    accuracyMetrics: ['Process accuracy', 'Error rate', 'Processing time', 'Cost savings', 'ROI'],
    trainingData: 'Process data + historical workflows',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'ai-consulting-services',
    title: 'AI Strategy & Implementation Consulting',
    description: 'Expert AI consulting services to help organizations develop AI strategies, implement solutions, and transform their business operations with artificial intelligence.',
    category: 'AI Consulting',
    price: '$750',
    billing: 'hour',
    features: [
      'AI strategy development',
      'Technology assessment',
      'Implementation planning',
      'Change management',
      'Talent development',
      'ROI analysis',
      'Risk assessment',
      'Ongoing support'
    ],
    benefits: [
      'Clear AI roadmap',
      'Optimal technology selection',
      'Successful implementation',
      'Maximized ROI',
      'Competitive advantage'
    ],
    useCases: [
      'AI strategy development',
      'Technology selection',
      'Implementation planning',
      'Change management',
      'Performance optimization'
    ],
    targetMarket: ['Enterprises', 'Mid-market companies', 'Government agencies', 'Healthcare', 'Financial services'],
    ctaLabel: 'Get AI Strategy',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$45.8B by 2030',
    competitiveAdvantage: 'Most comprehensive AI consulting with quantum-enhanced insights and industry expertise',
    technologyStack: ['Strategic frameworks', 'AI/ML', 'Analytics', 'Change management', 'Process optimization'],
    integrationCapabilities: ['Business processes', 'Technology systems', 'Organizational culture', 'Stakeholder management'],
    complianceStandards: ['Industry best practices', 'Regulatory requirements', 'Organizational standards'],
    serviceLevel: 'Premium',
    deploymentTime: 'Ongoing engagement',
    scalability: 'Unlimited scope and complexity',
    securityFeatures: ['Confidentiality agreements', 'Secure communication', 'Data protection', 'Access controls'],
    accuracyMetrics: ['Strategy effectiveness', 'Implementation success', 'ROI achievement', 'Change adoption'],
    trainingData: 'Industry expertise + best practices',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'quantum-ai-hybrid',
    title: 'Quantum AI Hybrid Platform',
    description: 'Revolutionary platform combining quantum computing with artificial intelligence to solve complex problems that are intractable for classical computers.',
    category: 'Quantum AI',
    price: '$8,999',
    billing: 'month',
    features: [
      'Quantum machine learning',
      'Quantum optimization',
      'Quantum neural networks',
      'Hybrid classical-quantum algorithms',
      'Quantum simulation',
      'Real-time quantum processing',
      'API access',
      'Expert support'
    ],
    benefits: [
      'Solve previously intractable problems',
      'Exponential speedup for specific tasks',
      'Enhanced optimization capabilities',
      'Future-proof technology',
      'Competitive advantage'
    ],
    useCases: [
      'Drug discovery',
      'Financial modeling',
      'Logistics optimization',
      'Cryptography',
      'Material science'
    ],
    targetMarket: ['Research institutions', 'Pharmaceutical companies', 'Financial services', 'Government agencies', 'Technology companies'],
    ctaLabel: 'Access Quantum AI',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$18.7B by 2030',
    competitiveAdvantage: 'First commercial quantum AI platform with hybrid classical-quantum algorithms',
    technologyStack: ['Quantum Computing', 'AI/ML', 'Python', 'Qiskit', 'Cirq', 'PennyLane'],
    integrationCapabilities: ['Classical computing', 'Cloud platforms', 'Research tools', 'Business applications'],
    complianceStandards: ['Research standards', 'Security protocols', 'Industry best practices'],
    serviceLevel: 'Enterprise',
    deploymentTime: '8-12 weeks',
    scalability: 'Quantum advantage for specific problems',
    securityFeatures: ['Quantum security', 'Encryption', 'Access controls', 'Audit logging', 'Compliance monitoring'],
    accuracyMetrics: ['Quantum advantage', 'Solution quality', 'Processing speed', 'Error rates'],
    trainingData: 'Quantum algorithms + classical ML',
    modelExplainability: true,
    biasDetection: true
  },
  {
    id: 'edge-ai-platform',
    title: 'Edge AI Computing Platform',
    description: 'Advanced edge AI platform that brings artificial intelligence to edge devices, enabling real-time AI processing without cloud dependency.',
    category: 'Edge AI',
    price: '$1,999',
    billing: 'month',
    features: [
      'Edge AI processing',
      'Real-time inference',
      'Model optimization',
      'Device management',
      'Data synchronization',
      'Security monitoring',
      'Scalable architecture',
      'Multi-device support'
    ],
    benefits: [
      'Reduce latency by 80-90%',
      'Lower bandwidth costs by 60%',
      'Improve privacy',
      'Offline operation',
      'Real-time decision making'
    ],
    useCases: [
      'IoT devices',
      'Autonomous vehicles',
      'Smart cities',
      'Healthcare monitoring',
      'Industrial automation'
    ],
    targetMarket: ['IoT companies', 'Automotive', 'Smart cities', 'Healthcare', 'Manufacturing'],
    ctaLabel: 'Deploy Edge AI',
    href: 'https://ziontechgroup.com/contact',
    marketSize: '$32.1B by 2030',
    competitiveAdvantage: 'Most advanced edge AI platform with quantum-inspired optimization and real-time processing',
    technologyStack: ['TensorFlow Lite', 'ONNX', 'Edge Computing', 'IoT', '5G', 'AI/ML'],
    integrationCapabilities: ['IoT devices', 'Edge computing', 'Cloud platforms', 'Business applications'],
    complianceStandards: ['ISO 27001', 'SOC 2', 'Industry-specific standards'],
    serviceLevel: 'Standard',
    deploymentTime: '4-6 weeks',
    scalability: 'Unlimited devices and models',
    securityFeatures: ['Device security', 'Data encryption', 'Secure boot', 'Remote attestation', 'Threat detection'],
    accuracyMetrics: ['Inference accuracy', 'Latency', 'Power efficiency', 'Model size', 'Throughput'],
    trainingData: 'Optimized models for edge deployment',
    modelExplainability: true,
    biasDetection: true
  }
];

export const aiServiceCategories = [
  'Machine Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Predictive Analytics',
  'AI Automation',
  'AI Consulting',
  'AI Infrastructure',
  'AI Integration',
  'AI Security',
  'AI Ethics',
  'Quantum AI',
  'Edge AI'
];

export const getAIServicesByCategory = (category: string) => {
  return comprehensiveAIServices2032.filter(service => service.category === category);
};

export const getAIServiceById = (id: string) => {
  return comprehensiveAIServices2032.find(service => service.id === id);
};

export const getAIServicesByPriceRange = (minPrice: number, maxPrice: number) => {
  return comprehensiveAIServices2032.filter(service => {
    const price = parseInt(service.price.replace('$', '').replace(',', ''));
    return price >= minPrice && price <= maxPrice;
  });
};