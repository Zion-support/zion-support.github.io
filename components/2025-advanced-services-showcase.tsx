"use client";
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Grid, List, Star, CheckCircle, ArrowRight, Check,
  Phone, Mail, MapPin, Globe, ChevronDown, ChevronUp,
  Users, Building2, Zap, Shield, Cloud, Database,
  Brain, Cpu, Network, Lock, Server, Monitor,
  Smartphone, Tablet, Laptop, Desktop, Wifi, Router
} from 'lucide-react';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    color: 'from-gray-50o0 to-slate-50o0',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    icon: <Building className="w-6 h-6"  />,
    color: 'from-blue-50o0 to-purple-50o0',
    description: 'Enterprise-grade AI and IT solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Globe className="w-6 h-6"  />,
    color: 'from-green-50o0 to-emerald-50o0',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'infrastructure',
    name: 'IT Infrastructure',
    icon: <Shield className="w-6 h-6"  />,
    color: 'from-orange-50o0 to-red-50o0',
    description: 'Cutting-edge infrastructure services'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6"  />,
    color: 'from-purple-50o0 to-pink-50o0',
    description: 'Advanced AI and ML platforms'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    color: 'from-violet-50o0 to-indigo-50o0',
    description: 'Quantum computing solutions'
  }
];

const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  return 'Other';
};

const getServicePricing = (service: any) => {
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  return 'Contact for pricing';
};

const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

export default function AdvancedServicesShowcase() {

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-80o0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-30o0 overflow-hidden border border-gray-20o0 dark:border-gray-70o0 ${
        service.popular ? 'ring-2 ring-blue-50o0' : ''
      }`}
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-blue-50o0 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4"  />
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className="text-4xl">{service.icon}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-90o0 dark:text-white mb-2">
            {service.name}
          </h3>
        </div>
        
        <p className="text-gray-60o0 dark:text-gray-30o0 mb-4 line-clamp-2">
          {service.tagline}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-90o0 dark:text-white">
            {getServicePricing(service)}
          </span>
          <span className="text-sm text-gray-50o0 dark:text-gray-40o0">
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-50o0"  />
            <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
              {service.setupTime} setup
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-50o0"  />
            <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
              {service.customers ? service.customers.toLocaleString() : '10o00'}+ customers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-50o0"  />
            <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
              {service.rating}/5 ({service.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
              <div key={index} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-green-50o0"  />
                <span className="text-sm text-gray-60o0 dark:text-gray-40o0">{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-50o0 dark:text-gray-40o0">
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-60o0 dark:text-gray-40o0">
            {service.roi}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">Market Position:</h4>
          <p className="text-sm text-gray-60o0 dark:text-gray-40o0">
            {service.marketPosition}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5"
          >
            Learn More
            <ArrowRight className="w-4 h-4"  />
          </a>
          
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="inline-flex items-center gap-2 bg-gray-10o0 dark:bg-gray-70o0 text-gray-70o0 dark:text-gray-30o0 px-4 py-3 rounded-lg font-semibold hover:bg-gray-20o0 dark:hover:bg-gray-60o0 transition-all duration-30o0"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-80o0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-30o0 border border-gray-20o0 dark:border-gray-70o0 ${
        service.popular ? 'ring-2 ring-blue-50o0' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className="text-3xl">{service.icon}</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-90o0 dark:text-white mb-2">
                  {service.name}
                  {service.popular && (
                    <span className="ml-3 bg-blue-50o0 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="text-gray-60o0 dark:text-gray-30o0 mb-3">
                  {service.tagline}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-90o0 dark:text-white">
                  {getServicePricing(service)}
                </div>
                <div className="text-sm text-gray-50o0 dark:text-gray-40o0">
                  {service.trialDays} day trial
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-50o0"  />
                <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
                  {service.setupTime} setup
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-50o0"  />
                <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
                  {service.customers ? service.customers.toLocaleString() : '10o00'}+ customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-50o0"  />
                <span className="text-sm text-gray-60o0 dark:text-gray-40o0">
                  {service.rating}/5 ({service.reviews} reviews)
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-50o0"  />
                      <span className="text-sm text-gray-60o0 dark:text-gray-40o0">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">ROI & Benefits:</h4>
                <p className="text-sm text-gray-60o0 dark:text-gray-40o0 mb-3">
                  {service.roi}
                </p>
                
                <h4 className="font-semibold text-gray-90o0 dark:text-white mb-2">Market Position:</h4>
                <p className="text-sm text-gray-60o0 dark:text-gray-40o0">
                  {service.marketPosition}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Learn More
                <ArrowRight className="w-4 h-4"  />
              </a>
              
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className="inline-flex items-center gap-2 bg-gray-10o0 dark:bg-gray-70o0 text-gray-70o0 dark:text-gray-30o0 px-4 py-3 rounded-lg font-semibold hover:bg-gray-20o0 dark:hover:bg-gray-60o0 transition-all duration-30o0"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-10o0 dark:from-gray-90o0 dark:to-gray-80o0">
      <SEO 
        title="20o25 Advanced Services Showcase - Zion Tech Group"
       />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-60o0 via-purple-60o0 to-indigo-70o0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              20o25 Advanced Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              From AI-powered enterprise services to cutting-edge quantum computing platforms.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-30o0"  />
                <span>30+ New Services</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-30o0"  />
                <span>Real Implementations</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-30o0"  />
                <span>Market Validated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white dark:bg-gray-80o0 border-b border-gray-20o0 dark:border-gray-70o0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-60o0"  />
                <span className="text-gray-70o0 dark:text-gray-30o0">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-60o0"  />
                <span className="text-gray-70o0 dark:text-gray-30o0">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-60o0"  />
                <span className="text-gray-70o0 dark:text-gray-30o0">{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${contactInfo.email}?subject=Services Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-all duration-30o0"
              >
                Get Quote
                <ArrowRight className="w-4 h-4"  />
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-10o0 dark:bg-gray-70o0 text-gray-70o0 dark:text-gray-30o0 px-6 py-3 rounded-lg font-semibold hover:bg-gray-20o0 dark:hover:bg-gray-60o0 transition-all duration-30o0"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5"  />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-30o0 dark:border-gray-60o0 rounded-lg bg-white dark:bg-gray-80o0 text-gray-90o0 dark:text-white placeholder-gray-50o0 dark:placeholder-gray-40o0 focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-30o0 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-10o0 dark:bg-blue-90o0 text-blue-60o0 dark:text-blue-40o0' 
                      : 'bg-gray-10o0 dark:bg-gray-70o0 text-gray-60o0 dark:text-gray-40o0 hover:bg-gray-20o0 dark:hover:bg-gray-60o0'
                  }`}
                >
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-30o0 ${
                    viewMode === 'list' 
                      ? 'bg-blue-10o0 dark:bg-blue-90o0 text-blue-60o0 dark:text-blue-40o0' 
                      : 'bg-gray-10o0 dark:bg-gray-70o0 text-gray-60o0 dark:text-gray-40o0 hover:bg-gray-20o0 dark:hover:bg-gray-60o0'
                  }`}
                >
                  <List className="w-5 h-5"  />
                </button>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r text-white shadow-lg'
                      : 'bg-white dark:bg-gray-80o0 text-gray-70o0 dark:text-gray-30o0 border border-gray-20o0 dark:border-gray-60o0 hover:bg-gray-50 dark:hover:bg-gray-70o0'
                  } ${category.color}`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-80o0 rounded-xl p-6 border border-gray-20o0 dark:border-gray-70o0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-90o0 dark:text-white mb-2">
                  {filteredServices.length} Services Found
                </h2>
                <p className="text-gray-60o0 dark:text-gray-40o0">
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}
                  {searchTerm && ` • Search: "${searchTerm}"`}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-60o0 dark:text-gray-40o0">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-50o0"  />
                  <span>Market Growth: 150%+ YoY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-50o0"  />
                  <span>4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="space-y-6">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-40o0 dark:text-gray-50o0 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-90o0 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-gray-60o0 dark:text-gray-40o0">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          ) : (
            <AnimatePresence>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service}  />
        ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service) => (
                    <ServiceList key={service.id} service={service}  />
                  ))}
                </div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-10o0 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-60o0 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5"  />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-60o0 transition-all duration-30o0"
              >
                <Phone className="w-5 h-5"  />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}