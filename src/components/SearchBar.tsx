import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, X } from 'lucide-react';
=======
import { Search, X } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Search, X } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**
   * The current value of the search input
   */
<<<<<<< HEAD
<<<<<<< HEAD
  value: string;
=======
  value: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  value: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */
<<<<<<< HEAD
<<<<<<< HEAD
  onChange: (val: string) => void;
=======
  onChange: (val: string) => void,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  onChange: (val: string) => void,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
<<<<<<< HEAD
<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**
   * The placeholder text for the search input
   */
  placeholder?: string;
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

/**
 * SearchBar component that allows users to search for content.
 */
<<<<<<< HEAD
<<<<<<< HEAD
export function SearchBar({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = 'Search...',
}: SearchBarProps) {
=======
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
<<<<<<< HEAD
  const listId = 'searchbar-autocomplete-list';
=======
  const listId = 'searchbar-autocomplete-list',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      setHighlightedIndex(-1);
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
<<<<<<< HEAD
          setSuggestions(data.slice(0, 5));
=======
      return
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          setSuggestions(data.slice(0, 5))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        } else {
          setSuggestions([]);
        }
        setHighlightedIndex(-1);
      })
      .catch(() => setSuggestions([]));
<<<<<<< HEAD
<<<<<<< HEAD
    return () => controller.abort();
=======
    return () => controller.abort()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return () => controller.abort()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [debounced]);

  useOnClickOutside(containerRef, () => {
    setFocused(false);
<<<<<<< HEAD
<<<<<<< HEAD
    setHighlightedIndex(-1);
=======
    setHighlightedIndex(-1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setHighlightedIndex(-1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);

    const searchQuery = encodeURIComponent(suggestion.text);
    router.push(`/search?q=${searchQuery}`);
    fireEvent('search', { search_term: suggestion.text }),
    setFocused(false);
    setHighlightedIndex(-1);
<<<<<<< HEAD
<<<<<<< HEAD
    inputRef.current?.blur();
=======
    inputRef.current?.blur()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

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
            setFocused(true);
            // Ensure the input receives focus properly
            e.target.setSelectionRange(e.target.value.length, e.target.value.length)
          }}
          onBlur={(e) => {
            // Only blur if not clicking on suggestions
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {
              setFocused(false);
              setHighlightedIndex(-1)
            }
          }}
<<<<<<< HEAD
          className='pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate'
          aria-autocomplete='list'
          aria-activedescendant={
            highlightedIndex !== -1
              ? `suggestion-item-${highlightedIndex}`
              : undefined
          }
          autoComplete='search'
          onKeyDown={e => {
=======
    inputRef.current?.blur()
  };

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
            setFocused(true);
            // Ensure the input receives focus properly
            e.target.setSelectionRange(e.target.value.length, e.target.value.length)
          }}
          onBlur = {(e) => {
            // Only blur if not clicking on suggestions
            const relatedTarget = e.relatedTarget as HTMLElement,
            if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {
              setFocused(false);
              setHighlightedIndex(-1)
            }
          }}
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
<<<<<<< HEAD
<<<<<<< HEAD
                inputRef.current?.blur();
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
=======
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key = == 'Enter' && value.trim()) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value });
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
<<<<<<< HEAD
                inputRef.current?.blur();
              }
              return;
=======
                inputRef.current?.blur()
              }
              return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
                e.preventDefault(), // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value }),
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef.current?.blur()
              }
              return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }

            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
                setHighlightedIndex(prev => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(
                  prev => (prev - 1 + suggestions.length) % suggestions.length
                );
=======
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                break;
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,
=======
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  // but if SearchBar is used standalone, this provides a fallback.
                  e.preventDefault();
                  fireEvent('search', { search_term: value }),
                  router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
<<<<<<< HEAD
<<<<<<< HEAD
                  inputRef.current?.blur();
=======
                  inputRef.current?.blur()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                }
                break;
              case 'Escape':
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
<<<<<<< HEAD
              default:
                break;
=======
                  inputRef.current?.blur()
                }
                break;
              case 'Escape':

                e.preventDefault(),
                setFocused(false),
                setHighlightedIndex(-1),
                inputRef.current?.blur(),

                break;
              default: break
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              default: break
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }
          }}
        />
        {value && (
          <button
<<<<<<< HEAD
<<<<<<< HEAD
            className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
=======
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
<<<<<<< HEAD
            <X className='h-4 w-4' />
=======
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <X className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
  );


}/> onClick={';
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestions suggestions= {;
  suggestions ;
}searchTerm= {;
  value ;
}onSelectSuggestion= {;
  handleSelect ;
}visible= {;
  focused ;
}highlightedIndex= {;
  highlightedIndex ;
}listId= {;
  listId ;
}/> </div>) ;
}'"
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
