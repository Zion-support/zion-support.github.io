import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check, Star, Brain, Cpu, Database, Network, Shield, Zap,
  Rocket, Atom, Globe, Cloud, Lock, Eye, Target, TrendingUp,
  ChevronDown, ChevronUp, Search, Filter, Grid, List, DollarSign
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from '@/data/innovativeMicroSaasServices2027';
import { EMERGING_TECH_SERVICES_2027 } from '@/data/emergingTechServices2027';

export default function ComprehensivePricing2027() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'price' | 'aiScore' | 'rating'>('price');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices
    .filter(service =>
      (selectedCategory === 'All' || service.category === service.category) &&
      (searchQuery === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'aiScore') return b.aiScore - a.aiScore;
      return b.rating - a.rating;
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const getPriceColor = (price: number) => {
    if (price < 1000) return 'text-green-400';
    if (price < 2500) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPriceTier = (price: number) => {
    if (price < 1000) return 'Starter';
    if (price < 2500) return 'Professional';
    return 'Enterprise';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header Section */}
      <motion.section
        className="relative z-10 pt-20 pb-16 px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive Pricing 2027
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transparent pricing for our cutting-edge technology services.
            Choose the perfect solution for your business needs and budget.
          </motion.p>

          {/* Pricing Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'Total Services', value: allServices.length, icon: Rocket, color: 'from-cyan-500 to-blue-600' },
              { label: 'Starting Price', value: `$${Math.min(...allServices.map(s => s.price))}`, icon: DollarSign, color: 'from-green-500 to-emerald-600' },
              { label: 'AI Score Avg', value: `${Math.round(allServices.reduce((acc, s) => acc + s.aiScore, 0) / allServices.length)}%`, icon: Brain, color: 'from-purple-500 to-pink-600' },
              { label: 'Rating Avg', value: `${(allServices.reduce((acc, s) => acc + s.rating, 0) / allServices.length).toFixed(1)}`, icon: Star, color: 'from-yellow-500 to-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filters */}
      <motion.section
        className="relative z-10 px-6 pb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-10"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'aiScore' | 'rating')}
                  className="appearance-none bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-10"
                >
                  <option value="price">Sort by Price</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="rating">Sort by Rating</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-zion-blue-light/20 rounded-lg p-1 border border-zion-purple/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="relative z-10 px-6 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                key={viewMode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={viewMode === 'grid' ? itemVariants : {}}
                    className={viewMode === 'grid' ? '' : 'bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20'}
                  >
                    {viewMode === 'grid' ? (
                      <motion.div
                        className="bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20 h-full group cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      >
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors line-clamp-2">
                              {service.title}
                            </h3>
                            <p className="text-sm text-zion-slate-light mt-1">{service.category}</p>
                          </div>
                          <div className="text-right">
                            <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                              ${service.price}
                            </div>
                            <div className="text-xs text-zion-slate-light">per {service.pricingModel}</div>
                            <div className="text-xs text-zion-cyan font-medium mt-1">
                              {getPriceTier(service.price)}
                            </div>
                          </div>
                        </div>

                        {/* Service Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-zion-purple/20">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-zion-cyan" />
                              <span className="text-sm text-gray-300">{service.aiScore}%</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-gray-300">{service.rating}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-zion-slate-light">{service.availability}</div>
                          </div>
                        </div>

                        {/* Expand/Collapse Button */}
                        <button className="w-full mt-4 p-2 text-zion-cyan hover:text-white hover:bg-zion-cyan/10 rounded-lg transition-colors flex items-center justify-center gap-2">
                          {expandedService === service.id ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              View Details
                            </>
                          )}
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedService === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-zion-purple/20"
                            >
                              {/* Features */}
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                                <ul className="space-y-1">
                                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-300">
                                      <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Benefits */}
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                                <ul className="space-y-1">
                                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                                    <li key={benefitIndex} className="flex items-center gap-2 text-xs text-gray-300">
                                      <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA Button */}
                              <button
                                onClick={() => window.open(service.website, '_blank')}
                                className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                              >
                                Get Started
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <div className="flex gap-6">
                        {/* Service Image */}
                        <div className="relative w-48 h-32 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-zion-cyan text-black px-2 py-1 rounded-full text-xs font-semibold">
                            {service.category}
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
                                ${service.price}
                              </div>
                              <div className="text-xs text-zion-slate-light">per {service.pricingModel}</div>
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm">{service.description}</p>

                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-zion-cyan" />
                              AI Score: {service.aiScore}%
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              Rating: {service.rating}
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4 text-green-500" />
                              {getPriceTier(service.price)}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {service.tags.slice(0, 4).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <button
                              onClick={() => window.open(service.website, '_blank')}
                              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center gap-2"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 px-6 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss pricing, implementation, and how these innovative services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}