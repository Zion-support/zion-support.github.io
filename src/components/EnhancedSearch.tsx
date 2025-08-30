import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence    } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, Globe, Building, Code, Shield    } from 'lucide-react';
import { useNavigate    } from 'react-router-dom';
import { useDebounce    } from '@/hooks/useDebounce';

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

export const EnhancedSearch: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<any>({
    type: [],
    category: [],
    tags: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState<any>([]);
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

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: anyanyMouseEvent)    => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: anyanyKeyboardEvent)    => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      } else if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = useCallback((searchQuery: anystring)    => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
      
      // Navigate to search results or close search
      setIsOpen(false);
      setQuery('');
    }
  }, [recentSearches]);

  const handleResultClick = (result: anyanySearchResult)    => {
    handleSearch(result.title);
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  const toggleFilter = (filterType: anykeyof SearchFilter, value: string)    => {
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

  const getTypeIcon = (type: anystring)    => {
    switch (type) {
      case 'service': return <Code className="h-4 w-4" />;
      case 'page': return <Globe className="h-4 w-4" />;
      case 'blog': return <TrendingUp className="h-4 w-4" />;
      case 'case-study': return <Building className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />;
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
        )}
      </AnimatePresence>
    </div>
  );
};