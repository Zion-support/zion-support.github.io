"use client";
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Star, Clock, TrendingUp, Users, Globe, Zap, Brain, Rocket } from 'lucide-react';

const InteractiveContentDiscoveryWidget2026 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Content', icon: <Globe className="w-5 h-5" />, count: 1247 },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 342 },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, count: 89 },
    { id: 'neural', name: 'Neural Interfaces', icon: <Rocket className="w-5 h-5" />, count: 156 },
    { id: 'automation', name: 'Automation', icon: <TrendingUp className="w-5 h-5" />, count: 234 },
    { id: 'future', name: 'Future Tech', icon: <Star className="w-5 h-5" />, count: 426 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary AI Breakthroughs 2026",
      description: "Discover the latest advances in artificial intelligence that are reshaping industries worldwide.",
      category: 'ai',
      readTime: "8 min read",
      views: "12.5K",
      rating: 4.9,
      tags: ["AI", "Machine Learning", "Innovation"],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: The Next Frontier",
      description: "Explore how quantum computers will solve problems that are impossible for classical computers.",
      category: 'quantum',
      readTime: "12 min read",
      views: "8.7K",
      rating: 4.8,
      tags: ["Quantum", "Computing", "Physics"],
      featured: false
    },
    {
      id: 3,
      title: "Neural Interface Technology Guide",
      description: "Learn about direct brain-computer interfaces and their potential applications.",
      category: 'neural',
      readTime: "15 min read",
      views: "6.2K",
      rating: 4.7,
      tags: ["Neural", "Interface", "BCI"],
      featured: true
    },
    {
      id: 4,
      title: "Automation Revolution 2026",
      description: "How intelligent automation is transforming businesses and creating new opportunities.",
      category: 'automation',
      readTime: "10 min read",
      views: "9.1K",
      rating: 4.6,
      tags: ["Automation", "Business", "Efficiency"],
      featured: false
    },
    {
      id: 5,
      title: "Future Technology Predictions 2030",
      description: "Expert insights into the technologies that will dominate the next decade.",
      category: 'future',
      readTime: "20 min read",
      views: "15.3K",
      rating: 4.9,
      tags: ["Future", "Predictions", "Technology"],
      featured: true
    },
    {
      id: 6,
      title: "AI Ethics and Governance",
      description: "Understanding the ethical implications of advanced AI systems and how to govern them.",
      category: 'ai',
      readTime: "14 min read",
      views: "7.8K",
      rating: 4.5,
      tags: ["AI", "Ethics", "Governance"],
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Content</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge insights, breakthrough technologies, and future predictions 
            from industry experts and thought leaders.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2 font-medium">{category.name}</span>
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  item.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      {categories.find(cat => cat.id === item.category)?.icon}
                    </div>
                    <span className="ml-3 text-sm text-gray-400">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{item.views} views</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Read More
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Load More Content
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2026;