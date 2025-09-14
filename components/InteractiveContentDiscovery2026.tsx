"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Search
  Filter
  Grid
  List
  Star
  TrendingUp
  Clock
  Users
  Eye,
  Heart,
  Share2,
  Download,
  Bookmark,
  Tag,
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Shield,
  Globe,
  Target,
  Award,
  Play,
  ExternalLink
} from 'lucide-react';

const InteractiveContentDiscovery2026 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [sortBysetSortBy] = useState('trending');
  const [filteredContentsetFilteredContent] = useState([]);
  const [selectedContentsetSelectedContent] = useState(null);

  const categories = [
    { id: 'all'name: 'All Content'icon: Gridcolor: 'from-slate-500 to-slate-600' },
    { id: 'ai-solutions'name: 'AI Solutions'icon: Braincolor: 'from-purple-500 to-blue-500' },
    { id: 'automation'name: 'Automation'icon: Zapcolor: 'from-orange-500 to-red-500' },
    { id: 'security'name: 'Security'icon: Shieldcolor: 'from-green-500 to-teal-500' },
    { id: 'analytics'name: 'Analytics'icon: TrendingUpcolor: 'from-blue-500 to-indigo-500' },
    { id: 'case-studies'name: 'Case Studies'icon: Targetcolor: 'from-pink-500 to-rose-500' },
    { id: 'tutorials'name: 'Tutorials'icon: Playcolor: 'from-yellow-500 to-orange-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Neural Consensus AI Implementation',
      description: 'Complete guide to implementing neural consensus AI in your business operations',
      category: 'ai-solutions',
      type: 'guide',
      rating: 4.9,
      views: 12500,
      likes: 892,
      duration: '15 min read',
      author: 'Dr. Sarah Chen',
      publishedAt: '2026-01-15',
      tags: ['AI'Neural Networks'Implementation'Business'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Quantum-Safe Encryption for Enterprise',
      description: 'Protect your business with quantum-resistant encryption technologies',
      category: 'security',
      type: 'tutorial',
      rating: 4.8,
      views: 8900,
      likes: 654,
      duration: '12 min read',
      author: 'Michael Rodriguez',
      publishedAt: '2026-01-14',
      tags: ['Security'Encryption'Quantum'Enterprise'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: 3,
      title: 'Automated Workflow Optimization',
      description: 'Case study: How Company X increased efficiency by 300% with AI automation',
      category: 'case-studies',
      type: 'case-study',
      rating: 4.9,
      views: 15600,
      likes: 1203,
      duration: '8 min read',
      author: 'Alex Thompson',
      publishedAt: '2026-01-13',
      tags: ['Automation'Case Study'Efficiency'ROI'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    },
    {
      id: 4,
      title: 'Predictive Analytics Dashboard Setup',
      description: 'Step-by-step tutorial for building advanced analytics dashboards',
      category: 'analytics',
      type: 'tutorial',
      rating: 4.7,
      views: 7200,
      likes: 456,
      duration: '20 min read',
      author: 'Emma Wilson',
      publishedAt: '2026-01-12',
      tags: ['Analytics'Dashboard'Tutorial'Data'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'AI-Powered Threat Detection System',
      description: 'Comprehensive guide to implementing AI-based cybersecurity solutions',
      category: 'security',
      type: 'guide',
      rating: 4.8,
      views: 9800,
      likes: 723,
      duration: '18 min read',
      author: 'David Kim',
      publishedAt: '2026-01-11',
      tags: ['Security'AI'Threat Detection'Cybersecurity'],
      image: '/api/placeholder/400/250',
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: 'Business Process Automation Masterclass',
      description: 'Complete automation framework for modern businesses',
      category: 'automation',
      type: 'course',
      rating: 4.9,
      views: 11200,
      likes: 987,
      duration: '45 min course',
      author: 'Lisa Anderson',
      publishedAt: '2026-01-10',
      tags: ['Automation'Business Process'Masterclass'Framework'],
      image: '/api/placeholder/400/250',
      featured: true,
      trending: false
    }
  ];

  useEffect(() => {
    let filtered = contentItems;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by selected criteria
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((ab) => b.views - a.views);
        break;
      case 'rating':
        filtered = filtered.sort((ab) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = filtered.sort((ab) => new Date(b.publishedAt) - new Date(a.publishedAt));
        break;
      case 'popular':
        filtered = filtered.sort((ab) => b.likes - a.likes);
        break;
    }

    setFilteredContent(filtered);
  }[searchQueryselectedCategorysortBy]);

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'guide': return Bookmark;
      case 'tutorial': return Play;
      case 'case-study': return Target;
      case 'course': return Award;
      default: return FileText;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Content Discovery 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI solutionstutorialscase studiesand more. 
            Find exactly what you need to transform your business.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contentagsor authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Sort and View */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="trending">Trending</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
              </select>

              <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0y: 20 }}
          whileInView={{ opacity: 1y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredContent.map((itemindex) => {
              const categoryInfo = getCategoryInfo(item.category);
              const TypeIcon = getTypeIcon(item.type);
              const CategoryIcon = categoryInfo.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0y: 20 }}
                  animate={{ opacity: 1y: 0 }}
                  exit={{ opacity: 0y: -20 }}
                  transition={{ duration: 0.5delay: index * 0.1 }}
                  whileHover={{ y: -5scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedContent(item)}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${categoryInfo.color} rounded-full flex items-center justify-center`}>
                        <CategoryIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.featured && (
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Trending
                        </span>
                      )}
                    </div>

                    {/* Type Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        <TypeIcon className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${categoryInfo.color} rounded-full`} />
                      <span className="text-sm font-medium text-slate-600">{categoryInfo.name}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(03).map((tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-slate-400 text-xs">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {item.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{item.author}</div>
                          <div className="text-xs text-slate-500">{item.publishedAt}</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-green-500 transition-colors">
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

        {/* No Results */}
        {filteredContent.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No content found</h3>
            <p className="text-slate-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <motion.div
            initial={{ opacity: 0y: 20 }}
            whileInView={{ opacity: 1y: 0 }}
            transition={{ duration: 0.6delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
              Load More Content
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;