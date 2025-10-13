import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'blog' | 'documentation';
  category?: string;
  tags?: string[];
}

interface SearchComponentProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  isOpen,
  onClose,
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Analytics Dashboard',
      description: 'Advanced AI-powered analytics platform for business intelligence',
      url: '/ai-analytics',
      type: 'service',
      category: 'AI Services',
      tags: ['analytics', 'ai', 'dashboard', 'business intelligence']
    },
    {
      id: '2',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services and threat protection',
      url: '/cybersecurity-solutions',
      type: 'service',
      category: 'IT Services',
      tags: ['security', 'cybersecurity', 'protection', 'threats']
    },
    {
      id: '3',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure solutions for modern businesses',
      url: '/cloud-infrastructure',
      type: 'service',
      category: 'IT Services',
      tags: ['cloud', 'infrastructure', 'scalable', 'aws', 'azure']
    },
    {
      id: '4',
      title: 'About Zion Tech Group',
      description: 'Learn about our company, mission, and team',
      url: '/about',
      type: 'page',
      category: 'Company',
      tags: ['about', 'company', 'mission', 'team']
    },
    {
      id: '5',
      title: 'Contact Us',
      description: 'Get in touch with our team for consultations and support',
      url: '/contact',
      type: 'page',
      category: 'Support',
      tags: ['contact', 'support', 'consultation', 'help']
    },
    {
      id: '6',
      title: 'Pricing Plans',
      description: 'Flexible pricing options for all our services',
      url: '/pricing',
      type: 'page',
      category: 'Business',
      tags: ['pricing', 'plans', 'cost', 'subscription']
    },
    {
      id: '7',
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced AI technology',
      url: '/ai-content-generation',
      type: 'service',
      category: 'AI Services',
      tags: ['content', 'generation', 'ai', 'automation', 'writing']
    },
    {
      id: '8',
      title: '5G Solutions',
      description: 'Next-generation 5G implementation and optimization services',
      url: '/5g-solutions',
      type: 'service',
      category: '5G Services',
      tags: ['5g', 'connectivity', 'network', 'optimization']
    }
  ];

  // Popular searches
  const popularSearchesData = [
    'AI Analytics',
    'Cybersecurity',
    'Cloud Solutions',
    '5G Implementation',
    'Micro SaaS',
    'Data Analytics'
  ];

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
    setPopularSearches(popularSearchesData);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search function
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(0);
    performSearch(value);
  };

  // Handle key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    // Save to recent searches
    const newRecentSearches = [
      query,
      ...recentSearches.filter(search => search !== query)
    ].slice(0, 5);
    
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    
    // Navigate to result
    navigate(result.url);
    onClose();
    setQuery('');
    setResults([]);
  };

  // Handle popular search click
  const handlePopularSearchClick = (search: string) => {
    setQuery(search);
    performSearch(search);
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${className}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div className="relative max-w-2xl mx-auto mt-20 bg-white rounded-xl shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search services, pages, and more..."
            className="flex-1 text-lg outline-none placeholder-gray-400"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Searching...</p>
            </div>
          ) : query ? (
            results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between group ${
                      index === selectedIndex ? 'bg-cyan-50 border-r-4 border-cyan-500' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-medium text-gray-900 group-hover:text-cyan-600">
                          {result.title}
                        </h3>
                        <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          {result.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">{result.description}</p>
                      {result.category && (
                        <p className="text-xs text-gray-400">{result.category}</p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">No results found for "{query}"</p>
                <p className="text-sm text-gray-400">Try different keywords or check your spelling</p>
              </div>
            )
          ) : (
            <div className="p-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <h3 className="font-medium text-gray-900">Recent Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handlePopularSearchClick(search)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-4 h-4 text-gray-400 mr-2" />
                  <h3 className="font-medium text-gray-900">Popular Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearchClick(search)}
                      className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm hover:bg-cyan-100 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 rounded-b-xl text-xs text-gray-500">
          <div className="flex items-center justify-between">
            <span>Press Enter to search, Esc to close</span>
            <div className="flex items-center space-x-4">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;