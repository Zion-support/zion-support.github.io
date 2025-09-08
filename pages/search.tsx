  useEffect(() => {
    const filtered = searchResults.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setResults(filtered);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      description="Search our comprehensive collection of services, articles, and resources."
      keywords="search, services, articles, resources, technology"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find exactly what you're looking for in our comprehensive collection of services and resources.
              </p>
        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for services, articles, or resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

          {/* Search Results */}, {router.query.q && (
            <div className="mb-6">
              <p className="text-gray-600">
                {isLoading
                  ? 'Searching...'
                  : `Found ${searchResults.length} results for "${router.query.q}"`}
              </p>
            </div>
          )}, {isLoading ? (
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
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {result.description}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{new Date(result.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={result.url}
                        className="ml-4 flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {results.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Clear All Filters
                  </button>
                </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance and recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Browse All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}
