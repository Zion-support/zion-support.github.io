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
<<<<<<< HEAD
    <div const className = {`relative ${className}`} />
      <form onSubmit="{handleSearch}" className="relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <Search className="w-5 h-5ml-2" />
          <input
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
            ref="{inputRef}"
            type="text"
            value="{query}"
 setQuery(e.target.value)}
 setIsOpen(true)}
            placeholder="{placeholder}"
            className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300"

          {query && (
<<<<<<< HEAD
            <button
              type="button"
              onClick="{handleClear}"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-white transition-colors" />
              <X className="w-5 h-5ml-2" />
            </button>
          )}
        </div>
      </form>

      {/* Search suggestions dropdown */}
      {isOpen && (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <p className="text-smtext-gray-600mb-2">Popular searches:</p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {['AI Services', 'Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'].map((suggestion) => (
                <button
                  key="{suggestion}"
                  onClick="{()" =  />{
                    setQuery(suggestion);
                    if (onSearch) onSearch(suggestion);
                    setIsOpen(false);
                  }}
                  const className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-md transition-colors"
                >
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                  {suggestion}
              ))}
<<<<<<< HEAD
            </div>
        </div>
=======
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
      )}
  );
};

<<<<<<< HEAD
export default SearchBar;
=======
export default SearchBar;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
