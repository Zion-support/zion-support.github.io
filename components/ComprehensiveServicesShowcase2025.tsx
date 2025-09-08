'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Star, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Rocket, 
  Brain, 
  Globe, 
  Zap, 
  Sparkles, 
  Shield, 
  Target, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Eye, 
  Heart, 
  Share2, 
  Download, 
  Phone, 
  Mail, 
  MapPin,
  Filter,
  SortAsc,
  ExternalLink
} from 'lucide-react';
import { comprehensiveServices2025, serviceCategories, contactInfo, Service } from '../data/comprehensive-services-2025';

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  // Filter services
  const filteredServices = comprehensiveServices2025.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const basicPrice = service.pricing?.basic || 0;
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'low' && basicPrice < 1000) ||
      (selectedPriceRange === 'medium' && basicPrice >= 1000 && basicPrice < 10000) ||
      (selectedPriceRange === 'high' && basicPrice >= 10000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return (a.pricing?.basic || 0) - (b.pricing?.basic || 0);
      case 'roi':
        return (b.pricing?.enterprise || 0) - (a.pricing?.enterprise || 0);
      default:
        return 0;
    }
  });

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: comprehensiveServices2025.length },
    { id: 'low', name: 'Under $1K/month', count: comprehensiveServices2025.filter(s => (s.pricing?.basic || 0) < 1000).length },
    { id: 'medium', name: '$1K - $10K/month', count: comprehensiveServices2025.filter(s => (s.pricing?.basic || 0) >= 1000 && (s.pricing?.basic || 0) < 10000).length },
    { id: 'high', name: '$10K+/month', count: comprehensiveServices2025.filter(s => (s.pricing?.basic || 0) >= 10000).length }
  ];

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <motion.div
      key={service.id}
<<<<<<< HEAD
      initial={ opacity: 0, y: 30, scale: 0.9 }
      animate={ opacity: 1, y: 0, scale: 1 }
      exit={ opacity: 0, y: -30, scale: 0.9 }
      transition={ duration: 0.5, delay: index * 0.1 }
=======
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
>>>>>>> origin/resolved-merge-conflicts
      className="group"
    >
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 h-full hover:border-blue-300 transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/20 shadow-lg">
        {/* Service Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {service.category}
            </span>
          </div>
        </div>

        {/* Service Info */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              ${service.pricing?.basic || 0}/month
            </div>
            <div className="text-sm text-gray-500">
              Starting from ${service.pricing?.basic || 0}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-blue-600 font-semibold mb-3 text-sm">
            Key Features:
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  {feature}
                </span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-blue-500 text-sm font-medium">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* ROI */}
        <div className="mb-6 text-center">
          <div className="text-green-600 font-semibold text-lg">
            ROI: Up to {Math.round((service.pricing?.enterprise || 0) * 0.3)}%
          </div>
          <div className="text-gray-500 text-xs">
            Return on Investment
          </div>
        </div>

        {/* Implementation Info */}
        <div className="mb-6 grid grid-cols-2 gap-4 text-xs text-gray-600">
          <div>
            <div className="font-medium text-gray-900">Implementation</div>
            <div>2-4 weeks</div>
          </div>
          <div>
            <div className="font-medium text-gray-900">Support</div>
            <div>24/7 Available</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            href={`/services/${service.id}`}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center text-sm flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 border border-blue-300 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm flex items-center justify-center"
          >
            Contact
          </Link>
        </div>

        {/* Target Audience */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500">
            <span className="font-medium">Target:</span> {service.category} businesses
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial={ opacity: 0, y: 30 }
            animate={ opacity: 1, y: 0 }
            transition={ duration: 0.8 }
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> origin/resolved-merge-conflicts
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Comprehensive Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Discover our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {comprehensiveServices2025.length}+
                </div>
                <div className="text-gray-600">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {serviceCategories.length - 1}
                </div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  4.9★
                </div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-blue-500/30 shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-blue-300 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Price Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name} ({range.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="roi">ROI</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
<<<<<<< HEAD
                  }
=======
                  }}
>>>>>>> origin/resolved-merge-conflicts
                  className="w-full px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
<<<<<<< HEAD
              initial={ opacity: 0 }
              animate={ opacity: 1 }
=======
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
>>>>>>> origin/resolved-merge-conflicts
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No services found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all services.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
<<<<<<< HEAD
                }
=======
                }}
>>>>>>> origin/resolved-merge-conflicts
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Contact our team to discuss how our comprehensive services can revolutionize your operations and drive unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200" />
                <span className="text-white font-medium">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-purple-200" />
                <span className="text-white font-medium">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-200" />
                <span className="text-white font-medium">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:shadow-xl hover:shadow-white/30 shadow-lg shadow-white/25 flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Get Started Today</span>
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-5 h-5" />
                <span>View Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-2xl shadow-blue-500/50">
              Z
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Zion Tech Group
            </h3>
            <p className="text-gray-600">2025 Innovation Hub</p>
          </div>
          <div className="text-gray-600 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
              {' • '}
              <Link href="/terms" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
              {' • '}
              <Link href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact Us</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}