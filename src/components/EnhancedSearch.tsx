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
  // Blog posts
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

export const EnhancedSearch: React.FC<EnhancedSearchProps> = ({
  className = '',
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,
  variant = 'default'
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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
      if (!isOpen) return;

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
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, query]);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Add to recent searches
    const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
    
    setIsLoading(false);
    setIsOpen(true);
    
    if (onSearch) {
      onSearch(query);
    }
  }, [query, onSearch, recentSearches]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
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
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className={`relative flex items-center rounded-xl transition-all duration-300 ${getVariantClasses()}`}>
        <div className="pl-4 pr-3 text-gray-400">
          {getSearchIcon()}
        </div>
        
        <input
          ref={inputRef}
          type="text"
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
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <Code className="w-4 h-4 text-cyan-500" />
                        </div>
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
};
