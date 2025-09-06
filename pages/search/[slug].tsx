import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ProductCard';
import {TalentCard} from '@/components/talent/TalentCard';
import {CategoryCard} from '@/components/CategoryCard';
import {SearchEmptyState} from '@/components/marketplace/EmptyState';
import {MARKETPLACE_LISTINGS} from '@/data/listingData';
import {TALENT_PROFILES} from '@/data/talentData';
import {BLOG_POSTS} from '@/data/blog-posts';
import {useDebounce} from '@/hooks/useDebounce';
import {logInfo, logErrorToProduction} from '@/utils/productionLogger';

interface BaseSearchResult {;
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {;
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
  date?: string;

interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;

interface TalentSearchResult extends BaseSearchResult {;
  type: 'talent';
  rating?: number;

interface BlogSearchResult extends BaseSearchResult {;
  type: 'blog';

interface CategorySearchResult extends BaseSearchResult {;
  type: 'category';

type SearchResult =;
  | ProductSearchResult;
  | TalentSearchResult;
  | BlogSearchResult;
  | CategorySearchResult;

// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result && result.type === 'product' || result && result.type === 'equipment';

const hasRating = (;
  result: SearchResult;
): result is ProductSearchResult | TalentSearchResult =>;
  result && result.type === 'product' ||;
  result && result.type === 'equipment' ||;
  result && result.type === 'talent';

interface SearchResultsPageProps {;
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
interface OfflineFilters {;
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;

function offlineSearch(): any (;
  query: string,;
  page = 1,;
  limit = 12,;
  filters: OfflineFilters = {}
): { results: SearchResult[]; totalCount: number } {  const term = query && query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const productResults = MARKETPLACE_LISTINGS && MARKETPLACE_LISTINGS.filter(;
    p =>;
      match(p && p.title) ||;
      match(p && p.description) ||;
      match(p && p.category) ||;
      p && p.tags?.some(t => match(t));
  ).map(p => ({    id: p && p.id,;
    title: p && p.title,;
    description: p && p.description || '',;
    type: 'product' as const,;
    slug: p && p.id,;
    image: p && p.images?.[0],;
    price: p && p.price ?? undefined,;
    rating: p && p.rating,;
    author: p && p.author;
      ? { name: p && p.author.name, avatar: p && p.author.avatarUrl }
      : undefined,;
    tags: p && p.tags,;
    category: p && p.category,;
    date: p && p.createdAt,;
  }));

  const talentResults = TALENT_PROFILES && TALENT_PROFILES.filter(;
    t =>;
      match(t && t.full_name) ||;
      match(t && t.professional_title) ||;
      match(t && t.bio) ||;
      t && t.skills?.some(s => match(s));
  ).map(t => ({    id: t && t.id,;
    title: t && t.full_name,;
    description: t && t.professional_title || '',;
    type: 'talent' as const,;
    slug: t && t.id,;
    image: t && t.profile_picture_url,;
    rating: t && t.average_rating,;
    author: { name: t && t.full_name, avatar: t && t.profile_picture_url },;
    tags: t && t.skills,;
    category: t && t.location,;
    date: undefined,;
  }));

  const blogResults = BLOG_POSTS && BLOG_POSTS.filter(;
    b =>;
      match(b && b.title) ||;
      match(b && b.excerpt) ||;
      match(b && b.content) ||;
      b && b.tags?.some(t => match(t));
  ).map(b => ({    id: b && b.slug,;
    title: b && b.title,;
    description: b && b.excerpt,;
    type: 'blog' as const,;
    slug: b && b.slug,;
    image: b && b.featuredImage,;
    tags: b && b.tags,;
    category: 'Blog',;
    date: b && b.publishedDate,;
  }));
  let all = [...productResults, ...talentResults, ...blogResults];

  if (filters && filters.category) {;
    all = all && all.filter(r => r && r.category === filters && filters.category);  }
  if (typeof filters && filters.minPrice === 'number') {;
    all = all && all.filter(r => {;
      if (r && r.type === 'product') {;
        return (r && r.price ?? 0) >= filters && filters.minPrice!;
      }
      return true;
    });  }
  if (typeof filters && filters.maxPrice === 'number') {;
    all = all && all.filter(r => {;
      if (r && r.type === 'product') {;
        return (r && r.price ?? 0) <= filters && filters.maxPrice!;
      }
      return true;
    });  }
  if (typeof filters && filters.minRating === 'number') {;
    all = all && all.filter(r => {;
      if (r && r.type === 'product' || r && r.type === 'talent') {;
        return (r && r.rating ?? 0) >= filters && filters.minRating!;
      }
      return true;
    });  }

  if (filters && filters.sortBy && filters && filters.sortBy !== 'relevance') {;
    switch (filters && filters.sortBy) {;
      case 'price_asc':;
        all && all.sort((a, b) => {;
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
          return aPrice - bPrice;        });
        break;
      case 'price_desc':;
        all && all.sort((a, b) => {;
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
          return bPrice - aPrice;        });
        break;
      case 'rating':;
        all && all.sort((a, b) => {;
          const aRating =;
            a && a.type === 'product' || a && a.type === 'talent' ? (a && a.rating ?? 0) : 0;
          const bRating =;
            b && b.type === 'product' || b && b.type === 'talent' ? (b && b.rating ?? 0) : 0;
          return bRating - aRating;
        });
        break;
      default:;
        break;
    }
  } else {;
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));
  }
  const start = (page - 1) * limit;
  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };

export default function SearchResultsPage(): any ({;
  initialResults,;
  query,;
  slug,;
  totalCount,;
}: SearchResultsPageProps) {  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('relevance');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [totalResults, setTotalResults] = useState(totalCount);

  // Fetch search results;
  const fetchResults = async (searchTerm: string, page = 1) => {;
    try {;
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({;
        query: searchTerm,;
        page: String(page),;
        limit: '12',;
        sort: sortBy,;
      });      if (categoryFilter !== 'all') params && params.append('category', categoryFilter);
      if (minPrice) params && params.append('minPrice', minPrice);
      if (maxPrice) params && params.append('maxPrice', maxPrice);
      if (minRating) params && params.append('minRating', minRating);

      const response = await fetch(`/api/search?${params && params.toString()}`);

      if (!response && response.ok) {;
        throw new Error(`Search API error: ${response && response.status}`);
      }

      const data = await response && response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data && data.totalCount || data && data.results?.length || 0);

      if (page === 1) {;
        setResults(data && data.results || []);
      } else {;
        setResults(prev => [...prev, ...(data && data.results || [])]);
      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {;
        sortBy,;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,;
        minPrice: minPrice ? Number(minPrice) : undefined,;
        maxPrice: maxPrice ? Number(maxPrice) : undefined,;
        minRating: minRating ? Number(minRating) : undefined,;
      });
      setTotalResults(offline && offline.totalCount);
      if (page === 1) {;
        setResults(offline && offline.results);
      } else {;
        setResults(prev => [...prev, ...offline && offline.results]);
      }
    } finally {;
      setLoading(false);    }
  };

  // Handle search input change;
  const handleSearch = (newQuery: string) => {;
    setSearchQuery(newQuery),;
    if (newQuery && newQuery.trim()) {;
      router && router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {;
        shallow: true,;
      });
      setCurrentPage(1);    }
  };

  useEffect(() => {;
    if (debouncedQuery && debouncedQuery.trim()) {;
      fetchResults(debouncedQuery, 1);
    } else {;
      setResults([]);
      setTotalResults(0);    }
  }, [debouncedQuery]);

  // Load more results;
  const loadMore = () => {;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  };

  const categories = Array && Array.from(;
    new Set(results && results.map(r => r && r.category).filter(Boolean));
  );

  const filteredResults = results && results.filter(r => {    if (;
      categoryFilter !== 'all' &&;
      categoryFilter &&;
      r && r.category !== categoryFilter;
    ) {;
      return false;
    }
    if (minPrice && r && r.type === 'product') {;
      if ((r && r.price ?? 0) < Number(minPrice)) {;
        return false;      }
    }
    if (maxPrice && r && r.type === 'product') {;
      if ((r && r.price ?? 0) > Number(maxPrice)) {;
        return false;      }
    }
    if (minRating && (r && r.type === 'product' || r && r.type === 'talent')) {;
      if ((r && r.rating ?? 0) < Number(minRating)) {;
        return false;
      }
    }
    return true;  });

  // Group results by type for better display;
  const groupedResults = filteredResults && filteredResults.reduce(;
    (acc, result) => {;
      if (!acc[result && result.type]) acc[result && result.type] = [];
      acc[result && result.type]!.push(result);
      return acc;
    },;
    {} as Record<string, SearchResult[]>  );

  const renderResultCard = (result: SearchResult) => {;
    switch (result && result.type) {;
      case 'product':;
      case 'equipment':;
        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard
              product={{
                id: result && result.id,
                name: result && result.title,
                title: result && result.title,
                description: result && result.description || '',
                price: result && result.price || 0,
                images: result && result.image ? [result && result.image] : [],
                rating: result && result.rating || 0,
                reviewCount: 0,
                tags: result && result.tags || [],
                category: result && result.category || '',
                currency: '$',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                stock: (result as any).stock,
                in_stock: ((result as any).stock || 0)> 0,              }}
            />;
          </div>;
        );
      case 'talent':;
        return (
          <div key={result && result.id} data-testid='result-card'>            <TalentCard
              talent={{
                id: result && result.id,
                user_id: result && result.id,
                full_name: result && result.title,
                professional_title: result && result.description || '',
                profile_picture_url: result && result.image,
                average_rating: result && result.rating,
                skills: result && result.tags || [],
                location: result && result.category,
                bio: result && result.description,
                summary: result && result.description,
                is_verified: false,
                availability_type: 'available',
              }}
              onViewProfile={(id: string) => {;
                router && router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {;
                router && router.push(`/talent/${talent && talent.id}?action=hire`);              }}
              isAuthenticated={isAuthenticated}
            />;
          </div>;
        );
      case 'category':;
        return (
          <div key={result && result.id} data-testid='result-card'>            <CategoryCard
              title={result && result.title}
              description={result && result.description || ''}
              icon={result && result.image || '📁'}
            />;
          </div>;
        );
      default:;

          >;
            <h3 className='font-semibold'>{result && result.title}</h3>;
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;
        );    }
  };

  return (
    <>;
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;

      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;
        <div
          className='container mx-auto px-4 py-8'
          data-testid='search-results'>;
          {/* Search Header */}
          <div className='mb-8'>;
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>;
              <div className='flex-1'>;
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>;
                  Search Results;
                </h1>;
                <p
                  className='text-gray-600 dark:text-gray-200'
                  data-testid='results-count'>;
                  {filteredResults && filteredResults.length > 0;
                    ? `Found ${filteredResults && filteredResults.length} results for "${query}"`;
                    : `No results found for "${query}"`}
                </p>;
              </div>;

              {/* Search Input */}
              <div className='relative w-full lg:w-96'>;
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />;
                <Input
                  type='text'
                  value={searchQuery}
                  onChange={e => handleSearch(e && e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl-10'                />;
              </div>;
            </div>;

            {/* Controls */}
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6'>;
              <div className='flex items-center gap-2 flex-wrap'>;
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-2'
                  data-testid='filter-button'>;
                  <Filter className='h-4 w-4' />                  Filters;
                </Button>;

                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                  data-testid='sort-select';
                >;
                  <option value='relevance'>Relevance</option>;
                  <option value='newest'>Newest</option>;
                  <option value='price_asc'>Price: Low to High</option>;
                  <option value='price_desc'>Price: High to Low</option>;
                  <option value='rating'>Highest Rated</option>                </select>;

                <select
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                >;
                  <option value='all'>All Categories</option>;
                  {categories && categories.map(c => (                    <option key={c} value={c}>;
                      {c}
                    </option>;
                  ))}
                </select>;

                <div className='flex items-center gap-1'>;
                  <input
                    type='number'
                    placeholder='Min $'
                    value={minPrice}
                    onChange={e => setMinPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm';
                  />;
                  <span>-</span>;
                  <input
                    type='number'
                    placeholder='Max $'
                    value={maxPrice}
                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;

                <select
                  value={minRating}
                  onChange={e => setMinRating(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                >;
                  <option value=''>All Ratings</option>;
                  <option value='4'>4★ & up</option>;
                  <option value='3'>3★ & up</option>;
                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;

              <div className='flex items-center gap-2'>;
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('grid')}
                  data-testid='view-mode-grid';
                  className={viewMode === 'grid' ? 'active' : ''}
                >;
                  <Grid className='h-4 w-4' />;
                </Button>;
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  data-testid='view-mode-list';
                  className={viewMode === 'list' ? 'active' : ''}
                >;
                  <List className='h-4 w-4' />                </Button>;
              </div>;
            </div>;
          </div>;

          {/* Loading State */}
          {loading && results && results.length === 0 && (;
            <div className='flex justify-center py-12'>;
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>            </div>;
          )}

          {/* Empty State */}
          {!loading && filteredResults && filteredResults.length === 0 && (;
            <div data-testid='search-empty-state'>              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />;
            </div>;
          )}

          {/* Results */}
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;

                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }>;
                    {typeResults && typeResults.map(renderResultCard)}
                  </div>;
                </div>;
              ))}

              {/* Load More Button */}
              {results && results.length < totalResults && (;
                <div className='flex justify-center py-8'>;
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className='flex items-center gap-2'>;
                    {loading ? (;
                      <>;
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>                        Loading...;
                      </>;
                    ) : (;
                      'Load More Results';
                    )}
                  </Button>;
                </div>;
              )}
            </div>;
          )}
        </div>;
      </div>;
    </>;
  );
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {;
  const params = context && context.params;
  const slug = params?.slug as string,;

  // Convert slug back to query term;
  const query = slug ? slug && slug.replace(/-/g, ' ') : '';

  try {;
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process && process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',;

    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);

    const response = await fetch(;
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );

    let results = [];
    let totalCount = 0;

    if (response && response.ok) {;
      const data = await response && response.json();
      results = data && data.results || [];
      totalCount = data && data.totalCount || results && results.length;
      logInfo(`Server-side fetch successful: ${results && results.length} results`);
    } else {;
      logErrorToProduction(;
        `Search API error: ${response && response.status} ${response && response.statusText}`;
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline && offline.results;
      totalCount = offline && offline.totalCount;    }

    return {;
      props: {;
        initialResults: results,;
        query,;
        slug,;
        totalCount,;
      },;
    };
  } catch (error) {;
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });

    return {;
      props: {;
        initialResults: offline && offline.results,;
        query,;
        slug,;
        totalCount: offline && offline.totalCount,;
      },;
    };  }
};
