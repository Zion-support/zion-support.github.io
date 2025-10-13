import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight, Clock, TrendingUp } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'tutorial';
}

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI Analytics',
    'Cybersecurity Solutions',
    '5G Implementation',
    'Cloud Infrastructure',
    'Micro SAAS',
    'Digital Transformation'
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Search function
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate search API call
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          title: 'AI Analytics Dashboard',
          description: 'Advanced AI-powered analytics platform for business intelligence and data visualization',
          url: '/ai-analytics',
          category: 'AI Services',
          type: 'service'
        },
        {
          title: 'Cybersecurity Solutions',
          description: 'Comprehensive cybersecurity services including threat detection, prevention, and response',
          url: '/cybersecurity-solutions',
          category: 'IT Services',
          type: 'service'
        },
        {
          title: '5G Implementation Guide',
          description: 'Complete guide to implementing 5G technology in your business infrastructure',
          url: '/5g-implementation',
          category: '5G Solutions',
          type: 'tutorial'
        },
        {
          title: 'Zion Analytics Pro',
          description: 'Our flagship micro SAAS solution for advanced business analytics and reporting',
          url: '/zion-analytics-pro',
          category: 'Micro SAAS',
          type: 'service'
        },
        {
          title: 'Cloud Infrastructure Services',
          description: 'Scalable cloud infrastructure solutions for modern businesses',
          url: '/cloud-infrastructure',
          category: 'IT Services',
          type: 'service'
        }
      ].filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(mockResults);
      setIsLoading(false);
    }, 300);
  };

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  // Handle search result click
  const handleResultClick = (result: SearchResult) => {
    // Add to recent searches
    const newRecent = [result.title, ...recentSearches.filter(s => s !== result.title)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('recent-searches', JSON.stringify(newRecent));
    
    // Navigate to result
    window.location.href = result.url;
    onClose();
  };

  // Handle popular search click
  const handlePopularClick = (search: string) => {
    setQuery(search);
    performSearch(search);
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recent-searches');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div 
        ref={searchRef}
        className="max-w-2xl mx-auto mt-20 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20"
      >
        {/* Search Input */}
        <div className="p-4 border-b border-white/20">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search services, solutions, tutorials..."
              className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-400">Searching...</p>
            </div>
          ) : query ? (
            <div className="p-2">
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-1">
                          <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                              {result.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              {result.type}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">No results found for "{query}"</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or check spelling</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-300 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularClick(search)}
                        className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-300 flex items-center mb-3">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularClick(search)}
                      className="text-left p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Tips */}
        <div className="p-4 border-t border-white/20 bg-white/5">
          <p className="text-xs text-gray-500 text-center">
            Press <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">Enter</kbd> to search, <kbd className="px-1 py-0.5 bg-white/10 rounded text-xs">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;