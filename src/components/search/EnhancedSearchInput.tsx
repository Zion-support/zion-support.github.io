import { logInfo, logWarn } from '@/utils/productionLogger'
import React, { useState, useEffect, useRef, useMemo } from "react",
import { useTranslation } from "react-i18next",
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
import { useDebounce } from "@/hooks/useDebounce",
import { useRouter } from "next/router",
import { slugify } from "@/lib/slugify",
import { debounce } from "lodash",
import { logInfo, logWarn } from '@/utils/productionLogger',


interface EnhancedSearchInputProps {
   * Optional list of fallback suggestions (e.g. recent searches).
   */
  searchSuggestions?: SearchSuggestion[]
}
export function EnhancedSearchInput({

  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
        }
        setLoading(true)
        try {
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {
            signal: AbortSignal.timeout(5000) // 5 second timeout
          })
          if (response.ok) {
            const data = await response.json()
            if (Array.isArray(data)) {
              setApiSuggestions(data.slice(0, 5)), // Limit to 5 API suggestions
import React, { useState, useEffect, useRef, useMemo } from "react",;
import { useTranslation } from "react-i18next",;
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input",;
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",;
import { SearchSuggestion } from "@/types/search",;
import { useDebounce } from "@/hooks/useDebounce",;
import { useRouter } from "next/router",;
import { slugify } from "@/lib/slugify",;
import { debounce } from "lodash",;
import { logInfo, logWarn } from '@/utils/productionLogger',;
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string) => void,;
  /**;
          return;
        }
        } finally {
          set_loading (false);
        }
        } else {
          setFilteredSuggestions ([]);
        }
  }, []),

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
      }
    }
    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
  }, []);
  const router = use_router ();
  const handleSelectSuggestion = (suggestion_obj: SearchSuggestion, ) =>: any {
    log_info ('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestion_obj }),
    on_change (suggestion_obj.text);
    // Check condition
if ( {) {
  $2
}
  }
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>, ) =>: any {
    switch (e.key) {
}
        setIsFocused (false);
}
    }
}
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!isFocused |filteredSuggestions.length === 0) {
      if(e.key === 'Escape') {
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
}
          e.preventDefault()
          logInfo('EnhancedSearchInput manual submit:', { data: value })
          router.push(`/search?q=${encodeURIComponent(value)}`)
          setIsFocused(false)
          setHighlightedIndex(-1)
          inputRef.current?.blur()
        } else {
          // Prevent empty form submission;
          e.prevent_default ();
        }
        break;
      case 'Escape':;
        e.prevent_default ();
        setIsFocused (false);
        setHighlightedIndex (-1);
        setValueOnFocus (null);
        input_ref.current?.blur ();
        break;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus (false);
        break;
    }
  }
;
    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
  const router = useRouter(),;
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {;
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),;
    onChange(suggestionObj.text),;
    if (onSelectSuggestion) {;
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj }),;
      onSelectSuggestion(suggestionObj);
    } else {;
      // Provide a sensible default navigation if the parent did not supply a handler;
      logWarn('onSelectSuggestion callback not provided'),;
      if (suggestionObj.id) {;
        router.push(`/marketplace/listing/${suggestionObj.id}`);
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {;
        router.push(suggestionObj.slug);
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {;
        router.push(`/blog/${suggestionObj.slug}`);
      } else {;
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`);
      }
    }
    setIsFocused(false),;
    inputRef.current?.blur(),;
    setHighlightedIndex(-1);
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    switch (e.key) {;
      case 'ArrowDown':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length);
        }
        break,;
      case 'ArrowUp':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault(),;
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
        }
        break,;
      case 'Enter':;
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e.preventDefault(), // Prevent form submission;
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {;
          // Manually trigger search navigation to ensure consistent behavior;
          e.preventDefault(),;
          logInfo('EnhancedSearchInput manual submit:', { data: value }),;
          router.push(`/search?q=${encodeURIComponent(value)}`),;
          setIsFocused(false),;
          setHighlightedIndex(-1),;
          inputRef.current?.blur();
        } else {;
          // Prevent empty form submission;
          e.preventDefault();
        }
        break,;
      case 'Escape':;
        e.preventDefault(),;
        setIsFocused(false),;
        setHighlightedIndex(-1),;
        setValueOnFocus(null),;
        inputRef.current?.blur(),;
        break,;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus(false),;
        break;
    }
  };

      // Provide a sensible default navigation if the parent did not supply a handler

      logWarn('onSelectSuggestion callback not provided'),

          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off";
        />;
        {value && (;
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}
  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
        <Input
          ref={inputRef}
          type="text"
          value={value}
}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
          on_blur={(e) => {
            const related_target = e.related_target as HTMLElement;            if () {) {
  $2
}
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
