import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Mic,
  Image,
  Code,
  Brain,
  Zap,
  Cpu,
  Database,
  Globe,
  Users,
  Target,
  Lightbulb,
  ChevronDown,
  X,
  RefreshCw
} from 'lucide-react';

const EnhancedInteractiveContentDiscoveryWidget: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', label: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-2025', label: 'AI 2025', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', label: 'Quantum Computing', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'automation', label: 'Automation', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'neural', label: 'Neural Networks', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'business', label: 'Business Solutions', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { id: 'future', label: 'Future Tech', icon: Target, color: 'from-violet-500 to-pink-500' },
    { id: 'innovation', label: 'Innovation', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' }
  ];

  const contentTypes = [
    { id: 'all', label: 'All Types', icon: FileText },
    { id: 'articles', label: 'Articles', icon: BookOpen },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'podcasts', label: 'Podcasts', icon: Mic },
    { id: 'infographics', label: 'Infographics', icon: Image },
    { id: 'code', label: 'Code Examples', icon: Code }
  ];

  const sortOptions = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'latest', label: 'Latest', icon: Clock },
    { id: 'popular', label: 'Most Popular', icon: Star }
  ];

  const sampleContent = [
    {
      id: 1,
      title: 'AI 2025: The Ultimate Breakthrough Revolution',
      description: 'Discover how AI will transform every industry in 2025 with unprecedented capabilities and revolutionary applications.',
      category: 'ai-2025',
      type: 'articles',
      readTime: '8 min read',
      views: '125K',
      rating: 4.9,
      trending: true,
      featured: true,
      tags: ['AI', '2025', 'Revolution', 'Breakthrough'],
      image: '/api/placeholder/400/250',
      author: 'Dr. Sarah Chen',
      publishedAt: '2025-01-15'
    },
    {
      id: 2,
      title: 'Quantum Computing: Error-Corrected Systems',
      description: 'Explore the latest advances in quantum computing and how error-corrected systems are changing the game.',
      category: 'quantum',
      type: 'videos',
      readTime: '15 min watch',
      views: '89K',
      rating: 4.8,
      trending: true,
      featured: false,
      tags: ['Quantum', 'Computing', 'Error Correction', 'Technology'],
      image: '/api/placeholder/400/250',
      author: 'Prof. Michael Rodriguez',
      publishedAt: '2025-01-14'
    },
    {
      id: 3,
      title: 'Autonomous Business Operations: A Complete Guide',
      description: 'Learn how to implement autonomous business operations that run 24/7 with minimal human intervention.',
      category: 'automation',
      type: 'articles',
      readTime: '12 min read',
      views: '67K',
      rating: 4.7,
      trending: false,
      featured: true,
      tags: ['Automation', 'Business', 'Operations', 'AI'],
      image: '/api/placeholder/400/250',
      author: 'Alex Thompson',
      publishedAt: '2025-01-13'
    },
    {
      id: 4,
      title: 'Neural Interface Technology: The Future is Here',
      description: 'Discover how neural interfaces are bridging the gap between human consciousness and digital systems.',
      category: 'neural',
      type: 'podcasts',
      readTime: '25 min listen',
      views: '45K',
      rating: 4.6,
      trending: false,
      featured: false,
      tags: ['Neural', 'Interface', 'Technology', 'Future'],
      image: '/api/placeholder/400/250',
      author: 'Dr. Elena Vasquez',
      publishedAt: '2025-01-12'
    },
    {
      id: 5,
      title: 'ROI Calculator: AI Implementation Guide',
      description: 'Calculate the potential ROI of AI implementation in your business with our comprehensive calculator.',
      category: 'business',
      type: 'code',
      readTime: '5 min read',
      views: '156K',
      rating: 4.9,
      trending: true,
      featured: true,
      tags: ['ROI', 'Calculator', 'AI', 'Business'],
      image: '/api/placeholder/400/250',
      author: 'Zion Tech Team',
      publishedAt: '2025-01-11'
    },
    {
      id: 6,
      title: 'Future Technology Predictions 2030-2035',
      description: 'Expert predictions on the most revolutionary technologies that will emerge in the next decade.',
      category: 'future',
      type: 'infographics',
      readTime: '6 min read',
      views: '78K',
      rating: 4.8,
      trending: true,
      featured: false,
      tags: ['Future', 'Predictions', 'Technology', '2030'],
      image: '/api/placeholder/400/250',
      author: 'Future Tech Institute',
      publishedAt: '2025-01-10'
    }
  ];

  const filteredContent = sampleContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'popular':
        return parseInt(b.views) - parseInt(a.views);
      case 'trending':
      default:
        return b.trending ? 1 : -1;
    }
  });

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 500);
  };

  const getTypeIcon = (type: string) => {
    const typeMap = {
      articles: BookOpen,
      videos: Video,
      podcasts: Mic,
      infographics: Image,
      code: Code
    };
    return typeMap[type as keyof typeof typeMap] || FileText;
  };

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Search className="w-4 h-4" />
            ENHANCED CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, quantum computing insights, and automation solutions
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for AI breakthroughs, quantum computing, automation solutions..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {isLoading && (
              <RefreshCw className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-spin" />
            )}
          </div>

          {/* Filter Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">Sort by:</span>
              {sortOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                      sortBy === option.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-white font-semibold mb-3">Categories</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-all duration-300 ${
                              selectedCategory === category.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {category.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <label className="block text-white font-semibold mb-3">Content Types</label>
                    <div className="grid grid-cols-2 gap-2">
                      {contentTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-all duration-300 ${
                              selectedType === type.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {sortedContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const categoryInfo = getCategoryInfo(item.category);
              const CategoryIcon = categoryInfo.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.featured && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        )}
                        {item.trending && (
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Trending
                          </span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${categoryInfo.color} flex items-center justify-center`}>
                            <CategoryIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-sm font-semibold">{categoryInfo.label}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {item.views}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {item.rating}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="text-sm text-gray-400 mb-4">
                        By {item.author}
                      </div>

                      {/* Action Button */}
                      <Link
                        to={`/content/${item.id}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Load More Content
            <RefreshCw className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedInteractiveContentDiscoveryWidget;