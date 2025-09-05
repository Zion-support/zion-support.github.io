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
  Home,
  Gamepad2
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using deep learning and computer vision.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$3,000 - $15,000 project',
    category: 'Computer Vision'
  },
  {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced language models.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Integration', 'Multi-format Output'],
    pricing: '$1,500 - $8,000/month',
    category: 'Content'
  },
  {
    title: 'Voice AI Assistant',
    description: 'Voice-controlled AI assistant with speech recognition and synthesis.',
    icon: Mic,
    features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language Support'],
    pricing: '$2,500 - $12,000 project',
    category: 'Voice'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Real-time fraud detection using machine learning and behavioral analytics.',
    icon: Shield,
    features: ['Real-time Analysis', 'Behavioral Patterns', 'Risk Scoring', 'Automated Alerts'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'Accelerated drug discovery using AI for molecular design and optimization.',
    icon: Heart,
    features: ['Molecular Modeling', 'Drug-Target Interaction', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $200,000 project',
    category: 'Healthcare'
  },
  {
    title: 'AI Financial Modeling',
    description: 'Advanced financial modeling and risk assessment using machine learning.',
    icon: TrendingUp,
    features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading'],
    pricing: '$10,000 - $50,000 project',
    category: 'Finance'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce and content platforms.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Real-time Updates', 'A/B Testing'],
    pricing: '$3,000 - $15,000 setup',
    category: 'E-commerce'
  },
  {
    title: 'AI Social Media Manager',
    description: 'Automated social media management with content creation and scheduling.',
    icon: Globe,
    features: ['Content Generation', 'Optimal Posting Times', 'Engagement Analysis', 'Brand Voice Consistency'],
    pricing: '$500 - $2,500/month',
    category: 'Marketing'
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Automated code review and quality assurance using AI analysis.',
    icon: Code,
    features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practices'],
    pricing: '$2,000 - $10,000 setup',
    category: 'Development'
  },
  {
    title: 'AI Document Processing',
    description: 'Intelligent document extraction, classification, and data processing.',
    icon: FileText,
    features: ['OCR Technology', 'Document Classification', 'Data Extraction', 'Workflow Automation'],
    pricing: '$1,500 - $8,000/month',
    category: 'Document Management'
  },
  {
    title: 'AI Video Analytics',
    description: 'Advanced video analysis for security, marketing, and business intelligence.',
    icon: Video,
    features: ['Object Tracking', 'Behavior Analysis', 'Crowd Counting', 'Anomaly Detection'],
    pricing: '$4,000 - $20,000 project',
    category: 'Video Analytics'
  },
  {
    title: 'AI Talent Matching',
    description: 'Intelligent candidate matching and recruitment optimization.',
    icon: Users,
    features: ['Resume Analysis', 'Skill Matching', 'Cultural Fit Assessment', 'Interview Scheduling'],
    pricing: '$2,500 - $12,000 setup',
    category: 'HR & Recruitment'
  },
  {
    title: 'AI Energy Optimization',
    description: 'Smart energy management and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Consumption Analysis', 'Predictive Maintenance', 'Load Balancing', 'Cost Optimization'],
    pricing: '$8,000 - $40,000 project',
    category: 'Energy Management'
  },
  {
    title: 'AI Quality Assurance',
    description: 'Automated quality control and defect detection in manufacturing.',
    icon: CheckCircle,
    features: ['Visual Inspection', 'Defect Classification', 'Quality Metrics', 'Process Optimization'],
    pricing: '$10,000 - $50,000 project',
    category: 'Manufacturing'
  },
  {
    title: 'AI Legal Document Analysis',
    description: 'Intelligent legal document review and contract analysis.',
    icon: BookOpen,
    features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Legal Tech'
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
    description: 'Complete autonomous vehicle systems with advanced perception and decision-making capabilities.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Real-time Decision Making'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum computing algorithm optimization and error correction.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Error Correction', 'Quantum State Analysis', 'Performance Tuning'],
    pricing: '$75,000 - $300,000 project',
    category: 'Quantum Computing'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'Autonomous space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$100,000 - $500,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Neural Interface System',
    description: 'Brain-computer interface with AI-powered neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Comprehensive smart city management with AI optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$500,000 - $2,000,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Precision agriculture with AI-powered crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 project',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Financial Trading System',
    description: 'Algorithmic trading system with machine learning for market prediction.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Management', 'Portfolio Optimization', 'Real-time Trading'],
    pricing: '$20,000 - $100,000 setup',
    category: 'Finance'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Impact Analysis', 'Weather Forecasting', 'Sustainability Metrics'],
    pricing: '$25,000 - $100,000 project',
    category: 'Environmental'
  },
  {
    title: 'AI Quantum Computing Optimizer',
    description: 'AI-powered quantum computing algorithm optimization and error correction.',
    icon: Cpu,
    features: ['Quantum Algorithm Optimization', 'Error Correction', 'Quantum State Analysis', 'Performance Tuning'],
    pricing: '$75,000 - $300,000 project',
    category: 'Quantum Computing'
  },
  {
    title: 'AI-Powered Space Exploration',
    description: 'Autonomous space mission planning and satellite constellation management.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Management', 'Orbital Mechanics', 'Resource Optimization'],
    pricing: '$100,000 - $500,000 project',
    category: 'Space Technology'
  },
  {
    title: 'AI Neural Interface System',
    description: 'Brain-computer interface with AI-powered neural signal processing.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications'],
    pricing: '$200,000 - $1,000,000 project',
    category: 'Neurotechnology'
  },
  {
    title: 'AI-Powered Smart Cities',
    description: 'Comprehensive smart city management with AI optimization.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation'],
    pricing: '$500,000 - $2,000,000 project',
    category: 'Smart Cities'
  },
  {
    title: 'AI Agricultural Intelligence',
    description: 'Precision agriculture with AI-powered crop monitoring and optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$15,000 - $75,000 project',
    category: 'Agriculture'
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Self-evolving AI cybersecurity system that adapts to new threats.',
    icon: Shield,
    features: ['Threat Detection', 'Adaptive Defense', 'Zero-day Protection', 'Automated Response'],
    pricing: '$25,000 - $125,000 setup',
    category: 'Cybersecurity'
  },
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis with image analysis and symptom assessment.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Symptom Assessment', 'Disease Prediction', 'Treatment Recommendations'],
    pricing: '$30,000 - $150,000 setup',
    category: 'Healthcare'
  },
  {
    title: 'AI Language Translation Pro',
    description: 'Real-time multi-language translation with cultural context understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Voice Translation', 'Document Translation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Language Services'
  },
  {
    title: 'AI Content Moderation Suite',
    description: 'Advanced content moderation for text, images, and videos across platforms.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$1,500 - $7,500/month',
    category: 'Content Safety'
  },
  {
    title: 'AI Personal Finance Manager',
    description: 'Intelligent personal finance management with spending analysis and investment advice.',
    icon: DollarSign,
    features: ['Spending Analysis', 'Investment Advice', 'Budget Optimization', 'Financial Planning'],
    pricing: '$99 - $499/month',
    category: 'Personal Finance'
  },
  {
    title: 'AI Learning Management System',
    description: 'Personalized learning platform with adaptive content and progress tracking.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Progress Tracking', 'Personalized Content', 'Skill Assessment'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Education'
  },
  {
    title: 'AI Real Estate Analyzer',
    description: 'Property valuation and market analysis using AI and big data.',
    icon: Home,
    features: ['Property Valuation', 'Market Analysis', 'Investment Potential', 'Risk Assessment'],
    pricing: '$3,000 - $15,000 setup',
    category: 'Real Estate'
  },
  {
    title: 'AI Sports Analytics Platform',
    description: 'Advanced sports performance analysis and prediction using AI.',
    icon: Target,
    features: ['Performance Analysis', 'Injury Prediction', 'Game Strategy', 'Player Scouting'],
    pricing: '$10,000 - $50,000 project',
    category: 'Sports Technology'
  },
  {
    title: 'AI Mental Health Assistant',
    description: 'AI-powered mental health monitoring and support system.',
    icon: Heart,
    features: ['Mood Tracking', 'Stress Analysis', 'Crisis Detection', 'Therapy Recommendations'],
    pricing: '$2,000 - $10,000 setup',
    category: 'Mental Health'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Cryptocurrency and blockchain transaction analysis using AI.',
    icon: Shield,
    features: ['Transaction Analysis', 'Fraud Detection', 'Market Prediction', 'Compliance Monitoring'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Blockchain'
  },
  {
    title: 'AI IoT Device Manager',
    description: 'Intelligent management and optimization of IoT device networks.',
    icon: Network,
    features: ['Device Management', 'Data Analytics', 'Predictive Maintenance', 'Security Monitoring'],
    pricing: '$8,000 - $40,000 project',
    category: 'IoT'
  },
  {
    title: 'AI Gaming Assistant',
    description: 'AI-powered gaming companion with strategy optimization and cheat detection.',
    icon: Gamepad2,
    features: ['Strategy Optimization', 'Cheat Detection', 'Player Behavior Analysis', 'Game Balancing'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Gaming'
  },
  {
    title: 'AI Waste Management Optimizer',
    description: 'Smart waste collection and recycling optimization using AI.',
    icon: Trash2,
    features: ['Route Optimization', 'Waste Classification', 'Recycling Efficiency', 'Cost Reduction'],
    pricing: '$15,000 - $75,000 project',
    category: 'Environmental'
  },
  {
    title: 'AI-Powered Financial Trading System',
    description: 'High-frequency trading AI with market prediction and risk management.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Risk Management', 'Algorithmic Trading', 'Portfolio Optimization'],
    pricing: '$50,000 - $250,000 setup',
    category: 'FinTech'
  },
  {
    title: 'AI-Powered Virtual Reality',
    description: 'Immersive VR experiences with AI-generated content and interactions.',
    icon: Monitor,
    features: ['Content Generation', 'Realistic Interactions', 'Adaptive Environments', 'User Behavior Analysis'],
    pricing: '$30,000 - $150,000 project',
    category: 'Virtual Reality'
  },
  {
    title: 'AI Language Translation',
    description: 'Real-time multi-language translation with cultural context understanding.',
    icon: Globe,
    features: ['Real-time Translation', 'Cultural Context', 'Voice Translation', 'Document Translation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Language Technology'
  },
  {
    title: 'AI-Powered Robotics',
    description: 'Intelligent robotic systems with advanced AI decision making.',
    icon: Bot,
    features: ['Autonomous Navigation', 'Object Manipulation', 'Human-Robot Interaction', 'Learning Capabilities'],
    pricing: '$40,000 - $200,000 project',
    category: 'Robotics'
  },
  {
    title: 'AI Music Composition',
    description: 'AI-generated music composition with style adaptation and emotional intelligence.',
    icon: Mic,
    features: ['Style Adaptation', 'Emotional Intelligence', 'Instrument Simulation', 'Collaborative Composition'],
    pricing: '$5,000 - $25,000 setup',
    category: 'Creative AI'
  },
  {
    title: 'AI-Powered Gaming',
    description: 'Intelligent game AI with adaptive difficulty and procedural content generation.',
    icon: Gamepad2,
    features: ['Adaptive Difficulty', 'Procedural Content', 'NPC Intelligence', 'Player Behavior Analysis'],
    pricing: '$20,000 - $100,000 project',
    category: 'Gaming'
  },
  {
    title: 'AI Personal Health Coach',
    description: 'AI-powered personal health monitoring and wellness recommendations.',
    icon: Heart,
    features: ['Health Monitoring', 'Wellness Recommendations', 'Symptom Analysis', 'Preventive Care'],
    pricing: '$99 - $499/month',
    category: 'Personal Health'
  },
  {
    title: 'AI-Powered Smart Home',
    description: 'Intelligent home automation with predictive behavior and energy optimization.',
    icon: Home,
    features: ['Predictive Automation', 'Energy Optimization', 'Security Monitoring', 'Voice Control'],
    pricing: '$10,000 - $50,000 setup',
    category: 'Smart Home'
  },
  {
    title: 'AI Content Creation Studio',
    description: 'AI-powered content creation for marketing, social media, and advertising.',
    icon: Image,
    features: ['Content Generation', 'Brand Consistency', 'Multi-format Output', 'Performance Optimization'],
    pricing: '$1,500 - $7,500/month',
    category: 'Content Marketing'
  },
  {
    title: 'AI-Powered Education Platform',
    description: 'Personalized learning platform with AI tutoring and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Assessment', 'Progress Tracking', 'Skill Development'],
    pricing: '$2,000 - $10,000/month',
    category: 'EdTech'
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven results and measurable impact for your business.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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