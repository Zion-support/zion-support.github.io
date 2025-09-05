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
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that provides 24/7 customer support with human-like responses and context understanding.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,500/month',
    features: [
      'Natural language understanding',
      'Multi-channel deployment (web, mobile, social)',
      'Context-aware conversations',
      'Integration with CRM systems',
      'Sentiment analysis & emotion detection',
      'Multi-language support',
      'Voice & text capabilities',
      'Learning from interactions'
    ],
    benefits: [
      '80% reduction in support tickets',
      '24/7 customer availability',
      '60% faster response times',
      'Improved customer satisfaction scores'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, SaaS, Healthcare, Finance'
  },
  {
    id: 2,
    title: 'Predictive Analytics & Forecasting',
    description: 'Advanced machine learning models that predict future trends, customer behavior, and business outcomes with high accuracy.',
    icon: TrendingUp,
    category: 'Machine Learning',
    price: 'Starting at $2,500/month',
    features: [
      'Sales forecasting & demand prediction',
      'Customer lifetime value analysis',
      'Churn prediction & prevention',
      'Inventory optimization',
      'Risk assessment & fraud detection',
      'Market trend analysis',
      'Real-time predictions',
      'Custom model development'
    ],
    benefits: [
      '25-40% improvement in forecast accuracy',
      '30% reduction in inventory costs',
      '50% better customer retention',
      'ROI increase of 35-60%'
    ],
    marketPrice: '$4,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Retail, Finance, Manufacturing, E-commerce'
  },
  {
    id: 3,
    title: 'Computer Vision & Image Recognition',
    description: 'Advanced visual AI that analyzes images and videos for object detection, quality control, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,200/month',
    features: [
      'Object detection & classification',
      'Facial recognition & analysis',
      'Quality control automation',
      'OCR & document processing',
      'Video analytics & monitoring',
      'Medical image analysis',
      'Real-time processing',
      'Custom model training'
    ],
    benefits: [
      '95%+ accuracy in visual tasks',
      '90% reduction in inspection time',
      '24/7 automated monitoring',
      '50% cost savings in quality control'
    ],
    marketPrice: '$3,500-10,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Healthcare, Security, Retail'
  },
  {
    id: 4,
    title: 'Natural Language Processing (NLP)',
    description: 'Intelligent text analysis, sentiment detection, and language understanding for automated content processing and insights.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $1,800/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Entity extraction & NER',
      'Multi-language support'
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      '35% improvement in content quality',
      '70% reduction in moderation costs',
      'Enable multilingual operations'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Content, Legal, Healthcare, Customer Service'
  },
  {
    id: 5,
    title: 'AI-Powered Content Generation',
    description: 'Intelligent content creation platform that generates high-quality text, images, and multimedia content for marketing and communication.',
    icon: FileText,
    category: 'Generative AI',
    price: 'Starting at $1,200/month',
    features: [
      'Blog post & article generation',
      'Social media content creation',
      'Email marketing automation',
      'Product descriptions & copywriting',
      'Image generation & editing',
      'Video script creation',
      'SEO-optimized content',
      'Brand voice customization'
    ],
    benefits: [
      '10x faster content production',
      '40% higher engagement rates',
      'Consistent brand voice',
      'SEO-optimized output'
    ],
    marketPrice: '$2,000-5,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing, Content, E-commerce, Agencies'
  },
  {
    id: 6,
    title: 'AI-Driven Personalization Engine',
    description: 'Advanced personalization system that delivers tailored experiences, recommendations, and content to individual users.',
    icon: Target,
    category: 'Personalization',
    price: 'Starting at $2,000/month',
    features: [
      'Product recommendation engine',
      'Dynamic content personalization',
      'Behavioral analysis & segmentation',
      'Real-time decision making',
      'A/B testing automation',
      'Cross-channel personalization',
      'Customer journey optimization',
      'Performance analytics'
    ],
    benefits: [
      '25-40% increase in conversion rates',
      '60% improvement in user engagement',
      '35% higher average order value',
      'Personalized customer experiences'
    ],
    marketPrice: '$3,500-8,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'E-commerce, SaaS, Media, Retail'
  },
  {
    id: 7,
    title: 'AI-Powered Data Analytics',
    description: 'Intelligent data analysis platform that automatically discovers insights, patterns, and trends from complex datasets.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $1,500/month',
    features: [
      'Automated insight discovery',
      'Pattern recognition & anomaly detection',
      'Predictive data modeling',
      'Interactive dashboards',
      'Natural language queries',
      'Real-time data processing',
      'Custom report generation',
      'Data visualization'
    ],
    benefits: [
      '80% faster insight discovery',
      'Automated report generation',
      'Real-time data monitoring',
      'Data-driven decision making'
    ],
    marketPrice: '$2,500-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Finance, Healthcare, Manufacturing, Marketing'
  },
  {
    id: 8,
    title: 'AI Voice & Speech Processing',
    description: 'Advanced voice AI that enables speech recognition, voice synthesis, and intelligent voice interactions for applications.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $1,600/month',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice command recognition',
      'Multi-language voice support',
      'Voice biometrics & authentication',
      'Real-time voice processing',
      'Custom voice model training',
      'Voice analytics & insights'
    ],
    benefits: [
      '95%+ speech recognition accuracy',
      'Natural voice interactions',
      'Multi-language support',
      'Enhanced accessibility'
    ],
    marketPrice: '$2,800-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Healthcare, Customer Service, Accessibility, IoT'
  },
  {
    id: 9,
    title: 'AI-Powered Search & Discovery',
    description: 'Intelligent search engine that understands context, intent, and provides relevant results with semantic understanding.',
    icon: Search,
    category: 'Search AI',
    price: 'Starting at $1,400/month',
    features: [
      'Semantic search capabilities',
      'Natural language queries',
      'Context-aware results',
      'Auto-complete & suggestions',
      'Visual search & image recognition',
      'Voice search support',
      'Multi-modal search',
      'Search analytics & optimization'
    ],
    benefits: [
      '60% improvement in search relevance',
      'Faster content discovery',
      'Enhanced user experience',
      'Reduced search abandonment'
    ],
    marketPrice: '$2,200-5,500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Content, Knowledge Management, E-learning'
  },
  {
    id: 10,
    title: 'AI Process Automation',
    description: 'Intelligent automation platform that uses AI to automate complex business processes and workflows.',
    icon: Zap,
    category: 'Automation',
    price: 'Starting at $1,800/month',
    features: [
      'Intelligent document processing',
      'Workflow automation & orchestration',
      'Decision-making automation',
      'Exception handling & escalation',
      'Process optimization & learning',
      'Integration with existing systems',
      'Real-time monitoring & alerts',
      'Custom automation rules'
    ],
    benefits: [
      '70% reduction in manual work',
      'Faster process execution',
      'Reduced human errors',
      'Improved operational efficiency'
    ],
    marketPrice: '$3,000-8,000/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Finance, Healthcare, Legal, Manufacturing'
  }
];

const categories = [
  { name: "All", count: aiServices.length },
  { name: "Conversational AI", count: aiServices.filter(s => s.category === "Conversational AI").length },
  { name: "Machine Learning", count: aiServices.filter(s => s.category === "Machine Learning").length },
  { name: "Computer Vision", count: aiServices.filter(s => s.category === "Computer Vision").length },
  { name: "NLP", count: aiServices.filter(s => s.category === "NLP").length },
  { name: "Generative AI", count: aiServices.filter(s => s.category === "Generative AI").length },
  { name: "Personalization", count: aiServices.filter(s => s.category === "Personalization").length },
  { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length },
  { name: "Voice AI", count: aiServices.filter(s => s.category === "Voice AI").length },
  { name: "Search AI", count: aiServices.filter(s => s.category === "Search AI").length },
  { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length }
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