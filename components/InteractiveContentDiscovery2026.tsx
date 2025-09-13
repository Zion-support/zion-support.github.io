import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, Grid, List, Star, Clock, TrendingUp, ArrowRight, Eye, BookOpen, Play, Download } from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', count: 1247 },
    { id: 'ai', name: 'AI & Automation', count: 342 },
    { id: 'tech', name: 'Technology', count: 289 },
    { id: 'business', name: 'Business', count: 198 },
    { id: 'tutorials', name: 'Tutorials', count: 156 },
    { id: 'case-studies', name: 'Case Studies', count: 134 },
    { id: 'tools', name: 'Tools & Resources', count: 128 }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI-Powered Business Automation Guide 2026',
      description: 'Complete guide to implementing AI automation in your business processes',
      category: 'ai',
      type: 'guide',
      duration: '15 min read',
      views: 15420,
      rating: 4.9,
      trending: true,
      featured: true,
      tags: ['AI', 'Automation', 'Business', 'Guide'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Quantum Computing Revolution: What You Need to Know',
      description: 'Understanding the impact of quantum computing on modern technology',
      category: 'tech',
      type: 'article',
      duration: '8 min read',
      views: 8920,
      rating: 4.8,
      trending: true,
      featured: false,
      tags: ['Quantum', 'Computing', 'Technology', 'Future'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Case Study: 300% ROI with AI Implementation',
      description: 'Real-world example of AI transformation in a Fortune 500 company',
      category: 'case-studies',
      type: 'case-study',
      duration: '12 min read',
      views: 12350,
      rating: 4.9,
      trending: false,
      featured: true,
      tags: ['ROI', 'Case Study', 'AI', 'Success'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Interactive AI Tools Showcase',
      description: 'Hands-on demonstration of cutting-edge AI tools and platforms',
      category: 'tools',
      type: 'interactive',
      duration: '25 min',
      views: 18750,
      rating: 4.7,
      trending: true,
      featured: false,
      tags: ['Tools', 'Interactive', 'AI', 'Demo'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Business Transformation Roadmap 2026',
      description: 'Step-by-step guide to digital transformation and modernization',
      category: 'business',
      type: 'guide',
      duration: '20 min read',
      views: 9870,
      rating: 4.8,
      trending: false,
      featured: true,
      tags: ['Transformation', 'Business', 'Roadmap', 'Digital'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Tutorial: Building Your First AI Assistant',
      description: 'Complete tutorial for creating intelligent chatbots and assistants',
      category: 'tutorials',
      type: 'tutorial',
      duration: '45 min',
      views: 22100,
      rating: 4.9,
      trending: true,
      featured: false,
      tags: ['Tutorial', 'AI Assistant', 'Chatbot', 'Learning'],
      thumbnail: '/api/placeholder/400/250'
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
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide':
        return BookOpen;
      case 'article':
        return Eye;
      case 'case-study':
        return TrendingUp;
      case 'interactive':
        return Play;
      case 'tutorial':
        return Play;
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'guide':
        return 'from-blue-500 to-cyan-500';
      case 'article':
        return 'from-purple-500 to-pink-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'interactive':
        return 'from-orange-500 to-red-500';
      case 'tutorial':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 border border-indigo-500/30 rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200 text-lg font-medium mb-6">
              <Search className="w-5 h-5 text-indigo-400" />
              Interactive Content Discovery 2026
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Discover
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Amazing Content
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our vast library of cutting-edge content, tutorials, case studies, and interactive experiences designed to accelerate your success
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search content, tags, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20"
                  />
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:border-indigo-400/50"
                >
                  <option value="trending">Trending</option>
                  <option value="rating">Highest Rated</option>
                  <option value="views">Most Viewed</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-slate-800/50 border border-slate-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-indigo-500/20 border-indigo-400/50 text-indigo-200'
                        : 'bg-slate-700/30 border-slate-600/50 text-gray-300 hover:bg-slate-600/30'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {sortedContent.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              const typeColor = getTypeColor(item.type);
              
              return (
                <div
                  key={item.id}
                  className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-indigo-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 ${
                    item.featured ? 'ring-2 ring-indigo-400/50' : ''
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.featured && (
                        <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-yellow-200 text-xs font-medium">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="px-2 py-1 bg-red-500/20 border border-red-400/30 rounded-full text-red-200 text-xs font-medium">
                          Trending
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${typeColor} flex items-center justify-center`}>
                        <TypeIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 bg-gradient-to-r ${typeColor} rounded-full text-white text-xs font-medium`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-gray-300 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/content/${item.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-sm"
                    >
                      {item.type === 'interactive' || item.type === 'tutorial' ? 'Start Now' : 'Read More'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25">
              Load More Content
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;