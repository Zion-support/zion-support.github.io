"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, Filter, TrendingUp, Clock, 
  Star, Zap, Brain, Shield, Rocket, 
  Globe, Cpu, Database, Cloud
} from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  relevance: number;
  lastUpdated: string;
  tags: string[];
  type: 'service' | 'page' | 'blog' | 'case-study';
}

interface SearchFilters {
  category: string[];
  type: string[];
  dateRange: 'all' | 'week' | 'month' | 'year';
  relevance: 'all' | 'high' | 'medium' | 'low';
}

const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    type: [],
    dateRange: 'all',
    relevance: 'all'
  });
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Revolutionary Breakthrough 2026',
      description: 'Discover the latest AI breakthroughs that are reshaping industries and creating new possibilities.',
      category: 'AI',
      url: '/pages/AIRevolutionaryBreakthrough2026',
      relevance: 95,
      lastUpdated: '2025-01-20',
      tags: ['AI', 'Machine Learning', 'Revolutionary', '2026'],
      type: 'page'
    },
    {
      id: '2',
      title: 'Quantum Computing Revolution 2026',
      description: 'Experience the power of quantum computing and its revolutionary applications.',
      category: 'Quantum',
      url: '/pages/QuantumComputingRevolution2026',
      relevance: 92,
      lastUpdated: '2025-01-19',
      tags: ['Quantum', 'Computing', 'Revolution', '2026'],
      type: 'page'
    },
    {
      id: '3',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces that enable thought-controlled devices.',
      category: 'Neural',
      url: '/pages/NeuralInterfaceRevolution2026',
      relevance: 90,
      lastUpdated: '2025-01-18',
      tags: ['Neural', 'Interface', 'BCI', 'Revolution'],
      type: 'page'
    },
    {
      id: '4',
      title: 'Advanced AI Transformation 2026',
      description: 'Transform your business with advanced AI solutions and automation.',
      category: 'AI',
      url: '/pages/AdvancedAITransformation2026',
      relevance: 88,
      lastUpdated: '2025-01-17',
      tags: ['AI', 'Transformation', 'Business', 'Automation'],
      type: 'service'
    },
    {
      id: '5',
      title: 'Ultimate Tech Revolution 2026',
      description: 'The most comprehensive showcase of revolutionary technologies.',
      category: 'Technology',
      url: '/pages/UltimateTechRevolution2026',
      relevance: 85,
      lastUpdated: '2025-01-16',
      tags: ['Technology', 'Revolution', 'Showcase', '2026'],
      type: 'page'
    }
  ];

  const categories = ['AI', 'Quantum', 'Neural', 'Biotech', 'Space', 'Robotics', 'Technology'];
  const types = ['service', 'page', 'blog', 'case-study'];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {
      const updated = [searchQuery, ...recentSearches.slice(0, 4)];
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query and filters
    let filteredResults = searchData.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = filters.category.length === 0 || 
                             filters.category.includes(item.category);
      
      const matchesType = filters.type.length === 0 || 
                         filters.type.includes(item.type);
      
      return matchesQuery && matchesCategory && matchesType;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(filteredResults);
    setIsLoading(false);
  }, [filters]);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveRecentSearch(query);
      performSearch(query);
      setShowSuggestions(false);
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  // Handle single value filter change
  const handleSingleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value) ? [] : [value]
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: [],
      type: [],
      dateRange: 'all',
      relevance: 'all'
    });
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI': <Brain className="w-4 h-4" />,
      'Quantum': <Zap className="w-4 h-4" />,
      'Neural': <Cpu className="w-4 h-4" />,
      'Biotech': <Database className="w-4 h-4" />,
      'Space': <Rocket className="w-4 h-4" />,
      'Robotics': <Shield className="w-4 h-4" />,
      'Technology': <Globe className="w-4 h-4" />
    };
    return icons[category] || <Cloud className="w-4 h-4" />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Search for AI services, solutions, or insights..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </form>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => handleFilterChange('category', category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <div className="space-y-2">
                  {types.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => handleFilterChange('type', type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Other Filters</label>
                <div className="space-y-2">
                  <select
                    value={filters.dateRange}
                    onChange={(e) => handleSingleFilterChange('dateRange', e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-md px-3 py-1"
                  >
                    <option value="all">All Time</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(search);
                        setShowSuggestions(false);
                      }}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {['AI Revolution', 'Quantum Computing', 'Neural Interfaces', 'Biotech', 'Space Tech'].map((trend, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(trend);
                      setShowSuggestions(false);
                    }}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {trend}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSearch;