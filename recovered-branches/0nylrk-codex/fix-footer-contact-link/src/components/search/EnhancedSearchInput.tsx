
import React, {_useState, _useEffect, _useRef} from "react";

interface EnhancedSearchInputProps {_value: string;
  onChange: (_value: string) => void;
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];}

export function EnhancedSearchInput(_{_value, _onChange, _placeholder = "Search...", _searchSuggestions}: EnhancedSearchInputProps) {_const [isFocused, _setIsFocused] = useState(false);
  const [filteredSuggestions, _setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const _inputRef = useRef<HTMLInputElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on input value
  useEffect__(() => {
    if (!value) {
      // Show recent searches when input is empty
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return;}
    
    const _filtered = searchSuggestions.filter(suggestion => 
      suggestion.text.toLowerCase().includes(value.toLowerCase())
    );
    
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort(_(a, _b) => {_const _aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      const _bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith;});
    
    setFilteredSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
  }, [value, searchSuggestions]);

  // Handle clicks outside the component to close suggestions
  useEffect__(() => {_function handleClickOutside(_event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);}
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const _handleSelectSuggestion = (_suggestion: string) => {_onChange(suggestion);
    setIsFocused(false);
    inputRef.current?.blur();};
  
  return (_<div className="relative w-full" ref={_containerRef}>
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />
        <Input
          ref={_inputRef}
          type="text"
          value={_value}
          onChange={_(e) => onChange(e.target.value)}
          onFocus={_() => setIsFocused(true)}
          placeholder={_placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
        />
        {_value && (_<button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
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
      />
    </div>
  );
}
