<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Head from 'next/head',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Search, Filter, Grid, List, ArrowRight, ExternalLink, 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,
  X, Sliders, SortAsc, SortDesc
} from 'lucide-react',
import SmartHeader from '../components/SmartHeader',
import SmartFooter from '../components/SmartFooter',
export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState(''),
  const [searchResults, setSearchResults] = useState<any[]>([]),
  const [isSearching, setIsSearching] = useState(false),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    priceRange: 'all',
    technology: 'all'
  }),
  const [sortBy, setSortBy] = useState('relevance'),
  const [showFilters, setShowFilters] = useState(false),

  // Mock data for search
  const allServices = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling',
      category: 'AI & Machine Learning',
      status: 'active',
      price: '$499/month',
      technology: 'AI/ML',
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],
      link: '/ai-business-intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      relevance: 95
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Cybersecurity',
      status: 'active',
      price: '$799/month',
      technology: 'Quantum',
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],
      link: '/quantum-cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      relevance: 92
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience',
      description: 'Deliver personalized customer experiences at scale with AI-driven insights',
      category: 'AI & Machine Learning',
      status: 'active',
      price: '$399/month',
      technology: 'AI/ML',
      features: ['Customer journey mappingAI personalizationSentiment analysisPredictive support'],
      link: '/ai-customer-experience',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      relevance: 88
    },
    {
      id: 'edge-computing-orchestration',
      title: 'Edge Computing Orchestration',
      description: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Edge Computing',
      status: 'active',
      price: '$349/month',
      technology: 'Edge',
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],
      link: '/edge-computing-orchestration',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      relevance: 85
    },
    {
      id: 'space-technology',
      title: 'Space Technology Innovation',
      description: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Technology',
      status: 'beta',
      price: '$2,499/month',
      technology: 'Space',
      features: ['Satellite managementAI mission planningQuantum communicationResource optimization'],
      link: '/space-technology',
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
      relevance: 82
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Development',
      description: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Biotechnology',
      status: 'beta',
      price: '$899/month',
      technology: 'Biotech',
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],
      link: '/neural-interface',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      relevance: 78
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum Computing',
      status: 'beta',
      price: '$1,299/month',
      technology: 'Quantum',
      features: ['Quantum algorithmsNeural optimizationConsciousness simulationResearch tools'],
      link: '/quantum-neural-networks',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      relevance: 75
    },
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps',
      description: 'AI-powered DevOps optimization and automation platform',
      category: 'Cloud & DevOps',
      status: 'active',
      price: '$599/month',
      technology: 'DevOps',
      features: ['Auto-deploymentPerformance monitoringSecurity scanningCost optimization'],
      link: '/autonomous-devops',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      relevance: 72
    },
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations powered by advanced AI',
      category: 'AI & Machine Learning',
      status: 'beta',
      price: '$1,999/month',
      technology: 'AI/ML',
      features: ['Business automationDecision makingResource allocationPerformance optimization'],
      link: '/ai-autonomous-business',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      relevance: 70
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading',
      description: 'Quantum computing powered financial analysis and trading strategies',
      category: 'Financial Technology',
      status: 'beta',
      price: '$3,999/month',
      technology: 'Quantum',
      features: ['Quantum algorithmsRisk assessmentPortfolio optimizationReal-time analysis'],
      link: '/quantum-financial-trading',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      relevance: 68
    }
  ],

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📂' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },
    { id: 'Biotechnology', name: 'Biotechnology', icon: '🧬' },
    { id: 'Financial Technology', name: 'Financial Technology', icon: '💰' }
  ],

  const statuses = [
    { id: 'all', name: 'All Statuses', icon: '📊' },
    { id: 'active', name: 'Active', icon: '✅' },
    { id: 'beta', name: 'Beta', icon: '🧪' },
    { id: 'coming-soon', name: 'Coming Soon', icon: '🚧' }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', icon: '💰' },
    { id: 'under-500', name: 'Under $500/month', icon: '💵' },
    { id: '500-1000', name: '$500 - $1,000/month', icon: '💵' },
    { id: '1000-2500', name: '$1,000 - $2,500/month', icon: '💵' },
    { id: 'over-2500', name: 'Over $2,500/month', icon: '💵' }
  ],

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: '🔧' },
    { id: 'AI/ML', name: 'AI/ML', icon: '🧠' },
    { id: 'Quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'Edge', name: 'Edge', icon: '🌐' },
    { id: 'Space', name: 'Space', icon: '🚀' },
    { id: 'Biotech', name: 'Biotech', icon: '🧬' },
    { id: 'DevOps', name: 'DevOps', icon: '⚙️' }
  ],

  // Search function
  const performSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]),
      return
    }
=======
import React, {_useState, _useEffect} from 'react';
import Head from 'next/head';
import {_Search, _Filter, _Grid, _List, _ArrowRight, _ExternalLink, _Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Target, _Star, _Sparkles, _Zap, _Users, _Award, _Clock, _CheckCircle, _Globe, _Code, _Server, _TrendingUp, _BarChart3, _Cloud, _Network, _Lightbulb, _Flame, _Zap as ZapIcon, _X, _Sliders, _SortAsc, _SortDesc} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SearchPage() {_const [searchTerm, _setSearchTerm] = useState('');
  const [searchResults, _setSearchResults] = useState<any[]>([]);
  const [isSearching, _setIsSearching] = useState(false);
  const [viewMode, _setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, _setFilters] = useState({
    category: 'all', _status: 'all', _priceRange: 'all', _technology: 'all'});
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for search
  const _allServices = [
    {_id: 'ai-business-intelligence', _title: 'AI Business Intelligence', _description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling', _category: 'AI & Machine Learning', _status: 'active', _price: '$499/month', _technology: 'AI/ML', _features: ['AI-powered dashboards', _'Predictive analytics', _'Real-time insights', _'Custom reporting'], _link: '/ai-business-intelligence', _icon: Brain, _color: 'from-purple-500 to-pink-500', _relevance: 95},
    {_id: 'quantum-cybersecurity', _title: 'Quantum Cybersecurity', _description: 'Future-proof security with quantum-resistant encryption and AI threat detection', _category: 'Cybersecurity', _status: 'active', _price: '$799/month', _technology: 'Quantum', _features: ['Quantum-resistant encryption', _'AI threat detection', _'Zero-trust architecture', _'24/7 monitoring'], _link: '/quantum-cybersecurity', _icon: Shield, _color: 'from-red-500 to-orange-500', _relevance: 92},
    {_id: 'ai-customer-experience', _title: 'AI Customer Experience', _description: 'Deliver personalized customer experiences at scale with AI-driven insights', _category: 'AI & Machine Learning', _status: 'active', _price: '$399/month', _technology: 'AI/ML', _features: ['Customer journey mapping', _'AI personalization', _'Sentiment analysis', _'Predictive support'], _link: '/ai-customer-experience', _icon: Users, _color: 'from-green-500 to-teal-500', _relevance: 88},
    {_id: 'edge-computing-orchestration', _title: 'Edge Computing Orchestration', _description: 'Deploy and manage applications at the edge with intelligent orchestration', _category: 'Edge Computing', _status: 'active', _price: '$349/month', _technology: 'Edge', _features: ['Edge node management', _'IoT device management', _'Real-time monitoring', _'Auto-scaling'], _link: '/edge-computing-orchestration', _icon: Network, _color: 'from-purple-500 to-pink-500', _relevance: 85},
    {_id: 'space-technology', _title: 'Space Technology Innovation', _description: 'Accelerate space exploration with cutting-edge technology solutions', _category: 'Space Technology', _status: 'beta', _price: '$2, _499/month', _technology: 'Space', _features: ['Satellite management', _'AI mission planning', _'Quantum communication', _'Resource optimization'], _link: '/space-technology', _icon: Rocket, _color: 'from-violet-500 to-purple-500', _relevance: 82},
    {_id: 'neural-interface', _title: 'Neural Interface Development', _description: 'Build the future of human-computer interaction with neural interfaces', _category: 'Biotechnology', _status: 'beta', _price: '$899/month', _technology: 'Biotech', _features: ['BCI development tools', _'Neural signal processing', _'AI pattern recognition', _'Safety protocols'], _link: '/neural-interface', _icon: Brain, _color: 'from-pink-500 to-rose-500', _relevance: 78},
    {_id: 'quantum-neural-networks', _title: 'Quantum Neural Networks', _description: 'Quantum-powered AI with advanced consciousness capabilities', _category: 'Quantum Computing', _status: 'beta', _price: '$1, _299/month', _technology: 'Quantum', _features: ['Quantum algorithms', _'Neural optimization', _'Consciousness simulation', _'Research tools'], _link: '/quantum-neural-networks', _icon: Atom, _color: 'from-blue-500 to-cyan-500', _relevance: 75},
    {_id: 'autonomous-devops', _title: 'Autonomous DevOps', _description: 'AI-powered DevOps optimization and automation platform', _category: 'Cloud & DevOps', _status: 'active', _price: '$599/month', _technology: 'DevOps', _features: ['Auto-deployment', _'Performance monitoring', _'Security scanning', _'Cost optimization'], _link: '/autonomous-devops', _icon: Cpu, _color: 'from-emerald-500 to-teal-500', _relevance: 72},
    {_id: 'ai-autonomous-business', _title: 'AI Autonomous Business Manager', _description: 'Fully autonomous business operations powered by advanced AI', _category: 'AI & Machine Learning', _status: 'beta', _price: '$1, _999/month', _technology: 'AI/ML', _features: ['Business automation', _'Decision making', _'Resource allocation', _'Performance optimization'], _link: '/ai-autonomous-business', _icon: Target, _color: 'from-indigo-500 to-purple-500', _relevance: 70},
    {_id: 'quantum-financial-trading', _title: 'Quantum Financial Trading', _description: 'Quantum computing powered financial analysis and trading strategies', _category: 'Financial Technology', _status: 'beta', _price: '$3, _999/month', _technology: 'Quantum', _features: ['Quantum algorithms', _'Risk assessment', _'Portfolio optimization', _'Real-time analysis'], _link: '/quantum-financial-trading', _icon: TrendingUp, _color: 'from-emerald-500 to-green-500', _relevance: 68}
  ];

  const _categories = [
    {_id: 'all', _name: 'All Categories', _icon: '📂'},
    {_id: 'AI & Machine Learning', _name: 'AI & Machine Learning', _icon: '🧠'},
    {_id: 'Quantum Computing', _name: 'Quantum Computing', _icon: '⚛️'},
    {_id: 'Cybersecurity', _name: 'Cybersecurity', _icon: '🛡️'},
    {_id: 'Cloud & DevOps', _name: 'Cloud & DevOps', _icon: '☁️'},
    {_id: 'Edge Computing', _name: 'Edge Computing', _icon: '🌐'},
    {_id: 'Space Technology', _name: 'Space Technology', _icon: '🚀'},
    {_id: 'Biotechnology', _name: 'Biotechnology', _icon: '🧬'},
    {_id: 'Financial Technology', _name: 'Financial Technology', _icon: '💰'}
  ];

  const _statuses = [
    {_id: 'all', _name: 'All Statuses', _icon: '📊'},
    {_id: 'active', _name: 'Active', _icon: '✅'},
    {_id: 'beta', _name: 'Beta', _icon: '🧪'},
    {_id: 'coming-soon', _name: 'Coming Soon', _icon: '🚧'}
  ];

  const _priceRanges = [
    {_id: 'all', _name: 'All Prices', _icon: '💰'},
    {_id: 'under-500', _name: 'Under $500/month', _icon: '💵'},
    {_id: '500-1000', _name: '$500 - $1, _000/month', _icon: '💵'},
    {_id: '1000-2500', _name: '$1, _000 - $2, _500/month', _icon: '💵'},
    {_id: 'over-2500', _name: 'Over $2, _500/month', _icon: '💵'}
  ];

  const _technologies = [
    {_id: 'all', _name: 'All Technologies', _icon: '🔧'},
    {_id: 'AI/ML', _name: 'AI/ML', _icon: '🧠'},
    {_id: 'Quantum', _name: 'Quantum', _icon: '⚛️'},
    {_id: 'Edge', _name: 'Edge', _icon: '🌐'},
    {_id: 'Space', _name: 'Space', _icon: '🚀'},
    {_id: 'Biotech', _name: 'Biotech', _icon: '🧬'},
    {_id: 'DevOps', _name: 'DevOps', _icon: '⚙️'}
  ];

  // Search function
  const _performSearch = () => {_if (!searchTerm.trim()) {
      setSearchResults([]);
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    setIsSearching(true),
    
    // Simulate search delay
    setTimeout__(() => {_const _results = allServices.filter(service => {
        const _matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.technology.toLowerCase().includes(searchTerm.toLowerCase()),
        
<<<<<<< HEAD
        const matchesCategory = filters.category === 'all' || service.category === filters.category,
        const matchesStatus = filters.status === 'all' || service.status === filters.status,
        const matchesTechnology = filters.technology === 'all' || service.technology === filters.technology,
        
        let matchesPrice = true,
        if (filters.priceRange !== 'all') {
          const price = parseInt(service.price.replace(/[^0-9]/g, '')),
=======
        const _matchesCategory = filters.category === 'all' || service.category === filters.category;
        const _matchesStatus = filters.status === 'all' || service.status === filters.status;
        const _matchesTechnology = filters.technology === 'all' || service.technology === filters.technology;
        
        let _matchesPrice = true;
        if (filters.priceRange !== 'all') {
          const _price = parseInt(service.price.replace(/[^0-9]/g, _''));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          switch (filters.priceRange) {
            case 'under-500':
              matchesPrice = price < 500,
              break,
            case '500-1000':
              matchesPrice = price >= 500 && price < 1000,
              break,
            case '1000-2500':
              matchesPrice = price >= 1000 && price < 2500,
              break,
            case 'over-2500':
<<<<<<< HEAD
              matchesPrice = price >= 2500,
              break
          }
=======
              matchesPrice = price >= 2500;
              break;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        
        return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice
      }),

      // Sort results
      const _sortedResults = results.sort(_(a, _b) => {_switch (sortBy) {
          case 'relevance':
            return b.relevance - a.relevance,
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
          case 'name':
            return a.title.localeCompare(b.title),
          case 'status':
<<<<<<< HEAD
            return a.status.localeCompare(b.status),
          default: return 0
        }
      }),
=======
            return a.status.localeCompare(b.status);
          default:
            return 0;}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      setSearchResults(sortedResults),
      setIsSearching(false)
    }, 500)
  },

  // Handle search on Enter key
<<<<<<< HEAD
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      performSearch()
    }
  },

  // Update search when filters change
  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch()
    }
  }, [filters, sortBy]),

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: 'all',
      status: 'all',
      priceRange: 'all',
      technology: 'all'
    }),
    setSortBy('relevance')
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Search across all AI and technology services, solutions, and resources at Zion Tech Group. Find exactly what you need with our advanced search and filtering.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Search | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced search across all services and solutions.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/search&quot; />
=======
  const _handleKeyPress = (_e: React.KeyboardEvent) => {_if (e.key === 'Enter') {
      performSearch();}
  };

  // Update search when filters change
  useEffect__(() => {_if (searchTerm.trim()) {
      performSearch();}
  }, [filters, sortBy]);

  // Clear all filters
  const _clearFilters = () => {_setFilters({
      category: 'all', _status: 'all', _priceRange: 'all', _technology: 'all'});
    setSortBy('relevance');
  };

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Search across all AI and technology services, _solutions, _and resources at Zion Tech Group. Find exactly what you need with our advanced search and filtering." />
        <meta property="og:title" content="Search | Zion Tech Group" />
        <meta property="og:description" content="Advanced search across all services and solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/search" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <SmartHeader />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
=======
      {_/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Search Our Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8&quot;>
              Find the perfect AI and technology solutions for your business needs. 
              Search across our comprehensive service catalog with advanced filtering options.
            </p>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search Interface */}
      <section className=&quot;px-6 pb-12&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6&quot;>
            {/* Search Bar */}
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between mb-6&quot;>
              <div className=&quot;flex-1 max-w-2xl&quot;>
                <div className=&quot;relative&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-6 h-6&quot; />
                  <input
                    type=&quot;text&quot;
                    placeholder=&quot;Search for services, technologies, or solutions...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className=&quot;w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg&quot;
                  />
                  <button
                    onClick={performSearch}
                    className=&quot;absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium transition-colors&quot;
=======
      {_/* Search Interface */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {_/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search for services, _technologies, _or solutions..."
                    value={_searchTerm}
                    onChange={_(e) => setSearchTerm(e.target.value)}
                    onKeyPress={_handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg"
                  />
                  <button
                    onClick={_performSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Search
                  </button>
                </div>
              </div>

<<<<<<< HEAD
              {/* View Mode Toggle */}
              <div className=&quot;flex items-center gap-2&quot;>
=======
              {_/* View Mode Toggle */}
              <div className="flex items-center gap-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <button
                  onClick={_() => setViewMode('grid')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                >
                  <Grid className=&quot;w-5 h-5&quot; />
                </button>
                <button
                  onClick={_() => setViewMode('list')}
                  className={_`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
                >
                  <List className=&quot;w-5 h-5&quot; />
                </button>
              </div>
            </div>

<<<<<<< HEAD
            {/* Filters and Sort */}
            <div className=&quot;flex flex-col lg:flex-row gap-4 items-center justify-between&quot;>
              <div className=&quot;flex items-center gap-4&quot;>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className=&quot;flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors&quot;
=======
            {_/* Filters and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={_() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Sliders className=&quot;w-4 h-4&quot; />
                  Filters
<<<<<<< HEAD
                  {Object.values(filters).some(f => f !== 'all') && (
                    <span className=&quot;w-2 h-2 bg-cyan-400 rounded-full&quot;></span>
=======
                  {_Object.values(filters).some(f => f !== 'all') && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  )}
                </button>
                
                <select
<<<<<<< HEAD
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className=&quot;px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all&quot;
=======
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value=&quot;relevance&quot;>Sort by Relevance</option>
                  <option value=&quot;price-low&quot;>Sort by Price: Low to High</option>
                  <option value=&quot;price-high&quot;>Sort by Price: High to Low</option>
                  <option value=&quot;name&quot;>Sort by Name</option>
                  <option value=&quot;status&quot;>Sort by Status</option>
                </select>
              </div>

              {_Object.values(filters).some(f => f !== 'all') && (
                <button
                  onClick={clearFilters}
                  className=&quot;flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors&quot;
                >
                  <X className=&quot;w-4 h-4&quot; />
                  Clear Filters
                </button>
              )}
            </div>

<<<<<<< HEAD
            {/* Expanded Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className=&quot;mt-6 pt-6 border-t border-white/20&quot;
              >
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
                  {/* Category Filter */}
=======
            {_/* Expanded Filters */}
            {_showFilters && (_<motion.div
                initial={{ opacity: 0, _height: 0}}
                animate={_{ opacity: 1, _height: 'auto'}}
                exit={_{ opacity: 0, _height: 0}}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {_/* Category Filter */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <div>
                    <label className=&quot;block text-white font-medium mb-2&quot;>Category</label>
                    <select
<<<<<<< HEAD
                      value={filters.category}
                      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                      className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all&quot;
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id} className=&quot;bg-slate-800 text-white&quot;>
                          {category.icon} {category.name}
=======
                      value={_filters.category}
                      onChange={_(e) => setFilters(prev => ({ ...prev, _category: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_categories.map(category => (
                        <option key={category.id} value={_category.id} className="bg-slate-800 text-white">
                          {_category.icon} {_category.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Status Filter */}
                  <div>
                    <label className=&quot;block text-white font-medium mb-2&quot;>Status</label>
                    <select
<<<<<<< HEAD
                      value={filters.status}
                      onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                      className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all&quot;
                    >
                      {statuses.map(status => (
                        <option key={status.id} value={status.id} className=&quot;bg-slate-800 text-white&quot;>
                          {status.icon} {status.name}
=======
                      value={_filters.status}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _status: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_statuses.map(status => (
                        <option key={status.id} value={_status.id} className="bg-slate-800 text-white">
                          {_status.icon} {_status.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Price Range Filter */}
                  <div>
                    <label className=&quot;block text-white font-medium mb-2&quot;>Price Range</label>
                    <select
<<<<<<< HEAD
                      value={filters.priceRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                      className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all&quot;
                    >
                      {priceRanges.map(range => (
                        <option key={range.id} value={range.id} className=&quot;bg-slate-800 text-white&quot;>
                          {range.icon} {range.name}
=======
                      value={_filters.priceRange}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _priceRange: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_priceRanges.map(range => (
                        <option key={range.id} value={_range.id} className="bg-slate-800 text-white">
                          {_range.icon} {_range.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </option>
                      ))}
                    </select>
                  </div>

                  {_/* Technology Filter */}
                  <div>
                    <label className=&quot;block text-white font-medium mb-2&quot;>Technology</label>
                    <select
<<<<<<< HEAD
                      value={filters.technology}
                      onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
                      className=&quot;w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all&quot;
                    >
                      {technologies.map(tech => (
                        <option key={tech.id} value={tech.id} className=&quot;bg-slate-800 text-white&quot;>
                          {tech.icon} {tech.name}
=======
                      value={_filters.technology}
                      onChange={_(_e) => setFilters(prev => ({ ...prev, _technology: e.target.value}))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {_technologies.map(tech => (
                        <option key={tech.id} value={_tech.id} className="bg-slate-800 text-white">
                          {_tech.icon} {_tech.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search Results */}
      <section className=&quot;px-6 pb-20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          {/* Results Header */}
          <div className=&quot;mb-8&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-2&quot;>
              {searchTerm ? `Search Results for &quot;${searchTerm}&quot;` : 'All Services'}
            </h2>
            <p className=&quot;text-white/60&quot;>
              {isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
            </p>
          </div>

          {/* Loading State */}
          {isSearching && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center&quot;>
                <div className=&quot;w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin&quot;></div>
=======
      {_/* Search Results */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {_/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {_searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'}
            </h2>
            <p className="text-white/60">
              {_isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {_Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
            </p>
          </div>

          {_/* Loading State */}
          {_isSearching && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <p className=&quot;text-white/60&quot;>Searching our services...</p>
            </div>
          )}

<<<<<<< HEAD
          {/* No Results */}
          {!isSearching && searchTerm && searchResults.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center&quot;>
                <Search className=&quot;w-12 h-12 text-white/40&quot; />
=======
          {_/* No Results */}
          {_!isSearching && searchTerm && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <h3 className=&quot;text-2xl font-semibold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/60 mb-6&quot;>
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}
                className=&quot;px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors&quot;
              >
                Clear All Filters
              </button>
            </div>
          )}

<<<<<<< HEAD
          {/* Search Results */}
          {!isSearching && searchResults.length > 0 && (
            <AnimatePresence mode=&quot;wait&quot;>
=======
          {_/* Search Results */}
          {_!isSearching && searchResults.length > 0 && (_<AnimatePresence mode="wait">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {_searchResults.map((service, _index) => (_<motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _y: 20}}
                    animate={_{ opacity: 1, _y: 0}}
                    transition={_{ duration: 0.5, _delay: index * 0.1}}
                    className={_`group relative ${
                      viewMode === 'grid' 
                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300'}`}
                  >
<<<<<<< HEAD
                    <div className=&quot;absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl&quot; />
                    <div className=&quot;relative z-10&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
                          <service.icon className=&quot;w-8 h-8 text-white&quot; />
                        </div>
                        <div className=&quot;flex flex-col items-end gap-2&quot;>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
=======
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={_`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={_`px-3 py-1 rounded-full text-xs font-medium ${
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'}`}>
                            {_service.status}
                          </span>
<<<<<<< HEAD
                          <span className=&quot;text-xs text-white/40&quot;>{service.technology}</span>
                        </div>
                      </div>
                      
                      <h3 className=&quot;text-xl font-bold mb-3 text-white&quot;>{service.title}</h3>
                      <p className=&quot;text-white/70 leading-relaxed mb-4&quot;>{service.description}</p>
                      
                      {/* Price */}
                      <div className=&quot;mb-4&quot;>
                        <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
                      </div>
                      
                      {/* Features */}
                      <div className=&quot;mb-6&quot;>
                        <h4 className=&quot;text-white font-semibold mb-3 text-sm&quot;>Key Features:</h4>
                        <div className=&quot;space-y-2&quot;>
                          {service.features.map((feature, idx) => (
                            <div key={idx} className=&quot;flex items-center gap-2 text-sm text-white/70&quot;>
                              <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
                              <span>{feature}</span>
=======
                          <span className="text-xs text-white/40">{_service.technology}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{_service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{_service.description}</p>
                      
                      {_/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{_service.price}</span>
                      </div>
                      
                      {_/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                        <div className="space-y-2">
                          {_service.features.map((feature, _idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className=&quot;flex items-center justify-between&quot;>
                        <a
<<<<<<< HEAD
                          href={service.link}
                          className=&quot;flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300&quot;
=======
                          href={_service.link}
                          className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          <span className=&quot;text-sm font-medium&quot;>Learn More</span>
                          <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                        </Link>
                        <a
                          href=&quot;mailto:kleber@ziontechgroup.com&quot;
                          className=&quot;px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105&quot;
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}

<<<<<<< HEAD
          {/* Initial State - Show all services when no search */}
          {!isSearching && !searchTerm && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center&quot;>
                <Search className=&quot;w-12 h-12 text-white/40&quot; />
=======
          {_/* Initial State - Show all services when no search */}
          {_!isSearching && !searchTerm && (_<div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <h3 className=&quot;text-2xl font-semibold text-white mb-2&quot;>Start Your Search</h3>
              <p className=&quot;text-white/60 mb-6&quot;>
                Enter keywords above to find the perfect technology solutions for your business
              </p>
<<<<<<< HEAD
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm text-white/40">Popular searches:</span>
<<<<<<< HEAD
                {['AICybersecurityQuantum ComputingEdge Computing'].map((term) => (
=======
              <div className=&quot;flex flex-wrap justify-center gap-2&quot;>
                <span className=&quot;text-sm text-white/40&quot;>Popular searches:</span>
                {['AI', 'Cybersecurity', 'Quantum Computing', 'Edge Computing'].map((term) => (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                  <button
                    key={term}
                    onClick={() => {
                      setSearchTerm(term),
                      performSearch()
                    }}
                    className=&quot;px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors&quot;
=======
                {['AI', _'Cybersecurity', _'Quantum Computing', _'Edge Computing'].map((term) => (_<button
                    key={term}
                    onClick={_() => {
                      setSearchTerm(term);
                      performSearch();}}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SmartFooter />
    </div>
  )
}