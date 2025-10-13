import React, { useState, useCallback, useEffect } from 'react';
import { Search, X, ArrowRight, Zap, Brain, Globe } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: 'ai' | 'micro-saas' | '5g' | 'general';
  icon: React.ReactNode;
}

const EnhancedSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData: SearchResult[] = [
    // AI Services
    { title: 'AI Analytics', description: 'AI-powered business intelligence and analytics solutions', url: '/ai-analytics', category: 'ai', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Cybersecurity', description: 'Advanced AI-powered cybersecurity protection', url: '/ai-cybersecurity', category: 'ai', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Content Generation', description: 'Automated content creation with AI', url: '/ai-content-generation', category: 'ai', icon: <Brain className="w-4 h-4" /> },
    { title: 'AI Customer Support', description: 'AI-powered customer support solutions', url: '/ai-customer-support', category: 'ai', icon: <Brain className="w-4 h-4" /> },
    
    // Micro SAAS
    { title: 'Zion Analytics Pro', description: 'AI-powered business intelligence platform', url: '/zion-analytics-pro', category: 'micro-saas', icon: <Zap className="w-4 h-4" /> },
    { title: 'Zion Security Shield', description: 'Advanced cybersecurity protection suite', url: '/zion-security-shield', category: 'micro-saas', icon: <Zap className="w-4 h-4" /> },
    { title: 'Zion Cloud Vault', description: 'Secure cloud storage solution', url: '/zion-cloud-vault', category: 'micro-saas', icon: <Zap className="w-4 h-4" /> },
    
    // 5G Solutions
    { title: '5G Network Infrastructure', description: 'Next-generation 5G network solutions', url: '/5g-network-infrastructure', category: '5g', icon: <Globe className="w-4 h-4" /> },
    { title: '5G IoT Solutions', description: '5G-powered Internet of Things solutions', url: '/5g-iot-solutions', category: '5g', icon: <Globe className="w-4 h-4" /> },
    { title: '5G Edge Computing', description: 'Edge computing with 5G technology', url: '/5g-edge-computing', category: '5g', icon: <Globe className="w-4 h-4" /> },
    
    // General
    { title: 'About Us', description: 'Learn about Zion Tech Group', url: '/about', category: 'general', icon: <Search className="w-4 h-4" /> },
    { title: 'Contact', description: 'Get in touch with our team', url: '/contact', category: 'general', icon: <Search className="w-4 h-4" /> },
    { title: 'Services', description: 'Our comprehensive service offerings', url: '/services', category: 'general', icon: <Search className="w-4 h-4" /> },
  ];

  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 150);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'text-cyan-400 bg-cyan-400/10';
      case 'micro-saas': return 'text-purple-400 bg-purple-400/10';
      case '5g': return 'text-green-400 bg-green-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ai': return 'AI Services';
      case 'micro-saas': return 'Micro SAAS';
      case '5g': return '5G Solutions';
      default: return 'General';
    }
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors text-gray-300 hover:text-white"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-slate-800 rounded-xl shadow-2xl border border-gray-700 w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Search Header */}
            <div className="flex items-center p-4 border-b border-gray-700">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search services, solutions, or pages..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="ml-3 p-1 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto"></div>
                  <p className="text-gray-400 mt-2">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <a
                      key={index}
                      href={result.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex-shrink-0 mr-3">
                        {result.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-white font-medium truncate group-hover:text-cyan-400 transition-colors">
                            {result.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(result.category)}`}>
                            {getCategoryLabel(result.category)}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm truncate">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-white font-medium mb-2">No results found</h3>
                  <p className="text-gray-400">Try searching with different keywords</p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-white font-medium mb-2">Search Zion Tech Group</h3>
                  <p className="text-gray-400">Find AI services, Micro SAAS solutions, and 5G technology</p>
                </div>
              )}
            </div>

            {/* Search Footer */}
            <div className="p-4 border-t border-gray-700 bg-gray-800/50">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Press <kbd className="px-1 py-0.5 bg-gray-700 rounded text-xs">Esc</kbd> to close</span>
                <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default EnhancedSearch;
