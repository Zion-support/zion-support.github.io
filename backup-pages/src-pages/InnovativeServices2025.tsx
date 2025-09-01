
        return b.rating - a.rating;'
      case 'popularity':
      default:
        return b.reviews - a.reviews}
  }) ;
  return()
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}"
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">"
        <div className="absolute inset-0 bg-black/20"></div>"
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Innovative Services 2025
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}"
            className="text-xl md:text-2xl text-zion-blue-light max-w-4xl mx-auto mb-8"
          >
            Discover cutting - edge AI solutions, micro SAAS platforms, and revolutionary IT services that will transform your business in 2025
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}"
            className="flex flex-wrap justify-center gap-4"
          >
            <Link"
              to="/contact"
              className="bg-white text-zion-blue-dark px-8 py-3 rounded-full font-semibold hover:bg-zion-blue-light transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link"
              to="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}"
      <section className="bg-zion-slate-dark py-6">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-blue-light">"
            <div className="flex items-center gap-2">"
              <Phone className="w-5 h-5"  />
              <span>+1 302 464 0950</span>
            </div>"
            <div className="flex items-center gap-2">"
              <Mail className="w-5 h-5"  />
              <span>kleber@ziontechgroup.com</span>
            </div>"
            <div className="flex items-center gap-2">"
              <MapPin className="w-5 h-5"  />              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}"
      <section className="py-8 bg-white/5 backdrop-blur-sm">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}"
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${

                    selectedCategory === category.id'
                      ? 'bg-zion-blue text-white''
                      : 'bg-zion-slate text-zion-blue-light hover:bg-zion-slate-light'`
                  }`}
                >"
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>"
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>) ) }
            </div>

            {/* Search and Sort */}"
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">"
              <div className="relative">
                <input"
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}"
                  className="w-full sm:w-64 px-4 py-2 pl-10 bg-zion-slate text-white rounded-lg border border-zion-slate-light focus:border-zion-blue focus:outline-none"
                />"
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-zion-blue-light"  />              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}"
                className="px-4 py-2 bg-zion-slate text-white rounded-lg border border-zion-slate-light focus:border-zion-blue focus:outline-none"
              >"
                <option value="popularity">Most Popular</option>"
                <option value="rating">Highest Rated</option>"
                <option value="price-low">Price: Low to High</option>"
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}"
      <section className="py-16">"
        <div className="container mx-auto px-4">"
          <AnimatePresence mode="wait">
            <motion.div`
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}"
              className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map ( (service, index) => (<motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}"
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-zion-slate-light hover:border-zion-blue transition-all duration-300 hover:shadow-2xl hover:shadow-zion-blue/20"
                >
                  {/* Badge */}
                  {service.badge && ("
                    <div className="absolute top-4 right-4">`
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${

                        service.badge === 'New' ? 'bg-green-500 text-white' :'
                        service.badge === 'Popular' ? 'bg-blue-500 text-white' :'
                        service.badge === 'Featured' ? 'bg-purple-500 text-white' :'
                        'bg-orange-500 text-white'`
                      }`}>
                        {service.badge}
                      </span>
                    </div>) }

                  {/* Icon */}`
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>"
                    <service.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-blue-light transition-colors duration-300">
                    {service.name}
                  </h3>"
                  <p className="text-zion-blue-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}"
                  <div className="mb-6">"
                    <h4 className="text-sm font-semibold text-zion-blue-light mb-2">Key Features:</h4>"
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => ("
                        <li key={idx} className="text-xs text-zion-blue-light flex items-center gap-2">"
                          <div className="w-1.5 h-1.5 bg-zion-blue rounded-full"></div>
                          {feature}
                        </li>) ) }
                    </ul>
                  </div>

                  {/* Pricing and Rating */}"
                  <div className="flex items-center justify-between mb-6">"
                    <div className="text-right">"
                      <div className="text-2xl font-bold text-white">{service.price}</div>"
                      <div className="text-sm text-zion-blue-light line-through">{service.marketPrice}</div>"
                      <div className="text-xs text-green-400">Save {service.savings}</div>
                    </div>"
                    <div className="text-center">"
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i}`                            className={`w-4 h-4 ${

                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current''
                                : 'text-zion-slate-light'`
                            }`}
                            />
                        ))}
                      </div>"
                      <div className="text-xs text-zion-blue-light">
                        {service.rating} ({service.reviews} reviews)
                      </div>
                      <div role="button" className="text - xs text - zion - blue - light">
                        {service.rating} ({service.reviews} reviews) </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}"
                    className="w-full bg-gradient-to-r from-zion-blue to-zion-blue-light text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-blue-light hover:to-zion-blue transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-zion-blue/25"
                  >
                    Learn More"
                    <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"  />                  </Link>
                </motion.div>) ) }
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedServices.length === 0 && (<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"
              className="text-center py-16"
            >"
              <div className="text-6xl mb-4">🔍</div>"
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>"
              <p className="text-zion-blue-light">Try adjusting your search criteria or browse all services.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}"
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-blue-light">"
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}"
            className="text-xl text-zion-blue-light max-w-3xl mx-auto mb-8"
          >
            Join thousands of businesses already leveraging our innovative services to stay ahead of the competition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}"
            className="flex flex-wrap justify-center gap-4"
          >
            <Link"
              to="/contact"
              className="bg-white text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-blue-light transition-colors duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link"
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors duration-300 text-lg"
            >
              View Full Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )}'"`