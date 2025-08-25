import { Search, X } from 'lucide-react';
<<<<<<< HEAD
=======
import { Input } from '@/components/ui/Input';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

interface SearchSuggestion {
  id: string;
  text: string;
<<<<<<< HEAD
  type: string;
=======
  type: 'talent' | 'service' | 'equipment' | 'category';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
}

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
<<<<<<< HEAD
  onSelectSuggestion: (text: string) => void;
=======
  onSelectSuggestion: (suggestion: string) => void;
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  searchSuggestions: SearchSuggestion[];
  placeholder?: string;
  className?: string;
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  searchSuggestions,
<<<<<<< HEAD
  placeholder = "Search services, solutions...",
  className = ""
}: EnhancedSearchInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
=======
  placeholder = "Search...",
  className = ""
}: EnhancedSearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

  useEffect(() => {
    if (value.trim()) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(value.toLowerCase())
<<<<<<< HEAD
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
=======
      ).slice(0, 5);
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    }
  }, [value, searchSuggestions]);

  useEffect(() => {
<<<<<<< HEAD
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
=======
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onSelectSuggestion(suggestion.text);
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
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
        <Input
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
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
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          </button>
        )}
      </div>

<<<<<<< HEAD
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-light/95 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg shadow-xl z-50">
=======
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
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
              className="flex items-center w-full px-4 py-3 text-left hover:bg-zion-blue transition-colors"
            >
              <span className="mr-3 text-lg">{getTypeIcon(suggestion.type)}</span>
              <div className="flex-1">
                <div className="text-white font-medium">{suggestion.text}</div>
                <div className="text-zion-slate-light text-sm capitalize">{suggestion.type}</div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}