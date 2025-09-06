<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import { motion } from 'framer-motion';
import {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  CheckCircle
  ArrowRight
  Star
  TrendingUp
  Zap
  Shield
  Globe
  Brain
  Database
  Cloud
  Lock
  Rocket
  Users
  DollarSign
  Target
  Award
  Phone;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';

=======
  Award,;
  Phone,;
} from 'lucide-react';import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
import { motion  } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Zap, Shield, Globe, Brain, Database, Cloud, Lock, Rocket, Users, DollarSign, Target, Award, Phone  } from 'lucide-react';
import { advancedAIAutomation2025  } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025  } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025  } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025  } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025  } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025  } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
const ComprehensiveServicesShowcase2025 = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { advancedAIAutomation2025 } from '../../data/advanced-ai-automation-2025';
import { advancedCybersecurity2025 } from '../../data/advanced-cybersecurity-2025';
import { blockchainWeb32025 } from '../../data/blockchain-web3-2025';
import { iotEdgeComputing2025 } from '../../data/iot-edge-computing-2025';
import { healthcareBiotech2025 } from '../../data/healthcare-biotech-2025';
import { fintechFinancial2025 } from '../../data/fintech-financial-2025';
import { educationElearning2025 } from '../../data/education-elearning-2025';
<<<<<<< HEAD
const ComprehensiveServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI & Automation Services'
      icon: Brain
      services: advancedAIAutomation2025
      gradient: 'from-purple-600 via-pink-600 to-blue-600'
      description:
        'Cutting-edge AI solutions that transform business operations'
    },      description: 'Cutting-edge AI solutions that transform business operations'
    }
    {
      title: 'Cybersecurity & Security'
      icon: Shield
      services: advancedCybersecurity2025
      gradient: 'from-red-600 via-orange-600 to-yellow-600'
      description: 'Advanced security solutions for the digital age'
    },    {      description: 'Advanced security solutions for the digital age'
    }
    {
      title: 'Blockchain & Web3'
      icon: Globe
      services: blockchainWeb32025
      gradient: 'from-green-600 via-teal-600 to-cyan-600'
      description: 'Next-generation blockchain and decentralized solutions'
    },    {      description: 'Next-generation blockchain and decentralized solutions'
    }
    {
      title: 'IoT & Edge Computing'
      icon: Cloud
      services: iotEdgeComputing2025
      gradient: 'from-blue-600 via-indigo-600 to-purple-600'
      description: 'Smart connected solutions for the Internet of Things'
    },    {      description: 'Smart connected solutions for the Internet of Things'
    }
    {
      title: 'Healthcare & Biotechnology'
      icon: Target
      services: healthcareBiotech2025
      gradient: 'from-pink-600 via-rose-600 to-red-600'
      description: 'Innovative healthcare and biotech solutions'
    },    {      description: 'Innovative healthcare and biotech solutions'
    }
    {
      title: 'Fintech & Financial'
      icon: DollarSign
      services: fintechFinancial2025
      gradient: 'from-emerald-600 via-green-600 to-teal-600'
      description: 'Revolutionary financial technology solutions'
    },    {      description: 'Revolutionary financial technology solutions'
    }
    {
      title: 'Education & E-Learning'
      icon: Award
      services: educationElearning2025
      gradient: 'from-amber-600 via-yellow-600 to-orange-600'
      description: 'Advanced learning and educational technology'
    },  ];      description: 'Advanced learning and educational technology'
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
=======
      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },

<<<<<<< HEAD
<<<<<<< HEAD


  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      }
    }
  }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    {
      title: 'Cybersecurity & Security',
      icon: Shield,
      services: advancedCybersecurity2025,
      gradient: 'from-red-600 via-orange-600 to-yellow-600',
description: 'Advanced security solutions for the digital age',
    },
    {
      title: 'Blockchain & Web3',
      icon: Globe,
      services: blockchainWeb32025,
      gradient: 'from-green-600 via-teal-600 to-cyan-600',
description: 'Next-generation blockchain and decentralized solutions',
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cloud,
      services: iotEdgeComputing2025,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
description: 'Smart connected solutions for the Internet of Things',
    },
    {
      title: 'Healthcare & Biotechnology',
      icon: Target,
      services: healthcareBiotech2025,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
description: 'Innovative healthcare and biotech solutions',
    },
    {
      title: 'Fintech & Financial',
      icon: DollarSign,
      services: fintechFinancial2025,
      gradient: 'from-emerald-600 via-green-600 to-teal-600',
description: 'Revolutionary financial technology solutions',
    },
    {
      title: 'Education & E-Learning',
      icon: Award,
      services: educationElearning2025,
      gradient: 'from-amber-600 via-yellow-600 to-orange-600',
description: 'Advanced learning and educational technology',
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
staggerChildren: 0.1,
      },
    },
  };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
<<<<<<< HEAD

  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
duration: 0.5,
      },
    },
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}
<<<<<<< HEAD
        {/* Header */}

<<<<<<< HEAD
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">;
      {/* Animated Background Elements */}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
        <div className='absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Header */}
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>        {/* Header */}

        {/* Header */}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
          className='text-center mb-16'

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        >
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>
            Revolutionary 2025 Services
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover our comprehensive suite of cutting-edge micro SAAS
            services, IT solutions, and AI innovations designed to transform
<<<<<<< HEAD
            your business and drive success in the digital age.          </p>        >
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Revolutionary 2025 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.
=======
            your business and drive success in the digital age.
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </p>
        </motion.div>
<<<<<<< HEAD

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'        >          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className='relative'
            >
              {/* Category Header */}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'>;
          <h2 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6'>;
            Revolutionary 2025 Services;
          </h2>;
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>;
            Discover our comprehensive suite of cutting-edge micro SAAS;
            services, IT solutions, and AI innovations designed to transform;
            your business and drive success in the digital age.          </p>        >;
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">;
            Revolutionary 2025 Services;
          </h2>;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI innovations designed to transform your business and drive success in the digital age.;
          </p>;
        </motion && motion.div>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* Service Categories */}
        <motion&& motion.div
          variants={containerVariants}
initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='space-y-16'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
className='relative'
origin/cursor/automate-test-improve-and-merge-code-2533
            >
              {/* Category Header */}
                    {category.title}
<<<<<<< HEAD
<<<<<<< HEAD
                  </h3>;
<<<<<<< HEAD
                  <p className="text - gray-400 text-lg">;
=======
                  <p className="text - gray - 400 text - lg">;
=======
                  </h3>
                  <p className='text-gray-400 text-lg'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  </h3>
                  <p className='text-gray-400 text-lg'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                    {category.description}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

                  </p>
                </div>
              </div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  <p className='text-gray-400 text-lg'>                    {category.description}

                    {category.description}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">;
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category && category.gradient} mr-4`}>;
                  <category && category.icon className="w-8 h-8 text-white" />;
                </div>;
                <div>;
                  <h3 className="text-3xl font-bold text-white mb-2">;
                    {category && category.title}
                  </h3>;
                  <p className="text-gray-400 text-lg">;
                    {category && category.description}
                  </p>;
                </div>;
              </div>;

              {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                {category.services.map((service, serviceIndex) => (

<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </p>;
                </div>;
              </div>;
              {/* Services Grid */}
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>                {category.services.map ((service, service_index) => (              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-6">;
                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: service_index * 0.1 }}
                    className='group relative bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 30 backdrop - blur - xl rounded - 2xl p - 6 border border - slate - 700 / 50 hover:border - purple - 500 / 50 transition - all duration - 300 hover:transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                  >;
                    {/* Service Header */}
                    <div className='mb - 4'>;
                      <h4 className='text - xl font - semibold text - white mb - 2 group - hover:text - purple - 300 transition - colors'>;
                        {service.name}
                      </h4>;
                      <p className='text - gray - 400 text - sm leading - relaxed'>                        {service.description}                  >;
                    {/* Service Header */}
                    <div className="mb-4">;
                      <h4 className="text - xl font - semibold text - white mb - 2 group - hover:text - purple-300 transition-colors">;
                        {service.name}
                      </h4>;
                      <p className="text - gray - 400 text-sm leading-relaxed">;
                        {service.description}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
className='group relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:shadow-xl hover:shadow-cyan-500/30'
origin/cursor/automate-test-improve-and-merge-code-2533
                  >
                    {/* Service Header */}
                    <div className='mb-4'>
                      <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                        {service.name}
                      </h4>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      <p className='text-gray-400 text-sm leading-relaxed'>
origin/cursor/automate-test-improve-and-merge-code-2533
                        {service.description}

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                      </p>
                    </div>
                    {/* Features */}


                      </p>
                    </div>

=======
                      </p>
                    </div>
                    <div className="mb-4">;
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">;
                        {service && service.name}
                      </h4>;
                      <p className="text-gray-400 text-sm leading-relaxed">;
                        {service && service.description}
                      </p>;
                    </div>;

                    {/* Features */}

                      <p className='text-gray-400 text-sm leading-relaxed'>                        {service.description}

                        {service.description}

                      </p>
                    </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features?.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />

                            {feature}
                          </li>;
                        ))}

                        {service.features && service.features.length > 3 && (
                          <li className="text-xs text-gray-500 italic">
<<<<<<< HEAD
<<<<<<< HEAD

                    {/* Pricing */}
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
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service.marketPosition}                    <div className="mb-4">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                          <li className='text-xs text-gray-500 italic'>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                            +{service.features.length - 3} more features
                          </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        )}
                      </ul>
                    </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    {/* Pricing */}
<<<<<<< HEAD
<<<<<<< HEAD

                    <div className="mb-4">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                        )}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting from:</span>
                        <span className="text-lg font-bold text-green-400">
                          {service.price}{service.period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>
                      <div className="text-xs text-gray-400">
                        <div className="flex items-center mb-1">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {service.roi}
                        </div>
                        <div className="text-xs text-gray-500">
                    {/* Pricing */}
                    <div className='mb-4'>;
                      <div className='flex items-center justify-between'>;
                        <span className='text-sm text-gray-400'>;
                          Starting from:;
                        </span>;
                        <span className='text-lg font-bold text-green-400'>;
                          {service && service.price}
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='text-xs text-gray-500 mt-1'>                        Market position: {service && service.marketPosition}                    <div className="mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm text-gray-400">Starting from:</span>;
                        <span className="text-lg font-bold text-green-400">;
                          {service && service.price}{service && service.period}
                        </span>;
                      </div>;
                      <div className="text-xs text-gray-500 mt-1">;
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb-4'>;
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>;
                        ROI & Benefits:;
                      </h5>;
                      <div className='text-xs text-gray-400'>;
                        <div className='flex items-center mb-1'>;
                          <TrendingUp className='w-3 h-3 text-blue-400 mr-2 flex-shrink-0' />;
                          {service && service.roi}
                        </div>;
                        <div className='text-xs text-gray-500'>                          Setup time: {service && service.setupTime}                    <div className="mb-4">;
                      <h5 className="text-sm font-medium text-purple-300 mb-2">ROI & Benefits:</h5>;
                      <div className="text-xs text-gray-400">;
                        <div className="flex items-center mb-1">;
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />;
                          {service && service.roi}
                        </div>;
                        <div className="text-xs text-gray-500">;
                        </div>;
                      </div>;
                    </div>;
                    {/* CTA Button */}
                    <div className='mt-6'>                    <div className="mb-4">;
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>;
                      <div className="flex flex-wrap gap-1">;
                        {service && service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (;
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-purple-300 mb-2">Perfect for:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full">;
                            {useCase}
                          </span>;
                        ))}
<<<<<<< HEAD
<<<<<<< HEAD

                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                      <div className='text-xs text-gray-500 mt-1'>
                        Market position: {service.marketPosition}
                      </div>
                    </div>
                    {/* ROI */}
<div className='mb-4'>
                      <h5 className='text-sm font-medium text-purple-300 mb-2'>
                        ROI & Benefits:
                      </h5>
                      <div className='text-xs text-gray-400'>
                        <div className='flex items-center mb-1'>
                          <TrendingUp className='w-3 h-3 text-blue-400 mr-2 flex-shrink-0' />
                          {service.roi}
                        </div>
                        <div className='text-xs text-gray-500'>
                          Setup time: {service.setupTime}
                        </div>
                      </div>
                    </div>
                    {/* Use Cases */}
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
                          ))}
                      </div>
                    </div>
                    {/* CTA Button */}
<div className='mt-6'>
                      <a
                        href={service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'
                      >
                        Learn More
                        <ArrowRight className='w-4 h-4 ml-2' />
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                      </a>
                    </div>
                        href={service && service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                        Learn More;
                        <ArrowRight className='w-4 h-4 ml-2' />                      </a>;
                    </div>;
                    {/* Hover Effect Overlay */}
<<<<<<< HEAD

=======
<div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </motion.div>

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                        href={service && service.link}
                        className='inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                        Learn More;
                        <ArrowRight className='w-4 h-4 ml-2' />                      </a>;
                    </div>;

                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  </motion && motion.div>                      <a
                        href={service && service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30">;
                        Learn More;
                        <ArrowRight className="w-4 h-4 ml-2" />;
                      </a>;
                    </div>;

                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;
                  </motion && motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                ))}
              </div>;
            </motion && motion.div>;
          ))}
<<<<<<< HEAD
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-center mt-20'
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Call to Action */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          transition={{ duration: 0.8, delay: 0.5 }}
className='text-center mt-20'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          transition={{ duration: 0.8, delay: 0.5 }}
className='text-center mt-20'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
                href='https://ziontechgroup && ziontechgroup.com/contact'
                className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                Get Started Today;
                <Rocket className='w-5 h-5 ml-2' />;
              </a>;
              <a
                href='tel:+13024640950'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600'
              >
                Call +1 302 464 0950
                <Phone className='w-5 h-5 ml-2' />              </a>        >

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <a

              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600"
              >
                Call +1 302 464 0950
                <Phone className="w-5 h-5 ml-2" />

<<<<<<< HEAD
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

export default ComprehensiveServicesShowcase2025;  )
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default ComprehensiveServicesShowcase2025;
                      </p>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        Key Features:;
                      </h5>;
                      <ul className='space - y-1'>;
                        {service.features;
                          ?.slice (0, 3);
                          .map ((feature, feature_index) => (
                            <li;
                              key={feature_index}
                              className='flex items - center text - xs text - gray - 400';
                            >;
                              <CheckCircle className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0' />;
                              {feature}
                            </li>))}
                        {service.features && service.features.length > 3 && (
                          <li className='text - xs text - gray - 500 italic'>                            +{service.features.length - 3} more features                    <div className="mb-4">;
                      <h5 className="text - sm font - medium text - purple-300 mb-2">Key Features:</h5>;
                      <ul className="space-y-1">;
                        {service.features?.slice (0, 3).map ((feature, feature_index) => (
                          <li key={feature_index} className="flex items - center text - xs text-gray-400">;
                            <CheckCircle className="w - 3 h - 3 text - green - 400 mr - 2 flex-shrink-0" />;
                            {feature}
                          </li>))}
                        {service.features && service.features.length > 3 && (
                          <li className="text - xs text-gray-500 italic">;
                          </li>)}
                      </ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb - 4'>;
                      <div className='flex items - center justify - between'>;
                        <span className='text - sm text - gray - 400'>;
                          Starting from:;
                        </span>;
                        <span className='text - lg font - bold text - green - 400'>;
                          {service.price}
                          {service.period}
                        </span>;
                      </div>;
                      <div className='text - xs text - gray - 500 mt - 1'>                        Market position: {service.market_position}                    <div className="mb-4">;
                      <div className="flex items-center justify-between">;
                        <span className="text - sm text-gray-400">Starting from:</span>;
                        <span className="text - lg font - bold text-green-400">;
                          {service.price}{service.period}
                        </span>;
                      </div>;
                      <div className="text - xs text - gray-500 mt-1">;
                      </div>;
                    </div>;
                    {/* ROI */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        ROI & Benefits:;
                      </h5>;
                      <div className='text - xs text - gray - 400'>;
                        <div className='flex items - center mb - 1'>;
                          <TrendingUp className='w - 3 h - 3 text - blue - 400 mr - 2 flex - shrink - 0' />;
                          {service.roi}
                        </div>;
                        <div className='text - xs text - gray - 500'>                          Setup time: {service.setup_time}                    <div className="mb-4">;
                      <h5 className="text - sm font - medium text - purple-300 mb-2">ROI & Benefits:</h5>;
                      <div className="text - xs text-gray-400">;
                        <div className="flex items-center mb-1">;
                          <TrendingUp className="w - 3 h - 3 text - blue - 400 mr - 2 flex-shrink-0" />;
                          {service.roi}
                        </div>;
                        <div className="text - xs text-gray-500">;
                        </div>;
                      </div>;
                    </div>;
                    {/* Use Cases */}
                    <div className='mb - 4'>;
                      <h5 className='text - sm font - medium text - purple - 300 mb - 2'>;
                        Perfect for:;
                      </h5>;
                      <div className='flex flex - wrap gap - 1'>;
                        {service.use_cases;
                          ?.slice (0, 3);
                          .map ((use_case, useCaseIndex) => (
                            <span;
                              key={useCaseIndex}
                              className='px - 2 py - 1 bg - slate - 700 / 50 text - xs text - gray - 300 rounded - full';
                            >;
                              {use_case}
                            </span>))}                      </div>;
                    </div>;
                    {/* CTA Button */}
                    <div className='mt - 6'>                    <div className="mb-4">;
                      <h5 className="text - sm font - medium text - purple-300 mb-2">Perfect for:</h5>;
                      <div className="flex flex-wrap gap-1">;
                        {service.use_cases?.slice (0, 3).map ((use_case, useCaseIndex) => (
                          <span;
                            key={useCaseIndex}
                            className="px - 2 py - 1 bg - slate - 700 / 50 text - xs text - gray-300 rounded-full";
                          >;
                            {use_case}
                          </span>))}
                    </div>;
                    {/* CTA Button */}
                    <div className='mt - 6'>;
                      <a;
                        href={service.link}
                        className='inline - flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - sm font - medium rounded - lg hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
                      >;
                        Learn More;
                        <ArrowRight className='w - 4 h - 4 ml - 2' />                      </a>;
                    </div>;
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                  </motion.div>                      <a;
                        href={service.link}
                        className="inline - flex items - center justify - center w - full px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white text - sm font - medium rounded - lg hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow-cyan-500 / 30";
                      >;
                        Learn More;
                        <ArrowRight className="w - 4 h-4 ml-2" />;
                      </a>;
                    </div>;
                    {/* Hover Effect Overlay */}
                    <div className='absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                    <div className="absolute inset - 0 bg - gradient - to - r from - purple - 600 / 10 to - pink - 600 / 10 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer-events-none" />;
                  </motion.div>))}
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text - center mt - 20';
        >;
          <div className='bg - gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - xl rounded - 3xl p - 8 border border - purple - 500 / 30'>;
            <h3 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Join thousands of businesses already leveraging our cutting - edge;
              solutions to drive innovation, efficiency, and growth.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='https://ziontechgroup.com / contact';
                className='inline - flex items - center justify - center px - 8 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white font - semibold rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;
                Get Started Today;
                <Rocket className='w - 5 h - 5 ml - 2' />;
              </a>;
              <a;
                href='tel:+13024640950';
                className='inline - flex items - center justify - center px - 8 py - 3 bg - slate - 700 / 50 text - white font - semibold rounded - xl hover:bg - slate - 600 / 50 transition - all duration - 200 border border - slate - 600';
              >;
                Call +1 302 464 0950;
                <Phone className='w - 5 h - 5 ml - 2' />              </a>        >;
          <div className="bg - gradient - to - r from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - xl rounded - 3xl p - 8 border border-purple-500 / 30">;
            <h3 className="text - 3xl font - bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - xl text - gray - 300 mb - 8 max-w-2xl mx-auto">;
              Join thousands of businesses already leveraging our cutting - edge solutions to drive innovation, efficiency, and growth.;
            </p>;
            <div className="flex flex - col sm: flex - row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com / contact";
                className="inline - flex items - center justify - center px - 8 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 text - white font - semibold rounded - xl hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 200 transform hover:shadow - xl hover:shadow-cyan-500 / 30";
              >;
                Get Started Today;
                <Rocket className="w - 5 h-5 ml-2" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="inline - flex items - center justify - center px - 8 py - 3 bg - slate - 700 / 50 text - white font - semibold rounded - xl hover:bg - slate - 600 / 50 transition - all duration - 200 border border-slate-600";
              >;
                Call +1 302 464 0950;
                <Phone className="w - 5 h-5 ml-2" />;
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
export default ComprehensiveServicesShowcase2025;
<<<<<<< HEAD
=======
=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
export default ComprehensiveServicesShowcase2025;  )
}
export default ComprehensiveServicesShowcase2025;

export default ComprehensiveServicesShowcase2025;
<<<<<<< HEAD
<<<<<<< HEAD
export default ComprehensiveServicesShowcase2025;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
                className='inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600'
              >
                Call +1 302 464 0950
                <Phone className='w-5 h-5 ml-2' />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
);
};

export default ComprehensiveServicesShowcase2025;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
