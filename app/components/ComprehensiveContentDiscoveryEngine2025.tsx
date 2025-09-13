import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  Play,
  Bookmark,
  Share2,
  Eye,
  Heart,
  Tag,
  Calendar,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Rocket,
  ChevronDown,
  X,
  SlidersHorizontal
} from 'lucide-react';

const ComprehensiveContentDiscoveryEngine2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('trending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState<Set<number>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Content', icon: Grid, color: 'from-gray-600 to-gray-800' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-cyan-600 to-blue-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-green-600 to-emerald-600' },
    { id: 'data', name: 'Data & Analytics', icon: Database, color: 'from-orange-600 to-red-600' },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, color: 'from-indigo-600 to-purple-600' },
    { id: 'automation', name: 'Automation', icon: Zap, color: 'from-yellow-600 to-orange-600' },
    { id: 'consulting', name: 'Consulting', icon: Users, color: 'from-pink-600 to-rose-600' }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Automation', 'Cloud', 'Security', 'Data Analytics',
    'IoT', 'DevOps', 'Digital Transformation', 'Blockchain', 'Quantum Computing',
    'Edge Computing', 'Microservices', 'API', 'Database', 'Mobile', 'Web',
    'Enterprise', 'Startup', 'SMB', 'Enterprise', 'B2B', 'B2C'
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Process Automation",
      description: "Transform your business operations with intelligent automation that learns and adapts to your unique processes.",
      category: 'ai',
      tags: ['AI', 'Automation', 'Business Process', 'Machine Learning'],
      author: "Zion Tech Group",
      publishDate: "2025-01-15",
      readTime: "8 min read",
      views: 1247,
      likes: 89,
      rating: 4.9,
      image: "/api/placeholder/400/250",
      type: "article",
      featured: true,
      trending: true,
      price: "Free",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Optimization Guide",
      description: "Maximize your cloud performance while minimizing costs with our comprehensive optimization strategies.",
      category: 'cloud',
      tags: ['Cloud', 'Infrastructure', 'Optimization', 'Cost Management'],
      author: "Cloud Experts Team",
      publishDate: "2025-01-14",
      readTime: "12 min read",
      views: 892,
      likes: 67,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      type: "guide",
      featured: false,
      trending: true,
      price: "$99",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Best Practices",
      description: "Protect your business with cutting-edge cybersecurity strategies and implementation guides.",
      category: 'security',
      tags: ['Cybersecurity', 'Security', 'Best Practices', 'Protection'],
      author: "Security Specialists",
      publishDate: "2025-01-13",
      readTime: "15 min read",
      views: 1563,
      likes: 124,
      rating: 4.9,
      image: "/api/placeholder/400/250",
      type: "whitepaper",
      featured: true,
      trending: false,
      price: "Free",
      difficulty: "Expert"
    },
    {
      id: 4,
      title: "Data Analytics & Business Intelligence",
      description: "Unlock insights from your data with advanced analytics and predictive intelligence techniques.",
      category: 'data',
      tags: ['Data Analytics', 'Business Intelligence', 'Predictive Analytics', 'Insights'],
      author: "Data Science Team",
      publishDate: "2025-01-12",
      readTime: "10 min read",
      views: 1089,
      likes: 78,
      rating: 4.7,
      image: "/api/placeholder/400/250",
      type: "tutorial",
      featured: false,
      trending: true,
      price: "$149",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      title: "IoT & Edge Computing Solutions",
      description: "Connect and manage your IoT devices with intelligent edge computing solutions for optimal performance.",
      category: 'iot',
      tags: ['IoT', 'Edge Computing', 'Device Management', 'Real-time Processing'],
      author: "IoT Solutions Team",
      publishDate: "2025-01-11",
      readTime: "14 min read",
      views: 743,
      likes: 56,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      type: "case-study",
      featured: true,
      trending: false,
      price: "Free",
      difficulty: "Advanced"
    },
    {
      id: 6,
      title: "Digital Transformation Roadmap",
      description: "Complete guide to digital transformation with step-by-step implementation strategies and best practices.",
      category: 'consulting',
      tags: ['Digital Transformation', 'Strategy', 'Implementation', 'Change Management'],
      author: "Transformation Experts",
      publishDate: "2025-01-10",
      readTime: "18 min read",
      views: 456,
      likes: 34,
      rating: 4.9,
      image: "/api/placeholder/400/250",
      type: "ebook",
      featured: false,
      trending: false,
      price: "$299",
      difficulty: "Expert"
    },
    {
      id: 7,
      title: "Microservices Architecture Patterns",
      description: "Learn how to design and implement scalable microservices architectures for modern applications.",
      category: 'cloud',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Design Patterns'],
      author: "Architecture Team",
      publishDate: "2025-01-09",
      readTime: "16 min read",
      views: 623,
      likes: 45,
      rating: 4.6,
      image: "/api/placeholder/400/250",
      type: "article",
      featured: false,
      trending: true,
      price: "Free",
      difficulty: "Advanced"
    },
    {
      id: 8,
      title: "Quantum Computing Applications",
      description: "Explore the revolutionary potential of quantum computing and its practical applications in business.",
      category: 'ai',
      tags: ['Quantum Computing', 'Future Technology', 'Innovation', 'Research'],
      author: "Quantum Research Team",
      publishDate: "2025-01-08",
      readTime: "20 min read",
      views: 234,
      likes: 23,
      rating: 4.8,
      image: "/api/placeholder/400/250",
      type: "research",
      featured: true,
      trending: false,
      price: "$199",
      difficulty: "Expert"
    }
  ];

  const filteredContent = useMemo(() => {
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

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(item =>
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }

    // Sort
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.views - a.views);
        break;
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTags, sortBy]);

  const toggleBookmark = (id: number) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-transparent to-purple-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
            <Search className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Comprehensive Content Discovery</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Discover Amazing
            </span>
            <br />
            <span className="text-white">Content</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive library of technology content, guides, and resources 
            designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            {/* Sort and View Controls */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-all duration-300"
              >
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex bg-white/10 border border-white/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                  showFilters 
                    ? 'bg-indigo-600 border-indigo-500 text-white' 
                    : 'bg-white/10 border-white/20 text-gray-400 hover:text-white hover:bg-white/20'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-white/20"
              >
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isActive = selectedCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                            isActive
                              ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                              : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/40'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                          }`}
                        >
                          <Tag className="w-3 h-3 inline mr-1" />
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                  
                  {selectedTags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-full text-sm"
                        >
                          {tag}
                          <button
                            onClick={() => toggleTag(tag)}
                            className="hover:text-red-300 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }
        >
          <AnimatePresence mode="wait">
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                layout
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`group relative ${viewMode === 'list' ? 'flex gap-6' : ''}`}
              >
                <div className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/25 ${
                  viewMode === 'list' ? 'flex-1' : ''
                }`}>
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Trending Badge */}
                  {item.trending && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        Trending
                      </span>
                    </div>
                  )}

                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(item.id)}
                    className="absolute top-4 right-16 z-20 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300"
                  >
                    <Bookmark className={`w-4 h-4 ${
                      bookmarkedItems.has(item.id) ? 'fill-current text-yellow-400' : 'text-white'
                    }`} />
                  </button>

                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-64 h-40 flex-shrink-0' : 'h-48'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {categories.find(cat => cat.id === item.category) && (
                        <div className={`p-1 rounded bg-gradient-to-r ${
                          categories.find(cat => cat.id === item.category)?.color
                        }`}>
                          {React.createElement(categories.find(cat => cat.id === item.category)!.icon, {
                            className: "w-4 h-4 text-white"
                          })}
                        </div>
                      )}
                      <span className="text-sm text-gray-400 capitalize">{item.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          +{item.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {item.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 font-medium">{item.price}</span>
                        <span className="text-xs bg-white/10 px-2 py-1 rounded">{item.difficulty}</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm pointer-events-none"
                  />
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
            className="text-center py-16"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse our categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTags([]);
                }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              {filteredContent.length} Content Items Found
            </h3>
            <p className="text-gray-400">
              {searchQuery && `Searching for "${searchQuery}"`}
              {selectedCategory !== 'all' && ` • Category: ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedTags.length > 0 && ` • Tags: ${selectedTags.join(', ')}`}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveContentDiscoveryEngine2025;