import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Rocket, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight
} from 'lucide-react';

const aiServices = [
  {
    id: 'ai-consciousness-evolution-pro',
    name: 'AI Consciousness Evolution Pro',
    description: 'Advanced AI consciousness development platform with emotional intelligence and self-awareness capabilities',
    features: [
      'Emotional Intelligence Framework',
      'Consciousness Mapping',
      'Self-Learning Algorithms',
      'Ethical Decision Making',
      'Human-AI Collaboration Tools'
    ],
    pricing: '$15,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'quantum-ai-fusion-platform',
    name: 'Quantum AI Fusion Platform',
    description: 'Revolutionary quantum-AI hybrid computing platform for unprecedented processing power',
    features: [
      'Quantum-AI Hybrid Processing',
      'Real-time Learning',
      'Quantum Neural Networks',
      'Advanced Pattern Recognition',
      'Scalable Architecture'
    ],
    pricing: '$25,000/month',
    isHot: true,
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'ai-autonomous-ecosystem',
    name: 'AI Autonomous Ecosystem',
    description: 'Self-managing AI systems that operate independently while maintaining human oversight',
    features: [
      'Autonomous Decision Making',
      'Self-Optimization',
      'Predictive Maintenance',
      'Resource Management',
      'Performance Monitoring'
    ],
    pricing: '$18,000/month',
    color: 'from-cyan-500 to-teal-600'
  },
  {
    id: 'ai-ethics-governance',
    name: 'AI Ethics & Governance',
    description: 'Comprehensive framework for ethical AI development and governance',
    features: [
      'Ethical Guidelines',
      'Bias Detection',
      'Transparency Tools',
      'Compliance Monitoring',
      'Audit Trails'
    ],
    pricing: '$12,000/month',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'ai-creativity-studio-pro',
    name: 'AI Creativity Studio Pro',
    description: 'AI-powered creative platform for content generation and artistic collaboration',
    features: [
      'Content Generation',
      'Creative Collaboration',
      'Style Transfer',
      'Multi-Media Support',
      'Brand Consistency'
    ],
    pricing: '$20,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-pink-500 to-rose-600'
  }
];

const benefits = [
  {
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    title: 'Advanced Intelligence',
    description: 'State-of-the-art AI models with consciousness and emotional intelligence'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Quantum-enhanced processing for real-time AI operations'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Secure & Ethical',
    description: 'Built-in security and ethical frameworks for responsible AI'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Future-Ready',
    description: 'Cutting-edge technology that evolves with your business needs'
  }
];

export default function AIServices() {
  return (
    <>
      <Head>
        <title>AI & Consciousness Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI consciousness and emotional intelligence services. Advanced AI solutions for the future of technology." />
        <meta name="keywords" content="AI consciousness, emotional intelligence, quantum AI, autonomous AI, AI ethics, AI creativity" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI & Consciousness
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI consciousness and emotional intelligence solutions that redefine the boundaries of artificial intelligence
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/50 text-violet-400 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of AI with our cutting-edge consciousness and emotional intelligence platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI consciousness and intelligence solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-violet-500/50 transition-all duration-200 hover:shadow-2xl hover:shadow-violet-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    {service.badge && (
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        service.isNew ? 'bg-green-500 text-white' :
                        service.isHot ? 'bg-red-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-violet-400">{service.pricing}</div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience the Future of AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the revolution in AI consciousness and emotional intelligence. Contact us today to get started with your AI transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-violet-500/50 text-violet-400 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}