import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  ArrowRight,
  Brain,
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Lock,
  Cloud,;
} from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD
=======

=======
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const Enhanced2026ServicesShowcase = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence-elite-2026',
      name: 'AI Business Intelligence Elite 2026',
<<<<<<< HEAD
      description:
        'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',      price: '$299',
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
=======
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      price: '$299',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      category: 'AI & Analytics',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      features: [
        'Predictive Analytics',
        'Real-time Insights',
        'Custom Dashboards',
        'AI-powered Reports',
      ],
    },
<<<<<<< HEAD
=======
=======
      features: ['Predictive AnalyticsReal-time InsightsCustom DashboardsAI-powered Reports']
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      id: 'autonomous-ai-agents-platform-2026',
      name: 'Autonomous AI Agents Platform 2026',
      description:
        'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',      period: '/month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI & Automation',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      features: [
        'Task Automation',
        'Process Optimization',
        '24/7 Operation',
        'Scalable Architecture',
      ],
    },
    {
      id: 'quantum-cybersecurity-suite-2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description:
<<<<<<< HEAD
        'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',      price: '$599',
=======
        'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
=======
      features: ['Task AutomationProcess Optimization24/7 OperationScalable Architecture']
    };
    {
      id: 'quantum-cybersecurity-suite-2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      features: ['Task AutomationProcess Optimization24/7 OperationScalable Architecture']
    };
    {
      id: 'quantum-cybersecurity-suite-2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      price: '$599',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      period: '/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      features: [
        'Quantum Encryption',
        'Threat Detection',
        'Zero Trust',
        'Compliance Ready',
      ],
    },
<<<<<<< HEAD
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
=======
=======
      features: ['Quantum EncryptionThreat DetectionZero TrustCompliance Ready']
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499';
      period: '/month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'Emerging Tech',
      features: ['Brain-like ProcessingLow PowerReal-time LearningCognitive Computing']
    };
    {
      id: 'dna-computing-platform-2026',
      name: 'DNA Computing Platform 2026',
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2,999';
      period: '/month',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      category: 'Emerging Tech',
      features: ['Molecular ProcessingExponential SpeedComplex AlgorithmsResearch Ready']
    };
    {
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      description:
        'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499',
      period: '/month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'Emerging Tech',
      features: [
        'Brain-like Processing',
        'Low Power',
        'Real-time Learning',
        'Cognitive Computing',
      ],
    },
    {
      id: 'dna-computing-platform-2026',
      name: 'DNA Computing Platform 2026',
      description:
        'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2,999',
      period: '/month',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      category: 'Emerging Tech',
      features: [
        'Molecular Processing',
        'Exponential Speed',
        'Complex Algorithms',
        'Research Ready',
      ],
    },
    {
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
<<<<<<< HEAD
      description:
        'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',      price: '$899',
=======
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      price: '$899',
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      period: '/month',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      category: 'Space Tech',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      features: [
        'Real-time Tracking',
        'Collision Prediction',
        'Satellite Safety',
        'Space Traffic Management',
      ],
    },
<<<<<<< HEAD
=======
=======
      features: ['Real-time TrackingCollision PredictionSatellite SafetySpace Traffic Management']
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  const categories = [
    {
      name: 'AI Services',
      count: '150+',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Quantum Tech',
      count: '75+',
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Emerging Tech',
      count: '100+',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'IT Solutions',
      count: '200+',
      icon: Cloud,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background Effects */}
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>

      <div className='max-w-7xl mx-auto relative z-10'>        {/* Section Header */}
=======
<<<<<<< HEAD
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
=======
      features: ['Real-time TrackingCollision PredictionSatellite SafetySpace Traffic Management']
    }
  ];

  const categories = [
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
    { name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Section Header */}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center mb-16'
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mb-16'
=======
          className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              2026 Revolutionary Services
            </span>
          </h2>
<<<<<<< HEAD
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum, and
            emerging technology services designed to transform your business          </p>
=======
<<<<<<< HEAD
          <p className='text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed'>
            Experience the future with our cutting-edge AI, quantum, and
            emerging technology services designed to transform your business
=======
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'        >
=======
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
<<<<<<< HEAD
              className='group text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='group text-center'
=======
              className="group text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}
              >
                <category.icon className='w-8 h-8 text-white' />
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <h3 className='text-lg font-bold text-white mb-2'>
                {category.name}
              </h3>
              <p className='text-2xl font-bold text-cyan-400'>
                {category.count}
<<<<<<< HEAD
              </p>            </motion.div>
=======
              </p>
=======
              className="group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ))}
        </motion.div>

        {/* Featured Services Grid */}
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>          {featuredServices.map((service, index) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {featuredServices.map((service, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
<<<<<<< HEAD
              className='group relative'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='group relative'
=======
              className="group relative"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className='relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300'>
                {/* Service Header */}
                <div className='flex items-center space-x-3 mb-4'>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <service.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className='text-lg font-bold text-white'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm'>{service.category}</p>                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>                  {service.description}
                </p>

                {/* Features */}
=======
<<<<<<< HEAD
                    <h3 className='text-lg font-bold text-white'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm'>{service.category}</p>
=======
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.category}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.category}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                </div>

                {/* Description */}
<<<<<<< HEAD
<<<<<<< HEAD
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
=======
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {service.description}
                </p>

                {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='mb-4'>
                  <ul className='space-y-1'>
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-center text-gray-400 text-xs'
                      >
<<<<<<< HEAD
                        <Star className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0' />                        {feature}
=======
                        <Star className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0' />
=======
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-xs">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-xs">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {feature}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
<<<<<<< HEAD
                <div className='flex items-center justify-between'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex items-center justify-between'>
=======
                <div className="flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div>
                    <span className='text-2xl font-bold text-cyan-400'>
                      {service.price}
                    </span>
                    <span className='text-gray-400 text-sm'>
                      {service.period}
                    </span>
                  </div>
                  <Link
                    href={`/${service.id}`}
                    className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200'
                  >
<<<<<<< HEAD
                    Learn More <ArrowRight className='w-4 h-4 ml-1' />                  </Link>
=======
<<<<<<< HEAD
                    Learn More <ArrowRight className='w-4 h-4 ml-1' />
=======
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm">{service.period}</span>
                  </div>
                  <Link 
                    href={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className='text-center'
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center'
=======
          className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          <div className='bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our revolutionary
              services to achieve unprecedented growth and innovation.
            </p>
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>              <motion.div
=======
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
=======
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
<<<<<<< HEAD
                  href='/services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200'
                >
                  <Rocket className='w-5 h-5 mr-2' />                  View All Services
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  href='/services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200'
                >
                  <Rocket className='w-5 h-5 mr-2' />
=======
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Rocket className="w-5 h-5 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Rocket className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  View All Services
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link
<<<<<<< HEAD
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200'
                >
                  <Shield className='w-5 h-5 mr-2' />                  Get Started
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200'
                >
                  <Shield className='w-5 h-5 mr-2' />
=======
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover: bg-cyan-500/10 transition-all duration-200"
                >
                  <Shield className="w-5 h-5 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover: bg-cyan-500/10 transition-all duration-200"
                >
                  <Shield className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Get Started
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  );
};

export default Enhanced2026ServicesShowcase;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default Enhanced2026ServicesShowcase;
=======
  )
};

export default Enhanced2026ServicesShowcase;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default Enhanced2026ServicesShowcase;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
