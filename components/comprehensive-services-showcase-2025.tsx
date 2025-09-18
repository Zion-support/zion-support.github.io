<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
} from 'lucide-react';

// Import service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode;
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service,
    category: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />
  })),
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service,
    category: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />
  })),
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />
  })),
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />
  }))
];

const categories = [

  useEffect(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedPriceRange) {
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;
        }
      });
    }

    // Sort services
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

    switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={{
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-cyan-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Price and Sort Controls */}
            <div className="flex flex-wrap items-center space-x-4">
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
                    {range.label}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-900 text-white">
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
                  </span>
                </div>

                {/* Service Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {service.tagline}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
                className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-white font-medium">{service.customers.toLocaleString()}</span>
                        <span className="text-gray-500">customers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-white font-medium">{service.growthRate}</span>
                        <span className="text-gray-500">growth</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{service.marketSize}</span>
                        <span className="text-gray-500">market</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {new Date(service.launchDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
                setSelectedCategory('All Services');
                setSelectedPriceRange('all');
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
