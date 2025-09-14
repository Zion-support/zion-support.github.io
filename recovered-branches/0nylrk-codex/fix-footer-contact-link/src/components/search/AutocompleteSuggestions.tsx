
import React from "react";
import { SearchSuggestionSearchHighlight } from "@/types/search";

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean;
}

// Helper function to highlight matching text
const highlightMatch = (text: stringsearchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: ''match: textafter: '' };
  }
  
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {
    return { before: ''match: textafter: '' };
  }
  
  return {
    before: text.substring(0index),
    match: text.substring(index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  };
};

export function AutocompleteSuggestions({ 
  suggestions
  searchTerm
  onSelectSuggestion,
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;
  
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestionindex) => {
          const highlight = highlightMatch(suggestion.textsearchTerm);
          
          return (
            <li key={`${suggestion.type}-${index}`} 
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={() => onSelectSuggestion(suggestion.text)}>
              <div className="flex items-center justify-between">
                <div>
                  <span>{highlight.before}</span>
                  <span className="font-bold text-zion-purple">{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className="text-xs text-zion-slate-light capitalize">
                  {suggestion.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
