
import React from "react";

interface AutocompleteSuggestionsProps {_suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (_suggestion: string) => void;
  visible: boolean;}

// Helper function to highlight matching text
const _highlightMatch = (_text: string, _searchTerm: string): SearchHighlight => {_if (!searchTerm || searchTerm.length === 0) {
    return { before: '', _match: text, _after: ''};
  }
  
  const _lowerText = text.toLowerCase();
  const _lowerSearchTerm = searchTerm.toLowerCase();
  const _index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {_return { before: '', _match: text, _after: ''};
  }
  
  return {_before: text.substring(0, _index), _match: text.substring(index, _index + searchTerm.length), _after: text.substring(index + searchTerm.length)};
};

export function AutocompleteSuggestions(_{_suggestions, _searchTerm, _onSelectSuggestion, _visible}: AutocompleteSuggestionsProps) {_if (!visible || suggestions.length === 0) return null;
  
  return (_<div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, _index) => {
          const _highlight = highlightMatch(suggestion.text, _searchTerm);
          
          return (_<li key={`${suggestion.type}-${_index}`} 
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={_() => onSelectSuggestion(suggestion.text)}>
              <div className="flex items-center justify-between">
                <div>
                  <span>{_highlight.before}</span>
                  <span className="font-bold text-zion-purple">{_highlight.match}</span>
                  <span>{_highlight.after}</span>
                </div>
                <span className="text-xs text-zion-slate-light capitalize">
                  {_suggestion.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
