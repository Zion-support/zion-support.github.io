import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, Filter, TrendingUp, Clock, Globe, Building, Brain, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog' | 'case-study';
  category: string;
  tags: string[];
  relevance: number;
}

interface SearchProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
  showSuggestions?: boolean;
}

export function Search({
  className,
  placeholder = 'Search Zion Tech Group...',
  onSearch,
  showFilters = true,
  showSuggestions = true
}: SearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search data - in real app, this would come from API
  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      url: '/services/ai-enterprise-orchestrator',
      type: 'service',
      category: 'AI & Analytics',
      tags: ['AI', 'Enterprise', 'Automation', 'Workflow'],
      relevance: 0.95
    },
    {
      id: '2',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      url: '/services/ai-cybersecurity-suite',
      type: 'service',
      category: 'Cybersecurity',
      tags: ['AI', 'Security', 'Threat Detection', 'Compliance'],
      relevance: 0.92
    },
    {
      id: '3',
      title: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      url: '/services/quantum-ai-platform',
      type: 'service',
      category: 'Emerging Tech',
      tags: ['Quantum', 'AI', 'Computing', 'Research'],
      relevance: 0.89
    },
    {
      id: '4',
      title: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      url: '/services/ai-healthcare-analytics',
      type: 'service',
      category: 'Healthcare',
      tags: ['AI', 'Healthcare', 'Analytics', 'Diagnostics'],
      relevance: 0.87
    }
  ];

  const categories = [
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-purple-600 to-pink-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Zap, color: 'from-blue-600 to-cyan-600' },
    { id: 'enterprise', name: 'Enterprise', icon: Building, color: 'from-indigo-600 to-purple-600' }
  ];

  const popularSearches = [
    'AI solutions', 'Cybersecurity', 'Quantum computing', 'Healthcare AI',
    'Supply chain optimization', 'Micro SAAS', 'IT consulting', 'Digital transformation'
  ];

  const recentSearches = [
    'AI automation', 'Cloud migration', 'Data analytics', 'Blockchain solutions'
  ];

  // Handle search
  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query and filters
    const filteredResults = mockSearchData.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilters = selectedFilters.length === 0 || 
                           selectedFilters.includes(result.category.toLowerCase().replace(' & ', '-').replace(' ', '-'));
      
      return matchesQuery && matchesFilters;
    });

    // Sort by relevance
    filteredResults.sort((a, b) => b.relevance - a.relevance);
    
    setResults(filteredResults);
    setIsLoading(false);
    
    if (onSearch) {
      onSearch(searchQuery);
    }
  }, [selectedFilters, onSearch]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      setIsOpen(true);
      handleSearch(value);
    } else {
      setIsOpen(false);
      setResults([]);
    }
  };

  // Handle filter toggle
  const toggleFilter = (categoryId: string) => {
    setSelectedFilters(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setQuery(result.title);
    // In real app, navigate to result.url
    console.log('Navigating to:', result.url);
  };

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Re-run search when filters change
  useEffect(() => {
    if (query.trim()) {
      handleSearch(query);
    }
  }, [selectedFilters, handleSearch, query]);

  return (
    <div ref={searchRef} className={cn('relative', className)}>
      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 bg-zion-slate-800/50 border border-zion-slate-700/50 rounded-lg text-white placeholder-zion-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all"
        />
        
        {/* Filter Toggle Button */}
        {showFilters && (
          <button
            onClick={() => setShowFiltersPanel(!showFiltersPanel)}
            className={cn(
              'absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-md transition-colors',
              showFiltersPanel 
                ? 'bg-zion-cyan text-zion-blue' 
                : 'bg-zion-slate-700/50 text-zion-slate-400 hover:bg-zion-slate-600/50'
            )}
            aria-label="Toggle search filters"
          >
            <Filter className="w-4 h-4" />
          </button>
        )}
        
        {/* Clear Button */}
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1.5 rounded-md bg-zion-slate-700/50 text-zion-slate-400 hover:bg-zion-slate-600/50 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && showFiltersPanel && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 bg-zion-slate-800 border border-zion-slate-700 rounded-lg shadow-xl z-50 p-4"
        >
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-zion-slate-light">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleFilter(category.id)}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors',
                    selectedFilters.includes(category.id)
                      ? 'bg-zion-cyan text-zion-blue'
                      : 'bg-zion-slate-700/50 text-zion-slate-light hover:bg-zion-slate-600/50'
                  )}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Search Results & Suggestions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-zion-slate-800 border border-zion-slate-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          >
            {isLoading ? (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-zion-cyan mx-auto"></div>
                <p className="mt-2 text-sm text-zion-slate-light">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="p-2">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left p-3 rounded-md hover:bg-zion-slate-700/50 transition-colors group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                        {result.type === 'service' && <Brain className="w-5 h-5 text-white" />}
                        {result.type === 'page' && <Globe className="w-5 h-5 text-white" />}
                        {result.type === 'blog' && <Building className="w-5 h-5 text-white" />}
                        {result.type === 'case-study' && <Shield className="w-5 h-5 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-xs text-zion-slate-light mt-1 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-zion-slate-400 bg-zion-slate-700/50 px-2 py-1 rounded">
                            {result.category}
                          </span>
                          {result.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="p-4 text-center">
                <p className="text-sm text-zion-slate-light">No results found for "{query}"</p>
                <p className="text-xs text-zion-slate-400 mt-1">Try different keywords or check your filters</p>
              </div>
            ) : showSuggestions ? (
              <div className="p-4 space-y-4">
                {/* Popular Searches */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    <h3 className="text-sm font-medium text-zion-slate-light">Popular Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => {
                          setQuery(search);
                          handleSearch(search);
                        }}
                        className="text-xs bg-zion-slate-700/50 hover:bg-zion-slate-600/50 text-zion-slate-light px-3 py-1.5 rounded-full transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <h3 className="text-sm font-medium text-zion-slate-light">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => {
                          setQuery(search);
                          handleSearch(search);
                        }}
                        className="text-xs bg-zion-slate-700/50 hover:bg-zion-slate-600/50 text-zion-slate-light px-3 py-1.5 rounded-full transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}