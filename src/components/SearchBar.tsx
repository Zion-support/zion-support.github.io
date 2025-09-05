import React, {_useState, _useEffect, _useRef} from 'react';

/**
 * SearchBar component props
 */
interface SearchBarProps {_/**
   * The current value of the search input
   */
  value: string;
  /**
   * Function to call when the search input changes
   * @param {string} val - The new value of the search input
   */
  onChange: (_val: string) => void;
  /**
   * Function to call when a suggestion is selected
   * @param {_SearchSuggestion} suggestion - The selected suggestion
   */
  onSelectSuggestion?: (_suggestion: SearchSuggestion) => void;
  /**
   * The placeholder text for the search input
   */
  placeholder?: string;
}

/**
 * SearchBar component that allows users to search for content.
 */
export function SearchBar(_{_value, _onChange, _onSelectSuggestion, _placeholder = 'Search...'}: SearchBarProps) {_const _router = useRouter();
  const [suggestions, _setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, _setFocused] = useState(false);
  const [highlightedIndex, _setHighlightedIndex] = useState(-1);
  const _listId = 'searchbar-autocomplete-list';
  const _debounced = useDebounce(value, _150);
  const _inputRef = useRef<HTMLInputElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {
    if (!debounced) {
      setSuggestions([]);
      setHighlightedIndex(-1);
      return;}
    const _controller = new AbortController();
    fetch(`/api/search/suggest?q=${_encodeURIComponent(debounced)}`, {_signal: controller.signal})
      .then(res => {_if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json();})
      .then(data => {_if (Array.isArray(data)) {
          setSuggestions(data.slice(0, _5));} else {_setSuggestions([]);}
        setHighlightedIndex(-1);
      })
      .catch__(() => setSuggestions([]));
    return () => controller.abort();
  }, [debounced]);

  useOnClickOutside(_containerRef, _() => {_setFocused(false);
    setHighlightedIndex(-1);});

  const _handleSelect = (_suggestion: SearchSuggestion) => {_onChange(suggestion.text);
    if (onSelectSuggestion) onSelectSuggestion(suggestion);

    const _searchQuery = encodeURIComponent(suggestion.text);
    router.push(`/search?q=${searchQuery}`);
    fireEvent('search', {_search_term: suggestion.text});
    setFocused(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur();
  };

  return (_<div
      className="relative w-full"
      ref={_containerRef}
      role="combobox"
      aria-expanded={_focused && suggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls={_listId}
      data-testid="search-bar"
    >
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          ref={_inputRef}
          type="text"
          id="main-search-input"
          name="search"
          value={_value}
          onChange={_(e) => onChange(e.target.value)}
          onFocus={_(_e) => {
            setFocused(true);
            // Ensure the input receives focus properly
            e.target.setSelectionRange(e.target.value.length, _e.target.value.length);}}
          onBlur={_(_e) => {
            // Only blur if not clicking on suggestions
            const _relatedTarget = e.relatedTarget as HTMLElement;
            if (!relatedTarget || !containerRef.current?.contains(relatedTarget)) {
              setFocused(false);
              setHighlightedIndex(-1);}
          }}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
          aria-autocomplete="list"
          aria-activedescendant={_highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={_(_e) => {
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();}
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {_e.preventDefault(); // Prevent form submission if SearchBar is in a form
                fireEvent('search', _{ search_term: value});
                router.push(`/search?q=${_encodeURIComponent(value)}`);
                setFocused(false);
                inputRef.current?.blur();
              }
              return;
            }

            switch (e.key) {_case 'ArrowDown':
                e.preventDefault();
                setHighlightedIndex(_(prev) => (prev + 1) % suggestions.length);
                break;
              case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(_(prev) => (prev - 1 + suggestions.length) % suggestions.length);
                break;
              case 'Enter':
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {
                  e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);} else if (value.trim()) {_// This case should ideally be handled by the form's onSubmit, _// but if SearchBar is used standalone, _this provides a fallback.
                  e.preventDefault();
                  fireEvent('search', _{ search_term: value});
                  router.push(`/search?q=${_encodeURIComponent(value)}`);
                  setFocused(false);
                  inputRef.current?.blur();
                }
                break;
              case 'Escape':
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
              default:
                break;
            }
          }}
        />
        {_value && (_<button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions={_suggestions}
        searchTerm={_value}
        onSelectSuggestion={_handleSelect}
        visible={_focused}
        highlightedIndex={_highlightedIndex}
        listId={_listId}
      />
    </div>
  );
}
