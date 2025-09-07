
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input",;
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",;
import { SearchSuggestion } from "@/types/search",;
import { useDebounce } from "@/hooks/useDebounce",;
import { useRouter } from "next/router",;
import { slugify } from "@/lib/slugify",;
import { debounce } from "lodash",;
import { logInfo, logWarn } from '@/utils/productionLogger',;




import { debounce } from "lodash";
import { logInfo, logWarn } from '@/utils/productionLogger';
interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;

  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.

   */

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  /**

   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
   */
  searchSuggestions?: SearchSuggestion[]
}
export function EnhancedSearchInput({

  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
  /**
   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
  searchSuggestions?: SearchSuggestion[]
export function EnhancedSearchInput({

  value;
  onChange;
  onSelectSuggestion;

              setHighlightedIndex(-1)
            ,}
            setValueOnFocus(null)
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
          onFocus={(e) => {;
            setIsFocused(true);            setHighlightedIndex(-1), // Explicitly reset on focus;
            const currentVal = e && e.target.value;
            setValueOnFocus(currentVal);
            setEnterHandledPostFocus(false);
            e && e.target.setSelectionRange(currentVal && currentVal.length, currentVal && currentVal.length);
          }}
          onBlur={(e) => {;
            const relatedTarget = e && e.relatedTarget as HTMLElement;            if (!containerRef && containerRef.current || !containerRef && containerRef.current.contains(relatedTarget as Node)) {;
            onChange(e.target.value),;
            setEnterHandledPostFocus(false);
          }}
          onFocus={(e) => {;
            setIsFocused(true),;
            setHighlightedIndex(-1), // Explicitly reset on focus;
            const currentVal = e.target.value,;
            setValueOnFocus(currentVal),;
            setEnterHandledPostFocus(false),;
            e.target.setSelectionRange(currentVal.length, currentVal.length);
          }}
          onBlur={(e) => {;
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (!containerRef.current || !containerRef.current.contains(relatedTarget as Node)) {;
              setIsFocused(false);
              setHighlightedIndex(-1);
            ,}
            setValueOnFocus(null);
          }}

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}


          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick = {(,) => onChange(''),}
            aria-label="Clear search";
          >;
            <X className="h-4 w-4" />;
          </button>;
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

      </div>;


      <AutocompleteSuggestions
      aria-haspopup="listbox";""
      aria-controls="autocomplete-suggestions-list" // Added aria-controls;")
      onClick = {(,) => inputRef && inputRef.current?.focus(),}
    >;"
      <div className="relative flex items-center w-full">;"
</div>
        <Search;"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate""
        />;


        <Input;
          ref={inputRef}

          type="text"""
          id="enhanced-search-input"""
          name="search""
          value={value}

    <div;"
      className="relative w - full";"
      ref = {container_ref, }"
      role="combobox";"
      aria - expanded = {is_focused && filtered_suggestions.length > 0, }
      <div className="relative flex items - center w - full">;"
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";"

          ref = {input_ref, }"
          type="text";""
          id="enhanced - search - input";""
          name="search";"
          on_change={(e) => {

          <button;"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"""
            onClick={() => onChange()}
</button>
            <X className="h-4 w-4" />"

      </div>;
      <AutocompleteSuggestions;
pr-12325
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}

      </div>;
      <AutocompleteSuggestions;

pr-12325
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls

      />;
    </div>;
  );

}setIsFocused (false);
inputRef && inputRef.current?.blur ();
setHighlightedIndex (-1) ;
};
const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
  switch (e && e.key) {';
  case 'ArrowDown': if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {';
  case 'Escape': e && e.preventDefault ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
inputRef && inputRef.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break ;

};
> <div className="relative flex items-center w-full" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <InputonClick={'
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestions /> </div>) ;
}'"  );
      default:;
        break;
}
  };

  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"

      aria-expanded={isFocused && filteredSuggestions && filteredSuggestions.length> 0}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list">;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

        <Input
          ref={inputRef}
          type="text"
          value={value}

          onChange={(e) => {;
            onChange(e && e.target.value);

}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}

        />;
        {value && (;

          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}

      </div>;

      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

        highlightedIndex={highlightedIndex} 
        listId="autocomplete-suggestions-list" 
      />;
    </div>;
  );
}


          on_blur={(e) => {
            const related_target = e.related_target as HTMLElement;            if () {) {
  $2
}
              setIsFocused (false);
              setHighlightedIndex (-1);
            , }
            setValueOnFocus (null);
          }}
          onKeyDown = {handleKeyDown, }
          aria - label = {t ('general.search'), }
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - gray - 800 placeholder:text - zion - slate h - auto py - 0 min - w-0";
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}
          auto_complete="off";
        />;
        {value && (
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";
            on_click = {(, ) => on_change (''), }
            aria - label="Clear search";
          >;
            <X className="h - 4 w - 4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
        highlightedIndex={highlightedIndex} // Pass highlightedIndex;"
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls;"

> <div className="relative flex items-center w-full" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <InputonClick={
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;"

}</div> <AutocompleteSuggestions /> </div>) ;

  return (<div;"
      className="relative w-full""
      ref={containerRef}"
      role="combobox""
      aria-expanded={isFocused && filteredSuggestions && filteredSuggestions.length> 0}
</div>"
      <div className="relative">;"


          ref={inputRef}"
          type="text""
)
          onChange={(e) => {;



        highlightedIndex={highlightedIndex} "
        listId="autocomplete-suggestions-list""

            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";""
            on_click = {(, ) => on_change (), }
            <X className="h - 4 w - 4" />;"

          </button>)}
pr-12325
        suggestions = {filtered_suggestions, }
        search_term = {value, }
        onSelectSuggestion = {handleSelectSuggestion, }
        visible = {is_focused, }
        highlighted_index={highlighted_index} // Pass highlighted_index;
        list_id="autocomplete - suggestions - list" // Pass ID for aria - controls;
      />;
    </div>);
}setIsFocused (false);
input_ref.current?.blur ();
setHighlightedIndex (-1);
}
const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
  switch (e.key) {';
  case 'ArrowDown': // Check condition
if ( {') {
  $2
}
  case 'Escape': e.prevent_default ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
input_ref.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break;
}
> <div className="relative flex items - center w - full" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate" /> <Input on_click={';
  () => on_change ('') ";
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);
}</div> <AutocompleteSuggestions /> </div>);
}'"  );
      default:;
        break;
}
  }
  return (<div;
      className="relative w - full";
      ref={container_ref}
      role="combobox";
      aria - expanded={is_focused && filtered_suggestions.length > 0}
      aria - haspopup="listbox";
      aria - controls="autocomplete - suggestions - list">;
      <div className="relative">;
        <Search;
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";
        />;
        <Input;
          ref={input_ref}
          type="text";
          value={value}
          on_change={(e) => {
            on_change (e.target.value);
}}
          on_focus={() => setIsFocused (true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate";
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}
        />;
        {value && (
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text - white";
            on_click={() => on_change ('')}
          >;
            <X className="h - 4 w - 4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions={filtered_suggestions}
        search_term={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={is_focused}
        highlighted_index={highlighted_index}
        list_id="autocomplete - suggestions - list";
      />;
    </div>);
}
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
origin/cursor/automate-test-improve-and-merge-code-2533
        highlighted_index={highlighted_index} // Pass highlighted_index;"
        list_id="autocomplete - suggestions - list" // Pass ID for aria - controls;"

    </div>);
  // TODO: Implement
}"
  switch (e.key) {';
  case 'ArrowDown': // Check condition;
if ( {') {
  case 'Escape': e.prevent_default ();
setValueOnFocus (null);
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
> <div className="relative flex items - center w - full" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate" /> <Input on_click={';
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);"

}</div> <AutocompleteSuggestions /> </div>);

      ref={container_ref}"
      aria - expanded={is_focused && filtered_suggestions.length > 0}

          ref={input_ref}"
          type="text";"
          value={value})

            on_click={() => on_change ()}

        suggestions={filtered_suggestions}
        search_term={value}
        visible={is_focused}
        highlighted_index={highlighted_index}"
        list_id="autocomplete - suggestions - list";"

    </div>);"`;
pr-12325
