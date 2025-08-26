import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Palette, GraduationCap, Leaf, Pill, Coins, Building2, Network, Database, Server, Code, ShieldCheck, ZapIcon, GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon, CheckCircleIcon, ArrowRightIcon, CpuIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeITServices2025 } from '../data/2025-cutting-edge-it-services';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';
import { cuttingEdgeEmergingTechServices2025 } from '../data/2025-cutting-edge-emerging-tech';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions2025,
    ...verifiedRealServices2025Batch2,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...innovative2025Services,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026
  ];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025.slice(0, 3),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    gradient: 'bg-gradient-to-br from-violet-500/20 to-purple-600/20'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeEmergingTechServices2025.slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    gradient: 'bg-gradient-to-br from-indigo-500/20 to-blue-600/20'
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeITServices2025.slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-600/20'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025.slice(0, 3),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    gradient: 'bg-gradient-to-br from-teal-500/20 to-emerald-600/20'
  }
];

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + nextGenAIServices2026.length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length + emergingTech2026Services.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + enterpriseIT2026Services.length + revolutionaryITInfrastructure2026.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length + innovative2026Services.filter(s => s.category.includes('SaaS')).length + innovativeMicroSaas2026.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + innovative2026Services.length + emergingTech2026Services.length + nextGenAIServices2026.length + revolutionaryITInfrastructure2026.length
  };

const featuredServices = [
  {
    name: 'AI Consciousness Evolution 2029',
    description: 'Next-generation AI with advanced consciousness and self-awareness',
    price: '$1,299',
    period: '/month',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-consciousness-evolution-2029',
    popular: true
  },
  {
    title: 'Future-Proof Solutions',
    description: 'Built with scalability and future technologies in mind, ensuring your investment grows with you.',
    icon: Eye,
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-600'
  }
];

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Leading Provider of Innovative IT, AI & Micro SAAS Solutions</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, enterprise IT, and micro SAAS solutions. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI services, quantum computing, enterprise IT, micro SAAS, technology solutions, innovation" />
        <meta property="og:title" content="Zion Tech Group - Innovative Technology Solutions" />
        <meta property="og:description" content="Leading provider of AI, quantum computing, enterprise IT, and micro SAAS solutions for modern enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Futuristic Background */}
      <UltraFuturisticBackground2029 />

      {/* Navigation */}
      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,73,153,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of cutting-edge AI, quantum computing, enterprise IT, and micro SAAS solutions. 
              Transform your business with our innovative technology services.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Cutting-Edge Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative services designed to transform your business 
              and give you a competitive advantage in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl ${category.gradient} border border-white/10 backdrop-blur-sm`}
              >
                <Link href={category.href}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                    
                    {/* Sample Services */}
                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{service.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 rounded-xl ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⭐ {service.rating}</span>
                  <span>{service.reviews} reviews</span>
                </div>
                <Link
                  href={service.link}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 p-4 mb-4 mx-auto`}>
                  <stat.icon className={`w-full h-full ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies that have already transformed their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+13024640950"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
