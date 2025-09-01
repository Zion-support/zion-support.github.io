import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, Clock, Zap, Brain, Shield } from 'lucide-react';

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelectSuggestion: (suggestion: string) => void;
  suggestions?: string[];
  placeholder?: string;
  className?: string;
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  suggestions = [],
  placeholder = "Search...",
  className = ""
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Recent searches (could be stored in localStorage)
  const recentSearches = [
    'AI Business Intelligence',
    'Cloud FinOps',
    'Cybersecurity Solutions',
    'DevOps Automation'
  ];

  // Popular searches
  const popularSearches = [
    'AI Services',
    'Cloud Infrastructure',
    'Zero Trust Security',
    'Digital Transformation'
  ];

  useEffect(() => {
    if (value.trim()) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [value, suggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSelectSuggestion(suggestion);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    onChange('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const getSuggestionIcon = (suggestion: string) => {
    if (suggestion.includes('AI')) return <Brain className="w-4 h-4" />;
    if (suggestion.includes('Cloud')) return <Zap className="w-4 h-4" />;
    if (suggestion.includes('Security') || suggestion.includes('Trust')) return <Shield className="w-4 h-4" />;
    return <TrendingUp className="w-4 h-4" />;
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => {
            setIsFocused(true);
            if (value.trim()) setShowSuggestions(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            // Delay hiding suggestions to allow clicks
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-200"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-zion-purple/20 rounded transition-colors"
          >
            <X className="w-4 h-4 text-zion-slate-light hover:text-zion-cyan" />
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50 max-h-96 overflow-y-auto">
          {/* Filtered Suggestions */}
          {filteredSuggestions.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 border-b border-zion-purple/20">
                <p className="text-sm font-medium text-zion-cyan">Search Results</p>
              </div>
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                >
                  {getSuggestionIcon(suggestion)}
                  <span>{suggestion}</span>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {!value.trim() && (
            <div className="p-2">
              <div className="px-3 py-2 border-b border-zion-purple/20">
                <p className="text-sm font-medium text-zion-cyan flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </p>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {!value.trim() && (
            <div className="p-2">
              <div className="px-3 py-2 border-b border-zion-purple/20">
                <p className="text-sm font-medium text-zion-cyan flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches
                </p>
              </div>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="flex items-center space-x-3 w-full px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
