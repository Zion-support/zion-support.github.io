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
  Eye, 
  BookOpen,
  Play,
  Download,
  Share2,
  Heart,
  ChevronRight,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Award,
  Users,
  Globe
} from 'lucide-react';

const ContentDiscoveryWidget2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Content', icon: <BookOpen className="w-4 h-4" />, count: 156 },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: <Sparkles className="w-4 h-4" />, count: 42 },
    { id: 'predictions', name: 'Predictions', icon: <Brain className="w-4 h-4" />, count: 38 },
    { id: 'solutions', name: 'Solutions', icon: <Zap className="w-4 h-4" />, count: 28 },
    { id: 'tutorials', name: 'Tutorials', icon: <Play className="w-4 h-4" />, count: 24 },
    { id: 'case-studies', name: 'Case Studies', icon: <Award className="w-4 h-4" />, count: 24 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Quantum Neural Fusion: The Next Revolution",
      description: "Discover how quantum computing and neural networks are merging to create unprecedented AI capabilities",
      category: "breakthroughs",
      type: "article",
      readTime: "8 min read",
      views: 12500,
      likes: 892,
      rating: 4.9,
      featured: true,
      tags: ["Quantum AI", "Neural Networks", "Breakthrough"],
      image: "/images/quantum-neural-fusion.jpg",
      author: "Dr. Sarah Chen",
      publishedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "AI 2026-2030: Complete Future Predictions",
      description: "Comprehensive analysis of AI development timeline and revolutionary breakthroughs expected",
      category: "predictions",
      type: "video",
      readTime: "15 min watch",
      views: 8900,
      likes: 654,
      rating: 4.8,
      featured: true,
      tags: ["Future Predictions", "AI Timeline", "2030 Vision"],
      image: "/images/ai-2026-predictions.jpg",
      author: "Marcus Rodriguez",
      publishedAt: "2024-01-12"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Guide",
      description: "Step-by-step implementation guide for achieving 95% cost reduction through AI automation",
      category: "solutions",
      type: "guide",
      readTime: "12 min read",
      views: 6700,
      likes: 445,
      rating: 4.7,
      featured: false,
      tags: ["Automation", "Business", "ROI"],
      image: "/images/autonomous-operations.jpg",
      author: "Emily Watson",
      publishedAt: "2024-01-10"
    },
    {
      id: 4,
      title: "Neural Interface Revolution Tutorial",
      description: "Learn how to implement brain-computer interfaces for enhanced human-AI collaboration",
      category: "tutorials",
      type: "tutorial",
      readTime: "20 min read",
      views: 4200,
      likes: 312,
      rating: 4.6,
      featured: false,
      tags: ["Neural Interface", "Tutorial", "BCI"],
      image: "/images/neural-interface.jpg",
      author: "Dr. Alex Kim",
      publishedAt: "2024-01-08"
    },
    {
      id: 5,
      title: "Case Study: 10,000% ROI Achievement",
      description: "Real-world implementation of Zion Tech AI solutions delivering unprecedented returns",
      category: "case-studies",
      type: "case-study",
      readTime: "6 min read",
      views: 9800,
      likes: 723,
      rating: 4.9,
      featured: true,
      tags: ["ROI", "Case Study", "Success"],
      image: "/images/roi-case-study.jpg",
      author: "Zion Tech Team",
      publishedAt: "2024-01-05"
    },
    {
      id: 6,
      title: "Consciousness-Level AI Development",
      description: "Exploring the path to creating AI systems with human-like reasoning and emotional intelligence",
      category: "breakthroughs",
      type: "article",
      readTime: "10 min read",
      views: 5600,
      likes: 389,
      rating: 4.5,
      featured: false,
      tags: ["Consciousness", "AI Ethics", "Future"],
      image: "/images/consciousness-ai.jpg",
      author: "Dr. Maria Santos",
      publishedAt: "2024-01-03"
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
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'guide':
        return <BookOpen className="w-4 h-4" />;
      case 'tutorial':
        return <Play className="w-4 h-4" />;
      case 'case-study':
        return <Award className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'from-red-500 to-pink-500';
      case 'guide':
        return 'from-blue-500 to-cyan-500';
      case 'tutorial':
        return 'from-green-500 to-emerald-500';
      case 'case-study':
        return 'from-purple-500 to-indigo-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              Content Discovery Engine
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Discover Revolutionary
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}AI Content
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore breakthrough technologies, future predictions, and implementation guides 
              that are transforming businesses worldwide.
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 mb-8 border border-slate-700">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search content, tags, or authors..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending">Trending</option>
                <option value="rating">Highest Rated</option>
                <option value="recent">Most Recent</option>
                <option value="likes">Most Liked</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {sortedContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 group ${
                  item.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-400 capitalize">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                    <span>By {item.author}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/content/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Load More Content
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDiscoveryWidget2026;