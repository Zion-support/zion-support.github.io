

import { logInfo, logWarn } from '@/utils/productionLogger'
interface EnhancedSearchInputProps {
  value: string
  onChange: (value: string,) => void

>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;  /**
   */

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  placeholder?: string;  /**

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
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
}: EnhancedSearchInputProps) {
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
  searchSuggestions;
}: EnhancedSearchInputProps) {;
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
      return;
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
          setFilteredSuggestions([])
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
    } else {
      // Provide a sensible default navigation if the parent did not supply a handler
      logWarn('onSelectSuggestion callback not provided')
      logWarn('onSelectSuggestion callback not provided'),
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug |slugify(suggestionObj.text)}`)
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
      }
    }
    setIsFocused(false)
    inputRef.current?.blur()
    setHighlightedIndex(-1)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault()
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length)
        }
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {
      if(!currentValue) {
        setFilteredSuggestions(suggestions.filter(s => s.type === 'recent'))
        return;
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
  // TODO: Add dependencies if needed;
  return () => {;
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
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    }
    setIsFocused(false)
    inputRef.current?.blur()
    setHighlightedIndex(-1)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault()
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length)
        }
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {
      if(!currentValue) {
        setFilteredSuggestions(suggestions.filter(s => s.type === 'recent'))
        return;
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
  // TODO: Add dependencies if needed;
  return () => {;
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
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  },
  
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />
        <Input
          ref = {inputRef,}
          ref={inputRef}
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
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

              setHighlightedIndex(-1)
            ,}
            setValueOnFocus(null)
          }}
          onKeyDown = {handleKeyDown,}
          aria-label = {t('general.search'),}
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
      </div>
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
;
}
;
