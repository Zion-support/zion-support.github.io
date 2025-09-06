import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Target,
  Cpu,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Cpu, Database, Cloud, Lock, ArrowRight, 
  Star, TrendingUp, Users, CheckCircle
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';

export default function UltraFuturisticHero2027() {
  const features = [
<<<<<<< HEAD
<<<<<<< HEAD
    {
      icon: Brain,
      text: 'AI Consciousness Evolution',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: Atom,
      text: 'Quantum Computing',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: Globe,
      text: 'Digital Reality',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: Shield,
      text: 'Enterprise Security',
      color: 'from-red-400 to-orange-400',
    },
=======
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-purple-400 to-pink-400' },
    { icon: Atom, text: 'Quantum Computing', color: 'from-blue-400 to-cyan-400' },
    { icon: Globe, text: 'Digital Reality', color: 'from-green-400 to-emerald-400' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-red-400 to-orange-400' }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers', icon: Users, color: 'text-cyan-400' },
    { number: '4.9★', label: 'Average Rating', icon: Star, color: 'text-purple-400' },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle, color: 'text-green-400' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
=======
    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from-purple-400 to-pink-400' },
    { icon: Atom, text: 'Quantum Computing', color: 'from-blue-400 to-cyan-400' },
    { icon: Globe, text: 'Digital Reality', color: 'from-green-400 to-emerald-400' },
    { icon: Shield, text: 'Enterprise Security', color: 'from-red-400 to-orange-400' }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers', icon: Users, color: 'text-cyan-400' },
    { number: '4.9★', label: 'Average Rating', icon: Star, color: 'text-purple-400' },
    { number: '99.9%', label: 'Uptime SLA', icon: CheckCircle, color: 'text-green-400' },
    { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -20, 0];
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
<<<<<<< HEAD
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0];
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, 20, 0];
            scale: [1, 1.3, 1];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
          className='absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl'
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
=======
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0];
            scale: [1, 1.1, 1];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0];
            scale: [1, 1.1, 1];
            opacity: [0.4, 0.7, 0.4]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />

        {/* Grid Pattern */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center'>
=======
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='mb-8'
=======
            className="mb-8"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to 2027
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Future of
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4'>
=======
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to 2027
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Technology
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-12 max-w-5xl mx-auto leading-relaxed'
          >
            Experience revolutionary AI consciousness evolution, quantum
            computing breakthroughs, and practical micro SAAS solutions that
            will transform your business beyond imagination.
=======
            className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Experience revolutionary AI consciousness evolution, quantum computing breakthroughs, and practical micro SAAS solutions that will transform your business beyond imagination.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            Experience revolutionary AI consciousness evolution, quantum computing breakthroughs, and practical micro SAAS solutions that will transform your business beyond imagination.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='flex flex-col sm:flex-row gap-6 justify-center mb-16'
=======
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <Link
              href="/2027-services-showcase"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore 2027 Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3"
            >
<<<<<<< HEAD
              <Sparkles className='w-6 h-6' />
=======
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              href="/2027-services-showcase"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore 2027 Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-6 h-6" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <Sparkles className="w-6 h-6" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <span>Start Your Journey</span>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='group'
=======
                className="group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className='text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300'>
=======
                className="group"
              >
                <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {feature.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'
=======
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center group'
=======
                className="text-center group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.label}
                </div>
<<<<<<< HEAD
                <div className='flex justify-center mt-2'>
                  <stat.icon
                    className={`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
                  />
=======
                className="text-center group"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="flex justify-center mt-2">
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex justify-center mt-2">
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto'
=======
            className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
<<<<<<< HEAD
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {[
                'Fortune 500',
                'Tech Giants',
                'Research Labs',
                'Government',
              ].map((trust, index) => (
=======
            className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map((trust, index) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Fortune 500Tech GiantsResearch LabsGovernment'].map((trust, index) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <motion.div
                  key={trust}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='text-center'
=======
                  className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
<<<<<<< HEAD
                  <div className='text-cyan-300 font-medium'>{trust}</div>
=======
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-cyan-300 font-medium">{trust}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-cyan-300 font-medium">{trust}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none' />
    </section>
  );
=======
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
