
        }
        setHighlightedIndex(-1),;
      });
      .catch(() => setSuggestions([])),;
    return () => controller.abort(),;
  }, [debounced]),;
;
  useOnClickOutside(containerRef, () => {;
    setFocused(false),;
    setHighlightedIndex(-1),;
  }),;
;
  const handleSelect = (suggestion:SearchSuggestion) => {;
    onChange(suggestion.text),;
    if (onSelectSuggestion) onSelectSuggestion(suggestion),;
;
    const searchQuery = encodeURIComponent(suggestion.text),;
    router.push(`/search?q=${searchQuery}`),;
    fireEvent('search', { search_term:suggestion.text }),;
    setFocused(false),;
    setHighlightedIndex(-1),;
    inputRef.current?.blur(),;
  },;
;
  return (;
    <div;
      className="relative w-full";
      ref={containerRef}
      role="combobox";
      aria-expanded={focused && suggestions.length > 0}

