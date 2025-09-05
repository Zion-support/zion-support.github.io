import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
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
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout,
  Mail,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Database,
  Phone,
  MapPin
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Communication',
    popular: true,
    link: 'https://aiemail.ziontechgroup.com'
  },
  {
    title: 'Intelligent Document Processor',
    description: 'Extract, analyze, and process information from various document formats automatically.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Batch Processing'],
    pricing: '$1,500 - $6,000/month',
    category: 'Document Processing',
    link: 'https://docprocessor.ziontechgroup.com'
  },
  {
    title: 'Predictive Analytics Engine',
    description: 'Advanced machine learning models for business forecasting and trend analysis.',
    icon: BarChart3,
    features: ['Forecasting Models', 'Trend Analysis', 'Risk Assessment', 'Custom Dashboards'],
    pricing: '$3,000 - $15,000/month',
    category: 'Analytics',
    popular: true,
    link: 'https://predictive.ziontechgroup.com'
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI for customer support and engagement.',
    icon: Bot,
    features: ['Natural Conversations', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$500 - $2,500/month',
    category: 'Customer Service',
    link: 'https://aichatbot.ziontechgroup.com'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis using state-of-the-art computer vision algorithms.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Real-time Processing'],
    pricing: '$2,500 - $10,000/month',
    category: 'Computer Vision',
    link: 'https://computervision.ziontechgroup.com'
  },
  {
    title: 'Voice Recognition System',
    description: 'Advanced speech-to-text and voice command processing for applications.',
    icon: Mic,
    features: ['Speech-to-Text', 'Voice Commands', 'Multi-language Support', 'Noise Cancellation'],
    pricing: '$1,000 - $5,000/month',
    category: 'Speech Processing',
    link: 'https://voicerecognition.ziontechgroup.com'
  },
  {
    title: 'Quantum AI Optimization Engine',
    description: 'Quantum-enhanced AI algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Hybrid Classical-Quantum', 'Performance Benchmarks'],
    pricing: '$5,000 - $25,000/month',
    category: 'Quantum AI',
    popular: true,
    link: 'https://quantumai.ziontechgroup.com'
  },
  {
    title: 'Edge AI Vision System',
    description: 'Real-time AI vision processing at the edge for IoT and mobile applications.',
    icon: Monitor,
    features: ['Edge Processing', 'Real-time Analysis', 'Low Latency', 'Mobile Optimization'],
    pricing: '$2,000 - $8,000/month',
    category: 'Edge AI',
    link: 'https://edgevision.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Drug Discovery Platform',
    description: 'Machine learning platform for pharmaceutical research and drug development.',
    icon: Heart,
    features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Clinical Trial Optimization', 'Safety Assessment'],
    pricing: '$10,000 - $50,000/month',
    category: 'Healthcare AI',
    link: 'https://drugdiscovery.ziontechgroup.com'
  },
  {
    title: 'Autonomous Vehicle AI System',
    description: 'Complete AI system for autonomous vehicle navigation and safety.',
    icon: Car,
    features: ['Path Planning', 'Object Detection', 'Collision Avoidance', 'Real-time Decision Making'],
    pricing: '$15,000 - $75,000/month',
    category: 'Autonomous Systems',
    link: 'https://autonomous.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Climate Modeling',
    description: 'Advanced climate prediction and environmental impact analysis using AI.',
    icon: Globe,
    features: ['Climate Prediction', 'Environmental Analysis', 'Risk Assessment', 'Policy Optimization'],
    pricing: '$8,000 - $40,000/month',
    category: 'Environmental AI',
    link: 'https://climatemodeling.ziontechgroup.com'
  },
  {
    title: 'Neural Interface AI',
    description: 'Brain-computer interface AI for medical and assistive technology applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Intent Recognition', 'Motor Control', 'Medical Applications'],
    pricing: '$20,000 - $100,000/month',
    category: 'Neural AI',
    link: 'https://neuralinterface.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Space Mission Planning',
    description: 'Intelligent mission planning and optimization for space exploration.',
    icon: Rocket,
    features: ['Mission Optimization', 'Resource Planning', 'Risk Assessment', 'Trajectory Analysis'],
    pricing: '$25,000 - $125,000/month',
    category: 'Space AI',
    link: 'https://spacemission.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Defense',
    description: 'Advanced AI-driven cybersecurity threat detection and response system.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Behavioral Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'Cybersecurity AI',
    link: 'https://cyberai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Financial Trading System',
    description: 'Intelligent algorithmic trading system with advanced market analysis.',
    icon: TrendingUp,
    features: ['Market Analysis', 'Algorithmic Trading', 'Risk Management', 'Portfolio Optimization'],
    pricing: '$10,000 - $50,000/month',
    category: 'Financial AI',
    link: 'https://tradingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Agricultural Optimization',
    description: 'Smart farming solutions using AI for crop optimization and yield prediction.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Pest Detection', 'Resource Optimization'],
    pricing: '$3,000 - $15,000/month',
    category: 'Agricultural AI',
    link: 'https://agriai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Grid Management',
    description: 'Intelligent energy grid optimization and renewable energy integration.',
    icon: Zap,
    features: ['Grid Optimization', 'Demand Forecasting', 'Renewable Integration', 'Load Balancing'],
    pricing: '$8,000 - $40,000/month',
    category: 'Energy AI',
    link: 'https://energyai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Legal Research Assistant',
    description: 'Intelligent legal research and case analysis using natural language processing.',
    icon: BookOpen,
    features: ['Legal Research', 'Case Analysis', 'Document Review', 'Precedent Finding'],
    pricing: '$2,000 - $10,000/month',
    category: 'Legal AI',
    link: 'https://legalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Mental Health Assistant',
    description: 'Intelligent mental health support and therapy assistance platform.',
    icon: Heart,
    features: ['Emotion Analysis', 'Therapy Support', 'Crisis Detection', 'Personalized Care'],
    pricing: '$1,500 - $7,500/month',
    category: 'Healthcare AI',
    link: 'https://mentalhealthai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'Comprehensive AI platform for smart city infrastructure and citizen services.',
    icon: Building,
    features: ['Traffic Optimization', 'Resource Management', 'Citizen Services', 'Predictive Maintenance'],
    pricing: '$15,000 - $75,000/month',
    category: 'Smart Cities AI',
    link: 'https://smartcityai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Manufacturing Quality Control',
    description: 'Intelligent quality control and defect detection for manufacturing processes.',
    icon: Settings,
    features: ['Defect Detection', 'Quality Prediction', 'Process Optimization', 'Real-time Monitoring'],
    pricing: '$5,000 - $25,000/month',
    category: 'Manufacturing AI',
    link: 'https://manufacturingai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Personalized Education',
    description: 'Adaptive learning platform with personalized educational content and assessment.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Adaptive Content', 'Progress Tracking', 'Skill Assessment'],
    pricing: '$2,000 - $10,000/month',
    category: 'Education AI',
    link: 'https://educationai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Automated content moderation and safety monitoring for online platforms.',
    icon: Eye,
    features: ['Content Analysis', 'Safety Detection', 'Policy Enforcement', 'Real-time Monitoring'],
    pricing: '$1,000 - $5,000/month',
    category: 'Content AI',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management and logistics optimization platform.',
    icon: Package,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: '$8,000 - $40,000/month',
    category: 'Supply Chain AI',
    link: 'https://supplychainai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Voice Synthesis',
    description: 'High-quality text-to-speech and voice synthesis for various applications.',
    icon: Mic,
    features: ['Text-to-Speech', 'Voice Cloning', 'Emotion Synthesis', 'Multi-language Support'],
    pricing: '$1,500 - $7,500/month',
    category: 'Speech AI',
    link: 'https://voicesynthesis.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Code Generation',
    description: 'Advanced AI system for automated code generation and software development assistance.',
    icon: Code,
    features: ['Code Generation', 'Bug Detection', 'Code Optimization', 'Multi-language Support'],
    pricing: '$2,000 - $10,000/month',
    category: 'Development AI',
    popular: true,
    link: 'https://codegen.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Medical Diagnosis',
    description: 'Advanced medical AI for diagnostic assistance and treatment recommendations.',
    icon: Heart,
    features: ['Medical Imaging Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'Drug Interaction Check'],
    pricing: '$5,000 - $25,000/month',
    category: 'Medical AI',
    link: 'https://medicalai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Cybersecurity Threat Intelligence',
    description: 'Advanced threat detection and cybersecurity intelligence using machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Risk Assessment'],
    pricing: '$3,000 - $15,000/month',
    category: 'Cybersecurity AI',
    link: 'https://cyberthreat.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Financial Risk Management',
    description: 'Intelligent financial risk assessment and portfolio optimization using AI.',
    icon: TrendingUp,
    features: ['Risk Assessment', 'Portfolio Optimization', 'Market Analysis', 'Fraud Detection'],
    pricing: '$4,000 - $20,000/month',
    category: 'Financial AI',
    link: 'https://riskmanagement.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Language Translation',
    description: 'Real-time language translation with context understanding and cultural adaptation.',
    icon: Globe,
    features: ['Real-time Translation', 'Context Understanding', 'Cultural Adaptation', 'Voice Translation'],
    pricing: '$1,000 - $5,000/month',
    category: 'Language AI',
    link: 'https://translation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Advanced recommendation system for personalized content and product suggestions.',
    icon: Target,
    features: ['Personalized Recommendations', 'Behavioral Analysis', 'A/B Testing', 'Real-time Updates'],
    pricing: '$2,500 - $12,500/month',
    category: 'Recommendation AI',
    link: 'https://recommendations.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Image Generation',
    description: 'Advanced AI for creating high-quality images, artwork, and visual content.',
    icon: Image,
    features: ['Image Generation', 'Style Transfer', 'Upscaling', 'Custom Training'],
    pricing: '$1,500 - $7,500/month',
    category: 'Creative AI',
    link: 'https://imagegen.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Process Automation',
    description: 'Intelligent process automation for business workflows and operations.',
    icon: Settings,
    features: ['Workflow Automation', 'Decision Making', 'Process Optimization', 'Integration'],
    pricing: '$3,000 - $15,000/month',
    category: 'Process AI',
    link: 'https://processai.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Customer Sentiment Analysis',
    description: 'Advanced sentiment analysis for customer feedback and social media monitoring.',
    icon: MessageSquare,
    features: ['Sentiment Analysis', 'Emotion Detection', 'Trend Analysis', 'Real-time Monitoring'],
    pricing: '$1,200 - $6,000/month',
    category: 'Sentiment AI',
    link: 'https://sentiment.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'Intelligent predictive maintenance for industrial equipment and machinery.',
    icon: Settings,
    features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
    pricing: '$4,000 - $20,000/month',
    category: 'Industrial AI',
    link: 'https://predictivemaintenance.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Data Quality Management',
    description: 'Automated data quality assessment and cleaning using machine learning.',
    icon: Database,
    features: ['Data Quality Assessment', 'Automated Cleaning', 'Anomaly Detection', 'Data Validation'],
    pricing: '$2,000 - $10,000/month',
    category: 'Data AI',
    link: 'https://dataquality.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Virtual Assistant Platform',
    description: 'Comprehensive virtual assistant platform with natural language understanding.',
    icon: Bot,
    features: ['Natural Language Processing', 'Task Automation', 'Integration APIs', 'Custom Training'],
    pricing: '$2,500 - $12,500/month',
    category: 'Assistant AI',
    link: 'https://virtualassistant.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Content Moderation',
    description: 'Advanced content moderation system for text, images, and video content.',
    icon: Eye,
    features: ['Multi-modal Detection', 'Real-time Processing', 'Custom Rules', 'API Integration'],
    pricing: '$1,500 - $7,500/month',
    category: 'Content AI',
    link: 'https://contentmoderation.ziontechgroup.com'
  },
  {
    title: 'AI-Powered Energy Optimization',
    description: 'Intelligent energy management and optimization for buildings and facilities.',
    icon: Zap,
    features: ['Energy Monitoring', 'Optimization Algorithms', 'Cost Reduction', 'Sustainability Tracking'],
    pricing: '$3,500 - $17,500/month',
    category: 'Energy AI',
    link: 'https://energyoptimization.ziontechgroup.com'
  }
];

const categories = [
  { name: 'All', count: aiServices.length },
  { name: 'Communication', count: aiServices.filter(s => s.category === 'Communication').length },
  { name: 'Document Processing', count: aiServices.filter(s => s.category === 'Document Processing').length },
  { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  { name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
  { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  { name: 'Speech Processing', count: aiServices.filter(s => s.category === 'Speech Processing').length },
  { name: 'Quantum AI', count: aiServices.filter(s => s.category === 'Quantum AI').length },
  { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length },
  { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length },
  { name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
  { name: 'Environmental AI', count: aiServices.filter(s => s.category === 'Environmental AI').length },
  { name: 'Neural AI', count: aiServices.filter(s => s.category === 'Neural AI').length },
  { name: 'Space AI', count: aiServices.filter(s => s.category === 'Space AI').length },
  { name: 'Cybersecurity AI', count: aiServices.filter(s => s.category === 'Cybersecurity AI').length },
  { name: 'Financial AI', count: aiServices.filter(s => s.category === 'Financial AI').length },
  { name: 'Agricultural AI', count: aiServices.filter(s => s.category === 'Agricultural AI').length },
  { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length },
  { name: 'Legal AI', count: aiServices.filter(s => s.category === 'Legal AI').length },
  { name: 'Smart Cities AI', count: aiServices.filter(s => s.category === 'Smart Cities AI').length },
  { name: 'Manufacturing AI', count: aiServices.filter(s => s.category === 'Manufacturing AI').length },
  { name: 'Education AI', count: aiServices.filter(s => s.category === 'Education AI').length },
  { name: 'Content AI', count: aiServices.filter(s => s.category === 'Content AI').length },
  { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
  { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  { name: 'Development AI', count: aiServices.filter(s => s.category === 'Development AI').length },
  { name: 'Medical AI', count: aiServices.filter(s => s.category === 'Medical AI').length },
  { name: 'Language AI', count: aiServices.filter(s => s.category === 'Language AI').length },
  { name: 'Recommendation AI', count: aiServices.filter(s => s.category === 'Recommendation AI').length },
  { name: 'Creative AI', count: aiServices.filter(s => s.category === 'Creative AI').length },
  { name: 'Process AI', count: aiServices.filter(s => s.category === 'Process AI').length },
  { name: 'Sentiment AI', count: aiServices.filter(s => s.category === 'Sentiment AI').length },
  { name: 'Industrial AI', count: aiServices.filter(s => s.category === 'Industrial AI').length },
  { name: 'Data AI', count: aiServices.filter(s => s.category === 'Data AI').length },
  { name: 'Assistant AI', count: aiServices.filter(s => s.category === 'Assistant AI').length }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI services designed to transform your business. From machine learning to computer vision, we provide comprehensive AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, natural language processing, AI consulting" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we provide comprehensive AI services 
                tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
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

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                        </div>
                        {service.popular && (
                          <div className="ml-auto">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                              Popular
                            </span>
                          </div>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">(4.9)</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Try Now
                        </a>
                        <Link
                          href="/contact"
                          className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Information Section */}
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Contact our AI experts to discuss your artificial intelligence needs and get a custom solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+1 302 464 0950</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-2">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">24/7 Support</p>
              </motion.div>

              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 mb-2">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-500">Middletown, DE 19709</p>
              </motion.div>
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
                Let our AI experts help you implement the perfect solution for your business needs. 
                Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}