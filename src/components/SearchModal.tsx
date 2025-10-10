'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Clock, Star } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  popular?: boolean;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search results - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      title: "AI Project Manager Pro",
      description: "Intelligent project management with predictive analytics and automated resource allocation",
      url: "/ai-project-manager",
      category: "Micro SAAS",
      popular: true
    },
    {
      title: "AI Analytics Dashboard",
      description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
      url: "/ai-analytics-dashboard",
      category: "Micro SAAS",
      popular: true
    },
    {
      title: "AI Customer Support Bot",
      description: "24/7 AI-powered customer support with natural language processing and instant responses",
      url: "/ai-customer-support-bot",
      category: "Micro SAAS",
      popular: true
    },
    {
      title: "AI Drug Discovery Pro",
      description: "Accelerate pharmaceutical research with AI-powered molecular analysis and drug interaction prediction",
      url: "/ai-drug-discovery-pro",
      category: "AI Services",
      popular: false
    },
    {
      title: "Cloud Migration & Setup",
      description: "Seamless cloud migration with zero downtime and comprehensive security",
      url: "/cloud-migration",
      category: "IT Services",
      popular: true
    },
    {
      title: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and data",
      url: "/cybersecurity",
      category: "IT Services",
      popular: true
    },
    {
      title: "About Us",
      description: "Learn about Zion Tech Group's mission, team, and commitment to innovation",
      url: "/about",
      category: "Company",
      popular: false
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team for consultations and support",
      url: "/contact",
      category: "Support",
      popular: false
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter results based on query
    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);

    // Save to recent searches
    if (searchQuery.trim() && !recentSearches.includes(searchQuery.trim())) {
      const newRecent = [searchQuery.trim(), ...recentSearches].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleResultClick = (url: string) => {
    window.location.href = url;
    onClose();
  };

  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
    handleSearch(searchTerm);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center p-4 border-b border-gray-700">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search services, solutions, or topics..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={onClose}
            className="ml-3 p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-96 overflow-y-auto">
          {query ? (
            // Search Results
            <div className="p-4">
              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                  <span className="ml-3 text-gray-400">Searching...</span>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {result.title}
                            </h3>
                            {result.popular && (
                              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full flex items-center">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mb-1">{result.description}</p>
                          <span className="text-cyan-400 text-xs">{result.category}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-white font-medium mb-2">No results found</h3>
                  <p className="text-gray-400 text-sm">
                    Try searching for "AI", "IT services", or "cloud migration"
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Recent Searches and Suggestions
            <div className="p-4">
              {recentSearches.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Recent Searches
                    </h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleRecentSearchClick(search)}
                        className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-white font-medium mb-3">Popular Searches</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "AI Project Manager",
                    "Cloud Migration",
                    "Cybersecurity",
                    "Data Analytics",
                    "Machine Learning",
                    "Quantum Computing"
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleRecentSearchClick(suggestion)}
                      className="text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {suggestion}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;