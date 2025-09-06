import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Brain,
  Database,
  Cloud,
  Lock,
  Rocket,
  Users,
  DollarSign,
  Target,
  Award,
  Phone,;
<<<<<<< HEAD
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
=======
} from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services',
      icon: Brain,
      services: advancedAIAutomation2025,
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Cutting-edge AI solutions that transform business operations',
    },
=======
      description: 'Cutting-edge AI solutions that transform business operations'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Cutting-edge AI solutions that transform business operations'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      title: 'Cybersecurity & Security',
      icon: Shield,
      services: advancedCybersecurity2025,
      gradient: 'from-red-600 via-orange-600 to-yellow-600',
<<<<<<< HEAD
      description: 'Advanced security solutions for the digital age',
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Advanced security solutions for the digital age',
    },
=======
      description: 'Advanced security solutions for the digital age'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Advanced security solutions for the digital age'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'Blockchain & Web3',
      icon: Globe,
      services: blockchainWeb32025,
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
<<<<<<< HEAD
      description: 'Next-generation blockchain and decentralized solutions',
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Next-generation blockchain and decentralized solutions',
    },
=======
      description: 'Next-generation blockchain and decentralized solutions'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Next-generation blockchain and decentralized solutions'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'IoT & Edge Computing',
      icon: Cloud,
      services: iotEdgeComputing2025,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
<<<<<<< HEAD
      description: 'Smart connected solutions for the Internet of Things',
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Smart connected solutions for the Internet of Things',
    },
=======
      description: 'Smart connected solutions for the Internet of Things'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Smart connected solutions for the Internet of Things'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'Healthcare & Biotechnology',
      icon: Target,
      services: healthcareBiotech2025,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
<<<<<<< HEAD
      description: 'Innovative healthcare and biotech solutions',
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Innovative healthcare and biotech solutions',
    },
=======
      description: 'Innovative healthcare and biotech solutions'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Innovative healthcare and biotech solutions'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'Fintech & Financial',
      icon: DollarSign,
      services: fintechFinancial2025,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
<<<<<<< HEAD
      description: 'Revolutionary financial technology solutions',
    },    {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Revolutionary financial technology solutions',
    },
=======
      description: 'Revolutionary financial technology solutions'
    };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Revolutionary financial technology solutions'
    };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      title: 'Education & E-Learning',
      icon: Award,
      services: educationElearning2025,
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
<<<<<<< HEAD
      description: 'Advanced learning and educational technology',
    },  ];
=======
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Advanced learning and educational technology',
    },
=======
      description: 'Advanced learning and educational technology'
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      description: 'Advanced learning and educational technology'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.1,
      },
    },  };
=======
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.5,
      },
    },
=======
<<<<<<< HEAD
<<<<<<< HEAD
        duration: 0.5,
      },
    },
=======
        duration: 0.5
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

<<<<<<< HEAD
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}
=======
<<<<<<< HEAD
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {/* Header */}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Revolutionary 2025 Services
          </h2>
<<<<<<< HEAD
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
            your business and drive success in the digital age.          </p>
=======
<<<<<<< HEAD
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
            your business and drive success in the digital age.
=======
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
<<<<<<< HEAD
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'        >
=======
<<<<<<< HEAD
<<<<<<< HEAD
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'
=======
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
<<<<<<< HEAD
              className='relative'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='relative'
=======
              className="relative"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              {/* Category Header */}
              <div className='flex items-center mb-8'>
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}
                >
                  <category.icon className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-3xl font-bold text-white mb-2'>
                    {category.title}
                  </h3>
<<<<<<< HEAD
                  <p className='text-gray-400 text-lg'>                    {category.description}
=======
<<<<<<< HEAD
                  <p className='text-gray-400 text-lg'>
=======
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <p className="text-gray-400 text-lg">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {category.description}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </p>
                </div>
              </div>

              {/* Services Grid */}
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
=======
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {category.services.map((service, serviceIndex) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
<<<<<<< HEAD
                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'
=======
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
<<<<<<< HEAD
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}
=======
<<<<<<< HEAD
                      <p className='text-gray-400 text-sm leading-relaxed'>
=======
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <p className="text-gray-400 text-sm leading-relaxed">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {service.description}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </p>
                    </div>

                    {/* Features */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>
                        Key Features:
                      </h5>
                      <ul className='space-y-1'>
                        {service.features
                          ?.slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className='flex items-center text-xs text-gray-400'
                            >
                              <CheckCircle className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />
                              {feature}
                            </li>
                          ))}
                        {service.features && service.features.length > 3 && (
<<<<<<< HEAD
                          <li className='text-xs text-gray-500 italic'>                            +{service.features.length - 3} more features
=======
                          <li className='text-xs text-gray-500 italic'>
=======
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            +{service.features.length - 3} more features
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Pricing */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm text-gray-400'>
                          Starting from:
                        </span>
                        <span className='text-lg font-bold text-green-400'>
                          {service.price}
                          {service.period}
                        </span>
                      </div>
<<<<<<< HEAD
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service.marketPosition}
=======
                      <div className='text-xs text-gray-500 mt-1'>
=======
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        Market position: {service.marketPosition}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    </div>

                    {/* ROI */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>
                        ROI & Benefits:
                      </h5>
                      <div className='text-xs text-gray-400'>
                        <div className='flex items-center mb-1'>
                          <TrendingUp className='w-3 h-3 text-blue-400 mr-2 flex-shrink-0' />
                          {service.roi}
                        </div>
<<<<<<< HEAD
                        <div className='text-xs text-gray-500'>                          Setup time: {service.setupTime}
=======
                        <div className='text-xs text-gray-500'>
=======
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          Setup time: {service.setupTime}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </div>
                      </div>
                    </div>

                    {/* Use Cases */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>
                        Perfect for:
                      </h5>
                      <div className='flex flex-wrap gap-1'>
                        {service.useCases
                          ?.slice(0, 3)
                          .map((useCase, useCaseIndex) => (
                            <span
                              key={useCaseIndex}
                              className='px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full'
                            >
                              {useCase}
                            </span>
<<<<<<< HEAD
                          ))}                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className='mt-6'>
=======
                          ))}
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full"
                          >
                            {useCase}
                          </span>
                        ))}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>

                    {/* CTA Button */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='mt-6'>
=======
                    <div className="mt-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <a
                        href={service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'
                      >
                        Learn More
<<<<<<< HEAD
                        <ArrowRight className='w-4 h-4 ml-2' />                      </a>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  </motion.div>
=======
<<<<<<< HEAD
                        <ArrowRight className='w-4 h-4 ml-2' />
=======
                    <div className="mt-6">
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </a>
                    </div>

                    {/* Hover Effect Overlay */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
=======
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
<<<<<<< HEAD
          className='text-center mt-20'
=======
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mt-20'
=======
          className="text-center mt-20"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        >
          <div className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of businesses already leveraging our cutting-edge
              solutions to drive innovation, efficiency, and growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://ziontechgroup.com/contact'
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'
              >
                Get Started Today
                <Rocket className='w-5 h-5 ml-2' />
              </a>
              <a
                href='tel:+13024640950'
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600'
              >
                Call +1 302 464 0950
<<<<<<< HEAD
                <Phone className='w-5 h-5 ml-2' />              </a>
=======
<<<<<<< HEAD
                <Phone className='w-5 h-5 ml-2' />
=======
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Call +1 302 464 0950
                <Phone className="w-5 h-5 ml-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <Phone className="w-5 h-5 ml-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            </div>
          </div>
        </motion.div>
      </div>
    </section>
<<<<<<< HEAD
  );
};

export default ComprehensiveServicesShowcase2025;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default ComprehensiveServicesShowcase2025;
=======
  )
};

export default ComprehensiveServicesShowcase2025;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default ComprehensiveServicesShowcase2025;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
