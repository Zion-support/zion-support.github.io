
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react",
import { Search, X } from "lucide-react",
import { Input } from "@/components/ui/input",
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions",
import { SearchSuggestion } from "@/types/search",
=======
import React, { useState, useEffect, useRef } from &quot;react&quot;;
import { Search, X } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { AutocompleteSuggestions } from &quot;@/components/search/AutocompleteSuggestions&quot;; 
import { SearchSuggestion } from &quot;@/types/search&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

export function EnhancedSearchInput({ 
  value,
  onChange, 
  placeholder = &quot;Search...&quot;, 
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false),
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = useRef<HTMLInputElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),
=======
import React, {_useState, _useEffect, _useRef} from "react";

interface EnhancedSearchInputProps {_value: string;
  onChange: (_value: string) => void;
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];}

export function EnhancedSearchInput(_{_value, _onChange, _placeholder = "Search...", _searchSuggestions}: EnhancedSearchInputProps) {_const [isFocused, _setIsFocused] = useState(false);
  const [filteredSuggestions, _setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const _inputRef = useRef<HTMLInputElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Filter suggestions based on input value
  useEffect__(() => {
    if (!value) {
      // Show recent searches when input is empty
<<<<<<< HEAD
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent')),
      return
    }
=======
      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    const _filtered = searchSuggestions.filter(suggestion => 
      suggestion.text.toLowerCase().includes(value.toLowerCase())
    ),
    
    // Sort suggestions to prioritize those that start with the search term
<<<<<<< HEAD
    filtered.sort((a, b) => {
      const aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0,
      const bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0,
      return aStartsWith - bStartsWith
    }),
=======
    filtered.sort(_(a, _b) => {_const _aStartsWith = a.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      const _bStartsWith = b.text.toLowerCase().startsWith(value.toLowerCase()) ? -1 : 0;
      return aStartsWith - bStartsWith;});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions
  }, [value, searchSuggestions]),

  // Handle clicks outside the component to close suggestions
  useEffect__(() => {_function handleClickOutside(_event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
<<<<<<< HEAD
        setIsFocused(false)
      }
=======
        setIsFocused(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
<<<<<<< HEAD
    document.addEventListener("mousedown", handleClickOutside),
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),
=======
    document.addEventListener(&quot;mousedown&quot;, handleClickOutside);
    return () => document.removeEventListener(&quot;mousedown&quot;, handleClickOutside);
  }, []);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion),
    setIsFocused(false),
    inputRef.current?.blur()
  },
  
  return (
    <div className=&quot;relative w-full&quot; ref={containerRef}>
      <div className=&quot;relative&quot;>
=======
  const _handleSelectSuggestion = (_suggestion: string) => {_onChange(suggestion);
    setIsFocused(false);
    inputRef.current?.blur();};
  
  return (_<div className="relative w-full" ref={_containerRef}>
      <div className="relative">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Search 
          className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate&quot; 
        />
        <Input
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            onClick={() => onChange('')}
          >
            <X className=&quot;h-4 w-4&quot; />
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
  )
}
