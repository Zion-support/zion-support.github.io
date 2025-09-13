'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Zap, Users, Award } from 'lucide-react';

const UltimateContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: <Zap className="w-4 h-4" /> },
    { id: 'ai', name: 'AI Solutions', icon: <Users className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Award className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough",
      description: "Revolutionary AI solutions transforming industries worldwide",
      category: "ai",
      rating: 5,
      readTime: "5 min read",
      trending: true,
      href: "/ai-2025-ultimate-breakthrough"
    },
    {
      id: 2,
      title: "Advanced Automation Solutions",
      description: "Next-generation automation tools for enterprise efficiency",
      category: "automation",
      rating: 4.8,
      readTime: "7 min read",
      trending: false,
      href: "/advanced-automation-solutions-2025"
    },
    {
      id: 3,
      title: "Performance Analytics Dashboard",
      description: "Real-time insights and monitoring for optimal performance",
      category: "analytics",
      rating: 4.9,
      readTime: "4 min read",
      trending: true,
      href: "/performance-analytics-2025"
    },
    {
      id: 4,
      title: "Quantum Computing Revolution",
      description: "Exploring the future of quantum-powered solutions",
      category: "ai",
      rating: 4.7,
      readTime: "8 min read",
      trending: false,
      href: "/quantum-computing-2025"
    }
  ];

  const filteredContent = featuredContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 border border-purple-500/20">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Discover Amazing Content
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our curated collection of AI solutions, automation tools, and cutting-edge technology insights
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search content, solutions, or topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          {isSearching && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.icon}
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${searchQuery}-${selectedCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredContent.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Trending Badge */}
              {item.trending && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-xs font-medium text-white">Trending</span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{item.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{item.readTime}</span>
                  </div>
                </div>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
          <p className="text-gray-300">Try adjusting your search terms or filters</p>
        </motion.div>
      )}

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          View All Content
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2025;