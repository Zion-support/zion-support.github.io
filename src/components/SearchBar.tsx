<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react'
=======
import { useRouter } from 'next/router';'
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
import { Input } from '@/components/ui/input'
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

<<<<<<< HEAD:src/components/SearchBar.tsx
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx

<<<<<<< HEAD:src_backup/components/SearchBar.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/router';
import { Search, X, Input } from 'lucide-react'; import { Search, X } from 'lucide-react
import { Input } from '@/components/ui/input
import { Search, X } from 'lucide-react
pr-12325
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======
=======
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx

=======
'
import { Search, X } from 'lucide-react'';
import { Input  } from '@/components/ui/input';'
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';'
import { fireEvent  } from '@/lib/analytics';'
import { SearchSuggestion  } from '@/types/search';'
import { slugify  } from '@/lib/slugify';'
import { useDebounce  } from '@/hooks/useDebounce';'
import { useRouter } from 'next/router';'
import { Search, X } from 'lucide-react'';
import { Input } from '@/components/ui/input';'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';'
import { fireEvent } from '@/lib/analytics';'
import { SearchSuggestion } from '@/types/search';'
import { slugify } from '@/lib/slugify';'
import { useDebounce } from '@/hooks/useDebounce';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
/**
 * SearchBar component props;
 */
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
interface SearchBarProps {}
  /**

  value: string,

   * The current value of the search input;
   */;
  value: string;  value: string,

<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import React, { useState, useEffect, useRef } from 'react';
  value: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React, { useState, useEffect, useRef } from 'react';
  value: string;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
interface SearchBarProps {
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props;
 */
interface SearchBarProps {
  // TODO: Implement
}
pr-12325
  /**

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
  /**
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD

<<<<<<< HEAD
  onChange: (val: string) => void;  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */  onChange: (val: string,) => void
  onChange: (val: string) => void
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  onChange: (val: string) => void,


  onChange: (val: string) => void;
<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
  onChange: (val:,  string) => void,


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
  /**
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD

<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
=======
  onSelectSuggestion?: (suggestion:,  SearchSuggestion) => void,

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
/**
 * SearchBar component that allows users to search for content.
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,


  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  /**
   * The placeholder text for the search input;
   */
  placeholder?: string;
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx

<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  value,
  onChange,
  onSelectSuggestion,;'
  placeholder = 'Search...';
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
export function SearchBar({}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
=======

=======

<<<<<<< HEAD:src_backup/components/SearchBar.tsx


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
'
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)';
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect((,) => {}
    if (!debounced) {}
      setSuggestions([])
      setHighlightedIndex(-1)
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
      return
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder;
              default: break
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
    }
    const controller = new AbortController()
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {}
      signal: controller.signal;
    })
      .then(res => {'
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
      .then(data => {
        if (Array.isArray(data)) {
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======
      .then(data => {}
        if (Array.isArray(data)) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          setSuggestions(data.slice(0, 5)) } else {  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {}
    if (!debounced) {}
      setSuggestions([])
<<<<<<< HEAD
<<<<<<< HEAD
      setHighlightedIndex(-1)
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx

/**
 * SearchBar component that allows users to search for content.
 */'
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {};
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);'
  const listId = 'searchbar-autocomplete-list',
  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {}
    if (!debounced) {}
      setSuggestions([]);
      setHighlightedIndex(-1);
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
      return
<<<<<<< HEAD:src/components/SearchBar.tsx
=======
      setHighlightedIndex(-1)

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
      return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
    }
    const controller = new AbortController()`
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {'
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
      .then(data => {}
        if (Array.isArray(data)) {}
          setSuggestions(data.slice(0, 5))
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          setSuggestions(data.slice(0, 5));
origin/cursor/automate-test-improve-and-merge-code-2533
        } else {
=======
        } else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          setSuggestions([])
        }
        setHighlightedIndex(-1)
      })
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
      .catch(() => setSuggestions([]));
return () => controller.abort();
  }, [debounced]);

  useOnClickOutside(containerRef, () => {
    setFocused(false);
setHighlightedIndex(-1);
  });

  const handleSelect = (suggestion: SearchSuggestion) => {
    onChange(suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);

    const searchQuery = encodeURIComponent(suggestion.text);
    router.push(`/search?q=${searchQuery}`);
    fireEvent('search', { search_term: suggestion.text });
    setFocused(false);
    setHighlightedIndex(-1);
inputRef.current?.blur();
  };

  
      aria-expanded={focused && suggestions.length > 0}
      aria-haspopup='listbox'
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
<<<<<<< HEAD
          onKeyDown={e => {            if (!focused |suggestions.length === 0) {
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate"

import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions',;
import { fireEvent } from '@/lib/analytics',;
import { SearchSuggestion } from '@/types/search',;
import { slugify } from '@/lib/slugify',;
import { useDebounce } from '@/hooks/useDebounce',;
import { useOnClickOutside } from '@/hooks/useOnClickOutside',;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
=======
      .catch(() => setSuggestions([]))
    return () => controller.abort() }, [debounced])
  useOnClickOutside(containerRef, () => {}
    setFocused(false)
    setHighlightedIndex(-1) }); return () => controller.abort()
  }, [debounced])
  useOnClickOutside(containerRef, () => {}
    setFocused(false)
    setHighlightedIndex(-1);    setHighlightedIndex(-1)
    setHighlightedIndex(-1)
  })
  const handleSelect = (suggestion: SearchSuggestion) => {}
    onChange(suggestion.text)
    if (onSelectSuggestion) onSelectSuggestion(suggestion)
    const searchQuery = encodeURIComponent(suggestion.text)`
    router.push(`/search?q=${searchQuery}`)'
    fireEvent('search', { search_term: suggestion.text })
    setFocused(false)
    setHighlightedIndex(-1)
    inputRef.current?.blur()
      aria-expanded={focused && suggestions.length > 0}'
      aria-haspopup='listbox''
import { useRouter } from 'next/router';'
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';import { Search, X } from 'lucide-react';'
import { Input } from '@/components/ui/input';'
import { Search, X } from 'lucide-react';'
import { Input } from '@/components/ui/input';'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';'
import { fireEvent } from '@/lib/analytics';'
import { SearchSuggestion } from '@/types/search';'
import { slugify } from '@/lib/slugify';'
import { useDebounce } from '@/hooks/useDebounce';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
  value: string,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  value: string;  value: string,;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  onChange: (val: string) => void;  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */  onChange: (val: string,) => void,;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  onChange: (val: string) => void,;
=======
      setHighlightedIndex(-1)  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
/**;
 * SearchBar component that allows users to search for content.;
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
}
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
/**;
 * SearchBar component that allows users to search for content.;
 */;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {;
  const router = useRouter(),;
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]),;
  const [focused, setFocused] = useState(false),;
  const [highlightedIndex, setHighlightedIndex] = useState(-1),;
  const listId = 'searchbar-autocomplete-list',;
  const debounced = useDebounce(value, 150),;
  const inputRef = useRef<HTMLInputElement>(null),;
  const containerRef = useRef<HTMLDivElement>(null),;
=======
export function SearchBar(): any ({;
  value,;
  onChange,;
  onSelectSuggestion,;'
  placeholder = 'Search...',;'
}: SearchBarProps) {  const router = useRouter();export function SearchBar(): any ({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {;
  const router = useRouter();
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);'
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect((,) => {;
    if (!debounced) {;
      setSuggestions([]);
      setHighlightedIndex(-1);
      return;
    }
    const controller = new AbortController();`
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller && controller.signal,;
    });
      .then(res => {;'
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
      });
      .then(data => {;
        if (Array && Array.isArray(data)) {;
          setSuggestions(data && data.slice(0, 5));        } else {  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
  useEffect(() => {;
    if (!debounced) {;
      setSuggestions([]),;
      setHighlightedIndex(-1),;
      return;
    }
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
    const controller = new AbortController(),;
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal });
      .then(res => {;
        if (!res.ok) throw new Error('Failed to fetch suggestions'),;
        return res.json();
=======
    const controller = new AbortController();`
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller && controller.signal });
      .then(res => {;'
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
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

<<<<<<< HEAD
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
=======

  });

  const handleSelect = (suggestion: SearchSuggestion) => {;
    onChange(suggestion && suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);
    const searchQuery = encodeURIComponent(suggestion && suggestion.text);`
    router && router.push(`/search?q=${searchQuery}`);'
    fireEvent('search', { search_term: suggestion && suggestion.text });
    setFocused(false);
    setHighlightedIndex(-1);


      aria-controls={listId}'
      data-testid='search-bar'    >;'
      <div className='relative'>;'
        <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate' />;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Input
          ref={inputRef}
          type="text"
          id="main-search-input"
          name="search"
=======
        <Input;
          ref={inputRef}'
          type='text''
          id='main-search-input''
          name='search'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          value={value}
<<<<<<< HEAD
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
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault(),
                setFocused(false),
                setHighlightedIndex(-1),
=======


            if (true) {}


            ) {}
              setFocused(false)
              setHighlightedIndex(-1)
          onChange={e => onChange(e && e.target.value)}
          onFocus={e => {;
            setFocused(true);            // Ensure the input receives focus properly;
            e && e.target.setSelectionRange(;
              e && e.target.value && value.length,;
              e && e.target.value && value.length;
            );
<<<<<<< HEAD:src/components/SearchBar.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
          }}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          onBlur={e => {;
            // Only blur if not clicking on suggestions;
            const relatedTarget = e && e.relatedTarget as HTMLElement;
            if (;
              !relatedTarget ||;
              !containerRef && containerRef.current?.contains(relatedTarget);
            ) {;
              setFocused(false);
              setHighlightedIndex(-1);
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
            }
          }}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"          aria-autocomplete="list"
=======

=======
            }          }}
          className='pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate';
=======
            }          }}'
          className='pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          aria-autocomplete='list';
          aria-activedescendant={;
            highlightedIndex !== -1;`
              ? `suggestion-item-${highlightedIndex}`;
              : undefined;
          }
=======
/**
 * SearchBar component that allows users to search for content.
 */
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx


<<<<<<< HEAD:src_backup/components/SearchBar.tsx

<<<<<<< HEAD:src_backup/components/SearchBar.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
          aria-autocomplete="list"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {

<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
          aria-autocomplete="list"`
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}"
          autoComplete="search"
          onKeyDown={(e) => {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          autoComplete='search';
          onKeyDown={e => {            if (!focused || suggestions && suggestions.length === 0) {;"
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder: text-zion-slate";"
          aria-autocomplete="list";`
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}"
          autoComplete="search";
          onKeyDown={(e) => {;
            if (!focused || suggestions && suggestions.length === 0) {;'
              if (e && e.key === 'Escape') {;
                e && e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef && inputRef.current?.blur();
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
              }
              // If Enter is pressed and there's a value, navigate with query parameter;
=======
              }'
              // If Enter is pressed and there's a value, navigate with query parameter;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
              if (e && e.key === 'Enter' && value && value.trim()) {                e && e.preventDefault(); // Prevent form submission if SearchBar is in a form;
'
                fireEvent('search', { search_term: value });`
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();
              }'
              return;            }              // If Enter is pressed and there's a value, navigate with query parameter;'
              if (e && e.key === 'Enter' && value && value.trim()) {;
                e && e.preventDefault(), // Prevent form submission if SearchBar is in a form;'
                fireEvent('search', { search_term: value }),;`
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();

              }
              return;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          onKeyDown={e => {
origin/cursor/automate-test-improve-and-merge-code-2533
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
=======
            if (!focused || suggestions.length === 0) {'
              if (e.key === 'Escape') {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e.key === 'Enter' && value.trim()) {;
                e.preventDefault(), // Prevent form submission if SearchBar is in a form;
                fireEvent('search', { search_term: value }),;
                router.push(`/search?q=${encodeURIComponent(value)}`),;
                setFocused(false),;
                inputRef.current?.blur();
=======
<<<<<<< HEAD
                inputRef.current?.blur()
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key = == 'Enter' && value.trim()) {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
inputRef.current?.blur();
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
origin/cursor/automate-test-improve-and-merge-code-2533
                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value });
=======
              }'
              // If Enter is pressed and there's a value, navigate with query parameter'
              if (e.key = == 'Enter' && value.trim()) {}
                e.preventDefault(); // Prevent form submission if SearchBar is in a form'
                fireEvent('search', { search_term: value });`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
inputRef.current?.blur();
<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              }
              return;
            }
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault();
setHighlightedIndex(prev => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex(
                  prev => (prev - 1 + suggestions.length) % suggestions.length
                );
                break;
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault();
handleSelect(suggestions[highlightedIndex]);
                } else if (value.trim()) {
                  // This case should ideally be handled by the form's onSubmit,
                  // but if SearchBar is used standalone, this provides a fallback.
                  e.preventDefault();
                  fireEvent('search', { search_term: value });
                  router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
inputRef.current?.blur();
                }
                break;
              case 'Escape':
                e.preventDefault();
=======


            switch (e && e.key) {;'
              case 'ArrowDown':;
                e && e.preventDefault();
                setHighlightedIndex(prev => (prev + 1) % suggestions && suggestions.length);
                break;'
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex(;
                  prev => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length;'
                );                break;              case 'Enter':;
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;'
                  // This case should ideally be handled by the form's onSubmit,                  // but if SearchBar is used standalone, this provides a fallback.;
                setHighlightedIndex((prev) => (prev + 1) % suggestions && suggestions.length);
                break;'
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length);
                setHighlightedIndex((prev) => (prev + 1) % suggestions && suggestions.length);
                break;'
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex((prev) => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length);
                break;'
              case 'Enter':;
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;'
                  // This case should ideally be handled by the form's onSubmit,                  handleSelect(suggestions[highlightedIndex]);
                } else if (value && value.trim()) {;'
                  // This case should ideally be handled by the form's onSubmit;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e && e.preventDefault();'
                  fireEvent('search', { search_term: value });`
                  router && router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
                  inputRef && inputRef.current?.blur();
                break;'
              case 'Escape':;
                e && e.preventDefault();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
              default:
<<<<<<< HEAD
                break }              default: break
                e.preventDefault(),
                setFocused(false),
                setHighlightedIndex(-1),
                inputRef.current?.blur()
              }
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
                  fireEvent('search', { search_term: value });
                  router.push(`/search?q=${encodeURIComponent(value)}`);
                  setFocused(false);
                  inputRef.current?.blur()
                }
                break;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
                break;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
              }
              return;
            }
                break;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
            }
          }}
        />
        {value && (
<<<<<<< HEAD
          <button
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx


<<<<<<< HEAD:src_backup/components/SearchBar.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            aria-label="Clear search"
=======
<<<<<<< HEAD
          <button            aria-label="Clear search"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


=======
            switch (e && e.key) {;
              case 'ArrowDown':;
                e && e.preventDefault();
                setHighlightedIndex(prev => (prev + 1) % suggestions && suggestions.length);
                break;
              case 'ArrowUp':;
                e && e.preventDefault();
                setHighlightedIndex(;
                  prev => (prev - 1 + suggestions && suggestions.length) % suggestions && suggestions.length;
                );                break;              case 'Enter':;,
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);,
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
              case 'Enter':;,
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {;
                  e && e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);,
                } else if (value && value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit,                  handleSelect(suggestions[highlightedIndex]);,
                } else if (value && value.trim()) {;
                  // This case should ideally be handled by the form's onSubmit;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e && e.preventDefault();
                  fireEvent('search', { search_term: value });
                  router && router.push(`/search?q=${encodeURIComponent(value)}`);`
                  setFocused(false);
                  inputRef && inputRef.current?.blur();
                break;
              case 'Escape':;
                e && e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef && inputRef.current?.blur();
                break;
              default:;,
                break;            }              default: break;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
            }
          }}
        />;
        {value && (;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          <button
            aria-label="Clear search""
          >
            <X className="h-4 w-4" />"


            aria-label="Clear search"
className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
          >
            <X className='h-4 w-4' />
=======
          <button;
"
            aria-label="Clear search"
          >"
            <X className="h-4 w-4" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
          </button>
        )}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
;
}
}
}
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      />;
    </div>;
  );
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx


          <button;
            aria-label="Clear search""
          >
</button>"
            <X className="h-4 w-4" />"

          </button>
pr-12325
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
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
'
}/> onClick={';'"
  () => onChange ('') ";"
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestionssuggestions= {}
  suggestions;
}searchTerm= {}
  value;
}onSelectSuggestion= {}
  handleSelect;
}visible= {}
  focused;
}highlightedIndex= {}
  highlightedIndex;
}listId= {}
  listId;
}/> </div>) ;'"
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
}'"  );
}
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
'
import { use_router } from 'next / router';'
import { Search, X } from 'lucide-react'; import { Input } from '@/components / ui / input'; import { Search, X } from 'lucide-react';'
import { Input } from '@/components / ui / input';'
import { Search, X } from 'lucide-react';'
import { AutocompleteSuggestions } from '@/components / search / AutocompleteSuggestions';'
import { fire_event } from '@/lib / analytics';'
import { SearchSuggestion } from '@/types / search';'
import { slugify } from '@/lib / slugify';'
import { use_debounce } from '@/hooks / use_debounce';'
=======
import { use_router } from 'next / router';
import { Search, X } from 'lucide-react'; import { Input } from '@/components / ui / input'; import { Search, X } from 'lucide-react';
import { Input } from '@/components / ui / input';
import { Search, X } from 'lucide-react';
import { AutocompleteSuggestions } from '@/components / search / AutocompleteSuggestions';
import { fire_event } from '@/lib / analytics';
import { SearchSuggestion } from '@/types / search';
import { slugify } from '@/lib / slugify';
import { use_debounce } from '@/hooks / use_debounce';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
import { useOnClickOutside } from '@/hooks / useOnClickOutside';
/**;
* SearchBar component props;
*/;
interface SearchBarProps {}
  /**;
  * The current value of the search input;
  */;
  value: string;  value: string,
  /**;
  * Function to call when the search input changes;
  * @param {string} val - The new value of the search input;
  */;
  on_change: (val:,  string) => void;  /**;
  * Function to call when a suggestion is selected;
  * @param {SearchSuggestion} suggestion - The selected suggestion;
  */  on_change: (val: string, ) => void,
  on_change: (val:,  string) => void,
  /**;
  * Function to call when a suggestion is selected;
  * @param {SearchSuggestion} suggestion - The selected suggestion;
  */;
  onSelectSuggestion?: (suggestion:,  SearchSuggestion) => void;
  /**;
  * The placeholder text for the search input;
  */;
  placeholder?: string;
/**;
* SearchBar component that allows users to search for content.;
*/  onSelectSuggestion?: (suggestion:,  SearchSuggestion) => void,
  /**;
  * The placeholder text for the search input;
  */;
  placeholder?: string;
}
/**;
* SearchBar component that allows users to search for content.;
*/;
export /**;
 * SearchBar - Function description;
 */
function SearchBar() { return null; }
function SearchBar() {}
  const router = use_router ();
  const [suggestions, set_suggestions] = useState < SearchSuggestion[]>([]);,
  const [focused, set_focused] = useState (false);,
  const [highlighted_index, setHighlightedIndex] = useState (-1);

      />;

    </div>;"
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;"

}</div> <AutocompleteSuggestionssuggestions= {
  suggestions;
}searchTerm= {
  value;
}onSelectSuggestion= {
  handleSelect;
}visible= {
  focused;
}highlightedIndex= {
  highlightedIndex;
}listId= {
  listId;
}/> </div>) ;

  const [suggestions, set_suggestions] = useState < SearchSuggestion[]>([]);
  const [focused, set_focused] = useState (false);
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
  const [highlighted_index, setHighlightedIndex] = useState (-1);'
  const list_id = 'searchbar - autocomplete - list';  const debounced = use_debounce (value, 150);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect ((, ) => {}
    // Check condition;
if ( {) {}
  $2;
}
=======
  const [highlighted_index, setHighlightedIndex] = useState (-1);"
pr-12325
  const list_id = 'searchbar - autocomplete - list';  const debounced = use_debounce (value, 150);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
},
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
      set_suggestions ([]);
      setHighlightedIndex (-1);
      return;
    }
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
    const controller = new AbortController ();`
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {}
      signal: controller.signal,
    });
      .then (res => {'
        if (throw new Error ('Failed to fetch suggestions')) {}
  $2;
=======
    // Check condition;
if ( {) {
  $2;
      set_suggestions ([]);
      setHighlightedIndex (-1);
      return;
pr-12325
    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {`
      signal: controller.signal,
    });
      .then (res => {
        if (throw new Error ('Failed to fetch suggestions')) {'
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
}
        return res.json ();
      });
      .then (data => {}
        if () {) {}
  $2;
}
          set_suggestions (data.slice (0, 5)) } else {  const debounced = use_debounce (value, 150);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      set_suggestions ([]);,
      setHighlightedIndex (-1);
    }
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
    const controller = new AbortController ();`
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, { signal: controller.signal });
      .then (res => {'
        if (throw new Error ('Failed to fetch suggestions')) {}
  $2;
=======
    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, { signal: controller.signal });`
      .then (res => {
        if (throw new Error ('Failed to fetch suggestions')) {'
  $2
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
}
        return res.json ();
      });
      .then (data => {}
        if () {) {}
  $2;
}
          set_suggestions (data.slice (0, 5));
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
        } else {}
          set_suggestions ([]);
=======
        } else {
          set_suggestions ([]);,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
        }
        setHighlightedIndex (-1);
      });
      .catch (() => set_suggestions ([]));,
    return () => controller.abort () }, [debounced]);,
      .then (res => {)
        if (throw new Error ('Failed to fetch suggestions')) {
        return res.json ();
      .then (data => {)
        if () {) {
          set_suggestions (data.slice (0, 5)) } else {  const debounced = use_debounce (value, 150);
  useEffect (() => {
    // Check condition;
    const controller = new AbortController ();`;
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, { signal: controller.signal });
          set_suggestions (data.slice (0, 5));
        } else {
  // TODO: Implement
pr-12325
      .catch (() => set_suggestions ([]));
    return () => controller.abort () }, [debounced]);
  useOnClickOutside (container_ref, () => {}
    set_focused (false);
    setHighlightedIndex (-1) }); return () => controller.abort ();
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
  }, [debounced]);
  useOnClickOutside (container_ref, () => {}
=======
  }, [debounced]);,
  useOnClickOutside (container_ref, () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
    set_focused (false);
    setHighlightedIndex (-1);    setHighlightedIndex (-1);
    setHighlightedIndex (-1);
  });
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
  const handle_select = (suggestion: SearchSuggestion) =>: any {}
=======
  const handle_select = (suggestion:,  SearchSuggestion) =>: any {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
    on_change (suggestion.text);
    if (onSelectSuggestion (suggestion)) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
    const search_query = encodeURIComponent (suggestion.text);`
    router.push (`/search?q=${search_query}`);'
=======
    const search_query = encodeURIComponent (suggestion.text);
    router.push (`/search?q=${search_query}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
    fire_event ('search', { search_term: suggestion.text });
    set_focused (false);
    setHighlightedIndex (-1);
    setHighlightedIndex (-1);    setHighlightedIndex (-1);
  const handle_select = (suggestion: SearchSuggestion) =>: any {
  // TODO: Implement
    on_change (suggestion.text);
    if (onSelectSuggestion (suggestion)) {
    const search_query = encodeURIComponent (suggestion.text);`;
    router.push (`/search?q=${search_query}`);
    fire_event ('search', { search_term: suggestion.text });
pr-12325
    input_ref.current?.blur ();
      aria - expanded={focused && suggestions.length > 0}'
      aria - haspopup='listbox';
      aria - controls={list_id}'
      data - testid='search - bar'    >;'
      <div className='relative'>;'
        <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - zion - slate' />;
        <Input ;
        <Input;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          ref={input_ref}'
          type='text';'
          id='main - search - input';'
          name='search';
          value={value}
          on_change={e => on_change (e.target.value)}
          on_focus={e => {}
=======
        <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - zion - slate' />;

pr-12325
          ref={input_ref}
          type='text';
          id='main - search - input';
          name='search';
          value={value}
          on_change={e = /> on_change (e.target.value)}
          on_focus={e => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
            set_focused (true);            // Ensure the input receives focus properly;
            e.target.setSelectionRange (
              e.target.value.length,
              e.target.value.length);
          }}
          on_blur={e => {}
            // Only blur if not clicking on suggestions;
            const related_target = e.related_target as HTMLElement;
            // Check condition;
if (
            ) {) {}
  $2;
}
              set_focused (false);
              setHighlightedIndex (-1);
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
            }          }}'
          className='pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate';'
          aria - autocomplete='list';
          aria - activedescendant={}
            highlighted_index !== -1;`
              ? `suggestion - item-${highlighted_index}`;
=======
            }          }}
          className='pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate';',
          aria - autocomplete='list';
          aria - activedescendant={
            highlighted_index !== -1;
              ? `suggestion - item-${highlighted_index}`;`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
              : undefined;
          }'
          auto_complete='search';
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          onKeyDown={e => {            // Check condition;
if ( {) {}
  $2;
}"
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder: text - zion - slate";"
          aria - autocomplete="list";`
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}"
=======
          onKeyDown={e => {            // Check condition
if ( {) {
  $2
}
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder: text - zion - slate";",
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
          auto_complete="search";
          onKeyDown={(e) => {}
            // Check condition;
if ( {) {}
  $2;
}
              // Check condition;
if ( {) {}
  $2;
}
                e.prevent_default ();
                set_focused (false);
                setHighlightedIndex (-1);
                input_ref.current?.blur ();
              }'
              // If Enter is pressed and there's a value, navigate with query parameter;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
              if () {                e.prevent_default ()) {}
  $2;
} // Prevent form submission if SearchBar is in a form;'
                fire_event ('search', { search_term: value });`
                router.push (`/search?q=${encodeURIComponent (value)}`);
=======
              if () {                e.prevent_default ()) {
  $2
} // Prevent form submission if SearchBar is in a form;
                fire_event ('search', { search_term: value });
                router.push (`/search?q=${encodeURIComponent (value)}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
                set_focused (false);
                input_ref.current?.blur ();
              }'
              return }              // If Enter is pressed and there's a value, navigate with query parameter;
              if () {) {}
  $2;
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
                e.prevent_default (), // Prevent form submission if SearchBar is in a form;'
                fire_event ('search', { search_term: value }),`
                router.push (`/search?q=${encodeURIComponent (value)}`);
=======
                e.prevent_default (), // Prevent form submission if SearchBar is in a form;
                fire_event ('search', { search_term: value }),'
                router.push (`/search?q=${encodeURIComponent (value)}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
                set_focused (false);
                input_ref.current?.blur ();
              }
              return;
            }
            switch (e.key) {'
              case 'ArrowDown':;
                e.prevent_default ();
                setHighlightedIndex (prev => (prev + 1) % suggestions.length);
                break;'
              case 'ArrowUp':;
                e.prevent_default ();
                setHighlightedIndex ('
                  prev => (prev - 1 + suggestions.length) % suggestions.length);                break;              case 'Enter':;
                // Check condition;
if ( {) {}
  $2;
}
                  e.prevent_default ();,
                  handle_select (suggestions[highlighted_index]);
                } else if () {) {}
  $2;
}'
                  // This case should ideally be handled by the form's on_submit,                  // but if SearchBar is used standalone, this provides a fallback.;
                setHighlightedIndex ((prev) => (prev + 1) % suggestions.length);
                break;'
              case 'ArrowUp':;
                e.prevent_default ();
                setHighlightedIndex ((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                setHighlightedIndex ((prev) => (prev + 1) % suggestions.length);
                break;'
              case 'ArrowUp':;
                e.prevent_default ();
                setHighlightedIndex ((prev) => (prev - 1 + suggestions.length) % suggestions.length);
                break;'
              case 'Enter':;
                // Check condition;
if ( {) {}
  $2;
}
                  e.prevent_default ();
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
                  handle_select (suggestions[highlighted_index]);
                } else if () {) {}
  $2;
}'
                  // This case should ideally be handled by the form's on_submit,                  handle_select (suggestions[highlighted_index]);
                } else if () {) {}
  $2;
}'
                  // This case should ideally be handled by the form's on_submit;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e.prevent_default ();'
                  fire_event ('search', { search_term: value });`
                  router.push (`/search?q=${encodeURIComponent (value)}`);
=======
                  handle_select (suggestions[highlighted_index]);,
                } else if () {) {
  $2
}
                  // This case should ideally be handled by the form's on_submit,                  handle_select (suggestions[highlighted_index]);,
                } else if () {) {
  $2
}
                  // This case should ideally be handled by the form's on_submit;
                  // but if SearchBar is used standalone, this provides a fallback.;
                  e.prevent_default ();
                  fire_event ('search', { search_term: value });
                  router.push (`/search?q=${encodeURIComponent (value)}`);`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
                  set_focused (false);
                  input_ref.current?.blur ();
                break;'
              case 'Escape':;
                e.prevent_default ();
                set_focused (false);
                setHighlightedIndex (-1);
                input_ref.current?.blur ();
                break;
              default:;,
                break }              default: break;
            }
          }}
        />;
        {value && (
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
          <button;'
            className='absolute right - 3 top - 1/2 -translate - y-1 / 2 text - zion - slate hover:text - white';'
            on_click={() => on_change ('')}'
            aria - label='Clear search'          >;'
            <X className='h - 4 w - 4' />          </button>;"
            <X className="h - 4 w - 4" />;'
            on_click={() => on_change ('')}"
=======
          <button;
            className='absolute right - 3 top - 1/2 -translate - y-1 / 2 text - zion - slate hover:text - white';',
            on_click={() => on_change ('')}'
            aria - label='Clear search'          >;
            <X className='h - 4 w - 4' />          </button>;
            <X className="h - 4 w - 4" />;
            on_click={() => on_change ('')}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
            aria - label="Clear search";
          >;"
            <X className="h - 4 w - 4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
          on_change={e => on_change (e.target.value)}

            className='absolute right - 3 top - 1/2 -translate - y-1 / 2 text - zion - slate hover:text - white';
            on_click={() => on_change ()}
            <X className='h - 4 w - 4' />          </button>;

            <X className="h - 4 w - 4" />;"
"

          </button>)}
pr-12325
        suggestions = {suggestions, }
        search_term = {value, }
        onSelectSuggestion = {handle_select, }
        visible = {focused, }
        highlighted_index = {highlighted_index, }
        list_id = {list_id, }
      />;
    </div>);'
}/> on_click={';'"
  () => on_change ('') ";"
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);
}</div> <AutocompleteSuggestions suggestions= {}
  suggestions;
}search_term= {}
  value;
}onSelectSuggestion= {}
  handle_select;
}visible= {}
  focused;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
}highlighted_index= {}
=======

    </div>);"
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);"

}</div> <AutocompleteSuggestions suggestions= {
}search_term= {
  handle_select;
pr-12325
}highlighted_index= {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
  highlighted_index;
}list_id= {}
  list_id;
}/> </div>);'"
}'"  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
;
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
<<<<<<< HEAD:src/components/SearchBar.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
}}}}}}}}}}}}}}}
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
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault(),
                setFocused(false),
                setHighlightedIndex(-1),
                inputRef.current?.blur()
              }
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
            }
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
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
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
<<<<<<< HEAD:src/components/SearchBar.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:src_backup/components/SearchBar.tsx
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/SearchBar.tsx
=======
;'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/components/SearchBar.tsx
=======
"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/SearchBar.tsx
