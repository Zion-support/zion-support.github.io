'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, Sparkles, ArrowRight, BookOpen, Video, FileText, Users } from 'lucide-react';

const UltimateContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟', count: 1247 },
    { id: 'ai-research', name: 'AI Research', icon: '🧠', count: 342 },
    { id: 'tutorials', name: 'Tutorials', icon: '📚', count: 189 },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', count: 156 },
    { id: 'tools', name: 'Tools & Resources', icon: '🛠️', count: 203 },
    { id: 'news', name: 'Industry News', icon: '📰', count: 357 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025: The Consciousness Revolution',
      description: 'Deep dive into artificial general intelligence and its implications for humanity',
      category: 'ai-research',
      type: 'article',
      readTime: '12 min',
      views: '2.3k',
      rating: 4.9,
      featured: true,
      tags: ['AGI', 'Consciousness', 'Future Tech'],
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      thumbnail: '🧠'
    },
    {
      id: 2,
      title: 'Build Your First AI Assistant: Complete Guide',
      description: 'Step-by-step tutorial to create a production-ready AI assistant from scratch',
      category: 'tutorials',
      type: 'tutorial',
      readTime: '45 min',
      views: '4.2k',
      rating: 4.8,
      featured: true,
      tags: ['Tutorial', 'AI Assistant', 'Implementation'],
      author: 'Alex Rodriguez',
      publishDate: '2025-01-14',
      thumbnail: '🤖'
    },
    {
      id: 3,
      title: 'Fortune 500 AI Transformation Success',
      description: 'How a major corporation achieved $50M savings through strategic AI implementation',
      category: 'case-studies',
      type: 'case-study',
      readTime: '22 min',
      views: '2.8k',
      rating: 4.9,
      featured: false,
      tags: ['Case Study', 'ROI', 'Enterprise'],
      author: 'Maria Gonzalez',
      publishDate: '2025-01-13',
      thumbnail: '💼'
    },
    {
      id: 4,
      title: 'Quantum-Neural Fusion: The Next Frontier',
      description: 'Exploring the convergence of quantum computing and neural networks',
      category: 'ai-research',
      type: 'article',
      readTime: '18 min',
      views: '1.8k',
      rating: 4.7,
      featured: false,
      tags: ['Quantum AI', 'Neural Networks', 'Research'],
      author: 'Dr. James Wilson',
      publishDate: '2025-01-12',
      thumbnail: '⚛️'
    },
    {
      id: 5,
      title: 'Advanced Prompt Engineering Mastery',
      description: 'Professional techniques for optimal AI interactions and prompt optimization',
      category: 'tutorials',
      type: 'tutorial',
      readTime: '30 min',
      views: '3.7k',
      rating: 4.8,
      featured: false,
      tags: ['Prompt Engineering', 'Skills', 'Optimization'],
      author: 'David Kim',
      publishDate: '2025-01-11',
      thumbnail: '⚡'
    },
    {
      id: 6,
      title: 'AI Tools Showcase: 2025 Edition',
      description: 'Comprehensive review of the most powerful AI tools and platforms available',
      category: 'tools',
      type: 'review',
      readTime: '25 min',
      views: '3.1k',
      rating: 4.6,
      featured: true,
      tags: ['Tools', 'Review', '2025'],
      author: 'Lisa Thompson',
      publishDate: '2025-01-10',
      thumbnail: '🛠️'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText className="w-4 h-4" />;
      case 'tutorial': return <BookOpen className="w-4 h-4" />;
      case 'case-study': return <Users className="w-4 h-4" />;
      case 'review': return <Star className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-200 font-medium">Ultimate Content Discovery</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most relevant AI insights, tutorials, and resources tailored to your interests and expertise level.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Highest Rated</option>
                <option value="views">Most Viewed</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full ${
                  item.featured ? 'ring-2 ring-indigo-500/50' : ''
                }`}>
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Thumbnail and Type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.thumbnail}</div>
                    <div className="flex items-center text-indigo-400 text-sm">
                      {getTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type.replace('-', ' ')}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {item.views}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {item.rating}
                    </div>
                  </div>

                  {/* Author and Date */}
                  <div className="text-xs text-gray-500 mb-4">
                    By {item.author} • {new Date(item.publishDate).toLocaleDateString()}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Link
                      href={`/content/${item.id}`}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-300 mb-6">
              Our content library is constantly growing. Request specific content or get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request Content
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-indigo-500 text-indigo-300 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Get Recommendations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentDiscoveryWidget2025;