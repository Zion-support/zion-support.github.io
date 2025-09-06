import { GetServerSideProps } from 'next';
import { use_router } from 'next / router';
import { useState, useEffect } from 'react';
import { use_auth } from '@/context / auth / AuthProvider';
import { Search, Filter, Grid, List } from 'lucide-react';import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import ProductCard from '@/components / ProductCard';
import {TalentCard} from '@/components / talent / TalentCard';
import {CategoryCard} from '@/components / CategoryCard';
import {SearchEmptyState} from '@/components / marketplace / EmptyState';
import {MARKETPLACE_LISTINGS} from '@/data / listing_data';
import {TALENT_PROFILES} from '@/data / talent_data';
import {BLOG_POSTS} from '@/data / blog - posts';
import {use_debounce} from '@/hooks / use_debounce';
import {log_info, logErrorToProduction} from '@/utils / production_logger';
interface BaseSearchResult {
  id: string;
  title: string;
  description?: string;
  slug: string;
  image?: string;
  author?: {
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
  type: 'talent';
  rating?: number;
;
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
;
interface CategorySearchResult extends BaseSearchResult {
  type: 'category';
;
type SearchResult =;
  | ProductSearchResult;
  | TalentSearchResult;
  | BlogSearchResult;
  | CategorySearchResult;
;
// Type guard functions;
const has_price = (result: SearchResult): result is ProductSearchResult =>;
  result.type === 'product' || result.type === 'equipment';
;
const has_rating = (
  result: SearchResult): result is ProductSearchResult | TalentSearchResult =>;
  result.type === 'product' ||;
  result.type === 'equipment' ||;
  result.type === 'talent';
;
interface SearchResultsPageProps {
  initial_results: SearchResult[];
  query: string;
  slug: string;
  total_count: number;
interface OfflineFilters {
  sort_by?: string;
  category?: string;
  min_price?: number;
  max_price?: number;
  min_rating?: number;
;
function offline_search (
  query: string,
  page = 1,
  limit = 12,
  filters: OfflineFilters = {}
): { results: SearchResult[]; total_count: number } {  const term = query.toLowerCase ().trim ();
  const match = (text?: string) =>: any text?.toLowerCase ().includes (term);
;
  const product_results = MARKETPLACE_LISTINGS.filter (
    p =>;
      match (p.title) ||;
      match (p.description) ||;
      match (p.category) ||;
      p.tags?.some (t => match (t))).map (p => ({    id: p.id,
    title: p.title,
    description: p.description || '',
    type: 'product' as const,
    slug: p.id,
    image: p.images?.[0],
    price: p.price ?? undefined,
    rating: p.rating,
    author: p.author;
      ? { name: p.author.name, avatar: p.author.avatar_url }
      : undefined,
    tags: p.tags,
    category: p.category,
    date: p.created_at,
  }));
;
  const talent_results = TALENT_PROFILES.filter (
    t =>;
      match (t.full_name) ||;
      match (t.professional_title) ||;
      match (t.bio) ||;
      t.skills?.some (string => match (s))).map (t => ({    id: t.id,
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
;
  const blog_results = BLOG_POSTS.filter (
    boolean =>;
      match (b.title) ||;
      match (b.excerpt) ||;
      match (b.content) ||;
      b.tags?.some (t => match (t))).map (boolean => ({    id: b.slug,
    title: b.title,
    description: b.excerpt,
    type: 'blog' as const,
    slug: b.slug,
    image: b.featured_image,
    tags: b.tags,
    category: 'Blog',
    date: b.published_date,
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
        return false;
      }
    }
    return true;  });
;
  // Group results by type for better display;
  const grouped_results = filtered_results.reduce (
    (acc, result) => {
      // Check condition
if (acc[result.type] = []) {
  $2
}
      acc[result.type]!.push (result);
      return acc;
    },
    {} as Record < string, SearchResult[]>  );
;
  const renderResultCard = (result: SearchResult) =>: any {
    switch (result.type) {
      case 'product':;
      case 'equipment':;
        return (
          <div key={result.id} data - testid='result - card'>            <ProductCard;
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
                in_stock: ((result as any).stock || 0) > 0,              }}
            />;
          </div>);
      case 'talent':;
        return (
          <div key={result.id} data - testid='result - card'>            <TalentCard;
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
              onViewProfile={(id: string) => {
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
                <select;
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
                  className='px - 3 py - 1 border border - gray - 300 rounded - md text - sm';
                >;
                  <option value=''>All Ratings</option>;
                  <option value='4'>4★ & up</option>;
                  <option value='3'>3★ & up</option>;
                  <option value='2'>2★ & up</option>;
                </select>;
              </div>;
              <div className='flex items - center gap - 2'>;
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
          {/* Loading State */}
          {loading && results.length === 0 && (
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