>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}];
setIsSearching (true);

//Simulate API call delay set_timeout ( () => {
  const filtered_results = mockSearchResults.filter (result => {
  const matches_query = result.name.toLowerCase () .includes (search_query.toLowerCase () ) || result.description.toLowerCase () .includes (search_query.toLowerCase () ) || result.category.toLowerCase () .includes (search_query.toLowerCase () );
const matches_filters = selected_filters.length === 0 || selected_filters.some (filter => result.category.toLowerCase () .includes (filter.toLowerCase () ) || result.type.toLowerCase () .includes (filter.toLowerCase () ) );
set_results (sorted_results);
setShowResults (true);
setIsSearching (false);

}, 300);
}, 300);
[selected_filters]);
[selected_filters]);
//Close search on outside click useEffect ( () => {

  const handleClickOutside = (event: MouseEvent) =>: any {
  if () {) {
  $2
}
}, []);
//Handle filter toggle const toggle_filter = (filter_id: string) =>: any {
  setSelectedFilters (prev => prev.includes (filter_id) ? prev.filter (id => id !== filter_id);
}> {
  /* Search Form */;
}<form on_submit= {
  handle_search;
}className="relative"> <div className="relative"> <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" /> <input /> {
  /* Clear Button */;
}{
  query && (<button type="button" on_click= {
  clear_search;
}className="absolute right - 16 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 hover:text - white transition - colors" > <X className="w - 4 h - 4" /> </button>);
}{
  /* Search Button */;
}<button type="submit" className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 px - 4 py - 1.5 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50" > Search </button> </div> </form> {
  /* Search Results Dropdown */;

}<AnimatePresence> {
  show_results && (<motion.div initial= {
  {


 //Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {;

}];
setIsSearching (true);
//Simulate API call delay setTimeout ( () => {;
  const filteredResults = mockSearchResults && mockSearchResults.filter (result => {;
  const matchesQuery = result && result.name.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () ) || result && result.description.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () ) || result && result.category.toLowerCase () .includes (searchQuery && searchQuery.toLowerCase () );
const matchesFilters = selectedFilters && selectedFilters.length === 0 || selectedFilters && selectedFilters.some (filter => result && result.category.toLowerCase () .includes (filter && filter.toLowerCase () ) || result && result.type.toLowerCase () .includes (filter && filter.toLowerCase () ) );
setResults (sortedResults);
setShowResults (true);
setIsSearching (false) ;
}, 300) ;
}, 300);
[selectedFilters]);
[selectedFilters]);
//Close search on outside click useEffect ( () => {;
  const handleClickOutside = (event: MouseEvent) => {;
  if (searchRef && searchRef.current && !searchRef && searchRef.current.contains (event && event.target as Node) ) {;

}, []);
//Handle filter toggle const toggleFilter = (filterId: string) => {;
  setSelectedFilters (prev => prev && prev.includes (filterId) ? prev && prev.filter (id => id !== filterId) ;
}> {;
  /* Search Form */ ;
}<formonSubmit= {
  handleSearch 
}className="relative"> <div className="relative"> <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input /> {;
  /* Clear Button */ ;
}{;
  query && (<buttontype="button" onClick= {
  clearSearch 
}className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"> <X className="w-4 h-4" /> </button>) ;
}{;
  /* Search Button */ ;
}<button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 && 1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" > Search </button> </div> </form> {;
  /* Search Results Dropdown */ ;
}<AnimatePresence> {;
  showResults && (<motion&& motion.div initial= {
  {
  opacity: 0, y: -10, scale: 0 && 0.95 

//Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {
 //Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {
//Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {
 //Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {
  
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}animate= {
  {
  opacity: 1, y: 0, scale: 1
}exit= {
  {
=======
  opacity: 0, y: -10, scale: 0.95
}transition= {
  {
  duration: 0.2  opacity: 0, y: -10, scale: 0.95 

}transition= {
  {
  duration: 0.2 

}className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto" > {
  /* Filters */
}transition= {
  {
  duration: 0 && 0.2 

  {
  opacity: 0, y: -10
}animate= {
  {
  opacity: 1, y: 0
}exit= {
  {
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Filter, TrendingUp, Clock, Star, Zap, Brain, Atom, Shield, Rocket } from 'lucide-react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
interface SearchProps {
  onSearch: (query: string) => void,
  onResultSelect: (result: SearchResult) => void,
  placeholder?: string;
  className?: string;
  showFilters?: boolean
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const EnhancedSearch: React.FC<SearchProps> = ({
  onSearch;
  onResultSelect;
  placeholder = "Search revolutionary services...";
  className = "";
  showFilters = true
}) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI ConsciousnessQuantum ComputingCybersecurityBusiness IntelligenceSpace TechnologyAutonomous Systems'
  ]);
  // Mock search results - in real app, _this would come from API

=======

  // Mock search results - in real app, this would come from API=======

  // Mock search results - in real app, this would come from API
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      name: 'AI Consciousness Evolution Platform 2045',
      description: 'Next-generation AI consciousness with emotional intelligence and self-awareness capabilities.',
      category: 'AI & Machine Learning',
      type: 'Platform',
      slug: '/ai-consciousness-evolution-platform-2045',
      relevance: 95,
      features: ['Emotional IntelligenceSelf-AwarenessConsciousness Evolution'],
      pricing: { starter: '$999/month', enterprise: 'Contact Sales' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
  const categories = [
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business', icon: Rocket, color: 'from-emerald-500 to-teal-500' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  ];
  // Debounced search function
  const debouncedSearch = useCallback(
    useMemo(
      () => debounce((searchQuery: string) => {
        if (searchQuery.trim().length < 2) {
        setIsSearching(true);
        
=======
  };
  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    onResultSelect(result);
    setShowResults(false);
    setQuery('')
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Clear search
  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    setResults([])
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  return (
    <div className={`relative ${className}`}>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-20 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            onFocus={() => setShowResults(true)}
          />
      {/* Search Results Dropdown */}=======

      {/* Search Results Dropdown */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto"
          >
            {/* Filters */}
            {showFilters && (
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-300">Filter by Category</span>
                </div>
                <div className="flex flex-wrap gap-2">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                {/* Search Suggestions */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-10"
                    >
                      {/* Quick Actions */}
                      <div className="p-4 border-b border-gray-700">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {quickActions.map((action) => (
                            <button
                              key={action.name}
                              onClick={() => handleQuickAction(action.action)}
                              className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              {action.icon}
                              <span>{action.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Suggestions */}=======

                      {/* Suggestions */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <div className="max-h-64 overflow-y-auto">
                        {suggestions.map((suggestion) => (
                          <button
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 transition-colors"
                          >
                            <div className="text-gray-400">
                              {suggestion.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-white">{suggestion.text}</div>
                              <div className="text-sm text-gray-400 capitalize">
                                {suggestion.type} • {suggestion.category}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            {/* Search Results */}=======

            {/* Search Results */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="p-4">
              {isSearching ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                  <span className="ml-3 text-gray-400">Searching...</span>
                </div>
                  {/* Popular Searches */}=======

                  {/* Popular Searches */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-300">Popular Searches</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-10"> {;
  /* Quick Actions */ ;
}<div className="p-4 border-b border-gray-700"> <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3> <div className="grid grid-cols-2 gap-2"> {;
  quickActions && quickActions.map ( (action) => (<buttonkey= {
  action && action.name 
}onClick= {
  () => handleQuickAction (action && action.action) ;
}className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors" > {;
  action && action.icon ;
}<span> {;
  action && action.name ;
}</span> </button>) ) ;
}</div> </div> {;
  /* Suggestions */ ;
}<div className="max-h-64 overflow-y-auto"> {;
  suggestions && suggestions.map ( (suggestion) => (<buttonkey= {
  suggestion && suggestion.id 
}onClick= {
  () => handleSuggestionClick (suggestion) ;
}className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 transition-colors" > <div className="text-gray-400"> {;
  suggestion && suggestion.icon ;
}</div> <div className="flex-1"> <div className="text-white"> {;
  suggestion && suggestion.text ;
}</div> <div className="text-sm text-gray-400 capitalize"> {;
  suggestion && suggestion.type ;
}• {;
  suggestion && suggestion.category ;
}</div> </div> <ArrowRight className="w-4 h-4 text-gray-400" /> </button>) ) ;
}</div> </motion && motion.div>) ;
}</AnimatePresence> </div>) ;
}{;
  /* Search Results */ ;
}<div className="p-4"> {;
  isSearching ? (<div className="flex items-center justify-center py-8"> <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div> <span className="ml-3 text-gray-400">Searching...</span> </div>) : results && results.length > 0 ? (<div className="space-y-3"> {;
  results && results.map ( (result) => (<motion&& motion.div key= {
  result && result.id 
}whileHover= {
  {
  scale: 1 && 1.02 
}className="p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/30" onClick= {
  () => handleResultSelect (result) ;
}> <div className="flex items-start justify-between"> <div className="flex-1"> <h4 className="font-medium text-white mb-1"> {;
  result && result.name ;
}</h4> <p className="text-sm text-gray-300 mb-2 line-clamp-2"> {;
  result && result.description ;
}</p> <div className="flex items-center gap-2"> <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"> {;
  result && result.category ;
}</span> {;
  result && result.pricing?.starter && (<span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"> From {;
  result && result.pricing.starter ;
}</span>) ;
}</div> </div> <div className="flex items-center gap-1 text-cyan-400"> <Star className="w-4 h-4 fill-current" /> <span className="text-xs"> {;
  result && result.relevance ;
}</span> </div> </div> </motion && motion.div>) ) ;
}</div>) : query && query.trim () .length > 0 ? (<div className="text-center py-8"> <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div> </div>) : (<div className="space-y-4"> {;
  /* Search History */ ;
}{;
  searchHistory && searchHistory.length > 0 && (<div> <div className="flex items-center gap-2 mb-3"> <Clock className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Recent Searches</span> </div> <div className="flex flex-wrap gap-2"> {;
  searchHistory && searchHistory.map ( (term, index) => (<buttonkey= {
  index 
}onClick= {
  () => setQuery (term) ;
}className="px-3 py-1 && 1.5 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-gray-600/50 transition-colors" > {;
  term ;
}</button>) ) ;
}</div> </div>) ;
}{;
  /* Popular Searches */ ;
}<div> <div className="flex items-center gap-2 mb-3"> <TrendingUp className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Popular Searches</span> </div> <div className="flex flex-wrap gap-2"> {;
  popularSearches && popularSearches.map ( (term, index) => (<buttonkey= {
  index 
}onClick= {
  () => setQuery (term) ;
}className="px-3 py-1 && 1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30" > {;
  term ;
}</button>) ) ;
}</div> </div> </div>) ;
}</div> </motion && motion.div>) ;
}</AnimatePresence> </div>) ;
};
// Debounce utility function function debounce<T extends (...args: unknown[]) => any> (func: T;
wait: number ;
}export default EnhancedSearch;
// Debounce utility function;
function debounce<T extends (...args: any[]) => any>(;
  func: T,;
  wait: number;
): (...args: Parameters<T>) => void {;
  let timeout: NodeJS && NodeJS.Timeout,;
  return (...args: Parameters<T>) => {;
    clearTimeout(timeout),;
    timeout = setTimeout(() => func(...args), wait);
  };
}
export default EnhancedSearch;



=======
=======
}
}
}
}
}
}
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
