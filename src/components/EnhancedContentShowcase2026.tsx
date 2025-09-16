import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, User, Tag, TrendingUp, Star, Eye, Heart, Share2 } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  slug: string;
  views?: number;
  likes?: number;
}

interface EnhancedContentShowcase2026Props {
  contentItems?: ContentItem[];
  maxItems?: number;
  showFilters?: boolean;
  autoRotate?: boolean;
}

const EnhancedContentShowcase2026: React.FC<EnhancedContentShowcase2026Props> = ({
  contentItems = [],
  maxItems = 6,
  showFilters = true,
  autoRotate = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(contentItems.map(item => item.category)))];

  // Filter and sort content
  const filteredContent = contentItems
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'most_popular':
          return (b.views || 0) - (a.views || 0);
        case 'most_liked':
          return (b.likes || 0) - (a.likes || 0);
        default:
          return 0;
      }
    })
    .slice(0, maxItems);

  // Auto-rotate featured content
  useEffect(() => {
    if (autoRotate && filteredContent.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredContent.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [autoRotate, filteredContent.length]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Healthcare AI': 'from-blue-500 to-cyan-500',
      'Quantum Computing': 'from-purple-500 to-pink-500',
      'Autonomous Systems': 'from-green-500 to-emerald-500',
      'Neural Interfaces': 'from-yellow-500 to-orange-500',
      'Cybersecurity': 'from-red-500 to-rose-500',
      'Metaverse': 'from-indigo-500 to-purple-500',
      'Edge Computing': 'from-teal-500 to-cyan-500',
      'Temporal AI': 'from-violet-500 to-purple-500',
      'Breakthrough Technology': 'from-pink-500 to-rose-500',
      'Future Technology': 'from-slate-500 to-gray-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6"
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          LATEST CONTENT SHOWCASE
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Revolutionary AI Content
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Collection 2026
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Explore cutting-edge insights, breakthrough technologies, and revolutionary AI solutions
        </motion.p>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="most_popular">Most Popular</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </motion.div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Featured badge */}
            {item.featured && (
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  <Star className="w-3 h-3 mr-1" />
                  FEATURED
                </div>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-medium rounded-full`}>
                {item.category}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-gray-300">🤖</div>
              </div>
              
              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Read Article
                </button>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta info */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">{item.readTime}</span>
                <User className="w-4 h-4 mr-1" />
                <span>{item.author}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{item.views || Math.floor(Math.random() * 1000) + 100}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{item.likes || Math.floor(Math.random() * 100) + 10}</span>
                  </div>
                </div>
                <div className="text-xs">
                  {formatDate(item.publishDate)}
                </div>
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                className="absolute bottom-6 left-6 right-6 flex space-x-2"
              >
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Explore All Content
          <ArrowRight className="w-5 h-5 ml-2 inline" />
        </button>
      </motion.div>
    </div>
  );
};

export default EnhancedContentShowcase2026;