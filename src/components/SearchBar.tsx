import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';
=======
import { Search, X } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { Input } from '@/components/ui/input';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
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
  value: string;
=======
  value: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */
  onChange: (val: string) => void;  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
=======
  onChange: (val: string) => void,
  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**
   * The placeholder text for the search input
   */
  placeholder?: string;
<<<<<<< HEAD
/**
 * SearchBar component that allows users to search for content.
 */
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}

/**
 * SearchBar component that allows users to search for content.
 */
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export function SearchBar({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = 'Search...',
<<<<<<< HEAD
}: SearchBarProps) {  const router = useRouter();
=======
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      setHighlightedIndex(-1);
      return;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5));        } else {
=======
          setSuggestions(data.slice(0, 5))
        } else {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          setSuggestions([]);
        }
        setHighlightedIndex(-1);
      })
      .catch(() => setSuggestions([]));
    return () => controller.abort();  }, [debounced]);

  useOnClickOutside(containerRef, () => {
    setFocused(false);
    setHighlightedIndex(-1);  });
=======
    return () => controller.abort()
  }, [debounced]);

  useOnClickOutside(containerRef, () => {
    setFocused(false);
<<<<<<< HEAD
    setHighlightedIndex(-1);
=======
    setHighlightedIndex(-1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);

    const searchQuery = encodeURIComponent(suggestion.text),
    router.push(`/search?q=${searchQuery}`);
    fireEvent('search', { search_term: suggestion.text });
    setFocused(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  
      aria-expanded={focused && suggestions.length > 0}
      aria-haspopup='listbox'
      aria-controls={listId}
      data-testid='search-bar'
    >
      <div className='relative'>
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate' />
        <Input
          ref={inputRef}
          type='text'
          id='main-search-input'
          name='search'
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={e => {
            setFocused(true);
            // Ensure the input receives focus properly
            e.target.setSelectionRange(
              e.target.value.length,
              e.target.value.length
            );
          }}
          onBlur={e => {
            // Only blur if not clicking on suggestions
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (
              !relatedTarget ||
              !containerRef.current?.contains(relatedTarget)
            ) {
              setFocused(false);
              setHighlightedIndex(-1);
            }
          }}
          className='pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate'
          aria-autocomplete='list'
          aria-activedescendant={
            highlightedIndex !== -1
              ? `suggestion-item-${highlightedIndex}`
              : undefined
          }
          autoComplete='search'
          onKeyDown={e => {            if (!focused || suggestions.length === 0) {
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            if (!focused || suggestions.length === 0) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              if (e.key === 'Escape') {
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value });
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef.current?.blur();
              }
              return;            }
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
            }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(prev => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(
                  prev => (prev - 1 + suggestions.length) % suggestions.length
                );                break;
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,                  // but if SearchBar is used standalone, this provides a fallback.
=======
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                break;
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault();
<<<<<<< HEAD
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,
=======
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  // but if SearchBar is used standalone, this provides a fallback.
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  e.preventDefault();
                  fireEvent('search', { search_term: value });
                  router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
                  inputRef.current?.blur();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                }
                break;
              case 'Escape':
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
              default:
                break;            }
=======
              default: break
            }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />
        {value && (
          <button
            className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            onClick={() => onChange('')}
            aria-label='Clear search'
          >
            <X className='h-4 w-4' />          </button>
=======
            <X className="h-4 w-4" />
          </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
