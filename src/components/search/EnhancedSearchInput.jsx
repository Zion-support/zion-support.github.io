import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export function EnhancedSearchInput({ 
  placeholder = "Search services, solutions...",
  className = "",
  onSearch,
  showClear = true,
  compact = false,
  label = "Search",
  ariaLabel = "Search for services and solutions"
}) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const suggestions = ['AI Services', 'Cloud Solutions', 'Cybersecurity', 'IT Consulting'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    setActiveSuggestion(-1);
    if (onSearch) {
      onSearch('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        const selectedSuggestion = suggestions[activeSuggestion];
        setQuery(selectedSuggestion);
        if (onSearch) onSearch(selectedSuggestion);
        setActiveSuggestion(-1);
      } else {
        handleSearch(e);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Escape') {
      setActiveSuggestion(-1);
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    if (onSearch) onSearch(suggestion);
    setActiveSuggestion(-1);
    setIsFocused(false);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <label htmlFor="search-input" className="sr-only">
          {label}
        </label>
        <div className={`relative flex items-center ${compact ? 'h-10' : 'h-12'}`}>
          <Search 
            className={`absolute left-3 text-gray-400 ${compact ? 'w-4 h-4' : 'w-5 h-5'}`} 
            aria-hidden="true"
          />
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Delay to allow for suggestion clicks
              setTimeout(() => setIsFocused(false), 200);
            }}
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-expanded={isFocused && query && suggestions.length > 0}
            aria-haspopup="listbox"
            aria-controls="search-suggestions"
            aria-activedescendant={activeSuggestion >= 0 ? `suggestion-${activeSuggestion}` : undefined}
            className={`
              w-full pl-10 pr-10 py-2 bg-white/10 border border-white/20 rounded-lg
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50
              transition-all duration-200 ${compact ? 'text-sm' : 'text-base'}
              ${isFocused ? 'bg-white/20 border-cyan-400/50' : ''}
            `}
          />
          {showClear && query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="absolute right-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className={`${compact ? 'w-4 h-4' : 'w-5 h-5'}`} aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
      
      {/* Search suggestions dropdown */}
      {isFocused && query && suggestions.length > 0 && (
        <div 
          id="search-suggestions"
          role="listbox"
          aria-label="Search suggestions"
          className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark border border-zion-blue-light/20 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
        >
          <div className="py-2">
            <div className="px-4 py-2 text-sm text-gray-400 border-b border-zion-blue-light/20">
              Quick suggestions
            </div>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                id={`suggestion-${index}`}
                role="option"
                aria-selected={activeSuggestion === index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={`w-full px-4 py-2 text-left text-white hover:bg-zion-blue-light/20 transition-colors duration-200 ${
                  activeSuggestion === index ? 'bg-zion-blue-light/30' : ''
                }`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
