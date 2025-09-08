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
import React, { useState, useMemo } from 'react';

import Head from 'next/head';

import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Atom, Sparkles, Target } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';


              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              {/* Service Statistics */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                    {allServices && allServices.length}
                  </div>;
                  <div className='text-gray-400 text-sm'>Total Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-purple-400 mb-2'>;
                    {allServices && allServices.filter(s => s && s.category.includes('AI')).length}
                  </div>;
                  <div className='text-gray-400 text-sm'>AI Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-pink-400 mb-2'>;
                    {;
                      allServices && allServices.filter(s => s && s.category.includes('Quantum'));
                        .length;
                    }
                  </div>;
                  <div className='text-gray-400 text-sm'>Quantum Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'>;
                  <div className='text-3xl font-bold text-green-400 mb-2'>;
                    {;
                      allServices && allServices.filter(s => s && s.category.includes('Emerging'));
                        .length;
                    }

const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.category.toLowerCase ().includes (search_term.toLowerCase ())const matches_category = selected_category === 'all' || service.category.includes (selected_category;'
  return matches_search && matches_category;
    .sort ((a, b) => {switch (sort_by) {case 'price':;'
          }
          return (parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;'
            parse_float (b.price.replace (/[^0 - 9.]/g, '')))return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''))case 'rating':;return (parseFloat(a.price.replace(/[^0-9.]/g, '')) -;'
            parseFloat(b.price.replace(/[^0-9.]/g, '')))case 'rating':;'
          return b.rating - a.rating;
        case 'customers':;'
          return b.customers - a.customers;<Head>;
          <title>Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+;
            Solutions;
          </title>;

                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover the future of technology with our revolutionary AI, quantum computing, emerging technologies, and comprehensive IT solutions
                {/* Category Filter */}
                <div className='relative'>;
                  <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e && e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'                  >                <div className="relative">;
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e && e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none";
                    {categories && categories.map(category => (;
                      <option key={category && category.id} value={category && category.id}>;
                        {category && category.name} ({category && category.count});
                      </option>;

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>

                    ))}
                    ))}
                  </select>
                </div>

                    ))}
                {/* Sort By */}
                <div className='relative'>
                  <TrendingUp className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none'
                  >
                    <option value='name'>Sort by Name</option>
                    <option value='price'>Sort by Price</option>
                    <option value='rating'>Sort by Rating</option>
                    <option value='customers'>Sort by Customers</option>                  </select>                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="customers">Sort by Customers</option>
                </div>
              </div>
            </div>
          </div>
        </section>

                  </select>;
                </div>;

        {/* Services Grid */}
        <section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {filteredServices.map((service, index) => (        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group'
                >
                  <div className='bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'>
                    {/* Service Header */}
                    <div className='flex items-start justify-between mb-4'>
                      <div className='text-4xl'>{service.icon}</div>
                      {service.popular && (
                        <span className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full'>                          Popular                >
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                      {service.name}
                    </h3>

                    {/* Tagline */}
<p className='text-gray-300 text-sm mb-4'>;'
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className='flex items-center justify-between mb-4'    />;
                      <div className='text-2xl font-bold text-cyan-400'    />;
                        <span className='text-gray-400 text-lg font-normal'    />;
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='flex items-center space-x-1'    />;
                        <Star className='w-4 h-4 text-yellow-400 fill-current'    />;
                        <span className='text-white text-sm'    />;


                    <div className='flex items - center justify - between mb - 4'    />;
                      <span className='text - xs text - gray - 500 bg - gray - 700 / 50 px - 2 py - 1 rounded'    />;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="flex items-center justify-center space-x-3 text-cyan-300">;
                  <span className="text-2xl">📱</span>;
                  <span className="font-semibold">{contactInfo && contactInfo.mobile}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3 text-purple-300">;
                  <span className="text-2xl">✉️</span>;
                  <span className="font-semibold">{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className="flex items-center justify-center space-x-3 text-pink-300">;
                  <span className="text-2xl">📍</span>;
                  <span className="font-semibold text-sm">{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;

              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a
                  href="/contact"


                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
                  View Pricing;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  )}
  )}
              className='bg - gradient - to - r from - gray - 800 / 50 to - gray - 900 / 50 rounded - 2xl p - 8 border border - gray - 700 / 50 backdrop - blur - sm';'
            >;
                  href='/pricing';
                  className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'                  href="/pricing";
                  className="px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition-all duration-300";
                >;
                  View Pricing;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Now
                </a>
                <a
                  href='/pricing'
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>


  );
}

    </UltraAdvancedFuturisticBackground>);
);
  );
}

}
}
}
}
  );
}
}
