import React, { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'service' | 'blog' | 'component';
  url: string;
  relevance: number;
}

const AdvancedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchData: SearchResult[] = [
    // Revolutionary Tech Pages
    { id: '1', title: 'Revolutionary Tech Breakthrough 2030', description: 'Consciousness computing and interdimensional technology', type: 'page', url: '/pages/RevolutionaryTechBreakthrough2030', relevance: 0.95 },
    { id: '2', title: 'Ultimate AI Consciousness 2032', description: 'Advanced AI consciousness levels and applications', type: 'page', url: '/pages/UltimateAIConsciousness2032', relevance: 0.92 },
    { id: '3', title: 'Quantum Reality Engine 2035', description: 'Quantum reality manipulation capabilities', type: 'page', url: '/pages/QuantumRealityEngine2035', relevance: 0.90 },
    
    // AI Services
    { id: '4', title: 'AI Autonomous Business Manager', description: 'Autonomous business process management', type: 'service', url: '/services/ai-autonomous-business-manager', relevance: 0.88 },
    { id: '5', title: 'AI Healthcare Platform', description: 'Advanced healthcare AI solutions', type: 'service', url: '/services/ai-healthcare-platform', relevance: 0.85 },
    { id: '6', title: 'AI Cybersecurity Solutions', description: 'Next-generation cybersecurity AI', type: 'service', url: '/services/ai-cybersecurity', relevance: 0.87 },
    
    // Blog Posts
    { id: '7', title: 'Revolutionary Tech Blog 2027', description: 'Latest insights on revolutionary technology', type: 'blog', url: '/pages/RevolutionaryTechBlog2027', relevance: 0.82 },
    { id: '8', title: 'Future Tech Trends 2025', description: 'Emerging technology trends and predictions', type: 'blog', url: '/pages/FutureTechTrends2025', relevance: 0.80 },
    
    // Components
    { id: '9', title: 'Interactive Tech Showcase', description: 'Interactive technology demonstration components', type: 'component', url: '/components/interactive-tech-showcase', relevance: 0.75 },
    { id: '10', title: 'Revolutionary Content Banner', description: 'Promotional banners for revolutionary content', type: 'component', url: '/components/revolutionary-content-banner', relevance: 0.73 }
  ];

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filteredResults = searchData
        .filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(item => ({
          ...item,
          relevance: item.relevance * (1 + Math.random() * 0.1) // Add some randomness
        }))
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 8);

      setResults(filteredResults);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      search(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.url;
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search revolutionary technology, AI services, and more..."
          className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {isLoading && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-500"></div>
          </div>
        )}
      </div>

      {isOpen && (query || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="p-3 hover:bg-purple-50 rounded-lg cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        result.type === 'page' ? 'bg-blue-100 text-blue-600' :
                        result.type === 'service' ? 'bg-green-100 text-green-600' :
                        result.type === 'blog' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {result.type.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">
                        {result.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          result.type === 'page' ? 'bg-blue-100 text-blue-700' :
                          result.type === 'service' ? 'bg-green-100 text-green-700' :
                          result.type === 'blog' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {result.type}
                        </span>
                        <span className="text-xs text-gray-500">
                          {Math.round(result.relevance * 100)}% match
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query && !isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <p>No results found for "{query}"</p>
              <p className="text-xs mt-1">Try different keywords or check spelling</p>
            </div>
          ) : null}
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AdvancedSearch;