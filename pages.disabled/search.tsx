


export default function SearchPage() {;
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
export default function SearchPage() {;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);




  const filteredResults = searchResults && searchResults.filter(result => {;
    const matchesQuery = result && result.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
                        result && result.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || result && result.category === selectedCategory;
    const matchesFilter = selectedFilter === 'All' || result && result.type === selectedFilter;



    return matchesQuery && matchesCategory && matchesFilter;
  });

  return (

    <Layout>;
      <Head>;
        <title>Search - Zion Tech Group</title>;
        <meta name="description" content="Search our website for information, guides, services, and more." />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;


        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}



              transition={{ duration: 0 && 0.8 }}>;
              <h1 className="text-5xl font-bold mb-6">;
                Search Our Website;
              </h1>;
              <p className="text-xl mb-8 text-blue-100">;
                Find the information you need quickly and easily.;
              </p>;



              {/* Search Bar */}

                    <button
                      key={filter && filter.name}
                      onClick={() => setSelectedFilter(filter && filter.name)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${;
                        selectedFilter === filter && filter.name;
                          ? 'bg-blue-600 text-white';
                          : 'bg-white text-gray-700 hover:bg-gray-100';
                      }`}


                  ))}                </div>



))}
                </div>

              </motion.div>
            )}
          </div>
        </section>
                    >;
                      {filter && filter.name} ({filter && filter.count});
                    </button>;
                  ))}
                </div>;
              </motion && motion.div>;
            )}

          </div>;
        </section>;

        {/* Search Results */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            {filteredResults && filteredResults.length > 0 ? (;
              <div className="space-y-6">;
                {filteredResults && filteredResults.map((result, index) => (;
                  <motion&& motion.div
                    key={result && result.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}


                      {categories.map(category => (
                        <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                          {category.icon} {category.name  } catch (error) {
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
                    </select>;
                  </div>;
                  {/* Status Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div>
                    <label className="block text-white font-medium mb-2">Status</label>
                    <select
                      value={filters.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {statuses.map(status => (
                        <option key={status.id} value={status.id} className="bg-slate-800 text-white">
                          {status.icon} {status.name  } catch (error) {
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
                    </select>;
                  </div>;
                  {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div>
                    <label className="block text-white font-medium mb-2">Price Range</label>
                    <select
                      value={filters.priceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {priceRanges.map(range => (
                        <option key={range.id} value={range.id} className="bg-slate-800 text-white">
                          {range.icon} {range.name  } catch (error) {
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
                    </select>;
                  </div>;
                  {/* Technology Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div>
                    <label className="block text-white font-medium mb-2">Technology</label>
                    <select
                      value={filters.technology  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {technologies.map(tech => (
                        <option key={tech.id} value={tech.id} className="bg-slate-800 text-white">
                          {tech.icon} {tech.name  } catch (error) {
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
                    </select>;
                  </div>;
                </div>;
              </motion.div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Search Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </h2>
            <p className="text-white/60">
              {isSearching ? 'Searching...' : `${searchResults.length} services found`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </p>;
          </div>;
          {/* Loading State */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {isSearching && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white/60">Searching our services...</p>
            </div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!isSearching && searchTerm && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
          {/* Search Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!isSearching && searchResults.length > 0 && (
            <AnimatePresence mode="wait">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {searchResults.map((service, index) => (
                  <motion.div
                    key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`group relative ${;
                      viewMode === 'grid';
                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl';
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <result.icon className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-500">{result.category}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{result.type}</span>
                        </div>

                  >;
                    {category.name} ({category.count});
                  </button>))}
              </div>;
              <div className="text - sm text - gray - 600">;
                {filtered_results.length} results found;
              </div>;
            </div>;
            {show_filters && (
              <motion.div;
                className="mt - 4 p - 4 bg - gray - 50 rounded - lg";
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >;
                <div className="flex flex - wrap gap - 4">;
                  {filters.map ((filter) => (
                    <button;
                      key={filter.name}
                      on_click={() => setSelectedFilter (filter.name)}
                      className={`px - 3 py - 1 rounded - full text - sm transition - colors ${
                        selected_filter === filter.name;
                          ? 'bg - blue - 600 text - white';
                          : 'bg - white text - gray - 700 hover:bg - gray - 100';
                      }`}
                    >;
                      {filter.name} ({filter.count});
                    </button>))}
                </div>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Search Results */}
        <section className="py - 16">;
          <div className="container mx - auto px - 4">;
            {filtered_results.length > 0 ? (
              <div className="space - y-6">;
                {filtered_results.map ((result, index) => (
                  <motion.div;
                    key={result.id}
                    className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover:shadow - md transition - shadow";
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    priceRange: 'all',


      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'}
            </h2>
            <p className="text-white/60">
              {isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
    technology: 'all',

ursor/integrate-build-improve-and-re-verify-8f7d

        </div>
      </section>

      {/* Search Results */}
      <section className='px-6 pb-20'>
        <div className='max-w-7xl mx-auto'>
          {/* Results Header */}
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : 'All Services'}
            </h2>
            <p className='text-white/60'>
              {isSearching
                ? 'Searching...'
                : `${searchResults.length} services found`}              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
            </p>
          </div>
{/* Loading State */}
          {isSearching && (

            <div className='text-center py-20'>
              <div className='w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center'>
                <div className='w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin'></div>
              </div>

              <p className='text-white/60'>Searching our services...</p>            </div>
          )}
          {/* No Results */}
          {!isSearching && searchTerm && searchResults.length === 0 && (

            <div className='text-center py-20'>
              <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center'>
                <Search className='w-12 h-12 text-white/40' />

              </div>
              <h3 className='text-2xl font-semibold text-white mb-2'>
                No services found
              </h3>
              <p className='text-white/60 mb-6'>                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}


                className='px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors'              >
                Clear All Filters
              </button>
            </div>
          )}
{/* Search Results */}
          {!isSearching && searchResults.length > 0 && (


            <AnimatePresence mode='wait'>
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >                {searchResults.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative ${


                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {service.status}
                          </span>
                          <span className="text-xs text-white/40">{service.technology}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      </div>


                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                      viewMode === 'grid'                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300'
                    }`}
                  >
                    <div className='absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
                    <div className='relative z-10'>
                      <div className='flex items-start justify-between mb-4'>
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}
                        >
                          <service.icon className='w-8 h-8 text-white' />
                        </div>
                        <div className='flex flex-col items-end gap-2'>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              service.status === 'active'
                                ? 'bg-green-500/20 text-green-300'
                                : service.status === 'beta'
                                  ? 'bg-yellow-500/20 text-yellow-300'
                                  : 'bg-blue-500/20 text-blue-300'
                            }`}
                          >
                            {service.status}
                          </span>
                          <span className='text-xs text-white/40'>
                            {service.technology}
                          </span>
                        </div>
                      </div>

                      <h3 className='text-xl font-bold mb-3 text-white'>
                        {service.title}
                      </h3>
                      <p className='text-white/70 leading-relaxed mb-4'>
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className='mb-4'>
                        <span className='text-2xl font-bold text-cyan-400'>
                          {service.price}
                        </span>
                      </div>

                      {/* Features */}
                      <div className='mb-6'>
                        <h4 className='text-white font-semibold mb-3 text-sm'>
                          Key Features:
                        </h4>
                        <div className='space-y-2'>
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className='flex items-center gap-2 text-sm text-white/70'
                            >
                              <CheckCircle className='w-4 h-4 text-cyan-400 flex-shrink-0' />                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
<div className="flex items-center justify-between">
                        <a
                          href={service.link}
                          className="flex items-center text-cyan-400 group-hover: text-cyan-300 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Get Quote
                        </a>
                      </div>





</Link>




                    </div>
                      </Link>                    </div>
ursor/fix-lint-push-and-merge-to-main-ae4e
                  </motion.div>
                ))}
              </div>


            ) : (
              <motion.div
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}>;
                    <div className="flex items-start justify-between">;
                      <div className="flex-1">;
                        <div className="flex items-center mb-2">;
                          <result && result.icon className="w-5 h-5 text-blue-600 mr-2" />;
                          <span className="text-sm text-gray-500">{result && result.category}</span>;
                          <span className="mx-2 text-gray-300">•</span>;
                          <span className="text-sm text-gray-500">{result && result.type}</span>;
                        </div>;
                        <h3 className="text-xl font-bold text-gray-900 mb-2">;
                          <Link
                            href={result && result.url}
                            className="hover:text-blue-600 transition-colors">;
                            {result && result.title}
                          </Link>;
                        </h3>;
                        <p className="text-gray-600 mb-4">;
                          {result && result.description}
                        </p>;
                        <div className="flex items-center text-sm text-gray-500">;
                          <Clock className="w-4 h-4 mr-1" />;
                          <span className="mr-4">Updated {result && result.lastUpdated}</span>;
                          <div className="flex items-center">;
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />;
                            <span>{result && result.rating}</span>;
                          </div>;
                        </div>;
                      </div>;
                      <Link
                        href={result && result.url}
                        className="ml-4 text-blue-600 hover:text-blue-700 transition-colors">;
                        <ArrowRight className="w-5 h-5" />;
                      </Link>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
}
ursor/fix-lint-push-and-merge-to-main-ae4e
            ) : (;
              <motion&& motion.div

            ) : (
              <motion.div



                className="text-center py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters.
                </p>
                <button
                  onClick={() => {

            ) : (
              <motion.div
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}>;
                    </div>
                      </Link>                    </div>
                  </motion.div>
                ))}
              </div>
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors";
                >;
                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}


        {/* Popular Searches */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


            </div>;
          </div>;
        </section>;
      </div>;



      <SmartFooter />
    </div>
);
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'AI Development'
                'Cloud Services'
                'Cybersecurity'
                'Database Design'
                'Mobile Apps'
                'Web Development'
                'IT Support'
                'Consulting'
              ].map((term, index) => (
                <motion.button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {term}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
origin/cursor/automate-test-improve-and-merge-code-2533
  );




            </AnimatePresence>
          )}
          {/* Initial State - Show all services when no search */}
          {!isSearching && !searchTerm && (


            <div className='text-center py-20'>
              <div className='w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center'>
                <Search className='w-12 h-12 text-white/40' />
              </div>
              <h3 className='text-2xl font-semibold text-white mb-2'>
                Start Your Search
              </h3>
              <p className='text-white/60 mb-6'>
                Enter keywords above to find the perfect technology solutions
                for your business
              </p>
              <div className='flex flex-wrap justify-center gap-2'>
                <span className='text-sm text-white/40'>Popular searches:</span>
                {[
                  'AI',
                  'Cybersecurity',
                  'Quantum Computing',
                  'Edge Computing',
                ].map(term => (                  <button
                    key={term}
                    onClick={() => {
                      setSearchTerm(term);
                      performSearch();
                    }}
                    className='px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors'                  >
                    {term}
                  </button>
                ))}
          {/* Search Results */}
          {router.query.q && (
            <div className="mb-6">
              <p className="text-gray-600">
                {isLoading
                  ? 'Searching...'
                  : `Found ${searchResults.length} results for "${router.query.q}"`}
              </p>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getIconForType(result.type)}
                    </div>
                    <div className="flex-1">
                      <Link href={result.url} className="group">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover: text-blue-600 transition-colors mb-2">
                          {result.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-3">{result.description}</p>
                      <Link
                        href={result.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : router.query.q && !isLoading ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t find any results for "{router.query.q}". Try
                different keywords or browse our services.''
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Services
                </Link>
                <Link
                  href="/solutions"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search our content
              </h3>
              <p className="text-gray-600 mb-6">
                Find information about our services, solutions, and company
                resources.
              </p>
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <p className="text-sm text-gray-600">
                    AI, IT, and SaaS solutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Solutions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Industry-specific solutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Resources
                  </h4>
                  <p className="text-sm text-gray-600">
                    Blog, help, and documentation
                  </p>
                </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </div>
            </div>
          )}
        </div>
      </section>
<SmartFooter />
    </div>


  );

  )

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}


  )
}



)
}

)
}




