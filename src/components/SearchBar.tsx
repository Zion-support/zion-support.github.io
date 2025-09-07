import React, { useState, useEffect, useRef } from 'react';
import { useRouter  } from 'next/router';
import { Search, X } from 'lucide-react'
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**
   * The current value of the search input
   */
  value: string;
  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */
  onChange: (val: string) => void;
  onChange: (val: string) => void;  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */  onChange: (val: string,) => void
  onChange: (val: string) => void
  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void
  /**
   * The placeholder text for the search input
   */
  placeholder?: string
/**
 * SearchBar component that allows users to search for content.
 */  onSelectSuggestion?: (suggestion: SearchSuggestion) => void

  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}
/**
 * SearchBar component that allows users to search for content.
 */

export function SearchBar({
  value
  onChange
  onSelectSuggestion
  placeholder = 'Search...'
}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect((,) => {
    if (!debounced) {
      setSuggestions([])
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
          setSuggestions(data.slice(0, 5)) } else {  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!debounced) {
      setSuggestions([])
      setHighlightedIndex(-1)
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
            if (
              !relatedTarget |
              !containerRef.current?.contains(relatedTarget)
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
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {
            if (!focused |suggestions.length === 0) {
              if (e.key === 'Escape') {
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
              return
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
            className='absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white'
            onClick={() => onChange('')}
            aria-label='Clear search'          >
            <X className='h-4 w-4' />          </button>
            <X className="h-4 w-4" />
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
      </div>;

      <AutocompleteSuggestions;
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}

        listId={listId}

      />;
</AutocompleteSuggestions>
    </div>;"
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;"
</X>
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
</AutocompleteSuggestionssuggestions>
  const [suggestions, set_suggestions] = useState < SearchSuggestion[]>([]);
  const [focused, set_focused] = useState (false);
  const [highlighted_index, setHighlightedIndex] = useState (-1);"
  const list_id = 'searchbar - autocomplete - list';  const debounced = use_debounce (value, 150);'
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect ((, ) => {
    // Check condition;
if ( {) {
  $2;

}
      set_suggestions ([])setHighlightedIndex (-1)return;
    }

    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, {signal: controller.signal});
      .then (res => {)'
        if (throw new Error ('Failed to fetch suggestions')) {'
  $2;
}
        return res.json ();
      });
      .then (data => {)
        if () {) {
  $2;
}
          set_suggestions (data.slice (0, 5)) } else {  const debounced = use_debounce (value, 150);
  const input_ref = useRef < HTMLInputElement>(null);
  const container_ref = useRef < HTMLDivElement>(null);
  useEffect (() => {
    // Check condition;
if ( {) {
  $2;
}
      set_suggestions ([]);
      setHighlightedIndex (-1);
    }
    const controller = new AbortController ();
    fetch (`/api / search / suggest?q=${encodeURIComponent (debounced)}`, { signal: controller.signal });
      .then (res => {)'
        if (throw new Error ('Failed to fetch suggestions')) {'
  $2;
}
        return res.json ();
      });
      .then (data => {)
        if () {) {
  $2;
}
          set_suggestions (data.slice (0, 5));
        } else {
  // TODO: Implement
}
          set_suggestions ([]);
        }
        setHighlightedIndex (-1);
      });
      .catch (() => set_suggestions ([]));
    return () => controller.abort () }, [debounced]);
  useOnClickOutside (container_ref, () => {
    set_focused (false);
    setHighlightedIndex (-1) }); return () => controller.abort ();
  }, [debounced]);
  useOnClickOutside (container_ref, () => {
    set_focused (false);
    setHighlightedIndex (-1);    setHighlightedIndex (-1);
    setHighlightedIndex (-1);
  });
  const handle_select = (suggestion: SearchSuggestion) =>: any {
  // TODO: Implement
}
    on_change (suggestion.text);
    if (onSelectSuggestion (suggestion)) {
  $2;
}
    const search_query = encodeURIComponent (suggestion.text);
    router.push (`/search?q=${search_query}`);'
    fire_event ('search', { search_term: suggestion.text });'
    set_focused (false);
    setHighlightedIndex (-1);
    input_ref.current?.blur ();
      aria - expanded={focused && suggestions.length > 0}'
      aria - haspopup='listbox';'
      aria - controls={list_id}'
      data - testid='search - bar'    >;''
      <div className='relative'>;'
</div>'
        <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - zion - slate' />;'
</Search>

        <Input;
          ref={input_ref}'
          type='text';''
          id='main - search - input';''
          name='search';'
          value={value}

          on_change={e => on_change (e.target.value)}
</Input>
          <button;'
            className='absolute right - 3 top - 1/2 -translate - y-1 / 2 text - zion - slate hover:text - white';''
            on_click={() => on_change ('')}'
</button>'
            <X className='h - 4 w - 4' />          </button>;'
</X>'
            <X className="h - 4 w - 4" />;"
</X>"
            <X className="h - 4 w - 4" />;"
</X>

          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions = {suggestions }
        search_term = {value }
        onSelectSuggestion = {handle_select }
        visible = {focused }
        highlighted_index = {highlighted_index }
        list_id = {list_id }
      />
    </div>
  );
}/> on_click={';}"
  () => on_change ('') ";}"
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>)}</div> <AutocompleteSuggestions suggestions= {suggestions;}
}search_term= {value;}
}onSelectSuggestion= {handle_select;}
}visible= {focused;}
}highlighted_index= {highlighted_index;}
}list_id= {list_id;}"
}/> </div>)}'"  )}</div>;
      <AutocompleteSuggestions;
        suggestions = {suggestions}
        searchTerm = {value}
        onSelectSuggestion = {handleSelect}
        visible = {focused}
        highlightedIndex = {highlightedIndex}
        listId = {listId}
      />;

</AutocompleteSuggestions>
    </div>);"
}aria - label="Clear search" > <X className="h - 4 w - 4" /> </button>);"
</X>
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