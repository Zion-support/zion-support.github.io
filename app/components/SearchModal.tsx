'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight, Clock, TrendingUp } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onSearch?: (query: string) => void
  recentSearches?: string[]
  popularSearches?: string[]
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSearch,
  recentSearches = [],
  popularSearches = []
}) => {
  const [query, setQuery] = useState('')
  const [filteredRecent, setFilteredRecent] = useState<string[]>([])
  const [filteredPopular, setFilteredPopular] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 0) {
      setFilteredRecent(
        recentSearches.filter(search =>
          search.toLowerCase().includes(query.toLowerCase())
        )
      )
      setFilteredPopular(
        popularSearches.filter(search =>
          search.toLowerCase().includes(query.toLowerCase())
        )
      )
    } else {
      setFilteredRecent(recentSearches)
      setFilteredPopular(popularSearches)
    }
  }, [query, recentSearches, popularSearches])

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim())
      onClose()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    handleSearch(suggestion)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-gray-700">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for anything..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-96 overflow-y-auto">
            {query.length === 0 ? (
              <div className="space-y-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <h3 className="flex items-center text-sm font-semibold text-gray-400 mb-3">
                      <Clock className="h-4 w-4 mr-2" />
                      Recent Searches
                    </h3>
                    <div className="space-y-1">
                      {recentSearches.slice(0, 5).map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(search)}
                          className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <span>{search}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                {popularSearches.length > 0 && (
                  <div>
                    <h3 className="flex items-center text-sm font-semibold text-gray-400 mb-3">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Popular Searches
                    </h3>
                    <div className="space-y-1">
                      {popularSearches.slice(0, 5).map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(search)}
                          className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <span>{search}</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {/* Search Results */}
                {(filteredRecent.length > 0 || filteredPopular.length > 0) ? (
                  <>
                    {filteredRecent.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Recent</h3>
                        <div className="space-y-1">
                          {filteredRecent.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(search)}
                              className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <span>{search}</span>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {filteredPopular.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Popular</h3>
                        <div className="space-y-1">
                          {filteredPopular.map((search, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(search)}
                              className="w-full flex items-center justify-between p-3 text-left text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <span>{search}</span>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No results found for &quot;{query}&quot;</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <button
              onClick={() => handleSearch()}
              disabled={!query.trim()}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
            >
              Search
              <Search className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal