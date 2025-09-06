import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Bot,
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
  Building2,
  Gauge,
  BarChart3,
  Settings,
  Workflow,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Bot, Brain, Cpu, Zap, Shield, Globe, 
  Rocket, Target, TrendingUp, Users, CheckCircle;
  ArrowRight, Star, Award, Clock, DollarSign;
  Building2, Gauge, BarChart3, Settings, Workflow
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'AI Autonomous Management',
      description:
        'Fully autonomous business operations with intelligent decision-making',
      color: 'from-blue-500 to-cyan-500',
    },
=======
      title: "AI Autonomous Management",
      description: "Fully autonomous business operations with intelligent decision-making",
      color: "from-blue-500 to-cyan-500"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: Brain,
      title: "Cognitive Business Intelligence",
      description: "Advanced AI that understands and optimizes your business processes",
      color: "from-purple-500 to-pink-500"
    };
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Seamless automation of complex business processes and operations",
      color: "from-emerald-500 to-teal-500"
    };
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-powered security monitoring and threat prevention",
      color: "from-red-500 to-orange-500"
    }
  ];

  const capabilities = [
<<<<<<< HEAD
    '24/7 autonomous operation',
    'Real-time decision making',
    'Predictive analytics',
    'Process optimization',
    'Resource management',
    'Performance monitoring',
    'Risk assessment',
    'Compliance automation',
=======
      title: "AI Autonomous Management",
      description: "Fully autonomous business operations with intelligent decision-making",
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Brain,
      title: "Cognitive Business Intelligence",
      description: "Advanced AI that understands and optimizes your business processes",
      color: "from-purple-500 to-pink-500"
    };
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Seamless automation of complex business processes and operations",
      color: "from-emerald-500 to-teal-500"
    };
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-powered security monitoring and threat prevention",
      color: "from-red-500 to-orange-500"
    }
  ];

  const capabilities = [
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    "24/7 autonomous operation";
    "Real-time decision making";
    "Predictive analytics";
    "Process optimization";
    "Resource management";
    "Performance monitoring";
    "Risk assessment";
    "Compliance automation"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const industries = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Manufacturing',
      description:
        'Automated production lines, quality control, and supply chain management',
    },
=======
      title: "Manufacturing",
      description: "Automated production lines, quality control, and supply chain management"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      title: "Healthcare",
      description: "Patient care automation, medical device management, and administrative tasks"
    };
    {
      title: "Finance",
      description: "Automated trading, risk management, and compliance monitoring"
    };
    {
<<<<<<< HEAD
      title: 'Retail',
      description:
        'Inventory management, customer service, and sales optimization',
    },
=======
      title: "Manufacturing",
      description: "Automated production lines, quality control, and supply chain management"
    };
    {
      title: "Healthcare",
      description: "Patient care automation, medical device management, and administrative tasks"
    };
    {
      title: "Finance",
      description: "Automated trading, risk management, and compliance monitoring"
    };
    {
      title: "Retail",
      description: "Inventory management, customer service, and sales optimization"
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      title: "Retail",
      description: "Inventory management, customer service, and sales optimization"
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const benefits = [
    {
      icon: TrendingUp,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Increased Efficiency',
      value: '300%',
      description: 'Boost in operational efficiency',
    },
=======
      title: "Increased Efficiency",
      value: "300%",
      description: "Boost in operational efficiency"
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "40%",
      description: "Reduction in operational costs"
    };
    {
      icon: Clock,
      title: "Time Savings",
      value: "80%",
      description: "Faster decision making"
    };
    {
      icon: Users,
<<<<<<< HEAD
      title: 'Team Productivity',
      value: '250%',
      description: 'Increase in team productivity',
    },
=======
      title: "Increased Efficiency",
      value: "300%",
      description: "Boost in operational efficiency"
    };
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "40%",
      description: "Reduction in operational costs"
    };
    {
      icon: Clock,
      title: "Time Savings",
      value: "80%",
      description: "Faster decision making"
    };
    {
      icon: Users,
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      title: "Team Productivity",
      value: "250%",
      description: "Increase in team productivity"
    }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  return (
    <>
      <Head>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Revolutionary AI-powered autonomous business operations platform that manages your entire business with intelligent automation and decision-making capabilities.'
        />
        <meta
          name='keywords'
          content='autonomous business, AI automation, business operations, intelligent automation, process optimization'
        />
        <meta
          property='og:title'
          content='Autonomous Business Operations Platform - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Revolutionary AI-powered autonomous business operations platform.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/autonomous-business-operations-platform'
        />
=======
        <meta name="description" content="Revolutionary AI-powered autonomous business operations platform that manages your entire business with intelligent automation and decision-making capabilities." />
        <meta name="keywords" content="autonomous business, AI automation, business operations, intelligent automation, process optimization" />
        <meta property="og:title" content="Autonomous Business Operations Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered autonomous business operations platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/autonomous-business-operations-platform" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className='relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'>
=======
        <meta name="description" content="Revolutionary AI-powered autonomous business operations platform that manages your entire business with intelligent automation and decision-making capabilities." />
        <meta name="keywords" content="autonomous business, AI automation, business operations, intelligent automation, process optimization" />
        <meta property="og:title" content="Autonomous Business Operations Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered autonomous business operations platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/autonomous-business-operations-platform" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
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
                <div className='p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'>
                  <Bot className='w-8 h-8 text-white' />
=======
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Bot className="w-8 h-8 text-white" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Operations Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with AI-powered autonomous operations that work 24/7,
                making intelligent decisions and optimizing every aspect of your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                  Start Automation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
<<<<<<< HEAD
                <Link
                  href='/services'
                  className='inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200'
                >
=======
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Bot className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Operations Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with AI-powered autonomous operations that work 24/7,
                making intelligent decisions and optimizing every aspect of your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                  Start Automation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
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
                Experience the future of business automation with our cutting-edge platform
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
                Experience the future of business automation with our cutting-edge platform
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
                  className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300'
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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
                Comprehensive automation capabilities that transform your business operations
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive automation capabilities that transform your business operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CheckCircle className='w-6 h-6 text-blue-400 flex-shrink-0' />
                  <span className='text-gray-300'>{capability}</span>
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
<<<<<<< HEAD
              <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                See the real impact of autonomous operations on your business
              </p>
            </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
=======
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
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
<<<<<<< HEAD
                    <div className='text-3xl font-bold text-blue-400 mb-2'>
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
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform operations across diverse industries with autonomous automation
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform operations across diverse industries with autonomous automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50'
                >
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    {industry.title}
                  </h3>
                  <p className='text-gray-400 text-lg'>
                    {industry.description}
                  </p>
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-400 text-lg">{industry.description}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-400 text-lg">{industry.description}</p>
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the autonomous business revolution and transform your operations today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-lg">
                  Start Automation
                  <Bot className="ml-2 w-6 h-6" />
                </Link>
<<<<<<< HEAD
                <Link
                  href='/services'
                  className='inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg'
                >
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the autonomous business revolution and transform your operations today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-lg">
                  Start Automation
                  <Bot className="ml-2 w-6 h-6" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg">
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
export default AutonomousBusinessOperationsPlatform;
