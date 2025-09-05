import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Award, 
  TrendingUp, 
  Building, 
  Rocket, 
  Lightbulb, 
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Microscope,
  Layers,
  Workflow,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Home, 
  Trash2, 
  Camera, 
  Phone, 
  MapPin, 
  ExternalLink,
  Heart,
  ClipboardList,
  TreePine,
  Droplets
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    title: 'AI-Powered Chatbots',
    description: 'Intelligent conversational agents that understand context and provide human-like responses.',
    icon: MessageSquare,
    features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs'],
    pricing: 'Starting at $299/month',
    category: 'Conversational AI'
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis using state-of-the-art computer vision models.',
    icon: Eye,
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
    pricing: 'Starting at $499/month',
    category: 'Computer Vision'
  },
  {
    id: 3,
    title: 'Predictive Analytics',
    description: 'Machine learning models that forecast trends and predict future outcomes.',
    icon: BarChart3,
    features: ['Time Series Analysis', 'Risk Assessment', 'Demand Forecasting', 'Performance Optimization'],
    pricing: 'Starting at $799/month',
    category: 'Analytics'
  },
  {
    id: 4,
    title: 'AI Content Generation',
    description: 'Automated content creation for blogs, social media, and marketing materials.',
    icon: FileText,
    features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'SEO Optimization'],
    pricing: 'Starting at $199/month',
    category: 'Content AI'
  },
  {
    id: 5,
    title: 'Process Automation',
    description: 'Intelligent automation of business processes using AI and machine learning.',
    icon: Workflow,
    features: ['Document Processing', 'Data Entry Automation', 'Workflow Optimization', 'Error Reduction'],
    pricing: 'Starting at $599/month',
    category: 'Automation'
  },
  {
    id: 6,
    title: 'AI Security Solutions',
    description: 'Advanced threat detection and security monitoring using AI algorithms.',
    icon: Shield,
    features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
    pricing: 'Starting at $899/month',
    category: 'Security'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Faster Implementation',
    description: 'Get your AI solutions up and running in weeks, not months.'
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Tailored AI models designed specifically for your business needs.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance for all AI implementations.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated AI specialists to guide you through every step.'
  }
];

const stats = [
  { label: 'AI Models Deployed', value: '1000+', icon: Brain },
  { label: 'Client Satisfaction', value: '99%', icon: Star },
  { label: 'Processing Speed', value: '10x Faster', icon: Zap },
  { label: 'Cost Reduction', value: '60%', icon: TrendingDown }
];

export default function AIServicesPage() {
  return (
    <Layout>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, computer vision, predictive analytics, and process automation. Transform your business with our cutting-edge AI solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                AI Services That Transform Your Business
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Harness the power of artificial intelligence to automate processes, gain insights, and deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges and drive growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
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

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        {service.pricing}
                      </span>
                      <Link
                        href="/contact"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver AI solutions that actually work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  View Success Stories
                  <Star className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}