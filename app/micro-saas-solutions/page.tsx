>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e9f6

  return (
    <>
      <div>
      <Helmet>
        <title>Micro Saas Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas solutions solutions and services" />
        <meta name="keywords" content="micro, saas, solutions" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Micro Saas Solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional micro saas solutions solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
=======
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relativeoverflow-hidden py-20">
          {/* Animated Background */}
          <div className="absoluteinset-0 opacity-20">
            <div className="w-fullh-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          

              </p>
              <p className="text-lgtext-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our comprehensive suite of intelligent micro SaaS solutions designed to automate, 
                optimize, and accelerate your business growth with cutting-edge AI technology.
              </p>
              
              <div className="flexflex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link 
                  to="/contact" 
                  className="groupbg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/demo" 
                  className="groupborder-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-5h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="gridgrid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xlmd:text-4xl font-bold text-purple-400 mb-2">25+</div>
                  <div className="text-gray-300text-sm md:text-base">AI Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xlmd:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300text-sm md:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xlmd:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300text-sm md:text-base">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xlmd:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300text-sm md:text-base">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Sorting */}
        <section className="py-8bg-slate-800/50 border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="flexflex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flexflex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Sorting */}
              <div className="flexitems-center gap-4">
                <span className="text-gray-300text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="groupbg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative overflow-hidden"
                >
                  {/* Badges */}
                  <div className="absolutetop-4 right-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gradient-to-rfrom-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-gradient-to-rfrom-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-gradient-to-rfrom-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {product.discount}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
</>
  );
};



        </div>
        </div>
              </p>
              </p>
