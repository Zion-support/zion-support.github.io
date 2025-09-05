import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Zap, Shield, Database, BarChart3, Users, User, MessageSquare, Search, Eye, Target, 
  TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, Cpu, Bot, 
  FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, Server, Network, 
  Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, BookOpen, Home, Gamepad2,
  Phone, MapPin, Activity, RefreshCw, Layers, Compass, Lightning, Wifi, Bluetooth, 
  Headphones, Printer, Keyboard, Mouse, CreditCard, Wallet, Receipt, 
  Calculator, Clock3, Timer, AlertTriangle, Info, HelpCircle, ThumbsUp, 
  ThumbsDown, MessageCircle, Share2, Download, Upload, Copy, Edit, Trash, Save, 
  Plus, Minus, X, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Play, 
  Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, 
  RotateCw, ZoomIn, ZoomOut, Move, Grip, Filter, SortAsc, SortDesc, Grid, List, 
  Layout, Sidebar, Menu, Bell, BellOff, Star as StarIcon, Bookmark, Flag, Tag, 
  Hash, AtSign, Percent, Hash as HashIcon, DollarSign, Euro, PoundSterling, 
  Bitcoin, Database as DB, Server as ServerIcon, HardDrive as HD,
  Cpu as CPU, MemoryStick, HardDrive as Storage, Wifi as WiFi, Bluetooth as BT, 
  Headphones as Headset, Printer as Print, Keyboard as KB, 
  Mouse as MouseIcon, Palette, Music, Wrench, Lightbulb, PieChart, TrendingDown,
  Stethoscope, Dna as DNA, Package, GraduationCap, Truck
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  // AI Automation & Workflow
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms with sentiment analysis.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing', 'Learning System'],
    pricing: '$2,000 - $8,000 setup',
    category: 'AI Automation',
    popular: true,
    benefits: ['Time Savings', 'Better Responses', '24/7 Availability', 'Consistent Quality'],
    marketPrice: '$3,000 - $12,000/setup',
    link: 'https://ziontechgroup.com/ai-email-responder'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities and seamless human handoff.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Human Handoff'],
    pricing: '$1,000 - $6,000/month',
    category: 'AI Automation',
    popular: true,
    benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Better Customer Experience'],
    marketPrice: '$1,500 - $9,000/month',
    link: 'https://ziontechgroup.com/intelligent-chatbot'
  },
  {
    title: 'AI Workflow Automation',
    description: 'Intelligent workflow automation with decision-making capabilities and process optimization.',
    icon: Zap,
    features: ['Process Automation', 'Decision Making', 'Learning Capabilities', 'Integration', 'Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Automation',
    benefits: ['Process Efficiency', 'Cost Reduction', 'Better Accuracy', 'Scalability'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-workflow-automation'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document processing with OCR, data extraction, and automated classification.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Automated Processing', 'Quality Control'],
    pricing: '$3,000 - $15,000/project',
    category: 'AI Automation',
    benefits: ['Time Savings', 'Accuracy', 'Cost Reduction', 'Scalability'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-document-processing'
  },

  // AI Analytics & Intelligence
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence with real-time insights.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards', 'Automated Reports'],
    pricing: '$4,000 - $20,000/project',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Better Forecasting', 'Data-Driven Decisions', 'Risk Mitigation', 'Competitive Advantage'],
    marketPrice: '$6,000 - $30,000/project',
    link: 'https://ziontechgroup.com/predictive-analytics'
  },
  {
    title: 'AI Business Intelligence',
    description: 'Comprehensive business intelligence with AI-powered insights, reporting, and decision support.',
    icon: TrendingUp,
    features: ['Data Visualization', 'Automated Insights', 'Predictive Modeling', 'Custom Reports', 'Real-time Analytics'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Analytics',
    benefits: ['Better Insights', 'Faster Decisions', 'Competitive Advantage', 'Cost Optimization'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-business-intelligence'
  },
  {
    title: 'AI Customer Analytics',
    description: 'Advanced customer analytics with behavior prediction, segmentation, and personalization insights.',
    icon: Users,
    features: ['Customer Segmentation', 'Behavior Prediction', 'Churn Analysis', 'Personalization', 'Lifetime Value'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Analytics',
    benefits: ['Better Customer Understanding', 'Increased Retention', 'Personalization', 'Revenue Growth'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-customer-analytics'
  },
  {
    title: 'AI Market Intelligence',
    description: 'Real-time market intelligence with trend analysis, competitor monitoring, and opportunity identification.',
    icon: Globe,
    features: ['Trend Analysis', 'Competitor Monitoring', 'Opportunity Identification', 'Market Forecasting', 'Real-time Updates'],
    pricing: '$3,000 - $15,000/month',
    category: 'AI Analytics',
    benefits: ['Market Insights', 'Competitive Advantage', 'Opportunity Identification', 'Better Strategy'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-market-intelligence'
  },

  // Computer Vision & Image Processing
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision for various applications.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
    pricing: '$3,000 - $15,000/project',
    category: 'Computer Vision',
    benefits: ['Automated Analysis', 'Better Accuracy', 'Cost Savings', 'Scalability'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/computer-vision'
  },
  {
    title: 'AI Medical Imaging',
    description: 'Advanced medical imaging analysis with AI-powered diagnosis assistance and pattern recognition.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Diagnosis Assistance', 'Pattern Recognition', 'Risk Assessment', 'Report Generation'],
    pricing: '$25,000 - $100,000/project',
    category: 'Computer Vision',
    benefits: ['Better Diagnosis', 'Faster Analysis', 'Reduced Errors', 'Improved Outcomes'],
    marketPrice: '$40,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-medical-imaging'
  },
  {
    title: 'AI Quality Control System',
    description: 'Automated quality control using computer vision for manufacturing and production processes.',
    icon: CheckCircle,
    features: ['Defect Detection', 'Quality Assessment', 'Real-time Monitoring', 'Automated Alerts', 'Statistical Analysis'],
    pricing: '$10,000 - $50,000/project',
    category: 'Computer Vision',
    benefits: ['Better Quality', 'Cost Reduction', 'Faster Inspection', 'Consistency'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-quality-control'
  },
  {
    title: 'AI Security Surveillance',
    description: 'Intelligent security surveillance with facial recognition, behavior analysis, and threat detection.',
    icon: Shield,
    features: ['Facial Recognition', 'Behavior Analysis', 'Threat Detection', 'Real-time Alerts', 'Video Analytics'],
    pricing: '$8,000 - $40,000/project',
    category: 'Computer Vision',
    benefits: ['Enhanced Security', 'Automated Monitoring', 'Threat Prevention', 'Cost Efficiency'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-security-surveillance'
  },

  // Natural Language Processing
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models with SEO optimization and multi-format output.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output', 'Brand Voice'],
    pricing: '$1,500 - $8,000/month',
    category: 'Natural Language Processing',
    benefits: ['Content Scale', 'Time Savings', 'SEO Optimization', 'Consistency'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation'
  },
  {
    title: 'AI Language Translation',
    description: 'Advanced language translation with context understanding, cultural adaptation, and real-time processing.',
    icon: Globe,
    features: ['Multi-language Support', 'Context Understanding', 'Cultural Adaptation', 'Real-time Translation', 'Quality Assurance'],
    pricing: '$2,000 - $10,000/month',
    category: 'Natural Language Processing',
    benefits: ['Global Reach', 'Better Accuracy', 'Cultural Sensitivity', 'Real-time Processing'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-language-translation'
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'Advanced sentiment analysis for social media, reviews, and customer feedback with emotion detection.',
    icon: Heart,
    features: ['Sentiment Detection', 'Emotion Analysis', 'Social Media Monitoring', 'Review Analysis', 'Trend Identification'],
    pricing: '$1,000 - $5,000/month',
    category: 'Natural Language Processing',
    benefits: ['Customer Insights', 'Brand Monitoring', 'Risk Detection', 'Market Intelligence'],
    marketPrice: '$1,500 - $8,000/month',
    link: 'https://ziontechgroup.com/ai-sentiment-analysis'
  },
  {
    title: 'AI Text Summarization',
    description: 'Intelligent text summarization with key point extraction, document analysis, and automated reporting.',
    icon: FileText,
    features: ['Key Point Extraction', 'Document Analysis', 'Automated Summaries', 'Multi-document Processing', 'Custom Formats'],
    pricing: '$1,500 - $7,500/month',
    category: 'Natural Language Processing',
    benefits: ['Time Savings', 'Better Understanding', 'Automated Processing', 'Consistency'],
    marketPrice: '$2,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-text-summarization'
  },

  // Voice & Audio AI
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition, synthesis, and natural conversation capabilities.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support', 'Context Awareness'],
    pricing: '$2,500 - $12,000/project',
    category: 'Voice AI',
    benefits: ['Hands-free Operation', 'Better Accessibility', 'Natural Interaction', 'Multi-language Support'],
    marketPrice: '$4,000 - $20,000/project',
    link: 'https://ziontechgroup.com/voice-ai-assistant'
  },
  {
    title: 'AI Voice Analytics',
    description: 'Advanced voice analytics for customer service, sales optimization, and training insights.',
    icon: Mic,
    features: ['Emotion Detection', 'Call Quality Analysis', 'Training Insights', 'Performance Metrics', 'Real-time Monitoring'],
    pricing: '$3,000 - $15,000/month',
    category: 'Voice AI',
    benefits: ['Better Customer Service', 'Sales Optimization', 'Training Insights', 'Quality Improvement'],
    marketPrice: '$5,000 - $25,000/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics'
  },
  {
    title: 'AI Audio Processing',
    description: 'Intelligent audio processing with noise reduction, enhancement, and automated transcription.',
    icon: Headphones,
    features: ['Noise Reduction', 'Audio Enhancement', 'Automated Transcription', 'Speaker Identification', 'Quality Improvement'],
    pricing: '$2,000 - $10,000/project',
    category: 'Voice AI',
    benefits: ['Better Audio Quality', 'Automated Processing', 'Time Savings', 'Improved Clarity'],
    marketPrice: '$3,000 - $15,000/project',
    link: 'https://ziontechgroup.com/ai-audio-processing'
  },

  // AI Security & Fraud Detection
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics with automated response.',
    icon: Shield,
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts', 'Response Automation'],
    pricing: '$5,000 - $25,000/setup',
    category: 'AI Security',
    popular: true,
    benefits: ['Fraud Prevention', 'Cost Savings', 'Real-time Protection', 'Automated Response'],
    marketPrice: '$8,000 - $40,000/setup',
    link: 'https://ziontechgroup.com/ai-fraud-detection'
  },
  {
    title: 'AI Cybersecurity Platform',
    description: 'Comprehensive cybersecurity platform with threat detection, response, and automated defense.',
    icon: Lock,
    features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Risk Assessment', 'Incident Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Security',
    benefits: ['Enhanced Security', 'Automated Defense', 'Faster Response', 'Risk Reduction'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-cybersecurity'
  },
  {
    title: 'AI Identity Verification',
    description: 'Advanced identity verification using biometric analysis, document verification, and behavioral patterns.',
    icon: User,
    features: ['Biometric Analysis', 'Document Verification', 'Behavioral Patterns', 'Risk Assessment', 'Real-time Verification'],
    pricing: '$3,000 - $15,000/project',
    category: 'AI Security',
    benefits: ['Enhanced Security', 'Fraud Prevention', 'Better User Experience', 'Compliance'],
    marketPrice: '$5,000 - $25,000/project',
    link: 'https://ziontechgroup.com/ai-identity-verification'
  },

  // AI Healthcare & Life Sciences
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design, optimization, and clinical trial prediction.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization', 'Patent Analysis'],
    pricing: '$50,000 - $200,000/project',
    category: 'AI Healthcare',
    benefits: ['Faster Discovery', 'Cost Reduction', 'Better Success Rate', 'Innovation'],
    marketPrice: '$75,000 - $300,000/project',
    link: 'https://ziontechgroup.com/ai-drug-discovery'
  },
  {
    title: 'AI Diagnostic Assistant',
    description: 'AI-powered diagnostic assistance with symptom analysis, disease prediction, and treatment recommendations.',
    icon: Stethoscope,
    features: ['Symptom Analysis', 'Disease Prediction', 'Treatment Recommendations', 'Risk Assessment', 'Clinical Decision Support'],
    pricing: '$25,000 - $100,000/project',
    category: 'AI Healthcare',
    benefits: ['Better Diagnosis', 'Faster Treatment', 'Reduced Errors', 'Improved Outcomes'],
    marketPrice: '$40,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-diagnostic-assistant'
  },
  {
    title: 'AI Personalized Medicine',
    description: 'Personalized treatment recommendations based on genetic analysis, medical history, and AI predictions.',
    icon: DNA,
    features: ['Genetic Analysis', 'Treatment Personalization', 'Risk Prediction', 'Drug Response', 'Clinical Guidelines'],
    pricing: '$30,000 - $150,000/project',
    category: 'AI Healthcare',
    benefits: ['Personalized Treatment', 'Better Outcomes', 'Reduced Side Effects', 'Cost Efficiency'],
    marketPrice: '$50,000 - $250,000/project',
    link: 'https://ziontechgroup.com/ai-personalized-medicine'
  },

  // AI Finance & Trading
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning and predictive analytics.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading', 'Fraud Detection'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Finance',
    benefits: ['Better Returns', 'Risk Mitigation', 'Automated Trading', 'Market Insights'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-financial-modeling'
  },
  {
    title: 'AI Credit Risk Assessment',
    description: 'Intelligent credit risk assessment with automated scoring, fraud detection, and decision support.',
    icon: CreditCard,
    features: ['Credit Scoring', 'Risk Assessment', 'Fraud Detection', 'Decision Support', 'Regulatory Compliance'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Finance',
    benefits: ['Better Risk Assessment', 'Faster Decisions', 'Fraud Prevention', 'Compliance'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-credit-risk'
  },
  {
    title: 'AI Algorithmic Trading',
    description: 'Advanced algorithmic trading with machine learning models, market analysis, and automated execution.',
    icon: BarChart3,
    features: ['Trading Algorithms', 'Market Analysis', 'Risk Management', 'Automated Execution', 'Performance Monitoring'],
    pricing: '$15,000 - $75,000/project',
    category: 'AI Finance',
    benefits: ['Better Performance', 'Risk Management', 'Automated Trading', 'Market Advantage'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/ai-algorithmic-trading'
  },

  // AI E-commerce & Retail
  {
    title: 'AI Recommendation Engine',
    description: 'Intelligent product recommendation system with personalization, cross-selling, and upselling capabilities.',
    icon: ShoppingCart,
    features: ['Product Recommendations', 'Personalization', 'Cross-selling', 'Upselling', 'Behavior Analysis'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI E-commerce',
    benefits: ['Increased Sales', 'Better Customer Experience', 'Personalization', 'Revenue Growth'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-recommendation-engine'
  },
  {
    title: 'AI Price Optimization',
    description: 'Dynamic pricing optimization using AI for competitive analysis, demand forecasting, and revenue maximization.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitive Analysis', 'Demand Forecasting', 'Revenue Optimization', 'A/B Testing'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI E-commerce',
    benefits: ['Revenue Optimization', 'Competitive Advantage', 'Better Margins', 'Market Responsiveness'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-price-optimization'
  },
  {
    title: 'AI Inventory Management',
    description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Inventory Optimization', 'Supplier Integration', 'Analytics'],
    pricing: '$6,000 - $30,000/project',
    category: 'AI E-commerce',
    benefits: ['Reduced Stockouts', 'Lower Costs', 'Better Planning', 'Automated Management'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/ai-inventory-management'
  },

  // AI Education & Training
  {
    title: 'AI Personalized Learning',
    description: 'Adaptive learning platform with AI-powered personalization, skill assessment, and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Skill Assessment', 'Progress Tracking', 'Personalized Content', 'Performance Analytics'],
    pricing: '$10,000 - $50,000/project',
    category: 'AI Education',
    benefits: ['Personalized Learning', 'Better Outcomes', 'Progress Tracking', 'Engagement'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ai-personalized-learning'
  },
  {
    title: 'AI Tutoring System',
    description: 'Intelligent tutoring system with personalized instruction, assessment, and feedback capabilities.',
    icon: GraduationCap,
    features: ['Personalized Instruction', 'Adaptive Assessment', 'Real-time Feedback', 'Progress Monitoring', 'Skill Development'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Education',
    benefits: ['Personalized Instruction', 'Better Learning', '24/7 Availability', 'Consistent Quality'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-tutoring-system'
  },

  // AI Manufacturing & Industry
  {
    title: 'AI Predictive Maintenance',
    description: 'Intelligent predictive maintenance with equipment monitoring, failure prediction, and optimization.',
    icon: Wrench,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Optimization', 'Cost Reduction', 'Uptime Improvement'],
    pricing: '$15,000 - $75,000/project',
    category: 'AI Manufacturing',
    benefits: ['Reduced Downtime', 'Cost Savings', 'Better Planning', 'Equipment Longevity'],
    marketPrice: '$25,000 - $125,000/project',
    link: 'https://ziontechgroup.com/ai-predictive-maintenance'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain optimization with demand forecasting, logistics optimization, and risk management.',
    icon: Truck,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Risk Management', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$20,000 - $100,000/project',
    category: 'AI Manufacturing',
    benefits: ['Cost Reduction', 'Better Efficiency', 'Risk Mitigation', 'Performance Improvement'],
    marketPrice: '$30,000 - $150,000/project',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
  },

  // AI Research & Development
  {
    title: 'AI Research Assistant',
    description: 'Intelligent research assistant with literature analysis, hypothesis generation, and data synthesis.',
    icon: Search,
    features: ['Literature Analysis', 'Hypothesis Generation', 'Data Synthesis', 'Research Automation', 'Knowledge Discovery'],
    pricing: '$5,000 - $25,000/project',
    category: 'AI Research',
    benefits: ['Faster Research', 'Better Insights', 'Automated Analysis', 'Knowledge Discovery'],
    marketPrice: '$8,000 - $40,000/project',
    link: 'https://ziontechgroup.com/ai-research-assistant'
  },
  {
    title: 'AI Data Mining Platform',
    description: 'Advanced data mining platform with pattern recognition, knowledge discovery, and automated insights.',
    icon: Database,
    features: ['Pattern Recognition', 'Knowledge Discovery', 'Automated Insights', 'Data Visualization', 'Statistical Analysis'],
    pricing: '$8,000 - $40,000/project',
    category: 'AI Research',
    benefits: ['Pattern Discovery', 'Knowledge Extraction', 'Automated Analysis', 'Better Insights'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-data-mining'
  }
];

const categories = [
  'All',
  'AI Automation',
  'AI Analytics',
  'Computer Vision',
  'Natural Language Processing',
  'Voice AI',
  'AI Security',
  'AI Healthcare',
  'AI Finance',
  'AI E-commerce',
  'AI Education',
  'AI Manufacturing',
  'AI Research'
];

export default function AiServicesPage() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions</title>
        <meta name="description" content="Discover 80+ cutting-edge AI services from Zion Tech Group. Machine learning, computer vision, NLP, automation, and advanced AI solutions for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI automation, artificial intelligence, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="80+ cutting-edge AI services including machine learning, computer vision, NLP, and advanced AI solutions for modern businesses." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Services & Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              80+ cutting-edge AI services designed to transform your business with artificial intelligence, 
              machine learning, and advanced automation solutions.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Started Today
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">80+</div>
                <div className="text-gray-300">AI Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">AI Projects</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive suite of AI services designed to solve complex business challenges 
                with cutting-edge artificial intelligence and machine learning solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits?.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.link}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our AI experts to discuss your specific needs and find the perfect 
              artificial intelligence solution for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center"
              >
                Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/pricing"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}