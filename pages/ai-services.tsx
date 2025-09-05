import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
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
  Gamepad2,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
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
    marketPrice: '$3,500-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'Quantum AI Solutions',
    description: 'Next-generation quantum machine learning algorithms for solving complex optimization problems and advanced pattern recognition.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $8,500/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum optimization solutions',
      'Quantum neural networks',
      'Quantum data processing',
      'Hybrid classical-quantum models',
      'Quantum simulation services',
      'Advanced cryptography',
      'Quantum error correction'
    ],
    benefits: [
      'Solve problems 1000x faster than classical computers',
      'Handle exponentially large datasets',
      'Breakthrough optimization results',
      'Future-proof your AI infrastructure'
    ],
    marketPrice: '$15,000-50,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Research, Finance, Pharmaceuticals, Defense'
  },
  {
    id: 5,
    title: 'Autonomous Systems AI',
    description: 'Self-driving vehicles, drones, and robotic systems powered by advanced AI for autonomous operations.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $12,000/month',
    features: [
      'Autonomous vehicle AI',
      'Drone navigation systems',
      'Robotic process automation',
      'Path planning algorithms',
      'Real-time decision making',
      'Sensor fusion technology',
      'Safety monitoring systems',
      'Fleet management AI'
    ],
    benefits: [
      'Reduce operational costs by 60%',
      'Improve safety by 95%',
      'Enable 24/7 autonomous operations',
      'Scale operations without human limitations'
    ],
    marketPrice: '$20,000-100,000/month',
    setupTime: '12-20 weeks',
    targetUsers: 'Logistics, Transportation, Manufacturing, Agriculture'
  },
  {
    id: 6,
    title: 'AI-Powered Healthcare',
    description: 'Medical AI solutions for diagnosis, drug discovery, personalized treatment, and patient monitoring.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,500/month',
    features: [
      'Medical image analysis',
      'Drug discovery algorithms',
      'Personalized treatment plans',
      'Predictive health analytics',
      'Clinical decision support',
      'Patient monitoring AI',
      'Genomic analysis',
      'Telemedicine AI'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce treatment costs by 30%',
      'Accelerate drug discovery by 5x',
      'Save lives through early detection'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Hospitals, Clinics, Pharmaceutical, Research'
  },
  {
    id: 7,
    title: 'Financial AI & Trading',
    description: 'Advanced AI for algorithmic trading, risk management, fraud detection, and financial forecasting.',
    icon: TrendingUp,
    category: 'Financial AI',
    price: 'Starting at $4,200/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment models',
      'Fraud detection algorithms',
      'Credit scoring AI',
      'Market prediction models',
      'Portfolio optimization',
      'Regulatory compliance AI',
      'Real-time market analysis'
    ],
    benefits: [
      'Increase trading profits by 25-40%',
      'Reduce fraud losses by 90%',
      'Improve risk management accuracy',
      'Automate complex financial decisions'
    ],
    marketPrice: '$6,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Investment Firms, Fintech, Insurance'
  },
  {
    id: 8,
    title: 'AI Content Generation',
    description: 'Automated content creation, copywriting, video production, and creative AI solutions for marketing and media.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated copywriting',
      'Video content generation',
      'Image and art creation',
      'Social media content',
      'Blog and article writing',
      'Email marketing automation',
      'SEO-optimized content',
      'Multilingual content creation'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Scale content production 10x',
      'Maintain consistent brand voice',
      'Generate personalized content at scale'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, Media, E-commerce, Agencies'
  },
  {
    id: 9,
    title: 'AI-Powered Cybersecurity',
    description: 'Intelligent threat detection, automated security monitoring, and AI-driven incident response systems.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,800/month',
    features: [
      'Threat detection algorithms',
      'Automated incident response',
      'Behavioral analysis AI',
      'Malware detection systems',
      'Network security monitoring',
      'Vulnerability assessment AI',
      'Security orchestration',
      'Predictive security analytics'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automate 80% of security tasks',
      'Prevent breaches before they happen'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 10,
    title: 'AI Voice & Speech',
    description: 'Advanced voice recognition, speech synthesis, voice cloning, and conversational AI for voice interfaces.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,500/month',
    features: [
      'Voice recognition systems',
      'Text-to-speech synthesis',
      'Voice cloning technology',
      'Conversational AI',
      'Voice biometrics',
      'Real-time translation',
      'Voice command processing',
      'Audio content analysis'
    ],
    benefits: [
      'Improve accessibility for all users',
      'Enable hands-free operations',
      'Create personalized voice experiences',
      'Break language barriers'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Customer Service, Education, Healthcare, Entertainment'
  }
];
      timeline: '4–8 weeks',
      benefits: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 customer availability',
        'Improved customer satisfaction scores'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: FileText,
      name: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.',
      features: [
        'High-quality content generation',
        'SEO optimization and keyword research',
        'Content clustering and internal linking',
        'Editorial calendar automation',
        'Brand voice consistency',
        'Performance tracking and optimization'
      ],
      pricing: '$1,000 – $6,000/month',
      perUnit: '$0.10 – $1.00 per article',
      timeline: '2–4 weeks',
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.',
      features: [
        'Custom object detection and classification',
        'Facial recognition and biometric authentication',
        'OCR and document text extraction',
        'Real-time image processing',
        'Quality control and defect detection',
        'Visual search and recommendation'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.5% accuracy in object detection',
        'Automated quality control',
        'Enhanced security with biometrics',
        'Reduced manual inspection costs'
      ]
    },
    {
      icon: Database,
      name: 'Natural Language Processing Engine',
      description: 'Comprehensive NLP solutions for text analysis, sentiment detection, and language understanding.',
      features: [
        'Text analysis and sentiment detection',
        'Entity extraction and classification',
        'Language translation and localization',
        'Document summarization',
        'Intent recognition and classification',
        'Custom model training and fine-tuning'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per request',
      timeline: '4–8 weeks',
      benefits: [
        '90% accuracy in sentiment analysis',
        'Automated document processing',
        'Multi-language support',
        'Real-time text understanding'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms.',
      features: [
        'Real-time transaction fraud scoring',
        'Behavioral anomaly detection',
        'Machine learning model training',
        'Risk assessment and decision automation',
        'Pattern recognition and analysis',
        'Continuous learning and adaptation'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Reduced false positives',
        'Compliance with regulations'
      ]
    },
    {
      icon: Mic,
      name: 'Voice AI & Speech Recognition',
      description: 'Advanced voice processing solutions including speech-to-text, voice synthesis, and conversational AI.',
      features: [
        'High-accuracy speech-to-text conversion',
        'Natural language understanding',
        'Voice biometric authentication',
        'Conversational AI and chatbots',
        'Multi-language voice support',
        'Real-time voice processing'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.02 – $0.20 per minute',
      timeline: '6–10 weeks',
      benefits: [
        '95% accuracy in speech recognition',
        'Hands-free operation',
        'Enhanced accessibility',
        'Improved user experience'
      ]
    },
    {
      icon: Zap,
      name: 'Recommendation Engine',
      description: 'Personalized recommendation systems that increase engagement and conversion rates.',
      features: [
        'Personalized product recommendations',
        'Content suggestion algorithms',
        'User behavior analysis',
        'A/B testing and optimization',
        'Real-time recommendation updates',
        'Multi-channel recommendation delivery'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per recommendation',
      timeline: '4–8 weeks',
      benefits: [
        '35% increase in conversion rates',
        'Improved user engagement',
        'Higher average order value',
        'Reduced bounce rates'
      ]
    },
    {
      icon: Brain,
      name: 'Autonomous AI Agents',
      description: 'Self-operating AI agents that can perform complex tasks and make decisions autonomously.',
      features: [
        'Multi-step task automation',
        'Decision-making capabilities',
        'Natural language interaction',
        'Tool and API integration',
        'Learning and adaptation',
        'Error handling and recovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per task',
      timeline: '8–16 weeks',
      benefits: [
        '90% task automation success rate',
        'Reduced operational costs',
        '24/7 autonomous operation',
        'Scalable AI workforce'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning algorithms.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $75,000 setup',
      perUnit: '$5.00 – $50.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in medical imaging',
        'Faster diagnosis and treatment',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        'Predictive security analytics',
        'Zero-day attack detection'
      ],
      pricing: '$12,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Real-time security monitoring',
        'Automated threat response',
        'Reduced security incidents'
      ]
    },
    {
      icon: Cog,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and predictive maintenance for manufacturing operations.',
      features: [
        'Real-time quality inspection',
        'Predictive maintenance scheduling',
        'Defect detection and classification',
        'Production optimization',
        'Supply chain monitoring',
        'Equipment performance analysis'
      ],
      pricing: '$20,000 – $100,000 setup',
      perUnit: '$0.05 – $0.50 per inspection',
      timeline: '12–20 weeks',
      benefits: [
        '40% reduction in defects',
        '30% improvement in efficiency',
        'Predictive maintenance savings',
        'Enhanced product quality'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management systems for traffic, energy, and public services optimization.',
      features: [
        'Traffic flow optimization',
        'Energy consumption management',
        'Public safety monitoring',
        'Environmental monitoring',
        'Resource allocation optimization',
        'Citizen service automation'
      ],
      pricing: '$50,000 – $250,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '16–32 weeks',
      benefits: [
        '25% reduction in traffic congestion',
        '20% energy savings',
        'Improved public safety',
        'Enhanced citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification',
        'Process optimization recommendations',
        'Compliance monitoring',
        'Performance analytics',
        'Automated process improvement'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.20 – $2.00 per process',
      timeline: '6–12 weeks',
      benefits: [
        '35% process efficiency improvement',
        'Automated optimization',
        'Reduced operational costs',
        'Better compliance tracking'
      ]
    },
    {
      icon: FileText,
      name: 'AI Legal Document Analysis',
      description: 'Intelligent legal document review, contract analysis, and compliance monitoring.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document summarization',
        'Compliance monitoring and alerts',
        'Legal research automation',
        'Document classification and organization',
        'Litigation support and discovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per document',
      timeline: '8–16 weeks',
      benefits: [
        '90% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance monitoring',
        'Reduced legal costs'
      ]
    },
    {
      icon: Search,
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search engines with semantic understanding and personalized results.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Natural language queries',
        'Multi-modal search capabilities',
        'Real-time search optimization',
        'Context-aware recommendations'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per search',
      timeline: '4–8 weeks',
      benefits: [
        '60% improvement in search relevance',
        'Enhanced user experience',
        'Increased engagement',
        'Better content discovery'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Financial Trading',
      description: 'Automated trading systems with machine learning algorithms for market analysis and execution.',
      features: [
        'Market analysis and prediction',
        'Automated trading execution',
        'Risk management and portfolio optimization',
        'Real-time market monitoring',
        'Algorithmic trading strategies',
        'Performance analytics and reporting'
      ],
      pricing: '$25,000 – $125,000 setup',
      perUnit: 'Performance-based fees',
      timeline: '12–24 weeks',
      benefits: [
        'Improved trading performance',
        'Automated risk management',
        '24/7 market monitoring',
        'Data-driven trading decisions'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality assessment',
        'Customer satisfaction prediction',
        'Sales conversation optimization',
        'Voice biometric authentication',
        'Real-time coaching and feedback'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '6–12 weeks',
      benefits: [
        'Improved customer satisfaction',
        'Enhanced sales performance',
        'Better call quality',
        'Automated coaching insights'
      ]
    },
    {
      icon: Eye,
      name: 'Advanced Computer Vision Analytics',
      description: 'Deep learning computer vision for complex visual analysis and real-time processing.',
      features: [
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Scene understanding and classification',
        'Real-time video processing',
        'Custom model training',
        'Edge deployment optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% accuracy in visual analysis',
        'Real-time processing capabilities',
        'Automated quality control',
        'Enhanced security monitoring'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Data Processing Pipeline',
      description: 'AI-powered data ingestion, cleaning, and transformation with automated quality assurance.',
      features: [
        'Automated data ingestion and validation',
        'Intelligent data cleaning and deduplication',
        'Schema detection and mapping',
        'Data quality scoring and monitoring',
        'Automated transformation rules',
        'Real-time data processing'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.001 – $0.01 per record',
      timeline: '4–8 weeks',
      benefits: [
        '95% reduction in data processing time',
        'Automated data quality assurance',
        'Improved data accuracy',
        'Reduced manual data handling'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Advanced Predictive Analytics',
      description: 'Sophisticated machine learning models for complex business forecasting and optimization.',
      features: [
        'Multi-variate time series forecasting',
        'Causal inference and impact analysis',
        'Scenario modeling and simulation',
        'Automated feature engineering',
        'Model ensemble and optimization',
        'Real-time prediction updates'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: 'Custom pricing based on complexity',
      timeline: '6–12 weeks',
      benefits: [
        '98% accuracy in predictions',
        'Automated forecasting processes',
        'Improved business planning',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Intelligence',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence and correlation',
        'Automated incident response',
        'Zero-day attack detection',
        'Security orchestration and automation',
        'Continuous threat monitoring'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: Mic,
      name: 'Conversational AI Platform',
      description: 'Advanced conversational AI with context awareness and multi-modal interaction.',
      features: [
        'Context-aware conversations',
        'Multi-modal interaction (voice, text, image)',
        'Emotion recognition and response',
        'Knowledge graph integration',
        'Multi-language support',
        'Conversation analytics and optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.02 – $0.20 per interaction',
      timeline: '6–12 weeks',
      benefits: [
        '95% conversation success rate',
        'Natural human-like interactions',
        'Improved customer satisfaction',
        'Reduced support costs'
      ]
    },
    {
      icon: FileText,
      name: 'Intelligent Document Intelligence',
      description: 'Advanced document processing with understanding, extraction, and automated workflows.',
      features: [
        'Document understanding and classification',
        'Intelligent data extraction',
        'Document comparison and analysis',
        'Automated workflow routing',
        'Compliance checking and validation',
        'Multi-format document support'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per document',
      timeline: '4–8 weeks',
      benefits: [
        '98% accuracy in data extraction',
        'Automated document processing',
        'Improved compliance tracking',
        'Reduced manual document handling'
      ]
    },
    {
      icon: Search,
      name: 'Intelligent Search & Discovery Engine',
      description: 'AI-powered search with semantic understanding, personalization, and intelligent suggestions.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Intelligent query suggestions',
        'Multi-modal search capabilities',
        'Search analytics and optimization',
        'Real-time search indexing'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per search',
      timeline: '4–8 weeks',
      benefits: [
        '90% improvement in search relevance',
        'Personalized user experience',
        'Increased content discovery',
        'Better user engagement'
      ]
    },
    {
      icon: Cog,
      name: 'AI-Powered Process Optimization',
      description: 'Intelligent process mining and optimization using AI to identify bottlenecks and improvements.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Automated process optimization',
        'Performance prediction and simulation',
        'Resource allocation optimization',
        'Continuous process improvement'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.05 – $0.50 per process',
      timeline: '6–10 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated optimization recommendations',
        'Reduced operational costs',
        'Better resource utilization'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning and computer vision.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.50 – $5.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in diagnostic assistance',
        'Reduced diagnostic errors',
        'Faster treatment decisions',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly identification',
        'Automated incident response',
        'Threat intelligence correlation',
        'Zero-day attack detection',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and defect detection for manufacturing processes.',
      features: [
        'Real-time defect detection',
        'Quality prediction and optimization',
        'Process monitoring and control',
        'Predictive maintenance integration',
        'Supply chain quality tracking',
        'Automated quality reporting'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '$0.01 – $0.10 per inspection',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% defect detection accuracy',
        'Reduced quality control costs',
        'Improved product quality',
        'Automated quality processes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management with traffic optimization, energy efficiency, and public safety.',
      features: [
        'Traffic flow optimization',
        'Energy consumption monitoring',
        'Public safety monitoring',
        'Environmental quality tracking',
        'Infrastructure maintenance prediction',
        'Citizen service optimization'
      ],
      pricing: '$20,000 – $200,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '12–24 weeks',
      benefits: [
        '30% reduction in traffic congestion',
        '25% improvement in energy efficiency',
        'Enhanced public safety',
        'Better citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Process optimization recommendations',
        'Compliance monitoring and reporting',
        'Resource utilization analysis',
        'Automated process improvement'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.001 – $0.01 per process instance',
      timeline: '6–12 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated process optimization',
        'Reduced operational costs',
        'Better compliance management'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics Platform',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality and performance metrics',
        'Customer satisfaction prediction',
        'Sales opportunity identification',
        'Agent performance optimization',
        'Real-time coaching recommendations'
      ],
      pricing: '$3,000 – $20,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '4–8 weeks',
      benefits: [
        '35% improvement in customer satisfaction',
        'Enhanced agent performance',
        'Automated quality monitoring',
        'Better sales conversion rates'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning-driven drug discovery and development with molecular analysis.',
      features: [
        'Molecular structure analysis',
        'Drug-target interaction prediction',
        'Side effect prediction and analysis',
        'Clinical trial optimization',
        'Drug repurposing identification',
        'Biomarker discovery and validation'
      ],
      pricing: '$50,000 – $500,000 setup',
      perUnit: 'Custom pricing based on project scope',
      timeline: '24–52 weeks',
      benefits: [
        '50% faster drug discovery process',
        'Reduced development costs',
        'Improved success rates',
        'Better patient outcomes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Agricultural Intelligence',
      description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization.',
      features: [
        'Crop health monitoring and analysis',
        'Yield prediction and optimization',
        'Pest and disease detection',
        'Irrigation and fertilizer optimization',
        'Weather impact analysis',
        'Farm management automation'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.01 – $0.10 per acre',
      timeline: '6–12 weeks',
      benefits: [
        '25% increase in crop yields',
        '30% reduction in resource usage',
        'Improved crop quality',
        'Automated farm management'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Financial Risk Assessment',
      description: 'Advanced financial risk modeling and assessment using machine learning and big data.',
      features: [
        'Credit risk assessment and scoring',
        'Market risk analysis and prediction',
        'Operational risk identification',
        'Fraud detection and prevention',
        'Regulatory compliance monitoring',
        'Stress testing and scenario analysis'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.01 – $0.10 per assessment',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% accuracy in risk assessment',
        'Reduced financial losses',
        'Automated risk monitoring',
        'Better regulatory compliance'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Energy Trading Platform',
      description: 'Intelligent energy trading with price prediction, demand forecasting, and optimization.',
      features: [
        'Energy price prediction and analysis',
        'Demand forecasting and optimization',
        'Trading strategy optimization',
        'Risk management and hedging',
        'Market analysis and insights',
        'Automated trading execution'
      ],
      pricing: '$10,000 – $80,000 setup',
      perUnit: '0.1% – 1% of trading volume',
      timeline: '8–16 weeks',
      benefits: [
        '20% improvement in trading performance',
        'Reduced energy costs',
        'Automated trading strategies',
        'Better risk management'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review and analysis with contract insights and risk assessment.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document classification',
        'Compliance checking and monitoring',
        'Case law research and analysis',
        'Document summarization and insights',
        'Legal precedent identification'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.10 – $1.00 per document',
      timeline: '6–12 weeks',
      benefits: [
        '80% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance checking',
        'Better risk identification'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis using deep learning.',
      features: [
        'Molecular structure prediction and analysis',
        'Drug-target interaction modeling',
        'Side effect prediction and assessment',
        'Clinical trial optimization',
        'Biomarker discovery and validation',
        'Regulatory compliance and documentation'
      ],
      pricing: '$50,000 – $500,000 project',
      perUnit: 'Custom pricing based on research scope',
      timeline: '12–24 weeks',
      benefits: [
        '60% faster drug discovery process',
        'Reduced research and development costs',
        'Improved success rates in clinical trials',
        'Enhanced drug safety profiles'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Medical Imaging Analysis',
      description: 'Advanced computer vision for medical imaging diagnosis, radiology, and pathology analysis.',
      features: [
        'Radiology image analysis and diagnosis',
        'Pathology slide examination',
        'Tumor detection and classification',
        'Medical image enhancement and processing',
        'Diagnostic report generation',
        'Integration with medical systems'
      ],
      pricing: '$25,000 – $150,000 setup',
      perUnit: '$0.50 – $5.00 per image',
      timeline: '8–16 weeks',
      benefits: [
        '95% accuracy in medical diagnosis',
        'Faster diagnostic turnaround times',
        'Reduced human error in analysis',
        'Improved patient outcomes'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Financial Trading Algorithm',
      description: 'Sophisticated AI trading algorithms for automated investment strategies and risk management.',
      features: [
        'Algorithmic trading strategy development',
        'Real-time market analysis and prediction',
        'Risk assessment and portfolio optimization',
        'High-frequency trading capabilities',
        'Backtesting and performance analysis',
        'Regulatory compliance and reporting'
      ],
      pricing: '$100,000 – $1,000,000 setup',
      perUnit: 'Performance-based fees (10-20% of profits)',
      timeline: '16–32 weeks',
      benefits: [
        'Superior risk-adjusted returns',
        '24/7 automated trading',
        'Reduced emotional trading decisions',
        'Advanced market analysis capabilities'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Intelligence',
      description: 'Advanced AI system for real-time threat detection, analysis, and automated response.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly identification',
        'Automated incident response',
        'Threat intelligence gathering',
        'Vulnerability assessment and prioritization',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% threat detection accuracy',
        'Real-time automated response',
        'Reduced security incident impact',
        'Enhanced security posture'
      ]
    },
    {
      icon: FileText,
      name: 'AI-Powered Legal Document Analysis',
      description: 'Advanced AI for legal document review, contract analysis, and compliance monitoring.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document review and summarization',
        'Compliance monitoring and reporting',
        'Due diligence automation',
        'Legal research and case law analysis',
        'Document generation and templating'
      ],
      pricing: '$10,000 – $75,000 setup',
      perUnit: '$0.25 – $2.50 per document',
      timeline: '6–12 weeks',
      benefits: [
        '90% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance monitoring',
        'Reduced legal costs and risks'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Real-Time Translation',
      description: 'Advanced real-time translation system with voice recognition and natural language processing.',
      features: [
        'Real-time voice translation',
        'Multi-language support (100+ languages)',
        'Context-aware translation',
        'Offline translation capabilities',
        'Custom domain adaptation',
        'Integration with communication platforms'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.01 – $0.10 per minute',
      timeline: '4–8 weeks',
      benefits: [
        '95% translation accuracy',
        'Real-time communication support',
        'Multi-language business expansion',
        'Enhanced global collaboration'
      ]
    },
    {
      icon: Database,
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization and management',
        'Logistics route optimization',
        'Supplier risk assessment',
        'Supply chain visibility and tracking',
        'Automated decision making'
      ],
      pricing: '$20,000 – $150,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '30% reduction in supply chain costs',
        'Improved inventory turnover',
        'Enhanced supply chain resilience',
        'Optimized logistics operations'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Climate Change Modeling',
      description: 'Advanced AI models for climate prediction, environmental impact assessment, and sustainability planning.',
      features: [
        'Climate change prediction and modeling',
        'Environmental impact assessment',
        'Carbon footprint analysis',
        'Renewable energy optimization',
        'Sustainability planning and reporting',
        'Environmental risk assessment'
      ],
      pricing: '$30,000 – $200,000 project',
      perUnit: 'Custom pricing based on scope',
      timeline: '12–24 weeks',
      benefits: [
        'Accurate climate predictions',
        'Improved sustainability planning',
        'Reduced environmental impact',
        'Enhanced corporate responsibility'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Autonomous Vehicle Systems',
      description: 'Advanced AI systems for autonomous vehicle navigation, safety, and fleet management.',
      features: [
        'Autonomous navigation and path planning',
        'Object detection and collision avoidance',
        'Traffic pattern analysis and optimization',
        'Fleet management and coordination',
        'Predictive maintenance and diagnostics',
        'Safety monitoring and compliance'
      ],
      pricing: '$100,000 – $1,000,000 project',
      perUnit: 'Custom pricing based on fleet size',
      timeline: '24–48 weeks',
      benefits: [
        'Enhanced vehicle safety',
        'Reduced transportation costs',
        'Improved fleet efficiency',
        'Advanced autonomous capabilities'
      ]
    }
  ];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Autonomous Systems", count: aiServices.filter(s => s.category === "Autonomous Systems").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Financial AI", count: aiServices.filter(s => s.category === "Financial AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length }
];

export default function AIServicesPage() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning models to computer vision and natural language processing, we deliver intelligent solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">({service.setupTime})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best solutions for your business and implement them successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}