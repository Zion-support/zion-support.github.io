'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Stethoscope,
  Truck,
  Rocket
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
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
      ]
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
    },
    {
      id: 16,
      name: 'AI Quantum Financial Oracle Pro',
      description: 'Revolutionary quantum-powered financial analysis with ultra-fast market predictions, risk assessment, and portfolio optimization using quantum computing algorithms',
      icon: Brain,
      features: [
        'Quantum Market Analysis',
        'Ultra-fast Predictions',
        'Risk Assessment',
        'Portfolio Optimization',
        'Cryptocurrency Analysis',
        'Real-time Trading Signals',
        'Quantum Encryption',
        'High-frequency Trading'
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
      id: 17,
      name: 'AI 3D Generation Studio Pro',
      description: 'AI-powered 3D model generation, animation, virtual environment creation, and AR/VR content development with photorealistic quality',
      icon: FileText,
      features: [
        '3D Model Generation',
        'Animation Creation',
        'Virtual Environments',
        'Texture Generation',
        'Rigging Automation',
        'Rendering Optimization',
        'AR/VR Integration',
        'Motion Capture'
      ],
      category: 'Creative AI',
      popular: true,
      rating: 4.7,
      users: '1,200+',
      color: 'from-pink-500 to-rose-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        'Photorealistic 3D models',
        'Automated animation',
        'AR/VR ready content',
        'Professional quality output'
      ]
    },
    {
      id: 18,
      name: 'AI Mobile App Builder Pro',
      description: 'AI-powered mobile app development with automated coding, testing, deployment, and cross-platform compatibility',
      icon: Smartphone,
      features: [
        'Auto Code Generation',
        'UI/UX Design',
        'Cross-platform Development',
        'Automated Testing',
        'App Store Optimization',
        'Performance Monitoring',
        'Push Notifications',
        'Analytics Integration'
      ],
      category: 'Development AI',
      popular: true,
      rating: 4.8,
      users: '2,300+',
      color: 'from-blue-500 to-cyan-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        'Build apps in hours',
        'Cross-platform compatibility',
        'Auto app store submission',
        'Real-time performance monitoring'
      ]
    },
    {
      id: 19,
      name: 'AI Holographic Workspace Pro',
      description: 'Immersive 3D workspace with AI-powered collaboration tools, virtual reality integration, and spatial computing capabilities',
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
      id: 20,
      name: 'AI Agricultural Intelligence Pro',
      description: 'AI-powered smart farming solutions with crop monitoring, yield prediction, soil analysis, and automated irrigation systems',
      icon: Globe,
      features: [
        'Crop Monitoring',
        'Yield Prediction',
        'Soil Analysis',
        'Automated Irrigation',
        'Pest Detection',
        'Weather Integration',
        'Precision Farming',
        'Supply Chain Optimization'
      ],
      category: 'Agricultural AI',
      popular: true,
      rating: 4.8,
      users: '1,100+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '30% increase in crop yield',
        '50% reduction in water usage',
        'Real-time crop monitoring',
        'Automated farming decisions'
      ]
    },
    {
      id: 21,
      name: 'AI Supply Chain Optimization Pro',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, logistics automation, and risk assessment',
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
      category: 'Supply Chain AI',
      popular: true,
      rating: 4.7,
      users: '900+',
      color: 'from-amber-500 to-orange-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '25% cost reduction',
        '40% inventory optimization',
        'Real-time tracking',
        'Predictive analytics'
      ]
    },
    {
      id: 22,
      name: 'AI Energy Grid Management Pro',
      description: 'Smart energy grid management with AI-powered load balancing, renewable energy integration, and grid stability optimization',
      icon: Zap,
      features: [
        'Load Balancing',
        'Renewable Integration',
        'Grid Stability',
        'Demand Response',
        'Energy Storage',
        'Predictive Maintenance',
        'Cost Optimization',
        'Environmental Impact'
      ],
      category: 'Energy AI',
      popular: false,
      rating: 4.8,
      users: '300+',
      color: 'from-yellow-500 to-orange-600',
      pricing: 'Starting at $999/mo',
      capabilities: [
        '40% grid efficiency improvement',
        '60% renewable energy integration',
        'Real-time grid monitoring',
        'Predictive maintenance'
      ]
    },
    {
      id: 23,
      name: 'AI Financial Crime Detection Pro',
      description: 'Advanced AI fraud detection with real-time monitoring, pattern recognition, and automated response for financial institutions',
      icon: Shield,
      features: [
        'Real-time Monitoring',
        'Pattern Recognition',
        'Automated Response',
        'Risk Scoring',
        'Transaction Analysis',
        'Compliance Reporting',
        'Machine Learning Models',
        'Behavioral Analysis'
      ],
      category: 'Security AI',
      popular: true,
      rating: 4.9,
      users: '1,600+',
      color: 'from-red-500 to-pink-600',
      pricing: 'Starting at $1,299/mo',
      capabilities: [
        '99.9% fraud detection accuracy',
        'Real-time threat response',
        'Automated compliance',
        'Advanced pattern recognition'
      ]
    },
    {
      id: 24,
      name: 'AI Legal Research Pro',
      description: 'AI-powered legal research platform with case law analysis, document review, and automated legal brief generation',
      icon: Scale,
      features: [
        'Case Law Analysis',
        'Document Review',
        'Legal Brief Generation',
        'Precedent Research',
        'Contract Analysis',
        'Compliance Checking',
        'Legal Writing Assistant',
        'Research Automation'
      ],
      category: 'Legal AI',
      popular: false,
      rating: 4.8,
      users: '600+',
      color: 'from-indigo-500 to-purple-600',
      pricing: 'Starting at $349/mo',
      capabilities: [
        '80% faster legal research',
        '95% accuracy in case analysis',
        'Automated brief generation',
        'Comprehensive legal database'
      ]
    },
    {
      id: 25,
      name: 'AI Manufacturing Optimizer Pro',
      description: 'AI-powered manufacturing optimization with predictive maintenance, quality control, and production efficiency enhancement',
      icon: Settings,
      features: [
        'Predictive Maintenance',
        'Quality Control',
        'Production Optimization',
        'Supply Chain Management',
        'Defect Detection',
        'Energy Optimization',
        'Workforce Planning',
        'Equipment Monitoring'
      ],
      category: 'Manufacturing AI',
      popular: false,
      rating: 4.7,
      users: '800+',
      color: 'from-slate-500 to-gray-600',
      pricing: 'Starting at $799/mo',
      capabilities: [
        '25% production efficiency increase',
        '40% reduction in defects',
        'Predictive maintenance',
        'Real-time quality monitoring'
      ]
    },
    {
      id: 26,
      name: 'AI Insurance Claims Processor Pro',
      description: 'AI-powered insurance claims processing with automated assessment, fraud detection, and intelligent document analysis',
      icon: Shield,
      features: [
        'Claims Assessment',
        'Fraud Detection',
        'Document Processing',
        'Risk Analysis',
        'Automated Payouts',
        'Compliance Monitoring',
        'Customer Communication',
        'Settlement Optimization'
      ],
      category: 'Insurance AI',
      popular: true,
      rating: 4.8,
      users: '1,400+',
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Starting at $599/mo',
      capabilities: [
        '70% faster claims processing',
        '90% fraud detection accuracy',
        'Automated document analysis',
        'Real-time risk assessment'
      ]
    },
    {
      id: 27,
      name: 'AI Quality Assurance Suite Pro',
      description: 'AI-powered quality assurance with automated testing, bug detection, performance optimization, and comprehensive test coverage',
      icon: CheckCircle,
      features: [
        'Automated Testing',
        'Bug Detection',
        'Performance Testing',
        'Security Testing',
        'Load Testing',
        'Test Case Generation',
        'Regression Testing',
        'API Testing'
      ],
      category: 'Testing AI',
      popular: true,
      rating: 4.7,
      users: '1,900+',
      color: 'from-green-500 to-emerald-600',
      pricing: 'Starting at $399/mo',
      capabilities: [
        '90% test coverage automation',
        '60% faster testing cycles',
        'Automated bug detection',
        'Performance optimization'
      ]
    },
    {
      id: 28,
      name: 'AI Education Platform Pro',
      description: 'AI-powered educational platform with personalized learning, automated assessment, and adaptive curriculum development',
      icon: BookOpen,
      features: [
        'Personalized Learning',
        'Automated Assessment',
        'Progress Tracking',
        'Content Generation',
        'Student Analytics',
        'Adaptive Curriculum',
        'Learning Path Optimization',
        'Engagement Analysis'
      ],
      category: 'Education AI',
      popular: true,
      rating: 4.8,
      users: '2,500+',
      color: 'from-purple-500 to-pink-600',
      pricing: 'Starting at $299/mo',
      capabilities: [
        '40% improved learning outcomes',
        'Personalized learning paths',
        'Automated assessment',
        'Real-time progress tracking'
      ]
    },
    {
      id: 29,
      name: 'AI Fitness Coach Pro',
      description: 'AI-powered fitness coaching with personalized workout plans, nutrition guidance, and real-time form analysis',
      icon: Users,
      features: [
        'Personalized Workouts',
        'Nutrition Guidance',
        'Progress Tracking',
        'Form Analysis',
        'Goal Setting',
        'Community Features',
        'Wearable Integration',
        'Health Monitoring'
      ],
      category: 'Health AI',
      popular: true,
      rating: 4.6,
      users: '3,200+',
      color: 'from-orange-500 to-red-600',
      pricing: 'Starting at $99/mo',
      capabilities: [
        'Personalized fitness plans',
        'Real-time form correction',
        'Nutrition optimization',
        'Progress tracking'
      ]
    },
    {
      id: 30,
      name: 'AI Predictive Analytics Pro',
      description: 'Advanced predictive analytics with machine learning models, business intelligence, and forecasting capabilities',
      icon: BarChart,
      features: [
        'Machine Learning Models',
        'Business Intelligence',
        'Trend Analysis',
        'Forecasting',
        'Data Visualization',
        'Custom Dashboards',
        'Real-time Analytics',
        'Predictive Modeling'
      ],
      category: 'Analytics AI',
      popular: true,
      rating: 4.8,
      users: '2,200+',
      color: 'from-cyan-500 to-blue-600',
      pricing: 'Starting at $499/mo',
      capabilities: [
        '95% prediction accuracy',
        'Real-time analytics',
        'Custom ML models',
        'Business intelligence insights'
      ]
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Security', 'Document Processing', 'Customer Experience', 'Content Creation', 'Industrial AI', 'Financial AI', 'Healthcare AI', 'Supply Chain', 'Quantum Computing', 'Advanced AI', 'Immersive Technology', 'Climate Tech', 'Pharmaceutical AI', 'Fashion Tech', 'Creative AI', 'Energy Tech', 'Autonomous Systems', 'Blockchain AI', 'Quantum Finance', 'Space Tech', 'Cognitive AI', 'Development AI', 'Agricultural AI', 'Supply Chain AI', 'Energy AI', 'Security AI', 'Legal AI', 'Manufacturing AI', 'Insurance AI', 'Testing AI', 'Education AI', 'Health AI', 'Analytics AI'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 cyber-grid">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">
              Transform your business with our comprehensive suite of AI-powered solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">15+ AI Platforms</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">25,000+ Companies</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">99.9% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`futuristic-card hover-lift p-8 ${
                service.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} users
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  {service.pricing}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 25,000+ companies already using our cutting-edge AI solutions. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-purple-100 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;