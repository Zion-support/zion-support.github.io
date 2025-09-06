import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
<<<<<<< HEAD
<<<<<<< HEAD
import { Search, Filter, Grid, List } from 'lucide-react';
=======
import { Search, Filter, Grid, List } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Search, Filter, Grid, List } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

interface OfflineFilters {
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  minRating?: number;
=======
  minRating?: number
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function offlineSearch(
  query: string,
  page = 1;
  limit = 12;
  filters: OfflineFilters = {}
<<<<<<< HEAD
): { results: SearchResult[]; totalCount: number } {
=======
  minRating?: number
}

function offlineSearch(
  query: string,
  page = 1;
  limit = 12;
  filters: OfflineFilters = {}
): { results: SearchResult[], totalCount: number } {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
): { results: SearchResult[], totalCount: number } {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);

  const productResults = MARKETPLACE_LISTINGS.filter(
<<<<<<< HEAD
<<<<<<< HEAD
    p =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some(t => match(t))
  ).map(p => ({
=======
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some((t) => match(t));
  ).map((p) => ({
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    (p) =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some((t) => match(t));
  ).map((p) => ({
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
      : undefined,
=======
      : undefined;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    tags: p.tags,
    category: p.category,
    date: p.createdAt})),
  const talentResults = TALENT_PROFILES.filter(
    (t) =>
      match(t.full_name) ||
      match(t.professional_title) ||
      match(t.bio) ||
<<<<<<< HEAD
      t.skills?.some(s => match(s))
  ).map(t => ({
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      t.skills?.some((s) => match(s));
  ).map((t) => ({
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
    date: undefined,
  }));

=======
    date: undefined})),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const blogResults = BLOG_POSTS.filter(
    (b) =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
<<<<<<< HEAD
      b.tags?.some(t => match(t))
  ).map(b => ({
=======
    date: undefined})),
  const blogResults = BLOG_POSTS.filter(
    (b) =>
      match(b.title) ||
      match(b.excerpt) ||
      match(b.content) ||
      b.tags?.some((t) => match(t));
  ).map((b) => ({
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      b.tags?.some((t) => match(t));
  ).map((b) => ({
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    id: b.slug,
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featuredImage,
    tags: b.tags,
    category: 'Blog',
<<<<<<< HEAD
<<<<<<< HEAD
    date: b.publishedDate,
  }));
=======
    date: b.publishedDate})),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    date: b.publishedDate})),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  let all = [...productResults, ...talentResults, ...blogResults];

  if (filters.category) {
<<<<<<< HEAD
<<<<<<< HEAD
    all = all.filter(r => r.category === filters.category);
=======
    all = all.filter(r => r.category === filters.category)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    all = all.filter(r => r.category === filters.category)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
<<<<<<< HEAD
<<<<<<< HEAD
        return (r.price ?? 0) >= filters.minPrice!;
      }
      return true;
    });
=======
        return (r.price ?? 0) >= filters.minPrice!
      }
      return true
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return (r.price ?? 0) >= filters.minPrice!
      }
      return true
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
<<<<<<< HEAD
<<<<<<< HEAD
        return (r.price ?? 0) <= filters.maxPrice!;
      }
      return true;
    });
=======
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return (r.price ?? 0) <= filters.maxPrice!
      }
      return true
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (typeof filters.minRating === 'number') {
    all = all.filter(r => {
      if (r.type === 'product' || r.type === 'talent') {
<<<<<<< HEAD
<<<<<<< HEAD
        return (r.rating ?? 0) >= filters.minRating!;
      }
      return true;
    });
=======
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return (r.rating ?? 0) >= filters.minRating!
      }
      return true
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
<<<<<<< HEAD
<<<<<<< HEAD
          return aPrice - bPrice;
=======
          return aPrice - bPrice
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          return aPrice - bPrice
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        });
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
<<<<<<< HEAD
<<<<<<< HEAD
          return bPrice - aPrice;
=======
          return bPrice - aPrice
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          return bPrice - aPrice
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        });
        break;
      case 'rating':
        all.sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
          const aRating =
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
          return bRating - aRating;
=======
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;
          return bRating - aRating
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
  initialResults,
  query,
  slug,
  totalCount,
}: SearchResultsPageProps) {
=======
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
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const router = useRouter();
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
<<<<<<< HEAD
<<<<<<< HEAD
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);

=======
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
<<<<<<< HEAD
<<<<<<< HEAD
        sort: sortBy,
      });
=======
        sort: sortBy}),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        sort: sortBy}),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);

      const response = await fetch(`/api/search?${params.toString()}`);

      if (!response.ok) {
<<<<<<< HEAD
<<<<<<< HEAD
        throw new Error(`Search API error: ${response.status}`);
      }

      const data = await response.json();
      logInfo('Search results received:', { data: data });
=======
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json();
      logInfo('Search results received:', { data: data }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        throw new Error(`Search API error: ${response.status}`)
      }

      const data = await response.json();
      logInfo('Search results received:', { data: data }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      setTotalResults(data.totalCount || data.results?.length || 0);

      if (page === 1) {
<<<<<<< HEAD
<<<<<<< HEAD
        setResults(data.results || []);
=======
        setResults(data.results || [])
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
      setLoading(false);
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
<<<<<<< HEAD
<<<<<<< HEAD
        shallow: true,
      });
      setCurrentPage(1);
=======
        shallow: true}),
      setCurrentPage(1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        shallow: true}),
      setCurrentPage(1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
<<<<<<< HEAD
<<<<<<< HEAD
      fetchResults(debouncedQuery, 1);
    } else {
      setResults([]);
      setTotalResults(0);
=======
      fetchResults(debouncedQuery, 1)
    } else {
      setResults([]);
      setTotalResults(0)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      fetchResults(debouncedQuery, 1)
    } else {
      setResults([]);
      setTotalResults(0)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, [debouncedQuery]);

  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
<<<<<<< HEAD
<<<<<<< HEAD
    fetchResults(searchQuery, nextPage);
=======
    fetchResults(searchQuery, nextPage)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );

<<<<<<< HEAD
  const filteredResults = results.filter(r => {
=======
    fetchResults(searchQuery, nextPage)
  };

  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );

  const filteredResults = results.filter((r) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const filteredResults = results.filter((r) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
<<<<<<< HEAD
<<<<<<< HEAD
      return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false;
=======
      return false
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return false
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
<<<<<<< HEAD
<<<<<<< HEAD
        return false;
=======
        return false
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return false
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }
    if (minRating && (r.type === 'product' || r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
<<<<<<< HEAD
<<<<<<< HEAD
        return false;
      }
    }
    return true;
=======
        return false
      }
    }
    return true
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return false
      }
    }
    return true
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });

  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
<<<<<<< HEAD
<<<<<<< HEAD
      return acc;
    },
    {} as Record<string, SearchResult[]>
=======
      return acc
    };
    {} as Record<string, SearchResult[]>;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return acc
    };
    {} as Record<string, SearchResult[]>;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  );

  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':
        return (
<<<<<<< HEAD
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
                in_stock: ((result as any).stock || 0) > 0,
=======
                in_stock: ((result as any).stock || 0) > 0
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                in_stock: ((result as any).stock || 0) > 0
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
            />
          </div>
        );
      case 'talent':
        return (
<<<<<<< HEAD
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
                availability_type: 'available',
              }}
=======
                availability_type: 'available'}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`)
              }}
<<<<<<< HEAD
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);
=======
                availability_type: 'available'}}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`)
              }}
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              onRequestHire={(talent) => {
                router.push(`/talent/${talent.id}?action=hire`)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              }}
              isAuthenticated={isAuthenticated}
            />
          </div>
        );
      case 'category':
        return (
<<<<<<< HEAD
<<<<<<< HEAD
          <div key={result.id} data-testid='result-card'>
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <div key={result.id} data-testid="result-card">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <CategoryCard
              title={result.title}
              description={result.description || ''}
              icon={result.image || '📁'}
            />
          </div>
        );
      default:
<<<<<<< HEAD
<<<<<<< HEAD
        
=======
        return (
          <div
            key={result.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          >
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {result.description}
            </p>
          </div>
<<<<<<< HEAD
        );
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
    <>
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com/search/${slug}`}
      />

<<<<<<< HEAD
<<<<<<< HEAD
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
=======
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                  className='text-gray-600 dark:text-gray-200'
                  data-testid='results-count'
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="text-gray-600 dark:text-gray-200"
                  data-testid="results-count"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  {filteredResults.length > 0
                    ? `Found ${filteredResults.length} results for "${query}"`
                    : `No results found for "${query}"`}
                </p>
              </div>

              {/* Search Input */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='relative w-full lg:w-96'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />
=======
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <Input
                  type="text"
                  value={searchQuery}
<<<<<<< HEAD
                  onChange={e => handleSearch(e.target.value)}
                  placeholder='Search marketplace...'
                  className='pl-10'
=======
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                />
              </div>
            </div>

            {/* Controls */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6'>
              <div className='flex items-center gap-2 flex-wrap'>
=======
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
<<<<<<< HEAD
                  <Filter className='h-4 w-4' />
=======
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Filter className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Filters
                </Button>

                <select
                  value={sortBy}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setSortBy(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                  data-testid='sort-select'
                >
                  <option value='relevance'>Relevance</option>
                  <option value='newest'>Newest</option>
                  <option value='price_asc'>Price: Low to High</option>
                  <option value='price_desc'>Price: High to Low</option>
                  <option value='rating'>Highest Rated</option>
=======
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
=======
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </select>

                <select
                  value={categoryFilter}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setCategoryFilter(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                >
                  <option value='all'>All Categories</option>
                  {categories.map(c => (
=======
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex items-center gap-1'>
=======
                <div className="flex items-center gap-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                    onChange={e => setMaxPrice(e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  />
                </div>

                <select
                  value={minRating}
<<<<<<< HEAD
<<<<<<< HEAD
                  onChange={e => setMinRating(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
=======
                  onChange={(e) => setMinRating(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
                  <List className='h-4 w-4' />
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <List className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && results.length === 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex justify-center py-12'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
=======
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
            <div data-testid='search-empty-state'>
=======
            <div data-testid="search-empty-state">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div data-testid="search-empty-state">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}

          {/* Results */}
          {filteredResults.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>
=======
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {type}s ({typeResults.length})
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
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex justify-center py-8'>
=======
                <div className="flex justify-center py-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
<<<<<<< HEAD
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
=======
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

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
<<<<<<< HEAD
<<<<<<< HEAD
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);

    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`
=======
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    );

    let results = [];
    let totalCount = 0;

    if (response.ok) {
      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
<<<<<<< HEAD
<<<<<<< HEAD
      logInfo(`Server-side fetch successful: ${results.length} results`);
=======
      logInfo(`Server-side fetch successful: ${results.length} results`)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } else {
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;
<<<<<<< HEAD
      totalCount = offline.totalCount;
=======
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;
      totalCount = offline.totalCount
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      totalCount = offline.totalCount
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    return {
      props: {
        initialResults: results,
<<<<<<< HEAD
<<<<<<< HEAD
        query,
        slug,
        totalCount,
      },
    };
=======
        query;
        slug;
        totalCount}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error }),
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
    return {
      props: {
        initialResults: offline.results,
<<<<<<< HEAD
        query,
        slug,
        totalCount: offline.totalCount,
      },
    };
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        query;
        slug;
        totalCount: offline.totalCount}}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
};
