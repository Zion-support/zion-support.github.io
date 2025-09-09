import React from 'react';
import { cn } from '@/lib/utils';

interface Suggestion {
  id: string;
  text: string;
  type?: 'recent' | 'popular' | 'category';
}

interface AutocompleteSuggestionsProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
  onClose: () => void;
  className?: string;
}

const AutocompleteSuggestions: React.FC<AutocompleteSuggestionsProps> = ({
  suggestions,
  onSelect,
  onClose,
  className
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto",
        className
      )}
    >
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => onSelect(suggestion)}
          className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
        >
          <span className="text-sm text-gray-900">{suggestion.text}</span>
          {suggestion.type && (
            <span className="ml-2 text-xs text-gray-500 capitalize">
              {suggestion.type}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export { AutocompleteSuggestions };
export default AutocompleteSuggestions;