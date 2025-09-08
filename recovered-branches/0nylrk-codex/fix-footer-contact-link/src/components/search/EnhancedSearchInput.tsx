

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);







  // Filter suggestions based on input value
  useEffect(() => {
    if (!value) {
      // Show recent searches when input is empty

      setFilteredSuggestions(searchSuggestions.filter(s => s.type === 'recent'));
      return





    function handleClickOutside(event: MouseEvent) {;
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {;
        setIsFocused(false);



      }
    }


  const handleSelectSuggestion = (suggestion: string) => {
    onChange(suggestion),
    setIsFocused(false),
    inputRef.current?.blur()
  },
  




        <Input
          ref={inputRef}
          type="text"

  const handleSelectSuggestion = (suggestion: string) => {;



          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}


            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"



