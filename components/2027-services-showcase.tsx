
import Link from 'next / link';
import { motion, AnimatePresence } from 'framer-motion';

import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';

import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';


  const [searchTerm, setSearchTerm] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');




                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2">;
                <Rocket className="w-5 h-5" />;
                <span>Get Started</span>;
              </Link>;
              <Link
                href="/pricing"



                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2">;
                <DollarSign className="w-5 h-5" />;
                <span>View Pricing</span>;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;







                  ))}



              {/* Sort By */}
              <div>;
                <label className='block text-cyan-400 font-medium mb-2'>;
                  Sort By;
                </label>;


                  onChange={(e) => setSortBy(e && e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400";



                className=\"px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center space-x-2\">;
                <DollarSign className=\"w-5 h-5\"    />;
                <span    />View Pricing</span>;


                  type=\'text\';
                  placeholder=\'Search services...\';

                  value={searchTerm}
                </select    />;
              </div>;{/* Price Range Filter */}

              <div    />;
                <label className='block text-cyan-400 font-medium mb-2'    />;

                  Price Range;
                </label>;
                <select;
                  value={selectedPriceRange}

                  onChange={e =    /> setSelectedPriceRange(e && e.target.value)}
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400';

                >;
                  {priceRanges && priceRanges.map(range => (                    <option key={range && range.id} value={range && range.id}    />                <select;
                  value={selectedPriceRange}

                  onChange={(e) =    /> setSelectedPriceRange(e && e.target.value)}
                  className=\'w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400\';
                >;
                  {priceRanges && priceRanges.map((range) => (<option key={range && range.id} value={range && range.id}    />;
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400'>


                  {priceRanges && priceRanges.map(range => (                    <option key={range && range.id} value={range && range.i,}
}    />                <select;
                  value={selectedPriceRange}
                  onChange={(e) =    /> setSelectedPriceRange(e && e.target.value)}
                  className=\"w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400\">

                  {priceRanges && priceRanges.map((range) => (<option key={range && range.id} value={range && range.i,}
}    />;
                      {range && range.name} ({range && range.count})</option>;<section className='px-4 sm:px-6 lg:px-8 mb-16'    />;
        <div className='max-w-7xl mx-auto'    />;
          <div className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20'    />;
            {/* Search Bar */}
            <div className='mb-6'    />;
              <div className='relative'    />;
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400'    />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={searchTerm}
                  onChange={e =    /> setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20';
                />;
              </div>;
            </div>;
            {/* Filters */}

<div className='grid grid-cols-1 md:grid-cols-3 gap-6'    />;
              {/* Category Filter */}
              <div    />;
                <label className='block text-cyan-400 font-medium mb-2'    />;
                  Category;
                </label>;
                <select;
                  value={selectedCategory}
                  onChange={e =    /> setSelectedCategory(e.target.value)}
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400';
                >;
                  {categories.map(category => (<option key={category.id} value={category.id}    />;
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus: outline-none focus:border-cyan-400'>




              <div    />;
                <label className=\"block text-cyan-400 font-medium mb-2\" htmlFor=\"input-Sort By\"    />Sort By</label>;
                <select;
                  value={sortBy}
                  onChange={e =    /> setSortBy(e && e.target.value)}
                  className='w-full px-4 py-3 bg-black/60 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400'>


                  <option value='name'    />Name</option>;
                  <option value='price'    />Price</option>;
                  <option value='roi'    />ROI</option>                </select>                <select;
                  value={sortBy}

                    />;
                  <option value=\"name\"    />Name</option>;
                  <option value=\"price\"    />Price</option>;
                  <option value=\"roi\"    />ROI</option>;

      {/* Services Grid */}

<section className='px-4 sm:px-6 lg:px-8 mb-20'    />;
        <div className='max-w-7xl mx-auto'    />;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />;
            <AnimatePresence    />;
                  <div className='bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 h-full hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/20'    />;

                      </div>
                    </div>
                    <div className="flex items-start justify-between mb-4">;
                      <div className="text-4xl">🚀</div>;

                    {/* Features */}

                        ))}

                        {service.features.length > 3 && (<div className='text-cyan-400 text-sm'    />;}


                        )}





                    {/* ROI */}

                      </div>;



                    <div className='mb-6 text-center'    />;
                      <div className='text-green-400 font-semibold text-lg'    />;
                        ROI: {service && service.ro,}
}
                      </div>;
                      <div className='text-gray-400 text-xs'    />;

                        Return on Investment;
                      </div>;
                    </div>;
                    {/* Actions */}

                    <div className=\"flex space-x-3\"    />;
                      <Link;

                      </Link>;
                      <Link;



                    {/* Category Badge */}
                    <div className='mt-4'>;
                      <span className='inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30'>                        {service && service.category}                    <div className="mt-4">;
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">;






                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all')



          )}






                className='px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>              Ready to Transform Your Business?;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center justify-center space-x-3">;
                <Phone className="w-5 h-5 text-cyan-400" />;
                <span className="text-white">{contactInfo && contactInfo.mobile}</span>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link
                href="/contact"



  )
}
    </UltraFuturisticMatrixBackground2027>));
}





