import React from 'react';
import { SearchSuggestion } from '@/types/search';

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  onSelect: (suggestion: SearchSuggestion) => void;
  isVisible: boolean;
}

export const AutocompleteSuggestions: React.FC<AutocompleteSuggestionsProps> = ({
  suggestions,
  onSelect,
  isVisible,
}) => {
  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          onClick={() => onSelect(suggestion)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-gray-900">{suggestion.title}</span>
            {suggestion.category && (
              <span className="text-sm text-gray-500">in {suggestion.category}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};