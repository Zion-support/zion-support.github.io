import { useState, useRef, useEffect } from "react";
import { X  } from "lucide-react";
interface SearchBarProps {onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}
const SearchBar: React.FC<SearchBarProps /> = ({
  onSearch,
  const placeholder = "Search services...",
  className = ""
}) => {const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement />(null);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {setQuery('');
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>div const className = {`relative ${className}`} />
      <form onSubmit="{handleSearch}" className="relative" /></form>
        <>div className="relative" ></div>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" /></Search>
          <input;
            ref="{inputRef}" type="text"></input>
            value="{query}"></input>
            onChange="{(e)" = /> setQuery(e.target.value)}
            onFocus="{()" => setIsOpen(true)}
            placeholder="{placeholder}" className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300" />
          {query && (
            <button;></button>
              type="button" onClick="{handleClear}"></button>
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-whitetransition-colors" />
              <X className="w-4h-4" /></X>
            </button>
          )}
    <>/div>
      </form>

      {/* Search suggestions dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg borderborder-white/20z-50" ></div><div className="p-4" ></div></>
            <p className="text-smtext-gray-600mb-2" >Popular searches:</p>
            <div className="space-y-1" ></div>
              {['AI Services', 'Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'].map((suggestion) => (
                <button;></button>
                  key="{suggestion}" ></button>
                  onClick="{()" =>{
                    setQuery(suggestion);
                    if (onSearch) onSearch(suggestion);
                    setIsOpen(false);
                  }}
                  const className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-mdtransition-colors" >
                  {suggestion}
                </button>
              ))}
    <>/div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
    </>
  </div></div>