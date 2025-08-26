import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'page' | 'blog' | 'product';
  url: string;
  relevance: number;
}

interface SearchSuggestion {
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
}

export const EnhancedSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [trendingSearches] = useState<string[]>([
    'AI Services',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'Blockchain Solutions'
  ]);

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

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search input changes
  useEffect(() => {
    if (query.trim()) {
      performSearch(query);
      generateSuggestions(query);
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Mock search results - in real app, this would call your search API
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'AI Business Intelligence Platform',
        description: 'Advanced analytics with AI-powered insights for business growth',
        type: 'service',
        url: '/ai-services/business-intelligence',
        relevance: 0.95
      },
      {
        id: '2',
        title: 'Quantum Computing Solutions',
        description: 'Next-generation quantum computing services for complex problems',
        type: 'service',
        url: '/emerging-tech/quantum-computing',
        relevance: 0.88
      },
      {
        id: '3',
        title: 'Cybersecurity Services',
        description: 'Comprehensive security solutions for modern businesses',
        type: 'service',
        url: '/it-services/cybersecurity',
        relevance: 0.82
      }
    ].filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(mockResults);
    setIsSearching(false);
  };

  const generateSuggestions = (searchQuery: string) => {
    const newSuggestions: SearchSuggestion[] = [];
    
    // Add recent searches that match
    recentSearches
      .filter(search => search.toLowerCase().includes(searchQuery.toLowerCase()))
      .forEach(search => {
        newSuggestions.push({ text: search, type: 'recent' });
      });

    // Add trending searches that match
    trendingSearches
      .filter(search => search.toLowerCase().includes(searchQuery.toLowerCase()))
      .forEach(search => {
        newSuggestions.push({ text: search, type: 'trending' });
      });

    setSuggestions(newSuggestions.slice(0, 5));
  };

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    // Add to recent searches
    const updatedRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 10);
    setRecentSearches(updatedRecent);
    localStorage.setItem('zion-recent-searches', JSON.stringify(updatedRecent));

    // Navigate to search results or perform search
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setIsOpen(false);
    setQuery('');
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    handleSearch(suggestion.text);
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.url);
    setIsOpen(false);
    setQuery('');
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('zion-recent-searches');
  };

  return (
    <>
      {/* Search Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-12 h-12 bg-zion-slate-light/10 hover:bg-zion-slate-light/20 rounded-lg transition-all duration-300 border border-zion-cyan/20 hover:border-zion-cyan/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open search"
      >
        <Search className="w-5 h-5 text-zion-cyan" />
      </motion.button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          >
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl mx-4 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
            >
              {/* Search Input */}
              <div className="p-4 border-b border-zion-cyan/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for services, solutions, or insights..."
                    className="w-full pl-10 pr-12 py-3 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan/40 focus:border-zion-cyan/40"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-zion-slate-light/20 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-zion-slate-light" />
                  </button>
                </div>
              </div>

              {/* Search Content */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim() ? (
                  // Search Results
                  <div className="p-4">
                    {isSearching ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-cyan"></div>
                        <span className="ml-3 text-zion-slate-light">Searching...</span>
                      </div>
                    ) : results.length > 0 ? (
                      <div className="space-y-3">
                        {results.map((result) => (
                          <motion.div
                            key={result.id}
                            onClick={() => handleResultClick(result)}
                            className="p-3 rounded-lg hover:bg-zion-slate-light/10 cursor-pointer transition-colors border border-transparent hover:border-zion-cyan/20"
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-medium truncate">{result.title}</h4>
                                <p className="text-zion-slate-light text-sm mt-1">{result.description}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                  <span className="text-xs px-2 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full">
                                    {result.type}
                                  </span>
                                  <span className="text-xs text-zion-slate-light">
                                    {Math.round(result.relevance * 100)}% match
                                  </span>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-zion-slate-light">
                        <Search className="w-12 h-12 mx-auto mb-4 text-zion-slate-light/40" />
                        <p>No results found for "{query}"</p>
                        <p className="text-sm mt-2">Try different keywords or browse our services</p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Search Suggestions
                  <div className="p-4">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-zion-cyan font-medium flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Recent Searches
                          </h3>
                          <button
                            onClick={clearRecentSearches}
                            className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors"
                          >
                            Clear all
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recentSearches.slice(0, 5).map((search, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleSuggestionClick({ text: search, type: 'recent' })}
                              className="px-3 py-1 bg-zion-slate-light/10 hover:bg-zion-cyan/20 text-zion-slate-light hover:text-zion-cyan rounded-full text-sm transition-colors border border-zion-cyan/20 hover:border-zion-cyan/40"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {search}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Trending Searches */}
                    <div>
                      <h3 className="text-zion-cyan font-medium flex items-center mb-3">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Trending Searches
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {trendingSearches.map((search, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleSuggestionClick({ text: search, type: 'trending' })}
                            className="px-3 py-1 bg-zion-cyan/20 hover:bg-zion-cyan/30 text-zion-cyan rounded-full text-sm transition-colors border border-zion-cyan/40"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {search}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};