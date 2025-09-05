<<<<<<< HEAD
import React, { useState, useMemo } from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react',
import Button from '../components/ui/Button',
import Card from '../components/ui/Card',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2',
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2',
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2',
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3',
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3',
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3',
export default function Services2026ShowcaseEnhancedPage() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('name'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),

  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced',
    if (serviceVariant.includes('quantum')) return 'quantum',
    if (serviceVariant.includes('ai')) return 'ai-futuristic',
    if (serviceVariant.includes('holographic')) return 'holographic',
    if (serviceVariant.includes('neural')) return 'neural',
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',
    if (serviceVariant.includes('security')) return 'cyberpunk',
    if (serviceVariant.includes('data')) return 'neural',
    if (serviceVariant.includes('mobility')) return 'holographic',
    if (serviceVariant.includes('network')) return 'quantum-advanced',
    if (serviceVariant.includes('backup')) return 'quantum-advanced',
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',
    if (serviceVariant.includes('monitoring')) return 'neural',
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',
    if (serviceVariant.includes('metaverse')) return 'holographic',
    if (serviceVariant.includes('iot')) return 'quantum-iot',
    if (serviceVariant.includes('edge')) return 'quantum-advanced',
    if (serviceVariant.includes('ar')) return 'holographic',
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',
    if (serviceVariant.includes('5g')) return 'quantum-advanced',
    if (serviceVariant.includes('biometric')) return 'cyberpunk',
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',
    if (serviceVariant.includes('api')) return 'quantum-advanced',
    if (serviceVariant.includes('integration')) return 'quantum-advanced',
    if (serviceVariant.includes('analytics')) return 'neural',
    return 'default'
  },

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
=======
import React, {_useState, _useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

export default function Services2026ShowcaseEnhancedPage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [selectedCategory, _setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, _setSelectedPriceRange] = useState<string>('all');
  const [sortBy, _setSortBy] = useState<string>('name');
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');

  // Map service variants to supported card variants
  const _mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic';
    if (serviceVariant.includes('cloud')) return 'quantum-advanced';
    if (serviceVariant.includes('security')) return 'cyberpunk';
    if (serviceVariant.includes('data')) return 'neural';
    if (serviceVariant.includes('mobility')) return 'holographic';
    if (serviceVariant.includes('network')) return 'quantum-advanced';
    if (serviceVariant.includes('backup')) return 'quantum-advanced';
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic';
    if (serviceVariant.includes('monitoring')) return 'neural';
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced';
    if (serviceVariant.includes('metaverse')) return 'holographic';
    if (serviceVariant.includes('iot')) return 'quantum-iot';
    if (serviceVariant.includes('edge')) return 'quantum-advanced';
    if (serviceVariant.includes('ar')) return 'holographic';
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced';
    if (serviceVariant.includes('5g')) return 'quantum-advanced';
    if (serviceVariant.includes('biometric')) return 'cyberpunk';
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic';
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced';
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic';
    if (serviceVariant.includes('api')) return 'quantum-advanced';
    if (serviceVariant.includes('integration')) return 'quantum-advanced';
    if (serviceVariant.includes('analytics')) return 'neural';
    return 'default';};

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Combine all 2026 services including new ones
  const _all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ],

  // Enhanced categories for 2026
<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services,
=======
  const _categories = [
    {_id: 'all', _name: 'All 2026 Services', _icon: '🚀', _count: all2026Services.length},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: '🧠', _count: all2026Services.filter(s => s.category.includes('AI')).length},
    {_id: 'quantum', _name: 'Quantum & Emerging Tech', _icon: '⚛️', _count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length},
    {_id: 'enterprise', _name: 'Enterprise IT', _icon: '🏢', _count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length},
    {_id: 'micro-saas', _name: 'Micro SaaS', _icon: '💻', _count: all2026Services.filter(s => s.category.includes('SaaS')).length},
    {_id: 'healthcare', _name: 'Healthcare & Biotech', _icon: '🏥', _count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length},
    {_id: 'financial', _name: 'Financial Technology', _icon: '💰', _count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length},
    {_id: 'manufacturing', _name: 'Manufacturing & IoT', _icon: '🏭', _count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _range: 'All'},
    {_id: 'low', _name: 'Under $1K/month', _range: 'Under $1K'},
    {_id: 'medium', _name: '$1K - $5K/month', _range: '$1K - $5K'},
    {_id: 'high', _name: '$5K - $20K/month', _range: '$5K - $20K'},
    {_id: 'premium', _name: '$20K+/month', _range: '$20K+'}
  ];

  const _sortOptions = [
    {_id: 'name', _name: 'Name A-Z'},
    {_id: 'price-low', _name: 'Price Low to High'},
    {_id: 'price-high', _name: 'Price High to Low'},
    {_id: 'popularity', _name: 'Most Popular'},
    {_id: 'newest', _name: 'Newest First'},
    {_id: 'rating', _name: 'Highest Rated'}
  ];

  // Filter and sort services
  const _filteredServices = useMemo__(() => {_let _filtered = all2026Services;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
<<<<<<< HEAD
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'))
      } else if (selectedCategory === 'quantum') {
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'))
      } else if (selectedCategory === 'enterprise') {
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'))
      } else if (selectedCategory === 'micro-saas') {
        filtered = filtered.filter(service => service.category.includes('SaaS'))
      } else if (selectedCategory === 'healthcare') {
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'))
      } else if (selectedCategory === 'financial') {
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'))
      } else if (selectedCategory === 'manufacturing') {
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'))
      }
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
        if (selectedPriceRange === 'low') return price < 1000,
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000,
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000,
        if (selectedPriceRange === 'premium') return price >= 20000,
        return true
      })
=======
      );}

    // Category filter
    if (selectedCategory !== 'all') {_if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'));} else if (selectedCategory === 'quantum') {_filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'));} else if (selectedCategory === 'enterprise') {_filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'));} else if (selectedCategory === 'micro-saas') {_filtered = filtered.filter(service => service.category.includes('SaaS'));} else if (selectedCategory === 'healthcare') {_filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'));} else if (selectedCategory === 'financial') {_filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'));} else if (selectedCategory === 'manufacturing') {_filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'));}
    }

    // Price filter
    if (selectedPriceRange !== 'all') {_filtered = filtered.filter(service => {
        const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // Sort services
    filtered.sort(_(a, _b) => {_switch (sortBy) {
        case 'price-low':
<<<<<<< HEAD
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),
=======
          return parseInt(a.price.replace(/[^0-9]/g, _'')) - parseInt(b.price.replace(/[^0-9]/g, _''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, _'')) - parseInt(a.price.replace(/[^0-9]/g, _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews),
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        case 'rating':
<<<<<<< HEAD
          return b.rating - a.rating,
        default: return a.name.localeCompare(b.name)
      }
    }),
=======
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);}
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return filtered
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  // Service statistics
<<<<<<< HEAD
  const serviceStats = {
    totalServices: all2026Services.length,
    aiServices: all2026Services.filter(s => s.category.includes('AI')).length,
    quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length,
    enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length,
    microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length,
    healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length,
    financialServices: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length,
    manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length
  },
=======
  const _serviceStats = {_totalServices: all2026Services.length, _aiServices: all2026Services.filter(s => s.category.includes('AI')).length, _quantumServices: all2026Services.filter(s => s.category.includes('Quantum')).length, _enterpriseServices: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length, _microSaasServices: all2026Services.filter(s => s.category.includes('SaaS')).length, _healthcareServices: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length, _financialServices: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length, _manufacturingServices: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <UltraFuturisticBackground variant=&quot;holographic&quot; intensity=&quot;high&quot;>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Enhanced 2026 Services Showcase - Zion Tech Group</title>
          <meta name=&quot;description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services. Transform your business with cutting-edge technology.&quot; />
          <meta name=&quot;keywords&quot; content=&quot;2026 services, micro SAAS, AI services, quantum computing, enterprise IT, blockchain, 5G networks, edge computing, zero trust security&quot; />
          <link rel=&quot;icon&quot; href=&quot;/favicon.svg&quot; />
          
<<<<<<< HEAD
          {/* Open Graph */}
          <meta property=&quot;og:title&quot; content=&quot;Enhanced 2026 Services Showcase - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services.&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2026-services-showcase-enhanced&quot; />
          <meta property=&quot;og:image&quot; content=&quot;https://ziontechgroup.com/og-image.svg&quot; />
          
          {/* Twitter */}
          <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
          <meta name=&quot;twitter:title&quot; content=&quot;Enhanced 2026 Services Showcase - Zion Tech Group&quot; />
          <meta name=&quot;twitter:description&quot; content=&quot;Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services.&quot; />
          <meta name=&quot;twitter:image&quot; content=&quot;https://ziontechgroup.com/og-image.svg&quot; />
        </Head>

        {/* Enhanced Header Section */}
        <section className=&quot;relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30&quot;></div>
          <div className=&quot;max-w-7xl mx-auto relative z-10 text-center&quot;>
=======
          {_/* Open Graph */}
          <meta property="og:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-enhanced" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
          
          {_/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        </Head>

        {_/* Enhanced Header Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6&quot;>
                Enhanced 2026 Services Showcase
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.
              </p>
              
<<<<<<< HEAD
              {/* Service Statistics */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-4 mb-12&quot;>
                {Object.entries(serviceStats).map(([key, value]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: key.length * 0.1 }}
                    className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30&quot;
                  >
                    <div className=&quot;text-3xl font-bold text-cyan-400&quot;>{value}</div>
                    <div className=&quot;text-sm text-gray-400 capitalize&quot;>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
=======
              {_/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {_Object.entries(serviceStats).map(_([key, _value]) => (
                  <motion.div
                    key={key}
                    initial={_{ opacity: 0, _scale: 0.8}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.5, _delay: key.length * 0.1}}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-3xl font-bold text-cyan-400">{_value}</div>
                    <div className="text-sm text-gray-400 capitalize">{_key.replace(/([A-Z])/g, _' $1').trim()}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.div>
                ))}
              </div>

<<<<<<< HEAD
              {/* Contact Information */}
              <div className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto&quot;>
                <h3 className=&quot;text-xl font-semibold text-cyan-400 mb-4&quot;>Ready to Transform Your Business?</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center justify-center space-x-2&quot;>
                    <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
                    <span className=&quot;text-center&quot;>{contactInfo.address}</span>
=======
              {_/* Contact Information */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{_contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{_contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Search and Filters */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <div className=&quot;bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8&quot;>
              {/* Search Bar */}
              <div className=&quot;relative mb-6&quot;>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search for services, technologies, or use cases...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&quot;
                />
              </div>

              {/* Filters and Controls */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6&quot;>
                {/* Category Filter */}
=======
        {_/* Enhanced Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {_/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."
                  value={_searchTerm}
                  onChange={_(_e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {_/* Filters and Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {_/* Category Filter */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Category</label>
                  <select
<<<<<<< HEAD
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
=======
                    value={_selectedCategory}
                    onChange={_(_e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_categories.map(_(category) => (
                      <option key={category.id} value={_category.id}>
                        {_category.name} ({_category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Price Range Filter */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Price Range</label>
                  <select
<<<<<<< HEAD
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
=======
                    value={_selectedPriceRange}
                    onChange={_(_e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_priceRanges.map(_(range) => (
                      <option key={range.id} value={_range.id}>
                        {_range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* Sort Options */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>Sort By</label>
                  <select
<<<<<<< HEAD
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500&quot;
=======
                    value={_sortBy}
                    onChange={_(_e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_sortOptions.map(_(option) => (
                      <option key={option.id} value={_option.id}>
                        {_option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {_/* View Mode Toggle */}
                <div>
                  <label className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>View Mode</label>
                  <div className=&quot;flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1&quot;>
                    <button
                      onClick={_() => setViewMode('grid')}
                      className={_`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <Grid className=&quot;w-4 h-4 mx-auto&quot; />
                    </button>
                    <button
                      onClick={_() => setViewMode('list')}
                      className={_`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      <List className=&quot;w-4 h-4 mx-auto&quot; />
                    </button>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Results Count */}
              <div className=&quot;text-center&quot;>
                <p className=&quot;text-gray-400&quot;>
                  Showing <span className=&quot;text-cyan-400 font-semibold&quot;>{filteredServices.length}</span> of{' '}
                  <span className=&quot;text-cyan-400 font-semibold&quot;>{all2026Services.length}</span> services
=======
              {_/* Results Count */}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{_filteredServices.length}</span> of{_' '}
                  <span className="text-cyan-400 font-semibold">{_all2026Services.length}</span> services
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </p>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Services Grid */}
        <section className=&quot;py-16 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <AnimatePresence mode=&quot;wait&quot;>
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className=&quot;text-center py-20&quot;
=======
        {_/* Enhanced Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {_filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0}}
                  animate={_{ opacity: 1}}
                  exit={_{ opacity: 0}}
                  className="text-center py-20"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;text-6xl mb-4&quot;>🔍</div>
                  <h3 className=&quot;text-2xl font-semibold text-gray-300 mb-2&quot;>No services found</h3>
                  <p className=&quot;text-gray-400&quot;>Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (_<div className={_viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {_filteredServices.map((service, _index) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _y: 20}}
                      animate={_{ opacity: 1, _y: 0}}
                      exit={_{ opacity: 0, _y: -20}}
                      transition={_{ duration: 0.5, _delay: index * 0.1}}
                      className={_viewMode === 'grid' ? '' : 'bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'}
                    >
                      <UltraFuturisticCard
<<<<<<< HEAD
                        variant={mapServiceVariantToCardVariant(service.variant)}
                        className=&quot;h-full&quot;
                      >
                        <div className=&quot;p-6&quot;>
                          {/* Service Header */}
                          <div className=&quot;flex items-start justify-between mb-4&quot;>
                            <div className=&quot;text-4xl&quot;>{service.icon}</div>
                            {service.popular && (
                              <div className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium&quot;>
=======
                        variant={_mapServiceVariantToCardVariant(service.variant)}
                        className="h-full"
                      >
                        <div className="p-6">
                          {_/* Service Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{_service.icon}</div>
                            {_service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                Popular
                              </div>
                            )}
                          </div>

<<<<<<< HEAD
                          {/* Service Title and Tagline */}
                          <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h3>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>

                          {/* Price */}
                          <div className=&quot;mb-4&quot;>
                            <span className=&quot;text-3xl font-bold text-cyan-400&quot;>{service.price}</span>
                            <span className=&quot;text-gray-400&quot;>{service.period}</span>
                          </div>

                          {/* Description */}
                          <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-3&quot;>{service.description}</p>

                          {/* Key Features */}
                          <div className=&quot;mb-4&quot;>
                            <h4 className=&quot;text-sm font-semibold text-gray-200 mb-2&quot;>Key Features:</h4>
                            <ul className=&quot;space-y-1&quot;>
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className=&quot;flex items-center text-xs text-gray-400&quot;>
                                  <CheckCircle className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            {service.features.length > 3 && (
                              <p className=&quot;text-xs text-gray-500 mt-1&quot;>+{service.features.length - 3} more features</p>
                            )}
                          </div>

                          {/* Service Stats */}
                          <div className=&quot;grid grid-cols-3 gap-2 mb-4 text-xs&quot;>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-cyan-400 font-semibold&quot;>{service.rating}★</div>
                              <div className=&quot;text-gray-400&quot;>{service.reviews} reviews</div>
                            </div>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-purple-400 font-semibold&quot;>{service.customers}</div>
                              <div className=&quot;text-gray-400&quot;>customers</div>
                            </div>
                            <div className=&quot;text-center&quot;>
                              <div className=&quot;text-green-400 font-semibold&quot;>{service.trialDays}d</div>
                              <div className=&quot;text-gray-400&quot;>trial</div>
                            </div>
                          </div>

                          {/* Market Position */}
                          <div className=&quot;mb-4 p-3 bg-gray-800/30 rounded-lg&quot;>
                            <h4 className=&quot;text-xs font-semibold text-gray-200 mb-1&quot;>Market Position:</h4>
                            <p className=&quot;text-xs text-gray-400 line-clamp-2&quot;>{service.marketPosition}</p>
                          </div>

                          {/* ROI */}
                          <div className=&quot;mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg&quot;>
                            <h4 className=&quot;text-xs font-semibold text-green-400 mb-1&quot;>ROI Promise:</h4>
                            <p className=&quot;text-xs text-green-300&quot;>{service.roi}</p>
                          </div>

                          {/* Action Buttons */}
                          <div className=&quot;flex space-x-2&quot;>
                            <Button
                              variant=&quot;primary&quot;
                              size=&quot;sm&quot;
                              className=&quot;flex-1&quot;
                              onClick={() => window.open(service.link, '_blank')}
=======
                          {_/* Service Title and Tagline */}
                          <h3 className="text-xl font-bold text-white mb-2">{_service.name}</h3>
                          <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>

                          {_/* Price */}
                          <div className="mb-4">
                            <span className="text-3xl font-bold text-cyan-400">{_service.price}</span>
                            <span className="text-gray-400">{_service.period}</span>
                          </div>

                          {_/* Description */}
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{_service.description}</p>

                          {_/* Key Features */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {_service.features.slice(0, _3).map(_(feature, _idx) => (
                                <li key={idx} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {_feature}
                                </li>
                              ))}
                            </ul>
                            {_service.features.length > 3 && (
                              <p className="text-xs text-gray-500 mt-1">+{service.features.length - 3} more features</p>
                            )}
                          </div>

                          {_/* Service Stats */}
                          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                            <div className="text-center">
                              <div className="text-cyan-400 font-semibold">{_service.rating}★</div>
                              <div className="text-gray-400">{_service.reviews} reviews</div>
                            </div>
                            <div className="text-center">
                              <div className="text-purple-400 font-semibold">{_service.customers}</div>
                              <div className="text-gray-400">customers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-green-400 font-semibold">{_service.trialDays}d</div>
                              <div className="text-gray-400">trial</div>
                            </div>
                          </div>

                          {_/* Market Position */}
                          <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-gray-200 mb-1">Market Position:</h4>
                            <p className="text-xs text-gray-400 line-clamp-2">{_service.marketPosition}</p>
                          </div>

                          {_/* ROI */}
                          <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                            <h4 className="text-xs font-semibold text-green-400 mb-1">ROI Promise:</h4>
                            <p className="text-xs text-green-300">{_service.roi}</p>
                          </div>

                          {_/* Action Buttons */}
                          <div className="flex space-x-2">
                            <Button
                              variant="primary"
                              size="sm"
                              className="flex-1"
                              onClick={_() => window.open(service.link, _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Learn More
                              <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                            </Button>
                            <Button
<<<<<<< HEAD
                              variant=&quot;secondary&quot;
                              size=&quot;sm&quot;
                              onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`)}
=======
                              variant="secondary"
                              size="sm"
                              onClick={_() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${_service.name}`)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

<<<<<<< HEAD
        {/* Enhanced Footer CTA */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30&quot;
=======
        {_/* Enhanced Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <Button
<<<<<<< HEAD
                  variant=&quot;primary&quot;
                  size=&quot;lg&quot;
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
=======
                  variant="primary"
                  size="lg"
                  onClick={_() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Mail className=&quot;w-5 h-5 mr-2&quot; />
                  Schedule Consultation
                </Button>
                <Button
<<<<<<< HEAD
                  variant=&quot;secondary&quot;
                  size=&quot;lg&quot;
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
=======
                  variant="secondary"
                  size="lg"
                  onClick={_() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Phone className=&quot;w-5 h-5 mr-2&quot; />
                  Call Now
                </Button>
              </div>
<<<<<<< HEAD
              <div className=&quot;mt-8 text-sm text-gray-400&quot;>
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
=======
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {_contactInfo.mobile} | {_contactInfo.email}</p>
                <p>{_contactInfo.address}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  )
}