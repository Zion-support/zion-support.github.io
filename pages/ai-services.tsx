import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
<<<<<<< HEAD
  BarChart3, 
  MessageSquare, 
  Settings, 
  Target, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Car,
  TrendingUp
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI analytics and reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
  },
  {
    title: 'AI Customer Support',
    description: '24/7 intelligent customer service with natural language processing and sentiment analysis.',
    icon: MessageSquare,
    features: ['Chatbot Integration', 'Sentiment Analysis', 'Multi-language Support', 'Escalation Management'],
    price: 'Starting at $1,800/month',
    category: 'Customer Service'
  },
  {
    title: 'AI Project Management',
    description: 'Streamline project workflows with AI-powered task optimization and resource allocation.',
    icon: Settings,
    features: ['Task Automation', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking'],
    price: 'Starting at $3,200/month',
    category: 'Productivity'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Personalize customer experiences and optimize marketing campaigns with AI-driven insights.',
    icon: Target,
    features: ['Personalization Engine', 'Campaign Optimization', 'Customer Segmentation', 'ROI Analysis'],
    price: 'Starting at $2,100/month',
    category: 'Marketing'
  },
  {
    title: 'AI Enterprise Automation',
    description: 'Automate complex business processes with intelligent workflow management and decision support.',
    icon: Building,
    features: ['Process Automation', 'Decision Support', 'Compliance Monitoring', 'Workflow Optimization'],
    price: 'Starting at $5,000/month',
    category: 'Enterprise'
  },
  {
    title: 'AI Security Solutions',
    description: 'Advanced threat detection and prevention with AI-powered security monitoring and response.',
    icon: Brain,
    features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Security Analytics'],
    price: 'Starting at $4,500/month',
    category: 'Security'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered medical diagnosis and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and algorithmic trading' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
=======
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
  Atom,
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
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Education'
  },
  {
    id: 6,
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
      'Sustainability reporting'
    ],
    benefits: [
      'Reduce energy costs by 25%',
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
  },
  {
    id: 31,
    title: 'AI-Powered Drug Discovery',
    description: 'Machine learning algorithms for pharmaceutical research, drug design, and molecular analysis.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $8,000/month',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Compound optimization',
      'Toxicity prediction',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing',
      'ADMET prediction'
    ],
    benefits: [
      'Reduce drug development time by 50%',
      'Lower R&D costs by 40%',
      'Improve success rates by 30%',
      'Accelerate breakthrough discoveries'
    ],
    marketPrice: '$15,000-50,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical, Biotech, Research, Healthcare'
  },
  {
    id: 32,
    title: 'AI-Powered Autonomous Vehicles',
    description: 'Computer vision and machine learning for autonomous vehicle navigation and safety systems.',
    icon: Car,
    category: 'Autonomous Systems',
    price: 'Starting at $12,000/month',
    features: [
      'Object detection & tracking',
      'Path planning & navigation',
      'Sensor fusion',
      'Real-time decision making',
      'Safety monitoring',
      'Traffic prediction',
      'Weather adaptation',
      'Fleet management'
    ],
    benefits: [
      'Improve safety by 90%',
      'Reduce traffic accidents',
      'Optimize fuel efficiency',
      'Enable new mobility solutions'
    ],
    marketPrice: '$25,000-100,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Automotive, Transportation, Logistics, Ride-sharing'
  },
  {
    id: 33,
    title: 'AI-Powered Space Exploration',
    description: 'Machine learning for satellite data analysis, space mission planning, and astronomical research.',
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $15,000/month',
    features: [
      'Satellite image analysis',
      'Orbital mechanics optimization',
      'Space weather prediction',
      'Mission planning',
      'Astronomical data processing',
      'Space debris tracking',
      'Planetary exploration',
      'Communication optimization'
    ],
    benefits: [
      'Improve mission success rates',
      'Optimize resource utilization',
      'Enable new discoveries',
      'Reduce mission costs'
    ],
    marketPrice: '$30,000-150,000/month',
    setupTime: '16-32 weeks',
    targetUsers: 'Space Agencies, Aerospace, Research, Defense'
  },
  {
    id: 34,
    title: 'AI-Powered Quantum Computing',
    description: 'Machine learning algorithms optimized for quantum computing systems and quantum advantage.',
    icon: Atom,
    category: 'Quantum AI',
    price: 'Starting at $20,000/month',
    features: [
      'Quantum algorithm development',
      'Quantum machine learning',
      'Quantum optimization',
      'Quantum error correction',
      'Quantum simulation',
      'Hybrid classical-quantum systems',
      'Quantum cryptography',
      'Quantum advantage analysis'
    ],
    benefits: [
      'Exponential computational speedup',
      'Solve intractable problems',
      'Enable quantum advantage',
      'Revolutionize computing'
    ],
    marketPrice: '$50,000-500,000/month',
    setupTime: '20-40 weeks',
    targetUsers: 'Research, Finance, Cryptography, Scientific Computing'
  },
  {
    id: 35,
    title: 'AI-Powered Metaverse Platform',
    description: 'AI-driven virtual worlds, avatars, and immersive experiences for the metaverse.',
    icon: Globe,
    category: 'Metaverse AI',
    price: 'Starting at $6,000/month',
    features: [
      'Virtual world generation',
      'AI-powered avatars',
      'Natural language interaction',
      'Behavioral simulation',
      'Content generation',
      'Social interaction AI',
      'Virtual economy',
      'Cross-platform integration'
    ],
    benefits: [
      'Create immersive experiences',
      'Enable virtual economies',
      'Improve user engagement',
      'Scale virtual worlds'
    ],
    marketPrice: '$12,000-60,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Gaming, Social Media, Education, Entertainment'
  },
  {
    id: 36,
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Advanced AI systems for threat detection, security analysis, and cyber defense.',
    icon: Shield,
    category: 'Cybersecurity AI',
    price: 'Starting at $4,500/month',
    features: [
      'Threat intelligence analysis',
      'Anomaly detection',
      'Attack pattern recognition',
      'Automated response',
      'Vulnerability assessment',
      'Security orchestration',
      'Incident investigation',
      'Predictive security'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 80%',
      'Automate security responses',
      'Improve security posture'
    ],
    marketPrice: '$8,000-30,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Finance, Government, Healthcare, Enterprise'
  },
  {
    id: 37,
    title: 'AI-Powered Smart Cities',
    description: 'Intelligent urban planning, traffic management, and city optimization systems.',
    icon: Building,
    category: 'Smart Cities AI',
    price: 'Starting at $7,000/month',
    features: [
      'Traffic flow optimization',
      'Energy consumption analysis',
      'Waste management optimization',
      'Public safety monitoring',
      'Infrastructure planning',
      'Citizen service automation',
      'Environmental monitoring',
      'Urban growth prediction'
    ],
    benefits: [
      'Reduce traffic congestion by 40%',
      'Lower energy consumption by 25%',
      'Improve citizen services',
      'Optimize urban planning'
    ],
    marketPrice: '$15,000-80,000/month',
    setupTime: '12-20 weeks',
    targetUsers: 'Government, Urban Planning, Transportation, Utilities'
  },
  {
    id: 38,
    title: 'AI-Powered Precision Agriculture',
    description: 'Machine learning for crop optimization, soil analysis, and agricultural automation.',
    icon: Sprout,
    category: 'Agriculture AI',
    price: 'Starting at $3,000/month',
    features: [
      'Crop yield prediction',
      'Soil analysis & optimization',
      'Pest & disease detection',
      'Irrigation optimization',
      'Harvest timing',
      'Weather prediction',
      'Resource allocation',
      'Sustainability tracking'
    ],
    benefits: [
      'Increase crop yields by 30%',
      'Reduce water usage by 40%',
      'Minimize pesticide use',
      'Improve sustainability'
    ],
    marketPrice: '$6,000-25,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Agriculture, Farming, Food Production, Research'
  },
  {
    id: 39,
    title: 'AI-Powered Mental Health Support',
    description: 'Intelligent mental health monitoring, therapy assistance, and wellness optimization.',
    icon: Heart,
    category: 'Mental Health AI',
    price: 'Starting at $2,500/month',
    features: [
      'Mood analysis & tracking',
      'Therapy session optimization',
      'Crisis intervention',
      'Wellness recommendations',
      'Medication adherence',
      'Social support matching',
      'Progress monitoring',
      'Personalized treatment'
    ],
    benefits: [
      'Improve treatment outcomes',
      'Provide 24/7 support',
      'Reduce healthcare costs',
      'Increase accessibility'
    ],
    marketPrice: '$5,000-20,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Healthcare, Mental Health, Wellness, Insurance'
  },
  {
    id: 40,
    title: 'AI-Powered Legal Research',
    description: 'Intelligent legal document analysis, case research, and legal decision support.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $3,500/month',
    features: [
      'Legal document analysis',
      'Case law research',
      'Contract review',
      'Legal precedent analysis',
      'Risk assessment',
      'Compliance checking',
      'Legal writing assistance',
      'Due diligence automation'
    ],
    benefits: [
      'Reduce research time by 70%',
      'Improve accuracy by 90%',
      'Lower legal costs',
      'Faster case preparation'
    ],
    marketPrice: '$7,000-35,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Law Firms, Corporate Legal, Government, Compliance'
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
>>>>>>> main
];

export default function AIServices() {
  return (
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including business intelligence, customer support, and automation services." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
=======
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
>>>>>>> main
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From predictive analytics to intelligent automation, we deliver AI solutions that drive real business value.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/micro-saas"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Micro SaaS
                </Link>
=======
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
>>>>>>> main
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive measurable business outcomes.
=======
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
>>>>>>> main
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
<<<<<<< HEAD
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Get Started
                  </Link>
=======
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
>>>>>>> main
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/it-services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View IT Services
                </Link>
=======
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
>>>>>>> main
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}