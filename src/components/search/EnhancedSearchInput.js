import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowDown } from 'lucide-react';
export const EnhancedSearchInput = ({ placeholder = "Search for services, talent, or equipment...", onSearch, suggestions = [], className = "" }) => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const suggestionsRef = useRef(null);
    useEffect(() => {
        if (query.trim()) {
            const filtered = suggestions.filter(suggestion => suggestion.title.toLowerCase().includes(query.toLowerCase()) ||
                suggestion.description?.toLowerCase().includes(query.toLowerCase()));
            setFilteredSuggestions(filtered.slice(0, 5));
            setShowSuggestions(true);
            setSelectedIndex(-1);
        }
        else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
    }, [query, suggestions]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleClear = () => {
        setQuery('');
        setShowSuggestions(false);
        inputRef.current?.focus();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() && onSearch) {
            onSearch(query.trim());
            setShowSuggestions(false);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.title);
        setShowSuggestions(false);
        if (onSearch) {
            onSearch(suggestion.title);
        }
    };
    const handleKeyDown = (e) => {
        if (!showSuggestions)
            return;
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => prev < filteredSuggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && filteredSuggestions[selectedIndex]) {
                    handleSuggestionClick(filteredSuggestions[selectedIndex]);
                }
                else if (query.trim()) {
                    handleSubmit(e);
                }
                break;
            case 'Escape':
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
        }
    };
    return (<div className={`relative ${className}`} ref={suggestionsRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>
          <input ref={inputRef} type="text" value={query} onChange={handleInputChange} onKeyDown={handleKeyDown} onFocus={() => query.trim() && setShowSuggestions(true)} placeholder={placeholder} className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"/>
          {query && (<button type="button" onClick={handleClear} className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-4 h-4 text-gray-400"/>
            </button>)}
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <ArrowDown className="w-4 h-4"/>
          </button>
        </div>
      </form>
      {showSuggestions && filteredSuggestions.length > 0 && (<div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (<button key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)} className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${index === selectedIndex ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${suggestion.type === 'service' ? 'bg-blue-100 text-blue-600' :
                    suggestion.type === 'talent' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'}`}>
                    {suggestion.type.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {suggestion.title}
                  </div>
                  {suggestion.description && (<div className="text-sm text-gray-500 truncate">
                      {suggestion.description}
                    </div>)}
                </div>
              </div>
            </button>))}
        </div>)}
    </div>);
};
