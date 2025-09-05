import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
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
  Gamepad2,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets
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
    setupTime: '2-5 weeks',
    targetUsers: 'Customer Service, Content, Legal, Education'
  },
  {
    id: 4,
    title: 'Predictive Analytics Platform',
    description: 'Advanced analytics platform with machine learning capabilities for forecasting and trend analysis.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $4,200/month',
    features: [
      'Advanced forecasting models',
      'Real-time data processing',
      'Interactive dashboards & reports',
      'Anomaly detection & alerting',
      'Custom metric calculations',
      'Data visualization tools',
      'API integration capabilities',
      'Automated report generation'
    ],
    benefits: [
      'Improve forecast accuracy by 60%',
      'Reduce planning time by 75%',
      'Enable data-driven decisions',
      'Increase revenue by 20-30%'
    ],
    marketPrice: '$6,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Finance, Retail, Supply Chain, Marketing'
  },
  {
    id: 5,
    title: 'Conversational AI & Chatbots',
    description: 'Intelligent conversational agents for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM systems',
      'Voice & text capabilities',
      'Sentiment analysis & routing',
      'Custom knowledge base training',
      'Analytics & performance tracking'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Handle 24/7 customer inquiries',
      'Increase customer satisfaction by 40%'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Customer Service, E-commerce, Healthcare, Finance'
  },
  {
    id: 6,
    title: 'AI Content Generation',
    description: 'Automated content creation for marketing, documentation, and communication using advanced AI models.',
    icon: FileText,
    category: 'Content AI',
    price: 'Starting at $1,500/month',
    features: [
      'Automated content writing',
      'Multi-format content generation',
      'Brand voice customization',
      'SEO optimization',
      'Content planning & scheduling',
      'Quality assurance & editing',
      'Multi-language content creation',
      'Performance analytics'
    ],
    benefits: [
      'Reduce content creation time by 80%',
      'Maintain consistent brand voice',
      'Scale content production 10x',
      'Improve SEO performance by 50%'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '1-3 weeks',
    targetUsers: 'Marketing, E-commerce, Media, Education'
  }
];

const categories = [
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Content AI", count: aiServices.filter(s => s.category === "Content AI").length }
];

export default function AIServicesPage() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group | 80+ Cutting-Edge AI Solutions"
      description="Discover our comprehensive AI services including machine learning, computer vision, NLP, and conversational AI. Expert implementation with competitive pricing starting at $1,500/month."
      keywords="AI services, machine learning, computer vision, NLP, conversational AI, predictive analytics, AI automation"
    >
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
                AI Services
                <span className="block text-blue-400">80+ Cutting-Edge Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive AI services. From machine learning and computer vision to conversational AI and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">80+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">Our Price</span>
                        <span className="text-lg font-bold text-green-600">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">Market Price</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-500">Setup Time</span>
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <span className="text-xs text-gray-500">Target Users: {service.targetUsers}</span>
                    </div>

                    <div className="flex space-x-3">
                      <Link 
                        href="/contact" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link 
                        href={`/ai-services/${service.id}`} 
                        className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-semibold text-center transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get started with our AI services today. Our experts are ready to help you implement the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your AI Journey
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}