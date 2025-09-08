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

export function AutocompleteSuggestions({
  suggestions,
  onSelect,
  onClose,
  className
}: AutocompleteSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <div
      className={cn(
        'absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto',
        className
      )}
    >
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => onSelect(suggestion)}
          className={cn(
            'w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
            suggestion.type === 'recent' && 'text-blue-600 dark:text-blue-400',
            suggestion.type === 'popular' && 'text-green-600 dark:text-green-400'
          )}
        >
          {suggestion.text}
        </button>
      ))}
    </div>
  );
}