import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Zap, Shield, Database, BarChart3, Users, MessageSquare, Search, Eye, 
  Target, TrendingUp, CheckCircle, ArrowRight, Clock, Award, Star, Globe, Lock, 
  Cpu, Bot, FileText, Video, Mic, Code, Settings, Monitor, Smartphone, Cloud, 
  Server, Network, Car, Rocket, Heart, Building, Sprout, Mail, ShoppingCart, 
  BookOpen, Home, Gamepad2, Music, Palette, Camera, Phone, MapPin, Droplets,
  Gamepad2 as Gamepad, Camera as CameraIcon
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email responses using advanced NLP and machine learning algorithms.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-categorization', 'Smart Routing'],
    pricing: '$2,000 - $8,000 setup',
    category: 'Automation',
    popular: true,
    benefits: ['Time Savings', 'Improved Response Time', 'Consistent Quality', '24/7 Availability'],
    marketPrice: '$3,000 - $12,000/setup',
    link: 'https://ziontechgroup.com/ai-email-responder'
  },
  {
    title: 'Predictive Analytics Platform',
    description: 'Advanced forecasting and predictive modeling for business intelligence.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Machine Learning Models', 'Real-time Predictions', 'Custom Dashboards'],
    pricing: '$4,000 - $20,000 project',
    category: 'Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Risk Reduction', 'Revenue Optimization', 'Competitive Advantage'],
    marketPrice: '$6,000 - $30,000/project',
    link: 'https://ziontechgroup.com/predictive-analytics'
  },
  {
    title: 'Intelligent Chatbot System',
    description: 'AI-powered customer support with natural conversation capabilities.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: '$1,000 - $6,000/month',
    category: 'Customer Service',
    popular: true,
    benefits: ['24/7 Support', 'Cost Reduction', 'Improved Satisfaction', 'Scalable Solutions'],
    marketPrice: '$1,500 - $9,000/month',
    link: 'https://ziontechgroup.com/intelligent-chatbot'
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis using deep learning algorithms.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: '$5,000 - $25,000 project',
    category: 'Computer Vision',
    benefits: ['Automated Analysis', 'Quality Control', 'Security Enhancement', 'Process Optimization'],
    marketPrice: '$7,500 - $37,500/project',
    link: 'https://ziontechgroup.com/computer-vision'
  },
  {
    title: 'AI-Powered Content Generation',
    description: 'Automated content creation for marketing, documentation, and creative writing.',
    icon: FileText,
    features: ['Text Generation', 'Content Optimization', 'SEO Enhancement', 'Multi-format Output'],
    pricing: '$2,000 - $10,000/month',
    category: 'Content Creation',
    popular: true,
    benefits: ['Increased Productivity', 'Consistent Quality', 'Cost Savings', 'Scalable Content'],
    marketPrice: '$3,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-content-generation'
  },
  {
    title: 'Machine Learning Model Development',
    description: 'Custom ML models tailored to your specific business needs and data.',
    icon: Brain,
    features: ['Custom Algorithm Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
    pricing: '$10,000 - $50,000 project',
    category: 'Machine Learning',
    popular: true,
    benefits: ['Custom Solutions', 'High Accuracy', 'Business-Specific', 'Competitive Edge'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/ml-model-development'
  },
  {
    title: 'AI-Powered Fraud Detection',
    description: 'Advanced fraud detection and prevention using machine learning algorithms.',
    icon: Shield,
    features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts'],
    pricing: '$8,000 - $40,000 project',
    category: 'Security',
    benefits: ['Reduced Losses', 'Real-time Protection', 'Automated Response', 'Compliance Ready'],
    marketPrice: '$12,000 - $60,000/project',
    link: 'https://ziontechgroup.com/ai-fraud-detection'
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding capabilities.',
    icon: MessageSquare,
    features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Entity Recognition'],
    pricing: '$3,000 - $15,000 project',
    category: 'NLP',
    benefits: ['Text Understanding', 'Automated Processing', 'Multi-language Support', 'Insight Extraction'],
    marketPrice: '$4,500 - $22,500/project',
    link: 'https://ziontechgroup.com/natural-language-processing'
  },
  {
    title: 'AI-Powered Recommendation Engine',
    description: 'Personalized recommendation system for e-commerce and content platforms.',
    icon: Target,
    features: ['Collaborative Filtering', 'Content-Based Filtering', 'Real-time Updates', 'A/B Testing'],
    pricing: '$3,000 - $15,000 setup',
    category: 'E-commerce',
    benefits: ['Increased Sales', 'Better User Experience', 'Personalization', 'Higher Engagement'],
    marketPrice: '$4,500 - $22,500/setup',
    link: 'https://ziontechgroup.com/recommendation-engine'
  },
  {
    title: 'AI-Powered Supply Chain Optimization',
    description: 'Intelligent supply chain management with predictive analytics and automation.',
    icon: Network,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Risk Analysis'],
    pricing: '$15,000 - $75,000 project',
    category: 'Logistics',
    benefits: ['Cost Reduction', 'Efficiency Improvement', 'Risk Mitigation', 'Customer Satisfaction'],
    marketPrice: '$22,500 - $112,500/project',
    link: 'https://ziontechgroup.com/supply-chain-ai'
  }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, NLP, and predictive analytics solutions." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, artificial intelligence" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="text-blue-400 mr-3" size={32} />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="text-green-400 mr-2" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <ArrowRight className="text-blue-400 mr-2" size={14} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <Link 
                      href={service.link}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI solutions can accelerate your growth and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/micro-saas"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View Micro SaaS Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}