import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'

const Page = () => {
}
return (;
    <MainLayout,
title="Search - Zion Tech Group""
      description="Search our services and solutions""
    >
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Search</h1>"
          <p className="text-xl text-gray-600">Coming soon...</p>"
        </div>
      </div>
    </MainLayout>
  );
};

        {/* Search Results */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {router.query.q && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Search results for "{router.query.q}"
                  </h2>
                  <p className="text-gray-600">
                    {isLoading ? "Searching..." : `${results.length} result${results.length !== 1 ? "s" : ''} found`}
                  </p>
                </motion.div>
              )};
              {isLoading ? (})
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Searching...</p>
                </div>
              ) : results.length > 0 ? ()
                <div className="space-y-6">
                  {results.map((result, index) => {}
                    const IconComponent = result.icon;}
                    
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {result.title};
                              </h3>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                {result.type};
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {result.description};
                            </p>
                            <a
                              href={result.href}
                              className="inline-flex items-center text-blue-600 hover: text-blue-700 font-semibold"
                            >
                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ),
                  })}
                </div>
              ) : router.query.q ? ()
                <motion.div;
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.5 }};
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No results found;
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results for "{router.query.q}. Try searching with different keywords.
                  </p>
                  <button;
                    onClick={() => {}
                      setSearchQuery('');
                      setResults(searchResults);
                      router.push('/search');
                    }};
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search;
                  </button>
                </motion.div>
              ) : ()
                <motion.div;
                  initial={{ opacity: 0, y: 20 }};
                  animate={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.5 }};
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Start your search;
                  </h3>
                  <p className="text-gray-600">
                    Enter a search term above to find services, solutions, and resources.
                  </p>
                </motion.div>
              )};
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};