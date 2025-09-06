
import { motion, AnimatePresence } from 'framer-motion';
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' },

  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Services',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'holographic',;
      name: 'Holographic',;
      icon: '🎭',;
      count: holographicCount,;
    },  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
    { id: 'launchDate', name: 'Launch Date' },  ];
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        if (selectedCategory === 'ai') return service && service.category.includes('AI');
        if (selectedCategory === 'quantum');
          return service && service.category.includes('Quantum');
        if (selectedCategory === 'it');
          return (
            service && service.category.includes('IT') ||;
            service && service.category.includes('Infrastructure');
          );
        if (selectedCategory === 'micro-saas');
          return (
          );
        if (selectedCategory === 'holographic');
          return service && service.category.includes('Holographic');
        return true;
      });    }

        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000');
          return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000');
          return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true;
      });    }
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (
            parseInt(a && a.price.replace(/[^0-9]/g, '')) -;
            parseInt(b && b.price.replace(/[^0-9]/g, ''));
          );        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'customers':;
          return b && b.customers - a && a.customers;
        case 'launchDate':;
          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
          );
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;
        default: return a.name.localeCompare(b.name)
        default: return a && a.name.localeCompare(b && b.name),;
      }
    });
        <meta
          name='description'
          content='Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation.'
        />;
        <meta
          property='og:title'
          content='Revolutionary 2027 Services Showcase - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Explore the future of technology with our revolutionary 2027 services showcase.'
        />;
        <meta
          property='og:url'
          content='https://ziontechgroup && ziontechgroup.com/revolutionary-2027-services-showcase'
        />;
        <meta property='og:type' content='website' />;
        <link
          rel='canonical'

      {/* Hero Section */}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8'>;
              Revolutionary 2027;
            </h1>;
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
              Services Showcase;
            </h2>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Experience the future of technology with our revolutionary AI,;
              Quantum Computing, and Next-Generation IT services. Each solution;
              delivers measurable ROI and transforms industries.;
            </p>;

            {/* Contact Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>;
              <motion&& motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Phone className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.mobile}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-purple-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Mail className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.email}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-green-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <MapPin className='w-5 h-5' />;
                <span className='text-sm font-semibold'>;
                  {contactInfo && contactInfo.address}
                </span>              </motion && motion.div>;
            </div>;

              </a>
            </div>
          </motion.div>
        </div>
      </section>
                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                View All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'              />;
            </div>;

                  ))}
              {/* Price Range Filter */}
              <div>;
                <label className='block text-sm font-medium text-gray-300 mb-2'>;
                  Price Range;
                </label>;
                <select
                  value={selectedPriceRange}
                  onChange={e => setSelectedPriceRange(e && e.target.value)}
                  className='w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500';
                >;
                  {priceRanges && priceRanges.map(range => (                    <option key={range && range.id} value={range && range.id}>;
                      {range && range.name}
                    </option>;
                  ))}
              {/* Sort By */}
              <div>;
                <label className='block text-sm font-medium text-gray-300 mb-2'>;
                  Sort By;
                </label>;
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e && e.target.value)}
                  className='w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500';
                >;
                  {sortOptions && sortOptions.map(option => (                    <option key={option && option.id} value={option && option.id}>;
                      {option && option.name}
                    </option>;
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
                        </p>
                        {/* Price */}
                            {service.price}
                          </span>;
                          <span className='text - gray - 400'>;
                            {service.period}
                        </p>
                        </div>;

                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2'>                          {service && service.tagline}
                        </p>;
                        {/* Price */}
                        <div className='flex items-baseline gap-2 mb-4'>;
                          <span className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </span>;
                          <span className='text-gray-400'>;
                            {service && service.period}
                          </span>;
                        </div>;
                        {/* Features */}
                        </div>
                        {/* Stats */}
                              {service.customers}
                            </div>;
                            <div className='text - xs text - gray - 400'>;
                              Customers;
                            </div>;
                          </div>;
                          <div>;
                            <div className='text - lg font - bold text - purple - 400'>;
                              {service.rating}
                            </div>;
                            <div className='text - xs text - gray - 400'>Rating</div>;
                          </div>;
                          <div>;
                            <div className='text - lg font - bold text - green - 400'>;
                              {service.reviews}
                        {/* Category Badge */}
                        <div className='mb-4'>;
                          <span
                          </span>
                        </div>
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service && service.color} text-white`}>                            {service && service.category}
                          </span>;
                        </div>;

                          <a
                            href={service && service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'>;
                            <ArrowRight className='w-4 h-4 mr-1' />;
                            Learn More;
                          </a>;
                          <a
                            href='/contact'
                            className='px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300'>;
                            <MessageSquare className='w-4 h-4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            ) : (;
              <motion&& motion.div
                            </div>;
                            <div className='text - xs text - gray - 400'>Reviews</div>                          </div>;
                        </div>;
                        {/* Category Badge */}
                        <div className='mb - 4'>;
                          <span;
                            className={`inline - block px - 3 py - 1 rounded - full text - xs font - semibold ${service.color} text - white`}
                          >                            {service.category}
                          </span>;
                        </div>;
                        {/* Action Buttons */}
                        <div className='flex gap - 2'>;
                          <a;
                            href={service.link}
                            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm py - 2 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <ArrowRight className='w - 4 h - 4 mr - 1' />;
                            Learn More;
                          </a>;
                          <a;
                            href='/contact';
                            className='px - 4 py - 2 border border - gray - 600 text - gray - 200 hover:bg - gray - 700 hover:border - gray - 500 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <MessageSquare className='w - 4 h - 4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>) : (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                >                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}
          </AnimatePresence>;
        </div>;
      </section>;

      {/* Contact CTA Section */}
      <section className='py-16 px-4'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
              Join the future of technology with our revolutionary 2027;
              services. Each solution is designed to deliver measurable ROI and;
              competitive advantage.;
            </p>;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                Explore All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </UltraQuantumHolographicBackground>;
  );
            <div className='flex flex - wrap items - center justify - center gap - 6 mb - 8'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Start Your Transformation;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                Explore All Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
