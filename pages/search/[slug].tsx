import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SearchResultsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Search Results - Zion Tech Group</title>
        <meta name="description" content="Search results for Zion Tech Group services and solutions" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Search Results</h1>
            <p className="text-xl text-gray-600">
              Search term: {slug ? slug.toString().replace(/-/g, ' ') : 'No search term'}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Search Feature Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're currently developing our search functionality. In the meantime, please browse our services or contact us directly for assistance.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Help Finding Something?</h3>
              <p className="text-blue-700 mb-4">
                Our team is here to help you find the right solution for your needs.
              </p>
              <div className="space-y-2 text-sm text-blue-600 mb-4">
                <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
                <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
                <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
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
                  <Filter className='h-4 w-4' />                  Filters
                </Button>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                  data-testid='sort-select'><option value='relevance'>Relevance</option>
                  <option value='newest'>Newest</option>
                  <option value='price_asc'>Price: Low to High</option>
                  <option value='price_desc'>Price: High to Low</option>
                  <option value='rating'>Highest Rated</option>                </select>
                <select
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e.target.value)}
                  className='px-3 py-1 border border-gray-300 rounded-md text-sm'
                >
                  <option value='all'>All Categories</option>
                  {categories.map(c => (                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
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
                    className='w-20 px-2 py-1 border border-gray-300 rounded-md text-sm'                  />
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
          {!loading && filteredResults.length === 0 && (
            <div data-testid='search-empty-state'>              <SearchEmptyState onRetry={() => fetchResults(searchQuery)} />
            </div>
          )}
          {/* Results */}
          {filteredResults.length > 0 && (
            <div className='space-y-8'>
              {Object.entries(groupedResults).map(([type, typeResults]) => (
                <div key={type}>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize'>                    {type}s ({typeResults.length})
                  </h2>
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'space-y-4'
                    }>{typeResults.map(renderResultCard)}
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
                        <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>                        Loading...
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

export default Slug;