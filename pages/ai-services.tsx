import React from 'react';
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
    title: 'AI-Powered Process Automation',
    description: 'Intelligent automation platform that learns and optimizes business processes using advanced AI algorithms.',
    icon: Settings,
    features: ['Process Mining', 'Intelligent Automation', 'Workflow Optimization', 'Exception Handling', 'Performance Analytics', 'ROI Tracking'],
    pricing: '$5,000 - $30,000/project',
    category: 'Process Automation',
    popular: true,
    benefits: ['Cost Reduction', 'Efficiency Gains', 'Error Elimination', 'Scalability', 'Better Compliance'],
    marketPrice: '$8,000 - $45,000/project',
    link: 'https://ziontechgroup.com/ai-process-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Intelligent Document Processing',
    description: 'AI-powered document analysis, extraction, and intelligent categorization for business documents.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Smart Categorization', 'Version Control', 'Search & Retrieval', 'Compliance Tracking'],
    pricing: '$3,000 - $20,000/project',
    category: 'Document Intelligence',
    popular: true,
    benefits: ['Time Savings', 'Accuracy Improvement', 'Better Organization', 'Easy Retrieval', 'Cost Reduction'],
    marketPrice: '$5,000 - $30,000/project',
    link: 'https://ziontechgroup.com/intelligent-document-processing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Email Intelligence',
    description: 'Advanced email automation with sentiment analysis, smart routing, and personalized responses.',
    icon: Mail,
    features: ['Sentiment Analysis', 'Smart Routing', 'Auto-categorization', 'Personalized Responses', 'A/B Testing', 'Performance Metrics'],
    pricing: '$2,000 - $15,000/project',
    category: 'Communication AI',
    popular: true,
    benefits: ['Faster Response Times', 'Better Customer Service', 'Reduced Workload', 'Improved Satisfaction', 'Higher Conversion'],
    marketPrice: '$3,500 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-email-intelligence',
    contact: '+1 302 464 0950'
  },

  // Machine Learning & Predictive Analytics
  {
    title: 'Advanced Predictive Analytics',
    description: 'Comprehensive predictive modeling platform with machine learning algorithms for business forecasting.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'ML Models', 'Real-time Predictions', 'Custom Dashboards', 'Model Management', 'A/B Testing'],
    pricing: '$8,000 - $50,000/project',
    category: 'Predictive Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Risk Mitigation', 'Revenue Optimization', 'Competitive Advantage', 'Better Planning'],
    marketPrice: '$12,000 - $75,000/project',
    link: 'https://ziontechgroup.com/predictive-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Machine Learning Model Development',
    description: 'Custom machine learning model development and deployment for specific business use cases.',
    icon: Brain,
    features: ['Model Training', 'Feature Engineering', 'Model Validation', 'Deployment', 'Monitoring', 'Continuous Learning'],
    pricing: '$10,000 - $60,000/project',
    category: 'Machine Learning',
    popular: true,
    benefits: ['Custom Solutions', 'Better Accuracy', 'Business-Specific', 'Scalable Models', 'Future-Proof'],
    marketPrice: '$15,000 - $90,000/project',
    link: 'https://ziontechgroup.com/ml-model-development',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection system using machine learning to identify and prevent fraudulent activities.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'False Positive Reduction', 'Compliance'],
    pricing: '$15,000 - $80,000/project',
    category: 'Security AI',
    popular: true,
    benefits: ['Fraud Prevention', 'Cost Savings', 'Risk Reduction', 'Compliance', 'Customer Trust'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-fraud-detection',
    contact: '+1 302 464 0950'
  },

  // Computer Vision & Image Processing
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics', 'Quality Control', 'Real-time Processing'],
    pricing: '$5,000 - $35,000/project',
    category: 'Computer Vision',
    popular: true,
    benefits: ['Automation', 'Accuracy Improvement', 'Cost Reduction', '24/7 Monitoring', 'Quality Assurance'],
    marketPrice: '$8,000 - $50,000/project',
    link: 'https://ziontechgroup.com/computer-vision-solutions',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Medical Imaging',
    description: 'Advanced medical image analysis for diagnosis, treatment planning, and patient monitoring.',
    icon: Heart,
    features: ['Image Analysis', 'Diagnosis Support', 'Treatment Planning', 'Patient Monitoring', 'Report Generation', 'Integration'],
    pricing: '$25,000 - $150,000/project',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Better Diagnosis', 'Faster Treatment', 'Cost Reduction', 'Improved Outcomes', 'Compliance'],
    marketPrice: '$40,000 - $200,000/project',
    link: 'https://ziontechgroup.com/ai-medical-imaging',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Surveillance System',
    description: 'AI-powered surveillance system with real-time threat detection and behavioral analysis.',
    icon: Camera,
    features: ['Real-time Monitoring', 'Threat Detection', 'Behavioral Analysis', 'Alert System', 'Video Analytics', 'Integration'],
    pricing: '$10,000 - $60,000/project',
    category: 'Security AI',
    popular: true,
    benefits: ['Enhanced Security', 'Real-time Alerts', 'Cost Efficiency', 'Better Coverage', 'Automated Response'],
    marketPrice: '$15,000 - $90,000/project',
    link: 'https://ziontechgroup.com/smart-surveillance',
    contact: '+1 302 464 0950'
  },

  // Natural Language Processing
  {
    title: 'Natural Language Processing Platform',
    description: 'Advanced NLP platform for text analysis, sentiment analysis, and language understanding.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Sentiment Detection', 'Language Translation', 'Content Moderation', 'Intent Recognition', 'Multi-language'],
    pricing: '$4,000 - $25,000/project',
    category: 'NLP',
    popular: true,
    benefits: ['Better Understanding', 'Automated Processing', 'Cost Reduction', 'Scalability', 'Multilingual Support'],
    marketPrice: '$6,000 - $35,000/project',
    link: 'https://ziontechgroup.com/nlp-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Chatbots',
    description: 'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    features: ['Natural Conversations', 'Multi-channel', 'Context Awareness', 'Integration', 'Analytics', 'Customization'],
    pricing: '$3,000 - $20,000/project',
    category: 'Conversational AI',
    popular: true,
    benefits: ['24/7 Support', 'Cost Reduction', 'Better Service', 'Scalability', 'Customer Satisfaction'],
    marketPrice: '$5,000 - $30,000/project',
    link: 'https://ziontechgroup.com/ai-chatbots',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Voice AI Solutions',
    description: 'Advanced voice recognition and synthesis for voice assistants and voice-enabled applications.',
    icon: Mic,
    features: ['Speech Recognition', 'Voice Synthesis', 'Natural Language', 'Multi-language', 'Integration', 'Customization'],
    pricing: '$5,000 - $30,000/project',
    category: 'Voice AI',
    popular: true,
    benefits: ['Hands-free Operation', 'Better Accessibility', 'Cost Efficiency', 'User Experience', 'Innovation'],
    marketPrice: '$8,000 - $45,000/project',
    link: 'https://ziontechgroup.com/voice-ai-solutions',
    contact: '+1 302 464 0950'
  },

  // AI Content & Marketing
  {
    title: 'AI Content Generation Platform',
    description: 'Automated content creation for marketing, documentation, and creative writing using advanced AI models.',
    icon: FileText,
    features: ['Content Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice', 'Plagiarism Check', 'A/B Testing'],
    pricing: '$2,000 - $15,000/project',
    category: 'Content AI',
    popular: true,
    benefits: ['Faster Production', 'Cost Reduction', 'Consistency', 'SEO Benefits', 'Scalability'],
    marketPrice: '$3,500 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-content-generation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing automation platform with AI-driven personalization and optimization.',
    icon: Target,
    features: ['Personalization', 'Campaign Optimization', 'Predictive Analytics', 'A/B Testing', 'ROI Tracking', 'Integration'],
    pricing: '$5,000 - $30,000/project',
    category: 'Marketing AI',
    popular: true,
    benefits: ['Better Targeting', 'Higher Conversion', 'Cost Efficiency', 'ROI Improvement', 'Automation'],
    marketPrice: '$8,000 - $45,000/project',
    link: 'https://ziontechgroup.com/ai-marketing-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Social Media Management',
    description: 'Intelligent social media management with automated posting, engagement, and analytics.',
    icon: Users,
    features: ['Auto-posting', 'Engagement Analysis', 'Content Optimization', 'Scheduling', 'Analytics', 'Multi-platform'],
    pricing: '$1,500 - $10,000/project',
    category: 'Social Media AI',
    popular: true,
    benefits: ['Time Savings', 'Better Engagement', 'Consistent Posting', 'Analytics', 'Growth'],
    marketPrice: '$2,500 - $15,000/project',
    link: 'https://ziontechgroup.com/ai-social-media',
    contact: '+1 302 464 0950'
  },

  // AI for Business Intelligence
  {
    title: 'AI Business Intelligence Platform',
    description: 'Comprehensive BI platform with AI-powered insights, forecasting, and automated reporting.',
    icon: PieChart,
    features: ['Data Visualization', 'Predictive Insights', 'Automated Reports', 'Custom Dashboards', 'Real-time Analytics', 'Integration'],
    pricing: '$8,000 - $50,000/project',
    category: 'Business Intelligence',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Time Savings', 'Better Insights', 'Competitive Advantage', 'ROI Improvement'],
    marketPrice: '$12,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and optimization algorithms.',
    icon: Truck,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management', 'Cost Optimization', 'Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Supply Chain AI',
    popular: true,
    benefits: ['Cost Reduction', 'Efficiency Improvement', 'Risk Mitigation', 'Better Planning', 'Competitive Edge'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-supply-chain',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Analytics Platform',
    description: 'Advanced customer analytics with behavioral insights, churn prediction, and personalization.',
    icon: TrendingUp,
    features: ['Behavioral Analysis', 'Churn Prediction', 'Segmentation', 'Personalization', 'Lifetime Value', 'Retention'],
    pricing: '$6,000 - $35,000/project',
    category: 'Customer Analytics',
    popular: true,
    benefits: ['Better Understanding', 'Retention Improvement', 'Revenue Growth', 'Personalization', 'Competitive Advantage'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/ai-customer-analytics',
    contact: '+1 302 464 0950'
  },

  // AI for E-commerce & Retail
  {
    title: 'AI E-commerce Personalization',
    description: 'Intelligent e-commerce platform with personalized recommendations and dynamic pricing.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Dynamic Pricing', 'Search Optimization', 'Inventory Management', 'Customer Insights', 'A/B Testing'],
    pricing: '$10,000 - $60,000/project',
    category: 'E-commerce AI',
    popular: true,
    benefits: ['Higher Conversion', 'Better Experience', 'Revenue Growth', 'Cost Efficiency', 'Competitive Edge'],
    marketPrice: '$15,000 - $90,000/project',
    link: 'https://ziontechgroup.com/ai-ecommerce-personalization',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Inventory Management',
    description: 'Intelligent inventory management with demand forecasting and automated reordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Price Optimization', 'Analytics', 'Integration'],
    pricing: '$8,000 - $45,000/project',
    category: 'Inventory AI',
    popular: true,
    benefits: ['Cost Reduction', 'Stock Optimization', 'Automation', 'Better Planning', 'ROI Improvement'],
    marketPrice: '$12,000 - $65,000/project',
    link: 'https://ziontechgroup.com/ai-inventory-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Visual Search Engine',
    description: 'Advanced visual search technology for finding products using images and visual similarity.',
    icon: Search,
    features: ['Image Recognition', 'Visual Similarity', 'Product Matching', 'Search Optimization', 'Mobile Support', 'Integration'],
    pricing: '$12,000 - $70,000/project',
    category: 'Visual Search AI',
    popular: true,
    benefits: ['Better Search', 'User Experience', 'Conversion Improvement', 'Innovation', 'Competitive Advantage'],
    marketPrice: '$18,000 - $100,000/project',
    link: 'https://ziontechgroup.com/ai-visual-search',
    contact: '+1 302 464 0950'
  },

  // AI for Finance & Fintech
  {
    title: 'AI Financial Risk Assessment',
    description: 'Advanced financial risk analysis using machine learning for credit scoring and risk management.',
    icon: DollarSign,
    features: ['Credit Scoring', 'Risk Analysis', 'Fraud Detection', 'Compliance', 'Real-time Monitoring', 'Reporting'],
    pricing: '$20,000 - $100,000/project',
    category: 'Fintech AI',
    popular: true,
    benefits: ['Risk Reduction', 'Better Decisions', 'Compliance', 'Cost Efficiency', 'Competitive Edge'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-financial-risk',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Trading Algorithm Platform',
    description: 'Intelligent trading algorithms with machine learning for automated trading and portfolio management.',
    icon: TrendingUp,
    features: ['Algorithm Development', 'Backtesting', 'Risk Management', 'Portfolio Optimization', 'Real-time Trading', 'Analytics'],
    pricing: '$25,000 - $150,000/project',
    category: 'Trading AI',
    popular: true,
    benefits: ['Automated Trading', 'Better Returns', 'Risk Management', '24/7 Operation', 'Data-Driven Decisions'],
    marketPrice: '$40,000 - $200,000/project',
    link: 'https://ziontechgroup.com/ai-trading-algorithms',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Insurance Claims Processing',
    description: 'Automated insurance claims processing with AI-powered damage assessment and fraud detection.',
    icon: Shield,
    features: ['Damage Assessment', 'Fraud Detection', 'Automated Processing', 'Document Analysis', 'Risk Scoring', 'Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Insurance AI',
    popular: true,
    benefits: ['Faster Processing', 'Cost Reduction', 'Fraud Prevention', 'Better Accuracy', 'Customer Satisfaction'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-insurance-claims',
    contact: '+1 302 464 0950'
  },

  // AI for Education & Training
  {
    title: 'AI-Powered Learning Management System',
    description: 'Intelligent LMS with personalized learning paths, automated assessments, and adaptive content.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Content', 'Automated Assessment', 'Progress Tracking', 'Analytics', 'Integration'],
    pricing: '$10,000 - $60,000/project',
    category: 'EdTech AI',
    popular: true,
    benefits: ['Better Learning', 'Personalization', 'Efficiency', 'Engagement', 'Outcomes'],
    marketPrice: '$15,000 - $90,000/project',
    link: 'https://ziontechgroup.com/ai-learning-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Tutoring System',
    description: 'Intelligent tutoring system with personalized instruction and adaptive learning capabilities.',
    icon: BookOpen,
    features: ['Personalized Instruction', 'Adaptive Learning', 'Progress Tracking', 'Assessment', 'Feedback', 'Multi-subject'],
    pricing: '$8,000 - $45,000/project',
    category: 'EdTech AI',
    popular: true,
    benefits: ['Personalized Learning', 'Better Outcomes', '24/7 Availability', 'Cost Efficiency', 'Engagement'],
    marketPrice: '$12,000 - $65,000/project',
    link: 'https://ziontechgroup.com/ai-tutoring-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Skills Assessment Platform',
    description: 'Automated skills assessment and certification platform with AI-powered evaluation.',
    icon: ClipboardList,
    features: ['Automated Assessment', 'Skill Evaluation', 'Certification', 'Progress Tracking', 'Analytics', 'Integration'],
    pricing: '$6,000 - $35,000/project',
    category: 'Assessment AI',
    popular: true,
    benefits: ['Objective Assessment', 'Time Savings', 'Scalability', 'Consistency', 'Better Evaluation'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/ai-skills-assessment',
    contact: '+1 302 464 0950'
  },

  // AI for Manufacturing & Industry
  {
    title: 'AI Quality Control System',
    description: 'Intelligent quality control system with computer vision for automated inspection and defect detection.',
    icon: CheckCircle,
    features: ['Automated Inspection', 'Defect Detection', 'Quality Scoring', 'Real-time Monitoring', 'Analytics', 'Integration'],
    pricing: '$20,000 - $100,000/project',
    category: 'Manufacturing AI',
    popular: true,
    benefits: ['Quality Improvement', 'Cost Reduction', 'Automation', 'Consistency', 'Efficiency'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-quality-control',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Intelligent predictive maintenance system for equipment monitoring and failure prevention.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Analytics', 'Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Maintenance AI',
    popular: true,
    benefits: ['Downtime Reduction', 'Cost Savings', 'Efficiency', 'Prevention', 'ROI Improvement'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Production Optimization',
    description: 'Intelligent production optimization with real-time monitoring and automated adjustments.',
    icon: Cpu,
    features: ['Production Monitoring', 'Optimization Algorithms', 'Real-time Adjustments', 'Efficiency Tracking', 'Analytics', 'Integration'],
    pricing: '$25,000 - $120,000/project',
    category: 'Production AI',
    popular: true,
    benefits: ['Efficiency Improvement', 'Cost Reduction', 'Quality Enhancement', 'Automation', 'ROI'],
    marketPrice: '$40,000 - $180,000/project',
    link: 'https://ziontechgroup.com/ai-production-optimization',
    contact: '+1 302 464 0950'
  },

  // AI for Real Estate & Property
  {
    title: 'AI Property Valuation Platform',
    description: 'Intelligent property valuation system with market analysis and automated appraisals.',
    icon: Home,
    features: ['Property Analysis', 'Market Comparison', 'Valuation Models', 'Trend Analysis', 'Reporting', 'Integration'],
    pricing: '$8,000 - $45,000/project',
    category: 'Real Estate AI',
    popular: true,
    benefits: ['Accurate Valuations', 'Time Savings', 'Market Insights', 'Cost Efficiency', 'Competitive Edge'],
    marketPrice: '$12,000 - $65,000/project',
    link: 'https://ziontechgroup.com/ai-property-valuation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Real Estate Search Engine',
    description: 'Intelligent property search with AI-powered recommendations and market insights.',
    icon: Search,
    features: ['Smart Search', 'Recommendations', 'Market Insights', 'Price Predictions', 'Analytics', 'Mobile App'],
    pricing: '$10,000 - $60,000/project',
    category: 'Real Estate AI',
    popular: true,
    benefits: ['Better Search', 'User Experience', 'Market Intelligence', 'Conversion', 'Innovation'],
    marketPrice: '$15,000 - $90,000/project',
    link: 'https://ziontechgroup.com/ai-real-estate-search',
    contact: '+1 302 464 0950'
  },

  // AI for Agriculture & Environment
  {
    title: 'AI Precision Agriculture Platform',
    description: 'Intelligent agriculture management with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Analysis', 'Pest Detection', 'Analytics'],
    pricing: '$15,000 - $80,000/project',
    category: 'AgTech AI',
    popular: true,
    benefits: ['Yield Improvement', 'Resource Efficiency', 'Cost Reduction', 'Sustainability', 'Profitability'],
    marketPrice: '$25,000 - $120,000/project',
    link: 'https://ziontechgroup.com/ai-precision-agriculture',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Environmental Monitoring',
    description: 'Intelligent environmental monitoring system with pollution detection and climate analysis.',
    icon: TreePine,
    features: ['Pollution Detection', 'Climate Analysis', 'Air Quality Monitoring', 'Water Quality', 'Alert System', 'Reporting'],
    pricing: '$12,000 - $70,000/project',
    category: 'Environmental AI',
    popular: true,
    benefits: ['Environmental Protection', 'Compliance', 'Early Warning', 'Data Insights', 'Sustainability'],
    marketPrice: '$18,000 - $100,000/project',
    link: 'https://ziontechgroup.com/ai-environmental-monitoring',
    contact: '+1 302 464 0950'
  },

  // AI for Gaming & Entertainment
  {
    title: 'AI Game Development Platform',
    description: 'Intelligent game development tools with AI-powered character behavior and procedural content generation.',
    icon: Gamepad2,
    features: ['Procedural Generation', 'AI Characters', 'Behavior Modeling', 'Content Creation', 'Testing', 'Analytics'],
    pricing: '$20,000 - $100,000/project',
    category: 'Gaming AI',
    popular: true,
    benefits: ['Faster Development', 'Better Gameplay', 'Cost Efficiency', 'Innovation', 'Player Engagement'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-game-development',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Content Recommendation Engine',
    description: 'Intelligent content recommendation system for streaming platforms and digital media.',
    icon: Video,
    features: ['Content Analysis', 'User Profiling', 'Recommendation Engine', 'A/B Testing', 'Analytics', 'Integration'],
    pricing: '$8,000 - $45,000/project',
    category: 'Media AI',
    popular: true,
    benefits: ['Better Recommendations', 'User Engagement', 'Retention', 'Revenue Growth', 'Personalization'],
    marketPrice: '$12,000 - $65,000/project',
    link: 'https://ziontechgroup.com/ai-content-recommendation',
    contact: '+1 302 464 0950'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Process Automation", count: aiServices.filter(s => s.category === "Process Automation").length },
  { name: "Document Intelligence", count: aiServices.filter(s => s.category === "Document Intelligence").length },
  { name: "Communication AI", count: aiServices.filter(s => s.category === "Communication AI").length },
  { name: "Predictive Analytics", count: aiServices.filter(s => s.category === "Predictive Analytics").length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Security AI", count: aiServices.filter(s => s.category === "Security AI").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "Healthcare AI", count: aiServices.filter(s => s.category === "Healthcare AI").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length },
  { name: "Marketing AI", count: aiServices.filter(s => s.category === "Marketing AI").length },
  { name: "Social Media AI", count: aiServices.filter(s => s.category === "Social Media AI").length },
  { name: "Business Intelligence", count: aiServices.filter(s => s.category === "Business Intelligence").length },
  { name: "Supply Chain AI", count: aiServices.filter(s => s.category === "Supply Chain AI").length },
  { name: "Customer Analytics", count: aiServices.filter(s => s.category === "Customer Analytics").length },
  { name: "E-commerce AI", count: aiServices.filter(s => s.category === "E-commerce AI").length },
  { name: "Inventory AI", count: aiServices.filter(s => s.category === "Inventory AI").length },
  { name: "Visual Search AI", count: aiServices.filter(s => s.category === "Visual Search AI").length },
  { name: "Fintech AI", count: aiServices.filter(s => s.category === "Fintech AI").length },
  { name: "Trading AI", count: aiServices.filter(s => s.category === "Trading AI").length },
  { name: "Insurance AI", count: aiServices.filter(s => s.category === "Insurance AI").length },
  { name: "EdTech AI", count: aiServices.filter(s => s.category === "EdTech AI").length },
  { name: "Assessment AI", count: aiServices.filter(s => s.category === "Assessment AI").length },
  { name: "Manufacturing AI", count: aiServices.filter(s => s.category === "Manufacturing AI").length },
  { name: "Maintenance AI", count: aiServices.filter(s => s.category === "Maintenance AI").length },
  { name: "Production AI", count: aiServices.filter(s => s.category === "Production AI").length },
  { name: "Real Estate AI", count: aiServices.filter(s => s.category === "Real Estate AI").length },
  { name: "AgTech AI", count: aiServices.filter(s => s.category === "AgTech AI").length },
  { name: "Environmental AI", count: aiServices.filter(s => s.category === "Environmental AI").length },
  { name: "Gaming AI", count: aiServices.filter(s => s.category === "Gaming AI").length },
  { name: "Media AI", count: aiServices.filter(s => s.category === "Media AI").length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 50+ Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, NLP, predictive analytics, and automation solutions. Expert AI development and implementation." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, AI automation, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group | Advanced AI Solutions" />
        <meta property="og:description" content="50+ cutting-edge AI services for business transformation. Machine learning, computer vision, NLP, and automation solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Advanced{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                50+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, 
                predictive analytics, and intelligent automation. Transform your business with our expert AI development and implementation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get AI Consultation
                </Link>
                <Link href="/it-services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      {service.popular && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
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
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <div className="text-lg font-bold text-green-600">
                            {service.pricing}
                          </div>
                          <div className="text-xs text-gray-500">
                            Market: {service.marketPrice}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                          href={service.link}
                          className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Learn More
                        </Link>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                Our expert AI team is ready to help you implement cutting-edge artificial intelligence solutions 
                that drive real business results. Get your free consultation today!
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