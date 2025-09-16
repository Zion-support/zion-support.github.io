"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain
  Zap
  Rocket
  Target
  Users
  TrendingUp
  Shield
  Globe,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  BookOpen,
  Lightbulb,
  Cpu,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  Star,
  Award,
  CheckCircle,
  Sparkles,
  Crown,
  Gem,
  Eye,
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Network,
  Code,
  Terminal,
  Settings,
  Wrench,
  Tool
} from 'lucide-react';

const AIInnovationHub2025 = () => {
  const [activeCategorysetActiveCategory] = useState('ai-core');
  const [viewModesetViewMode] = useState('grid');
  const [searchQuerysetSearchQuery] = useState('');
  const [isVisiblesetIsVisible] = useState(false);
  const [hoveredItemsetHoveredItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = {
    'ai-core': {
      title: 'AI Core Technologies',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      description: 'Fundamental AI technologies and algorithms'
    },
    'business-ai': {
      title: 'Business AI Solutions',
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      description: 'AI solutions for enterprise and business applications'
    },
    'future-tech': {
      title: 'Future Technologies',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Next-generation technologies and innovations'
    },
    'tools-utilities': {
      title: 'AI Tools & Utilities',
      icon: Wrench,
      color: 'from-cyan-600 to-blue-600',
      description: 'Practical AI tools and utility applications'
    }
  };

  const innovations = {
    'ai-core': [
      {
        id: 1,
        title: 'Neural Architecture Search (NAS)',
        description: 'Automated discovery of optimal neural network architectures',
        category: 'Machine Learning',
        difficulty: 'Advanced',
        rating: 4.9,
        downloads: '50K+',
        status: 'Featured',
        icon: Network,
        color: 'from-purple-500 to-pink-500',
        features: ['Auto-'architecture', 'Performance 'optimization', 'Multi-task learning'],
        price: 'Free',
        lastUpdated: '2 days ago'
      },
      {
        id: 2,
        title: 'Quantum Neural Networks',
        description: 'Hybrid quantum-classical neural networks for enhanced processing',
        category: 'Quantum AI',
        difficulty: 'Expert',
        rating: 4.8,
        downloads: '25K+',
        status: 'New',
        icon: Cpu,
        color: 'from-blue-500 to-cyan-500',
        features: ['Quantum 'processing', 'Exponential 'speedup', 'Quantum advantage'],
        price: 'Premium',
        lastUpdated: '1 week ago'
      },
      {
        id: 3,
        title: 'Federated Learning Framework',
        description: 'Distributed machine learning with privacy preservation',
        category: 'Privacy AI',
        difficulty: 'Intermediate',
        rating: 4.7,
        downloads: '75K+',
        status: 'Popular',
        icon: Shield,
        color: 'from-green-500 to-emerald-500',
        features: ['Privacy-'first', 'Distributed 'training', 'Secure aggregation'],
        price: 'Free',
        lastUpdated: '3 days ago'
      },
      {
        id: 4,
        title: 'Transformer Optimization Engine',
        description: 'Advanced optimization techniques for transformer models',
        category: 'NLP',
        difficulty: 'Advanced',
        rating: 4.9,
        downloads: '100K+',
        status: 'Featured',
        icon: Layers,
        color: 'from-orange-500 to-red-500',
        features: ['Memory 'efficient', 'Faster 'inference', 'Scalable training'],
        price: 'Free',
        lastUpdated: '1 day ago'
      }
    ],
    'business-ai': [
      {
        id: 5,
        title: 'Enterprise AI Platform',
        description: 'Complete AI platform for enterprise deployment and management',
        category: 'Enterprise',
        difficulty: 'Intermediate',
        rating: 4.8,
        downloads: '30K+',
        status: 'Featured',
        icon: Building,
        color: 'from-indigo-500 to-purple-500',
        features: ['Enterprise 'ready', 'Scalable 'deployment', 'Full management'],
        price: 'Enterprise',
        lastUpdated: '5 days ago'
      },
      {
        id: 6,
        title: 'AI Customer Service Suite',
        description: 'Intelligent customer service automation with human-like interactions',
        category: 'Customer Service',
        difficulty: 'Beginner',
        rating: 4.6,
        downloads: '80K+',
        status: 'Popular',
        icon: MessageCircle,
        color: 'from-teal-500 to-cyan-500',
        features: ['Natural 'language', 'Multi-'channel', 'Sentiment analysis'],
        price: 'Standard',
        lastUpdated: '2 days ago'
      },
      {
        id: 7,
        title: 'Predictive Analytics Engine',
        description: 'Advanced forecasting and predictive modeling for business insights',
        category: 'Analytics',
        difficulty: 'Advanced',
        rating: 4.9,
        downloads: '45K+',
        status: 'Featured',
        icon: BarChart3,
        color: 'from-pink-500 to-rose-500',
        features: ['Time 'series', 'Anomaly 'detection', 'Real-time predictions'],
        price: 'Premium',
        lastUpdated: '1 week ago'
      }
    ],
    'future-tech': [
      {
        id: 8,
        title: 'Edge AI Computing',
        description: 'Distributed AI processing at the edge for ultra-low latency',
        category: 'Edge Computing',
        difficulty: 'Advanced',
        rating: 4.7,
        downloads: '35K+',
        status: 'New',
        icon: Cloud,
        color: 'from-sky-500 to-blue-500',
        features: ['Low 'latency', 'Offline 'capable', 'Resource efficient'],
        price: 'Premium',
        lastUpdated: '3 days ago'
      },
      {
        id: 9,
        title: 'Augmented Reality AI',
        description: 'AI-powered AR experiences with real-time object recognition',
        category: 'AR/VR',
        difficulty: 'Expert',
        rating: 4.8,
        downloads: '20K+',
        status: 'Beta',
        icon: Eye,
        color: 'from-violet-500 to-purple-500',
        features: ['Real-time 'AR', 'Object 'tracking', 'Spatial mapping'],
        price: 'Premium',
        lastUpdated: '1 week ago'
      }
    ],
    'tools-utilities': [
      {
        id: 10,
        title: 'AI Model Optimizer',
        description: 'Automated model compression and optimization tools',
        category: 'Optimization',
        difficulty: 'Intermediate',
        rating: 4.6,
        downloads: '60K+',
        status: 'Popular',
        icon: Settings,
        color: 'from-amber-500 to-orange-500',
        features: ['Model 'compression', 'Quantization'Pruning'],
        price: 'Free',
        lastUpdated: '4 days ago'
      },
      {
        id: 11,
        title: 'AI Code Generator',
        description: 'Generate production-ready code from natural language descriptions',
        category: 'Code Generation',
        difficulty: 'Beginner',
        rating: 4.5,
        downloads: '90K+',
        status: 'Popular',
        icon: Code,
        color: 'from-emerald-500 to-green-500',
        features: ['Natural 'language', 'Multi-'language', 'Code review'],
        price: 'Free',
        lastUpdated: '2 days ago'
      }
    ]
  };

  const filteredInnovations = innovations[activeCategory].filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Featured': return 'from-purple-500 to-pink-500';
      case 'New': return 'from-green-500 to-emerald-500';
      case 'Popular': return 'from-blue-500 to-cyan-500';
      case 'Beta': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Innovation Hub
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              2025 Edition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discoverexploreand implement cutting-edge AI technologies that are shaping the future
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(categories).map(([keycategory]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5delay: 0.4 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          {filteredInnovations.map((itemindex) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`group cursor-pointer ${
                viewMode === 'list' ? 'flex items-center' : ''
              }`}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} 
                ${hoveredItem === item.id ? 'scale-105 shadow-2xl' : 'shadow-lg'} 
                transition-all duration-300 ${viewMode === 'list' ? 'flex-1' : 'h-full'}`}>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>
                  {item.status}
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>
                  {/* Icon */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                    <div className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm">{item.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.slice(02).map((featureidx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                          +{item.features.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                      <span className={getDifficultyColor(item.difficulty)}>{item.difficulty}</span>
                      <span>{item.downloads} downloads</span>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{item.rating}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">{item.price}</div>
                        <div className="text-xs text-gray-300">{item.lastUpdated}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </button>
                      <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">
            <RefreshCw className="w-5 h-5 mr-2" />
            Load More Innovations
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;