import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowDown, Clock, TrendingUp, Building, Users, Globe } from 'lucide-react';

export const EnhancedSearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([
    'IT infrastructure setup',
    'Network security',
    'Cloud migration',
    'Data backup solutions'
  ]);
  const [trendingSearches, setTrendingSearches] = useState([
    'AI-powered IT management',
    'Cybersecurity services',
    'Remote IT support',
    'Digital transformation'
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Sample search suggestions
  const allSuggestions = [
    { type: 'service', text: 'IT Support Services', icon: Users, category: 'Services' },
    { type: 'service', text: 'Network Security', icon: Building, category: 'Security' },
    { type: 'service', text: 'Cloud Solutions', icon: Globe, category: 'Cloud' },
    { type: 'service', text: 'Data Recovery', icon: TrendingUp, category: 'Data' },
    { type: 'service', text: 'Hardware Installation', icon: Building, category: 'Hardware' },
    { type: 'service', text: 'Software Support', icon: Users, category: 'Software' },
    { type: 'service', text: 'IT Consulting', icon: TrendingUp, category: 'Consulting' },
    { type: 'service', text: 'Managed IT Services', icon: Building, category: 'Managed Services' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
    setActiveIndex(-1);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSuggestionClick(suggestions[activeIndex]);
      } else if (searchQuery.trim()) {
        handleSearch(searchQuery);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.text);
    setIsOpen(false);
    setActiveIndex(-1);
    handleSearch(suggestion.text);
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      // Add to recent searches
      const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(newRecent);
      
      // Store in localStorage
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      
      // Perform search (in a real app, this would navigate to search results)
      console.log('Searching for:', query);
      
      // Close search
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleRecentSearchClick = (search) => {
    setSearchQuery(search);
    handleSearch(search);
  };

  const handleTrendingSearchClick = (search) => {
    setSearchQuery(search);
    handleSearch(search);
  };

  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const removeRecentSearch = (searchToRemove, e) => {
    e.stopPropagation();
    const newRecent = recentSearches.filter(s => s !== searchToRemove);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
  };

  return (
    <div className="relative flex-1 max-w-2xl" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder="Search for IT services, solutions, or support..."
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-hidden">
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggestions</h3>
              <div className="space-y-1">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left hover:bg-gray-50 ${
                      index === activeIndex ? 'bg-blue-50 border border-blue-200' : ''
                    }`}
                  >
                    <suggestion.icon className="w-4 h-4 text-gray-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{suggestion.text}</div>
                      <div className="text-xs text-gray-500">{suggestion.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Recent Searches
              </h3>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-left hover:bg-gray-50 group"
                  >
                    <span className="text-sm text-gray-700">{search}</span>
                    <button
                      onClick={(e) => removeRecentSearch(search, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleTrendingSearchClick(search)}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => handleSearch(searchQuery)}
              disabled={!searchQuery.trim()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};