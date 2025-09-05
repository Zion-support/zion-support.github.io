import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
<<<<<<< HEAD
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
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
  ShoppingCart, 
  BookOpen, 
  Home, 
  Gamepad2 
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function AIServicesPage() {
  return (
    <MainLayout
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, computer vision, and intelligent automation."
      keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, automation, AI consulting"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning models to intelligent automation, we provide end-to-end AI services that drive real business value.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Custom ML models for predictive analytics, recommendation systems, and intelligent decision making.",
                features: ["Predictive Analytics", "Recommendation Engines", "Anomaly Detection", "Pattern Recognition"]
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.",
                features: ["Chatbots & Virtual Assistants", "Sentiment Analysis", "Text Classification", "Language Translation"]
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image and video analysis solutions for object detection, facial recognition, and visual inspection.",
                features: ["Object Detection", "Facial Recognition", "Image Classification", "Visual Inspection"]
              },
              {
                icon: Bot,
                title: "Intelligent Automation",
                description: "AI-powered automation solutions that streamline workflows and reduce manual effort.",
                features: ["Process Automation", "Workflow Optimization", "Smart Scheduling", "Intelligent Routing"]
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "Data-driven insights and forecasting to help you make informed business decisions.",
                features: ["Demand Forecasting", "Risk Assessment", "Performance Prediction", "Trend Analysis"]
              },
              {
                icon: Shield,
                title: "AI Security",
                description: "Advanced security solutions powered by AI to protect your digital assets and data.",
                features: ["Threat Detection", "Fraud Prevention", "Access Control", "Security Monitoring"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation and maximum ROI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your business needs, data sources, and identify AI opportunities."
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Develop a comprehensive AI strategy aligned with your business objectives."
              },
              {
                step: "03",
                title: "Development & Training",
                description: "Build and train AI models using your data and industry best practices."
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy AI solutions and continuously optimize for better performance."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
=======
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
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, description: 'AI-powered medical diagnosis and patient care' },
  { name: 'Finance', icon: DollarSign, description: 'Fraud detection and algorithmic trading' },
  { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized shopping experiences' },
  { name: 'Education', icon: BookOpen, description: 'Adaptive learning and assessment tools' },
  { name: 'Manufacturing', icon: Building, description: 'Predictive maintenance and quality control' },
  { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
];

export default function AIServices() {
  return (
    <Layout title="AI Services - Zion Tech Group" description="Comprehensive AI solutions including business intelligence, customer support, and automation services.">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/quote" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
  );
}