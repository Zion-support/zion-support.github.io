
import React from &quot;react&quot;;
import { SearchSuggestion, SearchHighlight } from &quot;@/types/search&quot;;

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean;
}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: '' };
  }
  
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {
    return { before: '', match: text, after: '' };
  }
  
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  };
};

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, 
  onSelectSuggestion,
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;
  
  return (
    <div className=&quot;absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden&quot;>
      <ul className=&quot;py-2 max-h-60 overflow-y-auto&quot;>
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm);
          
          return (
            <li key={`${suggestion.type}-${index}`} 
                className=&quot;px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer&quot;
                onClick={() => onSelectSuggestion(suggestion.text)}>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <span>{highlight.before}</span>
                  <span className=&quot;font-bold text-zion-purple&quot;>{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className=&quot;text-xs text-zion-slate-light capitalize&quot;>
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
