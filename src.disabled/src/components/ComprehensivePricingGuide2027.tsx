import {  import { innovativeServices2027 } from '../data/innovativeServices2027';

export default function Page() {;
    );

    if(element) {;
      observer.observe(element)}

    return () => observer.disconnect () }, []) ;

  // Combine all services;
  ;
      source: 'innovative',;
      category: service.category,;
      features: service.features || [],;
      ctaLabel: service.ctaLabel || 'Get Started',;
      href: service.href || '/contact'}) ) ;  ];

  // Filter services based on search and category;

                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch && matchesCategory && matchesPrice}) ;

  // Sort services;
  ;
    switch(sortBy) {};
        return 0}
  });

  ;
';
  phone: '+1 302 464 0950',';
    email: 'kleber@ziontechgroup.com',;  ;
  ;
  ;
  ;
  address: '364 E Main St STE 1008 Middletown DE 19709';
  ;

};
    if(numPrice < 100) return 'Low';
    if(numPrice < 1000) return 'Medium';
    return 'High'};
      default: return 'text-white'}
  };

      'Robotics & Automation': Cpu,;
      'AR/VR Solutions': Eye,;
      'Biotech Solutions': Dna,;
      'LegalTech Solutions': Scale,;
      'Real Estate Tech': Home,;
      'Supply Chain Solutions': Truck};    return iconMap[category] || Target};

  return (";
    <section id = "comprehensive-pricing-guide" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">;
      {/* Animated Background */}";
      <div className="absolute inset-0 overflow-hidden">";
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>";
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>;
      </div>;
";
      <div className="max-w-7xl mx-auto px-6 relative z-10">;
        {/* Header */}
        <div>Broken JSX</div>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full border border-zion-cyan/30 mb-6">";
            <Calculator className="w-5 h-5 text-zion-cyan mr-2"  />"            <span className="text-zion-cyan font-semibold">2027 Pricing Guide</span>;
          </div>;
";
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">";
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">;
              Comprehensive;
            </span>;
            <br />";
            <span className="text-white">Pricing & ROI Guide</span>;
          </h2>;
";
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Explore our complete portfolio of innovative services with transparent pricing,;
            detailed ROI analysis, and market insights to help you make informed decisions.</p>;
        </motion.div>;

        {/* Search and Filters */}
        <div>Broken JSX</div>
          <div className="bg-gradient-to-r from-zion-slate-light/50 to-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">";
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">;
              {/* Search */}";
              <div className="relative">";
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"  />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}";
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20";
                />;
              </div>;

              {/* Category Filter */}
              <div>Broken JSX</div>
                onChange={(e) => setSelectedCategory(e.target.value)}";
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white focus: outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20">;
                {};
                  <option key={category} value={category} className="bg-zion-slate-dark text-white">;
                    {category}
                  </option>) ) }
              </select>;

              {/* Price Range Filter */}
              <div>Broken JSX</div>
                onChange={(e) => setPriceRange(e.target.value)}";
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white focus: outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20">;
                {};
                  <option key={range} value={range} className="bg-zion-slate-dark text-white">;
                    {range}
                  </option>) ) }
              </select>;

              {/* Sort By */}
              <div>Broken JSX</div>
                onChange={(e) => setSortBy(e.target.value)}";
                className="px-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20";
";
                <option value="name" className="bg-zion-slate-dark text-white">Sort by Name</option>";
                <option value="price" className="bg-zion-slate-dark text-white">Sort by Price</option>";
                <option value="category" className="bg-zion-slate-dark text-white">Sort by Category</option>;
              </select>;
            </div>;

            {/* Results Count */}";
            <div className="mt-4 text-center">";
              <span className="text-zion-cyan font-semibold">;
                {filteredServices.length} services found;
              </span>;
              {};
                  for "{searchQuery}";
                </span>) }
            </div>;
          </div>;
        </motion.div>;

        {/* Services Grid */}
        <div>Broken JSX</div>
  delay: 0.4 }}"          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
          {};
                {/* Service Header */}";
                <div className="flex items-start justify-between mb-4">";
                  <div className="flex-1">";
                    <div className="flex items-center gap-2 mb-2">";
                      {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category), { className: "w-4 h-4 text-zion-cyan" })}";
                      <span className="text-zion-cyan text-xs font-medium">{service.category}</span>;
                    </div>";
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">;
                      {service.title}
                    </h3>";
                    <p className="text-gray-300 text-sm leading-relaxed">;
                      {service.description}
                    </p>;
                  </div>;
                </div>;

                {/* Features Preview */}
                {};
                      ))}
                      {};
                          +{service.features.length-3}
                        </span>) }
                    </div>;
                  </div>;) }

                {/* Pricing & Billing */}";
                <div className="mb-4">";
                  <div className="flex items-center justify-between">`;
                    <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>;
                      {service.price}
                    </div>";
                    <div className="text-gray-400 text-sm">;
                      {service.billing === 'month' && 'per month'}
                      {service.billing === 'project' && 'per project'}
                      {service.billing === 'hour' && 'per hour'}
                      {service.billing === 'year' && 'per year'}
                    </div>;
                  </div>;
                </div>;

                {/* Additional Info for Innovative Services */}
                {};
                      <div className="text-zion-cyan font-bold text-sm">{service.marketSize}</div>";
                      <div className="text-gray-400 text-xs">Market Size</div>;
                    </div>";
                    <div className="text-center">";
                      <div className="text-zion-purple font-bold text-sm">{service.roi}</div>";
                      <div className="text-gray-400 text-xs">ROI</div>;
                    </div>;
                  </div>) }

                {/* CTA Button */}
                <div>Broken JSX</div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"  />";
                  {service.external && <ExternalLink className="w-4 h-4"  />}                </a>;
              </div>;
            </motion.div>) ) }
        </motion.div>;

        {/* Contact Section */}
        <div>Broken JSX</div>
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8">;";
            <h3 className="text-3xl font-bold text-white mb-6">;
              Need Custom Pricing or Have Questions?;
            </h3>";
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our team of experts is ready to provide personalized quotes and answer any questions;
              about our services.Get in touch for a detailed consultation.</p>;
";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">";
                <Phone className="w-5 h-5"  />";
                <span className="font-semibold">{contactInfo.phone}</span>;
              </div>";
              <div className="flex items-center justify-center gap-3 text-zion-purple">";
                <Mail className="w-5 h-5"  />";
                <span className="font-semibold">{contactInfo.email}</span>;
              </div>";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">";
                <MapPin className="w-5 h-5"  />"                <span className="font-semibold text-center">{contactInfo.address}</span>;
              </div>;
            </div>;
";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                <ArrowRight className="w-4 h-4"  />              </a>;
              <div>Broken JSX</div>
                <ExternalLink className="w-4 h-4"  />              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) };
'"`;
