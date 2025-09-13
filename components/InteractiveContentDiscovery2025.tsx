import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Play,
  Download,
  Share2,
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'video' | 'article' | 'case-study' | 'whitepaper' | 'demo';
  tags: string[];
  rating: number;
  views: number;
  duration: string;
  thumbnail: string;
  url: string;
  featured: boolean;
  trending: boolean;
  new: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthroughs',
    title: 'AI 2025 Ultimate Breakthroughs',
    description: 'Discover the most advanced AI solutions delivering 10,000x faster processing and 99.9% accuracy.',
    category: 'AI Solutions',
    type: 'video',
    tags: ['AI', 'Machine Learning', 'Neural Networks', 'Breakthrough'],
    rating: 4.9,
    views: 12500,
    duration: '15 min',
    thumbnail: '/images/ai-breakthroughs-thumb.jpg',
    url: '/content/ai-2025-breakthroughs',
    featured: true,
    trending: true,
    new: true
  },
  {
    id: 'quantum-computing-guide',
    title: 'Quantum Computing Solutions Guide',
    description: 'Complete guide to quantum computing applications and implementation strategies.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    tags: ['Quantum', 'Computing', 'Guide', 'Implementation'],
    rating: 4.8,
    views: 8900,
    duration: '45 min read',
    thumbnail: '/images/quantum-guide-thumb.jpg',
    url: '/content/quantum-computing-guide',
    featured: true,
    trending: false,
    new: true
  },
  {
    id: 'automation-roi-calculator',
    title: 'Automation ROI Calculator',
    description: 'Interactive tool to calculate potential ROI from automation solutions.',
    category: 'Automation',
    type: 'demo',
    tags: ['ROI', 'Calculator', 'Automation', 'Tool'],
    rating: 4.7,
    views: 15600,
    duration: '5 min',
    thumbnail: '/images/roi-calculator-thumb.jpg',
    url: '/tools/automation-roi-calculator',
    featured: false,
    trending: true,
    new: false
  },
  {
    id: 'fortune-500-case-study',
    title: 'Fortune 500 Digital Transformation',
    description: 'How a Fortune 500 company achieved 3,200% ROI with AI automation.',
    category: 'Case Studies',
    type: 'case-study',
    tags: ['Case Study', 'Fortune 500', 'ROI', 'Transformation'],
    rating: 4.9,
    views: 22000,
    duration: '20 min read',
    thumbnail: '/images/fortune-500-thumb.jpg',
    url: '/case-studies/fortune-500-transformation',
    featured: true,
    trending: true,
    new: false
  },
  {
    id: 'neural-synthesis-demo',
    title: 'Neural Synthesis Engine Demo',
    description: 'Live demonstration of our revolutionary neural synthesis technology.',
    category: 'AI Solutions',
    type: 'video',
    tags: ['Neural', 'Synthesis', 'Demo', 'AI'],
    rating: 4.8,
    views: 9800,
    duration: '12 min',
    thumbnail: '/images/neural-synthesis-thumb.jpg',
    url: '/content/neural-synthesis-demo',
    featured: false,
    trending: false,
    new: true
  },
  {
    id: 'quantum-optimization-whitepaper',
    title: 'Quantum Optimization Algorithms',
    description: 'Technical whitepaper on quantum optimization algorithms and applications.',
    category: 'Quantum Computing',
    type: 'whitepaper',
    tags: ['Quantum', 'Optimization', 'Algorithms', 'Technical'],
    rating: 4.6,
    views: 6700,
    duration: '60 min read',
    thumbnail: '/images/quantum-optimization-thumb.jpg',
    url: '/content/quantum-optimization-whitepaper',
    featured: false,
    trending: false,
    new: false
  }
];

const InteractiveContentDiscovery2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'relevance' | 'rating' | 'views' | 'newest'>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredItems, setFilteredItems] = useState<ContentItem[]>(contentItems);

  const categories = ['all', ...Array.from(new Set(contentItems.map(item => item.category)))];

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

    // Sort items
    switch (sortBy) {
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'views':
        filtered = filtered.sort((a, b) => b.views - a.views);
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => {
          if (a.new && !b.new) return -1;
          if (!a.new && b.new) return 1;
          return 0;
        });
        break;
      default:
        // Relevance - featured first, then trending, then by rating
        filtered = filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return b.rating - a.rating;
        });
    }

    setFilteredItems(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const handleItemClick = (item: ContentItem) => {
    window.open(item.url, '_blank');
  };

  const handleDownload = (item: ContentItem) => {
    // Simulate download
    console.log(`Downloading ${item.title}`);
  };

  const handleShare = (item: ContentItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: item.url
      });
    } else {
      navigator.clipboard.writeText(item.url);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive Content Discovery
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore Our Content Library
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover videos, articles, case studies, and tools to accelerate your AI journey. 
            Find exactly what you need with our intelligent content discovery system.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedCategory === category
                              ? 'bg-blue-600 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          {category === 'all' ? 'All Categories' : category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="rating">Rating</option>
                      <option value="views">Most Viewed</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>

                  {/* Quick Stats */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">Quick Stats</label>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div>Total Content: {contentItems.length}</div>
                      <div>Featured: {contentItems.filter(item => item.featured).length}</div>
                      <div>Trending: {contentItems.filter(item => item.trending).length}</div>
                      <div>New: {contentItems.filter(item => item.new).length}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Content Grid/List */}
        <motion.div
          layout
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
          }
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                  viewMode === 'list' ? 'flex p-6' : 'p-6'
                }`}
                onClick={() => handleItemClick(item)}
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  {item.featured && (
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded">
                      Featured
                    </span>
                  )}
                  {item.trending && (
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded">
                      Trending
                    </span>
                  )}
                  {item.new && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                      New
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-10 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(item);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(item);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Thumbnail */}
                <div className={`relative mb-4 rounded-xl overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'w-full h-48'
                }`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className={viewMode === 'list' ? 'flex-1 ml-6' : ''}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 text-sm font-semibold">{item.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()} views
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    {item.type === 'video' ? 'Watch Now' : 
                     item.type === 'whitepaper' ? 'Read Now' : 
                     item.type === 'case-study' ? 'Read Case Study' : 'Try Demo'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('relevance');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our content library is constantly growing. Request specific content or get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Request Content
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Get Recommendations
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2025;