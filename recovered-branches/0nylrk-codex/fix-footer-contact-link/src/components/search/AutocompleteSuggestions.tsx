
import React from "react";

import { SearchSuggestion, SearchHighlight } from "@/types/search";

interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: string) => void;
  visible: boolean
}

// Helper function to highlight matching text

const highlightMatch = null;

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
;