import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  Brain,
  Zap,
  Rocket,
  Shield,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Target,
  Lightbulb,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  Grid,
  List,
  Bookmark,
  Share2
} from 'lucide-react';

const InteractiveContentDiscovery2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('trending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedContent, setSelectedContent] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid },
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: Brain },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap },
    { id: 'space-technology', name: 'Space Technology', icon: Rocket },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'automation', name: 'Automation', icon: Cpu },
    { id: 'data-analytics', name: 'Data Analytics', icon: Database },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Network }
  ];

  const filters = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'latest', name: 'Latest', icon: Clock },
    { id: 'popular', name: 'Popular', icon: Users },
    { id: 'featured', name: 'Featured', icon: Star }
  ];

  const contentItems = [
    {
      id: 'ai-consciousness-2026',
      title: 'AI Consciousness Revolution 2026',
      description: 'Breakthrough in artificial general intelligence achieving human-level consciousness and reasoning capabilities.',
      category: 'ai-breakthroughs',
      tags: ['AI', 'Consciousness', 'AGI', 'Revolutionary'],
      price: '$2,999/month',
      marketPrice: '$5,000-15,000/month',
      rating: 4.9,
      views: 15420,
      isTrending: true,
      isFeatured: true,
      isNew: true,
      author: 'Dr. Sarah Chen',
      publishDate: '2026-01-15',
      readTime: '12 min',
      image: '/api/placeholder/400/250',
      link: '/ai-consciousness-2026'
    },
    {
      id: 'quantum-ai-fusion-2026',
      title: 'Quantum-AI Fusion Platform 2026',
      description: 'Revolutionary fusion of quantum computing and artificial intelligence for unprecedented processing power.',
      category: 'quantum-computing',
      tags: ['Quantum', 'AI', 'Fusion', 'Computing'],
      price: '$4,999/month',
      marketPrice: '$10,000-25,000/month',
      rating: 4.8,
      views: 12850,
      isTrending: true,
      isFeatured: false,
      isNew: true,
      author: 'Prof. Michael Rodriguez',
      publishDate: '2026-01-12',
      readTime: '15 min',
      image: '/api/placeholder/400/250',
      link: '/quantum-ai-fusion-2026'
    },
    {
      id: 'autonomous-business-ecosystem',
      title: 'Autonomous Business Ecosystem 2026',
      description: 'Complete business automation with AI-driven decision making and autonomous operations.',
      category: 'automation',
      tags: ['Automation', 'Business', 'AI', 'Ecosystem'],
      price: '$1,999/month',
      marketPrice: '$3,000-8,000/month',
      rating: 4.7,
      views: 9650,
      isTrending: false,
      isFeatured: true,
      isNew: false,
      author: 'Alex Thompson',
      publishDate: '2026-01-10',
      readTime: '10 min',
      image: '/api/placeholder/400/250',
      link: '/autonomous-business-ecosystem-2026'
    },
    {
      id: 'neural-interface-revolution',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interface technology for seamless human-AI interaction.',
      category: 'neural-interfaces',
      tags: ['Neural', 'Interface', 'BCI', 'Revolution'],
      price: '$3,499/month',
      marketPrice: '$5,000-12,000/month',
      rating: 4.9,
      views: 11200,
      isTrending: true,
      isFeatured: true,
      isNew: true,
      author: 'Dr. Elena Vasquez',
      publishDate: '2026-01-08',
      readTime: '18 min',
      image: '/api/placeholder/400/250',
      link: '/neural-interface-revolution-2026'
    },
    {
      id: 'space-technology-platform',
      title: 'Space Technology Platform 2026',
      description: 'Advanced space technology solutions for commercial space operations and exploration.',
      category: 'space-technology',
      tags: ['Space', 'Technology', 'Commercial', 'Exploration'],
      price: '$5,999/month',
      marketPrice: '$10,000-30,000/month',
      rating: 4.6,
      views: 8750,
      isTrending: false,
      isFeatured: false,
      isNew: true,
      author: 'Commander James Wilson',
      publishDate: '2026-01-05',
      readTime: '14 min',
      image: '/api/placeholder/400/250',
      link: '/space-technology-platform-2026'
    },
    {
      id: 'cybersecurity-ai-defense',
      title: 'AI-Powered Cybersecurity Defense 2026',
      description: 'Next-generation cybersecurity with AI-driven threat detection and autonomous defense.',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Defense', 'Threat Detection'],
      price: '$2,499/month',
      marketPrice: '$4,000-10,000/month',
      rating: 4.8,
      views: 10300,
      isTrending: true,
      isFeatured: true,
      isNew: false,
      author: 'Security Expert Team',
      publishDate: '2026-01-03',
      readTime: '11 min',
      image: '/api/placeholder/400/250',
      link: '/cybersecurity-ai-defense-2026'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (selectedFilter) {
      case 'trending':
        return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || b.views - a.views;
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views - a.views;
      case 'featured':
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      default:
        return 0;
    }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive Content Discovery
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore revolutionary technology content with our advanced discovery engine. 
            Find exactly what you need with intelligent filtering and recommendations.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search revolutionary content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {filters.map(filter => (
                  <option key={filter.id} value={filter.id} className="bg-slate-800">
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-gray-300">
            Showing {sortedContent.length} of {contentItems.length} revolutionary content pieces
          </p>
        </motion.div>

        {/* Content Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          }`}
        >
          {sortedContent.map((content, index) => (
            <motion.div
              key={content.id}
              variants={itemVariants}
              className={`group relative ${
                viewMode === 'list' 
                  ? 'flex bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10' 
                  : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300'
              }`}
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {content.isNew && (
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {content.isFeatured && (
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
                {content.isTrending && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    TRENDING
                  </span>
                )}
              </div>

              {viewMode === 'grid' ? (
                <>
                  {/* Grid Layout */}
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                      <span className="text-white font-semibold">{content.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{content.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{content.views.toLocaleString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {content.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-white">{content.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">{content.marketPrice}</span>
                    </div>
                    <span className="text-green-400 text-sm font-medium">Save 70%</span>
                  </div>

                  <Link
                    to={content.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                  >
                    Explore Content
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              ) : (
                <>
                  {/* List Layout */}
                  <div className="w-48 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mr-6 flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <Brain className="w-8 h-8 text-purple-400 mx-auto mb-1" />
                      <span className="text-white text-sm font-semibold">{content.category}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{content.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{content.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{content.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {content.title}
                    </h3>

                    <p className="text-gray-300 mb-3">
                      {content.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <span className="text-xl font-bold text-white">{content.price}</span>
                          <span className="text-gray-400 text-sm line-through ml-2">{content.marketPrice}</span>
                        </div>
                        <span className="text-green-400 text-sm font-medium">Save 70%</span>
                      </div>
                      <Link
                        to={content.link}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {sortedContent.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Load More Content
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveContentDiscovery2026;