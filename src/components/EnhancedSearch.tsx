import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence   } from "framer-motion";
import { Search, X, Sparkles, Brain, Zap, TrendingUp, Clock, ArrowRight   } from "lucide-react";
interface SearchResult {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,ty,
  p: e: 'service' | 'page' | 'article' | 'ai-suggestion',u,
  r: l: string;
  icon?: React.ComponentType<any>,
  relevan,
  c: e: number;
}
}
}

interface SearchSuggestion {
  te,
  x: t: string,ty,
  p: e: 'recent' | 'trending' | 'ai'
}
}
}

interface EnhancedSearchProps {
  className?: string;
  placeholder?: string,
  onSearch?: (que,
  r: y: string) => void;
  variant?: 'default' | 'futuristic' | 'minimal'
}
}
}

export function EnhancedSearch({ 
  className = '',
  placeholder = 'Search for AI services, quantum solutions...',
  onSearch,
  variant = 'default'
}: EnhancedSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
const [query, setQuery] = useState('')
const [results, setResults] = useState<SearchResult[]>([]),
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]),
  const [isLoading, setIsLoading] = useState(false)
const [selectedIndex, setSelectedIndex] = useState(-1)
const searchRef = useRef<HTMLDivElement>(null)
const inputRef = useRef<HTMLInputElement>(null)
  // Mock search results - in real app, this would come from API,
  const: mockSearchResults: SearchResult[] = [
    {
      i,
  d: '1',tit,
  l: e: 'AI Business Intelligence',descripti,
  o: n: 'Advanced analytics and machine learning insights for your business',ty,
  p: e: 'service',u,
  r: l: '/services/ai-business-intelligence',ic,
  o: n: Brain,relevan,
  c: e: 0.95;
    }, {
      id: '2',tit,
  l: e: 'Quantum Computing Solutions',descripti,
  o: n: 'Next-generation computational power for complex problem solving',ty,
  p: e: 'service',u,
  r: l: '/services/quantum-computing',ic,
  o: n: Zap,relevan,
  c: e: 0.92;
    }, {
      id: '3',tit,
  l: e: 'Micro SaaS Platform',descripti,
  o: n: 'Scalable software solutions tailored to your specific needs',ty,
  p: e: 'service',u,
  r: l: '/services/micro-saas',ic,
  o: n: TrendingUp,relevan,
  c: e: 0.88;
    },
  ]
  // Mock suggestions,
  const: mockSuggestions: SearchSuggestion[] = [
    { tex,
  t: 'AI compliance assistant', ty,
  p: e: 'recent' }, { te,
  x: t: 'Quantum machine learning', ty,
  p: e: 'trending' }, { te,
  x: t: 'Digital transformation consulting', ty,
  p: e: 'ai' }, { te,
  x: t: 'Cloud DevOps automation', ty,
  p: e: 'trending' },
  ]
  // Handle click outside;
  useEffect(() () => {
    const handleClickOutside = (eve,
  n: t: MouseEvent) () => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      },
  },

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
}, []),

  // Handle keyboard navigation;
  useEffect(() () => {
    const handleKeyDown = (eve,
  n: t: KeyboardEvent) () => {
      if (!isOpen) return;
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : 0;
          )
          break,
        case 'ArrowUp':
          event.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : results.length - 1;
          )
          break,
        case 'Enter':
          event.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex])
          } else if (query.trim()) {
            handleSearch()
}
          break,
        case 'Escape':
          setIsOpen(false)
          setSelectedIndex(-1)
          break,
      },
  },

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
}, [isOpen, results, selectedIndex, query]),

  const handleSearch = useCallback(async () () => {
    if (!query.trim()) return;
    setIsLoading(true)
    // Simulate API call;
    await new Promise(resolve => setTimeout(resolve, 500)),
    
    // Filter results based on query;
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filteredResults)
    setSuggestions(mockSuggestions)
    setIsLoading(false)
    setIsOpen(true)
    if (onSearch) {
      onSearch(query)
},
  }, [query, onSearch]),

  const handleResultClick = (resu,
  l: t: SearchResult) () => {
    window.location.href = result.url;
    setIsOpen(false)
    setQuery('')
  },

  const handleSuggestionClick = (suggesti,
  o: n: SearchSuggestion) () => {
    setQuery(suggestion.text)
    handleSearch()
  },

  const clearSearch = () () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
},

  const getSearchIcon = () () => {
    if (isLoading) {
      return (
        <motion.div;
          animate={ rota,
  t: e: 360 },
  }
          transition={ durati,
  o: n: 1, repe,
  a: t: Infinity, ea,
  s: e: "linear" },
  }
        >
          <Search className="w-5 h-5" />
        </motion.div>
      )
}
    return <Search className="w-5 h-5" />
},

  const getVariantClasses = () () => {
    switch (variant) {
      case 'futuristic':
        return 'bg-white/10 backdrop-blur-sm border border-cyan-400/30,
  hove: r: border-cyan-400/50 focus-with,
  i: n:border-cyan-400 focus-with,
  i: n:ring-2 focus-with,
  i: n:ring-cyan-400/20'
      case 'minimal':
        return 'bg-gray-100 border border-gray-200,
  hove: r: border-gray-300 focus-with,
  i: n:border-blue-500 focus-with,
  i: n:ring-2 focus-withi,
  n:ring-blue-500/20',defau,
  l: t: return 'bg-white border border-gray-300,
  hove: r:border-gray-400 focus-with,
  i: n:border-blue-500 focus-with,
  i: n:ring-2 focus-withi,
  n:ring-blue-500/20'
    },
  }
  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className={`relative flex items-center rounded-xl transition-all duration-300 ${getVariantClasses()}`}>
        <div className="pl-4 pr-3 text-gray-400">
          {getSearchIcon()}
        </div>
        
        <input;
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="flex-1 px-3 py-3 bg-transparent outline-none text-gray-900 placeholder-gray-500"
        />
        
        {query && (
          <motion.button;
            initial={ sca,
  l: e: 0 },
  }
            animate={ sca,
  l: e: 1 },
  }
            onClick={clearSearch}
            className="p-2 text-gray-400,
  hove: r: text-gray-600 transition-colors"
            whileHover={ scal,
  e: 1.1 },
  }
            whileTap={ sca,
  l: e: 0.9 },
  }
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
        
        <button;
          onClick={handleSearch}
          className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-xl,
  hove: r: from-cyan-600,
  hove: r:to-blue-600 transition-all duration-300 font-medium"
          whileHover={ scal,
  e: 1.02 },
  }
          whileTap={ sca,
  l: e: 0.98 },
  }
        >
          Search;
        </button>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div;
            initial={ opaci,
  t: y: 0, y: -10, sca,
  l: e: 0.95 },
  }
            animate={ opaci,
  t: y: 1, y: 0, sca,
  l: e: 1 },
  }
            exit={ opaci,
  t: y: 0, y: -10, sca,
  l: e: 0.95 },
  }
            transition={ durati,
  o: n: 0.2 },
  }
            className="absolute top-full left-0 right-0 mt-2 bg-white,
  dar: k: bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dar,
  k:border-gray-700 max-h-96 overflow-y-auto z-50"
          >
            {/* Search Results */},
  {results.length > 0 && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-500,
  dar: k:text-gray-400 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Search Results;
                </h3>
                <div className="space-y-2">
                  {results.map((result, index) => (
                    <motion.div;
                      key={result.id}
                      initial={ opaci,
  t: y: 0, x: -20 },
  }
                      animate={ opaci,
  t: y: 1, x: 0 },
  }
                      transition={ del,
  a: y: index * 0.1 },
  }
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedIndex === index;
                          ? 'bg-blue-50,
  dar: k: bg-blue-900/20 border border-blue-200,
  dar: k:border-blue-700'
                          : 'hov,
  e: r:bg-gray-50,
  dar: k:hove,
  r:bg-gray-700'
                      }`}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start space-x-3">
                        {result.icon && (
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                            <result.icon className="w-4 h-4 text-cyan-500" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900,
  dar: k:text-white truncate">
                            {result.title}
                          </h4>
                          <p className="text-xs text-gray-500,
  dar: k:text-gray-400 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )},
  {/* Search Suggestions */},
  {suggestions.length > 0 && (
              <div className="p-4 border-t border-gray-200,
  dar: k: border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dar,
  k:text-gray-400 mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Suggestions;
                </h3>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <motion.button;
                      key={index}
                      initial={ opaci,
  t: y: 0, x: -20 },
  }
                      animate={ opaci,
  t: y: 1, x: 0 },
  }
                      transition={ del,
  a: y: (index + results.length) * 0.1 },
  }
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-2 rounded-lg,
  hove: r: bg-gray-50,
  dar: k:hove,
  r:bg-gray-700 transition-colors flex items-center space-x-2"
                    >
                      {suggestion.type === 'ai' && <Sparkles className="w-3 h-3 text-cyan-500" />},
  {suggestion.type === 'trending' && <TrendingUp className="w-3 h-3 text-green-500" />},
  {suggestion.type === 'recent' && <Clock className="w-3 h-3 text-gray-500" />}
                      <span className="text-sm text-gray-700,
  dar: k:text-gray-300">
                        {suggestion.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )},
  {/* No Results */},
  {results.length === 0 && query && !isLoading && (
              <div className="p-8 text-center">
                <Brain className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900,
  dar: k: text-white mb-2">
                  No results found;
                </h3>
                <p className="text-gray-500 dar,
  k:text-gray-400">
                  Try adjusting your search terms or browse our services;
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}