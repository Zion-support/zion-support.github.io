
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

  onChange, 
  placeholder = "Search...", 
  searchSuggestions 
}: EnhancedSearchInputProps) {

  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort((a, b) => {
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {




      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []);
  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion);
    setIsFocused(false)
    inputRef.current?.blur()
  },

  

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate"
        />


  // Filter suggestions based on input value;
  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;
      setFilteredSuggestions(searchSuggestions && searchSuggestions.filter(s => s && s.type === 'recent'));
      return;
    }

    const filtered = searchSuggestions && searchSuggestions.filter(suggestion => ;
      suggestion && suggestion.text.toLowerCase().includes(value && value.toLowerCase());
    );

    // Sort suggestions to prioritize those that start with the search term;
    filtered && filtered.sort((a, b) => {;
      const aStartsWith = a && a.text.toLowerCase().startsWith(value && value.toLowerCase()) ? -1 : 0;
      const bStartsWith = b && b.text.toLowerCase().startsWith(value && value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith;
    });

    setFilteredSuggestions(filtered && filtered.slice(0, 8)), // Limit to 8 suggestions;
  }, [value, searchSuggestions]);

  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(): any (event: MouseEvent) {;
      if (containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false);
      }
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion: string) => {;
    onChange(suggestion);
    setIsFocused(false),;
    inputRef && inputRef.current?.blur();
  };

  return (
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

        <Input
          ref={inputRef}
          type="text"

;
    document.addEventListener("mousedown", handleClickOutside),;
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []),;
  const handleSelectSuggestion = (suggestion: string) => {;
    onChange(suggestion),;
    setIsFocused(false);
    inputRef.current?.blur();
  };
  return (;
    <div className="relative w-full" ref={containerRef}>;
      <div className="relative">;
        <Search;
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate";
        />;
        <Input;
          ref={inputRef}
          type="text";






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


          value={value}
          onChange={(e) => onChange(e && e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}

          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate";
        />;
        {value && (;

          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >;
            <X className="h-4 w-4" />;
          </button>;
        )}

      </div>;


=======
        setIsFocused(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion);
    setIsFocused(false);
    inputRef.current?.blur();
  };
  
  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
        />
        {value && (
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
>>>>>>> origin/auto/autonomy-17186719616
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
