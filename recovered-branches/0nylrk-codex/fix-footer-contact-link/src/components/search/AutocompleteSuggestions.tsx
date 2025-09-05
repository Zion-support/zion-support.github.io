
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { SearchSuggestion, SearchHighlight } from "@/types/search",
=======
import React from &quot;react&quot;;
import { SearchSuggestion, SearchHighlight } from &quot;@/types/search&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[],
  searchTerm: string,
  onSelectSuggestion: (suggestion: string) => void,
  visible: boolean
}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }
  
  const lowerText = text.toLowerCase(),
  const lowerSearchTerm = searchTerm.toLowerCase(),
  const index = lowerText.indexOf(lowerSearchTerm),
  
  if (index === -1) {
    return { before: '', match: text, after: '' }
  }
  
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  }
},

export function AutocompleteSuggestions({ 
  suggestions,
  searchTerm,
  onSelectSuggestion,
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,
  
  return (
    <div className=&quot;absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden&quot;>
      <ul className=&quot;py-2 max-h-60 overflow-y-auto&quot;>
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm),
          
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
