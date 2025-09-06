

}];
setIsSearching (true);
//Simulate API call delay setTimeout ( () => {
  const filteredResults = mockSearchResults.filter (result => {
  const matchesQuery = result.name.toLowerCase () .includes (searchQuery.toLowerCase () ) |result.description.toLowerCase () .includes (searchQuery.toLowerCase () ) |result.category.toLowerCase () .includes (searchQuery.toLowerCase () );
const matchesFilters = selectedFilters.length === 0 |selectedFilters.some (filter => result.category.toLowerCase () .includes (filter.toLowerCase () ) |result.type.toLowerCase () .includes (filter.toLowerCase () ) );
setResults (sortedResults);
setShowResults (true);
setIsSearching (false)
}, 300)
}, 300);
[selectedFilters]);
[selectedFilters]);
//Close search on outside click useEffect ( () => {
  const handleClickOutside = (event: MouseEvent) => {
  if (searchRef.current && !searchRef.current.contains (event.target as Node) ) {
}, []);
//Handle filter toggle const toggleFilter = (filterId: string) => {
  setSelectedFilters (prev => prev.includes (filterId) ? prev.filter (id => id !== filterId)
}> {
  /* Search Form */
}<form onSubmit= {
  handleSearch
}className="relative"> <div className="relative"> <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input /> {
  /* Clear Button */
}{
  query && (<button type="button" onClick= {
  clearSearch
}className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors" > <X className="w-4 h-4" /> </button>)
}{
  /* Search Button */
}<button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" > Search </button> </div> </form> {
  /* Search Results Dropdown */
}<AnimatePresence> {
  showResults && (<motion.div initial= {
  {
  opacity: 0, y: -10, scale: 0.95

}animate= {
  {
  opacity: 1, y: 0, scale: 1
}exit= {
  {

}className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto" > {
  /* Filters */
}{
  showFilters && (<div className="p-4 border-b border-gray-700"> <div className="flex items-center gap-2 mb-3"> <Filter className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Filter by Category</span> </div> <div className="flex flex-wrap gap-2"> {
  categories.map ( (category) => (<button key= {
  category.id
}onClick= {
  () => toggleFilter (category.id)
}className= {
  `flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 $ {
  selectedFilters.includes (category.id) ? `bg-gradient-to-r $ {
  category.color
}text-white`: 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
}`
}> <category.icon className="w-3 h-3" /> {
  category.name
}</button>)
}<div className="flex-shrink-0 pr-4"> <button onClick= {
  () => handleSearch ()
}disabled= {
  isSearching |!query.trim ()
}className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" > {
  isSearching ? 'Searching...' : 'Search'
}</button> </div> </div> {
  /* Search Suggestions */
}<AnimatePresence> {
  showSuggestions && suggestions.length > 0 && (<motion.div initial= {

  {
  opacity: 0, y: -10
}animate= {
  {
  opacity: 1, y: 0
}exit= {
  {

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
