import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight,
  Brain,
  Target,
  Users,
  Zap,
  BookOpen,
  FileText,
  Video,
  Award,
  ChevronDown,
  X,
  RefreshCw
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  url: string;
  featured: boolean;
  readTime: string;
  tags: string[];
  stats?: {
    views?: string;
    rating?: number;
    impact?: string;
  };
  publishedDate: string;
}

const InteractiveContentDiscoveryWidget2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('trending');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: Ultimate Business Transformation Complete Guide',
      description: 'Discover how AI is revolutionizing business operations with autonomous systems, neural consensus, and quantum-enhanced intelligence driving unprecedented growth.',
      category: 'AI Transformation',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-transformation-complete-guide',
      featured: true,
      readTime: '15 min read',
      tags: ['AI 2025', 'Business Transformation', 'Autonomous Systems', 'Neural Consensus'],
      stats: { views: '50K+', rating: 4.9, impact: '300% ROI' },
      publishedDate: '2025-01-17'
    },
    {
      id: '2',
      title: 'Global Enterprise AI Transformation: $15B ROI Success Story',
      description: 'Learn how a Fortune 100 company achieved $15 billion ROI through comprehensive AI transformation in just 18 months.',
      category: 'Success Stories',
      type: 'case-study',
      url: '/case-studies/global-enterprise-ai-transformation-2025-15-billion-roi-success',
      featured: true,
      readTime: '12 min read',
      tags: ['Case Study', 'Enterprise AI', 'ROI Success', 'Fortune 100'],
      stats: { views: '75K+', rating: 5.0, impact: '$15B ROI' },
      publishedDate: '2025-01-17'
    },
    {
      id: '3',
      title: 'Neural Consensus Technology Implementation Guide',
      description: 'Comprehensive guide to implementing neural consensus systems for distributed AI decision-making across enterprise networks.',
      category: 'Technical Guides',
      type: 'resource',
      url: '/resources/neural-consensus-implementation-guide-2025',
      featured: true,
      readTime: '25 min read',
      tags: ['Neural Consensus', 'Implementation', 'Technical Guide', 'AI Architecture'],
      stats: { views: '30K+', rating: 4.8, impact: '10x Faster Decisions' },
      publishedDate: '2025-01-16'
    },
    {
      id: '4',
      title: 'Quantum-Enhanced AI Solutions Master Guide',
      description: 'Unlock exponential processing power with quantum computing amplified AI capabilities for superior business outcomes.',
      category: 'Quantum AI',
      type: 'resource',
      url: '/resources/quantum-ai-implementation-master-guide-2025',
      featured: true,
      readTime: '20 min read',
      tags: ['Quantum AI', 'Quantum Computing', 'AI Enhancement', 'Processing Power'],
      stats: { views: '40K+', rating: 4.9, impact: 'Exponential Speedup' },
      publishedDate: '2025-01-15'
    },
    {
      id: '5',
      title: 'AI ROI Calculator 2025',
      description: 'Interactive tool to calculate potential ROI from AI implementation across different business functions and industries.',
      category: 'Tools',
      type: 'tool',
      url: '/tools/ai-2025-roi-calculator-enterprise',
      featured: false,
      readTime: '5 min use',
      tags: ['ROI Calculator', 'AI Investment', 'Business Planning', 'Interactive Tool'],
      stats: { views: '100K+', rating: 4.7, impact: 'Investment Planning' },
      publishedDate: '2025-01-14'
    },
    {
      id: '6',
      title: 'Autonomous Business Operations Implementation Checklist',
      description: 'Step-by-step checklist for implementing autonomous business operations with AI systems and best practices.',
      category: 'Implementation',
      type: 'resource',
      url: '/resources/ai-2025-autonomous-business-operations-guide',
      featured: false,
      readTime: '18 min read',
      tags: ['Autonomous Operations', 'Implementation', 'Checklist', 'Best Practices'],
      stats: { views: '25K+', rating: 4.6, impact: '85% Automation' },
      publishedDate: '2025-01-13'
    }
  ];

  const categories = ['all', ...Array.from(new Set(contentItems.map(item => item.category)))];
  const types = ['all', ...Array.from(new Set(contentItems.map(item => item.type)))];

  const filteredContent = useMemo(() => {
    let filtered = contentItems;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => (b.stats?.views ? parseInt(b.stats.views) : 0) - (a.stats?.views ? parseInt(a.stats.views) : 0));
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => (b.stats?.rating || 0) - (a.stats?.rating || 0));
        break;
      case 'recent':
        filtered = filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'featured':
        filtered = filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedType, sortBy]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-4 h-4" />;
      case 'case-study': return <Award className="w-4 h-4" />;
      case 'resource': return <BookOpen className="w-4 h-4" />;
      case 'tool': return <Target className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Transformation': 'from-purple-500 to-indigo-500',
      'Success Stories': 'from-green-500 to-emerald-500',
      'Technical Guides': 'from-blue-500 to-cyan-500',
      'Quantum AI': 'from-pink-500 to-rose-500',
      'Tools': 'from-orange-500 to-red-500',
      'Implementation': 'from-teal-500 to-green-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Content Discovery</h2>
              <p className="text-sm text-gray-600">Find the latest AI insights and resources</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="trending">Trending</option>
                <option value="rating">Highest Rated</option>
                <option value="recent">Most Recent</option>
                <option value="featured">Featured</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== 'all' || selectedType !== 'all' || sortBy !== 'trending') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setSortBy('trending');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredContent.length} {filteredContent.length === 1 ? 'Result' : 'Results'}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RefreshCw className="w-4 h-4" />
            <span>Updated just now</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedContent(item)}
              >
                {/* Card Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 bg-gradient-to-r ${getCategoryColor(item.category)} rounded-lg text-white`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </div>
                      </div>
                    </div>
                    {item.featured && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Stats */}
                {item.stats && (
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      {item.stats.views && (
                        <div className="flex items-center gap-1 text-gray-600">
                          <TrendingUp className="w-3 h-3" />
                          {item.stats.views}
                        </div>
                      )}
                      {item.stats.rating && (
                        <div className="flex items-center gap-1 text-gray-600">
                          <Star className="w-3 h-3 text-yellow-400" />
                          {item.stats.rating}
                        </div>
                      )}
                      {item.stats.impact && (
                        <div className="flex items-center gap-1 text-green-600 font-medium">
                          <Zap className="w-3 h-3" />
                          {item.stats.impact}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Card Footer */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{item.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <Link
                      href={item.url}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
                setSortBy('trending');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Content Detail Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedContent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-r ${getCategoryColor(selectedContent.category)} rounded-lg text-white`}>
                      {getTypeIcon(selectedContent.type)}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {selectedContent.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {selectedContent.readTime}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedContent(null)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedContent.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedContent.description}
                </p>

                {selectedContent.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {selectedContent.stats.views && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{selectedContent.stats.views}</div>
                        <div className="text-sm text-gray-600">Views</div>
                      </div>
                    )}
                    {selectedContent.stats.rating && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{selectedContent.stats.rating}</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    )}
                    {selectedContent.stats.impact && (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{selectedContent.stats.impact}</div>
                        <div className="text-sm text-gray-600">Impact</div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href={selectedContent.url}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                    Read Full Content
                  </Link>
                  <button
                    onClick={() => setSelectedContent(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025;