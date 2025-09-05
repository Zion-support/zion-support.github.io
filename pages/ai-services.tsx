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
    title: 'Predictive Analytics',
    description: 'Advanced predictive modeling for forecasting, risk assessment, and business intelligence.',
    icon: TrendingUp,
    category: 'Analytics',
    price: 'Starting at $3,000/month',
    features: [
      'Demand forecasting & planning',
      'Risk assessment & management',
      'Customer behavior prediction',
      'Market trend analysis',
      'Financial modeling',
      'Supply chain optimization',
      'Churn prediction',
      'Revenue forecasting'
    ],
    benefits: [
      'Improve accuracy by 60-80%',
      'Reduce costs by 25-40%',
      'Increase revenue by 15-30%',
      'Better decision making'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, Retail, Manufacturing, Healthcare'
  },
  {
    id: 5,
    title: 'AI-Powered Chatbots',
    description: 'Intelligent conversational AI for customer service, sales, and support automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Context-aware conversations',
      'Integration with CRM systems',
      'Analytics & reporting',
      'Voice & text support',
      'Custom personality design',
      'Escalation to human agents'
    ],
    benefits: [
      'Reduce support costs by 60%',
      '24/7 customer availability',
      'Improve response time by 90%',
      'Increase customer satisfaction'
    ],
<<<<<<< HEAD
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service'
=======
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Education'
>>>>>>> main
  },

  // Advanced AI Services
  {
    id: 6,
<<<<<<< HEAD
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
<<<<<<< HEAD
    title: 'AI-Powered Real Estate Valuation',
    description: 'Advanced property valuation using AI analysis of market data and property features.',
    icon: Home,
    features: ['Property Analysis', 'Market Prediction', 'Investment Insights', 'Risk Assessment'],
    pricing: '$5,000 - $25,000/setup',
    category: 'PropTech AI'
  },
  {
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document analysis with contract review and risk assessment.',
    icon: FileText,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Legal AI'
  },
  {
    title: 'AI-Powered Supply Chain Risk Management',
    description: 'Intelligent supply chain risk assessment and mitigation strategies.',
    icon: Network,
    features: ['Risk Assessment', 'Supplier Analysis', 'Disruption Prediction', 'Mitigation Planning'],
    pricing: '$25,000 - $125,000/project',
    category: 'Supply Chain AI'
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI system with perception, planning, and control capabilities.',
    icon: Car,
    features: ['Object Detection', 'Path Planning', 'Decision Making', 'Safety Systems'],
    pricing: '$200,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    popular: true,
    link: 'https://autonomousvehicles.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum algorithm optimization and quantum machine learning for complex problems.',
    icon: Cpu,
    features: ['Quantum Algorithm Design', 'Optimization Problems', 'Quantum ML', 'Error Correction'],
    pricing: '$50,000 - $200,000/project',
    category: 'Quantum Computing',
    link: 'https://quantumai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Space Mission Planner',
    description: 'Autonomous space mission planning and satellite constellation optimization using advanced AI.',
    icon: Rocket,
    features: ['Mission Planning', 'Orbit Optimization', 'Resource Allocation', 'Risk Assessment'],
    pricing: '$100,000 - $500,000/project',
    category: 'Aerospace AI',
    link: 'https://spaceai.ziontechgroup.com'
  },
  {
    title: 'AI Smart City Controller',
    description: 'Intelligent city management system with traffic optimization, energy management, and public safety.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Waste Management', 'Public Safety'],
    pricing: '$150,000 - $750,000/project',
    category: 'Smart Cities',
    link: 'https://smartcityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agricultural Optimizer',
    description: 'Precision agriculture with AI-driven crop optimization, yield prediction, and resource management.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$30,000 - $150,000/project',
    category: 'Agriculture AI',
    link: 'https://agricultureai.ziontechgroup.com'
  },
  {
    title: 'AI Mental Health Companion Pro',
    description: 'Advanced AI-powered mental health support with mood tracking and therapeutic interventions.',
    icon: Heart,
    features: ['Mood Analysis', 'Therapeutic Chat', 'Crisis Detection', 'Progress Tracking'],
    pricing: '$5,000 - $25,000/setup',
    category: 'HealthTech AI',
    popular: true,
    link: 'https://mentalhealthai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Grid Optimizer',
    description: 'Intelligent energy grid management with demand forecasting and renewable integration.',
    icon: Zap,
    features: ['Demand Forecasting', 'Grid Optimization', 'Renewable Integration', 'Load Balancing'],
    pricing: '$75,000 - $375,000/project',
    category: 'Energy AI',
    link: 'https://energygridai.ziontechgroup.com'
  },
  {
    title: 'AI Blockchain Security Auditor Pro',
    description: 'Advanced automated smart contract auditing and blockchain security analysis with AI.',
    icon: Shield,
    features: ['Smart Contract Analysis', 'Vulnerability Detection', 'Security Auditing', 'Compliance Checking'],
    pricing: '$10,000 - $50,000/project',
    category: 'Blockchain AI',
    popular: true,
    link: 'https://blockchainsecurity.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Language Translator Pro',
    description: 'Advanced real-time translation with cultural context and industry-specific terminology.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Adaptation', 'Industry Terms', 'Voice Translation'],
    pricing: '$0.02 - $0.10 per 1000 characters',
    category: 'Language AI',
    link: 'https://translationai.ziontechgroup.com'
  },
  {
    title: 'AI Creative Design Assistant Pro',
    description: 'Advanced AI-powered creative design tool for graphics, videos, and multimedia content.',
    icon: Image,
    features: ['Graphic Design', 'Video Editing', '3D Modeling', 'Brand Consistency'],
    pricing: '$2,000 - $10,000/month',
    category: 'Creative AI',
    link: 'https://creativedesignai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Investment Advisor Pro',
    description: 'Advanced personalized investment recommendations with risk assessment and portfolio optimization.',
    icon: TrendingUp,
    features: ['Portfolio Analysis', 'Risk Assessment', 'Market Analysis', 'Investment Strategies'],
    pricing: '$5,000 - $25,000/month',
    category: 'FinTech AI',
    popular: true,
    link: 'https://investmentai.ziontechgroup.com'
  },
  {
    title: 'AI Smart Home Controller Pro',
    description: 'Advanced intelligent home automation with learning capabilities and energy optimization.',
    icon: Home,
    features: ['Device Control', 'Energy Optimization', 'Learning Patterns', 'Voice Commands'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Smart Home AI',
    link: 'https://smarthomeai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Educational Tutor Pro',
    description: 'Advanced personalized learning assistant with adaptive curriculum and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Progress Tracking', 'Personalized Content', 'Assessment Tools'],
    pricing: '$500 - $2,500/month',
    category: 'EdTech AI',
    link: 'https://educationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Imaging Analysis Pro',
    description: 'Advanced medical imaging analysis for radiology and diagnostic support with AI.',
    icon: Eye,
    features: ['X-ray Analysis', 'MRI Interpretation', 'CT Scan Analysis', 'Pathology Detection'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Medical AI',
    popular: true,
    link: 'https://medicalimagingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Analyst Pro',
    description: 'Advanced automated threat detection and response with behavioral analysis and incident management.',
    icon: Shield,
    features: ['Threat Hunting', 'Incident Response', 'Vulnerability Assessment', 'Security Orchestration'],
    pricing: '$10,000 - $50,000/month',
    category: 'Cybersecurity AI',
    popular: true,
    link: 'https://cybersecurityai.ziontechgroup.com'
  },
  {
    title: 'AI Climate Change Predictor Pro',
    description: 'Advanced climate modeling and environmental impact prediction using machine learning.',
    icon: Globe,
    features: ['Weather Forecasting', 'Climate Modeling', 'Environmental Impact', 'Risk Assessment'],
    pricing: '$50,000 - $250,000/project',
    category: 'Environmental AI',
    link: 'https://climateai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research Assistant Pro',
    description: 'Advanced intelligent legal research and case law analysis with natural language processing.',
    icon: FileText,
    features: ['Case Law Analysis', 'Legal Document Review', 'Precedent Research', 'Contract Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'Legal AI',
    popular: true,
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing Optimization Pro',
    description: 'Advanced intelligent manufacturing process optimization and quality control using AI.',
    icon: Settings,
    features: ['Process Optimization', 'Quality Control', 'Predictive Maintenance', 'Defect Detection'],
    pricing: '$25,000 - $125,000/month',
    category: 'Manufacturing AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Real Estate Analysis Pro',
    description: 'Advanced AI platform for real estate market analysis and property valuation.',
    icon: Home,
    features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$10,000 - $50,000/month',
    category: 'Real Estate AI',
    link: 'https://realestateai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization Pro',
    description: 'Advanced intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$30,000 - $150,000/project',
    category: 'Supply Chain AI',
    popular: true,
    link: 'https://supplychainai.ziontechgroup.com'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
<<<<<<< HEAD
=======

=======
    features: ['Case Law Analysis', 'Document Review', 'Legal Research', 'Compliance Checking'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Legal AI'
  },
  {
    title: 'AI Sports Performance Analytics',
    description: 'Advanced sports analytics platform with player performance prediction and injury prevention.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Tactical Analysis', 'Player Scouting'],
    pricing: '$15,000 - $100,000/project',
    category: 'Sports AI'
  },
  {
    title: 'AI-Powered Agricultural Intelligence',
    description: 'Smart farming solution with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Disease Detection', 'Resource Optimization'],
    pricing: '$20,000 - $150,000/project',
    category: 'AgTech AI'
  },
  {
    title: 'AI Mental Health Companion',
    description: 'AI-powered mental health support system with mood tracking and therapeutic conversations.',
    icon: Heart,
    features: ['Mood Tracking', 'Crisis Detection', 'Therapeutic Conversations', 'Progress Monitoring'],
    pricing: '$2,000 - $12,000/setup',
    category: 'HealthTech AI'
  }
];
const industries = [{ name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
>>>>>>> main
>>>>>>> main
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous systems and route optimization' }
];
<<<<<<< HEAD

const benefits = [
  {
=======
<<<<<<< HEAD


const benefits = [
  {
=======
const benefits = [{
>>>>>>> main
>>>>>>> main
=======
    id: 14,
    title: 'AI Energy & Utilities',
    description: 'AI solutions for energy management, grid optimization, and renewable energy integration.',
>>>>>>> main
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
=======
    title: 'Computer Vision for Manufacturing',
    description: 'Quality control, defect detection, and automated inspection systems for manufacturing.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $4,000/month',
    features: [
      'Defect detection & classification',
      'Quality control automation',
      'Assembly line monitoring',
      'Product counting & tracking',
      'Dimensional measurement',
      'Surface inspection',
      'Real-time alerts',
      'Integration with production systems'
    ],
    benefits: [
      'Reduce defects by 95%',
      'Increase production efficiency by 30%',
      'Lower inspection costs by 70%',
      '24/7 quality monitoring'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Automotive, Electronics, Food & Beverage'
  },
  {
    id: 7,
    title: 'AI-Powered Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and services.',
    icon: Target,
    category: 'Recommendation Systems',
    price: 'Starting at $2,500/month',
    features: [
      'Personalized product recommendations',
      'Content recommendation',
      'Cross-selling & upselling',
      'Real-time personalization',
      'A/B testing & optimization',
      'Multi-channel recommendations',
      'Cold start problem solving',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 25-40%',
      'Boost average order value by 20-35%',
      'Improve customer engagement',
      'Reduce bounce rates'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Media, Travel, Entertainment'
  },
  {
    id: 8,
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document analysis, extraction, and processing for business automation.',
    icon: FileText,
    category: 'Document AI',
    price: 'Starting at $2,000/month',
    features: [
      'OCR & text extraction',
      'Document classification',
      'Data extraction & validation',
      'Invoice processing',
      'Contract analysis',
      'Compliance checking',
      'Multi-format support',
      'Workflow automation'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual errors by 90%',
      'Lower processing costs by 60%',
      'Improve accuracy by 95%'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Legal, Finance, Insurance, Healthcare'
  },
  {
    id: 9,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems for financial and e-commerce security.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $3,500/month',
    features: [
      'Real-time fraud detection',
      'Anomaly detection',
      'Risk scoring & assessment',
      'Transaction monitoring',
      'Behavioral analysis',
      'Pattern recognition',
      'False positive reduction',
      'Integration with payment systems'
    ],
    benefits: [
      'Reduce fraud losses by 80-90%',
      'Decrease false positives by 60%',
      'Real-time protection',
      'Compliance with regulations'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 10,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management and optimization for improved efficiency.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $4,500/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Cost optimization',
      'Quality prediction',
      'Sustainability tracking',
      'Real-time monitoring'
    ],
    benefits: [
      'Reduce costs by 20-30%',
      'Improve delivery times by 25%',
      'Optimize inventory levels',
      'Enhance sustainability'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, Automotive'
  },
  {
    id: 11,
    title: 'AI-Powered Healthcare Diagnostics',
    description: 'Medical image analysis, diagnostic assistance, and healthcare AI solutions.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $5,000/month',
    features: [
      'Medical image analysis',
      'Diagnostic assistance',
      'Drug discovery support',
      'Patient monitoring',
      'Treatment recommendations',
      'Clinical decision support',
      'Electronic health records',
      'Compliance & privacy'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce diagnosis time by 50%',
      'Lower healthcare costs',
      'Better patient outcomes'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Hospitals, Clinics, Medical Research, Pharmaceuticals'
  },
  {
    id: 12,
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing campaigns, customer segmentation, and automated marketing.',
    icon: Mail,
    category: 'Marketing AI',
    price: 'Starting at $2,200/month',
    features: [
      'Customer segmentation',
      'Campaign optimization',
      'Content personalization',
      'Lead scoring',
      'Email marketing automation',
      'Social media management',
      'Ad optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 35%',
      'Reduce marketing costs by 40%',
      'Improve customer engagement',
      'Better ROI tracking'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing, E-commerce, SaaS, Agencies'
  },
  {
    id: 13,
    title: 'AI-Powered Voice Analytics',
    description: 'Voice analysis, emotion detection, and speech analytics for customer insights.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,800/month',
    features: [
      'Voice emotion analysis',
      'Speech-to-text conversion',
      'Call sentiment analysis',
      'Speaker identification',
      'Conversation analytics',
      'Quality monitoring',
      'Real-time transcription',
      'Compliance recording'
    ],
    benefits: [
      'Improve customer experience',
      'Better call quality monitoring',
      'Reduce compliance risks',
      'Enhanced training insights'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Call Centers, Customer Service, Sales, Healthcare'
  },
  {
    id: 14,
    title: 'AI-Powered Content Generation',
    description: 'Automated content creation, copywriting, and creative AI solutions.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,800/month',
    features: [
      'Automated copywriting',
      'Content optimization',
      'SEO content generation',
      'Social media posts',
      'Email campaigns',
      'Product descriptions',
      'Blog article generation',
      'Content personalization'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Scale content production',
      'Improve SEO performance',
      'Consistent brand voice'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Agencies'
  },
  {
    id: 15,
    title: 'AI-Powered Process Automation',
    description: 'Intelligent process automation and workflow optimization using AI.',
    icon: Zap,
    category: 'Process AI',
    price: 'Starting at $2,500/month',
    features: [
      'Workflow automation',
      'Process optimization',
      'Task prioritization',
      'Resource allocation',
      'Exception handling',
      'Performance monitoring',
      'Predictive maintenance',
      'Integration capabilities'
    ],
    benefits: [
      'Increase efficiency by 50%',
      'Reduce operational costs by 30%',
      'Improve accuracy by 90%',
      'Better resource utilization'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Finance, Healthcare, Logistics'
  },
  {
    id: 16,
    title: 'AI-Powered Data Analytics',
    description: 'Advanced data analytics, insights generation, and business intelligence.',
    icon: BarChart3,
    category: 'Analytics AI',
    price: 'Starting at $3,200/month',
    features: [
      'Automated insights generation',
      'Pattern recognition',
      'Anomaly detection',
      'Predictive modeling',
      'Data visualization',
      'Real-time analytics',
      'Custom dashboards',
      'API integration'
    ],
    benefits: [
      'Discover hidden insights',
      'Make data-driven decisions',
      'Reduce analysis time by 70%',
      'Improve business performance'
    ],
    marketPrice: '$5,000-15,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Finance, Retail, Manufacturing, Healthcare'
  },
  {
    id: 17,
    title: 'AI-Powered Customer Service',
    description: 'Intelligent customer service automation and support optimization.',
    icon: Users,
    category: 'Customer Service AI',
    price: 'Starting at $2,000/month',
    features: [
      'Intelligent ticket routing',
      'Automated responses',
      'Sentiment analysis',
      'Customer journey mapping',
      'Performance analytics',
      'Multi-channel support',
      'Escalation management',
      'Knowledge base integration'
    ],
    benefits: [
      'Improve response times by 60%',
      'Increase customer satisfaction',
      'Reduce support costs by 50%',
      'Better issue resolution'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Finance'
  },
  {
    id: 18,
    title: 'AI-Powered Image Recognition',
    description: 'Advanced image recognition and classification for various business applications.',
    icon: Camera,
    category: 'Image AI',
    price: 'Starting at $2,200/month',
    features: [
      'Object detection & recognition',
      'Image classification',
      'Facial recognition',
      'Brand logo detection',
      'Quality assessment',
      'Content moderation',
      'Search & retrieval',
      'Custom model training'
    ],
    benefits: [
      'Automate visual tasks',
      'Improve accuracy by 95%',
      'Reduce manual work by 80%',
      'Enable new capabilities'
    ],
    marketPrice: '$3,500-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Retail, Security, Media, Manufacturing'
  },
  {
    id: 19,
    title: 'AI-Powered Financial Analysis',
    description: 'Intelligent financial analysis, risk assessment, and investment insights.',
    icon: DollarSign,
    category: 'Finance AI',
    price: 'Starting at $4,000/month',
    features: [
      'Financial forecasting',
      'Risk assessment',
      'Investment analysis',
      'Credit scoring',
      'Fraud detection',
      'Market analysis',
      'Portfolio optimization',
      'Regulatory compliance'
    ],
    benefits: [
      'Improve investment returns',
      'Reduce financial risks',
      'Automate analysis processes',
      'Better decision making'
    ],
    marketPrice: '$6,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banking, Investment, Insurance, Fintech'
  },
  {
    id: 20,
    title: 'AI-Powered Autonomous Systems',
    description: 'Autonomous vehicle systems, robotics, and intelligent automation solutions.',
    icon: Car,
    category: 'Autonomous AI',
    price: 'Starting at $8,000/month',
    features: [
      'Autonomous navigation',
      'Object detection & avoidance',
      'Path planning',
      'Sensor fusion',
      'Real-time decision making',
      'Safety systems',
      'Performance optimization',
      'Integration capabilities'
    ],
    benefits: [
      'Enable autonomous operations',
      'Improve safety & efficiency',
      'Reduce operational costs',
      '24/7 operation capability'
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Automotive, Logistics, Manufacturing, Agriculture'
  },
  {
    id: 21,
    title: 'AI-Powered Code Generation',
    description: 'Intelligent code generation, debugging, and software development assistance.',
    icon: Code,
    category: 'Development AI',
    price: 'Starting at $2,800/month',
    features: [
      'Automated code generation',
      'Bug detection & fixing',
      'Code optimization',
      'Documentation generation',
      'Test case creation',
      'Code review assistance',
      'Refactoring suggestions',
      'Multi-language support'
    ],
    benefits: [
      'Reduce development time by 60%',
      'Improve code quality',
      'Faster bug resolution',
      'Better documentation'
    ],
    marketPrice: '$4,500-12,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software Development, IT Services, Tech Companies'
  },
  {
    id: 22,
    title: 'AI-Powered Energy Management',
    description: 'Smart energy optimization and sustainability solutions for businesses.',
    icon: Droplets,
    category: 'Energy AI',
    price: 'Starting at $3,500/month',
    features: [
      'Energy consumption analysis',
      'Predictive maintenance',
      'Load optimization',
      'Renewable energy integration',
      'Carbon footprint tracking',
      'Cost optimization',
      'Real-time monitoring',
>>>>>>> main
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
<<<<<<< HEAD
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
=======
      'Improve sustainability',
      'Optimize energy usage',
      'Better environmental compliance'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Manufacturing, Real Estate, Utilities, Data Centers'
  },
  {
    id: 23,
    title: 'AI-Powered Legal Document Analysis',
    description: 'Intelligent legal document processing, contract analysis, and compliance monitoring.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $4,200/month',
    features: [
      'Contract analysis',
      'Legal document review',
      'Compliance monitoring',
      'Risk assessment',
      'Due diligence automation',
      'Legal research assistance',
      'Document classification',
      'Clause extraction'
    ],
    benefits: [
      'Reduce review time by 80%',
      'Improve accuracy by 95%',
      'Lower legal costs',
      'Better risk management'
    ],
    marketPrice: '$6,500-18,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Compliance, Insurance'
  },
  {
    id: 24,
    title: 'AI-Powered Personalization Engine',
    description: 'Advanced personalization and recommendation systems for enhanced user experience.',
    icon: Target,
    category: 'Personalization AI',
    price: 'Starting at $3,000/month',
    features: [
      'User behavior analysis',
      'Personalized content delivery',
      'Dynamic pricing optimization',
      'Cross-channel personalization',
      'A/B testing automation',
      'Real-time adaptation',
      'Privacy-compliant tracking',
      'Performance analytics'
    ],
    benefits: [
      'Increase engagement by 40%',
      'Boost conversion rates by 35%',
      'Improve customer satisfaction',
      'Better user experience'
    ],
    marketPrice: '$4,800-12,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 25,
    title: 'AI-Powered Quality Assurance',
    description: 'Intelligent quality control and testing automation for products and services.',
    icon: CheckCircle,
    category: 'Quality AI',
    price: 'Starting at $2,500/month',
    features: [
      'Automated testing',
      'Defect detection',
      'Quality prediction',
      'Process optimization',
      'Statistical analysis',
      'Root cause analysis',
      'Performance monitoring',
      'Compliance checking'
    ],
    benefits: [
      'Improve quality by 50%',
      'Reduce defects by 70%',
      'Lower testing costs',
      'Faster time to market'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Manufacturing, Software, Healthcare, Food & Beverage'
  },
  {
    id: 26,
    title: 'AI-Powered Talent Acquisition',
    description: 'Intelligent recruitment, candidate screening, and HR optimization solutions.',
    icon: Users,
    category: 'HR AI',
    price: 'Starting at $2,200/month',
    features: [
      'Resume screening',
      'Candidate matching',
      'Interview scheduling',
      'Skills assessment',
      'Bias detection',
      'Performance prediction',
      'Retention analysis',
      'Diversity optimization'
    ],
    benefits: [
      'Reduce hiring time by 50%',
      'Improve candidate quality',
      'Reduce bias in hiring',
      'Better retention rates'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'HR Departments, Recruitment Agencies, Enterprises'
  },
  {
    id: 27,
    title: 'AI-Powered Real Estate Analytics',
    description: 'Property valuation, market analysis, and real estate investment insights.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $3,800/month',
    features: [
      'Property valuation',
      'Market trend analysis',
      'Investment recommendations',
      'Risk assessment',
      'Price prediction',
      'Neighborhood analysis',
      'Rental yield optimization',
      'Market forecasting'
    ],
    benefits: [
      'Improve investment decisions',
      'Reduce valuation errors',
      'Better market insights',
      'Optimize portfolio performance'
    ],
    marketPrice: '$6,000-16,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Real Estate, Investment, Property Management, Developers'
  },
  {
    id: 28,
    title: 'AI-Powered Gaming Intelligence',
    description: 'Intelligent game development, player behavior analysis, and gaming optimization.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $4,500/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Difficulty balancing',
      'Cheat detection',
      'Personalized experiences',
      'Matchmaking optimization',
      'Monetization optimization',
      'Performance analytics'
    ],
    benefits: [
      'Increase player engagement',
      'Reduce development costs',
      'Improve game balance',
      'Better monetization'
    ],
    marketPrice: '$7,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Game Development, Gaming Companies, Esports, Mobile Games'
  },
  {
    id: 29,
    title: 'AI-Powered Climate Analytics',
    description: 'Climate data analysis, environmental monitoring, and sustainability insights.',
    icon: TreePine,
    category: 'Climate AI',
    price: 'Starting at $3,200/month',
    features: [
      'Climate data analysis',
      'Environmental monitoring',
      'Carbon footprint tracking',
      'Weather prediction',
      'Sustainability metrics',
      'Risk assessment',
      'Compliance reporting',
      'Trend analysis'
    ],
    benefits: [
      'Improve sustainability',
      'Reduce environmental impact',
      'Better compliance',
      'Cost optimization'
    ],
    marketPrice: '$5,000-14,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Environmental, Agriculture, Energy, Government'
  },
  {
    id: 30,
    title: 'AI-Powered Voice Cloning',
    description: 'Advanced voice synthesis, cloning, and audio generation for various applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $3,500/month',
    features: [
      'Voice cloning',
      'Text-to-speech synthesis',
      'Voice conversion',
      'Emotion synthesis',
      'Multi-language support',
      'Real-time processing',
      'Voice authentication',
      'Audio enhancement'
    ],
    benefits: [
      'Create realistic voice content',
      'Improve accessibility',
      'Reduce production costs',
      'Enable new applications'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Media, Entertainment, Education, Accessibility'
>>>>>>> main
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Recommendation Systems", count: aiServices.filter(s => s.category === "Recommendation Systems").length },
  { name: "Document AI", count: aiServices.filter(s => s.category === "Document AI").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Process AI", count: aiServices.filter(s => s.category === "Process AI").length },
  { name: "Customer Service AI", count: aiServices.filter(s => s.category === "Customer Service AI").length },
  { name: "Image AI", count: aiServices.filter(s => s.category === "Image AI").length },
  { name: "Finance AI", count: aiServices.filter(s => s.category === "Finance AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Development AI", count: aiServices.filter(s => s.category === "Development AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "Personalization AI", count: aiServices.filter(s => s.category === "Personalization AI").length },
  { name: "Quality AI", count: aiServices.filter(s => s.category === "Quality AI").length },
  { name: "HR AI", count: aiServices.filter(s => s.category === "HR AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Climate AI", count: aiServices.filter(s => s.category === "Climate AI").length }
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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