import React from 'react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/servicesData';

const AIServicesPage: React.FC = () => {
<<<<<<< HEAD
=======
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    // Core AI Services
    {
      id: 1,
      name: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence with real-time insights and predictive modeling',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration',
        'Natural Language Queries',
        'Automated Reporting'
      ],
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ],
      link: 'https://ziontechgroup.com/ai-analytics-platform'
    },
    {
      id: 11,
      name: 'AI Quantum Computing Platform',
      description: 'Revolutionary quantum computing solutions for complex optimization problems, cryptography, and scientific simulations',
      icon: Brain,
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptographic Security',
        'Optimization Problems',
        'Quantum Simulation',
        'Hybrid Classical-Quantum Computing',
        'Quantum Error Correction',
        'Quantum Cloud Access'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '1000x faster optimization',
        'Unbreakable encryption',
        'Quantum advantage in ML',
        'Scientific breakthrough potential'
      ]
    },
    {
      id: 12,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system with persistent memory and contextual understanding for personalized assistance',
      icon: Brain,
      features: [
        'Persistent Memory Storage',
        'Contextual Understanding',
        'Personalized Responses',
        'Learning from Interactions',
        'Multi-modal Memory',
        'Emotional Intelligence',
        'Long-term Relationship Building',
        'Adaptive Personality'
      ],
      category: 'Advanced AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Personalized AI experience',
        'Context-aware responses',
        'Emotional intelligence',
        'Long-term memory retention'
      ]
    },
    {
      id: 13,
      name: 'AI Holographic Workspace',
      description: 'Immersive 3D workspace with AI-powered collaboration tools and virtual reality integration',
      icon: Globe,
      features: [
        '3D Holographic Interface',
        'Virtual Collaboration',
        'AI-Powered Gestures',
        'Spatial Computing',
        'Mixed Reality Integration',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Technology',
      popular: false,
      rating: 4.7,
      users: '400+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive collaboration',
        '3D data visualization',
        'Virtual presence',
        'Next-gen workspace'
      ]
    },
    {
      id: 14,
      name: 'AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring, carbon footprint tracking, and environmental impact optimization',
      icon: Globe,
      features: [
        'Carbon Footprint Analysis',
        'Climate Risk Assessment',
        'Sustainability Optimization',
        'Environmental Monitoring',
        'Green Energy Management',
        'Waste Reduction AI',
        'Eco-friendly Recommendations',
        'Climate Action Planning'
      ],
      category: 'Climate Tech',
      popular: true,
      rating: 4.9,
      users: '800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $499/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk mitigation'
      ]
    },
    {
      id: 15,
      name: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      icon: Stethoscope,
      features: [
        'Molecular Analysis',
        'Drug Target Identification',
        'Compound Screening',
        'Clinical Trial Optimization',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Personalized Medicine',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: false,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '10x faster drug discovery',
        '95% accuracy in predictions',
        'Reduced clinical trial costs',
        'Personalized treatment options'
      ]
    },
    {
      id: 16,
      name: 'AI Fashion Design Studio',
      description: 'AI-powered fashion design with trend analysis, virtual try-on, and sustainable fashion recommendations',
      icon: FileText,
      features: [
        'Trend Analysis',
        'Virtual Try-On',
        'Sustainable Fashion AI',
        'Color Palette Generation',
        'Pattern Recognition',
        'Size Optimization',
        'Fashion Forecasting',
        'Eco-friendly Materials'
      ],
      category: 'Fashion Tech',
      popular: true,
      rating: 4.6,
      users: '1,500+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Trend prediction accuracy',
        'Virtual fitting technology',
        'Sustainable design optimization',
        'Personalized fashion recommendations'
      ]
    },
    {
      id: 17,
      name: 'AI Music Composition Suite',
      description: 'AI-powered music creation with composition, arrangement, and production capabilities',
      icon: FileText,
      features: [
        'AI Composition',
        'Genre Adaptation',
        'Lyric Generation',
        'Instrument Arrangement',
        'Mood-based Creation',
        'Collaborative Composition',
        'Mastering & Mixing',
        'Copyright Protection'
      ],
      category: 'Creative AI',
      popular: true,
      rating: 4.7,
      users: '2,200+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        'Professional-quality compositions',
        'Multi-genre versatility',
        'Collaborative AI creation',
        'Copyright-safe generation'
      ]
    },
    {
      id: 18,
      name: 'AI Energy Management System',
      description: 'Smart energy optimization with AI-powered grid management and renewable energy integration',
      icon: Zap,
      features: [
        'Smart Grid Management',
        'Renewable Energy Optimization',
        'Demand Response',
        'Energy Storage AI',
        'Carbon Footprint Tracking',
        'Predictive Maintenance',
        'Cost Optimization',
        'Grid Stability'
      ],
      category: 'Energy Tech',
      popular: false,
      rating: 4.8,
      users: '600+',
      color: 'from-amber-500 to-yellow-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '30% energy cost reduction',
        'Grid stability optimization',
        'Renewable energy integration',
        'Predictive energy management'
      ]
    },
    {
      id: 19,
      name: 'AI Autonomous Systems Platform',
      description: 'AI-powered autonomous vehicle and drone management with real-time decision making',
      icon: Settings,
      features: [
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.9,
      users: '300+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
    {
      id: 20,
      name: 'AI Blockchain Solutions',
      description: 'AI-powered blockchain technology with smart contracts, DeFi optimization, and crypto analytics',
      icon: Shield,
      features: [
        'Smart Contract AI',
        'DeFi Optimization',
        'Crypto Analytics',
        'Blockchain Security',
        'Token Economics',
        'Yield Farming AI',
        'Risk Assessment',
        'Regulatory Compliance'
      ],
      category: 'Blockchain AI',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        'Automated DeFi strategies',
        'Smart contract optimization',
        'Crypto market analysis',
        'Blockchain security enhancement'
      ]
    },
    {
      id: 2,
      name: 'AI Workflow Automation Suite',
      description: 'Comprehensive business process automation with intelligent decision-making and self-optimizing workflows',
      icon: Zap,
      features: [
        'Visual Process Designer',
        'Smart Workflow Engine',
        'Error Detection & Recovery',
        'Performance Optimization',
        'Integration Hub',
        'Custom Triggers',
        'Analytics Dashboard',
        'Compliance Monitoring'
      ],
      category: 'Automation',
      popular: true,
      rating: 4.9,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        '80% reduction in manual tasks',
        '99.9% workflow reliability',
        'Real-time process monitoring',
        'Intelligent error handling'
      ]
    },
    {
      id: 3,
      name: 'AI Cybersecurity Platform',
      description: 'Next-generation security solutions with AI-powered threat detection, prevention, and response capabilities',
      icon: Shield,
      features: [
        'Advanced Threat Detection',
        'Behavioral Anomaly Analysis',
        'Automated Incident Response',
        'Security Analytics',
        'Vulnerability Assessment',
        'Compliance Monitoring',
        'Zero Trust Architecture',
        'Threat Intelligence'
      ],
      category: 'Security',
      popular: true,
      rating: 4.7,
      users: '1,500+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Compliance automation'
      ]
    },
    {
      id: 4,
      name: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing with advanced OCR, NLP, and automated data extraction capabilities',
      icon: FileText,
      features: [
        'Advanced OCR Processing',
        'Intelligent Data Extraction',
        'Document Classification',
        'Automated Workflows',
        'Multi-language Support',
        'Quality Assurance',
        'Integration APIs',
        'Compliance Tracking'
      ],
      category: 'Document Processing',
      popular: false,
      rating: 4.6,
      users: '1,800+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        '95% accuracy in data extraction',
        '50% faster processing times',
        'Multi-format support',
        'Automated validation'
      ]
    },
    {
      id: 5,
      name: 'AI Customer Experience Platform',
      description: 'Comprehensive customer experience management with AI-powered personalization and engagement optimization',
      icon: Users,
      features: [
        'Customer Journey Mapping',
        'Personalization Engine',
        'Sentiment Analysis',
        'Predictive Customer Behavior',
        'Omnichannel Support',
        'Real-time Recommendations',
        'Customer Segmentation',
        'Engagement Analytics'
      ],
      category: 'Customer Experience',
      popular: true,
      rating: 4.8,
      users: '2,100+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $249/mo',
      capabilities: [
        '40% increase in customer satisfaction',
        '60% improvement in engagement',
        'Real-time personalization',
        'Predictive customer insights'
      ]
    },
    {
      id: 6,
      name: 'AI Content Generation Studio',
      description: 'Advanced content creation platform with AI-powered writing, editing, and optimization capabilities',
      icon: FileText,
      features: [
        'Multi-format Content Creation',
        'SEO Optimization',
        'Brand Voice Training',
        'Content Templates',
        'Plagiarism Detection',
        'Performance Analytics',
        'Multi-language Support',
        'Collaboration Tools'
      ],
      category: 'Content Creation',
      popular: true,
      rating: 4.9,
      users: '3,500+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $179/mo',
      capabilities: [
        '10x faster content creation',
        'SEO-optimized content',
        'Brand consistency',
        'Multi-platform publishing'
      ]
    },
    {
      id: 7,
      name: 'AI Predictive Maintenance',
      description: 'Intelligent maintenance solutions with predictive analytics and automated scheduling for industrial equipment',
      icon: Settings,
      features: [
        'Predictive Analytics',
        'Equipment Monitoring',
        'Automated Scheduling',
        'Failure Prediction',
        'Maintenance Optimization',
        'Cost Analysis',
        'Integration APIs',
        'Reporting Dashboard'
      ],
      category: 'Industrial AI',
      popular: false,
      rating: 4.7,
      users: '900+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $499/mo',
      capabilities: [
        '30% reduction in downtime',
        '25% cost savings',
        'Predictive maintenance',
        'Real-time monitoring'
      ]
    },
    {
      id: 8,
      name: 'AI Financial Intelligence',
      description: 'Advanced financial analysis and forecasting with AI-powered risk assessment and investment optimization',
      icon: BarChart,
      features: [
        'Financial Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Portfolio Optimization',
        'Market Analysis',
        'Compliance Monitoring',
        'Real-time Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '1,200+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $349/mo',
      capabilities: [
        '95% accuracy in predictions',
        'Real-time risk monitoring',
        'Automated compliance',
        'Investment optimization'
      ]
    },
    {
      id: 9,
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI with diagnostic assistance, treatment recommendations, and patient monitoring capabilities',
      icon: Stethoscope,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Recommendations',
        'Patient Monitoring',
        'Drug Interaction Analysis',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Compliance Tracking'
      ],
      category: 'Healthcare AI',
      popular: false,
      rating: 4.9,
      users: '600+',
      color: 'from-teal-500 to-cyan-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '98% diagnostic accuracy',
        'Faster diagnosis times',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      id: 10,
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Logistics Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Optimization',
        'Risk Assessment',
        'Performance Analytics'
      ],
      category: 'Supply Chain',
      popular: false,
      rating: 4.6,
      users: '800+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '20% cost reduction',
        '30% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
]
    },
    {
      id: 11,


  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace'];


      name: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial modeling and risk assessment for high-frequency trading and portfolio optimization',
      icon: Brain,
      features: [
        'Quantum Risk Modeling',
        'High-Frequency Trading',
        'Portfolio Optimization',
        'Market Prediction',
        'Risk Assessment',
        'Algorithmic Trading',
        'Real-time Analysis',
        'Quantum Computing Integration'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        '300% faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
    {
      id: 12,
      name: 'AI Climate Solutions Pro',
      description: 'Advanced climate modeling and environmental impact analysis with carbon footprint optimization and sustainability planning',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Carbon Footprint Analysis',
        'Sustainability Planning',
        'Environmental Impact Assessment',
        'Renewable Energy Optimization',
        'Emission Tracking',
        'Green Technology Integration',
        'Compliance Monitoring'
      ],
      category: 'Climate Tech',
      popular: true,
      rating: 4.8,
      users: '400+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '50% carbon footprint reduction',
        'Real-time environmental monitoring',
        'Sustainability optimization',
        'Climate risk assessment'
      ]
    },
    {
      id: 13,
      name: 'AI Space Technology Pro',
      description: 'Cutting-edge AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket,
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Tech',
      popular: false,
      rating: 4.9,
      users: '50+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
      ]
    },
    {
      id: 14,
      name: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform with molecular modeling, clinical trial optimization, and personalized medicine',
      icon: Stethoscope,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Clinical Trial Optimization',
        'Personalized Medicine',
        'Side Effect Prediction',
        'Drug Interaction Analysis',
        'Biomarker Discovery',
        'Regulatory Compliance'
      ],
      category: 'Pharmaceutical AI',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '70% faster drug discovery',
        '90% accuracy in predictions',
        'Personalized treatment plans',
        'Reduced clinical trial costs'
      ]
    },
    {
      id: 15,
      name: 'AI Neural Memory Assistant',
      description: 'Advanced AI system that mimics human memory patterns for enhanced learning, recall, and cognitive assistance',
      icon: Brain,
      features: [
        'Memory Pattern Recognition',
        'Learning Optimization',
        'Cognitive Assistance',
        'Knowledge Retention',
        'Pattern Recognition',
        'Adaptive Learning',
        'Memory Enhancement',
        'Cognitive Analytics'
      ],
      category: 'Cognitive AI',
      popular: false,
      rating: 4.7,
      users: '300+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '40% improved learning speed',
        '90% better retention rates',
        'Adaptive memory patterns',
        'Cognitive enhancement'
      ]
<<<<<<< HEAD
    },
    {
      id: 16,
      name: 'AI Quantum Computing Platform Pro',
      description: 'Revolutionary quantum computing platform with AI optimization for complex problem solving and advanced simulations',
      icon: Brain,
      features: [
        'Quantum Algorithm Development',
        'AI-Powered Optimization',
        'Quantum Machine Learning',
        'Hybrid Classical-Quantum Computing',
        'Quantum Simulation',
        'Error Correction',
        'Performance Monitoring',
        'Custom Development'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '120+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '1000x faster computations',
        'Quantum advantage in ML',
        'Advanced problem solving',
        'Unbreakable encryption'
      ]
    },
    {
      id: 17,
      name: 'AI Holographic Interface Suite',
      description: 'Immersive 3D holographic interface with AI-powered gesture recognition and spatial computing',
      icon: Globe,
      features: [
        '3D Holographic Display',
        'Gesture Recognition',
        'Spatial Computing',
        'AI-Powered Interactions',
        'Mixed Reality Integration',
        'Real-time Rendering',
        'Multi-user Collaboration',
        'Custom Applications'
      ],
      category: 'Immersive Technology',
      popular: true,
      rating: 4.8,
      users: '280+',
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Starting at $1,599/mo',
      capabilities: [
        'Immersive 3D interactions',
        'Gesture-based control',
        'Spatial computing',
        'Mixed reality integration'
      ]
    },
    {
      id: 18,
      name: 'AI Neural Network Architect',
      description: 'Advanced AI system for designing and optimizing neural network architectures with automated search and optimization',
      icon: Brain,
      features: [
        'Architecture Search',
        'Automated Design',
        'Performance Optimization',
        'Hyperparameter Tuning',
        'Model Compression',
        'Deployment Optimization',
        'Custom Architectures',
        'Performance Analytics'
      ],
      category: 'AI Development',
      popular: true,
      rating: 4.8,
      users: '450+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $899/mo',
      capabilities: [
        'Automated architecture design',
        'Performance optimization',
        'Model compression',
        'Deployment optimization'
      ]
    },
    {
      id: 19,
      name: 'AI Quantum Machine Learning Pro',
      description: 'Quantum-enhanced machine learning with exponential speedup and advanced pattern recognition capabilities',
      icon: Brain,
      features: [
        'Quantum ML Algorithms',
        'Exponential Speedup',
        'Pattern Recognition',
        'Quantum Neural Networks',
        'Optimization Problems',
        'Feature Selection',
        'Model Training',
        'Performance Analytics'
      ],
      category: 'Quantum ML',
      popular: true,
      rating: 4.9,
      users: '180+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,299/mo',
      capabilities: [
        'Exponential speedup',
        'Advanced pattern recognition',
        'Quantum neural networks',
        'Optimization solutions'
      ]
    },
    {
      id: 20,
      name: 'AI Space Technology Suite',
      description: 'Comprehensive AI solutions for space exploration, satellite management, and space mission optimization',
      icon: Rocket,
      features: [
        'Satellite Management',
        'Mission Planning',
        'Space Weather Prediction',
        'Orbital Mechanics',
        'Space Debris Tracking',
        'Communication Optimization',
        'Navigation Systems',
        'Space Mission Analytics'
      ],
      category: 'Space Technology',
      popular: false,
      rating: 4.9,
      users: '75+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Real-time space monitoring',
        'Advanced orbital calculations',
        'Space debris mitigation'
      ]
    },
    {
      id: 21,
      name: 'AI Molecular Design Studio',
      description: 'Advanced AI platform for molecular design, drug discovery, and chemical property prediction',
      icon: FileText,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Chemical Simulation',
        'Property Prediction',
        'Reaction Planning',
        'Toxicity Analysis',
        'Patent Search',
        'Collaboration Tools'
      ],
      category: 'Scientific AI',
      popular: true,
      rating: 4.9,
      users: '150+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '90% accuracy in predictions',
        'Faster drug discovery',
        'Chemical property analysis',
        'Patent-safe designs'
      ]
    },
    {
      id: 22,
      name: 'AI Holographic Data Visualization',
      description: 'Immersive 3D data visualization with AI-powered insights and interactive holographic displays',
      icon: BarChart,
      features: [
        '3D Data Visualization',
        'Holographic Display',
        'AI Insights',
        'Interactive Exploration',
        'Real-time Updates',
        'Custom Dashboards',
        'Collaboration Tools',
        'Export Options'
      ],
      category: 'Data Visualization',
      popular: true,
      rating: 4.8,
      users: '320+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Immersive 3D visualization',
        'Holographic data display',
        'AI-powered insights',
        'Interactive exploration'
      ]
    },
    {
      id: 23,
      name: 'AI Quantum Security Suite',
      description: 'Quantum-resistant security solutions with unbreakable encryption and advanced threat protection',
      icon: Shield,
      features: [
        'Quantum Encryption',
        'Zero-knowledge Architecture',
        'Advanced Threat Detection',
        'Biometric Authentication',
        'Multi-factor Security',
        'Audit Logging',
        'Compliance Tools',
        'API Security'
      ],
      category: 'Quantum Security',
      popular: true,
      rating: 4.9,
      users: '200+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,999/mo',
      capabilities: [
        'Unbreakable quantum encryption',
        'Zero-knowledge security',
        'Advanced threat protection',
        'Compliance automation'
      ]
    },
    {
      id: 24,
      name: 'AI Neural Interface Pro',
      description: 'Advanced neural interface with brain-computer interaction, thought-to-text, and cognitive enhancement',
      icon: Brain,
      features: [
        'Brain-Computer Interface',
        'Thought-to-Text',
        'Cognitive Enhancement',
        'Neural Training',
        'Mind Mapping',
        'Memory Augmentation',
        'Focus Optimization',
        'Mental Health Monitoring'
      ],
      category: 'Neural Interface',
      popular: false,
      rating: 4.8,
      users: '120+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,799/mo',
      capabilities: [
        'Direct brain interaction',
        'Thought-to-text conversion',
        'Cognitive enhancement',
        'Mental health insights'
      ]
    },
    {
      id: 25,
      name: 'AI Quantum Optimization Engine',
      description: 'Quantum-powered optimization engine for complex problems with exponential speedup and advanced algorithms',
      icon: Zap,
      features: [
        'Quantum Optimization',
        'Complex Problem Solving',
        'Exponential Speedup',
        'Advanced Algorithms',
        'Real-time Processing',
        'API Integration',
        'Custom Solutions',
        'Performance Analytics'
      ],
      category: 'Quantum Optimization',
      popular: true,
      rating: 4.9,
      users: '160+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        'Exponential speedup',
        'Complex problem solving',
        'Quantum algorithms',
        'Real-time optimization'
      ]
    },
    {
      id: 26,
      name: 'AI Holographic Training Simulator',
      description: 'Immersive 3D training simulator with AI-powered personalized learning and virtual reality integration',
      icon: Users,
      features: [
        '3D Training Environment',
        'AI Personalization',
        'Virtual Reality',
        'Skill Assessment',
        'Progress Tracking',
        'Interactive Scenarios',
        'Multi-user Support',
        'Analytics Dashboard'
      ],
      category: 'Immersive Learning',
      popular: true,
      rating: 4.8,
      users: '280+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        'Immersive 3D training',
        'AI personalization',
        'Virtual reality integration',
        'Skill assessment'
      ]
    },
    {
      id: 27,
      name: 'AI Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks with exponential computational power and advanced learning capabilities',
      icon: Brain,
      features: [
        'Quantum Neural Networks',
        'Exponential Power',
        'Advanced Learning',
        'Pattern Recognition',
        'Optimization',
        'Training Acceleration',
        'Model Deployment',
        'Performance Monitoring'
      ],
      category: 'Quantum AI',
      popular: false,
      rating: 4.9,
      users: '90+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $3,499/mo',
      capabilities: [
        'Exponential computational power',
        'Advanced learning',
        'Pattern recognition',
        'Training acceleration'
      ]
    },
    {
      id: 28,
      name: 'AI Autonomous Systems Pro',
      description: 'Advanced AI platform for autonomous vehicle and drone management with real-time decision making',
      icon: Settings,
      features: [
        'Autonomous Vehicle AI',
        'Drone Fleet Management',
        'Real-time Decision Making',
        'Path Optimization',
        'Collision Avoidance',
        'Weather Adaptation',
        'Fleet Coordination',
        'Safety Monitoring'
      ],
      category: 'Autonomous Systems',
      popular: true,
      rating: 4.9,
      users: '180+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $2,799/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time autonomous decisions',
        'Fleet optimization',
        'Weather-adaptive navigation'
      ]
    },
    {
      id: 29,
      name: 'AI Quantum Financial Oracle',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions and risk assessment',
      icon: DollarSign,
      features: [
        'Quantum Market Analysis',
        'Ultra-fast Predictions',
        'Risk Assessment',
        'Portfolio Optimization',
        'Cryptocurrency Analysis',
        'Real-time Trading Signals',
        'Quantum Computing',
        'Advanced Analytics'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '140+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '1000x faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
    {
      id: 30,
      name: 'AI Holographic Workspace Pro',
      description: 'Immersive 3D workspace with AI-powered collaboration, virtual meetings, and spatial computing',
      icon: Globe,
      features: [
        '3D Workspace',
        'Virtual Collaboration',
        'Spatial Computing',
        'AI Gestures',
        'Mixed Reality',
        'Real-time Translation',
        'Virtual Whiteboarding',
        'Immersive Presentations'
      ],
      category: 'Immersive Workspace',
      popular: true,
      rating: 4.7,
      users: '250+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $1,799/mo',
      capabilities: [
        'Immersive 3D collaboration',
        'Spatial computing',
        'AI-powered gestures',
        'Mixed reality integration'
      ]
    },
    {
      id: 31,
      name: 'AI Code Security Auditor Pro',
      description: 'Advanced AI-powered code security auditing with vulnerability detection, compliance checking, and automated fixes',
      icon: Shield,
      features: [
        'Vulnerability Detection',
        'Compliance Checking',
        'Automated Fixes',
        'Security Scoring',
        'Code Review',
        'Threat Modeling',
        'Penetration Testing',
        'Security Training'
      ],
      category: 'Security AI',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-red-500 to-orange-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '99.8% vulnerability detection',
        'Automated security fixes',
        'Real-time threat analysis',
        'Compliance automation'
      ]
    },
    {
      id: 32,
      name: 'AI Investment Optimizer Pro',
      description: 'AI-powered investment portfolio optimization with real-time market analysis and risk management',
      icon: BarChart,
      features: [
        'Portfolio Optimization',
        'Risk Management',
        'Market Analysis',
        'Asset Allocation',
        'Performance Tracking',
        'Tax Optimization',
        'Rebalancing',
        'Alerts'
      ],
      category: 'Financial AI',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '25% better returns',
        'Risk reduction',
        'Real-time optimization',
        'Tax-efficient strategies'
      ]
    },
    {
      id: 33,
      name: 'AI Mental Health Companion',
      description: 'AI-powered mental health companion with mood tracking, therapy sessions, and wellness recommendations',
      icon: Stethoscope,
      features: [
        'Mood Tracking',
        'Therapy Sessions',
        'Wellness Recommendations',
        'Crisis Intervention',
        'Progress Monitoring',
        'Meditation Guides',
        'Sleep Analysis',
        'Stress Management'
      ],
      category: 'Healthcare AI',
      popular: true,
      rating: 4.7,
      users: '2,500+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $199/mo',
      capabilities: [
        '24/7 mental health support',
        'Personalized therapy',
        'Mood improvement tracking',
        'Crisis prevention'
      ]
    },
    {
      id: 34,
      name: 'AI Smart Home Controller Pro',
      description: 'Intelligent smart home automation with AI-powered energy management and security monitoring',
      icon: Settings,
      features: [
        'Home Automation',
        'Energy Management',
        'Security Monitoring',
        'Voice Control',
        'Predictive Maintenance',
        'Climate Control',
        'Lighting Control',
        'Appliance Management'
      ],
      category: 'IoT AI',
      popular: true,
      rating: 4.6,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $149/mo',
      capabilities: [
        '40% energy savings',
        'Smart automation',
        'Security monitoring',
        'Predictive maintenance'
      ]
    },
    {
      id: 35,
      name: 'AI Voice Cloning Studio Pro',
      description: 'Professional voice cloning and synthesis with AI-powered voice generation and customization',
      icon: FileText,
      features: [
        'Voice Cloning',
        'Voice Synthesis',
        'Emotion Control',
        'Language Translation',
        'Voice Conversion',
        'Audio Editing',
        'Real-time Processing',
        'API Integration'
      ],
      category: 'Audio AI',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '99% voice accuracy',
        'Real-time synthesis',
        'Emotion control',
        'Multi-language support'
      ]
    },
    {
      id: 36,
      name: 'AI Blockchain Analytics Pro',
      description: 'Advanced blockchain analytics with transaction monitoring, fraud detection, and compliance reporting',
      icon: Shield,
      features: [
        'Transaction Monitoring',
        'Fraud Detection',
        'Compliance Reporting',
        'Risk Assessment',
        'Address Analysis',
        'Smart Contract Auditing',
        'DeFi Analytics',
        'Regulatory Compliance'
      ],
      category: 'Blockchain AI',
      popular: true,
      rating: 4.9,
      users: '600+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Real-time monitoring',
        'Fraud prevention',
        'Compliance automation',
        'Risk assessment'
      ]
    },
    {
      id: 37,
      name: 'AI Space Mission Planner',
      description: 'AI-powered space mission planning with orbital mechanics, trajectory optimization, and mission simulation',
      icon: Rocket,
      features: [
        'Orbital Mechanics',
        'Trajectory Optimization',
        'Mission Simulation',
        'Risk Assessment',
        'Resource Planning',
        'Launch Window Analysis',
        'Satellite Management',
        'Space Weather Integration'
      ],
      category: 'Space AI',
      popular: false,
      rating: 4.9,
      users: '25+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        '99.9% mission success rate',
        'Optimal trajectory planning',
        'Real-time space monitoring',
        'Advanced orbital calculations'
      ]
    },
    {
      id: 38,
      name: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling and prediction with AI-powered environmental analysis and sustainability planning',
      icon: Globe,
      features: [
        'Climate Modeling',
        'Weather Prediction',
        'Environmental Analysis',
        'Carbon Tracking',
        'Sustainability Planning',
        'Risk Assessment',
        'Real-time Monitoring',
        'Policy Recommendations'
      ],
      category: 'Climate AI',
      popular: true,
      rating: 4.8,
      users: '280+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '95% prediction accuracy',
        'Real-time climate monitoring',
        'Carbon footprint optimization',
        'Sustainability insights'
      ]
    },
    {
      id: 39,
      name: 'AI Molecular Designer Pro',
      description: 'AI-powered molecular design and drug discovery with advanced chemistry modeling and simulation',
      icon: FileText,
      features: [
        'Molecular Modeling',
        'Drug Design',
        'Chemical Simulation',
        'Property Prediction',
        'Reaction Planning',
        'Toxicity Analysis',
        'Patent Search',
        'Collaboration Tools'
      ],
      category: 'Scientific AI',
      popular: false,
      rating: 4.9,
      users: '80+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $2,499/mo',
      capabilities: [
        '90% accuracy in predictions',
        'Faster drug discovery',
        'Chemical property analysis',
        'Patent-safe designs'
      ]
    },
    {
      id: 31,
      name: 'AI Quantum Financial Oracle Pro',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions and risk assessment',
      icon: Brain,
      features: [
        'Quantum Market Analysis',
        'Ultra-fast Predictions',
        'Risk Assessment',
        'Portfolio Optimization',
        'Cryptocurrency Analysis',
        'Real-time Trading Signals',
        'Quantum Computing',
        'Advanced Analytics'
      ],
      category: 'Quantum Finance',
      popular: true,
      rating: 4.9,
      users: '120+',
      color: 'from-emerald-500 to-green-600',
      pricing: 'Starting at $3,999/mo',
      capabilities: [
        '1000x faster calculations',
        '99.9% prediction accuracy',
        'Quantum advantage',
        'Real-time risk modeling'
      ]
    },
    {
      id: 32,
      name: 'AI Neural Interface Pro',
      description: 'Advanced neural interface with brain-computer interaction, thought-to-text, and cognitive enhancement',
      icon: Brain,
      features: [
        'Brain-Computer Interface',
        'Thought-to-Text',
        'Cognitive Enhancement',
        'Neural Training',
        'Mind Mapping',
        'Memory Augmentation',
        'Focus Optimization',
        'Mental Health Monitoring'
      ],
      category: 'Neural Interface',
      popular: false,
      rating: 4.8,
      users: '90+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,799/mo',
      capabilities: [
        'Direct brain interaction',
        'Thought-to-text conversion',
        'Cognitive enhancement',
        'Mental health insights'
      ]
    },
    {
      id: 33,
      name: 'AI Quantum Computing Cloud Pro',
      description: 'Access to quantum computing power with AI optimization and hybrid classical-quantum algorithms',
      icon: Brain,
      features: [
        'Quantum Computing Access',
        'Hybrid Algorithms',
        'AI Optimization',
        'Quantum Simulation',
        'Error Correction',
        'Performance Monitoring',
        'API Integration',
        'Custom Development'
      ],
      category: 'Quantum Computing',
      popular: true,
      rating: 4.9,
      users: '60+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $4,999/mo',
      capabilities: [
        'Quantum computing access',
        'Hybrid algorithms',
        'AI optimization',
        'Quantum simulation'
      ]
    },
    {
      id: 34,
      name: 'AI Autonomous Vehicle Fleet Pro',
      description: 'AI-powered autonomous vehicle fleet management with real-time coordination and safety monitoring',
      icon: Truck,
      features: [
        'Fleet Management',
        'Autonomous Navigation',
        'Real-time Coordination',
        'Safety Monitoring',
        'Route Optimization',
        'Weather Adaptation',
        'Maintenance Prediction',
        'Performance Analytics'
      ],
      category: 'Autonomous Systems',
      popular: false,
      rating: 4.9,
      users: '40+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $5,999/mo',
      capabilities: [
        '99.9% safety record',
        'Real-time fleet coordination',
        'Weather-adaptive navigation',
        'Predictive maintenance'
      ]
    },
    {
      id: 35,
      name: 'AI Holographic Design Studio Pro',
      description: 'Immersive 3D design studio with AI-powered creativity tools and holographic visualization',
      icon: Palette,
      features: [
        '3D Design Tools',
        'Holographic Visualization',
        'AI Creativity Assistant',
        'Real-time Collaboration',
        'Material Simulation',
        'Lighting Analysis',
        'Animation Tools',
        'Export Options'
      ],
      category: 'Immersive Design',
      popular: true,
      rating: 4.8,
      users: '180+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        'Immersive 3D design',
        'Holographic visualization',
        'AI creativity assistance',
        'Real-time collaboration'
      ]
    },
    {
      id: 36,
      name: 'AI Quantum Machine Learning Pro',
      description: 'Quantum-enhanced machine learning with exponential speedup and advanced pattern recognition',
      icon: Brain,
      features: [
        'Quantum ML Algorithms',
        'Exponential Speedup',
        'Pattern Recognition',
        'Quantum Neural Networks',
        'Optimization Problems',
        'Feature Selection',
        'Model Training',
        'Performance Analytics'
      ],
      category: 'Quantum ML',
      popular: true,
      rating: 4.9,
      users: '110+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $2,299/mo',
      capabilities: [
        'Exponential speedup',
        'Advanced pattern recognition',
        'Quantum neural networks',
        'Optimization solutions'
      ]
    },
    {
      id: 37,
      name: 'AI Space Debris Tracker Pro',
      description: 'AI-powered space debris tracking and collision avoidance with real-time monitoring and prediction',
      icon: Globe,
      features: [
        'Debris Tracking',
        'Collision Prediction',
        'Real-time Monitoring',
        'Orbital Analysis',
        'Risk Assessment',
        'Alert System',
        'Historical Data',
        'API Integration'
      ],
      category: 'Space Technology',
      popular: false,
      rating: 4.8,
      users: '35+',
      color: 'from-indigo-500 to-blue-600',
      pricing: 'Starting at $1,499/mo',
      capabilities: [
        'Real-time debris tracking',
        'Collision prediction',
        'Risk assessment',
        'Alert system'
      ]
    },
    {
      id: 38,
      name: 'AI Quantum Cryptography Suite Pro',
      description: 'Quantum-resistant cryptography with unbreakable encryption and secure communication protocols',
      icon: Shield,
      features: [
        'Quantum Encryption',
        'Secure Communication',
        'Key Distribution',
        'Digital Signatures',
        'Authentication',
        'Compliance Tools',
        'API Security',
        'Audit Logging'
      ],
      category: 'Quantum Security',
      popular: true,
      rating: 4.9,
      users: '85+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $2,699/mo',
      capabilities: [
        'Unbreakable encryption',
        'Secure communication',
        'Quantum key distribution',
        'Compliance automation'
      ]
    },
    {
      id: 39,
      name: 'AI Neural Network Optimizer Pro',
      description: 'Advanced neural network optimization with automated architecture search and performance tuning',
      icon: Settings,
      features: [
        'Architecture Search',
        'Performance Tuning',
        'Hyperparameter Optimization',
        'Model Compression',
        'Quantization',
        'Pruning',
        'Training Acceleration',
        'Deployment Optimization'
      ],
      category: 'AI Development',
      popular: true,
      rating: 4.7,
      users: '320+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        'Automated architecture search',
        'Performance optimization',
        'Model compression',
        'Training acceleration'
      ]
    },
    {
      id: 40,
      name: 'AI Holographic Data Visualization Pro',
      description: 'Immersive 3D data visualization with AI-powered insights and interactive holographic displays',
      icon: BarChart,
      features: [
        '3D Data Visualization',
        'Holographic Display',
        'AI Insights',
        'Interactive Exploration',
        'Real-time Updates',
        'Custom Dashboards',
        'Collaboration Tools',
        'Export Options'
      ],
      category: 'Immersive Analytics',
      popular: true,
      rating: 4.8,
      users: '220+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $1,199/mo',
      capabilities: [
        'Immersive 3D visualization',
        'Holographic data display',
        'AI-powered insights',
        'Interactive exploration'
      ]
    },
    {
      id: 41,
      name: 'AI Quantum Optimization Engine Pro',
      description: 'Quantum-powered optimization engine for complex problems with exponential speedup and advanced algorithms',
      icon: Zap,
      features: [
        'Quantum Optimization',
        'Complex Problem Solving',
        'Exponential Speedup',
        'Advanced Algorithms',
        'Real-time Processing',
        'API Integration',
        'Custom Solutions',
        'Performance Analytics'
      ],
      category: 'Quantum Optimization',
      popular: true,
      rating: 4.9,
      users: '95+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $1,999/mo',
      capabilities: [
        'Exponential speedup',
        'Complex problem solving',
        'Quantum algorithms',
        'Real-time optimization'
      ]
    },
    {
      id: 42,
      name: 'AI Holographic Training Simulator Pro',
      description: 'Immersive 3D training simulator with AI-powered personalized learning and virtual reality integration',
      icon: Users,
      features: [
        '3D Training Environment',
        'AI Personalization',
        'Virtual Reality',
        'Skill Assessment',
        'Progress Tracking',
        'Interactive Scenarios',
        'Multi-user Support',
        'Analytics Dashboard'
      ],
      category: 'Immersive Learning',
      popular: true,
      rating: 4.8,
      users: '160+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $1,399/mo',
      capabilities: [
        'Immersive 3D training',
        'AI personalization',
        'Virtual reality integration',
        'Skill assessment'
      ]
    },
    {
      id: 43,
      name: 'AI Quantum Neural Networks Pro',
      description: 'Quantum-enhanced neural networks with exponential computational power and advanced learning capabilities',
      icon: Brain,
      features: [
        'Quantum Neural Networks',
        'Exponential Power',
        'Advanced Learning',
        'Pattern Recognition',
        'Optimization',
        'Training Acceleration',
        'Model Deployment',
        'Performance Monitoring'
      ],
      category: 'Quantum AI',
      popular: false,
      rating: 4.9,
      users: '50+',
      color: 'from-violet-500 to-purple-600',
      pricing: 'Starting at $3,499/mo',
      capabilities: [
        'Exponential computational power',
        'Advanced learning',
        'Pattern recognition',
        'Training acceleration'
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace', 'Quantum Finance', 'Immersive Design', 'Immersive Analytics', 'Immersive Learning', 'Security AI', 'IoT AI', 'Audio AI', 'Space AI', 'Climate AI'];
=======
}
  ];

const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Cognitive AI', 'AI Development', 'Quantum ML', 'Space Technology', 'Scientific AI', 'Data Visualization', 'Quantum Security', 'Neural Interface', 'Quantum Optimization', 'Immersive Learning', 'Quantum AI', 'Immersive Workspace', 'Quantum Finance', 'Immersive Design', 'Immersive Analytics', 'Environmental AI'];
>>>>>>> origin/main

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI services including machine learning, natural language processing, computer vision, and custom AI development solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI development, predictive analytics" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text cyber-font">
              AI SERVICES & SOLUTIONS
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. Our comprehensive AI services 
              include machine learning, natural language processing, computer vision, and custom AI development solutions.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.aiServices.map((service) => (
              <div key={service.id} className="futuristic-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold neon-text">{service.marketPrice}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-blue mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-neon-green mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <a 
                    href={`/${service.id}`} 
                    className="neon-button w-full text-center"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/contact" 
                    className="neon-button neon-button-purple w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* AI Capabilities */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              AI CAPABILITIES & TECHNOLOGIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300 text-sm">Advanced ML models for predictive analytics and pattern recognition</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300 text-sm">Text analysis, sentiment analysis, and language understanding</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                <p className="text-gray-300 text-sm">Image recognition, object detection, and visual analysis</p>
              </div>
              <div className="text-center futuristic-card p-6">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">Deep Learning</h3>
                <p className="text-gray-300 text-sm">Neural networks and advanced AI architectures</p>
              </div>
            </div>
          </div>

          {/* AI Tools Showcase */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-pink">
              AI-POWERED TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-white mb-2">Content Generator</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered content creation for blogs, social media, and marketing</p>
                <a href="/ai-content-generator" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-400 text-sm mb-4">Predict sales trends and optimize revenue with AI</p>
                <a href="/zion-ai-sales-predictor" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-400 text-sm mb-4">Automate business processes with intelligent workflows</p>
                <a href="/zion-ai-workflow-automator" className="neon-button w-full text-sm">Try Now</a>
              </div>
              <div className="futuristic-card p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered financial predictions and analysis</p>
                <a href="/zion-ai-financial-forecaster" className="neon-button w-full text-sm">Try Now</a>
              </div>
            </div>
          </div>

          {/* Why Choose Our AI Services */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text">
              WHY CHOOSE OUR AI SERVICES?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs and challenges</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Implementation</h3>
                <p className="text-gray-300">Rapid deployment and integration with your existing systems and workflows</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4">Secure & Compliant</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance with industry standards</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📈</div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">Track record of delivering measurable business value and ROI</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🛠️</div>
                <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">Continuous monitoring, optimization, and support for your AI solutions</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">Future-Ready</h3>
                <p className="text-gray-300">Cutting-edge AI technologies that keep you ahead of the competition</p>
              </div>
            </div>
          </div>

          {/* AI Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16 neon-text-purple">
              OUR AI DEVELOPMENT PROCESS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery & Analysis</h3>
                <p className="text-gray-300">Understand your business needs and data requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Model Development</h3>
                <p className="text-gray-300">Design and train custom AI models for your use case</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Testing & Validation</h3>
                <p className="text-gray-300">Rigorous testing to ensure accuracy and performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">Deploy to production with ongoing monitoring and support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic">
                READY TO TRANSFORM WITH AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI can revolutionize your business. Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="neon-button px-12 py-4 text-lg font-bold glow-effect"
                >
                  Get Free Consultation
                </a>
                <a 
                  href="/pricing" 
                  className="neon-button neon-button-purple px-12 py-4 text-lg font-bold glow-effect"
                >
                  View AI Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;