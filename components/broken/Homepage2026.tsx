import React from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  ArrowRight,
  Star,
  Brain,
  Atom,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  MapPin,
  Users,
  Building,
  Rocket,
  CheckCircle,
  Phone,
<<<<<<< HEAD
  Mail,;} from 'lucide-react';
=======
  Mail,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin;
  Users, Building, Rocket, CheckCircle, Phone, Mail
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const Homepage2026: React.FC = () => {
  return (
    <Layout>
      {/* Main Content */}
<<<<<<< HEAD
      <main className='relative z-10'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <main className='relative z-10'>
=======
      <main className="relative z-10">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {/* Hero Section */}
        <section className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse'></div>
            <div className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000'></div>
            <div className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000'></div>
          </div>
<<<<<<< HEAD

          <div className='text-center max-w-4xl mx-auto relative z-10'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'            >
=======
<<<<<<< HEAD

          <div className='text-center max-w-4xl mx-auto relative z-10'>
=======
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='space-y-6'
=======
              className="space-y-6"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="space-y-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {/* Company Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
                className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium'
=======
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <Star className='w-4 h-4' />
                <span>Innovation Leader 2026</span>
              </motion.div>

              <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
                Zion Tech Group
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Pioneering the future of technology with innovative micro SAAS
                services, cutting-edge IT infrastructure, and advanced AI
                solutions
              </p>

              {/* Enhanced CTA Section */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>
                    <span className='flex items-center gap-2'>
                      Explore Services
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </button>
                </Link>
                <Link href='/services'>
                  <button className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
                    All Services
                  </button>
                </Link>
<<<<<<< HEAD
                <a href='mailto:kleber@ziontechgroup.com'>
                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105'>                    Get Started
                  </button>
                </a>
              </div>
=======
<<<<<<< HEAD
                <a href='mailto:kleber@ziontechgroup.com'>
                  <button className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105'>
=======
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Star className="w-4 h-4" />
                <span>Innovation Leader 2026</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative micro SAAS services, cutting-edge IT infrastructure, and advanced AI solutions
              </p>
              
              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Explore Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    All Services
                  </button>
                </Link>
                <a href="mailto:kleber@ziontechgroup.com">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <a href="mailto:kleber@ziontechgroup.com">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Get Started
                  </button>
                </a>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
                className='flex items-center justify-center space-x-6 text-sm text-gray-400'
              >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='flex items-center justify-center space-x-6 text-sm text-gray-400'
=======
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='flex items-center space-x-2'>
                  <Shield className='w-4 h-4 text-green-400' />
                  <span>Enterprise Security</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Globe className='w-4 h-4 text-blue-400' />
                  <span>Global Reach</span>
                </div>
<<<<<<< HEAD
                <div className='flex items-center space-x-2'>
                  <TrendingUp className='w-4 h-4 text-purple-400' />                  <span>Proven Results</span>
=======
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>Proven Results</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
<<<<<<< HEAD
        <section className='py-20 px-4 bg-black/30 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5'></div>
          <div className='max-w-6xl mx-auto relative z-10'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 bg-black/30 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5'></div>
          <div className='max-w-6xl mx-auto relative z-10'>
=======
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 bg-black/30 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                We deliver innovative solutions that drive real business
                transformation
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
=======
<<<<<<< HEAD
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver innovative solutions that drive real business transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='text-center'
              >
                <div className='text-4xl mb-4'>🚀</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Micro SAAS Solutions
                </h3>
<<<<<<< HEAD
                <p className='text-gray-300 text-sm'>                  Starting at $69/month for specialized business solutions
=======
                <p className='text-gray-300 text-sm'>
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS Solutions</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Micro SAAS Solutions</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Starting at $69/month for specialized business solutions
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='text-center'
              >
                <div className='text-4xl mb-4'>🏗️</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  IT Infrastructure
                </h3>
<<<<<<< HEAD
                <p className='text-gray-300 text-sm'>                  Starting at $499/month for robust infrastructure solutions
=======
                <p className='text-gray-300 text-sm'>
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Infrastructure</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Starting at $499/month for robust infrastructure solutions
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='text-center'
              >
                <div className='text-4xl mb-4'>🤖</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  AI Automation
                </h3>
<<<<<<< HEAD
                <p className='text-gray-300 text-sm'>                  Starting at $199/month for intelligent automation
=======
                <p className='text-gray-300 text-sm'>
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Starting at $199/month for intelligent automation
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='text-center'
              >
                <div className='text-4xl mb-4'>🧠</div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  Cutting-Edge AI
                </h3>
<<<<<<< HEAD
                <p className='text-gray-300 text-sm'>                  Starting at $179/month for next-generation AI
=======
                <p className='text-gray-300 text-sm'>
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-center"
              >
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-gray-300 text-sm">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Starting at $179/month for next-generation AI
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
<<<<<<< HEAD
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4'>
          <div className='max-w-6xl mx-auto'>
=======
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Our Service Portfolio
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Comprehensive solutions covering every aspect of modern business
                technology needs
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>              {/* AI Automation Services */}
=======
<<<<<<< HEAD
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions covering every aspect of modern business technology needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {/* AI Automation Services */}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300'
=======
                className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='text-5xl mb-6'>🤖</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  AI Automation Services
                </h3>
                <p className='text-gray-300 mb-6'>
                  Intelligent automation solutions that streamline operations
                  and boost productivity. From content creation to customer
                  service, our AI solutions save time and improve efficiency.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>                    Learn More
=======
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'>
=======
                className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Automation Services</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent automation solutions that streamline operations and boost productivity. 
                  From content creation to customer service, our AI solutions save time and improve efficiency.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Learn More
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </button>
                </Link>
              </motion.div>

              {/* IT Infrastructure Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300'
=======
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='text-5xl mb-6'>🏗️</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  IT Infrastructure Services
                </h3>
                <p className='text-gray-300 mb-6'>
                  Robust infrastructure solutions for modern digital businesses.
                  Edge computing, zero trust security, and hybrid cloud
                  management for enterprise-grade performance.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Edge Computing Orchestration - $599/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Zero Trust Security Platform - $799/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Hybrid Cloud Management - $499/month</span>
                  </div>
                </div>
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors'>                    Learn More
=======
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors'>
=======
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🏗️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">IT Infrastructure Services</h3>
                <p className="text-gray-300 mb-6">
                  Robust infrastructure solutions for modern digital businesses. 
                  Edge computing, zero trust security, and hybrid cloud management for enterprise-grade performance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Edge Computing Orchestration - $599/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zero Trust Security Platform - $799/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Hybrid Cloud Management - $499/month</span>
                  </div>
                </div>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Learn More
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </button>
                </Link>
              </motion.div>

              {/* Micro SAAS Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300'
=======
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='text-5xl mb-6'>🚀</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Micro SAAS Solutions
                </h3>
                <p className='text-gray-300 mb-6'>
                  Specialized software solutions for specific business needs.
                  Affordable, focused solutions that solve real problems and
                  drive growth.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>Smart Appointment Scheduler - $69/month</span>
                  </div>
                </div>
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors'>                    Learn More
=======
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors'>
=======
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Specialized software solutions for specific business needs. 
                  Affordable, focused solutions that solve real problems and drive growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart Appointment Scheduler - $69/month</span>
                  </div>
                </div>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Learn More
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </button>
                </Link>
              </motion.div>

              {/* Cutting-Edge AI Services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
                className='bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300'
=======
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='text-5xl mb-6'>🧠</div>
                <h3 className='text-2xl font-semibold text-white mb-4'>
                  Cutting-Edge AI Services
                </h3>
                <p className='text-gray-300 mb-6'>
                  Next-generation AI solutions for competitive advantage. Video
                  generation, code assistance, and data analysis powered by
                  advanced AI.
                </p>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Video Generation - $199/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Code Generation - $299/month</span>
                  </div>
                  <div className='flex items-center space-x-2 text-sm text-gray-300'>
                    <CheckCircle className='w-4 h-4 text-green-400' />
                    <span>AI Data Analysis - $399/month</span>
                  </div>
                </div>
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors'>                    Learn More
=======
<<<<<<< HEAD
                <Link href='/comprehensive-2025-services-showcase'>
                  <button className='w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors'>
=======
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🧠</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cutting-Edge AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Next-generation AI solutions for competitive advantage. 
                  Video generation, code assistance, and data analysis powered by advanced AI.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Video Generation - $199/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Code Generation - $299/month</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AI Data Analysis - $399/month</span>
                  </div>
                </div>
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/comprehensive-2025-services-showcase">
                  <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Learn More
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
<<<<<<< HEAD
        <section className='py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='space-y-6'
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'>
          <div className='max-w-4xl mx-auto text-center'>
=======
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='space-y-6'
=======
              className="space-y-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Get in touch with our team to discuss how our innovative
                services can drive your success
              </p>

              {/* Contact Information */}
              <div className='bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8'>
                <h3 className='text-2xl font-semibold text-cyan-400 mb-6'>
                  Contact Information
                </h3>
                <div className='grid md:grid-cols-2 gap-6 text-left'>
                  <div className='flex items-center space-x-3'>
                    <Globe className='w-5 h-5 text-blue-400' />
                    <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div className='text-sm text-gray-400'>Website</div>
                      <a
                        href='https://ziontechgroup.com'
                        className='text-cyan-400 hover:underline font-medium'
<<<<<<< HEAD
                      >                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
=======
                      >
=======
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to discuss how our innovative services can drive your success
              </p>
              
              {/* Contact Information */}
              <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
                <div className="grid md: grid-cols-2 gap-6 text-left">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">Website</div>
                      <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline font-medium">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="text-sm text-gray-400">Website</div>
                      <a href="https://ziontechgroup.com" className="text-cyan-400 hover:underline font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='flex items-center space-x-3'>
                    <Phone className='w-5 h-5 text-green-400' />
                    <div>
                      <div className='text-sm text-gray-400'>Phone</div>
                      <a
                        href='tel:+13024640950'
                        className='text-cyan-400 hover:underline font-medium'
<<<<<<< HEAD
                      >                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
=======
                      >
=======
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:underline font-medium">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:underline font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='flex items-center space-x-3'>
                    <Mail className='w-5 h-5 text-yellow-400' />
                    <div>
                      <div className='text-sm text-gray-400'>Email</div>
                      <a
                        href='mailto:kleber@ziontechgroup.com'
                        className='text-cyan-400 hover:underline font-medium'
<<<<<<< HEAD
                      >                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
=======
                      >
=======
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline font-medium">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline font-medium">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div className='flex items-center space-x-3'>
                    <MapPin className='w-5 h-5 text-purple-400' />
                    <div>
                      <div className='text-sm text-gray-400'>Address</div>
                      <div className='text-white font-medium'>
                        364 E Main St STE 1008
<<<<<<< HEAD
                        <br />                        Middletown DE 19709
=======
                        <br />
=======
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-medium">
                        364 E Main St STE 1008<br />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-medium">
                        364 E Main St STE 1008<br />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        Middletown DE 19709
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
<<<<<<< HEAD
<<<<<<< HEAD

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a
                  href='mailto:kleber@ziontechgroup.com'
                  className='inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'
                >
                  <span>Get Started Today</span>
                  <ArrowRight className='w-5 h-5' />
                </a>
                <a
<<<<<<< HEAD
                  href='tel:+13024640950'
                  className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300'                >
=======
<<<<<<< HEAD
                  href='tel:+13024640950'
                  className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300'
=======
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
<<<<<<< HEAD
  );
};

export default Homepage2026;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default Homepage2026;
=======
  )
};

export default Homepage2026;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default Homepage2026;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
