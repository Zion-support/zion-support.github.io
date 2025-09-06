import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Target,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Play,
  Pause,
  Eye,
  Heart,
  Share2,
  Download,
  BookOpen,
  Code,
  Palette,;
ursor/integrate-build-improve-and-re-verify-b76c
import { 
  Star, TrendingUp, Users, Award, Zap, Brain, Atom, Shield, Rocket, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Cpu, Target;
  Search, Filter, Grid, List, ChevronDown, ChevronUp, ExternalLink;
  Play, Pause, Eye, Heart, Share2, Download, BookOpen, Code, Palette
ursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

ursor/integrate-build-improve-and-re-verify-b76c
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  website: 'https://ziontechgroup.com'
ursor/integrate-build-improve-and-re-verify-b76c
};

const stats = [
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const categories = [
  {
    name: 'All Services',
    value: 'all',
    icon: Globe,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'AI & Consciousness',
    value: 'ai',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Quantum & Emerging Tech',
    value: 'quantum',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Enterprise IT',
    value: 'enterprise',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Micro SAAS',
    value: 'saas',
    icon: Rocket,
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Creativity & Design',
    value: 'creativity',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Healthcare & Biotech',
    value: 'healthcare',
    icon: Heart,
    color: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'Finance & Trading',
    value: 'finance',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
  },
  website: 'https://ziontechgroup.com'
};

const stats = [
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const categories = [
ursor/integrate-build-improve-and-re-verify-b76c
  { name: 'All Services', value: 'all', icon: Globe, color: 'from-blue-500 to-cyan-600' },
  { name: 'AI & Consciousness', value: 'ai', icon: Brain, color: 'from-purple-500 to-pink-600' },
  { name: 'Quantum & Emerging Tech', value: 'quantum', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { name: 'Enterprise IT', value: 'enterprise', icon: Shield, color: 'from-green-500 to-emerald-600' },
  { name: 'Micro SAAS', value: 'saas', icon: Rocket, color: 'from-orange-500 to-red-600' },
  { name: 'Creativity & Design', value: 'creativity', icon: Palette, color: 'from-pink-500 to-rose-600' },
  { name: 'Healthcare & Biotech', value: 'healthcare', icon: Heart, color: 'from-teal-500 to-cyan-600' },
  { name: 'Finance & Trading', value: 'finance', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' }
ursor/integrate-build-improve-and-re-verify-b76c
];

export default function InnovativeMicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...emergingTechServicesEnhanced2025,
    ...innovativeRealMicroSaasServices2025;
    ...emergingTechServicesEnhanced2025
    ...innovativeRealMicroSaasServices2025;
    ...emergingTechServicesEnhanced2025
ursor/integrate-build-improve-and-re-verify-b76c
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' ||
    const matchesCategory = selectedCategory === 'all' || 
ursor/integrate-build-improve-and-re-verify-b76c
      service.category.toLowerCase().includes(selectedCategory) ||
      service.name.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.name.toLowerCase().includes(selectedCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch
    return matchesCategory && matchesSearch
ursor/integrate-build-improve-and-re-verify-b76c
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return (
          parseFloat(a.price.replace('$', '')) -
          parseFloat(b.price.replace('$', ''))
        );
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
ursor/integrate-build-improve-and-re-verify-b76c
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (
          new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        );
      default:
        return 0;
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default: return 0
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default: return 0
ursor/integrate-build-improve-and-re-verify-b76c
    }
  });

  return (
    <Layout>
      <Head>
        <title>
          Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group
        </title>
        <meta
          name='description'
          content='Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology.'
        />
        <meta
          name='keywords'
          content='micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/innovative-micro-saas-showcase'
        />
      </Head>

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
        <div className='relative z-10 container mx-auto px-4 text-center'>
        <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
        <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
ursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}><h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
ursor/integrate-build-improve-and-re-verify-b76c
              Innovative Micro SAAS Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, AI platforms, quantum computing services, and emerging technology innovations designed to transform your business.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Innovative Micro SAAS Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, AI platforms, quantum computing services, and emerging technology innovations designed to transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
ursor/integrate-build-improve-and-re-verify-b76c
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'><stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className='text-white font-semibold'>
                    {stat.number}
                  </span>
                  <span className='text-gray-300 text-sm'>{stat.label}</span>
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"><stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"><stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
ursor/integrate-build-improve-and-re-verify-b76c
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className='bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center justify-between text-center lg:text-left'>
            <div className='flex items-center space-x-4 mb-4 lg:mb-0'>
              <Phone className='w-5 h-5 text-white' />
              <span className='text-white font-semibold'>
                {contactInfo.mobile}
              </span>
              <Mail className='w-5 h-5 text-white' />
              <span className='text-white font-semibold'>
                {contactInfo.email}
              </span>
            </div>
            <div className='flex items-center space-x-4'>
              <MapPin className='w-5 h-5 text-white' />
              <span className='text-white text-sm'>{contactInfo.address}</span>
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.mobile}</span>
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{contactInfo.address}</span>
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.mobile}</span>
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{contactInfo.address}</span>
ursor/integrate-build-improve-and-re-verify-b76c
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className='py-8 bg-black/50 backdrop-blur-sm border-b border-white/10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
      <section className="py-8 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
ursor/integrate-build-improve-and-re-verify-b76c
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
      <section className="py-8 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
ursor/integrate-build-improve-and-re-verify-b76c
              />
            </div>

            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
              {categories.map(category => (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
ursor/integrate-build-improve-and-re-verify-b76c
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.value
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}><category.icon className='w-4 h-4' />
                  <span className='text-sm font-medium'>{category.name}</span>
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
ursor/integrate-build-improve-and-re-verify-b76c
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className='flex items-center space-x-4'>
              <div className='flex bg-white/10 rounded-lg p-1'>
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
ursor/integrate-build-improve-and-re-verify-b76c
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}><Grid className='w-5 h-5' />
                  <Grid className="w-5 h-5" />
                  <Grid className="w-5 h-5" />
ursor/integrate-build-improve-and-re-verify-b76c
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}><List className='w-5 h-5' />
                  <List className="w-5 h-5" />
                  <List className="w-5 h-5" />
ursor/integrate-build-improve-and-re-verify-b76c
                </button>
              </div>

              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'><option value='popularity'>Most Popular</option>
                <option value='rating'>Highest Rated</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='newest'>Newest First</option>
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
ursor/integrate-build-improve-and-re-verify-b76c
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
ursor/integrate-build-improve-and-re-verify-b76c
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              {selectedCategory === 'all'
                ? 'All Services'
                : `${categories.find(c => c.value === selectedCategory)?.name}`}
            </h2>
            <p className='text-gray-400'>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-400">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-400">
ursor/integrate-build-improve-and-re-verify-b76c
              {filteredServices.length} services found
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
ursor/integrate-build-improve-and-re-verify-b76c
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20'>{/* Popular Badge */}
                  {service.popular && (
                    <div className='absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">{/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">{/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
ursor/integrate-build-improve-and-re-verify-b76c
                      Popular
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <div className="text-4xl mb-4">{service.icon}</div>
ursor/integrate-build-improve-and-re-verify-b76c

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                  <div className="text-4xl mb-4">{service.icon}</div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
ursor/integrate-build-improve-and-re-verify-b76c
                    {service.tagline}
                  </p>

                  {/* Price */}
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-2xl font-bold text-purple-400'>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">
ursor/integrate-build-improve-and-re-verify-b76c
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-300'>
                        {service.rating}
                      </span>
                      <span className='text-xs text-gray-500'>
                        ({service.reviews})
                      </span>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {service.price}
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>
ursor/integrate-build-improve-and-re-verify-b76c
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews})</span>
ursor/integrate-build-improve-and-re-verify-b76c
                    </div>
                  </div>

                  {/* Features */}
                  <div className='mb-4'>
                    <div className='text-sm text-gray-400 mb-2'>
                      Key Features:
                    </div>
                    <div className='space-y-1'>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center space-x-2 text-xs text-gray-300'><CheckCircle className='w-3 h-3 text-green-400' />
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400" />
ursor/integrate-build-improve-and-re-verify-b76c
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category and Setup */}
                  <div className='flex items-center justify-between text-xs text-gray-500 mb-4'>
                    <span className='bg-white/10 px-2 py-1 rounded'>
                      {service.category}
                    </span>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
ursor/integrate-build-improve-and-re-verify-b76c
                    <span>Setup: {service.setupTime}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-2'>
                  <div className="flex space-x-2">
ursor/integrate-build-improve-and-re-verify-b76c
                    <Link
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </Link>
                    <button className='p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300'>
                      <Heart className='w-4 h-4' />
                  <div className="flex space-x-2">
                    <Link
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </Link>
                    <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                      <Heart className="w-4 h-4" />
ursor/integrate-build-improve-and-re-verify-b76c
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6'>
                    <div className='text-center w-full'>
                      <p className='text-white text-sm mb-3 line-clamp-3'>
                        {service.description}
                      </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white text-sm mb-3 line-clamp-3">{service.description}</p>
ursor/integrate-build-improve-and-re-verify-b76c
                      <Link
                        href={service.link}
                        className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"><span>View Details</span>
                        <ArrowRight className='w-4 h-4' />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white text-sm mb-3 line-clamp-3">{service.description}</p>
                      <Link
                        href={service.link}
                        className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"><span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                        <ArrowRight className="w-4 h-4" />
ursor/integrate-build-improve-and-re-verify-b76c
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className='space-y-4'>
            <div className="space-y-4">
            <div className="space-y-4">
ursor/integrate-build-improve-and-re-verify-b76c
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300'
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
ursor/integrate-build-improve-and-re-verify-b76c><div className="flex items-start space-x-6">
                    {/* Service Icon */}
                    <div className="text-4xl">{service.icon}</div>

                    {/* Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{service.tagline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">
                            {service.price}
                            <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                          </div>
                          <div className='flex items-center justify-end space-x-1 mt-1'>
                            <Star className='w-4 h-4 text-yellow-400 fill-current' />
                            <span className='text-sm text-gray-300'>
                              {service.rating}
                            </span>
                            <span className='text-xs text-gray-500'>
                              ({service.reviews})
                            </span>
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"><div className="flex items-start space-x-6">
                    {/* Service Icon */}
                    <div className="text-4xl">{service.icon}</div>

                    {/* Service Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{service.tagline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">
                            {service.price}
                            <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                          </div>
ursor/integrate-build-improve-and-re-verify-b76c
                          <div className="flex items-center justify-end space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                            <span className="text-xs text-gray-500">({service.reviews})</span>
ursor/integrate-build-improve-and-re-verify-b76c
                          </div>
                        </div>
                      </div>

                      <p className='text-gray-300 text-sm mb-4 line-clamp-2'>
                        {service.description}
                      </p>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
ursor/integrate-build-improve-and-re-verify-b76c

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
                          <span>Setup: {service.setupTime}</span>
                          <span>Trial: {service.trialDays} days</span>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            href={service.link}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                          >
                            Learn More
                          </Link>
                          <button className='p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300'>
                            <Heart className='w-4 h-4' />
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
                          <span>Setup: {service.setupTime}</span>
                          <span>Trial: {service.trialDays} days</span>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            href={service.link}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                          >
                            Learn More
                          </Link>
                          <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                            <Heart className="w-4 h-4" />
                          <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                            <Heart className="w-4 h-4" />
ursor/integrate-build-improve-and-re-verify-b76c
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20'>
        <div className='container mx-auto px-4 text-center'>
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
ursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}><h2 className='text-4xl font-bold text-white mb-6'>
            <h2 className="text-4xl font-bold text-white mb-6">
ursor/integrate-build-improve-and-re-verify-b76c
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our innovative services to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href='/contact'
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105'
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our innovative services to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
ursor/integrate-build-improve-and-re-verify-b76c
              >
                Get Started Today
              </Link>
              <Link
                href='/pricing'
                className='bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300'
                href="/pricing"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300"
                href="/pricing"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300"
ursor/integrate-build-improve-and-re-verify-b76c
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
