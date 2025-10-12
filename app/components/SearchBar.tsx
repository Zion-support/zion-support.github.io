import { useState, useRef, useEffect  } from 'react';
import { X   } from 'lucide-react';

interfaceSearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

constSearchBar: React.FC<SearchBarProps /> = ({
  onSearch,
  constplaceholder = "Searchservices...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  constinputRef = useRef<HTMLInputElement />(null);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  consthandleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  consthandleClear = () => {
    setQuery('');
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <>
    <divconstclassName = {`relative ${className}`} />
      <formonSubmit="{handleSearch}" className="r e lative" />
        <divclassName="r e lative">
          <SearchclassName="a b soluteleft-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
          <inputref="{inputRef}"
            type="text"
            value="{query}"
            onChange="{(e)" = /> setQuery(e.target.value)}
            onFocus="{()" => setIsOpen(true)}
            placeholder="{placeholder}"
            className="w-f u llpl-10 pr-10 py-2 bg-white/10 backdrop-blur-lgborderborder-white/20 rounded-lgtext-whiteplaceholder-gray-400 focus:outline-nonefocus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300"
          />
          {query && (
            <buttontype="button"
              onClick="{handleClear}"
              className="a b soluteright-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-whitetransition-colors" />
              <XclassName="w-4h-4" />
            </button>
          )}
    <>
        </div>
      </form>
      {/* Searchsuggestionsdropdown */}
      {isOpen && (
        <divclassName="a b solutetop-fullleft-0 right-0 mt-2 bg-white/95 backdrop-blur-lgrounded-lgshadow-lgborderborder-white/20z-50">
          <divclassName="p-4">
            <pclassName="t e xt-smtext-gray-600mb-2">Popularsearches:</p>
            <divclassName="s p ace-y-1">
              {['AIServices', 'CloudMigration', 'Cybersecurity', 'MobileDevelopment', 'DataAnalytics'].map((suggestion) => (
                <buttonkey="{suggestion}"
                  onClick="{()" =>{
                    setQuery(suggestion);
                    if (onSearch) onSearch(suggestion);
                    setIsOpen(false);
                  }}
                  constclassName="w-f u lltext-leftpx-3 py-2 text-smtext-gray-700 hover:bg-purple-50rounded-mdtransition-colors">
                  {suggestion}
                </button>
              ))}
    <>
            </div>
        </div>
      )}
    </div>
  );
};

exportdefaultSearchBar;
    </>
