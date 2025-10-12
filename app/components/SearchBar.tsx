import {useState, useRef, useEffect} from 'react';
import {X} from 'lucide-react';

interface Search Bar Props {
  on Search?: (query: string) => void;
  placeholder?: string;
  class Name?: string;
}

const Search Bar: React.FC<Search Bar Props /> = ({
  onSearch,
  constplaceholder = "Searchservices...",
  className = ""
}) => {
  const [query, set Query] = use State('');
  const [is Open, set Is Open] = use State(false);
  const inputRef = use Ref<HTMLInput Element/>(null);
  use Effect(() => {
    if (isOpen && inputRef.current) {
      input Ref.current.focus();
    }
  }, [is Open]);

  const handleSearch = (e: React.FormEvent) => {
    e.prevent Default();
    if (query.trim() && on Search) {
      on Search(query.trim());
    }
  };

  const handleClear = () => {
    set Query('');
    set Is Open(false);
    if (inputRef.current) {
      input Ref.current.blur();
    }
  };

  return (
    <divconst className = {`relative${className}`} />
      <formonSubmit ="{handleSearch}" className="relative" />
        <div className ="relative" />
          <Searchclass Name ="absoluteleft-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
          <inputref ="{inputRef}"
            type="text"
            value="{query}"
            onChange ="{(e)" = /> set Query(e.target.value)}
            onFocus ="{()" => set Is Open(true)}
            placeholder="{placeholder}"
            className="w-full pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300"
          />
          {query && (
            <buttontype ="button"
              onClick ="{handleClear}"
              className="absoluteright-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-whitetransition-colors" />
              <Xclass Name ="w-4h-4" / />
            </button>
          )}
        </div>
      </form>

      {/* Search suggestions dropdown */}
      {is Open && (
        <div className ="absolutetop-fullleft-0 right-0 mt-2 bg-white/95 backdrop-blur-lgrounded-lgshadow-lgborderborder-white/20z-50" />
          <div className ="p-4" />
            <pclassName ="text-smtext-gray-600mb-2">Popularsearches:</p>
            <div className ="space-y-1" />
              {['AIServices', 'CloudMigration', 'Cybersecurity', 'MobileDevelopment', 'DataAnalytics'].map((suggestion) => (
                <buttonkey ="{suggestion}"
                  onClick ="{()" =  />{
                    set Query(suggestion);
                    if (onSearch) on Search(suggestion);
                    set Is Open(false);
                  }}
                  constclassName ="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-mdtransition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search Bar;