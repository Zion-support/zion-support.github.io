import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Search, Filter, X, SortAsc, SortDesc, GridIcon, List, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { generateSearchSuggestions } from '@/data/marketplaceData';
import { logErrorToProduction, logInfo } from '@/utils/productionLogger';
interface SearchResult {
  id: string,
  title: string,
  description: string,
  type: 'product' | 'talent' | 'blog' | 'service',
  category?: string,
  url?: string,
  image?: string,
  price?: number,
  currency?: string,
  rating?: number,
  tags?: string[],
  date?: string
}

interface SearchFilters {
  types: string[],
  category: string,
  minPrice: number,
  maxPrice: number,
  minRating: number,
  sort: string}

interface SearchResponse {
  results: SearchResult[],
  totalCount: number,
  page: number,
  limit: number,
  query: string,
  hasMore: boolean}

// Highlight search terms in text
const HighlightText: React.FC<{ text: string, searchTerm: string, className?: string }> = ({ 
  text, 
  searchTerm, 
  className = '' 
}) => {
  if (!searchTerm.trim()) {
    return <span className={className}>{text}</span>
  }

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')),
  
  return (
    <span className={className}>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key = $2;
// Search Result Card Component
const SearchResultCard: React.FC<{ 
  result: SearchResult, 
  searchTerm: string, 
  viewMode: 'grid' | 'list' 
}> = ({ result, searchTerm, viewMode }) => {
  const router = useRouter($2);
  const handleClick = $2;
  const cardClass = $2;
  return (
    <div onClick={handleClick} className={cardClass}>
      {result.image && (
        <div className={viewMode === 'grid' ? "mb-3" : "flex-shrink-0"}>
          <img 
            src={result.image} 
            alt={result.title}
            className={viewMode === 'grid' ? "w-full h-48 object-cover rounded" : "w-20 h-20 object-cover rounded"}
          />
        </div>
      )}
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              <HighlightText text={result.title} searchTerm={searchTerm} />
            </h3>
            <Badge variant="secondary" className="text-xs">
              {result.type}
            </Badge>
          </div>
          {result.price && (
            <div className="text-right">
              <span className="font-bold text-primary">
                {result.currency === 'USD' ? '$' : ''}{result.price}
              </span>
              {result.type === 'talent' && <span className="text-sm text-muted-foreground">/hr</span>}
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-3 line-clamp-2">
          <HighlightText text={result.description} searchTerm={searchTerm} />
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {result.category && (
              <Badge variant="outline" className="text-xs">
                {result.category}
              </Badge>
            )}
            {result.tags?.slice(0, 3).map((tag, index) => (
              <Badge key = $2;
// Filter Sidebar Component
const FilterSidebar: React.FC<{
  filters: SearchFilters,
  onFiltersChange: (filters: SearchFilters) => void,
  availableCategories: string[]
}> = ({ filters, onFiltersChange, availableCategories }) => {
  const typeOptions = [
    { id: 'product', label: 'Products' },
    { id: 'talent', label: 'Talent' },
    { id: 'service', label: 'Services' },
    { id: 'blog', label: 'Blog Posts' }
  ],

  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.types, typeId]
      : filters.types.filter($2);
    onFiltersChange({ ...filters, types: newTypes})
  },

  const handlePriceChange = $2;
      minPrice: values[0] ?? 0, 
      maxPrice: values[1] ?? 10000 
    })
  },

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Content Type</h3>
        <div className="space-y-2">
          {typeOptions.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                id={option.id}
                checked={filters.types.includes(option.id)}
                onCheckedChange={(checked) => handleTypeChange(option.id, !!checked)}
              />
              <label htmlFor={option.id} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={filters.category} onValueChange={(value) => 
          onFiltersChange({ ...filters, category: value === 'all' ? '' : value })
        }>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {availableCategories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            min={0}
            max={10000}
            step={50}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.minPrice}</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <Select value={filters.minRating.toString()} onValueChange={(value) => 
          onFiltersChange({ ...filters, minRating: parseFloat(value) })
        }>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value = $2;
// No Results Component
const NoResultsState: React.FC<{ searchTerm: string, onNewSearch: (term: string) => void }> = ({ 
  searchTerm, 
  onNewSearch 
}) => {
  const suggestions = $2;
    "Web Development",
    "Mobile App Development",
    "Data Analysis",
    "UI/UX Design",
    "Blockchain Development"
  ],

  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground mb-6">
          We couldn't find anything matching "{searchTerm}". Try adjusting your search or filters.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Search Suggestions:</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((suggestion, index) => (
              <Button
                key = $2;
// Main Search Results Page Component
export const AdvancedSearchResults: React.FC = () => {
  const router = useRouter($2);
  const [searchTerm, setSearchTerm] = useState($2);
  const [results, setResults] = useState<SearchResult[]>([]),
  const [loading, setLoading] = useState($2);
  const [totalCount, setTotalCount] = useState($2);
  const [currentPage, setCurrentPage] = useState($2);
  const [hasMore, setHasMore] = useState($2);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [showFilters, setShowFilters] = useState($2);
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
  }),

  const suggestions = generateSearchSuggestions($2);
  // Extract available categories from results for filter
  const availableCategories = $2;
    results.forEach(result = $2;
    return Array.from(categories).sort()
  }, [results]),

  // Sync search term with URL
  useEffect(() => {
    if (router.isReady && router.query.q) {
      const urlTerm = $2;
      setSearchTerm(urlTerm)
    }
  }, [router.isReady, router.query.q]),

  // Search function
  const performSearch = async (term: string, page: number = 1, newFilters?: SearchFilters) => {
    if (!term.trim()) {
      setResults($2);
      setTotalCount($2);
      return
    }

    setLoading($2);
    try {
      const searchFilters = $2;
      const params = new URLSearchParams($2);
        limit: '20'
      }),

      if (searchFilters.types.length > 0) {
        params.append('type', searchFilters.types.join())
      }
      if (searchFilters.category) {
        params.append('category', searchFilters.category)
      }
      if (searchFilters.minPrice > 0) {
        params.append('minPrice', searchFilters.minPrice.toString())
      }
      if (searchFilters.maxPrice < 10000) {
        params.append('maxPrice', searchFilters.maxPrice.toString())
      }
      if (searchFilters.minRating > 0) {
        params.append('minRating', searchFilters.minRating.toString())
      }
      if (searchFilters.sort !== 'relevance') {
        params.append('sort', searchFilters.sort)
      }

      const response = await fetch($2);
      const data: SearchResponse = await response.json($2);
      if (page === 1) {
        setResults(data.results)
      } else {
        setResults(prev => [...prev, ...data.results])
      }
      
      setTotalCount($2);
      setCurrentPage($2);
      setHasMore($2);
      logInfo('Search completed', { 
        term, 
        resultCount: data.results.length, 
        totalCount: data.totalCount 
      })
    } catch (error) {
      logErrorToProduction($2);
      setResults($2);
      setTotalCount(0)
    } finally {
      setLoading(false)
    }
  },

  // Search when term or filters change
  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch($2);
      setCurrentPage(1)
    }
  }, [searchTerm, filters]),

  // Handle search input
  const handleSearch = (term: string) => {
    setSearchTerm($2);
    router.push(`/search?q=${encodeURIComponent(term)}`, undefined, { shallow: true})
  },

  // Handle filter changes
  const handleFiltersChange = $2;
  // Load more results
  const loadMore = () => {
    if (hasMore && !loading) {
      performSearch(searchTerm, currentPage + 1)
    }
  },

  // Active filters count
  const activeFiltersCount = $2;
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <EnhancedSearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              onSelectSuggestion={(suggestion) => handleSearch(suggestion.text)}
              searchSuggestions={suggestions}
              placeholder="Search products, talent, services, and more..."
            />
          </div>
          <Button onClick={() => handleSearch(searchTerm)} disabled={!searchTerm.trim()}>
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {searchTerm && (
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Search Results</h1>
              <p className="text-muted-foreground">
                {loading ? 'Searching...' : `${totalCount} results for "${searchTerm}"`}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Sort Options */}
              <Select value={filters.sort} onValueChange={(value) => 
                setFilters({ ...filters, sort: value})
              }>
                <SelectTrigger className = $2;
                      category: '',
                      minPrice: 0,
                      maxPrice: 10000,
                      minRating: 0,
                      sort: 'relevance'
                    })}
                  >
                    Clear All
                  </Button>
                )}
              </div>
              <FilterSidebar
                filters = $2;
export default AdvancedSearchResults, 