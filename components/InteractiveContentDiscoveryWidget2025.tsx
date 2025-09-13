'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Play, 
  Code, 
  Target, 
  Shield, 
  Database,
  ChevronDown,
  Clock,
  Users,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  ArrowRight,
  X
} from 'lucide-react';

const InteractiveContentDiscoveryWidget2025 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'from-gray-500 to-gray-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'automation', name: 'Automation', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { id: 'cloud', name: 'Cloud Computing', icon: Cloud, color: 'from-green-500 to-emerald-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'architecture', name: 'Architecture', icon: Database, color: 'from-indigo-500 to-purple-500' }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'article', name: 'Articles' },
    { id: 'tutorial', name: 'Tutorials' },
    { id: 'case-study', name: 'Case Studies' },
    { id: 'guide', name: 'Guides' },
    { id: 'video', name: 'Videos' }
  ];

  const difficultyLevels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Revolutionary AI Breakthroughs in 2025',
      description: 'Explore the latest AI technologies transforming industries worldwide',
      category: 'ai',
      type: 'article',
      difficulty: 'intermediate',
      readTime: '8 min',
      views: 1250,
      rating: 4.8,
      tags: ['AI', 'Machine Learning', 'Innovation'],
      featured: true,
      publishedDate: '2025-01-15'
    },
    {
      id: 2,
      title: 'Enterprise Automation Mastery Guide',
      description: 'Complete guide to automating business processes with modern tools',
      category: 'automation',
      type: 'guide',
      difficulty: 'advanced',
      readTime: '20 min',
      views: 890,
      rating: 4.9,
      tags: ['Automation', 'Enterprise', 'Efficiency'],
      featured: true,
      publishedDate: '2025-01-12'
    },
    {
      id: 3,
      title: 'Multi-Cloud Architecture Patterns',
      description: 'Designing resilient and scalable cloud infrastructure',
      category: 'cloud',
      type: 'case-study',
      difficulty: 'advanced',
      readTime: '25 min',
      views: 2100,
      rating: 4.7,
      tags: ['Cloud', 'Architecture', 'Scalability'],
      featured: false,
      publishedDate: '2025-01-10'
    },
    {
      id: 4,
      title: 'Zero Trust Security Implementation',
      description: 'Step-by-step guide to implementing zero trust architecture',
      category: 'security',
      type: 'tutorial',
      difficulty: 'intermediate',
      readTime: '15 min',
      views: 1650,
      rating: 4.6,
      tags: ['Security', 'Zero Trust', 'Architecture'],
      featured: false,
      publishedDate: '2025-01-08'
    },
    {
      id: 5,
      title: 'Neural Interface Revolution',
      description: 'Understanding next-generation brain-computer interfaces',
      category: 'ai',
      type: 'article',
      difficulty: 'advanced',
      readTime: '12 min',
      views: 980,
      rating: 4.9,
      tags: ['Neural Interface', 'BCI', 'Future Tech'],
      featured: true,
      publishedDate: '2025-01-05'
    },
    {
      id: 6,
      title: 'RPA Implementation Strategies',
      description: 'Best practices for robotic process automation',
      category: 'automation',
      type: 'guide',
      difficulty: 'beginner',
      readTime: '10 min',
      views: 750,
      rating: 4.5,
      tags: ['RPA', 'Implementation', 'Strategy'],
      featured: false,
      publishedDate: '2025-01-03'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = contentItems;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(item => item.difficulty === selectedDifficulty);
    }

    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory, selectedType, selectedDifficulty]);

  const getContentIcon = (type) => {
    switch (type) {
      case 'article': return BookOpen;
      case 'tutorial': return Play;
      case 'case-study': return Target;
      case 'guide': return Code;
      case 'video': return Play;
      default: return BookOpen;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery tool to find the perfect articles, tutorials, and guides tailored to your interests and skill level.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            selectedCategory === category.id
                              ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {category.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Type and Difficulty Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Content Type</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {contentTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Difficulty Level</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {difficultyLevels.map((level) => (
                        <option key={level.id} value={level.id}>{level.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
            </h3>
            <div className="text-sm text-gray-500">
              Sorted by relevance
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredContent.map((item, index) => {
                const ContentIcon = getContentIcon(item.type);
                const category = categories.find(cat => cat.id === item.category);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                      item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category?.color || 'from-gray-500 to-gray-600'} bg-opacity-10`}>
                          <ContentIcon className={`w-6 h-6 bg-gradient-to-r ${category?.color || 'from-gray-500 to-gray-600'} bg-clip-text text-transparent`} />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-500 capitalize">{item.type.replace('-', ' ')}</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.readTime}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400" />
                            {item.rating}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredContent.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSelectedDifficulty('all');
                }}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;