import React, { useState, useRef, useEffect } from 'react';
import { Search, X, TrendingUp, Clock, FileText, Users, Briefcase, Globe } from 'lucide-react';

export function EnhancedSearchInput({ 
  value, 
  onChange, 
  onSelectSuggestion, 
  suggestions = [], 
  placeholder = "Search...",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (value.trim()) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
    setHighlightedIndex(-1);
  }, [value, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) &&
          suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredSuggestions[highlightedIndex]) {
          handleSuggestionSelect(filteredSuggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    onSelectSuggestion?.(suggestion);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  const getSuggestionIcon = (suggestion) => {
    const lowerSuggestion = suggestion.toLowerCase();
    if (lowerSuggestion.includes('service') || lowerSuggestion.includes('solution')) {
      return Briefcase;
    } else if (lowerSuggestion.includes('user') || lowerSuggestion.includes('team')) {
      return Users;
    } else if (lowerSuggestion.includes('document') || lowerSuggestion.includes('guide')) {
      return FileText;
    } else if (lowerSuggestion.includes('trend') || lowerSuggestion.includes('popular')) {
      return TrendingUp;
    } else {
      return Globe;
    }
  };

  const recentSearches = [
    'AI Services',
    'Cloud Migration',
    'Cybersecurity',
    'Digital Transformation'
  ];

  const popularSearches = [
    'Micro SAAS',
    'IT Infrastructure',
    'DevOps',
    'Machine Learning'
  ];

  return (
    <div className="relative" ref={inputRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => value.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent transition-all duration-200 ${className}`}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover:text-white hover:bg-zion-purple/10 rounded transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50 max-h-96 overflow-y-auto"
        >
          {/* Search Results */}
          {filteredSuggestions.length > 0 && (
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Search Results
              </div>
              {filteredSuggestions.map((suggestion, index) => {
                const Icon = getSuggestionIcon(suggestion);
                return (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionSelect(suggestion)}
                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                      index === highlightedIndex
                        ? 'text-white bg-zion-purple/20'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3 text-zion-cyan flex-shrink-0" />
                    <span className="truncate">{suggestion}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Recent Searches */}
          {value.trim() === '' && (
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Recent Searches
              </div>
              {recentSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSuggestionSelect(search)}
                  className="w-full flex items-center px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                >
                  <Clock className="h-4 w-4 mr-3 text-zion-slate-light" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {value.trim() === '' && (
            <div className="py-2">
              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Popular Searches
              </div>
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => handleSuggestionSelect(search)}
                  className="w-full flex items-center px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                >
                  <TrendingUp className="h-4 w-4 mr-3 text-zion-cyan" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {value.trim() && filteredSuggestions.length === 0 && (
            <div className="py-4 text-center">
              <div className="text-zion-slate-light text-sm mb-2">No results found</div>
              <div className="text-xs text-zion-slate-light">
                Try different keywords or browse our categories
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
