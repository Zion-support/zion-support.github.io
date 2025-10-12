import { useState, useRef, useEffect} from 'react', { X } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps />= ({
  onSearch,
  const placeholder = "Search services...",
  className = ""
}) => {</SearchBarProps>
  const [query, setQuery] = useState('');</SearchBarProps>
  const [isOpen, setIsOpen] = useState(false);</SearchBarProps>
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

export default function SearchBar() {
  return (

            ref="{inputRef}"
            type="text"
            value="{query}"
            onChange="{(e)" = /> setQuery(e.target.value)}
            onFocus="{()" => setIsOpen(true)}
            placeholder="{placeholder}"
            className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-all duration-300"</HTMLInputElement>
          /></HTMLInputElement>
          {query && (</HTMLInputElement>
            <button;
              type="button"
              onClick="{handleClear}"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-white transition-colors" /></button>
              <X className="w-5h-5ml-2" /></X>
            </button>
          )}
        </div>
      </form>
      {/* Search suggestions dropdown */}
      {isOpen && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <p className="text-smtext-gray-600mb-2">Popular searches:</p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {['AI Services', 'Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'].map((suggestion) => (
                <button;
                  key="{suggestion}"
                  onClick="{()" =  />{
                    setQuery(suggestion);
                    if (onSearch) onSearch(suggestion);
                    setIsOpen(false);
                  }}
                  
};

export default SearchBar;

}