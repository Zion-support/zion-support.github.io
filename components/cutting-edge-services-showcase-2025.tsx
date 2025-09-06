import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Brain,
  Atom,
  Shield,
  Rocket,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Code,
  Palette,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  Phone,
  Mail,
<<<<<<< HEAD
  MapPin,;} from 'lucide-react';
=======
  MapPin,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;
  Search, Filter, Grid, List, ExternalLink, Phone, Mail, MapPin
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Zap, Star } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Zap, Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  website: 'https://ziontechgroup.com',
};

const heroStats = [
  {
    label: 'Cutting-Edge Services',
    value: '25+',
    icon: <Star className='w-5 h-5' />,
  },
  {
    label: 'Innovation Areas',
    value: '8+',
    icon: <Brain className='w-5 h-5' />,
  },
  {
    label: 'Market Coverage',
    value: '$500B+',
    icon: <TrendingUp className='w-5 h-5' />,
  },
  {
    label: 'Success Rate',
    value: '99.9%',
    icon: <Award className='w-5 h-5' />,
<<<<<<< HEAD
  },];
=======
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
  { label: 'Cutting-Edge Services', value: '25+', icon: <Star className="w-5 h-5" /> },
  { label: 'Innovation Areas', value: '8+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Market Coverage', value: '$500B+', icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const serviceCategories = [
  {
    title: 'AI & Consciousness',
<<<<<<< HEAD
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence',    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
=======
<<<<<<< HEAD
<<<<<<< HEAD
    description:
      'Revolutionary AI platforms with consciousness and emotional intelligence',
=======
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    count: cuttingEdgeAIServices2025.length,
  },
  {
    title: 'Quantum & Emerging Tech',
    description:
<<<<<<< HEAD
      'Breakthrough quantum computing and space technology solutions',    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    count: cuttingEdgeQuantumServices2025.length,
  },  {
=======
      'Breakthrough quantum computing and space technology solutions',
=======
    count: cuttingEdgeAIServices2025.length
  };
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    count: cuttingEdgeAIServices2025.length
  };
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
<<<<<<< HEAD
<<<<<<< HEAD
    count: cuttingEdgeQuantumServices2025.length,
  },
=======
    count: cuttingEdgeQuantumServices2025.length
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    count: cuttingEdgeQuantumServices2025.length
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
<<<<<<< HEAD
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {
=======
<<<<<<< HEAD
<<<<<<< HEAD
    count: cuttingEdgeEnterpriseITServices2025.length,
  },
=======
    count: cuttingEdgeEnterpriseITServices2025.length
  };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    count: cuttingEdgeEnterpriseITServices2025.length
  };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
<<<<<<< HEAD
    count: cuttingEdgeMicroSaasServices2025.length,
  },];
=======
<<<<<<< HEAD
<<<<<<< HEAD
    count: cuttingEdgeMicroSaasServices2025.length,
  },
=======
    count: cuttingEdgeMicroSaasServices2025.length
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    count: cuttingEdgeMicroSaasServices2025.length
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function CuttingEdgeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025,
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    return matchesSearch && matchesCategory;  });
=======
    return matchesSearch && matchesCategory;
=======
    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    ...cuttingEdgeMicroSaasServices2025
  ];

  const filteredServices = allServices.filter(service => {
=======
    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    ...cuttingEdgeMicroSaasServices2025
  ];

  const filteredServices = allServices.filter(service => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });
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
    },  };
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        duration: 0.5
      }
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <>
      <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <title>
          Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future
          Technology Solutions
        </title>
        <meta
          name='description'
          content='Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.'
        />
        <meta
          name='keywords'
          content='cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
<<<<<<< HEAD
        <link rel='icon' href='/favicon.ico' />      </Head>

      <Layout>
        {/* Hero Section */}
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'                initial={{ opacity: 0, scale: 0.9 }}
=======
        <link rel='icon' href='/favicon.ico' />
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title>
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      <Layout>
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
=======
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center'
            >
              <motion.h1
                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'
=======
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, scale: 0.9 }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cutting-Edge Services
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Showcase 2025
                </span>
              </motion.h1>

              <motion.p
<<<<<<< HEAD
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
=======
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Showcase 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Showcase 2025
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Discover revolutionary technology solutions that are reshaping
                industries and defining the future. From AI consciousness to
                space mining, experience the cutting edge of innovation.
              </motion.p>

              {/* Hero Stats */}
              <motion.div
<<<<<<< HEAD
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}
=======
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'
=======
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, y: 20 }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div key={index} className='text-center'>
                    <div className='flex justify-center mb-2'>
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>
                        {stat.icon}
                      </div>
                    </div>
                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                      {stat.value}
                    </div>
<<<<<<< HEAD
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>
=======
                    <div className='text-sm text-white/70'>{stat.label}</div>
=======
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ))}
              </motion.div>

              {/* CTA Buttons */}
<<<<<<< HEAD
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center'
=======
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                initial={{ opacity: 0, y: 20 }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
<<<<<<< HEAD
                  href='#services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  href='#services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
=======
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  Explore Services
                  <ArrowRight className='ml-2 w-5 h-5' />
                </a>
                <a
<<<<<<< HEAD
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'                >
=======
<<<<<<< HEAD
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'
=======
                  href="#services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
<<<<<<< HEAD
        <section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              className='flex flex-col lg:flex-row gap-6 items-center justify-between'              initial={{ opacity: 0, y: 20 }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              className='flex flex-col lg:flex-row gap-6 items-center justify-between'
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              initial={{ opacity: 0, y: 20 }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Search */}
<<<<<<< HEAD
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />
=======
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />
              </div>

              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>                <button
=======
<<<<<<< HEAD
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'
=======
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                />
              </div>

              {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex flex-wrap gap-2'>
=======
              <div className="flex flex-wrap gap-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex flex-wrap gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  All ({allServices.length})
                </button>
<<<<<<< HEAD
                {serviceCategories.map(category => (                  <button
=======
<<<<<<< HEAD
<<<<<<< HEAD
                {serviceCategories.map(category => (
=======
                {serviceCategories.map((category) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                {serviceCategories.map((category) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    key={category.title}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.title
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {category.title} ({category.count})
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
<<<<<<< HEAD
              <div className='flex items-center gap-2'>                <button
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center gap-2'>
=======
              <div className="flex items-center gap-2">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center gap-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <button
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'
                  }`}
                >
<<<<<<< HEAD
                  <Grid className='w-5 h-5' />                </button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <Grid className='w-5 h-5' />
=======
                  <Grid className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Grid className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70'
                  }`}
                >
<<<<<<< HEAD
                  <List className='w-5 h-5' />                </button>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <List className='w-5 h-5' />
=======
                  <List className="w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <List className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <section
          id='services'
          className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
<<<<<<< HEAD
=======
=======
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
<<<<<<< HEAD
              }            >
=======
              }
=======
        <section id="services" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <div
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
<<<<<<< HEAD
=======
=======
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          {service.name}
                        </h3>
                        <p className='text-white/70 text-sm leading-relaxed'>
                          {service.description}
                        </p>
                      </div>
<<<<<<< HEAD
                      <div className='ml-4'>
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>
                          <Star className='w-6 h-6 text-cyan-400' />                        </div>
=======
<<<<<<< HEAD
                      <div className='ml-4'>
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>
                          <Star className='w-6 h-6 text-cyan-400' />
=======
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <div className="ml-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                          <Star className="w-6 h-6 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </div>
                    </div>

                    {/* Tags */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
<<<<<<< HEAD
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >
=======
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'
=======
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Market Info */}
<<<<<<< HEAD
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>
                      <span>Market: {service.marketSize}</span>
                      <span className='text-cyan-400'>{service.category}</span>                    </div>
                  </div>

                  {/* Service Details */}
                  <div
                    className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}
                  >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>
                      <span>Market: {service.marketSize}</span>
                      <span className='text-cyan-400'>{service.category}</span>
=======
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-cyan-400">{service.category}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-cyan-400">{service.category}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
                  </div>

                  {/* Service Details */}
<<<<<<< HEAD
<<<<<<< HEAD
                  <div
                    className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}
                  >
=======
                  <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {/* Features */}
                    <div className='mb-6'>
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>
                        Key Features
                      </h4>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <ul className='space-y-2'>
                        {service.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className='flex items-start text-sm text-white/80'
                            >
                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0' />
                              <span>{feature}</span>
                            </li>
<<<<<<< HEAD
                          ))}                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className='mb-6'>
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>
=======
                          ))}
=======
                  <div className={`px-6 pb-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </ul>
                    </div>

                    {/* Pricing */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='mb-6'>
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>
=======
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        Starting From
                      </h4>
                      <div className='text-2xl font-bold text-white'>
                        ${service.pricing.starter.price}
<<<<<<< HEAD
                        <span className='text-sm font-normal text-white/60'>
                          /{service.pricing.starter.period}
                        </span>                      </div>
                    </div>

                    {/* CTA */}
                    <div className='flex items-center justify-between'>
=======
<<<<<<< HEAD
                        <span className='text-sm font-normal text-white/60'>
                          /{service.pricing.starter.period}
                        </span>
=======
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From
                      </h4>
                      <div className="text-2xl font-bold text-white">
                        ${service.pricing.starter.price}
                        <span className="text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <span className="text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>

                    {/* CTA */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='flex items-center justify-between'>
=======
                    <div className="flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <a
                        href={service.website}
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium'
                      >
                        Learn More
                        <ExternalLink className='ml-1 w-4 h-4' />
                      </a>
                      <a
                        href='/contact'
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
                      >
                        Get Started
<<<<<<< HEAD
                        <ArrowRight className='ml-2 w-4 h-4' />                      </a>
=======
<<<<<<< HEAD
                        <ArrowRight className='ml-2 w-4 h-4' />
=======
                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
<<<<<<< HEAD
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion.div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
=======
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
                className='text-center py-20'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='text-center py-20'
=======
                className="text-center py-20"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-white/70 mb-6'>
                  Try adjusting your search terms or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
<<<<<<< HEAD
                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                >
=======
<<<<<<< HEAD
                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'
=======
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
=======
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-white/80 mb-8 leading-relaxed'>
                Our cutting-edge services are designed to give you a competitive
                advantage in the rapidly evolving technology landscape. Let's
                discuss how we can help you achieve your goals.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                >
                  Start Your Journey
                  <ArrowRight className='ml-2 w-5 h-5' />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'
                >
<<<<<<< HEAD
                  <Phone className='mr-2 w-5 h-5' />                  Call Now
=======
<<<<<<< HEAD
                  <Phone className='mr-2 w-5 h-5' />
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. 
                Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Phone className="mr-2 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Call Now
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </a>
              </div>

              {/* Contact Info */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>
                    <Phone className='w-6 h-6 text-cyan-400' />
<<<<<<< HEAD
=======
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                  <div className='text-white font-semibold'>Phone</div>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>
                    <Mail className='w-6 h-6 text-cyan-400' />
                  </div>
                  <div className='text-white font-semibold'>Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className='flex flex-col items-center'>
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>
                    <MapPin className='w-6 h-6 text-cyan-400' />
                  </div>
<<<<<<< HEAD
                  <div className='text-white font-semibold'>Address</div>
                  <div className='text-white/70 text-sm'>
                    {contactInfo.address}
                  </div>                </div>
=======
<<<<<<< HEAD
=======
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{contactInfo.address}</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm">{contactInfo.address}</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const containerVariants = {
  hidden: {
  opacity: 0 
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 

};
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
};
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 

<<<<<<< HEAD
};
=======

};
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
