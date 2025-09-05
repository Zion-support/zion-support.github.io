import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Award,
  Zap,
  Globe,
  Settings,
  BarChart3,
  Cpu,
  Database,
  Lock,
  MessageSquare,
  Target,
  TrendingUp,
  Heart,
  Building,
  Sprout,
  Mail,
  ShoppingCart,
  BookOpen,
  Rocket,
  Car,
  Home,
  Mic,
  Video,
  FileText,
  Code,
  Monitor,
  Smartphone,
  Server,
  Wifi,
  HardDrive,
  Eye,
  Search,
  Package,
  Calendar,
  Vote
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    count: '30+',
    href: '/ai-services',
    color: 'from-blue-500 to-purple-600',
    services: [
      'AI-Powered Email Responder',
      'Predictive Analytics Platform',
      'Intelligent Chatbot System',
      'Computer Vision Solutions',
      'AI Content Generation',
      'Voice AI Assistant',
      'AI Fraud Detection',
      'AI Drug Discovery',
      'AI Metaverse Development',
      'AI Voice Cloning & Synthesis'
    ]
  },
  {
    title: 'IT Services',
    description: 'Comprehensive information technology solutions and infrastructure',
    icon: Network,
    count: '25+',
    href: '/it-services',
    color: 'from-green-500 to-teal-600',
    services: [
      'Cloud Infrastructure Management',
      'Cybersecurity Solutions',
      'Network Infrastructure',
      'Database Management',
      'DevOps & CI/CD',
      'Data Center Migration',
      'Zero Trust Security Architecture',
      'Edge Computing Infrastructure',
      '5G Network Implementation',
      'Blockchain Infrastructure'
    ]
  },
  {
    title: 'Micro SaaS',
    description: 'Scalable software-as-a-service solutions for specific business needs',
    icon: Cloud,
    count: '35+',
    href: '/micro-saas',
    color: 'from-orange-500 to-red-600',
    services: [
      'Cloud Cost Guard',
      'LLM Evaluation Suite',
      'Customer Feedback App',
      'API Rate Limiting',
      'Content Moderation AI',
      'Workflow Automation',
      'AI Lead Scoring',
      'Social Media Scheduler',
      'AI-Powered Voice Cloning Studio',
      'Quantum Computing Simulator Platform'
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: '24/7 Support',
    description: 'Round-the-clock technical support'
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Industry-certified professionals'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times'
  },
  {
    icon: Star,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee'
  }
];

const pricing = [
  {
    category: 'AI Services',
    range: '$1,000 - $1,000,000',
    unit: 'per project',
    description: 'Custom AI solutions tailored to your needs'
  },
  {
    category: 'IT Services',
    range: '$120 - $500',
    unit: 'per hour',
    description: 'Professional IT consulting and implementation'
  },
  {
    category: 'Micro SaaS',
    range: '$29 - $3,999',
    unit: 'per month',
    description: 'Scalable SaaS solutions for your business'
  }
];

const stats = [
  { number: '90+', label: 'Services Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' }
];

export default function ServicesPage() {
  return (
    <MainLayout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI solutions, IT services, and Micro SaaS products. Transform your business with our expert technology solutions."
      keywords="services, AI services, IT services, Micro SaaS, technology solutions, cloud computing, cybersecurity, machine learning"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions to transform your business. From AI and machine learning 
                to cloud infrastructure and custom software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We offer three main categories of technology services, each designed to address 
                specific business needs and challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {category.count}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Popular Services:
                      </h4>
                      <ul className="space-y-2">
                        {category.services.slice(0, 5).map((service, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                        {category.services.length > 5 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{category.services.length - 5} more services
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <Link
                      href={category.href}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center inline-flex items-center justify-center"
                    >
                      <span>Explore {category.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We deliver exceptional value through our expertise, reliability, and commitment to your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Competitive pricing with no hidden fees. Get the best value for your technology investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((price, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {price.category}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {price.range}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {price.unit}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {price.description}
                  </p>
                  <a
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center inline-block"
                  >
                    Get Quote
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our expert team help you leverage cutting-edge technology to drive growth and innovation. 
                Get your free consultation today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}