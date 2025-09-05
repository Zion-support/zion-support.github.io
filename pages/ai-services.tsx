import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Layout from '../components/Layout';
>>>>>>> pr-11914
import { 
  Brain, 
  BarChart3, 
=======
import { 
  Brain, 
  Eye, 
>>>>>>> pr-11935
  MessageSquare, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> pr-11935
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
<<<<<<< HEAD
  MapPin
=======
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Car,
  FileText,
  Mic,
  Shield,
  Globe,
  Cpu,
  Monitor,
  Mail,
  TrendingUp,
  Eye
>>>>>>> pr-11914
=======
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
>>>>>>> pr-11935
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};
<<<<<<< HEAD

const aiServices = [
  // AI Automation & Process Intelligence
  {
<<<<<<< HEAD
    id: 1,
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
=======
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI analytics and reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
>>>>>>> pr-11914
  },

  // Advanced AI Services
  {
<<<<<<< HEAD
    id: 6,
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $5,500/month',
=======

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
>>>>>>> pr-11935
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
  // NEW INNOVATIVE AI SERVICES
  {
<<<<<<< HEAD
    id: 7,
=======
    id: 101,
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Revolutionary AI platform for accelerating drug discovery, molecular design, and pharmaceutical research.',
>>>>>>> pr-11935
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $15,000/month',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'ADMET property prediction',
      'Synthetic route optimization',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing analysis',
      'Toxicity prediction'
    ],
    benefits: [
      'Reduce drug discovery time by 70%',
      'Increase success rate by 40%',
      'Lower R&D costs by 50%',
      'Accelerate time to market'
    ],
    marketPrice: '$25,000-100,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Pharmaceutical companies, Biotech firms, Research institutions'
  },
  {
<<<<<<< HEAD
    id: 8,
    icon: TreePine,
    category: 'AI Climate',
    price: 'Starting at $2,200/month',
=======
    id: 102,
    title: 'Quantum AI Optimization Engine',
    description: 'Cutting-edge quantum AI for solving complex optimization problems in logistics, finance, and operations.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $12,000/month',
>>>>>>> pr-11935
    features: [
      'Quantum machine learning algorithms',
      'Complex optimization problems',
      'Portfolio optimization',
      'Supply chain optimization',
      'Route optimization',
      'Resource allocation',
      'Scheduling optimization',
      'Risk management'
    ],
    benefits: [
      'Solve problems 1000x faster',
      'Find optimal solutions in complex scenarios',
      'Reduce operational costs by 30%',
      'Improve decision accuracy by 90%'
    ],
    marketPrice: '$20,000-80,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Financial services, Logistics, Manufacturing, Government'
  },
  {
<<<<<<< HEAD
    id: 9,
=======
    id: 103,
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced AI models for climate prediction, environmental impact assessment, and sustainability planning.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $8,000/month',
    features: [
      'Climate pattern prediction',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Environmental risk assessment',
      'Sustainability metrics tracking',
      'Emission reduction strategies',
      'Weather pattern analysis',
      'Ecosystem monitoring'
    ],
    benefits: [
      'Improve climate predictions by 60%',
      'Reduce environmental impact by 40%',
      'Optimize renewable energy usage',
      'Enable data-driven sustainability'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Government, NGOs'
  },
  {
    id: 104,
    title: 'Autonomous AI Trading System',
    description: 'Fully autonomous AI trading platform with real-time market analysis and automated decision making.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $20,000/month',
    features: [
      'Real-time market analysis',
      'Automated trading decisions',
      'Risk management algorithms',
      'Portfolio optimization',
      'Sentiment analysis integration',
      'News impact assessment',
      'Pattern recognition',
      'Backtesting capabilities'
    ],
    benefits: [
      'Generate 25-40% annual returns',
      'Reduce human error by 95%',
      'Operate 24/7 without breaks',
      'Process market data in milliseconds'
    ],
    marketPrice: '$35,000-150,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Hedge funds, Investment banks, Trading firms, Wealth management'
  },
  {
    id: 105,
    title: 'AI-Powered Space Mission Planning',
    description: 'Advanced AI for space mission optimization, satellite constellation management, and space exploration.',
>>>>>>> pr-11935
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $25,000/month',
    features: [
      'Mission trajectory optimization',
      'Satellite constellation management',
      'Space debris tracking',
      'Resource allocation optimization',
      'Communication link optimization',
      'Orbital mechanics calculations',
      'Mission risk assessment',
      'Autonomous navigation'
    ],
    benefits: [
      'Reduce mission costs by 50%',
      'Improve mission success rate by 35%',
      'Optimize fuel consumption',
      'Enable autonomous operations'
    ],
    marketPrice: '$40,000-200,000/month',
    setupTime: '10-16 weeks',
    targetUsers: 'Space agencies, Satellite companies, Aerospace firms, Government'
  },
  {
    id: 106,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing with contract analysis, compliance checking, and case law research.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $5,000/month',
    features: [
      'Contract analysis & review',
      'Compliance checking',
      'Case law research',
      'Legal document summarization',
      'Risk assessment',
      'Due diligence automation',
      'Legal precedent analysis',
      'Document generation'
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy by 95%',
      'Lower legal costs by 60%',
      'Enable 24/7 legal research'
    ],
    marketPrice: '$8,000-30,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Law firms, Corporate legal, Government agencies, Legal tech'
  },
  {
    id: 107,
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Smart farming solutions with crop monitoring, yield prediction, and automated agricultural management.',
    icon: Sprout,
    category: 'AgTech AI',
    price: 'Starting at $3,500/month',
    features: [
      'Crop health monitoring',
      'Yield prediction & optimization',
      'Soil analysis & recommendations',
      'Pest & disease detection',
      'Irrigation optimization',
      'Weather-based planning',
      'Resource allocation',
      'Harvest timing optimization'
    ],
    benefits: [
      'Increase crop yield by 30%',
      'Reduce water usage by 25%',
      'Lower pesticide use by 40%',
      'Improve farm profitability by 50%'
    ],
<<<<<<< HEAD
    marketPrice: '$5,500-12,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Space agencies, Research institutions, Satellite companies, Aerospace'
  },
  {
    icon: TrendingUp,
    features: ['Transaction Analysis', 'Pattern Recognition', 'Risk Assessment', 'Compliance Monitoring'],
    pricing: '$5,000 - $40,000/month',
    category: 'Blockchain AI',
    popular: true
  },
  {
    icon: Sprout,
    features: ['Climate Modeling', 'Carbon Capture Optimization', 'Environmental Restoration', 'Policy Simulation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Climate AI',
    popular: true
  },
  {
    icon: Rocket,
    features: ['Habitat Design', 'Resource Management', 'Autonomous Operations', 'Life Support Systems'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Space AI',
    popular: true
  },
  {
    icon: Heart,
    features: ['Longevity Research', 'Health Optimization', 'Aging Reversal', 'Personalized Medicine'],
    pricing: '$75,000 - $750,000/project',
    category: 'Longevity AI',
    popular: true
  },
  {
    icon: Brain,
    features: ['Consciousness Preservation', 'Digital Transfer', 'Identity Continuity', 'Ethical Framework'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Consciousness Transfer',
    popular: true
  },
  {
    icon: Cpu,
    features: ['Universal Problem Solving', 'Cross-Domain Learning', 'Creative Solutions', 'Scalable Intelligence'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'General AI',
    popular: true
  },
  {
    icon: Eye,
    features: ['Ultra-Realistic Simulation', 'Physics Modeling', 'Behavioral Simulation', 'Immersive Training'],
    pricing: '$150,000 - $1,500,000/project',
    category: 'Simulation AI',
    popular: true
  },
  {
    icon: Clock,
    features: ['Future Prediction', 'Event Forecasting', 'Outcome Analysis', 'Temporal Modeling'],
    pricing: '$50,000 - $500,000/project',
    category: 'Temporal AI',
    popular: true
  },
  {
    icon: Globe,
    features: ['Universal Translation', 'Language Reconstruction', 'Cultural Context', 'Real-time Processing'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Translation AI',
    popular: true
  },
  {
    icon: Brain,
    features: ['Dream Interpretation', 'Subconscious Analysis', 'Pattern Recognition', 'Therapeutic Insights'],
    pricing: '$15,000 - $150,000/project',
    category: 'Dream AI',
    popular: true
  },
  {
    icon: Heart,
    features: ['Emotion Generation', 'Empathy Simulation', 'Emotional Intelligence', 'Therapeutic Applications'],
    pricing: '$30,000 - $300,000/project',
    category: 'Emotional AI',
    popular: true
  },
  {
    icon: Brain,
    features: ['Memory Augmentation', 'Cognitive Enhancement', 'Learning Acceleration', 'Memory Retrieval'],
    pricing: '$40,000 - $400,000/project',
    category: 'Memory AI',
    popular: true
  },
  {
    icon: FileText,
    features: ['Creative Problem Solving', 'Artistic Generation', 'Innovation Catalyst', 'Design Thinking'],
    pricing: '$20,000 - $200,000/project',
    category: 'Creative AI',
    popular: true
  },
  {
    icon: Brain,
    features: ['Thought Reading', 'Mental Communication', 'Neural Interface', 'Privacy Protection'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Telepathic AI',
    popular: true
  },
  {
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Curriculum', 'Multi-Modal Teaching', 'Progress Optimization'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Education AI',
    popular: true
  },
  {
    icon: Heart,
    features: ['Universal Diagnosis', 'Treatment Optimization', 'Prevention Strategies', 'Personalized Medicine'],
    pricing: '$50,000 - $500,000/project',
    category: 'Healthcare AI',
    popular: true
  },
  {
    icon: Zap,
    features: ['Energy Optimization', 'Grid Management', 'Renewable Integration', 'Efficiency Maximization'],
    pricing: '$75,000 - $750,000/project',
    category: 'Energy AI',
    popular: true
  },
  {
    icon: Car,
    features: ['Autonomous Vehicles', 'Route Optimization', 'Logistics Management', 'Safety Systems'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Transportation AI',
    popular: true
  },
  {
    icon: MessageSquare,
    features: ['Universal Communication', 'Language Translation', 'Cultural Adaptation', 'Real-time Processing'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Communication AI',
    popular: true
  },
  {
    icon: Shield,
    features: ['Universal Protection', 'Threat Detection', 'Automated Response', 'Predictive Security'],
    pricing: '$50,000 - $500,000/project',
    category: 'Security AI',
    popular: true
  },
  {
    icon: Settings,
    features: ['Universal Manufacturing', 'Quality Optimization', 'Efficiency Maximization', 'Custom Production'],
    pricing: '$75,000 - $750,000/project',
    category: 'Manufacturing AI',
    popular: true
  },
  {
    icon: Sprout,
    features: ['Crop Optimization', 'Yield Maximization', 'Resource Management', 'Climate Adaptation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Agriculture AI',
    popular: true
  },
  {
    icon: Video,
    features: ['Personalized Content', 'Creative Generation', 'Interactive Experiences', 'Emotional Engagement'],
    pricing: '$20,000 - $200,000/project',
    category: 'Entertainment AI',
    popular: true
  },
  {
    icon: Search,
    features: ['Research Acceleration', 'Hypothesis Generation', 'Data Analysis', 'Discovery Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Research AI',
    popular: true
  },
  {
    icon: Building,
    features: ['Policy Optimization', 'Decision Support', 'Stakeholder Analysis', 'Outcome Prediction'],
    pricing: '$150,000 - $1,500,000/project',
    category: 'Governance AI',
    popular: true
  },
  {
    icon: Scale,
    features: ['Legal Analysis', 'Fair Decision Making', 'Case Prediction', 'Justice Optimization'],
    pricing: '$75,000 - $750,000/project',
    category: 'Justice AI',
    popular: true
  },
  {
    icon: TrendingUp,
    features: ['Economic Optimization', 'Resource Allocation', 'Market Analysis', 'Policy Simulation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Economics AI',
    popular: true
  },
  {
    icon: Brain,
    features: ['Philosophical Analysis', 'Ethical Reasoning', 'Moral Decision Making', 'Wisdom Generation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Philosophy AI',
    popular: true
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];

const benefits = [
  {
    id: 11,
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
=======
    marketPrice: '$6,000-25,000/month',
>>>>>>> pr-11935
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agricultural companies, Food producers, Research institutions'
  },
  {
<<<<<<< HEAD
    id: 12,
    icon: DollarSign,
    category: 'AI Finance',
    price: 'Starting at $3,200/month',
=======
    id: 108,
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Advanced AI security platform with threat detection, incident response, and predictive security analytics.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $7,500/month',
>>>>>>> pr-11935
    features: [
      'Advanced threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence analysis',
      'Vulnerability assessment',
      'Security orchestration',
      'Predictive threat modeling',
      'Zero-day attack detection'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Prevent 95% of cyber attacks',
      'Enable proactive security posture'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, Government, Financial services, Healthcare'
  },
  {
    id: 109,
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city operations, traffic management, and urban planning.',
    icon: Building,
    category: 'Smart City AI',
    price: 'Starting at $10,000/month',
    features: [
      'Traffic flow optimization',
      'Energy consumption management',
      'Waste management optimization',
      'Public safety monitoring',
      'Infrastructure maintenance',
      'Citizen service automation',
      'Environmental monitoring',
      'Urban planning insights'
    ],
    benefits: [
      'Reduce traffic congestion by 40%',
      'Lower energy consumption by 25%',
      'Improve citizen satisfaction by 60%',
      'Enable data-driven urban planning'
    ],
    marketPrice: '$15,000-75,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'City governments, Urban planners, Infrastructure companies, Technology firms'
  },
  {
    id: 110,
    title: 'AI-Powered Personal Health Assistant',
    description: 'Intelligent health monitoring with personalized recommendations, disease prediction, and wellness tracking.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $2,000/month',
    features: [
      'Health data analysis',
      'Disease risk prediction',
      'Personalized recommendations',
      'Medication adherence tracking',
      'Symptom analysis',
      'Wellness coaching',
      'Emergency health alerts',
      'Integration with wearables'
    ],
    benefits: [
      'Improve health outcomes by 45%',
      'Reduce healthcare costs by 30%',
      'Enable preventive care',
      'Personalize treatment plans'
    ],
    marketPrice: '$3,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Healthcare providers, Insurance companies, Wellness apps, Individuals'
  },
  {
    id: 111,
    title: 'AI-Powered Content Creation Studio',
    description: 'Advanced AI platform for automated content creation including videos, articles, and multimedia content.',
    icon: Video,
    category: 'Content AI',
    price: 'Starting at $4,500/month',
    features: [
      'Automated video production',
      'Article & blog generation',
      'Social media content creation',
      'Multimedia content generation',
      'Brand voice customization',
      'SEO optimization',
      'Content scheduling',
      'Performance analytics'
    ],
    benefits: [
      'Reduce content creation time by 90%',
      'Increase content output by 500%',
      'Maintain consistent brand voice',
      'Optimize for engagement and SEO'
    ],
    marketPrice: '$7,500-30,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Marketing agencies, Content creators, Media companies, E-commerce'
  },
  {
    id: 112,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $6,000/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier risk assessment',
      'Logistics route optimization',
      'Quality control automation',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce inventory costs by 35%',
      'Improve delivery times by 50%',
      'Lower supply chain risks by 60%',
      'Increase overall efficiency by 40%'
    ],
    marketPrice: '$10,000-40,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
<<<<<<< HEAD
    id: 13,
    icon: Sprout,
    category: 'AI Agriculture',
    price: 'Starting at $2,500/month',
=======
    id: 113,
    title: 'AI-Powered Voice Synthesis & Cloning',
    description: 'Advanced voice AI for realistic speech synthesis, voice cloning, and multilingual voice generation.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $3,000/month',
>>>>>>> pr-11935
    features: [
      'Realistic voice synthesis',
      'Voice cloning technology',
      'Multilingual voice generation',
      'Emotion & tone control',
      'Real-time voice conversion',
      'Voice authentication',
      'Custom voice training',
      'API integration'
    ],
    benefits: [
      'Create realistic voice content',
      'Enable multilingual communication',
      'Reduce voice production costs by 80%',
      'Personalize voice experiences'
    ],
    marketPrice: '$5,000-20,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Media companies, E-learning, Accessibility services, Entertainment'
  },
  {
<<<<<<< HEAD
    id: 14,
    icon: Zap,
    category: 'AI Energy',
    price: 'Starting at $2,800/month',
=======
    id: 114,
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent maintenance system with failure prediction, condition monitoring, and automated scheduling.',
    icon: Settings,
    category: 'Industrial AI',
    price: 'Starting at $4,500/month',
>>>>>>> pr-11935
    features: [
      'Failure prediction algorithms',
      'Condition monitoring',
      'Maintenance scheduling',
      'Performance optimization',
      'Cost optimization',
      'Asset lifecycle management',
      'Predictive analytics',
      'Integration with IoT sensors'
    ],
    benefits: [
      'Reduce unplanned downtime by 70%',
      'Lower maintenance costs by 40%',
      'Extend asset life by 30%',
      'Improve operational efficiency'
    ],
    marketPrice: '$7,500-30,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Transportation, Facilities management'
  },
  {
    id: 115,
    title: 'AI-Powered Financial Risk Assessment',
    description: 'Advanced AI for credit scoring, fraud detection, and comprehensive financial risk analysis.',
    icon: DollarSign,
    category: 'FinTech AI',
    price: 'Starting at $8,500/month',
    features: [
      'Credit scoring algorithms',
      'Fraud detection systems',
      'Risk modeling',
      'Market risk analysis',
      'Operational risk assessment',
      'Regulatory compliance',
      'Real-time monitoring',
      'Predictive analytics'
    ],
    benefits: [
      'Improve risk assessment accuracy by 60%',
      'Reduce fraud losses by 80%',
      'Faster credit decisions',
      'Enhanced regulatory compliance'
    ],
    marketPrice: '$15,000-60,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Credit unions, Insurance companies, Fintech firms'
  },
  {
    id: 116,
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Advanced AI for autonomous vehicle navigation, safety systems, and fleet management.',
    icon: Car,
    category: 'Autonomous AI',
    price: 'Starting at $25,000/month',
    features: [
      'Autonomous navigation',
      'Object detection & avoidance',
      'Path planning algorithms',
      'Fleet management',
      'Safety monitoring',
      'Traffic optimization',
      'Predictive maintenance',
      'Real-time decision making'
    ],
    benefits: [
      'Improve safety by 90%',
      'Reduce transportation costs by 60%',
      'Enable 24/7 operations',
      'Optimize fleet efficiency'
    ],
    marketPrice: '$40,000-200,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive companies, Logistics, Transportation, Fleet operators'
  },
  {
    id: 117,
    title: 'AI-Powered Energy Grid Optimization',
    description: 'Intelligent energy management with grid optimization, renewable integration, and demand response.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $12,000/month',
    features: [
      'Grid optimization algorithms',
      'Renewable energy integration',
      'Demand response management',
      'Energy storage optimization',
      'Load forecasting',
      'Price optimization',
      'Grid stability monitoring',
      'Carbon footprint tracking'
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Increase renewable energy usage by 40%',
      'Improve grid stability',
      'Enable sustainable energy transition'
    ],
    marketPrice: '$20,000-80,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Utility companies, Energy providers, Grid operators, Government'
  },
  {
<<<<<<< HEAD
    id: 15,
    icon: GraduationCap,
    category: 'AI Education',
    price: 'Starting at $1,800/month',
=======
    id: 118,
    title: 'AI-Powered Mental Health Support',
    description: 'Intelligent mental health platform with mood tracking, therapy assistance, and crisis intervention.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $3,500/month',
>>>>>>> pr-11935
    features: [
      'Mood tracking & analysis',
      'Therapy session assistance',
      'Crisis detection & intervention',
      'Personalized recommendations',
      'Progress monitoring',
      'Medication adherence',
      'Support group matching',
      'Professional integration'
    ],
    benefits: [
      'Improve mental health outcomes by 50%',
      'Provide 24/7 support',
      'Reduce therapy costs by 40%',
      'Enable early intervention'
    ],
    marketPrice: '$6,000-25,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Healthcare providers, Mental health clinics, Insurance, Individuals'
  },
  {
    id: 119,
    title: 'AI-Powered Real Estate Intelligence',
    description: 'Advanced AI for property valuation, market analysis, and real estate investment optimization.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $5,500/month',
    features: [
      'Property valuation algorithms',
      'Market trend analysis',
      'Investment opportunity identification',
      'Risk assessment',
      'Rental yield optimization',
      'Property management automation',
      'Market forecasting',
      'Portfolio optimization'
    ],
    benefits: [
      'Improve valuation accuracy by 45%',
      'Identify profitable opportunities 3x faster',
      'Reduce investment risks by 50%',
      'Optimize portfolio performance'
    ],
    marketPrice: '$9,000-35,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Real estate agents, Investors, Property managers, Developers'
  },
  {
    id: 120,
    title: 'AI-Powered Gaming Intelligence',
    description: 'Advanced AI for game development, player behavior analysis, and dynamic content generation.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $7,000/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'NPC intelligence',
      'Game balancing algorithms',
      'Monetization optimization',
      'Player retention analysis',
      'Anti-cheat systems'
    ],
    benefits: [
      'Increase player engagement by 60%',
      'Reduce development time by 40%',
      'Improve monetization by 35%',
      'Create more immersive experiences'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Game developers, Publishers, Gaming platforms, Esports'
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
<<<<<<< HEAD
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length }
=======
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Space AI", count: aiServices.filter(s => s.category === "Space AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Smart City AI", count: aiServices.filter(s => s.category === "Smart City AI").length },
  { name: "Industrial AI", count: aiServices.filter(s => s.category === "Industrial AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length }
>>>>>>> pr-11935
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
<<<<<<< HEAD
=======
    title: 'AI Customer Support',
    description: '24/7 intelligent customer support powered by advanced natural language processing.',
    icon: MessageSquare,
    features: ['Chatbots', 'Voice Assistants', 'Multi-language Support', 'Sentiment Analysis'],
    price: 'Starting at $1,800/month',
    category: 'Customer Service'
  },
  {
    title: 'AI Project Management',
    description: 'Streamline project workflows with AI-powered task management and resource optimization.',
    icon: Settings,
    features: ['Smart Scheduling', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
    price: 'Starting at $2,200/month',
    category: 'Productivity'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Personalize marketing campaigns and optimize customer engagement with AI-driven insights.',
    icon: Target,
    features: ['Personalized Content', 'A/B Testing', 'Customer Segmentation', 'Campaign Optimization'],
    price: 'Starting at $3,000/month',
    category: 'Marketing'
  },
  {
    title: 'AI Enterprise Automation',
    description: 'Automate complex business processes with intelligent workflow management systems.',
    icon: Building,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Compliance Monitoring'],
    price: 'Starting at $5,000/month',
    category: 'Enterprise'
  }
];

const additionalServices = [
  {
    title: 'AI Document Processing',
    description: 'Automated document analysis and data extraction using advanced OCR and NLP.',
    icon: FileText,
    features: ['Document Classification', 'Data Extraction', 'Text Analysis', 'Automated Workflows'],
    price: 'Starting at $1,500/month',
    category: 'Automation'
  },
  {
    title: 'AI Voice Processing',
    description: 'Convert speech to text and analyze voice data for business insights.',
    icon: Mic,
    features: ['Speech Recognition', 'Voice Analytics', 'Multi-language Support', 'Real-time Processing'],
    price: 'Starting at $2,000/month',
    category: 'Communication'
  },
  {
    title: 'AI Security Solutions',
    description: 'Advanced threat detection and security monitoring powered by machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
    price: 'Starting at $3,200/month',
    category: 'Security'
  },
  {
    title: 'AI Healthcare Solutions',
    description: 'Medical data analysis and diagnostic assistance using AI algorithms.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Support', 'Patient Monitoring', 'Drug Discovery'],
    price: 'Starting at $4,500/month',
    category: 'Healthcare'
  },
  {
    title: 'AI Education Platform',
    description: 'Personalized learning experiences and educational content generation.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Content Generation', 'Progress Tracking', 'Adaptive Testing'],
    price: 'Starting at $2,800/month',
    category: 'Education'
  },
  {
    title: 'AI Global Solutions',
    description: 'Multi-language and cross-cultural AI solutions for international businesses.',
    icon: Globe,
    features: ['Multi-language Support', 'Cultural Adaptation', 'Global Analytics', 'Localization'],
    price: 'Starting at $3,500/month',
    category: 'Global'
  },
  {
    title: 'AI Automotive Solutions',
    description: 'Autonomous vehicle technology and smart transportation systems.',
    icon: Car,
    features: ['Autonomous Driving', 'Traffic Optimization', 'Vehicle Analytics', 'Safety Systems'],
    price: 'Starting at $6,000/month',
    category: 'Automotive'
  },
  {
    title: 'AI Hardware Integration',
    description: 'Custom AI hardware solutions and edge computing implementations.',
    icon: Cpu,
    features: ['Edge Computing', 'Hardware Optimization', 'IoT Integration', 'Performance Tuning'],
    price: 'Starting at $4,000/month',
    category: 'Hardware'
  },
  {
    title: 'AI Display Technology',
    description: 'Smart displays and visual AI interfaces for enhanced user experiences.',
    icon: Monitor,
    features: ['Smart Displays', 'Visual Recognition', 'Interactive Interfaces', 'Content Optimization'],
    price: 'Starting at $2,200/month',
    category: 'Display'
  },
  {
    title: 'AI Email Automation',
    description: 'Intelligent email management and automated communication systems.',
    icon: Mail,
    features: ['Email Classification', 'Auto-responses', 'Sentiment Analysis', 'Spam Detection'],
    price: 'Starting at $1,200/month',
    category: 'Communication'
  },
  {
    title: 'AI Market Analysis',
    description: 'Advanced market research and trend analysis using AI algorithms.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Trend Analysis', 'Competitive Intelligence', 'Investment Insights'],
    price: 'Starting at $3,800/month',
    category: 'Analytics'
  }
];

const allServices = [...aiServices, ...additionalServices];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];
>>>>>>> pr-11914

export default function AIServices() {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 100+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, analytics, and automation. 100+ AI solutions with competitive pricing and proven results." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, AI consulting, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services. 100+ cutting-edge solutions with competitive pricing." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
=======

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, quantum AI, and advanced automation solutions." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, quantum AI, automation, artificial intelligence" />
>>>>>>> pr-11935
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
<<<<<<< HEAD
            <motion.div
              initial={{ opacity: 0, y: 30 }}
=======
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI solutions for businesses of all sizes. From machine learning to automation, we deliver cutting-edge AI technology."
      keywords="AI services, machine learning, artificial intelligence, automation, business intelligence, AI consulting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
>>>>>>> pr-11914
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
<<<<<<< HEAD
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
=======
                AI Services That Transform
                <span className="block text-blue-300">Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, 
                gain insights, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
>>>>>>> pr-11914
                  Explore Services
                </Link>
              </div>
            </motion.div>
<<<<<<< HEAD
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
=======
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI technologies. From machine learning to quantum AI, 
                we provide comprehensive artificial intelligence solutions for every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              <div className="w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{service.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-green-600 mb-4">{service.price}</div>
                  <div className="text-sm text-gray-500 mb-4">
                    Market Price: {service.marketPrice}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
>>>>>>> pr-11935
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
>>>>>>> pr-11914
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
<<<<<<< HEAD
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Your AI Journey
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. Our experts are ready to help you 
              implement AI technologies that drive real results and competitive advantage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-lg">+1 302 464 0950</p>
                <p className="text-sm opacity-90">Available 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-lg">kleber@ziontechgroup.com</p>
                <p className="text-sm opacity-90">Quick response guaranteed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-lg">364 E Main St STE 1008</p>
                <p className="text-sm opacity-90">Middletown, DE 19709</p>
              </div>
            </div>

=======
        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Implement AI Solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI services can transform your business.
            </p>
>>>>>>> pr-11935
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
<<<<<<< HEAD
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning models to automation systems, we provide 
                end-to-end AI solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement 
                solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Learn About Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> pr-11914
=======
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> pr-11935
  );
}