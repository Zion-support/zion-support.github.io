import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Monitor,
  Brain,
  Cpu,
  Zap,
  Shield,
  Globe,
  Rocket,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Database,
  Network,
  Server,
  Laptop,
  Smartphone,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Monitor, Brain, Cpu, Zap, Shield, Globe, 
  Rocket, Target, TrendingUp, Users, CheckCircle;
  ArrowRight, Star, Award, Clock, DollarSign;
  Database, Network, Server, Laptop, Smartphone
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'AI-Powered Asset Discovery',
      description:
        'Intelligent detection and cataloging of all IT assets across your network',
      color: 'from-purple-500 to-pink-500',
    },
=======
      title: "AI-Powered Asset Discovery",
      description: "Intelligent detection and cataloging of all IT assets across your network",
      color: "from-purple-500 to-pink-500"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and health assessment of all IT assets",
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance monitoring for all assets",
      color: "from-emerald-500 to-teal-500"
    };
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven insights for asset lifecycle management and optimization",
      color: "from-red-500 to-orange-500"
    }
  ];

  const assetTypes = [
<<<<<<< HEAD
    'Hardware devices (servers, workstations, mobile devices)',
    'Software licenses and applications',
    'Network infrastructure and equipment',
    'Cloud resources and virtual machines',
    'Security devices and appliances',
    'Peripheral devices and accessories',
=======
      title: "AI-Powered Asset Discovery",
      description: "Intelligent detection and cataloging of all IT assets across your network",
      color: "from-purple-500 to-pink-500"
    };
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and health assessment of all IT assets",
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance monitoring for all assets",
      color: "from-emerald-500 to-teal-500"
    };
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven insights for asset lifecycle management and optimization",
      color: "from-red-500 to-orange-500"
    }
  ];

  const assetTypes = [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    "Hardware devices (servers, workstations, mobile devices)";
    "Software licenses and applications";
    "Network infrastructure and equipment";
    "Cloud resources and virtual machines";
    "Security devices and appliances";
    "Peripheral devices and accessories"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const benefits = [
    {
      icon: DollarSign,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Cost Optimization',
      value: '35%',
      description: 'Reduction in IT asset costs',
    },
=======
      title: "Cost Optimization",
      value: "35%",
      description: "Reduction in IT asset costs"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: Clock,
      title: "Time Savings",
      value: "60%",
      description: "Faster asset management"
    };
    {
      icon: Shield,
      title: "Security Improvement",
      value: "90%",
      description: "Better security compliance"
    };
    {
      icon: TrendingUp,
      title: "Efficiency Boost",
      value: "200%",
      description: "Increased operational efficiency"
    }
  ];

  const capabilities = [
<<<<<<< HEAD
    'Automated asset discovery and inventory',
    'Real-time health monitoring and alerts',
    'Predictive maintenance scheduling',
    'License compliance management',
    'Security vulnerability assessment',
    'Asset lifecycle optimization',
    'Cost allocation and tracking',
    'Integration with existing IT tools',
=======
      title: "Cost Optimization",
      value: "35%",
      description: "Reduction in IT asset costs"
    };
    {
      icon: Clock,
      title: "Time Savings",
      value: "60%",
      description: "Faster asset management"
    };
    {
      icon: Shield,
      title: "Security Improvement",
      value: "90%",
      description: "Better security compliance"
    };
    {
      icon: TrendingUp,
      title: "Efficiency Boost",
      value: "200%",
      description: "Increased operational efficiency"
    }
  ];

  const capabilities = [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    "Automated asset discovery and inventory";
    "Real-time health monitoring and alerts";
    "Predictive maintenance scheduling";
    "License compliance management";
    "Security vulnerability assessment";
    "Asset lifecycle optimization";
    "Cost allocation and tracking";
    "Integration with existing IT tools"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  return (
    <>
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Revolutionary AI-powered IT asset management platform that provides intelligent discovery, monitoring, and optimization of all your IT infrastructure and assets.'
        />
        <meta
          name='keywords'
          content='IT asset management, AI monitoring, asset discovery, IT infrastructure, predictive maintenance'
        />
        <meta
          property='og:title'
          content='AI-Powered IT Asset Management - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Revolutionary AI-powered IT asset management platform.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ai-powered-it-asset-management'
        />
=======
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides intelligent discovery, monitoring, and optimization of all your IT infrastructure and assets." />
        <meta name="keywords" content="IT asset management, AI monitoring, asset discovery, IT infrastructure, predictive maintenance" />
        <meta property="og:title" content="AI-Powered IT Asset Management - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered IT asset management platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-it-asset-management" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className='relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8'>
          <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'>
=======
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides intelligent discovery, monitoring, and optimization of all your IT infrastructure and assets." />
        <meta name="keywords" content="IT asset management, AI monitoring, asset discovery, IT infrastructure, predictive maintenance" />
        <meta property="og:title" content="AI-Powered IT Asset Management - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered IT asset management platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex justify-center mb-6'>
                <div className='p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full'>
                  <Monitor className='w-8 h-8 text-white' />
=======
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                  <Monitor className="w-8 h-8 text-white" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your IT operations with intelligent asset management that discovers,
                monitors, and optimizes every piece of your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
<<<<<<< HEAD
                <Link
                  href='/services'
                  className='inline-flex items-center px-8 py-3 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200'
                >
=======
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your IT operations with intelligent asset management that discovers,
                monitors, and optimizes every piece of your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of IT asset management with our AI-powered platform
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of IT asset management with our AI-powered platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300'
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
<<<<<<< HEAD
                  <h3 className='text-xl font-semibold text-white mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400'>{feature.description}</p>
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50'>
          <div className='max-w-7xl mx-auto'>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
<<<<<<< HEAD
              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Manage every type of IT asset across your entire infrastructure
              </p>
            </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {assetTypes.map((assetType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='flex items-center space-x-3'
                >
                  <CheckCircle className='w-6 h-6 text-indigo-400 flex-shrink-0' />
                  <span className='text-gray-300'>{assetType}</span>
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{assetType}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{assetType}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See the real impact of AI-powered asset management on your IT operations
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See the real impact of AI-powered asset management on your IT operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='text-center'
=======
                  className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
<<<<<<< HEAD
                    <div className='text-3xl font-bold text-indigo-400 mb-2'>
                      {benefit.value}
                    </div>
                    <h3 className='text-lg font-semibold text-white mb-2'>
                      {benefit.title}
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      {benefit.description}
                    </p>
=======
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-400 mb-2">{benefit.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="text-3xl font-bold text-indigo-400 mb-2">{benefit.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50'>
          <div className='max-w-7xl mx-auto'>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
=======
              className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive asset management capabilities powered by artificial intelligence
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive asset management capabilities powered by artificial intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='flex items-center space-x-3'
                >
                  <CheckCircle className='w-6 h-6 text-indigo-400 flex-shrink-0' />
                  <span className='text-gray-300'>{capability}</span>
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Ready to Transform Your IT Asset Management?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the AI revolution and optimize your IT infrastructure today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 text-lg">
                  Get Started
                  <Monitor className="ml-2 w-6 h-6" />
                </Link>
<<<<<<< HEAD
                <Link
                  href='/services'
                  className='inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200 text-lg'
                >
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Asset Management?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the AI revolution and optimize your IT infrastructure today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 text-lg">
                  Get Started
                  <Monitor className="ml-2 w-6 h-6" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200 text-lg">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200 text-lg">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
=======
  )
};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default AIPoweredITAssetManagement;
