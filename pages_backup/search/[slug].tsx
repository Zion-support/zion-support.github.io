
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
<<<<<<< HEAD


import { Search, Filter, Grid, List } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

=======
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
interface BaseSearchResult {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;

<<<<<<< HEAD
  author?: {
    name: string;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;
<<<<<<< HEAD


  author?: {
    name: string;
    avatar?: string
  },
  tags?: string[],
  category?: string;
  date?: string
}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
<<<<<<< HEAD


=======
  type: 'talent';
  rating?: number;
>>>>>>> origin/cursor/delete-old-data-records-6bba

;
interface BlogSearchResult extends BaseSearchResult {'
  type: 'blog';
;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
type SearchResult =;
  | ProductSearchResult;
  | TalentSearchResult;
  | BlogSearchResult;
  | CategorySearchResult;
<<<<<<< HEAD


=======
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
  result.type === 'product' |result.type === 'equipment';
const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' |
  result.type === 'equipment' |
  result.type === 'talent';
interface SearchResultsPageProps {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;


const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult => 
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent',

interface TalentSearchResult extends BaseSearchResult {
  type: 'talent';
  rating?: number;

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';

interface CategorySearchResult extends BaseSearchResult {
  type: 'category';

interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
interface CategorySearchResult extends BaseSearchResult {
  type: 'category';

type SearchResult = any;
type SearchResult =
  | ProductSearchResult
  | TalentSearchResult
  | BlogSearchResult
  | CategorySearchResult;

// Type guard functions
  result.type === 'product' || result.type === 'equipment';

const hasRating = (
  result: SearchResult
): result is ProductSearchResult | TalentSearchResult =>
  result.type === 'product' ||
  result.type === 'equipment' ||
  result.type === 'talent';

interface SearchResultsPageProps {

<<<<<<< HEAD
  initialResults: SearchResult[],
  query: string,
  slug: string,
  totalCount: number
}
interface BaseSearchResult {;
  id: string;
  title: string;
  description?: string,;
  slug: string;
  image?: string,;
  author?: {;
    name: string;
    avatar?: string;
  },;
  tags?: string[],;
  category?: string,;
  date?: string;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment',;
  price?: number,;
  rating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface TalentSearchResult extends BaseSearchResult {;
  type: 'talent',;
  rating?: number;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface BlogSearchResult extends BaseSearchResult {;
  type: 'blog';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
interface CategorySearchResult extends BaseSearchResult {;
  type: 'category';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
type SearchResult = ProductSearchResult | TalentSearchResult | BlogSearchResult | CategorySearchResult;
// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result.type === 'product' || result.type === 'equipment';
const hasRating = (result: SearchResult): result is ProductSearchResult | TalentSearchResult =>;
  result.type === 'product' || result.type === 'equipment' || result.type === 'talent';
interface SearchResultsPageProps {;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;


interface OfflineFilters {
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
<<<<<<< HEAD



=======
  minRating?: number;
function offlineSearch(
  query: string
  page = 1
  limit = 12
  filters: OfflineFilters = {}
): { results: SearchResult[]; totalCount: number } {  const term = query.toLowerCase().trim();
  const match = (text?: string) => text?.toLowerCase().includes(term);
  const productResults = MARKETPLACE_LISTINGS.filter(
    p =>
      match(p.title) |
      match(p.description) |
      match(p.category) |
      p.tags?.some(t => match(t))
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
  }));
  const talentResults = TALENT_PROFILES.filter(
    t =>
      match(t.full_name) |
      match(t.professional_title) |
      match(t.bio) |
      t.skills?.some(s => match(s))
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
  }));
  const blogResults = BLOG_POSTS.filter(
    b =>
      match(b.title) |
      match(b.excerpt) |
      match(b.content) |
      b.tags?.some(t => match(t))
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
  let all = [...productResults, ...talentResults, ...blogResults];
  if (filters.category) {
    all = all.filter(r => r.category === filters.category);  }
  if (typeof filters.minPrice === 'number') {
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
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          return aPrice - bPrice;        });
        break;'
      case 'price_desc':;
        all && all.sort((a, b) => {;'
          const aPrice = a && a.type === 'product' ? (a && a.price ?? 0) : 0;'
          const bPrice = b && b.type === 'product' ? (b && b.price ?? 0) : 0;
          return bPrice - aPrice;        });
        break;
<<<<<<< HEAD



=======

            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function offlineSearch() { return null; }
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
    title: p.title;'
    description: p.description || '';'
    type: 'product' as const;
    slug: p.id,;
    image: p.images?.[0],;
    price: p.price ?? undefined,;
    rating: p.rating,;
    author: p.author;
      ? { name: p.author.name, avatar: p.author.avatarUrl   } catch (error) {"
    console.error("Error:", error);"
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
    title: t.full_name;'
    description: t.professional_title || '';'
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
    description: b.excerpt;'
    type: 'blog' as const;
    slug: b.slug,;
    image: b.featuredImage,;
    tags: b.tags,;'
    category: 'Blog',;
    date: b.publishedDate})),;
  let all = [...productResults, ...talentResults, ...blogResults],;
  if (filters.category) {;
    all = all.filter(r => r.category === filters.category);
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
  if (typeof filters.minPrice === 'number') {;
    all = all.filter(r => {;'
      if (r.type === 'product') {;
        return (r.price ?? 0) >= filters.minPrice!;
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
  if (typeof filters.maxPrice === 'number') {;
    all = all.filter(r => {;'
      if (r.type === 'product') {;
        return (r.price ?? 0) <= filters.maxPrice!;
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'
  if (typeof filters.minRating === 'number') {;
    all = all.filter(r => {;'
      if (r.type === 'product' || r.type === 'talent') {;
        return (r.rating ?? 0) >= filters.minRating!;
        } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return true;
    });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  if (filters.sortBy && filters.sortBy !== 'relevance') {;
    switch (filters.sortBy) {;'
      case 'price_asc':;
        all.sort((a, b) => {;'
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;'
          const bPrice = b.type === 'product' ? (b.price ?? 0) : 0;
          return aPrice - bPrice;
        });
        break;'
      case 'price_desc':;
        all.sort((a, b) => {;'
          return bPrice - aPrice;
        });
        break;'
      case 'rating':;
        all.sort((a, b) => {;'
          const aRating = (a.type === 'product' || a.type === 'talent') ? (a.rating ?? 0) : 0;'
          const bRating = (b.type === 'product' || b.type === 'talent') ? (b.rating ?? 0) : 0;

minRating?: number;

function offlineSearch(
  query: string
  page = 1
  limit = 12
  filters: OfflineFilters = {}
): { results: SearchResult[]; totalCount: number } {
  const productResults = MARKETPLACE_LISTINGS.filter(
p =>
      match(p.title) ||
      match(p.description) ||
      match(p.category) ||
      p.tags?.some(t => match(t))
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
  }));
  const talentResults = TALENT_PROFILES.filter(
    t =>
      match(t.full_name) |
      match(t.professional_title) |
      match(t.bio) |
      t.skills?.some(s => match(s))
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
  }));
  const blogResults = BLOG_POSTS.filter(
    b =>
      match(b.title) |
      match(b.excerpt) |
      match(b.content) |
      b.tags?.some(t => match(t))
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

  let all = [...productResults, ...talentResults, ...blogResults];
  if (filters.category) {
all = all.filter(r => r.category === filters.category);
  }
  if (typeof filters.minPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
return (r.price ?? 0) >= filters.minPrice!;
      }
      return true;
    });
  }
  if (typeof filters.maxPrice === 'number') {
    all = all.filter(r => {
      if (r.type === 'product') {
return (r.price ?? 0) <= filters.maxPrice!;
      }
      return true;
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

  if (filters.sortBy && filters.sortBy !== 'relevance') {
    switch (filters.sortBy) {
      case 'price_asc':
        all.sort((a, b) => {
          const aPrice = a.type === 'product' ? (a.price ?? 0) : 0;
return aPrice - bPrice;
        });
        break;
      case 'price_desc':
        all.sort((a, b) => {
return bPrice - aPrice;
        });
        break;
      case 'rating':
        all.sort((a, b) => {
const aRating =
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' |b.type === 'talent' ? (b.rating ?? 0) : 0;

<<<<<<< HEAD




          return bRating - aRating;
        });
        break;
      default:;
        break;
    }

  } else {;
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));

=======

  } else {;
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));
          return aPrice - bPrice
>>>>>>> origin/cursor/delete-old-data-records-6bba
        });
        break;
      default:;
        break;

      case 'rating':
        all.sort((a, b) => {

<<<<<<< HEAD
=======
  return { results: paginated, totalCount: all.length };

  }
const start = (page - 1) * limit;
  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
        });
        break;
      default: break
    }
  } else {;
    all.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const start = (page - 1) * limit;
  const paginated = all.slice(start, start + limit);

}: SearchResultsPageProps) {  const router = useRouter();

        });
        break;'
      case 'price_desc':
        all.sort((a, b) => {'
          return bPrice - aPrice;
        });
        break;'
      case 'rating':

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function SearchResultsPage(): any ({;
  initialResults,;
  query,;
  slug,;
  totalCount,;


}: SearchResultsPageProps) {  const router = useRouter();
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {}
  const router = useRouter();

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}: SearchResultsPageProps) {  const router = useRouter();

  return { results: paginated, totalCount: all.length   } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { isAuthenticated } = useAuth();
  const [results, setResults] = useState<SearchResult[]>(initialResults);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedQuery = useDebounce(searchQuery, 300);'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);'
  const [sortBy, setSortBy] = useState('relevance');'
  const [categoryFilter, setCategoryFilter] = useState('all');'
  const [minPrice, setMinPrice] = useState('');'
  const [maxPrice, setMaxPrice] = useState('');'
  const [minRating, setMinRating] = useState('');
  const [totalResults, setTotalResults] = useState(totalCount);
<<<<<<< HEAD



=======
  // Fetch search results
  const fetchResults = async (searchTerm: string, page = 1) => {
    try {
      setLoading(true);
logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`);

      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',

<<<<<<< HEAD
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter);


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);
      const response = await fetch(`/api/search?${params.toString()}`);


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });


      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);


      } else {;
        setResults((prev) => [...prev, ...offline.results]);
=======

      if (!response.ok) {;
        throw new Error(`Search API error: ${response.status}`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    } finally {;
      setLoading(false);
      } catch (error) {
=======
;
      const data = await response.json();
      logInfo('Search results received:', { data: data });
      setTotalResults(data.totalCount || data.results?.length || 0);
      if (page === 1) {;
        setResults(data.results || []);
      } else {;
        setResults((prev) => [...prev, ...(data.results || [])]);
        } catch (error) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  },;
=======
    } catch (error) {
      logErrorToProduction('Error fetching search results:', { data: error });

      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });
      const offline = offlineSearch(searchTerm, page, 12, {;
        sortBy,;
        category: categoryFilter !== 'all' ? categoryFilter : undefined,;
        minPrice: minPrice ? Number(minPrice) : undefined,;
        maxPrice: maxPrice ? Number(maxPrice) : undefined,;
        minRating: minRating ? Number(minRating) : undefined}),;

      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Handle search input change;
  const handleSearch = (newQuery: string) => {;
    setSearchQuery(newQuery),;
    if (newQuery && newQuery.trim()) {;`
      router && router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {;
        shallow: true,;
      });
      setCurrentPage(1);    }
  };
  useEffect(() => {;
    if (debouncedQuery.trim()) {;
      fetchResults(debouncedQuery, 1);
    } else {;



<<<<<<< HEAD
    fetchResults(searchQuery, nextPage)
  };
  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      categoryFilter !== 'all' &&
      categoryFilter &&
      r.category !== categoryFilter
    ) {
<<<<<<< HEAD



=======
    if (debouncedQuery.trim()) {;

      fetchResults(debouncedQuery, 1);
    } else {;
      setResults([]);

      setTotalResults(0);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
  // Load more results;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return false;
'
    if (minRating && (r && r.type === 'product' || r && r.type === 'talent')) {;
      if ((r && r.rating ?? 0) < Number(minRating)) {;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    date: b.published_date,
  }));
  let all = [...product_results, ...talent_results, ...blog_results];
;
  // Check condition;
if ( {) {}
  $2;
}
    all = all.filter (r => r.category === filters.category);  }
  // Check condition;
if ( {) {}
  $2;
}
    all = all.filter (r => {}
      // Check condition;
if ( {) {}
  $2;
}
        return (r.price ?? 0) >= filters.min_price!;
      }
      return true;
    });  }
  // Check condition;
if ( {) {}
  $2;
}
    all = all.filter (r => {}
      // Check condition;
if ( {) {}
  $2;
}
        return (r.price ?? 0) <= filters.max_price!;
      }
      return true;
    });  }
  // Check condition;
if ( {) {}
  $2;
}
    all = all.filter (r => {}
      // Check condition;
if ( {) {}
  $2;
}
        return (r.rating ?? 0) >= filters.min_rating!;
      }
      return true;
    });  }
  // Check condition;
if ( {) {}
  $2;
}
    switch (filters.sort_by) {'
      case 'price_asc':;
        all.sort ((a, b) => {'
          const a_price = a.type === 'product' ? (a.price ?? 0) : 0;'
          const b_price = b.type === 'product' ? (b.price ?? 0) : 0;
          return a_price - b_price;        });
        break;'
      case 'price_desc':;
        all.sort ((a, b) => {'
          return b_price - a_price;        });
        break;'
      case 'rating':;
        all.sort ((a, b) => {}
          const a_rating =;'
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const b_rating =;'
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
          return b_rating - a_rating;
        });
        break;
      default:;
        break;
    }
  } else {}
    all.sort ((a, b) => a.title.locale_compare (b.title));
  }
  const paginated = all.slice (start, start + limit);
  return { results: paginated, total_count: all.length }
;
export default /**;
 * SearchResultsPage - Function description;
 */
function SearchResultsPage() { return null; }
  const { is_authenticated } = use_auth ();
  const [results, set_results] = useState < SearchResult[]>(initial_results);
  const [loading, set_loading] = useState (false);
  const [search_query, setSearchQuery] = useState (query);
  const debounced_query = use_debounce (search_query, 300);'
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [current_page, setCurrentPage] = useState (1);'
  const [sort_by, setSortBy] = useState ('relevance');'
  const [category_filter, setCategoryFilter] = useState ('all');'
  const [min_price, setMinPrice] = useState ('');'
  const [max_price, setMaxPrice] = useState ('');'
  const [min_rating, setMinRating] = useState ('');
  const [total_results, setTotalResults] = useState (total_count);
;
  // Fetch search results;
  const fetch_results = async (search_term: string, page = 1) => {}
    try {}
      set_loading (true);`
      log_info (`Fetching search results for: ${search_term}, page: ${page}`);
      const params = new URLSearchParams ({}
        query: search_term,
        page: String (page),'
        limit: '12',
        sort: sort_by,'
      });      if (params.append ('category', category_filter)) {}
  $2;
}'
      if (params.append ('min_price', min_price)) {}
  $2;
}'
      if (params.append ('max_price', max_price)) {}
  $2;
}'
      if (params.append ('min_rating', min_rating)) {}
  $2;
}`
      const response = await fetch (`/api / search?${params.to_string ()}`);
;
      // Check condition;
if ( {) {}
  $2;
}`
        throw new Error (`Search API error: ${response.status}`);
      }
      const data = await response.json ();'
      log_info ('Search results received:', { data: data });
      setTotalResults (data.total_count || data.results?.length || 0);
;
      // Check condition;
if ( {) {}
  $2;
}
        set_results (data.results || []);
      } else {}
        set_results (prev => [...prev, ...(data.results || [])]);
      }
    } catch (error) {'
      logErrorToProduction ('Error fetching search results:', { data: error });
      const offline = offline_search (search_term, page, 12, {}
        sort_by,'
        category: category_filter !== 'all' ? category_filter : undefined,
        min_price: min_price ? Number (min_price) : undefined,
        max_price: max_price ? Number (max_price) : undefined,
        min_rating: min_rating ? Number (min_rating) : undefined,
      });
      setTotalResults (offline.total_count);
      // Check condition;
if ( {) {}
  $2;
}
        set_results (offline.results);
      } else {}
        set_results (prev => [...prev, ...offline.results]);
      }
    } finally {}
      set_loading (false);    }
  }
;
  // Handle search input change;
  const handle_search = (new_query: string) =>: any {}
    setSearchQuery (new_query),
    if () {) {}
  $2;
}`
      router.push (`/search?q=${encodeURIComponent (new_query)}`, undefined, {}
        shallow: true,
      });
      setCurrentPage (1);    }
  }
;
  useEffect (() => {}
    if () {) {}
  $2;
}
      fetch_results (debounced_query, 1);
    } else {}
      set_results ([]);
      setTotalResults (0);    }
  }, [debounced_query]);
;
  // Load more results;
  const load_more = () =>: any {}
    const next_page = current_page + 1;
    setCurrentPage (next_page);
    fetch_results (search_query, next_page);
  }
;
  const categories = Array.from (
    new Set (results.map (r => r.category).filter (Boolean)));
;
  const filtered_results = results.filter (r => {    // Check condition;
if ( {) {}
  $2;
}
      return false;
    }
    // Check condition;
if ( {) {}
  $2;
}
      if (< Number (min_price)) {) {}
  $2;
}
        return false;      }
    }
    // Check condition;
if ( {) {}
  $2;
}
      if (> Number (max_price)) {) {}
  $2;
}
        return false;      }
    }
    if () {) {}
  $2;
}
      if (< Number (min_rating)) {) {}
  $2;
}

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        return false;
      }
    }
    return true;  });
<<<<<<< HEAD


return false;
    }
    if (minPrice && r.type === 'product') {
      if ((r.price ?? 0) < Number(minPrice)) {
        return false;
      }
    }
    if (maxPrice && r.type === 'product') {
      if ((r.price ?? 0) > Number(maxPrice)) {
return false;
      }
    }
    if (minRating && (r.type === 'product' |r.type === 'talent')) {
      if ((r.rating ?? 0) < Number(minRating)) {
return false;
      }
    }
    return true;
  });


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Group results by type for better display
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
<<<<<<< HEAD


        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (maxPrice && r.type === 'product') {;
      if ((r.price ?? 0) > Number(maxPrice)) {;
        return false;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (minRating && (r.type === 'product' || r.type === 'talent')) {;
      if ((r.rating ?? 0) < Number(minRating)) {;
        return false;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return true
  }),

  // Group results by type for better display
    (acc, result) => {

return acc;
    },
    {} as Record<string, SearchResult[]>
  );


=======
    };
    {} as Record<string, SearchResult[]>;
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const renderResultCard = (result: SearchResult) => {
    switch (result.type) {
      case 'product':

      case 'equipment':
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Group results by type for better display;
  const groupedResults = filteredResults && filteredResults.reduce(;
    (acc, result) => {;
      if (!acc[result && result.type]) acc[result && result.type] = [];
      acc[result && result.type]!.push(result);
      return acc;
    },;
    {} as Record<string, SearchResult[]>  );
  const renderResultCard = (result: SearchResult) => {;
    switch (result && result.type) {;'
      case 'product':;'
      case 'equipment':;
<<<<<<< HEAD

        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard




=======


        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard
              product={{
>>>>>>> origin/cursor/delete-old-data-records-6bba
                id: result && result.id,
                name: result && result.title,
                title: result && result.title,'
                description: result && result.description || '',
                price: result && result.price || 0,
                images: result && result.image ? [result && result.image] : [],
                rating: result && result.rating || 0,
                reviewCount: 0,
                tags: result && result.tags || [],'
                category: result && result.category || '',
;
  // Group results by type for better display;
  const grouped_results = filtered_results.reduce (
    (acc, result) => {}
      // Check condition;
if (acc[result.type] = []) {}
  $2;
}
      acc[result.type]!.push (result);
      return acc;
    },
    {} as Record < string, SearchResult[]>  );
;
  const renderResultCard = (result: SearchResult) =>: any {}
    switch (result.type) {'
      case 'product':;'
      case 'equipment':;
        return ('
          <div key={result.id} data - testid='result - card'>            <ProductCard;
<<<<<<< HEAD

              product={{


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

                id: result.id,
                name: result.title,
                title: result.title,'
                description: result.description || '',
                price: result.price || 0,
                images: result.image ? [result.image] : [],
                rating: result.rating || 0,

                review_count: 0,

<<<<<<< HEAD
                tags: result.tags || [],
                category: result.category || '',

=======
                tags: result.tags || [],'
                category: result.category || '','
>>>>>>> origin/cursor/delete-old-data-records-6bba
                currency: '$',
                created_at: new Date ().toISOString (),
                updated_at: new Date ().toISOString (),
                stock: (result as any).stock,
<<<<<<< HEAD




=======
                in_stock: ((result as any).stock || 0) > 0
              }}
            />
          </div>
        );
      case 'talent':;
        return (
                reviewCount: 0,
                tags: result.tags || [],
                category: result.category || '',
                currency: '$',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                stock: (result as any).stock,
in_stock: ((result as any).stock || 0) > 0,
              }}
            />
          </div>
        );
      case 'talent':
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
          <div key={result.id} data-testid="result-card">
            <TalentCard
                in_stock: ((result as any).stock || 0) > 0,              }}
            />;
          </div>);
      case 'talent':;
        return (
<div key={result.id} data-testid='result-card'>
            <TalentCard
              talent={{


>>>>>>> origin/cursor/delete-old-data-records-6bba
                id: result.id,
                user_id: result.id,
                full_name: result.title,'
                professional_title: result.description || '',
                profile_picture_url: result.image,
                average_rating: result.rating,
                skills: result.tags || [],
                location: result.category,
                bio: result.description,
                summary: result.description,
                is_verified: false,
<<<<<<< HEAD


=======
                availability_type: 'available',
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);              }}
              isAuthenticated={isAuthenticated}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                availability_type: 'available'}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onViewProfile={(id: string) => {;
                router.push(`/talent/${id}`);
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onRequestHire={(talent) => {;
                router.push(`/talent/${talent.id}?action=hire`);
              }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              isAuthenticated={isAuthenticated  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


=======
            />
          </div>
        ),
      case 'category':
        return (
          <div key={result.id} data-testid='result-card'>            <CategoryCard
              title={result.title}
              description={result.description |''}
              icon={result.image |'📁'}
            />
          </div>
        );
      default:
          <div key={result && result.id} data-testid='result-card'>            <CategoryCard
              title={result && result.title}
              description={result && result.description || ''}
              icon={result && result.image || '📁'}
availability_type: 'available',
              }}
              onViewProfile={(id: string) => {
                router.push(`/talent/${id}`);
              }}
              onRequestHire={talent => {
                router.push(`/talent/${talent.id}?action=hire`);
              }}
              isAuthenticated={isAuthenticated}

            />
          </div>
        ),
      case 'category':
        return (

              title={result.title}
              description={result.description |''}
              icon={result.image |'📁'}
            />
          </div>
        );
      default:

          >

            <h3 className='font-semibold'>{result.title}</h3>

            <p className='text-gray-600 dark:text-gray-200'>
              {result.description}
            </p>
          </div>

          >;'
            <h3 className='font-semibold'>{result && result.title}</h3>;'
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;

        );    }

  };

          <div key={result.id} data-testid="result-card">
            <CategoryCard
              title={result.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              description={result.description || ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              icon={result.image || '📁'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            />;
          </div>;
        );
      default:;
<<<<<<< HEAD

=======
          </div>
        ),
      case 'category':
        return (
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


          >;
            <h3 className='font-semibold'>{result && result.title}</h3>;
            <p className='text-gray-600 dark:text-gray-200'>;
              {result && result.description}
            </p>;
          </div>;
        );    }
  }


<<<<<<< HEAD
}
  },



=======
  };

          <div key={result.id} data-testid="result-card">
            <CategoryCard
              title={result.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              description={result.description || ''  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              icon={result.image || '📁'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            />;
          </div>;
        ),;
      default:;
        return (;
          <div;
            key={result.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
            data-testid="result-card"
          >
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">
              {result.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </p>;
          </div>;
        );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <>;
      <SEO

        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
          {/* Search Header */});
    }
  };

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>;
      <SEO

        title={`Search Results for "${query}" - Zion Marketplace`  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}`
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}`
        keywords={`${query}, search, marketplace, products, talent, services`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}`
        canonical={`https://app.ziontechgroup.com/search/${slug}`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      />

<<<<<<< HEAD

        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;


=======
        title={`Search Results for "${query}" - Zion Marketplace`}
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}
        keywords={`${query}, search, marketplace, products, talent, services`}
        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >

<<<<<<< HEAD
          {/* Search Header */}
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
        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {/* Search Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Results;
                </h1>

                  className="text-gray-600 dark:text-gray-200"

                  data-testid="results-count"
                >
                  {filteredResults.length > 0"`
                    ? `Found ${filteredResults.length} results for "${query}"`


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    : `No results found for "${query}"`}

                </p>;
              </div>;

              {/* Search Input */}


<<<<<<< HEAD


    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </p>
              </div>
              {/* Search Input */}
              <div className='relative w-full lg:w-96'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200' />
              {/* Search Input */  } catch (error) {
=======
                <Input"
                  type="text"
                  value={searchQuery  } catch (error) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200" />
                <Input
                  type="text"
                  value={searchQuery  } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
                  onChange={(e) => handleSearch(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>
            </div>

                  onChange={e => handleSearch(e && e.target.value)}'
                  placeholder='Search marketplace...';'
                  className='pl-10'                />;
              </div>;
            </div>;

            {/* Controls */}

                  className='text-gray-600 dark:text-gray-200'
                  data-testid='results-count'
                >
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
                  className='pl-10'
                />
              </div>
            </div>
            {/* Controls */}
<div className='flex flex-wrap items-center justify-between gap-4 mt-6'>
              <div className='flex items-center gap-2 flex-wrap'>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >

<<<<<<< HEAD
                  <Filter className="h-4 w-4" />
                  Filters

                </Button>
                <select

=======

                </Button>
                <select
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  data-testid='filter-button'>;
                  <Filter className='h-4 w-4' />                  Filters;
                </Button>;

<<<<<<< HEAD
                <select

                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}'
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';'
                  data-testid='sort-select';


=======
                </Button>
                <select
>>>>>>> origin/cursor/delete-old-data-records-6bba
                router.push (`/talent/${id}`);
              }}
              onRequestHire={talent => {}`
                router.push (`/talent/${talent.id}?action = hire`);              }}
              is_authenticated={is_authenticated}
            />;
          </div>);'
      case 'category':;
        return ('
          <div key={result.id} data - testid='result - card'>            <CategoryCard;
              title={result.title}'
              description={result.description || ''}'
              icon={result.image || '📁'}
            />;
          </div>);
      default:;
          >;'
            <h3 className='font - semibold'>{result.title}</h3>;'
            <p className='text - gray - 600 dark:text - gray - 200'>;
              {result.description}
            </p>;
          </div>);    }
  }
;
  return (
    <>;
      <SEO;"`
        title={`Search Results for "${query}" - Zion Marketplace`}`
        description={`Find ${query} and more in the Zion marketplace. Discover products, talent, and services.`}`
        keywords={`${query}, search, marketplace, products, talent, services`}`
        canonical={`https://app.ziontechgroup.com / search/${slug}`}
      />;'
      <div className='min - h-screen bg - gray - 50 dark:bg - gray - 900'>;
        <div;'
          className='container mx - auto px - 4 py - 8';'
          data - testid='search - results';
        >;
          {/* Search Header */}'
          <div className='mb - 8'>;'
            <div className='flex flex - col lg:flex - row lg:items - center lg:justify - between gap - 4'>;'
              <div className='flex - 1'>;'
                <h1 className='text - 3xl font - bold text - gray - 900 dark:text - white mb - 2'>;
                  Search Results;
                </h1>;
                <p;'
                  className='text - gray - 600 dark:text - gray - 200';'
                  data - testid='results - count'                >;
                  {filtered_results.length > 0;"`
                    ? `Found ${filtered_results.length} results for "${query}"`;"`
                    : `No results found for "${query}"`}
                </p>;
              </div>;
              {/* Search Input */}'
              <div className='relative w - full lg:w - 96'>;'
                <Search className='absolute left - 3 top - 1/2 -translate - y-1 / 2 h - 4 w - 4 text - gray - 200' />;
                <Input;'
                  type='text';
                  value={search_query}
                  on_change={e => handle_search (e.target.value)}'
                  placeholder='Search marketplace...';'
                  className='pl - 10'                />;
              </div>;
            </div>;
            {/* Controls */}'
            <div className='flex flex - wrap items - center justify - between gap - 4 mt - 6'>;'
              <div className='flex items - center gap - 2 flex - wrap'>;
                <Button;'
                  variant='outline';'
                  size='sm';'
                  className='flex items - center gap - 2';'
                  data - testid='filter - button';
                >;'
                  <Filter className='h - 4 w - 4' />                  Filters;
                </Button>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}'
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';'
                  data - testid='sort - select';
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                >;
                  <option value='relevance'>Relevance</option>;
                  <option value='newest'>Newest</option>;
                  <option value='price_asc'>Price: Low to High</option>;
                  <option value='price_desc'>Price: High to Low</option>;
                  <option value='rating'>Highest Rated</option>                </select>;
<<<<<<< HEAD



=======
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
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  data-testid="sort-select"
                >
                  <option value='relevance'>Relevance</option>
                  <option value='newest'>Newest</option>
                  <option value='price_asc'>Price: Low to High</option>
                  <option value='price_desc'>Price: High to Low</option>
                  <option value='rating'>Highest Rated</option>                </select>
                  <option value="relevance">Relevance</option>
                  <option value="newest">Newest</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="flex items-center gap-1">

                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                <select
                  value={categoryFilter  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setCategoryFilter(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value='all'>All Categories</option>
                  {categories.map(c => (                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className='flex items-center gap-1'>
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
                </select>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    placeholder="Min $"

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    value={minPrice  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setMinPrice(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input"
                    type="number""
                    placeholder="Max $"

<<<<<<< HEAD
                    value={maxPrice  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setMaxPrice(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
                <select
                  value={minRating}


<<<<<<< HEAD
                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
                  onChange={(e) => setMinRating(e.target.value)}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"

                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & up</option>
                  <option value="3">3★ & up</option>
                  <option value="2">2★ & up</option>
                </select>
              </div>


<<<<<<< HEAD

                >;
                  <option value=''>All Ratings</option>;
                  <option value='4'>4★ & up</option>;
                  <option value='3'>3★ & up</option>;

                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;


                <Button'
                  variant={viewMode === 'grid' ? 'default' : 'outline'}'
                  size='sm''
                  onClick={() => setViewMode('grid')}'
                  data-testid='view-mode-grid';'
                  className={viewMode === 'grid' ? 'active' : ''}
                >;'
                  <Grid className='h-4 w-4' />;
                </Button>;
                <Button'
                  variant={viewMode === 'list' ? 'default' : 'outline'}'
                  size='sm''
                  onClick={() => setViewMode('list')}'
                  data-testid='view-mode-list';'
                  className={viewMode === 'list' ? 'active' : ''}

=======
                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;
"
              <div className="flex items-center gap-2">
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
<<<<<<< HEAD
=======

    return res.status(500).json({ error: "Internal server error" });
  }
}
                >"
                  <Grid className="h-4 w-4" />
                </Button>

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

          {/* Loading State */}

          {loading && results.length === 0 && (

          {!loading && filteredResults.length === 0 && (

            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>

          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;


              <div className="flex items-center gap-2">

                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'  } catch (error) {
    console.error("Error:", error);
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD
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
                >;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {/* Loading State */}
          {loading && results.length === 0 && (

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

<div className='flex justify-center py-12'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
            </div>
          )}
          {/* Empty State */}
          {!loading && filteredResults.length === 0 && (
<div data-testid='search-empty-state'>
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
<div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>
                    {type}s ({typeResults.length})
                  </h2>


<<<<<<< HEAD
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;
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
                >;
                  <List className="h-4 w-4" />;
                </Button>;
              </div>;
            </div>;
          </div>;
          {/* Loading State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {loading && results.length === 0 && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Empty State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
            <div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults.length})
                  </h2>

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


              {results.length < totalResults && (
<div className='flex justify-center py-8'>
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className='flex items-center gap-2'
                  >
                    {loading ? (
                      <>
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
                        Loading...
                      </>
                    ) : (
                      'Load More Results'


=======
              {results.length < totalResults && (
                <div className="flex justify-center py-8">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    className="flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>                        Loading...
                      </>
                    ) : (
                      'Load More Results'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    )}
</Button>;
                </div>;
              )}
            </div>;
          )}
<<<<<<< HEAD


export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {;

        </div>
      </div>
    </>
);

export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {

=======
        </div>
      </div>
    </>
  );
export const getServerSideProps: GetServerSideProps<
  SearchResultsPageProps
> = async (context: any) => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const params = context.params;
  const slug = params?.slug as string
  // Convert slug back to query term
  const query = slug ? slug.replace(/-/g, ' ') : '';
  try {
    // In production, replace with your actual API base URL
    const apiBaseUrl =
<<<<<<< HEAD


=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',

    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`),
    const response = await fetch(`
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`;
    );
<<<<<<< HEAD


    let results = [];
    let totalCount = 0;

      results = data.results |[];
      totalCount = data.totalCount |results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);

              <div className='animate - spin rounded - full h - 8 w - 8 border - b-2 border - blue - 600'></div>            </div>)}
          {/* Empty State */}
          {!loading && filtered_results.length === 0 && ('
            <div data - testid='search - empty - state'>              <SearchEmptyState on_retry={() => fetch_results (search_query)} />;
            </div>)}
          {/* Results */}
          {filtered_results.length > 0 && ('
            <div className='space - y-8'>;
              {Object.entries (grouped_results).map (([type, type_results]) => (
                <div key={type}>;'
                  <h2 className='text - xl font - semibold text - gray - 900 dark:text - white mb - 4 capitalize'>                    {type}s ({type_results.length});
                  </h2>;
                  <div;
                    className={'
                      view_mode === 'grid';'
                        ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6';'
                        : 'space - y-4';
                    }
                  >;
                    {type_results.map (renderResultCard)}
                  </div>;
                </div>))}
              {/* Load More Button */}
              {results.length < total_results && ('
                <div className='flex justify - center py - 8'>;
                  <Button;
                    on_click={load_more}
                    disabled={loading}'
                    className='flex items - center gap - 2';
                  >;
                    {loading ? (
                      <>;'
                        <div className='animate - spin rounded - full h - 4 w - 4 border - b-2 border - white'></div>                        Loading...;
                      </>) : ('
                      'Load More Results')}
                  </Button>;
                </div>)}
            </div>)}
        </div>;
      </div>;
    </>);
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {}
  const slug = params?.slug as string,
  // Convert slug back to query term;'
  const query = slug ? slug.replace (/-/g, ' ') : '';
;
  try {}
    // In production, replace with your actual API base URL;
    const apiBaseUrl =;'
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',`
    log_info (`Fetching search results for slug: ${slug}, query: ${query}`);
;
    const response = await fetch (`
      `${apiBaseUrl}/api / search?query=${encodeURIComponent (query)}&limit = 12`    );
;
    let total_count = 0;
;
    // Check condition;
if ( {) {}
  $2;
}
      const data = await response.json ();
      results = data.results || [];
      total_count = data.total_count || results.length;`
      log_info (`Server - side fetch successful: ${results.length} results`);


=======
    let results = [];
    let totalCount = 0;
    if (response.ok) {
      const data = await response.json();
      results = data.results |[];
      totalCount = data.totalCount |results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } else {
      logErrorToProduction (
        `Search API error: ${response.status} ${response.status_text}`);
      const offline = offline_search (query, 1, 12, { sort_by: 'relevance' });
      results = offline.results;
<<<<<<< HEAD



=======
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



      results = data.results || [];
      totalCount = data.totalCount || results.length;`
      logInfo(`Server-side fetch successful: ${results.length} results`)
    } else {}`
      logErrorToProduction(`Search API error: ${response.status} ${response.statusText}`),'
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' }),
      results = offline.results;

    }


    return {}
      props: {}
        initialResults: results,

        query;
        slug;
        totalCount}}
  } catch (error) {'
    logErrorToProduction('Error fetching search results:', { data: error }),'
    return {}
      props: {}
        initialResults: offline.results,
        query;
        slug;
        totalCount: offline.totalCount}}
  }

};


      total_count = offline.total_count;    }
    return {}
      props: {}
        initial_results: results,
        query,
        slug,
        total_count,
      },
    }

query,
        slug,
        totalCount,
      },
    };

  } catch (error) {
    logErrorToProduction ('Error fetching search results:', { data: error });

;
    return {}
      props: {}
        initial_results: offline.results,
        query,
        slug,
total_count: offline.total_count,
      },
    }  }
}
;


>>>>>>> origin/cursor/delete-old-data-records-6bba
          )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Results */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filteredResults.length > 0 && (;"
            <div className="space-y-8">;
              {Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;"
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">;
                    {type}s ({typeResults.length});
                  </h2>;
                  <div;
                    className={;'
                      viewMode === 'grid';'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';'
                        : 'space-y-4';
                      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {typeResults.map(renderResultCard)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
              {/* Load More Button */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {results.length < totalResults && (;"
                <div className="flex justify-center py-8">;
                  <Button;
                    onClick={loadMore  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    disabled={loading  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                    className="flex items-center gap-2";
                  >;
                    {loading ? (;
                      <>;"
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>;
                        Loading...;
                      </>;
                    ) : (;'
                      'Load More Results';
                    )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </Button>;
                </div>;
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </div>;
    </>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const getServerSideProps: GetServerSideProps<;
  SearchResultsPageProps;
> = async (context: any) => {;
  const slug = params?.slug as string;
  // Convert slug back to query term;'
  const query = slug ? slug.replace(/-/g, ' ') : '',;
  try {}
    // In production, replace with your actual API base URL;
      process.env.NEXT_PUBLIC_API_URL || 'http: //localhost:3000',;`
    logInfo(`Fetching search results for slug: ${slug}, query: ${query}`);
    const response = await fetch(;`
      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`);
    if (response.ok) {;


<<<<<<< HEAD

      const data = await response.json();

      results = data.results || [];
      totalCount = data.totalCount || results.length;`
      logInfo(`Server-side fetch successful: ${results.length} results`);


=======
      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;`
      logInfo(`Server-side fetch successful: ${results.length} results`);
    } else {
      logErrorToProduction(
        `Search API error: ${response.status} ${response.statusText}`
      );
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
      totalCount = offline.totalCount;    }

    return {
      props: {
        initialResults: results,
        query,
        slug,
        totalCount,
      },
    };
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
    };  }
};

}
}
}
}
}
}
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } else {;
      logErrorToProduction(;
        `Search API error: ${response.status} ${response.statusText}`);
      const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
      results = offline.results;
      totalCount = offline.totalCount;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return {;
      props: {;
        initialResults: results;
        query,;
        slug,;
        totalCount}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    logErrorToProduction('Error fetching search results:', { data: error });
<<<<<<< HEAD


=======
    const offline = offlineSearch(query, 1, 12, { sortBy: 'relevance' });
    return {;
      props: {;
        initialResults: offline.results,;
        query,;
        slug;
        totalCount: offline.totalCount}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};

    return {;
      props: {;
        initialResults: offline.results,;
        query,;
        slug;
        totalCount: offline.totalCount}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};

    return {
      props: {
        initialResults: offline.results,
        query,
        slug,
        totalCount: offline.totalCount,
      },
    };
  }
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

