          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🚀 Revolutionary Micro SAAS Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
              With Innovation
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover cutting-edge micro SAAS solutions powered by AI, quantum security, and blockchain technology. 
            Each service is designed to deliver immediate value and long-term transformation.
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate-dark/50 border-zion-cyan/30 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
              />
            </div>
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {pricingOptions.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing' : pricing}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
              <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
              <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-zion-slate-dark/30 border border-zion-slate-light/20">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-zion-cyan data-[state=active]:to-zion-blue data-[state=active]:text-white data-[state=active]:border-zion-cyan"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Featured Services
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-zion-purple to-zion-pink bg-clip-text text-transparent">
              All Services
            </span>
          </h2>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-zion-slate-light text-xl">No services found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          )}
