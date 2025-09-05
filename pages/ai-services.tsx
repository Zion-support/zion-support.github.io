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
  {
    id: 1,
    title: 'GPT-4o & Advanced LLM Integration',
    description: 'Custom large language model solutions with GPT-4o, Claude, and other cutting-edge models for enterprise applications.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $2,500/month',
    features: [
      'GPT-4o API integration & optimization',
      'Custom prompt engineering',
      'Fine-tuned model deployment',
      'Multi-model orchestration',
      'Context-aware responses',
      'Cost optimization strategies',
      'Real-time inference APIs',
      'Custom training pipelines'
    ],
    benefits: [
      '95% accuracy in complex reasoning tasks',
      '60% reduction in development time',
      '40% cost savings vs building from scratch',
      'Seamless integration with existing systems'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Enterprise, SaaS, Content, Customer Service'
  },
  {
    id: 2,
    title: 'AI-Powered Document Intelligence',
    description: 'Advanced document processing with OCR, classification, and data extraction using state-of-the-art computer vision and NLP.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $1,800/month',
    features: [
      'Advanced OCR with 99.5% accuracy',
      'Document classification & routing',
      'Intelligent data extraction',
      'Multi-format support (PDF, images, scans)',
      'Handwriting recognition',
      'Table & form extraction',
      'Automated validation & verification',
      'Real-time processing pipeline'
    ],
    benefits: [
      '90% reduction in manual data entry',
      'Process 10,000+ documents per hour',
      '99.5% accuracy in data extraction',
      '50% faster document processing'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Finance, Legal, Healthcare, Insurance'
  },
  {
    id: 3,
    title: 'Conversational AI & Chatbots',
    description: 'Intelligent conversational agents with natural language understanding, context awareness, and human-like interactions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $1,200/month',
    features: [
      'Natural language understanding',
      'Multi-turn conversation handling',
      'Intent recognition & entity extraction',
      'Voice & text integration',
      'Knowledge base integration',
      'Sentiment analysis & emotion detection',
      'Multi-language support',
      'Human handoff capabilities'
    ],
    benefits: [
      '80% reduction in support tickets',
      '24/7 customer availability',
      '90% customer satisfaction rate',
      '60% cost savings on support'
    ],
    marketPrice: '$2,000-4,500/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Customer Service, E-commerce, Healthcare, Education'
  },
  {
    id: 4,
    title: 'Predictive Analytics & Forecasting',
    description: 'Advanced predictive models for demand forecasting, risk assessment, and business intelligence using machine learning.',
    icon: BarChart3,
    category: 'Machine Learning',
    price: 'Starting at $2,200/month',
    features: [
      'Time series forecasting',
      'Demand prediction models',
      'Risk assessment algorithms',
      'Anomaly detection systems',
      'Real-time predictions',
      'Custom model training',
      'Performance monitoring',
      'Automated retraining'
    ],
    benefits: [
      '85% accuracy in demand forecasting',
      '30% reduction in inventory costs',
      '40% improvement in planning accuracy',
      'Real-time business insights'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Retail, Manufacturing, Finance, Supply Chain'
  },
  {
    id: 5,
    title: 'AI-Powered Content Generation',
    description: 'Intelligent content creation using advanced language models for marketing, documentation, and creative writing.',
    icon: FileText,
    category: 'NLP',
    price: 'Starting at $1,500/month',
    features: [
      'AI content writing & editing',
      'Multi-format content generation',
      'Brand voice customization',
      'SEO optimization',
      'Content personalization',
      'Plagiarism detection',
      'Multi-language content',
      'Quality scoring & improvement'
    ],
    benefits: [
      '70% faster content creation',
      '50% reduction in writing costs',
      '40% improvement in engagement',
      'Consistent brand messaging'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, Content, E-commerce, Publishing'
  },
  {
    id: 6,
    title: 'Computer Vision for Quality Control',
    description: 'Automated visual inspection systems for manufacturing, retail, and quality assurance using advanced computer vision.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Defect detection & classification',
      'Real-time visual inspection',
      'Quality scoring algorithms',
      'Multi-angle analysis',
      'Custom model training',
      'Integration with production lines',
      'Statistical process control',
      'Automated reporting'
    ],
    benefits: [
      '95% accuracy in defect detection',
      '60% reduction in inspection time',
      '40% improvement in product quality',
      '24/7 automated monitoring'
    ],
    marketPrice: '$4,500-9,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Manufacturing, Automotive, Electronics, Food'
  },
  {
    id: 7,
    title: 'AI-Powered Recommendation Systems',
    description: 'Intelligent recommendation engines for personalized user experiences, product suggestions, and content curation.',
    icon: Target,
    category: 'Machine Learning',
    price: 'Starting at $1,800/month',
    features: [
      'Collaborative filtering',
      'Content-based recommendations',
      'Hybrid recommendation models',
      'Real-time personalization',
      'A/B testing framework',
      'Cold start problem solutions',
      'Multi-criteria recommendations',
      'Performance analytics'
    ],
    benefits: [
      '35% increase in conversion rates',
      '50% improvement in user engagement',
      '25% boost in average order value',
      'Personalized user experiences'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Media, SaaS, Retail'
  },
  {
    id: 8,
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention systems using machine learning for real-time transaction monitoring.',
    icon: Shield,
    category: 'Machine Learning',
    price: 'Starting at $2,500/month',
    features: [
      'Real-time fraud scoring',
      'Behavioral analysis',
      'Anomaly detection',
      'Pattern recognition',
      'Risk assessment models',
      'Automated decision making',
      'False positive reduction',
      'Continuous learning'
    ],
    benefits: [
      '90% reduction in fraud losses',
      '95% accuracy in fraud detection',
      '60% reduction in false positives',
      'Real-time protection'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Finance, E-commerce, Insurance, Banking'
  },
  {
    id: 9,
    title: 'AI-Powered Voice Analytics',
    description: 'Advanced voice analysis for sentiment detection, emotion recognition, and speech analytics in customer interactions.',
    icon: Mic,
    category: 'NLP',
    price: 'Starting at $1,600/month',
    features: [
      'Voice sentiment analysis',
      'Emotion recognition',
      'Speaker identification',
      'Call quality assessment',
      'Real-time transcription',
      'Keyword extraction',
      'Conversation analytics',
      'Performance insights'
    ],
    benefits: [
      '85% accuracy in sentiment detection',
      '40% improvement in customer satisfaction',
      'Real-time conversation insights',
      'Automated quality monitoring'
    ],
    marketPrice: '$2,800-5,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Call Centers, Customer Service, Sales, Healthcare'
  },
  {
    id: 10,
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, route optimization, and inventory management.',
    icon: Truck,
    category: 'Machine Learning',
    price: 'Starting at $3,200/month',
    features: [
      'Demand forecasting',
      'Route optimization',
      'Inventory optimization',
      'Supplier risk assessment',
      'Cost optimization',
      'Real-time tracking',
      'Predictive maintenance',
      'Sustainability metrics'
    ],
    benefits: [
      '25% reduction in logistics costs',
      '30% improvement in delivery times',
      '40% reduction in stockouts',
      '20% increase in efficiency'
    ],
    marketPrice: '$5,000-10,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Logistics, Manufacturing, Retail, E-commerce'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length }
];

export default function AIServicesPage() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group | Machine Learning, Computer Vision & NLP"
      description="Comprehensive AI services including machine learning, computer vision, natural language processing, and custom AI solutions. Transform your business with cutting-edge AI technology."
      keywords="AI services, machine learning, computer vision, NLP, artificial intelligence, AI consulting, custom AI solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Services</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning models to computer vision and natural language processing, we deliver intelligent solutions that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-gray-500 ml-2">({service.setupTime})</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Implement AI?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our AI experts help you identify the best solutions for your business and implement them successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}