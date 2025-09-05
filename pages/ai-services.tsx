import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star,
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
  ShoppingCart,
  BookOpen,
  Package,
  DollarSign
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    link: 'https://aiemail.ziontechgroup.com'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    link: 'https://predictiveai.ziontechgroup.com'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    link: 'https://aichatbot.ziontechgroup.com'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision',
    link: 'https://computervision.ziontechgroup.com'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content',
    link: 'https://aicontent.ziontechgroup.com'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
    pricing: '$2,500 - $12,000 project',
    category: 'Voice',
    link: 'https://voiceai.ziontechgroup.com'
  },
  {
    title: 'AI Fraud Detection System',
    description: 'Real-time fraud detection using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Real-time Detection', 'Behavioral Analysis', 'Risk Scoring', 'API Integration'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    link: 'https://aifraud.ziontechgroup.com'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction and processing using OCR and NLP.',
    icon: FileText,
    features: ['OCR Processing', 'Data Extraction', 'Form Recognition', 'Automated Workflows'],
    pricing: '$2,000 - $10,000/month',
    category: 'Document AI',
    link: 'https://aidocuments.ziontechgroup.com'
  },
  {
    title: 'AI Recommendation Engine',
    description: 'Personalized recommendation system using collaborative filtering and deep learning.',
    icon: Target,
    features: ['Collaborative Filtering', 'Deep Learning', 'Real-time Updates', 'A/B Testing'],
    pricing: '$3,000 - $15,000/month',
    category: 'Recommendations',
    link: 'https://airecommendations.ziontechgroup.com'
  },
  {
    title: 'AI Translation Service',
    description: 'Advanced neural machine translation with context awareness and domain adaptation.',
    icon: Globe,
    features: ['Neural Translation', 'Context Awareness', 'Domain Adaptation', 'API Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Translation',
    link: 'https://aitranslation.ziontechgroup.com'
  },
  {
    title: 'AI Code Generation',
    description: 'Automated code generation and assistance using large language models.',
    icon: Code,
    features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
    pricing: '$2,500 - $12,000/month',
    category: 'Development',
    link: 'https://aicode.ziontechgroup.com'
  },
  {
    title: 'AI Medical Diagnosis',
    description: 'AI-powered medical image analysis and diagnostic assistance.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Assistance', 'Risk Assessment', 'Clinical Integration'],
    pricing: '$10,000 - $50,000 project',
    category: 'Healthcare',
    link: 'https://aimedical.ziontechgroup.com'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting and optimization.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$5,000 - $30,000 project',
    category: 'Supply Chain',
    link: 'https://aisupplychain.ziontechgroup.com'
  },
  {
    title: 'AI Financial Analysis',
    description: 'Automated financial analysis and investment recommendations using AI.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Real-time Alerts'],
    pricing: '$3,000 - $20,000/month',
    category: 'Finance',
    link: 'https://aifinance.ziontechgroup.com'
  },
  {
    title: 'AI Quality Control',
    description: 'Automated quality inspection using computer vision and machine learning.',
    icon: CheckCircle,
    features: ['Visual Inspection', 'Defect Detection', 'Quality Scoring', 'Process Optimization'],
    pricing: '$4,000 - $25,000 project',
    category: 'Manufacturing',
    link: 'https://aiquality.ziontechgroup.com'
  },
  {
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis using NLP.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Document Review'],
    pricing: '$5,000 - $30,000/month',
    category: 'Legal',
    link: 'https://ailegal.ziontechgroup.com'
  },
  {
    title: 'AI Customer Sentiment Analysis',
    description: 'Real-time customer sentiment analysis across multiple channels.',
    icon: MessageSquare,
    features: ['Multi-channel Analysis', 'Emotion Detection', 'Trend Analysis', 'Alert System'],
    pricing: '$1,000 - $5,000/month',
    category: 'Customer Analytics'
  },
  {
    title: 'AI-Powered Autonomous Vehicles',

    description: 'Advanced autonomous vehicle systems with computer vision and decision making.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000 project',

    category: 'Autonomous Systems',
    popular: true
  },
  // NEW INNOVATIVE AI SERVICES
  {

    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $200,000 project',
    category: 'Healthcare'
  },
  {
    title: 'AI-Powered Autonomous Drones',
    description: 'Intelligent drone systems with AI for surveillance, delivery, and inspection.',
    icon: Rocket,
    features: ['Autonomous Navigation', 'Object Recognition', 'Mission Planning', 'Real-time Analysis'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Drone Technology',
    popular: true
  },
  {
    title: 'AI-Powered Virtual Reality Therapy',
    description: 'VR-based therapy and rehabilitation using AI for personalized treatment.',
    icon: Monitor,
    features: ['Personalized Therapy', 'Progress Tracking', 'Adaptive Scenarios', 'Real-time Feedback'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Healthcare VR',
    popular: true
  },
  {
    title: 'AI-Powered Smart Grid Management',
    description: 'Intelligent power grid management with AI for optimal energy distribution.',
    icon: Zap,
    features: ['Load Balancing', 'Demand Prediction', 'Fault Detection', 'Renewable Integration'],
    pricing: '$50,000 - $250,000/setup',
    category: 'Smart Grid',
    popular: true
  },
  {
    title: 'AI-Powered Ocean Exploration',
    description: 'Autonomous underwater vehicles with AI for marine research and exploration.',
    icon: Globe,
    features: ['Autonomous Navigation', 'Marine Life Detection', 'Data Collection', 'Environmental Monitoring'],
    pricing: '$75,000 - $300,000/project',
    category: 'Marine Technology',
    popular: true
  },
  {
    title: 'AI-Powered Mental Health Companion',
    description: 'AI-powered mental health support with personalized therapy and monitoring.',
    icon: Heart,
    features: ['Emotion Detection', 'Personalized Therapy', 'Crisis Intervention', 'Progress Monitoring'],
    pricing: '$5,000 - $25,000/setup',
    category: 'Mental Health',
    popular: true
  },
  {
    title: 'AI-Powered Food Safety Monitoring',
    description: 'Intelligent food safety monitoring using AI for contamination detection.',
    icon: Shield,
    features: ['Contamination Detection', 'Quality Assessment', 'Traceability', 'Predictive Analytics'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Food Safety',
    popular: true
  },
  {
    title: 'AI-Powered Wildlife Conservation',
    description: 'AI systems for wildlife monitoring, tracking, and conservation efforts.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$25,000 - $250,000/project',
    category: 'Agriculture'
  },
  {
    title: 'AI Process Automation',
    description: 'Intelligent process automation using RPA and machine learning.',
    icon: Settings,
    features: ['RPA Integration', 'Process Mining', 'Workflow Optimization', 'Exception Handling'],
    pricing: '$4,000 - $25,000 project',
    category: 'Process Automation',
    link: 'https://aiprocess.ziontechgroup.com'
  },
  {
    title: 'AI Research Assistant',
    description: 'AI-powered research and data analysis for academic and business research.',
    icon: Search,
    features: ['Literature Review', 'Data Analysis', 'Hypothesis Generation', 'Report Generation'],
    pricing: '$1,500 - $8,000/month',
    category: 'Research',
    link: 'https://airesearch.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Zero-day Protection'],
    pricing: '$8,000 - $40,000/month',
    category: 'Cybersecurity',
    popular: true,
    link: 'https://aicybersecurity.ziontechgroup.com'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing campaign optimization with predictive analytics and personalization.',
    icon: Target,
    features: ['Campaign Optimization', 'Predictive Analytics', 'Personalization', 'ROI Optimization'],
    pricing: '$3,000 - $18,000/month',
    category: 'Marketing',
    link: 'https://aimarketing.ziontechgroup.com'
  },
  {
    title: 'AI Voice Analytics',
    description: 'Advanced voice analysis for emotion detection, sentiment analysis, and call optimization.',
    icon: Mic,
    features: ['Emotion Detection', 'Sentiment Analysis', 'Call Optimization', 'Quality Scoring'],
    pricing: '$2,500 - $15,000/month',
    category: 'Voice Analytics',
    link: 'https://aivoiceanalytics.ziontechgroup.com'
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Machine learning-based predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$5,000 - $30,000/project',
    category: 'Industrial AI',
    link: 'https://aipredictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI Content Personalization',
    description: 'Dynamic content personalization using machine learning and user behavior analysis.',
    icon: FileText,
    features: ['Dynamic Content', 'User Profiling', 'A/B Testing', 'Performance Optimization'],
    pricing: '$2,000 - $12,000/month',
    category: 'Content AI',
    link: 'https://aicontentpersonalization.ziontechgroup.com'
  },
  {
    title: 'AI Trading Algorithm',
    description: 'Advanced algorithmic trading with machine learning and real-time market analysis.',
    icon: TrendingUp,
    features: ['Algorithmic Trading', 'Market Analysis', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$10,000 - $50,000/month',
    category: 'FinTech',
    link: 'https://aitrading.ziontechgroup.com'
  },
  {
    title: 'AI Image Recognition',
    description: 'Advanced computer vision for object detection, classification, and image analysis.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Scene Analysis'],
    pricing: '$2,000 - $15,000/month',
    category: 'Computer Vision',
    link: 'https://aiimagerecognition.ziontechgroup.com'
  },
  {
    title: 'AI Natural Language Processing',
    description: 'Advanced NLP services for text analysis, language understanding, and generation.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Language Understanding', 'Text Generation', 'Sentiment Analysis'],
    pricing: '$1,500 - $10,000/month',
    category: 'NLP',
    link: 'https://ainlp.ziontechgroup.com'
  },
  {
    title: 'AI Data Mining',
    description: 'Intelligent data mining and pattern recognition for business intelligence.',
    icon: Database,
    features: ['Pattern Recognition', 'Data Mining', 'Business Intelligence', 'Predictive Modeling'],
    pricing: '$3,000 - $20,000/project',
    category: 'Data Science',
    link: 'https://aidatamining.ziontechgroup.com'
  },
  {
    title: 'AI Video Analysis',
    description: 'Advanced video content analysis with object tracking and behavior recognition.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Recognition', 'Scene Analysis', 'Real-time Processing'],
    pricing: '$4,000 - $25,000/month',
    category: 'Video AI',
    link: 'https://aivideoanalysis.ziontechgroup.com'
  },
  {
    title: 'AI Chatbot Development',
    description: 'Custom AI chatbot development with natural language understanding and integration.',
    icon: Bot,
    features: ['Custom Development', 'NLP Integration', 'Multi-platform Support', 'Analytics'],
    pricing: '$5,000 - $30,000/project',
    category: 'Chatbot',
    link: 'https://aichatbotdev.ziontechgroup.com'
  },
  {
    title: 'AI Sentiment Analysis',
    description: 'Real-time sentiment analysis for social media, reviews, and customer feedback.',
    icon: TrendingUp,
    features: ['Real-time Analysis', 'Multi-language Support', 'Social Media Monitoring', 'Dashboard'],
    pricing: '$1,000 - $8,000/month',
    category: 'Sentiment Analysis',
    link: 'https://aisentiment.ziontechgroup.com'
  },
  {
    title: 'AI Price Optimization',
    description: 'Dynamic pricing optimization using machine learning and market analysis.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Market Analysis', 'Competitor Monitoring', 'Revenue Optimization'],
    pricing: '$3,000 - $20,000/month',
    category: 'Pricing AI',
    link: 'https://aipriceoptimization.ziontechgroup.com'
  },
  {
    title: 'AI Inventory Management',
    description: 'Intelligent inventory optimization with demand forecasting and automated ordering.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Ordering', 'Inventory Optimization', 'Cost Reduction'],
    pricing: '$2,500 - $15,000/month',
    category: 'Inventory AI',
    link: 'https://aiinventory.ziontechgroup.com'
  },
  {
    title: 'AI Compliance Monitoring',
    description: 'Automated compliance monitoring and reporting using AI and regulatory intelligence.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Regulatory Intelligence', 'Automated Reporting', 'Risk Assessment'],
    pricing: '$4,000 - $25,000/month',
    category: 'Compliance',
    link: 'https://aicompliance.ziontechgroup.com'
  },
  {
    title: 'AI Workflow Optimization',
    description: 'Intelligent workflow analysis and optimization using process mining and AI.',
    icon: Settings,
    features: ['Process Mining', 'Workflow Analysis', 'Optimization Recommendations', 'Automation'],
    pricing: '$3,000 - $20,000/project',
    category: 'Workflow AI',
    link: 'https://aiworkflow.ziontechgroup.com'
  },
  {
    title: 'AI Knowledge Management',
    description: 'Intelligent knowledge base management with automated content organization and search.',
    icon: BookOpen,
    features: ['Content Organization', 'Intelligent Search', 'Knowledge Extraction', 'Automated Updates'],
    pricing: '$2,000 - $12,000/month',
    category: 'Knowledge Management',
    link: 'https://aiknowledge.ziontechgroup.com'
  },
  {
    title: 'AI Performance Monitoring',
    description: 'AI-powered application and infrastructure performance monitoring with predictive alerts.',
    icon: Monitor,
    features: ['Performance Monitoring', 'Predictive Alerts', 'Root Cause Analysis', 'Optimization'],
    pricing: '$2,500 - $15,000/month',
    category: 'Performance AI',
    link: 'https://aiperformance.ziontechgroup.com'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: Building, description: 'Fraud detection and risk assessment' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and automation' },
  { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized recommendations and inventory' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and logistics' }
];

const benefits = [
  {
    icon: Zap,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and processes',
    stat: '40%'
  },
  {
    icon: TrendingUp,
    title: 'Better Insights',
    description: 'Data-driven decision making',
    stat: '60%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'AI-powered threat detection',
    stat: '99.9%'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Instant analysis and decision making',
    stat: '< 100ms'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance',
    stat: 'SOC 2'
  },
  {
    icon: Users,
    title: 'Scalable Solutions',
    description: 'From startup to enterprise scale',
    stat: 'Unlimited'
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Available worldwide with local support',
    stat: '200+'
  },
  {
    icon: BarChart3,
    title: 'Data Insights',
    description: 'Actionable insights from your data',
    stat: '24/7'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Automate complex processes',
    stat: '90%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs',
    stat: '70%'
  },
  {
    icon: TrendingUp,
    title: 'Performance Boost',
    description: 'Improve business performance',
    stat: '300%'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,000',
    period: '/project',
    description: 'Perfect for small businesses',
    features: [
      'Basic AI implementation',
      'Standard support',
      'Basic analytics',
      'Email support',
      'Documentation'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$10,000',
    period: '/project',
    description: 'Best for growing companies',
    features: [
      'Advanced AI features',
      'Priority support',
      'Advanced analytics',
      'Phone & email support',
      'Custom integration',
      'Training included'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$50,000',
    period: '/project',
    description: 'For large organizations',
    features: [
      'Full AI suite',
      '24/7 dedicated support',
      'Custom analytics',
      'Dedicated account manager',
      'Custom development',
      'On-site training',
      'SLA guarantee'
    ],
    popular: false
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services and solutions powered by advanced machine learning and artificial intelligence technologies." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

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
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-16 w-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                AI{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get AI Consultation
              </Link>
              <Link href="#services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">AI Services</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-slate-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">AI Monitoring</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-600">{service.pricing}</span>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Try Now</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <span>Get Quote</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-blue-400 font-semibold text-lg">{service.pricing}</span>
                  <span className="text-slate-400 text-sm ml-2">{service.category}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title)}`} 
                    className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-6 text-center hover:bg-slate-600 transition-colors"
              >
                <div className="p-4 bg-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results and measurable impact for your business.
            </p>
          </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-xl p-8 text-center"
              >
                <div className="p-4 bg-green-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-green-400">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Service Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    <span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-300">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and transform your business with our cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Your AI Journey
              </Link>
              <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule a Consultation
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with our AI experts for a free consultation and discover how our cutting-edge AI solutions can revolutionize your business operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
                <p className="text-sm text-blue-200">Available 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
                <p className="text-sm text-blue-200">Quick response guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">364 E Main St STE 1008</p>
                <p className="text-sm text-blue-200">Middletown, DE 19709</p>
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
    </div>
  );
}