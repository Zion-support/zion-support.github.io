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
  Zap,
  Globe,
  Rocket,
  Shield,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Sparkles,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: Sparkles, count: 156 },
    { id: 'breakthroughs', name: 'AI Breakthroughs', icon: Brain, count: 42 },
    { id: 'solutions', name: 'Enterprise Solutions', icon: Target, count: 38 },
    { id: 'case-studies', name: 'Case Studies', icon: CheckCircle, count: 28 },
    { id: 'tutorials', name: 'Tutorials', icon: Lightbulb, count: 24 },
    { id: 'tools', name: 'AI Tools', icon: Zap, count: 18 },
    { id: 'predictions', name: 'Future Predictions', icon: TrendingUp, count: 6 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Quantum-Neural Fusion: The Next Revolution",
      description: "Discover how quantum computing is merging with neural networks to create unprecedented AI capabilities",
      category: 'breakthroughs',
      type: 'article',
      readTime: '8 min read',
      trending: true,
      featured: true,
      tags: ['quantum', 'neural networks', 'AI', 'breakthrough'],
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      views: 12500,
      rating: 4.9
    },
    {
      id: 2,
      title: "Enterprise AI Implementation Guide 2025",
      description: "Complete roadmap for implementing AI solutions in large organizations with proven ROI strategies",
      category: 'solutions',
      type: 'guide',
      readTime: '15 min read',
      trending: true,
      featured: false,
      tags: ['enterprise', 'implementation', 'ROI', 'strategy'],
      author: 'Michael Rodriguez',
      date: '2025-01-14',
      views: 8900,
      rating: 4.8
    },
    {
      id: 3,
      title: "Fortune 500 AI Transformation Case Study",
      description: "How a global manufacturing company achieved 2,500% ROI through comprehensive AI implementation",
      category: 'case-studies',
      type: 'case-study',
      readTime: '12 min read',
      trending: false,
      featured: true,
      tags: ['case study', 'ROI', 'manufacturing', 'transformation'],
      author: 'Zion Tech Team',
      date: '2025-01-13',
      views: 15600,
      rating: 4.9
    },
    {
      id: 4,
      title: "Building Autonomous AI Systems Tutorial",
      description: "Step-by-step guide to creating self-evolving AI systems that improve over time",
      category: 'tutorials',
      type: 'tutorial',
      readTime: '20 min read',
      trending: false,
      featured: false,
      tags: ['tutorial', 'autonomous', 'AI systems', 'development'],
      author: 'Alex Thompson',
      date: '2025-01-12',
      views: 6700,
      rating: 4.7
    },
    {
      id: 5,
      title: "AI Tools Showcase: Top 50 for 2025",
      description: "Comprehensive review of the most powerful AI tools transforming businesses this year",
      category: 'tools',
      type: 'showcase',
      readTime: '25 min read',
      trending: true,
      featured: false,
      tags: ['tools', 'showcase', 'review', 'business'],
      author: 'Tech Review Team',
      date: '2025-01-11',
      views: 22100,
      rating: 4.8
    },
    {
      id: 6,
      title: "AI Predictions 2030: The Singularity Approaches",
      description: "Expert predictions on AI development and its impact on society over the next 5 years",
      category: 'predictions',
      type: 'prediction',
      readTime: '18 min read',
      trending: true,
      featured: true,
      tags: ['predictions', '2030', 'singularity', 'future'],
      author: 'Dr. Elena Martinez',
      date: '2025-01-10',
      views: 18900,
      rating: 4.9
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
        return b.trending - a.trending || b.views - a.views;
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || Sparkles;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      article: 'bg-blue-100 text-blue-800',
      guide: 'bg-green-100 text-green-800',
      'case-study': 'bg-purple-100 text-purple-800',
      tutorial: 'bg-orange-100 text-orange-800',
      showcase: 'bg-pink-100 text-pink-800',
      prediction: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6"
          >
            <Search className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI insights, tutorials, case studies, and breakthrough innovations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, tags, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="trending">Trending</option>
              <option value="newest">Newest</option>
              <option value="rating">Highest Rated</option>
              <option value="views">Most Viewed</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
            </button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {category.name}
                        <span className="ml-2 text-xs opacity-75">({category.count})</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${
                        item.featured 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {React.createElement(getCategoryIcon(item.category), { className: "w-5 h-5" })}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.trending && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {item.rating}
                    </div>
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {item.author}</span>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/content/${item.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveContentDiscoveryWidget2025;