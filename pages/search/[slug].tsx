import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react'
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import { TalentCard } from '@/components/talent/TalentCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchEmptyState } from '@/components/marketplace/EmptyState';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { TALENT_PROFILES } from '@/data/talentData';
import { BLOG_POSTS } from '@/data/blog-posts';
import { useDebounce } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
interface BaseSearchResult {
  id: string,
  title: string,
  description?: string,
  slug: string,
  image?: string,
  author?: {
    name: string,
    avatar?: string
  },
  tags?: string[],
  category?: string,
  date?: string
}

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment',
  price?: number,
  rating?: number
}

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent',
  rating?: number
}

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog'
}

interface CategorySearchResult extends BaseSearchResult {
  type: 'category'
}

type SearchResult = $2;
// Type guard functions
const hasPrice = $2;
const hasRating = $2;
interface SearchResultsPageProps {
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number}

interface OfflineFilters {
  sortBy?: string,
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  minRating?: number
}

function offlineSearch(
  query: string,
  page = $2;
  limit = $2;
  filters: OfflineFilters = {}
): { results: SearchResult[], totalCount: number} {
  const term = query.toLowerCase().trim($2);
  const match = (text?: string) => text?.toLowerCase().includes($2);
  const productResults = $2;
  ).map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description || '',
    type: 'product' as const,
    slug: p.id,
    image: p.images?.[0],
    price: p.price ?? undefined,
    rating: p.rating,
    author: p.author
      ? { name: p.author.name, avatar: p.author.avatarUrl }
      : undefined,
    tags: p.tags,
    category: p.category,
    date: p.createdAt})),

  const talentResults = $2;
  ).map((t) => ({
    id: t.id,
    title: t.full_name,
    description: t.professional_title || '',
    type: 'talent' as const,
    slug: t.id,
    image: t.profile_picture_url,
    rating: t.average_rating,
    author: { name: t.full_name, avatar: t.profile_picture_url },
    tags: t.skills,
    category: t.location,
    date: undefined})),

  const blogResults = $2;
  ).map((b) => ({
    id: b.slug,
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featuredImage,
    tags: b.tags,
    category: 'Blog',
    date: b.publishedDate})),

  let all = [...productResults, ...talentResults, ...blogResults],

  if (filters.category) {
    all = all.filter(r => r.category === filters.category)
  }
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) >= filters.minPrice!
      }
      return true
    })
  }
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
  }

  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = $2;
          const bPrice = $2;
          return aPrice - bPrice
        }),
        break,
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = $2;
          const bPrice = $2;
          return bPrice - aPrice
        }),
        break,
      case 'rating':
        all.sort((a, b) => {
          const aRating = $2;
          const bRating = $2;
          return bRating - aRating
        }),
        break,
      default: break}
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title))
  }
  const start = $2;
  const paginated = all.slice($2);
  return { results: paginated, totalCount: all.length }
}

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount}: SearchResultsPageProps) {
  const router = useRouter($2);
  const { isAuthenticated } = useAuth($2);
  const [results, setResults] = useState<SearchResult[]>(initialResults),
  const [loading, setLoading] = useState($2);
  const [searchQuery, setSearchQuery] = useState($2);
  const debouncedQuery = useDebounce($2);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [currentPage, setCurrentPage] = useState($2);
  const [sortBy, setSortBy] = useState($2);
  const [categoryFilter, setCategoryFilter] = useState($2);
  const [minPrice, setMinPrice] = useState($2);
  const [maxPrice, setMaxPrice] = useState($2);
  const [minRating, setMinRating] = useState($2);
  const [totalResults, setTotalResults] = useState($2);
  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading($2);
      logInfo($2);
      const params = new URLSearchParams($2);
        limit: '12',
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append($2);
      if (minPrice) params.append($2);
      if (maxPrice) params.append($2);
      if (minRating) params.append($2);
      const response = $2;
      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json($2);
      logInfo($2);
      setTotalResults($2);
      if (page === 1) {
        setResults(data.results || [])
      } else {
        setResults((prev) => [...prev, ...(data.results || [])])
      }
    } catch (error) {
      logErrorToProduction($2);
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy,
        category: categoryFilter !== 'all' ? categoryFilter : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minRating: minRating ? Number(minRating) : undefined}),
      setTotalResults($2);
      if (page === 1) {
        setResults(offline.results)
      } else {
        setResults((prev) => [...prev, ...offline.results])
      }
    } finally {
      setLoading(false)
    }
  },

  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery($2);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
        shallow: true}),
      setCurrentPage(1)
    }
  },

  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, 1)
    } else {
      setResults($2);
      setTotalResults(0)
    }
  }, [debouncedQuery]),

  // Load more results
  const loadMore = $2;
    setCurrentPage($2);
    fetchResults(searchQuery, nextPage)
  },

  const categories = $2;
  ),

  const filteredResults = $2;
  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [],
      acc[result.type]!.push($2);
      return acc
    },
    {} as Record<string, SearchResult[]>,
  ),

  const renderResultCard = $2;
                name: result.title,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,
                reviewCount: 0,
                tags: result.tags || [],
                category: result.category || '',
                currency: '$',
                created_at: new Date().toISOString($2);
                updated_at: new Date().toISOString($2);
                stock: (result as any).stock,
                in_stock: ((result as any).stock || 0) > 0
              }}
            />
          </div>
        ),
      case 'talent':
        return (
          <div key = $2;
                user_id: result.id,
                full_name: result.title,
                professional_title: result.description || '',
                profile_picture_url: result.image,
                average_rating: result.rating,
                skills: result.tags || [],
                location: result.category,
                bio: result.description,
                summary: result.description,
                is_verified: false,
                availability_type: 'available'}}
              onViewProfile = $2;
      case 'category':
        return($2);
      default: return(
          <div
            key = $2;
  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
          {/* Search Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Results
                </h1>
                <p
                  className="text-gray-600 dark:text-gray-200"
                  data-testid="results-count"
                >
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </p>
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                <select
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & up</option>
                  <option value="3">3★ & up</option>
                  <option value="2">2★ & up</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  data-testid="view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  data-testid="view-mode-list"
                  className={viewMode === 'list' ? 'active' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && results.length === 0 && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}

          {/* Results */}
          {filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key = $2;
  const slug = $2;
  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '',

  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl = $2;
    logInfo($2);
    const response = $2;
    ),

    let results = $2;
    let totalCount = $2;
    if (response.ok) {
      const data = await response.json($2);
      results = $2;
      totalCount = $2;
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction($2);
      const offline = offlineSearch($2);
      results = $2;
      totalCount = $2;
        query,
        slug,
        totalCount}}
  } catch (error) {
    logErrorToProduction($2);
    const offline = offlineSearch($2);
    return {
      props: {
        initialResults: offline.results,
        query,
        slug,
        totalCount: offline.totalCount}}
  }
},
