

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface AutocompleteSuggestionsProps {

  suggestions: SearchSuggestion[]
  searchTerm: string
  onSelectSuggestion: (suggestion: string) => void

  visible: boolean

=======

import React from "react",;
import { SearchSuggestion, SearchHighlight } from "@/types/search",;
interface AutocompleteSuggestionsProps {;
  suggestions: SearchSuggestion[],;
  searchTerm: string,;
  onSelectSuggestion: (suggestion: string) => void,;
  visible: boolean;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
// Helper function to highlight matching text

const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm |searchTerm.length === 0) {
    return { before: '', match: text, after: '' }
  }

  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  if (index === -1) {
    return { before: '', match: text, after: '' }
  }
  return {
    before: text.substring (0, index);
    match: text.substring (index, index + search_term.length);
    after: text.substring (index + search_term.length);
  }

  visible
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg overflow-hidden">
      <ul className="py-2 max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => {

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
                className="px-4 py-2 hover:bg-zion-blue-light/20 cursor-pointer"
                onClick={() => onSelectSuggestion(suggestion && suggestion.text)}>;
              <div className="flex items-center justify-between">;
                <div>;
                  <span>{highlight && highlight.before}</span>;
                  <span className="font-bold text-zion-purple">{highlight && highlight.match}</span>;
                  <span>{highlight && highlight.after}</span>;
                </div>;
                <span className="text-xs text-zion-slate-light capitalize">;
                  {suggestion && suggestion.type}
                </span>;
              </div>;
            </li>;
          );
        })}

      </ul>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
}
;



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
