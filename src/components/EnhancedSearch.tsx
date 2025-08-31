import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, FileText, Users, Building, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'service' | 'blog' | 'case-study';
  url: string;
  tags: string[];
  relevance: number;
}

interface EnhancedSearchProps {
  placeholder?: string;
  className?: string;
  showFilters?: boolean;
  onSearch?: (query: string) => void;
}

export default function EnhancedSearch({ 
  placeholder = "Search for services, solutions, or insights...",
  className = "",
  showFilters = true,
  onSearch
}: EnhancedSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches, setTrendingSearches] = useState<string[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      type: 'service',
      url: '/services/ai-business-intelligence',
      tags: ['AI', 'Analytics', 'Business Intelligence'],
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services for complex problem solving.',
      type: 'service',
      url: '/services/quantum-computing',
      tags: ['Quantum', 'Computing', 'Innovation'],
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Micro SAAS Platform Development',
      description: 'Custom software-as-a-service solutions tailored to your business needs.',
      type: 'service',
      url: '/services/micro-saas',
      tags: ['SAAS', 'Development', 'Custom Software'],
      relevance: 0.89
    }
  ];

  const searchTypes = [
    { value: 'all', label: 'All', icon: Search },
    { value: 'services', label: 'Services', icon: Zap },
    { value: 'solutions', label: 'Solutions', icon: Building },
    { value: 'insights', label: 'Insights', icon: FileText },
    { value: 'team', label: 'Team', icon: Users }
  ];

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
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }

    // Mock trending searches
    setTrendingSearches([
      'AI Solutions',
      'Quantum Computing',
      'Micro SAAS',
      'Digital Transformation',
      'Cybersecurity'
    ]);
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setIsOpen(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter results based on query and filters
    let filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilters = selectedFilters.length === 0 || 
                           selectedFilters.includes('all') ||
                           selectedFilters.includes(result.type);
      
      return matchesQuery && matchesFilters;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(filteredResults);
    setIsLoading(false);

    // Save to recent searches
    const newRecentSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recent-searches', JSON.stringify(newRecentSearches));

    onSearch?.(searchQuery);
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilters(prev => {
      if (filter === 'all') {
        return ['all'];
      }
      
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      } else {
        return [...prev.filter(f => f !== 'all'), filter];
      }
    });
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-700/50 rounded transition-colors"
          >
            <X className="w-4 h-4 text-slate-400 hover:text-white" />
          </button>
        )}
        <button
          onClick={() => handleSearch(query)}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded transition-colors"
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
            className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden"
          >
            {/* Filters */}
            {showFilters && (
              <div className="p-4 border-b border-slate-600">
                <div className="flex items-center space-x-2 mb-3">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {searchTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedFilters.includes(type.value) || 
                                     (selectedFilters.length === 0 && type.value === 'all');
                    
                    return (
                      <button
                        key={type.value}
                        onClick={() => handleFilterChange(type.value)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="max-h-80 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                  <p className="text-slate-400">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="p-4 space-y-3">
                  {results.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-lg hover:bg-slate-700/50 cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          {result.type === 'service' && <Zap className="w-5 h-5 text-white" />}
                          {result.type === 'blog' && <FileText className="w-5 h-5 text-white" />}
                          {result.type === 'case-study' && <Building className="w-5 h-5 text-white" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium mb-1">{result.title}</h4>
                          <p className="text-slate-400 text-sm mb-2 line-clamp-2">{result.description}</p>
                          <div className="flex items-center space-x-2">
                            {result.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center">
                  <p className="text-slate-400 mb-4">No results found for "{query}"</p>
                  <p className="text-slate-500 text-sm">Try adjusting your search terms or filters</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-300">Recent Searches</span>
                      </div>
                      <div className="space-y-2">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearch(search)}
                            className="w-full text-left p-2 rounded-lg hover:bg-slate-700/50 text-slate-300 hover:text-white transition-colors"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending Searches */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium text-slate-300">Trending Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trendingSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg text-sm transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
