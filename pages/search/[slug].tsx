

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
    avatar?: string;
  }
  tags?: string[];
  category?: string;
  date?: string;
;
=======

;
interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
;

interface TalentSearchResult extends BaseSearchResult {
interface TalentSearchResult extends BaseSearchResult {;  type: 'talent';
  rating?: number;
;
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
;
interface CategorySearchResult extends BaseSearchResult {
interface CategorySearchResult extends BaseSearchResult {;
=======

interface CategorySearchResult extends BaseSearchResult {
=======

interface CategorySearchResult extends BaseSearchResult {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  type: 'category';

;


// Type guard functions;
const hasPrice = (result: SearchResult): result is ProductSearchResult =>;
  result && result.type === 'product' || result && result.type === 'equipment';

=======
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

=======  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;

=======
  sortBy?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


=======

            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return { results: paginated, totalCount: all.length };

  }
const start = (page - 1) * limit;
  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
=======
  }
  const start = (page - 1) * limit;


  const paginated = all && all.slice(start, start + limit);
  return { results: paginated, totalCount: all && all.length };
=======

  return { results: paginated, totalCount: all.length };
}: SearchResultsPageProps) {  const router = useRouter();
=======


}: SearchResultsPageProps) {  const router = useRouter();
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  initialResults;
  query;
  slug;
  totalCount}: SearchResultsPageProps) {
  const router = useRouter();
}: SearchResultsPageProps) {  const router = useRouter();

          const aRating =
            a.type === 'product' |a.type === 'talent' ? (a.rating ?? 0) : 0;
          const bRating =
            b.type === 'product' |b.type === 'talent' ? (b.rating ?? 0) : 0;
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
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
          return bRating - aRating;
        });
        break;
      default: break;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
  return { results: paginated, totalCount: all.length }
export default function SearchResultsPage({
  initialResults
  query
  slug
  totalCount
  return { results: paginated, totalCount: all.length };

export default function SearchResultsPage({
  initialResults,
  query,
  slug,
  totalCount,;
=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}: SearchResultsPageProps) {  const router = useRouter();
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

}: SearchResultsPageProps) {  const router = useRouter();
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
  const filteredResults = results && results.filter(r => {    if (;
      categoryFilter !== 'all' &&;
      categoryFilter &&;
      r && r.category !== categoryFilter;
    ) {;
    if (minRating && (r && r.type === 'product' || r && r.type === 'talent')) {;
      if ((r && r.rating ?? 0) < Number(minRating)) {;

=======    date: b.published_date,
  }));
  let all = [...product_results, ...talent_results, ...blog_results];
;
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => r.category === filters.category);  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.price ?? 0) >= filters.min_price!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.price ?? 0) <= filters.max_price!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    all = all.filter (r => {
      // Check condition
if ( {) {
  $2
}
        return (r.rating ?? 0) >= filters.min_rating!;
      }
      return true;
    });  }
  // Check condition
if ( {) {
  $2
}
    switch (filters.sort_by) {
      case 'price_asc':;
        all.sort ((a, b) => {
          const a_price = a.type === 'product' ? (a.price ?? 0) : 0;
          const b_price = b.type === 'product' ? (b.price ?? 0) : 0;
          return a_price - b_price;        });
        break;
      case 'price_desc':;
        all.sort ((a, b) => {
          const a_price = a.type === 'product' ? (a.price ?? 0) : 0;
          const b_price = b.type === 'product' ? (b.price ?? 0) : 0;
          return b_price - a_price;        });
        break;
      case 'rating':;
        all.sort ((a, b) => {
          const a_rating =;
            a.type === 'product' || a.type === 'talent' ? (a.rating ?? 0) : 0;
          const b_rating =;
            b.type === 'product' || b.type === 'talent' ? (b.rating ?? 0) : 0;
          return b_rating - a_rating;
        });
        break;
      default:;
        break;
    }
  } else {
    all.sort ((a, b) => a.title.locale_compare (b.title));
  }
  const start = (page - 1) * limit;
  const paginated = all.slice (start, start + limit);
  return { results: paginated, total_count: all.length }
;
export default /**
 * SearchResultsPage - Function description
 */
function SearchResultsPage() {  const router = use_router ();
  const { is_authenticated } = use_auth ();
  const [results, set_results] = useState < SearchResult[]>(initial_results);
  const [loading, set_loading] = useState (false);
  const [search_query, setSearchQuery] = useState (query);
  const debounced_query = use_debounce (search_query, 300);
  const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [current_page, setCurrentPage] = useState (1);
  const [sort_by, setSortBy] = useState ('relevance');
  const [category_filter, setCategoryFilter] = useState ('all');
  const [min_price, setMinPrice] = useState ('');
  const [max_price, setMaxPrice] = useState ('');
  const [min_rating, setMinRating] = useState ('');
  const [total_results, setTotalResults] = useState (total_count);
;
  // Fetch search results;
  const fetch_results = async (search_term: string, page = 1) => {
    try {
      set_loading (true);
      log_info (`Fetching search results for: ${search_term}, page: ${page}`);
      const params = new URLSearchParams ({
        query: search_term,
        page: String (page),
        limit: '12',
        sort: sort_by,
      });      if (params.append ('category', category_filter)) {
  $2
}
      if (params.append ('min_price', min_price)) {
  $2
}
      if (params.append ('max_price', max_price)) {
  $2
}
      if (params.append ('min_rating', min_rating)) {
  $2
}
      const response = await fetch (`/api / search?${params.to_string ()}`);
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Search API error: ${response.status}`);
      }
      const data = await response.json ();
      log_info ('Search results received:', { data: data });
      setTotalResults (data.total_count || data.results?.length || 0);
;
      // Check condition
if ( {) {
  $2
}
        set_results (data.results || []);
      } else {
        set_results (prev => [...prev, ...(data.results || [])]);
      }
    } catch (error) {
      logErrorToProduction ('Error fetching search results:', { data: error });
      const offline = offline_search (search_term, page, 12, {
        sort_by,
        category: category_filter !== 'all' ? category_filter : undefined,
        min_price: min_price ? Number (min_price) : undefined,
        max_price: max_price ? Number (max_price) : undefined,
        min_rating: min_rating ? Number (min_rating) : undefined,
      });
      setTotalResults (offline.total_count);
      // Check condition
if ( {) {
  $2
}
        set_results (offline.results);
      } else {
        set_results (prev => [...prev, ...offline.results]);
      }
    } finally {
      set_loading (false);    }
  }
;
  // Handle search input change;
  const handle_search = (new_query: string) =>: any {
    setSearchQuery (new_query),
    if () {) {
  $2
}
      router.push (`/search?q=${encodeURIComponent (new_query)}`, undefined, {
        shallow: true,
      });
      setCurrentPage (1);    }
  }
;
  useEffect (() => {
    if () {) {
  $2
}
      fetch_results (debounced_query, 1);
    } else {
      set_results ([]);
      setTotalResults (0);    }
  }, [debounced_query]);
;
  // Load more results;
  const load_more = () =>: any {
    const next_page = current_page + 1;
    setCurrentPage (next_page);
    fetch_results (search_query, next_page);
  }
;
  const categories = Array.from (
    new Set (results.map (r => r.category).filter (Boolean)));
;
  const filtered_results = results.filter (r => {    // Check condition
if ( {) {
  $2
}
      return false;
    }
    // Check condition
if ( {) {
  $2
}
      if (< Number (min_price)) {) {
  $2
}
        return false;      }
    }
    // Check condition
if ( {) {
  $2
}
      if (> Number (max_price)) {) {
  $2
}
        return false;      }
    }
    if () {) {
  $2
}
      if (< Number (min_rating)) {) {
  $2
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Group results by type for better display
  const groupedResults = filteredResults.reduce(
    (acc, result) => {
      if (!acc[result.type]) acc[result.type] = [];
      acc[result.type]!.push(result);
      return acc
    };
    {} as Record<string, SearchResult[]>;
  );

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
        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard
=======        return (
          <div key={result.id} data-testid="result-card">
            <ProductCard

              product={{


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
                currency: '$',
                created_at: new Date ().toISOString (),
                updated_at: new Date ().toISOString (),
                stock: (result as any).stock,

        );
      case 'talent':;
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
              talent={{
=======
              }}
              onViewProfile={(id: string) => {;
                router && router.push(`/talent/${id}`);
=======
          <div key={result.id} data-testid="result-card">
            <TalentCard
=======                in_stock: ((result as any).stock || 0) > 0,              }}
            />;
          </div>);
      case 'talent':;
        return (
          <div key={result.id} data - testid='result - card'>            <TalentCard;
=======      return acc;
    }
    {} as Record<string, SearchResult[]>  );
      setTotalResults(0);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }, [debouncedQuery]),;  // Load more results;
  const loadMore = () => {;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchResults(searchQuery, nextPage);
  const categories = Array && Array.from(;
    new Set(results && results.map(r => r && r.category).filter(Boolean));
  );

  const filteredResults = results && results.filter(r => {    if (;
      categoryFilter !== 'all' &&;
      categoryFilter &&;
      r && r.category !== categoryFilter;
    ) {;>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />;
          </div>;
        );
      default:;
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======        );    }
  }
}
  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
          {/* Search Header */}
=======
  return (
    <>;
      <SEO        title={`Search Results for "${query}" - Zion Marketplace`  } catch (error) {
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >
                </p>;
              </div>;


              {/* Search Input */}



                  onChange={e => handleSearch(e && e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl-10'                />;
              </div>;
            </div>;



            {/* Controls */}

=======


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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  data-testid="filter-button"
                >
                  <Filter className="h-4 w-4" />
                  Filters

                  data-testid='filter-button'>;
                  <Filter className='h-4 w-4' />                  Filters;
                </Button>;
                </Button>
                <select
=======
=======
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';
                  data-testid='sort-select';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c  } catch (error) {
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  <input
                    type="number"
                    placeholder="Min $"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"
                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
=======                <select;
                  value={category_filter}
                  on_change={e => setCategoryFilter (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
                >;
                  <option value='all'>All Categories</option>;
                  {categories.map (c => (                    <option key={c} value={c}>;
                      {c}
                    </option>))}
                </select>;
                <div className='flex items - center gap - 1'>;
                  <input;
                    type='number';
                    placeholder='Min $';
                    value={min_price}
                    on_change={e => setMinPrice (e.target.value)}
                    className='w - 20 px - 2 py - 1 border border - gray - 300 rounded - md text - sm';
                  />;
                  <span>-</span>;
                  <input;
                    type='number';
                    placeholder='Max $';
                    value={max_price}
                    on_change={e => setMaxPrice (e.target.value)}
                    className='w - 20 px - 2 py - 1 border border - gray - 300 rounded - md text - sm'                  />;
                </div>;
                <select;
                  value={min_rating}
                  on_change={e => setMinRating (e.target.value)}
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';                  <option value=''>All Ratings</option>;
                  <option value='4'>4★ & up</option>;
                  <option value='3'>3★ & up</option>;
                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;

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


=======
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


=======              <div className='flex items - center gap - 2'>;
                <Button;
                  variant={view_mode === 'grid' ? 'default' : 'outline'}
                  size='sm';
                  on_click={() => setViewMode ('grid')}
                  data - testid='view - mode - grid';
                  className={view_mode === 'grid' ? 'active' : ''}
                >;
                  <Grid className='h - 4 w - 4' />;
                </Button>;
                <Button;
                  variant={view_mode === 'list' ? 'default' : 'outline'}
                  size='sm';
                  on_click={() => setViewMode ('list')}
                  data - testid='view - mode - list';
                  className={view_mode === 'list' ? 'active' : ''}
                >;
                  <List className='h - 4 w - 4' />                </Button>;
              </div>;
            </div>;
          </div>;
          {loading && results.length === 0 && (

          {!loading && filteredResults.length === 0 && (
            <div data-testid="search-empty-state">
              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          {filteredResults.length > 0 && (
            <div className="space-y-8">
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className="text-xl font-semibold text-gray-900 dark: text-white mb-4 capitalize">
                    {type}s ({typeResults.length})

                  </h2>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  </h2>
=======
          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;                  <div
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
=======


                    )}
                  </Button>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              )}
            </div>;
          )}

      `${apiBaseUrl}/api/search?query=${encodeURIComponent(query)}&limit=12`    );

=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}

      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);
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

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
