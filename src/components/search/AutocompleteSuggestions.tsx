import React from 'react';
import { cn } from '@/lib/utils';

export interface Suggestion {
  id: string;
  text: string;
  type: 'search' | 'category' | 'recent' | 'trending';
  icon?: React.ReactNode;
  count?: number;
}

interface AutocompleteSuggestionsProps {
  suggestions: Suggestion[];
  selectedIndex: number;
  onSelect: (suggestion: Suggestion) => void;
  onHover: (index: number) => void;
  className?: string;
  maxHeight?: string;
  showEmpty?: boolean;
  emptyMessage?: string;
}

export const AutocompleteSuggestions: React.FC<AutocompleteSuggestionsProps> = ({
  suggestions,
  selectedIndex,
  onSelect,
  onHover,
  className,
  maxHeight = '200px',
  showEmpty = true,
  emptyMessage = 'No suggestions found',
}) => {
  if (suggestions.length === 0) {
    if (!showEmpty) return null;
    
    return (
      <div
        className={cn(
          'absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1',
          className
        )}
        style={{ maxHeight }}
      >
        <div className="p-3 text-sm text-gray-500 text-center">
          {emptyMessage}
        </div>
      </div>
    );
  }

  const getSuggestionIcon = (type: Suggestion['type']) => {
    switch (type) {
      case 'search':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'category':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        );
      case 'recent':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'trending':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getSuggestionClassName = (index: number, type: Suggestion['type']) => {
    const baseClasses = 'flex items-center px-3 py-2 text-sm cursor-pointer transition-colors';
    const selectedClasses = selectedIndex === index ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50';
    
    let typeClasses = '';
    switch (type) {
      case 'search':
        typeClasses = 'text-gray-700';
        break;
      case 'category':
        typeClasses = 'text-green-700';
        break;
      case 'recent':
        typeClasses = 'text-gray-600';
        break;
      case 'trending':
        typeClasses = 'text-orange-700';
        break;
    }

    return cn(baseClasses, selectedClasses, typeClasses);
  };

  return (
    <div
      className={cn(
        'absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1 overflow-hidden',
        className
      )}
      style={{ maxHeight }}
    >
      <div className="max-h-full overflow-y-auto">
        {suggestions.map((suggestion, index) => (
          <div
            key={suggestion.id}
            className={getSuggestionClassName(index, suggestion.type)}
            onMouseEnter={() => onHover(index)}
            onClick={() => onSelect(suggestion)}
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="flex-shrink-0 text-gray-400">
                {suggestion.icon || getSuggestionIcon(suggestion.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="truncate">{suggestion.text}</div>
                {suggestion.count && (
                  <div className="text-xs text-gray-500">
                    {suggestion.count} results
                  </div>
                )}
              </div>
              {suggestion.type === 'trending' && (
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Trending
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutocompleteSuggestions;