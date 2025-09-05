import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Layout from './components/Layout';
=======
import Layout from '../components/Layout';
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Settings, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Rocket, 
  Lightbulb, 
  Gamepad2, 
  Droplets, 
  Video, 
  BookOpen, 
  Palette, 
  Truck, 
  Sprout, 
  Atom, 
  Link as LinkIcon, 
  GraduationCap, 
  DollarSign, 
  ShoppingCart, 
<<<<<<< HEAD
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
=======
  Phone, 
  MapPin, 
  ExternalLink,
  Heart,
  Search,
  Mail
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    name: 'Machine Learning Solutions',
    description: 'Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent automation.',
    icon: Brain,
    features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing'],
    pricing: 'Starting at $2,500/month',
    category: 'Core AI',
    popularity: 95
  },
  {
    id: 2,
    name: 'Computer Vision',
    description: 'Image and video analysis, object detection, facial recognition, and visual intelligence.',
    icon: Eye,
    features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis'],
    pricing: 'Starting at $3,000/month',
    category: 'Vision AI',
    popularity: 88
  },
  {
    id: 3,
    name: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, language translation, and conversational AI.',
    icon: MessageSquare,
<<<<<<< HEAD
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
=======
    features: ['Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Chatbots'],
    pricing: 'Starting at $2,000/month',
    category: 'Language AI',
    popularity: 92
  },
  {
    id: 4,
    name: 'Predictive Analytics',
    description: 'Data-driven insights, forecasting, and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Business Forecasting', 'Risk Assessment', 'Trend Analysis', 'Performance Prediction'],
    pricing: 'Starting at $1,800/month',
    category: 'Analytics AI',
    popularity: 85
  },
  {
    id: 5,
    name: 'AI Security Solutions',
    description: 'Intelligent threat detection, fraud prevention, and cybersecurity automation.',
    icon: Shield,
    features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Security Automation'],
    pricing: 'Starting at $4,000/month',
    category: 'Security AI',
    popularity: 90
  },
  {
    id: 6,
    name: 'Quantum AI',
    description: 'Quantum computing integration for complex problem solving and optimization.',
    icon: Atom,
    features: ['Quantum Optimization', 'Complex Problem Solving', 'Advanced Algorithms', 'Quantum ML'],
    pricing: 'Starting at $10,000/month',
    category: 'Quantum AI',
    popularity: 75
  },
  {
    id: 7,
    name: 'Autonomous Systems',
    description: 'Self-driving vehicles, drones, and autonomous robotics solutions.',
    icon: Truck,
    features: ['Autonomous Vehicles', 'Drone Technology', 'Robotic Automation', 'Smart Navigation'],
    pricing: 'Starting at $15,000/month',
    category: 'Autonomous AI',
    popularity: 80
  },
  {
    id: 8,
    name: 'Climate Modeling',
    description: 'Environmental data analysis, climate prediction, and sustainability solutions.',
    icon: Sprout,
    features: ['Climate Prediction', 'Environmental Analysis', 'Sustainability Metrics', 'Carbon Tracking'],
    pricing: 'Starting at $3,500/month',
    category: 'Environmental AI',
    popularity: 70
  },
  {
    id: 9,
    name: 'Brain-Computer Interface',
    description: 'Neural interface technology for direct brain-computer communication.',
    icon: Cpu,
    features: ['Neural Interfaces', 'Brain Signal Processing', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: 'Starting at $25,000/month',
    category: 'Neural AI',
    popularity: 60
  },
  {
    id: 10,
    name: 'Synthetic Biology AI',
    description: 'AI-powered biological system design and genetic engineering.',
    icon: Droplets,
    features: ['Genetic Design', 'Protein Modeling', 'Drug Discovery', 'Biological Optimization'],
    pricing: 'Starting at $8,000/month',
    category: 'Bio AI',
    popularity: 65
  },
  {
    id: 11,
    name: 'Financial Trading AI',
    description: 'Algorithmic trading, market analysis, and financial risk management.',
    icon: DollarSign,
    features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization'],
    pricing: 'Starting at $5,000/month',
    category: 'Financial AI',
    popularity: 88
  },
  {
    id: 12,
    name: 'Energy Grid Optimization',
    description: 'Smart grid management, energy distribution, and renewable energy optimization.',
    icon: Zap,
    features: ['Grid Optimization', 'Energy Distribution', 'Renewable Integration', 'Demand Forecasting'],
    pricing: 'Starting at $6,000/month',
    category: 'Energy AI',
    popularity: 75
  },
  {
    id: 13,
    name: 'Materials Science AI',
    description: 'AI-driven material discovery, property prediction, and design optimization.',
    icon: Settings,
    features: ['Material Discovery', 'Property Prediction', 'Design Optimization', 'Quality Control'],
    pricing: 'Starting at $4,500/month',
    category: 'Materials AI',
    popularity: 70
  },
  {
    id: 14,
    name: 'Social Impact Analytics',
    description: 'AI solutions for social good, impact measurement, and community development.',
    icon: Users,
    features: ['Impact Measurement', 'Social Analytics', 'Community Development', 'Policy Analysis'],
    pricing: 'Starting at $2,000/month',
    category: 'Social AI',
    popularity: 65
  },
  {
    id: 15,
    name: 'Creative Design AI',
    description: 'AI-powered creative tools for design, art, and content generation.',
    icon: Palette,
    features: ['Design Generation', 'Art Creation', 'Content Generation', 'Creative Automation'],
    pricing: 'Starting at $1,500/month',
    category: 'Creative AI',
    popularity: 82
  },
  {
    id: 16,
    name: 'Legal Analytics',
    description: 'AI-powered legal research, document analysis, and case prediction.',
    icon: BookOpen,
    features: ['Legal Research', 'Document Analysis', 'Case Prediction', 'Compliance Monitoring'],
    pricing: 'Starting at $3,200/month',
    category: 'Legal AI',
    popularity: 78
  },
  {
    id: 17,
    name: 'Educational Personalization',
    description: 'Personalized learning experiences, adaptive education, and student analytics.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Education', 'Student Analytics', 'Learning Optimization'],
    pricing: 'Starting at $2,800/month',
    category: 'Education AI',
    popularity: 85
  },
  {
    id: 18,
    name: 'Supply Chain Intelligence',
    description: 'AI-powered supply chain optimization, logistics, and inventory management.',
    icon: Truck,
    features: ['Supply Chain Optimization', 'Logistics Management', 'Inventory Optimization', 'Demand Forecasting'],
    pricing: 'Starting at $4,200/month',
    category: 'Supply Chain AI',
    popularity: 80
  },
  {
    id: 19,
    name: 'Mental Health Support',
    description: 'AI-powered mental health monitoring, therapy assistance, and wellness tracking.',
    icon: Heart,
    features: ['Mental Health Monitoring', 'Therapy Assistance', 'Wellness Tracking', 'Crisis Intervention'],
    pricing: 'Starting at $2,200/month',
    category: 'Health AI',
    popularity: 75
  },
  {
    id: 20,
    name: 'Agricultural Intelligence',
    description: 'Smart farming, crop optimization, and agricultural automation solutions.',
    icon: Sprout,
    features: ['Crop Optimization', 'Smart Farming', 'Agricultural Automation', 'Yield Prediction'],
    pricing: 'Starting at $3,800/month',
    category: 'Agricultural AI',
    popularity: 70
  },
  {
    id: 21,
    name: 'Environmental Monitoring',
    description: 'AI-powered environmental monitoring, pollution detection, and ecosystem analysis.',
    icon: Globe,
    features: ['Pollution Detection', 'Ecosystem Analysis', 'Environmental Monitoring', 'Climate Tracking'],
    pricing: 'Starting at $2,500/month',
    category: 'Environmental AI',
    popularity: 68
  },
  {
    id: 22,
    name: 'Virtual Reality AI',
    description: 'AI-enhanced VR experiences, virtual environments, and immersive technologies.',
    icon: Video,
    features: ['VR Enhancement', 'Virtual Environments', 'Immersive Experiences', 'Spatial Computing'],
    pricing: 'Starting at $5,500/month',
    category: 'VR AI',
    popularity: 72
  },
  {
    id: 23,
    name: 'Blockchain Analytics',
    description: 'AI-powered blockchain analysis, cryptocurrency insights, and DeFi optimization.',
    icon: Database,
    features: ['Blockchain Analysis', 'Cryptocurrency Insights', 'DeFi Optimization', 'Smart Contract Analysis'],
    pricing: 'Starting at $4,800/month',
    category: 'Blockchain AI',
    popularity: 77
  },
  {
    id: 24,
    name: 'Gaming Intelligence',
    description: 'AI-powered game development, player analytics, and intelligent game design.',
    icon: Gamepad2,
    features: ['Game Development', 'Player Analytics', 'Intelligent Design', 'Procedural Generation'],
    pricing: 'Starting at $3,500/month',
    category: 'Gaming AI',
    popularity: 80
  },
  {
    id: 25,
    name: 'Research Assistant',
    description: 'AI-powered research tools, data analysis, and scientific discovery assistance.',
    icon: BookOpen,
    features: ['Research Tools', 'Data Analysis', 'Scientific Discovery', 'Literature Review'],
    pricing: 'Starting at $2,200/month',
    category: 'Research AI',
    popularity: 85
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
  }
];

const categories = [
<<<<<<< HEAD
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
=======
  { name: 'All', count: aiServices.length },
  { name: 'Core AI', count: aiServices.filter(s => s.category === 'Core AI').length },
  { name: 'Vision AI', count: aiServices.filter(s => s.category === 'Vision AI').length },
  { name: 'Language AI', count: aiServices.filter(s => s.category === 'Language AI').length },
  { name: 'Analytics AI', count: aiServices.filter(s => s.category === 'Analytics AI').length },
  { name: 'Security AI', count: aiServices.filter(s => s.category === 'Security AI').length },
  { name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
  { name: 'Autonomous AI', count: aiServices.filter(s => s.category === 'Autonomous AI').length },
  { name: 'Environmental AI', count: aiServices.filter(s => s.category === 'Environmental AI').length },
  { name: 'Neural AI', count: aiServices.filter(s => s.category === 'Neural AI').length },
  { name: 'Bio AI', count: aiServices.filter(s => s.category === 'Bio AI').length },
  { name: 'Financial AI', count: aiServices.filter(s => s.category === 'Financial AI').length },
  { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length },
  { name: 'Materials AI', count: aiServices.filter(s => s.category === 'Materials AI').length },
  { name: 'Social AI', count: aiServices.filter(s => s.category === 'Social AI').length },
  { name: 'Creative AI', count: aiServices.filter(s => s.category === 'Creative AI').length },
  { name: 'Legal AI', count: aiServices.filter(s => s.category === 'Legal AI').length },
  { name: 'Education AI', count: aiServices.filter(s => s.category === 'Education AI').length },
  { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
  { name: 'Health AI', count: aiServices.filter(s => s.category === 'Health AI').length },
  { name: 'Agricultural AI', count: aiServices.filter(s => s.category === 'Agricultural AI').length },
  { name: 'VR AI', count: aiServices.filter(s => s.category === 'VR AI').length },
  { name: 'Blockchain AI', count: aiServices.filter(s => s.category === 'Blockchain AI').length },
  { name: 'Gaming AI', count: aiServices.filter(s => s.category === 'Gaming AI').length },
  { name: 'Research AI', count: aiServices.filter(s => s.category === 'Research AI').length }
];

export default function AIServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI solutions including machine learning, computer vision, natural language processing, and advanced AI technologies for your business."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              AI Services
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                & Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your business with cutting-edge AI technologies. From machine learning 
              to quantum computing, we provide comprehensive AI solutions tailored to your needs.
            </motion.p>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
<<<<<<< HEAD
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
=======
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg font-semibold"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{service.popularity}%</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {service.pricing}
                  </span>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you choose the right solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Get AI Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> fd81623f34e3b84c2b325c5baeabd49310d8e0d9
    </Layout>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
