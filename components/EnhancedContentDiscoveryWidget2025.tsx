"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search
  Filter
  TrendingUp
  Clock
  Star
  Eye,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  ArrowRight,
  ChevronDown,
  X,
  Brain,
  Zap,
  Rocket,
  Target,
  Users,
  Award,
  BarChart3,
  Cpu,
  Shield,
  Globe
} from 'lucide-react';

const EnhancedContentDiscoveryWidget2025 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [sortBysetSortBy] = useState('trending');
  const [showFiltersetShowFilters] = useState(false);

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: Globecount: 1247 },
    { id: ''breakthroughs', 'name: 'AI 'Breakthroughs', 'icon: Braincount: 156 },
    { id: ''solutions', 'name: 'Enterprise 'Solutions', 'icon: Targetcount: 89 },
    { id: ''predictions', 'name: 'Future 'Predictions', 'icon: Rocketcount: 67 },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'icon: BarChart3count: 234 },
    { id: ''tutorials', 'name: ''Tutorials', 'icon: Bookmarkcount: 189 },
    { id: ''tools', 'name: 'AI 'Tools', 'icon: Cpucount: 312 },
    { id: ''security', 'name: ''Security', 'icon: Shieldcount: 45 }
  ];

  const sortOptions = [
    { id: ''trending', 'name: ''Trending', 'icon: TrendingUp },
    { id: ''newest', 'name: ''Newest', 'icon: Clock },
    { id: ''popular', 'name: 'Most 'Popular', 'icon: Star },
    { id: ''views', 'name: 'Most 'Viewed', 'icon: Eye }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Ultimate Content Revolution: Revolutionary Breakthroughs",
      description: "Discover the most advanced AI technologiesbreakthrough innovationsand future predictions that are reshaping industries worldwide.",
      category: "breakthroughs",
      type: "blog",
      readTime: "15 min",
      views: 2400,
      likes: 1200,
      comments: 89,
      rating: 4.9,
      tags: ["AI 2025"Revolutionary AI"Quantum Computing"Breakthroughs"],
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "5,000% ROI Success Story: Fortune 500 AI Transformation",
      description: "How a Fortune 500 company achieved 5,000% ROI through our Ultimate Content Revolution AI implementation.",
      category: "case-studies",
      type: "case-study",
      readTime: "12 min",
      views: 1800,
      likes: 950,
      comments: 45,
      rating: 4.8,
      tags: ["ROI"Fortune 500"AI Transformation"Success Story"],
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Quantum-Neural Fusion: The Next Frontier in AI",
      description: "Explore the breakthrough integration of quantum computing with neural networks achieving 10,000x processing speed.",
      category: "breakthroughs",
      type: "blog",
      readTime: "8 min",
      views: 3200,
      likes: 1800,
      comments: 120,
      rating: 4.9,
      tags: ["Quantum Computing"Neural Networks"AI Breakthroughs"],
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Autonomous Business Operations: 85% Cost Reduction",
      description: "Self-managing AI systems that reduce operational costs by 85% while increasing efficiency across all business units.",
      category: "solutions",
      type: "guide",
      readTime: "10 min",
      views: 1500,
      likes: 800,
      comments: 67,
      rating: 4.7,
      tags: ["Autonomous Operations"Cost Reduction"Business Automation"],
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "AI 2026-2030: Future Technology Predictions",
      description: "Expert insights into the next decade of technological advancement and AI evolution.",
      category: "predictions",
      type: "prediction",
      readTime: "20 min",
      views: 4100,
      likes: 2100,
      comments: 156,
      rating: 4.8,
      tags: ["Future Predictions"AI 2026"Technology Trends"],
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Consciousness-Level AI: Human-Like Reasoning",
      description: "AI systems with human-like reasoning and emotional intelligence capabilities transforming human-AI interaction.",
      category: "breakthroughs",
      type: "blog",
      readTime: "12 min",
      views: 2800,
      likes: 1400,
      comments: 98,
      rating: 4.9,
      tags: ["Consciousness AI"Human-like AI"Emotional Intelligence"],
      featured: false,
      image: "/api/placeholder/400/200"
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return Bookmark;
      case 'case-study': return BarChart3;
      case 'guide': return Target;
      case 'prediction': return Rocket;
      default: return Bookmark;
    }
  };

  const getContentTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'text-blue-400';
      case 'case-study': return 'text-green-400';
      case 'guide': return 'text-purple-400';
      case 'prediction': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore breakthrough innovationsenterprise solutionsand future predictions 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search contentagsor topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors duration-200"
              >
                <Filter className="h-5 w-5" />
                <span>Categories</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setShowFilters(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                            selectedCategory === category.id
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <category.icon className="h-4 w-4" />
                            <span>{category.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{category.count}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sort Options */}
            <div className="flex gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    sortBy === option.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <option.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredContent.map((itemindex) => {
              const TypeIcon = getContentTypeIcon(item.type);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  className={`group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 ${
                    item.featured ? 'ring-2 ring-blue-500/30' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      Featured
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TypeIcon className={`h-5 w-5 ${getContentTypeColor(item.type)}`} />
                        <span className="text-sm text-gray-400 capitalize">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{item.rating}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(03).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full hover:bg-white/20 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{item.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/${item.type === 'case-study' ? 'case-studies' : 'blog'}/${item.title.toLowerCase().replace(/[^a-z0-9]+/g'-').replace(/(^-|-$)/g', ')}`}
                      className="group/btn inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <span>Load More Content</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentDiscoveryWidget2025;
