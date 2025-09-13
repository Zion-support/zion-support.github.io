'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Clock, Users, ArrowRight, Sparkles, Zap, Brain, Globe } from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('trending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai', name: 'AI Solutions', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'automation', name: 'Automation', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
    { id: 'security', name: 'Security', icon: Star, color: 'from-indigo-500 to-purple-500' }
  ];

  const trends = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'latest', name: 'Latest', icon: Clock },
    { id: 'popular', name: 'Popular', icon: Users },
    { id: 'featured', name: 'Featured', icon: Star }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Interface Revolution 2025',
      description: 'Direct brain-computer interfaces enabling unprecedented human-AI collaboration',
      category: 'ai',
      trend: 'trending',
      rating: 4.9,
      views: '12.5K',
      readTime: '8 min',
      featured: true,
      tags: ['AI', 'Neural Networks', 'Revolutionary']
    },
    {
      id: 2,
      title: 'Quantum Neural Networks',
      description: 'Hybrid quantum-classical neural networks for superior performance',
      category: 'quantum',
      trend: 'latest',
      rating: 4.8,
      views: '8.2K',
      readTime: '12 min',
      featured: true,
      tags: ['Quantum', 'Neural Networks', 'Advanced']
    },
    {
      id: 3,
      title: 'Hyper-Automation Platform',
      description: 'End-to-end business process automation with AI',
      category: 'automation',
      trend: 'popular',
      rating: 4.7,
      views: '15.3K',
      readTime: '6 min',
      featured: false,
      tags: ['Automation', 'AI', 'Business']
    },
    {
      id: 4,
      title: 'AI-Powered Threat Detection',
      description: 'Real-time threat detection using advanced AI',
      category: 'security',
      trend: 'featured',
      rating: 4.9,
      views: '9.7K',
      readTime: '10 min',
      featured: true,
      tags: ['Security', 'AI', 'Threat Detection']
    },
    {
      id: 5,
      title: 'Quantum Cryptography Solutions',
      description: 'Unbreakable encryption using quantum principles',
      category: 'quantum',
      trend: 'trending',
      rating: 4.6,
      views: '6.8K',
      readTime: '14 min',
      featured: false,
      tags: ['Quantum', 'Cryptography', 'Security']
    },
    {
      id: 6,
      title: 'Autonomous Business Systems',
      description: 'Self-managing AI systems that optimize operations',
      category: 'ai',
      trend: 'latest',
      rating: 4.8,
      views: '11.2K',
      readTime: '9 min',
      featured: false,
      tags: ['AI', 'Autonomous', 'Business']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTrend = selectedTrend === 'trending' || item.trend === selectedTrend;
    
    return matchesSearch && matchesCategory && matchesTrend;
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-purple-300 font-medium">Interactive Discovery</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive library of AI, quantum computing, and automation solutions 
            with our intelligent discovery system.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div className="max-w-4xl mx-auto mb-12" variants={itemVariants}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, technologies, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="font-medium">{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Trend Filters */}
            <div>
              <h3 className="text-white font-semibold mb-4">Sort By</h3>
              <div className="flex flex-wrap gap-3">
                {trends.map((trend) => {
                  const Icon = trend.icon;
                  return (
                    <motion.button
                      key={trend.id}
                      onClick={() => setSelectedTrend(trend.id)}
                      className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedTrend === trend.id
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span className="font-medium">{trend.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={itemVariants}>
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                  item.featured ? 'ring-2 ring-purple-500/50' : ''
                }`}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                {item.featured && (
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-yellow-400 text-sm font-medium">Featured</span>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
                  <span className="font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div className="text-center mt-8" variants={itemVariants}>
          <p className="text-gray-400">
            Showing {filteredContent.length} of {contentItems.length} results
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;