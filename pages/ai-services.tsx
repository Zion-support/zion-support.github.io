import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2
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
  // NEW CUTTING-EDGE AI SERVICES - 2025 INNOVATIONS
  {
    id: 13,
    title: 'AI Quantum Neural Networks',
    description: 'Revolutionary quantum neural network solutions that leverage quantum computing for exponentially faster AI processing and complex problem solving.',
    icon: Brain,
    category: 'Quantum AI',
    price: 'Starting at $6,500/month',
    features: [
      'Quantum neural network architecture',
      'Quantum superposition learning',
      'Quantum entanglement optimization',
      'Hybrid quantum-classical training',
      'Quantum error correction',
      'Advanced quantum algorithms',
      'Quantum data processing',
      'Research collaboration & support'
    ],
    benefits: [
      'Exponential speedup in AI training',
      'Solve previously impossible problems',
      'Quantum advantage in specific domains',
      'Future-proof AI architecture'
    ],
    marketPrice: '$10,000-25,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Research institutions, Tech giants, Government agencies, Quantum computing companies'
  },
  {
    id: 14,
    title: 'AI Space Weather Prediction',
    description: 'Advanced AI system for predicting space weather events, solar storms, and their impact on Earth-based infrastructure and satellite operations.',
    icon: Sun,
    category: 'AI Space',
    price: 'Starting at $4,800/month',
    features: [
      'Solar storm prediction & modeling',
      'Geomagnetic activity forecasting',
      'Satellite impact analysis',
      'Space weather alerts & warnings',
      'Radiation belt monitoring',
      'Aurora prediction & tracking',
      'Spacecraft anomaly correlation',
      'Real-time space weather dashboard'
    ],
    benefits: [
      'Protect critical infrastructure',
      'Prevent satellite damage',
      'Improve mission planning',
      'Reduce space weather risks'
    ],
    marketPrice: '$7,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Satellite operators, Power grid companies, Aviation industry'
  },
  {
    id: 15,
    title: 'AI Metaverse Intelligence',
    description: 'AI-powered metaverse solutions for virtual world creation, avatar intelligence, and immersive experience optimization.',
    icon: Gamepad2,
    category: 'AI Metaverse',
    price: 'Starting at $3,800/month',
    features: [
      'Virtual world generation AI',
      'Intelligent avatar behavior',
      '3D content creation automation',
      'Immersive experience optimization',
      'Virtual economy management',
      'Social interaction AI',
      'Cross-platform compatibility',
      'Real-time world adaptation'
    ],
    benefits: [
      'Create immersive virtual worlds',
      'Intelligent avatar interactions',
      'Automated content generation',
      'Enhanced user engagement'
    ],
    marketPrice: '$6,000-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Gaming companies, Virtual reality firms, Social platforms, Entertainment industry'
  },
  {
    id: 16,
    title: 'AI Edge Computing Intelligence',
    description: 'AI solutions optimized for edge computing environments with ultra-low latency processing and real-time decision making.',
    icon: Cpu,
    category: 'AI Edge',
    price: 'Starting at $2,900/month',
    features: [
      'Edge-optimized AI models',
      'Ultra-low latency processing',
      'Real-time inference capabilities',
      'Distributed AI architecture',
      'Edge device management',
      'Bandwidth optimization',
      'Offline AI capabilities',
      'Edge-to-cloud synchronization'
    ],
    benefits: [
      'Ultra-low latency responses',
      'Reduced bandwidth usage',
      'Offline AI capabilities',
      'Improved user experience'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'IoT companies, Manufacturing, Smart cities, Mobile app developers'
  },
  {
    id: 17,
    title: 'AI Digital Twin Intelligence',
    description: 'AI-powered digital twin solutions for real-time monitoring, simulation, and optimization of physical assets and systems.',
    icon: Monitor,
    category: 'AI Digital Twin',
    price: 'Starting at $4,200/month',
    features: [
      'Real-time asset monitoring',
      'Predictive maintenance AI',
      'Simulation & modeling',
      'Performance optimization',
      'Anomaly detection',
      'Lifecycle management',
      'IoT data integration',
      'Predictive analytics'
    ],
    benefits: [
      'Prevent equipment failures',
      'Optimize performance',
      'Reduce maintenance costs',
      'Extend asset lifespan'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Manufacturing, Energy companies, Smart buildings, Transportation'
  },
  {
    id: 18,
    title: 'AI Voice Cloning & Synthesis',
    description: 'Advanced AI voice cloning and synthesis platform with natural speech generation, emotion control, and multi-language support.',
    icon: Mic,
    category: 'AI Voice',
    price: 'Starting at $2,500/month',
    features: [
      'High-fidelity voice cloning',
      'Emotion & tone control',
      'Multi-language synthesis',
      'Real-time voice generation',
      'Voice aging & modification',
      'Accent & dialect adaptation',
      'Voice authentication',
      'API integration'
    ],
    benefits: [
      'Natural voice generation',
      'Emotion control capabilities',
      'Multi-language support',
      'Easy integration'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Media companies, E-learning platforms, Accessibility services, Entertainment'
  },
  {
    id: 19,
    title: 'AI Quantum Cryptography',
    description: 'Quantum-resistant AI security solutions with quantum key distribution, quantum random number generation, and unbreakable encryption.',
    icon: Lock,
    category: 'AI Security',
    price: 'Starting at $5,500/month',
    features: [
      'Quantum key distribution',
      'Quantum random number generation',
      'Quantum-resistant encryption',
      'Entanglement verification',
      'Quantum authentication',
      'Post-quantum cryptography',
      'Quantum security protocols',
      'Compliance monitoring'
    ],
    benefits: [
      'Unbreakable security',
      'Future-proof encryption',
      'Quantum-safe communication',
      'Advanced threat protection'
    ],
    marketPrice: '$8,500-20,000/month',
    setupTime: '10-20 weeks',
    targetUsers: 'Government agencies, Financial institutions, Healthcare, Defense contractors'
  },
  {
    id: 20,
    title: 'AI Autonomous Drone Intelligence',
    description: 'AI-powered autonomous drone systems with intelligent flight planning, obstacle avoidance, and mission optimization capabilities.',
    icon: Drone,
    category: 'AI Autonomous',
    price: 'Starting at $3,500/month',
    features: [
      'Autonomous flight planning',
      'Intelligent obstacle avoidance',
      'Mission optimization AI',
      'Weather adaptation',
      'Payload optimization',
      'Fleet coordination',
      'Real-time decision making',
      'Safety monitoring'
    ],
    benefits: [
      'Fully autonomous operations',
      'Improved safety',
      'Mission optimization',
      'Cost reduction'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Delivery services, Agriculture, Surveillance, Emergency response'
  },
  {
    id: 21,
    title: 'AI Blockchain Intelligence',
    description: 'AI-powered blockchain analysis and smart contract optimization with fraud detection and compliance monitoring.',
    icon: Database,
    category: 'AI Blockchain',
    price: 'Starting at $3,200/month',
    features: [
      'Blockchain transaction analysis',
      'Smart contract optimization',
      'Fraud detection & prevention',
      'Compliance monitoring',
      'DeFi protocol analysis',
      'NFT authenticity verification',
      'Cryptocurrency tracking',
      'Regulatory reporting'
    ],
    benefits: [
      'Enhanced security',
      'Fraud prevention',
      'Compliance assurance',
      'Optimized performance'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Cryptocurrency exchanges, DeFi platforms, Financial institutions, Government'
  },
  {
    id: 22,
    title: 'AI Climate Change Mitigation',
    description: 'AI solutions for climate change mitigation, carbon capture optimization, and environmental restoration planning.',
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $4,000/month',
    features: [
      'Carbon capture optimization',
      'Climate modeling & prediction',
      'Environmental restoration planning',
      'Renewable energy optimization',
      'Emission reduction strategies',
      'Biodiversity protection',
      'Climate adaptation planning',
      'Sustainability metrics'
    ],
    benefits: [
      'Accelerate climate solutions',
      'Optimize carbon capture',
      'Protect biodiversity',
      'Meet climate goals'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Government, NGOs'
  },
  {
    id: 23,
    title: 'AI Space Debris Management',
    description: 'AI-powered space debris tracking, collision prediction, and orbital cleanup optimization for space sustainability.',
    icon: Satellite,
    category: 'AI Space',
    price: 'Starting at $4,500/month',
    features: [
      'Space debris tracking',
      'Collision prediction algorithms',
      'Orbital cleanup optimization',
      'Satellite constellation management',
      'Space traffic control',
      'Debris removal planning',
      'Risk assessment',
      'Mission coordination'
    ],
    benefits: [
      'Prevent space collisions',
      'Optimize space operations',
      'Ensure space sustainability',
      'Protect valuable assets'
    ],
    marketPrice: '$7,000-18,000/month',
    setupTime: '10-20 weeks',
    targetUsers: 'Space agencies, Satellite operators, Aerospace companies, Government'
  },
  {
    id: 24,
    title: 'AI Robotic Process Automation',
    description: 'Intelligent RPA solutions with AI-powered decision making, process optimization, and cognitive automation capabilities.',
    icon: Bot,
    category: 'AI RPA',
    price: 'Starting at $2,800/month',
    features: [
      'Intelligent process automation',
      'Cognitive decision making',
      'Workflow optimization',
      'Document processing AI',
      'Exception handling',
      'Process mining',
      'Performance analytics',
      'Integration capabilities'
    ],
    benefits: [
      'Automate complex processes',
      'Reduce human errors',
      'Improve efficiency',
      'Cost savings'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, Financial services, Healthcare, Manufacturing'
  },
  {
    id: 25,
    title: 'AI Augmented Reality Intelligence',
    description: 'AI-powered AR solutions with intelligent object recognition, spatial mapping, and immersive experience optimization.',
    icon: Eye,
    category: 'AI AR',
    price: 'Starting at $3,200/month',
    features: [
      'Intelligent object recognition',
      'Spatial mapping & tracking',
      'AR content generation',
      'Real-time rendering optimization',
      'Gesture recognition',
      'Multi-user collaboration',
      'Cross-platform compatibility',
      'Performance analytics'
    ],
    benefits: [
      'Enhanced AR experiences',
      'Intelligent interactions',
      'Better performance',
      'Easy deployment'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Gaming companies, Education, Healthcare, Manufacturing'
  },
  {
    id: 26,
    title: 'AI Energy Grid Optimization',
    description: 'AI solutions for smart grid management, renewable energy integration, and energy distribution optimization.',
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $3,800/month',
    features: [
      'Smart grid optimization',
      'Renewable energy integration',
      'Demand forecasting',
      'Energy storage optimization',
      'Grid stability monitoring',
      'Load balancing',
      'Predictive maintenance',
      'Real-time analytics'
    ],
    benefits: [
      'Optimize energy distribution',
      'Integrate renewables',
      'Reduce energy waste',
      'Improve grid stability'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Utility companies, Energy providers, Smart cities, Government'
  },
  {
    id: 27,
    title: 'AI Quantum Error Correction',
    description: 'Advanced quantum error correction AI for quantum computing systems with fault tolerance and reliability optimization.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $7,500/month',
    features: [
      'Quantum error detection',
      'Fault-tolerant quantum codes',
      'Error correction algorithms',
      'Quantum state protection',
      'Noise mitigation',
      'Reliability optimization',
      'Performance monitoring',
      'Research collaboration'
    ],
    benefits: [
      'Enable reliable quantum computing',
      'Reduce quantum errors',
      'Improve quantum performance',
      'Advance quantum technology'
    ],
    marketPrice: '$12,000-30,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Quantum computing companies, Research institutions, Tech giants, Government'
  },
  {
    id: 28,
    title: 'AI Mental Health Analytics',
    description: 'AI-powered mental health monitoring, analysis, and intervention systems with privacy-preserving technology.',
    icon: Heart,
    category: 'AI Healthcare',
    price: 'Starting at $2,200/month',
    features: [
      'Mental health monitoring',
      'Mood analysis & tracking',
      'Crisis detection & intervention',
      'Therapy recommendation AI',
      'Privacy-preserving analytics',
      'Wearable device integration',
      'Personalized interventions',
      'Clinical decision support'
    ],
    benefits: [
      'Early intervention',
      'Personalized care',
      'Privacy protection',
      'Improved outcomes'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Healthcare providers, Mental health clinics, Wellness companies, Insurance'
  },
  {
    id: 29,
    title: 'AI Space Mission Planning',
    description: 'AI-powered space mission planning and optimization with orbital mechanics, resource management, and risk assessment.',
    icon: Rocket,
    category: 'AI Space',
    price: 'Starting at $5,200/month',
    features: [
      'Mission planning optimization',
      'Orbital mechanics calculations',
      'Resource allocation AI',
      'Risk assessment & mitigation',
      'Trajectory optimization',
      'Payload optimization',
      'Mission simulation',
      'Real-time adjustments'
    ],
    benefits: [
      'Optimize mission success',
      'Reduce mission costs',
      'Minimize risks',
      'Improve efficiency'
    ],
    marketPrice: '$8,500-20,000/month',
    setupTime: '10-20 weeks',
    targetUsers: 'Space agencies, Aerospace companies, Satellite operators, Research institutions'
  },
  {
    id: 30,
    title: 'AI Quantum Machine Learning',
    description: 'Quantum machine learning platform combining quantum computing with AI for solving complex optimization and learning problems.',
    icon: Brain,
    category: 'Quantum AI',
    price: 'Starting at $6,000/month',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Quantum optimization',
      'Hybrid quantum-classical learning',
      'Quantum data processing',
      'Quantum feature mapping',
      'Quantum kernel methods',
      'Research collaboration'
    ],
    benefits: [
      'Exponential speedup',
      'Solve complex problems',
      'Quantum advantage',
      'Future-proof solutions'
    ],
    marketPrice: '$10,000-25,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Research institutions, Tech companies, Financial services, Government'
  },

  {
    id: 31,
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
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

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
            </div>
          </div>
        </section>

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
  );
}