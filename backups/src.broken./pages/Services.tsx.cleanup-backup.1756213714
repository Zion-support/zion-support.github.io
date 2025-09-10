<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
import React, { useState } from 'react';
<<<<<<<< HEAD:src/pages/Services.tsx
<<<<<<< HEAD
========
=======
>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/Services.tsx.backup.1756208062
import { useState, useMemo } from 'react';
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
=======
import { useState } from 'react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
=======
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from '../data/comprehensiveServices';
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { SEO } from "@/components/SEO";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Globe,
  Settings,
  Database,
  Network
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
import { Link } from 'react-router-dom';
import { enhancedMicroSaasServices2025, enhancedITServices2025, enhancedAIServices2025 } from '../data/comprehensiveServices2025';
=======
import Link from 'next/link';
import { enhancedMicroSaasServices2025 } from '../data/comprehensiveServices2025';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e899

<<<<<<< HEAD
const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = [
    'all',
    'Productivity',
    'Finance',
    'Marketing',
    'CRM',
    'Analytics',
    'Scheduling',
    'Quantum Computing',
    'AI Architecture',
    'Edge Computing',
    'Privacy AI',
    'AI Governance',
    'AI Ecosystem',
    'Infrastructure',
    'Cloud Services',
    'Security',
    'DevOps',
    'IoT',
    'Consulting',
    'Modernization',
    'Software Development',
    'Business Intelligence',
    'Language AI',
    'Visual AI',
    'Process Automation',
    'Conversational AI',
    'Predictive Analytics',
    'Supply Chain',
    'Customer Experience',
    'Financial AI',
    'Healthcare AI',
    'Marketing AI'
  ];

  // Combine all services with proper typing
  const allServices = [
    ...enhancedMicroSaasServices2025.map(service => ({ ...service, serviceType: 'Micro SAAS' as const })),
    ...enhancedITServices2025.map(service => ({ ...service, serviceType: 'IT Service' as const })),
    ...enhancedAIServices2025.map(service => ({ ...service, serviceType: 'AI Service' as const }))
  ];

  const filteredServices = allServices
    .filter(service => 
      selectedCategory === 'all' || service.category === selectedCategory
    )
    .filter(service =>
      selectedServiceType === 'all' || service.serviceType === selectedServiceType
    )
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const aPrice = a.serviceType === 'IT Service' ? a.projectRate : (a as any).price || 0;
          const bPrice = b.serviceType === 'IT Service' ? b.projectRate : (b as any).price || 0;
          return aPrice - bPrice;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Productivity': '⚡',
      'Finance': '💰',
      'Marketing': '📢',
      'CRM': '👥',
      'Analytics': '📊',
      'Scheduling': '📅',
      'Quantum Computing': '🔮',
      'AI Architecture': '🧠',
      'Edge Computing': '🌐',
      'Privacy AI': '🔒',
      'AI Governance': '⚖️',
      'AI Ecosystem': '🌍',
      'Infrastructure': '🏗️',
      'Cloud Services': '☁️',
      'Security': '🛡️',
      'DevOps': '🔧',
      'IoT': '📡',
      'Consulting': '💼',
      'Modernization': '🔄',
      'Software Development': '💻',
      'Business Intelligence': '📈',
      'Language AI': '🗣️',
      'Visual AI': '👁️',
      'Process Automation': '🤖',
      'Conversational AI': '💬',
      'Predictive Analytics': '🔮',
      'Supply Chain': '📦',
      'Customer Experience': '😊',
      'Financial AI': '🏦',
      'Healthcare AI': '🏥',
      'Marketing AI': '📈'
    };
    return icons[category] || '🚀';
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Micro SAAS Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge collection of 60+ innovative micro SAAS, IT, and AI solutions, 
            from AI-powered productivity tools to revolutionary quantum computing platforms. 
            Each service is designed to transform your business and drive innovation.
          </p>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && query && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-12 pr-4 py-3 futuristic-input"
              />
=======
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/request-quote" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
=======
import React from 'react';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/build-and-fix-errors-e276
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
<<<<<<< HEAD
  Cpu,
  BarChart3,
  Users,
  Lock,
  Rocket,
  Building2
} from 'lucide-react';

            {/* Service Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {['all', 'Micro SAAS', 'IT Service', 'AI Service'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedServiceType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedServiceType === type
                      ? 'bg-green-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {type === 'all' ? 'All Types' : type}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

  const emergingTechServices = [
    {
      title: "Quantum Computing",
      description: "Exploring the future of computing with quantum algorithms and solutions",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized solutions and blockchain technology implementation",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things infrastructure and smart device integration",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Edge Computing",
      description: "Distributed computing solutions for real-time data processing",
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to transform your business, 
            from AI-powered insights to scalable cloud infrastructure.
          </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
=======
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                  : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
              }`}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full futuristic-input"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Filter */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Subcategory</label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full futuristic-input"
              >
                {subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory === 'all' ? 'All Subcategories' : subcategory}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-cyan-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full futuristic-input"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Category</option>
              </select>
            </div>
=======
      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              every aspect of your digital transformation journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex justify-center mb-4">
                  <category.icon className="w-16 h-16 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-zion-slate mb-6 text-center leading-relaxed">
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
<<<<<<< HEAD
                    <li key={serviceIndex} className="flex items-center text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={category.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold transition-colors"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business
            </motion.p>
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Search Services
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, description, or tags..."
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-zion-slate-light mb-2">
                  Filter by Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{sortedServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
=======
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
<<<<<<< HEAD

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
<<<<<<< HEAD
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
=======
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
                }`}
              >
                {category.name}
              </button>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
          </div>
        </motion.div>
=======
        </section>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

<<<<<<< HEAD
        {/* Services Grid */}
<<<<<<< HEAD
        <motion.div
<<<<<<< HEAD
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sortedServices.map((service, index) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
              From AI-powered analytics to quantum computing platforms, we're building the future today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-zion-cyan" />
                {services.length}+ Revolutionary Services
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-zion-cyan" />
                99.9% Uptime Guarantee
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 text-zion-cyan" />
                AI-Powered Solutions
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-zion-cyan" />
                Competitive Pricing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 px-6 bg-zion-blue-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
          className="mb-12"
        >
          <div className="bg-zion-blue-light/20 backdrop-blur-md border border-zion-purple/30 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{getPriceRangeLabel(range)}</option>
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
              {/* Pricing Filter */}
              <div className="flex-1 min-w-48">
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                <select
                  value={selectedPricing}
                  onChange={(e) => setSelectedPricing(e.target.value)}
                  className="w-full px-3 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  {pricingModels.map(model => (
                    <option key={model} value={model}>{model.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
                  ))}
                </select>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                  <option value="new">Newest</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of technology services designed to drive innovation and growth. 
              Each service is carefully crafted to deliver real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
<<<<<<< HEAD
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="futuristic-card group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-r ${categoryColor} rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">${service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

<<<<<<< HEAD
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
=======
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple border-zion-purple/30' :
                        service.badge === 'New' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        service.badge === 'Featured' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        service.badge === 'Premium' ? 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30' :
                        'bg-zion-purple/20 text-zion-purple border-zion-purple/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.price.currency}{service.price.monthly.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>
                  {service.price.yearly && (
                    <div className="text-zion-slate-light text-sm">
                      {service.price.currency}{service.price.yearly.toLocaleString()}/year (Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                    </div>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-purple mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-zion-slate-light flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
=======
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {service.popular && (
                      <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                    )}
                    {service.new && (
                      <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price Comparison */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.price}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    Market: {service.marketPrice}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    Key Benefits:
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Market Price Comparison */}
                <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300 line-through">${service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Our Price:</span>
                    <span className="text-cyan-400 font-semibold">${service.price}</span>
                  </div>
                  <div className="text-xs text-green-400 text-center mt-1">
                    Save ${Number(service.marketPrice) - service.price}/month
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 futuristic-btn neon-glow neon-cyan text-center"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 futuristic-btn neon-glow neon-purple text-center"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Service Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
=======
                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded border border-zion-blue-light/30"
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
                      >
                        {tag}
                      </span>
                    ))}
<<<<<<< HEAD
                  </div>
                )}
=======
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-blue-400/50 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
              </motion.div>
            );
          })}
        </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Enhanced Services Section */}
        <div className="mt-16 mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-4">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span className="text-purple-400 font-medium">New & Enhanced</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our AI experts help you implement the right technology solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/innovative-services-showcase"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  View All Innovative Services
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
=======
        {/* Additional Services Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Explore More Services</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS and specialized IT solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <Link
                to="/services/comprehensive"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Services</h3>
                <p className="text-zion-slate-light mb-4">
                  Explore our complete portfolio of micro SAAS and IT solutions with transparent pricing and detailed features.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  View All Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link
                to="/services/innovative-showcase"
                className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">Innovative Showcase</h3>
                <p className="text-zion-slate-light mb-4">
                  Discover cutting-edge solutions including AI-powered business intelligence and advanced cybersecurity platforms.
                </p>
                <div className="text-zion-cyan hover:text-zion-cyan-light flex items-center justify-center group">
                  Explore Innovations <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
<<<<<<< HEAD
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
=======
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-services-showcase"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
=======
    { name: "Healthcare", icon: "🏥", description: "HIPAA compliant solutions for healthcare providers" },
    { name: "Finance", icon: "🏦", description: "Secure financial technology solutions" },
    { name: "Retail", icon: "🛍️", description: "E-commerce and retail technology platforms" },
    { name: "Manufacturing", icon: "🏭", description: "Industry 4.0 and smart manufacturing" },
    { name: "Education", icon: "🎓", description: "EdTech solutions for modern learning" },
    { name: "Government", icon: "🏛️", description: "Secure government technology solutions" }
  ];

  const categories = ['all', 'AI/ML', 'Security', 'Cloud', 'Transformation', 'Consulting', 'Global'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Security': 'from-red-500 to-orange-500',
      'Cloud': 'from-blue-500 to-cyan-500',
      'Transformation': 'from-green-500 to-teal-500',
      'Consulting': 'from-indigo-500 to-purple-500',
      'Global': 'from-yellow-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Transform your business with our comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Digital Transformation, IT Consulting, and Global Solutions. Expert consulting and implementation services."
        url="https://ziontechgroup.com/services"
        keywords="AI services, cybersecurity, cloud computing, digital transformation, IT consulting, technology services, Zion Tech Group"
        ogImage="https://ziontechgroup.com/services-og-image.jpg"
        twitterCard="summary_large_image"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <div className={`animate-fade-in-up transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-300">
              Showing {filteredServices.length} of {allServices.length} total services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Freemium' ? 'bg-green-500/20 text-green-400' :
                      service.serviceType === 'Micro SAAS' && (service as any).pricing === 'Professional' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {service.serviceType === 'Micro SAAS' ? (service as any).pricing : service.serviceType}
                    </span>
                  </div>
                )}
                
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-400">
                    {service.serviceType === 'IT Service' 
                      ? `$${(service as any).hourlyRate}/hour or $${(service as any).projectRate.toLocaleString()} project`
                      : formatPrice((service as any).price, (service as any).pricingModel)
                    }
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                  {service.serviceType !== 'Micro SAAS' && (
                    <div className="text-xs text-gray-500 mt-1">
                      {service.serviceType}
                    </div>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{service.rating}</span>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mb-6 space-y-2 text-sm">
                  {service.serviceType === 'Micro SAAS' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{(service as any).setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400">{(service as any).roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Users:</span>
                        <span className="text-white">{(service as any).userLimit}</span>
                      </div>
                    </>
                  ) : service.serviceType === 'IT Service' ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-white">{(service as any).responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">SLA:</span>
                        <span className="text-green-400">{(service as any).sla}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Delivery:</span>
                        <span className="text-white">{(service as any).deliveryTime}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">AI Score:</span>
                        <span className="text-green-400">{(service as any).aiScore}/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Accuracy:</span>
                        <span className="text-white">{(service as any).accuracy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Models:</span>
                        <span className="text-white">{(service as any).aiModels?.length || 0}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <Link 
                  to={`/services/${service.category.toLowerCase()}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
=======
          {/* Filters and Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              {Object.keys(filters).length > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <button
                onClick={() => handleSort('title')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'title' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Name
                {sortBy === 'title' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => handleSort('price')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'price' ? 'bg-zion-cyan/20 text-zion-cyan' : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Price
                {sortBy === 'price' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                  <select
                    value={filters.pricingModel || ''}
                    onChange={(e) => setFilter('pricingModel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Models</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Level</label>
                  <select
                    value={filters.supportLevel || ''}
                    onChange={(e) => setFilter('supportLevel', e.target.value || '')}
                    className="w-full px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Levels</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilter('minPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilter('maxPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Industries Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We have extensive experience across multiple industries, delivering tailored solutions for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 text-center border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀" },
              { number: "50+", label: "Expert Consultants", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🔄" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Contact our experts today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="quantum-button text-lg px-8 py-4"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
              >
                View All Services
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
=======
const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including predictive analytics, natural language processing, and automated decision-making systems.",
      features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Automation"],
      price: "From $2,500/month",
      color: "from-purple-500 to-pink-500",
      link: "/ai-services"
    },
    {
      icon: Cpu,
      title: "Micro SAAS Services",
      description: "Custom software solutions designed for modern businesses, from workflow automation to customer relationship management systems.",
      features: ["Custom Development", "Workflow Automation", "CRM Systems", "API Integration"],
      price: "From $15,000",
      color: "from-blue-500 to-cyan-500",
      link: "/micro-saas-services"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions that accelerate your development cycle.",
      features: ["Cloud Migration", "DevOps Automation", "Kubernetes", "Infrastructure as Code"],
      price: "From $35,000",
      color: "from-green-500 to-emerald-500",
      link: "/cloud-devops"
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation.",
      features: ["Digital Transformation", "Enterprise Security", "System Integration", "Compliance Management"],
      price: "From $50,000",
      color: "from-orange-500 to-red-500",
      link: "/enterprise-solutions"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end business modernization through strategic digital transformation, process optimization, and innovation management.",
      features: ["Strategy Development", "Process Optimization", "Change Management", "Innovation Labs"],
      price: "From $75,000",
      color: "from-indigo-500 to-purple-500",
      link: "/digital-transformation"
    },
    {
      icon: Zap,
      title: "Emerging Technology",
      description: "Next-generation technology solutions including quantum computing, blockchain, IoT, AR/VR, and green technology.",
      features: ["Quantum Computing", "Blockchain Solutions", "IoT Platforms", "AR/VR Applications"],
      price: "From $75,000",
      color: "from-yellow-500 to-orange-500",
      link: "/emerging-tech"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed specifically for your business needs and requirements."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex technology solutions across industries."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serve customers worldwide with scalable, cloud-based solutions and global infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks for enterprise environments."
=======
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation',
        'Custom AI Solutions'
      ],
      href: '/services/ai',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions and automated deployment pipelines for modern applications.',
      features: [
        'AWS, Azure & GCP Migration',
        'Container Orchestration',
        'Serverless Architecture',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Cloud Security & Compliance'
      ],
      href: '/services/cloud',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Zero Trust Security',
        'Penetration Testing',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      href: '/services/security',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end business process modernization and digital strategy implementation.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'API Integration',
        'Data Migration',
        'Change Management',
        'Digital Strategy Consulting'
      ],
      href: '/services/transformation',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Development',
      description: 'Custom web and mobile applications built with modern technologies and best practices.',
      features: [
        'React & Next.js Development',
        'Mobile App Development',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Development',
        'Performance Optimization'
      ],
      href: '/services/development',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Predictive Modeling',
        'Data Governance'
      ],
      href: '/services/analytics',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
>>>>>>> origin/cursor/build-and-fix-errors-e276
    }
  ];

  const stats = [
<<<<<<< HEAD
    { label: "Services Delivered", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Success Rate", value: "99%", icon: Star },
    { label: "Years Experience", value: "15+", icon: Award }
  ];

  const industries = [
    { name: "Technology", icon: "💻", description: "Software companies, SaaS platforms, tech startups" },
    { name: "Finance", icon: "💰", description: "Banks, insurance companies, fintech firms" },
    { name: "Healthcare", icon: "🏥", description: "Hospitals, clinics, health tech companies" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial companies, factories, production facilities" },
    { name: "Retail", icon: "🛍️", description: "E-commerce, retail chains, online marketplaces" },
    { name: "Government", icon: "🏛️", description: "Federal, state, and local government agencies" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, and emerging technologies."
        keywords="technology services, AI services, micro SAAS, cloud DevOps, enterprise solutions, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive technology services designed to drive innovation and transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
=======
        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className="futuristic-btn neon-glow neon-cyan"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

<<<<<<< HEAD
        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text neon-cyan">
              Why Choose Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 (302) 464-0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
>>>>>>> origin/main
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300">Cutting-edge AI and quantum technologies that keep you ahead of the competition</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
                <p className="text-gray-300">Trusted by enterprises worldwide with a track record of successful implementations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 expert support and dedicated success managers for your business</p>
              </div>
            </div>
<<<<<<< HEAD
          </div>
<<<<<<< HEAD
        </div>

        {/* Comprehensive Services Showcase CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover Our Complete Portfolio
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Explore our comprehensive showcase featuring 30+ cutting-edge AI solutions, emerging technologies, and specialized IT services. 
              From micro SAAS applications to quantum computing platforms, we have the tools you need to stay ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-400">
              <div>• AI-Powered Business Solutions</div>
              <div>• Emerging Technology Platforms</div>
              <div>• Specialized IT Services</div>
            </div>
            <Link
              to="/comprehensive-services-showcase"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Comprehensive Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
=======
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/contact" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
          </div>
        </div>
=======
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                    <span className="text-zion-slate-light text-sm ml-2">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-zion-cyan text-sm font-medium">
                    AI Score: {service.aiScore}%
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6 p-4 bg-zion-blue-light/5 rounded-lg border border-zion-cyan/20">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Contact Information:</h4>
                  <p>📧 {service.author.name}</p>
                  <p>📱 {service.author.id}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    to={service.link}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
=======
                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-zion-cyan" />
                    Technology:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
              >
                Clear Filters
              </button>
            </motion.div>
          )}
<<<<<<< HEAD
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 border border-zion-cyan/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Can't find exactly what you're looking for? Our team can create a custom solution tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Contact Us</span>
              <CheckCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
      </div>
    </div>
  );
}
=======
      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our most popular and impactful solutions that are transforming businesses worldwide.
=======
    { value: '200+', label: 'Projects Delivered', icon: CheckCircle, color: 'text-green-400' },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield, color: 'text-blue-400' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-purple-400' },
    { value: '15+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your requirements and business objectives to understand your needs.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your goals and budget.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using industry best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance.',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation. 
              From AI and cloud infrastructure to cybersecurity and digital transformation.
>>>>>>> origin/cursor/build-and-fix-errors-e276
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-zion-blue-dark to-zion-blue text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 text-zion-cyan" />
=======
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          <div className="text-center mb-12">
            <p className="text-zion-slate-light">
              {isLoading ? 'Searching...' : `Showing ${totalResults} services`}
              {query && ` for "${query}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedResults.results.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Service Details */}
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>Delivery: {service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-zion-cyan" />
                        <span>Support: {service.supportLevel}</span>
                      </div>
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 transform hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center px-6 py-2 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We have deep expertise across multiple industries and understand the unique 
              challenges and opportunities each sector presents.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real business value and sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Rapid Delivery
              </h3>
              <p className="text-zion-slate">
                Agile development methodologies ensure quick turnaround times without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Expert Team
              </h3>
              <p className="text-zion-slate">
                Skilled professionals with deep expertise in the latest technologies and industry best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Quality Assurance
              </h3>
              <p className="text-zion-slate">
                Rigorous testing and quality control processes ensure reliable and robust solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Continuous Support
              </h3>
              <p className="text-zion-slate">
                Ongoing maintenance, updates, and support to ensure your solutions evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and how our services can help 
            you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
=======
          </motion.div>

          {/* Pagination */}
          {paginatedResults.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Previous
              </button>
              
              <span className="px-4 py-2 text-zion-slate-light">
                Page {currentPage} of {paginatedResults.totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!paginatedResults.hasNextPage}
                className="px-4 py-2 bg-white/10 text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Next
              </button>
=======
import { motion } from 'framer-motion';
import { CORE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, PRICING_TIERS } from '@/data/coreServices';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  Cloud, 
  Lock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPricingTier, setSelectedPricingTier] = useState('');

  const filteredServices = CORE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !selectedCategory || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSubcategory = !selectedSubcategory || service.subcategory.toLowerCase().includes(selectedSubcategory.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return Zap;
    if (category.includes('Cloud')) return Cloud;
    if (category.includes('Security') || category.includes('Cyber')) return Shield;
    return Zap;
  };

  const getPricingTierPrice = (basePrice: number, tier: string) => {
    const multiplier = PRICING_TIERS[tier as keyof typeof PRICING_TIERS]?.multiplier || 1;
    return basePrice * multiplier;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of cutting-edge technology services designed to transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {SERVICE_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Subcategories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Subcategories</SelectItem>
                  {selectedCategory && SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES]?.map((sub) => (
                    <SelectItem key={sub} value={sub}>
                      {sub}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
                <SelectTrigger>
                  <SelectValue placeholder="All Pricing Tiers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Pricing Tiers</SelectItem>
                  {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                    <SelectItem key={key} value={key}>
                      {tier.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const CategoryIcon = getCategoryIcon(service.category);
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-blue-100 rounded-xl">
                            <CategoryIcon className="h-6 w-6 text-blue-600" />
                          </div>
                          {service.featured && (
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Rating and AI Score */}
                        <div className="flex items-center gap-4 mb-4">
                          {service.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-700">
                                {service.rating} ({service.reviewCount} reviews)
                              </span>
                            </div>
                          )}
                          {service.aiScore && (
                            <div className="flex items-center gap-1">
                              <Zap className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium text-gray-700">
                                AI Score: {service.aiScore}%
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span className="text-xs text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-blue-600">
                              ${service.price}
                            </span>
                            <span className="text-gray-500">/month</span>
                          </div>
                          <p className="text-sm text-gray-600">{service.marketPrice}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button className="flex-1" variant="default">
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {service.estimatedDelivery}
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="h-3 w-3" />
                              {service.supportLevel}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            </div>
          )}
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
        </div>
      </section>
<<<<<<< HEAD
    </div>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-54e3

export default Services;
<<<<<<< HEAD
=======
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </motion.div>
      </div>
=======
        </div>
      </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6b26
    </div>
  );
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-24bd
=======
                    <li key={serviceIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-semibold text-sm transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTech.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
                    <p className="text-zion-slate-light">15+ years of experience in cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Proven Results</h3>
                    <p className="text-zion-slate-light">500+ successful projects delivered worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">24/7 Support</h3>
                    <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Scalable Solutions</h3>
                    <p className="text-zion-slate-light">Built to grow with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-zion-slate-light mb-6">
                Let's discuss your project requirements and create a custom solution that drives results.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/request-quote"
                  className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Business Today</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Join hundreds of companies already leveraging our technology solutions to achieve unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6">
            <Link
              to="/enhanced-services"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View Complete Services Portfolio →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-e1a1
=======
      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to drive innovation and transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    <Link
                      to={service.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven expertise across diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of professional technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our technology services can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition. 
              Our team of experts is ready to guide you through the digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
=======
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zion-cyan rounded-lg flex items-center justify-center mb-4 text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Emerging Technologies</h2>
          <p className="text-lg text-zion-slate-light text-center max-w-3xl mx-auto mb-12">
            Stay ahead of the curve with our cutting-edge technology solutions that are shaping the future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergingTechServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team of experienced professionals brings 15+ years of expertise 
                in cutting-edge technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">
                We've successfully delivered 500+ projects across various industries, 
                consistently exceeding client expectations and driving measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade security and compliance standards ensure your data 
                and systems remain protected at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Driven</h3>
              <p className="text-zion-slate-light">
                We stay at the forefront of technology trends, continuously innovating 
                to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with 24/7 support and localized expertise 
                to ensure your success regardless of your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Delivery</h3>
              <p className="text-zion-slate-light">
                Agile development methodologies and efficient processes ensure 
                rapid delivery without compromising quality or security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">
                We analyze your requirements, understand your business goals, 
                and design a tailored solution strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-zion-slate-light">
                Detailed project planning, architecture design, and timeline 
                development to ensure successful execution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
              <p className="text-zion-slate-light">
                Agile development with regular updates, testing, and quality 
                assurance to deliver exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Launch & Support</h3>
              <p className="text-zion-slate-light">
                Smooth deployment, comprehensive training, and ongoing support 
                to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Let's discuss your project requirements and explore how our innovative 
            solutions can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/request-quote" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
=======

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="h-5 w-5 mr-2" />
                Get Quote
              </Button>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default Services;
>>>>>>> origin/cursor/website-audit-and-enhancement-f30b
=======
}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9077
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
              {/* Results Count */}
              <div className="flex items-end">
                <span className="text-zion-slate-light">
                  {filteredServices.length} services found
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zion-purple/20 rounded-lg text-zion-cyan">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {getPricingDisplay(service)}
                  </div>
                  <div className="text-xs text-zion-slate-light capitalize">
                    {service.pricingModel.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                  <span>{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Shield className="w-4 h-4 text-zion-cyan" />
                  <span className="capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Market Price */}
              <div className="mb-4 p-3 bg-zion-blue-dark/30 rounded-lg">
                <div className="text-xs text-zion-slate-light mb-1">Market Price Range</div>
                <div className="text-zion-cyan font-medium">{service.marketPrice}</div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="border-t border-zion-purple/20 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zion-slate-light">
                    <div>📧 {service.contactInfo.email}</div>
                    <div>📱 {service.contactInfo.phone}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<<< HEAD:src/pages/Services.tsx
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
========
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/Services.tsx.backup.1756208062
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Services() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<>
			<SEO
				title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group"
				description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started."
				canonical="/services"
				url="https://ziontechgroup.com/services"
			/>

			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12">
						{servicesCatalog.map(category => (
							<section key={category.slug}>
								<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{category.name}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map(item => (
										<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
											<div className="flex items-start justify-between gap-4">
												<div>
													<h3 className="text-xl font-semibold text-white">{item.title}</h3>
													<p className="text-zion-slate-light mt-2">{item.description}</p>
												</div>
												<div className="text-right min-w-[120px]">
													<div className="text-zion-cyan font-semibold">{item.price}</div>
													<div className="text-zion-slate-light text-sm">{item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}</div>
												</div>
											</div>

											<ul className="mt-4 space-y-2 text-zion-slate-light text-sm list-disc list-inside">
												{item.features.map((f, idx) => (
													<li key={idx}>{f}</li>
												))}
											</ul>

											<div className="mt-6 flex items-center justify-between">
												<Link
													to={item.href}
													target={item.external ? '_blank' : undefined}
													rel={item.external ? 'noopener noreferrer' : undefined}
													className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20"
												>
													<span>{item.ctaLabel}</span>
													{item.external && <ExternalLink className="w-4 h-4" />}
												</Link>
												<span className="text-zion-slate-light text-sm">Category: {item.category}</span>
											</div>
										</div>
									))}
								</div>
							</section>
						))}
					</div>

					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Phone className="w-5 h-5" /><span>{contact.mobile}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Mail className="w-5 h-5" /><span>{contact.email}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><MapPin className="w-5 h-5" /><span>{contact.address}</span></div>
							</div>
						</div>
						<div className="mt-6">
							<Link to="/contact" className="inline-flex items-center gap-2 text-white underline">Go to contact page</Link>
						</div>
					</section>

				</div>
			</main>
		</>
	);
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
