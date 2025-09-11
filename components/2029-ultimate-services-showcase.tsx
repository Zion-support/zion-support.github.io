>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from 'react';
import Head from 'next/head';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                Get Started Today
              </Link>
              <Link



            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-emerald-400 mb-2'>
                  $500M+
                </div>
                <div className='text-gray-400'>Market Valuation</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                  99.9%
                </div>
                <div className='text-gray-400'>Success Rate</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                  24/7
                </div>
                <div className='text-gray-400'>Support Available</div>              </div>              </div>
==============              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">$500M+</div>
                <div className="text-gray-400">Market Valuation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>;
                  {allServices && allServices.length}+;
                </div>;
                <div className='text-gray-400'>Revolutionary Services</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-emerald-400 mb-2'>;
                  $500M+;
                </div>;
                <div className='text-gray-400'>Market Valuation</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>;
                  99 && 99.9%;
                </div>;
                <div className='text-gray-400'>Success Rate</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>;
                  24/7;
                </div>;
                <div className='text-gray-400'>Support Available</div>              </div>              </div>;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">$500M+</div>;
                <div className="text-gray-400">Market Valuation</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99 && 99.9%</div>;
                <div className="text-gray-400">Success Rate</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>;
                <div className="text-gray-400">Support Available</div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200'              />;
            </div>;

            {/* Category Filter */}
            <div className='flex flex-wrap items-center space-x-2'>;
              {categories && categories.map(category => (                <button            {/* Search */}
            <div className="relative w-full lg:w-96">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="py-16 bg-gray-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Search */}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}


            {/* Category Filter */}

=======

                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="h-4 w-4" />
<span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>;


=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <button
                  key={category && category.id}
                  onClick={() => setSelectedCategory(category && category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${;
                    selectedCategory === category && category.id;
                      ? `bg-gradient-to-r ${category && category.color} text-white shadow-lg`;
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50';
=======
            {/* Category Filter */}
            <div className='flex flex-wrap items-center space-x-2'>
              {categories.map(category => (            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
                <button




            {/* Price Filter */}
            <div className="flex items-center space-x-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
=======
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  }`}


              ))}
            </div>;



=======
=======

            {/* Price Filter */}


                  }`}
                >;
                  {range && range.name}
                </button>;
              ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
        </div>;
      </section>;



      {/* Services Grid */}


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Features Preview */}


                      )}





                  <div className="mb-6 space-y-2">

                        >

                          {cat}
                        </span>
                      ))}
                      {service.category.length > 3 && (
                        <span className='px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg'>                          +{service.category.length - 3}

                          +{service.category.length - 3}

                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white mb-2'>
                      Key Features:
                    </h4>
                    <ul className='space-y-1'>
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-center space-x-2 text-sm text-gray-300'
                        >
                          <CheckCircle className='h-3 w-3 text-cyan-400 flex-shrink-0' />                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className='text-xs text-gray-500'>                          +{service.features.length - 3} more features                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className='text-xs text-gray-500'>                        <li className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className='mb-6 space-y-2'>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-400'>Market Size:</span>
                      <span className='text-emerald-400 font-medium'>
                        {service.marketSize}
                      </span>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-gray-400'>ROI:</span>
                      <span className='text-cyan-400 font-medium'>
                        {service.roi}
                      </span>                    </div>
                  </div>
                  {/* Action Button */}
                  <div className='mt-auto'>                  <div className="mb-6 space-y-2">
==============                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Size: </span>
                      <span className="text-emerald-400 font-medium">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-cyan-400 font-medium">{service.roi}</span>
                    </div>
=======

                    </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                    </ul>;
                  </div>;
                  {/* Market Info */}
                  <div className='mb-6 space-y-2'>;
                    <div className='flex items-center justify-between text-sm'>;
                      <span className='text-gray-400'>Market Size:</span>;
                      <span className='text-emerald-400 font-medium'>;
                        {service && service.marketSize}
                      </span>;
                    </div>;
                    <div className='flex items-center justify-between text-sm'>;
                      <span className='text-gray-400'>ROI:</span>;
                      <span className='text-cyan-400 font-medium'>;
                        {service && service.roi}
                      </span>                    </div>;
                  </div>;
                  {/* Action Button */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.id}`}
                      className='w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200'
                    >
                      Learn More
                      <ArrowRight className='inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200' />                    </Link>
                  </div>
                  <div className="mt-auto">
                    <Link

                      href={`/services/${service.id}`}=======
                  {/* Hover Effect */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                </div>                    <Link
                      href={`/services/${service.id}`}                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
=======
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  {/* Action Button */}

                    </Link>
                  </div>

                  {/* Hover Effect */}



                </div>
              </motion.div>            ))}

                  {/* Action Button */}

                    </Link>
                  </div>

                  {/* Hover Effect */}

                </div>
              </motion.div>
            ))}
          </motion.div>

=======
=======
          </motion.div>

          </motion && motion.div>;
=======
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
=======

=======



                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200";
              >;
                Reset Filters;
              </button>;
            </div>;
==============                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <button


              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all');
                }}
                className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200'                  setSelectedPriceRange('all')

                }}
==============                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>


=======>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          )}

=======        </div>;
      </section>;


=======



      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div




            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
==============            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
Join the future of technology with our revolutionary services.
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg"
              >
                Get Started Today
              </Link>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
      {/* Services Grid */}
      <section className='py - 20 bg - gradient - to - br from - black via - gray - 900 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <motion.div;
            variants={container_variants}
            initial='hidden';
            animate='visible';
            className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 8'          >      <section className="py - 20 bg - gradient - to - br from - black via - gray - 900 to - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 8";
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                variants={item_variants}
                className='group relative';
              >;
                <div className='relative p - 6 rounded - 2xl border border - gray - 700 / 50 bg - gray - 800 / 20 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5 transition - all duration - 300 h - full'>;
                  {/* Service Header */}
                  <div className='mb - 4'>;
                    <div className='flex items - center justify - between mb - 3'>;
                      <div className='w - 12 h - 12 bg - gradient - to - br from - cyan - 400 via - blue - 500 to - purple - 600 rounded - xl flex items - center justify - center shadow - lg'>;
                        <Rocket className='w - 6 h - 6 text - white' />;
                      </div>;
                      <div className='text - right'>;
                        <div className='text - lg font - bold text - cyan - 400'>;
                          {service.price}
                        </div>;
                        <div className='text - xs text - gray - 400'>per month</div>;
                      </div>;
                    </div>;
                    <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 200'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 400 text - sm leading - relaxed mb - 4'>                      {service.description}              >;
                <div className="relative p - 6 rounded - 2xl border border - gray - 700 / 50 bg - gray - 800 / 20 hover:border - cyan - 500 / 50 hover:bg - cyan - 500 / 5 transition - all duration - 300 h - full">;
                  {/* Service Header */}
                  <div className="mb - 4">;
                    <div className="flex items - center justify - between mb - 3">;
                      <div className="w - 12 h - 12 bg - gradient - to - br from - cyan - 400 via - blue - 500 to - purple - 600 rounded - xl flex items - center justify - center shadow - lg">;
                        <Rocket className="w - 6 h - 6 text - white" />;
                      </div>;
                      <div className="text - right">;
                        <div className="text - lg font - bold text - cyan - 400">{service.price}</div>;
                        <div className="text - xs text - gray - 400">per month</div>;
                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 200">;
                      {service.name}
                    </h3>;
                    <p className="text - gray - 400 text - sm leading - relaxed mb - 4">;
                      {service.description}
                    </p>;
                  </div>;
                  {/* Categories */}
                  <div className='mb - 4'>;
                    <div className='flex flex - wrap gap - 2'>;
                      {service.category.slice (0, 3).map (cat => (
                        <span;
                          key={cat}
                          className='px - 2 py - 1 bg - gray - 700 / 50 text - cyan - 400 text - xs rounded - lg border border - cyan - 500 / 20'                        >                  <div className="mb - 4">;
                    <div className="flex flex - wrap gap - 2">;
                      {service.category.slice (0, 3).map ((cat) => (
                        <span;
                          key={cat}
                          className="px - 2 py - 1 bg - gray - 700 / 50 text - cyan - 400 text - xs rounded - lg border border - cyan - 500 / 20";
                          {cat}
                        </span>))}
                      {service.category.length > 3 && (
                        <span className='px - 2 py - 1 bg - gray - 700 / 50 text - gray - 400 text - xs rounded - lg'>                          +{service.category.length - 3}                        <span className="px - 2 py - 1 bg - gray - 700 / 50 text - gray - 400 text - xs rounded - lg">;
                          +{service.category.length - 3}
                        </span>)}
                    </div>;
                  </div>;
                  {/* Features Preview */}
                  <div className='mb - 6'>;
                    <h4 className='text - sm font - semibold text - white mb - 2'>;
                      Key Features:;
                    </h4>;
                    <ul className='space - y-1'>;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <li;
                          key={idx}
                          className='flex items - center space - x-2 text - sm text - gray - 300';
                        >;
                          <CheckCircle className='h - 3 w - 3 text - cyan - 400 flex - shrink - 0' />                          <span>{feature}</span>;
                        </li>))}
                      {service.features.length > 3 && (
                        <li className='text - xs text - gray - 500'>                          +{service.features.length - 3} more features                  <div className="mb - 6">;
                    <h4 className="text - sm font - semibold text - white mb - 2">Key Features:</h4>;
                    <ul className="space - y-1">;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <li key={idx} className="flex items - center space - x-2 text - sm text - gray - 300">;
                          <CheckCircle className="h - 3 w - 3 text - cyan - 400 flex - shrink - 0" />;
                        </li>))}
                      {service.features.length > 3 && (
                        <li className='text - xs text - gray - 500'>                        <li className="text - xs text - gray - 500">;
                          +{service.features.length - 3} more features;
                        </li>)}
                    </ul>;
                  </div>;
                  {/* Market Info */}
                  <div className='mb - 6 space - y-2'>;
                    <div className='flex items - center justify - between text - sm'>;
                      <span className='text - gray - 400'>Market Size:</span>;
                      <span className='text - emerald - 400 font - medium'>;
                        {service.market_size}
                      </span>;
                    </div>;
                    <div className='flex items - center justify - between text - sm'>;
                      <span className='text - gray - 400'>ROI:</span>;
                      <span className='text - cyan - 400 font - medium'>;
                        {service.roi}
                      </span>                    </div>;
                  </div>;
                  {/* Action Button */}
                  <div className='mt - auto'>                  <div className="mb - 6 space - y-2">;
                    <div className="flex items - center justify - between text - sm">;
                      <span className="text - gray - 400">Market Size: </span>;
                      <span className="text - emerald - 400 font - medium">{service.market_size}</span>;
                    </div>;
                    <div className="flex items - center justify - between text - sm">;
                      <span className="text - gray - 400">ROI:</span>;
                      <span className="text - cyan - 400 font - medium">{service.roi}</span>;
                  </div>;
                  {/* Action Button */}
                  <div className='mt - auto'>;
                    <Link;
                      href={`/services/${service.id}`}
                      className='w - full px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 text - center block group - hover:scale - 105 transform transition - transform duration - 200';
                    >;
                      Learn More;
                      <ArrowRight className='inline - block ml - 2 h - 4 w - 4 group - hover:translate - x-1 transition - transform duration - 200' />                    </Link>;
                  </div>;
                  {/* Hover Effect */}
                  <div className='absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 5 via - blue - 500 / 5 to - purple - 500 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                </div>                    <Link;
                      href={`/services/${service.id}`}
                      className="w - full px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - lg hover:shadow - cyan - 500 / 25 text - center block group - hover:scale - 105 transform transition - transform duration - 200";
                    >;
                      Learn More;
                      <ArrowRight className="inline - block ml - 2 h - 4 w - 4 group - hover:translate - x-1 transition - transform duration - 200" />;
                    </Link>;
                  </div>;
                  {/* Hover Effect */}
                  <div className='absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 5 via - blue - 500 / 5 to - purple - 500 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none' />                  <div className="absolute inset - 0 rounded - 2xl bg - gradient - to - r from - cyan - 500 / 5 via - blue - 500 / 5 to - purple - 500 / 5 opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none" />;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className='text - center py - 20'>;
              <div className='w - 24 h - 24 bg - gray - 800 / 50 rounded - full flex items - center justify - center mx - auto mb - 6'>;
                <Search className='w - 12 h - 12 text - gray - 400' />;
              </div>;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                No services found;
              </h3>;
              <p className='text - gray - 400 mb - 8'>;
                Try adjusting your search criteria or browse all services;
              </p>              <button;
                on_click={() => {
                  setSelectedCategory ('all');
                  setSearchTerm ('');
                  setSelectedPriceRange ('all');
                }}
                className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200'              >            <div className="text - center py - 20">;
              <div className="w - 24 h - 24 bg - gray - 800 / 50 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <Search className="w - 12 h - 12 text - gray - 400" />;
              </div>;
              <h3 className="text - 2xl font - bold text - white mb - 4">No services found</h3>;
              <p className="text - gray - 400 mb - 8">Try adjusting your search criteria or browse all services</p>;
                on_click={() => {
                  setSelectedCategory ('all');
                  setSearchTerm ('');
                  setSelectedPriceRange ('all');
                }}
                className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200'                  setSelectedPriceRange ('all');
                }}
                className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200";
              >;
                Reset Filters;
              </button>;
            </div>)}
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className='py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - blue - 900 / 20 to - purple - 900 / 20 border - t border - cyan - 500 / 20'>;
        <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - blue - 900 / 20 to - purple - 900 / 20 border - t border - cyan - 500 / 20">;
        <div className="max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;

=======            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - 2xl hover:shadow - cyan - 500 / 25 text - lg';
              >;
                Get Started Today;
              </Link>;
              <div className='flex items - center space - x-4 text - gray - 300'>;
                <div className='flex items - center space - x-2'>;
                  <Phone className='h - 5 w - 5 text - cyan - 400' />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <Mail className='h - 5 w - 5 text - cyan - 400' />                  <span>{contact_info.email}</span>              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
              Join the future of technology with our revolutionary services.;
              Contact us today to discuss how we can help you achieve your goals.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6">;
              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - bold rounded - xl hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200 shadow - 2xl hover:shadow - cyan - 500 / 25 text - lg";
              >;
                Get Started Today;
              </Link>;
              <div className="flex items - center space - x-4 text - gray - 300">;
                <div className="flex items - center space - x-2">;
                  <Phone className="h - 5 w - 5 text - cyan - 400" />;
                  <span>{contact_info.mobile}</span>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Mail className="h - 5 w - 5 text - cyan - 400" />;
                  <span>{contact_info.email}</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <UltraFuturisticFooter2029 />;
    </>));
}
      <UltraFuturisticFooter2029 />
    </>
);  )
}
  );
==============

  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  )
}
  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
