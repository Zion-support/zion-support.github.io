import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, SortAsc, SortDesc, Clock, Star, Tag } from 'lucide-react';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'blog' | 'service' | 'documentation' | 'api';
  category?: string;
  tags?: string[];
  relevanceScore?: number;
  lastModified?: Date;
  author?: string;
  metadata?: Record<string, any>;
}

export interface SearchFilter {
  type?: string[];
  category?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  tags?: string[];
}

interface EnhancedSearchProps {
  onSearch?: (query: string, results: SearchResult[]) => void;
  onResultClick?: (result: SearchResult) => void;
  placeholder?: string;
  enableFilters?: boolean;
  enableSuggestions?: boolean;
  enableHistory?: boolean;
  maxResults?: number;
  debounceMs?: number;
  searchEndpoint?: string;
}

const sampleResults: SearchResult[] = [
  {
    id: '1',
    title: 'AI-Powered Business Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
    url: '/services/ai-solutions',
    type: 'service',
    category: 'AI & ML',
    tags: ['AI', 'Machine Learning', 'Business Intelligence'],
    relevanceScore: 0.95,
    lastModified: new Date('2024-01-15'),
    author: 'Dr. Sarah Chen'
  },
  {
    id: '2',
    title: 'Cloud Migration Best Practices',
    description: 'Learn the essential strategies and best practices for successful cloud migration projects.',
    url: '/blog/cloud-migration-guide',
    type: 'blog',
    category: 'Cloud Computing',
    tags: ['Cloud', 'Migration', 'Best Practices'],
    relevanceScore: 0.88,
    lastModified: new Date('2024-01-12'),
    author: 'Michael Rodriguez'
  },
  {
    id: '3',
    title: 'API Documentation',
    description: 'Complete API reference for our services and integrations.',
    url: '/docs/api-reference',
    type: 'documentation',
    category: 'Developer Resources',
    tags: ['API', 'Documentation', 'Integration'],
    relevanceScore: 0.82,
    lastModified: new Date('2024-01-10'),
    author: 'Tech Team'
  },
  {
    id: '4',
    title: 'Digital Transformation Strategy',
    description: 'Comprehensive guide to digital transformation for modern enterprises.',
    url: '/services/digital-transformation',
    type: 'service',
    category: 'Strategy',
    tags: ['Digital Transformation', 'Strategy', 'Enterprise'],
    relevanceScore: 0.79,
    lastModified: new Date('2024-01-08'),
    author: 'David Park'
  },
  {
    id: '5',
    title: 'Cybersecurity Trends 2024',
    description: 'Stay ahead of emerging cyber threats with insights into the latest security trends.',
    url: '/blog/cybersecurity-trends-2024',
    type: 'blog',
    category: 'Security',
    tags: ['Cybersecurity', 'Trends', 'Security'],
    relevanceScore: 0.76,
    lastModified: new Date('2024-01-05'),
    author: 'Jennifer Liu'
  }
];

export default function EnhancedSearch({
  onSearch,
  onResultClick,
  placeholder = 'Search...',
  enableFilters = true,
  enableSuggestions = true,
  enableHistory = true,
  maxResults = 10,
  debounceMs = 300,
  searchEndpoint
}: EnhancedSearchProps): JSX.Element {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filters, setFilters] = useState<SearchFilter>({});
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'title'>('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Load search history from localStorage
  useEffect(() => {
    if (enableHistory && typeof window !== 'undefined') {
      const saved = localStorage.getItem('searchHistory');
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    }
  }, [enableHistory]);

  // Generate suggestions based on query
  const generateSuggestions = useCallback((query: string) => {
    if (!query.trim()) return [];

    const allTitles = sampleResults.map(r => r.title);
    const allTags = sampleResults.flatMap(r => r.tags || []);
    const allCategories = sampleResults.map(r => r.category).filter(Boolean);

    const suggestions = [
      ...allTitles.filter(title => 
        title.toLowerCase().includes(query.toLowerCase())
      ),
      ...allTags.filter(tag => 
        tag.toLowerCase().includes(query.toLowerCase())
      ),
      ...allCategories.filter(category => 
        category?.toLowerCase().includes(query.toLowerCase())
      )
    ].slice(0, 5);

    return [...new Set(suggestions)];
  }, []);

  // Debounced search function
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // Filter results based on query and filters
      let filteredResults = sampleResults.filter(result => {
        const matchesQuery = 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesType = !filters.type?.length || filters.type.includes(result.type);
        const matchesCategory = !filters.category?.length || filters.category.includes(result.category || '');
        const matchesTags = !filters.tags?.length || 
          filters.tags.some(filterTag => result.tags?.includes(filterTag));

        return matchesQuery && matchesType && matchesCategory && matchesTags;
      });

      // Sort results
      filteredResults.sort((a, b) => {
        let comparison = 0;
        
        switch (sortBy) {
          case 'relevance':
            comparison = (b.relevanceScore || 0) - (a.relevanceScore || 0);
            break;
          case 'date':
            comparison = (b.lastModified?.getTime() || 0) - (a.lastModified?.getTime() || 0);
            break;
          case 'title':
            comparison = a.title.localeCompare(b.title);
            break;
        }

        return sortOrder === 'asc' ? -comparison : comparison;
      });

      const limitedResults = filteredResults.slice(0, maxResults);
      setResults(limitedResults);
      onSearch?.(searchQuery, limitedResults);

      // Add to search history
      if (enableHistory && searchQuery.trim()) {
        setSearchHistory(prev => {
          const newHistory = [searchQuery, ...prev.filter(item => item !== searchQuery)].slice(0, 10);
          localStorage.setItem('searchHistory', JSON.stringify(newHistory));
          return newHistory;
        });
      }

    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [filters, sortBy, sortOrder, maxResults, onSearch, enableHistory]);

  // Handle input change with debouncing
  const handleInputChange = useCallback((value: string) => {
    setQuery(value);
    setSelectedIndex(-1);

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Generate suggestions
    if (enableSuggestions && value.trim()) {
      setSuggestions(generateSuggestions(value));
    } else {
      setSuggestions([]);
    }

    // Debounced search
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(value);
    }, debounceMs);
  }, [performSearch, generateSuggestions, enableSuggestions, debounceMs]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        } else if (query.trim()) {
          performSearch(query);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        setResults([]);
        break;
    }
  }, [isOpen, selectedIndex, results, query, performSearch, handleResultClick]);

  // Handle result click
  const handleResultClick = useCallback((result: SearchResult) => {
    onResultClick?.(result);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, [onResultClick]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Get unique categories and types for filters
  const categories = useMemo(() => 
    [...new Set(sampleResults.map(r => r.category).filter(Boolean))], 
    []
  );

  const types = useMemo(() => 
    [...new Set(sampleResults.map(r => r.type))], 
    []
  );

  const allTags = useMemo(() => 
    [...new Set(sampleResults.flatMap(r => r.tags || []))], 
    []
  );

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Filters */}
            {enableFilters && (
              <div className="p-4 border-b border-gray-200">
                <div className="flex flex-wrap gap-2 mb-3">
                  <select
                    value={filters.type?.[0] || ''}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      type: e.target.value ? [e.target.value] : []
                    }))}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="">All Types</option>
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={filters.category?.[0] || ''}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      category: e.target.value ? [e.target.value] : []
                    }))}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                  </select>

                  <button
                    onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                    className="text-sm border border-gray-300 rounded px-2 py-1 flex items-center"
                  >
                    {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="p-4 text-center text-gray-500">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
                Searching...
              </div>
            )}

            {/* Search History */}
            {!query && enableHistory && searchHistory.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Recent Searches
                </div>
                {searchHistory.slice(0, 5).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange(item)}
                    aria-label={`Search for ${item}`}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {/* Suggestions */}
            {enableSuggestions && suggestions.length > 0 && !isLoading && (
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleInputChange(suggestion)}
                    aria-label={`Select suggestion: ${suggestion}`}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Results */}
            {results.length > 0 && !isLoading && (
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Results ({results.length})
                </div>
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    className={`p-3 rounded cursor-pointer ${
                      index === selectedIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleResultClick(result)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900" id="resulttitle">{result.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{result.description}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {result.type}
                          </span>
                          {result.category && (
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                              {result.category}
                            </span>
                          )}
                          {result.tags?.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded flex items-center">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {result.relevanceScore && (
                        <div className="text-xs text-gray-400 ml-2">
                          {Math.round(result.relevanceScore * 100)}%
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {query && results.length === 0 && !isLoading && (
              <div className="p-4 text-center text-gray-500">
                <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <p>No results found for &quot;{query}&quot;</p>
                <p className="text-xs mt-1">Try different keywords or check your spelling</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}