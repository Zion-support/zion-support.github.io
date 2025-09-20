'use client'

import React, { useState, useEffect } from 'react'
import { Search, Sparkles, ArrowRight } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
  relevance: number
}

const AIPoweredSearch: React.FC = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([]);

  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Mock search results - in production, this would connect to a real AI search API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Automation Solutions',
      description: 'Comprehensive AI automation services to streamline your business operations',
      category: 'AI Services',
      url: '/services/ai-automation',
      relevance: 0.95
    },
    {
      id: '2',
      title: 'Micro SaaS Development',
      description: 'Custom micro SaaS applications built for rapid deployment and scaling',
      category: 'Development',
      url: '/services/micro-saas',
      relevance: 0.88
    },
    {
      id: '3',
      title: 'Enterprise AI Consulting',
      description: 'Strategic AI consulting to transform your enterprise operations',
      category: 'Consulting',
      url: '/services/ai-consulting',
      relevance: 0.82
    },
    {
      id: '4',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing services for complex problem solving',
      category: 'Advanced Tech',
      url: '/services/quantum-computing',
      relevance: 0.79
    },
    {
      id: '5',
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      category: 'Analytics',
      url: '/services/ai-analytics',
      relevance: 0.76
    }
  ]

  const handleSearch = async (searchQuery: string) : any => {
    if (!searchQuery.trim()) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)
    
    // Simulate AI search with relevance scoring
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const filteredResults = mockResults
      .filter(result => 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(result => ({
        ...result,
        relevance: result.relevance + (Math.random() * 0.1) // Add some variation
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 5)

    setResults(filteredResults)
    setIsSearching(false)
    setShowResults(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) : any => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 2) {
      handleSearch(value)
    } else {
      setResults([])
      setShowResults(false)
    }
  }

  const handleResultClick = (result: SearchResult) : any => {
    setShowResults(false)
    setQuery(result.title)
    // In a real app, you'd navigate to the result URL
    console.log('Navigating to:', result.url)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isSearching ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Ask AI about our services, solutions, or technology..."
          className="w-full pl-12 pr-16 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white/90 backdrop-blur-sm"
        />
        
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <Sparkles className="h-5 w-5 text-blue-500" />
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
              AI-powered search results
            </div>
          </div>
          
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="p-4 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {result.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {result.description}
                  </p>
                  <div className="flex items-center">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {result.category}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      {Math.round(result.relevance * 100)}% match
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
          
          <div className="p-4 bg-gray-50 rounded-b-xl">
            <div className="text-xs text-gray-500 text-center">
              Powered by AI • Search across all our services and solutions
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && results.length === 0 && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6 text-center">
          <div className="text-gray-500 mb-2">No results found for "{query}"</div>
          <div className="text-sm text-gray-400">
            Try searching for "AI automation", "micro SaaS", or "enterprise solutions"
          </div>
        </div>
      )}
    </div>
  )
}

export default AIPoweredSearch