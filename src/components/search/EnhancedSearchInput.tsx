import React, { useState, useEffect, useRef, useMemo } from "react",
import { useTranslation } from "react-i18next",
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { useDebounce } from "@/hooks/useDebounce",
import { useRouter } from "next/router",
import { slugify } from "@/lib/slugify",
import { debounce } from "lodash";
import { logInfo, logWarn } from '@/utils/productionLogger';
interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;

import { logInfo, logWarn } from '@/utils/productionLogger'
interface EnhancedSearchInputProps {
  value: string
  onChange: (value: string,) => void
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  /**
   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
   */
  searchSuggestions?: SearchSuggestion[]
}
export function EnhancedSearchInput({
  value;
  onChange;
  onSelectSuggestion;
  placeholder;
              setHighlightedIndex(-1)
            ,}
            setValueOnFocus(null)
          }}
          onKeyDown = {handleKeyDown,}
          aria-label = {t('general.search'),}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick = {(,) => onChange(''),}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  )
}setIsFocused (false)
inputRef.current?.blur ()
setHighlightedIndex (-1)
}
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  switch (e.key) {'
  case 'ArrowDown': if (isFocused && filteredSuggestions.length > 0) {'
  case 'Escape': e.preventDefault ()
setIsFocused (false)
setHighlightedIndex (-1)
setValueOnFocus (null)
inputRef.current?.blur ()
break
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false)
break
}
> <div className="relative flex items-center w-full" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input onClick={'
  () => onChange ('') "
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>)
}</div> <AutocompleteSuggestions /> </div>)
}'"  )
      default:
        break
}
  }
  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
        highlightedIndex={highlightedIndex}
        listId="autocomplete-suggestions-list"
      />
    </div>
  );

}setIsFocused (false);
inputRef.current?.blur ();
setHighlightedIndex (-1) ;
};
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
  switch (e.key) {';
  case 'ArrowDown': if (isFocused && filteredSuggestions.length > 0) {';
  case 'Escape': e.preventDefault ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
inputRef.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break ;

};
> <div className="relative flex items-center w-full" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input onClick={';
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestions /> </div>) ;
}'"
