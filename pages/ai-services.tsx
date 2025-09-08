import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import Layout from '../components/Layout';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
<<<<<<< HEAD
  Star,
  TrendingUp,
  Building,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Heart,
  DollarSign,
  BookOpen,
  ShoppingCart,
  Car,
  Clock,
  Users,
  Shield
} from 'lucide-react';

const aiServices = [
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Custom ML models and algorithms for your business needs',
    icon: Brain,
    features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making']
  },
  {
    id: 'natural-language-processing',
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Text Classification', 'Language Translation']
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Image and video analysis for various applications',
    icon: Eye,
    features: ['Object Detection', 'Image Recognition', 'Video Analytics']
  },
  {
    id: 'ai-consulting',
    title: 'AI Strategy Consulting',
    description: 'Strategic guidance for AI implementation',
    icon: BarChart3,
    features: ['AI Roadmap', 'Technology Assessment', 'Implementation Planning']
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'Medical diagnosis and treatment optimization' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and risk assessment' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

const benefits = [
  {
    icon: ArrowRight,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline operations'
  },
  {
    icon: Star,
    title: 'Better Decision Making',
    description: 'Data-driven insights for strategic business decisions'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'AI systems that work around the clock'
  },
  {
    icon: Users,
    title: 'Scalable Solutions',
    description: 'Grow with your business needs'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Advanced threat detection and prevention'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive reporting and insights'
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'kleber@ziontechgroup.com',
    href: 'mailto:kleber@ziontechgroup.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 302 464 0950',
    href: 'tel:+13024640950'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '364 E Main St STE 1008, Middletown DE 19709',
    href: '#'
  }
];

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and more."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, automation"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Cloud, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  Search, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2,
  Cog
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // AI Automation & Process Intelligence
  {
    id: 1,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing'
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning'
    ],
    benefits: [
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare'
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal'
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description: 'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Anomaly detection & alerting',
      'Automated report generation',
      'Real-time data visualization',
      'Pattern recognition & insights',
      'Custom dashboard creation',
      'Data quality assessment',
      'Trend analysis & recommendations'
    ],
    benefits: [
      'Increase decision speed by 60%',
      'Identify opportunities 3x faster',
      'Reduce false positives by 80%',
      'Improve forecast accuracy by 40%'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams'
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
  },

  // Advanced AI Services
  {
    id: 6,
    title: 'Quantum AI & Machine Learning',
    description: 'Quantum-enhanced machine learning solutions for complex optimization problems and advanced computational tasks.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $5,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Advanced pattern recognition',
      'Quantum simulation capabilities',
      'Research collaboration'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve previously intractable problems',
      'Advanced optimization capabilities',
      'Future-proof AI solutions'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    id: 7,
    title: 'AI Drug Discovery & Development',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: Heart,
    category: 'AI Healthcare',
    price: 'Starting at $4,500/month',
    features: [
      'Molecular structure analysis',
      'Drug-target interaction prediction',
      'Compound screening & optimization',
      'Clinical trial design optimization',
      'Side effect prediction',
      'Patent landscape analysis',
      'Regulatory compliance support',
      'Collaborative research tools'
    ],
    benefits: [
      'Accelerate drug discovery by 50%',
      'Reduce development costs by 40%',
      'Improve success rates by 30%',
      'Faster time to market'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical companies, Biotech firms, Research institutions'
  },
  {
    id: 8,
    title: 'AI Climate & Environmental Solutions',
    description: 'AI-powered climate analysis, environmental monitoring, and sustainability optimization solutions.',
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $2,200/month',
    features: [
      'Climate data analysis & prediction',
      'Environmental impact assessment',
      'Carbon footprint optimization',
      'Renewable energy optimization',
      'Weather pattern analysis',
      'Sustainability reporting',
      'Environmental risk assessment',
      'Green technology recommendations'
    ],
    benefits: [
      'Improve environmental outcomes by 40%',
      'Reduce carbon footprint by 35%',
      'Optimize resource usage',
      'Meet sustainability goals'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Manufacturing, Government'
  },
  {
    id: 9,
    title: 'AI Space Technology & Research',
    description: 'AI solutions for space exploration, satellite data analysis, and astronomical research applications.',
    icon: Rocket,
    category: 'AI Space',
    price: 'Starting at $3,500/month',
    features: [
      'Satellite data processing & analysis',
      'Space mission planning & optimization',
      'Astronomical data analysis',
      'Orbital mechanics calculations',
      'Space weather prediction',
      'Mission control AI systems',
      'Research data visualization',
      'Space communication protocols'
    ],
    benefits: [
      'Accelerate space research by 60%',
      'Improve mission success rates',
      'Optimize space operations',
      'Enable new discoveries'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies, Aerospace'
  },
  {
    id: 10,
    title: 'AI Autonomous Systems',
    description: 'AI solutions for autonomous vehicles, drones, and robotic systems with advanced perception and decision-making.',
    icon: Car,
    category: 'AI Autonomous',
    price: 'Starting at $4,200/month',
    features: [
      'Autonomous vehicle AI systems',
      'Drone fleet management AI',
      'Robotic process automation',
      'Computer vision for autonomy',
      'Path planning & navigation',
      'Collision avoidance systems',
      'Real-time decision making',
      'Safety & compliance monitoring'
    ],
    benefits: [
      'Enable fully autonomous operations',
      'Improve safety by 95%',
      'Reduce operational costs by 50%',
      'Increase efficiency by 70%'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Agriculture, Manufacturing, Transportation'
  },
  {
    id: 11,
    title: 'AI Legal & Compliance Solutions',
    description: 'AI-powered legal research, contract analysis, and compliance monitoring for legal professionals.',
    icon: BookOpen,
    category: 'AI Legal',
    price: 'Starting at $2,800/month',
    features: [
      'Legal document analysis',
      'Contract review & extraction',
      'Case law research & analysis',
      'Compliance monitoring',
      'Risk assessment & mitigation',
      'Legal precedent identification',
      'Document automation',
      'Regulatory change tracking'
    ],
    benefits: [
      'Reduce legal research time by 80%',
      'Improve accuracy by 90%',
      'Lower legal costs by 60%',
      'Ensure compliance automatically'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Compliance teams'
  },
  {
    id: 12,
    title: 'AI Financial Services & Trading',
    description: 'AI solutions for financial analysis, algorithmic trading, risk management, and fraud detection.',
    icon: DollarSign,
    category: 'AI Finance',
    price: 'Starting at $3,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment & management',
      'Fraud detection & prevention',
      'Credit scoring & underwriting',
      'Portfolio optimization',
      'Market analysis & prediction',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    benefits: [
      'Improve trading performance by 40%',
      'Reduce fraud losses by 85%',
      'Optimize portfolio returns',
      'Ensure regulatory compliance'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Banks, Investment firms, Insurance companies, Fintech'
  },
  {
    id: 13,
    title: 'AI Agriculture & Food Tech',
    description: 'AI solutions for precision agriculture, crop monitoring, and food production optimization.',
    icon: Sprout,
    category: 'AI Agriculture',
    price: 'Starting at $2,500/month',
    features: [
      'Crop monitoring & analysis',
      'Yield prediction & optimization',
      'Pest & disease detection',
      'Soil analysis & recommendations',
      'Weather prediction & planning',
      'Automated farming systems',
      'Supply chain optimization',
      'Quality control & grading'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Lower pesticide use by 50%',
      'Improve food quality'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agribusiness, Food companies, Research institutions'
  },
  {
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $2,800/month',
    features: [
      'Smart grid optimization',
      'Energy consumption analysis',
      'Renewable energy forecasting',
      'Demand response management',
      'Predictive maintenance',
      'Energy trading optimization',
      'Carbon footprint tracking',
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Improve grid efficiency by 35%',
      'Optimize renewable integration',
      'Meet sustainability goals'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Utility companies, Energy providers, Manufacturing, Government'
  },
  {
    id: 15,
    title: 'AI Education & Learning',
    description: 'AI-powered educational platforms with personalized learning, adaptive content, and intelligent tutoring.',
    icon: GraduationCap,
    category: 'AI Education',
    price: 'Starting at $1,800/month',
    features: [
      'Personalized learning paths',
      'Adaptive content delivery',
      'Intelligent tutoring systems',
      'Learning analytics & insights',
      'Automated assessment & grading',
      'Multi-language support',
      'Accessibility features',
      'Progress tracking & reporting'
    ],
    benefits: [
      'Improve learning outcomes by 50%',
      'Personalize education for each student',
      'Reduce teaching workload by 40%',
      'Enable scalable education'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Schools, Universities, Online education, Corporate training'
  },
  {
    icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysisDemand prediction and inventory optimizationRevenue and churn prediction modelsSupply chain risk assessmentMarket trend analysisReal-time dashboard and alerts'
      ]
      pricing: '$4,000 – $20,000 project'
      perUnit: 'Custom pricing based on data volume',
timeline: '6–12 weeks'
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    }
    {
      icon: FileText,
name: 'GenAI Content & SEO Automation'
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.'
      features: [
        'High-quality content generationSEO optimization and keyword researchContent clustering and internal linkingEditorial calendar automationBrand voice consistencyPerformance tracking and optimization'
      ]
      pricing: '$1,000 – $6,000/month'
      perUnit: '$0.10 – $1.00 per article',
timeline: '2–4 weeks'
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    }
    {
      icon: Eye,
name: 'Computer Vision & Image Recognition'
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.'
      features: [
        'Custom object detection and classificationFacial recognition and biometric authenticationOCR and document text extractionReal-time image processingQuality control and defect detectionVisual search and recommendation'
      ]
      pricing: '$5,000 – $25,000 setup'
      perUnit: '$0.01 – $0.10 per image',
timeline: '6–12 weeks'
      benefits: [
        '99.5% accuracy in object detectionAutomated quality controlEnhanced security with biometricsReduced manual inspection costs'
      ]
    }
    {
      icon: Database,
name: 'Natural Language Processing Engine'
      description: 'Comprehensive NLP solutions for text analysis, sentiment detection, and language understanding.'
      features: [
        'Text analysis and sentiment detectionEntity extraction and classificationLanguage translation and localizationDocument summarizationIntent recognition and classificationCustom model training and fine-tuning'
      ]
      pricing: '$3,000 – $15,000 setup'
      perUnit: '$0.001 – $0.01 per request',
timeline: '4–8 weeks'
      benefits: [
        '90% accuracy in sentiment analysisAutomated document processingMulti-language supportReal-time text understanding'
      ]
    }
    {
      icon: Shield,
name: 'AI-Powered Fraud Detection'
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms.',
features: [
        'Real-time transaction fraud scoringBehavioral anomaly detectionMachine learning model trainingRisk assessment and decision automationPattern recognition and analysisContinuous learning and adaptation'
      ]
      pricing: '$8,000 – $40,000 setup'
      perUnit: '$0.05 – $0.50 per transaction',
timeline: '8–16 weeks'
      benefits: [
        '99.9% fraud detection accuracyReal-time risk assessmentReduced false positivesCompliance with regulations'
      ]
    }
    {
      icon: Mic,
name: 'Voice AI & Speech Recognition'
      description: 'Advanced voice processing solutions including speech-to-text, voice synthesis, and conversational AI.'
      features: [
        'High-accuracy speech-to-text conversionNatural language understandingVoice biometric authenticationConversational AI and chatbotsMulti-language voice supportReal-time voice processing'
      ]
      pricing: '$6,000 – $30,000 setup'
      perUnit: '$0.02 – $0.20 per minute',
timeline: '6–10 weeks'
      benefits: [
        '95% accuracy in speech recognitionHands-free operationEnhanced accessibilityImproved user experience'
      ]
    }
    {
      icon: Zap,
name: 'Recommendation Engine'
      description: 'Personalized recommendation systems that increase engagement and conversion rates.',
features: [
        'Personalized product recommendationsContent suggestion algorithmsUser behavior analysisA/B testing and optimizationReal-time recommendation updatesMulti-channel recommendation delivery'
      ]
      pricing: '$4,000 – $20,000 setup'
      perUnit: '$0.01 – $0.10 per recommendation',
timeline: '4–8 weeks'
      benefits: [
        '35% increase in conversion ratesImproved user engagementHigher average order valueReduced bounce rates'
      ]
    }
    {
      icon: Brain,
name: 'Autonomous AI Agents'
      description: 'Self-operating AI agents that can perform complex tasks and make decisions autonomously.',
features: [
        'Multi-step task automationDecision-making capabilitiesNatural language interactionTool and API integrationLearning and adaptationError handling and recovery'
      ]
      pricing: '$10,000 – $50,000 setup'
      perUnit: '$0.50 – $5.00 per task',
timeline: '8–16 weeks'
      benefits: [
        '90% task automation success rateReduced operational costs24/7 autonomous operationScalable AI workforce'
      ]
    }
    {
      icon: Eye,
name: 'AI-Powered Healthcare Diagnostics'
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning algorithms.',
features: [
        'Medical image analysis and interpretationDisease detection and classificationTreatment recommendation systemsPatient risk assessmentDrug interaction analysisClinical decision support'
      ]
      pricing: '$15,000 – $75,000 setup'
      perUnit: '$5.00 – $50.00 per analysis',
timeline: '12–24 weeks'
      benefits: [
        '95% accuracy in medical imagingFaster diagnosis and treatmentReduced medical errorsImproved patient outcomes'
      ]
    }
    {
      icon: Shield,
name: 'AI-Powered Cybersecurity Threat Detection'
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
features: [
        'Real-time threat detection and analysisBehavioral anomaly detectionAutomated incident responseThreat intelligence integrationPredictive security analyticsZero-day attack detection'
      ]
      pricing: '$12,000 – $60,000 setup'
      perUnit: '$0.10 – $1.00 per event',
timeline: '8–16 weeks'
      benefits: [
        '99.5% threat detection accuracyReal-time security monitoringAutomated threat responseReduced security incidents'
      ]
    }
    {
      icon: Cog,
name: 'Smart Manufacturing Quality Control'
      description: 'AI-powered quality control and predictive maintenance for manufacturing operations.',
features: [
        'Real-time quality inspectionPredictive maintenance schedulingDefect detection and classificationProduction optimizationSupply chain monitoringEquipment performance analysis'
      ]
      pricing: '$20,000 – $100,000 setup'
      perUnit: '$0.05 – $0.50 per inspection',
timeline: '12–20 weeks'
      benefits: [
        '40% reduction in defects30% improvement in efficiencyPredictive maintenance savingsEnhanced product quality'
      ]
    }
    {
      icon: TrendingUp,
name: 'AI-Powered Smart City Solutions'
      description: 'Intelligent urban management systems for traffic, energy, and public services optimization.'
      features: [
        'Traffic flow optimizationEnergy consumption managementPublic safety monitoringEnvironmental monitoringResource allocation optimizationCitizen service automation'
      ]
      pricing: '$50,000 – $250,000 setup'
      perUnit: 'Custom pricing based on city size',
timeline: '16–32 weeks'
      benefits: [
        '25% reduction in traffic congestion20% energy savingsImproved public safetyEnhanced citizen services'
      ]
    }
    {
      icon: Database,
name: 'Intelligent Process Mining & Optimization'
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
features: [
        'Process discovery and mappingBottleneck identificationProcess optimization recommendationsCompliance monitoringPerformance analyticsAutomated process improvement'
      ]
      pricing: '$8,000 – $40,000 setup'
      perUnit: '$0.20 – $2.00 per process',
timeline: '6–12 weeks'
      benefits: [
        '35% process efficiency improvementAutomated optimizationReduced operational costsBetter compliance tracking'
      ]
    }
    {
      icon: FileText,
name: 'AI Legal Document Analysis'
      description: 'Intelligent legal document review, contract analysis, and compliance monitoring.'
      features: [
        'Contract analysis and risk assessmentLegal document summarizationCompliance monitoring and alertsLegal research automationDocument classification and organizationLitigation support and discovery'
      ]
      pricing: '$10,000 – $50,000 setup'
      perUnit: '$0.50 – $5.00 per document',
timeline: '8–16 weeks'
      benefits: [
        '90% reduction in document review timeImproved accuracy in legal analysisAutomated compliance monitoringReduced legal costs'
      ]
    }
    {
      icon: Search,
name: 'AI-Powered Search & Discovery'
      description: 'Intelligent search engines with semantic understanding and personalized results.',
features: [
        'Semantic search and understandingPersonalized search resultsNatural language queriesMulti-modal search capabilitiesReal-time search optimizationContext-aware recommendations'
      ]
      pricing: '$5,000 – $25,000 setup'
      perUnit: '$0.01 – $0.10 per search',
timeline: '4–8 weeks'
      benefits: [
        '60% improvement in search relevanceEnhanced user experienceIncreased engagementBetter content discovery'
      ]
    }
    {
      icon: Brain,
name: 'AI-Powered Financial Trading'
      description: 'Automated trading systems with machine learning algorithms for market analysis and execution.',
features: [
        'Market analysis and predictionAutomated trading executionRisk management and portfolio optimizationReal-time market monitoringAlgorithmic trading strategiesPerformance analytics and reporting'
      ]
      pricing: '$25,000 – $125,000 setup'
      perUnit: 'Performance-based fees',
timeline: '12–24 weeks'
      benefits: [
        'Improved trading performanceAutomated risk management24/7 market monitoringData-driven trading decisions'
      ]
    }
    {
      icon: Mic,
name: 'AI-Powered Voice Analytics'
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.'
      features: [
        'Voice emotion and sentiment analysisCall quality assessmentCustomer satisfaction predictionSales conversation optimizationVoice biometric authenticationReal-time coaching and feedback'
      ]
      pricing: '$6,000 – $30,000 setup'
      perUnit: '$0.05 – $0.50 per minute',
timeline: '6–12 weeks'
      benefits: [
        'Improved customer satisfactionEnhanced sales performanceBetter call qualityAutomated coaching insights'
      ]
    }
    {
      icon: Eye,
name: 'Advanced Computer Vision Analytics'
      description: 'Deep learning computer vision for complex visual analysis and real-time processing.',
features: [
        'Object detection and trackingFacial recognition and analysisScene understanding and classificationReal-time video processingCustom model trainingEdge deployment optimization'
      ]
      pricing: '$8,000 – $40,000 setup'
      perUnit: '$0.05 – $0.50 per image',
timeline: '6–12 weeks'
      benefits: [
        '99.8% accuracy in visual analysisReal-time processing capabilitiesAutomated quality controlEnhanced security monitoring'
      ]
    }
    {
      icon: Database,
name: 'Intelligent Data Processing Pipeline'
      description: 'AI-powered data ingestion, cleaning, and transformation with automated quality assurance.'
      features: [
        'Automated data ingestion and validationIntelligent data cleaning and deduplicationSchema detection and mappingData quality scoring and monitoringAutomated transformation rulesReal-time data processing'
      ]
      pricing: '$5,000 – $25,000 setup'
      perUnit: '$0.001 – $0.01 per record',
timeline: '4–8 weeks'
      benefits: [
        '95% reduction in data processing timeAutomated data quality assuranceImproved data accuracyReduced manual data handling'
      ]
    }
    {
      icon: TrendingUp,
name: 'Advanced Predictive Analytics'
      description: 'Sophisticated machine learning models for complex business forecasting and optimization.',
features: [
        'Multi-variate time series forecastingCausal inference and impact analysisScenario modeling and simulationAutomated feature engineeringModel ensemble and optimizationReal-time prediction updates'
      ]
      pricing: '$6,000 – $30,000 setup'
      perUnit: 'Custom pricing based on complexity',
timeline: '6–12 weeks'
      benefits: [
        '98% accuracy in predictionsAutomated forecasting processesImproved business planningRisk mitigation strategies'
      ]
    }
    {
      icon: Shield,
name: 'AI-Powered Cybersecurity Intelligence'
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
features: [
        'Behavioral anomaly detectionThreat intelligence and correlationAutomated incident responseZero-day attack detectionSecurity orchestration and automationContinuous threat monitoring'
      ]
      pricing: '$10,000 – $60,000 setup'
      perUnit: '$0.10 – $1.00 per event',
timeline: '8–16 weeks'
      benefits: [
        '99.5% threat detection accuracyAutomated security responseReduced false positivesEnhanced security posture'
      ]
    }
    {
      icon: Mic,
name: 'Conversational AI Platform'
      description: 'Advanced conversational AI with context awareness and multi-modal interaction.',
features: [
        'Context-aware conversationsMulti-modal interaction (voice, text, image)Emotion recognition and responseKnowledge graph integrationMulti-language supportConversation analytics and optimization'
      ]
      pricing: '$8,000 – $40,000 setup'
      perUnit: '$0.02 – $0.20 per interaction',
timeline: '6–12 weeks'
      benefits: [
        '95% conversation success rateNatural human-like interactionsImproved customer satisfactionReduced support costs'
      ]
    }
    {
      icon: FileText,
name: 'Intelligent Document Intelligence'
      description: 'Advanced document processing with understanding, extraction, and automated workflows.'
      features: [
        'Document understanding and classificationIntelligent data extractionDocument comparison and analysisAutomated workflow routingCompliance checking and validationMulti-format document support'
      ]
      pricing: '$4,000 – $20,000 setup'
      perUnit: '$0.01 – $0.10 per document',
timeline: '4–8 weeks'
      benefits: [
        '98% accuracy in data extractionAutomated document processingImproved compliance trackingReduced manual document handling'
      ]
    }
    {
      icon: Search,
name: 'Intelligent Search & Discovery Engine'
      description: 'AI-powered search with semantic understanding, personalization, and intelligent suggestions.'
      features: [
        'Semantic search and understandingPersonalized search resultsIntelligent query suggestionsMulti-modal search capabilitiesSearch analytics and optimizationReal-time search indexing'
      ]
      pricing: '$3,000 – $15,000 setup'
      perUnit: '$0.001 – $0.01 per search',
timeline: '4–8 weeks'
      benefits: [
        '90% improvement in search relevancePersonalized user experienceIncreased content discoveryBetter user engagement'
      ]
    }
    {
      icon: Cog,
name: 'AI-Powered Process Optimization'
      description: 'Intelligent process mining and optimization using AI to identify bottlenecks and improvements.',
features: [
        'Process discovery and mappingBottleneck identification and analysisAutomated process optimizationPerformance prediction and simulationResource allocation optimizationContinuous process improvement'
      ]
      pricing: '$5,000 – $25,000 setup'
      perUnit: '$0.05 – $0.50 per process',
timeline: '6–10 weeks'
      benefits: [
        '40% improvement in process efficiencyAutomated optimization recommendationsReduced operational costsBetter resource utilization'
      ]
    }
    {
      icon: Brain,
name: 'AI-Powered Healthcare Diagnostics'
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning and computer vision.',
features: [
        'Medical image analysis and interpretationDisease detection and classificationTreatment recommendation systemsPatient risk assessmentDrug interaction analysisClinical decision support'
      ]
      pricing: '$15,000 – $100,000 setup'
      perUnit: '$0.50 – $5.00 per analysis',
timeline: '12–24 weeks'
      benefits: [
        '95% accuracy in diagnostic assistanceReduced diagnostic errorsFaster treatment decisionsImproved patient outcomes'
      ]
    }
    {
      icon: Shield,
name: 'AI-Powered Cybersecurity Threat Detection'
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
features: [
        'Real-time threat detection and analysisBehavioral anomaly identificationAutomated incident responseThreat intelligence correlationZero-day attack detectionSecurity orchestration and automation'
      ]
      pricing: '$10,000 – $60,000 setup'
      perUnit: '$0.10 – $1.00 per event',
timeline: '8–16 weeks'
      benefits: [
        '99.5% threat detection accuracyAutomated security responseReduced false positivesEnhanced security posture'
      ]
    }
    {
      icon: TrendingUp,
name: 'Smart Manufacturing Quality Control'
      description: 'AI-powered quality control and defect detection for manufacturing processes.',
features: [
        'Real-time defect detectionQuality prediction and optimizationProcess monitoring and controlPredictive maintenance integrationSupply chain quality trackingAutomated quality reporting'
      ]
      pricing: '$8,000 – $50,000 setup'
      perUnit: '$0.01 – $0.10 per inspection',
timeline: '6–12 weeks'
      benefits: [
        '99.8% defect detection accuracyReduced quality control costsImproved product qualityAutomated quality processes'
      ]
    }
    {
      icon: Eye,
name: 'AI-Powered Smart City Solutions'
      description: 'Intelligent urban management with traffic optimization, energy efficiency, and public safety.'
      features: [
        'Traffic flow optimizationEnergy consumption monitoringPublic safety monitoringEnvironmental quality trackingInfrastructure maintenance predictionCitizen service optimization'
      ]
      pricing: '$20,000 – $200,000 setup'
      perUnit: 'Custom pricing based on city size',
timeline: '12–24 weeks'
      benefits: [
        '30% reduction in traffic congestion25% improvement in energy efficiencyEnhanced public safetyBetter citizen services'
      ]
    }
    {
      icon: Database,
name: 'Intelligent Process Mining & Optimization'
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
features: [
        'Process discovery and mappingBottleneck identification and analysisProcess optimization recommendationsCompliance monitoring and reportingResource utilization analysisAutomated process improvement'
      ]
      pricing: '$5,000 – $30,000 setup'
      perUnit: '$0.001 – $0.01 per process instance',
timeline: '6–12 weeks'
      benefits: [
        '40% improvement in process efficiencyAutomated process optimizationReduced operational costsBetter compliance management'
      ]
    }
    {
      icon: Mic,
name: 'AI-Powered Voice Analytics Platform'
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.'
      features: [
        'Voice emotion and sentiment analysisCall quality and performance metricsCustomer satisfaction predictionSales opportunity identificationAgent performance optimizationReal-time coaching recommendations'
      ]
      pricing: '$3,000 – $20,000 setup'
      perUnit: '$0.05 – $0.50 per minute',
timeline: '4–8 weeks'
      benefits: [
        '35% improvement in customer satisfactionEnhanced agent performanceAutomated quality monitoringBetter sales conversion rates'
      ]
    }
    {
      icon: Brain,
name: 'AI-Powered Drug Discovery Platform'
      description: 'Machine learning-driven drug discovery and development with molecular analysis.',
features: [
        'Molecular structure analysisDrug-target interaction predictionSide effect prediction and analysisClinical trial optimizationDrug repurposing identificationBiomarker discovery and validation'
      ]
      pricing: '$50,000 – $500,000 setup'
      perUnit: 'Custom pricing based on project scope',
timeline: '24–52 weeks'
      benefits: [
        '50% faster drug discovery processReduced development costsImproved success ratesBetter patient outcomes'
      ]
    }
    {
      icon: Eye,
name: 'AI-Powered Agricultural Intelligence'
      description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization.'
      features: [
        'Crop health monitoring and analysisYield prediction and optimizationPest and disease detectionIrrigation and fertilizer optimizationWeather impact analysisFarm management automation'
      ]
      pricing: '$5,000 – $40,000 setup'
      perUnit: '$0.01 – $0.10 per acre',
timeline: '6–12 weeks'
      benefits: [
        '25% increase in crop yields30% reduction in resource usageImproved crop qualityAutomated farm management'
      ]
    }
    {
      icon: Shield,
name: 'AI-Powered Financial Risk Assessment'
      description: 'Advanced financial risk modeling and assessment using machine learning and big data.',
features: [
        'Credit risk assessment and scoringMarket risk analysis and predictionOperational risk identificationFraud detection and preventionRegulatory compliance monitoringStress testing and scenario analysis'
      ]
      pricing: '$15,000 – $100,000 setup'
      perUnit: '$0.01 – $0.10 per assessment',
timeline: '8–16 weeks'
      benefits: [
        '99.9% accuracy in risk assessmentReduced financial lossesAutomated risk monitoringBetter regulatory compliance'
      ]
    }
    {
      icon: TrendingUp,
name: 'AI-Powered Energy Trading Platform'
      description: 'Intelligent energy trading with price prediction, demand forecasting, and optimization.'
      features: [
        'Energy price prediction and analysisDemand forecasting and optimizationTrading strategy optimizationRisk management and hedgingMarket analysis and insightsAutomated trading execution'
      ]
      pricing: '$10,000 – $80,000 setup'
      perUnit: '0.1% – 1% of trading volume',
timeline: '8–16 weeks'
      benefits: [
        '20% improvement in trading performanceReduced energy costsAutomated trading strategiesBetter risk management'
      ]
    }
    {
      icon: Brain,
name: 'AI-Powered Legal Document Analysis'
      description: 'Intelligent legal document review and analysis with contract insights and risk assessment.',
features: [
        'Contract analysis and risk assessmentLegal document classificationCompliance checking and monitoringCase law research and analysisDocument summarization and insightsLegal precedent identification'
      ]
      pricing: '$5,000 – $40,000 setup'
      perUnit: '$0.10 – $1.00 per document',
timeline: '6–12 weeks'
      benefits: [
        '80% reduction in document review timeImproved accuracy in legal analysisAutomated compliance checkingBetter risk identification'
      ]
    }
    {
      icon: Brain,
name: 'Generative AI Content Studio'
      description: 'Advanced AI-powered content creation platform that generates high-quality text, images, videos, and audio content for marketing, education, and entertainment.'
      features: [
        'Multi-modal content generation (text, image, video, audio)Brand voice and style consistency trainingContent optimization for SEO and engagementAutomated content scheduling and distributionA/B testing and performance analyticsCopyright and plagiarism detection'
      ]
      pricing: '$2,000 – $15,000 setup'
      perUnit: '$0.05 – $0.50 per content piece',
timeline: '4–8 weeks'
      benefits: [
        '95% faster content productionConsistent brand messaging across all channelsReduced content creation costs by 70%Improved content engagement and conversion rates'
      ]
    }
    {
      icon: Eye,
name: 'AI-Powered Quality Assurance'
      description: 'Intelligent quality control system that uses computer vision and machine learning to detect defects, ensure compliance, and optimize manufacturing processes.'
      features: [
        'Real-time defect detection and classificationPredictive quality analytics and forecastingAutomated compliance monitoring and reportingRoot cause analysis and recommendationsIntegration with manufacturing systemsCustom quality metrics and thresholds'
      ]
      pricing: '$10,000 – $75,000 setup'
      perUnit: '$0.01 – $0.10 per inspection',
timeline: '8–16 weeks'
      benefits: [
        '99.5% accuracy in defect detection50% reduction in quality control costsReal-time quality monitoring and alertsImproved product consistency and customer satisfaction'
      ]
    }
    {
      icon: TrendingUp,
name: 'AI Financial Risk Management'
      description: 'Advanced AI system for financial risk assessment, fraud detection, and regulatory compliance with real-time monitoring and predictive analytics.'
      features: [
        'Real-time fraud detection and preventionCredit risk assessment and scoringMarket risk analysis and portfolio optimizationRegulatory compliance monitoringAnomaly detection and alert systemsAutomated reporting and documentation'
      ]
      pricing: '$15,000 – $100,000 setup'
      perUnit: '$0.02 – $0.20 per transaction',
timeline: '10–20 weeks'
      benefits: [
        '90% reduction in false positivesReal-time risk monitoring and mitigationAutomated compliance and regulatory reportingImproved financial decision making'
      ]
    }
    {
      icon: Mic,
name: 'AI Voice Analytics & Sentiment Analysis'
      description: 'Advanced voice processing system that analyzes speech patterns, emotions, and sentiment for customer service, market research, and healthcare applications.'
      features: [
        'Real-time voice emotion and sentiment analysisSpeaker identification and verificationConversation analytics and insightsMulti-language support and translationVoice biometric authenticationCall center optimization and training'
      ]
      pricing: '$5,000 – $30,000 setup'
      perUnit: '$0.01 – $0.05 per minute',
timeline: '6–12 weeks'
      benefits: [
        '85% accuracy in emotion detectionImproved customer service qualityReal-time conversation insightsEnhanced security with voice biometrics'
      ]
    }
    {
      icon: Database,
name: 'AI Data Intelligence Platform'
      description: 'Comprehensive AI platform that automatically discovers, cleans, and enriches data while providing intelligent insights and recommendations.'
      features: [
        'Automated data discovery and catalogingData quality assessment and cleaningIntelligent data enrichment and augmentationAutomated data lineage and governancePredictive data analytics and insightsNatural language data querying'
      ]
      pricing: '$8,000 – $50,000 setup'
      perUnit: '$0.10 – $1.00 per GB processed',
timeline: '8–16 weeks'
      benefits: [
        '80% reduction in data preparation timeImproved data quality and accuracyAutomated data governance and complianceFaster insights and decision making'
      ]
    }
    {
      icon: Shield,
name: 'AI Cybersecurity Threat Intelligence'
      description: 'Advanced AI-powered cybersecurity system that provides real-time threat detection, incident response, and security intelligence.'
      features: [
        'Real-time threat detection and analysisAutomated incident response and remediationBehavioral analytics and anomaly detectionThreat intelligence and attributionSecurity orchestration and automationCompliance monitoring and reporting'
      ]
      pricing: '$12,000 – $80,000 setup'
      perUnit: '$0.05 – $0.25 per event',
timeline: '10–18 weeks'
      benefits: [
        '95% reduction in false positive alertsReal-time threat detection and responseAutomated security incident handlingImproved security posture and compliance'
      ]
    }
    {
      icon: Users,
name: 'AI Talent Acquisition & HR Analytics'
      description: 'Intelligent HR platform that automates recruitment, employee analytics, and workforce optimization using advanced AI algorithms.'
      features: [
        'Automated resume screening and candidate matchingPredictive analytics for employee retentionSkills gap analysis and training recommendationsPerformance prediction and optimizationBias detection and fairness monitoringWorkforce planning and optimization'
      ]
      pricing: '$6,000 – $40,000 setup'
      perUnit: '$0.50 – $5.00 per candidate',
timeline: '6–14 weeks'
      benefits: [
        '70% reduction in time-to-hireImproved candidate quality and fitReduced bias in hiring decisionsBetter employee retention and satisfaction'
      ]
    }
    {
      icon: Code,
name: 'AI Code Generation & Optimization'
      description: 'Advanced AI system that generates, optimizes, and maintains code while ensuring quality, security, and performance standards.'
      features: [
        'Automated code generation from specificationsCode optimization and performance tuningSecurity vulnerability detection and fixingAutomated testing and quality assuranceCode documentation and maintenanceLegacy code modernization and refactoring'
      ]
      pricing: '$10,000 – $60,000 setup'
      perUnit: '$0.10 – $1.00 per line of code',
timeline: '8–16 weeks'
      benefits: [
        '60% faster development cyclesImproved code quality and securityAutomated testing and bug detectionReduced technical debt and maintenance costs'
      ]
    }
    {
      icon: Search,
name: 'AI Search & Recommendation Engine'
      description: 'Intelligent search and recommendation system that provides personalized results, content discovery, and user experience optimization.'
      features: [
        'Semantic search and natural language processingPersonalized recommendation algorithmsReal-time content indexing and rankingUser behavior analysis and optimizationMulti-modal search (text, image, voice)A/B testing and performance optimization'
      ]
      pricing: '$5,000 – $35,000 setup'
      perUnit: '$0.01 – $0.10 per search',
timeline: '6–12 weeks'
      benefits: [
        '40% improvement in search relevanceIncreased user engagement and conversionPersonalized user experiencesBetter content discovery and recommendations'
      ]
    }
  ];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Process Automation", count: aiServices.filter(s => s.category === "Process Automation").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = (service.title && service.description) ? 
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase())) : false;
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 100+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, analytics, and automation. 100+ AI solutions with competitive pricing and proven results." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, AI consulting, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. 100+ cutting-edge solutions with competitive pricing." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/case-studies"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                100+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, 
                quantum AI, autonomous systems, and advanced analytics with real-world applications and proven results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
=======
        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200">24/7 AI Support Available</span>
                <div className="flex space-x-2">
                  <a href="#" className="hover:text-blue-300"><Globe className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-blue-300"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed for various industries and use cases
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="text-blue-400 mb-4">
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive real business value
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <benefit.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your AI project requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Setup: {service.setupTime}</span>
                      <span>Target: {service.targetUsers.split(',')[0]}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement the perfect solution for your business needs.
                Get a free consultation and custom quote today.
              </p>
              <div className="mb-8">
                <p className="text-lg text-blue-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free AI Consultation
                </Link>
                <Link href="/micro-saas" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
  );
}