import React, { useState, useEffect, useRef } from 'react',
import { useRouter } from 'next/router',
import { Search, X } from 'lucide-react',
import { Input } from '@/components/ui/input',
import { useDebounce } from '@/hooks/useDebounce',
interface SearchBarProps {
  value: string,
  onChange: (value: string) => void;
  placeholder?: string, }

export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  const router = useRouter();
  const [focused, setFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (debouncedValue) {
      // Simulate API call for suggestions
      const mockSuggestions = [
        'AI Development',
        'Cloud Services',
        'Cybersecurity',
        'Data Analytics',
        'Machine Learning'
      ].filter(item => 
        item.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setSuggestions(mockSuggestions); else {
      setSuggestions([]);
  }, [debouncedValue]);

  const handleSelect = (suggestion: string) => {
    onChange(suggestion);
    setFocused(false);
    setHighlightedIndex(-1);;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      ); else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1); else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        handleSelect(suggestions[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setFocused(false);
      setHighlightedIndex(-1);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zion-slate h-4 w-4" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 pr-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple text-white placeholder-zion-slate"
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
      </div>
      
      {focused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue border border-zion-blue-light rounded-md shadow-lg z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              className={`w-full text-left px-4 py-2 hover:bg-zion-purple/20 ${
                index === highlightedIndex ? 'bg-zion-purple/20' : ''
              }`}
              onClick={() => handleSelect(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
