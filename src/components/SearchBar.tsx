import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**
   * The current value of the search input
   */
  value: string,
  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */
  onChange: (val: string) => void,
  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}

/**
 * SearchBar component that allows users to search for content.
 */
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter($2);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]),
  const [focused, setFocused] = useState($2);
  const [highlightedIndex, setHighlightedIndex] = useState($2);
  const listId = $2;
  const debounced = useDebounce($2);
  const inputRef = $2;
  const containerRef = $2;
  useEffect(() => {
    if (!debounced) {
      setSuggestions($2);
      setHighlightedIndex($2);
      return
    }
    const controller = new AbortController($2);
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error($2);
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5))
        } else {
          setSuggestions([])
        }
        setHighlightedIndex(-1)
      })
      .catch(() => setSuggestions([])),
    return () => controller.abort()
  }, [debounced]),

  useOnClickOutside(containerRef, () => {
    setFocused($2);
    setHighlightedIndex(-1)
  }),

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange($2);
    if (onSelectSuggestion) onSelectSuggestion($2);
    const searchQuery = encodeURIComponent($2);
    router.push($2);
    fireEvent($2);
    setFocused($2);
    setHighlightedIndex($2);
    inputRef.current?.blur()
  },

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
      aria-expanded={focused && suggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls={listId}
      data-testid="search-bar"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          ref={inputRef}
          type="text"
          id="main-search-input"
          name="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => {
            setFocused($2);
            // Ensure the input receives focus properly
            e.target.setSelectionRange(e.target.value.length, e.target.value.length)
          }}
          onBlur = $2;
            if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {
              setFocused($2);
              setHighlightedIndex(-1)
            }
          }}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault($2);
                setFocused($2);
                setHighlightedIndex($2);
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
                e.preventDefault(), // Prevent form submission if SearchBar is in a form
                fireEvent($2);
                router.push(`/search?q = $2;
                setFocused($2);
                inputRef.current?.blur()
              }
              return
            }

            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault($2);
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length),
                break,
              case 'ArrowUp':
                e.preventDefault($2);
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length),
                break,
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault($2);
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,
                  // but if SearchBar is used standalone, this provides a fallback.
                  e.preventDefault($2);
                  fireEvent($2);
                  router.push(`/search?q = $2;
                  setFocused($2);
                  inputRef.current?.blur()
                }
                break,
              case 'Escape':
                e.preventDefault($2);
                setFocused($2);
                setHighlightedIndex($2);
                inputRef.current?.blur($2);
                break,
              default: break}
          }}
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}
      />
    </div>
  )
}
