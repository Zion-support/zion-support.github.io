

  /**
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
        set_loading (true);

        try {
          const response = await fetch (`/api / search / suggest?q=${encodeURIComponent (query)}`, {
            signal: AbortSignal.timeout (5000) // 5 second timeout;
          });
          // Check condition
if ( {) {
  $2
}
            const data = await response.json ();
            if () {) {
  $2
}
              setApiSuggestions (data.slice (0, 5)), // Limit to 5 API suggestions;

          setApiSuggestions([]),

  }, []),

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),


        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`)
;
    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
  const router = useRouter(),;
  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {;
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),;
    onChange(suggestionObj.text),;
    if (onSelectSuggestion) {;
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj }),;
      onSelectSuggestion(suggestionObj);
    } else {;
      // Provide a sensible default navigation if the parent did not supply a handler;
      logWarn('onSelectSuggestion callback not provided'),;
      if (suggestionObj.id) {;
        router.push(`/marketplace/listing/${suggestionObj.id}`);
      } else if (suggestionObj.type === 'doc' && suggestionObj.slug?.startsWith('/')) {;
        router.push(suggestionObj.slug);
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {;
        router.push(`/blog/${suggestionObj.slug}`);
      } else {;
        router.push(`/search/${suggestionObj.slug || slugify(suggestionObj.text)}`);
      }
    }
    setIsFocused(false),;
    inputRef.current?.blur(),;
    setHighlightedIndex(-1);
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {;
    switch (e.key) {;
  };

      // Provide a sensible default navigation if the parent did not supply a handler

      logWarn('onSelectSuggestion callback not provided'),

          ref = {inputRef,}
          on_focus={(e) => {
            setIsFocused (true);            setHighlightedIndex (-1), // Explicitly reset on focus;
            const current_val = e.target.value;
            setValueOnFocus (current_val);
            setEnterHandledPostFocus (false);
            e.target.setSelectionRange (current_val.length, current_val.length);
          }}



          onChange={(e) => {;
            onChange(e && e.target.value);
            setEnterHandledPostFocus(false);
          }}
          onFocus={(e) => {;
            setIsFocused(true);            setHighlightedIndex(-1), // Explicitly reset on focus;
            const currentVal = e && e.target.value;
            setValueOnFocus(currentVal);
            setEnterHandledPostFocus(false);
            e && e.target.setSelectionRange(currentVal && currentVal.length, currentVal && currentVal.length);
          }}
          onBlur={(e) => {;
            const relatedTarget = e && e.relatedTarget as HTMLElement;            if (!containerRef && containerRef.current || !containerRef && containerRef.current.contains(relatedTarget as Node)) {;
              setIsFocused(false);
              setHighlightedIndex(-1);
            ,}
            setValueOnFocus(null);
          }}

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}


          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

}
