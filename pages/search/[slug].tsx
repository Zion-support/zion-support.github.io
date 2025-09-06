




import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth/AuthProvider';




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


interface ProductSearchResult extends BaseSearchResult {
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;


;

interface TalentSearchResult extends BaseSearchResult {
interface ProductSearchResult extends BaseSearchResult {;
  type: 'product' | 'equipment';
  price?: number;
  rating?: number;
interface TalentSearchResult extends BaseSearchResult {;

  type: 'talent';
  rating?: number;

;
interface BlogSearchResult extends BaseSearchResult {
  type: 'blog';
;

interface CategorySearchResult extends BaseSearchResult {

interface CategorySearchResult extends BaseSearchResult {;
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


  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;



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




  initialResults: SearchResult[];
  query: string;
  slug: string;
  totalCount: number;



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





          return bRating - aRating;
        });
        break;
      default:;
        break;
    }
  } else {;
  return { results: paginated, totalCount: all.length }
export default function SearchResultsPage({
  initialResults
  query
  slug
  totalCount
  return { results: paginated, totalCount: all.length };
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));




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


      logInfo(`Fetching search results for: ${searchTerm}, page: ${page}`),
      const params = new URLSearchParams({
        query: searchTerm,
        page: String(page),
        limit: '12',
        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter);


      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (minRating) params.append('minRating', minRating);
      const response = await fetch(`/api/search?${params.toString()}`);



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


  // Handle search input change;
  const handleSearch = (newQuery: string) => {;
    setSearchQuery(newQuery),;
    if (newQuery && newQuery.trim()) {;
      router && router.push(`/search?q=${encodeURIComponent(newQuery)}`, undefined, {;
        shallow: true,;
      });
      setCurrentPage(1);    }
  };


    fetchResults(searchQuery, nextPage)
  };
  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );

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

              }}
              onViewProfile={(id: string) => {;
                router && router.push(`/talent/${id}`);


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


        );    }


}
  },




  return (
    <>;
      <SEO


      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

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

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">



        <div
          className="container mx-auto px-4 py-8"
          data-testid="search-results"
        >

          {/* Search Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


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

                </p>;
              </div>;


              {/* Search Input */}


                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}


                <Input
                  type="text"
                  value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => handleSearch(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  placeholder="Search marketplace..."
                  className="pl-10"
                />


              </div>
            </div>


                  onChange={e => handleSearch(e && e.target.value)}
                  placeholder='Search marketplace...';
                  className='pl-10'                />;
              </div>;
            </div>;



            {/* Controls */}



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

                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >

                <div className="flex items-center gap-1">


                  <input
                    type="number"
                    placeholder="Min $"
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

                    className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max $"



                </div>
                <select
                  value={minRating}

                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
                  onChange={(e) => setMinRating(e.target.value)}


                  className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Ratings</option>
                  <option value="4">4★ & up</option>
                  <option value="3">3★ & up</option>
                  <option value="2">2★ & up</option>
                </select>
              </div>



                <select
                  value={minRating}
                  onChange={e => setMinRating(e && e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';



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
                  <List className='h-4 w-4' />                </Button>;
              </div>;
            </div>;
          </div>;





          {filteredResults && filteredResults.length > 0 && (;
            <div className='space-y-8'>;
              {Object && Object.entries(groupedResults).map(([type, typeResults]) => (;
                <div key={type}>;
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults && typeResults.length});
                  </h2>;

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

      const data = await response.json();
      results = data.results || [];
      totalCount = data.totalCount || results.length;
      logInfo(`Server-side fetch successful: ${results.length} results`);





