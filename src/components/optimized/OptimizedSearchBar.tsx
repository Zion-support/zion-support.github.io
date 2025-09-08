import React, { useState, useCallback, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { usePerformance } from '../../hooks/usePerformance';
import { cn } from '@/lib/utils';

interface OptimizedSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

export const OptimizedSearchBar: React.FC<OptimizedSearchBarProps> = ({
  onSearch,
  placeholder = 'Search...',
  className,
  debounceMs = 300,
  suggestions = [],
  onSuggestionClick,
}) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { createDebounced, startTiming, endTiming } = usePerformance();

  // Debounced search function
  const debouncedSearch = useMemo(
    () => createDebounced((searchQuery: string) => {
      startTiming('search');
      onSearch(searchQuery);
      endTiming('search');
    }, debounceMs),
    [createDebounced, onSearch, debounceMs, startTiming, endTiming]
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
    setShowSuggestions(value.length > 0);
  }, [debouncedSearch]);

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
    setShowSuggestions(false);
  }, [onSearch]);

  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
    onSuggestionClick?.(suggestion);
  }, [onSearch, onSuggestionClick]);

  const filteredSuggestions = useMemo(() => {
    if (!query || suggestions.length === 0) return [];
    return suggestions
      .filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
  }, [query, suggestions]);

  return (
    <div className={cn('relative', className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};