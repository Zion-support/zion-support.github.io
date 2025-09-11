import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, Globe, Building, Code, Shield, Sparkles, Brain, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'blog' | 'case-study';
  category: string;
  tags: string[];
  relevance: number;
}

interface SearchFilter {
  type: string[];
  category: string[];
  tags: string[];
}

const searchData: SearchResult[] = [
  // Services
  {
    id: 'ai-solutions',
    title: 'AI Business Intelligence',
    description: 'Transform your business with AI-powered insights and analytics',
    url: '/services/ai-business-intelligence',
    type: 'service',
    category: 'AI Solutions',
    tags: ['AI', 'Business Intelligence', 'Analytics', 'Machine Learning'],
    relevance: 95
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    description: 'Scalable cloud infrastructure and automated deployment solutions',
    url: '/services/cloud-devops',
    type: 'service',
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'DevOps', 'Infrastructure', 'Automation'],
    relevance: 90
  },
  {
    id: 'cybersecurity',
    title: 'AI Cybersecurity Suite',
    description: 'Advanced AI-powered security solutions for enterprise protection',
    url: '/services/ai-cybersecurity-suite',
    type: 'service',
    category: 'Cybersecurity',
    tags: ['Security', 'AI', 'Cybersecurity', 'Enterprise'],
    relevance: 88
  },
  // Pages
  {
    id: 'about',
    title: 'About Zion Tech Group',
    description: 'Learn about our mission, values, and commitment to innovation',
    url: '/about',
    type: 'page',
    category: 'Company',
    tags: ['About', 'Company', 'Mission', 'Values'],
    relevance: 85
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with our team for consultations and support',
    url: '/contact',
    type: 'page',
    category: 'Support',
    tags: ['Contact', 'Support', 'Consultation', 'Help'],
    relevance: 80
  },
  // Blog posts (example)
  {
    id: 'ai-trends-2025',
    title: 'AI Trends in 2025',
    description: 'Discover the latest artificial intelligence trends shaping business',
    url: '/blog/ai-trends-2025',
    type: 'blog',
    category: 'AI Insights',
    tags: ['AI', 'Trends', '2025', 'Business'],
    relevance: 75
  }
];

const categories = [
  { id: 'ai-solutions', name: 'AI Solutions', icon: Code, color: 'from-cyan-500 to-blue-600' },
  { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Globe, color: 'from-blue-500 to-purple-600' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
  { id: 'digital-transformation', name: 'Digital Transformation', icon: Building, color: 'from-green-500 to-cyan-600' },
  { id: 'consulting', name: 'IT Consulting', icon: TrendingUp, color: 'from-orange-500 to-green-600' }
];

export const EnhancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilter>({
    type: [],
    category: [],
    tags: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI Solutions', 'Cloud Services', 'Cybersecurity', 'Digital Transformation'
  ]);

  const debouncedQuery = useDebounce(query, 300);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zion-recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Search functionality
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchResults = searchData
      .filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(debouncedQuery.toLowerCase()));
        
        const matchesFilters = filters.type.length === 0 || filters.type.includes(item.type) &&
                              filters.category.length === 0 || filters.category.includes(item.category) &&
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes(tag));
        
        return matchesQuery && matchesFilters;
      })
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 10);

    setResults(searchResults);
  }, [debouncedQuery, filters]);
=======
  type: 'service' | 'page' | 'article' | 'ai-suggestion';
  url: string;
  icon?: React.ComponentType<any>;
  relevance: number;
}

interface SearchSuggestion {
  text: string;
  type: 'recent' | 'trending' | 'ai';
}

interface EnhancedSearchProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export function EnhancedSearch({ 
  className = '',
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,
  variant = 'default'
}: EnhancedSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search results - in real app, this would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and machine learning insights for your business',
      type: 'service',
      url: '/services/ai-business-intelligence',
      icon: Brain,
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation computational power for complex problem solving',
      type: 'service',
      url: '/services/quantum-computing',
      icon: Zap,
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Micro SaaS Platform',
      description: 'Scalable software solutions tailored to your specific needs',
      type: 'service',
      url: '/services/micro-saas',
      icon: TrendingUp,
      relevance: 0.88
    }
  ];

  // Mock suggestions
  const mockSuggestions: SearchSuggestion[] = [
    { text: 'AI compliance assistant', type: 'recent' },
    { text: 'Quantum machine learning', type: 'trending' },
    { text: 'Digital transformation consulting', type: 'ai' },
    { text: 'Cloud DevOps automation', type: 'trending' }
  ];
>>>>>>> c96b5a35dcd0e882c20e1a1b4af59f1237edbcbf

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSelectedIndex(-1);
      } else if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      } else if (isOpen) {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            setSelectedIndex(prev => 
              prev < results.length - 1 ? prev + 1 : 0
            );
            break;
          case 'ArrowUp':
            event.preventDefault();
            setSelectedIndex(prev => 
              prev > 0 ? prev - 1 : results.length - 1
            );
            break;
          case 'Enter':
            event.preventDefault();
            if (selectedIndex >= 0 && results[selectedIndex]) {
              handleResultClick(results[selectedIndex]);
            } else if (query.trim()) {
              handleSearch();
            }
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, query]);

  const handleSearch = useCallback(async (searchQuery?: string) => {
    const queryToSearch = searchQuery || query;
    if (!queryToSearch.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter results based on query
    const filteredResults = searchData.filter(result =>
      result.title.toLowerCase().includes(queryToSearch.toLowerCase()) ||
      result.description.toLowerCase().includes(queryToSearch.toLowerCase())
    );

    setResults(filteredResults);
    setIsLoading(false);
    setIsOpen(true);
    
    // Add to recent searches
    const updated = [queryToSearch, ...recentSearches.filter(s => s !== queryToSearch)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
    
    if (onSearch) {
      onSearch(queryToSearch);
    }
  }, [query, recentSearches, onSearch]);

  const handleResultClick = (result: SearchResult) => {
    handleSearch(result.title);
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  const toggleFilter = (filterType: keyof SearchFilter, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({ type: [], category: [], tags: [] });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <Code className="h-4 w-4" />;
      case 'page': return <Globe className="h-4 w-4" />;
      case 'blog': return <TrendingUp className="h-4 w-4" />;
      case 'case-study': return <Building className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />;
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    handleSearch();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const getSearchIcon = () => {
    if (isLoading) {
      return (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Search className="w-5 h-5" />
        </motion.div>
      );
    }
    return <Search className="w-5 h-5" />;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'futuristic':
        return 'bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/50 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20';
      case 'minimal':
        return 'bg-gray-100 border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20';
      default:
        return 'bg-white border border-gray-300 hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20';
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
                {/* Search Input */}
                <div className="relative p-4 border-b border-slate-200 dark:border-slate-700">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for services, solutions, or insights..."
                    className="w-full pl-12 pr-20 py-3 text-lg bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Filters Toggle */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </button>
                  {(filters.type.length > 0 || filters.category.length > 0 || filters.tags.length > 0) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-red-500 hover:text-red-600 transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Filters Panel */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-b border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                      <div className="p-4 space-y-4">
                        {/* Type Filters */}
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Type</h4>
                          <div className="flex flex-wrap gap-2">
                            {['service', 'page', 'blog', 'case-study'].map(type => (
                              <button
                                key={type}
                                onClick={() => toggleFilter('type', type)}
                                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                                  filters.type.includes(type)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                              >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Category Filters */}
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Category</h4>
                          <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                              <button
                                key={category.id}
                                onClick={() => toggleFilter('category', category.name)}
                                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                                  filters.category.includes(category.name)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                              >
                                {category.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {query.trim().length < 2 ? (
                    <div className="p-4 space-y-4">
                      {/* Recent Searches */}
                      {recentSearches.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Recent Searches
                          </h4>
                          <div className="space-y-2">
                            {recentSearches.map((search, index) => (
                              <button
                                key={index}
                                onClick={() => handleSearch(search)}
                                className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                              >
                                {search}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Popular Searches */}
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Popular Searches
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSearch(search)}
                              className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                              {search}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="p-4 space-y-2">
                      {results.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className="w-full text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {getTypeIcon(result.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {result.title}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                                {result.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                  {result.category}
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-500">
                                  {result.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                        No results found
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Try adjusting your search terms or filters
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="flex-1 px-3 py-3 bg-transparent outline-none text-gray-900 placeholder-gray-500"
        />
        
        {query && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={clearSearch}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
        
        <button
          onClick={handleSearch}
          className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Search
        </button>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50"
          >
            {/* Search Results */}
            {results.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Search Results
                </h3>
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedIndex === index
                          ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-3">
                        {result.icon && (
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            <result.icon className="w-4 h-4 text-cyan-500" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {result.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Suggestions
                </h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index + results.length) * 0.1 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
                    >
                      {suggestion.type === 'ai' && <Sparkles className="w-3 h-3 text-cyan-500" />}
                      {suggestion.type === 'trending' && <TrendingUp className="w-3 h-3 text-green-500" />}
                      {suggestion.type === 'recent' && <Clock className="w-3 h-3 text-gray-500" />}
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {suggestion.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {results.length === 0 && query && !isLoading && (
              <div className="p-8 text-center">
                <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try adjusting your search terms or browse our services
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
