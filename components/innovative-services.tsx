
import React, { useState } from 'react';

import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';



} from '../data/innovative-micro-saas-services';import { innovativeMicroSaasServices, getInnovativeServicesByCategory, getPopularInnovativeServices, getInnovativeServicesByPriceRange, getInnovativeServiceCategories } from '../data/innovative-micro-saas-services';



    filteredServices = filteredServices.filter(service =>




      case 'price':
;

  // Filter and sort services;
  let filteredServices = innovativeMicroSaasServices;}
  // Category filter;}
  if (selectedCategory !== 'All') {filteredServices = getInnovativeServicesByCategory(selectedCategory)}// Price range filter;
  if (priceRange !== 'All') {const [min, max] = priceRange;}
      .split('-').map(p => (p === '+' ? Infinity : parseInt(p)))filteredServices = getInnovativeServicesByPriceRange(min, max)}
  // Search filter;


  filteredServices.sort((a, b) => {switch (sortBy) {case 'price':;// Filter and sort services;




const [min, max] = price_range;
      .split ('-').map (p = > (p === '+' ? Infinity : parse_int (p)))filtered_services = getInnovativeServicesByPriceRange (min, max;
  const [min, max] = price_range.split ('-').map (p => p === '+' ? Infinity : parse_int (p))filtered_services = getInnovativeServicesByPriceRange (min, max)}
  // Search filter;

  filtered_services.sort ((a, b) => {switch (sort_by) {case 'price':;

const categories = getInnovativeServiceCategories();

                      <input
                        type="text"
                        placeholder="Search innovative services..."
                        value={searchQuery}




                  {/* Category Filter */}







                  {/* View Mode Toggle */}<div className='flex-shrink-0'    />;
                    <div className='flex bg-white/10 rounded-xl p-1 border border-white/20'    />;{/* View Mode Toggle */}
                  <div className=\"flex-shrink-0\"    />;
                    <div className=\"flex bg-white/10 rounded-xl p-1 border border-white/20\"    />;
                  {/* View Mode Toggle */}




                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${;
                          viewMode === 'grid';
                            ? 'bg-cyan-500 text-white';
                            : 'text-gray-400 hover:text-white';

                        }`}







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



                            {service.features.length > 3 && (<div className='text-xs text-cyan-400 text-center pt-2'    />;}



                        <div className='grid grid-cols-2 gap-4 mb-6 text-xs'>










                        <div className='flex space-x-3'>                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                        </div>


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



                        </div>
                      </div>
                    </QuantumHolographicCard>



                  ))}
</div>;
              )}






          {/* Call to Action */}




              </EnhancedFuturisticCard>;
            </div>;
          </section>;
        </div>;
      </QuantumHolographicBackground>;



  );







