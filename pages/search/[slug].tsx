<<<<<<< HEAD
import { GetServerSideProps  } from 'next';
import { useRouter  } from 'next/router';
import { useState, useEffect  } from 'react';
import { useAuth  } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react'
import { SEO  } from '@/components/SEO';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
=======
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import ProductCard from '@/components/ProductCard';
import { TalentCard  } from '@/components/talent/TalentCard';
import { CategoryCard  } from '@/components/CategoryCard';
import { SearchEmptyState  } from '@/components/marketplace/EmptyState';
import { MARKETPLACE_LISTINGS  } from '@/data/listingData';
import { TALENT_PROFILES  } from '@/data/talentData';
import { BLOG_POSTS  } from '@/data/blog-posts';
import { useDebounce  } from '@/hooks/useDebounce';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface BaseSearchResult {
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {
    name: string;
<<<<<<< HEAD
<<<<<<< HEAD
    avatar?: string
  },
  tags?: string[],
  category?: string;
  date?: string
}

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number
}

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number
}

=======
    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;
=======
    avatar?: string;
  };
  tags?: string[];
  category?: string;
  date?: string;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
<<<<<<< HEAD
interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
interface CategorySearchResult extends BaseSearchResult {
  type: 'category';
<<<<<<< HEAD

type SearchResult = any;
=======
=======

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';

interface CategorySearchResult extends BaseSearchResult {
  type: 'category';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type SearchResult =
  | ProductSearchResult
  | TalentSearchResult
  | BlogSearchResult
  | CategorySearchResult;
<<<<<<< HEAD
// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult =>
  result.type === 'product' |result.type === 'equipment';
const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' |
  result.type === 'equipment' |
  result.type === 'talent';
=======

// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult =>
  result.type === 'product' || result.type === 'equipment';

const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' ||
  result.type === 'equipment' ||
  result.type === 'talent';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface SearchResultsPageProps {
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
interface OfflineFilters {
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
function offlineSearch(
  query: string
  page = 1
  limit = 12
  filters: OfflineFilters = {}
<<<<<<< HEAD
): { results: SearchResult[]; totalCount: number } {  const term = query.toLowerCase().trim();
=======
): { results: SearchResult[]; totalCount: number } {
  const term = query.toLowerCase().trim();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(
    p =>
      match(p.title) |
      match(p.description) |
      match(p.category) |
      p.tags?.some(t => match(t))
<<<<<<< HEAD
  ).map(p => ({    id: p.id
    title: p.title
    description: p.description |''
    type: 'product' as const
    slug: p.id
    image: p.images?.[0]
    price: p.price ?? undefined
    rating: p.rating
    author: p.author
      ? { name: p.author.name, avatar: p.author.avatarUrl }
      : undefined
    tags: p.tags
    category: p.category
    date: p.createdAt
=======
  ).map(p => ({
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
    date: p.createdAt,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }));
  const talentResults = TALENT_PROFILES.filter(
    t =>
      match(t.full_name) |
      match(t.professional_title) |
      match(t.bio) |
      t.skills?.some(s => match(s))
<<<<<<< HEAD
  ).map(t => ({    id: t.id
    title: t.full_name
    description: t.professional_title |''
    type: 'talent' as const
    slug: t.id
    image: t.profile_picture_url
    rating: t.average_rating
    author: { name: t.full_name, avatar: t.profile_picture_url }
    tags: t.skills
    category: t.location
    date: undefined
=======
  ).map(t => ({
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
    date: undefined,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }));
  const blogResults = BLOG_POSTS.filter(
    b =>
      match(b.title) |
      match(b.excerpt) |
      match(b.content) |
      b.tags?.some(t => match(t))
<<<<<<< HEAD
  ).map(b => ({    id: b.slug
    title: b.title
    description: b.excerpt
    type: 'blog' as const
    slug: b.slug
    image: b.featuredImage
    tags: b.tags
    category: 'Blog'
    date: b.publishedDate
  }));
=======
  ).map(b => ({
    id: b.slug,
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featuredImage,
    tags: b.tags,
    category: 'Blog',
    date: b.publishedDate,
  }));

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  let all = [...productResults, ...talentResults, ...blogResults];
  if (filters.category) {
<<<<<<< HEAD
    all = all.filter(r => r.category === filters.category);  }
=======
    all = all.filter(r => r.category === filters.category);
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) >= filters.minPrice!;
      }
      return true;
<<<<<<< HEAD
    });  }
=======
    });
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) <= filters.maxPrice!;
      }
      return true;
<<<<<<< HEAD
    });  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' |r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!;
      }
      return true;
    });  }
=======
    });
  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!;
      }
      return true;
    });
  }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
<<<<<<< HEAD
          return aPrice - bPrice;        });
=======
          return aPrice - bPrice;
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
<<<<<<< HEAD
          return bPrice - aPrice;        });
=======
          return bPrice - aPrice;
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        break;
      case 'rating':
        all.sort((a, b) => {
          const aRating =
            a.type === 'product' |a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' |b.type === 'talent' ? (b.rating ?? 0) : 0;
          return bRating - aRating;
        });
        break;
      default:
        break;
    }
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title));
  }
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);
<<<<<<< HEAD
  return { results: paginated, totalCount: all.length }
export default function SearchResultsPage({
  initialResults
  query
  slug
  totalCount
}: SearchResultsPageProps) {  const router = useRouter();
=======
  return { results: paginated, totalCount: all.length };
}
}

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount,
}: SearchResultsPageProps) {
  const router = useRouter();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
<<<<<<< HEAD
      const params = new URLSearchParams({
        query: searchTerm
        page: String(page)
        limit: '12'
        sort: sortBy
      });      if (categoryFilter !== 'all') params.append('category', categoryFilter);
=======

      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy,
      });
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);
      const response = await fetch(`/api/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
      }
      const data = await response.json();
      logInfo('Search results received:', { data: data });
<<<<<<< HEAD
      setTotalResults(data.totalCount |data.results?.length |0);
      if (page === 1) {
        setResults(data.results |[]);
=======

      setTotalResults(data.totalCount || data.results?.length || 0);

      if (page === 1) {
        setResults(data.results || []);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      } else {
        setResults(prev => [...prev, ...(data.results |[])]);
      }
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy
        category: categoryFilter !== 'all' ? categoryFilter : undefined
        minPrice: minPrice ? Number(minPrice) : undefined
        maxPrice: maxPrice ? Number(maxPrice) : undefined
        minRating: minRating ? Number(minRating) : undefined
      });
      setTotalResults(offline.totalCount);
      if (page === 1) {
        setResults(offline.results);
      } else {
        setResults(prev => [...prev, ...offline.results]);
      }
    } finally {
<<<<<<< HEAD
      setLoading(false);    }
  }
=======
      setLoading(false);
    }
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery)
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
<<<<<<< HEAD
        shallow: true
      });
      setCurrentPage(1);    }
  }
=======
        shallow: true,
      });
      setCurrentPage(1);
    }
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, 1);
    } else {
      setResults([]);
<<<<<<< HEAD
      setTotalResults(0);    }
=======
      setTotalResults(0);
    }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, [debouncedQuery]);
  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  }
  const categories = Array.from(
    new Set(results.map(r => r.category).filter(Boolean))
  );
<<<<<<< HEAD
  const filteredResults = results.filter(r => {    if (
=======

  const filteredResults = results.filter(r => {
    if (
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
      return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
<<<<<<< HEAD
        return false;      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;      }
=======
        return false;
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;
      }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
    if (minRating && (r.type === 'product' |r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
        return false;
      }
    }
<<<<<<< HEAD
    return true;  });
=======
    return true;
  });

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc;
<<<<<<< HEAD
    }
    {} as Record<string, SearchResult[]>  );
=======
    },
    {} as Record<string, SearchResult[]>
  );

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>            <ProductCard
              product={{
                id: result.id
                name: result.title
                title: result.title
                description: result.description |''
                price: result.price |0
                images: result.image ? [result.image] : []
                rating: result.rating |0
                reviewCount: 0
                tags: result.tags |[]
                category: result.category |''
                currency: '$'
                created_at: new Date().toISOString()
                updated_at: new Date().toISOString()
                stock: (result as any).stock
                in_stock: ((result as any).stock |0) > 0,              }}
=======
          <div key={result.id} data-testid='result-card'>
            <ProductCard
              product={{
                id: result.id,
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
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                stock: (result as any).stock,
                in_stock: ((result as any).stock || 0) > 0,
              }}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            />
          </div>
        );
      case 'talent':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>            <TalentCard
              talent={{
                id: result.id
                user_id: result.id
                full_name: result.title
                professional_title: result.description |''
                profile_picture_url: result.image
                average_rating: result.rating
                skills: result.tags |[]
                location: result.category
                bio: result.description
                summary: result.description
                is_verified: false
                availability_type: 'available'
=======
          <div key={result.id} data-testid='result-card'>
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
                availability_type: 'available',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
<<<<<<< HEAD
                router.push(`/talent/${talent.id}?action=hire`);              }}
=======
                router.push(`/talent/${talent.id}?action=hire`);
              }}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              isAuthenticated={isAuthenticated}
            />
          </div>
        );
      case 'category':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>            <CategoryCard
=======
          <div key={result.id} data-testid='result-card'>
            <CategoryCard
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              title={result.title}
              description={result.description |''}
              icon={result.image |'📁'}
            />
          </div>
        );
      default:
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          >
            <h3 className='font-semibold'>{result.title}</h3>
            <p className='text-gray-600 dark:text-gray-200'>
              {result.description}
            </p>
          </div>
<<<<<<< HEAD
        );    }
  }
=======
        );
    }
  };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
      />
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <div
          className='container mx-auto px-4 py-8'
          data-testid='search-results'
        >
          {/* Search Header */}
          <div className='mb-8'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
              <div className='flex-1'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                  Search Results
                </h1>
                <p
                  className='text-gray-600 dark:text-gray-200'
<<<<<<< HEAD
                  data-testid='results-count'                >
=======
                  data-testid='results-count'
                >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </p>
              </div>
              {/* Search Input */}
              <div className='relative w-full lg:w-96'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />
                <Input
                  type='text'
                  value={searchQuery}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder='Search marketplace...'
<<<<<<< HEAD
                  className='pl-10'                />
=======
                  className='pl-10'
                />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </div>
            {/* Controls */}
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6'>
              <div className='flex items-center gap-2 flex-wrap'>
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-2'
                  data-testid='filter-button'
                >
<<<<<<< HEAD
                  <Filter className='h-4 w-4' />                  Filters
=======
                  <Filter className='h-4 w-4' />
                  Filters
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </Button>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                  data-testid='sort-select'
                >
                  <option value='relevance'>Relevance</option>
                  <option value='newest'>Newest</option>
                  <option value='price_asc'>Price: Low to High</option>
                  <option value='price_desc'>Price: High to Low</option>
<<<<<<< HEAD
                  <option value='rating'>Highest Rated</option>                </select>
=======
                  <option value='rating'>Highest Rated</option>
                </select>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                <select
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                >
                  <option value='all'>All Categories</option>
<<<<<<< HEAD
                  {categories.map(c => (                    <option key={c} value={c}>
=======
                  {categories.map(c => (
                    <option key={c} value={c}>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                      {c}
                    </option>
                  ))}
                </select>
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                <div className='flex items-center gap-1'>
                  <input
                    type='number'
                    placeholder='Min $'
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'
                  />
                  <span>-</span>
                  <input
                    type='number'
                    placeholder='Max $'
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
<<<<<<< HEAD
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />
=======
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'
                  />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </div>
                <select
                  value={minRating}
                  onChange={e => setMinRating(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                >
                  <option value=''>All Ratings</option>
                  <option value='4'>4★ & up</option>
                  <option value='3'>3★ & up</option>
                  <option value='2'>2★ & up</option>
                </select>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('grid')}
                  data-testid='view-mode-grid'
                  className={viewMode === 'grid' ? 'active' : ''}
                >
                  <Grid className='h-4 w-4' />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  data-testid='view-mode-list'
                  className={viewMode === 'list' ? 'active' : ''}
                >
<<<<<<< HEAD
                  <List className='h-4 w-4' />                </Button>
=======
                  <List className='h-4 w-4' />
                </Button>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            </div>
          </div>
          {/* Loading State */}
          {loading && results.length === 0 && (
            <div className='flex justify-center py-12'>
<<<<<<< HEAD
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>            </div>
=======
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
            </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          )}
          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
<<<<<<< HEAD
            <div data-testid='search-empty-state'>              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
=======
            <div data-testid='search-empty-state'>
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            </div>
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
            <div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
<<<<<<< HEAD
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults.length})
=======
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>
                    {type}s ({typeResults.length})
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                  </h2>
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }
                  >
                    {typeResults.map(renderResultCard)}
                  </div>
                </div>
              ))}
              {/* Load More Button */}
              {results.length < totalResults && (
                <div className='flex justify-center py-8'>
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className='flex items-center gap-2'
                  >
                    {loading ? (
                      <>
<<<<<<< HEAD
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>                        Loading...
=======
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
                        Loading...
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
  );
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {
  const params = context.params;
  const slug = params?.slug as string
  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '';
  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl =
<<<<<<< HEAD
      process.env.NEXT_PUBLIC_API_URL |'http: //localhost:3000'
=======
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);
    const response = await fetch(
<<<<<<< HEAD
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );
=======
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`
    );

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    let results = [];
    let totalCount = 0;
    if (response.ok) {
      const data = await response.json();
<<<<<<< HEAD
      results = data.results |[];
      totalCount = data.totalCount |results.length;
=======
      results = data.results || [];
      totalCount = data.totalCount || results.length;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      logInfo(`Server-side fetch successful: ${results.length} results`);
    } else {
      logErrorToProduction(
        `Search API error: ${response.status} ${response.statusText}`
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
<<<<<<< HEAD
      totalCount = offline.totalCount;    }
    return {
      props: {
        initialResults: results
        query
        slug
        totalCount
      }
    }
=======
      totalCount = offline.totalCount;
    }

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount,
      },
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
    return {
      props: {
<<<<<<< HEAD
        initialResults: offline.results
        query
        slug
totalCount: offline.totalCount
      }
    };  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        initialResults: offline.results,
        query,
        slug,
        totalCount: offline.totalCount,
      },
    };
  }
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
