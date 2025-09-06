import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Code, TestTube, Server, Database, Network, Search } from 'lucide-react';
import Layout from '../components/layout/Layout';

const advancedAIAutomationServices2025 = [
  {
    id: 1,
    title: 'AI Code Review Automation',
    description: 'Automated code review with AI-powered analysis and suggestions',
    category: 'AI Development Tools',
    price: '$2,500/month',
    features: ['Automated code analysis', 'Security vulnerability detection', 'Performance optimization suggestions']
  },
  {
    id: 2,
    title: 'AI Testing Automation',
    description: 'Intelligent test generation and execution with AI',
    category: 'AI Testing & Quality Assurance',
    price: '$3,200/month',
    features: ['Automated test generation', 'Test case optimization', 'Bug prediction']
  },
  {
    id: 3,
    title: 'AI DevOps Intelligence',
    description: 'AI-powered DevOps automation and monitoring',
    category: 'AI DevOps & Infrastructure',
    price: '$4,500/month',
    features: ['Automated deployment', 'Performance monitoring', 'Infrastructure optimization']
  },
  {
    id: 4,
    title: 'AI Cybersecurity Suite',
    description: 'Advanced AI-powered cybersecurity solutions',
    category: 'AI Cybersecurity',
    price: '$5,800/month',
    features: ['Threat detection', 'Incident response', 'Security automation']
  },
  {
    id: 5,
    title: 'AI Data Pipeline Management',
    description: 'Intelligent data processing and pipeline automation',
    category: 'AI Data Management',
    price: '$3,800/month',
    features: ['Pipeline management', 'Quality assurance', 'Governance automation']
  }
];

const serviceCategories = [
  {
    title: 'AI Development Tools',
    description: 'Advanced AI-powered development and testing automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Code Review Automation', 'AI Testing', 'DevOps Intelligence']
  },
  {
    title: 'AI Testing & Quality Assurance',
    description: 'Intelligent testing automation with AI-driven insights',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance'),
    icon: TestTube,
    color: 'from-purple-500 to-indigo-600',
    features: ['Test Generation', 'Performance Testing', 'Quality Assurance']
  },
  {
    title: 'AI DevOps & Infrastructure',
    description: 'Self-managing infrastructure with AI optimization',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure'),
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    features: ['Infrastructure Management', 'Deployment Optimization', 'Performance Monitoring']
  },
  {
    title: 'AI Cybersecurity',
    description: 'Proactive threat detection and response with AI',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Cybersecurity'),
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    features: ['Threat Detection', 'Incident Response', 'Security Automation']
  },
  {
    title: 'AI Data Management',
    description: 'Intelligent data infrastructure with AI automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Data Management'),
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    features: ['Pipeline Management', 'Quality Assurance', 'Governance Automation']
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
};

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechCorp Inc.',
    content: 'The AI automation services have revolutionized our development process. We\'ve seen a 300% increase in productivity.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'DataFlow Systems',
    content: 'Outstanding AI solutions that have transformed our data management capabilities. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'SecureTech Solutions',
    content: 'The cybersecurity AI suite has significantly improved our threat detection and response times.',
    rating: 5
  }
];

export default function AdvancedAIAutomationServices() {
  return (
    <Layout>
      <Head>
        <title>Advanced AI Automation Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI automation services for 2025. Transform your business with intelligent automation, AI-powered development tools, and advanced cybersecurity solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI Automation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Services 2025
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI automation services. 
                From intelligent development tools to advanced cybersecurity solutions, 
                we provide the future of automation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI automation services designed for modern businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-400 mb-4">
                    Starting at {category.services[0]?.price || '$2,500/month'}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading companies worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to discuss your AI automation needs and get a 
                comprehensive solution tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {contactInfo.mobile}
                </Link>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {contactInfo.email}
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>{contactInfo.address}</p>
                <p>Visit us at: <Link href={contactInfo.website} className="text-blue-400 hover:text-blue-300">{contactInfo.website}</Link></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}