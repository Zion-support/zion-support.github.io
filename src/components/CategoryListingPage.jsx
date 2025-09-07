' ' ' ' ' export function CategoryListingPage() { ' const [searchQuery, setSearchQuery] =;'
  }
  useState(');'
  const [selectedSort, setSelectedSort] = useState(() => localStorage.getItem('category_selected_sort') || sortOptions[0].value) const [selectedFilter, setSelectedFilter] = useState(() => localStorage.getItem('category_selected_filter') || filterOptions[0].value) const [isLoading, setIsLoading] = useState(false) useEffect(() => {'
 }
 localStorage.setItem('category_selected_sort', selectedSort)}, [selectedSort]) useEffect(() => {'
 }
 localStorage.setItem('category_selected_filter', selectedFilter)}, [selectedFilter]) useEffect(() => {'
 }
 setIsLoading(true);
  const timeout = setTimeout(() => setIsLoading(false), 300);
  return () => clearTimeout(timeout)}, [searchQuery, selectedSort, selectedFilter])"";"
}