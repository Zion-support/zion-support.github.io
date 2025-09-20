import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export function EnhancedSearchInput({ 
  placeholder = "Search services, solutions...",
  className = "",
  onSearch,
  showClear = true,
  compact = false
}) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className={`relative flex items-center ${compact ? 'h-10' : 'h-12'}`}>
          <Search className={`absolute left-3 text-gray-400 ${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
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
              className="absolute right-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className={`${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
            </button>
          )}
        </div>
      </form>
      
      {/* Search suggestions dropdown */}
      {isFocused && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zion-blue-dark border border-zion-blue-light/20 rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
          <div className="py-2">
            <div className="px-4 py-2 text-sm text-gray-400 border-b border-zion-blue-light/20">
              Quick suggestions
            </div>
            {['AI Services', 'Cloud Solutions', 'Cybersecurity', 'IT Consulting'].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  if (onSearch) onSearch(suggestion);
                }}
                className="w-full px-4 py-2 text-left text-white hover:bg-zion-blue-light/20 transition-colors duration-200"
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
