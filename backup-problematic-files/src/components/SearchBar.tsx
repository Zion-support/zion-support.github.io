import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { fireEvent } from '@/lib/analytics';
import { SearchSuggestion } from '@/types/search';
import { slugify } from '@/lib/slugify';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
;
/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
  value: string;,;
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
  onChange: (val:string) => void;,;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
  onSelectSuggestion?:(suggestion: SearchSuggestion) => void;,;
  /**;
   * The placeholder text for the search input;
  placeholder?:string;
}
/**;
 * SearchBar component that allows users to search for content.;
export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' } SearchBarProps) {;
  const router = useRouter(),;
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]),;

  const inputRef = useRef<HTMLInputElement>(null),;

  const containerRef = useRef<HTMLDivElement>(null),;

    <div;
      className="relative w-full";"
      ref={containerRef}"
      role="combobox";"
      aria-expanded={focused && suggestions.length > 0}

        <Input;
          ref={inputRef}"
          type="text";""
          id="main-search-input";""
          name="search";"
          value={value}
          onChange={(e) => onChange(e.target.value)}

          <button;"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white";""
            onClick={() => onChange()}
</button>
            <X className="h-4 w-4" />;"

          </button>;
      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions}        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}
      />;

    </div>;"
  > <div className="relative" > <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate" /> <Input ;"
}aria-label="Clear search" > <X className="h-4 w-4" /> </button>) ;"

}</div> <AutocompleteSuggestions suggestions= {;
  suggestions ;
}searchTerm= {;
  value ;
}onSelectSuggestion= {;
  handleSelect ;
}visible= {;
  focused ;
}highlightedIndex= {;
  highlightedIndex ;
}listId= {;
  listId ;

}/> </div>) ;
