import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { SearchSuggestion } from "@/types/search";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/router";
import { slugify } from "@/lib/slugify";
import { debounce } from "lodash";
import { logInfo, logWarn } from '@/utils/productionLogger';
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
  placeholder = $2;
  searchSuggestions
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState($2);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1),
  const inputRef = $2;
  const containerRef = $2;
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null),
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState($2);
  const { t } = useTranslation($2);
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]),
  const [loading, setLoading] = useState($2);
  const debounced = useDebounce($2);
  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setApiSuggestions($2);
          return
        }

        setLoading($2);
        try {
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {
            signal: AbortSignal.timeout(5000) // 5 second timeout
          }),
          
          if (response.ok) {
            const data = await response.json($2);
            if (Array.isArray(data)) {
              setApiSuggestions(data.slice(0, 5)), // Limit to 5 API suggestions
            }
          } else {
            // Silently fail for search suggestions - don't show error toast
            logWarn($2);
            setApiSuggestions([])
          }
        } catch (error) {
          // Silently fail for search suggestions - don't show error toast
          logWarn($2);
          setApiSuggestions([])
        } finally {
          setLoading(false)
        }
      }, 300),
    []
  ),

  // Fetch suggestions from API when input value changes
  useEffect(() => {
    if (!debounced) {
      // Show recent suggestions provided via props when no query entered
      setFilteredSuggestions(
        (searchSuggestions || []).filter(s = $2;
      setHighlightedIndex($2);
      return
    }

    const controller = new AbortController($2);
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {
      signal: controller.signal
    })
      .then(res => {
        if (!res.ok) throw new Error($2);
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
      .catch(() => setFilteredSuggestions([])),

    return () => controller.abort()
  }, [debounced, searchSuggestions]),

  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused($2);
        // setHighlightedIndex(-1), // Already handled in onBlur generally
      }
    }
    
    document.addEventListener($2);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),

  const router = useRouter($2);
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo($2);
    onChange($2);
    if (onSelectSuggestion) {
      logInfo($2);
      onSelectSuggestion(suggestionObj)
    } else {
      // Provide a sensible default navigation if the parent did not supply a handler
      logWarn($2);
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
      }
    }
    setIsFocused($2);
    inputRef.current?.blur($2);
    setHighlightedIndex(-1)
  },

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault($2);
          setHighlightedIndex(prev = $2;
      case 'ArrowUp':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault($2);
          setHighlightedIndex(prev = $2;
      case 'Enter':
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {
          e.preventDefault(), // Prevent form submission
          handleSelectSuggestion(filteredSuggestions[highlightedIndex])
        } else if (value.trim()) {
          // Manually trigger search navigation to ensure consistent behavior
          e.preventDefault($2);
          logInfo($2);
          router.push(`/search?q = $2;
          setIsFocused($2);
          setHighlightedIndex($2);
          inputRef.current?.blur()
        } else {
          // Prevent empty form submission
          e.preventDefault()
        }
        break,
      case 'Escape':
        e.preventDefault($2);
        setIsFocused($2);
        setHighlightedIndex($2);
        setValueOnFocus($2);
        inputRef.current?.blur($2);
        break,
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus($2);
        break
    }
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
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />
        <Input
          ref={inputRef}
          type="text"
          id="enhanced-search-input"
          name="search"
          value={value}
          onChange={(e) => {
            onChange($2);
            setEnterHandledPostFocus(false)
          }}
          onFocus={(e) => {
            setIsFocused($2);
            setHighlightedIndex(-1), // Explicitly reset on focus
            const currentVal = $2;
            setValueOnFocus($2);
            setEnterHandledPostFocus($2);
            e.target.setSelectionRange(currentVal.length, currentVal.length)
          }}
          onBlur = $2;
            if (!containerRef.current || !containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused($2);
              setHighlightedIndex(-1)
            }
            setValueOnFocus(null)
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
            onClick={() => onChange('')}
            aria-label="Clear search"
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
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  )
}
