

 //Mock search results - in real app, this would come from API const mockSearchResults: SearchResult[] = [ {;








interface SearchResult {

  }
}



  showFilters?: boolean;}
}




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


  // Mock search results - in real app, this would come from API

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

    };

    {
      id: '2',
      name: 'Quantum AI Hybrid Computing',
      description: 'Quantum-powered AI with consciousness integration and quantum supremacy.',
      category: 'Quantum Computing',
      type: 'Platform',
      slug: '/quantum-ai-hybrid-computing',
      relevance: 92,
      features: ['Quantum SupremacyAI IntegrationHybrid Computing'],
      pricing: { starter: '$1,499/month', enterprise: 'Contact Sales' }

    };

    {
      id: '3',
      name: 'Quantum Cybersecurity Intelligence',
      description: 'Quantum-resistant security with AI consciousness and threat prediction.',
      category: 'Cybersecurity',
      type: 'Platform',
      slug: '/quantum-cybersecurity-intelligence',
      relevance: 88,
      features: ['Quantum ResistanceThreat PredictionAI Security'],
      pricing: { starter: '$799/month', enterprise: 'Contact Sales' }
    }

  ];


  const categories = [
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'business', name: 'Business', icon: Rocket, color: 'from-emerald-500 to-teal-500' }

  ];


}, 300);
}, 300);
[selected_filters]);
[selected_filters]);
[selectedFilters]);
[selectedFilters]);
//Close search on outside click useEffect ( () => {

}, 300);

  if (searchRef.current && !searchRef.current.contains (event.target as Node) ) {
  
,) => {
  return $3;}
}
}, []);


function debounce<T extends (...args: any[]) => any>(
  func: T
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {



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
}</AnimatePresence> </div>) 
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






  categories && categories.map ( (category) => (<buttonkey= {}
  category && category.id
}onClick= {}

  () => toggleFilter (category && category.id) ;
}className= {
  `flex items-center gap-2 px-3 py-1 && 1.5 rounded-full text-xs font-medium transition-all duration-300 $ {`
  selectedFilters && selectedFilters.includes (category && category.id) ? `bg-gradient-to-r $ {
  category && category.color ;`
}text-white`: bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 ;`
}` ;
}> <category && category.icon className=w-3 h-3" /> {
  category && category.name ;
}</button>) ;"
}<div className=flex-shrink-0 pr-4> <buttononClick= {}
  () => handleSearch () ;
}disabled= {;
  isSearching || !query && query.trim () ;"
}className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" > {;'
  isSearching ? 'Searching...' : 'Search' ;
}</button> </div> </div> {;

}exit= {
  {
// Debounce utility function
  showSuggestions && suggestions && suggestions.length > 0 && (<motion&& motion.div initial= {}
  {}
  opacity: 0, y: -10;
}animate= {}
  {}
  opacity: 1, y: 0;
}exit= {}
  {}
// Debounce utility function;
function debounce<T extends (...args: any[]) => any>(
  func: T;
  wait: number;
): (...args: Parameters<T>) => void {}
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {"
}className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-10"> {;
  /* Quick Actions */ ;"
}<div className="p-4 border-b border-gray-700"> <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3> <div className="grid grid-cols-2 gap-2"> {;
  quickActions && quickActions.map ( (action) => (<buttonkey= {}
  action && action.name;
}onClick= {}
  () => handleQuickAction (action && action.action) ;"
}className="flex items-center space-x-2 p-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors" > {;
  action && action.icon ;
}<span> {;
  action && action.name ;
}</span> </button>) ) ;
}</div> </div> {;
  /* Suggestions */ ;"
}<div className="max-h-64 overflow-y-auto"> {;
  suggestions && suggestions.map ( (suggestion) => (<buttonkey= {}
  suggestion && suggestion.id;
}onClick= {}
  () => handleSuggestionClick (suggestion) ;"
}className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 transition-colors" > <div className="text-gray-400"> {;
  suggestion && suggestion.icon ;"
}</div> <div className="flex-1"> <div className="text-white"> {;
  suggestion && suggestion.text ;"
}</div> <div className="text-sm text-gray-400 capitalize"> {;
  suggestion && suggestion.type ;
}• {;
  suggestion && suggestion.category ;"
}</div> </div> <ArrowRight className="w-4 h-4 text-gray-400" /> </button>) ) ;
}</div> </motion && motion.div>) ;
}</AnimatePresence> </div>) ;
}{;
  /* Search Results */ ;"
}<div className="p-4"> {;"
  isSearching ? (<div className="flex items-center justify-center py-8"> <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div> <span className="ml-3 text-gray-400">Searching...</span> </div>) : results && results.length > 0 ? (<div className="space-y-3"> {;
  results && results.map ( (result) => (<motion&& motion.div key= {}
  result && result.id;
}whileHover= {}
  {}
  scale: 1 && 1.02 "
}className="p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all duration-300 border border-transparent hover:border-cyan-400/30" onClick= {}
  () => handleResultSelect (result) ;"
}> <div className="flex items-start justify-between"> <div className="flex-1"> <h4 className="font-medium text-white mb-1"> {;
  result && result.name ;"
}</h4> <p className="text-sm text-gray-300 mb-2 line-clamp-2"> {;
  result && result.description ;"
}</p> <div className="flex items-center gap-2"> <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"> {;
  result && result.category ;
}</span> {;"
  result && result.pricing?.starter && (<span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full"> From {;
  result && result.pricing.starter ;
}</span>) ;"
}</div> </div> <div className="flex items-center gap-1 text-cyan-400"> <Star className="w-4 h-4 fill-current" /> <span className="text-xs"> {;
  result && result.relevance ;
}</span> </div> </div> </motion && motion.div>) ) ;"
}</div>) : query && query.trim () .length > 0 ? (<div className="text-center py-8"> <div className="text-sm text-gray-500">Try adjusting your search terms or filters</div> </div>) : (<div className="space-y-4"> {;
  /* Search History */ ;
}{;"
  searchHistory && searchHistory.length > 0 && (<div> <div className="flex items-center gap-2 mb-3"> <Clock className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Recent Searches</span> </div> <div className="flex flex-wrap gap-2"> {;
  searchHistory && searchHistory.map ( (term, index) => (<buttonkey= {}
  index;
}onClick= {}
  () => setQuery (term) ;"
}className="px-3 py-1 && 1.5 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-gray-600/50 transition-colors" > {;
  term ;
}</button>) ) ;
}</div> </div>) ;
}{;
  /* Popular Searches */ ;"
}<div> <div className="flex items-center gap-2 mb-3"> <TrendingUp className="w-4 h-4 text-gray-400" /> <span className="text-sm font-medium text-gray-300">Popular Searches</span> </div> <div className="flex flex-wrap gap-2"> {;
  popularSearches && popularSearches.map ( (term, index) => (<buttonkey= {}
  index;
}onClick= {}
  () => setQuery (term) ;"
}className="px-3 py-1 && 1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30" > {;
  term ;
}</button>) ) ;
}</div> </div> </div>) ;
}</div> </motion && motion.div>) ;
}</AnimatePresence> </div>) 
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
    timeout = setTimeout(() => func(...args), wait)
};



