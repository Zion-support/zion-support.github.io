


import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';


  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {;
    name: string;

    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;

;

interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;

;

interface TalentSearchResult extends BaseSearchResult {
=======

interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;

interface TalentSearchResult extends BaseSearchResult {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type: 'talent';
  rating?: number;

;
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
;

interface CategorySearchResult extends BaseSearchResult {
=======

interface CategorySearchResult extends BaseSearchResult {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  type: 'category';

;

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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;

=======
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
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}

interface OfflineFilters {

  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;


          return aPrice - bPrice;        });
        break;
      case 'price_desc':;
        all && all.sort((a, b) => {;
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
          return bPrice - aPrice;        });
        break;


=======

            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;

=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface OfflineFilters {;
  sortBy?: string;
  category?: string;
  minPrice?: number,;
  maxPrice?: number,;
  minRating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function offlineSearch(;
  query: string;
  page = 1;
  limit = 12;
  filters: OfflineFilters = {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
): { results: SearchResult[], totalCount: number } {;
  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(;
    (p) =>;
      match(p.title) ||;
      match(p.description) ||;
      match(p.category) ||;
      p.tags?.some((t) => match(t))).map((p) => ({;
    id: p.id;
    title: p.title;
    description: p.description || '';
    type: 'product' as const;
    slug: p.id,;
    image: p.images?.[0],;
    price: p.price ?? undefined,;
    rating: p.rating,;
    author: p.author;
      ? { name: p.author.name, avatar: p.author.avatarUrl   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      : undefined,;
    tags: p.tags,;
    category: p.category,;
    date: p.createdAt})),;
  const talentResults = TALENT_PROFILES.filter(;
    (t) =>;
      match(t.full_name) ||;
      match(t.professional_title) ||;
      match(t.bio) ||;
      t.skills?.some((s) => match(s))).map((t) => ({;
    id: t.id;
    title: t.full_name;
    description: t.professional_title || '';
    type: 'talent' as const;
    slug: t.id,;
    image: t.profile_picture_url,;
    rating: t.average_rating,;
    author: { name: t.full_name, avatar: t.profile_picture_url },;
    tags: t.skills,;
    category: t.location,;
    date: undefined})),;
  const blogResults = BLOG_POSTS.filter(;
    (b) =>;
      match(b.title) ||;
      match(b.excerpt) ||;
      match(b.content) ||;
      b.tags?.some((t) => match(t))).map((b) => ({;
    id: b.slug;
    title: b.title;
    description: b.excerpt;
    type: 'blog' as const;
    slug: b.slug,;
    image: b.featuredImage,;
    tags: b.tags,;
    category: 'Blog',;
    date: b.publishedDate})),;
  let all = [...productResults, ...talentResults, ...blogResults],;
  if (filters.category) {;
    all = all.filter(r => r.category === filters.category);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) >= filters.minPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.maxPrice === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product') {;
        return (r.price ?? 0) <= filters.maxPrice!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (typeof filters.minRating === 'number') {;
    all = all.filter(r => {;
      if (r.type === 'product' || r.type === 'talent') {;
        return (r.rating ?? 0) >= filters.minRating!;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (filters.sortBy && filters.sortBy !== 'relevance') {;
    switch (filters.sortBy) {;
      case 'price_asc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;
        });
        break;
      case 'price_desc':;
        all.sort((a, b) => {;
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice;
        });
        break;
      case 'rating':;
        all.sort((a, b) => {;
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          return bRating - aRating;
        });
        break;
      default:;
        break;
    }
  } else {;
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));

=======
          return aPrice - bPrice
        });
        break;
      case 'price_desc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return bPrice - aPrice
        });
        break;
      case 'rating':
        all.sort((a, b) => {
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


  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
=======

  return { results: paginated, totalCount: all.length };
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export default function SearchResultsPage(): any ({;
  initialResults,;
  query,;
  slug,;
  totalCount,;


}: SearchResultsPageProps) {  const router = useRouter();
=======
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {
  const router = useRouter();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

}: SearchResultsPageProps) {  const router = useRouter();
=======
  return { results: paginated, totalCount: all.length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function SearchResultsPage(req, res) {
  try {
  const router = useRouter();


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      const params = new URLSearchParams({
        query: searchTerm
        page: String(page)
        limit: '12'
        sort: sortBy
      });      if (categoryFilter !== 'all') params.append('category', categoryFilter);
  // Fetch search results;
  const fetchResults = async (searchTerm: string, page = 1) => {;
    try {
      setLoading(true);
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);
      const params = new URLSearchParams({;
        query: searchTerm;
        page: String(page);
        limit: '12';
        sort: sortBy});
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);
      const response = await fetch(`/api/search?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Search API error: ${response.status}`);
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
      const offline = offlineSearch(searchTerm, page, 12, {
        sortBy
        category: categoryFilter !== 'all' ? categoryFilter : undefined
        minPrice: minPrice ? Number(minPrice) : undefined
        maxPrice: maxPrice ? Number(maxPrice) : undefined
        minRating: minRating ? Number(minRating) : undefined
      });
      if (!response.ok) {;
        throw new Error(`Search API error: ${response.status}`);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      const data = await response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data.totalCount || data.results?.length || 0);
      if (page === 1) {;
        setResults(data.results || []);
      } else {;
        setResults((prev) => [...prev, ...(data.results || [])]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });

      const offline = offlineSearch(searchTerm, page, 12, {;
        sortBy,;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,;
        minPrice: minPrice ? Number(minPrice) : undefined,;
        maxPrice: maxPrice ? Number(maxPrice) : undefined,;



=======
        minRating: minRating ? Number(minRating) : undefined}),;
      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);
      } else {
        setResults(prev => [...prev, ...offline.results]);
      }
    } finally {
      setLoading(false);    }
  }
  // Handle search input change
  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery)
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {
        shallow: true
      });
      setCurrentPage(1);    }
  }
  useEffect(() => {
    if (debouncedQuery.trim()) {
      } else {;
        setResults((prev) => [...prev, ...offline.results]);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } finally {;
      setLoading(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    if (debouncedQuery.trim()) {;
      fetchResults(debouncedQuery, 1);
    } else {;
      setResults([]);
      setTotalResults(0);    }
  }, [debouncedQuery]);
  // Load more results
  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  }
  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );

  const filteredResults = results.filter((r) => {
    if (

      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
      return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false;      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
        return false;      }
    }
    if (minRating && (r.type === 'product' |r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
        return false;
      }
    }
    return true;  });
  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc;
    }
    {} as Record<string, SearchResult[]>  );
      setTotalResults(0);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [debouncedQuery]),;

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return false;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minPrice && r.type === 'product') {;
      if ((r.price ?? 0) < Number(minPrice)) {;
        return false;
=======
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minPrice && r.type === 'product') {;
      if ((r.price ?? 0) < Number(minPrice)) {;
        return false;
      }
    }
    return true;  });


  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);

      return acc
    },
    {} as Record<string SearchResult[]>),
  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':
      case 'equipment':



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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard

=======
        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard

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
                id: result.id,
                name: result.title,
                title: result.title,
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,
                review_count: 0,
                tags: result.tags || [],
                category: result.category || '',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                currency: '$',
                created_at: new Date ().toISOString (),
                updated_at: new Date ().toISOString (),
                stock: (result as any).stock,
                in_stock: ((result as any).stock || 0) > 0
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />
          </div>
        ),
      case 'talent':
        return (

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

=======
          <div key={result.id} data-testid="result-card">
            <TalentCard
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
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);              }}
              isAuthenticated={isAuthenticated}
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


            />;
          </div>;
        );
      default:;

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
    }

  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

          >;
            <h3 className='font-semibold'>{result && result.title}</h3>;
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        );    }
  }

}
  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <>;
      <SEO
        title={`Search Results for "${query}" - Zion Marketplace`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        keywords={`${query}, search, marketplace, products, talent, services`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        canonical={`https://app.ziontechgroup.com/search/${slug}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
=======

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                    : `No results found for "${query}"`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>
              </div>
              {/* Search Input */}


                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </div>
            </div>
            {/* Controls */}


                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
                  Filters
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </Button>
                <select


                  data-testid='filter-button'>;
                  <Filter className='h-4 w-4' />                  Filters;
                </Button>;

                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                  data-testid='sort-select';

=======
                router.push (`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push (`/talent/${talent.id}?action = hire`);              }}
              is_authenticated={is_authenticated}
            />;
          </div>);
      case 'category':;
        return (
          <div key={result.id} data - testid='result - card'>            <CategoryCard;
              title={result.title}
              description={result.description || ''}
              icon={result.image || '📁'}
            />;
          </div>);
      default:;
          >;
            <h3 className='font - semibold'>{result.title}</h3>;
            <p className='text - gray - 600 dark:text - gray - 200'>;
              {result.description}
            </p>;
          </div>);    }
  }
;
  return (
    <>;
      <SEO;
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app.ziontechgroup.com / search/${slug}`}
      />;
      <div className='min - h-screen bg - gray - 50 dark:bg - gray - 900'>;
        <div;
          className='container mx - auto px - 4 py - 8';
          data - testid='search - results';
        >;
          {/* Search Header */}
          <div className='mb - 8'>;
            <div className='flex flex - col lg:flex - row lg:items - center lg:justify - between gap - 4'>;
              <div className='flex - 1'>;
                <h1 className='text - 3xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                  Search Results;
                </h1>;
                <p;
                  className='text - gray - 600 dark:text - gray - 200';
                  data - testid='results - count'                >;
                  {filtered_results.length > 0;
                    ? `Found ${filtered_results.length} results for "${query}"`;
                    : `No results found for "${query}"`}
                </p>;
              </div>;
              {/* Search Input */}
              <div className='relative w - full lg:w - 96'>;
                <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - gray - 200' />;
                <Input;
                  type='text';
                  value={search_query}
                  on_change={e => handle_search (e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl - 10'                />;
              </div>;
            </div>;
            {/* Controls */}
            <div className='flex flex - wrap items - center justify - between gap - 4 mt - 6'>;
              <div className='flex items - center gap - 2 flex - wrap'>;
                <Button;
                  variant='outline';
                  size='sm';
                  className='flex items - center gap - 2';
                  data - testid='filter - button';
                >;
                  <Filter className='h - 4 w - 4' />                  Filters;
                </Button>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
                  data - testid='sort - select';

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

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value='all'>All Categories</option>
                  {categories.map(c => (                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className='flex items-center gap-1'>
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>
                <div className="flex items-center gap-1">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </div>
                <select
                  value={minRating}

                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
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
              <div className='flex items-center gap-2'>
              <div className="flex items-center gap-2">

                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  size="sm"
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  data-testid="view-mode-grid"
                  className={viewMode === 'grid' ? 'active' : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setViewMode('list')}
                  data-testid='view-mode-list'
                  className={viewMode === 'list' ? 'active' : ''}
                >
                  <List className='h-4 w-4' />                </Button>
              </div>
            </div>
          </div>
          {/* Loading State */}
          {loading && results.length === 0 && (
            <div className='flex justify-center py-12'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>            </div>
          )}
          {/* Empty State */}
                  variant={viewMode === 'list' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  size="sm"
                  onClick={() => setViewMode('list')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  data-testid="view-mode-list"
                  className={viewMode === 'list' ? 'active' : ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                >;
                  <List className='h-4 w-4' />                </Button>;
              </div>;
            </div>;
          </div>;
          {/* Loading State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {loading && results.length === 0 && (

          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
                    {type}s ({typeResults.length})

                  </h2>
=======
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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


                    )}
                  </Button>;
                </div>;
              )}
            </div>;
          )}


      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );

=======
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
    );


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    let results = [];
    let totalCount = 0;

            <div className='flex justify - center py - 12'>;
              <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600'></div>            </div>)}
          {/* Empty State */}
          {!loading && filtered_results.length === 0 && (
            <div data - testid='search - empty - state'>              <SearchEmptyState on_retry={() => fetch_results (search_query)} />;
            </div>)}
          {/* Results */}
          {filtered_results.length > 0 && (
            <div className='space - y-8'>;
              {Object.entries (grouped_results).map (([type, type_results]) => (
                <div key={type}>;
                  <h2 className='text - xl font - semibold text - gray - 900 dark:text - white mb - 4 capitalize'>                    {type}s ({type_results.length});
                  </h2>;
                  <div;
                    className={
                      view_mode === 'grid';
                        ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6';
                        : 'space - y-4';
                    }
                  >;
                    {type_results.map (renderResultCard)}
                  </div>;
                </div>))}
              {/* Load More Button */}
              {results.length < total_results && (
                <div className='flex justify - center py - 8'>;
                  <Button;
                    on_click={load_more}
                    disabled={loading}
                    className='flex items - center gap - 2';
                  >;
                    {loading ? (
                      <>;
                        <div className='animate - spin rounded - full h - 4 w - 4 border - b-2 border - white'></div>                        Loading...;
                      </>) : (
                      'Load More Results')}
                  </Button>;
                </div>)}
            </div>)}
        </div>;
      </div>;
    </>);
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {
  const params = context.params;
  const slug = params?.slug as string,
  // Convert slug back to query term;
  const query = slug ? slug.replace (/-/g, ' ') : '';
;
  try {
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',
    log_info (`Fetching search results for slug: ${slug}, query: ${query}`);
;
    const response = await fetch (
      `${apiBaseUrl}/api / search?query=${encodeURIComponent (query)}&limit = 12`    );
;
    let results = [];
    let total_count = 0;
;
    // Check condition
if ( {) {
  $2
}
      const data = await response.json ();
      results = data.results || [];
      total_count = data.total_count || results.length;
      log_info (`Server - side fetch successful: ${results.length} results`);

    } else {
      logErrorToProduction (
        `Search API error: ${response.status} ${response.status_text}`);
      const offline = offline_search (query, 1, 12, { sort_by: 'relevance' });
      results = offline.results;


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

}

=======
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;
      totalCount = offline.totalCount
    }

    return {
      props: {
        initialResults: results,
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
  }

};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      total_count = offline.total_count;    }
    return {
      props: {
        initial_results: results,
        query,
        slug,
        total_count,
      },
    }
  } catch (error) {
    logErrorToProduction ('Error fetching search results:', { data: error });
    const offline = offline_search (query, 1, 12, { sort_by: 'relevance' });
;
    return {
      props: {
        initial_results: offline.results,
        query,
        slug,
total_count: offline.total_count,
      },
    }  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filteredResults.length > 0 && (;
            <div className="space-y-8">;
              {Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">;
                    {type}s ({typeResults.length});
                  </h2>;
                  <div;
                    className={;
                      viewMode === 'grid';
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
                        : 'space-y-4';
                      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {typeResults.map(renderResultCard)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
              {/* Load More Button */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {results.length < totalResults && (;
                <div className="flex justify-center py-8">;
                  <Button;
                    onClick={loadMore  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    disabled={loading  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="flex items-center gap-2";
                  >;
                    {loading ? (;
                      <>;
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>;
                        Loading...;
                      </>;
                    ) : (;
                      'Load More Results';
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Button>;
                </div>;
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {;
  const params = context.params;
  const slug = params?.slug as string;
  // Convert slug back to query term;
  const query = slug ? slug.replace(/-/g, ' ') : '',;
  try {
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',;
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);
    const response = await fetch(;
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`);
    let results = [];
    let totalCount = 0;
    if (response.ok) {;


      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
