import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Search,
  Filter,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Globe,
  Database,
  Lock,
  Cloud,
  Atom,
  Sparkles,
  Target,;
<<<<<<< HEAD
} from 'lucide-react';import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
=======
} from 'lucide-react';
=======
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary2026Services } from '../data/revolutionary-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services } from '../data/comprehensive-it-2026-services';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function ServicesShowcase2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all 2026 services
  const allServices = [
<<<<<<< HEAD
<<<<<<< HEAD
    ...revolutionary2026Services,
    ...emergingTech2026Services,
    ...comprehensiveIT2026Services,
=======
    ...revolutionary2026Services;
    ...emergingTech2026Services;
    ...comprehensiveIT2026Services
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    ...revolutionary2026Services;
    ...emergingTech2026Services;
    ...comprehensiveIT2026Services
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' ||
        service.category.includes(selectedCategory);
<<<<<<< HEAD
      return matchesSearch && matchesCategory;    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (
            parseFloat(a.price.replace(/[^0-9.]/g, '')) -
            parseFloat(b.price.replace(/[^0-9.]/g, ''))
          );        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);      }
=======
      return matchesSearch && matchesCategory;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
<<<<<<< HEAD
<<<<<<< HEAD
          return (
            parseFloat(a.price.replace(/[^0-9.]/g, '')) -
            parseFloat(b.price.replace(/[^0-9.]/g, ''))
          );
=======
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
<<<<<<< HEAD
<<<<<<< HEAD
        default:
          return a.name.localeCompare(b.name);
=======
        default: return a.name.localeCompare(b.name)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        default: return a.name.localeCompare(b.name)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    {
      id: 'AI',
      name: 'AI & Machine Learning',
      icon: Brain,
      count: allServices.filter(s => s.category.includes('AI')).length,
    },
    {
      id: 'Quantum',
      name: 'Quantum Computing',
      icon: Atom,
      count: allServices.filter(s => s.category.includes('Quantum')).length,
    },
    {
      id: 'Emerging',
      name: 'Emerging Technology',
      icon: Sparkles,
      count: allServices.filter(s => s.category.includes('Emerging')).length,
    },
    {
      id: 'IT',
      name: 'IT & Infrastructure',
      icon: Shield,
      count: allServices.filter(
        s => s.category.includes('IT') || s.category.includes('Infrastructure')
      ).length,
    },
    {
      id: 'Autonomous',
      name: 'Autonomous Systems',
      icon: Target,
      count: allServices.filter(s => s.category.includes('Autonomous')).length,
    },
    {
      id: 'Cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      count: allServices.filter(
        s => s.category.includes('Cloud') || s.category.includes('DevOps')
      ).length,
<<<<<<< HEAD
    },  ];
=======
    },
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length }
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',
=======
<<<<<<< HEAD
<<<<<<< HEAD
    website: 'https://ziontechgroup.com',
=======
    website: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  
    >
      <div className='min-h-screen'>
        <Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          <title>
            Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+
            Solutions
          </title>
          <meta
            name='description'
            content="Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950"
          />
          <meta
            name='keywords'
            content='2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks'
          />
          <meta name='author' content='Zion Tech Group' />
          <meta name='robots' content='index, follow' />
          <meta
            property='og:title'
            content='Zion Tech Group - 2026 Revolutionary Services Showcase'
          />
          <meta
            property='og:description'
            content='1500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950'
          />
          <meta
            property='og:url'
            content='https://ziontechgroup.com/2026-services-showcase'
          />
          <meta property='og:type' content='website' />
          <link
            rel='canonical'
            href='https://ziontechgroup.com/2026-services-showcase'
<<<<<<< HEAD
          />        </Head>
=======
          />
=======
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={600}
      animationSpeed={2.5}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <title>Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+ Solutions</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - 2026 Revolutionary Services Showcase" />
          <meta property="og:description" content="1500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase" />
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </Head>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        {/* Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
<<<<<<< HEAD
        <section className='relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>            <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>
=======
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h1 className='text-5xl md:text-7xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className='text-5xl md:text-7xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
=======
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  2026 Revolutionary Services
                </span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
                Discover the future of technology with our revolutionary AI,
                quantum computing, emerging technologies, and comprehensive IT
                solutions
              </p>

              {/* Service Statistics */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>
                    {allServices.length}
                  </div>
                  <div className='text-gray-400 text-sm'>Total Services</div>
                </div>
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>
                  <div className='text-3xl font-bold text-purple-400 mb-2'>
                    {allServices.filter(s => s.category.includes('AI')).length}
                  </div>
                  <div className='text-gray-400 text-sm'>AI Services</div>
                </div>
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>
                  <div className='text-3xl font-bold text-pink-400 mb-2'>
                    {
                      allServices.filter(s => s.category.includes('Quantum'))
                        .length
                    }
                  </div>
                  <div className='text-gray-400 text-sm'>Quantum Services</div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>
                  <div className='text-3xl font-bold text-green-400 mb-2'>
                    {
                      allServices.filter(s => s.category.includes('Emerging'))
                        .length
                    }
                  </div>
<<<<<<< HEAD
                  <div className='text-gray-400 text-sm'>Emerging Tech</div>                </div>
=======
                  <div className='text-gray-400 text-sm'>Emerging Tech</div>
=======
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  2026 Revolutionary Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover the future of technology with our revolutionary AI, quantum computing, emerging technologies, and comprehensive IT solutions
              </p>
              
              {/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{allServices.filter(s => s.category.includes('AI')).length}</div>
                  <div className="text-gray-400 text-sm">AI Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{allServices.filter(s => s.category.includes('Quantum')).length}</div>
                  <div className="text-gray-400 text-sm">Quantum Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">{allServices.filter(s => s.category.includes('Emerging')).length}</div>
                  <div className="text-gray-400 text-sm">Emerging Tech</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">{allServices.filter(s => s.category.includes('Emerging')).length}</div>
                  <div className="text-gray-400 text-sm">Emerging Tech</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <section className='relative z-10 py-8 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
<<<<<<< HEAD
=======
=======
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                {/* Search */}
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <input
                    type='text'
                    placeholder='Search services...'
                    value={searchTerm}
<<<<<<< HEAD
                    onChange={e => setSearchTerm(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'                  />
                </div>

                {/* Category Filter */}
=======
<<<<<<< HEAD
                    onChange={e => setSearchTerm(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
=======
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  />
                </div>

                {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='relative'>
                  <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
<<<<<<< HEAD
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'                  >
=======
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'
=======
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
<<<<<<< HEAD
                <div className='relative'>
                  <TrendingUp className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='relative'>
                  <TrendingUp className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
=======
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'
                  >
<<<<<<< HEAD
                    <option value='name'>Sort by Name</option>
                    <option value='price'>Sort by Price</option>
                    <option value='rating'>Sort by Rating</option>
                    <option value='customers'>Sort by Customers</option>                  </select>
=======
<<<<<<< HEAD
                    <option value='name'>Sort by Name</option>
                    <option value='price'>Sort by Price</option>
                    <option value='rating'>Sort by Rating</option>
                    <option value='customers'>Sort by Customers</option>
=======
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </select>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {filteredServices.map((service, index) => (
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
=======
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {filteredServices.map((service, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                  className='group'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  className='group'
=======
                  className="group"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                >
                  <div className='bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                    {/* Service Header */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      {service.popular && (
<<<<<<< HEAD
                        <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full'>                          Popular
=======
<<<<<<< HEAD
                        <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full'>
=======
                  className="group"
                >
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          Popular
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </span>
                      )}
                    </div>

                    {/* Service Title */}
<<<<<<< HEAD
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>                      {service.name}
                    </h3>

                    {/* Tagline */}
                    <p className='text-gray-300 text-sm mb-4'>                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-2xl font-bold text-cyan-400'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
=======
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {service.name}
                    </h3>

                    {/* Tagline */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className='text-gray-300 text-sm mb-4'>
=======
                    <p className="text-gray-300 text-sm mb-4">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <p className="text-gray-300 text-sm mb-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {service.tagline}
                    </p>

                    {/* Price */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-2xl font-bold text-cyan-400'>
=======
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        {service.price}
                        <span className='text-gray-400 text-lg font-normal'>
                          {service.period}
                        </span>
                      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      <div className='flex items-center space-x-1'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-white text-sm'>
                          {service.rating}
                        </span>
                        <span className='text-gray-400 text-sm'>
                          ({service.reviews})
<<<<<<< HEAD
                        </span>                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-gray-400 text-sm mb-4 line-clamp-3'>                      {service.description}
                    </p>

                    {/* Features */}
=======
                        </span>
=======
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-gray-400 text-lg font-normal">{service.period}</span>
                      </div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviews})</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </div>
                    </div>

                    {/* Description */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <p className='text-gray-400 text-sm mb-4 line-clamp-3'>
=======
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {service.description}
                    </p>

                    {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='mb-4'>
                      <h4 className='text-white font-semibold mb-2 text-sm'>
                        Key Features:
                      </h4>
                      <ul className='space-y-1'>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className='text-gray-400 text-xs flex items-center'
                          >
<<<<<<< HEAD
                            <Zap className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0' />                            {feature}
=======
                            <Zap className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0' />
=======
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-center">
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-center">
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {feature}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Category and Technology */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded'>
                        {service.category}
                      </span>
<<<<<<< HEAD
                      <span className='text-xs text-gray-500'>                        {service.customers}+ customers
=======
                      <span className='text-xs text-gray-500'>
=======
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs text-gray-500">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs text-gray-500">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        {service.customers}+ customers
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </span>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
<<<<<<< HEAD
                      className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block'                    >
=======
<<<<<<< HEAD
<<<<<<< HEAD
                      className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block'
=======
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                className='text-center py-16'
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-gray-400'>
                  Try adjusting your search terms or filters
<<<<<<< HEAD
                </p>              </motion.div>
=======
                </p>
=======
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            )}
          </div>
        </section>

        {/* Contact Section */}
<<<<<<< HEAD
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
=======
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              className='bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm'
=======
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            >
              <h2 className='text-3xl font-bold text-white mb-6'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-gray-300 mb-8'>
                Join thousands of companies already leveraging our revolutionary
                2026 AI, quantum, and IT solutions
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='flex items-center justify-center space-x-3 text-cyan-300'>
                  <span className='text-2xl'>📱</span>
                  <span className='font-semibold'>{contactInfo.mobile}</span>
                </div>
                <div className='flex items-center justify-center space-x-3 text-purple-300'>
                  <span className='text-2xl'>✉️</span>
                  <span className='font-semibold'>{contactInfo.email}</span>
                </div>
                <div className='flex items-center justify-center space-x-3 text-pink-300'>
                  <span className='text-2xl'>📍</span>
                  <span className='font-semibold text-sm'>
                    {contactInfo.address}
                  </span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
<<<<<<< HEAD
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'                >
                  Contact Us Now
                </a>
                <a
                  href='/pricing'
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                >
=======
<<<<<<< HEAD
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
=======
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already leveraging our revolutionary 2026 AI, quantum, and IT solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-cyan-300">
                  <span className="text-2xl">📱</span>
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-purple-300">
                  <span className="text-2xl">✉️</span>
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-pink-300">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Contact Us Now
                </a>
                <a
<<<<<<< HEAD
<<<<<<< HEAD
                  href='/pricing'
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'
=======
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
