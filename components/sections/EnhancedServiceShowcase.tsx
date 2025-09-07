



import React, { useState, useMemo } from 'react';'
import { motion, AnimatePresence  } from 'framer-motion';'
import { Star, Users, TrendingUp, DollarSign, Clock;
  }
  CheckCircle, ArrowRight, Zap, Shield, Rocket;

  show_filters?: boolean;
  services?: Service[];

  maxServices?: number
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

interface EnhancedServiceShowcaseProps {
  title: string,
  subtitle: string,
  showFilters?: boolean,
  services?: Service[],
  maxServices?: number
}

const "EnhancedServiceShowcase": React.FC<EnhancedServiceShowcaseProps> = ({
  }
  title;
  subtitle;

  const [sortBy, setSortBy] = useState<string>(popular');
  const categories = []
  const filteredServices = useMemo(() => {}
    const filtered = services.filter(service => {'
      const matchesCategory = selectedCategory === all |'
                             (selectedCategory === 'ai && (service.category.includes(AI') |service.category.includes('Machine Learning))) |
                             (selectedCategory === 'quantum' && (service.category.includes(Quantum) |service.category.includes('Space'))) |
                             (selectedCategory === blockchain' && (service.category.includes('Blockchain) |service.category.includes(DeFi') |service.category.includes('NFT))) |
                             (selectedCategory === 'enterprise' && (service.category.includes(Enterprise) |service.category.includes('IT'))) |
                             (selectedCategory === emerging' && (service.category.includes('Neural) |service.category.includes(Autonomous') |service.category.includes('Space) |service.category.includes(Biotech')));'
      const matchesPrice = selectedPriceRange === all |'
                          (selectedPriceRange === 'low && parseFloat(service.price.replace(/[$]/g, ')) < 1000) |'
                          (selectedPriceRange === medium && parseFloat(service.price.replace(/[$]/g, '')) >= 1000 && parseFloat(service.price.replace(/[$]/g, )) < 5000) |'
                          (selectedPriceRange === 'high && parseFloat(service.price.replace(/[$]/g, ')) >= 5000 && parseFloat(service.price.replace(/[$]/g, ')) < 20000) |
                          (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$]/g, )) >= 20000);


  const priceRanges = [
    { id: 'all', name: All Prices },
    { id: 'low', name: Under $1K/month },
    { id: 'medium', name: $1K - $5K/month },
    { id: 'high', name: $5K - $20K/month },


      case 'rating:;
        filtered && filtered.sort((a, b) => (b && b.rating || 0) - (a && a.rating || 0));
        break;
      case 'roi':;

      case price - low:;
        filtered.sort (
          (a, b) =>;'
            parse_float (a.price.replace (/[$]/g, ')) -;
            parse_float (b.price.replace (/[$]/g, '')));
        break;
      case price - high':;
        filtered.sort (
          (a, b) =>;'
            parse_float (b.price.replace (/[$]/g, )) -;'
            parse_float (a.price.replace (/[$]/g, ')));
        break;
      default:;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        break;
    }
        break;

        break;


=======
            {title}
          </motion && motion.h2>;
          <motion&& motion.p;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          >
            {subtitle}
          </motion.p>
            className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'          >

          >

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            {subtitle}
          </motion.p>

            {subtitle}
          {/* Stats */}
          <motion&& motion.div;


          <motion.p;
            }
            initial={{ "opacity": 0, "y": 30 
}
            whileInView={{ "opacity": 1, "y": 0 
}
            transition={{ "duration": 0.8, "delay": 0.2 }}
          {/* Stats *
}
          <motion.div;

=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          >
            {stats.map((stat, index) => (
              <div key={index} className=text-center'>
                <div className={`${stat.color} mb-2 flex justify-center`}>'
                  <stat.icon className=w-8 h-8 />
                </div>'
                <div className='text-2xl font-bold text-white>
                  {stat.value}

              </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            ))}
          </motion.div>
        </div>

            ))}
        {/* Filters */}

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
=======

              <div className=grid grid-cols-1 md:grid-cols-3 gap-6'>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                {/* Category Filter */}
                <div>'
                  <label className=block text-sm font-medium text-gray-300 mb-3>
                    Category;
                  </label>
                  <select;
                    value={selectedCategory}
                {/* Category Filter */}
                <div>;"
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white "focus":ring-2 "focus":ring-cyan-500 "focus":border-transparent''
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>

                        {category.icon} {category.nam
}
                      </option>;
                    ))}
                  </select>
                </div>

                  </select>;
                </div>;

                  </label>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  <select;
                    value={selectedCategory}{/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select;
                    value={selectedCategory}onChange={e => setSelectedCategory(e.target.value)}
                    className=w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent;
                  >;
                    {categories.map(category => (<option key={category.id} value={category.id}>;
                {/* Category Filter */}
                <div>;
                  <label className=block text-sm font-medium text-gray-300 mb-3 htmlFor="input-Category">Category</label>;
                  <select
                    value={selectedCategory}
                        {category.icon} {category.name}
                      </option>
                    ))}
          whileInView={{ opacity: 1, y: 0 }}

                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className=block text-sm font-medium text-gray-300 mb-3>Price Range</label>
                  <select
                    value={selectedPriceRange}


                    {priceRanges.map(range => (<option key={range.id} value={range.i
}>;
                    {priceRanges.map(range => (                      <option key={range.id} value={range.id}>;
                        {range.name}
                      </option>;
                    ))}


                    {sortOptions.map(option => (<option key={option.id} value={option.i
}>;
                    {sortOptions.map(option => (                      <option key={option.id} value={option.id}>;
                        {option.name}
                      </option>
                    ))}
                {/* Price Range Filter */}

                key={service.id}
                initial={{ opacity: 0, coordinate_y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className=absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full>                      ⭐ Most Popular



>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    </div>
                  )}

                  {/* Header */}


                      {service.name}
                    </h3>
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}


                      {service.tagline}




                      </div>
                    </div>
                    <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                      {service.name}
                    </h3>'
                    <p className=text-gray-300 text-sm leading-relaxed>                      {service.tagline}

                    <p className='text-gray-300 text-sm leading-relaxed'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      {service.tagline}
                    </p>
                  </div>

                  {/* Features */}

<div className='mb-6'>'
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>'
                      <CheckCircle className='w-4 h-4 mr-2 text-green-400' />'
=======

                  {/* Features */}

                  {/* Features */}
                  <div className=mb-6>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400 />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                      Key Features
                    </h4>

                    <ul className='space-y-2'>'
                      {service.features.slice(0, 4).map((feature, idx) => (

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}

                        {service.rating}
                      </div>;
                      <div className='text-xs text-gray-400'>Rating</div>;'
                    </div>;
                    <div>;

                    </div>;
                    <div>;
                      <div className='text-lg font-bold text-white'>;'
                        {service.trialDays}
                  <div className=grid grid-cols-3 gap-4 mb-6 text-center>

                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.rating}
                      </div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className='text-lg font-bold text-white'>
                        {service.customers?.toLocaleString() |0}
                      </div>
                      <div className='text-xs text-gray-400'>Customers</div>
                    </div>
                    <div>
                      <div className=text-lg font-bold text-white>
                        {service.trialDays}
                      </div>
                      <div className='text-xs text-gray-400'>Trial Days</div>                    </div>
                  </div>
                  {/* ROI Highlight */}                    <div>
                          {feature}
                        </li>;
                      ))}
                      <div className="text-lg font-bold text-white">{service.rating}</div>
                      <div className=text-xs text-gray-400>Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.customers?.toLocaleString() |0}</div>
                      <div className=text-xs text-gray-400>Customers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{service.trialDays}</div>
=======
                  {/* Features */}'
                  <div className='mb-6>
                    <h4 className='text-sm font-semibold text-gray-300 mb-3 flex items-center'>
                      <CheckCircle className=w-4 h-4 mr-2 text-green-400' />


                      <div className="text-xs text-gray-400>Trial Days</div>
                    </div>
                  </div>
                  {/* ROI Highlight */}



>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                      {service.roi}

                    </div>
                  </div>
                  {/* Market Position */}


                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Call to Action */}

                className='text-lg px-8 py-4'>;
                Schedule a Consultation;
                <ArrowRight className=ml-2 w-5 h-5' />;
              </Button>;
              <Button'
                href=/pricing'
                variant='secondary
                className='text-lg px-8 py-4'>;
                View Pricing Plans;
                <DollarSign className=ml-2 w-5 h-5' />;
              </Button>;
            </div>;'
            <div className=mt-6 text-sm text-gray-400>;
              <p>;'
                📞 Call us:{' }
                <span className='text-cyan-400'>+1 302 464 0950</span>;
              </p>;
              <p>;
                📧 Email:{ '}'
                <span className=text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span>;
              </p>;
              <p>;'
                🌐 Visit:{' }
                <span className='text-cyan-400'>https://ziontechgroup && ziontechgroup.com</span>;
              </p>            </div>            <div className=mt-6 text-sm text-gray-400">;"
              <p>📞 Call us: <span className=text-cyan-400>+1 302 464 0950</span></p>;"
              <p>📧 Email: <span className="text-cyan-400>kleber@ziontechgroup && ziontechgroup.com</span></p>;
              <p>🌐 Visit: <span className="text-cyan-400">https://ziontechgroup && ziontechgroup.com</span></p>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
}

export default EnhancedServiceShowcase;  );
}
export default EnhancedServiceShowcase;
                    </p>;
                  </div>;
                  {/* Features */}
                  <div className=mb - 6'>;'
                    <h4 className=text - sm font - semibold text - gray - 300 mb - 3 flex items - center>;'
                      <CheckCircle className='w - 4 h - 4 mr - 2 text - green - 400 />;
                      Key Features;
                    </h4>;
                    <ul className='space - y-2'>;
                      {service.features.slice (0, 4).map ((feature, idx) => (
                        <li;
                          key={idx}
                          className=text - sm text - gray - 400 flex items - start';
                        >;'
                          <span className=text - cyan - 400 mr - 2>•</span>                          {feature}                      Key Features;
                    </h4>;
                    <ul className=space - y-2">;
                      {service.features.slice (0, 4).map ((feature, idx) => ("
                        <li key={idx} className=text - sm text - gray - 400 flex items - start>;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                          <span className="text - cyan - 400 mr - 2>•</span>;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;

                    <div className=text - xs text - gray - 300 leading - relaxed">;
                      {service.roi}
                    </div>;
                  </div>;

                    <div className="text - xs text - gray - 300 leading - relaxed>;
                      {service.market_position}
                    </div>;
                  </div>;

                      Email: <span className=text - cyan - 400">{service.contact_info.email}</span>;
                  </div>;
                </div>;
              </motion.div>))}
          </AnimatePresence>;
        </motion.div>;
        {/* Call to Action */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}

            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>;
              Join thousands of companies already achieving breakthrough results;
              with our cutting - edge AI, quantum, and blockchain solutions. Get;
              started today and see the future of business technology.;

              <p>🌐 Visit: <span className="text - cyan - 400">https://ziontechgroup.com</span></p>;
          </div>;
        </motion.div>;
      </div>;

    </section>);
}
export default EnhancedServiceShowcase);
}
export default EnhancedServiceShowcase;
  );

}



>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          </div>
        </motion.div>
      </div>
    </section>


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
);
}
export default EnhancedServiceShowcase;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
