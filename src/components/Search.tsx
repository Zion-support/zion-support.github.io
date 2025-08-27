import React, { useState, useRef, useEffect } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import { Link } from 'react-router-dom'
interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}
const searchData: SearchResult[] = [
  {
    title: 'AI Autonomous Systems',
    description: 'Transform your operations with intelligent automation and AI-powered decision making.',
    url: '/services#ai',
    category: 'Services'
  },
  {
    title: 'Cloud Platforms',
    description: 'Build scalable, resilient cloud infrastructure that grows with your business.',
    url: '/services#cloud',
    category: 'Services'
  },
  {
    title: 'Cybersecurity',
    description: 'Zero-trust frameworks, compliance automation, and incident response.',
    url: '/services#cybersecurity',
    category: 'Services'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch to discuss your AI, cloud, and cybersecurity needs.',
    url: '/contact',
    category: 'Company'
  }
]
export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  useEffect(() => {
    if (query.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Search logic is handled by useEffect
    }
  }
  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }
  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Open search"
      >
        <SearchIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
      {/* Search Modal */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4">
            <form onSubmit={handleSearch} className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, solutions..."
                className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
            {/* Search Results */}
            {results.length > 0 && (
              <div className="mt-4 max-h-64 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.url}
                    onClick={clearSearch}
                    className="block p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {result.description}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      {result.category}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {query && results.length === 0 && (
              <div className="mt-4 text-center text-gray-500 dark:text-gray-400 py-4">
                No results found for "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}