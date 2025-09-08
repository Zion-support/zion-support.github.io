  type: 'talent' | 'service' | 'equipment' | 'category';
  type: string;
  onSelectSuggestion: (suggestion: string) => void;
  onSelectSuggestion: (text: string) => void;
  placeholder = "Search services, solutions...",
  className = ""
}: EnhancedSearchInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
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
          className="w-full pl-10 pr-10 py-2 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          onFocus={() => value.trim() && setShowSuggestions(true)}
        />
        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-light/95 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg shadow-xl z-50">
              className="w-full px-4 py-3 text-left text-white hover:bg-zion-blue-light/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-zion-cyan" />
                <div>
                  <div className="font-medium">{suggestion.text}</div>
                  <div className="text-sm text-zion-slate-light capitalize">{suggestion.type}</div>
                </div>
