'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Brain,
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3,
  ArrowRight,
  Zap,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Brain;
  Cloud, 
  RefreshCw, 
  Wifi, 
  Shield, 
  BarChart3;
  ArrowRight;
  Zap
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
      ],
=======
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    };
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/cloud-architecture'
    };
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy'],
      color: 'from-green-500 to-emerald-500',
<<<<<<< HEAD
      href: '/services/digital-transformation',
    },
=======
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    };
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/cloud-architecture'
    };
    {
      icon: RefreshCw,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/digital-transformation'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      href: '/services/digital-transformation'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
<<<<<<< HEAD
<<<<<<< HEAD
      features: [
        'Sensor Networks',
        'Real-time Monitoring',
        'Data Analytics',
        'Edge Computing',
      ],
=======
      features: ['Sensor NetworksReal-time MonitoringData AnalyticsEdge Computing'],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      color: 'from-orange-500 to-red-500',
      href: '/services/iot-platforms'
    };
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Decentralized technology platforms and smart contract development.',
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],
      color: 'from-indigo-500 to-purple-500',
<<<<<<< HEAD
      href: '/services/blockchain-solutions',
    },
=======
      features: ['Sensor NetworksReal-time MonitoringData AnalyticsEdge Computing'],
      color: 'from-orange-500 to-red-500',
      href: '/services/iot-platforms'
    };
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Decentralized technology platforms and smart contract development.',
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/blockchain-solutions'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      href: '/services/blockchain-solutions'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
<<<<<<< HEAD
<<<<<<< HEAD
      features: [
        'Big Data Processing',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
      ],
      color: 'from-teal-500 to-blue-500',
      href: '/services/data-analytics',
    },
=======
      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization'],
      color: 'from-teal-500 to-blue-500',
      href: '/services/data-analytics'
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization'],
      color: 'from-teal-500 to-blue-500',
      href: '/services/data-analytics'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },
=======
        staggerChildren: 0.1
      }
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        staggerChildren: 0.1
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
<<<<<<< HEAD
<<<<<<< HEAD
    visible: { opacity: 1, y: 0 },
=======
    visible: { opacity: 1, y: 0 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

<<<<<<< HEAD
      <div className='relative container mx-auto px-4'>
=======
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="relative container mx-auto px-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mb-16'
=======
          className="text-center mb-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="text-center mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6'
=======
            className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
<<<<<<< HEAD

          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            We deliver cutting-edge technology solutions that drive innovation,
            efficiency, and growth for businesses across all industries.
=======
            className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth 
            for businesses across all industries.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
<<<<<<< HEAD
<<<<<<< HEAD
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'
=======
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='group relative'
=======
              className="group relative"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
<<<<<<< HEAD

                <p className='text-gray-300 mb-6 leading-relaxed'>
=======
              className="group relative"
            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                
                <p className="text-gray-300 mb-6 leading-relaxed">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {service.description}
                </p>

                {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className='space-y-2 mb-8'>
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center space-x-3 text-gray-400'
                    >
                      <div className='w-2 h-2 bg-blue-400 rounded-full' />
                      <span className='text-sm'>{feature}</span>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-sm">{feature}</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1'
=======
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover Effect */}
<<<<<<< HEAD
                <div className='absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300' />
=======
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center'
=======
          className="text-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
<<<<<<< HEAD
              <ArrowRight className='w-5 h-5' />
=======
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ServicesSection;
=======
  )
};

export default ServicesSection;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ServicesSection;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
