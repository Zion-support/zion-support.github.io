import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Star, 
  Clock, 
  Calendar, 
  BookOpen, 
  Download, 
  Play,
  ArrowRight,
  X,
  RefreshCw
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  type: 'Article' | 'Case Study' | 'Free Download' | 'Video' | 'Webinar';
  readTime?: string;
  publishDate: string;
  author: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  views?: number;
  likes?: number;
}

interface InteractiveContentDiscoveryProps {
  content: ContentItem[];
  maxItems?: number;
  showFilters?: boolean;
  showSearch?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const InteractiveContentDiscovery: React.FC<InteractiveContentDiscoveryProps> = ({
  content,
  maxItems = 12,
  showFilters = true,
  showSearch = true,
  autoRefresh = false,
  refreshInterval = 30000
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>(content);

  const categories = [
    { id: 'all', name: 'All Categories', count: content.length },
    { id: 'ai-automation', name: 'AI Automation', count: content.filter(c => c.category === 'ai-automation').length },
    { id: 'cybersecurity', name: 'Cybersecurity', count: content.filter(c => c.category === 'cybersecurity').length },
    { id: 'case-studies', name: 'Case Studies', count: content.filter(c => c.category === 'case-studies').length },
    { id: 'resources', name: 'Resources', count: content.filter(c => c.category === 'resources').length },
    { id: 'trends', name: 'Trends & Insights', count: content.filter(c => c.category === 'trends').length }
  ];

  const types = [
    { id: 'all', name: 'All Types', count: content.length },
    { id: 'Article', name: 'Articles', count: content.filter(c => c.type === 'Article').length },
    { id: 'Case Study', name: 'Case Studies', count: content.filter(c => c.type === 'Case Study').length },
    { id: 'Free Download', name: 'Free Downloads', count: content.filter(c => c.type === 'Free Download').length },
    { id: 'Video', name: 'Videos', count: content.filter(c => c.type === 'Video').length },
    { id: 'Webinar', name: 'Webinars', count: content.filter(c => c.type === 'Webinar').length }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Newest First' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'trending', name: 'Most Trending' },
    { id: 'featured', name: 'Featured' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'alphabetical', name: 'A-Z' }
  ];

  // Filter and sort content
  useEffect(() => {
    let filtered = content.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    });

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'trending':
          return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
        case 'featured':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        case 'popular':
          return (b.views || 0) - (a.views || 0);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredContent(filtered.slice(0, maxItems));
  }, [searchTerm, selectedCategory, selectedType, sortBy, content, maxItems]);

  // Auto refresh
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1000);
      }, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, refreshInterval]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Article': return <BookOpen className="w-4 h-4" />;
      case 'Case Study': return <Play className="w-4 h-4" />;
      case 'Free Download': return <Download className="w-4 h-4" />;
      case 'Video': return <Play className="w-4 h-4" />;
      case 'Webinar': return <Play className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Article': return 'bg-blue-100 text-blue-800';
      case 'Case Study': return 'bg-green-100 text-green-800';
      case 'Free Download': return 'bg-purple-100 text-purple-800';
      case 'Video': return 'bg-red-100 text-red-800';
      case 'Webinar': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            🔍 Interactive Content Discovery
          </h2>
          <p className="text-gray-600">
            Discover the perfect content for your needs with our intelligent search and filtering system
          </p>
        </div>
        <div className="flex items-center gap-2">
          {autoRefresh && (
            <button
              onClick={() => {
                setIsRefreshing(true);
                setTimeout(() => setIsRefreshing(false), 1000);
              }}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          )}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <Filter className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4 mb-8">
        {/* Search Bar */}
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, case studies, and resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        {/* Basic Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name} ({type.count})
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-lg p-4 space-y-4"
            >
              <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="date"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Read Time
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Any length</option>
                    <option value="short">Under 10 min</option>
                    <option value="medium">10-20 min</option>
                    <option value="long">Over 20 min</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredContent.length} of {content.length} results
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">View:</span>
          <button className="p-2 rounded-lg bg-blue-100 text-blue-600">
            Grid
          </button>
          <button className="p-2 rounded-lg bg-gray-100 text-gray-600">
            List
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <Link href={item.href}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  {/* Content Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {item.trending && (
                        <TrendingUp className="w-4 h-4 text-orange-500" />
                      )}
                      {item.featured && (
                        <Star className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                  </div>

                  {/* Content Details */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      {item.readTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                      {item.type}
                    </span>
                  </div>

                  {/* Stats */}
                  {(item.views || item.likes) && (
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                      {item.views && (
                        <span className="text-xs text-gray-500">
                          {item.views.toLocaleString()} views
                        </span>
                      )}
                      {item.likes && (
                        <span className="text-xs text-gray-500">
                          {item.likes.toLocaleString()} likes
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedType('all');
              setSortBy('newest');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Load More */}
      {filteredContent.length >= maxItems && (
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Load More Content
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveContentDiscovery;