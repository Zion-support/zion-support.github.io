export interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  comingSoon?: boolean;
  marketPrice?: string;
  technologies?: string[];
  contactInfo?: string;
  link: string;
  benefits: string[];
  capabilities: string[];
  roi: string;
  trial: string;
  rating?: number;
  users?: string;
}

export interface AIServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  services: AIService[];
}

export const aiServices: AIService[] = [
  // AI Automation & Workflow
  {
    id: 'ai-workflow-automation-platform',
    name: 'AI Workflow Automation Platform',
    description: 'End-to-end business process automation with intelligent decision-making, self-optimization, and predictive analytics for maximum efficiency.',
    features: [
      'Visual Workflow Builder',
      'Smart Process Optimization',
      'Error Detection & Correction',
      'Cost Reduction Analysis',
      'Scalable Architecture',
      'Real-time Monitoring',
      'Integration Library',
      'Custom Triggers'
    ],
    pricing: { monthly: 5000, yearly: 50000, setup: 2000 },
    category: 'AI Automation',
    icon: '⚡',
    popular: true,
    link: 'https://ziontechgroup.com/ai-workflow-automation',
    benefits: ['Automate 80% of business processes', 'Reduce operational costs by 60%', 'Increase efficiency by 300%'],
    capabilities: ['Process 1M+ workflows daily', 'Integrate with 500+ applications', 'Self-optimize based on performance data'],
    roi: '200-400% ROI',
    trial: '30-day free trial',
    marketPrice: '$8,000-15,000/month',
    technologies: ['Machine Learning', 'Process Mining', 'RPA', 'API Integration'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '500+'
  },
  {
    id: 'ai-customer-support-suite',
    name: 'AI Customer Support Suite',
    description: 'Advanced 24/7 customer support with natural language processing, sentiment analysis, human handoff, and comprehensive analytics.',
    features: [
      'Multi-language NLP',
      'Sentiment Analysis',
      'Escalation Management',
      'Knowledge Base Integration',
      'Performance Analytics',
      'Live Chat Integration',
      'Voice Support',
      'Custom Training'
    ],
    pricing: { monthly: 3000, yearly: 30000, setup: 1500 },
    category: 'AI Customer Service',
    icon: '🤖',
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support',
    benefits: ['Resolve 85% of queries automatically', 'Reduce response time by 90%', 'Improve customer satisfaction by 50%'],
    capabilities: ['Handle 50,000+ conversations daily', 'Support 100+ languages', '95% accuracy in query understanding'],
    roi: '150-300% ROI',
    trial: '14-day free trial',
    marketPrice: '$5,000-12,000/month',
    technologies: ['GPT-4', 'NLP', 'Sentiment Analysis', 'Conversation AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '800+'
  },
  {
    id: 'ai-sales-automation-engine',
    name: 'AI Sales Automation Engine',
    description: 'Intelligent sales process automation with lead scoring, automated outreach, predictive analytics, and revenue optimization.',
    features: [
      'AI Lead Scoring',
      'Automated Outreach',
      'Sales Forecasting',
      'CRM Integration',
      'Revenue Optimization',
      'Pipeline Management',
      'Performance Analytics',
      'Custom Workflows'
    ],
    pricing: { monthly: 4000, yearly: 40000, setup: 2000 },
    category: 'AI Sales',
    icon: '📈',
    popular: true,
    link: 'https://ziontechgroup.com/ai-sales-automation',
    benefits: ['Increase sales by 200%', 'Reduce sales cycle by 40%', 'Improve lead conversion by 150%'],
    capabilities: ['Process 100,000+ leads daily', 'Score leads with 92% accuracy', 'Integrate with 30+ CRMs'],
    roi: '250-500% ROI',
    trial: '14-day free trial',
    marketPrice: '$6,000-15,000/month',
    technologies: ['Machine Learning', 'Predictive Analytics', 'CRM APIs', 'Email Automation'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '600+'
  },
  {
    id: 'ai-document-processing-system',
    name: 'AI Document Processing System',
    description: 'Intelligent document analysis, extraction, and processing with OCR, natural language understanding, and automated workflows.',
    features: [
      'OCR Technology',
      'Data Extraction',
      'Document Classification',
      'Workflow Integration',
      'Compliance Tracking',
      'Multi-format Support',
      'Batch Processing',
      'Quality Assurance'
    ],
    pricing: { monthly: 2500, yearly: 25000, setup: 1000 },
    category: 'AI Document Processing',
    icon: '📄',
    popular: false,
    link: 'https://ziontechgroup.com/ai-document-processing',
    benefits: ['Process 10,000+ documents daily', 'Reduce processing time by 95%', 'Eliminate manual data entry'],
    capabilities: ['Support 50+ document types', 'Extract data with 99% accuracy', 'Process 1M+ pages monthly'],
    roi: '180-350% ROI',
    trial: '7-day free trial',
    marketPrice: '$4,000-10,000/month',
    technologies: ['OCR', 'NLP', 'Computer Vision', 'Document AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '400+'
  },

  // AI Analytics & Business Intelligence
  {
    id: 'ai-data-analytics-platform',
    name: 'AI Data Analytics Platform',
    description: 'Advanced analytics and insights with machine learning-powered predictions, real-time dashboards, and automated reporting.',
    features: [
      'Real-time Analytics',
      'Predictive Modeling',
      'Custom Dashboards',
      'Data Visualization',
      'Automated Insights',
      'Anomaly Detection',
      'Performance Metrics',
      'API Integrations'
    ],
    pricing: { monthly: 6000, yearly: 60000, setup: 3000 },
    category: 'AI Analytics',
    icon: '📊',
    popular: true,
    link: 'https://ziontechgroup.com/ai-data-analytics',
    benefits: ['Make decisions 5x faster', 'Identify trends before competitors', 'Reduce reporting time by 80%'],
    capabilities: ['Process 10TB+ data daily', 'Generate 100+ report types', 'Connect to 200+ data sources'],
    roi: '300-600% ROI',
    trial: '14-day free trial',
    marketPrice: '$10,000-25,000/month',
    technologies: ['Big Data', 'Machine Learning', 'Data Visualization', 'Cloud Computing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '300+'
  },
  {
    id: 'ai-business-intelligence-suite',
    name: 'AI Business Intelligence Suite',
    description: 'Transform raw data into actionable business insights with AI-powered analysis, recommendations, and strategic planning tools.',
    features: [
      'KPI Tracking',
      'Trend Analysis',
      'Performance Metrics',
      'Strategic Planning',
      'ROI Measurement',
      'Competitive Analysis',
      'Risk Assessment',
      'Executive Dashboards'
    ],
    pricing: { monthly: 7000, yearly: 70000, setup: 3500 },
    category: 'AI Business Intelligence',
    icon: '💼',
    popular: true,
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    benefits: ['Improve decision accuracy by 70%', 'Identify opportunities worth $1M+', 'Reduce analysis time by 90%'],
    capabilities: ['Analyze 1B+ data points', 'Generate 50+ strategic insights', 'Track 200+ KPIs'],
    roi: '400-700% ROI',
    trial: '14-day free trial',
    marketPrice: '$12,000-30,000/month',
    technologies: ['Business Intelligence', 'Machine Learning', 'Data Mining', 'Predictive Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '250+'
  },
  {
    id: 'ai-predictive-analytics-engine',
    name: 'AI Predictive Analytics Engine',
    description: 'Forecast future trends, outcomes, and opportunities with advanced machine learning models and scenario planning.',
    features: [
      'Demand Forecasting',
      'Risk Assessment',
      'Market Analysis',
      'Scenario Planning',
      'Anomaly Detection',
      'Trend Prediction',
      'Performance Optimization',
      'Custom Models'
    ],
    pricing: { monthly: 8000, yearly: 80000, setup: 4000 },
    category: 'AI Predictive Analytics',
    icon: '🔮',
    popular: true,
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    benefits: ['Predict trends 6 months ahead', 'Reduce risk by 60%', 'Increase revenue by 40%'],
    capabilities: ['Process 100M+ data points', 'Generate 1000+ predictions daily', '95% accuracy in forecasts'],
    roi: '500-800% ROI',
    trial: '14-day free trial',
    marketPrice: '$15,000-40,000/month',
    technologies: ['Deep Learning', 'Time Series Analysis', 'Statistical Modeling', 'Big Data'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '200+'
  },
  {
    id: 'ai-real-time-monitoring-system',
    name: 'AI Real-time Monitoring System',
    description: 'Continuous monitoring and alerting system with AI-powered anomaly detection and automated responses.',
    features: [
      'Real-time Monitoring',
      'Anomaly Detection',
      'Automated Alerts',
      'Performance Tracking',
      'Predictive Maintenance',
      'Root Cause Analysis',
      'Custom Dashboards',
      'API Integrations'
    ],
    pricing: { monthly: 4500, yearly: 45000, setup: 2000 },
    category: 'AI Monitoring',
    icon: '📡',
    popular: false,
    link: 'https://ziontechgroup.com/ai-monitoring',
    benefits: ['Prevent 99% of system failures', 'Reduce downtime by 80%', 'Improve system reliability'],
    capabilities: ['Monitor 10,000+ metrics', 'Process 1M+ events daily', 'Detect anomalies in real-time'],
    roi: '250-450% ROI',
    trial: '7-day free trial',
    marketPrice: '$7,000-18,000/month',
    technologies: ['Real-time Processing', 'Anomaly Detection', 'Monitoring APIs', 'Alert Systems'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '350+'
  },

  // AI Content & Marketing Solutions
  {
    id: 'ai-content-generation-studio',
    name: 'AI Content Generation Studio',
    description: 'Complete content creation suite with AI writing, editing, optimization, and multi-format support for all marketing needs.',
    features: [
      'AI Writing Assistant',
      'Content Optimization',
      'SEO Analysis',
      'Brand Voice Training',
      'Multi-format Support',
      'Plagiarism Detection',
      'Content Calendar',
      'Team Collaboration'
    ],
    pricing: { monthly: 2000, yearly: 20000, setup: 500 },
    category: 'AI Content',
    icon: '✍️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-generation',
    benefits: ['Create 10x more content', 'Improve SEO rankings by 80%', 'Maintain consistent brand voice'],
    capabilities: ['Generate 10,000+ articles daily', 'Support 50+ languages', 'Optimize for 100+ SEO factors'],
    roi: '100-300% ROI',
    trial: '7-day free trial',
    marketPrice: '$3,000-8,000/month',
    technologies: ['GPT-4', 'Content Optimization', 'SEO Analysis', 'Brand AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '1200+'
  },
  {
    id: 'ai-email-marketing-platform',
    name: 'AI Email Marketing Platform',
    description: 'Intelligent email campaigns with personalization, A/B testing, and performance optimization for maximum conversion rates.',
    features: [
      'Smart Personalization',
      'A/B Testing',
      'Send Time Optimization',
      'Performance Analytics',
      'List Segmentation',
      'Template Library',
      'Deliverability Monitoring',
      'Revenue Attribution'
    ],
    pricing: { monthly: 3500, yearly: 35000, setup: 1000 },
    category: 'AI Email Marketing',
    icon: '📧',
    popular: true,
    link: 'https://ziontechgroup.com/ai-email-marketing',
    benefits: ['Increase open rates by 40%', 'Boost click-through rates by 60%', 'Generate 3x more revenue'],
    capabilities: ['Send 10M+ emails monthly', 'Personalize 1000+ variables', 'Test 100+ variations automatically'],
    roi: '200-400% ROI',
    trial: '7-day free trial',
    marketPrice: '$5,000-15,000/month',
    technologies: ['Email APIs', 'Personalization Engine', 'A/B Testing', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '900+'
  },
  {
    id: 'ai-seo-optimization-suite',
    name: 'AI SEO Optimization Suite',
    description: 'Comprehensive SEO analysis, keyword research, and content optimization with AI recommendations and automated implementation.',
    features: [
      'Keyword Research',
      'Content Analysis',
      'Technical SEO',
      'Competitor Analysis',
      'Rank Tracking',
      'Link Building',
      'Local SEO',
      'Performance Reports'
    ],
    pricing: { monthly: 4500, yearly: 45000, setup: 1500 },
    category: 'AI SEO',
    icon: '🔍',
    popular: true,
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    benefits: ['Increase organic traffic by 150%', 'Improve rankings for 1000+ keywords', 'Save 20 hours per week'],
    capabilities: ['Track 100,000+ keywords', 'Analyze 1000+ websites', 'Generate 5000+ content suggestions'],
    roi: '250-500% ROI',
    trial: '7-day free trial',
    marketPrice: '$7,000-20,000/month',
    technologies: ['SEO APIs', 'Keyword Research', 'Content Analysis', 'Rank Tracking'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '700+'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media content creation, scheduling, and engagement optimization across all major platforms.',
    features: [
      'Content Generation',
      'Post Scheduling',
      'Engagement Analytics',
      'Hashtag Optimization',
      'Multi-platform Management',
      'Influencer Tracking',
      'Crisis Management',
      'ROI Measurement'
    ],
    pricing: { monthly: 1500, yearly: 15000, setup: 500 },
    category: 'AI Social Media',
    icon: '📱',
    popular: false,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    benefits: ['Save 25 hours per week', 'Increase engagement by 200%', 'Grow followers by 300%'],
    capabilities: ['Manage 20+ social platforms', 'Generate 1000+ posts daily', 'Track 500+ influencers'],
    roi: '150-300% ROI',
    trial: '7-day free trial',
    marketPrice: '$2,500-8,000/month',
    technologies: ['Social Media APIs', 'Content Generation', 'Analytics', 'Engagement AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '600+'
  },

  // AI Industry-Specific Solutions
  {
    id: 'ai-healthcare-solutions',
    name: 'AI Healthcare Solutions',
    description: 'Advanced AI-powered healthcare solutions including medical imaging, diagnosis support, patient care, and drug discovery.',
    features: [
      'Medical Imaging Analysis',
      'Diagnosis Support',
      'Patient Monitoring',
      'Drug Discovery',
      'Clinical Decision Support',
      'Treatment Recommendations',
      'HIPAA Compliance',
      'EMR Integration'
    ],
    pricing: { monthly: 15000, yearly: 150000, setup: 10000 },
    category: 'AI Healthcare',
    icon: '🏥',
    popular: true,
    link: 'https://ziontechgroup.com/ai-healthcare',
    benefits: ['Improve diagnosis accuracy by 30%', 'Reduce treatment costs by 40%', 'Save 1000+ lives annually'],
    capabilities: ['Process 1M+ medical images', 'Support 50+ medical specialties', '95% accuracy in diagnosis'],
    roi: '400-800% ROI',
    trial: '30-day free trial',
    marketPrice: '$25,000-100,000/month',
    technologies: ['Medical AI', 'Computer Vision', 'NLP', 'HIPAA Compliance'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '100+'
  },
  {
    id: 'ai-fintech-platform',
    name: 'AI Fintech Platform',
    description: 'Comprehensive financial technology solutions with fraud detection, risk assessment, algorithmic trading, and regulatory compliance.',
    features: [
      'Fraud Detection',
      'Risk Assessment',
      'Algorithmic Trading',
      'Credit Scoring',
      'Regulatory Compliance',
      'Real-time Monitoring',
      'Portfolio Optimization',
      'Market Analysis'
    ],
    pricing: { monthly: 12000, yearly: 120000, setup: 8000 },
    category: 'AI Fintech',
    icon: '💳',
    popular: true,
    link: 'https://ziontechgroup.com/ai-fintech',
    benefits: ['Prevent 99.9% of fraud', 'Increase trading profits by 50%', 'Reduce risk by 60%'],
    capabilities: ['Process 1B+ transactions daily', 'Detect fraud in real-time', 'Support 100+ financial instruments'],
    roi: '300-600% ROI',
    trial: '14-day free trial',
    marketPrice: '$20,000-80,000/month',
    technologies: ['Financial AI', 'Fraud Detection', 'Algorithmic Trading', 'Risk Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '150+'
  },
  {
    id: 'ai-ecommerce-optimization',
    name: 'AI E-commerce Optimization',
    description: 'E-commerce platform optimization with personalization, inventory management, customer insights, and conversion optimization.',
    features: [
      'Product Recommendations',
      'Price Optimization',
      'Inventory Management',
      'Customer Insights',
      'Conversion Optimization',
      'Search Optimization',
      'Fraud Prevention',
      'Performance Analytics'
    ],
    pricing: { monthly: 5000, yearly: 50000, setup: 3000 },
    category: 'AI E-commerce',
    icon: '🛒',
    popular: true,
    link: 'https://ziontechgroup.com/ai-ecommerce-solutions',
    benefits: ['Increase sales by 200%', 'Reduce cart abandonment by 50%', 'Optimize inventory by 40%'],
    capabilities: ['Process 10M+ products', 'Personalize for 1M+ customers', 'Optimize 1000+ variables'],
    roi: '200-500% ROI',
    trial: '14-day free trial',
    marketPrice: '$8,000-25,000/month',
    technologies: ['Recommendation Engine', 'Price Optimization', 'Inventory AI', 'Personalization'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '400+'
  },
  {
    id: 'ai-manufacturing-intelligence',
    name: 'AI Manufacturing Intelligence',
    description: 'Smart manufacturing solutions with predictive maintenance, quality control, process optimization, and supply chain management.',
    features: [
      'Predictive Maintenance',
      'Quality Control',
      'Process Optimization',
      'Supply Chain Management',
      'Energy Efficiency',
      'Safety Monitoring',
      'Performance Analytics',
      'IoT Integration'
    ],
    pricing: { monthly: 10000, yearly: 100000, setup: 5000 },
    category: 'AI Manufacturing',
    icon: '🏭',
    popular: false,
    link: 'https://ziontechgroup.com/ai-manufacturing',
    benefits: ['Reduce downtime by 70%', 'Improve quality by 50%', 'Save 30% on energy costs'],
    capabilities: ['Monitor 10,000+ sensors', 'Predict failures 30 days ahead', 'Optimize 100+ processes'],
    roi: '350-650% ROI',
    trial: '14-day free trial',
    marketPrice: '$15,000-50,000/month',
    technologies: ['IoT', 'Predictive Maintenance', 'Computer Vision', 'Supply Chain AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '200+'
  },

  // AI Advanced Technologies
  {
    id: 'ai-computer-vision-platform',
    name: 'AI Computer Vision Platform',
    description: 'Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analysis.',
    features: [
      'Image Recognition',
      'Object Detection',
      'Facial Recognition',
      'Visual Search',
      'Quality Inspection',
      'Real-time Processing',
      'Custom Models',
      'API Integration'
    ],
    pricing: { monthly: 8000, yearly: 80000, setup: 4000 },
    category: 'AI Computer Vision',
    icon: '👁️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-computer-vision',
    benefits: ['Process 1M+ images daily', 'Achieve 99% accuracy', 'Reduce inspection time by 90%'],
    capabilities: ['Support 100+ image formats', 'Process 4K video in real-time', 'Recognize 10,000+ object classes'],
    roi: '300-600% ROI',
    trial: '14-day free trial',
    marketPrice: '$12,000-40,000/month',
    technologies: ['Computer Vision', 'Deep Learning', 'Image Processing', 'Real-time Analysis'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '300+'
  },
  {
    id: 'ai-natural-language-processing',
    name: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, language understanding, sentiment analysis, translation, and conversational AI.',
    features: [
      'Text Analysis',
      'Language Understanding',
      'Sentiment Analysis',
      'Translation',
      'Conversational AI',
      'Document Processing',
      'Language Generation',
      'Multi-language Support'
    ],
    pricing: { monthly: 6500, yearly: 65000, setup: 3000 },
    category: 'AI NLP',
    icon: '🗣️',
    popular: true,
    link: 'https://ziontechgroup.com/ai-nlp',
    benefits: ['Process 10M+ documents daily', 'Support 100+ languages', 'Achieve 95% accuracy'],
    capabilities: ['Analyze 1B+ words daily', 'Translate 50+ languages', 'Generate human-like text'],
    roi: '250-500% ROI',
    trial: '14-day free trial',
    marketPrice: '$10,000-30,000/month',
    technologies: ['NLP', 'Machine Learning', 'Translation AI', 'Conversation AI'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '500+'
  },
  {
    id: 'ai-machine-learning-platform',
    name: 'AI Machine Learning Platform',
    description: 'Complete ML platform with model training, deployment, management, and MLOps capabilities for enterprise applications.',
    features: [
      'Model Training',
      'Model Deployment',
      'Model Management',
      'AutoML',
      'MLOps',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Monitoring'
    ],
    pricing: { monthly: 9000, yearly: 90000, setup: 5000 },
    category: 'AI ML Platform',
    icon: '🧠',
    popular: true,
    link: 'https://ziontechgroup.com/ai-ml-platform',
    benefits: ['Deploy models 10x faster', 'Reduce ML costs by 60%', 'Improve model accuracy by 40%'],
    capabilities: ['Train 1000+ models daily', 'Deploy to 50+ environments', 'Monitor 10,000+ models'],
    roi: '400-700% ROI',
    trial: '14-day free trial',
    marketPrice: '$15,000-50,000/month',
    technologies: ['Machine Learning', 'MLOps', 'AutoML', 'Model Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '250+'
  },
  {
    id: 'ai-quantum-computing-solutions',
    name: 'AI Quantum Computing Solutions',
    description: 'Next-generation quantum computing solutions for complex optimization, simulation, and machine learning problems.',
    features: [
      'Quantum Optimization',
      'Quantum Simulation',
      'Quantum Machine Learning',
      'Quantum Security',
      'Hybrid Computing',
      'Quantum Algorithms',
      'Performance Optimization',
      'Custom Solutions'
    ],
    pricing: { monthly: 20000, yearly: 200000, setup: 10000 },
    category: 'AI Quantum Computing',
    icon: '⚛️',
    popular: false,
    link: 'https://ziontechgroup.com/ai-quantum-computing',
    benefits: ['Solve problems 1000x faster', 'Break encryption in hours', 'Optimize complex systems'],
    capabilities: ['Process quantum algorithms', 'Simulate quantum systems', 'Optimize 1M+ variables'],
    roi: '500-1000% ROI',
    trial: '30-day free trial',
    marketPrice: '$50,000-200,000/month',
    technologies: ['Quantum Computing', 'Quantum Algorithms', 'Hybrid Systems', 'Quantum ML'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.5,
    users: '50+'
  }
];

export const aiServiceCategories: AIServiceCategory[] = [
  {
    id: 'ai-automation',
    name: 'AI Automation & Workflow',
    description: 'Intelligent automation solutions that streamline business processes',
    icon: '⚡',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    services: aiServices.filter(s => s.category === 'AI Automation')
  },
  {
    id: 'ai-analytics',
    name: 'AI Analytics & Business Intelligence',
    description: 'Data-driven insights and predictive analytics for better decision making',
    icon: '📊',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    services: aiServices.filter(s => ['AI Analytics', 'AI Business Intelligence', 'AI Predictive Analytics', 'AI Monitoring'].includes(s.category))
  },
  {
    id: 'ai-content',
    name: 'AI Content & Marketing Solutions',
    description: 'AI-powered content creation and marketing automation tools',
    icon: '✍️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    services: aiServices.filter(s => ['AI Content', 'AI Email Marketing', 'AI SEO', 'AI Social Media'].includes(s.category))
  },
  {
    id: 'ai-industry',
    name: 'AI Industry-Specific Solutions',
    description: 'Specialized AI solutions for healthcare, finance, e-commerce, and manufacturing',
    icon: '🏥',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    services: aiServices.filter(s => ['AI Healthcare', 'AI Fintech', 'AI E-commerce', 'AI Manufacturing'].includes(s.category))
  },
  {
    id: 'ai-advanced',
    name: 'AI Advanced Technologies',
    description: 'Cutting-edge AI technologies including computer vision, NLP, and quantum computing',
    icon: '🧠',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    services: aiServices.filter(s => ['AI Computer Vision', 'AI NLP', 'AI ML Platform', 'AI Quantum Computing'].includes(s.category))
  }
];