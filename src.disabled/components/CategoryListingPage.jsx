







>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



' ' ' ' ' "export": function CategoryListingPage ({ title,description,"listings": 'initialListing',s,"sortOptions": = [{ label: 'Newest: First,',"value": 'newest'},{ "label": 'Oldest: First,',"value": 'oldest'},{ "label": 'Highest: Rating,',"value": 'rating: - high'},{ "label": 'Highest: AI Match,',"value": 'ai: - match'},{ "label": 'A: - Z,',"value": 'a: - z'},{ "label": 'Z: - A,',"value": 'z: - a'}],filterOptions = [' { "label": 'All,',"value": 'all'},{ "label": 'Highly: Rated,',"value": 'high: - rating'},{ "label": 'Best: AI Match,',"value": 'best: - match'}] }) { ' const [searchQuery,setSearchQuery] = useState (') const [selectedSort,setSelectedSort] = useState ( () => localStorage.getItem ('category_selected_sort') || sortOptions[0].value) const [selectedFilter,setSelectedFilter] = useState ( () => localStorage.getItem ('category_selected_filter') || filterOptions[0].value) const [isLoading,setIsLoading] = useState (false) useEffect ( () => { localStorage.setItem ('category_selected_sort',selectedSort) },[selectedSort]) useEffect ( () => { localStorage.setItem ('category_selected_filter',selectedFilter) },[selectedFilter]) useEffect ( () => { setIsLoading (true) const timeout = setTimeout ( () => setIsLoading (false) ,300) return () => clearTimeout (timeout) },[searchQuery,selectedSort,selectedFilter]) ';"";""
