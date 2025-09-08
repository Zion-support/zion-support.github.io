

import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
  revolutionaryMicroSaasServices;
  revolutionaryServiceCategories;
  getRevolutionaryServicesByCategory;
  getPopularRevolutionaryServices;
  getRevolutionaryServicesByPriceRange;


  revolutionaryMicroSaasServices,
  revolutionaryServiceCategories,
  getRevolutionaryServicesByCategory,
  getPopularRevolutionaryServices,;
  getRevolutionaryServicesByPriceRange,;

import {;
  revolutionaryMicroSaasServices,;
  revolutionaryServiceCategories,;
  getRevolutionaryServicesByCategory,;
  getPopularRevolutionaryServices,;

  getRevolutionaryServicesByPriceRange,;

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Calendar } from 'lucide-react';




  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);




const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [priceRange, setPriceRange] = useState('All');


const [searchQuery, setSearchQuery] = useState('');

const [sortBy, setSortBy] = useState('name');



    { value: 'All',}
  label: 'All Prices',}
},
{ value: '0-1000',}
  label: '$0 - $1,000' },
    { value: '1001-2500',}
  label: '$1,001 - $2,500' },
    { value: '2501-5000',}
  label: '$2,501 - $5,000' },
    { value: '5001+',}
  label: '$5,001+' },
  ];

const sortOptions = [
    { value: 'name',}
  label: 'Name A-Z',}
},
    { value: 'price',}
  label: 'Price Low-High',}
},
    { value: 'popularity',}
  label: 'Most Popular',}
},
    { value: 'category',}
  label: 'Category',}
},
{ value: 'roi',}
  label: 'Highest ROI',}
},
  ];
  // Filter and sort services;
let filteredServices = revolutionaryMicroSaasServices;
  // Category filter;
if (selectedCategory !== 'All') {}
filteredServices = getRevolutionaryServicesByCategory(selectedCategory);}

  }
  // Price range filter;

  if (priceRange !== 'All') {;
    const [min, max] = priceRange;
      .split('-');
      .map(p => (p === '+' ? Infinity : parseInt(p)));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);    const [min, max] = priceRange && priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);
  }

    filteredServices = filteredServices.filter(service =>

      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }




      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':


        return bRoi - aRoi;

default:
        return a.name.localeCompare(b.name);}
}
    }

  });

    {
      name: 'Autonomous Vehicles & Smart Transportation',
  description:
        'AI platforms for autonomous vehicles and smart transportation'
      icon: <CarIcon className='w-6 h-6'    />
      count: revolutionaryMicroSaasServices.filter(
        s => s.category === 'Autonomous Vehicles & Smart Transportation'
      ).length;
color: 'from-emerald-500 to-green-600'}
   ,}
}
    {
      name: 'Smart Energy & Renewable Energy',

      description: 'AI platforms for smart energy grids and renewable energy optimization',
      icon: <LeafIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  ];

const containerVariants = {}
    hidden: { opacity: 0,}
}




  const containerVariants = {
    hidden: { opacity: 0 }

    website: 'https://ziontechgroup.com',  }    website: 'https://ziontechgroup.com';
  }


const popular_services  = getPopularRevolutionaryServices ()// Enhanced service categories with better descriptions;


const enhanced_categories = [
  {name: 'Quantum AI & Cognitive Computing',}
  description:;}
        'Revolutionary quantum AI solutions with human - level reasoning capabilities',icon: <Brain className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Quantum AI & Cognitive Computing').length,color: 'from - purple - 500 to - indigo - 600',},name: 'Autonomous Manufacturing & Industry 4.0',
  description:;
        'Next - generation autonomous manufacturing with zero human intervention',icon: <Factory className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Autonomous Manufacturing & Industry 4.0').length,color: 'from - orange - 500 to - red - 600',},{name: 'Quantum Blockchain & DeFi',}
  description:;}
        'Quantum - secured blockchain platforms with infinite scalability',icon: <Globe className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Quantum Blockchain & DeFi').length,color: 'from - green - 500 to - emerald - 600',},{name: 'AI Biomedical Research & Drug Discovery',}
  description:;}
        'AI - powered platforms for accelerated drug discovery and medical research',icon: <FlaskIcon className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'AI Biomedical Research & Drug Discovery').length,color: 'from - blue - 500 to - indigo - 600',},{name: 'Quantum Cybersecurity & Threat Detection',}
  description:;}
        'Quantum - resistant cybersecurity with AI - powered threat detection',icon: <ShieldCheck className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Quantum Cybersecurity & Threat Detection').length,color: 'from - red - 500 to - pink - 600',},{name: 'Space Technology & Satellite Optimization',}
  description:;}
        'Revolutionary platforms for space exploration and satellite optimization',icon: <Rocket className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Space Technology & Satellite Optimization').length,color: 'from - indigo - 500 to - purple - 600',},{name: 'AI Content Creation & Marketing',}
  description: 'Quantum - powered content creation at infinite scale',icon: <FileText className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'AI Content Creation & Marketing').length,color: 'from - teal - 500 to - cyan - 600',},{name: 'Quantum Computing as a Service',}
  description: 'Enterprise quantum computing with real quantum processors',icon: <Cpu className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Quantum Computing as a Service').length,color: 'from - violet - 500 to - purple - 600',},{name: 'Autonomous Vehicles & Smart Transportation',}
  description:;}
        'AI platforms for autonomous vehicles and smart transportation',icon: <CarIcon className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Autonomous Vehicles & Smart Transportation').length,color: 'from - emerald - 500 to - green - 600',},{name: 'Smart Energy & Renewable Energy',}
  description:;}
        'AI platforms for smart energy grids and renewable energy optimization',icon: <LeafIcon className='w - 6 h - 6'    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Smart Energy & Renewable Energy').length,color: 'from - yellow - 500 to - orange - 600',},  ];      description: 'AI platforms for smart energy grids and renewable energy optimization',
  icon: <LeafIcon className=\"w - 6 h - 6\"    />,count: revolutionaryMicroSaasServices.filter (string => s.category === 'Smart Energy & Renewable Energy').length,color: 'from - yellow - 500 to - orange - 600';
    }

const container_variants = {}
    hidden: { opacity: 0,}

},
    visible: {
      opacity: 1;
transition: {
}
staggerChildren: 0.1,}

      },
    }}


const itemVariants = {}
    hidden: { y: 20, opacity: 0,}

}
    visible: {
      y: 0;
opacity: 1;
transition: {
}
duration: 0.5,}
      },
    }}

  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'    />
      <div className='min-h-screen'    />
        <Head><title>
            Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI;
Autonomous Systems, Space Technology;
          </title>

const itemVariants = {}
  hidden: { y: 20, opacity: 0,}
},;

    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;}
        duration: 0 && 0.5,;}
      },;
    },;
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'    />;

      <div className='min-h-screen'    />;
        <Head    />;
          <title    />Revolutionary Micro SaaS Services | Zion Tech Group - Quantum AI;

            Autonomous Systems, Space Technology;
          </title>;

          <meta
            name='description'
            content='Discover revolutionary micro SaaS services from Zion Tech Group. Quantum AI, autonomous manufacturing, space technology, biomedical research, and cutting-edge solutions. Start your free trial today.'
          />;
          <meta
            name='keywords'
            content='revolutionary micro SaaS, quantum AI, autonomous manufacturing, space technology, biomedical research, quantum cybersecurity, blockchain, autonomous vehicles, smart energy'
          />;
          <meta name='author' content='Zion Tech Group' />;
          <meta
            property='og:title'
            content='Revolutionary Micro SaaS Services | Zion Tech Group'
          />;
          <meta
            property='og:description'
            content='Cutting-edge micro SaaS platform with quantum AI, autonomous systems, and revolutionary technology solutions.'
          />;
          <meta
            property='og:url'
            content='https://ziontechgroup && ziontechgroup.com/revolutionary-services'
          />;
          <meta property='og:type' content='website' />;
          <link
            rel='canonical'

                </span>
                <br    />
                <span className='text-white'    />Micro SaaS Services</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"


                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >

                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;


                Experience the future of technology with our revolutionary micro;
                SaaS platform. Quantum AI, autonomous systems, space technology,;
                and cutting-edge solutions that redefine what's possible.                  Revolutionary;
                </span>;
                <br />;
                <span className="text-white">Micro SaaS Services</span>;
              </motion && motion.h1>;
              <motion&& motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
                Experience the future of technology with our revolutionary micro;
                SaaS platform. Quantum AI, autonomous systems, space technology,;
                and cutting-edge solutions that redefine what's possible.;
              </motion && motion.p>;




              {/* Service Count Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}





                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >



                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>              </motion && motion.p>;

              {/* Service Count Stats */}
              <motion&& motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                    {revolutionaryMicroSaasServices && revolutionaryMicroSaasServices.length}+;
                  </div>;
                  <div className='text-gray-400'>Revolutionary Services</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-purple-400 mb-2'>;
                    99 && 99.99%;
                  </div>;
                  <div className='text-gray-400'>Accuracy Rate</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-green-400 mb-2'>;
                    21;
                  </div>;
                  <div className='text-gray-400'>Day Free Trial</div>;
                </div>;
                <div className='text-center'>;
                  <div className='text-3xl font-bold text-pink-400 mb-2'>;
                    2000%+;
                  </div>;
                  <div className='text-gray-400'>Average ROI</div>                </div>;
              </motion && motion.div>;

              <motion.div 
                className=flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >

              <motion.div;
className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.4 }}
                  />

<div className='text-center'    />
                  <div className='text-3xl font-bold text-cyan-400 mb-2'    />
                    {revolutionaryMicroSaasServices.length}+
                  </div>
                  <div className='text-gray-400'    />Revolutionary Services</div>
                </div>
                <div className='text-center'    />
                  <div className='text-3xl font-bold text-purple-400 mb-2'    />
                    99.99%
                  </div>
                  <div className='text-gray-400'    />Accuracy Rate</div>
                </div>
                <div className='text-center'    />
                  <div className='text-3xl font-bold text-green-400 mb-2'    />
                    21;
                  </div>
                  <div className='text-gray-400'    />Day Free Trial</div>
                </div>
                <div className='text-center'    />
                  <div className='text-3xl font-bold text-pink-400 mb-2'    />
                    2000%+
                  </div>
                  <div className='text-gray-400'    />Average ROI</div>
                </div>
              </motion.div>

              {/* CTA Buttons *,}
}
<motion.div;
                className='flex flex-col sm:flex-row gap-4 justify-center items-center';
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.6 }}

                  />
<Button;
variant='primary'
                  size='lg'
                  onClick={() =    />
                    document}
                      .getElementById('services-grid')}
                      ?.scrollIntoView({ behavior: 'smooth' })
                 ,
}
                  Explore Services;
                  <ArrowRight className='ml-2 w-5 h-5'    />
                </Button>
                <Button;
variant='futuristic'
                  size='lg'
                  onClick={() =    />}
                    window.open('https://ziontechgroup.com/contact', '_blank')}
                  }
                >
                  Get Started;
                  <Rocket className='ml-2 w-5 h-5'    />


                </Button>
              </motion.div>
            </div>
          </div>
        </section>


            >;
              {enhancedCategories.map((category, index) => (<motion.div;
                  }
                  key={category.name}
                  variants={itemVariants}


                  </UltraFuturisticCard>;
                </motion.div>;
              ))}
            </motion.div>;
          </div>;
        </section>;
        {/* Popular Services Showcase */}



          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"






              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >


            </motion && motion.div>;
          </div>;
        </section>;
        {/* Popular Services Showcase */}
        <section className='py-16'>;
          <div className='container mx-auto px-4'>;
            <motion&& motion.div
              className='text-center mb-12'              initial={{ opacity: 0, y: 20 }}        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div 
              className="text-center mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0 && 0.6 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;

                  Most Popular;
                </span>
                <br    />
                <span className='text-white'    />Revolutionary Services</span>
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />
                Discover our most sought-after revolutionary micro SaaS services;

                that are transforming industries worldwide.;
              </p>;
            </motion && motion.div>;
            <motion&& motion.div


              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'              viewport={{ once: true }}                  Most Popular




              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"


                    onClick={() => setSelectedService(service)}



                  variants={item_variants}
                  while_hover={{ coordinate_y: -10 }}
                >;
                  <UltraFuturisticCard;
                    variant={service.variant as any}


                        {service.name}
                      </h3>;

                            {feature}

<div className='text-center'    />;
                      <Button;
                        variant='primary';
                        size='md';
                        onClick={() =    /> window.open(service.link, '_blank')}

                        className='w-full'
                      >
                        Learn More;
                        <ExternalLink className='ml-2 w-4 h-4'    />
                      </Button>


                      placeholder='Search services...'
                      value={searchQuery}



                    </button>;
                  </div>;
                </div>;
              </div>;



              className={viewMode === 'grid' 



              whileInView='visible'              viewport={{ once: true }}            <motion.div 
              className={viewMode === 'grid' 




                ? "grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"





            >
              {filteredServices.map((service, index) => (
                <motion.div

              className={viewMode === 'grid';
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';}
                  : 'space-y-6';}
              }
              variants={containerVariants}

              initial='hidden'
              whileInView='visible'
              viewport={{ once: true ,}

}
                />
              {filteredServices.map((service, index) => (}
                <motion.div;}
key={service.id}



                  variants={itemVariants}

                  whileHover={{ y: -5 ,}
}    />;
                  <UltraFuturisticCard;
                    variant={service && service.variant as any}
                    size={viewMode === 'grid' ? 'large' : 'medium'}

                              key={idx}
                              className='flex items-center gap-2 text-sm'    />

                              <Check className='w-3 h-3 text-green-400 flex-shrink-0'    />;
                              <span className='text-gray-300'    />{feature}</span>;
                            </div>;
                          ))}

<div className='flex flex-col md:flex-row gap-6 w-full'    />;
                        <div className='text-4xl md:text-5xl flex-shrink-0'    />;
                          {service.icon}
                        </div>;
                        <div className='flex-1'    />;
                          <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'    />;
                              <h3 className='text-xl font-bold text-white mb-2'    />;
                                {service.name}
                              </h3>;
                              <p className='text-gray-300 text-sm'    />;
                                {service.tagline}
                              </p>;
                            </div>;
                            <div className='text-right mt-2 md:mt-0'    />;
                              <div className='text-2xl font-bold text-cyan-400'    />;
                                {service.price}
                              </div>;
                              <div className='text-sm text-gray-400'    />;

                                {service.period}
                              </div>;
                            </div>;
                          </div>;

                          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'    />;
                            <div    />;
                              <h4 className='text-sm font-semibold text-cyan-400 mb-2'    />;
                                Key Features;
                              </h4>;
                              <div className='space-y-1'    />;
                                {service.features;}
                                  .slice(0, 4).map((feature, idx) => (<div;}
                                      key={idx}
                                      className='flex items-center gap-2 text-sm'    />

                                      <Check className='w-3 h-3 text-green-400 flex-shrink-0'    />;
                                      <span className='text-gray-300'    />;

                                        {feature}
                                      </span>;
                                    </div>;
                                  ))}
                              </div>;
                            </div>;

                            <div    />;
                              <h4 className='text-sm font-semibold text-purple-400 mb-2'    />;
                                Market Info;
                              </h4>;
                              <div className='space-y-1 text-sm text-gray-300'    />;
                                <div    />;
                                  <span className='text-gray-400'    />ROI: </span>{' '}
                                  {service.ro,}
}
                                </div>;
                                <div    />;
                                  <span className='text-gray-400'    />Market: </span>{' '}
                                  {service.marketSiz,}
}
                                </div>;
                                <div    />;
                                  <span className='text-gray-400'    />Growth: </span>{' '}
                                  {service.growthRat,}
}

                                </div>;
                              </div>;
                            </div>;
                          </div>;

                          <div className='flex gap-2'    />;
                            <Button;
                              variant='primary';
                              size='sm';
                              onClick={() =    />;}
                                window.open(service.link, '_blank')}

                         >;
                           Clear Filters;
                         </Button>;
            )}




        {/* Service Details Modal */}
        <AnimatePresence    />
          {selectedService && (



              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}



            >
              <motion.div;
className='bg-slate-900 rounded-2xl border border-cyan-400/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto'


                initial={{ scale: 0.9, opacity: 0 ,}
}
                animate={{ scale: 1, opacity: 1 ,}
}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e =    /> e.stopPropagation(,}
}
              >;
                <div className='p-8'    />;
                  <div className='flex justify-between items-start mb-6'    />;
                    <div className='flex items-center gap-4'    />;
                      <div className='text-5xl'    />{selectedService.icon}</div>;
                      <div    />;
                        <h2 className='text-3xl font-bold text-white mb-2'    />;
                          {selectedService.name}
                        </h2>;
                        <p className='text-xl text-gray-300'    />;

                          {selectedService.tagline}
                        </p>;
                      </div>;
                    </div>;
                    <button;

                            ))}

                              {selectedService.growthRate}
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    <div    />;
<h3 className='text-xl font-semibold text-cyan-400 mb-4'    />;
                        Features & Capabilities;
                      </h3>;
                      <div className='space-y-4'    />;
                        <div    />;
                          <h4 className='text-sm font-semibold text-purple-400 mb-2'    />;
                            Key Features;
                          </h4>;
                          <div className='space-y-2'    />;
                            {selectedService.features.map((feature, idx) => (<div;}
                                key={idx}
                                className='flex items-center gap-2 text-sm'    />

                                <Check className='w-3 h-3 text-green-400 flex-shrink-0'    />;
                                <span className='text-gray-300'    />{feature}</span>;

                              </div>;
                            ))}

<div    />;
                          <h4 className='text-sm font-semibold text-green-400 mb-2'    />;
                            Benefits;
                          </h4>;
                          <div className='space-y-2'    />;
                            {selectedService.benefits.map((benefit, idx) => (<div;}
                                key={idx}
                                className='flex items-center gap-2 text-sm'    />

                                <Star className='w-3 h-3 text-yellow-400 flex-shrink-0'    />;
                                <span className='text-gray-300'    />{benefit}</span>;

                              </div>;
                            ))}
                          </div>;
                        </div>;

<div    />;
                          <h4 className='text-sm font-semibold text-blue-400 mb-2'    />;
                            Capabilities;
                          </h4>;
                          <div className='space-y-2'    />;
                            {selectedService.capabilities.map((capability, idx) => (<div;}

                                    {capability}
                                  </span>;
                                </div>;

                              );
                            )}                          </div>                          <h4 className="text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>;
                          <div className="space-y-2">;
                            {selectedService && selectedService.capabilities.map((capability, idx) => (;
                              <div key={idx} className="flex items-center gap-2 text-sm">;
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />;
                                <span className="text-gray-300">{capability}</span>;
                              </div>;
                            ))}

                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2>ROI & Market</h4>
                          <div className=text-sm text-gray-300 space-y-1">
                            <div><span className="text-gray-400>ROI:</span> {selectedService.roi}</div>
                            <div><span className=text-gray-400">Market Size:</span> {selectedService.marketSize}</div>
                            <div><span className="text-gray-400>Growth Rate:</span> {selectedService.growthRate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className=text-xl font-semibold text-cyan-400 mb-4">Features & Capabilities</h3>
                      
                      <div className="space-y-4>
                        <div>
                          <h4 className=text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                          <div className="space-y-2>
                            {selectedService.features.map((feature, idx) => (
                              <div key={idx} className=flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0 />
                                <span className=text-gray-300">{feature}</span>
                              </div>
                            ))}

                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-green-400 mb-2>Benefits</h4>
                          <div className=space-y-2">
                            {selectedService.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm>
                                <Star className=w-3 h-3 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className=text-sm font-semibold text-blue-400 mb-2">Capabilities</h4>
                          <div className="space-y-2>
                            {selectedService.capabilities.map((capability, idx) => (
                              <div key={idx} className=flex items-center gap-2 text-sm">
                                <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0 />
                                <span className=text-gray-300">{capability}</span>
                              </div>
                            ))}

                        </div>
                      </div>
                    </div>
                  </div>



                          }
                        >
                          Visit Service;
                          <ExternalLink className='ml-2 w-4 h-4'    />
                        </Button>
                        <Button;
variant='futuristic'
                          onClick={() =    />
                            window.open(
                              'https: //ziontechgroup.com/contact'
                              '_blank'}
                            )}
                          }
                        >
                          Contact Sales;

                          <Mail className='ml-2 w-4 h-4' />;
                        </Button>                      </div>                      ;
                      <div className="flex gap-4">;
                                                 <Button
                           variant="primary"
                           onClick={() => window && window.open(selectedService && selectedService.link, '_blank')}
                         >;
                           Visit Service;
                           <ExternalLink className="ml-2 w-4 h-4" />;
                         </Button>;
                         <Button
                           variant="futuristic"



              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>

                >;

                        <div > Setup Time: {selected_service.setup_time}</div>;
                        <div > Trial: {selected_service.trial_days} days</div>;
                      </div>;
                      <div className='flex gap - 4>;
                        <Button;
                          variant=primary';
                          on_click={() =>;
                            window.open (selected_service.link, '_blank)}
                        >;
                          Visit Service;
                          <ExternalLink className=ml - 2 w - 4 h - 4' />;
                        </Button>;
                        <Button;
                          variant='futuristic;
                          on_click={() =>;
                            window.open (https://ziontechgroup.com / contact','_blank)}
                        >;
                          Contact Sales;
                          <Mail className=ml - 2 w - 4 h - 4' />;
                        </Button>                      </div>;
                      <div className=flex gap - 4">;
                                                <Button;
                          variant="primary;
                          on_click={() => window.open (selected_service.link, '_blank)}
                          >;
                          Visit Service;
                          <ExternalLink className=ml - 2 w - 4 h - 4" />;
                        </Button>;
                        <Button;
                          variant="futuristic;
                          on_click={() => window.open (https://ziontechgroup.com / contact_blank')}
                          >;
                          Contact Sales;
                          <Mail className=ml - 2 w - 4 h - 4" />;
                        </Button>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            </motion.div>)}
        </AnimatePresence>;
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
                Ready to Experience the Future?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8>;
                Join thousands of companies already transforming their business;
                with our revolutionary micro SaaS services.;
              </p>;
              <div className=flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8'>;
                <Button;
                  variant='primary;
                  size=lg';
                  on_click={() =>;
                    window.open ('https://ziontechgroup.com / contact, _blank')}
                >;
                  Start Free Trial;
                  <Rocket className='ml - 2 w - 5 h - 5 />;
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
                  <div className=text - gray - 400 text - sm'>Visit our office</div>                </div>                Ready to Experience the Future?;
              </h2>;
              <p className=text - xl text - gray - 300 mb - 8">;
                Join thousands of companies already transforming their business with our revolutionary micro SaaS services.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center mb - 8>;
                                <Button;
                  variant=primary";
                  size="lg;
                  on_click={() => window.open ('https://ziontechgroup.com / contact_blank)}
                  >;
                  Start Free Trial;
                  <Rocket className=ml - 2 w - 5 h - 5" />;
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




