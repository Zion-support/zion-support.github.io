import { Search, X } from 'lucide-react';
<<<<<<< HEAD
=======
import { Input } from '@/components/ui/Input';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

interface SearchSuggestion {
  id: string;
  text: string;
<<<<<<< HEAD
  type: 'talent' | 'service' | 'equipment' | 'category';
=======
<<<<<<< HEAD
  type: string;
=======
  type: 'talent' | 'service' | 'equipment' | 'category';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
}

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
<<<<<<< HEAD
  onSelectSuggestion: (suggestion: string) => void;
=======
<<<<<<< HEAD
  onSelectSuggestion: (text: string) => void;
=======
  onSelectSuggestion: (suggestion: string) => void;
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  searchSuggestions: SearchSuggestion[];
  placeholder?: string;
  className?: string;
}

   */

  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,
  placeholder?: string,
  /**
   * Optional list of fallback suggestions (e.g. recent searches).
   * If provided, these will be shown when the input is empty.
   */
  searchSuggestions?: SearchSuggestion[]
}
export function EnhancedSearchInput({

  value
  onChange
  onSelectSuggestion
  placeholder = "Search..."
  searchSuggestions
}: EnhancedSearchInputProps) {

  searchSuggestions;
}: EnhancedSearchInputProps) {;

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo
import { Search, X  } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { SearchSuggestion } from '@/types/search'
export function EnhancedSearchInput({

  value,
  onChange,
  onSelectSuggestion,
  searchSuggestions,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  placeholder = "Search services, solutions...",
  className = ""
}: EnhancedSearchInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

  useEffect(() => {
    if (value.trim()) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(value.toLowerCase())
<<<<<<< HEAD
=======
<<<<<<< HEAD
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      ).slice(0, 5);
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  }, [value, searchSuggestions]);

  useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

  const router = useRouter(),

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestionObj }),
    onChange(suggestionObj.text),

    if (onSelectSuggestion) {
      logInfo('Calling onSelectSuggestion with:', { data: suggestionObj })
      onSelectSuggestion(suggestionObj)
        setHighlightedIndex (-1);
      });
      .catch (() => setFilteredSuggestions ([]));
    return () => controller.abort ();
  }, [debounced, search_suggestions]);
  // Handle clicks outside the component to close suggestions;
  useEffect ((, ) => {
    /**
 * handleClickOutside - Function description
 */
function handleClickOutside() {
      if () {) {
  $2
}
        setIsFocused (false),
        // setHighlightedIndex (-1), // Already handled in on_blur generally;
      }
    }
    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
  }, []);
  const router = use_router ();
  const handleSelectSuggestion = (suggestion_obj: SearchSuggestion, ) =>: any {
    log_info ('EnhancedSearchInput handleSelectSuggestion called:', { data: suggestion_obj }),
    on_change (suggestion_obj.text);
    // Check condition
if ( {) {
  $2
}
      log_info ('Calling onSelectSuggestion with:', { data: suggestion_obj }),
      onSelectSuggestion (suggestion_obj);
    } else {

        router.push (`/search/${suggestion_obj.slug || slugify (suggestion_obj.text)}`);

      }
    }
    setIsFocused(false)
    inputRef.current?.blur()
    setHighlightedIndex(-1)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>,) => {
    switch (e.key) {

      case 'ArrowDown':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default (),
          setHighlightedIndex (prev => (prev + 1) % filtered_suggestions.length);

        }
  const debouncedFilterSuggestions = useMemo (// Changed from useCallback to useMemo;
    () => debounce ((current_value: string, suggestions: SearchSuggestion[]) => {
      // Check condition
if ( {) {
  $2
}

        setFilteredSuggestions (suggestions.filter (string => s.type === 'recent'));
        return;
}
      const filtered = suggestions.filter (suggestion =>;
        suggestion.text.toLowerCase ().includes (current_value.toLowerCase ()));
      filtered.sort ((a, b) => {
        const aStartsWith = a.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        const bStartsWith = b.text.toLowerCase ().starts_with (current_value.toLowerCase ()) ? -1 : 0;
        return aStartsWith - bStartsWith;
});
      setFilteredSuggestions (filtered.slice (0, 8));
}, 300),
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable);
  useEffect (() => {
  // TODO: Add dependencies if needed;

  return () => {
    // Cleanup function;
}
}, []); []);
    debouncedFilterSuggestions (value, search_suggestions);
    setHighlightedIndex (-1);    return () => {
      debouncedFilterSuggestions.cancel()
}
}, [value, searchSuggestions, debouncedFilterSuggestions])
  useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
}
}, []); [])
    function handleClickOutside(event: MouseEvent) {
      if(containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
}
    }

import { logInfo, logWarn } from '@/utils/productionLogger';

import { logInfo, logWarn } from '@/utils/productionLogger';
interface EnhancedSearchInputProps {;
  value: string,;
  onChange: (value: string,) => void,;
  /**;
   * Optional callback when a suggestion is selected. This allows parent;
   * components to perform actions such as navigation.;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void,;
  placeholder?: string;  /**;
   * Optional list of fallback suggestions (e && e.g. recent searches).;
   * If provided, these will be shown when the input is empty.;
   */;
  searchSuggestions?: SearchSuggestion[];
}

export function EnhancedSearchInput(): any ({;
  value;
  onChange;
  onSelectSuggestion;
  placeholder = "Search...";
  searchSuggestions;
}: EnhancedSearchInputProps) {;
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"; // Added useMemo;
import { Search, X  } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
export function EnhancedSearchInput(): any ({;
  value,;
  onChange,;
  onSelectSuggestion,;
  placeholder = "Search...",;
  searchSuggestions;
}: EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null);
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false);
  const { t } = useTranslation();
  const [apiSuggestions, setApiSuggestions] = useState<SearchSuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(value, 200);

  const debouncedFetchSuggestions = useMemo(;
    (,) =>;
      debounce(async (query: string,) => {;
        if (!query && query.trim()) {;
          setApiSuggestions([]),;
          return;
        }

        setLoading(true);
        try {;
          const response = await fetch(`/api/search/suggest?q=${encodeURIComponent(query)}`, {;
            signal: AbortSignal && AbortSignal.timeout(5000) // 5 second timeout;
          });

          if (response && response.ok) {;
            const data = await response && response.json();
            if (Array && Array.isArray(data)) {;
              setApiSuggestions(data && data.slice(0, 5)), // Limit to 5 API suggestions;
            }
          } else {;
            // Silently fail for search suggestions - don't show error toast;
            logWarn('Search suggestions API error:', { data: response && response.status }),;
            setApiSuggestions([]);
          }
        } catch (error) {;
          // Silently fail for search suggestions - don't show error toast;
          logWarn('Search suggestions fetch error:', { data: error }),;
          setApiSuggestions([]);
        } finally {;
          setLoading(false);
        }
      }, 300);
    [];
  );

  // Fetch suggestions from API when input value changes;
  useEffect((,) => {;
    if (!debounced) {;
      // Show recent suggestions provided via props when no query entered;
      setFilteredSuggestions(;
        (searchSuggestions || []).filter(s => s && s.type === 'recent');
      );
      setHighlightedIndex(-1);
      return;
    }

    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller && controller.signal;
    });
      .then(res => {;
        if (!res && res.ok) throw new Error('Failed to fetch suggestions');
        return res && res.json();
      });
      .then(data => {;
        if (Array && Array.isArray(data)) {;
          setFilteredSuggestions(data && data.slice(0, 8));
        } else {;
          setFilteredSuggestions([]);
        }
        setHighlightedIndex(-1);
      });
      .catch(() => setFilteredSuggestions([]));
    return () => controller && controller.abort();
  }, [debounced, searchSuggestions]);

  // Handle clicks outside the component to close suggestions;
  useEffect((,) => {;
    function handleClickOutside(): any (event: MouseEvent) {;
      if (containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false),;
        // setHighlightedIndex(-1), // Already handled in onBlur generally;
      }
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onSelectSuggestion(suggestion.text);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    onChange('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`} ref={suggestionsRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
        <input
          ref={inputRef}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'talent':
        return '👤';
      case 'service':
        return '🔧';
      case 'equipment':
        return '💻';
      case 'category':
        return '📁';
      default:
        return '🔍';
    }
    setIsFocused(false);
    inputRef && inputRef.current?.blur();
    setHighlightedIndex(-1)
};

  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>,) => {;
    switch (e && e.key) {;
      case 'ArrowDown':;
        if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {;
          e && e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions && filteredSuggestions.length);
        }
  const debouncedFilterSuggestions = useMemo(// Changed from useCallback to useMemo;
    () => debounce((currentValue: string, suggestions: SearchSuggestion[]) => {;
      if(!currentValue) {;
        setFilteredSuggestions(suggestions && suggestions.filter(s => s && s.type === 'recent'));
        return;
}

      const filtered = suggestions && suggestions.filter(suggestion =>;
        suggestion && suggestion.text.toLowerCase().includes(currentValue && currentValue.toLowerCase());
      );
      filtered && filtered.sort((a, b) => {;
        const aStartsWith = a && a.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        const bStartsWith = b && b.text.toLowerCase().startsWith(currentValue && currentValue.toLowerCase()) ? -1 : 0;
        return aStartsWith-bStartsWith;
});
      setFilteredSuggestions(filtered && filtered.slice(0, 8));
}, 300),;
    [setFilteredSuggestions] // setFilteredSuggestions from useState is stable;
  );
  useEffect(() => {;
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function
};
}, []); []);
    debouncedFilterSuggestions(value, searchSuggestions);
    setHighlightedIndex(-1);
    return () => {;
      debouncedFilterSuggestions && debouncedFilterSuggestions.cancel()
};
}, [value, searchSuggestions, debouncedFilterSuggestions]);
  useEffect(() => {;
  // TODO: Add dependencies if needed;

  return () => {;
    // Cleanup function
};
}, []); []);
    function handleClickOutside(): any (event: MouseEvent) {;
      if(containerRef && containerRef.current && !containerRef && containerRef.current.contains(event && event.target as Node)) {;
        setIsFocused(false);
}
    }

    document && document.addEventListener("mousedown", handleClickOutside);
    return () => document && document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const handleSelectSuggestion = (suggestionText: string) => { // Renamed suggestion to suggestionText;
    onChange(suggestionText);
    if(onSelectSuggestion) {;
      onSelectSuggestion(suggestionText);
}
    setIsFocused(false);
    inputRef && inputRef.current?.blur();
    setHighlightedIndex(-1)
};
  const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
    if(!isFocused || filteredSuggestions && filteredSuggestions.length === 0) {;
      if(e && e.key === 'Escape') { ;
        e && e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        inputRef && inputRef.current?.blur();

}
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!isFocused |filteredSuggestions.length === 0) {
      if(e.key === 'Escape') {
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
}

    document.addEventListener ("mousedown", handleClickOutside);
    return () => document.removeEventListener ("mousedown", handleClickOutside);
}, []);
  const handleSelectSuggestion = (suggestion_text: string) =>: any { // Renamed suggestion to suggestion_text;
    on_change (suggestion_text);
    // Check condition
if ( {) {
  $2
}
      onSelectSuggestion (suggestion_text);
}
    setIsFocused (false);
    input_ref.current?.blur ();
    setHighlightedIndex (-1);
}
  const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2

}
        e.prevent_default ();
        setIsFocused (false);
        setHighlightedIndex (-1);
        input_ref.current?.blur ();
}
      return;
}
    switch (e.key) {
      case 'ArrowDown':;
        e.prevent_default ();
        setHighlightedIndex (prev => (prev + 1) % filtered_suggestions.length);
        break;
      case 'ArrowUp':;
        e.prevent_default ();
        setHighlightedIndex (prev => (prev - 1 + filtered_suggestions.length) % filtered_suggestions.length);
        break;
      case 'Enter':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          handleSelectSuggestion (filtered_suggestions[highlighted_index].text);
}
        break;
      case 'ArrowUp':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default ();
          setHighlightedIndex (prev => (prev - 1 + filtered_suggestions.length) % filtered_suggestions.length);
        }

        break;
      case 'Enter':;
        // Check condition
if ( {) {
  $2
}
          e.prevent_default (), // Prevent form submission;
          handleSelectSuggestion (filtered_suggestions[highlighted_index]);
        } else if () {) {
  $2
}
          // Manually trigger search navigation to ensure consistent behavior;
          e.prevent_default ();
          log_info ('EnhancedSearchInput manual submit:', { data: value }),
          router.push (`/search?q=${encodeURIComponent (value)}`);
          setIsFocused (false);
          setHighlightedIndex (-1);
          input_ref.current?.blur ();

        } else {
          // Prevent empty form submission
          e.preventDefault()
        }
        break
      case 'Escape':
        e.preventDefault()
        setIsFocused(false)
        setHighlightedIndex(-1)
        setValueOnFocus(null)
        inputRef.current?.blur()
        break
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus(false)
        break
    }
  }

    switch(e && e.key) {;
      case 'ArrowDown':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault(),;
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length);
        }
        break,;
      case 'ArrowUp':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault(),;
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
        }
        break,;
      case 'Enter':;
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e.preventDefault(), // Prevent form submission;
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {;
          // Manually trigger search navigation to ensure consistent behavior;
          e.preventDefault(),;
          logInfo('EnhancedSearchInput manual submit:', { data: value }),;
          router.push(`/search?q=${encodeURIComponent(value)}`),;
          setIsFocused(false),;
          setHighlightedIndex(-1),;
          inputRef.current?.blur();
        } else {;
          // Prevent empty form submission;
          e.preventDefault();
        }
        break,;
      case 'Escape':;
        e.preventDefault(),;
        setIsFocused(false),;
        setHighlightedIndex(-1),;
        setValueOnFocus(null),;
        inputRef.current?.blur(),;
        break,;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus(false),;
        break;
    }
  }

    switch(e && e.key) {;
      case 'ArrowDown':;
        e && e.preventDefault();
        setHighlightedIndex(prev => (prev + 1) % filteredSuggestions && filteredSuggestions.length);
        break;
      case 'ArrowUp':;
        e && e.preventDefault();
        setHighlightedIndex(prev => (prev - 1 + filteredSuggestions && filteredSuggestions.length) % filteredSuggestions && filteredSuggestions.length);
        break;
      case 'Enter':;
        if(highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e && e.preventDefault();
          handleSelectSuggestion(filteredSuggestions[highlightedIndex].text);
}
        break;
      case 'ArrowUp':;
        if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {;
          e && e.preventDefault();
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions && filteredSuggestions.length) % filteredSuggestions && filteredSuggestions.length);
        }
        break;
      case 'Enter':;
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {;
          e && e.preventDefault(), // Prevent form submission;
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value && value.trim()) {;
          // Manually trigger search navigation to ensure consistent behavior;
          e && e.preventDefault();
          logInfo('EnhancedSearchInput manual submit:', { data: value }),;
          router && router.push(`/search?q=${encodeURIComponent(value)}`);
          setIsFocused(false);
          setHighlightedIndex(-1);
          inputRef && inputRef.current?.blur();
        } else {;
          // Prevent empty form submission;
          e && e.preventDefault();
        }
        break;
      case 'Escape':;
        e && e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        setValueOnFocus(null);
        inputRef && inputRef.current?.blur();
        break;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        setEnterHandledPostFocus(false);
        break;
    }

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
            const relatedTarget = e && e.relatedTarget as HTMLElement;            if (!containerRef && containerRef.current || !containerRef && containerRef.current.contains(relatedTarget as Node)) {;              setIsFocused(false);
              setHighlightedIndex(-1);
            ,}
            setValueOnFocus(null);
          }}

          onKeyDown={handleKeyDown}
          aria-label={t('general.search')}

          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="off"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick = {(,) => onChange(''),}
            aria-label="Clear search";
          >;
            <X className="h-4 w-4" />;
          </button>;        )}

      </div>;

      <AutocompleteSuggestions
        suggestions = {filteredSuggestions,}
        searchTerm = {value,}
        onSelectSuggestion = {handleSelectSuggestion,}
        visible = {isFocused,}

      </div>;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}

        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls

      />;
    </div>;
  );

}setIsFocused (false);
inputRef && inputRef.current?.blur ();
setHighlightedIndex (-1) 
};
const handleKeyDown = (e: React && React.KeyboardEvent<HTMLInputElement>) => {;
  switch (e && e.key) {';
  case 'ArrowDown': if (isFocused && filteredSuggestions && filteredSuggestions.length > 0) {';
  case 'Escape': e && e.preventDefault ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
inputRef && inputRef.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break 
};
> <div className="relative flex items-center w-full" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" /> <InputonClick={'
  () => onChange ('') ";
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;
}</div> <AutocompleteSuggestions /> </div>) ;
}'"  );
      default:;
        break;
}
  };

  return (<div
      className="relative w-full"
      ref={containerRef}
      role="combobox"

      aria-expanded={isFocused && filteredSuggestions && filteredSuggestions.length> 0}
      aria-haspopup="listbox";
      aria-controls="autocomplete-suggestions-list">;
      <div className="relative">;
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />;

        <Input
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          type="text"
          value={value}

          onChange={(e) => {;
            onChange(e && e.target.value);

}}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className="w-full pl-10 pr-10 py-2 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          onFocus={() => value.trim() && setShowSuggestions(true)}
        />
        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          className="pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
          onFocus={() => value.trim() && filteredSuggestions.length > 0 && setIsOpen(true)}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </button>
        )}

<<<<<<< HEAD
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
=======
<<<<<<< HEAD
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-light/95 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg shadow-xl z-50">
=======
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              className="w-full px-4 py-3 text-left text-white hover:bg-zion-blue-light/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-zion-cyan" />
                <div>
                  <div className="font-medium">{suggestion.text}</div>
                  <div className="text-sm text-zion-slate-light capitalize">{suggestion.type}</div>
                </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              className="flex items-center w-full px-4 py-3 text-left hover:bg-zion-blue transition-colors"
            >
              <span className="mr-3 text-lg">{getTypeIcon(suggestion.type)}</span>
              <div className="flex-1">
                <div className="text-white font-medium">{suggestion.text}</div>
                <div className="text-zion-slate-light text-sm capitalize">{suggestion.type}</div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

          on_blur={(e) => {
            const related_target = e.related_target as HTMLElement;            if () {) {
  $2
}
              setIsFocused (false);
              setHighlightedIndex (-1);
            , }
            setValueOnFocus (null);
          }}
          onKeyDown = {handleKeyDown, }
          aria - label = {t ('general.search'), }
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - gray - 800 placeholder:text - zion - slate h - auto py - 0 min-w-0";
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}
          auto_complete="off";
        />;
        {value && (
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text-white";
            on_click = {(, ) => on_change (''), }
            aria - label="Clear search";
          >;
            <X className="h - 4 w-4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions = {filtered_suggestions, }
        search_term = {value, }
        onSelectSuggestion = {handleSelectSuggestion, }
        visible = {is_focused, }
        highlighted_index={highlighted_index} // Pass highlighted_index;
        list_id="autocomplete - suggestions - list" // Pass ID for aria - controls;
      />;
    </div>);
}setIsFocused (false);
input_ref.current?.blur ();
setHighlightedIndex (-1);
}
const handleKeyDown = (e: React.KeyboardEvent < HTMLInputElement>) =>: any {
  switch (e.key) {';
  case 'ArrowDown': // Check condition
if ( {') {
  $2
}
  case 'Escape': e.prevent_default ();
setIsFocused (false);
setHighlightedIndex (-1);
setValueOnFocus (null);
input_ref.current?.blur ();
break;
default: //For other keys (character input), reset enterHandledPostFocus setEnterHandledPostFocus (false);
break;
}
> <div className="relative flex items - center w-full" > <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion-slate" /> <Input on_click={';
  () => on_change ('') ";
}aria - label="Clear search" > <X className="h - 4 w-4" /> </button>);
}</div> <AutocompleteSuggestions /> </div>);
}'"  );
      default:;
        break;
}
  }
  return (<div;
      className="relative w-full";
      ref={container_ref}
      role="combobox";
      aria - expanded={is_focused && filtered_suggestions.length > 0}
      aria - haspopup="listbox";
      aria - controls="autocomplete - suggestions - list">;
      <div className="relative">;
        <Search;
          className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion-slate";
        />;
        <Input;
          ref={input_ref}
          type="text";
          value={value}
          on_change={(e) => {
            on_change (e.target.value);
}}
          on_focus={() => setIsFocused (true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl - 10 bg - zion - blue border border - zion - blue - light text - white placeholder:text - zion-slate";
          aria - autocomplete="list";
          aria - activedescendant={highlighted_index !== -1 ? `suggestion - item-${highlighted_index}` : undefined}
        />;
        {value && (
          <button;
            className="absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate hover:text-white";
            on_click={() => on_change ('')}
          >;
            <X className="h - 4 w-4" />;
          </button>)}
      </div>;
      <AutocompleteSuggestions;
        suggestions={filtered_suggestions}
        search_term={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={is_focused}
        highlighted_index={highlighted_index}
        list_id="autocomplete - suggestions - list";
      />;
    </div>);
}