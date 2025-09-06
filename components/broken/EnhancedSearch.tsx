
Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {

setIsSearching (true);
Simulate API call delay setTimeout () => {
  const filteredResults = mockSearchResults.filter (result => {
  const matchesQuery = result.name.toLowerCase () .includes (searchQuery.toLowerCase () |result.description.toLowerCase () .includes (searchQuery.toLowerCase () |result.category.toLowerCase () .includes (searchQuery.toLowerCase ();
const matchesFilters = selectedFilters.length = = 0 |selectedFilters.some (filter => result.category.toLowerCase () .includes (filter.toLowerCase () |result.type.toLowerCase () .includes (filter.toLowerCase () );
setResults (sortedResults);
setShowResults (true);
setIsSearching (false)
 300)
 300);
 300);
selected_filters]);
selected_filters]);
Close search on outside click useEffect () => {
  const handleClickOutside = (event: MouseEvent) => {
  if (searchRef.current && !searchRef.current.contains (event.target as Node) {
 []);
Handle filter toggle const toggleFilter = (filterId: string) => {
  setSelectedFilters (prev => prev.includes (filterId) ? prev.filter (id => id != filterId)
 {
  /* Search Form */
className="relative"> <div className="relative"> 
className="relative"> <div className="relative"> 
  show_filters && (<div className="p - 4 border - b border - gray - 700"> <div className="flex items - center gap - 2 mb - 3"> <Filter className="w - 4 h - 4 text - gray - 400" /> <span className="text - sm font - medium text - gray - 300">Filter by Category</span> 
<div className="p-4 border-b border-gray-700"> <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions
</div> 
  isSearching ? (<div className="flex items-center justify-center py-8"> <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div> <span className="ml-3 text-gray-400">Searching...</span> 
</p> <div className="flex items-center gap-2"> 
</div> </div> <div className="flex items-center gap-1 text-cyan-400"> 
</div>) : query.trim () .length > 0 ? (<div className="text-center py-8"> <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div> 
  searchHistory.length > 0 && (<div> <div className="flex items-center gap-2 mb-3"> <Clock className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Recent Searches</span> 
<div> <div className="flex items-center gap-2 mb-3"> <TrendingUp className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Popular Searches</span> 
<div className="p-4 border-b border-gray-700"> <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions
</div> 
  isSearching ? (<div className="flex items-center justify-center py-8"> <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div> <span className="ml-3 text-gray-400">Searching...</span> 
</p> <div className="flex items-center gap-2"> 
</div> </div> <div className="flex items-center gap-1 text-cyan-400"> 
</div>) : query && query.trim () .length > 0 ? (<div className="text-center py-8"> <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div> 
  searchHistory && searchHistory.length > 0 && (<div> <div className="flex items-center gap-2 mb-3"> <Clock className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Recent Searches</span> 
<div> <div className="flex items-center gap-2 mb-3"> <TrendingUp className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Popular Searches</span> 
<div className="p - 4 border - b border - gray - 700"> <h3 className="text - sm font - medium text - gray - 400 mb - 3">Quick Actions
</div> 
  is_searching ? (<div className="flex items - center justify - center py - 8"> <div className="animate - spin rounded - full h - 8 w - 8 border - b-2 border - cyan - 400"></div> <span className="ml - 3 text - gray - 400">Searching...</span> 
</p> <div className="flex items - center gap - 2"> 
</div> </div> <div className="flex items - center gap - 1 text - cyan - 400"> 
</div>) : query.trim () .length > 0 ? (<div className="text - center py - 8"> <div className="text - sm text - gray - 500">Try adjusting your search terms or filters</div> 
  search_history.length > 0 && (<div> <div className="flex items - center gap - 2 mb - 3"> <Clock className="w - 4 h - 4 text - gray - 400" /> <span className="text - sm font - medium text - gray - 300">Recent Searches</span> 
<div> <div className="flex items - center gap - 2 mb - 3"> <TrendingUp className="w - 4 h - 4 text - gray - 400" /> <span className="text - sm font - medium text - gray - 300">Popular Searches</span> 