<<<<<<< HEAD
<<<<<<< HEAD
=======
import { logInfo, logWarn } from '@/utils/productionLogger'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { logInfo, logWarn } from '@/utils/productionLogger'
interface EnhancedSearchInputProps {
  value: string
  onChange: (value: string,) => void

<<<<<<< HEAD
          
import { logInfo, logWarn } from '@/utils/productionLogger'
          
import { logInfo, logWarn } from '@/utils/productionLogger'
import { logInfo, logWarn } from '@/utils/productionLogger'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
<<<<<<< HEAD
<<<<<<< HEAD
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;  /**
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
   */

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
   * Optional list of fallback suggestions (e.g. recent searches).
=======
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;  /**
   */

   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  searchSuggestions
}: EnhancedSearchInputProps) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  searchSuggestions;
}: EnhancedSearchInputProps) {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
<<<<<<< HEAD
<<<<<<< HEAD
  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {
  searchSuggestions;
}: EnhancedSearchInputProps) {;
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
<<<<<<< HEAD
<<<<<<< HEAD
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          return;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setApiSuggestions([])
          return
          setApiSuggestions([]),
          return;
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
          return
<<<<<<< HEAD
          return
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

<<<<<<< HEAD
=======

  const debouncedFetchSuggestions = useMemo(
    (,) =>
      debounce(async (query: string,) => {
        if (!query.trim()) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
import { log_info, log_warn } from '@/utils / production_logger';
interface EnhancedSearchInputProps {
  value: string,
  on_change: (value: string, ) => void,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        }
<<<<<<< HEAD
<<<<<<< HEAD
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
ursor/fix-website-loading-errors-and-merge-6662
=======
        set_loading (true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        set_loading (true);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

          setApiSuggestions([]),

            }
<<<<<<< HEAD

            // Silently fail for search suggestions - don't show error toast;
            log_warn ('Search suggestions API error:', { data: response.status }),
            setApiSuggestions ([]);
          }
        } catch (error) {
          // Silently fail for search suggestions - don't show error toast;
          log_warn ('Search suggestions fetch error:', { data: error }),
          setApiSuggestions ([]);

<<<<<<< HEAD
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
          setLoading(false)
        }
    };
    const _handleKeyDown = (e) => {
        if (!showSuggestions)
            return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => prev < filteredSuggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
                    handleSuggestionClick(filteredSuggestions[selectedIndex]);
                }
                else if (query.trim()) {
                    handleSubmit(e);
                }
                break;
            case 'Escape':
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
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
  }, [])
  const router = useRouter()
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj })
    onChange(suggestionObj.text)
      logWarn('onSelectSuggestion callback not provided')
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug |slugify(suggestionObj.text)}`)
ursor/fix-website-loading-errors-and-merge-6662
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
        setHighlightedIndex (-1);
      });
      .catch (() => setFilteredSuggestions ([]));
    return () => controller.abort ();
  }, [debounced, search_suggestions]);
  // Handle clicks outside the component to close suggestions;
  useEffect ((, ) => {
    /**
 * handleClickOutside - Function description
 */
function handleClickOutside() {
      if () {) {
  $2
}
        setIsFocused (false),
        // setHighlightedIndex (-1), // Already handled in on_blur generally;
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
      log_info ('Calling onSelectSuggestion with:', { data: suggestion_obj }),
      onSelectSuggestion (suggestion_obj);
    } else {

        router.push (`/search/${suggestion_obj.slug || slugify (suggestion_obj.text)}`);
=======
        } finally {
          setLoading(false)
        }

      }, 300);
    []);
  // Fetch suggestions from API when input value changes;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      // Show recent suggestions provided via props when no query entered;
      setFilteredSuggestions (
        (search_suggestions || []).filter (string => s.type === 'recent'));
      setHighlightedIndex (-1);
=======
          } else {

            // Silently fail for search suggestions - don't show error toast;
            log_warn ('Search suggestions API error:', { data: response.status }),
            setApiSuggestions ([]);
          }
        } catch (error) {
          // Silently fail for search suggestions - don't show error toast;
          log_warn ('Search suggestions fetch error:', { data: error }),
          setApiSuggestions ([]);

        } finally {
          setLoading(false)
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return;
    }
    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {
      signal: controller.signal;
    });
      .then (res => {
        if (throw new Error ('Failed to fetch suggestions')) {
  $2
}
        return res.json ();
      });
      .then (data => {
        if () {) {
  $2
}
          setFilteredSuggestions (data.slice (0, 8));

        } else {
          setFilteredSuggestions([])
        }
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
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
  }, [])
  const router = useRouter()
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj })
    onChange(suggestionObj.text)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    
    document.addEventListener("mousedown", handleClickOutside),
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),


    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
        setHighlightedIndex (-1);
      });
      .catch (() => setFilteredSuggestions ([]));
    return () => controller.abort ();
  }, [debounced, search_suggestions]);
  // Handle clicks outside the component to close suggestions;
  useEffect ((, ) => {
    /**
 * handleClickOutside - Function description
 */
function handleClickOutside() {
      if () {) {
  $2
}
        setIsFocused (false),
        // setHighlightedIndex (-1), // Already handled in on_blur generally;
<<<<<<< HEAD
=======
      logWarn('onSelectSuggestion callback not provided'),
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      log_info ('Calling onSelectSuggestion with:', { data: suggestion_obj }),
      onSelectSuggestion (suggestion_obj);
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
      // Provide a sensible default navigation if the parent did not supply a handler
      logWarn('onSelectSuggestion callback not provided')
      logWarn('onSelectSuggestion callback not provided'),
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug |slugify(suggestionObj.text)}`)
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
=======

        router.push (`/search/${suggestion_obj.slug || slugify (suggestion_obj.text)}`);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        router.push (`/search/${suggestion_obj.slug || slugify (suggestion_obj.text)}`);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    setIsFocused(false)
    inputRef.current?.blur()
    setHighlightedIndex(-1)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    switch (e.key) {
<<<<<<< HEAD
<<<<<<< HEAD
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault()
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      case 'ArrowDown':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default (),
          setHighlightedIndex (prev => (prev + 1) % filtered_suggestions.length);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {
      if(!currentValue) {
        setFilteredSuggestions(suggestions.filter(s => s.type === 'recent'))
        return;
}
<<<<<<< HEAD
<<<<<<< HEAD
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
  // TODO: Add dependencies if needed;
  return () => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        setFilteredSuggestions (suggestions.filter (string => s.type === 'recent'));
        return;
}
      const filtered = suggestions.filter (suggestion =>;
        suggestion.text.toLowerCase ().includes (current_value.toLowerCase ()));
      filtered.sort ((a, b) => {
        const aStartsWith = a.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        const bStartsWith = b.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        return aStartsWith - bStartsWith;
});
      setFilteredSuggestions (filtered.slice (0, 8));
}, 300),
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable);
  useEffect (() => {
  // TODO: Add dependencies if needed;

  return () => {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Cleanup function;
};
}, []); [])
    debouncedFilterSuggestions(value, searchSuggestions)
    setHighlightedIndex(-1)
    return () => {
      debouncedFilterSuggestions.cancel()
}
}, [value, searchSuggestions, debouncedFilterSuggestions])
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
}
}, []); [])
    function handleClickOutside(event: MouseEvent) {
      if(containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
}
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { logInfo, logWarn } from '@/utils/productionLogger';

import { logInfo, logWarn } from '@/utils/productionLogger';
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string,) => void,;
  /**;
   * Optional callback when a suggestion is selected. This allows parent;
   * components to perform actions such as navigation.;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  placeholder?: string;  /**;
   * Optional list of fallback suggestions (e && e.g. recent searches).;
   * If provided, these will be shown when the input is empty.;
   */;
  searchSuggestions?: SearchSuggestion[];
}

export function EnhancedSearchInput(): any ({;
  value;
  onChange;
  onSelectSuggestion;
  placeholder = "Search...";
  searchSuggestions;
}: EnhancedSearchInputProps) {;
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo;
import { Search, X  } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
export function EnhancedSearchInput(): any ({;
  value,;
  onChange,;
  onSelectSuggestion,;
  placeholder = "Search...",;
  searchSuggestions;
}: EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null);
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false);
  const { t } = useTranslation();
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(value, 200);

  const debouncedFetchSuggestions = useMemo(;
    (,) =>;
      debounce(async (query: string,) => {;
        if (!query && query.trim()) {;
          setApiSuggestions([]),;
          return;
        }

        setLoading(true);
        try {;
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {;
            signal: AbortSignal && AbortSignal.timeout(5000) // 5 second timeout;
          });

          if (response && response.ok) {;
            const data = await response && response.json();
            if (Array && Array.isArray(data)) {;
              setApiSuggestions(data && data.slice(0, 5)), // Limit to 5 API suggestions;
            }
          } else {;
            // Silently fail for search suggestions - don't show error toast;
            logWarn('Search suggestions API error:', { data: response && response.status }),;
            setApiSuggestions([]);
          }
        } catch (error) {;
          // Silently fail for search suggestions - don't show error toast;
          logWarn('Search suggestions fetch error:', { data: error }),;
          setApiSuggestions([]);
        } finally {;
          setLoading(false);
        }
      }, 300);
    [];
  );

  // Fetch suggestions from API when input value changes;
  useEffect((,) => {;
    if (!debounced) {;
      // Show recent suggestions provided via props when no query entered;
      setFilteredSuggestions(;
        (searchSuggestions || []).filter(s => s && s.type === 'recent');
      );
      setHighlightedIndex(-1);
      return;
    }

    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller && controller.signal;
    });
      .then(res => {;
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
      });
      .then(data => {;
        if (Array && Array.isArray(data)) {;
          setFilteredSuggestions(data && data.slice(0, 8));
        } else {;
          setFilteredSuggestions([]);
        }
        setHighlightedIndex(-1);
      });
      .catch(() => setFilteredSuggestions([]));
    return () => controller && controller.abort();
  }, [debounced, searchSuggestions]);

  // Handle clicks outside the component to close suggestions;
  useEffect((,) => {;
    function handleClickOutside(): any (event: MouseEvent) {;
      if (containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false),;
        // setHighlightedIndex(-1), // Already handled in onBlur generally;
      }
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const router = useRouter();

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion,) => {;
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),;
    onChange(suggestionObj && suggestionObj.text);
    if (onSelectSuggestion) {;
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj }),;
      onSelectSuggestion(suggestionObj);
    } else {;
      // Provide a sensible default navigation if the parent did not supply a handler;
      logWarn('onSelectSuggestion callback not provided');
      if (suggestionObj && suggestionObj.id) {;
        router && router.push(`/marketplace/listing/${suggestionObj && suggestionObj.id}`);
      } else if (suggestionObj && suggestionObj.type === 'doc' && suggestionObj && suggestionObj.slug?.startsWith('/')) {;
        router && router.push(suggestionObj && suggestionObj.slug);
      } else if (suggestionObj && suggestionObj.type === 'blog' && suggestionObj && suggestionObj.slug) {;
        router && router.push(`/blog/${suggestionObj && suggestionObj.slug}`);
      } else {;
        router && router.push(`/search/${suggestionObj && suggestionObj.slug || slugify(suggestionObj && suggestionObj.text)}`);
      }
    }
    setIsFocused(false);
    inputRef && inputRef.current?.blur();
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>,) => {;
    switch (e && e.key) {;
      case 'ArrowDown':;
        if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {;
          e && e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions && filteredSuggestions.length);
        }
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo;
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {;
      if(!currentValue) {;
        setFilteredSuggestions(suggestions && suggestions.filter(s => s && s.type === 'recent'));
        return;
}

      const filtered = suggestions && suggestions.filter(suggestion =>;
        suggestion && suggestion.text.toLowerCase().includes(currentValue && currentValue.toLowerCase());
      );
      filtered && filtered.sort((a, b) => {;
        const aStartsWith = a && a.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        const bStartsWith = b && b.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        return aStartsWith-bStartsWith;
});
      setFilteredSuggestions(filtered && filtered.slice(0, 8));
}, 300),;
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable;
  );
  useEffect(() => {;
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    debouncedFilterSuggestions(value, searchSuggestions);
    setHighlightedIndex(-1);
    return () => {;
      debouncedFilterSuggestions && debouncedFilterSuggestions.cancel();
};
}, [value, searchSuggestions, debouncedFilterSuggestions]);
  useEffect(() => {;
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function;
};
}, []); []);
    function handleClickOutside(): any (event: MouseEvent) {;
      if(containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false);
}
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const handleSelectSuggestion = (suggestionText: string) => { // Renamed suggestion to suggestionText;
    onChange(suggestionText);
    if(onSelectSuggestion) {;
      onSelectSuggestion(suggestionText);
}
    setIsFocused(false);
    inputRef && inputRef.current?.blur();
    setHighlightedIndex(-1);
};
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if(!isFocused || filteredSuggestions && filteredSuggestions.length === 0) {;
      if(e && e.key === 'Escape') { ;
        e && e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        inputRef && inputRef.current?.blur();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!isFocused |filteredSuggestions.length === 0) {
      if(e.key === 'Escape') {
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
}
<<<<<<< HEAD
<<<<<<< HEAD
      return;
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
        break
      case 'ArrowUp':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault()
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length)
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
}, []);
  const handleSelectSuggestion = (suggestion_text: string) =>: any { // Renamed suggestion to suggestion_text;
    on_change (suggestion_text);
    // Check condition
if ( {) {
  $2
}
      onSelectSuggestion (suggestion_text);
}
    setIsFocused (false);
    input_ref.current?.blur ();
    setHighlightedIndex (-1);
}
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2

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

        break;
      case 'Enter':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default (), // Prevent form submission;
          handleSelectSuggestion (filtered_suggestions[highlighted_index]);
        } else if () {) {
  $2
}
          // Manually trigger search navigation to ensure consistent behavior;
          e.prevent_default ();
          log_info ('EnhancedSearchInput manual submit:', { data: value }),
          router.push (`/search?q=${encodeURIComponent (value)}`);
          setIsFocused (false);
          setHighlightedIndex (-1);
          input_ref.current?.blur ();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        } else {
          // Prevent empty form submission
          e.preventDefault()
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        setValueOnFocus(null)
        inputRef.current?.blur()
        break
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus(false)
        break
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
=======
    switch(e && e.key) {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
    switch(e && e.key) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  },
  
  
  return (
    <div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list" // Added aria-controls
      onClick={() => inputRef.current?.focus()}
    >
      <div className="relative flex items-center w-full">
=======
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  return (

      aria-expanded = {isFocused && filteredSuggestions && filteredSuggestions.length> 0,}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list" // Added aria-controls;
      onClick = {(,) => inputRef && inputRef.current?.focus(),}
    >;
      <div className="relative flex items-center w-full">;
<<<<<<< HEAD
=======
        <Search
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

        <Input
<<<<<<< HEAD
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
        <Input
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ref = {inputRef,}
          ref={inputRef}


          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
<<<<<<< HEAD
<<<<<<< HEAD
          ref = {inputRef,}
          id="enhanced-search-input"
          name="search"
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
            setEnterHandledPostFocus(false)
=======
=======
          onChange={(e) => {
            onChange(e.target.value)
            setEnterHandledPostFocus(false)
          }}
          onFocus={(e) => {
            setIsFocused(true);            setHighlightedIndex(-1), // Explicitly reset on focus
            const currentVal = e.target.value
            setValueOnFocus(currentVal)
            setEnterHandledPostFocus(false)
            e.target.setSelectionRange(currentVal.length, currentVal.length)
          }}
          onBlur={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement;            if (!containerRef.current |!containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused(false)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <div;
      className="relative w - full";
      ref = {container_ref, }
      role="combobox";
      aria - expanded = {is_focused && filtered_suggestions.length > 0, }
      aria - haspopup="listbox";
      aria - controls="autocomplete - suggestions - list" // Added aria - controls;
      on_click = {(, ) => input_ref.current?.focus (), }
    >;
      <div className="relative flex items - center w - full">;
        <Search;
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate";
        />;
        <Input;
          ref = {input_ref, }
          type="text";
          id="enhanced - search - input";
          name="search";
          value={value}
          on_change={(e) => {
            on_change (e.target.value);
            setEnterHandledPostFocus (false);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          onFocus={(e) => {
            setIsFocused(true);            setHighlightedIndex(-1), // Explicitly reset on focus
            const currentVal = e.target.value
            setValueOnFocus(currentVal)
            setEnterHandledPostFocus(false)
            e.target.setSelectionRange(currentVal.length, currentVal.length)
          }}
<<<<<<< HEAD
<<<<<<< HEAD
          onBlur={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement;            if (!containerRef.current |!containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused(false)
          on_focus={(e) => {
            setIsFocused (true);            setHighlightedIndex (-1), // Explicitly reset on focus;
            const current_val = e.target.value;
            setValueOnFocus (current_val);
            setEnterHandledPostFocus (false);
            e.target.setSelectionRange (current_val.length, current_val.length);
          }}


              setHighlightedIndex(-1)
            ,}
            setValueOnFocus(null)
          }}
          onKeyDown = {handleKeyDown,}
          aria-label = {t('general.search'),}
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            ,}
            setValueOnFocus(null);
          }}
<<<<<<< HEAD
          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
=======

      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  )
<<<<<<< HEAD
;
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}setIsFocused (false)
inputRef.current?.blur ()
setHighlightedIndex (-1)
}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
<<<<<<< HEAD
<<<<<<< HEAD
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      aria-expanded={isFocused && filteredSuggestions && filteredSuggestions.length> 0}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list">;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Input
          ref={inputRef}
          type="text"
          value={value}
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={(e) => {
            onChange(e.target.value)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          onChange={(e) => {;
            onChange(e && e.target.value);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
<<<<<<< HEAD
<<<<<<< HEAD
        />
        {value && (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        {value && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
=======

      </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        highlightedIndex={highlightedIndex} 
        listId="autocomplete-suggestions-list" 
      />;
    </div>;
  );
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
        highlightedIndex={highlightedIndex}
        listId="autocomplete-suggestions-list"
      />
    </div>
  )
}
}
;
;
}
;
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
