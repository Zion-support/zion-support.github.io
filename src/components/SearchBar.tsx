
import { Search, X } from 'lucide-react'
import { Input  } from '@/components/ui/input';
import { AutocompleteSuggestions  } from '@/components/search/AutocompleteSuggestions';
import { fireEvent  } from '@/lib/analytics';
import { SearchSuggestion  } from '@/types/search';
import { slugify  } from '@/lib/slugify';
import { useDebounce  } from '@/hooks/useDebounce';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';
/**
 * SearchBar component props
 */
interface SearchBarProps {
  /**

  value: string,

   * The current value of the search input;
   */;
  value: string;  value: string,

  /**
   * Function to call when the search input changes,
   * @param {string} val - The new value of the search input
   */

  /**
   * Function to call when a suggestion is selected
   * @param {SearchSuggestion} suggestion - The selected suggestion
   */

  /**
   * The placeholder text for the search input
   */
  placeholder?: string
}

  value,
  onChange,
  onSelectSuggestion,;
  placeholder = 'Search...';

}: SearchBarProps) {  const router = useRouter(); export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const router = useRouter()
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [focused, setFocused] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const listId = 'searchbar-autocomplete-list';  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect((,) => {
    if (!debounced) {
      setSuggestions([])
      setHighlightedIndex(-1)
      return
    }
    const controller = new AbortController()
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {
      signal: controller.signal
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch suggestions')
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5)) } else {  const debounced = useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!debounced) {
      setSuggestions([])
      setHighlightedIndex(-1)

    }
    const controller = new AbortController($2);
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error($2);
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setSuggestions(data.slice(0, 5))
        } else {
          setSuggestions([])
        }
        setHighlightedIndex(-1)
      })
      .catch(() => setSuggestions([])),
    return () => controller.abort()
  }, [debounced]),

  useOnClickOutside(containerRef, () => {
    setFocused($2);
    setHighlightedIndex(-1)
  }),

  const handleSelect = (suggestion: SearchSuggestion) => {,
    onChange(suggestion.text),
    if (onSelectSuggestion) onSelectSuggestion(suggestion),

    const searchQuery = encodeURIComponent(suggestion.text),
    router.push(`/search?q=${searchQuery}`),
    fireEvent('search', { search_term: suggestion.text }),
    setFocused(false),
    setHighlightedIndex(-1),
    inputRef.current?.blur()
  },

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
      aria-expanded={focused && suggestions.length > 0}
      aria-haspopup='listbox'

/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;

  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;

  onChange: (val: string) => void,;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;

  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
}

          }}
          onBlur={e => {;
            // Only blur if not clicking on suggestions;
            const relatedTarget = e && e.relatedTarget as HTMLElement;
            if (;
              !relatedTarget ||;
              !containerRef && containerRef.current?.contains(relatedTarget);
            ) {;
              setFocused(false);
              setHighlightedIndex(-1);

          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
          autoComplete="search"
          onKeyDown={(e) => {

              }
              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e && e.key === 'Enter' && value && value.trim()) {                e && e.preventDefault(); // Prevent form submission if SearchBar is in a form;

                fireEvent('search', { search_term: value });
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();
              }
              return;            }              // If Enter is pressed and there's a value, navigate with query parameter;
              if (e && e.key === 'Enter' && value && value.trim()) {;
                e && e.preventDefault(), // Prevent form submission if SearchBar is in a form;
                fireEvent('search', { search_term: value }),;
                router && router.push(`/search?q=${encodeURIComponent(value)}`);
                setFocused(false);
                inputRef && inputRef.current?.blur();

              }
              return;
            if (!focused || suggestions.length === 0) {
              if (e.key === 'Escape') {
                e.preventDefault($2);
                setFocused($2);
                setHighlightedIndex($2);
                inputRef.current?.blur()
              }
              // If Enter is pressed and there's a value, navigate with query parameter
              if (e.key === 'Enter' && value.trim()) {
                e.preventDefault(), // Prevent form submission if SearchBar is in a form
                fireEvent($2);
                router.push(`/search?q = $2;
                setFocused($2);
                inputRef.current?.blur()
              }
              return
            }

            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

;
}
}
}
}

      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
        highlightedIndex={highlightedIndex}
        listId={listId}

