import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, FileText, Users, TrendingUp, Clock, Star } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide' | 'tool';
  category: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  url: string;
  publishDate: string;
  views: number;
  rating: number;
}

const InteractiveContentDiscovery2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2026: Enterprise Autonomous Operations Revolution',
      description: 'Discover how enterprises are revolutionizing operations with autonomous AI systems, achieving unprecedented efficiency and ROI in 2026.',
      type: 'blog',
      category: 'AI Revolution',
      readTime: '12 min read',
      featured: true,
      tags: ['AI', 'Enterprise', 'Autonomous Operations', '2026', 'Revolution'],
      url: '/blog/ai-2026-enterprise-autonomous-operations-revolution',
      publishDate: '2026-01-15',
      views: 15420,
      rating: 4.9
    },
    {
      id: '2',
      title: 'Global Enterprise AI Transformation: $5 Billion ROI',
      description: 'Fortune 100 company achieves unprecedented success with AI autonomous operations, generating $5 billion in ROI and revolutionizing their business model.',
      type: 'case-study',
      category: 'Success Stories',
      readTime: '15 min read',
      featured: true,
      tags: ['AI Transformation', 'Enterprise', 'ROI', 'Success Story'],
      url: '/case-studies/global-enterprise-ai-autonomous-transformation-2026-5-billion-roi',
      publishDate: '2026-01-15',
      views: 12890,
      rating: 4.8
    },
    {
      id: '3',
      title: 'AI 2026 Autonomous Operations Implementation Master Guide',
      description: 'Complete implementation guide for AI autonomous operations in 2026. Step-by-step framework for enterprise transformation with proven strategies.',
      type: 'guide',
      category: 'Implementation',
      readTime: '20 min read',
      featured: true,
      tags: ['AI', 'Implementation', 'Guide', 'Enterprise', 'Strategy'],
      url: '/resources/ai-2026-autonomous-operations-implementation-master-guide',
      publishDate: '2026-01-15',
      views: 18750,
      rating: 4.9
    },
    {
      id: '4',
      title: 'Quantum AI Fusion: Revolutionary Applications in 2025',
      description: 'Explore breakthrough quantum AI applications that are transforming industries and creating new possibilities for autonomous operations.',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '10 min read',
      featured: false,
      tags: ['Quantum AI', 'Fusion', 'Applications', '2025'],
      url: '/blog/quantum-ai-fusion-2025-revolutionary-applications',
      publishDate: '2025-12-20',
      views: 8950,
      rating: 4.7
    },
    {
      id: '5',
      title: 'Fortune 500 Neural Architecture Transformation',
      description: 'Case study of how a Fortune 500 company implemented neural architecture principles to achieve 500% ROI in 18 months.',
      type: 'case-study',
      category: 'Success Stories',
      readTime: '18 min read',
      featured: false,
      tags: ['Neural Architecture', 'Fortune 500', 'Transformation', 'ROI'],
      url: '/case-studies/fortune-500-neural-architecture-transformation-2026',
      publishDate: '2025-12-15',
      views: 11200,
      rating: 4.8
    },
    {
      id: '6',
      title: 'AI ROI Calculator: Enterprise Transformation Tool',
      description: 'Interactive tool to calculate potential ROI from AI autonomous operations implementation. Get personalized insights and recommendations.',
      type: 'tool',
      category: 'Tools',
      readTime: '5 min use',
      featured: false,
      tags: ['ROI Calculator', 'AI Tools', 'Enterprise', 'Transformation'],
      url: '/tools/ai-roi-calculator-enterprise',
      publishDate: '2025-12-10',
      views: 25600,
      rating: 4.9
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'AI Revolution', label: 'AI Revolution' },
    { value: 'Success Stories', label: 'Success Stories' },
    { value: 'Implementation', label: 'Implementation' },
    { value: 'Quantum AI', label: 'Quantum AI' },
    { value: 'Tools', label: 'Tools' }
  ];

  const types = [
    { value: 'all', label: 'All Types', icon: BookOpen },
    { value: 'blog', label: 'Blog Posts', icon: FileText },
    { value: 'case-study', label: 'Case Studies', icon: Users },
    { value: 'guide', label: 'Guides', icon: BookOpen },
    { value: 'tool', label: 'Tools', icon: TrendingUp }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filteredContent = contentItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured ? 1 : -1;
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'popular':
          return b.views - a.views;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const handleSearch = (value: string) => {
    setIsLoading(true);
    setSearchTerm(value);
    setTimeout(() => setIsLoading(false), 500);
  };

  const getTypeIcon = (type: string) => {
    const typeConfig = types.find(t => t.value === type);
    return typeConfig ? typeConfig.icon : BookOpen;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'blog': 'from-blue-500 to-blue-600',
      'case-study': 'from-green-500 to-green-600',
      'guide': 'from-purple-500 to-purple-600',
      'tool': 'from-orange-500 to-orange-600'
    };
    return colors[type as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI resources, case studies, and implementation guides 
            that are transforming enterprises worldwide.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredContent.length} of {contentItems.length} content pieces
          </p>
          {isLoading && (
            <div className="flex items-center text-blue-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
              Searching...
            </div>
          )}
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${searchTerm}-${selectedCategory}-${selectedType}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              const typeColor = getTypeColor(item.type);
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`bg-gradient-to-r ${typeColor} p-2 rounded-lg mr-3`}>
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-600">{item.category}</span>
                          {item.featured && (
                            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-gray-400 text-xs">+{item.tags.length - 3} more</span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{item.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={item.url}
                      className="flex items-center justify-center text-white font-semibold hover:text-gray-100 transition-colors"
                    >
                      Read Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredContent.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredContent.length > 0 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Load More Content
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentDiscovery2026;