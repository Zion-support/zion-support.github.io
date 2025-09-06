import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
<<<<<<< HEAD
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components/SEO';
=======
import { Search, Filter, Grid, List } from 'lucide-react';
import { Search, Filter, Grid, List } from 'lucide-react'
import { Search, Filter, Grid, List } from 'lucide-react'
ursor/integrate-build-improve-and-re-verify-b76c
import { SEO } from '@/components/SEO';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface BaseSearchResult {
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  tags?: string[];
  category?: string;
  date?: string;

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';

interface CategorySearchResult extends BaseSearchResult {
  type: 'category';

type SearchResult =
  | ProductSearchResult
  | TalentSearchResult
  | BlogSearchResult
  | CategorySearchResult;

// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult =>
  result.type === 'product' || result.type === 'equipment';

const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' ||
  result.type === 'equipment' ||
  result.type === 'talent';

interface SearchResultsPageProps {
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
<<<<<<< HEAD
=======

interface BaseSearchResult {
  id: string,
  title: string,
  description?: string;
  slug: string,
  image?: string;
  author?: {
    name: string,
    avatar?: string
  };
  tags?: string[];
  category?: string;
  date?: string
}

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment',
  price?: number;
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

type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult;

// Type guard functions
const hasPrice = (result: SearchResult): result is ProductSearchResult => 
  result.type === 'product' || result.type === 'equipment';

const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';

interface SearchResultsPageProps {
ursor/integrate-build-improve-and-re-verify-b76c
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface OfflineFilters {
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
<<<<<<< HEAD
=======
  minRating?: number
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

function offlineSearch(
  query: string,
  page = 1,
  limit = 12,
  filters: OfflineFilters = {}
<<<<<<< HEAD
): { results: SearchResult[]; totalCount: number } {  const term = query.toLowerCase().trim();
=======
): { results: SearchResult[]; totalCount: number } {
  minRating?: number
}

function offlineSearch(
  query: string,
  page = 1;
  limit = 12;
  filters: OfflineFilters = {}
): { results: SearchResult[], totalCount: number } {
): { results: SearchResult[], totalCount: number } {
ursor/integrate-build-improve-and-re-verify-b76c
  const term = query.toLowerCase().trim();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const productResults = MARKETPLACE_LISTINGS.filter(
    p =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some(t => match(t))
<<<<<<< HEAD
  ).map(p => ({    id: p.id,
=======
  ).map(p => ({
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some((t) => match(t));
  ).map((p) => ({
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some((t) => match(t));
  ).map((p) => ({
ursor/integrate-build-improve-and-re-verify-b76c
    id: p.id,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
      : undefined;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    tags: p.tags,
    category: p.category,
    date: p.createdAt,
  }));

  const talentResults = TALENT_PROFILES.filter(
    t =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.bio) ||
      t.skills?.some(s => match(s))
<<<<<<< HEAD
  ).map(t => ({    id: t.id,
=======
  ).map(t => ({
      : undefined;
    tags: p.tags,
    category: p.category,
    date: p.createdAt})),
  const talentResults = TALENT_PROFILES.filter(
    (t) =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.bio) ||
      t.skills?.some((s) => match(s));
  ).map((t) => ({
      t.skills?.some((s) => match(s));
  ).map((t) => ({
ursor/integrate-build-improve-and-re-verify-b76c
    id: t.id,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  }));

<<<<<<< HEAD
=======
    date: undefined})),
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const blogResults = BLOG_POSTS.filter(
    b =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
      b.tags?.some(t => match(t))
<<<<<<< HEAD
  ).map(b => ({    id: b.slug,
=======
  ).map(b => ({
    date: undefined})),
  const blogResults = BLOG_POSTS.filter(
    (b) =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
      b.tags?.some((t) => match(t));
  ).map((b) => ({
      b.tags?.some((t) => match(t));
  ).map((b) => ({
ursor/integrate-build-improve-and-re-verify-b76c
    id: b.slug,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featuredImage,
    tags: b.tags,
    category: 'Blog',
    date: b.publishedDate,
  }));
<<<<<<< HEAD
  let all = [...productResults, ...talentResults, ...blogResults];

  if (filters.category) {
    all = all.filter(r => r.category === filters.category);  }
=======
    date: b.publishedDate})),
    date: b.publishedDate})),
ursor/integrate-build-improve-and-re-verify-b76c

  let all = [...productResults, ...talentResults, ...blogResults];

  if (filters.category) {
    all = all.filter(r => r.category === filters.category);
    all = all.filter(r => r.category === filters.category)
    all = all.filter(r => r.category === filters.category)
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
        return (r.price ?? 0) >= filters.minPrice!
      }
      return true
    })
        return (r.price ?? 0) >= filters.minPrice!
      }
      return true
    })
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
        return (r.price ?? 0) <= filters.maxPrice!;
      }
      return true;
<<<<<<< HEAD
    });  }
=======
    });
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
        return (r.rating ?? 0) >= filters.minRating!;
      }
      return true;
<<<<<<< HEAD
    });  }
=======
    });
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
          return aPrice - bPrice
          return aPrice - bPrice
ursor/integrate-build-improve-and-re-verify-b76c
        });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
<<<<<<< HEAD
          return bPrice - aPrice;        });
=======
          return bPrice - aPrice;
          return bPrice - aPrice
          return bPrice - aPrice
ursor/integrate-build-improve-and-re-verify-b76c
        });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        break;
      case 'rating':
        all.sort((a, b) => {
          const aRating =
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
          return bRating - aRating;
<<<<<<< HEAD
=======
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  return { results: paginated, totalCount: all.length };

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount,
<<<<<<< HEAD
}: SearchResultsPageProps) {  const router = useRouter();
=======
}: SearchResultsPageProps) {
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating
        });
        break;
      default: break
    }
  } else {
    all.sort((a, b) => a.title.localeCompare(b.title))
  }
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);
  return { results: paginated, totalCount: all.length }
}

export default function SearchResultsPage({
ursor/integrate-build-improve-and-re-verify-b76c
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {
ursor/integrate-build-improve-and-re-verify-b76c
  const router = useRouter();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======

      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy,
<<<<<<< HEAD
      });      if (categoryFilter !== 'all') params.append('category', categoryFilter);
=======
      });
        sort: sortBy}),
        sort: sortBy}),
ursor/integrate-build-improve-and-re-verify-b76c
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
=======
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json();
      logInfo('Search results received:', { data: data }),
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json();
      logInfo('Search results received:', { data: data }),
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      setTotalResults(data.totalCount || data.results?.length || 0);

      if (page === 1) {
        setResults(data.results || []);
<<<<<<< HEAD
=======
        setResults(data.results || [])
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      } else {
        setResults(prev => [...prev, ...(data.results || [])]);
      }
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy,
        category: categoryFilter !== 'all' ? categoryFilter : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minRating: minRating ? Number(minRating) : undefined,
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
=======
      setLoading(false);
        setResults(data.results || [])
      } else {
        setResults((prev) => [...prev, ...(data.results || [])])
      }
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error }),
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minRating: minRating ? Number(minRating) : undefined}),
      setTotalResults(offline.totalCount);
      if (page === 1) {
        setResults(offline.results)
      } else {
        setResults((prev) => [...prev, ...offline.results])
      }
    } finally {
      setLoading(false)
      setLoading(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
        shallow: true,
      });
<<<<<<< HEAD
      setCurrentPage(1);    }
=======
      setCurrentPage(1);
        shallow: true}),
      setCurrentPage(1)
        shallow: true}),
      setCurrentPage(1)
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchResults(debouncedQuery, 1);
    } else {
      setResults([]);
<<<<<<< HEAD
      setTotalResults(0);    }
=======
      setTotalResults(0);
      fetchResults(debouncedQuery, 1)
    } else {
      setResults([]);
      setTotalResults(0)
      fetchResults(debouncedQuery, 1)
    } else {
      setResults([]);
      setTotalResults(0)
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }, [debouncedQuery]);

  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
<<<<<<< HEAD
=======
    fetchResults(searchQuery, nextPage)
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const categories = Array.from(
    new Set(results.map(r => r.category).filter(Boolean))
  );

<<<<<<< HEAD
  const filteredResults = results.filter(r => {    if (
=======
  const filteredResults = results.filter(r => {
    fetchResults(searchQuery, nextPage)
  };

  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );

  const filteredResults = results.filter((r) => {
  const filteredResults = results.filter((r) => {
ursor/integrate-build-improve-and-re-verify-b76c
    if (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
      return false
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false
      return false
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false
ursor/integrate-build-improve-and-re-verify-b76c
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;
        return false
        return false
ursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    if (minRating && (r.type === 'product' || r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
        return false;
      }
    }
<<<<<<< HEAD
    return true;  });
=======
    return true;
        return false
      }
    }
    return true
        return false
      }
    }
    return true
ursor/integrate-build-improve-and-re-verify-b76c
  });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc;
    },
<<<<<<< HEAD
    {} as Record<string, SearchResult[]>  );
=======
    {} as Record<string, SearchResult[]>
      return acc
    };
    {} as Record<string, SearchResult[]>;
      return acc
    };
    {} as Record<string, SearchResult[]>;
ursor/integrate-build-improve-and-re-verify-b76c
  );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>            <ProductCard
=======
          <div key={result.id} data-testid='result-card'>
          <div key={result.id} data-testid="result-card">
          <div key={result.id} data-testid="result-card">
ursor/integrate-build-improve-and-re-verify-b76c
            <ProductCard
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                in_stock: ((result as any).stock || 0) > 0,              }}
=======
                in_stock: ((result as any).stock || 0) > 0,
                in_stock: ((result as any).stock || 0) > 0
                in_stock: ((result as any).stock || 0) > 0
ursor/integrate-build-improve-and-re-verify-b76c
              }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            />
          </div>
        );
      case 'talent':
        return (
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>            <TalentCard
=======
          <div key={result.id} data-testid='result-card'>
          <div key={result.id} data-testid="result-card">
          <div key={result.id} data-testid="result-card">
ursor/integrate-build-improve-and-re-verify-b76c
            <TalentCard
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
              }}
<<<<<<< HEAD
=======
                availability_type: 'available'}}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
<<<<<<< HEAD
                router.push(`/talent/${talent.id}?action=hire`);              }}
=======
                router.push(`/talent/${talent.id}?action=hire`);
                availability_type: 'available'}}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`)
              }}
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`)
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`)
ursor/integrate-build-improve-and-re-verify-b76c
              }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          <div key={result.id} data-testid="result-card">
          <div key={result.id} data-testid="result-card">
ursor/integrate-build-improve-and-re-verify-b76c
            <CategoryCard
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              title={result.title}
              description={result.description || ''}
              icon={result.image || '📁'}
            />
          </div>
        );
      default:
        
<<<<<<< HEAD
=======
        return (
          <div
            key={result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h3 className='font-semibold'>{result.title}</h3>
            <p className='text-gray-600 dark:text-gray-200'>
              {result.description}
            </p>
          </div>
<<<<<<< HEAD
        );    }
=======
        );
        return (
          <div
            key={result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
          >
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {result.description}
            </p>
          </div>
        )
        )
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
      />

      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
<<<<<<< HEAD
=======
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  className="text-gray-600 dark:text-gray-200"
                  data-testid="results-count"
ursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </p>
              </div>

              {/* Search Input */}
              <div className='relative w-full lg:w-96'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />
<<<<<<< HEAD
=======
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <Input
                  type='text'
                  value={searchQuery}
                  onChange={e => handleSearch(e.target.value)}
                  placeholder='Search marketplace...'
<<<<<<< HEAD
                  className='pl-10'                />
=======
                  className='pl-10'
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
ursor/integrate-build-improve-and-re-verify-b76c
                />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>

            {/* Controls */}
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6'>
              <div className='flex items-center gap-2 flex-wrap'>
<<<<<<< HEAD
=======
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
                  <Filter className="h-4 w-4" />
ursor/integrate-build-improve-and-re-verify-b76c
                  Filters
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
ursor/integrate-build-improve-and-re-verify-b76c
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
ursor/integrate-build-improve-and-re-verify-b76c
                </select>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
ursor/integrate-build-improve-and-re-verify-b76c
                    <option key={c} value={c}>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      {c}
                    </option>
                  ))}
                </select>

                <div className='flex items-center gap-1'>
<<<<<<< HEAD
=======
                <div className="flex items-center gap-1">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <input
                    type='number'
                    placeholder='Min $'
                    value={minPrice}
<<<<<<< HEAD
                    onChange={e => setMinPrice(e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'
=======
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  />
                  <span>-</span>
                  <input
                    type='number'
                    placeholder='Max $'
                    value={maxPrice}
<<<<<<< HEAD
                    onChange={e => setMaxPrice(e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />
=======
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
ursor/integrate-build-improve-and-re-verify-b76c
                  />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>

                <select
                  value={minRating}
                  onChange={e => setMinRating(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
<<<<<<< HEAD
=======
                  onChange={(e) => setMinRating(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                  <List className="h-4 w-4" />
ursor/integrate-build-improve-and-re-verify-b76c
                </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
ursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          )}

          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
<<<<<<< HEAD
            <div data-testid='search-empty-state'>              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
=======
            <div data-testid='search-empty-state'>
            <div data-testid="search-empty-state">
            <div data-testid="search-empty-state">
ursor/integrate-build-improve-and-re-verify-b76c
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
ursor/integrate-build-improve-and-re-verify-b76c
                    {type}s ({typeResults.length})
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
                <div className="flex justify-center py-8">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
ursor/integrate-build-improve-and-re-verify-b76c
                        Loading...
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {
  const params = context.params;
  const slug = params?.slug as string;

  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '';

  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);

    const response = await fetch(
<<<<<<< HEAD
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );
=======
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
ursor/integrate-build-improve-and-re-verify-b76c
    );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    let results = [];
    let totalCount = 0;

    if (response.ok) {
      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
<<<<<<< HEAD
=======
      logInfo(`Server-side fetch successful: ${results.length} results`)
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } else {
      logErrorToProduction(
        `Search API error: ${response.status} ${response.statusText}`
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
<<<<<<< HEAD
      totalCount = offline.totalCount;    }
=======
      totalCount = offline.totalCount;
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;
      totalCount = offline.totalCount
      totalCount = offline.totalCount
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount,
      },
    };
<<<<<<< HEAD
=======
        query;
        slug;
        totalCount}}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error });
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });

    return {
      props: {
        initialResults: offline.results,
        query,
        slug,
        totalCount: offline.totalCount,
      },
<<<<<<< HEAD
    };  }
=======
    };
        query;
        slug;
        totalCount}}
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error }),
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
    return {
      props: {
        initialResults: offline.results,
        query;
        slug;
        totalCount: offline.totalCount}}
        query;
        slug;
        totalCount: offline.totalCount}}
ursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
};
