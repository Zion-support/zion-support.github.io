import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  X,
  ChevronDown,
  Check,
  Star,
  Tag,
  MapPin,
  Calendar,
  Users,
  Zap,
  Brain,
  Cloud,
  Shield,
  Globe
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  location?: string;
  date?: string;
  rating?: number;
  type: 'service' | 'article' | 'team' | 'technology';
}

interface FilterOption {
  id: string;
  label: string;
  value: string;
  count: number;
}

interface SearchAndFilterSystemProps {
  data: SearchResult[];
  onResultsChange?: (results: SearchResult[]) => void;
  placeholder?: string;
  showFilters?: boolean;
}

export const SearchAndFilterSystem: React.FC<SearchAndFilterSystemProps> = ({
  data,
  onResultsChange,
  placeholder = "Search services, articles, team members...",
  showFilters = true
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'rating' | 'name'>('relevance');

  // Filter options
  const filterOptions = useMemo(() => {
    const categories = data.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const types = data.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      categories: Object.entries(categories).map(([key, count]) => ({
        id: key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: key,
        count
      })),
      types: Object.entries(types).map(([key, count]) => ({
        id: key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: key,
        count
      }))
    };
  }, [data]);

  // Filtered and sorted results
  const filteredResults = useMemo(() => {
    let results = data.filter(item => {
      // Search query filter
      const matchesSearch = searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Active filters
      const matchesFilters = activeFilters.size === 0 ||
        Array.from(activeFilters).some(filter =>
          item.tags.includes(filter) ||
          item.type === filter ||
          item.category === filter
        );

      return matchesSearch && matchesCategory && matchesFilters;
    });

    // Sort results
    switch (sortBy) {
      case 'date':
        results = results.sort((a, b) => {
          if (!a.date || !b.date) return 0;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        break;
      case 'rating':
        results = results.sort((a, b) => {
          if (!a.rating || !b.rating) return 0;
          return b.rating - a.rating;
        });
        break;
      case 'name':
        results = results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // relevance
        // Keep original order for relevance
        break;
    }

    return results;
  }, [data, searchQuery, selectedCategory, activeFilters, sortBy]);

  // Update parent component with results
  useEffect(() => {
    onResultsChange?.(filteredResults);
  }, [filteredResults, onResultsChange]);

  // Toggle filter
  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId);
    } else {
      newFilters.add(filterId);
    }
    setActiveFilters(newFilters);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters(new Set());
    setSelectedCategory('all');
    setSortBy('relevance');
  };

  // Get icon for type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <Zap className="w-4 h-4" />;
      case 'article': return <Tag className="w-4 h-4" />;
      case 'team': return <Users className="w-4 h-4" />;
      case 'technology': return <Brain className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors = {
      'ai': 'text-purple-400',
      'cloud': 'text-blue-400',
      'security': 'text-red-400',
      'development': 'text-green-400',
      'consulting': 'text-yellow-400',
      'digital-transformation': 'text-cyan-400'
    };
    return colors[category as keyof typeof colors] || 'text-zinc-400';
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 backdrop-blur-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        <AnimatePresence>
          {isSearchFocused && searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto"
            >
              {filteredResults.slice(0, 5).map((result) => (
                <div
                  key={result.id}
                  className="p-3 hover:bg-zinc-800/50 transition-colors cursor-pointer border-b border-zinc-700/30 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-zion-cyan">
                      {getTypeIcon(result.type)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white">{result.title}</div>
                      <div className="text-xs text-zinc-400 truncate">{result.description}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full bg-zinc-800/50 ${getCategoryColor(result.category)}`}>
                      {result.category}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filters and Sort */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
            >
              <option value="all">All Categories</option>
              {filterOptions.categories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Sort Options */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="appearance-none pl-4 pr-10 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
            >
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              showFilterPanel
                ? 'bg-zion-cyan text-white'
                : 'bg-zinc-900/50 text-zinc-300 hover:text-white border border-zinc-700/50'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFilters.size > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                {activeFilters.size}
              </span>
            )}
          </button>

          {/* Clear Filters */}
          {activeFilters.size > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilterPanel && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-6 overflow-hidden"
          >
            <div className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">
              <h3 className="text-sm font-medium text-white mb-4">Advanced Filters</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Type Filters */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Type</h4>
                  <div className="space-y-2">
                    {filterOptions.types.map((type) => (
                      <label key={type.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.has(type.value)}
                          onChange={() => toggleFilter(type.value)}
                          className="w-4 h-4 text-zion-cyan bg-zinc-800 border-zinc-600 rounded focus:ring-zion-cyan focus:ring-2"
                        />
                        <span className="text-sm text-zinc-300">{type.label}</span>
                        <span className="text-xs text-zinc-500">({type.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tag Filters */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Cloud', 'Security', 'DevOps', 'Digital Transformation', 'Machine Learning'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleFilter(tag.toLowerCase())}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                          activeFilters.has(tag.toLowerCase())
                            ? 'bg-zion-cyan text-white'
                            : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Filters */}
                <div>
                  <h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Location</h4>
                  <div className="space-y-2">
                    {['Global', 'North America', 'Europe', 'Asia Pacific'].map((location) => (
                      <label key={location} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeFilters.has(location.toLowerCase())}
                          onChange={() => toggleFilter(location.toLowerCase())}
                          className="w-4 h-4 text-zion-cyan bg-zinc-800 border-zinc-600 rounded focus:ring-zion-cyan focus:ring-2"
                        />
                        <span className="text-sm text-zinc-300">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Count */}
      <div className="mb-4 text-sm text-zinc-400">
        Showing {filteredResults.length} of {data.length} results
        {searchQuery && ` for "${searchQuery}"`}
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        {filteredResults.map((result) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-zinc-800/50 rounded-lg text-zion-cyan group-hover:bg-zion-cyan/20 transition-colors">
                {getTypeIcon(result.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                    {result.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {result.rating && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{result.rating}</span>
                      </div>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full bg-zinc-800/50 ${getCategoryColor(result.category)}`}>
                      {result.category}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 mb-3 line-clamp-2">{result.description}</p>

                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  {result.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {result.location}
                    </div>
                  )}
                  {result.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {result.date}
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {result.tags.slice(0, 3).join(', ')}
                    {result.tags.length > 3 && ` +${result.tags.length - 3} more`}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredResults.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Search className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No results found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your search terms or filters
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
};