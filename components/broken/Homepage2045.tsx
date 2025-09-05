<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket,
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
} from 'lucide-react',
import Link from 'next/link',
// Import our new innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services',
import { innovative2040ITServices } from '../data/innovative-2040-it-services',
import { revolutionary2043AdvancedServices } from '../data/revolutionary-2043-advanced-services',
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services',
// Loading fallback component
const LoadingFallback = () => (
  <div className=&quot;min-h-screen flex items-center justify-center bg-gray-900&quot;>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=&quot;text-center&quot;
=======
import React, {_useState, _useEffect} from 'react';
import Layout from './layout/Layout';
import {_ArrowRight, _Play, _Star, _Users, _Award, _TrendingUp, _Brain, _Shield, _Rocket, _Loader2, _ChevronDown, _Zap, _Globe, _Lock, _Cpu, _Database, _Cloud, _Palette, _Heart, _Phone, _Mail, _MapPin, _Search, _Grid, _List, _Atom, _Target, _Sparkles} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services

// Loading fallback component
const _LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={_{ opacity: 0, _scale: 0.5}}
      animate={_{ opacity: 1, _scale: 1}}
      transition={_{ duration: 0.5}}
      className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    >
      <div className=&quot;relative&quot;>
        <Loader2 className=&quot;w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4&quot; />
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse&quot;></div>
      </div>
      <p className=&quot;text-xl text-gray-300 mb-2&quot;>Loading Zion Tech Group 2045...</p>
      <p className=&quot;text-sm text-gray-500&quot;>Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
),

<<<<<<< HEAD
const Homepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true),
  const [isVisible, setIsVisible] = useState(false),
  const [activeSection, setActiveSection] = useState('hero'),
=======
const Homepage2045: React.FC = () => {_const [isLoading, _setIsLoading] = useState(true);
  const [isVisible, _setIsVisible] = useState(false);
  const [activeSection, _setActiveSection] = useState('hero');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    // Simulate content loading with better timing
<<<<<<< HEAD
    const timer = setTimeout(() => {
      setIsLoading(false),
      setIsVisible(true)
    }, 800),
=======
    const _timer = setTimeout__(() => {
      setIsLoading(false);
      setIsVisible(true);}, 800);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return () => clearTimeout(timer)
  }, []),

  // Intersection Observer for better performance
  useEffect__(() => {_if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const _observer = new (window as any).IntersectionObserver(_(entries: unknown[]) => {
          entries.forEach(_(entry) => {
            if (entry.isIntersecting) {
<<<<<<< HEAD
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.3, rootMargin: '-100px' }
      ),

      const sections = document.querySelectorAll('section[id]'),
      sections.forEach((section) => observer.observe(section)),
=======
              setActiveSection(entry.target.id);}
          });
        },
        {_threshold: 0.3, _rootMargin: '-100px'}
      );

      const _sections = document.querySelectorAll('section[id]');
      sections.forEach(_(section) => observer.observe(section));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      return () => observer.disconnect()
    }
  }, []),

<<<<<<< HEAD
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
<<<<<<< HEAD
    transition: { duration: 0.6, ease: "easeOut" }
  },
=======
    transition: { duration: 0.6, ease: &quot;easeOut&quot; }
=======
  const _fadeInUp = {_initial: { opacity: 0, _y: 60},
    animate: {_opacity: 1, _y: 0},
    transition: {_duration: 0.6, _ease: "easeOut"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _staggerContainer = {_animate: {
      transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  },

<<<<<<< HEAD
  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
<<<<<<< HEAD
    transition: { duration: 1.2, ease: "easeOut" }
  },
=======
    transition: { duration: 1.2, ease: &quot;easeOut&quot; }
=======
  const _backgroundVariants = {_initial: { opacity: 0, _scale: 0.8},
    animate: {_opacity: 1, _scale: 1},
    transition: {_duration: 1.2, _ease: "easeOut"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500from-purple-400 to-pink-500from-emerald-400 to-teal-500from-orange-400 to-red-500from-indigo-400 to-purple-500from-yellow-400 to-orange-500'
    ],
    return colors[index % colors.length]
  },

  if (isLoading) {
    return (
      <div className=&quot;min-h-screen bg-black flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4&quot;></div>
          <p className=&quot;text-cyan-400 text-xl&quot;>Loading Zion Tech Group...</p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className=&quot;min-h-screen bg-black text-white relative overflow-x-hidden&quot;>
        {/* Hero Section */}
        <section id=&quot;hero&quot; className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
          {/* Animated Background Elements */}
          <div className=&quot;absolute inset-0 pointer-events-none&quot;>
            <motion.div
              className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg&quot;
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]}}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: &quot;easeInOut&quot;
              }}
            />
            <motion.div
              className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full&quot;
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3]}}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: &quot;easeInOut&quot;
              }}
            />
            <motion.div
              className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45&quot;
              animate={{
                rotate: [45, 405],
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3]}}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: &quot;easeInOut&quot;
              }}
            />
          </div>

          {/* Hero Content */}
          <div className=&quot;relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;mb-8&quot;
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;
=======
  const _getColorClasses = (_index: number) => {_const _colors = [
      'from-cyan-400 to-blue-500', _'from-purple-400 to-pink-500', _'from-emerald-400 to-teal-500', _'from-orange-400 to-red-500', _'from-indigo-400 to-purple-500', _'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];};

  if (isLoading) {_return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>
        </div>
      </div>
    );}

  return (_<Layout>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {_/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {_/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
              animate={_{
                rotate: [0, _360], _scale: [1, _1.1, _1], _opacity: [0.3, _0.6, _0.3]}}
              transition={_{
                duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
              animate={_{
                rotate: [360, _0], _scale: [1, _1.2, _1], _opacity: [0.3, _0.7, _0.3]}}
              transition={_{
                duration: 6, _repeat: Infinity, _ease: "easeInOut"}}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
              animate={_{
                rotate: [45, _405], _scale: [1, _1.15, _1], _opacity: [0.3, _0.5, _0.3]}}
              transition={_{
                duration: 10, _repeat: Infinity, _ease: "easeInOut"}}
            />
          </div>

          {_/* Hero Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="mb-8"
            >
              <motion.h1
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.2}}
                className="text-5xl md:text-7xl font-bold mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
                  Future of Technology
                </span>
              </motion.h1>
              <motion.p
<<<<<<< HEAD
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;
=======
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: 0.4}}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Transform your business with Zion Tech Group's revolutionary AI services, _quantum computing, _and cutting-edge emerging technologies. Leading the future of technology innovation.
              </motion.p>
            </motion.div>

            {_/* CTA Buttons */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.6}}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105&quot;
              >
                Get Started
              </a>
              <Link
                href=&quot;/services&quot;
                className=&quot;px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105&quot;
              >
                Explore Services
              </a>
            </motion.div>

            {_/* Stats */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className=&quot;mt-16 grid grid-cols-1 md:grid-cols-3 gap-8&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.8}}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2&quot;>500+</div>
                <div className=&quot;text-gray-400&quot;>Innovative Services</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-purple-400 mb-2&quot;>4.9/5</div>
                <div className=&quot;text-gray-400&quot;>Customer Rating</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl md:text-4xl font-bold text-pink-400 mb-2&quot;>1000+</div>
                <div className=&quot;text-gray-400&quot;>Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Services Section */}
        <section id=&quot;featured-services&quot; className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Featured Services Section */}
        <section id="featured-services" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Revolutionary Services
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Discover our cutting-edge solutions that are transforming industries and pushing the boundaries of what's possible with technology.
              </p>
            </motion.div>

<<<<<<< HEAD
            {/* Service Categories Grid */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {[
                {
                  icon: <Brain className=&quot;w-12 h-12&quot; />,
                  title: &quot;AI & Consciousness&quot;,
                  description: &quot;Revolutionary AI platforms with emotional intelligence and autonomous operations&quot;,
                  color: &quot;from-cyan-400 to-blue-500&quot;,
                  href: &quot;/ai-services&quot;
                },
                {
                  icon: <Atom className=&quot;w-12 h-12&quot; />,
                  title: &quot;Quantum Technology&quot;,
                  description: &quot;Breakthrough quantum computing solutions for next-generation applications&quot;,
                  color: &quot;from-purple-400 to-pink-500&quot;,
                  href: &quot;/quantum-services&quot;
                },
                {
                  icon: <Rocket className=&quot;w-12 h-12&quot; />,
                  title: &quot;Space Technology&quot;,
                  description: &quot;Advanced space exploration and resource management platforms&quot;,
                  color: &quot;from-emerald-400 to-teal-500&quot;,
                  href: &quot;/space-technology&quot;
                },
                {
                  icon: <Shield className=&quot;w-12 h-12&quot; />,
                  title: &quot;Enterprise Solutions&quot;,
                  description: &quot;Advanced infrastructure and security solutions for modern enterprises&quot;,
                  color: &quot;from-orange-400 to-red-500&quot;,
                  href: &quot;/enterprise-solutions&quot;
                },
                {
                  icon: <Target className=&quot;w-12 h-12&quot; />,
                  title: &quot;Micro SAAS&quot;,
                  description: &quot;Innovative business solutions that drive growth and efficiency&quot;,
                  color: &quot;from-indigo-400 to-purple-500&quot;,
                  href: &quot;/micro-saas&quot;
                },
                {
                  icon: <Sparkles className=&quot;w-12 h-12&quot; />,
                  title: &quot;Emerging Tech&quot;,
                  description: &quot;Cutting-edge technologies that define the future of innovation&quot;,
                  color: &quot;from-yellow-400 to-orange-500&quot;,
                  href: &quot;/emerging-tech&quot;
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <Link href={service.href}>
                    <div className=&quot;relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25&quot;>
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                      <p className=&quot;text-gray-400 mb-6&quot;>{service.description}</p>
                      <div className=&quot;flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors&quot;>
                        <span className=&quot;mr-2&quot;>Learn More</span>
                        <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
=======
            {_/* Service Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_[
                {
                  icon: <Brain className="w-12 h-12" />, _title: "AI & Consciousness", _description: "Revolutionary AI platforms with emotional intelligence and autonomous operations", _color: "from-cyan-400 to-blue-500", _href: "/ai-services"}, _{_icon: <Atom className="w-12 h-12" />, _title: "Quantum Technology", _description: "Breakthrough quantum computing solutions for next-generation applications", _color: "from-purple-400 to-pink-500", _href: "/quantum-services"}, _{_icon: <Rocket className="w-12 h-12" />, _title: "Space Technology", _description: "Advanced space exploration and resource management platforms", _color: "from-emerald-400 to-teal-500", _href: "/space-technology"}, _{_icon: <Shield className="w-12 h-12" />, _title: "Enterprise Solutions", _description: "Advanced infrastructure and security solutions for modern enterprises", _color: "from-orange-400 to-red-500", _href: "/enterprise-solutions"}, _{_icon: <Target className="w-12 h-12" />, _title: "Micro SAAS", _description: "Innovative business solutions that drive growth and efficiency", _color: "from-indigo-400 to-purple-500", _href: "/micro-saas"}, _{_icon: <Sparkles className="w-12 h-12" />, _title: "Emerging Tech", _description: "Cutting-edge technologies that define the future of innovation", _color: "from-yellow-400 to-orange-500", _href: "/emerging-tech"}
              ].map((service, _index) => (
                <motion.div
                  key={_service.title}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <Link href={_service.href}>
                    <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className={_`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {_service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{_service.title}</h3>
                      <p className="text-gray-400 mb-6">{_service.description}</p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Latest Innovations Section */}
        <section id=&quot;latest-innovations&quot; className=&quot;py-20 relative bg-gray-900/30&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Latest Innovations Section */}
        <section id="latest-innovations" className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                  Latest Innovations
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our newest revolutionary services that are setting new standards in technology innovation.
              </p>
            </motion.div>

<<<<<<< HEAD
            {/* Featured New Services */}
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
              {revolutionary2043AdvancedServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;group&quot;
                >
                  <Link href={service.link}>
                    <div className=&quot;relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;text-3xl&quot;>{service.icon}</div>
                        {service.popular && (
                          <span className=&quot;px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full&quot;>
=======
            {_/* Featured New Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {_revolutionary2043AdvancedServices.slice(0, _4).map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="group"
                >
                  <Link href={_service.link}>
                    <div className="relative p-6 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{_service.icon}</div>
                        {_service.popular && (
                          <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            New
                          </span>
                        )}
                      </div>
<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-400 text-sm mb-4&quot;>{service.description}</p>
                      <div className=&quot;flex items-center justify-between&quot;>
                        <div className=&quot;text-cyan-400 font-semibold&quot;>
                          {service.price}{service.period}
=======
                      <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{_service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold">
                          {_service.price}{_service.period}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                        <div className=&quot;flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors&quot;>
                          <span className=&quot;mr-2 text-sm&quot;>Learn More</span>
                          <ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {_/* View All Services CTA */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center mt-12&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
              className="text-center mt-12"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Link
                href=&quot;/services&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105&quot;
              >
                View All Services
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </a>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA Section */}
        <section id=&quot;contact-cta&quot; className=&quot;py-20 relative&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
        {_/* Contact CTA Section */}
        <section id="contact-cta" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md: text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
=======
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  Ready to Transform?
                </span>
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Let's discuss how our revolutionary technology solutions can drive your business into the future.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105&quot;
                >
                  Get Started
                </a>
                <a
                  href=&quot;tel:+1 302 464 0950&quot;
                  className=&quot;px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
},

export default Homepage2045,
