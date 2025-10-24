'use client'
import React, { useState, useEffect } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onSearch?: (query: string) => void
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSearch
}) => {
  const [query, setQuery] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const searches = localStorage.getItem('recent-searches')
    if (searches) {
      setRecentSearches(JSON.parse(searches))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      const newSearches = [query.trim(), ...recentSearches.filter(s => s !== query.trim())].slice(0, 5)
      setRecentSearches(newSearches)
      localStorage.setItem('recent-searches', JSON.stringify(newSearches))
      
      if (onSearch) {
        onSearch(query.trim())
      }
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Search</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for services, solutions, or information..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </form>

          {recentSearches.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Searches</h3>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(search)
                      if (onSearch) {
                        onSearch(search)
                      }
                      onClose()
                    }}
                    className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{search}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal