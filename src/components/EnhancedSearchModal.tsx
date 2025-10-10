

interface SearchResult {








}
interface SearchModalProps {


}
const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'AI Analytics Dashboard',
    description: 'AI-powered business intelligence and analytics platform with real-time insights and predictive modeling.',
    url: '/ai-analytics-dashboard',
    category: 'Micro SAAS',
    type: 'service',
    popularity: 95,
    lastModified: '2024-01-15'
  },
  {
    id: '2',
    title: 'AI Workflow Automation',
    description: 'Visual workflow builder with AI-powered process optimization and automation capabilities.',
    url: '/ai-workflow-automation',
    category: 'AI Services',
    type: 'service',
    popularity: 88,
    lastModified: '2024-01-10'
  },
  {
    id: '3',
    title: 'About Us',
    description: 'Learn about Zion Tech Group, our mission, team, and commitment to AI innovation.',
    url: '/about',
    category: 'Company',
    type: 'page',
    popularity: 75,
    lastModified: '2024-01-08'
  },
  {
    id: '4',
    title: 'AI Customer Support',
    description: 'Intelligent customer support solutions with natural language processing and automated responses.',
    url: '/ai-customer-support',
    category: 'AI Services',
    type: 'service',
    popularity: 90,
    lastModified: '2024-01-14'
  },
  {
    id: '5',
    title: 'API Documentation',
    description: 'Comprehensive API documentation for integrating with our AI services and platforms.',
    url: '/api-docs',
    category: 'Documentation',
    type: 'documentation',
    popularity: 80,
    lastModified: '2024-01-05'
  }

const recentSearches = [
  'AI Analytics',
  'Workflow Automation',
  'Healthcare AI'

const popularSearches = [
  'AI Services',
  'Quantum Computing',
  'Cybersecurity',
  'Data Analytics'





  const inputRef = useRef<HTMLInputElement>(null)</HTMLInputElement>const</HTMLInputElement> resultsRef = useRef<HTMLDivElement>(null)</HTMLDivElement>useEffect</HTMLDivElement>(() => {
    if (isOpen && inputRef.current) {

    }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.key === 'Escape') {

      } else if (e.key === 'ArrowDown') {

        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev

      } else if (e.key === 'ArrowUp') {


      } else if (e.key === 'Enter' && selectedIndex >= 0) {


      }




  const searchResults = async (searchQuery: string) => {
    if (!searchQuery.trim()) {



    }


    // Simulate API call delay

    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())

    // Sort by popularity and relevance
    const sortedResults = filteredResults.sort((a, b) => {












  const handleResultClick = (result: SearchResult) => {



  const handleSuggestionClick = (suggestion: string) => {



  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':

      case 'Micro SAAS':

      case 'IT Services':

      case 'Company':

      case 'Documentation':

      default:

    }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':

      case 'page':

      case 'blog':

      case 'documentation':

      default:

    }


  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-start justify-center p-4 pt-16">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-400/20">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-cyan-400/20">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, pages, documentation..."
            value={query}
            onChange={handleInputChange}
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
          />
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Content */}
        <div className="max-h-96 overflow-y-auto">
          {showSuggestions && !query && (
            <div className="p-4 space-y-6">
              {/* Recent Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches</span>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                      {search}
                    </button>
                  ))}
                </div>
              </div>
              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular Searches</span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(search)}
                      className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-sm hover:bg-cyan-400/20 hover:text-cyan-400 transition-colors">
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Search Results */}
          {query && (
            <div className="p-4">
              {isSearching ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === selectedIndex
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'hover:bg-slate-800/50 text-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-lg">{getCategoryIcon(result.category)}</span>
                            <h3 className="font-medium">{result.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded ${getTypeColor(result.type)} bg-slate-800/50`}>
                              {result.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mb-2">{result.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{result.category}</span>
                            {result.popularity && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3" />
                                <span>{result.popularity}%</span>
                              </div>
                            )}
                            {result.lastModified && (
                              <span>Updated {result.lastModified}</span>
                            )}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-300 mb-2">No results found</h3>
                  <p className="text-sm text-gray-500">
                    Try searching for something else or check your spelling</span>
                  <div className="text-sm text-gray-500 mt-4">
                    Popular searches: AI Analytics, Quantum Computing, Workflow Automation</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
          </div>
}
          </div>
export default EnhancedSearchModal</p>
  </h3>
  </h3>
  </div>
  </div>