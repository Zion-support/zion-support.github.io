<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useState, useEffect, useRef, useMemo } from &quot;react&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { Search, X } from 'lucide-react'
import { Input } from &quot;@/components/ui/input&quot;;
import { AutocompleteSuggestions } from &quot;@/components/search/AutocompleteSuggestions&quot;;
import { SearchSuggestion } from &quot;@/types/search&quot;;
import { useDebounce } from &quot;@/hooks/useDebounce&quot;;
import { useRouter } from &quot;next/router&quot;;
import { slugify } from &quot;@/lib/slugify&quot;;
import { debounce } from &quot;lodash&quot;;
import { logInfo, logWarn } from '@/utils/productionLogger';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7


interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
   */
  searchSuggestions?: SearchSuggestion[]
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = &quot;Search...&quot;,
  searchSuggestions
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false),
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1),
  const inputRef = useRef<HTMLInputElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null),
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false),
  const { t } = useTranslation(),
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]),
  const [loading, setLoading] = useState(false),

  const debounced = useDebounce(value, 200),

  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setApiSuggestions([]),
          return
=======
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
   * Optional callback when a suggestion is selected. This allows parent;
   * components to perform actions such as navigation.;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  placeholder?: string,;
  /**;
   * Optional list of fallback suggestions (e.g. recent searches).;
   * If provided, these will be shown when the input is empty.;
   */;
  searchSuggestions?: SearchSuggestion[];
}
;
export function EnhancedSearchInput({;
  value,;
  onChange,;
  onSelectSuggestion,;
  placeholder = "Search...",;
  searchSuggestions;
}: EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false),;
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),;
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null),;
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false),;
  const { t } = useTranslation(),;
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]),;
  const [loading, setLoading] = useState(false),;
  const debounced = useDebounce(value, 200),;
  const debouncedFetchSuggestions = useMemo(;
    () =>;
      debounce(async (query: string) => {;
        if (!query.trim()) {;
          setApiSuggestions([]),;
          return;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
;
        setLoading(true),;
        try {;
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {;
            signal: AbortSignal.timeout(5000) // 5 second timeout;
          }),;
          if (response.ok) {;
            const data = await response.json(),;
            if (Array.isArray(data)) {;
              setApiSuggestions(data.slice(0, 5)), // Limit to 5 API suggestions;
            }
          } else {;
            // Silently fail for search suggestions - don't show error toast;
            logWarn('Search suggestions API error:', { data: response.status }),;
            setApiSuggestions([]);
          }
        } catch (error) {;
          // Silently fail for search suggestions - don't show error toast;
          logWarn('Search suggestions fetch error:', { data: error }),;
          setApiSuggestions([]);
        } finally {;
          setLoading(false);
        }
      }, 300),;
    [];
  ),;
  // Fetch suggestions from API when input value changes;
  useEffect(() => {;
    if (!debounced) {;
      // Show recent suggestions provided via props when no query entered;
      setFilteredSuggestions(;
        (searchSuggestions || []).filter(s => s.type === 'recent');
      ),;
      setHighlightedIndex(-1),;
      return;
    }
;
    const controller = new AbortController(),;
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller.signal;
    });
      .then(res => {;
        if (!res.ok) throw new Error('Failed to fetch suggestions'),;
        return res.json();
      });
      .then(data => {;
        if (Array.isArray(data)) {;
          setFilteredSuggestions(data.slice(0, 8));
        } else {;
          setFilteredSuggestions([]);
        }
        setHighlightedIndex(-1);
      });
      .catch(() => setFilteredSuggestions([])),;
    return () => controller.abort();
  }, [debounced, searchSuggestions]),;
  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false),;
        // setHighlightedIndex(-1), // Already handled in onBlur generally;
      }
    }
<<<<<<< HEAD
    
<<<<<<< HEAD
    document.addEventListener("mousedown", handleClickOutside),
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),
=======
    document.addEventListener(&quot;mousedown&quot;, handleClickOutside);
    return () => document.removeEventListener(&quot;mousedown&quot;, handleClickOutside);
  }, []);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj }),
      onSelectSuggestion(suggestionObj)
    } else {
      // Provide a sensible default navigation if the parent did not supply a handler
      logWarn('onSelectSuggestion callback not provided'),
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
<<<<<<< HEAD
  },
  
  return (
    <div
      className=&quot;relative w-full&quot;
      ref={containerRef}
      role=&quot;combobox&quot;
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup=&quot;listbox&quot;
      aria-controls=&quot;autocomplete-suggestions-list&quot; // Added aria-controls
      onClick={() => inputRef.current?.focus()}
    >
      <div className=&quot;relative flex items-center w-full&quot;>
        <Search 
          className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate&quot; 
        />
        <Input
          ref={inputRef}
          type=&quot;text&quot;
          id=&quot;enhanced-search-input&quot;
          name=&quot;search&quot;
=======
  },;
  return (;
    <div;
      className="relative w-full";
      ref={containerRef}
      role="combobox";
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list" // Added aria-controls;
      onClick={() => inputRef.current?.focus()}
    >;
      <div className="relative flex items-center w-full">;
        <Search;
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate";
        />;
        <Input;
          ref={inputRef}
          type="text";
          id="enhanced-search-input";
          name="search";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          value={value}
          onChange={(e) => {;
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
            }
            setValueOnFocus(null);
          }}
          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}
<<<<<<< HEAD
          className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0&quot;
          aria-autocomplete=&quot;list&quot;
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete=&quot;off&quot;
        />
        {value && (
          <button
            className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white&quot;
            onClick={() => onChange('')}
            aria-label=&quot;Clear search&quot;
          >
            <X className=&quot;h-4 w-4&quot; />
          </button>
=======
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0";
          aria-autocomplete="list";
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off";
        />;
        {value && (;
          <button;
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white";
            onClick={() => onChange('')}
            aria-label="Clear search";
          >;
            <X className="h-4 w-4" />;
          </button>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId=&quot;autocomplete-suggestions-list&quot; // Pass ID for aria-controls
      />
    </div>
  )
=======
        highlightedIndex={highlightedIndex} // Pass highlightedIndex;
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls;
      />;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;