<<<<<<< HEAD
import { GetServerSideProps } from 'next',
import { useRouter } from 'next/router',
import { useState, useEffect } from 'react',
import { useAuth } from '@/context/auth/AuthProvider',
import { Search, Filter, Grid, List } from 'lucide-react'
import { SEO } from '@/components/SEO',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import ProductCard from '@/components/ProductCard',
import { TalentCard } from '@/components/talent/TalentCard',
import { CategoryCard } from '@/components/CategoryCard',
import { SearchEmptyState } from '@/components/marketplace/EmptyState',
import { MARKETPLACE_LISTINGS } from '@/data/listingData',
import { TALENT_PROFILES } from '@/data/talentData',
import { BLOG_POSTS } from '@/data/blog-posts',
import { useDebounce } from '@/hooks/useDebounce',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',


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
=======
import ProductCard from '@/components/ProductCard';


interface BaseSearchResult {_id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {
    name: string;
    avatar?: string;};
  tags?: string[];
  category?: string;
  date?: string;
}

interface ProductSearchResult extends BaseSearchResult {_type: 'product' | 'equipment';
  price?: number;
  rating?: number;}

interface TalentSearchResult extends BaseSearchResult {_type: 'talent';
  rating?: number;}

interface BlogSearchResult extends BaseSearchResult {_type: 'blog';}

interface CategorySearchResult extends BaseSearchResult {_type: 'category';}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult,

// Type guard functions
<<<<<<< HEAD
const hasPrice = (result: SearchResult): result is ProductSearchResult => 
  result.type === 'product' || result.type === 'equipment',

const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent',

interface SearchResultsPageProps {
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}

interface OfflineFilters {
  sortBy?: string,
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  minRating?: number
}

function offlineSearch(
  query: string,
  page = 1,
  limit = 12,
  filters: OfflineFilters = {}
): { results: SearchResult[], totalCount: number } {
  const term = query.toLowerCase().trim(),
  const match = (text?: string) => text?.toLowerCase().includes(term),
=======
const _hasPrice = (result: SearchResult): result is ProductSearchResult => 
  result.type === 'product' || result.type === 'equipment';

const _hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';

interface SearchResultsPageProps {_initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;}

interface OfflineFilters {_sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;}

function offlineSearch(_query: string, _page = 1, _limit = 12, _filters: OfflineFilters = {}): {_results: SearchResult[]; totalCount: number} {_const _term = query.toLowerCase().trim();
  const _match = (_text?: string) => text?.toLowerCase().includes(term);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _productResults = MARKETPLACE_LISTINGS.filter(_(p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
<<<<<<< HEAD
      p.tags?.some((t) => match(t))).map((p) => ({
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
=======
      p.tags?.some(_(t) => match(t)), _).map(_(p) => ({
    id: p.id, _title: p.title, _description: p.description || '', _type: 'product' as const, _slug: p.id, _image: p.images?.[0], _price: p.price ?? undefined, _rating: p.rating, _author: p.author
      ? { name: p.author.name, _avatar: p.author.avatarUrl}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      : undefined,
    tags: p.tags,
    category: p.category,
    date: p.createdAt})),

  const _talentResults = TALENT_PROFILES.filter(_(t) =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.bio) ||
<<<<<<< HEAD
      t.skills?.some((s) => match(s))).map((t) => ({
    id: t.id,
    title: t.full_name,
    description: t.professional_title || '',
    type: 'talent' as const,
    slug: t.id,
    image: t.profile_picture_url,
    rating: t.average_rating,
    author: { name: t.full_name, avatar: t.profile_picture_url },
=======
      t.skills?.some(_(s) => match(s)),
  ).map(_(t) => ({_id: t.id, _title: t.full_name, _description: t.professional_title || '', _type: 'talent' as const, _slug: t.id, _image: t.profile_picture_url, _rating: t.average_rating, _author: { name: t.full_name, _avatar: t.profile_picture_url},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    tags: t.skills,
    category: t.location,
    date: undefined})),

  const _blogResults = BLOG_POSTS.filter(_(b) =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
<<<<<<< HEAD
      b.tags?.some((t) => match(t))).map((b) => ({
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
=======
      b.tags?.some(_(t) => match(t)),
  ).map(_(b) => ({_id: b.slug, _title: b.title, _description: b.excerpt, _type: 'blog' as const, _slug: b.slug, _image: b.featuredImage, _tags: b.tags, _category: 'Blog', _date: b.publishedDate}));

  let _all = [...productResults, ...talentResults, ...blogResults];

  if (filters.category) {_all = all.filter(r => r.category === filters.category);}
  if (typeof filters.minPrice === 'number') {_all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) >= filters.minPrice!;}
      return true;
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  if (typeof filters.maxPrice === 'number') {_all = all.filter(r => {
      if (r.type === 'product') {
<<<<<<< HEAD
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
=======
        return (r.price ?? 0) <= filters.maxPrice!;}
      return true;
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  if (typeof filters.minRating === 'number') {_all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
<<<<<<< HEAD
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
=======
        return (r.rating ?? 0) >= filters.minRating!;}
      return true;
    });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  if (filters.sortBy && filters.sortBy !== 'relevance') {_switch (filters.sortBy) {
      case 'price_asc':
<<<<<<< HEAD
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0,
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0,
          return aPrice - bPrice
        }),
        break,
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0,
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0,
          return bPrice - aPrice
        }),
        break,
      case 'rating':
        all.sort((a, b) => {
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0,
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0,
          return bRating - aRating
        }),
        break,
      default: break
    }
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title))
  }
  const start = (page - 1) * limit,
  const paginated = all.slice(start, start + limit),
  return { results: paginated, totalCount: all.length }
}

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount}: SearchResultsPageProps) {
  const router = useRouter(),
  const { isAuthenticated } = useAuth(),
  const [results, setResults] = useState<SearchResult[]>(initialResults),
  const [loading, setLoading] = useState(false),
  const [searchQuery, setSearchQuery] = useState(query),
  const debouncedQuery = useDebounce(searchQuery, 300),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [currentPage, setCurrentPage] = useState(1),
  const [sortBy, setSortBy] = useState('relevance'),
  const [categoryFilter, setCategoryFilter] = useState('all'),
  const [minPrice, setMinPrice] = useState(''),
  const [maxPrice, setMaxPrice] = useState(''),
  const [minRating, setMinRating] = useState(''),
  const [totalResults, setTotalResults] = useState(totalCount),

  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading(true),
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),

      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter),
      if (minPrice) params.append('minPrice', minPrice),
      if (maxPrice) params.append('maxPrice', maxPrice),
      if (minRating) params.append('minRating', minRating),

      const response = await fetch(`/api/search?${params.toString()}`),

      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json(),
      logInfo('Search results received:', { data: data }),
=======
        all.sort(_(a, _b) => {
          const _aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const _bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;});
        break;
      case 'price_desc':
        all.sort(_(a, _b) => {_const _aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const _bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice;});
        break;
      case 'rating':
        all.sort(_(a, _b) => {_const _aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const _bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating;});
        break;
      default:
        break;
    }
  } else {_all.sort(_(a, _b) => a.title.localeCompare(b.title));}
  const _start = (page - 1) * limit;
  const _paginated = all.slice(start, start + limit);
  return {_results: paginated, _totalCount: all.length};
}

export default function SearchResultsPage(_{_initialResults, _query, _slug, _totalCount}: SearchResultsPageProps) {_const _router = useRouter();
  const { isAuthenticated} = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const _debouncedQuery = useDebounce(searchQuery, 300);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [totalResults, setTotalResults] = useState(totalCount);

  // Fetch search results
  const _fetchResults = async (_searchTerm: string, _page = 1) => {_try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${_page}`);

      const _params = new URLSearchParams({_query: searchTerm, _page: String(page), _limit: '12', _sort: sortBy});
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);

      const _response = await fetch(`/api/search?${_params.toString()}`);

      if (!response.ok) {_throw new Error(`Search API error: ${response.status}`);
      }

      const _data = await response.json();
      logInfo('Search results received:', {_data: data});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      setTotalResults(data.totalCount || data.results?.length || 0),

<<<<<<< HEAD
      if (page === 1) {
        setResults(data.results || [])
      } else {
        setResults((prev) => [...prev, ...(data.results || [])])
      }
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error }),
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy,
        category: categoryFilter !== 'all' ? categoryFilter : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minRating: minRating ? Number(minRating) : undefined}),
      setTotalResults(offline.totalCount),
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
    setSearchQuery(newQuery),
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
        shallow: true}),
      setCurrentPage(1)
=======
      if (page === 1) {_setResults(data.results || []);} else {_setResults(_(prev) => [...prev, _...(data.results || [])]);}
    } catch (error) {_logErrorToProduction('Error fetching search results:', _{ data: error});
      const _offline = offlineSearch(searchTerm, page, 12, {_sortBy, _category: categoryFilter !== 'all' ? categoryFilter : undefined, _minPrice: minPrice ? Number(minPrice) : undefined, _maxPrice: maxPrice ? Number(maxPrice) : undefined, _minRating: minRating ? Number(minRating) : undefined});
      setTotalResults(offline.totalCount);
      if (page === 1) {_setResults(offline.results);} else {_setResults(_(prev) => [...prev, _...offline.results]);}
    } finally {_setLoading(false);}
  };

  // Handle search input change
  const _handleSearch = (_newQuery: string) => {_setSearchQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {_shallow: true});
      setCurrentPage(1);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, 1)
    } else {
      setResults([]),
      setTotalResults(0)
    }
  }, [debouncedQuery]),

  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1,
    setCurrentPage(nextPage),
    fetchResults(searchQuery, nextPage)
  },

  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean))),
=======
  useEffect__(() => {_if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, _1);} else {_setResults([]);
      setTotalResults(0);}
  }, [debouncedQuery]);

  // Load more results
  const _loadMore = () => {_const _nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, _nextPage);};

  const _categories = Array.from(_new Set(results.map((r) => r.category).filter(Boolean)),
  );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredResults = results.filter(_(r) => {_if (
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
<<<<<<< HEAD
      return false
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false
      }
    }
    if (minRating && (r.type === 'product' || r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
        return false
      }
=======
      return false;}
    if (minPrice && r.type === 'product') {_if ((r.price ?? 0) < Number(minPrice)) {
        return false;}
    }
    if (maxPrice && r.type === 'product') {_if ((r.price ?? 0) > Number(maxPrice)) {
        return false;}
    }
    if (minRating && (r.type === 'product' || r.type === 'talent')) {_if ((r.rating ?? 0) < Number(minRating)) {
        return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return true
  }),

  // Group results by type for better display
<<<<<<< HEAD
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [],
      acc[result.type]!.push(result),
      return acc
    },
    {} as Record<string SearchResult[]>),
=======
  const _groupedResults = filteredResults.reduce(_(acc, _result) => {_if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc;},
    {} as Record<string, SearchResult[]>,
  );
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _renderResultCard = (_result: SearchResult) => {_switch (result.type) {
      case 'product':
      case 'equipment':
        return (
          <div key={result.id} data-testid=&quot;result-card&quot;>
            <ProductCard
              product={_{
                id: result.id, _name: result.title, _title: result.title, _description: result.description || '', _price: result.price || 0, _images: result.image ? [result.image] : [], _rating: result.rating || 0, _reviewCount: 0, _tags: result.tags || [], _category: result.category || '', _currency: '$', _created_at: new Date().toISOString(), _updated_at: new Date().toISOString(), _stock: (result as any).stock, _in_stock: ((result as any).stock || 0) > 0}}
            />
          </div>
        ),
      case 'talent':
<<<<<<< HEAD
        return (
          <div key={result.id} data-testid=&quot;result-card&quot;>
            <TalentCard
              talent={{
                id: result.id,
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
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`)
              }}
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`)
=======
        return (_<div key={_result.id} data-testid="result-card">
            <TalentCard
              talent={_{
                id: result.id, _user_id: result.id, _full_name: result.title, _professional_title: result.description || '', _profile_picture_url: result.image, _average_rating: result.rating, _skills: result.tags || [], _location: result.category, _bio: result.description, _summary: result.description, _is_verified: false, _availability_type: 'available'}}
              onViewProfile={_(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={_(_talent) => {
                router.push(`/talent/${talent.id}?action=hire`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              }}
              isAuthenticated={_isAuthenticated}
            />
          </div>
        ),
      case 'category':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid=&quot;result-card&quot;>
=======
          <div key={_result.id} data-testid="result-card">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CategoryCard
              title={_result.title}
              description={_result.description || ''}
              icon={_result.image || '📁'}
            />
          </div>
        ),
      default:
        return (
          <div
<<<<<<< HEAD
            key={result.id}
            className=&quot;p-4 bg-white dark:bg-gray-800 rounded-lg shadow&quot;
            data-testid=&quot;result-card&quot;
          >
            <h3 className=&quot;font-semibold&quot;>{result.title}</h3>
            <p className=&quot;text-gray-600 dark:text-gray-200&quot;>
              {result.description}
=======
            key={_result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
          >
            <h3 className="font-semibold">{_result.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {_result.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
        )
    }
  },

  return (_<>
      <SEO
<<<<<<< HEAD
        title={`Search Results for &quot;${query}&quot; - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
=======
        title={_`Search Results for "${query}" - Zion Marketplace`}
        description={_`Find ${query} and more in the Zion marketplace. Discover products, _talent, _and services.`}
        keywords={_`${query}, _search, _marketplace, _products, _talent, _services`}
        canonical={_`https://app.ziontechgroup.com/search/${slug}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />

      <div className=&quot;min-h-screen bg-gray-50 dark:bg-gray-900&quot;>
        <div
          className=&quot;container mx-auto px-4 py-8&quot;
          data-testid=&quot;search-results&quot;
        >
<<<<<<< HEAD
          {/* Search Header */}
          <div className=&quot;mb-8&quot;>
            <div className=&quot;flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4&quot;>
              <div className=&quot;flex-1&quot;>
                <h1 className=&quot;text-3xl font-bold text-gray-900 dark:text-white mb-2&quot;>
=======
          {_/* Search Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Search Results
                </h1>
                <p
                  className=&quot;text-gray-600 dark:text-gray-200&quot;
                  data-testid=&quot;results-count&quot;
                >
<<<<<<< HEAD
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for &quot;${query}&quot;`
                    : `No results found for &quot;${query}&quot;`}
                </p>
              </div>

              {/* Search Input */}
              <div className=&quot;relative w-full lg:w-96&quot;>
                <Search className=&quot;absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200&quot; />
                <Input
                  type=&quot;text&quot;
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder=&quot;Search marketplace...&quot;
                  className=&quot;pl-10&quot;
=======
                  {_filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${_query}"`
                    : `No results found for "${_query}"`}
                </p>
              </div>

              {_/* Search Input */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={_searchQuery}
                  onChange={_(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            </div>

<<<<<<< HEAD
            {/* Controls */}
            <div className=&quot;flex flex-wrap items-center justify-between gap-4 mt-6&quot;>
              <div className=&quot;flex items-center gap-2 flex-wrap&quot;>
=======
            {_/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Button
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  className=&quot;flex items-center gap-2&quot;
                  data-testid=&quot;filter-button&quot;
                >
                  <Filter className=&quot;h-4 w-4&quot; />
                  Filters
                </Button>

                <select
<<<<<<< HEAD
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className=&quot;px-3 py-1 border border-gray-300 rounded-md text-sm&quot;
                  data-testid=&quot;sort-select&quot;
=======
                  value={_sortBy}
                  onChange={_(_e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value=&quot;relevance&quot;>Relevance</option>
                  <option value=&quot;newest&quot;>Newest</option>
                  <option value=&quot;price_asc&quot;>Price: Low to High</option>
                  <option value=&quot;price_desc&quot;>Price: High to Low</option>
                  <option value=&quot;rating&quot;>Highest Rated</option>
                </select>

                <select
<<<<<<< HEAD
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className=&quot;px-3 py-1 border border-gray-300 rounded-md text-sm&quot;
                >
                  <option value=&quot;all&quot;>All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
=======
                  value={_categoryFilter}
                  onChange={_(_e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {_categories.map(_(c) => (
                    <option key={c} value={_c}>
                      {_c}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </option>
                  ))}
                </select>

                <div className=&quot;flex items-center gap-1&quot;>
                  <input
<<<<<<< HEAD
                    type=&quot;number&quot;
                    placeholder=&quot;Min $&quot;
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className=&quot;w-20 px-2 py-1 border border-gray-300 rounded-md text-sm&quot;
                  />
                  <span>-</span>
                  <input
                    type=&quot;number&quot;
                    placeholder=&quot;Max $&quot;
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className=&quot;w-20 px-2 py-1 border border-gray-300 rounded-md text-sm&quot;
=======
                    type="number"
                    placeholder="Min $"
                    value={_minPrice}
                    onChange={_(_e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    value={_maxPrice}
                    onChange={_(_e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>

                <select
<<<<<<< HEAD
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  className=&quot;px-3 py-1 border border-gray-300 rounded-md text-sm&quot;
=======
                  value={_minRating}
                  onChange={_(_e) => setMinRating(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <option value="&quot;>All Ratings</option>
                  <option value=&quot;4&quot;>4★ & up</option>
                  <option value=&quot;3&quot;>3★ & up</option>
                  <option value=&quot;2">2★ & up</option>
                </select>
              </div>

              <div className="flex items-center gap-2&quot;>
                <Button
<<<<<<< HEAD
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size=&quot;sm&quot;
                  onClick={() => setViewMode('grid')}
                  data-testid=&quot;view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''}
=======
                  variant={_viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={_() => setViewMode('grid')}
                  data-testid="view-mode-grid"
                  className={_viewMode === 'grid' ? 'active' : ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Grid className="h-4 w-4&quot; />
                </Button>
                <Button
<<<<<<< HEAD
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size=&quot;sm&quot;
                  onClick={() => setViewMode('list')}
                  data-testid=&quot;view-mode-list"
                  className={viewMode === 'list' ? 'active' : ''}
=======
                  variant={_viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={_() => setViewMode('list')}
                  data-testid="view-mode-list"
                  className={_viewMode === 'list' ? 'active' : ''}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {_/* Loading State */}
          {_loading && results.length === 0 && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600&quot;></div>
            </div>
          )}

<<<<<<< HEAD
          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
            <div data-testid=&quot;search-empty-state">
=======
          {_/* Empty State */}
          {_!loading && filteredResults.length === 0 && (_<div data-testid="search-empty-state">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}

          {_/* Results */}
          {_filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(_([type, _typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                    {_type}s ({_typeResults.length})
                  </h2>

                  <div
                    className={_viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'}
                  >
                    {_typeResults.map(renderResultCard)}
                  </div>
                </div>
              ))}

              {_/* Load More Button */}
              {_results.length < totalResults && (
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={_loading}
                    className="flex items-center gap-2"
                  >
                    {_loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Loading...
                      </>
                    ) : (
                      'Load More Results'
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
<<<<<<< HEAD
> = async (context: any) => {
  const params = context.params,
  const slug = params?.slug as string,

  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '',

  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',

    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),

    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`),

    let results = [],
    let totalCount = 0,

    if (response.ok) {
      const data = await response.json(),
      results = data.results || [],
      totalCount = data.totalCount || results.length,
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction(
        `Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results,
      totalCount = offline.totalCount
    }

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount}}
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error }),
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),

    return {
      props: {
        initialResults: offline.results,
        query,
        slug,
        totalCount: offline.totalCount}}
=======
> = async (_context: unknown) => {_const _params = context.params;
  const _slug = params?.slug as string;

  // Convert slug back to query term
  const _query = slug ? slug.replace(/-/g, _' ') : '';

  try {
    // In production, _replace with your actual API base window.URL
    const _apiBaseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    logInfo(`Fetching search results for slug: ${slug}, query: ${_query}`);

    const _response = await fetch(
      `${_apiBaseUrl}/api/search?query=${_encodeURIComponent(query)}&limit=12`,
    );

    let _results = [];
    let _totalCount = 0;

    if (response.ok) {_const _data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
    } else {_logErrorToProduction(
        `Search API error: ${response.status} ${_response.statusText}`,
      );
      const _offline = offlineSearch(query, 1, 12, {_sortBy: 'relevance'});
      results = offline.results;
      totalCount = offline.totalCount;
    }

    return {_props: {
        initialResults: results, _query, _slug, _totalCount}};
  } catch (error) {_logErrorToProduction('Error fetching search results:', _{ data: error});
    const _offline = offlineSearch(query, 1, 12, {_sortBy: 'relevance'});

    return {_props: {
        initialResults: offline.results, _query, _slug, _totalCount: offline.totalCount}};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},
