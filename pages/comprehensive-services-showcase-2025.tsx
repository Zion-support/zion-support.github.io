  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    let priceMatch = true;
    if (selectedPriceRange !== 'All Prices') {;
      const price = parseInt(service && service.price.replace('$', ''));
      switch (selectedPriceRange) {;
        case 'Under $300':;
          priceMatch = price < 300;
          break;
        case '$300 - $500':;
          priceMatch = price >= 300 && price <= 500;
          break;
        case '$500 - $800':;
          priceMatch = price > 500 && price <= 800;
          break;
        case '$800+':;
          priceMatch = price > 800;
        return (
          parseInt(a && a.price.replace('$', '')) -;
          parseInt(b && b.price.replace('$', ''));
        );      case 'rating':;
        return b && b.rating - a && a.rating;
      case 'popularity':;
        return (b && b.popular ? 1 : 0) - (a && a.popular ? 1 : 0);
      default:;
        return 0;    }
  });
    if (numPrice < 300) return 'Under $300';
    if (numPrice <= 500) return '$300 - $500';
    if (numPrice <= 800) return '$500 - $800';
    return '$800+';
  };

  const getCategoryIcon = (category: string) => {;
    const categoryData = categories && categories.find(cat =>;
      category && category.toLowerCase().includes(cat && cat.id.toLowerCase());
    );
    return categoryData ? categoryData && categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {;
    const categoryData = categories && categories.find(cat =>;
      category && category.toLowerCase().includes(cat && cat.id.toLowerCase());
    );

  return (
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden'>;
        {/* Animated Background */}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-5xl lg:text-7xl font-bold mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>;
                Comprehensive Services;
              </span>;
              <br />;
              <span className='text-white'>Showcase 2025</span>;
            </h1>;
            <p className='text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed'>;
              Discover our portfolio of{' '}
              <span className='text-cyan-400 font-semibold'>;
                real, innovative micro SAAS services;
              </span>;
              , cutting-edge IT solutions, and revolutionary AI platforms.;
              Transform your business with;
              <span className='text-blue-400 font-semibold'>;
                {' '}
                proven technology;
              </span>{' '}
            {/* Contact CTA */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25'>;
                Get Started Today;
                <ArrowRight className='w-5 h-5 ml-2 inline' />;
              </Link>;
              <a
      {/* Filters and Search Section */}
      <section className='py-12 bg-gray-900 border-b border-gray-800'>;
        <div className='container mx-auto px-4'>;
          <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>;
            {/* Search */}
            <div className='relative flex-1 max-w-md'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>;
              {categories && categories.map(category => (;
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === category;
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25';
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                  }`}
                >;
                  {category}
                </button>;
              ))}
            {/* Price Range Filter */}
            <div className='flex items-center gap-2'>;
              <Filter className='w-5 h-5 text-gray-400' />;
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500';
              >;
                {pricingRanges && pricingRanges.map(range => (;
                  <option key={range} value={range}>;
                    {range}
                  </option>;
                ))}
            {/* View Mode Toggle */}
            <div className='flex items-center gap-2 bg-gray-800 rounded-lg p-1'>;
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${;
                  viewMode === 'grid';
                    ? 'bg-cyan-500 text-white';
                    : 'text-gray-400 hover:text-white';
                }`}
              >;
                <Grid className='w-5 h-5' />;
              </button>;
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${;
                  viewMode === 'list';
                    ? 'bg-cyan-500 text-white';
                    : 'text-gray-400 hover:text-white';
                }`}
            {/* Sort Options */}
            <div className='flex items-center gap-2'>;
              <span className='text-gray-400 text-sm'>Sort by:</span>;
              <select
                value={sortBy}
              >;
                <option value='popularity'>Popularity</option>;
                <option value='name'>Name</option>;
                <option value='price'>Price</option>;
                <option value='rating'>Rating</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className='group'>;
                  <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full relative overflow-hidden'>;
                    {/* Popular Badge */}
                    {service && service.popular && (;
                      <div className='absolute top-4 right-4'>;
                        <span className='px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full'>;
                          Popular;
                        </span>;
                      </div>;
                    )}
                    {/* Service Icon */}
                    {/* Service Info */}
                    <h3 className='text - 2xl font - bold text - white mb - 3'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 300 mb - 4 line - clamp - 3'>;
                      {service.description}
                    {/* Price */}
                    <div className='flex items - center justify - between mb - 6'>;
                      <div className='text - 3xl font - bold text - cyan - 400'>;
                        {service.price}
                        <span className='text - lg text - gray - 400'>;
                          {service.period}
                        </span>;
                      </div>;
                      <div className='flex items - center gap - 1'>;
                        <Star className='w - 5 h - 5 text - yellow - 400 fill - current' />;
                        <span className='text - white font - semibold'>;
                          {service.rating}
                    {/* Key Features */}
                    <div className='space-y-2 mb-6'>;
                      {service && service.features.slice(0, 3).map((feature, idx) => (;
                        <div key={idx} className='flex items-center'>;
                          <CheckCircle className='w-4 h-4 text-green-400 mr-3 flex-shrink-0' />;
                          <span className='text-gray-300 text-sm'>;
                            {feature}
                          </span>;
                        </div>;
                      ))}
                    {/* Category and Setup */}
                    <div className='flex items - center justify - between mb - 6 text - sm'>;
                      <span className='px - 3 py - 1 bg - gray - 700 text - gray - 300 rounded - full'>;
                        {service.category}
                    {/* Key Benefits */}
                    <div className='mb-6'>;
                      <h4 className='text-white font-semibold mb-3'>;
                        Key Benefits:;
                      </h4>;
                      <div className='space-y-2'>;
                        {service && service.keyBenefits.slice(0, 2).map((benefit, idx) => (;
                          <div key={idx} className='flex items-center'>;
                            <div className='w-2 h-2 bg-cyan-400 rounded-full mr-3'></div>;
                            <span className='text-gray-300 text-sm'>;
                              {benefit}
                            </span>;
                          </div>;
                        ))}
                    {/* CTA Button */}
                    <Link
                      href={service && service.link}
                      className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                      Learn More;
                      <ArrowRight className='w-4 h-4 ml-2 inline' />;
                    </Link>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          ) : (;
            /* List View */;
            <div className='space-y-6'>;
              {sortedServices && sortedServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className='group'>;
                  <div className='bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300'>;
                    <div className='flex flex-col lg:flex-row gap-6 items-start'>;
                      {/* Service Icon and Basic Info */}
                      <div className='flex items-start gap-4'>;
                        <div className='text-4xl'>{service && service.icon}</div>;
                        <div className='flex-1'>;
                          <div className='flex items-center gap-3 mb-2'>;
                            <h3 className='text-2xl font-bold text-white'>;
                              {service && service.name}
                            </h3>;
                            {service && service.popular && (;
                              <span className='px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full'>;
                                Popular;
                              </span>;
                            )}
                      {/* Price and Rating */}
                      <div className='text - right'>;
                        <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                          {service.price}
                          <span className='text - lg text - gray - 400'>;
                            {service.period}
                          </span>;
                        </div>;
                        <div className='flex items - center justify - end gap - 1 mb - 2'>;
                          <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                          <span className='text - white font - semibold'>;
                            {service.rating}

                      {/* Price and Rating */}
                      <div className='text-right'>;
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                          {service && service.price}
                          <span className='text-lg text-gray-400'>;
                            {service && service.period}
                          </span>;
                        </div>;
                        <div className='flex items-center justify-end gap-1 mb-2'>;
                          <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                          <span className='text-white font-semibold'>;
                            {service && service.rating}
                          </span>;
                          <span className='text-gray-400'>;
                            ({service && service.reviews});
                          </span>;
                        </div>;
                        <span className='text-sm text-gray-400'>;
                          {getPriceRange(service && service.price)}
                        </span>;
                      </div>;
                    </div>;

                    {/* CTA and Additional Info */}
                    <div className='mt-6 flex flex-col lg:flex-row items-center justify-between gap-4'>;
                      <div className='flex items-center gap-4 text-sm text-gray-400'>;
                        <span>Market: {service && service.marketSize}</span>;
                        <span>Growth: {service && service.growthRate}</span>;
                        <span>ROI: {service && service.roi}</span>;
                      </div>;
                      <Link
                        href={service && service.link}
                        className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                        Learn More;
                        <ArrowRight className='w-4 h-4 ml-2 inline' />;
                      </Link>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          )}
          {/* No Results */}
          {sortedServices && sortedServices.length === 0 && (;
            <div className='text-center py-20'>;
              <div className='text-6xl mb-6'>🔍</div>;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                No services found;
              </h3>;
              <p className='text-gray-400 mb-6'>;
                Try adjusting your filters or search terms to find what you're;
                looking for.;
              </p>;
              <button
                onClick={() => {;
                  setSelectedCategory('All Services');
                  setSelectedPriceRange('All Prices');
                  setSearchQuery('');
                }}
                className='px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all duration-300';
              >;
                Clear All Filters;
              </button>;
            </div>;
          )}
      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-b from-black to-gray-900'>;
        <div className='container mx-auto px-4 text-center'>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
              <a
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'>;
                <Phone className='w-5 h-5 mr-2' />;
                {contactInfo && contactInfo.mobile}
              </a>;
              <a

            <div className='text-center text-gray-400'>;
              <p className='mb-2'>{contactInfo && contactInfo.address}</p>;
              <p>;
                Visit us at:{' '}
                <a
export default ComprehensiveServicesShowcase2025;

                          </span>;
                          <span className='text - gray - 400'>;
                            ({service.reviews});
                          </span>;
                        </div>;
                        <span className='text - sm text - gray - 400'>;
                          {getPriceRange (service.price)}
                        </span>;
                      </div>;
                    </div>;
                    {/* Features and Benefits */}
                    <div className='mt - 6 grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
                      <div>;
                        <h4 className='text - white font - semibold mb - 3'>;
                          Key Features:;
                        </h4>;
                        <div className='space - y-2'>;
                          {service.features.slice (0, 4).map ((feature, idx) => (
                            <div key={idx} className='flex items - center'>;
                              <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 3 flex - shrink - 0' />;
                              <span className='text - gray - 300 text - sm'>;
                                {feature}
                              </span>                            </div>))}
                        </div>;
                      </div>;
                      <div>;
                        <h4 className='text - white font - semibold mb - 3'>;
                          Key Benefits:;
                        </h4>;
                        <div className='space - y-2'>;
                          {service.key_benefits;
                            .slice (0, 4);
                            .map ((benefit, idx) => (
                              <div key={idx} className='flex items - center'>;
                                <div className='w - 2 h - 2 bg - cyan - 400 rounded - full mr - 3'></div>;
                                <span className='text - gray - 300 text - sm'>;
                                  {benefit}
                                </span>;
                              </div>))}
                        </div>;
                      </div>;
                    </div>;
                    {/* CTA and Additional Info */}
                    <div className='mt - 6 flex flex - col lg:flex - row items - center justify - between gap - 4'>;
                      <div className='flex items - center gap - 4 text - sm text - gray - 400'>;
                        <span > Market: {service.market_size}</span>;
                        <span > Growth: {service.growth_rate}</span>;
                        <span > ROI: {service.roi}</span>;
                      </div>;
                      <Link;
                        href={service.link}
                        className='px - 8 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105';
                      >;
                        Learn More;
                        <ArrowRight className='w - 4 h - 4 ml - 2 inline' />;
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>)}
          {/* No Results */}
          {sorted_services.length === 0 && (
            <div className='text - center py - 20'>;
              <div className='text - 6xl mb - 6'>🔍</div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                No services found;
              </h3>;
              <p className='text - gray - 400 mb - 6'>;
                Try adjusting your filters or search terms to find what you're;
                looking for.;
              </p>;
              <button;
                on_click={() => {
                  setSelectedCategory ('All Services');
                  setSelectedPriceRange ('All Prices');
                  setSearchQuery ('');
                }}
                className='px - 6 py - 3 bg - cyan - 500 text - white font - semibold rounded - lg hover:bg - cyan - 600 transition - all duration - 300';
              >;
                Clear All Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className='py - 20 bg - gradient - to - b from - black to - gray - 900'>;
        <div className='container mx - auto px - 4 text - center'>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max - w-4xl mx - auto';
          >;
            <h2 className='text - 4xl lg:text - 6xl font - bold mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
                Ready to Transform;
              </span>;
              <br />;
              <span className='text - white'>Your Business?</span>;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Let's discuss how our innovative services can help you achieve;
              your business goals. Get in touch with our experts today.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center mb - 8'>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className='flex items - center px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105';
              >;
                <Phone className='w - 5 h - 5 mr - 2' />;
                {contact_info.mobile}
              </a>;
              <a;
                href={`mailto:${contact_info.email}`}
                className='flex items - center px - 6 py - 3 border border - cyan - 500 / 30 text - cyan - 400 font - semibold rounded - lg hover:bg - cyan - 500 / 10 transition - all duration - 300';
              >;
                <Mail className='w - 5 h - 5 mr - 2' />;
                {contact_info.email}
              </a>;
            </div>;
            <div className='text - center text - gray - 400'>;
              <p className='mb - 2'>{contact_info.address}</p>;
              <p>;
                Visit us at:{' '}
                <a;
                  href={contact_info.website}
                  className='text - cyan - 400 hover:text - cyan - 300 transition - colors';
                >;
                  {contact_info.website}
                </a>;
              </p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </>);
export default ComprehensiveServicesShowcase2025;
;
