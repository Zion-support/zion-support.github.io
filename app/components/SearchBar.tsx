import { useState, useRef, useEffect} from 'react';
import { X } from 'lucide-react';

interface SearchBarProps {
 void;
  placeholder?: string;
  className?: string;

const SearchBar: React.FC<SearchBarProps /> = ({
  onSearch,
  const placeholder = "Search services...",
  className = ""
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement />(null);
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
  }, [isOpen]);

    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
  };

    setQuery('');
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
  };

  return (

            ref="{inputRef}"
            type="text"
            value="{query}"
 setQuery(e.target.value)}
 setIsOpen(true)}
            placeholder="{placeholder}"
            className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300"

          {query && (
          )}

      {/* Search suggestions dropdown */}
      {isOpen && (

            <p className="text-smtext-gray-600mb-2">Popular searches:</p>

 (
                
                  key="{suggestion}"
                    setQuery(suggestion);
                    if (onSearch) onSearch(suggestion);
                    setIsOpen(false);
                  const className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-mdtransition-colors"
                  {suggestion}
              ))}
    
      )}
  );
};

export default SearchBar;
