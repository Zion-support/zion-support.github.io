import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Zap, Brain, Server, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {

  id: string;
  title: string;
  description: string;
  url: string;
  category: 'service' | 'solution' | 'page' | 'resource';
  icon: React.ComponentType<any>;
  relevance: number;
}

export function GlobalSearch() {

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Sample search data - in a real app, this would come from an API or search service
  const searchData: SearchResult[] = [
    // AI Services
    {

      id: 'ai-enterprise-automation',
      title: 'AI Enterprise Automation Platform',
      description: 'Transform your business operations with intelligent automation',
      url: '/services/ai-enterprise-automation-platform',
      category: 'service',
      icon: Brain,
      relevance: 100
    },
    {

      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response powered by AI',
      url: '/services/ai-cybersecurity-platform',
      category: 'service',
      icon: Zap,
      relevance: 95
    },
    {

      id: 'ai-healthcare',
      title: 'AI Healthcare Platform',
      description: 'Revolutionary healthcare solutions with AI technology',
      url: '/services/ai-healthcare-platform',
      category: 'service',
      icon: Brain,
      relevance: 90
    },
    // IT Services
    {

      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and development operations',
      url: '/services/cloud-devops',
      category: 'service',
      icon: Server,
      relevance: 85
    },
    {

      id: 'blockchain',
      title: 'Blockchain Enterprise Solutions',
      description: 'Secure and transparent blockchain implementations',
      url: '/services/blockchain-enterprise-solutions',
      category: 'service',
      icon: Server,
      relevance: 80
    },
    // Solutions
    {

      id: 'healthcare-solutions',
      title: 'Healthcare Solutions',
      description: 'Comprehensive healthcare technology solutions',
      url: '/solutions/healthcare',
      category: 'solution',
      icon: Target,
      relevance: 75
    },
    {

      id: 'financial-solutions',
      title: 'Financial Solutions',
      description: 'Advanced financial technology and automation',
      url: '/solutions/financial',
      category: 'solution',
      icon: Target,
      relevance: 70
    }
  ];

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {

        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {

      if (event.key === 'Escape') {

        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {

    if (query.trim().length === 0) {

      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    const timeoutId = setTimeout(() => {

      const filteredResults = searchData;
        .filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        )
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 8);

      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleKeyDown = (event: React.KeyboardEvent) => {

    if (event.key === 'ArrowDown') {

      event.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (event.key === 'ArrowUp') {

      event.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (event.key === 'Enter' && selectedIndex >= 0) {

      event.preventDefault();
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (result: SearchResult) => {

    navigate(result.url);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const openSearch = () => {

    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const getCategoryColor = (category: string) => {

    switch (category) {

      case 'service': return 'text-cyan-500 bg-cyan-50';
      case 'solution': return 'text-purple-500 bg-purple-50';
      case 'page': return 'text-blue-500 bg-blue-50';
      case 'resource': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getCategoryLabel = (category: string) => {

    switch (category) {

      case 'service': return 'Service';
      case 'solution': return 'Solution';
      case 'page': return 'Page';
      case 'resource': return 'Resource';
      default: return 'Content';
    }
  };

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={openSearch}
        className="flex items-center space-x-2 px-4 py-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-all duration-300"
        aria-label="Open global search"
      >
        <Search className="h-5 w-5" />
        <span className="hidden lg:block">Search</span>
        <kbd className="hidden xl:inline-flex items-center px-2 py-1 text-xs font-medium text-zion-slate-light bg-zion-slate-dark border border-zion-slate-light/20 rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              ref={searchRef}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            >
              {/* Search Input */}
              <div className="relative">
                <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200">
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search for services, solutions, or content..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 text-gray-900 placeholder-gray-500 outline-none text-lg"
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="ml-3 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Search Results */}
                  {query.trim().length > 0 && (
                    <div className="max-h-96 overflow-y-auto">
                      {isLoading ? (
                        <div className="p-8 text-center text-gray-500">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zion-500 mx-auto mb-2"></div>
                          Searching...
                        </div>
                      ) : results.length > 0 ? (
                        <div className="p-2">
                          {results.map((result, index) => {

                            const Icon = result.icon;
                            return (
                              <motion.div
                                key={result.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${

                                  index === selectedIndex
                                    ? 'bg-zion-50 border border-zion-200'
                                    : 'hover:bg-gray-50'
                                }`}
                                onClick={() => handleResultClick(result)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="flex-shrink-0 mt-1">
                                    <Icon className="h-5 w-5 text-zion-500" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <h3 className="text-sm font-medium text-gray-900 truncate">
                                        {result.title}
                                      </h3>
                                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(result.category)}`}>
                                        {getCategoryLabel(result.category)}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-2">
                                      {result.description}
                                    </p>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <ArrowRight className="h-4 w-4 text-gray-400" />
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-8 text-center text-gray-500">
                          <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-lg font-medium">No results found</p>
                          <p className="text-sm">Try adjusting your search terms</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick Actions */}
                  {query.trim().length === 0 && (
                    <div className="p-4 border-t border-gray-100">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => navigate('/services')}
                          className="flex items-center space-x-2 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Zap className="h-4 w-4 text-zion-500" />
                          <span>Browse Services</span>
                        </button>
                        <button
                          onClick={() => navigate('/solutions')}
                          className="flex items-center space-x-2 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Target className="h-4 w-4 text-purple-500" />
                          <span>View Solutions</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}