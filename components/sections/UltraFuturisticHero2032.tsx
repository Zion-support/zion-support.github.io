import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Microscope,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Phone,
  Mail,
  MapPin,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, Star, ArrowRight, Play, CheckCircle;
  Phone, Mail, MapPin
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
};

const heroStats = [
  {
    number: '1000+',
    label: 'Innovative Services',
    icon: Sparkles,
    color: 'from-cyan-400 to-blue-400',
  },
  {
    number: '24/7',
    label: 'Expert Support',
    icon: Shield,
    color: 'from-purple-400 to-pink-400',
  },
  {
    number: '1000%',
    label: 'Average ROI',
    icon: Star,
    color: 'from-yellow-400 to-orange-400',
  },
  {
    number: '99.9%',
    label: 'Uptime Guarantee',
    icon: CheckCircle,
    color: 'from-green-400 to-emerald-400',
  },
=======
  website: 'https://ziontechgroup.com'
};

const heroStats = [
=======
  website: 'https://ziontechgroup.com'
};

const heroStats = [
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  { number: '1000+', label: 'Innovative Services', icon: Sparkles, color: 'from-cyan-400 to-blue-400' },
  { number: '24/7', label: 'Expert Support', icon: Shield, color: 'from-purple-400 to-pink-400' },
  { number: '1000%', label: 'Average ROI', icon: Star, color: 'from-yellow-400 to-orange-400' },
  { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle, color: 'from-green-400 to-emerald-400' }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

const featuredServices = [
  {
    name: 'AI Consciousness Evolution',
    description: 'Develop genuine AI consciousness',
    price: '$19,999/month';
    icon: Brain,
    color: 'from-violet-600 to-purple-600',
<<<<<<< HEAD
<<<<<<< HEAD
    href: '/ai-consciousness-evolution-platform',
  },
=======
    href: '/ai-consciousness-evolution-platform'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    href: '/ai-consciousness-evolution-platform'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    name: 'Space Mining Automation',
    description: 'Automated asteroid mining',
    price: '$45,999/month';
    icon: Rocket,
    color: 'from-teal-600 to-emerald-600',
<<<<<<< HEAD
<<<<<<< HEAD
    href: '/space-mining-automation-platform',
  },
=======
    href: '/space-mining-automation-platform'
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    href: '/space-mining-automation-platform'
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
    name: 'Quantum Internet Security',
    description: 'Unbreakable encryption',
    price: '$15,999/month';
    icon: Shield,
    color: 'from-indigo-600 to-blue-600',
<<<<<<< HEAD
<<<<<<< HEAD
    href: '/quantum-internet-security-gateway',
  },
=======
    href: '/quantum-internet-security-gateway'
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    href: '/quantum-internet-security-gateway'
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];

export default function UltraFuturisticHero2032() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black'>
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -20, 0];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
<<<<<<< HEAD
                delay: Math.random() * 2,
              }}
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`}}
              animate={{
                y: [0, -20, 0];
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2}}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                delay: Math.random() * 2}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            />
          ))}
        </div>

        {/* Gradient Orbs */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow' />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
=======
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm'
        >
          <Sparkles className='w-5 h-5 text-purple-400' />
          <span className='text-purple-300 font-medium'>
            🚀 2032 Revolutionary Technology
          </span>
          <Sparkles className='w-5 h-5 text-cyan-400' />
=======
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium">🚀 2032 Revolutionary Technology</span>
          <Sparkles className="w-5 h-5 text-cyan-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium">🚀 2032 Revolutionary Technology</span>
          <Sparkles className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'
=======
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of
          </span>
          <br />
<<<<<<< HEAD
          <span className='text-white'>Technology is Here</span>
=======
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of
          </span>
          <br />
          <span className="text-white">Technology is Here</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <span className="text-white">Technology is Here</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'
        >
          Experience the revolution with our cutting-edge AI consciousness,
          quantum computing, space technology, and emerging tech solutions.
          Transform your business with technologies that were once science
          fiction.
=======
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Experience the revolution with our cutting-edge AI consciousness, quantum computing, space technology, and emerging tech solutions. Transform your business with 
          technologies that were once science fiction.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Experience the revolution with our cutting-edge AI consciousness, quantum computing, space technology, and emerging tech solutions. Transform your business with 
          technologies that were once science fiction.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
=======
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href={`tel:${contactInfo.mobile}`}
            className="group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
<<<<<<< HEAD
            <Phone className='w-5 h-5' />
=======
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/services"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href={`tel:${contactInfo.mobile}`}
            className="group inline-flex items-center space-x-3 bg-transparent border-2 border-purple-500/50 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Phone className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <span>Call {contactInfo.mobile}</span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
=======
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center group'
=======
              className="text-center group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
<<<<<<< HEAD
              <div className='text-gray-400 text-sm'>{stat.label}</div>
=======
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl transform transition-all duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="text-gray-400 text-sm">{stat.label}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='mb-16'
=======
          className="mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Featured Revolutionary Services
          </h2>
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
=======
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Featured Revolutionary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='group'
=======
                className="group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                <Link
                  href={service.href}
                  className="block relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-purple-400 group-hover:text-cyan-400 transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
<<<<<<< HEAD

                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
=======
                className="group"
              >
                <Link
                  href={service.href}
                  className="block relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-purple-400 group-hover:text-cyan-400 transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto'
=======
          className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Ready to Transform Your Business?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <span>Get Started Today</span>
<<<<<<< HEAD
              <ArrowRight className='w-5 h-5' />
=======
          className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Ready to Transform Your Business?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <ArrowRight className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed bottom-8 right-8 z-50'
=======
        className="fixed bottom-8 right-8 z-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      >
        <Link
          href={`tel:${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover: shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40"
        >
          <Phone className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>
    </section>
<<<<<<< HEAD
  );
=======
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href={`tel:${contactInfo.mobile}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 transform transition-all duration-300 hover: shadow-lg hover:shadow-cyan-400/40 hover:shadow-2xl hover:shadow-purple-500/40"
        >
          <Phone className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
