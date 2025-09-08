                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"><option value="All">All Categories</option>
                      {categories.map((category) => (
                      <option value="All">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>

                      {categories.map(category => (                        <option key={category.name} value={category.name}>

                        <option key={category.name} value={category.name}>



                          {category.name} ({category.count})
                        </option>
                      ))}

                    </select>;
                  </div>;

                          {range.label}
                        </option>
                      ))}

                    </select>;
                  </div>;
                  {/* Sort Options */}


                          {option.value}
                        </option>



                  {/* Sort Options */}


                          {option.value}
                        </option>
                      ))}

                    </select>;
                  </div>;


                  {/* View Mode Toggle */}
                  <div className='flex-shrink-0'>;
                    <div className='flex bg-white/10 rounded-xl p-1 border border-white/20'>;
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Price Range Filter */}
                  <div className='flex-shrink-0'>

                  {/* Price Range Filter */}
                  <div className='flex-shrink-0'>

                    <select
                      value={priceRange}
                      onChange={e => setPriceRange(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >
                      {priceRanges.map(range => (                        <option key={range.value} value={range.value}>                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">{priceRanges.map((range) => (
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                      {priceRanges.map(range => (                        <option key={range.value} value={range.value}>

                        <option key={range.value} value={range.value}>

                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Sort Options */}
                  <div className='flex-shrink-0'>

                    <select
                      value={sortBy}
                      onChange={e => setSortBy(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >
                      {sortOptions.map(option => (                        <option key={option.value} value={option.value}>                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">{sortOptions.map((option) => (
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                      {sortOptions.map(option => (                        <option key={option.value} value={option.value}>

                        <option key={option.value} value={option.value}>

                          {option.value}
                        </option>
                      ))}
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>;
                  </div>;
                  {/* Price Range Filter */}





                      >
                        <Grid className='w-5 h-5'    />
                      </button>
                      <button;
onClick={() =    /> setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${
viewMode === 'list'
                            ? 'bg-cyan-500 text-white'}
                            : 'text-gray-400 hover: text-white'}
                        }`}
                      >
                        <Grid className='w-5 h-5' />                      </button>                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${
                          viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}><Grid className='w-5 h-5' />
                  <div className="flex-shrink-0">
                    <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${
                          viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}><Grid className="w-5 h-5" />
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${

                          viewMode === 'list'
                            ? 'bg-cyan-500 text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className='w-5 h-5' />                      </button>                          viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </section>;


                        </div>;
                        {/* Tagline */}



                        </div>;
                        {/* Tagline */}
                        <p className='text-gray-300 mb-4 font-medium'>;
                          {service && service.tagline}
                        </p>;
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
              {filteredServices.length === 0 ? (
          {/* Services Grid/List */}
          <section className='px-4 sm:px-6 lg:px-8 mb-20'>
            <div className='max-w-7xl mx-auto'>
              {filteredServices.length === 0 ? (
                <div className='text-center py-20'>
                  <div className='text-6xl mb-4'>🔍</div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    No services found
                  </h3>
                  <p className='text-gray-400'>
                    Try adjusting your search criteria or filters
                  </p>
                </div>
              ) : (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                      : 'space-y-6'
                  }
                >
                  {filteredServices.map(service => (
                    <QuantumHolographicCard key={service.id} className='group'>
                      <div className='p-6'>
                        {/* Service Header */}
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center space-x-3'>
                            <div className='text-3xl'>{service.icon}</div>
                            <div>
                              <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors'>
                                {service.name}
                              </h3>
                              <p className='text-sm text-gray-400'>
                                {service.category}
                              </p>
                            </div>
                          </div>
                          {service.popular && (

                            <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>                              POPULAR

                              POPULAR

                            </div>
                          )}
                        </div>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-cyan-400 text-center pt-2">

                            )}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>



                        {/* Market Info */}
                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>

                        {/* Key Features */}

                                +{service.features.length - 3} more features

                              </div>
                            )}
                          </div>
                        </div>

                                  <Check className='w-4 h-4 text-green-400 flex-shrink-0'    />;
                                  <span className='text-xs text-gray-300'    />;
                                    {feature}
                                  </span>;
                                </div>;
                              ))}

                          <div>
                            <div className='text-gray-400'>Market Size</div>'
                            <div className='text-white font-medium'>'
                              {service.marketSize}
                            </div>
                          </div>
                          <div>
                            <div className='text-gray-400'>Growth Rate</div>
                            <div className='text-white font-medium'>
                              {service.growthRate}
                            </div>                          </div>
                        </div>
                        {/* CTA Buttons */}
                        {/* Market Info */}
                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>;
                          <div>;
                            <div className='text-gray-400'>Market Size</div>;
                            <div className='text-white font-medium'>;
                              {service && service.marketSize}
                            </div>;
                          </div>;
                          <div>;
                            <div className='text-gray-400'>Growth Rate</div>;
                            <div className='text-white font-medium'>;
                              {service && service.growthRate}
                            </div>                          </div>;
                        </div>;
                        {/* Contact Info */}
<div className='mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center'>;
                          <div>Contact: {contactInfo.mobile} | {contactInfo.email}
                          </div>;
                          <div className='mt-1'>{contactInfo.website}</div>;
                        </div>;
                      </div>;
                    </QuantumHolographicCard>;
                  Ready to Lead the Future?
                </h2>
                <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                  Join the revolution with our breakthrough micro SAAS services.
                  Transform your business with quantum AI, autonomous systems
                  and cutting-edge technology.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            </div>;
          </section>;

          {/* Call to Action */}
          <section className='px-4 sm:px-6 lg:px-8 mb-20'>;
            <div className='max-w-4xl mx-auto text-center'>;
              <EnhancedFuturisticCard className='p-12'>;
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                  Ready to Lead the Future?;
                </h2>;
                <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
                  Join the revolution with our breakthrough micro SAAS services.;
                  Transform your business with quantum AI, autonomous systems,;
                  and cutting-edge technology.;
                </p>;
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                  <Button
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    variant='primary'
                    className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg'
                  >
                    <Phone className='w-5 h-5 mr-2' />                    Call Now: {contactInfo.mobile}
                  </Button>
                  <Button
                    href={`mailto:${contactInfo.email}`}
                    variant='secondary'

          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <EnhancedFuturisticCard className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Lead the Future?

                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the revolution with our breakthrough micro SAAS services.
                  Transform your business with quantum AI, autonomous systems, and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </h2>;
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                  Join the revolution with our breakthrough micro SAAS services. ;
                  Transform your business with quantum AI, autonomous systems, and cutting-edge technology.;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <Button
                    href={`tel:${contactInfo.mobile}`}
                    variant="primary"

                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <div>Address: {contactInfo.address}</div>
                  <div className="mt-1">Website: {contactInfo.website}</div>
                    className='px-8 py-4 text-lg'

                    Call Now: {contactInfo.mobile}
                  </Button>
                  <Button
                    href={`mailto:${contactInfo.email}`}
                </div>
              </EnhancedFuturisticCard>
            </div>
          </section>
        </div>
      </QuantumHolographicBackground>
    </>

                    className='px-8 py-4 text-lg'>;
                    <Mail className='w-5 h-5 mr-2' />;
                    Email Us;
                  </Button>;
                </div>;
                <div className='mt-8 text-sm text-gray-400'>;
                  <div>Address: {contactInfo && contactInfo.address}</div>;
                  <div className='mt-1'>Website: {contactInfo && contactInfo.website}</div>                </div>                  >;
                    <Mail className='w-5 h-5 mr-2' />;
                    Email Us;
                  </Button>;
                </div>;
                <div className='mt-8 text-sm text-gray-400'>;
                  <div>Address: {contactInfo && contactInfo.address}</div>;
                  <div className="mt-1">Website: {contactInfo && contactInfo.website}</div>;
                        <p className='text - gray - 300 mb - 4 font - medium'>;
                          {service.tagline}
                        </p>;
                        {/* Description */}
                        <p className='text - gray - 400 text - sm mb - 6 leading - relaxed'>;
                          {service.description}
                        </p>;
                        {/* Innovation Level */}
                        <div className='mb - 4'>;
                          <div className='flex items - center space - x-2 mb - 2'>;
                            <Sparkles className='w - 4 h - 4 text - yellow - 400' />;
                            <span className='text - sm font - medium text - yellow - 400'>;
                              Innovation Level;
                            </span>;
                          </div>;
                          <div className='bg - gradient - to - r from - purple - 500 to - pink - 500 text - white px - 3 py - 1 rounded - lg text - xs font - bold text - center'>                            {service.innovation_level}
                        {/* Description */}
                        <p className="text - gray - 400 text - sm mb-6 leading-relaxed">{service.description}</p>;
                        {/* Innovation Level */}
                        <div className="mb-4">;
                          <div className="flex items - center space-x-2 mb-2">;
                            <Sparkles className="w - 4 h - 4 text-yellow-400" />;
                            <span className="text - sm font - medium text-yellow-400">Innovation Level</span>;
                          </div>;
                          <div className="bg - gradient - to - r from - purple - 500 to - pink - 500 text - white px - 3 py - 1 rounded - lg text - xs font-bold text-center">;
                            {service.innovation_level}
                          </div>;
                        </div>;
                        {/* Price and ROI */}
                        <div className='grid grid - cols - 2 gap - 4 mb - 6'>;
                          <div className='text - center'>;
                            <div className='text - 2xl font - bold text - cyan - 400'>;
                              ${service.price.monthly.toLocaleString ()}
                            </div>;
                            <div className='text - xs text - gray - 400'>;
                              per month;
                            </div>;
                          </div>;
                          <div className='text - center'>;
                            <div className='text - lg font - bold text - green - 400'>;
                              {service.roi.split (' ')[0]}
                            </div>;
                            <div className='text - xs text - gray - 400'>;
                              average ROI;
                            </div>                          </div>;
                        </div>;
                        {/* Key Features */}                        <div className="grid grid - cols - 2 gap-4 mb-6">;
                          <div className="text-center">;
                            <div className="text - 2xl font - bold text-cyan-400">${service.price.monthly.toLocaleString ()}</div>;
                            <div className="text - xs text-gray-400">per month</div>;
                          </div>;
                          <div className="text-center">;
                            <div className="text - lg font - bold text-green-400">{service.roi.split (' ')[0]}</div>;
                            <div className="text - xs text-gray-400">average ROI</div>;
                        </div>;
                        {/* Key Features */}
                        <div className='mb - 6'>;
                          <h4 className='text - sm font - semibold text - white mb - 3'>;
                            Key Features;
                          </h4>;
                          <div className='space - y-2'>;
                            {service.features;
                              .slice (0, 3).map ((feature, index) => (<div;
                                  key={index}
                                  className='flex items - center space - x-2';
                                >;
                                  <Check className='w - 4 h - 4 text - green - 400 flex - shrink - 0' />;
                                  <span className='text - xs text - gray - 300'>;
                                    {feature}
                                  </span>;
                                </div>))}
                            {service.features.length > 3 && (
                              <div className='text - xs text - cyan - 400 text - center pt - 2'>                                +{service.features.length - 3} more features                        <div className="mb-6">;
                          <h4 className="text - sm font - semibold text-white mb-3">Key Features</h4>;
                          <div className="space-y-2">;
                            {service.features.slice (0, 3).map ((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">;
                                <Check className="w - 4 h - 4 text - green - 400 flex-shrink-0" />;
                                <span className="text - xs text-gray-300">{feature}</span>;
                              </div>))}
                            {service.features.length > 3 && (
                              <div className="text - xs text - cyan - 400 text-center pt-2">;
                              </div>)}
                          </div>;
                        </div>;
                        {/* Market Info */}
                        <div className='grid grid - cols - 2 gap - 4 mb - 6 text - xs'>;
                          <div>;
                            <div className='text - gray - 400'>Market Size</div>;
                            <div className='text - white font - medium'>;
                              {service.market_size}
                            </div>;
                          </div>;
                          <div>;
                            <div className='text - gray - 400'>Growth Rate</div>;
                            <div className='text - white font - medium'>;
                              {service.growth_rate}
                            </div>                          </div>;
                        </div>;
                        {/* CTA Buttons */}
                        <div className='flex space - x-3'>                          <div>;
                            <div className="text-gray-400">Market Size</div>;
                            <div className="text-white font-medium">{service.market_size}</div>;
                          </div>;
                          <div>;
                            <div className="text-gray-400">Growth Rate</div>;
                            <div className="text-white font-medium">{service.growth_rate}</div>;
                          </div>;
                        </div>;
                        {/* CTA Buttons */}
                        <div className='flex space - x-3'>;
                          <Button;
                            href={service.link}
                            variant='primary';
                            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700';
                          >;
                            Learn More;
                            <ArrowRight className='w - 4 h - 4 ml - 2' />;
                          </Button>;
                          <Button;
                            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
                            variant='secondary';
                            className='px - 4';
                          >;
                            <Mail className='w - 4 h - 4' />                          </Button>;
                        </div>;
                        {/* Contact Info */}                          <Button;
                            href={service.link}
                            variant="primary";
                            className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to-blue-700";
                          >;
                            Learn More;
                            <ArrowRight className="w - 4 h-4 ml-2" />;
                          </Button>;
                          <Button;
                            href={`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`}
                            variant="secondary";
                            className="px-4";
                          >;
                            <Mail className="w-4 h-4" />;
                          </Button>;
                        </div>;
                        {/* Contact Info */}
                        <div className='mt - 4 pt - 4 border - t border - white / 10 text - xs text - gray - 400 text - center'>;
                          <div>Contact: {contact_info.mobile} | {contact_info.email}
                          </div>;
                          <div className='mt - 1'>{contact_info.website}</div>                        </div>                        <div className="mt - 4 pt - 4 border - t border - white / 10 text - xs text - gray-400 text-center">;
                          <div > Contact: {contact_info.mobile} | {contact_info.email}</div>;
                          <div className="mt-1">{contact_info.website}</div>;
                        </div>;
                      </div>;
                    </QuantumHolographicCard>))}
                </div>)}
            </div>;
          </section>;
          {/* Call to Action */}
          <section className='px - 4 sm:px - 6 lg:px - 8 mb - 20'>;
            <div className='max - w-4xl mx - auto text - center'>;
              <EnhancedFuturisticCard className='p - 12'>;
                <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                  Ready to Lead the Future?;
                </h2>;
                <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
                  Join the revolution with our breakthrough micro SAAS services.;
                  Transform your business with quantum AI, autonomous systems,and cutting - edge technology.;
                </p>;
                <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                  <Button;
                    href={`tel:${contact_info.mobile}`}
                    variant='primary';
                    className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 px - 8 py - 4 text - lg';
                  >;
                    <Phone className='w - 5 h - 5 mr - 2' />                    Call Now: {contact_info.mobile}
                  </Button>;
                  <Button;
                    href={`mailto:${contact_info.email}`}
                    variant='secondary';
                    className='px - 8 py - 4 text - lg'                  Ready to Lead the Future?;
                </h2>;
                <p className="text - xl text - gray - 300 mb - 8 max-w-3xl mx-auto">;
                  Join the revolution with our breakthrough micro SAAS services.;
                  Transform your business with quantum AI, autonomous systems, and cutting - edge technology.;
                </p>;
                <div className="flex flex - col sm:flex - row gap-4 justify-center">;
                  <Button;
                    href={`tel:${contact_info.mobile}`}
                    variant="primary";
                    className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 px - 8 py-4 text-lg";
                  >;
                    <Phone className="w - 5 h-5 mr-2" />;
                    Call Now: {contact_info.mobile}
                  </Button>;
                  <Button;
                    href={`mailto:${contact_info.email}`}
                    variant='secondary';
                    className='px - 8 py - 4 text - lg';
                  >;
                    <Mail className='w - 5 h - 5 mr - 2' />;
                    Email Us;
                  </Button>;
                </div>;
                <div className='mt - 8 text - sm text - gray - 400'>;
                  <div > Address: {contact_info.address}</div>;
                  <div className='mt - 1'>Website: {contact_info.website}</div>                </div>                  >;
                    <Mail className="w - 5 h-5 mr-2" />;
                    Email Us;
                  </Button>;
                </div>;
                <div className="mt - 8 text - sm text-gray-400">;
                  <div > Address: {contact_info.address}</div>;
                  <div className="mt-1">Website: {contact_info.website}</div>;

                </div>;
  );
}

  );

    </>);
}

  );

  );
}
    </>);
);
  );
}




