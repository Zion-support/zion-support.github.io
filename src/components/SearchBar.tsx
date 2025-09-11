import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'


import { Search, X } from 'lucide-react'
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';
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

  value: string,


   * The current value of the search input;
   */;
  value: string;  value: string,

  value,
  onChange,
  onSelectSuggestion,;
  placeholder = 'Search...';


}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect((,) => {
    if (!debounced) {
      setSuggestions([])
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
          setSuggestions(data.slice(0, 5)) } else {  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!debounced) {
      setSuggestions([])
      setHighlightedIndex(-1)

/**
 * SearchBar component that allows users to search for content.
 */
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {

  const router = useRouter();
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listId = 'searchbar-autocomplete-list',
  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      setHighlightedIndex(-1);
      return
    }
    const controller = new AbortController()
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions')
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
      .catch(() => setSuggestions([]))
    return () => controller.abort() }, [debounced])
  useOnClickOutside(containerRef, () => {
    setFocused(false)
    setHighlightedIndex(-1) }); return () => controller.abort()
  }, [debounced])
  useOnClickOutside(containerRef, () => {
    setFocused(false)
    setHighlightedIndex(-1);    setHighlightedIndex(-1)
    setHighlightedIndex(-1)
  })
  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text)
    if (onSelectSuggestion) onSelectSuggestion(suggestion)
    const searchQuery = encodeURIComponent(suggestion.text)
    router.push(`/search?q=${searchQuery}`)
    fireEvent('search', { search_term: suggestion.text })
    setFocused(false)
    setHighlightedIndex(-1)
    inputRef.current?.blur()
      aria-expanded={focused && suggestions.length > 0}
      aria-haspopup='listbox'
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
      aria-controls={listId}
      data-testid='search-bar'    >
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
            setFocused(true);            // Ensure the input receives focus properly
            e.target.setSelectionRange(
              e.target.value.length
              e.target.value.length
            )
          }}
          onBlur={e => {
            // Only blur if not clicking on suggestions
            const relatedTarget = e.relatedTarget as HTMLElement
            if (true) {}
            ) {
              setFocused(false)
              setHighlightedIndex(-1)
            }          }}
          className='pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate'
          aria-autocomplete='list'
          aria-activedescendant={
            highlightedIndex !== -1
              ? `suggestion-item-${highlightedIndex}`
              : undefined
          }
          autoComplete='search'
          onKeyDown={e => {            if (!focused |suggestions.length === 0) {
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate"
=======
import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;
  value: string;  value: string,;
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
  onChange: (val: string) => void;  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */  onChange: (val: string,) => void,;
  onChange: (val: string) => void,;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
/**;
 * SearchBar component that allows users to search for content.;
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
}
/**;
 * SearchBar component that allows users to search for content.;
 */;
export function SearchBar(): any ({;
  value,;
  onChange,;
  onSelectSuggestion,;
  placeholder = 'Search...',;
}: SearchBarProps) {  const router = useRouter();export function SearchBar(): any ({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {;
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect((,) => {;
    if (!debounced) {;
      setSuggestions([]);
      setHighlightedIndex(-1);
      return;
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller && controller.signal,;
    });
      .then(res => {;
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
      });
      .then(data => {;
        if (Array && Array.isArray(data)) {;
          setSuggestions(data && data.slice(0, 5));        } else {  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {;
    if (!debounced) {;
      setSuggestions([]);
      setHighlightedIndex(-1);
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller && controller.signal });
      .then(res => {;
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
      });
      .then(data => {;
        if (Array && Array.isArray(data)) {;
          setSuggestions(data && data.slice(0, 5));
        } else {;
          setSuggestions([]);
        }
        setHighlightedIndex(-1);
      });
      .catch(() => setSuggestions([]));


  }, [debounced]);

  useOnClickOutside(containerRef, () => {;
    setFocused(false);


  });

  const handleSelect = (suggestion: SearchSuggestion) => {;
    onChange(suggestion && suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);
    const searchQuery = encodeURIComponent(suggestion && suggestion.text);
    router && router.push(`/search?q=${searchQuery}`);
    fireEvent('search', { search_term: suggestion && suggestion.text });
    setFocused(false);
    setHighlightedIndex(-1);


      aria-controls={listId}
      data-testid='search-bar'    >;
      <div className='relative'>;
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate' />;
        <Input
          ref={inputRef}
          type='text'
          id='main-search-input'
          name='search'
          value={value}


          autoComplete='search';
          onKeyDown={e => {            if (!focused || suggestions && suggestions.length === 0) {;
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate";
          aria-autocomplete="list";
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search";
          onKeyDown={(e) => {;
            if (!focused || suggestions && suggestions.length === 0) {;
              if (e && e.key === 'Escape') {;
                e && e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef && inputRef.current?.blur();
              }
              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e && e.key === 'Enter' && value && value.trim()) {                e && e.preventDefault(); // Prevent form submission if SearchBar is in a form;

                fireEvent('search', { search_term: value });
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();
              }
              return;            }              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e && e.key === 'Enter' && value && value.trim()) {;
                e && e.preventDefault(), // Prevent form submission if SearchBar is in a form;
                fireEvent('search', { search_term: value }),;
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();

              }
              return;
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key = == 'Enter' && value.trim()) {
                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value });
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);

                inputRef.current?.blur()

              }
              return
            }


            switch (e && e.key) {;
              case 'ArrowDown':;
                e && e.preventDefault();
                setHighlightedIndex(prev => (prev + 1) % suggestions && suggestions.length);
                break;
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex(;
                  prev => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length;
                );                break;              case 'Enter':;
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit,                  // but if SearchBar is used standalone, this provides a fallback.;
                setHighlightedIndex((prev) => (prev + 1) % suggestions && suggestions.length);
                break;
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length);
                setHighlightedIndex((prev) => (prev + 1) % suggestions && suggestions.length);
                break;
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length);
                break;
              case 'Enter':;
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit,                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e && e.preventDefault();
                  fireEvent('search', { search_term: value });
                  router && router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
                  inputRef && inputRef.current?.blur();
                break;
              case 'Escape':;
                e && e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef && inputRef.current?.blur();
                break;
              default:;
                break;            }              default: break;



            }
          }}
        />;
        {value && (;
          <button


            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


;
}
}
}
}

      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}

      />;
    </div>;
  );

}/> onClick={';
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestionssuggestions= {
  suggestions 
}searchTerm= {
  value 
}onSelectSuggestion= {
  handleSelect 
}visible= {
  focused 
}highlightedIndex= {
  highlightedIndex 
}listId= {
  listId 
}/> </div>) ;
}'"  );
}
