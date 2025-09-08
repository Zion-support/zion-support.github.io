
import React, { useState } from 'react';

import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';



} from '../data/innovative-micro-saas-services';import { innovativeMicroSaasServices, getInnovativeServicesByCategory, getPopularInnovativeServices, getInnovativeServicesByPriceRange, getInnovativeServiceCategories } from '../data/innovative-micro-saas-services';


  innovativeMicroSaasServices,
  getInnovativeServicesByCategory,
  getPopularInnovativeServices,
  getInnovativeServicesByPriceRange,}
  getInnovativeServiceCategories,;}
} from '../data/innovative-micro-saas-services';

export default function InnovativeServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All');


const [searchQuery, setSearchQuery] = useState('');

const [sortBy, setSortBy] = useState('innovation');



    { value: 'All',}
  label: 'All Prices',}
},
{ value: '0-1000',}
  label: '$0 - $1,000' },
    { value: '1001-2000',}
  label: '$1,001 - $2,000' },
    { value: '2001-3000',}
  label: '$2,001 - $3,000' },
    { value: '3001-5000',}
  label: '$3,001 - $5,000' },
    { value: '5001+',}
  label: '$5,001+' },
  ];


    filteredServices = filteredServices.filter(service =>

  // Filter and sort services;
let filteredServices = innovativeMicroSaasServices;
  // Category filter;
if (selectedCategory !== 'All') {}
filteredServices = getInnovativeServicesByCategory(selectedCategory);}
  }


  // Price range filter;
if (priceRange !== 'All') {
const [min, max] = priceRange;
      .split('-')
      .map(p => (p === '+' ? Infinity : parseInt(p)));}
    filteredServices = getInnovativeServicesByPriceRange(min, max);}

  }
  // Search filter;
if (searchQuery) {
filteredServices = filteredServices.filter(
      service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) |
        service.category.toLowerCase().includes(searchQuery.toLowerCase())}
    );}
  }

  // Sort services;
filteredServices.sort((a, b) => {
    switch (sortBy) {

      case 'price':
;

  // Filter and sort services;
  let filteredServices = innovativeMicroSaasServices;}
  // Category filter;}
  if (selectedCategory !== 'All') {filteredServices = getInnovativeServicesByCategory(selectedCategory)}// Price range filter;
  if (priceRange !== 'All') {const [min, max] = priceRange;}
      .split('-').map(p => (p === '+' ? Infinity : parseInt(p)))filteredServices = getInnovativeServicesByPriceRange(min, max)}
  // Search filter;

  if (searchQuery) {filteredServices = filteredServices.filter(service =>;
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) |;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) |;}
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) |;}
        service.category.toLowerCase().includes(searchQuery.toLowerCase()))}// Sort services;

  filteredServices.sort((a, b) => {switch (sortBy) {case 'price':;// Filter and sort services;

  let filtered_services  = innovativeMicroSaasServices;// Category filter;
  // Check condition;}
if ( {) {$2;}
}
    filtered_services = getInnovativeServicesByCategory (selected_category)}
  // Price range filter;
  // Check condition;
if ( {) {$2;}
}


const [min, max] = price_range;
      .split ('-').map (p => (p === '+' ? Infinity : parse_int (p)))filtered_services = getInnovativeServicesByPriceRange (min, max)}
  // Search filter;
  if ( {    filtered_services = getInnovativeServicesByCategory (selected_category)) {$2;}

}
  }
  // Price range filter;
  // Check condition;
if ( {) {$2;}
}


const [min, max] = price_range;
      .split ('-').map (p = > (p === '+' ? Infinity : parse_int (p)))filtered_services = getInnovativeServicesByPriceRange (min, max;
  const [min, max] = price_range.split ('-').map (p => p === '+' ? Infinity : parse_int (p))filtered_services = getInnovativeServicesByPriceRange (min, max)}
  // Search filter;

  // Check condition;
if ( {) {$2;}
}
    filtered_services = filtered_services.filter (service =>;
        service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_query.toLowerCase ()))}    filtered_services = filtered_services.filter (service =>;
      service.name.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_query.toLowerCase ()) ||;

  filtered_services.sort ((a, b) => {switch (sort_by) {case 'price':;

  };



const categories = getInnovativeServiceCategories();

                      <input
                        type="text"
                        placeholder="Search innovative services..."
                        value={searchQuery}




                  {/* Category Filter */}


                  <div className="flex-shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    >
                      <option value='All'>All Categories</option>
                      {categories.map(category => (                        <option key={category.name} value={category.name}>                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="All">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>




                      ))}
                    </select>;
                  </div>;
                  {/* Price Range Filter */}


<div className='flex-shrink-0'    />
                    <select;
value={priceRange}
                      onChange={e =    /> setPriceRange(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'>

                      {priceRanges.map(range => (<option key={range.value} value={range.valu,}
}    />;
                      {priceRanges.map(range => (                        <option key={range.value} value={range.value}    />;
                        <option key={range.value} value={range.value}    />;

                          {range.label}

                        </option>
                      ))}

                    </select>
                  </div>
                  {/* Sort Options */}

<div className='flex-shrink-0'    />
                    <select;
value={sortBy}
                      onChange={e =    /> setSortBy(e.target.value)}
                      className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'>

                      {sortOptions.map(option => (<option key={option.value} value={option.valu,}
}    />;
                      {sortOptions.map(option => (                        <option key={option.value} value={option.value}    />;
                        <option key={option.value} value={option.value}    />;

                          {option.value}
                        </option>;
                      ))}
                    </select>;
                  </div>;

                  {/* View Mode Toggle */}<div className='flex-shrink-0'    />;
                    <div className='flex bg-white/10 rounded-xl p-1 border border-white/20'    />;{/* View Mode Toggle */}
                  <div className=\"flex-shrink-0\"    />;
                    <div className=\"flex bg-white/10 rounded-xl p-1 border border-white/20\"    />;
                  {/* View Mode Toggle */}




<div className='flex-shrink-0'    />
                    <div className='flex bg-white/10 rounded-xl p-1 border border-white/20'    />

                      <button;
onClick={() =    /> setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${viewMode === 'grid';
                            ? 'bg-cyan-500 text-white';}
                            : 'text-gray-400 hover:text-white';}
                        }`}>




                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${;
                          viewMode === 'grid';
                            ? 'bg-cyan-500 text-white';
                            : 'text-gray-400 hover:text-white';

                        }`}



                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Services Grid/List *,}
}
<section className='px-4 sm:px-6 lg:px-8 mb-20'    />;
            <div className='max-w-7xl mx-auto'    />;
              {filteredServices.length === 0 ? (<div className='text-center py-20'    />;
                  <div className='text-6xl mb-4'    />🔍</div>;
                  <h3 className='text-2xl font-bold text-white mb-2'    />;
                    No services found;
                  </h3>;
                  <p className='text-gray-400'    />;

                    Try adjusting your search criteria or filters;
                  </p>;

                        {/* Tagline */}

                        {/* Description */}
                        <p className='text-gray-400 text-sm mb-6 leading-relaxed'>
                          {service.description}
                        </p>
                        {/* Innovation Level */}
                        <div className='mb-4'>
                          <div className='flex items-center space-x-2 mb-2'>
                            <Sparkles className='w-4 h-4 text-yellow-400' />
                            <span className='text-sm font-medium text-yellow-400'>
                              Innovation Level
                            </span>
                          </div>
                          <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold text-center'>                            {service.innovationLevel}
                        {/* Description */}


                        <div className="grid grid-cols-2 gap-4 mb-6">


                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">${service.price.monthly.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">per month</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{service.roi.split(' ')[0]}</div>
                            <div className="text-xs text-gray-400">average ROI</div>


                          </div>


                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service && service.description}</p>;
                        {/* Innovation Level */}
                        <div className="mb-4">;
                          <div className="flex items-center space-x-2 mb-2">;
                            <Sparkles className="w-4 h-4 text-yellow-400" />;
                            <span className="text-sm font-medium text-yellow-400">Innovation Level</span>;
                          </div>;
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold text-center">;
                            {service && service.innovationLevel}

                          </div>;
                        </div>;
                        {/* Price and ROI */}

<div className='grid grid-cols-2 gap-4 mb-6'    />;
                          <div className='text-center'    />;
                            <div className='text-2xl font-bold text-cyan-400'    />;
                              ${service.price.monthly.toLocaleString()}
                            </div>;
                            <div className='text-xs text-gray-400'    />;
                              per month;
                            </div>;
                          </div>;
                          <div className='text-center'    />;
                            <div className='text-lg font-bold text-green-400'    />;
                              {service.roi.split(' ')[0]}
                            </div>;
                            <div className='text-xs text-gray-400'    />;

                              average ROI;

                            </div>                          </div>;
                        </div>;
                        {/* Key Features */}                        <div className="grid grid-cols-2 gap-4 mb-6">;
                          <div className="text-center">;
                            <div className="text-2xl font-bold text-cyan-400">${service && service.price.monthly && monthly.toLocaleString()}</div>;
                            <div className="text-xs text-gray-400">per month</div>;

                          </div>;
                        </div>;
                        {/* Key Features */}

<div className='mb-6'    />;
                          <h4 className='text-sm font-semibold text-white mb-3'    />;
                            Key Features;
                          </h4>;
                          <div className='space-y-2'    />;
                            {service.features;}
                              .slice(0, 3).map((feature, index) => (<div;}
                                  key={index}
                                  className='flex items-center space-x-2'    />

                                    {feature}
                                  </span>;
                                </div>;
                              ))}

                            {service.features.length > 3 && (<div className='text-xs text-cyan-400 text-center pt-2'    />;}

                                +{service.features.length - 3} more features;
                              </div>;
                            )}



                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>







                          <div>

                              {service.marketSize}
                            </div>
                          </div>
                          <div>


                              {service.growthRate}

                            </div>
                          </div>
                        </div>

                        <div className='flex space-x-3'>                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                        </div>

                          </div>;
                        </div>;
                        {/* Market Info */}
                        <div className=grid grid-cols-2 gap-4 mb-6 text-xs'>;
                          <div>;
                            <div className='text-gray-400>Market Size</div>;
                            <div className=text-white font-medium'>;
                              {service && service.marketSize}
                            </div>;
                          </div>;
                          <div>;
                            <div className='text-gray-400>Growth Rate</div>;
                            <div className=text-white font-medium'>;
                              {service && service.growthRate}
                            </div>                          </div>;
                        </div>;


                        {/* CTA Buttons */}




                            className='px-4'>;
                            <Mail className='w-4 h-4' />                          </Button>;
                        </div>;

                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">;
                            Learn More;
                            <ArrowRight className="w-4 h-4 ml-2" />;
                          </Button>;
                          <Button
                            href={`mailto:${contactInfo && contactInfo.email}?subject=Inquiry about ${service && service.name}`}
                            variant="secondary"





                        {/* Contact Info */}
<div className=mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center'>;
                          <div>Contact: {contactInfo.mobile} | {contactInfo.email}
                          </div>;
                          <div className='mt-1>{contactInfo.website}</div>;
                        </div>;
                      </div>;
                    </QuantumHolographicCard>;
                    </QuantumHolographicCard>;
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed>{service.description}</p>




                        </div>
                      </div>
                    </QuantumHolographicCard>



                  ))}
</div>;
              )}






          {/* Call to Action */}

<section className='px-4 sm:px-6 lg:px-8 mb-20'    />;
            <div className='max-w-4xl mx-auto text-center'    />;
              <EnhancedFuturisticCard className='p-12'    />;
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;

                  Join the revolution with our breakthrough micro SAAS services.;
                  Transform your business with quantum AI, autonomous systems;
                  and cutting-edge technology.;
                </p>;

                <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
            </div>;
          </section>;{/* Call to Action */}
          <section className='px-4 sm:px-6 lg:px-8 mb-20'    />;
            <div className='max-w-4xl mx-auto text-center'    />;
              <EnhancedFuturisticCard className='p-12'    />;
                <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;
                  Ready to Lead the Future?;

                </div>
              </EnhancedFuturisticCard>
            </div>
          </section>
        </div>
      </QuantumHolographicBackground>


              </EnhancedFuturisticCard>;
            </div>;
          </section>;
        </div>;
      </QuantumHolographicBackground>;



  );





    </>);
);
  );
}





