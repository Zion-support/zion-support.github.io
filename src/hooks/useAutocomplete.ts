import { useState, useCallback } from 'react';
import { SearchSuggestion } from '@/types/search';

interface UseAutocompleteOptions {
  suggestions: SearchSuggestion[];
  onSelect?: (suggestion: SearchSuggestion) => void;
  debounceMs?: number;
}

export const useAutocomplete = ({
  suggestions,
  onSelect,
  debounceMs = 300
}: UseAutocompleteOptions) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = useCallback((value: string) => {
    setQuery(value);
    setIsOpen(value.length > 0);
    setSelectedIndex(-1);
  }, []);

  const handleSelect = useCallback((suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    setIsOpen(false);
    setSelectedIndex(-1);
    onSelect?.(suggestion);
  }, [onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
          handleSelect(filteredSuggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  }, [isOpen, selectedIndex, filteredSuggestions, handleSelect]);

  return {
    query,
    isOpen,
    selectedIndex,
    filteredSuggestions,
    handleInputChange,
    handleSelect,
    handleKeyDown,
    setIsOpen
  };
};