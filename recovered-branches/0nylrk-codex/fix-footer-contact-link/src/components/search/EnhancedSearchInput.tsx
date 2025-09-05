
import React, { useState, useEffect, useRef } from &quot;react&quot;;
import { Search, X } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { AutocompleteSuggestions } from &quot;@/components/search/AutocompleteSuggestions&quot;; 
import { SearchSuggestion } from &quot;@/types/search&quot;;

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

export function EnhancedSearchInput({ 
  value, 
  onChange, 
  placeholder = &quot;Search...&quot;, 
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return;
    }
    
    const filtered = searchSuggestions.filter(suggestion => 
      suggestion.text.toLowerCase().includes(value.toLowerCase())
    );
    
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort((a, b) => {
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith;
    });
    
    setFilteredSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
  }, [value, searchSuggestions]);

  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    
    document.addEventListener(&quot;mousedown&quot;, handleClickOutside);
    return () => document.removeEventListener(&quot;mousedown&quot;, handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion);
    setIsFocused(false);
    inputRef.current?.blur();
  };
  
  return (
    <div className=&quot;relative w-full&quot; ref={containerRef}>
      <div className=&quot;relative&quot;>
        <Search 
          className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate&quot; 
        />
        <Input
          ref={inputRef}
          type=&quot;text&quot;
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className=&quot;pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate&quot;
        />
        {value && (
          <button 
            className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white&quot;
            onClick={() => onChange('')}
          >
            <X className=&quot;h-4 w-4&quot; />
          </button>
        )}
      </div>
      
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
      />
    </div>
  );
}
