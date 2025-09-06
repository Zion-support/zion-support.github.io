<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useRouter  } from 'next/router';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React, { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { useRouter  } from 'next/router';
=======
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Search, X } from 'lucide-react'
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**
<<<<<<< HEAD
<<<<<<< HEAD

  /**
=======
   * The current value of the search input
   */

  value: string,

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   /**
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
   * The current value of the search input
   */

  value: string;  value: string

=======
   * The current value of the search input;
   */;
  value: string;  value: string,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  /**
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */

<<<<<<< HEAD
  onChange: (val: string) => void,
=======
  onChange: (val: string) => void;  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */  onChange: (val: string,) => void
  onChange: (val: string) => void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */

<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
/**
 * SearchBar component that allows users to search for content.
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}
<<<<<<< HEAD

export function SearchBar({
<<<<<<< HEAD

=======
=======
/**
 * SearchBar component that allows users to search for content.
 */

export function SearchBar({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  value
  onChange
  onSelectSuggestion
  placeholder = 'Search...'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
=======
=======
  value,
  onChange,
  onSelectSuggestion,;
  placeholder = 'Search...';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect((,) => {
    if (!debounced) {
      setSuggestions([])
      setHighlightedIndex(-1)
<<<<<<< HEAD
      return
=======
      return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
            if (
              !relatedTarget |
              !containerRef.current?.contains(relatedTarget)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            if (
              !relatedTarget |
              !containerRef.current?.contains(relatedTarget)
=======
            if (true) {}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
=======
=======
import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions',;
import { fireEvent } from '@/lib/analytics',;
import { SearchSuggestion } from '@/types/search',;
import { slugify } from '@/lib/slugify',;
import { useDebounce } from '@/hooks/useDebounce',;
import { useOnClickOutside } from '@/hooks/useOnClickOutside',;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;
<<<<<<< HEAD
  value: string;  value: string,;
=======
  value: string,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
<<<<<<< HEAD
  onChange: (val: string) => void;  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */  onChange: (val: string,) => void,;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onChange: (val: string) => void,;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;
<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
/**;
 * SearchBar component that allows users to search for content.;
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
}
<<<<<<< HEAD
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
=======
;
/**;
 * SearchBar component that allows users to search for content.;
 */;
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {;
  const router = useRouter(),;
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]),;
  const [focused, setFocused] = useState(false),;
  const [highlightedIndex, setHighlightedIndex] = useState(-1),;
  const listId = 'searchbar-autocomplete-list',;
  const debounced = useDebounce(value, 150),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
  useEffect(() => {;
    if (!debounced) {;
      setSuggestions([]),;
      setHighlightedIndex(-1),;
      return;
    }
    const controller = new AbortController(),;
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal });
      .then(res => {;
        if (!res.ok) throw new Error('Failed to fetch suggestions'),;
        return res.json();
      });
      .then(data => {;
        if (Array.isArray(data)) {;
          setSuggestions(data.slice(0, 5));
        } else {;
          setSuggestions([]);
        }
        setHighlightedIndex(-1)
      })
      .catch(() => setSuggestions([])),
    return () => controller.abort()
  }, [debounced]),

  useOnClickOutside(containerRef, () => {
    setFocused(false),
    setHighlightedIndex(-1)
  }),

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text),
    if (onSelectSuggestion) onSelectSuggestion(suggestion),

    const searchQuery = encodeURIComponent(suggestion.text),
    router.push(`/search?q=${searchQuery}`),
    fireEvent('search', { search_term: suggestion.text }),
    setFocused(false),
    setHighlightedIndex(-1),
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => {;
            setFocused(true),;
            // Ensure the input receives focus properly;
            e.target.setSelectionRange(e.target.value.length, e.target.value.length);
          }}
          onBlur={(e) => {;
            // Only blur if not clicking on suggestions;
            const relatedTarget = e.relatedTarget as HTMLElement,;
            if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {;
              setFocused(false),;
              setHighlightedIndex(-1);
            }
          }}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           aria-autocomplete="list"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          aria-autocomplete="list"
>>>>>>>           aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
<<<<<<< HEAD
            if (!focused |suggestions.length === 0) {
              if (e.key === 'Escape') {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                e.preventDefault()
                setFocused(false)
                setHighlightedIndex(-1)
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value })
                router.push(`/search?q=${encodeURIComponent(value)}`)
                setFocused(false)
                inputRef.current?.blur()
              }
              return }              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
                e.preventDefault(), // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value })
                router.push(`/search?q=${encodeURIComponent(value)}`)
                setFocused(false)
                inputRef.current?.blur()
              }
              return;
            }
            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault()
                setHighlightedIndex(prev => (prev + 1) % suggestions.length)
                break
              case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex(
                  prev => (prev - 1 + suggestions.length) % suggestions.length
                );                break;              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault()
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,                  // but if SearchBar is used standalone, this provides a fallback.
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length)
                break
              case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length)
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length)
                break
              case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length)
                break
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault()
                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,                  handleSelect(suggestions[highlightedIndex])
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit
                  // but if SearchBar is used standalone, this provides a fallback.
                  e.preventDefault()
                  fireEvent('search', { search_term: value })
                  router.push(`/search?q=${encodeURIComponent(value)}`)
                  setFocused(false)
                  inputRef.current?.blur()
                break
              case 'Escape':
                e.preventDefault()
                setFocused(false)
                setHighlightedIndex(-1)
                inputRef.current?.blur()
                break
              default:
                break }              default: break
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD

=======
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                e.preventDefault(),
                setFocused(false),
                setHighlightedIndex(-1),
                inputRef.current?.blur()
              }
<<<<<<< HEAD
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key = == 'Enter' && value.trim()) {
                e.preventDefault(); // Prevent form submission if SearchBar is in a form
>>>>>>>                 fireEvent('search', { search_term: value });
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);

                inputRef.current?.blur()

              }
              return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
              default: break;
<<<<<<< HEAD

=======
>>>>>>>             }

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            }
>>>>>>>           }}
        />;
        {value && (;
          <button
<<<<<<< HEAD

            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

=======
=======
              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e.key === 'Enter' && value.trim()) {;
                e.preventDefault(), // Prevent form submission if SearchBar is in a form;
                fireEvent('search', { search_term: value }),;
                router.push(`/search?q=${encodeURIComponent(value)}`),;
                setFocused(false),;
                inputRef.current?.blur();
              }
              return;
            }
;
            switch (e.key) {;
              case 'ArrowDown':;
                e.preventDefault(),;
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length),;
                break,;
              case 'ArrowUp':;
                e.preventDefault(),;
                setHighlightedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length),;
                break,;
              case 'Enter':;
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e.preventDefault(),;
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit,;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e.preventDefault(),;
                  fireEvent('search', { search_term: value }),;
                  router.push(`/search?q=${encodeURIComponent(value)}`),;
                  setFocused(false),;
                  inputRef.current?.blur();
                }
                break,;
              case 'Escape':;
                e.preventDefault(),;
                setFocused(false),;
                setHighlightedIndex(-1),;
                inputRef.current?.blur();
                break;
              default: break;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            }
          }}
        />
        {value && (
          <button
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'          >
            <X className='h-4 w-4' />          </button>
            <X className="h-4 w-4" />
            onClick={() => onChange('')}
<<<<<<< HEAD
>>>>>>>             aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>         )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
<<<<<<< HEAD
      </div>
      <AutocompleteSuggestions
        suggestions = {suggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelect,}
        visible = {focused,}
        highlightedIndex = {highlightedIndex,}
        listId = {listId,}
      />
    </div>
  )
}/> onClick={'
  () => onChange ('') "
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>)
}</div> <AutocompleteSuggestions suggestions= {
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
}/> </div>)
}'"  )
}
<<<<<<< HEAD
=======
;
}
}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}
<<<<<<< HEAD

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
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      />;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
