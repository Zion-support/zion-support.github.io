:src_backup/components/SearchBar.tsx
import React, { useState, useEffect, useRef } from 'react',;
import { useRouter } from 'next/router',;
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react'
import { useRouter } from 'next/router';'
import { Search, X } from 'lucide-react'; import { Input } from '@/components/ui/input'; import { Search, X } from 'lucide-react''
import { Input } from '@/components/ui/input'

:src/components/SearchBar.tsx

:src_backup/components/SearchBar.tsx

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
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props;
 */
:src_backup/components/SearchBar.tsx
interface SearchBarProps {}
  /**

  value: string,

   * The current value of the search input;
   */;
  value: string;  value: string,


import React, { useState, useEffect, useRef } from 'react';
  value: string;
origin/cursor/automate-test-improve-and-merge-code-2533
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

  /**
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */
:src_backup/components/SearchBar.tsx

  onChange: (val: string) => void;  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */  onChange: (val: string,) => void
  onChange: (val: string) => void
  onChange: (val: string) => void,

  onChange: (val: string) => void;
:src/components/SearchBar.tsx
  onChange: (val:,  string) => void,

  /**
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */
:src_backup/components/SearchBar.tsx

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
/**
 * SearchBar component that allows users to search for content.
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
:src/components/SearchBar.tsx
  /**
   * The placeholder text for the search input;
   */
  placeholder?: string;
}
:src_backup/components/SearchBar.tsx

  value,
  onChange,
  onSelectSuggestion,;'
  placeholder = 'Search...';
:src/components/SearchBar.tsx
export function SearchBar({}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
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
:src_backup/components/SearchBar.tsx
      return
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder;
              default: break
origin/cursor/automate-test-improve-and-merge-code-2533
    }
    const controller = new AbortController()
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {}
      signal: controller.signal;
    })
      .then(res => {'
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
:src_backup/components/SearchBar.tsx
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5)) } else {  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {}
    if (!debounced) {}
      setSuggestions([])
      setHighlightedIndex(-1)

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
:src_backup/components/SearchBar.tsx
      return
      return;
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
:src_backup/components/SearchBar.tsx
          setSuggestions(data.slice(0, 5));
origin/cursor/automate-test-improve-and-merge-code-2533
        } else {
          setSuggestions([])
        }
        setHighlightedIndex(-1)
      })
:src_backup/components/SearchBar.tsx
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
import { useRouter } from 'next/router';
import { Search, X } from 'lucide-react';import { Input } from '@/components/ui/input';import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input',;
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions',;
import { fireEvent } from '@/lib/analytics',;
import { SearchSuggestion } from '@/types/search',;
import { slugify } from '@/lib/slugify',;
import { useDebounce } from '@/hooks/useDebounce',;
import { useOnClickOutside } from '@/hooks/useOnClickOutside',;
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
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;
:src/components/SearchBar.tsx
value: string,;
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
:src/components/SearchBar.tsx

  onChange: (val: string) => void,;
      setHighlightedIndex(-1)  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;
:src/components/SearchBar.tsx
onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
}
:src/components/SearchBar.tsx
;
/**;
 * SearchBar component that allows users to search for content.;
 */;
:src_backup/components/SearchBar.tsx
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
:src_backup/components/SearchBar.tsx
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

          }}
          onBlur={e => {;
            // Only blur if not clicking on suggestions;
            const relatedTarget = e && e.relatedTarget as HTMLElement;
            if (;
              !relatedTarget ||;
              !containerRef && containerRef.current?.contains(relatedTarget);
            ) {;
              setFocused(false);
              setHighlightedIndex(-1);
:src_backup/components/SearchBar.tsx
            }
          }}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"          aria-autocomplete="list"
          aria-autocomplete='list';
          aria-activedescendant={;
            highlightedIndex !== -1;`
              ? `suggestion-item-${highlightedIndex}`;
              : undefined;
          }

:src_backup/components/SearchBar.tsx

          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {

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
:src_backup/components/SearchBar.tsx

              }
              // If Enter is pressed and there's a value, navigate with query parameter;
              }'
              // If Enter is pressed and there's a value, navigate with query parameter;'
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
:src_backup/components/SearchBar.tsx
          onKeyDown={e => {
origin/cursor/automate-test-improve-and-merge-code-2533
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
:src/components/SearchBar.tsx
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e.key === 'Enter' && value.trim()) {;
                e.preventDefault(), // Prevent form submission if SearchBar is in a form;
                fireEvent('search', { search_term: value }),;
                router.push(`/search?q=${encodeURIComponent(value)}`),;
                setFocused(false),;
                inputRef.current?.blur();
inputRef.current?.blur();
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
origin/cursor/automate-test-improve-and-merge-code-2533
                e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', { search_term: value });
                router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
inputRef.current?.blur();
:src/components/SearchBar.tsx
              }
              return;
            }
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
              default:
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
origin/cursor/automate-test-improve-and-merge-code-2533
              }
              return;
            }
                break;
origin/cursor/automate-test-improve-and-merge-code-2533
            }
          }}
        />
        {value && (
<button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}

:src_backup/components/SearchBar.tsx
            aria-label="Clear search"
<button            aria-label="Clear search"

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
            }
          }}
        />;
        {value && (;
:src_backup/components/SearchBar.tsx
          <button
            aria-label="Clear search""
          >
            <X className="h-4 w-4" />"

            aria-label="Clear search"
className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <X className='h-4 w-4' />
          </button>
        )}
:src_backup/components/SearchBar.tsx

;
}
}
}
}
:src_backup/components/SearchBar.tsx

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
:src_backup/components/SearchBar.tsx
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
}'"  );
}
}
:src_backup/components/SearchBar.tsx
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
:src_backup/components/SearchBar.tsx
  const [highlighted_index, setHighlightedIndex] = useState (-1);'
  const list_id = 'searchbar - autocomplete - list';  const debounced = use_debounce (value, 150);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect ((, ) => {}
    // Check condition;
if ( {) {}
  $2;
}
      set_suggestions ([]);
      setHighlightedIndex (-1);
      return;
    }
:src_backup/components/SearchBar.tsx
    const controller = new AbortController ();`
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {}
      signal: controller.signal,
    });
      .then (res => {'
        if (throw new Error ('Failed to fetch suggestions')) {}
  $2;
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
:src_backup/components/SearchBar.tsx
    const controller = new AbortController ();`
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, { signal: controller.signal });
      .then (res => {'
        if (throw new Error ('Failed to fetch suggestions')) {}
  $2;
}
        return res.json ();
      });
      .then (data => {}
        if () {) {}
  $2;
}
          set_suggestions (data.slice (0, 5));
:src_backup/components/SearchBar.tsx
        } else {}
          set_suggestions ([]);
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
:src_backup/components/SearchBar.tsx
  }, [debounced]);
  useOnClickOutside (container_ref, () => {}
    set_focused (false);
    setHighlightedIndex (-1);    setHighlightedIndex (-1);
    setHighlightedIndex (-1);
  });
:src_backup/components/SearchBar.tsx
  const handle_select = (suggestion: SearchSuggestion) =>: any {}
    on_change (suggestion.text);
    if (onSelectSuggestion (suggestion)) {}
  $2;
}
:src_backup/components/SearchBar.tsx
    const search_query = encodeURIComponent (suggestion.text);`
    router.push (`/search?q=${search_query}`);'
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
:src_backup/components/SearchBar.tsx
          ref={input_ref}'
          type='text';'
          id='main - search - input';'
          name='search';
          value={value}
          on_change={e => on_change (e.target.value)}
          on_focus={e => {}
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
:src_backup/components/SearchBar.tsx
            }          }}'
          className='pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion - slate';'
          aria - autocomplete='list';
          aria - activedescendant={}
            highlighted_index !== -1;`
              ? `suggestion - item-${highlighted_index}`;
              : undefined;
          }'
          auto_complete='search';
:src_backup/components/SearchBar.tsx
          onKeyDown={e => {            // Check condition;
if ( {) {}
  $2;
}"
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder: text - zion - slate";"
          aria - autocomplete="list";`
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}"
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
:src_backup/components/SearchBar.tsx
              if () {                e.prevent_default ()) {}
  $2;
} // Prevent form submission if SearchBar is in a form;'
                fire_event ('search', { search_term: value });`
                router.push (`/search?q=${encodeURIComponent (value)}`);
                set_focused (false);
                input_ref.current?.blur ();
              }'
              return }              // If Enter is pressed and there's a value, navigate with query parameter;
              if () {) {}
  $2;
}
:src_backup/components/SearchBar.tsx
                e.prevent_default (), // Prevent form submission if SearchBar is in a form;'
                fire_event ('search', { search_term: value }),`
                router.push (`/search?q=${encodeURIComponent (value)}`);
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
:src_backup/components/SearchBar.tsx
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
:src_backup/components/SearchBar.tsx
          <button;'
            className='absolute right - 3 top - 1/2 -translate - y-1 / 2 text - zion - slate hover:text - white';'
            on_click={() => on_change ('')}'
            aria - label='Clear search'          >;'
            <X className='h - 4 w - 4' />          </button>;"
            <X className="h - 4 w - 4" />;'
            on_click={() => on_change ('')}"
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
:src_backup/components/SearchBar.tsx
}highlighted_index= {}
  highlighted_index;
}list_id= {}
  list_id;
}/> </div>);'"
}'"  );
}
:src_backup/components/SearchBar.tsx
;

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
:src/components/SearchBar.tsx
;'"`
"`;
pr-12325
