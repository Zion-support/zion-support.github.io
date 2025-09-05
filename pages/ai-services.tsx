import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Target, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Car,
  FileText,
  Mic,
  Shield,
  Globe,
  Cpu,
  Monitor,
  Mail,
  TrendingUp,
  Eye
} from 'lucide-react';

const aiServices = [
  {
    title: 'AI Business Intelligence',
    description: 'Transform your data into actionable insights with advanced AI analytics and reporting.',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
    price: 'Starting at $2,500/month',
    category: 'Analytics'
  },
  {
    title: 'AI Customer Support',
    description: '24/7 intelligent customer support powered by advanced natural language processing.',
    icon: MessageSquare,
    features: ['Chatbots', 'Voice Assistants', 'Multi-language Support', 'Sentiment Analysis'],
    price: 'Starting at $1,800/month',
    category: 'Customer Service'
  },
  {
    title: 'AI Project Management',
    description: 'Streamline project workflows with AI-powered task management and resource optimization.',
    icon: Settings,
    features: ['Smart Scheduling', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
    price: 'Starting at $2,200/month',
    category: 'Productivity'
  },
  {
    title: 'AI Marketing Automation',
    description: 'Personalize marketing campaigns and optimize customer engagement with AI-driven insights.',
    icon: Target,
    features: ['Personalized Content', 'A/B Testing', 'Customer Segmentation', 'Campaign Optimization'],
    price: 'Starting at $3,000/month',
    category: 'Marketing'
  },
  {
    title: 'AI Enterprise Automation',
    description: 'Automate complex business processes with intelligent workflow management systems.',
    icon: Building,
    features: ['Process Automation', 'Document Processing', 'Workflow Optimization', 'Compliance Monitoring'],
    price: 'Starting at $5,000/month',
    category: 'Enterprise'
  }
];

const additionalServices = [
  {
    title: 'AI Document Processing',
    description: 'Automated document analysis and data extraction using advanced OCR and NLP.',
    icon: FileText,
    features: ['Document Classification', 'Data Extraction', 'Text Analysis', 'Automated Workflows'],
    price: 'Starting at $1,500/month',
    category: 'Automation'
  },
  {
    title: 'AI Voice Processing',
    description: 'Convert speech to text and analyze voice data for business insights.',
    icon: Mic,
    features: ['Speech Recognition', 'Voice Analytics', 'Multi-language Support', 'Real-time Processing'],
    price: 'Starting at $2,000/month',
    category: 'Communication'
  },
  {
    title: 'AI Security Solutions',
    description: 'Advanced threat detection and security monitoring powered by machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
    price: 'Starting at $3,200/month',
    category: 'Security'
  },
  {
    title: 'AI Healthcare Solutions',
    description: 'Medical data analysis and diagnostic assistance using AI algorithms.',
    icon: Heart,
    features: ['Medical Imaging', 'Diagnostic Support', 'Patient Monitoring', 'Drug Discovery'],
    price: 'Starting at $4,500/month',
    category: 'Healthcare'
  },
  {
    title: 'AI Education Platform',
    description: 'Personalized learning experiences and educational content generation.',
    icon: BookOpen,
    features: ['Personalized Learning', 'Content Generation', 'Progress Tracking', 'Adaptive Testing'],
    price: 'Starting at $2,800/month',
    category: 'Education'
  },
  {
    title: 'AI Global Solutions',
    description: 'Multi-language and cross-cultural AI solutions for international businesses.',
    icon: Globe,
    features: ['Multi-language Support', 'Cultural Adaptation', 'Global Analytics', 'Localization'],
    price: 'Starting at $3,500/month',
    category: 'Global'
  },
  {
    title: 'AI Automotive Solutions',
    description: 'Autonomous vehicle technology and smart transportation systems.',
    icon: Car,
    features: ['Autonomous Driving', 'Traffic Optimization', 'Vehicle Analytics', 'Safety Systems'],
    price: 'Starting at $6,000/month',
    category: 'Automotive'
  },
  {
    title: 'AI Hardware Integration',
    description: 'Custom AI hardware solutions and edge computing implementations.',
    icon: Cpu,
    features: ['Edge Computing', 'Hardware Optimization', 'IoT Integration', 'Performance Tuning'],
    price: 'Starting at $4,000/month',
    category: 'Hardware'
  },
  {
    title: 'AI Display Technology',
    description: 'Smart displays and visual AI interfaces for enhanced user experiences.',
    icon: Monitor,
    features: ['Smart Displays', 'Visual Recognition', 'Interactive Interfaces', 'Content Optimization'],
    price: 'Starting at $2,200/month',
    category: 'Display'
  },
  {
    title: 'AI Email Automation',
    description: 'Intelligent email management and automated communication systems.',
    icon: Mail,
    features: ['Email Classification', 'Auto-responses', 'Sentiment Analysis', 'Spam Detection'],
    price: 'Starting at $1,200/month',
    category: 'Communication'
  },
  {
    title: 'AI Market Analysis',
    description: 'Advanced market research and trend analysis using AI algorithms.',
    icon: TrendingUp,
    features: ['Market Prediction', 'Trend Analysis', 'Competitive Intelligence', 'Investment Insights'],
    price: 'Starting at $3,800/month',
    category: 'Analytics'
  }
];

const allServices = [...aiServices, ...additionalServices];

const stats = [
  { number: "500+", label: "AI Models Deployed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];

export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Comprehensive AI solutions for businesses of all sizes. From machine learning to automation, we deliver cutting-edge AI technology."
      keywords="AI services, machine learning, artificial intelligence, automation, business intelligence, AI consulting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services That Transform
                <span className="block text-blue-300">Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, 
                gain insights, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Get Started Today
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning models to automation systems, we provide 
                end-to-end AI solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement 
                solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Learn About Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}