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
    targetUsers: 'Schools, Universities, Online education, Corporate training'
  },

  // Advanced AI Innovation Services
  {
    id: 25,
    title: 'AI-Powered Cybersecurity Intelligence',
    description: 'Next-generation AI security platform with threat hunting, behavioral analysis, and automated incident response.',
    icon: Shield,
    category: 'AI Security',
    price: 'Starting at $4,200/month',
    features: [
      'AI threat hunting & detection',
      'Behavioral anomaly analysis',
      'Automated incident response',
      'Zero-day vulnerability detection',
      'Real-time threat intelligence',
      'Advanced persistent threat (APT) detection',
      'Security orchestration & automation',
      'Compliance monitoring & reporting'
    ],
    benefits: [
      'Detect threats 10x faster than traditional methods',
      'Reduce false positives by 85%',
      'Automate 90% of security responses',
      'Prevent 99.7% of cyber attacks'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Financial services, Healthcare, Government, Enterprise'
  },
  {
    id: 26,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $3,800/month',
    features: [
      'Demand forecasting & planning',
      'Inventory optimization algorithms',
      'Route optimization & logistics',
      'Supplier risk assessment',
      'Real-time supply chain monitoring',
      'Automated procurement decisions',
      'Quality control automation',
      'Sustainability optimization'
    ],
    benefits: [
      'Reduce inventory costs by 30%',
      'Improve demand accuracy by 45%',
      'Optimize logistics costs by 25%',
      'Increase supply chain resilience by 60%'
    ],
    marketPrice: '$5,500-12,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce'
  },
  {
    id: 27,
    title: 'AI Voice & Speech Technology',
    description: 'Advanced voice AI solutions including speech recognition, voice synthesis, and conversational interfaces.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $2,600/month',
    features: [
      'Multi-language speech recognition',
      'Natural voice synthesis',
      'Voice biometric authentication',
      'Real-time voice translation',
      'Voice emotion analysis',
      'Custom voice cloning',
      'Voice command processing',
      'Audio content generation'
    ],
    benefits: [
      'Achieve 98%+ speech accuracy',
      'Support 50+ languages',
      'Reduce voice processing time by 70%',
      'Enable hands-free operations'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Call centers, Healthcare, Automotive, Smart devices'
  },
  {
    id: 28,
    title: 'AI Financial Technology Solutions',
    description: 'Comprehensive FinTech AI including fraud detection, algorithmic trading, and risk management.',
    icon: DollarSign,
    category: 'FinTech AI',
    price: 'Starting at $4,500/month',
    features: [
      'Real-time fraud detection',
      'Algorithmic trading systems',
      'Credit risk assessment',
      'Regulatory compliance automation',
      'Anti-money laundering (AML) detection',
      'Market sentiment analysis',
      'Automated financial reporting',
      'Robo-advisory services'
    ],
    benefits: [
      'Detect fraud with 99.5% accuracy',
      'Reduce false positives by 80%',
      'Improve trading performance by 35%',
      'Ensure 100% regulatory compliance'
    ],
    marketPrice: '$7,000-18,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Banks, Investment firms, Insurance, FinTech startups'
  },
  {
    id: 29,
    title: 'AI Healthcare Diagnostics & Treatment',
    description: 'Advanced AI medical solutions for diagnosis, treatment planning, and patient care optimization.',
    icon: Stethoscope,
    category: 'Healthcare AI',
    price: 'Starting at $5,200/month',
    features: [
      'Medical image analysis & diagnosis',
      'Drug interaction checking',
      'Treatment recommendation engine',
      'Patient risk stratification',
      'Clinical trial matching',
      'Medical record analysis',
      'Symptom checker & triage',
      'Telemedicine AI support'
    ],
    benefits: [
      'Improve diagnostic accuracy by 40%',
      'Reduce misdiagnosis by 60%',
      'Accelerate treatment decisions by 50%',
      'Enhance patient outcomes by 35%'
    ],
    marketPrice: '$8,000-25,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Hospitals, Clinics, Medical research, Telemedicine'
  },
  {
    id: 30,
    title: 'AI Autonomous Vehicle Technology',
    description: 'Complete AI solutions for autonomous vehicles including perception, decision-making, and safety systems.',
    icon: Car,
    category: 'Autonomous AI',
    price: 'Starting at $6,500/month',
    features: [
      'Advanced perception systems',
      'Path planning & navigation',
      'Object detection & tracking',
      'Predictive maintenance',
      'Fleet management optimization',
      'Safety monitoring & alerts',
      'Weather adaptation algorithms',
      'Real-time decision making'
    ],
    benefits: [
      'Achieve Level 4+ autonomy',
      'Reduce accidents by 90%',
      'Optimize fuel efficiency by 25%',
      'Enable 24/7 autonomous operations'
    ],
    marketPrice: '$10,000-30,000/month',
    setupTime: '12-24 weeks',
    targetUsers: 'Automotive OEMs, Fleet operators, Transportation, Logistics'
  },
  {
    id: 31,
    title: 'AI Content Creation & Marketing',
    description: 'Comprehensive AI marketing platform for content generation, campaign optimization, and customer engagement.',
    icon: FileText,
    category: 'Marketing AI',
    price: 'Starting at $2,200/month',
    features: [
      'AI content generation & optimization',
      'Personalized marketing campaigns',
      'Customer behavior prediction',
      'A/B testing automation',
      'Social media management',
      'Email marketing optimization',
      'SEO content optimization',
      'Performance analytics & insights'
    ],
    benefits: [
      'Increase content production by 300%',
      'Improve campaign ROI by 45%',
      'Boost engagement rates by 60%',
      'Reduce marketing costs by 40%'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Marketing agencies, E-commerce, SaaS companies, Content creators'
  },
  {
    id: 32,
    title: 'AI Energy & Utilities Optimization',
    description: 'Smart energy management solutions with predictive maintenance, grid optimization, and renewable energy integration.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $3,200/month',
    features: [
      'Smart grid optimization',
      'Predictive maintenance for equipment',
      'Energy consumption forecasting',
      'Renewable energy integration',
      'Demand response management',
      'Power quality monitoring',
      'Carbon footprint tracking',
      'Energy trading optimization'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Improve grid efficiency by 25%',
      'Extend equipment life by 40%',
      'Increase renewable energy usage by 50%'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Utility companies, Energy providers, Industrial facilities, Smart cities'
  },
  {
    id: 33,
    title: 'AI Legal Technology & Compliance',
    description: 'AI-powered legal solutions for document analysis, contract review, and regulatory compliance automation.',
    icon: BookOpen,
    category: 'Legal AI',
    price: 'Starting at $3,600/month',
    features: [
      'Contract analysis & review',
      'Legal document generation',
      'Compliance monitoring',
      'Case law research & analysis',
      'Risk assessment & mitigation',
      'Due diligence automation',
      'Legal precedent analysis',
      'Regulatory change tracking'
    ],
    benefits: [
      'Reduce contract review time by 80%',
      'Improve compliance accuracy by 95%',
      'Lower legal costs by 50%',
      'Accelerate due diligence by 70%'
    ],
    marketPrice: '$5,500-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Law firms, Corporate legal, Government, Compliance teams'
  },
  {
    id: 34,
    title: 'AI Agriculture & Food Technology',
    description: 'Smart agriculture solutions with crop monitoring, yield prediction, and sustainable farming optimization.',
    icon: Sprout,
    category: 'AgTech AI',
    price: 'Starting at $2,800/month',
    features: [
      'Crop health monitoring',
      'Yield prediction & optimization',
      'Precision agriculture tools',
      'Weather-based recommendations',
      'Pest & disease detection',
      'Soil analysis & optimization',
      'Irrigation management',
      'Supply chain traceability'
    ],
    benefits: [
      'Increase crop yields by 25%',
      'Reduce water usage by 40%',
      'Minimize pesticide use by 30%',
      'Improve food quality & safety'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Farmers, Agribusiness, Food companies, Research institutions'
  },
  {
    id: 35,
    title: 'AI Gaming & Entertainment',
    description: 'Advanced AI for game development, player behavior analysis, and personalized entertainment experiences.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $2,400/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'NPC intelligence & dialogue',
      'Real-time game balancing',
      'Cheat detection & prevention',
      'Personalized recommendations',
      'Esports analytics & insights'
    ],
    benefits: [
      'Increase player engagement by 50%',
      'Reduce development time by 40%',
      'Improve game balance & fairness',
      'Enhance player retention by 35%'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Game studios, Entertainment companies, Esports, Streaming platforms'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Climate", count: aiServices.filter(s => s.category === "AI Climate").length },
  { name: "AI Space", count: aiServices.filter(s => s.category === "AI Space").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length }
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
      </Head>
      <div className="min-h-screen bg-gray-50">
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
    }
  ];
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
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Quantum AI", count: aiServices.filter(s => s.category === "Quantum AI").length },
  { name: "AI Healthcare", count: aiServices.filter(s => s.category === "AI Healthcare").length },
  { name: "AI Climate", count: aiServices.filter(s => s.category === "AI Climate").length },
  { name: "AI Space", count: aiServices.filter(s => s.category === "AI Space").length },
  { name: "AI Security", count: aiServices.filter(s => s.category === "AI Security").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "FinTech AI", count: aiServices.filter(s => s.category === "FinTech AI").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "Autonomous AI", count: aiServices.filter(s => s.category === "Autonomous AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Energy AI", count: aiServices.filter(s => s.category === "Energy AI").length },
  { name: "Legal AI", count: aiServices.filter(s => s.category === "Legal AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length }
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
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100+ Cutting-Edge Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive AI services including machine learning, 
                computer vision, NLP, analytics, and automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services designed to transform your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">{service.price}</span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600">Setup: {service.setupTime}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Target: {service.targetUsers}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
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
                  📞 <strong>Call us:</strong> +1 302 464 0950
                </p>
                <p className="text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> 364 E Main St STE 1008 Middletown DE 19709
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
