import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Cpu, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight, FileText, Building
} from 'lucide-react';

const microSaasServices = [
  {
    id: 'ai-content-factory-enterprise',
    name: 'AI Content Factory Enterprise',
    description: 'Enterprise AI content generation platform for scalable content creation and management',
    features: [
      'AI Content Generation',
      'Multi-Format Support',
      'Brand Voice Consistency',
      'Content Analytics',
      'Team Collaboration'
    ],
    pricing: '$18,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'quantum-crm-suite-enterprise',
    name: 'Quantum CRM Suite Enterprise',
    description: 'Quantum-enhanced CRM platform with advanced analytics and customer insights',
    features: [
      'Quantum Analytics',
      'Customer Intelligence',
      'Predictive Modeling',
      'Sales Automation',
      'Integration Hub'
    ],
    pricing: '$22,000/month',
    isHot: true,
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'ai-autonomous-decision-engine',
    name: 'AI Autonomous Decision Engine',
    description: 'Autonomous AI decision making platform for business process optimization',
    features: [
      'Autonomous Decision Making',
      'Process Optimization',
      'Risk Assessment',
      'Performance Monitoring',
      'Learning Algorithms'
    ],
    pricing: '$25,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    description: 'AI-powered legal analysis platform for contract review and risk assessment',
    features: [
      'Contract Analysis',
      'Risk Assessment',
      'Legal Compliance',
      'Document Review',
      'Automated Reporting'
    ],
    pricing: '$20,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'ai-healthcare-diagnostics-pro',
    name: 'AI Healthcare Diagnostics Pro',
    description: 'Advanced medical AI diagnostics platform for healthcare professionals',
    features: [
      'Medical Image Analysis',
      'Diagnostic Support',
      'Patient Data Management',
      'Clinical Decision Support',
      'Compliance & Security'
    ],
    pricing: '$35,000/month',
    isPremium: true,
    badge: 'Premium',
    color: 'from-red-500 to-pink-600'
  }
];

const benefits = [
  {
    icon: <Rocket className="w-8 h-8 text-teal-400" />,
    title: 'Rapid Deployment',
    description: 'Quick implementation and deployment of business solutions'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    title: 'Scalable Solutions',
    description: 'Flexible platforms that grow with your business needs'
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Built-in security and compliance for business applications'
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'User-Friendly',
    description: 'Intuitive interfaces designed for business users'
  }
];

export default function MicroSaas() {
  return (
    <>
      <Head>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Innovative business solutions for modern enterprises. Micro SAAS platforms that transform business operations." />
        <meta name="keywords" content="micro SAAS, business solutions, AI content, CRM, decision engine, legal analysis, healthcare diagnostics" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Micro SAAS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Innovative business solutions for modern enterprises that transform operations and drive growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-200"
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Micro SAAS Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience innovative business solutions that streamline operations and drive productivity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-200"
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
              <h2 className="text-4xl font-bold text-white mb-4">Our Micro SAAS Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of innovative business solutions and platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-200 hover:shadow-2xl hover:shadow-teal-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    {service.badge && (
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        service.isNew ? 'bg-green-500 text-white' :
                        service.isHot ? 'bg-red-500 text-white' :
                        service.isPremium ? 'bg-yellow-500 text-black' :
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
                    <div className="text-2xl font-bold text-teal-400">{service.pricing}</div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 flex items-center"
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
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Streamline your business with innovative micro SAAS solutions. Contact us today to get started with your digital transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-purple-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-teal-500/50 text-teal-400 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-200"
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