import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
interface Service {};
}
;
export default function EnhancedServicesShowcase2025() {};
  return null;
}
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const categories = [;
    { id: 'all', name: 'All Services', icon: Star },;
    { id: 'ai-saas', name: 'AI SaaS', icon: Brain },;
    { id: 'cloud-saas', name: 'Cloud SaaS', icon: Cloud },;
    { id: 'security-saas', name: 'Security SaaS', icon: Shield },;
    { id: 'business-saas', name: 'Business SaaS', icon: Building }
  ];
;
  const filteredServices = services.filter(service => {};
});
;
  return (;
    <>;
      <Helmet>;
        <title>Enhanced Services Showcase 2025 - Zion Tech Group</title>;
        <meta name="description" content="Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Transform your business with cutting-edge solutions." />;
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, cloud services, cybersecurity, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />;
      </Helmet>;

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">;
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <div>Broken JSX</div>
            >;
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                Enhanced Services Showcase;
                <span className="text-zion-cyan"> 2025</span>;
              </h1>;
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
                Transform your business with our comprehensive portfolio of AI-powered micro SAAS services, ;
                cutting-edge IT solutions, and innovative technology services.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">;
                  Get Started Today;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <div>Broken JSX</div>
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                  View Pricing;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Search and Filter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
              {/* Search */}
              <div className="relative flex-1 max-w-md">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">;
                {};
                      onClick={() => setSelectedCategory(category.id)}
                      className={};
}`}
                    >;
                      <Icon className="w-4 h-4" />;
                      {category.name}
                    </button>;
                  )})}
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {};
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">;
                      <div className="p-3 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg">;
                        <Icon className="w-6 h-6 text-zion-cyan" />;
                      </div>;
                      <div className="flex gap-2">;
                        {};
                        )}
                        {};
                        )}
                      </div>;
                    </div>;

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>;
                    <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>;

                    {/* Price and Market Comparison */}
                    <div className="mb-4">;
                      <div className="flex items-center justify-between mb-2">;
                        <span className="text-zion-cyan font-semibold">Our Price:</span>;
                        <span className="text-white font-bold">{service.priceRange}</span>;
                      </div>;
                      <div className="flex items-center justify-between text-sm">;
                        <span className="text-zion-slate-light">Market Price:</span>;
                        <span className="text-zion-slate-light line-through">{service.marketPrice}</span>;
                      </div>;
                    </div>;

                    {/* Features */}
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>;
                      <ul className="space-y-1">;
                        {};
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">;
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />;
                            {feature}
                          </li>;
                        ))}
                      </ul>;
                    </div>;

                    {/* Benefits */}
                    <div className="mb-6">;
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>;
                      <ul className="space-y-1">;
                        {};
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">;
                            <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />;
                            {benefit}
                          </li>;
                        ))}
                      </ul>;
                    </div>;

                    {/* CTA Buttons */}
                    <div className="flex gap-2">;
                      <div>Broken JSX</div>
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-2 px-4 rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 text-sm font-medium">;
                        Get Started;
                      </Link>;
                      <div>Broken JSX</div>
                        className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 text-sm font-medium">;
                        Learn More;
                      </Link>;
                    </div>;
                  </motion.div>;
                )})}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">;
          <div className="max-w-4xl mx-auto text-center">;
            <div>Broken JSX</div>
            >;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-zion-slate-light mb-8">;
                Contact our team to discuss how our services can help you achieve your goals.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300">;
                  Contact Us;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <div>Broken JSX</div>
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                  Call +1 (302) 464-0950;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  )}