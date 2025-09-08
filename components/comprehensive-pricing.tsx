


import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';

import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data/revolutionary-micro-saas-services';

  }
  // Sort services;
filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':




      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':


        return bRoi - aRoi;


default:}
        return a.name.localeCompare(b.name);}
    }
  });

const contactInfo = {
    mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',}
  website: 'https://ziontechgroup.com',}
  };


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >



                Transparent pricing for all our revolutionary micro SaaS services. 
                Choose the perfect plan for your business with guaranteed ROI and enterprise-grade reliability.

              </motion.p>

              {/* Market Stats *,}
}
              <motion.div;
className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'


                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.4 ,}
}

              {/* Market Stats */}

                      {stat.metric}
                    </div>;
                    <div className='text-gray-400 text-sm>{stat.label}</div>;
                    <div className=text-gray-500 text-xs'>;
                      {stat.description}</div>                  </div>                  <div key={index} className="text-center>;
                    <div className=text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>;
                    <div className="text-gray-400 text-sm>{stat.label}</div>;
                    <div className=text-gray-500 text-xs">{stat.description}</div>;
                  </div>;
                    </div>;
                  </div>;
                    </div>                  </div>                  <div key={index} className="text-center>
                    <div className=text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm>{stat.label}</div>
                    <div className=text-gray-500 text-xs">{stat.description}</div>


                    </div>
                    <div className='text-gray-400 text-sm'    />{stat.label}</div>
                    <div className='text-gray-500 text-xs'    />
                      {stat.description}

                    </div>                  </div>                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.description}</div>


                    </div>
                  </div>

                ))}
              </motion.div>;

                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 ,}
}>;
                {marketStats && marketStats.map((stat, index) => (<div key={index} className='text-center'    />;
                    <div className='text-3xl font-bold text-cyan-400 mb-2'    />;
                      {stat && stat.metric}
                    </div>;
                    <div className='text-gray-400 text-sm'    />{stat && stat.label}</div>;
                    <div className='text-gray-500 text-xs'    />;
                      {stat && stat.description}
                    </div>                  </div>                  <div key={index} className=\"text-center\"    />;
                    <div className=\"text-3xl font-bold text-cyan-400 mb-2\"    />{stat && stat.metric}</div>;
                    <div className=\"text-gray-400 text-sm\"    />{stat && stat.label}</div>;
                    <div className=\"text-gray-500 text-xs\"    />{stat && stat.description}</div>;

                ))}




              {/* CTA Buttons */}


                transition={{ duration: 0 && 0.8, delay: 0 && 0.6 }}>              <motion&& motion.div 


                transition={{ duration: 0.8, delay: 0.6 }}
                className=flex flex-col sm:flex-row gap-4 justify-center items-center";
              >;
<motion.div;
                className=flex flex-col sm:flex-row gap-4 justify-center items-center';
                className="flex flex-col sm:flex-row gap-4 justify-center items-center
              >


<motion.div;
className='flex flex-col sm:flex-row gap-4 justify-center items-center'


                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.6 ,}
}
                  />;
<Button;

                  variant='primary';
                  size='lg';
                  onClick={() =    />;}
                    document;}
                      .getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' },
}
                  View Pricing Tiers;
                  <DollarSign className='ml-2 w-5 h-5'    />;
                </Button>;
                <Button;
                  variant='futuristic';
                  size='lg';
                  onClick={() =    />;}
                    document;}
                      .getElementById('services-pricing')?.scrollIntoView({ behavior: 'smooth' },
}
                className=\'flex flex-col sm:flex-row gap-4 justify-center items-center\';
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.6 ,}
}
              >;
                <Button;
                  variant=\'primary\';
                  size=\'lg\';
                  onClick={() =    /> document.getElementById('pricing-tiers')?.scrollIntoView({ behavior: 'smooth' },
}
                >;
                  View Pricing Tiers;
                  <DollarSign className=\"ml-2 w-5 h-5\"    />;
                </Button>;
                <Button;
                  variant=\'futuristic\';
                  size=\'lg\';
                  onClick={() =    /> document.getElementById('services-pricing')?.scrollIntoView({ behavior: 'smooth' })}

                >
                  Browse All Services;
                  <Search className='ml-2 w-5 h-5'    />


                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Contact Information Banner */}



                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">{contactInfo.address}</span>
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white">{contactInfo.website}</span>



              </div>
            </div>
          </div>
        </section>


              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >


                >;
                  Browse All Services;
                  <Search className='ml-2 w-5 h-5' />                </Button>                  <Search className="ml-2 w-5 h-5" />;
                </Button>;
              </motion && motion.div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Information Banner */}
        <section className='py-8 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-t border-b border-purple-400/20'>;
          <div className='container mx-auto px-4'>;
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>;
              <div className='flex items-center gap-4'>;
                <Phone className='w-5 h-5 text-cyan-400' />;
                <span className='text-white'>{contactInfo && contactInfo.mobile}</span>;
                <Mail className='w-5 h-5 text-purple-400' />;
                <span className='text-white'>{contactInfo && contactInfo.email}</span>;
              </div>;
              <div className='flex items-center gap-4'>;
                <MapPin className='w-5 h-5 text-green-400' />;
                <span className='text-white'>{contactInfo && contactInfo.address}</span>;
                <Globe className='w-5 h-5 text-blue-400' />;
                <span className='text-white'>{contactInfo && contactInfo.website}</span>              </div>              <div className="flex items-center gap-4">;
                <MapPin className="w-5 h-5 text-green-400" />;
                <span className="text-white">{contactInfo && contactInfo.address}</span>;
                <Globe className="w-5 h-5 text-blue-400" />;
                <span className="text-white">{contactInfo && contactInfo.website}</span>;
            </div>;
          </div>;
        </section>;
        {/* Pricing Tiers */}
        <section id='pricing-tiers' className='py-20'>;
          <div className='container mx-auto px-4'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 20 }}        <section id="pricing-tiers" className="py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div 
              className="text-center mb-16"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;

                  Flexible Pricing;
                </span>
                <br    />
                <span className='text-white'    />for Every Business</span>
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />
                Choose the perfect plan that scales with your business. All;

                plans include our 21-day free trial and ROI guarantee.;
              </p>;
            </motion && motion.div>;
            <motion&& motion.div


              className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'              viewport={{ once: true }}                  Flexible Pricing



              variants={containerVariant,}
}
              initial='hidden';
              whileInView='visible';
              viewport={{ once: true ,}
}
                />;
              {pricingTiers.map((tier, index) => (<motion.div;}

                  key={tier.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 ,}
}
                    />;
                  <UltraFuturisticCard;

variant={tier.popular ? 'holographic-advanced' : 'quantum-advanced';}
                    }
                    size='large';
                    className={`h-full relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}    />

                    {tier.popular && (<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'    />;
                        <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold'    />;

                          Most Popular;
                        </div>;}
                      </div>;}
                    )}

<div className='text-center mb-8'    />;

                      <div;
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${tier.color} mb-6`}    />

                        {tier.icon}
                      </div>;

                      <h3 className='text-2xl font-bold text-white mb-2'    />;
                        {tier.name}
                      </h3>;
                      <p className='text-gray-300 text-sm mb-4'    />;
                        {tier.description}
                      </p>;
                      <div className='text-4xl font-bold text-cyan-400 mb-2'    />;
                        {tier.price}
                      </div>;
                      <div className='text-sm text-gray-400'    />{tier.period}</div>;
                    </div>;
                    <div className='space-y-3 mb-8'    />;
                      {tier.features.map((feature, idx) => (<div key={idx} className='flex items-center gap-2'    />;
                          <Check className='w-4 h-4 text-green-400 flex-shrink-0'    />;
                          <span className='text-sm text-gray-300'    />;

                            {feature}
                          </span>;
                        </div>;
                      ))}
                    </div>;



              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"



                      ))}
                    </div>


                    </div>;
                        {tier && tier.icon}
                      </div>;
                      <h3 className="text-2xl font-bold text-white mb-2">{tier && tier.name}</h3>;
                      <p className="text-gray-300 text-sm mb-4">{tier && tier.description}</p>;
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{tier && tier.price}</div>;
                      <div className="text-sm text-gray-400">{tier && tier.period}</div>;
                    </div>;
                    <div className="space-y-3 mb-8">;
                      {tier && tier.features.map((feature, idx) => (;
                        <div key={idx} className="flex items-center gap-2">;
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />;
                          <span className="text-sm text-gray-300">{feature}</span>;
                        </div>;
                      ))}
                    </div>;
                    <div className='text-center'>;


                      <Button
                        variant={tier && tier.popular ? 'futuristic' : 'primary'}
                        size='md'


                        onClick={() =>;
                          window && window.open(;
                            'https://ziontechgroup && ziontechgroup.com/contact',;
                            '_blank';
                          );
                        }
                        className='w-full';
                      >;
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4' />                      </Button>                    <div className="text-center">;
                                             <Button
                         variant={tier && tier.popular ? 'futuristic' : 'primary'} 



                         size="md"
                         onClick={() => window && window.open('https://ziontechgroup && ziontechgroup.com/contact_blank')}
                         className="w-full";
                       >;
                        Get Started;
                        <ArrowRight className="ml-2 w-4 h-4" />;
                    </div>;
                  </UltraFuturisticCard>;
                </motion && motion.div>;




          <div className="container mx-auto px-4">

            {/* Filters and Controls */}
            <motion&& motion.div;
              className='mb-8'              initial={{ opacity: 0, y: 20 ,}
}        <section id=\"services-pricing\" className=\"py-20\"    />;
          <div className=\"container mx-auto px-4\"    />;
            {/* Filters and Controls */}{/* Services Pricing Grid */}
<section id='services-pricing' className='py-20'    />;
          <div className='container mx-auto px-4'    />;
            {/* Filters and Controls */}


              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}

                />
<div className='flex flex-col lg:flex-row gap-6 items-center justify-between'    />
                <div className='flex flex-wrap gap-4'    />
                  <select;
value={selectedCategory}
                    onChange={e =    /> setSelectedCategory(e && e.target.value,}
}
                    className='px-4 py-2 bg-slate-800 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400'>

                    <option value='All'    />All Categories</option>;
                    {revolutionaryServiceCategories && revolutionaryServiceCategories.map(category => (<option key={category} value={category}    />;
                        {category}
                      </option>;

                    ))}
                  </select>;
                  <select;
                    value={priceRange}

                    onChange={e =    /> setPriceRange(e && e.target.value)}
                    className='px-4 py-2 bg-slate-800 border border-purple-400/30 rounded-lg text-white focus: outline-none focus:border-purple-400'>

                    {priceRanges && priceRanges.map(range => (<option key={range && range.value} value={range && range.valu,}
}    />;
                        {range && range.label}
                      </option>;
                    ))}


                      placeholder='Search services...'
                      value={searchQuery}



                    </button>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            {/* Services Display */}
<motion.div;


              className={viewMode === 'grid' 



              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 




                ? "grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"

              }
              variants={containerVariants}
              initial=hidden"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 w-64
                    />
                  </div>
                  
                  <div className=flex border border-gray-600 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode(grid')}
                      className={`px-3 py-2 ${viewMode === 'grid ? bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400}`}
                    >
                      <Grid className="w-4 h-4 />
                    </button>
                    <button
                      onClick={() => setViewMode(list')}
                      className={`px-3 py-2 ${viewMode === 'list ? bg-cyan-500 text-white' : 'bg-slate-800 text-gray-400}`}
                    >
                      <List className=w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>




            >
              {filteredServices.map((service, index) => (
                <motion.div

}
                />
              {filteredServices.map((service, index) => (}
                <motion.div;}
key={service.id}
                  variants={itemVariants}

                  <UltraFuturisticCard



                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View



              variants={container_variants}
              initial='hidden';
              whileInView='visible'              viewport={{ once: true }}            <motion.div;
              className={view_mode === 'grid';
                ? "grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap - 8";
                : "space - y-6",
              }
              variants={container_variants}
              initial="hidden";
              whileInView="visible";
            >;
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={item_variants}
                  while_hover={{ coordinate_y: -5 }}
                >;

                  <UltraFuturisticCard;
                    variant={(service.variant as any) |'quantum-advanced}                    size={viewMode === grid' ? 'large : medium'}                    variant={service.variant as any |'quantum-advanced}
                    variant={(service.variant as any) || quantum-advanced'}                    size={viewMode === 'grid ? large' : 'medium}variant={(service.variant as any) || quantum-advanced'}                    size={viewMode === 'grid ? large' : 'medium}                    variant={service.variant as any || quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced}                    size={viewMode === grid' ? 'large : medium'}variant={service.variant as any || 'quantum-advanced}variant={(service.variant as any) || quantum-advanced'}                    size={viewMode === 'grid ? large' : 'medium}variant={(service.variant as any) || quantum-advanced'}                    size={viewMode === 'grid ? large' : 'medium}                    variant={service.variant as any || quantum-advanced'}
                    variant={(service.variant as any) || 'quantum-advanced}                    size={viewMode === grid' ? 'large : medium'}variant={(service.variant as any) || 'quantum-advanced}size={viewMode === grid' ? 'large : medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list ? flex flex-col md:flex-row' : '}`}
                  >;

                  whileHover={{ y: -5 ,}
}    />;
                  <UltraFuturisticCard;
variant={(service.variant as any) || 'quantum-advanced'}
                    size={viewMode === 'grid' ? 'large' : 'medium'}
                    className={`h-full cursor-pointer ${viewMode === 'list' ? 'flex flex-col md: flex-row' : ''}`}
                      />
                    {viewMode === 'grid' ? (
                      // Grid View;
}
<div className='text-center'    />}
                        <div className='text-4xl mb-4'    />{service.icon}</div>
                        <h3 className='text-xl font-bold text-white mb-2'    />

                          {service.nam,}
}


            )}


        <section className="py-20">

          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-4xl mx-auto"

              initial={{ opacity: 0, y: 20 }}


              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >



          </div>;
        </section>;
        {/* Contact Section */}


              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>;


                <Button
                  variant='primary'
                  size='lg'
                  onClick={() =>;
                    window && window.open('https://ziontechgroup && ziontechgroup.com/contact', '_blank');
                  }
                >;
                  Contact Sales;
                  <Mail className='ml-2 w-5 h-5' />;
                </Button>;
                <Button
                  variant='futuristic'
                  size='lg'
                  onClick={() =>;
                    window && window.open('https://ziontechgroup && ziontechgroup.com/contact', '_blank');
                  }


              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?


              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                >
                  Contact Sales
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="futuristic"
                  size="lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank')}
                >
                  Schedule Demo
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Call us anytime</div>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email us 24/7</div>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Visit our office</div>

                </div>

                transition={{ duration: 0.6 }}
              >
                <div className=text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2>No Services Found</h3>
                <p className=text-gray-400 mb-6">Try adjusting your search criteria or filters.</p>
                                 <Button 
                   variant="primary
                   onClick={() => {
                     setSearchQuery($2);
                     setSelectedCategory($2);
                     setPriceRange(All')
                   }}
                 >
                   Clear Filters
                 </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className=py-20">
          <div className="container mx-auto px-4 text-center>
            <motion.div 
              className=max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6>
                Ready to Get Started?
              </h2>
              <p className=text-xl text-gray-300 mb-8">
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8>
                <Button 
                  variant=primary" 
                  size="lg
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank)}
                >
                  Contact Sales
                  <Mail className=ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="futuristic 
                  size=lg"
                  onClick={() => window.open(https://ziontechgroup.com/contact_blank')}

              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Contact our sales team to discuss pricing, custom plans, and implementation options.
              </p>
              <div className=flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  variant="primary
                  size=lg"
                  onClick={() => window.open('https://ziontechgroup.com/contact_blank)}
                >
                  Contact Sales
                  <Mail className="ml-2 w-5 h-5 />
                </Button>
                <Button
                  variant=futuristic"
                  size="lg
                  onClick={() => window.open(https://ziontechgroup.com/contact_blank')}
                >
                  Schedule Demo


                </Button>
              </div>
              <div className='grid grid-cols-1 md: grid-cols-3 gap-6 text-center'    />
                <div    />
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-2'    />
                  <div className='text-white font-semibold'    />


                    {contactInfo.mobil,}
}
                  </div>;
                  <div className='text-gray-400 text-sm'    />Call us anytime</div>;
                </div>;
                <div    />;
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-2'    />;
                  <div className='text-white font-semibold'    />;
                    {contactInfo.email}
                  </div>;
                  <div className='text-gray-400 text-sm'    />Email us 24/7</div>;
                </div>;
                <div    />;
                  <MapPin className='w-8 h-8 text-green-400 mx-auto mb-2'    />;
                  <div className='text-white font-semibold'    />;
                    {contactInfo.address}

                  </div>
                  <div className='text-gray-400 text-sm'    />Visit our office</div>

                </div>






              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>

                >;

                            <Button;
                              variant='primary;
                              size=sm';
                              on_click={() =>;
                                window.open (service.link, '_blank)}
                            >;
                              Learn More;
                              <ExternalLink className=ml - 2 w - 4 h - 4' />;
                            </Button>;
                            <Button;
                              variant='futuristic;
                              size=sm';
                              on_click={() =>;
                                window.open ('https://ziontechgroup.com / contact,_blank')}
                            >;
                              Get Pricing;
                              <DollarSign className='ml - 2 w - 4 h - 4 />;
                            </Button>                          </div>;
                          <div className="flex gap - 2>;
                                                        <Button;
                              variant=primary";
                              size="sm;
                              on_click={() => window.open (service.link, _blank')}
                              >;
                              Learn More;
                              <ExternalLink className=ml - 2 w - 4 h - 4" />;
                            </Button>;
                            <Button;
                              variant="futuristic;
                              size=sm";
                              on_click={() => window.open ('https: //ziontechgroup.com / contact_blank)}
                              >;
                              Get Pricing;
                              <DollarSign className="ml - 2 w - 4 h - 4 />;
                            </Button>;
                        </div>;
                      </div>)}
                  </UltraFuturisticCard>;
                </motion.div>))}
            </motion.div>;
            {filtered_services.length === 0 && (<motion.div;
                className=text - center py - 16'                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >              <motion.div;
                className=text - center py - 16";
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >;
                <div className='text - 6xl mb - 4>🔍</div>;
                <h3 className=text - 2xl font - bold text - white mb - 2'>;
                  No Services Found;
                </h3>;
                <p className='text - gray - 400 mb - 6>;
                  Try adjusting your search criteria or filters.;
                </p>;
                <Button;
                  variant=primary';
                  on_click={() => {setSearchQuery (')setSelectedCategory (All')setPriceRange ('All)}}
                >;
                  Clear Filters;
                </Button>              </motion.div>                <div className="text - 6xl mb - 4>🔍</div>;
                <h3 className=text - 2xl font - bold text - white mb - 2">No Services Found</h3>;
                <p className="text - gray - 400 mb - 6>Try adjusting your search criteria or filters.</p>;
                                <Button;
                  variant=primary";
                  on_click={() => {setSearchQuery (')setSelectedCategory ('All)setPriceRange (All')}}
                  >;
                  Clear Filters;
                </Button>)}
          </div>;
        </section>;
        {/* Contact Section */}
        <section className='py - 20>;
          <div className=container mx - auto px - 4 text - center'>;
            <motion.div;
              className='max - w-4xl mx - auto              initial={{ opacity: 0, coordinate_y: 20 }}        <section className="py - 20>;
          <div className=container mx - auto px - 4 text - center">;
            <motion.div;
              className="max - w-4xl mx - auto;
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className=text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Get Started?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8>;
                Contact our sales team to discuss pricing, custom plans, and;
                implementation options.;
              </p>;
              <div className=flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8'>;
                <Button;
                  variant='primary;
                  size=lg';
                  on_click={() =>;
                    window.open ('https://ziontechgroup.com / contact, _blank')}
                >;
                  Contact Sales;
                  <Mail className='ml - 2 w - 5 h - 5 />;
                </Button>;
                <Button;
                  variant=futuristic';
                  size='lg;
                  on_click={() =>;
                    window.open (https://ziontechgroup.com / contact', '_blank)}
                >;
                  Schedule Demo;
                  <Calendar className=ml - 2 w - 5 h - 5' />;
                </Button>;
              </div>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - center>;
                <div>;
                  <Phone className=w - 8 h - 8 text - cyan - 400 mx - auto mb - 2' />;
                  <div className='text - white font - semibold>;
                    {contact_info.mobile}
                  </div>;
                  <div className=text - gray - 400 text - sm'>Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className='w - 8 h - 8 text - purple - 400 mx - auto mb - 2 />;
                  <div className=text - white font - semibold'>;
                    {contact_info.email}
                  </div>;
                  <div className='text - gray - 400 text - sm>Email us 24 / 7</div>;
                </div>;
                <div>;
                  <MapPin className=w - 8 h - 8 text - green - 400 mx - auto mb - 2' />;
                  <div className='text - white font - semibold>;
                    {contact_info.address}
                  </div>;
                  <div className=text - gray - 400 text - sm'>Visit our office</div>                </div>                Ready to Get Started?;
              </h2>;
              <p className=text - xl text - gray - 300 mb - 8">;
                Contact our sales team to discuss pricing, custom plans, and implementation options.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8>;
                <Button;
                  variant=primary";
                  size="lg;
                  on_click={() => window.open ('https://ziontechgroup.com / contact_blank)}
                >;
                  Contact Sales;
                  <Mail className=ml - 2 w - 5 h - 5" />;
                </Button>;
                <Button;
                  variant="futuristic;
                  size=lg";
                  on_click={() => window.open (https://ziontechgroup.com / contact_blank')}
                >;
                  Schedule Demo;
                  <Calendar className="ml - 2 w - 5 h - 5 />;
                </Button>;
              </div>;
              <div className=grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - center">;
                <div>;
                  <Phone className="w - 8 h - 8 text - cyan - 400 mx - auto mb - 2 />;
                  <div className=text - white font - semibold">{contact_info.mobile}</div>;
                  <div className="text - gray - 400 text - sm>Call us anytime</div>;
                </div>;
                <div>;
                  <Mail className=w - 8 h - 8 text - purple - 400 mx - auto mb - 2" />;
                  <div className="text - white font - semibold>{contact_info.email}</div>;
                  <div className=text - gray - 400 text - sm">Email us 24 / 7</div>;
                </div>;
                <div>;
                  <MapPin className="w - 8 h - 8 text - green - 400 mx - auto mb - 2 />;
                  <div className=text - white font - semibold">{contact_info.address}</div>;
                  <div className="text - gray - 400 text - sm">Visit our office</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraFuturisticBackground>));
}



  );
    </UltraFuturisticBackground>))}))
  )
}




