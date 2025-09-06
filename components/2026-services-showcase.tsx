<<<<<<< HEAD


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
import React, { useState, useMemo } from 'react';
import Head from 'next/head';

import { motion } from 'framer-motion';
<<<<<<< HEAD
import {
  Search
  Filter
  Star
  TrendingUp
  Zap
  Brain
  Cpu
  Shield
  Rocket
  Globe
  Database
  Lock
  Cloud
  Atom
  Sparkles
  Target;
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
  Sparkles,;
  Target,;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import { motion } from 'framer-motion';
import {;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  Zap,;
  Brain,;
  Cpu,;
  Shield,;
  Rocket,;
  Globe,;
  Database,;
  Lock,;
  Cloud,;
  Atom,;
  Sparkles,;
  Target,;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
} from 'lucide-react';import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary2026Services } from '../data/revolutionary-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services } from '../data/comprehensive-it-2026-services';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

    ...emergingTech2026Services;
    ...comprehensiveIT2026Services;
  ];

  // Combine all 2026 services;
  const allServices = [;
    ...revolutionary2026Services,;
    ...emergingTech2026Services,;
    ...comprehensiveIT2026Services,    ...revolutionary2026Services;
    ...emergingTech2026Services;
    ...comprehensiveIT2026Services;
  ];
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));        case 'rating':;
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;
          return (
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
          );          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'customers':;
          return b && b.customers - a && a.customers;
        default:;
          return a && a.name.localeCompare(b && b.name);        default: return a && a.name.localeCompare(b && b.name);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
        default:;
          return a.name.locale_compare (b.name);      }      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.category.toLowerCase ().includes (search_term.toLowerCase ());
      const matches_category = selected_category === 'all' || service.category.includes (selected_category);
      return matches_search && matches_category;
    .sort ((a, b) => {
      switch (sort_by) {
        case 'price':;
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));          return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''));
        case 'rating':;
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;
      }
    });
<<<<<<< HEAD
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, count: all_services.length },
    {
      id: 'AI',
      name: 'AI & Machine Learning',
      icon: Brain,
      count: all_services.filter (string => s.category.includes ('AI')).length,
    },
    {
      id: 'Quantum',
      name: 'Quantum Computing',
      icon: Atom,
      count: all_services.filter (string => s.category.includes ('Quantum')).length,
    },
    {
      id: 'Emerging',
      name: 'Emerging Technology',
      icon: Sparkles,
      count: all_services.filter (string => s.category.includes ('Emerging')).length,
    },
    {
      id: 'IT',
      name: 'IT & Infrastructure',
      icon: Shield,
      count: all_services.filter (
        string => s.category.includes ('IT') || s.category.includes ('Infrastructure')).length,
    },
    {
      id: 'Autonomous',
      name: 'Autonomous Systems',
      icon: Target,
      count: all_services.filter (string => s.category.includes ('Autonomous')).length,
    },
    {
      id: 'Cloud'
      name: 'Cloud & DevOps'
      icon: Cloud
      count: allServices.filter(
        s => s.category.includes('Cloud') |s.category.includes('DevOps')
      ).length
    },  ];    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length }
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length }
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') |s.category.includes('Infrastructure')).length }
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length }
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') |s.category.includes('DevOps')).length }
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
    >
      <div className='min-h-screen'>
        <Head>
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
          />        </Head>          <title>Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+ Solutions</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - 2026 Revolutionary Services Showcase" />
          <meta property="og:description" content="1500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase" />
        {/* Navigation */}
        <UltraAdvancedNavigation />

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <Head>;
          <title>;
            Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+;
            Solutions;
          </title>;
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950" />;
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks" />;
          <meta name="author" content="Zion Tech Group" />;
          <meta name="robots" content="index, follow" />;
          <meta property="og:title" content="Zion Tech Group - 2026 Revolutionary Services Showcase" />;

        {/* Navigation */}
        <UltraAdvancedNavigation />;

        {/* Hero Section */}
        <section className='relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto text-center'>            <motion && motion.div        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <motion&& motion.div
          <meta property="og:description" content="1500+ cutting - edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />;
          <meta property="og:url" content="https://ziontechgroup.com / 2026 - services - showcase" />;
          <meta property="og:type" content="website" />;
          <link rel="canonical" href="https://ziontechgroup.com / 2026 - services - showcase" />;
        {/* Navigation */}
<<<<<<< HEAD
        <UltraAdvancedNavigation />

=======
        <UltraAdvancedNavigation />;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Hero Section */}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              {/* Service Statistics */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                    {allServices && allServices.length}
                  </div>;
                  <div className='text-gray-400 text-sm'>Total Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-purple-400 mb-2'>;
                    {allServices && allServices.filter(s => s && s.category.includes('AI')).length}
                  </div>;
                  <div className='text-gray-400 text-sm'>AI Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-pink-400 mb-2'>;
                    {;
                      allServices && allServices.filter(s => s && s.category.includes('Quantum'));
                        .length;
                    }
                  </div>;
                  <div className='text-gray-400 text-sm'>Quantum Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-green-400 mb-2'>;
                    {;
                      allServices && allServices.filter(s => s && s.category.includes('Emerging'));
                        .length;
                    }
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
                </div>
              </div>
            </motion.div>
          </div>
        </section>
                  <div className='text-gray-400 text-sm'>Emerging Tech</div>                </div>                  2026 Revolutionary Services;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">;
                Discover the future of technology with our revolutionary AI, quantum computing, emerging technologies, and comprehensive IT solutions;
              </p>;

              {/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">;
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">;
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices && allServices.length}</div>;
                  <div className="text-gray-400 text-sm">Total Services</div>;
                </div>;
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">;
                  <div className="text-3xl font-bold text-purple-400 mb-2">{allServices && allServices.filter(s => s && s.category.includes('AI')).length}</div>;
                  <div className="text-gray-400 text-sm">AI Services</div>;
                </div>;
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">;
                  <div className="text-3xl font-bold text-pink-400 mb-2">{allServices && allServices.filter(s => s && s.category.includes('Quantum')).length}</div>;
                  <div className="text-gray-400 text-sm">Quantum Services</div>;
                </div>;
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">;
                  <div className="text-3xl font-bold text-green-400 mb-2">{allServices && allServices.filter(s => s && s.category.includes('Emerging')).length}</div>;
                  <div className="text-gray-400 text-sm">Emerging Tech</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

        {/* Search and Filter Section */}
                {/* Category Filter */}                {/* Search */}
                <div className="relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                {/* Category Filter */}
                <div className='relative'>;
                  <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e && e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'                  >                <div className="relative">;
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e && e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none";
                    {categories && categories.map(category => (;
                      <option key={category && category.id} value={category && category.id}>;
                        {category && category.name} ({category && category.count});
                      </option>;
                    ))}
<<<<<<< HEAD
                  </select>
                </div>

                {/* Sort By */}
                <div className='relative'>
                  <TrendingUp className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'
                  >
                    <option value='name'>Sort by Name</option>
                    <option value='price'>Sort by Price</option>
                    <option value='rating'>Sort by Rating</option>
                    <option value='customers'>Sort by Customers</option>                  </select>                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {filteredServices.map((service, index) => (        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group'
                >
                  <div className='bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                    {/* Service Header */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      {service.popular && (
                        <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full'>                          Popular                >
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Sort By */}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    {/* Service Title */}
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>                      {service.name}
                    </h3>
                    {/* Tagline */}
                    <p className='text-gray-300 text-sm mb-4'>                      {service.tagline}
                    </p>
                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-2xl font-bold text-cyan-400'>                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
=======

=======
                {/* Sort By */}
                <div className='relative'>;
                  <TrendingUp className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
                    value={sortBy}
                </div>
              </div>
            </div>
          </div>
        </section>
                  >;
                    <option value='name'>Sort by Name</option>;
                    <option value='price'>Sort by Price</option>;
                    <option value='rating'>Sort by Rating</option>;
                    <option value='customers'>Sort by Customers</option>                  </select>                    <option value="name">Sort by Name</option>;
                    <option value="price">Sort by Price</option>;
                    <option value="rating">Sort by Rating</option>;
                    <option value="customers">Sort by Customers</option>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Services Grid */}
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {filteredServices && filteredServices.map((service, index) => (        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className='group'>;
                  <div className='bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>;
                    {/* Service Header */}
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='text-4xl'>{service && service.icon}</div>;
                      {service && service.popular && (;
                        <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full'>                          Popular                >;
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">;
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">;
                      <div className="text-4xl">{service && service.icon}</div>;
                      {service && service.popular && (;
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">;
                          Popular;
                        </span>;
                      )}
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                    {/* Service Header */}
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="text - 4xl">{service.icon}</div>;
                      {service.popular && (
                        <span className="bg - gradient - to - r from - pink - 500 to - purple - 600 text - white text - xs px - 3 py - 1 rounded - full">;
                          Popular;
                        </span>)}
                    </div>;
                    {/* Service Title */}
<<<<<<< HEAD

                    <p className="text-gray-300 text-sm mb-4">

                      {service.tagline}
                    </p>
                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='text-2xl font-bold text-cyan-400'>
                        <span className='text-gray-400 text-lg font-normal'>
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                          {service.period}
                        </span>;
                      </div>;
                      <div className='flex items - center space - x-1'>;
                        <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                        <span className='text - white text - sm'>;
                          {service.rating}
                    </div>;

                    {/* Service Title */}
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>                      {service && service.name}
                    </h3>;

                    {/* Tagline */}
                    <p className='text-gray-300 text-sm mb-4'>                      {service && service.tagline}
                    </p>;

                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>;
                      <div className='text-2xl font-bold text-cyan-400'>                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">;
                      {service && service.name}
                    </h3>;
                    {/* Tagline */}
                    <p className='text-gray-300 text-sm mb-4'>                    <p className="text-gray-300 text-sm mb-4">;
                      {service && service.tagline}
                    </p>;
                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'>;
                      <div className='text-2xl font-bold text-cyan-400'>;
                        <span className='text-gray-400 text-lg font-normal'>;
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='flex items-center space-x-1'>;
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                        <span className='text-white text-sm'>;
                          {service && service.rating}
                        </span>;
                        <span className='text-gray-400 text-sm'>;
                          ({service && service.reviews});
                        </span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items-center space-x-1">;
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                        <span className="text-white text-sm">{service && service.rating}</span>;
                        <span className="text-gray-400 text-sm">({service && service.reviews})</span>;
                    </div>;
                    {/* Description */}
                    <p className='text-gray-400 text-sm mb-4 line-clamp-3'>                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">;
                      {service && service.description}
                    </p>;
                    {/* Features */}
<<<<<<< HEAD

=======
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-center">
                            <Zap className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />


                      {service.name}
                    </h3>

                    {/* Tagline */}

                      {service.tagline}
                    </p>

                    {/* Price */}

                      {service.description}
                    </p>

                    {/* Features */}

                            {feature}

<<<<<<< HEAD
                          </li>
                        ))}
                      </ul>
                    </div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                          </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                        ))}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    {/* Category and Technology */}

                    <div className="flex items-center justify-between mb-4">

=======
                        ))}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                        {service.category}
                      </span>
                      <span className="text-xs text-gray-500">
                    {/* Category and Technology */}
                    <div className='flex items-center justify-between mb-4'>;
                      <span className='text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded'>;
                        {service && service.category}
                      </span>;
                      <span className='text-xs text-gray-500'>                        {service && service.customers}+ customers                    <div className="flex items-center justify-between mb-4">;
                      <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">;
                        {service && service.category}
                      </span>;
                      <span className="text-xs text-gray-500">;
                      </span>;
                    </div>;

                    {/* CTA Button */}
                    <a
<<<<<<< HEAD
                      href={service.link}
                      className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block'                    >                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block'                    >

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}
            </div>

<<<<<<< HEAD
=======
            </div>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
              ))}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
<<<<<<< HEAD
                className='text-center py-16'
              >
                <div className='text-6xl mb-4'>🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  No services found
                </h3>
                <p className='text-gray-400'>
                  Try adjusting your search terms or filters
                </p>              </motion.div>                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
            )}
          </div>
        </section>
                </p>              </motion.div>


<<<<<<< HEAD
            )}
          </div>
        </section>

=======
=======
            )}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        {/* Contact Section */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion && motion.div        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        {/* Contact Section */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                        </span>;
                        <span className='text - gray - 400 text - sm'>;
                          ({service.reviews});
                        </span>                      </div>;
                    </div>;
                    {/* Description */}
                    <p className='text - gray - 400 text - sm mb - 4 line - clamp - 3'>                      {service.description}
                    </p>;
                    {/* Features */}                      <div className="flex items - center space - x-1">;
                        <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;
                        <span className="text - white text - sm">{service.rating}</span>;
                        <span className="text - gray - 400 text - sm">({service.reviews})</span>;
                    </div>;
                    {/* Description */}
                    <p className='text - gray - 400 text - sm mb - 4 line - clamp - 3'>                    <p className="text - gray - 400 text - sm mb - 4 line - clamp - 3">;
                      {service.description}
                    </p>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <h4 className='text - white font - semibold mb - 2 text - sm'>;
                        Key Features:;
                      </h4>;
                      <ul className='space - y-1'>;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <li;
                            key={idx}
                            className='text - gray - 400 text - xs flex items - center';
                          >;
                            <Zap className='w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0' />                            {feature}                    <div className="mb - 4">;
                      <h4 className="text - white font - semibold mb - 2 text - sm">Key Features:</h4>;
                      <ul className="space - y-1">;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <li key={idx} className="text - gray - 400 text - xs flex items - center">;
                            <Zap className="w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0" />;
                          </li>))}
                      </ul>;
                    </div>;
                    {/* Category and Technology */}
                    <div className='flex items - center justify - between mb - 4'>;
                      <span className='text - xs text - gray - 500 bg - gray - 700 / 50 px - 2 py - 1 rounded'>;
                        {service.category}
                      </span>;
                      <span className='text - xs text - gray - 500'>                        {service.customers}+ customers                    <div className="flex items - center justify - between mb - 4">;
                      <span className="text - xs text - gray - 500 bg - gray - 700 / 50 px - 2 py - 1 rounded">;
                        {service.category}
                      </span>;
                      <span className="text - xs text - gray - 500">;
                      </span>;
                    </div>;
                    {/* CTA Button */}
                    <a;
                      href={service.link}
                      className='w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold py - 3 px - 4 rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 text - center block'                    >                      className="w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold py - 3 px - 4 rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 text - center block";
                    >;
                      Learn More;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
            {/* No Results */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text - center py - 16';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400'>;
                  Try adjusting your search terms or filters;
                </p>              </motion.div>                className="text - center py - 16";
              >;
                <div className="text - 6xl mb - 4">🔍</div>;
                <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
                <p className="text - gray - 400">Try adjusting your search terms or filters</p>)}
          </div>;
        </section>;
        {/* Contact Section */}
        <section className='relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div        <section className="relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              viewport={{ once: true }}
                <a
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>;
                  Contact Us Now;
                </a>;
                <a
                  href='/pricing'
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
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>            >;
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join thousands of companies already leveraging our revolutionary 2026 AI, quantum, and IT solutions;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="flex items-center justify-center space-x-3 text-cyan-300">;
                  <span className="text-2xl">📱</span>;
                  <span className="font-semibold">{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3 text-purple-300">;
                  <span className="text-2xl">✉️</span>;
                  <span className="font-semibold">{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3 text-pink-300">;
                  <span className="text-2xl">📍</span>;
                  <span className="font-semibold text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;
                <a
                  href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Now
                </a>
=======
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                  Contact Us Now;
                </a>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                <a
                  href='/pricing'
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
);
  );
<<<<<<< HEAD
}
=======


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
                  View Pricing;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  );
}
              className='bg - gradient - to - r from - gray - 800 / 50 to - gray - 900 / 50 rounded - 2xl p - 8 border border - gray - 700 / 50 backdrop - blur - sm';
            >;
              <h2 className='text - 3xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join thousands of companies already leveraging our revolutionary;
                2026 AI, quantum, and IT solutions;
              </p>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='flex items - center justify - center space - x-3 text - cyan - 300'>;
                  <span className='text - 2xl'>📱</span>;
                  <span className='font - semibold'>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-3 text - purple - 300'>;
                  <span className='text - 2xl'>✉️</span>;
                  <span className='font - semibold'>{contact_info.email}</span>;
                </div>;
                <div className='flex items - center justify - center space - x-3 text - pink - 300'>;
                  <span className='text - 2xl'>📍</span>;
                  <span className='font - semibold text - sm'>;
                    {contact_info.address}
                  </span>;
                </div>;
              </div>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <a;
                  href='/contact';
                  className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105'                >;
                  Contact Us Now;
                </a>;
                <a;
                  href='/pricing';
                  className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'                >            >;
              <h2 className="text - 3xl font - bold text - white mb - 6">Ready to Transform Your Business?</h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join thousands of companies already leveraging our revolutionary 2026 AI, quantum, and IT solutions;
              </p>;
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8">;
                <div className="flex items - center justify - center space - x-3 text - cyan - 300">;
                  <span className="text - 2xl">📱</span>;
                  <span className="font - semibold">{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center justify - center space - x-3 text - purple - 300">;
                  <span className="text - 2xl">✉️</span>;
                  <span className="font - semibold">{contact_info.email}</span>;
                </div>;
                <div className="flex items - center justify - center space - x-3 text - pink - 300">;
                  <span className="text - 2xl">📍</span>;
                  <span className="font - semibold text - sm">{contact_info.address}</span>;
                </div>;
              </div>;
              <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Contact Us Now;
                </a>;
                <a;
                  href='/pricing';
                  className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'                  href="/pricing";
                  className="px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
                >;
                  View Pricing;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
<<<<<<< HEAD
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
<<<<<<< HEAD
}
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
