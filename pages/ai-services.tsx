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
    title: 'AI Energy Optimization',
    description: 'Smart energy management and optimization using IoT and machine learning.',
    icon: Zap,
    features: ['Energy Forecasting', 'Load Optimization', 'Predictive Maintenance', 'Cost Reduction'],
    pricing: '$3,000 - $20,000 project',
    category: 'Energy',
    link: 'https://aienergy.ziontechgroup.com'
  },
  {
    title: 'AI Customer Insights',
    description: 'Advanced customer behavior analysis and insights generation.',
    icon: Users,
    features: ['Behavior Analysis', 'Segmentation', 'Churn Prediction', 'Personalization'],
    pricing: '$2,000 - $12,000/month',
    category: 'Customer Analytics',
    link: 'https://aicustomerinsights.ziontechgroup.com'
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
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Advanced AI platform for accelerating drug discovery and development processes.',
    icon: Heart,
    features: ['Molecular Design', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical AI',
    popular: true,
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'AI Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using machine learning.',
    icon: Globe,
    features: ['Climate Prediction', 'Carbon Footprint Analysis', 'Environmental Risk Assessment', 'Sustainability Planning'],
    pricing: '$25,000 - $150,000/project',
    category: 'Climate AI',
    link: 'https://aiclimate.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing Interface',
    description: 'AI-powered quantum computing optimization and algorithm development platform.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Quantum Error Correction', 'Hybrid Classical-Quantum AI', 'Quantum Machine Learning'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum AI',
    link: 'https://aiquantum.ziontechgroup.com'
  },
  {
    title: 'AI Autonomous Vehicle Control',
    description: 'Advanced AI systems for autonomous vehicle navigation and safety.',
    icon: Car,
    features: ['Real-time Navigation', 'Obstacle Detection', 'Path Planning', 'Safety Systems'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Autonomous Systems',
    link: 'https://aiautonomous.ziontechgroup.com'
  },
  {
    title: 'AI Space Mission Planning',
    description: 'AI-powered space mission optimization and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Optimization', 'Orbital Mechanics', 'Resource Management'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Space AI',
    link: 'https://aispace.ziontechgroup.com'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'Advanced AI for brain-computer interface applications and neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Thought Recognition', 'Motor Control', 'Cognitive Enhancement'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'Neuro AI',
    link: 'https://aibci.ziontechgroup.com'
  },
  {
    title: 'AI Metaverse Development',
    description: 'AI-powered virtual world creation and immersive experience development.',
    icon: Globe,
    features: ['Virtual World Generation', 'Avatar AI', 'Behavioral Simulation', 'Immersive Experiences'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Metaverse AI',
    link: 'https://aimetaverse.ziontechgroup.com'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Advanced AI for blockchain transaction analysis and cryptocurrency intelligence.',
    icon: Shield,
    features: ['Transaction Analysis', 'Fraud Detection', 'Market Prediction', 'Compliance Monitoring'],
    pricing: '$5,000 - $50,000/month',
    category: 'Blockchain AI',
    link: 'https://aiblockchain.ziontechgroup.com'
  },
  {
    title: 'AI Edge Computing',
    description: 'AI optimization for edge devices and distributed computing systems.',
    icon: Server,
    features: ['Edge AI Models', 'Distributed Processing', 'Real-time Inference', 'Resource Optimization'],
    pricing: '$10,000 - $100,000/project',
    category: 'Edge AI',
    link: 'https://aiedge.ziontechgroup.com'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'AI-powered synthetic data creation for training and testing machine learning models.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Model Training', 'Quality Validation'],
    pricing: '$3,000 - $30,000/month',
    category: 'Data AI',
    link: 'https://aisyntheticdata.ziontechgroup.com'
  },
  {
    title: 'AI Explainable AI (XAI)',
    description: 'AI systems that provide transparent and interpretable decision-making processes.',
    icon: Eye,
    features: ['Model Interpretability', 'Decision Explanation', 'Bias Detection', 'Transparency Reports'],
    pricing: '$5,000 - $50,000/project',
    category: 'Explainable AI',
    link: 'https://aixai.ziontechgroup.com'
  },
  {
    title: 'AI Federated Learning',
    description: 'Distributed machine learning that preserves data privacy across multiple organizations.',
    icon: Network,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Secure Aggregation', 'Cross-Organization Learning'],
    pricing: '$15,000 - $150,000/project',
    category: 'Federated AI',
    link: 'https://aifederated.ziontechgroup.com'
  },
  {
    title: 'AI Reinforcement Learning',
    description: 'Advanced reinforcement learning systems for complex decision-making and optimization.',
    icon: Target,
    features: ['Multi-Agent Systems', 'Reward Optimization', 'Policy Learning', 'Environment Simulation'],
    pricing: '$20,000 - $200,000/project',
    category: 'Reinforcement AI',
    link: 'https://aireinforcement.ziontechgroup.com'
  },
  {
    title: 'AI Transfer Learning',
    description: 'AI systems that can quickly adapt to new tasks using pre-trained models.',
    icon: Zap,
    features: ['Model Adaptation', 'Few-Shot Learning', 'Domain Transfer', 'Rapid Deployment'],
    pricing: '$5,000 - $50,000/project',
    category: 'Transfer AI',
    link: 'https://aitransfer.ziontechgroup.com'
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
    icon: Users,
    title: 'Improved Experience',
    description: 'Personalized user interactions',
    stat: '85%'
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI solutions including machine learning, natural language processing, computer vision, and intelligent automation." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, artificial intelligence, automation" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI services designed to solve real business challenges and drive innovation.
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
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results and measurable impact for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Ready to implement cutting-edge AI solutions? Contact our expert team for a free consultation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+13024640950" className="text-green-600 hover:text-green-800">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-600 hover:text-purple-800">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
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