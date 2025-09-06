
          
import { logInfo, logWarn } from '@/utils/productionLogger'

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




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.

   */

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {

          setApiSuggestions([]),

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
    } else {
      // Provide a sensible default navigation if the parent did not supply a handler

      logWarn('onSelectSuggestion callback not provided'),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`)
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {
        router.push(suggestionObj.slug)
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {
        router.push(`/blog/${suggestionObj.slug}`)
      } else {

        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          type="text"
          id="enhanced-search-input"
          name="search"
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  )

}
;

=======
;
=======
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
