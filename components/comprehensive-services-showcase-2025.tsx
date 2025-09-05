<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings,
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3,
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react',

// Import service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services',
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced',
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced',
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services',
interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  category: string,
  rating: number,
  reviews: number,
  customers: number,
  marketSize: string,
  growthRate: string,
  launchDate: string,
  badge?: string,
  icon?: React.ReactNode
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service,
    category: 'Micro SAAS',
    icon: <Rocket className=&quot;w-6 h-6&quot; />
  })),
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service,
    category: 'AI & Consciousness',
    icon: <Brain className=&quot;w-6 h-6&quot; />
  })),
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Enterprise IT',
    icon: <Shield className=&quot;w-6 h-6&quot; />
  })),
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Quantum & Emerging Tech',
    icon: <Atom className=&quot;w-6 h-6&quot; />
  }))
],

const categories = [
<<<<<<< HEAD
  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length },
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length },
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length },
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }
],
=======
  { name: 'All Services', icon: <Globe className=&quot;w-5 h-5&quot; />, count: allServices.length },
  { name: 'Micro SAAS', icon: <Rocket className=&quot;w-5 h-5&quot; />, count: innovativeRealMicroSaasServices2025.length },
  { name: 'AI & Consciousness', icon: <Brain className=&quot;w-5 h-5&quot; />, count: innovativeAIServicesEnhanced2025.length },
  { name: 'Enterprise IT', icon: <Shield className=&quot;w-5 h-5&quot; />, count: innovativeITServicesEnhanced2025.length },
  { name: 'Quantum & Emerging Tech', icon: <Atom className=&quot;w-5 h-5&quot; />, count: emergingTechServicesEnhanced2025.length }
=======
import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {_Search, _Filter, _Grid3X3, _List, _Star, _Users, _TrendingUp, _Zap, _Brain, _Atom, _Shield, _Rocket, _Palette, _BookOpen, _Truck, _DollarSign, _Settings, _ArrowRight, _ChevronDown, _CheckCircle, _Clock, _Award, _Target, _Globe, _Sparkles, _Cpu, _Lock, _Cloud, _BarChart3, _Eye, _Heart, _Lightbulb, _Palette as PaletteIcon, _Code, _Database, _Shield as ShieldIcon, _Globe as GlobeIcon, _Zap as ZapIcon, _Target as TargetIcon} from 'lucide-react';

// Import service data

interface Service {_id: string;
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
  icon?: React.ReactNode;}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({_...service, _category: 'Micro SAAS', _icon: <Rocket className="w-6 h-6" />})),
  ...innovativeAIServicesEnhanced2025.map(service => ({_...service, _category: 'AI & Consciousness', _icon: <Brain className="w-6 h-6" />})),
  ...innovativeITServicesEnhanced2025.map(service => ({_...service, _category: 'Enterprise IT', _icon: <Shield className="w-6 h-6" />})),
  ...emergingTechServicesEnhanced2025.map(service => ({_...service, _category: 'Quantum & Emerging Tech', _icon: <Atom className="w-6 h-6" />}))
];

const _categories = [
  {_name: 'All Services', _icon: <Globe className="w-5 h-5" />, _count: allServices.length},
  {_name: 'Micro SAAS', _icon: <Rocket className="w-5 h-5" />, _count: innovativeRealMicroSaasServices2025.length},
  {_name: 'AI & Consciousness', _icon: <Brain className="w-5 h-5" />, _count: innovativeAIServicesEnhanced2025.length},
  {_name: 'Enterprise IT', _icon: <Shield className="w-5 h-5" />, _count: innovativeITServicesEnhanced2025.length},
  {_name: 'Quantum & Emerging Tech', _icon: <Atom className="w-5 h-5" />, _count: emergingTechServicesEnhanced2025.length}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50/month', value: 'under-50' },
  { label: '$50 - $200/month', value: '50-200' },
  { label: '$200 - $500/month', value: '200-500' },
  { label: 'Over $500/month', value: 'over-500' }
],

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' }
],

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('All Services'),
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'),
  const [sortBy, setSortBy] = useState('popular'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices),

  useEffect(() => {
    let filtered = allServices,
=======
const _priceRanges = [
  {_label: 'All Prices', _value: 'all'},
  {_label: 'Under $50/month', _value: 'under-50'},
  {_label: '$50 - $200/month', _value: '50-200'},
  {_label: '$200 - $500/month', _value: '200-500'},
  {_label: 'Over $500/month', _value: 'over-500'}
];

const _sortOptions = [
  {_label: 'Most Popular', _value: 'popular'},
  {_label: 'Highest Rated', _value: 'rating'},
  {_label: 'Newest', _value: 'newest'},
  {_label: 'Price: Low to High', _value: 'price-low'},
  {_label: 'Price: High to Low', _value: 'price-high'}
];

export default function ComprehensiveServicesShowcase2025() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, _setSelectedPriceRange] = useState('all');
  const [sortBy, _setSortBy] = useState('popular');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, _setFilteredServices] = useState<Service[]>(allServices);

  useEffect__(() => {
    let _filtered = allServices;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
<<<<<<< HEAD
      )
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, '')),
        switch (selectedPriceRange) {
          case 'under-50': return price < 50,
          case '50-200': return price >= 50 && price <= 200,
          case '200-500': return price > 200 && price <= 500,
          case 'over-500': return price > 500,
          default: return true
        }
      })
=======
      );}

    // Filter by category
    if (selectedCategory !== 'All Services') {_filtered = filtered.filter(service => service.category === selectedCategory);}

    // Filter by price range
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseFloat(service.price.replace(/[^0-9.]/g, _''));
        switch (selectedPriceRange) {
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Sort services
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'popular':
          return b.customers - a.customers,
        case 'rating':
          return b.rating - a.rating,
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        case 'price-low':
<<<<<<< HEAD
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')),
        default: return 0
      }
    }),
=======
          return parseFloat(a.price.replace(/[^0-9.]/g, _'')) - parseFloat(b.price.replace(/[^0-9.]/g, _''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, _'')) - parseFloat(a.price.replace(/[^0-9.]/g, _''));
        default:
          return 0;}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]),

<<<<<<< HEAD
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500',
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500',
      case 'Enterprise IT': return 'from-green-500 to-emerald-500',
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500',
      default: return 'from-gray-500 to-slate-500'
    }
  },

  const getCategoryIcon = (category: string) => {
    switch (category) {
<<<<<<< HEAD
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />,
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />,
      case 'Enterprise IT': return <Shield className="w-5 h-5" />,
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,
      default: return <Globe className="w-5 h-5" />
=======
      case 'Micro SAAS': return <Rocket className=&quot;w-5 h-5&quot; />;
      case 'AI & Consciousness': return <Brain className=&quot;w-5 h-5&quot; />;
      case 'Enterprise IT': return <Shield className=&quot;w-5 h-5&quot; />;
      case 'Quantum & Emerging Tech': return <Atom className=&quot;w-5 h-5&quot; />;
      default: return <Globe className=&quot;w-5 h-5&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
  const _getCategoryColor = (_category: string) => {_switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';}
  };

  const _getCategoryIcon = (_category: string) => {_switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <div className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]&quot;></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]&quot;></div>
        </div>
        
        {/* Floating Elements */}
        <div className=&quot;absolute inset-0 overflow-hidden&quot;>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className=&quot;absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20&quot;
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5}}
              style={{
=======
      {_/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {_/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        {_/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {_[...Array(20)].map(_(_, _i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
              animate={_{
                x: [0, _100, _0], _y: [0, _-100, _0], _opacity: [0.2, _0.8, _0.2]}}
              transition={_{
                duration: 10 + i * 2, _repeat: Infinity, _delay: i * 0.5}}
              style={_{
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                left: `${Math.random() * 100}%`,
                top: `${_Math.random() * 100}%`}}
            />
          ))}
        </div>

        <div className=&quot;relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                Comprehensive
              </span>
              <br />
              <span className=&quot;text-white&quot;>Services Showcase</span>
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto&quot;>
              Discover our complete portfolio of {allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            
            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-12&quot;>
              {[
                { label: 'Total Services', value: allServices.length, icon: <Globe className=&quot;w-8 h-8&quot; /> },
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className=&quot;w-8 h-8&quot; /> },
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className=&quot;w-8 h-8&quot; /> },
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className=&quot;w-8 h-8&quot; /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className=&quot;text-center&quot;
                >
                  <div className=&quot;inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400&quot;>
                    {stat.icon}
                  </div>
                  <div className=&quot;text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                  <div className=&quot;text-sm text-cyan-300&quot;>{stat.label}</div>
=======
            <p className="text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {_allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            
            {_/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {_[
                { label: 'Total Services', _value: allServices.length, _icon: <Globe className="w-8 h-8" />},
                {_label: 'AI Solutions', _value: innovativeAIServicesEnhanced2025.length, _icon: <Brain className="w-8 h-8" />},
                {_label: 'IT Services', _value: innovativeITServicesEnhanced2025.length, _icon: <Shield className="w-8 h-8" />},
                {_label: 'Emerging Tech', _value: emergingTechServicesEnhanced2025.length, _icon: <Atom className="w-8 h-8" />}
              ].map(_(stat, _index) => (
                <motion.div
                  key={_stat.label}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: 0.2 + index * 0.1}}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400">
                    {_stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{_stat.value}</div>
                  <div className="text-sm text-cyan-300">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>

<<<<<<< HEAD
            {/* Search Bar */}
            <div className=&quot;max-w-2xl mx-auto&quot;>
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search for services, features, or solutions...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50&quot;
=======
            {_/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, features, or solutions..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Filters and Controls */}
      <div className=&quot;bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
          <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0&quot;>
            {/* Category Filters */}
            <div className=&quot;flex flex-wrap items-center space-x-2&quot;>
              {categories.map((category) => (
                <button
=======
      {_/* Filters and Controls */}
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {_/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  key={category.name}
                  onClick={_() => setSelectedCategory(category.name)}
                  className={_`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}
                >
<<<<<<< HEAD
                  {category.icon}
                  <span>{category.name}</span>
                  <span className=&quot;bg-white/20 px-2 py-1 rounded-full text-xs&quot;>
                    {category.count}
=======
                  {_category.icon}
                  <span>{_category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {_category.count}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </span>
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Price and Sort Controls */}
            <div className=&quot;flex flex-wrap items-center space-x-4&quot;>
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className=&quot;px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50&quot;
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className=&quot;bg-gray-900 text-white&quot;>
                    {range.label}
=======
            {_/* Price and Sort Controls */}
            <div className="flex flex-wrap items-center space-x-4">
              {_/* Price Range Filter */}
              <select
                value={_selectedPriceRange}
                onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {_priceRanges.map(_(range) => (
                  <option key={range.value} value={_range.value} className="bg-gray-900 text-white">
                    {_range.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </option>
                ))}
              </select>

              {_/* Sort Options */}
              <select
<<<<<<< HEAD
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=&quot;px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50&quot;
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className=&quot;bg-gray-900 text-white&quot;>
                    {option.label}
=======
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {_sortOptions.map(_(option) => (
                  <option key={option.value} value={_option.value} className="bg-gray-900 text-white">
                    {_option.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </option>
                ))}
              </select>

<<<<<<< HEAD
              {/* View Mode Toggle */}
              <div className=&quot;flex items-center space-x-1 bg-white/10 rounded-lg p-1&quot;>
=======
              {_/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className=&quot;w-4 h-4&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-white'}`}
                >
                  <List className=&quot;w-4 h-4&quot; />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Services Grid/List */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
        {/* Results Count */}
        <div className=&quot;mb-8&quot;>
          <p className=&quot;text-gray-400&quot;>
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                {/* Category Badge */}
                <div className=&quot;absolute top-4 right-4&quot;>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className=&quot;ml-2&quot;>{service.category}</span>
                  </span>
                </div>

                {/* Service Icon */}
                <div className=&quot;mb-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300&quot;>
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>
                  {service.name}
                </h3>
                <p className=&quot;text-gray-400 mb-3 line-clamp-2&quot;>
                  {service.tagline}
                </p>
                <p className=&quot;text-sm text-gray-500 mb-4 line-clamp-3&quot;>
                  {service.description}
                </p>

                {/* Price */}
                <div className=&quot;mb-4&quot;>
                  <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
                  <span className=&quot;text-gray-500 text-sm ml-2&quot;>/month</span>
                </div>

                {/* Stats */}
                <div className=&quot;flex items-center justify-between mb-4 text-sm&quot;>
                  <div className=&quot;flex items-center space-x-1 text-yellow-400&quot;>
                    <Star className=&quot;w-4 h-4 fill-current&quot; />
                    <span className=&quot;text-white&quot;>{service.rating}</span>
                    <span className=&quot;text-gray-500&quot;>({service.reviews})</span>
                  </div>
                  <div className=&quot;flex items-center space-x-1 text-gray-400&quot;>
                    <Users className=&quot;w-4 h-4&quot; />
                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className=&quot;mb-4&quot;>
                  <div className=&quot;text-xs text-gray-500 mb-2&quot;>Key Features:</div>
                  <div className=&quot;space-y-1&quot;>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center space-x-2 text-sm text-gray-400&quot;>
                        <CheckCircle className=&quot;w-3 h-3 text-cyan-400&quot; />
                        <span className=&quot;line-clamp-1&quot;>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className=&quot;text-xs text-cyan-400&quot;>
=======
      {_/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {_/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing {_filteredServices.length} of {_allServices.length} services
          </p>
        </div>

        {_viewMode === 'grid' ? (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {_/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={_`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {_getCategoryIcon(service.category)}
                    <span className="ml-2">{_service.category}</span>
                  </span>
                </div>

                {_/* Service Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {_service.icon}
                  </div>
                </div>

                {_/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {_service.name}
                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {_service.tagline}
                </p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {_service.description}
                </p>

                {_/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>

                {_/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{_service.rating}</span>
                    <span className="text-gray-500">({_service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{_service.customers.toLocaleString()}</span>
                  </div>
                </div>

                {_/* Features Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {_service.features.slice(0, _3).map(_(feature, _idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{_feature}</span>
                      </div>
                    ))}
                    {_service.features.length > 3 && (
                      <div className="text-xs text-cyan-400">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Market Info */}
                <div className=&quot;mb-4 text-xs text-gray-500&quot;>
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className=&quot;w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105&quot;>
=======
                {_/* Market Info */}
                <div className="mb-4 text-xs text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>Market Size: {_service.marketSize}</span>
                    <span>Growth: {_service.growthRate}</span>
                  </div>
                </div>

                {_/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
        ) : (
          <div className=&quot;space-y-6&quot;>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=&quot;group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  {/* Service Icon */}
                  <div className=&quot;flex-shrink-0&quot;>
                    <div className=&quot;w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300&quot;>
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className=&quot;flex-1 min-w-0&quot;>
                    <div className=&quot;flex items-start justify-between mb-3&quot;>
                      <div>
                        <h3 className=&quot;text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-lg text-cyan-300 mb-2&quot;>
                          {service.tagline}
                        </p>
                        <p className=&quot;text-gray-400 mb-4&quot;>
                          {service.description}
                        </p>
                      </div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>{service.price}</div>
                        <div className=&quot;text-gray-500 text-sm&quot;>/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
                          {service.category}
=======
        ) : (_<div className="space-y-6">
            {_filteredServices.map((service, _index) => (
              <motion.div
                key={service.id}
                initial={_{ opacity: 0, _x: -20}}
                animate={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                className="group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  {_/* Service Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {_service.icon}
                    </div>
                  </div>

                  {_/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {_service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {_service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {_service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{_service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={_`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
                          {_service.category}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* Stats Row */}
                    <div className=&quot;flex items-center space-x-8 mb-4 text-sm&quot;>
                      <div className=&quot;flex items-center space-x-1 text-yellow-400&quot;>
                        <Star className=&quot;w-4 h-4 fill-current&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.rating}</span>
                        <span className=&quot;text-gray-500&quot;>({service.reviews} reviews)</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1 text-gray-400&quot;>
                        <Users className=&quot;w-4 h-4&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.customers.toLocaleString()}</span>
                        <span className=&quot;text-gray-500&quot;>customers</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1 text-gray-400&quot;>
                        <TrendingUp className=&quot;w-4 h-4&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.growthRate}</span>
                        <span className=&quot;text-gray-500&quot;>growth</span>
                      </div>
                      <div className=&quot;flex items-center space-x-1 text-gray-400&quot;>
                        <Globe className=&quot;w-4 h-4&quot; />
                        <span className=&quot;text-white font-medium&quot;>{service.marketSize}</span>
                        <span className=&quot;text-gray-500&quot;>market</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;text-sm text-gray-500 mb-2&quot;>Key Features:</div>
                      <div className=&quot;grid grid-cols-2 gap-2&quot;>
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className=&quot;flex items-center space-x-2 text-sm text-gray-400&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-cyan-400 flex-shrink-0&quot; />
                            <span>{feature}</span>
=======
                    {_/* Stats Row */}
                    <div className="flex items-center space-x-8 mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium">{_service.rating}</span>
                        <span className="text-gray-500">({_service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.customers.toLocaleString()}</span>
                        <span className="text-gray-500">customers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.growthRate}</span>
                        <span className="text-gray-500">growth</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{_service.marketSize}</span>
                        <span className="text-gray-500">market</span>
                      </div>
                    </div>

                    {_/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {_service.features.slice(0, _6).map(_(feature, _idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                            <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        ))}
                      </div>
                    </div>

<<<<<<< HEAD
                    {/* CTA */}
                    <div className=&quot;flex items-center justify-between&quot;>
                      <button className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105&quot;>
                        Learn More
                      </button>
                      <div className=&quot;text-xs text-gray-500&quot;>
                        Launched: {new Date(service.launchDate).toLocaleDateString()}
=======
                    {_/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105">
                        Learn More
                      </button>
                      <div className="text-xs text-gray-500">
                        Launched: {_new Date(service.launchDate).toLocaleDateString()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

<<<<<<< HEAD
        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className=&quot;text-center py-20&quot;>
            <div className=&quot;w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot;>
              <Search className=&quot;w-12 h-12 text-cyan-400&quot; />
=======
        {_/* No Results */}
        {_filteredServices.length === 0 && (_<div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
            <p className=&quot;text-gray-400 mb-6&quot;>
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
<<<<<<< HEAD
                setSearchTerm(''),
                setSelectedCategory('All Services'),
                setSelectedPriceRange('all')
              }}
              className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200&quot;
=======
                setSearchTerm('');
                setSelectedCategory('All Services');
                setSelectedPriceRange('all');}}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className=&quot;bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center&quot;>
=======
      {_/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-cyan-300 mb-8 max-w-3xl mx-auto&quot;>
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get in touch today and discover how our innovative services can drive your success.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
=======
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <a
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105&quot;
              >
                Get Started Today
              </a>
              <a
                href=&quot;/pricing&quot;
                className=&quot;border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200&quot;
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
