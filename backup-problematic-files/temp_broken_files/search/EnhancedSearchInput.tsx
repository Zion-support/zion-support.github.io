
  // Filter suggestions based on input value;
  useEffect(() => {;
    if (!value) {;
      // Show recent searches when input is empty;
onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate";
        />;
        {value && (;

            onClick={() => onChange('')}
          >;
            <X className="h-4 w-4" />;
          </button>;
        )}
      </div>;

        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
/>;
    </div>;
