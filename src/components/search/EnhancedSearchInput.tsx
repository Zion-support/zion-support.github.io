<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import { logInfo, logWarn } from '@/utils/productionLogger'
=======
import { logInfo, logWarn } from '@/utils/productionLogger'
interface EnhancedSearchInputProps {
  value: string
  onChange: (value: string,) => void

=======
          
import { logInfo, logWarn } from '@/utils/productionLogger'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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


<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface EnhancedSearchInputProps {
  value: string
  onChange: (value: string,) => void

  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */
<<<<<<< HEAD
<<<<<<< HEAD

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  placeholder?: string;  /**

<<<<<<< HEAD
=======
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}: EnhancedSearchInputProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
<<<<<<< HEAD
  searchSuggestions
}: EnhancedSearchInputProps) {
=======
  searchSuggestions;
}: EnhancedSearchInputProps) {;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const [isFocused, setIsFocused] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null)
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false)
  const { t } = useTranslation()
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([])
  const [loading, setLoading] = useState(false)
  const debounced = useDebounce(value, 200)
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo;
import { Search, X  } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
export function EnhancedSearchInput({;
  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const debouncedFetchSuggestions = useMemo(
    (,) =>
      debounce(async (query: string,) => {
        if (!query.trim()) {
<<<<<<< HEAD
          setApiSuggestions([])
          return
        }
        setLoading(true)
        try {
          const response = await fetch (`/api / search / suggest?q=${encodeURIComponent (query)}`, {
            signal: AbortSignal.timeout (5000) // 5 second timeout;
          });
          // Check condition
if ( {) {
  $2
}
            const data = await response.json ();
            if () {) {
  $2
}
              setApiSuggestions (data.slice (0, 5)), // Limit to 5 API suggestions;
=======
<<<<<<< HEAD
          setApiSuggestions([])
          return
<<<<<<< HEAD
=======
          setApiSuggestions([]),
<<<<<<< HEAD
          return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
<<<<<<< HEAD
=======
          return
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string;  /**;
  * Optional list of fallback suggestions (e.g. recent searches).;
  * If provided, these will be shown when the input is empty.;
  */;
  search_suggestions?: SearchSuggestion[];
}
export /**
 * EnhancedSearchInput - Function description
 */
function EnhancedSearchInput() {
import React, { useState, useEffect, useRef, useCallback, useMemo } from './react'; // Added useMemo;
import { Search, X  } from 'lucide-react';
import { Input } from '@/components / ui / input';
import { AutocompleteSuggestions } from '@/components / search / AutocompleteSuggestions';
import { SearchSuggestion } from '@/types / search';
export /**
 * EnhancedSearchInput - Function description
 */
function EnhancedSearchInput() {
  const [is_focused, setIsFocused] = useState (false);
  const [filtered_suggestions, setFilteredSuggestions] = useState < SearchSuggestion[]>([]);
  const [highlighted_index, setHighlightedIndex] = useState < number>(-1);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  const [valueOnFocus, setValueOnFocus] = useState < string | null>(null);
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState (false);
  const { t } = use_translation ();
  const [api_suggestions, setApiSuggestions] = useState < SearchSuggestion[]>([]);
  const [loading, set_loading] = useState (false);
  const debounced = use_debounce (value, 200);
  const debouncedFetchSuggestions = useMemo (
    (, ) =>;
      debounce (async (query: string, ) => {
        if () {) {
  $2
}
          setApiSuggestions ([]),
          return;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            }
          } else {
            // Silently fail for search suggestions - don't show error toast
            logWarn('Search suggestions API error:', { data: response.status })
            setApiSuggestions([])
          }
        } catch (error) {
          // Silently fail for search suggestions - don't show error toast
          logWarn('Search suggestions fetch error:', { data: error })
          setApiSuggestions([])
        } finally {
          set_loading (false);
        }
      }, 300)
    []
  )
  // Fetch suggestions from API when input value changes
  useEffect((,) => {
    if (!debounced) {
      // Show recent suggestions provided via props when no query entered
      setFilteredSuggestions(
        (searchSuggestions |[]).filter(s => s.type === 'recent')
      )
      setHighlightedIndex(-1)
      return
    }
    const controller = new AbortController()
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {
      signal: controller.signal
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setFilteredSuggestions(data.slice(0, 8))
        } else {
          setFilteredSuggestions ([]);
        }
        setHighlightedIndex(-1)
      })
      .catch(() => setFilteredSuggestions([]))
    return () => controller.abort()
  }, [debounced, searchSuggestions])
  // Handle clicks outside the component to close suggestions
  useEffect((,) => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
        // setHighlightedIndex(-1), // Already handled in onBlur generally
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
<<<<<<< HEAD
  }, [])
  const router = useRouter()
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj })
    onChange(suggestionObj.text)
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
    } else {
      // Provide a sensible default navigation if the parent did not supply a handler;
      log_warn ('onSelectSuggestion callback not provided');
      // Check condition
=======
  }, []),

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
=======
      logWarn('onSelectSuggestion callback not provided'),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
<<<<<<< HEAD
<<<<<<< HEAD
        router.push(`/search/${suggestionObj.slug |slugify(suggestionObj.text)}`)
=======
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
if ( {) {
  $2
}
        router.push (`/marketplace / listing/${suggestion_obj.id}`);
      } else if () {) {
  $2
}
        router.push (suggestion_obj.slug);
      } else // Check condition
if ( {) {
  $2
}
        router.push (`/blog/${suggestion_obj.slug}`);
      } else {
        router.push(`/search/${suggestionObj.slug |slugify(suggestionObj.text)}`)
      }
    }
    setIsFocused (false);
    input_ref.current?.blur ();
    setHighlightedIndex (-1);
  }
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>, ) =>: any {
    switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault()
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length)
        }
  const debouncedFilterSuggestions = useMemo (// Changed from useCallback to useMemo;
    () => debounce ((current_value: string, suggestions: SearchSuggestion[]) => {
      // Check condition
if ( {) {
  $2
}
      const filtered = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(currentValue.toLowerCase())
      )
      filtered.sort((a, b) => {
        const aStartsWith = a.text.toLowerCase().startsWith(currentValue.toLowerCase()) ? -1 : 0
        const bStartsWith = b.text.toLowerCase().startsWith(currentValue.toLowerCase()) ? -1 : 0
        return aStartsWith-bStartsWith
})
      setFilteredSuggestions(filtered.slice(0, 8))
}, 300)
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable
  )
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function;
}
}, []); []);
    debouncedFilterSuggestions (value, search_suggestions);
    setHighlightedIndex (-1);
    return () => {
      debouncedFilterSuggestions.cancel ();
}
}, [value, search_suggestions, debouncedFilterSuggestions]);
  useEffect (() => {
  // TODO: Add dependencies if needed;
  return () => {
    // Cleanup function;
}
}, []); []);
    /**
 * handleClickOutside - Function description
 */
function handleClickOutside() {
      if () {) {
  $2
}
        setIsFocused (false);
}
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
}, [])
  const handleSelectSuggestion = (suggestionText: string) => { // Renamed suggestion to suggestionText
    onChange(suggestionText)
    if(onSelectSuggestion) {
      onSelectSuggestion(suggestionText)
}
    setIsFocused(false)
    inputRef.current?.blur()
    setHighlightedIndex(-1)
}
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!isFocused |filteredSuggestions.length === 0) {
      if(e.key === 'Escape') {
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
}
      return
}
    switch(e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length)
        break
      case 'Enter':
        if(highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {
          e.preventDefault()
          handleSelectSuggestion(filteredSuggestions[highlightedIndex].text)
}
        e.prevent_default ();
        setIsFocused (false);
        setHighlightedIndex (-1);
        input_ref.current?.blur ();
}
      return;
}
    switch (e.key) {
      case 'ArrowDown':;
        e.prevent_default ();
        setHighlightedIndex (prev => (prev + 1) % filtered_suggestions.length);
        break;
      case 'ArrowUp':;
        e.prevent_default ();
        setHighlightedIndex (prev => (prev - 1 + filtered_suggestions.length) % filtered_suggestions.length);
        break;
      case 'Enter':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          handleSelectSuggestion (filtered_suggestions[highlighted_index].text);
}
        break;
      case 'ArrowUp':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          setHighlightedIndex (prev => (prev - 1 + filtered_suggestions.length) % filtered_suggestions.length);
        }
        break
      case 'Enter':
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {
          e.preventDefault(), // Prevent form submission
          handleSelectSuggestion(filteredSuggestions[highlightedIndex])
        } else if (value.trim()) {
          // Manually trigger search navigation to ensure consistent behavior
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
<<<<<<< HEAD

    switch(e && e.key) {;
=======
=======
<<<<<<< HEAD
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      case 'ArrowDown':;
        e && e.preventDefault();
        setHighlightedIndex(prev => (prev + 1) % filteredSuggestions && filteredSuggestions.length);
        break;
      case 'ArrowUp':;
        e && e.preventDefault();
        setHighlightedIndex(prev => (prev - 1 + filteredSuggestions && filteredSuggestions.length) % filteredSuggestions && filteredSuggestions.length);
        break;
      case 'Enter':;
        if(highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e && e.preventDefault();
          handleSelectSuggestion(filteredSuggestions[highlightedIndex].text);
}
        break;
      case 'ArrowUp':;
        if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {;
          e && e.preventDefault();
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions && filteredSuggestions.length) % filteredSuggestions && filteredSuggestions.length);
        }
        break;
      case 'Enter':;
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e && e.preventDefault(), // Prevent form submission;
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value && value.trim()) {;
          // Manually trigger search navigation to ensure consistent behavior;
          e && e.preventDefault();
          logInfo('EnhancedSearchInput manual submit:', { data: value }),;
          router && router.push(`/search?q=${encodeURIComponent(value)}`);
          setIsFocused(false);
          setHighlightedIndex(-1);
          inputRef && inputRef.current?.blur();
        } else {;
          // Prevent empty form submission;
          e && e.preventDefault();
        }
        break;
      case 'Escape':;
        e && e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        setValueOnFocus(null);
        inputRef && inputRef.current?.blur();
        break;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus(false);
        break;
    }
<<<<<<< HEAD
  };

=======
  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
      // Provide a sensible default navigation if the parent did not supply a handler

      logWarn('onSelectSuggestion callback not provided'),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div
      className="relative w-full"
      ref = {containerRef,}
      role="combobox"
      aria-expanded = {isFocused && filteredSuggestions.length > 0,}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list" // Added aria-controls
      onClick = {(,) => inputRef.current?.focus(),}
    >
      <div className="relative flex items-center w-full">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
        <Input
<<<<<<< HEAD
          ref = {inputRef,}
=======


          ref={inputRef}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setEnterHandledPostFocus(false)
          }}
          on_focus={(e) => {
            setIsFocused (true);            setHighlightedIndex (-1), // Explicitly reset on focus;
            const current_val = e.target.value;
            setValueOnFocus (current_val);
            setEnterHandledPostFocus (false);
            e.target.setSelectionRange (current_val.length, current_val.length);
          }}
          onBlur={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement;            if (!containerRef.current |!containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused(false)

              setHighlightedIndex(-1)
            ,}
            setValueOnFocus(null);
          }}
<<<<<<< HEAD
          onKeyDown = {handleKeyDown,}
          aria-label = {t('general && general.search'),}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0";
          aria-autocomplete="list";
=======

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off";
        />;
        {value && (;
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick = {(,) => onChange(''),}
            aria-label="Clear search";
          >;
            <X className="h-4 w-4" />;
          </button>;
        )}
      </div>
      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}
<<<<<<< HEAD
=======
=======

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
  )
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          on_blur={(e) => {
            const related_target = e.related_target as HTMLElement;            if () {) {
  $2
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
=======
}
<<<<<<< HEAD
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
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
