<<<<<<< HEAD
import React, { Suspense, lazy, useState, useEffect } from 'react',
import Layout from './layout/Layout',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Eye, Network,
  Car, Search, TestTube, Globe as PlanetIcon, Lock, Palette,
  FileText, BarChart3, Heart, Truck, ShieldCheck,
  Sparkles, Infinity as InfinityIcon, Zap as Lightning
} from 'lucide-react',

// Import new service data
import { innovativeMicroSaasServices2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2',
import { emergingTechServices2025V2 } from '../data/2025-emerging-tech-services-v2',
// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026')),

const Homepage2040: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0),
  const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    setIsVisible(true),
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeMicroSaasServices2025V2.length)
    }, 5000),
    return () => clearInterval(interval)
  }, []),
=======
import React, {_Suspense, _lazy, _useState, _useEffect} from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import {_ArrowRight, _Star, _Brain, _Atom, _Shield, _Zap, _TrendingUp, _Globe, _Rocket, _Target, _Users, _Cpu, _Eye, _Network, _Car, _Search, _TestTube, _Globe as PlanetIcon, _Lock, _Palette, _FileText, _BarChart3, _Heart, _Truck, _ShieldCheck, _Sparkles, _Infinity as InfinityIcon, _Zap as Lightning} from 'lucide-react';

// Import new service data

// Lazy load heavy components for better performance
const _LazyServiceCard = lazy__(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2040: React.FC = () => {_const [currentServiceIndex, _setCurrentServiceIndex] = useState(0);
  const [isVisible, _setIsVisible] = useState(false);

  useEffect__(() => {
    setIsVisible(true);
    const _interval = setInterval__(() => {
      setCurrentServiceIndex(_(prev) => (prev + 1) % innovativeMicroSaasServices2025V2.length);}, 5000);
    return () => clearInterval(interval);
  }, []);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Enhanced animation variants for better performance
  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  },

<<<<<<< HEAD
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: &quot;easeOut&quot; as const
      }
=======
  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.6, _ease: "easeOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: -1,
        ease: &quot;easeInOut&quot; as const
      }
=======
  const _floatingVariants = {_float: {
      y: [-10, _10, _-10], _transition: {
        duration: 3, _repeat: -1, _ease: "easeInOut" as const}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const statsData = [
    {
      number: &quot;100+&quot;,
      label: &quot;Innovative Services&quot;,
      description: &quot;Cutting-edge solutions&quot;,
      icon: Sparkles,
      color: &quot;text-cyan-400&quot;,
      hoverColor: &quot;group-hover:text-cyan-300&quot;
    },
    {
      number: &quot;∞&quot;,
      label: &quot;Future Possibilities&quot;,
      description: &quot;Unlimited potential&quot;,
      icon: InfinityIcon,
      color: &quot;text-purple-400&quot;,
      hoverColor: &quot;group-hover:text-purple-300&quot;
    },
    {
      number: &quot;24/7&quot;,
      label: &quot;Autonomous Operations&quot;,
      description: &quot;Always available&quot;,
      icon: Cpu,
      color: &quot;text-blue-400&quot;,
      hoverColor: &quot;group-hover:text-blue-300&quot;
    },
    {
      number: &quot;10x&quot;,
      label: &quot;Performance Boost&quot;,
      description: &quot;Quantum enhancement&quot;,
      icon: Lightning,
      color: &quot;text-green-400&quot;,
      hoverColor: &quot;group-hover:text-green-300&quot;
    }
  ],

  // Combine all services for showcase
  const allServices = [...innovativeMicroSaasServices2025V2, ...emergingTechServices2025V2],
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6),

  const serviceCategories = [
    {
      name: &quot;AI & Machine Learning&quot;,
      icon: Brain,
      count: allServices.filter(s => s.category.includes('AI')).length,
      color: &quot;from-pink-500 to-rose-600&quot;
    },
    {
      name: &quot;Quantum Technology&quot;,
      icon: Atom,
      count: allServices.filter(s => s.category.includes('Quantum')).length,
      color: &quot;from-blue-500 to-cyan-600&quot;
    },
    {
      name: &quot;Emerging Tech&quot;,
      icon: Rocket,
      count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Space')).length,
      color: &quot;from-purple-500 to-indigo-600&quot;
    },
    {
      name: &quot;Cybersecurity&quot;,
      icon: Shield,
      count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cyber')).length,
      color: &quot;from-green-500 to-emerald-600&quot;
    }
  ],

  return (
    <Layout>
      {/* Main Content */}
      <main className=&quot;relative z-10&quot; id=&quot;main&quot;>
        {/* Hero Section with Enhanced Background */}
=======
  const _statsData = [
    {_number: "100+", _label: "Innovative Services", _description: "Cutting-edge solutions", _icon: Sparkles, _color: "text-cyan-400", _hoverColor: "group-hover:text-cyan-300"},
    {_number: "∞", _label: "Future Possibilities", _description: "Unlimited potential", _icon: InfinityIcon, _color: "text-purple-400", _hoverColor: "group-hover:text-purple-300"},
    {_number: "24/7", _label: "Autonomous Operations", _description: "Always available", _icon: Cpu, _color: "text-blue-400", _hoverColor: "group-hover:text-blue-300"},
    {_number: "10x", _label: "Performance Boost", _description: "Quantum enhancement", _icon: Lightning, _color: "text-green-400", _hoverColor: "group-hover:text-green-300"}
  ];

  // Combine all services for showcase
  const _allServices = [...innovativeMicroSaasServices2025V2, ...emergingTechServices2025V2];
  const _featuredServices = allServices.filter(service => service.popular).slice(0, 6);

  const _serviceCategories = [
    {_name: "AI & Machine Learning", _icon: Brain, _count: allServices.filter(s => s.category.includes('AI')).length, _color: "from-pink-500 to-rose-600"},
    {_name: "Quantum Technology", _icon: Atom, _count: allServices.filter(s => s.category.includes('Quantum')).length, _color: "from-blue-500 to-cyan-600"},
    {_name: "Emerging Tech", _icon: Rocket, _count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Space')).length, _color: "from-purple-500 to-indigo-600"},
    {_name: "Cybersecurity", _icon: Shield, _count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cyber')).length, _color: "from-green-500 to-emerald-600"}
  ];

  return (
    <Layout>
      {_/* Main Content */}
      <main className="relative z-10" id="main">
        {_/* Hero Section with Enhanced Background */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <section 
          className=&quot;min-h-screen flex items-center justify-center px-4 relative overflow-hidden&quot;
          aria-labelledby=&quot;hero-heading&quot;
        >
<<<<<<< HEAD
          {/* Enhanced Futuristic Background Elements */}
          <div className=&quot;absolute inset-0 pointer-events-none&quot;>
            {/* Animated geometric shapes */}
            <motion.div 
              variants={floatingVariants}
              animate=&quot;float&quot;
              className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg&quot;
            ></motion.div>
            <motion.div 
              variants={floatingVariants}
              animate=&quot;float&quot;
              style={{ animationDelay: '1s' }}
              className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full&quot;
            ></motion.div>
            <motion.div 
              variants={floatingVariants}
              animate=&quot;float&quot;
              style={{ animationDelay: '2s' }}
              className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45&quot;
            ></motion.div>
            
            {/* Quantum particle effects */}
            <div className=&quot;absolute inset-0&quot;>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className=&quot;absolute w-1 h-1 bg-cyan-400/30 rounded-full&quot;
                  style={{
=======
          {_/* Enhanced Futuristic Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {_/* Animated geometric shapes */}
            <motion.div 
              variants={_floatingVariants}
              animate="float"
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            ></motion.div>
            <motion.div 
              variants={_floatingVariants}
              animate="float"
              style={_{ animationDelay: '1s'}}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            ></motion.div>
            <motion.div 
              variants={_floatingVariants}
              animate="float"
              style={_{ animationDelay: '2s'}}
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
            ></motion.div>
            
            {_/* Quantum particle effects */}
            <div className="absolute inset-0">
              {_[...Array(20)].map(_(_, _i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  style={_{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    left: `${Math.random() * 100}%`,
                    top: `${_Math.random() * 100}%`,
                    animationDelay: `${_Math.random() * 3}s`
                  }}
                  animate={_{
                    scale: [0, _1, _0], _opacity: [0, _1, _0]}}
                  transition={_{
                    duration: 3, _repeat: Infinity, _delay: Math.random() * 3}}
                />
              ))}
            </div>
          </div>
          
          <div className=&quot;text-center max-w-6xl mx-auto relative z-10&quot;>
            <motion.div
<<<<<<< HEAD
              variants={containerVariants}
              initial=&quot;hidden&quot;
              animate=&quot;visible&quot;
              className=&quot;space-y-8&quot;
=======
              variants={_containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_/* Enhanced Company Badge */}
              <motion.div
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm&quot;
                role=&quot;banner&quot;
                aria-label=&quot;Company recognition&quot;
=======
                variants={_itemVariants}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
                role="banner"
                aria-label="Company recognition"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Star className=&quot;w-5 h-5 animate-pulse&quot; aria-hidden=&quot;true&quot; />
                <span>Innovation Leader 2040</span>
                <Sparkles className=&quot;w-5 h-5 animate-pulse&quot; aria-hidden=&quot;true&quot; />
              </motion.div>
              
              <motion.h1 
<<<<<<< HEAD
                variants={itemVariants}
                id=&quot;hero-heading&quot;
                className=&quot;text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight&quot;
=======
                variants={_itemVariants}
                id="hero-heading"
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Zion Tech Group
              </motion.h1>
              
              <motion.p 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed&quot;
=======
                variants={_itemVariants}
                className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Pioneering the future of technology with revolutionary AI, quantum computing, and autonomous solutions that transform businesses worldwide
              </motion.p>
              
              {_/* Enhanced CTA Section */}
              <motion.div 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;flex flex-col sm:flex-row gap-6 justify-center mb-12&quot;
=======
                variants={_itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Link href=&quot;/get-started&quot; aria-label=&quot;Get started with our services&quot;>
                  <button className=&quot;group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black&quot;>
                    <span className=&quot;flex items-center gap-3&quot;>
                      Get Started
                      <ArrowRight className=&quot;w-6 h-6 group-hover:translate-x-2 transition-transform&quot; aria-hidden=&quot;true&quot; />
                    </span>
                  </button>
                </a>
                <Link href=&quot;/services&quot; aria-label=&quot;Learn more about our services&quot;>
                  <button className=&quot;px-10 py-5 border-3 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black&quot;>
                    Explore Services
                  </button>
                </a>
                <Link href=&quot;/pricing&quot; aria-label=&quot;View our pricing&quot;>
                  <button className=&quot;px-10 py-5 border-3 border-purple-400 text-purple-400 font-bold text-lg rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black&quot;>
                    View Pricing
                  </button>
                </a>
              </motion.div>
              
              {_/* Enhanced Trust Indicators */}
              <motion.div
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;flex flex-wrap justify-center gap-8 text-sm text-gray-400&quot;
=======
                variants={_itemVariants}
                className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex items-center gap-2&quot;>
                  <ShieldCheck className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Globe className=&quot;w-5 h-5 text-blue-400&quot; />
                  <span>Global Infrastructure</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Users className=&quot;w-5 h-5 text-purple-400&quot; />
                  <span>10,000+ Happy Customers</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Star className=&quot;w-5 h-5 text-yellow-400&quot; />
                  <span>4.9/5 Rating</span>
                </div>

<<<<<<< HEAD
                {/* SVG Pattern Background */}
                <div className=&quot;absolute inset-0 bg-gray-800/20&quot;></div>
=======
                {_/* SVG Pattern Background */}
                <div className="absolute inset-0 bg-gray-800/20"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Stats Section */}
        <section className=&quot;py-20 px-4 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;
=======
        {_/* Enhanced Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_statsData.map(_(stat, _index) => (
                <motion.div
                  key={stat.label}
<<<<<<< HEAD
                  variants={itemVariants}
                  className=&quot;group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className=&quot;w-8 h-8 text-white&quot; aria-hidden=&quot;true&quot; />
=======
                  variants={_itemVariants}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={_`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  <div className={_`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {_stat.number}
                  </div>
<<<<<<< HEAD
                  <div className=&quot;text-xl font-semibold text-white mb-2&quot;>{stat.label}</div>
                  <div className=&quot;text-gray-400&quot;>{stat.description}</div>
=======
                  <div className="text-xl font-semibold text-white mb-2">{_stat.label}</div>
                  <div className="text-gray-400">{_stat.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Service Categories */}
        <section className=&quot;py-20 px-4 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <motion.h2 
                variants={itemVariants}
                className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent&quot;
=======
        {_/* Enhanced Service Categories */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={_itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Revolutionary Service Categories
              </motion.h2>
              <motion.p 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;
=======
                variants={_itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Explore our cutting-edge technology solutions across multiple domains
              </motion.p>
            </motion.div>

            <motion.div
<<<<<<< HEAD
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;
=======
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_serviceCategories.map(_(category, _index) => (
                <motion.div
                  key={category.name}
<<<<<<< HEAD
                  variants={itemVariants}
                  className=&quot;group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer&quot;
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className=&quot;relative z-10&quot;>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className=&quot;w-8 h-8 text-white&quot; aria-hidden=&quot;true&quot; />
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{category.name}</h3>
                    <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>{category.count}</div>
                    <div className=&quot;text-gray-400&quot;>Innovative Services</div>
=======
                  variants={_itemVariants}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className={_`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={_`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{_category.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{_category.count}</div>
                    <div className="text-gray-400">Innovative Services</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Featured Services Section */}
        <section className=&quot;py-20 px-4 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <motion.h2 
                variants={itemVariants}
                className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent&quot;
=======
        {_/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={_itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Featured Revolutionary Services
              </motion.h2>
              <motion.p 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;
=======
                variants={_itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Discover our most popular and innovative technology solutions
              </motion.p>
            </motion.div>

            <motion.div
<<<<<<< HEAD
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
=======
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_featuredServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
                  variants={itemVariants}
                  className=&quot;group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <div className=&quot;flex items-start justify-between mb-6&quot;>
                    <div className=&quot;text-4xl&quot;>{service.icon}</div>
                    {service.popular && (
                      <div className=&quot;px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full&quot;>
=======
                  variants={_itemVariants}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{_service.icon}</div>
                    {_service.popular && (
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Popular
                      </div>
                    )}
                  </div>
                  
<<<<<<< HEAD
                  <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>{service.name}</h3>
                  <p className=&quot;text-gray-400 mb-4&quot;>{service.tagline}</p>
                  
                  <div className=&quot;flex items-center justify-between mb-6&quot;>
                    <div className=&quot;text-3xl font-bold text-cyan-400&quot;>
                      ${service.price.monthly}
                      <span className=&quot;text-lg text-gray-400&quot;>/month</span>
                    </div>
                    <div className=&quot;text-sm text-gray-400&quot;>
                      {service.rating} ⭐ ({service.reviews})
                    </div>
                  </div>
                  
                  <div className=&quot;space-y-3 mb-6&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-3 text-gray-300&quot;>
                        <div className=&quot;w-2 h-2 bg-cyan-400 rounded-full&quot;></div>
                        <span className=&quot;text-sm&quot;>{feature}</span>
                      </div>

                      {/* Service Price */}
                      <div className=&quot;mb-6&quot;>
                        <span className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}
=======
                  <h3 className="text-2xl font-bold text-white mb-3">{_service.name}</h3>
                  <p className="text-gray-400 mb-4">{_service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-cyan-400">
                      ${_service.price.monthly}
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {_service.rating} ⭐ ({_service.reviews})
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm">{_feature}</span>
                      </div>

                      {_/* Service Price */}
                      <div className="mb-6">
                        <span className="text-2xl font-bold text-cyan-400">
                          {_service.price}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>

                      {_/* CTA Button */}
                      <Link 
<<<<<<< HEAD
                        href={service.link}
                        className=&quot;inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25&quot;
=======
                        href={_service.link}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Learn More
                        <ArrowRight className=&quot;w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300&quot; />
                      </a>
                    </motion.div>
                  ))}
                </motion.div>

                {_/* View All Services Button */}
                <motion.div
<<<<<<< HEAD
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className=&quot;text-center mt-12&quot;
=======
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  viewport={_{ once: true}}
                  transition={_{ duration: 0.8, _delay: 0.4}}
                  className="text-center mt-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Link 
                    href=&quot;/innovative-2040-futuristic-services-showcase&quot;
                    className=&quot;inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg&quot;
                  >
                    View All 2040 Services
                    <ArrowRight className=&quot;w-6 h-6 ml-3&quot; />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced CTA Section */}
        <section className=&quot;py-20 px-4 relative&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              whileInView=&quot;visible&quot;
              viewport={{ once: true }}
              className=&quot;space-y-8&quot;
            >
              <motion.h2 
                variants={itemVariants}
                className=&quot;text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent&quot;
=======
        {_/* Enhanced CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={_{ once: true}}
              className="space-y-8"
            >
              <motion.h2 
                variants={_itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;
=======
                variants={_itemVariants}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Join thousands of companies already leveraging our revolutionary technology solutions
              </motion.p>
              
              <motion.div 
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;
=======
                variants={_itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Link href=&quot;/contact&quot; aria-label=&quot;Contact us&quot;>
                  <button className=&quot;px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25&quot;>
                    Contact Us Today
                  </button>
                </a>
                <Link href=&quot;/demo&quot; aria-label=&quot;Request a demo&quot;>
                  <button className=&quot;px-12 py-5 border-3 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                    Request Demo
                  </button>
                </a>
              </motion.div>
              
              <motion.div
<<<<<<< HEAD
                variants={itemVariants}
                className=&quot;flex items-center justify-center gap-8 text-sm text-gray-400&quot;
=======
                variants={_itemVariants}
                className="flex items-center justify-center gap-8 text-sm text-gray-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;flex items-center gap-2&quot;>
                  <Shield className=&quot;w-5 h-5 text-green-400&quot; />
                  <span>Enterprise Security</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <Zap className=&quot;w-5 h-5 text-yellow-400&quot; />
                  <span>24/7 Support</span>
                </div>
                <div className=&quot;flex items-center gap-2&quot;>
                  <TrendingUp className=&quot;w-5 h-5 text-blue-400&quot; />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
},

export default Homepage2040,