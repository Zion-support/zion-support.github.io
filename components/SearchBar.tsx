


const SearchBar: React.FC = () => {



      type: 'category'

    },
    {
      title: 'AI Services',
      description: 'Advanced AI solutions including Computer Vision, Fraud Detection, and more',


      type: 'category',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including Cloud Migration, Cybersecurity, and more',







    setQuery(value);
    handleSearch(value);

  }

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery(');
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);

                        {result.description}
                      </p>;
                    </div>;
                  </div>;
                </Link>;
              ))}

            </div>;
          ) : query && !isLoading ? (<div className=\"px-4 py-3 text-sm text-gray-500\"    />;

              No results found for &quot;{query}&quot;
            </div>;
          ) : null}
        </div>;
      )}






