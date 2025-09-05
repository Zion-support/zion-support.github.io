import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Bot, 
  FileText, 
  Target, 
  Settings, 
  Image, 
  Mic, 
  Search, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  DollarSign
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    title: "Machine Learning & AI Development",
    description: "Custom AI solutions and machine learning models tailored to your business needs",
    icon: Brain,
    features: ['Custom ML Models', 'Data Analysis', 'Predictive Analytics', 'Model Training'],
    price: 'Starting at $2,500/month',
    category: 'Core AI'
  },
  {
    id: 2,
    title: "Computer Vision Solutions",
    description: "Advanced image and video processing using cutting-edge computer vision technology",
    icon: Image,
    features: ['Object Detection', 'Image Recognition', 'Video Analysis', 'Real-time Processing'],
    price: 'Starting at $3,000/month',
    category: 'Vision AI'
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and language understanding solutions",
    icon: FileText,
    features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbots'],
    price: 'Starting at $2,200/month',
    category: 'NLP'
  },
  {
    id: 4,
    title: "AI-Powered Analytics",
    description: "Advanced business intelligence and data analytics powered by artificial intelligence",
    icon: BarChart3,
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Real-time Insights'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
  },
  {
    id: 5,
    title: "AI Security Solutions",
    description: "Advanced threat detection and security solutions powered by artificial intelligence",
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
    price: 'Starting at $3,200/month',
    category: 'Security'
  },
  {
    id: 6,
    title: "Process Automation",
    description: "Intelligent automation solutions to streamline your business processes",
    icon: Settings,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Compliance Monitoring'],
    price: 'Starting at $2,000/month',
    category: 'Automation'
  },
  {
    id: 7,
    title: "Conversational AI & Chatbots",
    description: "Intelligent chatbots and conversational AI for customer service and support",
    icon: Bot,
    features: ['Customer Service Bots', 'Voice Assistants', 'Multi-language Support', '24/7 Availability'],
    price: 'Starting at $1,800/month',
    category: 'Conversational'
  },
  {
    id: 8,
    title: "AI Content Generation",
    description: "Automated content creation using advanced AI writing and generation tools",
    icon: FileText,
    features: ['Content Writing', 'Blog Posts', 'Social Media', 'Marketing Copy'],
    price: 'Starting at $1,500/month',
    category: 'Content'
  },
  {
    id: 9,
    title: "AI-Powered Recommendation Engines",
    description: "Personalized recommendation systems to enhance user experience and engagement",
    icon: Target,
    features: ['Product Recommendations', 'Content Suggestions', 'Personalization', 'User Behavior Analysis'],
    price: 'Starting at $2,200/month',
    category: 'Recommendations'
  },
  {
    id: 10,
    title: "AI Voice & Speech Technology",
    description: "Voice recognition, speech synthesis, and voice-controlled applications",
    icon: Mic,
    features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Audio Processing'],
    price: 'Starting at $1,800/month',
    category: 'Voice'
  },
  {
    id: 11,
    title: "AI-Powered Search & Discovery",
    description: "Intelligent search solutions with semantic understanding and context awareness",
    icon: Search,
    features: ['Semantic Search', 'Context Awareness', 'Smart Filtering', 'Relevance Ranking'],
    price: 'Starting at $2,000/month',
    category: 'Search'
  },
  {
    id: 12,
    title: "AI Financial Analysis & Trading",
    description: "Advanced financial analysis and algorithmic trading solutions",
    icon: TrendingUp,
    features: ['Market Analysis', 'Risk Assessment', 'Algorithmic Trading', 'Financial Forecasting'],
    price: 'Starting at $5,000/month',
    category: 'Finance'
  }
];

const categories = [
  'All',
  'Core AI',
  'Vision AI',
  'NLP',
  'Analytics',
  'Security',
  'Automation',
  'Conversational',
  'Content',
  'Recommendations',
  'Voice',
  'Search',
  'Finance'
];

export default function AIServices() {
  return (
    <Layout 
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI services including machine learning, computer vision, NLP, and automation solutions. Transform your business with cutting-edge artificial intelligence."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we provide comprehensive AI services 
                to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </Link>
                <Link href="/it-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your AI needs and discover how our solutions 
              can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
              <Link href="/micro-saas" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Micro SaaS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}