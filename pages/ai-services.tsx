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
  Gamepad2,
  Truck,
  Trophy,
  Leaf,
  Coins,
  MapPin,
  Building2,
  Accessibility,
  Share2
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
    features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Orchestration'],
    pricing: '$5,000 - $30,000/month',
    category: 'Cybersecurity',
    popular: true,
    link: 'https://aicybersecurity.ziontechgroup.com'
  },
  {
    title: 'AI Content Moderation',
    description: 'Automated content moderation using computer vision and NLP for text, images, and videos.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$2,000 - $12,000/month',
    category: 'Content Safety',
    link: 'https://aicontentmod.ziontechgroup.com'
  },
  {
    title: 'AI-Powered HR Analytics',
    description: 'Intelligent human resources analytics with employee insights and predictive modeling.',
    icon: Users,
    features: ['Employee Analytics', 'Predictive Modeling', 'Talent Acquisition', 'Performance Insights'],
    pricing: '$3,000 - $18,000/month',
    category: 'HR Analytics',
    link: 'https://aihranalytics.ziontechgroup.com'
  },
  {
    title: 'AI Voice Cloning',
    description: 'Advanced voice synthesis and cloning technology for personalized audio content.',
    icon: Mic,
    features: ['Voice Synthesis', 'Emotion Control', 'Multi-language Support', 'Real-time Processing'],
    pricing: '$4,000 - $20,000/project',
    category: 'Voice Technology',
    link: 'https://aivoiceclone.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Drug Discovery',
    description: 'Machine learning algorithms for pharmaceutical drug discovery and development.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Design', 'Toxicity Prediction', 'Clinical Trial Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Pharmaceutical',
    link: 'https://aidrugdiscovery.ziontechgroup.com'
  },
  {
    title: 'AI Weather Prediction',
    description: 'Advanced weather forecasting using deep learning and satellite data analysis.',
    icon: Cloud,
    features: ['Deep Learning Models', 'Satellite Analysis', 'Long-term Forecasting', 'Climate Modeling'],
    pricing: '$5,000 - $25,000/month',
    category: 'Meteorology',
    link: 'https://aiweather.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agriculture',
    description: 'Smart farming solutions with crop monitoring, yield prediction, and pest detection.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Soil Analysis'],
    pricing: '$3,000 - $20,000/project',
    category: 'Agriculture',
    link: 'https://aiagriculture.ziontechgroup.com'
  },
  {
    title: 'AI Autonomous Vehicles',
    description: 'Self-driving vehicle technology with computer vision and sensor fusion.',
    icon: Car,
    features: ['Computer Vision', 'Sensor Fusion', 'Path Planning', 'Safety Systems'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Autonomous Systems',
    link: 'https://aiautonomous.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Gaming',
    description: 'Intelligent game AI with adaptive difficulty and procedural content generation.',
    icon: Gamepad2,
    features: ['Adaptive AI', 'Procedural Generation', 'Player Behavior Analysis', 'Dynamic Storytelling'],
    pricing: '$10,000 - $100,000/project',
    category: 'Gaming',
    link: 'https://aigaming.ziontechgroup.com'
  },
  {
    title: 'AI Mental Health Assistant',
    description: 'AI-powered mental health monitoring and support with sentiment analysis and intervention.',
    icon: Heart,
    features: ['Sentiment Analysis', 'Crisis Detection', 'Intervention Alerts', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/month',
    category: 'Mental Health',
    link: 'https://aimentalhealth.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Logistics',
    description: 'Intelligent logistics optimization with route planning and demand forecasting.',
    icon: Truck,
    features: ['Route Optimization', 'Demand Forecasting', 'Fleet Management', 'Cost Optimization'],
    pricing: '$4,000 - $25,000/month',
    category: 'Logistics',
    link: 'https://ailogistics.ziontechgroup.com'
  },
  {
    title: 'AI Real Estate Analysis',
    description: 'Property valuation and market analysis using machine learning and big data.',
    icon: Building,
    features: ['Property Valuation', 'Market Analysis', 'Investment Recommendations', 'Risk Assessment'],
    pricing: '$2,000 - $12,000/month',
    category: 'Real Estate',
    link: 'https://airealestate.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Sports Analytics',
    description: 'Advanced sports performance analysis with player tracking and game strategy optimization.',
    icon: Trophy,
    features: ['Player Tracking', 'Performance Analysis', 'Strategy Optimization', 'Injury Prediction'],
    pricing: '$5,000 - $30,000/project',
    category: 'Sports',
    link: 'https://aisports.ziontechgroup.com'
  },
  {
    title: 'AI Environmental Monitoring',
    description: 'Environmental data analysis and pollution monitoring using IoT and machine learning.',
    icon: Leaf,
    features: ['Pollution Monitoring', 'Climate Analysis', 'Ecosystem Health', 'Predictive Modeling'],
    pricing: '$3,000 - $20,000/month',
    category: 'Environmental',
    link: 'https://aienvironment.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Insurance',
    description: 'Intelligent insurance underwriting and claims processing with risk assessment.',
    icon: Shield,
    features: ['Risk Assessment', 'Claims Processing', 'Fraud Detection', 'Policy Optimization'],
    pricing: '$4,000 - $25,000/month',
    category: 'Insurance',
    link: 'https://aiinsurance.ziontechgroup.com'
  },
  {
    title: 'AI Space Technology',
    description: 'AI applications for space exploration, satellite management, and space debris tracking.',
    icon: Rocket,
    features: ['Satellite Management', 'Space Debris Tracking', 'Mission Planning', 'Data Analysis'],
    pricing: '$50,000 - $500,000/project',
    category: 'Space Technology',
    link: 'https://aispace.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Retail',
    description: 'Intelligent retail solutions with demand forecasting, pricing optimization, and customer analytics.',
    icon: ShoppingCart,
    features: ['Demand Forecasting', 'Pricing Optimization', 'Customer Analytics', 'Inventory Management'],
    pricing: '$3,000 - $20,000/month',
    category: 'Retail',
    link: 'https://airetail.ziontechgroup.com'
  },
  {
    title: 'AI Quantum Computing',
    description: 'Quantum machine learning algorithms and quantum optimization solutions.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    link: 'https://aiquantum.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Education',
    description: 'Personalized learning systems with adaptive content and intelligent tutoring.',
    icon: BookOpen,
    features: ['Adaptive Learning', 'Intelligent Tutoring', 'Progress Tracking', 'Content Generation'],
    pricing: '$2,000 - $15,000/month',
    category: 'Education',
    link: 'https://aieducation.ziontechgroup.com'
  },
  {
    title: 'AI Social Media Analytics',
    description: 'Advanced social media monitoring and sentiment analysis with trend prediction.',
    icon: Share2,
    features: ['Sentiment Analysis', 'Trend Prediction', 'Influencer Analysis', 'Crisis Detection'],
    pricing: '$1,500 - $10,000/month',
    category: 'Social Media',
    link: 'https://aisocialmedia.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing',
    description: 'Smart manufacturing with predictive maintenance and quality control automation.',
    icon: Settings,
    features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Defect Detection'],
    pricing: '$5,000 - $30,000/project',
    category: 'Manufacturing',
    link: 'https://aimanufacturing.ziontechgroup.com'
  },
  {
    title: 'AI Blockchain Analytics',
    description: 'Cryptocurrency and blockchain transaction analysis with fraud detection and compliance.',
    icon: Coins,
    features: ['Transaction Analysis', 'Fraud Detection', 'Compliance Monitoring', 'Risk Assessment'],
    pricing: '$3,000 - $20,000/month',
    category: 'Blockchain',
    link: 'https://aiblockchain.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Tourism',
    description: 'Intelligent tourism recommendations and travel optimization with personalized experiences.',
    icon: MapPin,
    features: ['Personalized Recommendations', 'Travel Optimization', 'Price Prediction', 'Experience Matching'],
    pricing: '$2,000 - $12,000/month',
    category: 'Tourism',
    link: 'https://aitourism.ziontechgroup.com'
  },
  {
    title: 'AI Smart Cities',
    description: 'Urban planning and smart city management with IoT integration and data analytics.',
    icon: Building2,
    features: ['Urban Planning', 'Traffic Optimization', 'Resource Management', 'Citizen Services'],
    pricing: '$50,000 - $500,000/project',
    category: 'Smart Cities',
    link: 'https://aismartcities.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Entertainment',
    description: 'Content creation and recommendation systems for entertainment and media industries.',
    icon: Video,
    features: ['Content Creation', 'Recommendation Systems', 'Audience Analysis', 'Trend Prediction'],
    pricing: '$3,000 - $20,000/month',
    category: 'Entertainment',
    link: 'https://aientertainment.ziontechgroup.com'
  },
  {
    title: 'AI Digital Twin',
    description: 'Digital twin technology for real-time monitoring and simulation of physical systems.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Simulation', 'Predictive Modeling', 'Optimization'],
    pricing: '$10,000 - $100,000/project',
    category: 'Digital Twin',
    link: 'https://aidigitaltwin.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Accessibility',
    description: 'AI solutions for improving accessibility and inclusion for people with disabilities.',
    icon: Accessibility,
    features: ['Speech Recognition', 'Visual Assistance', 'Mobility Support', 'Communication Aids'],
    pricing: '$2,000 - $15,000/project',
    category: 'Accessibility',
    link: 'https://aiaccessibility.ziontechgroup.com'
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