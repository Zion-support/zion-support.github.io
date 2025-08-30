import React, { useState, useEffect, useRef, useCallback } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Search, X, Filter, TrendingUp, Clock, Globe, Building, Code, Shield  } from 'lucide-react';
import { useNavigate  } from 'react-router-dom.ts';
import { useDebounce  } from '@/hooks/useDebounce';

interface SearchResult {

  id: string;
  title: string;
  description: string;
  url: string;
  type: 'service' | 'page' | 'blog' | 'case-study' | 'article' | 'ai-suggestion';
  category: string;
  tags: string[];
  relevance: number}

interface SearchFilter {

  type: string[];
  category: string[];
  tags: string[]}

interface SearchSuggestion {
  text: string;
  type: 'recent' | 'trending' | 'ai';
  {/* Removed stray closing brace */}

interface EnhancedSearchProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'default' | 'futuristic' | 'minimal';
  {/* Removed stray closing brace */}

const searchData: SearchResult[] = [
  // Services
  {
    id: 'ai-solutions',
    title: 'AI Business Intelligence',
    description: 'Transform your business with AI-powered insights and analytics',
    url: '/services/ai-business-intelligence',
    type: 'service',
    category: 'AI Solutions',
    tags['AI', 'Business Intelligence', 'Analytics', 'Machine Learning'],
    relevance: 95
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Services',
    description: 'Scalable cloud infrastructure and automated deployment solutions',
    url: '/services/cloud-devops',
    type: 'service',
    category: 'Cloud & DevOps',
    tags['Cloud', 'DevOps', 'Infrastructure', 'Automation'],
    relevance: 90
  },
  {
    id: 'cybersecurity',
    title: 'AI Cybersecurity Suite',
    description: 'Advanced AI-powered security solutions for enterprise protection',
    url: '/services/ai-cybersecurity-suite',
    type: 'service',
    category: 'Cybersecurity',
    tags['Security', 'AI', 'Cybersecurity', 'Enterprise'],
    relevance: 88
  },
  // Pages
  {
    id: 'about',
    title: 'About Zion Tech Group',
    description: 'Learn about our mission, values, and commitment to innovation',
    url: '/about',
    type: 'page',
    category: 'Comp',
    tags['About', 'Comp', 'Mission', 'Values'],
    relevance: 85
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with our team for consultations and support',
    url: '/contact',
    type: 'page',
    category: 'Support',
    tags['Contact', 'Support', 'Consultation', 'Help'],
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
    tags['AI', 'Trends', '2025', 'Business'],
    relevance: 75
  {/* Removed stray closing brace */}
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
    type[],
    category[],
    tags[]
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
      setRecentSearches(JSON.parse(saved))}
  }, []);

  // Search functionality
  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setResults([]);
      return}

    const searchResults = searchData
      .filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(debouncedQuery.toLowerCase()));
        
        const matchesFilters = filters.type.length === 0 || filters.type.includes(item.type) &&
                              filters.category.length === 0 || filters.category.includes(item.category) &&
                              filters.tags.length === 0 || filters.tags.some(tag => item.tags.includes(tag));
        
        return matchesQuery && matchesFilters})
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 10);

    setResults(searchResults)}, [debouncedQuery, filters]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent)  => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)}
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)}, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent)  => {
      if (event.key === 'Escape') {
        setIsOpen(false)} else if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus()}
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, []);

  const handleSearch = useCallback((searchQuery: string)  => {
    if (searchQuery.trim()) {
      // Add to recent searches
      const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('zion-recent-searches', JSON.stringify(updated));
      
      // Navigate to search results or close search
      setIsOpen(false);
      setQuery('')}
  }, [recentSearches]);

  const handleResultClick = (result: SearchResult)  => {
    handleSearch(result.title);
    navigate(result.url);
    setIsOpen(false);
    setQuery('')};

  const toggleFilter = (filterType: keyof SearchFilter, value: string)  => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        [...prev[filterType], value]
    }))};

  const clearFilters = () => {
    setFilters({ type[], category[], tags[] })};

  const getTypeIcon = (type: string)  => {
    switch (type) {
      case 'service': return <Code className="h-4 w-4" />;
      case 'page': return <Globe className="h-4 w-4" />;
      case 'blog': return <TrendingUp className="h-4 w-4" />;
      case 'case-study': return <Building className="h-4 w-4" />;
      default: return <Search className="h-4 w-4" />}
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className={`relative rounded-xl ${getVariantStyles()}`}>
        <div className="flex items-center px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>

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
                          <div className="flex flex-wrap gap-1 mt-2">
                            {result.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
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

            {/* Loading State */}
            {isLoading && (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                <p className="text-gray-500 dark:text-gray-400">Searching...</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )};