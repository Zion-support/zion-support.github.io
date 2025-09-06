
import React from "react";
import { SearchSuggestion, SearchHighlight } from "@/types/search";
interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[],
  searchTerm: string,
  onSelectSuggestion: (suggestion: string) => void,
  visible: boolean}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }
  
  const lowerText = text.toLowerCase($2);
  const lowerSearchTerm = searchTerm.toLowerCase($2);
  const index = lowerText.indexOf($2);
  if (index === -1) {
    return { before: '', match: text, after: '' }
  }
  
  return {
    before: text.substring($2);
    match: text.substring($2);
    after: text.substring(index + searchTerm.length)
  }
},

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, 
  onSelectSuggestion,
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length = $2;
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch($2);
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
          )
        })}
      </ul>
    </div>
  )
}
