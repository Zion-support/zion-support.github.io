import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Filter, TrendingUp, Clock, Globe, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SearchResult {

  id: string;
  title: string;
  description: string;
  url: string;
  type: 'service' | 'solution' | 'page' | 'article';
  category?: string;
  tags?: string[];
}

interface SearchComponentProps {

  className?: string;
  placeholder?: string;
  showFilters?: boolean;
  onSearch?: (query: string, filters: SearchFilters) => void;
}

interface SearchFilters {

  type: string[];
  category: string[];
  tags: string[];
}

export const SearchComponent: React.FC<SearchComponentProps> = ({

  className = '',
  placeholder = 'Search for AI services, solutions, and more...',
  showFilters = true,
  onSearch
}) => {

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({

    type: [],
    category: [],
    tags: []
  });
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock data - in real app, this would come from API
  const mockResults: SearchResult[] = [
    {

      id: '1',
      title: 'AI Enterprise Automation Platform',
      description: 'Transform your business operations with AI-powered automation',
      url: '/services/ai-enterprise-automation-platform',
      type: 'service',
      category: 'AI & Automation',
      tags: ['AI', 'Automation', 'Enterprise']
    },
    {

      id: '2',
      title: 'Quantum Edge Computing Solutions',
      description: 'Next-generation computing power at the edge',
      url: '/solutions/quantum-edge-computing',
      type: 'solution',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Edge Computing', 'Innovation']
    },
    {

      id: '3',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and prevention',
      url: '/services/ai-cybersecurity-platform',
      type: 'service',
      category: 'Cybersecurity',
      tags: ['AI', 'Security', 'Threat Detection']
    }
  ];

  const filterOptions = {

    type: ['service', 'solution', 'page', 'article'],
    category: ['AI & Automation', 'Cybersecurity', 'Quantum Computing', 'Cloud & DevOps', 'Digital Transformation'],
    tags: ['AI', 'Machine Learning', 'Quantum', 'Security', 'Cloud', 'Automation', 'Innovation']
  };

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {

        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {

    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {

      setRecentSearches(JSON.parse(saved));
    }

    // Mock trending searches
    setTrendingSearches([
      'AI Automation',
      'Quantum Computing',
      'Cybersecurity',
      'Digital Transformation',
      'Edge Computing'
    ]);
  }, []);

  const handleSearch = (searchQuery: string = query) => {

    if (!searchQuery.trim()) return;

    // Save to recent searches
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));

    // Filter results based on query and filters
    const filtered = mockResults.filter(result => {

      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilters = filters.type.length === 0 || filters.type.includes(result.type) &&
                           (filters.category.length === 0 || filters.category.includes(result.category || ''));

      return matchesQuery && matchesFilters;
    });

    setResults(filtered);
    setIsOpen(true);
    onSearch?.(searchQuery, filters);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {

    if (e.key === 'Enter') {

      handleSearch();
    } else if (e.key === 'Escape') {

      setIsOpen(false);
    }
  };

  const clearSearch = () => {

    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const toggleFilters = () => {

    setShowFiltersPanel(!showFiltersPanel);
  };

  const updateFilter = (filterType: keyof SearchFilters, value: string) => {

    setFilters(prev => ({

      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
        
        {showFilters && (
          <button
            onClick={toggleFilters}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors duration-200 ${

              showFiltersPanel ? 'bg-cyan-100 text-cyan-600' : 'hover:bg-gray-100'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFiltersPanel && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Type Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Type</h4>
                <div className="space-y-2">
                  {filterOptions.type.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => updateFilter('type', type)}
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                <div className="space-y-2">
                  {filterOptions.category.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => updateFilter('category', category)}
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Tags</h4>
                <div className="space-y-2">
                  {filterOptions.tags.map(tag => (
                    <label key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.tags.includes(tag)}
                        onChange={() => updateFilter('tags', tag)}
                        className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results & Suggestions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {query && results.length > 0 ? (
              // Search Results
              <div className="p-4">
                <h4 className="font-medium text-gray-900 mb-3">Search Results</h4>
                <div className="space-y-3">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      to={result.url}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-cyan-600" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {result.title}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {result.type}
                            </span>
                            {result.category && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                                {result.category}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : query ? (
              // No Results
              <div className="p-4 text-center text-gray-500">
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              // Search Suggestions
              <div className="p-4">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => {

                            setQuery(search);
                            handleSearch(search);
                          }}
                          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Searches */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Trending Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {

                          setQuery(search);
                          handleSearch(search);
                        }}
                        className="px-3 py-1 text-sm bg-cyan-100 hover:bg-cyan-200 text-cyan-800 rounded-full transition-colors duration-200"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};