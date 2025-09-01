
export function ServicesShowcasePage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  
  
  
  
      
      let matchesPrice = true;
      if (priceRange === 'low') {

        matchesPrice = service.price < 1000} else if (priceRange === 'medium') {

        matchesPrice = service.price >= 1000 && service.price <= 3000} else if (priceRange === 'high') {

        matchesPrice = service.price > 3000}

      return matchesSearch && matchesCategory && matchesPrice}
  );

  
        return()
          (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] ||
            0) -
          (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] ||
            0)
        );
      case 'price':
        return a.price - b.price;
      case 'roi':'
        
        
        return bRoi - aRoi;
      case 'delivery':'
        
        
        return aDelivery - bDelivery;
      default:
        return 0}
  }) ;

  
    return categoryData ? categoryData.icon : Globe};

  
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600'};

  
    if (price <= 3000) return 'medium';
    return 'high'};

  
    switch (range) {

      case 'low':'
        return 'text-green-400';
      case 'medium':'
        return 'text-yellow-400';
      case 'high':'
        return 'text-red-400';
      default:'
        return 'text-gray-400'}
  };

  
      case 'Cutting-edge':'
        return 'text-blue-400';
      case 'Advanced':'
        return 'text-green-400';
      default:'
        return 'text-gray-400'}  };

  return()
    <div className="min-h-screen py-8">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}"
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h1 className="text-5xl font-bold text-white mb-4">
              Revolutionary AI & Technology Services
            </h1>"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services that are
              transforming industries worldwide. From AI-powered solutions to
              quantum computing platforms, we deliver innovative technology that
              drives business growth and competitive advantage.
            </p>"
            <div className="mt-8 flex justify-center space-x-4">"
              <div className="flex items-center space-x-2 text-cyan-400">"
                <Sparkles className="w-5 h-5"  />
                <span>Revolutionary Technology</span>
              </div>"
              <div className="flex items-center space-x-2 text-green-400">"
                <Award className="w-5 h-5"  />
                <span>Proven ROI</span>
              </div>"
              <div className="flex items-center space-x-2 text-purple-400">"
                <ZapIcon className="w-5 h-5"  />                <span>Fast Implementation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}"
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}"
            <div className="relative">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
              <input"

                type="text""                placeholder="Search services..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}"
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}"
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>) ) }
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}"
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>) ) }
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}"
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>) ) }
            </select>
          </div>
        </div>

        {/* Services Grid */}"
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}"
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Service Header */}"
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}
                >
                  {React.createElement(getCategoryIcon(service.category), {

                    className: 'w-8 h-8 text-white'})}
                </div>"
                <div className="text-right">
                  <span`
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)} bg-gray-700`}
                  >
                    {service.innovationLevel}
                  </span>
                </div>
              </div>

              {/* Service Title & Description */}"
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>"
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Category & Price */}"
              <div className="flex items-center justify-between mb-4">"
                <span className="text-sm text-gray-500">
                  {service.category}
                </span>
                <span`
                  className={`text-lg font-bold ${getPriceColor(service.price)}`}
                >
                  ${service.price.toLocaleString()}/month
                </span>
              </div>

              {/* Key Features */}"
              <div className="mb-4">"
                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                  Key Features:
                </h4>"
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}"
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >"
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0"  />"                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && ("
                    <div className="text-sm text-cyan-400">
                      +{service.features.length - 3} more features
                    </div>) }
                </div>
              </div>

              {/* Benefits & ROI */}"
              <div className="mb-4">"
                <div className="flex items-center justify-between text-sm">"
                  <span className="text-gray-500">ROI:</span>"
                  <span className="text-green-400 font-semibold">
                    {service.roi}
                  </span>
                </div>"
                <div className="flex items-center justify-between text-sm">"
                  <span className="text-gray-500">Delivery:</span>"
                  <span className="text-blue-400">
                    {service.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Market Info */}"
              <div className="mb-4 p-3 bg-gray-700 rounded-lg">"
                <div className="text-xs text-gray-400 space-y-1">"
                  <div className="flex justify-between">
                    <span>Market Price:</span>"
                    <span className="text-white">{service.marketPrice}</span>
                  </div>"
                  <div className="flex justify-between">
                    <span>Market Size:</span>"
                    <span className="text-white">{service.marketSize}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}"
              <div className="flex space-x-2">
                <a
                  href={service.demoUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  View Demo
                </a>
                <a`
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}"
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all duration-300 text-center"
                >
                  Contact Us
                </a>
              </div>

              {/* Contact Info */}"
              <div className="mt-4 pt-4 border-t border-gray-700">"
                <div className="text-xs text-gray-500 space-y-1">"
                  <div className="flex items-center space-x-2">"
                    <Phone className="w-3 h-3"  />
                    <span>{service.contactInfo.phone}</span>
                  </div>"
                  <div className="flex items-center space-x-2">"
                    <Mail className="w-3 h-3"  />
                    <span>{service.contactInfo.email}</span>
                  </div>"
                  <div className="flex items-center space-x-2">"
                    <Globe className="w-3 h-3"  />                    <span>{service.contactInfo.website}</span>
                  </div>
                </div>
              </div>
            </motion.div>) ) }
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}"
          className="mt-16 text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">"
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-cyan-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our cutting-edge
              AI and technology services. Get started today and experience the
              future of business innovation.
            </p>"
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a"
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Inquiry"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a"
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>) }
export default ServicesShowcasePage;
'"`