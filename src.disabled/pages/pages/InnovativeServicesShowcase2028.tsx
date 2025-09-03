/>;

export default function InnovativeServicesShowcase2028(...args: unknown[]): unknown {};
},;
        {};
},;
        {};
}
      ];,
},;
    {};
},;
        {};
},;
        {};
}
      ];,
},;
    {};
},;
        {};
},;
        {};
}
      ];,
},;
    {};
},;
        {};
},;
        {};
}
      ];,
},;
    {};
},;
        {};
}
      ];,
},;
    {};
}
      ];,
}
  ];
;
  const contactInfo = {};
};
;
  const filteredServices = serviceCategories.flatMap(category => ;
    category.services.filter(service => ;
      (activeCategory === 'all' || service.category === activeCategory) &&;
      (searchQuery === '' || ;
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchQuery.toLowerCase()));
    );
  );
;
  const containerVariants = {};
    hidden: { opacity: 0 },;
    visible: {};
}
    }
  };
;
  const itemVariants = {};
    hidden: { opacity: 0, y: 20 },;
    visible: {};
      transition: { duration: 0.6 }
    }
  }
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">;
      <div>Broken JSX</div>
      />;

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>        <div className="container mx-auto px-4 relative z-10">;
          <div>Broken JSX</div>
            className="text-center max-w-4xl mx-auto"">"";
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">";
              2028 Innovative Services"";
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                {' '}
                Showcase;
              </span>";
            </h1>"";
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">;
              Discover our comprehensive portfolio of AI services, micro SAAS;
              solutions, IT infrastructure, and cutting-edge technologies. Real;
              market prices, proven ROI, and expert implementation.";
            </p>"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <div>Broken JSX</div>
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">;
                Get Started Today;
              </Link>";
              <div>Broken JSX</div>
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">";
                <Play className="w-5 h-5 inline mr-2"  />;
                Schedule Demo;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
";
      {/* Search and Filter */}"";
      <section className="py-8 bg-slate-800/30">"";
        <div className="container mx-auto px-4">"";
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">";
            {/* Search */}"";
            <div className="relative flex-1 max-w-md">";
              <div>Broken JSX</div>
                onChange={e => setSearchQuery(e.target.value)}"";
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"";
              />"";
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />            </div>;
";
            {/* Category Filter */}"";
            <div className="flex flex-wrap gap-2">';
              <div>Broken JSX</div>
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${}
';
'';
'''`;
                  activeCategory === 'all''''`'`;
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'''`'`'`;
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'````}`}
              >;
                All Services;
              </button>;
              {};
                  onClick={() => setActiveCategory(category.id)}``;
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${}
';
'';
'''`;
                    activeCategory === category.id'''`'`;
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'''`'`'`;
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'````}`}
                >;
                  {category.name}
                </button>) ) }
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Services Grid */}"";
      <section className="py-20">"";
        <div className="container mx-auto px-4">";
          <div>Broken JSX</div>
            className="text-center mb-16">";
            {};
              <motion.div key={index} variants={itemVariants} className="group">"";
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">";
                  {/* Header */}"";
                  <div className="flex items-start justify-between mb-6">`;
                    <div>Broken JSX</div>
                      className={`w-16 h-16 bg-gradient-to-br ${serviceCategories.find(cat => cat.id === service.category)?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}">"";
                      <service.icon className="w-8 h-8 text-white" />;
                    </div>;
                    {};
                        {service.badge}
                      </span>) }
                  </div>;
";
                  {/* Content */}"";
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">;
                    {service.name}
                  </h3>";
"";
                  <p className="text-slate-300 mb-6 leading-relaxed">;
                    {service.description}
                  </p>;
";
                  {/* Pricing */}"";
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">"";
                    <div className="flex items-center justify-between mb-2">"";
                      <span className="text-slate-400 text-sm">Our Price:</span>"";
                      <span className="text-2xl font-bold text-cyan-400">;
                        {service.price}
                      </span>";
                    </div>"";
                    <div className="flex items-center justify-between">"";
                      <span className="text-slate-400 text-sm">;
                        Market Price:";
                      </span>"";
                      <span className="text-slate-300 text-sm line-through">;
                        {service.marketPrice}
                      </span>;
                    </div>;
                  </div>;
";
                  {/* Features */}"";
                  <div className="space-y-2 mb-6">"";
                    <h4 className="font-semibold text-cyan-400 mb-3">;
                      Key Features: unknown;
                    </h4>;
                    {};
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"  />                        {feature}
                      </div>) ) }
                  </div>;
";
                  {/* Benefits */}"";
                  <div className="space-y-2 mb-6">"";
                    <h4 className="font-semibold text-green-400 mb-3">;
                      Business Benefits: unknown;
                    </h4>;
                    {};
                        <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />                        {benefit}
                      </div>) ) }
                  </div>;

                  {/* CTA */}";
                  <div>Broken JSX</div>
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">";
                    Get Started"";
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"  />                  </Link>;
                </div>;
                ";
                <div className="mb-6">";
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>";
                  <p className="text-gray-400 text-sm">14-day free trial included</p>;
                </div>;

                <div>Broken JSX</div>
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">;
                  Learn More";
                  <ArrowRight className="w-4 h-4 ml-2"  />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
";
      {/* Contact Section */}"";
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">"";
        <div className="container mx-auto px-4">;
          <div>Broken JSX</div>
            className="text-center mb-16"">"";
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?";
            </h2>"";
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Get expert consultation, custom pricing, and implementation;
              support. Our team is ready to help you choose the right solutions;
              for your business needs.;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
          </motion.div>;
";
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {};
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>";
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>;
                ";
                <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>;

                <div>Broken JSX</div>
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">;
                  Learn More";
                  <ArrowRight className="w-3 h-3 ml-1"  />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
";
      {/* Why Choose Us */}"";
      <section className="py-20">"";
        <div className="container mx-auto px-4">;
          <div>Broken JSX</div>
            className="text-center mb-16"">"";
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Choose Zion Tech Group?";
            </h2>"";
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              We deliver innovative solutions with proven ROI, expert support,;
              and competitive pricing.</p>;
          </motion.div>;
";
          <div>Broken JSX</div>
          >;
            {};
              {}
                icon: Award,';
                title: 'Proven Expertise',';
                description:'';
                  '500+ successful projects across industries with measurable results'},;
              {}
                icon: Zap,';
                title: 'Innovation First',';
                description:'';
                  'Cutting-edge technologies and methodologies for competitive advantage'},;
              {}
                icon: Shield,';
                title: 'Enterprise Security',';
                description:'';
                  'Bank-level security and compliance for enterprise-grade solutions'},;
              {}
                icon: Heart,';
                title: '24/7 Support',';
                description:'';
                  'Round-the-clock technical support and maintenance services'}
            ].map((item, index) => (;
              <div>Broken JSX</div>
                className="text-center"">"";
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"";
                  <item.icon className="w-10 h-10 text-white" />";
                </div>"";
                <h3 className="text-xl font-bold text-white mb-3">;
                  {item.title}";
                </h3>"";
                <p className="text-slate-300">{item.description}</p>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}


export { InnovativeServicesShowcase2028 }
export { InnovativeServicesShowcase2028 }
export { InnovativeServicesShowcase2028 }
export { InnovativeServicesShowcase2028 }
export { InnovativeServicesShowcase2028 }