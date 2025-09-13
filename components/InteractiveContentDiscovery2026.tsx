'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  Star,
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  Tag,
  Calendar,
  User,
  Zap,
  Brain,
  Cpu,
  Globe
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, count: 1247 },
    { id: 'ai-innovations', name: 'AI Innovations', icon: Brain, count: 342 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu, count: 156 },
    { id: 'automation', name: 'Automation', icon: Zap, count: 289 },
    { id: 'future-tech', name: 'Future Tech', icon: Globe, count: 198 },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, count: 123 },
    { id: 'case-studies', name: 'Case Studies', icon: TrendingUp, count: 89 },
    { id: 'research', name: 'Research', icon: Search, count: 50 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution: Direct Brain-Computer Integration',
      description: 'Explore the latest breakthroughs in neural interface technology that enable seamless human-AI collaboration.',
      category: 'ai-innovations',
      type: 'article',
      readTime: '12 min',
      views: 15420,
      likes: 892,
      tags: ['neural-interface', 'ai', 'brain-computer', 'innovation'],
      author: 'Dr. Sarah Chen',
      date: '2026-01-15',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum Supremacy in Practice: Real-World Applications',
      description: 'Discover how quantum computing is solving complex problems in cryptography, drug discovery, and climate modeling.',
      category: 'quantum-computing',
      type: 'video',
      readTime: '25 min',
      views: 8930,
      likes: 456,
      tags: ['quantum-computing', 'supremacy', 'applications', 'cryptography'],
      author: 'Prof. Michael Rodriguez',
      date: '2026-01-14',
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'Hyper-Intelligent Workflows: The Future of Business Automation',
      description: 'Learn how AI-powered automation is transforming business processes with unprecedented efficiency gains.',
      category: 'automation',
      type: 'tutorial',
      readTime: '18 min',
      views: 12300,
      likes: 678,
      tags: ['automation', 'workflows', 'ai', 'business'],
      author: 'Emily Watson',
      date: '2026-01-13',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Extended Reality Revolution: Blending Physical and Digital Worlds',
      description: 'Explore how XR technology is creating immersive experiences that transform how we work and interact.',
      category: 'future-tech',
      type: 'article',
      readTime: '15 min',
      views: 6780,
      likes: 234,
      tags: ['xr', 'virtual-reality', 'augmented-reality', 'immersive'],
      author: 'Alex Thompson',
      date: '2026-01-12',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Edge AI Computing: Processing Intelligence at the Source',
      description: 'Understand how edge AI is enabling real-time processing and privacy-preserving artificial intelligence.',
      category: 'ai-innovations',
      type: 'research',
      readTime: '22 min',
      views: 9450,
      likes: 345,
      tags: ['edge-ai', 'real-time', 'privacy', 'processing'],
      author: 'Dr. Lisa Park',
      date: '2026-01-11',
      featured: true,
      trending: true
    },
    {
      id: 6,
      title: 'Synthetic Biology Integration: Sustainable Technology Solutions',
      description: 'Discover how biological computing systems are creating eco-friendly technology solutions for the future.',
      category: 'future-tech',
      type: 'case-study',
      readTime: '20 min',
      views: 4560,
      likes: 189,
      tags: ['synthetic-biology', 'sustainable', 'bio-computing', 'eco-friendly'],
      author: 'Dr. James Wilson',
      date: '2026-01-10',
      featured: false,
      trending: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'recent':
        return new Date(b.date) - new Date(a.date);
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'tutorial': return BookOpen;
      case 'research': return Search;
      case 'case-study': return TrendingUp;
      default: return BookOpen;
    }
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Grid;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Discovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of cutting-edge content, research, and insights 
            powered by advanced AI-driven discovery and recommendation systems.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="trending">Trending</option>
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }
        >
          <AnimatePresence>
            {sortedContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = getCategoryIcon(item.category);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Trending Badge */}
                  {item.trending && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </div>
                    </div>
                  )}

                  {/* Content Image/Icon */}
                  <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'h-48'} bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center`}>
                    <div className="text-center">
                      <CategoryIcon className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm text-purple-600 font-medium">{item.type}</div>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <TypeIcon className="w-4 h-4 mr-2" />
                        {item.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {item.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {item.likes}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Load More Content
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;