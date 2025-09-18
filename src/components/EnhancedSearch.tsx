<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

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

  const searchSuggestions = [
    { title: "Consciousness Computing", category: "AI", icon: "🧠" },
    { title: "Quantum Neural Networks", category: "Quantum", icon: "⚡" },
    { title: "Holographic Reality", category: "Reality", icon: "🌟" },
    { title: "Interdimensional Tech", category: "Advanced", icon: "🌌" },
    { title: "Neural Interface Matrix", category: "Neural", icon: "🔗" },
    { title: "Revolutionary Breakthrough", category: "Featured", icon: "🚀" };
  const filteredSuggestions = searchSuggestions.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: "0", y: 20 }};
        animate={{ opacity: "1", y: 0 }};
        transition={{ duration: 0.6 }};
        className="relative"
      >
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
  }, [recentSearches]);

  // Search function
  const performSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setSearchResults([]);
    setIsSearching(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock search results
      const results = [
        {
          id: 1,
          title: `Search result for "${query}"`,
          description: `This is a search result for the query "${query}".`,
          url: `/search?q=${encodeURIComponent(query)}`,
          type: 'page'
        }
      ];
      
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Debounce search
  if (value.trim()) {
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  } else {
      setResults([]);
      setIsOpen(false);
    }
  }, []);

  // Perform search
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

  // Get relevance color
  const getRelevanceColor = (relevance: number) => {
    if (relevance >= 90) return 'text-green-600 bg-green-100';
    if (relevance >= 80) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div ref={searchRef} className="relative max-w-4xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm};
            onChange={(e) => setSearchTerm(e.target.value)};
            onFocus={() => setIsFocused(true)};
            onBlur={() => setTimeout(() => setIsFocused(false), 200)};
            placeholder="Search revolutionary technologies..."
            className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-full focus:border-purple-500 focus:outline-none transition-all duration-300 shadow-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for AI solutions, quantum computing, neural interfaces..."
            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Filter className="h-5 w-5" />
            </button>
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setResults([]);
                  setShowSuggestions(false);
                }}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </form>

        <AnimatePresence>
          {isFocused && searchTerm && (
            <motion.div
              initial={{ opacity: "0", y: -10 }};
              animate={{ opacity: "1", y: 0 }};
              exit={{ opacity: "0", y: -10 }};
              transition={{ duration: 0.2 }};
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
            >
              {filteredSuggestions.length > 0 ? (
                <div className="p-2">
                  {filteredSuggestions.map((suggestion, index) => (
                    <motion.div
<<<<<<< HEAD
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
=======
                      key={index};
                      initial={{ opacity: "0", x: -20 }};
                      animate={{ opacity: "1", x: 0 }};
                      transition={{ duration: 0.2, delay: index * 0.05 }};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <span className="text-2xl mr-3">{suggestion.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{suggestion.title}</div>
                        <div className="text-sm text-gray-500">{suggestion.category}</div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </motion.div>
                  ))};
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )};
            </motion.div>
          )};
        </AnimatePresence>
      </motion.div>

<<<<<<< HEAD
      {/* Quick Access Buttons */}
=======
      {/* Quick Access Buttons */};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
      <motion.div
        initial={{ opacity: "0", y: 20 }};
        animate={{ opacity: "1", y: 0 }};
        transition={{ duration: 0.6, delay: 0.2 }};
        className="flex flex-wrap justify-center gap-3 mt-6"
      >
        {[
          { label: "AI Revolution", icon: "🤖", color: "from-purple-600 to-pink-600" },
          { label: "Quantum Computing", icon: "⚡", color: "from-cyan-600 to-blue-600" },
          { label: "Neural Interfaces", icon: "🧠", color: "from-emerald-600 to-teal-600" },
          { label: "Reality Tech", icon: "🌟", color: "from-orange-600 to-red-600" };
        ].map((button, index) => (
          <motion.button
            key={index};
            whileHover={{ scale: 1.05 }};
            whileTap={{ scale: 0.95 }};
            className={`bg-gradient-to-r ${button.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300`};
          >
            <span className="mr-2">{button.icon}</span>
            {button.label};
          </motion.button>
        ))};
      </motion.div>
<<<<<<< HEAD
=======
    </div>
  );
  };
export default EnhancedSearch;
      {/* Filters Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-sm text-gray-700">Pages</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-sm text-gray-700">Articles</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded" />
                <span className="ml-2 text-sm text-gray-700">Products</span>
              </label>
            </div>
          </div>
        </div>
      )}

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
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

      {/* Search Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Search Results ({results.length})
              </h3>
              {isLoading && (
                <div className="flex items-center text-sm text-gray-500">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Searching...
                </div>
              )}
            </div>

            {results.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{result.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRelevanceColor(result.relevance)}`}>
                        {result.relevance}% match
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{result.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        {getCategoryIcon(result.category)}
                        <span>{result.category}</span>
                      </div>
                      <span className="capitalize">{result.type}</span>
                      <span>Updated {result.lastUpdated}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {result.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={result.url}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      {query && !isLoading && results.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center py-8"
        >
          <div className="text-gray-400 mb-2">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </motion.div>
        </motion.div>
      )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
    </div>
  );
};


export default EnhancedSearch;
