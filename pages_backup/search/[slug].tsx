




import { Search, Filter, Grid, List } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';



  author?: {
    name: string;



  author?: {
    name: string;
    avatar?: string
  },
  tags?: string[],
  category?: string;
  date?: string
}







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














          return bRating - aRating;
        });
        break;
      default:;
        break;
    }

  } else {;
    all && all.sort((a, b) => a && a.title.localeCompare(b && b.title));








        sort: sortBy}),
      if (categoryFilter !== 'all') params.append('category', categoryFilter);





      }
    } catch (error) {;
      logErrorToProduction('Error fetching search results:', { data: error });


      setTotalResults(offline.totalCount);
      if (page === 1) {;
        setResults(offline.results);


      } else {;
        setResults((prev) => [...prev, ...offline.results]);
    } finally {;
      setLoading(false);
      } catch (error) {
  },;
    fetchResults(searchQuery, nextPage)
  };
  const categories = Array.from(
    new Set(results.map((r) => r.category).filter(Boolean));
  );





  // Load more results;


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






        return (
          <div key={result && result.id} data-testid='result-card'>            <ProductCard





              product={{


                tags: result.tags || [],
                category: result.category || '',










}
  },




        canonical={`https://app && app.ziontechgroup.com/search/${slug}`}
      />;
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>;



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

                  onChange={(e) => handleSearch(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  placeholder="Search marketplace..."
                  className="pl-10"
                />


                  <Filter className="h-4 w-4" />
                  Filters

                </Button>
                <select

                <select

                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}'
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm';'
                  data-testid='sort-select';










                </select>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    placeholder="Min $"


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

                    onChange={e => setMaxPrice(e && e.target.value)}
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />;
                </div>;
                  onChange={(e) => setMinRating(e.target.value)}


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






      const data = await response.json();

      results = data.results || [];
      totalCount = data.totalCount || results.length;`
      logInfo(`Server-side fetch successful: ${results.length} results`);




