import React, {_useState, _useEffect, _useRef, _useMemo} from "react";


interface EnhancedSearchInputProps {_value: string;
  onChange: (_value: string) => void;
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */
  onSelectSuggestion?: (_suggestion: SearchSuggestion) => void;
  placeholder?: string;
  /**
   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, _these will be shown when the input is empty.
   */
  searchSuggestions?: SearchSuggestion[];}

export function EnhancedSearchInput(_{_value, _onChange, _onSelectSuggestion, _placeholder = "Search...", _searchSuggestions}: EnhancedSearchInputProps) {_const [isFocused, _setIsFocused] = useState(false);
  const [filteredSuggestions, _setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, _setHighlightedIndex] = useState<number>(-1);
  const _inputRef = useRef<HTMLInputElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);
  const [valueOnFocus, _setValueOnFocus] = useState<string | null>(null);
  const [enterHandledPostFocus, _setEnterHandledPostFocus] = useState(false);
  const { t} = useTranslation();
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const _debounced = useDebounce(value, 200);

  const _debouncedFetchSuggestions = useMemo(_() =>
      debounce(_async (query: string) => {_if (!query.trim()) {
          setApiSuggestions([]);
          return;}

        setLoading(true);
        try {_const _response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {_signal: AbortSignal.timeout(5000) // 5 second timeout});
          
          if (response.ok) {_const _data = await response.json();
            if (Array.isArray(data)) {
              setApiSuggestions(data.slice(0, _5)); // Limit to 5 API suggestions}
          } else {_// Silently fail for search suggestions - don't show error toast
            logWarn('Search suggestions API error:', _{ data: response.status});
            setApiSuggestions([]);
          }
        } catch (error) {_// Silently fail for search suggestions - don't show error toast
          logWarn('Search suggestions fetch error:', _{ data: error});
          setApiSuggestions([]);
        } finally {_setLoading(false);}
      }, 300),
    []
  );

  // Fetch suggestions from API when input value changes
  useEffect__(() => {_if (!debounced) {
      // Show recent suggestions provided via props when no query entered
      setFilteredSuggestions(
        (searchSuggestions || []).filter(s => s.type === 'recent')
      );
      setHighlightedIndex(-1);
      return;}

    const _controller = new AbortController();
    fetch(`/api/search/suggest?q=${_encodeURIComponent(debounced)}`, {_signal: controller.signal})
      .then(res => {_if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json();})
      .then(data => {_if (Array.isArray(data)) {
          setFilteredSuggestions(data.slice(0, _8));} else {_setFilteredSuggestions([]);}
        setHighlightedIndex(-1);
      })
      .catch__(() => setFilteredSuggestions([]));

    return () => controller.abort();
  }, [debounced, searchSuggestions]);

  // Handle clicks outside the component to close suggestions
  useEffect__(() => {_function handleClickOutside(_event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        // setHighlightedIndex(-1); // Already handled in onBlur generally}
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const _router = useRouter();

  const _handleSelectSuggestion = (_suggestionObj: SearchSuggestion) => {_logInfo('EnhancedSearchInput handleSelectSuggestion called:', _{ data: suggestionObj});
    onChange(suggestionObj.text);
    if (onSelectSuggestion) {_logInfo('Calling onSelectSuggestion with:', _{ data: suggestionObj});
      onSelectSuggestion(suggestionObj);
    } else {_// Provide a sensible default navigation if the parent did not supply a handler
      logWarn('onSelectSuggestion callback not provided');
      if (suggestionObj.id) {
        router.push(`/marketplace/listing/${suggestionObj.id}`);
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {_router.push(suggestionObj.slug);} else if (suggestionObj.type === 'blog' && suggestionObj.slug) {_router.push(`/blog/${suggestionObj.slug}`);
      } else {_router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`);
      }
    }
    setIsFocused(false);
    inputRef.current?.blur();
    setHighlightedIndex(-1);
  };

  const _handleKeyDown = (_e: React.KeyboardEvent<HTMLInputElement>) => {_switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault();
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length);}
        break;
      case 'ArrowUp':
        if (isFocused && filteredSuggestions.length > 0) {_e.preventDefault();
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);}
        break;
      case 'Enter':
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {_e.preventDefault(); // Prevent form submission
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);} else if (value.trim()) {_// Manually trigger search navigation to ensure consistent behavior
          e.preventDefault();
          logInfo('EnhancedSearchInput manual submit:', _{ data: value});
          router.push(`/search?q=${_encodeURIComponent(value)}`);
          setIsFocused(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
        } else {_// Prevent empty form submission
          e.preventDefault();}
        break;
      case 'Escape':
        e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        setValueOnFocus(null);
        inputRef.current?.blur();
        break;
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus(false);
        break;
    }
  };
  
  return (_<div
      className="relative w-full"
      ref={_containerRef}
      role="combobox"
      aria-expanded={_isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list" // Added aria-controls
      onClick={_() => inputRef.current?.focus()}
    >
      <div className="relative flex items-center w-full">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />
        <Input
          ref={_inputRef}
          type="text"
          id="enhanced-search-input"
          name="search"
          value={_value}
          onChange={_(_e) => {
            onChange(e.target.value);
            setEnterHandledPostFocus(false);}}
          onFocus={_(_e) => {
            setIsFocused(true);
            setHighlightedIndex(-1); // Explicitly reset on focus
            const _currentVal = e.target.value;
            setValueOnFocus(currentVal);
            setEnterHandledPostFocus(false);
            e.target.setSelectionRange(currentVal.length, _currentVal.length);}}
          onBlur={_(_e) => {
            const _relatedTarget = e.relatedTarget as HTMLElement;
            if (!containerRef.current || !containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused(false);
              setHighlightedIndex(-1);}
            setValueOnFocus(null);
          }}
          onKeyDown={_handleKeyDown}
          aria-label={_t('general.search')}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={_highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {_value && (_<button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <AutocompleteSuggestions
        suggestions={_filteredSuggestions}
        searchTerm={_value}
        onSelectSuggestion={_handleSelectSuggestion}
        visible={_isFocused}
        highlightedIndex={_highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  );
}
