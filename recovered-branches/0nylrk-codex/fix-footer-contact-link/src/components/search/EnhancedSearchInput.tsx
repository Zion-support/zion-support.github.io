
import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions";
import { SearchSuggestion } from "@/types/search";
interface EnhancedSearchInputProps {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  searchSuggestions: SearchSuggestion[]
}

export function EnhancedSearchInput({ 
  value,
  onChange, 
  placeholder = $2;
  searchSuggestions 
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState($2);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]),
  const inputRef = $2;
  const containerRef = $2;
  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty
      setFilteredSuggestions(searchSuggestions.filter(s = $2;
      return
    }
    
    const filtered = $2;
    // Sort suggestions to prioritize those that start with the search term
    filtered.sort((a, b) => {
      const aStartsWith = $2;
      const bStartsWith = $2;
      return aStartsWith - bStartsWith
    }),
    
    setFilteredSuggestions(filtered.slice(0, 8)), // Limit to 8 suggestions
  }, [value, searchSuggestions]),

  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    
    document.addEventListener($2);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []),

  const handleSelectSuggestion = (suggestion: string) => {
    onChange($2);
    setIsFocused($2);
    inputRef.current?.blur()
  },
  
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
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
      />
    </div>
  )
}
