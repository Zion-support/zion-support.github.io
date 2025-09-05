import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
  Car
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
=======
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  FileText,
  Mic,
  Shield,
  Heart,
  BookOpen,
  Globe,
  Car,
  Cpu,
  Monitor,
  Mail,
  TrendingUp,
  Building,
  ShoppingCart
} from 'lucide-react';
import Layout from '../components/Layout';

const aiServices = [
  {
    id: 1,
    title: 'AI Email Assistant',
    description: 'Automatically respond to customer emails with intelligent, context-aware replies.',
    icon: Mail,
    features: ['Natural Language Processing', 'Sentiment Analysis', 'Auto-Response Generation', 'Multi-language Support'],
    pricing: '$500 - $2,000/month',
    category: 'Communication',
    popular: true,
    benefits: ['Reduces response time by 80%', 'Improves customer satisfaction', 'Saves 20+ hours/week'],
    setupTime: '2-4 weeks',
    link: '/contact'
  },
  {
    id: 2,
    title: 'Predictive Analytics Platform',
    description: 'Advanced AI platform for business forecasting and trend analysis.',
    icon: BarChart3,
    features: ['Machine Learning Models', 'Real-time Analytics', 'Custom Dashboards', 'API Integration'],
    pricing: '$1,000 - $5,000/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Increases accuracy by 40%', 'Reduces forecasting errors', 'Enables data-driven decisions'],
    setupTime: '4-6 weeks',
    link: '/contact'
  },
  {
    id: 3,
    title: 'Intelligent Chatbot System',
    description: 'AI-powered chatbot with natural conversation capabilities and multi-channel support.',
    icon: MessageSquare,
    features: ['Natural Language Understanding', 'Multi-channel Support', 'Integration APIs', 'Analytics Dashboard'],
    pricing: '$300 - $1,500/month',
    category: 'Customer Service',
    popular: true,
    benefits: ['Handles 80% of queries automatically', 'Available 24/7', 'Reduces support costs'],
    setupTime: '2-3 weeks',
    link: '/contact'
  },
  {
    id: 4,
    title: 'Computer Vision Solutions',
    description: 'AI-powered image and video analysis for various business applications.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analysis'],
    pricing: '$800 - $3,000/month',
    category: 'Computer Vision',
    popular: false,
    benefits: ['Automates visual inspections', 'Improves accuracy', 'Enables new use cases'],
    setupTime: '6-8 weeks',
    link: '/contact'
  },
  {
    id: 5,
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['Text Generation', 'SEO Optimization', 'Multi-format Output', 'Brand Voice Training'],
    pricing: '$200 - $800/month',
    category: 'Content Creation',
    popular: true,
    benefits: ['Saves 15+ hours/week', 'Maintains consistent quality', 'Scales content production'],
    setupTime: '1-2 weeks',
    link: '/contact'
  },
  {
    id: 6,
    title: 'Voice AI Assistant',
    description: 'Intelligent voice assistant for customer service and internal operations.',
    icon: Mic,
    features: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Multi-language Support'],
    pricing: '$600 - $2,500/month',
    category: 'Voice AI',
    popular: false,
    benefits: ['Handles voice queries', 'Improves accessibility', 'Reduces call center load'],
    setupTime: '4-6 weeks',
    link: '/contact'
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
  }
];

const industries = [
<<<<<<< HEAD
  { name: 'Healthcare', icon: Heart, description: 'AI-powered medical diagnosis and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and algorithmic trading' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized shopping experiences' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
=======
  { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
  { name: 'Finance', icon: TrendingUp, description: 'Fraud detection and risk management' },
  { name: 'Manufacturing', icon: Building, description: 'Quality control and predictive maintenance' },
  { name: 'Retail', icon: ShoppingCart, description: 'Personalized shopping and inventory management' },
  { name: 'Education', icon: BookOpen, description: 'Personalized learning and assessment' },
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

export default function AIServices() {
  return (
<<<<<<< HEAD
    <Layout title="AI Services - Zion Tech Group" description="Comprehensive AI solutions including business intelligence, customer support, and automation services.">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
=======
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and more. Transform your business with cutting-edge AI solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Consultation
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From machine learning to computer vision, 
                we provide comprehensive AI services tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Micro SaaS
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
=======
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges and drive measurable results.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                  <Link 
                    href="/contact" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center block"
                  >
                    Get Started
                  </Link>
=======
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and drive growth.
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
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
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
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
=======
        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our AI solutions are tailored for various industries and use cases.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
=======
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Schedule Demo
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}