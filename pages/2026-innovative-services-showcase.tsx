<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Zap, Brain, Globe, Shield, Phone, Mail } from 'lucide-react',
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4',
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4',
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4',
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026',
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026',
export default function Innovative2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),

  const allServices = [
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4
  ],

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length,
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length,
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length,
  const microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length,
  const emergingTechCount = allServices.filter(service => service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic')).length,

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '🔬', count: emergingTechCount }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500', range: 'Under $500' },
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' },
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'popularity', name: 'Popularity' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices,
=======
import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';

export default function Innovative2026ServicesShowcase() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');

  const _allServices = [
    ...innovative2026MicroSaasServicesV4, _...emergingTech2026ServicesV4, _...enterpriseIT2026ServicesV4
  ];

  // Dynamic category counts
  const _aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const _quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const _enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length;
  const _microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length;
  const _emergingTechCount = allServices.filter(service => service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic')).length;

  const _categories = [
    { id: 'all', _name: 'All Services', _icon: '🚀', _count: allServices.length},
    {_id: 'ai', _name: 'AI Services', _icon: '🧠', _count: aiCount},
    {_id: 'quantum', _name: 'Quantum Tech', _icon: '⚛️', _count: quantumCount},
    {_id: 'enterprise', _name: 'Enterprise IT', _icon: '🏢', _count: enterpriseCount},
    {_id: 'micro-saas', _name: 'Micro SaaS', _icon: '💻', _count: microSaasCount},
    {_id: 'emerging', _name: 'Emerging Tech', _icon: '🔬', _count: emergingTechCount}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $500', _range: 'Under $500'},
    {_id: 'medium', _name: '$500 - $1, _000', _range: '$500 - $1, _000'},
    {_id: 'high', _name: 'Over $1, _000', _range: 'Over $1, _000'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name'},
    {_id: 'price', _name: 'Price'},
    {_id: 'rating', _name: 'Rating'},
    {_id: 'popularity', _name: 'Popularity'}
  ];

  // Filter and sort services
  const _filteredServices = useMemo__(() => {_let _filtered = allServices;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedCategory) {
          case 'ai':
            return service.category?.includes('AI'),
          case 'quantum':
            return service.category?.includes('Quantum'),
          case 'enterprise':
            return service.category?.includes('Enterprise'),
          case 'micro-saas':
            return service.category?.includes('Micro SaaS'),
          case 'emerging':
<<<<<<< HEAD
            return service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic'),
          default: return true
        }
      })
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
=======
            return service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic');
          default:
            return true;}
      });
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        switch (selectedPriceRange) {
          case 'low':
            return price < 500,
          case 'medium':
            return price >= 500 && price <= 1000,
          case 'high':
<<<<<<< HEAD
            return price > 1000,
          default: return true
        }
      })
=======
            return price > 1000;
          default:
            return true;}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Search filter
    if (searchTerm) {_filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
<<<<<<< HEAD
      )
    }
=======
      );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Sort
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price':
<<<<<<< HEAD
          const priceA = parseInt(a.price.replace(/[^0-9]/g, '')),
          const priceB = parseInt(b.price.replace(/[^0-9]/g, '')),
          return priceA - priceB,
=======
          const _priceA = parseInt(a.price.replace(/[^0-9]/g, _''));
          const _priceB = parseInt(b.price.replace(/[^0-9]/g, _''));
          return priceA - priceB;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'rating':
          return b.rating - a.rating,
        case 'popularity':
<<<<<<< HEAD
          return b.customers - a.customers,
        default: return a.name.localeCompare(b.name)
      }
    }),
=======
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return filtered
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]),

  const _containerVariants = {_hidden: { opacity: 0},
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { y: 20, _opacity: 0},
    visible: {_y: 0, _opacity: 1, _transition: {
        duration: 0.5}
    }
  },

  return (_<>
      <Head>
        <title>2026 Innovative Services Showcase - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions. Transform your business with next-generation technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2026 services, innovative technology, AI services, quantum computing, emerging tech, enterprise IT, micro SaaS, Zion Tech Group&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2026 Innovative Services Showcase - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2026-innovative-services-showcase&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2026-innovative-services-showcase&quot; />
      </Head>

      <UltraAdvancedFuturisticBackground2026 
        intensity=&quot;extreme&quot; 
        colorScheme=&quot;neural-network&quot;
        particleCount={800}
        animationSpeed={3.0}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetworks={true}
        enableMultidimensional={true}
=======
        <meta name="description" content="Discover cutting-edge 2026 innovative services including AI, _Quantum Computing, _Emerging Technologies, _and Enterprise IT solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2026 services, _innovative technology, _AI services, _quantum computing, _emerging tech, _enterprise IT, _micro SaaS, _Zion Tech Group" />
        <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover cutting-edge 2026 innovative services including AI, _Quantum Computing, _Emerging Technologies, _and Enterprise IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
      </Head>

      <UltraAdvancedFuturisticBackground2026 
        intensity="extreme" 
        colorScheme="neural-network"
        particleCount={_800}
        animationSpeed={_3.0}
        enableHolographic={_true}
        enableQuantumEffects={_true}
        enableNeuralNetworks={_true}
        enableMultidimensional={_true}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />

      <UltraAdvancedNavigation2026 />

<<<<<<< HEAD
      <div className=&quot;min-h-screen relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;mb-8&quot;
=======
      <div className="min-h-screen relative z-10">
        {_/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;>
                2026 Innovative Services
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
                Discover the future of technology with our cutting-edge 2026 services. 
                From AI-powered solutions to quantum computing and emerging technologies, _transform your business with next-generation innovation.
              </p>
            </motion.div>

            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;
            >
              <div className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3&quot;>
                <span className=&quot;text-blue-400 font-semibold&quot;>{allServices.length}+ Services</span>
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
                <span className="text-blue-400 font-semibold">{_allServices.length}+ Services</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3&quot;>
                <span className=&quot;text-purple-400 font-semibold&quot;>AI-Powered</span>
              </div>
              <div className=&quot;bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3&quot;>
                <span className=&quot;text-green-400 font-semibold&quot;>Quantum Ready</span>
              </div>
              <div className=&quot;bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3&quot;>
                <span className=&quot;text-orange-400 font-semibold&quot;>Future-Proof</span>
              </div>
            </motion.div>

            {_/* Search and Filters */}
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=&quot;max-w-4xl mx-auto&quot;
=======
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
              className="max-w-4xl mx-auto"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;relative mb-8&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  placeholder=&quot;Search innovative services...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent&quot;
                />
              </div>

              <div className=&quot;flex flex-wrap gap-4 justify-center mb-8&quot;>
                {categories.map((category) => (
                  <button
=======
                  type="text"
                  placeholder="Search innovative services..."
                  value={_searchTerm}
                  onChange={_(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    key={category.id}
                    onClick={_() => setSelectedCategory(category.id)}
                    className={_`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'}`}
                  >
<<<<<<< HEAD
                    <span className=&quot;mr-2&quot;>{category.icon}</span>
                    {category.name} ({category.count})
=======
                    <span className="mr-2">{_category.icon}</span>
                    {_category.name} ({_category.count})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>
                ))}
              </div>

<<<<<<< HEAD
              <div className=&quot;flex flex-wrap gap-4 justify-center&quot;>
                {priceRanges.map((range) => (
                  <button
=======
              <div className="flex flex-wrap gap-4 justify-center">
                {_priceRanges.map(_(range) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    key={range.id}
                    onClick={_() => setSelectedPriceRange(range.id)}
                    className={_`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                      selectedPriceRange === range.id
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'}`}
                  >
                    {_range.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div
              variants={containerVariants}
              initial=&quot;hidden&quot;
              animate=&quot;visible&quot;
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
=======
        {_/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={_containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_filteredServices.map(_(service) => (
                <motion.div
                  key={service.id}
<<<<<<< HEAD
                  variants={itemVariants}
                  className=&quot;group relative&quot;
                >
                  <div className=&quot;relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105&quot;>
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <span className=&quot;text-4xl&quot;>{service.icon}</span>
                        {service.popular && (
                          <span className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full&quot;>
=======
                  variants={_itemVariants}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105">
                    {_/* Service Header */}
                    <div className={_`p-6 bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{_service.icon}</span>
                        {_service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            POPULAR
                          </span>
                        )}
                      </div>
<<<<<<< HEAD
                      <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                      <p className=&quot;text-gray-300 text-sm&quot;>{service.tagline}</p>
                    </div>

                    {/* Service Content */}
                    <div className=&quot;p-6&quot;>
                      <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{service.description}</p>
                      
                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;flex items-center space-x-2&quot;>
                          <Star className=&quot;w-4 h-4 text-yellow-500 fill-current&quot; />
                          <span className=&quot;text-white text-sm&quot;>{service.rating}</span>
                          <span className=&quot;text-gray-400 text-sm&quot;>({service.reviews})</span>
                        </div>
                        <div className=&quot;flex items-center space-x-2&quot;>
                          <Users className=&quot;w-4 h-4 text-blue-400&quot; />
                          <span className=&quot;text-gray-300 text-sm&quot;>{service.customers}+</span>
                        </div>
                      </div>

                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;text-2xl font-bold text-white&quot;>{service.price}</div>
                        <div className=&quot;text-gray-400 text-sm&quot;>{service.period}</div>
                      </div>

                      <div className=&quot;flex items-center justify-between mb-4&quot;>
                        <div className=&quot;flex items-center space-x-2&quot;>
                          <Clock className=&quot;w-4 h-4 text-green-400&quot; />
                          <span className=&quot;text-gray-300 text-sm&quot;>{service.setupTime}</span>
                        </div>
                        <div className=&quot;flex items-center space-x-2&quot;>
                          <Zap className=&quot;w-4 h-4 text-yellow-400&quot; />
                          <span className=&quot;text-gray-300 text-sm&quot;>{service.trialDays} days trial</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className=&quot;mb-4&quot;>
                        <h4 className=&quot;text-white font-semibold mb-2&quot;>Key Features:</h4>
                        <div className=&quot;space-y-1&quot;>
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className=&quot;flex items-center space-x-2&quot;>
                              <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                              <span className=&quot;text-gray-300 text-xs&quot;>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <span className=&quot;text-gray-500 text-xs&quot;>+{service.features.length - 3} more features</span>
=======
                      <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                      <p className="text-gray-300 text-sm">{_service.tagline}</p>
                    </div>

                    {_/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{_service.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-white text-sm">{_service.rating}</span>
                          <span className="text-gray-400 text-sm">({_service.reviews})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{_service.customers}+</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-white">{_service.price}</div>
                        <div className="text-gray-400 text-sm">{_service.period}</div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{_service.setupTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300 text-sm">{_service.trialDays} days trial</span>
                        </div>
                      </div>

                      {_/* Features Preview */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {_service.features.slice(0, _3).map(_(feature, _index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-gray-300 text-xs">{_feature}</span>
                            </div>
                          ))}
                          {_service.features.length > 3 && (
                            <span className="text-gray-500 text-xs">+{service.features.length - 3} more features</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          )}
                        </div>
                      </div>

<<<<<<< HEAD
                      {/* Category Badge */}
                      <div className=&quot;mb-4&quot;>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}>
                          {service.category}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <Link href={service.link}>
                        <button className=&quot;w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg&quot;>
                          <span className=&quot;flex items-center justify-center space-x-2&quot;>
=======
                      {_/* Category Badge */}
                      <div className="mb-4">
                        <span className={_`inline-block px-3 py-1 rounded-full text-xs font-medium ${service.textColor} bg-opacity-20`}>
                          {_service.category}
                        </span>
                      </div>

                      {_/* CTA Button */}
                      <Link href={_service.link}>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          <span className="flex items-center justify-center space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            <span>Learn More</span>
                            <ArrowRight className=&quot;w-4 h-4&quot; />
                          </span>
                        </button>
                      </Link>
                    </div>

<<<<<<< HEAD
                    {/* Hover Effect Overlay */}
                    <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl&quot; />
=======
                    {_/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </motion.div>
              ))}
            </motion.div>

<<<<<<< HEAD
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className=&quot;text-center py-16&quot;
=======
            {_filteredServices.length === 0 && (_<motion.div
                initial={{ opacity: 0}}
                animate={_{ opacity: 1}}
                className="text-center py-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;text-gray-400 text-xl mb-4&quot;>No services found matching your criteria</div>
                <button
<<<<<<< HEAD
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }}
                  className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300&quot;
=======
                  onClick={_() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');}}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
        {_/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
<<<<<<< HEAD
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
=======
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Contact our team to learn more about our innovative 2026 services and how they can revolutionize your operations.
              </p>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6&quot;>
                  <Phone className=&quot;w-8 h-8 text-blue-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-white font-semibold mb-2&quot;>Call Us</h3>
                  <p className=&quot;text-blue-300&quot;>+1 302 464 0950</p>
                </div>
                <div className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6&quot;>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-white font-semibold mb-2&quot;>Email Us</h3>
                  <p className=&quot;text-purple-300&quot;>kleber@ziontechgroup.com</p>
                </div>
                <div className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6&quot;>
                  <Globe className=&quot;w-8 h-8 text-green-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-white font-semibold mb-2&quot;>Visit Us</h3>
                  <p className=&quot;text-green-300&quot;>ziontechgroup.com</p>
                </div>
              </div>

              <Link href=&quot;/contact&quot;>
                <button className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg&quot;>
                  Get Started Today
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}