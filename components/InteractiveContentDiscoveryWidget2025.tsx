'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight,
  Brain,
  Cpu,
  Zap,
  Shield,
  Globe,
  Rocket,
  Database,
  Cloud,
  BarChart3,
  Users,
  Lock,
  CheckCircle,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-automation', name: 'AI Automation', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Cpu, color: 'from-blue-500 to-indigo-500' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: Zap, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'cloud-solutions', name: 'Cloud Solutions', icon: Cloud, color: 'from-sky-500 to-blue-500' },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-yellow-500 to-orange-500' },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Users, color: 'from-indigo-500 to-purple-500' }
  ];

  const trends = [
    { id: 'all', name: 'All Trends', icon: TrendingUp },
    { id: 'trending', name: 'Trending Now', icon: TrendingUp },
    { id: 'new', name: 'Just Released', icon: Sparkles },
    { id: 'popular', name: 'Most Popular', icon: Star },
    { id: 'recent', name: 'Recently Updated', icon: Clock }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Technology Showcase',
      description: 'Discover revolutionary AI technologies transforming industries',
      category: 'ai-automation',
      trend: 'trending',
      rating: 4.9,
      views: '12.5K',
      readTime: '8 min',
      image: '/api/placeholder/400/200',
      link: '/ai-2025-ultimate-technology-showcase',
      tags: ['AI', 'Automation', 'Innovation', '2025']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs 2025',
      description: 'Next-generation quantum solutions for complex problem solving',
      category: 'quantum-computing',
      trend: 'new',
      rating: 4.8,
      views: '8.2K',
      readTime: '12 min',
      image: '/api/placeholder/400/200',
      link: '/quantum-computing-2025',
      tags: ['Quantum', 'Computing', 'Breakthrough', '2025']
    },
    {
      id: 3,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces for enhanced capabilities',
      category: 'neural-interfaces',
      trend: 'popular',
      rating: 4.7,
      views: '15.3K',
      readTime: '10 min',
      image: '/api/placeholder/400/200',
      link: '/neural-interface-revolution-2026',
      tags: ['Neural', 'Interface', 'BCI', 'Future']
    },
    {
      id: 4,
      title: 'Advanced Cybersecurity Solutions',
      description: 'AI-driven security protecting digital assets',
      category: 'cybersecurity',
      trend: 'trending',
      rating: 4.9,
      views: '9.7K',
      readTime: '6 min',
      image: '/api/placeholder/400/200',
      link: '/advanced-security-solutions',
      tags: ['Security', 'AI', 'Protection', 'Cybersecurity']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure 2025',
      description: 'Scalable cloud solutions for modern enterprises',
      category: 'cloud-solutions',
      trend: 'recent',
      rating: 4.6,
      views: '6.8K',
      readTime: '7 min',
      image: '/api/placeholder/400/200',
      link: '/cloud-infrastructure-solutions-2025',
      tags: ['Cloud', 'Infrastructure', 'Scalable', 'Enterprise']
    },
    {
      id: 6,
      title: 'Data Analytics Mastery',
      description: 'Advanced analytics for data-driven decisions',
      category: 'data-analytics',
      trend: 'popular',
      rating: 4.8,
      views: '11.2K',
      readTime: '9 min',
      image: '/api/placeholder/400/200',
      link: '/data-analytics-mastery-2025',
      tags: ['Analytics', 'Data', 'Insights', 'Business']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTrend = selectedTrend === 'all' || item.trend === selectedTrend;
    
    return matchesSearch && matchesCategory && matchesTrend;
  });

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const selectedTrendData = trends.find(trend => trend.id === selectedTrend);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Interactive Content Discovery
            </h2>
            <p className="text-gray-300">
              Find the perfect content tailored to your interests and needs
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ChevronDown className={`w-5 h-5 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search content, tags, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Trend Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Trend</label>
                <div className="flex flex-wrap gap-2">
                  {trends.map((trend) => {
                    const Icon = trend.icon;
                    return (
                      <button
                        key={trend.id}
                        onClick={() => setSelectedTrend(trend.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedTrend === trend.id
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{trend.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategoryData && selectedCategory !== 'all' && (
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <selectedCategoryData.icon className="w-4 h-4 text-white" />
              <span className="text-white text-sm">{selectedCategoryData.name}</span>
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {selectedTrendData && selectedTrend !== 'all' && (
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <selectedTrendData.icon className="w-4 h-4 text-white" />
              <span className="text-white text-sm">{selectedTrendData.name}</span>
              <button
                onClick={() => setSelectedTrend('all')}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing <span className="text-white font-semibold">{filteredContent.length}</span> results
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-6">
                  {/* Image Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">🚀</div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={item.link}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-4">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTrend('all');
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveContentDiscoveryWidget2025;