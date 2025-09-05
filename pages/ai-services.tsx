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
<<<<<<< HEAD
    category: 'Analytics'
=======
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
  // New Innovative AI Services
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Accelerated drug discovery using machine learning and molecular modeling.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug Design', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Healthcare AI',
    popular: true,
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'AI Climate Change Modeling',
    description: 'Advanced climate modeling and environmental impact prediction using AI.',
    icon: Sprout,
    features: ['Climate Modeling', 'Impact Prediction', 'Carbon Footprint Analysis', 'Sustainability Planning'],
    pricing: '$25,000 - $200,000/project',
    category: 'Environmental AI',
    link: 'https://aiclimate.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing Optimization',
    description: 'Quantum algorithm optimization and quantum machine learning solutions.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Quantum ML', 'Optimization Problems', 'Hybrid Computing'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum AI',
    link: 'https://aiquantum.ziontechgroup.com'
  },
  {
    title: 'AI Autonomous Vehicle Systems',
    description: 'AI-powered autonomous vehicle perception, planning, and control systems.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Decision Making', 'Safety Systems'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Autonomous Vehicles',
    link: 'https://aiautonomous.ziontechgroup.com'
  },
  {
    title: 'AI Space Exploration Analytics',
    description: 'AI-powered space mission planning and astronomical data analysis.',
    icon: Rocket,
    features: ['Mission Planning', 'Data Analysis', 'Satellite Operations', 'Space Weather'],
    pricing: '$75,000 - $750,000/project',
    category: 'Space AI',
    link: 'https://aispace.ziontechgroup.com'
  },
  {
    title: 'AI Brain-Computer Interface',
    description: 'AI-powered brain-computer interface development and neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'BCI Development', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$150,000 - $1,500,000/project',
    category: 'Neurotechnology',
    link: 'https://aibci.ziontechgroup.com'
  },
  {
    title: 'AI Synthetic Data Generation',
    description: 'High-quality synthetic data generation for training and testing AI models.',
    icon: Database,
    features: ['Data Synthesis', 'Privacy Preservation', 'Model Training', 'Quality Assurance'],
    pricing: '$10,000 - $100,000/project',
    category: 'Data Generation',
    link: 'https://aisyntheticdata.ziontechgroup.com'
  },
  {
    title: 'AI Explainable AI (XAI)',
    description: 'Making AI decisions transparent and interpretable for critical applications.',
    icon: Eye,
    features: ['Model Interpretability', 'Decision Explanation', 'Bias Detection', 'Trust Building'],
    pricing: '$15,000 - $150,000/project',
    category: 'Explainable AI',
    link: 'https://aixai.ziontechgroup.com'
  },
  {
    title: 'AI Edge Intelligence',
    description: 'AI inference and decision-making at the edge for real-time applications.',
    icon: Server,
    features: ['Edge Inference', 'Real-time Processing', 'Low Latency', 'Resource Optimization'],
    pricing: '$20,000 - $200,000/project',
    category: 'Edge AI',
    link: 'https://aiedge.ziontechgroup.com'
  },
  {
    title: 'AI Federated Learning',
    description: 'Privacy-preserving machine learning across distributed data sources.',
    icon: Lock,
    features: ['Privacy Preservation', 'Distributed Training', 'Model Aggregation', 'Secure Communication'],
    pricing: '$25,000 - $250,000/project',
    category: 'Federated Learning',
    link: 'https://aifederated.ziontechgroup.com'
  },
  {
    title: 'AI Multi-Modal Learning',
    description: 'AI systems that process and understand multiple data types simultaneously.',
    icon: FileText,
    features: ['Multi-modal Processing', 'Cross-modal Learning', 'Fusion Techniques', 'Unified Understanding'],
    pricing: '$30,000 - $300,000/project',
    category: 'Multi-Modal AI',
    link: 'https://aimultimodal.ziontechgroup.com'
  },
  {
    title: 'AI Reinforcement Learning',
    description: 'Advanced reinforcement learning for complex decision-making and optimization.',
    icon: Target,
    features: ['RL Algorithms', 'Policy Optimization', 'Environment Simulation', 'Reward Engineering'],
    pricing: '$40,000 - $400,000/project',
    category: 'Reinforcement Learning',
    link: 'https://aireinforcement.ziontechgroup.com'
  },
  {
    title: 'AI Transfer Learning',
    description: 'Efficient model adaptation and knowledge transfer across domains.',
    icon: Network,
    features: ['Domain Adaptation', 'Knowledge Transfer', 'Few-shot Learning', 'Model Reuse'],
    pricing: '$15,000 - $150,000/project',
    category: 'Transfer Learning',
    link: 'https://aitransfer.ziontechgroup.com'
  },
  {
    title: 'AI Adversarial Defense',
    description: 'Robust AI systems resistant to adversarial attacks and manipulation.',
    icon: Shield,
    features: ['Adversarial Training', 'Attack Detection', 'Defense Mechanisms', 'Robustness Testing'],
    pricing: '$20,000 - $200,000/project',
    category: 'AI Security',
    link: 'https://aiadversarial.ziontechgroup.com'
  },
  {
    title: 'AI Continual Learning',
    description: 'AI systems that learn continuously without forgetting previous knowledge.',
    icon: BookOpen,
    features: ['Continual Learning', 'Catastrophic Forgetting Prevention', 'Memory Management', 'Adaptive Learning'],
    pricing: '$25,000 - $250,000/project',
    category: 'Continual Learning',
    link: 'https://aicontinual.ziontechgroup.com'
  },
  {
    title: 'AI Meta-Learning',
    description: 'AI systems that learn how to learn and adapt quickly to new tasks.',
    icon: Brain,
    features: ['Learning to Learn', 'Few-shot Adaptation', 'Meta-optimization', 'Task Generalization'],
    pricing: '$35,000 - $350,000/project',
    category: 'Meta-Learning',
    link: 'https://aimeta.ziontechgroup.com'
  },
  {
    title: 'AI Causal Inference',
    description: 'Understanding cause-and-effect relationships in complex systems using AI.',
    icon: TrendingUp,
    features: ['Causal Discovery', 'Intervention Analysis', 'Counterfactual Reasoning', 'Causal Modeling'],
    pricing: '$30,000 - $300,000/project',
    category: 'Causal AI',
    link: 'https://aicausal.ziontechgroup.com'
  },
  {
    title: 'AI Graph Neural Networks',
    description: 'Advanced graph-based machine learning for complex relational data.',
    icon: Network,
    features: ['Graph Processing', 'Relational Learning', 'Network Analysis', 'Graph Embeddings'],
    pricing: '$25,000 - $250,000/project',
    category: 'Graph AI',
    link: 'https://aigraph.ziontechgroup.com'
  },
  {
    title: 'AI Time Series Forecasting',
    description: 'Advanced time series analysis and forecasting using deep learning.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Long-term Forecasting', 'Anomaly Detection', 'Trend Analysis'],
    pricing: '$20,000 - $200,000/project',
    category: 'Time Series AI',
    link: 'https://aitimeseries.ziontechgroup.com'
  },
  {
    title: 'AI Generative Models',
    description: 'Advanced generative AI for creating realistic content and data.',
    icon: Image,
    features: ['Content Generation', 'Data Augmentation', 'Creative AI', 'Realistic Synthesis'],
    pricing: '$30,000 - $300,000/project',
    category: 'Generative AI',
    link: 'https://aigenerative.ziontechgroup.com'
>>>>>>> 1dab9786c49abc5641bed69cf666f521fa51a67c
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
<<<<<<< HEAD
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">AI Services</h1>
        <p className="text-gray-600 mb-10">Explore our core AI offerings.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.description}</p>
              <div className="text-sm text-gray-500">{s.category} · {s.pricing}</div>
            </div>
          ))}
=======

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
>>>>>>> 1dab9786c49abc5641bed69cf666f521fa51a67c
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

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch with Our AI Experts
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Ready to harness the power of AI for your business? 
                Contact us today for a free AI consultation and custom solution design.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Schedule AI Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}