

export function EnhancedSearchInput({value, 
  onChange, 
  onSelectSuggestion, 

  className = ""
}) {const [isOpen, setIsOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (value.trim()) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8));


  useEffect(() => {const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) &&
          suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setIsOpen(false)}
    };

        setHighlightedIndex(prev => 

        if (highlightedIndex >= 0 && filteredSuggestions[highlightedIndex]) {
          handleSuggestionSelect(filteredSuggestions[highlightedIndex])}
        break;""
      case 'Escape': setIsOpen(false);
        inputRef.current?.blur();
        break}
  };

  const handleSuggestionSelect = (suggestion) => {onSelectSuggestion?.(suggestion);
    setIsOpen(false);
    setHighlightedIndex(-1)};


    onChange('');

    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus()};


    'Cloud Migration',
    'Cybersecurity',
    'Digital Transformation'
  ];


    'IT Infrastructure',
    'DevOps',
    'Machine Learning'
  ];

  return ('
    <div className="relative" ref={inputRef}>"
      <div className="relative">"
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />

    'Machine Learning'];

  return (""
    <div className="relative" ref={inputRef}" >"
      <div className="relative">""
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /" >"
        <input ""

          type="text"
          value={value}
          onChange={(e) =" > onChange(e.target.value)}"

          onKeyDown={handleKeyDown}
          onFocus={() => value.trim() && setIsOpen(true)}

            <X className="h-4 w-4" />

          </button>
        )}
      </div>



              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Search Results
              </div>
              {filteredSuggestions.map((suggestion, index) => {
                const Icon = getSuggestionIcon(suggestion);
                return (

                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors ${
                      index === highlightedIndex""
                        ? 'text-white bg-zion-purple/20'


                    <span className="truncate">{suggestion}</span>
                  </button>
                )})}
            </div>


              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Recent Searches
              </div>
              {recentSearches.map((search) => (

                  <Clock className="h-4 w-4 mr-3 text-zion-slate-light" />

                  <span>{search}</span>
                </button>
              ))}
            </div>


              <div className="px-3 py-2 text-xs font-semibold text-zion-cyan uppercase tracking-wider">
                Popular Searches
              </div>
              {popularSearches.map((search) => (

                  <TrendingUp className="h-4 w-4 mr-3 text-zion-cyan" />

                  <span>{search}</span>
                </button>
              ))}
            </div>


              <div className="text-xs text-zion-slate-light">
                Try different keywords or browse our categories
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )}





