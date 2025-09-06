
<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import { SearchSuggestion, SearchHighlight } from "@/types/search";
=======
import {SearchSuggestion, SearchHighlight} from "@/types/search";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",
import { SearchSuggestion, SearchHighlight } from "@/types/search",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface AutocompleteSuggestionsProps {

  suggestions: SearchSuggestion[]
  searchTerm: string
  onSelectSuggestion: (suggestion: string) => void

  visible: boolean
<<<<<<< HEAD
=======
import React from "react",;
import { SearchSuggestion, SearchHighlight } from "@/types/search",;
interface AutocompleteSuggestionsProps {;
  suggestions: SearchSuggestion[],;
  searchTerm: string,;
  onSelectSuggestion: (suggestion: string) => void,;
  visible: boolean;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
// Helper function to highlight matching text

const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm |searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  if (index === -1) {
    return { before: '', match: text, after: '' }
  }
  return {
    before: text.substring(0, index);
    match: text.substring(index, index + searchTerm.length);
    after: text.substring(index + searchTerm.length)
  }
<<<<<<< HEAD
}
export function AutocompleteSuggestions({
  suggestions
  searchTerm
  onSelectSuggestion;
  visible
}: AutocompleteSuggestionsProps) {
  if (!visible |suggestions.length === 0) return null;
=======
};

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, ;
  onSelectSuggestion;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
  const lowerText = text.toLowerCase(),;
  const lowerSearchTerm = searchTerm.toLowerCase(),;
  const index = lowerText.indexOf(lowerSearchTerm),;
  if (index === -1) {;
    return { before: '', match: text, after: '' }
  }
;
  return {;
    before: text.substring(0, index),;
    match: text.substring(index, index + searchTerm.length),;
    after: text.substring(index + searchTerm.length);
  }
},

export function AutocompleteSuggestions({ 
  suggestions, 
  searchTerm, 
  onSelectSuggestion,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  visible 
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {
<<<<<<< HEAD
          const highlight = highlightMatch(suggestion.text, searchTerm);

=======
          const highlight = highlightMatch(suggestion.text, searchTerm),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
      </ul>
    </div>
  )
}
=======
      </ul>;
    </div>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
