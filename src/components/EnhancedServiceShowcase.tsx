import {  import { motion, AnimatePresence  } from 'framer-motion';
;
export default function Page() {};
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
]}
      },;
      { threshold: 0.1 }
    );
;
    if(element) {};
      observer.observe(element)}
;
    return () => observer.disconnect()}, []);
;
      />;
    ))};
          i <div>Broken JSX</div>
      />;) ) };
  return ();
    <section id = "service-showcase" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">";
      <div className="max-w-7xl mx-auto px-6">;
        {/* Header */}
        <div>Broken JSX</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">;
              Services;
            </span>;
          </h2>";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
            Comprehensive technology solutions designed to drive your business forward with;
            cutting - edge AI, cybersecurity, and innovative digital transformation services.</p>;
        </motion.div>;

        {/* Category Filter */}
        <div>Broken JSX</div>
          {};
              onClick={() => setSelectedCategory(category)}`;
              className={};
}`}
;
              {category}
            </button>) ) }
        </motion.div>;

        {/* Services Grid */}
        <div>Broken JSX</div>
          <AnimatePresence mode="wait">;
            {};
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}";
                className="relative group";

                <Link to={service.link}>";
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-light p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 h-full">;
                    {/* Popular Badge */}
                    {};
                      </div>) }
;
                    {/* Service Icon */}`;
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;";
                      <service.icon className="w-8 h-8 text-white" />;
                    </div>;

                    {/* Service Info */}";
                    <div className="space-y-4">";
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">;
                        {service.title}
                      </h3>;
";
                      <p className="text-gray-400 leading-relaxed">;
                        {service.description}
                      </p>;

                      {/* Features */}";
                      <div className="space-y-2">;
                        {};
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">";
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"  />                            {feature}
                          </div>;
                        ))}
                        {};
                            +{service.features.length-3} more features;
                          </div>) }
                      </div>;

                      {/* Pricing & Rating */}";
                      <div className="flex items-center justify-between pt-4 border-t border-zion-slate">";
                        <div className="flex items-center space-x-2">";
                          <span className="text-2xl font-bold text-zion-cyan">{service.pricing}</span>;
                        </div>";
                        <div className="flex items-center space-x-2">";
                          <div className="flex items-center">;
                            {renderStars(service.rating)}
                          </div>";
                          <span className="text-sm text-gray-400">({service.reviews})</span>;
                        </div>;
                      </div>;

                      {/* CTA Button */}";
                      <div className="flex items-center justify-between pt-4">";
                        <span className="text-sm text-zion-cyan font-semibold">;
                          Learn More;
                        </span>";
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300"  />                      </div>;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>) ) }
          </AnimatePresence>;
        </motion.div>;

        {/* CTA Section */}
        <div>Broken JSX</div>
          <div className="bg-gradient-to-r from-zion-slate to-zion-slate-light border border-zion-cyan/20 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>";
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Let our expert team help you implement cutting-edge technology solutions;
              that drive real business results and competitive advantage.</p>";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                <Play className="w-5 h-5 mr-2"  />;
                Get Started Today;
              </Link>;
              <div>Broken JSX</div>
                <ArrowRight className="w-5 h-5 ml-2"  />              </Link>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) };
'"`;
