<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import React from 'react';
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
<<<<<<< HEAD
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Users,
  Award,
  TrendingUp,
  Database,
  Cpu,
  Network,
  Target,
  Rocket
} from 'lucide-react';

const aiServices = [
  {
<<<<<<< HEAD
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your business needs with advanced algorithms and real-time processing",
    icon: Brain,
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Processing", "Model Optimization"],
    pricing: "Starting at $3,000/month"
  },
  {
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions for automation and quality control",
    icon: Eye,
    features: ["Object Detection", "Image Classification", "Facial Recognition", "Quality Control"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "Natural Language Processing",
    description: "Intelligent text analysis and language understanding for chatbots and content processing",
    icon: MessageSquare,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation", "Content Generation"],
    pricing: "Starting at $2,200/month"
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting to optimize business decisions and outcomes",
    icon: BarChart3,
    features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"],
    pricing: "Starting at $2,800/month"
  },
  {
    title: "AI Automation",
    description: "Intelligent process automation to streamline workflows and reduce manual tasks",
    icon: Zap,
    features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "AI Security",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
    features: [
      'Threat detection and analysis',
      'Automated incident response',
      'Behavioral analytics',
      'Vulnerability assessment',
      'Security monitoring'
    ],
    price: '$4,000 - $15,000/month',
    benefits: [
      'Enhanced security posture',
      'Reduced false positives',
      'Faster threat response',
      'Compliance automation'
    ],
    marketPrice: '$7,000 - $25,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Financial Services, Healthcare, Government, Enterprise'
  },
  {
    id: 6,
    name: 'Conversational AI & Chatbots',
    description: 'Intelligent virtual assistants and customer service automation',
=======
    title: 'Natural Language Processing',
    description: 'Advanced text analysis and language understanding for your business.',
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    icon: MessageSquare,
    features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation'],
    price: '$1,500/month',
    benefits: ['Better customer insights', 'Automated content', 'Multilingual support', 'Cost efficiency']
  },
  {
    title: 'Computer Vision Solutions',
    description: 'Image and video analysis powered by cutting-edge AI technology.',
    icon: Eye,
    features: ['Object detection', 'Image classification', 'Video analysis', 'Custom models'],
    price: '$2,000/month',
    benefits: ['Automated visual analysis', 'Quality control', 'Security monitoring', 'Process optimization']
  },
  {
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Intelligent conversational agents for customer service and support.',
    icon: Bot,
    features: ['24/7 availability', 'Natural conversations', 'Multi-language support', 'Integration ready'],
    price: '$800/month',
    benefits: ['Improved customer service', 'Reduced support costs', 'Scalable solutions', 'Better user experience']
  },
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models tailored to your specific business needs.',
    icon: Brain,
<<<<<<< HEAD
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Side effect prediction',
      'Drug repurposing analysis'
    ],
    price: '$4,500 - $20,000/month',
    benefits: [
      'Faster drug development',
      'Reduced R&D costs',
      'Improved success rates',
      'Personalized medicine'
    ],
    marketPrice: '$7,000 - $35,000/month',
    setupTime: '8-16 weeks',
    targetUsers: 'Pharmaceutical Companies, Research Labs, Biotech'
  },
  {
    id: 9,
    name: 'AI Climate & Environmental Solutions',
    description: 'Environmental monitoring and climate change mitigation using AI',
    icon: TrendingUp,
    features: [
      'Climate data analysis',
      'Environmental monitoring',
      'Carbon footprint optimization',
      'Renewable energy forecasting',
      'Sustainability reporting'
    ],
    price: '$2,200 - $7,000/month',
    benefits: [
      'Environmental compliance',
      'Cost savings on energy',
      'Sustainability goals achievement',
      'Risk mitigation'
    ],
    marketPrice: '$3,500 - $12,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Energy Companies, Government, Environmental Organizations'
  },
  {
    id: 10,
    name: 'AI Space Technology & Research',
    description: 'Space exploration and satellite data analysis using advanced AI',
    icon: Rocket,
    features: [
      'Satellite data processing',
      'Space mission optimization',
      'Astronomical data analysis',
      'Space weather prediction',
      'Autonomous space systems'
    ],
    price: '$3,500 - $12,000/month',
    benefits: [
      'Enhanced space missions',
      'Improved data accuracy',
      'Cost-effective operations',
      'Scientific breakthroughs'
    ],
    marketPrice: '$5,500 - $20,000/month',
    setupTime: '6-12 weeks',
    targetUsers: 'Space Agencies, Satellite Companies, Research Institutions'
=======
    features: ['Predictive analytics', 'Custom algorithms', 'Data training', 'Model optimization'],
    price: '$3,000/month',
    benefits: ['Data-driven decisions', 'Predictive insights', 'Competitive advantage', 'Scalable intelligence']
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
  }
];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServicesPage() {
  return (
<<<<<<< HEAD
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and cutting-edge quantum AI solutions."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                AI Services That Transform Businesses
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Harness the power of artificial intelligence to drive innovation and growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Portfolio
                </motion.button>
              </div>
            </motion.div>
=======
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including natural language processing, computer vision, chatbots, and machine learning models."
      keywords="AI services, machine learning, natural language processing, computer vision, chatbots, artificial intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From natural language processing to computer vision, we deliver AI that works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Excellence in Numbers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our track record speaks for itself with proven results and satisfied clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Harness AI Power?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive edge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Start AI Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Schedule Demo
                </motion.button>
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your AI needs and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 302 464 0950</span>
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}