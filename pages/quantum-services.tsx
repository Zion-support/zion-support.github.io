import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Atom, Cpu, Rocket, Shield, Zap, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, 
  BarChart3, Settings, Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon, GlobeIcon, 
  StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, 
  ArrowRightIcon, CpuIcon, DollarSign, Phone, 
  ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Infinity, Target as TargetIcon, 
  Award, MessageCircle, ChevronRight, Flame, Brain
} from 'lucide-react';

const quantumServices = [
  {
    id: 'quantum-internet-security-platform',
    name: 'Quantum Internet Security Platform',
    description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution',
    features: [
      'Quantum Key Distribution (QKD)',
      'Unhackable Encryption',
      'Quantum Network Infrastructure',
      'Real-time Security Monitoring',
      'Global Quantum Network'
    ],
    pricing: '$35,000/month',
    isPremium: true,
    badge: 'Premium',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'quantum-bio-computing-platform',
    name: 'Quantum Bio-Computing Platform',
    description: 'Revolutionary quantum molecular simulation for drug discovery and bio-engineering',
    features: [
      'Quantum Molecular Simulation',
      'Drug Discovery Algorithms',
      'Protein Folding Optimization',
      'Bio-Engineering Tools',
      'Quantum Biology Research'
    ],
    pricing: '$28,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'brain-computer-interface-platform',
    name: 'Brain-Computer Interface Platform',
    description: 'Advanced neural interface development for human-computer symbiosis',
    features: [
      'Neural Signal Processing',
      'Brain-Machine Communication',
      'Cognitive Enhancement Tools',
      'Medical Applications',
      'Research & Development'
    ],
    pricing: '$22,000/month',
    isHot: true,
    badge: 'Hot',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'space-mining-platform',
    name: 'Space Mining Platform',
    description: 'Autonomous space mining operations with quantum-enhanced robotics',
    features: [
      'Autonomous Mining Robots',
      'Quantum Navigation Systems',
      'Resource Detection',
      'Space Infrastructure',
      'Sustainable Mining'
    ],
    pricing: '$45,000/month',
    isPremium: true,
    badge: 'Premium',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'quantum-energy-platform',
    name: 'Quantum Energy Platform',
    description: 'Quantum energy optimization for sustainable power generation and distribution',
    features: [
      'Quantum Energy Optimization',
      'Smart Grid Management',
      'Renewable Energy Integration',
      'Energy Storage Solutions',
      'Efficiency Analytics'
    ],
    pricing: '$32,000/month',
    isNew: true,
    badge: 'New',
    color: 'from-cyan-500 to-teal-600'
  }
];

const benefits = [
  {
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    title: 'Quantum Advantage',
    description: 'Unprecedented computational power and security through quantum mechanics'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: 'Lightning Speed',
    description: 'Quantum processing that solves complex problems in seconds'
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: 'Unbreakable Security',
    description: 'Quantum encryption that provides mathematically proven security'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: 'Future Technology',
    description: 'Cutting-edge solutions that define the next generation of computing'
  }
];

export default function QuantumServices() {
  return (
    <>
      <Head>
        <title>Quantum & Emerging Tech Services - Zion Tech Group</title>
        <meta name="description" content="Breakthrough quantum computing and space technology solutions. Revolutionary quantum services for the future." />
        <meta name="keywords" content="quantum computing, quantum security, space mining, brain-computer interface, quantum energy, emerging technology" />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-services" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Quantum & Emerging Tech
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Breakthrough quantum computing and space technology solutions that push the boundaries of what's possible
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-blue-500/50 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-200"
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Quantum Services?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the power of quantum computing and emerging technologies that solve previously impossible problems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
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
              <h2 className="text-4xl font-bold text-white mb-4">Our Quantum Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive suite of quantum computing and emerging technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {quantumServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/10"
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
                    <div className="text-2xl font-bold text-blue-400">{service.pricing}</div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105 flex items-center"
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
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution and unlock unprecedented computational power. Contact us today to get started with your quantum transformation journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="px-8 py-4 border border-blue-500/50 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-200"
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