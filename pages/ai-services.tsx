import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
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
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer Service, Content, Legal, Healthcare'
  },
  {
    id: 4,
    title: 'Predictive Analytics & Forecasting',
    description: 'Advanced predictive models for business forecasting, demand planning, and risk assessment using machine learning.',
    icon: TrendingUp,
    category: 'Machine Learning',
    price: 'Starting at $3,200/month',
    features: [
      'Demand forecasting & planning',
      'Financial risk assessment',
      'Customer behavior prediction',
      'Market trend analysis',
      'Inventory optimization',
      'Sales forecasting',
      'Churn prediction',
      'Price optimization'
    ],
    benefits: [
      'Improve forecast accuracy by 60-80%',
      'Reduce inventory costs by 25-40%',
      'Increase revenue by 15-30%',
      'Minimize business risks'
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Retail, Finance, Manufacturing, E-commerce'
  },
  {
    id: 5,
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI solutions for customer service, sales, and internal operations.',
    icon: Bot,
    category: 'NLP',
    price: 'Starting at $1,800/month',
    features: [
      'Natural conversation handling',
      'Multi-channel deployment',
      'Integration with CRM systems',
      'Voice & text capabilities',
      'Context-aware responses',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Increase customer satisfaction by 40%',
      'Enable 24/7 customer service'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer Service, E-commerce, Healthcare, Finance'
  },
  {
    id: 6,
    title: 'AI-Powered Document Processing',
    description: 'Intelligent document analysis, extraction, and processing for automated workflows and compliance.',
    icon: FileText,
    category: 'Computer Vision',
    price: 'Starting at $2,500/month',
    features: [
      'Document classification & sorting',
      'Data extraction & validation',
      'Contract analysis & review',
      'Invoice processing automation',
      'Compliance monitoring',
      'Multi-format support (PDF, Word, Excel)',
      'Batch processing capabilities',
      'Integration with existing systems'
    ],
    benefits: [
      'Process documents 10x faster',
      'Reduce manual errors by 95%',
      'Improve compliance accuracy by 80%',
      'Save 70% on document processing costs'
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Legal, Finance, Healthcare, Insurance'
  },
  {
    id: 7,
    title: 'AI-Powered Recommendation Systems',
    description: 'Personalized recommendation engines for e-commerce, content, and service platforms.',
    icon: Target,
    category: 'Machine Learning',
    price: 'Starting at $2,800/month',
    features: [
      'Personalized product recommendations',
      'Content recommendation engines',
      'Cross-selling & upselling',
      'Real-time personalization',
      'A/B testing & optimization',
      'Multi-channel recommendations',
      'Behavioral analysis',
      'Performance analytics'
    ],
    benefits: [
      'Increase conversion rates by 25-50%',
      'Boost average order value by 30%',
      'Improve customer engagement by 40%',
      'Reduce bounce rates by 35%'
    ],
    marketPrice: '$4,500-10,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'E-commerce, Media, Streaming, Retail'
  },
  {
    id: 8,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning and behavioral analysis.',
    icon: Shield,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Real-time fraud detection',
      'Behavioral pattern analysis',
      'Anomaly detection algorithms',
      'Risk scoring & assessment',
      'Multi-channel monitoring',
      'Adaptive learning models',
      'False positive reduction',
      'Integration with payment systems'
    ],
    benefits: [
      'Reduce fraud losses by 80-90%',
      'Decrease false positives by 60%',
      'Improve detection speed by 95%',
      'Lower operational costs by 50%'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Banking, E-commerce, Insurance, Fintech'
  },
  {
    id: 9,
    title: 'AI-Powered Image & Video Analysis',
    description: 'Advanced computer vision solutions for content moderation, quality control, and automated analysis.',
    icon: Camera,
    category: 'Computer Vision',
    price: 'Starting at $2,200/month',
    features: [
      'Content moderation & filtering',
      'Quality control automation',
      'Object & scene recognition',
      'Facial recognition & analysis',
      'Video content analysis',
      'Real-time processing',
      'Custom model training',
      'API integration'
    ],
    benefits: [
      'Automate content moderation 24/7',
      'Improve quality control accuracy by 95%',
      'Reduce manual review time by 90%',
      'Scale content analysis operations'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Social Media, E-commerce, Manufacturing, Security'
  },
  {
    id: 10,
    title: 'AI-Powered Voice & Speech Processing',
    description: 'Advanced voice recognition, speech-to-text, and voice analytics solutions.',
    icon: Mic,
    category: 'NLP',
    price: 'Starting at $2,000/month',
    features: [
      'Speech-to-text conversion',
      'Voice recognition & authentication',
      'Sentiment analysis from voice',
      'Multi-language support',
      'Real-time transcription',
      'Voice command processing',
      'Call center analytics',
      'Custom voice models'
    ],
    benefits: [
      'Improve accessibility by 100%',
      'Reduce transcription costs by 80%',
      'Enhance customer experience by 45%',
      'Enable hands-free operations'
    ],
    marketPrice: '$3,200-7,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Healthcare, Call Centers, Accessibility, IoT'
  },
  {
    id: 11,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, route optimization, and inventory management.',
    icon: Truck,
    category: 'Machine Learning',
    price: 'Starting at $4,000/month',
    features: [
      'Demand forecasting & planning',
      'Route optimization algorithms',
      'Inventory level optimization',
      'Supplier performance analysis',
      'Risk assessment & mitigation',
      'Cost optimization',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    benefits: [
      'Reduce supply chain costs by 20-35%',
      'Improve delivery accuracy by 90%',
      'Optimize inventory levels by 40%',
      'Minimize supply chain risks'
    ],
    marketPrice: '$6,500-15,000/month',
    setupTime: '6-8 weeks',
    targetUsers: 'Logistics, Manufacturing, Retail, E-commerce'
  },
  {
    id: 12,
    title: 'AI-Powered Healthcare Solutions',
    description: 'Medical AI solutions for diagnosis assistance, drug discovery, and patient care optimization.',
    icon: Heart,
    category: 'Machine Learning',
    price: 'Starting at $5,000/month',
    features: [
      'Medical image analysis',
      'Drug discovery assistance',
      'Patient risk assessment',
      'Treatment recommendation',
      'Clinical decision support',
      'Medical record analysis',
      'Predictive health modeling',
      'Compliance monitoring'
    ],
    benefits: [
      'Improve diagnostic accuracy by 30-50%',
      'Reduce treatment costs by 25%',
      'Enhance patient outcomes by 40%',
      'Accelerate drug discovery by 60%'
    ],
    marketPrice: '$8,000-20,000/month',
    setupTime: '8-12 weeks',
    targetUsers: 'Hospitals, Clinics, Pharmaceutical, Research'
  },
  {
    id: 13,
    title: 'AI-Powered Financial Analysis',
    description: 'Intelligent financial analysis, trading algorithms, and risk management solutions.',
    icon: PieChart,
    category: 'Machine Learning',
    price: 'Starting at $4,500/month',
    features: [
      'Algorithmic trading systems',
      'Risk assessment & management',
      'Credit scoring & analysis',
      'Market trend prediction',
      'Portfolio optimization',
      'Fraud detection & prevention',
      'Regulatory compliance',
      'Real-time market analysis'
    ],
    benefits: [
      'Improve trading performance by 25-40%',
      'Reduce financial risks by 60%',
      'Enhance decision-making speed by 90%',
      'Optimize portfolio returns by 30%'
    ],
    marketPrice: '$7,500-18,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Banks, Investment Firms, Fintech, Insurance'
  },
  {
    id: 14,
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing automation with personalization, campaign optimization, and customer journey mapping.',
    icon: Target,
    category: 'Machine Learning',
    price: 'Starting at $2,500/month',
    features: [
      'Customer segmentation & targeting',
      'Campaign optimization',
      'Personalized content generation',
      'Email marketing automation',
      'Social media management',
      'Lead scoring & nurturing',
      'ROI optimization',
      'Cross-channel coordination'
    ],
    benefits: [
      'Increase marketing ROI by 200-300%',
      'Improve conversion rates by 50%',
      'Reduce customer acquisition costs by 40%',
      'Enhance customer lifetime value by 60%'
    ],
    marketPrice: '$4,000-10,000/month',
    setupTime: '3-5 weeks',
    targetUsers: 'Marketing Agencies, E-commerce, SaaS, Retail'
  },
  {
    id: 15,
    title: 'AI-Powered Quality Assurance',
    description: 'Automated quality testing and assurance solutions for software, products, and processes.',
    icon: CheckCircle,
    category: 'Computer Vision',
    price: 'Starting at $2,000/month',
    features: [
      'Automated testing frameworks',
      'Visual regression testing',
      'Performance monitoring',
      'Bug detection & classification',
      'Test case generation',
      'Quality metrics tracking',
      'Continuous integration',
      'Predictive quality analysis'
    ],
    benefits: [
      'Reduce testing time by 70%',
      'Improve test coverage by 90%',
      'Decrease bug detection time by 80%',
      'Lower quality assurance costs by 50%'
    ],
    marketPrice: '$3,500-8,500/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Software Development, Manufacturing, E-commerce, SaaS'
  }
];

const categories = [
  { name: 'Machine Learning', count: 4 },
  { name: 'Computer Vision', count: 3 },
  { name: 'NLP', count: 2 },
  { name: 'Analytics', count: 2 },
  { name: 'Conversational AI', count: 1 },
  { name: 'Quantum AI', count: 1 },
  { name: 'Healthcare AI', count: 1 },
  { name: 'Financial AI', count: 1 },
  { name: 'Marketing AI', count: 1 },
  { name: 'Quality Assurance', count: 1 }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, and advanced AI solutions for businesses." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver intelligent automation that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
                <Link href="#services" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Explore Services
                </Link>
              </div>
            </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your digital transformation and drive innovation.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                      <span className="text-sm text-blue-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">{service.perUnit}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>Timeline: {service.timeline}</span>
                    <span>Benefits: {service.benefits.length} key benefits</span>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
