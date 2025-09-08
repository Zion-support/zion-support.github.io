import React from 'react';
import { cn } from '@/lib/utils';

export interface Suggestion {
  id: string;
  text: string;
  type: 'search' | 'category' | 'tag' | 'recent';
  icon?: React.ReactNode;
}

interface AutocompleteSuggestionsProps {
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  onSuggestionHover?: (suggestion: Suggestion) => void;
  selectedIndex?: number;
  className?: string;
  maxHeight?: string;
  showCategories?: boolean;
}

export function AutocompleteSuggestions({
  suggestions,
  onSuggestionClick,
  onSuggestionHover,
  selectedIndex = -1,
  className = '',
  maxHeight = '200px',
  showCategories = true
}: AutocompleteSuggestionsProps) {
  if (suggestions.length === 0) {
    return null;
  }

  const groupedSuggestions = showCategories
    ? suggestions.reduce((acc, suggestion) => {
        if (!acc[suggestion.type]) {
          acc[suggestion.type] = [];
        }
        acc[suggestion.type].push(suggestion);
        return acc;
      }, {} as Record<string, Suggestion[]>)
    : { all: suggestions };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'search':
        return 'Suggestions';
      case 'category':
        return 'Categories';
      case 'tag':
        return 'Tags';
      case 'recent':
        return 'Recent Searches';
      default:
        return 'Suggestions';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'search':
        return '🔍';
      case 'category':
        return '📁';
      case 'tag':
        return '🏷️';
      case 'recent':
        return '🕒';
      default:
        return '💡';
    }
  };

  return (
    <div
      className={cn(
        'absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1',
        className
      )}
      style={{ maxHeight }}
    >
      <div className="max-h-full overflow-y-auto">
        {Object.entries(groupedSuggestions).map(([type, typeSuggestions]) => (
          <div key={type} className="border-b border-gray-100 last:border-b-0">
            {showCategories && typeSuggestions.length > 0 && (
              <div className="px-3 py-2 text-xs font-medium text-gray-500 bg-gray-50 border-b border-gray-100">
                <span className="mr-2">{getTypeIcon(type)}</span>
                {getTypeLabel(type)}
              </div>
            )}
            {typeSuggestions.map((suggestion, index) => {
              const globalIndex = suggestions.indexOf(suggestion);
              const isSelected = globalIndex === selectedIndex;
              
              return (
                <button
                  key={suggestion.id}
                  className={cn(
                    'w-full px-3 py-2 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors',
                    isSelected && 'bg-blue-50 text-blue-700'
                  )}
                  onClick={() => onSuggestionClick(suggestion)}
                  onMouseEnter={() => onSuggestionHover?.(suggestion)}
                  type="button"
                >
                  <div className="flex items-center space-x-2">
                    {suggestion.icon && (
                      <span className="flex-shrink-0">{suggestion.icon}</span>
                    )}
                    <span className="flex-1 truncate">{suggestion.text}</span>
                    {suggestion.type === 'recent' && (
                      <span className="text-xs text-gray-400">Recent</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}