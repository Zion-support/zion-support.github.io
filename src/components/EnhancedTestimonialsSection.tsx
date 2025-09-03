import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';
;
interface Testimonial {};
}
;
const testimonials: Testimonial[] = [{};
},;
  {};
},;
  {};
},;
  {};
},;
  {};
};,
}, []);, []);
    if(!isAutoPlaying) return;

      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length) }, 8000) ;

    return () => clearInterval(interval) }, [isAutoPlaying, testimonials.length]) ;

    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length) ;
    setIsAutoPlaying(false) }
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length) ;
    setIsAutoPlaying(false) };
                  animate = {};
}}
                  transition = {};
  repeat: Infinity }}
                >;
                  <Quote className="w-8 h-8 text-zion -cyan"  />                </motion.div>;
";
                <div className="relative z-10">;
                  {/* Rating */}";
                  <div className="flex items-center mb-6">;
                    {};
                    ))}
                  </div>;

                  {/* Content */}";
                  <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-medium">";
                    "{currentTestimonialData.content}";
                  </blockquote>;

                  {/* Results */}";
                  <div className="grid grid-cols-1 md: grid-cols-3 gap-4 mb-8">;
                    {};
                        <p className="text-zion-cyan font-semibold">{result}</p>;
                      </motion.div>;
                    ))}
                  </div>;

                  {/* Author Info */}";
                  <div className="flex items-center justify-between">;";
                    <div className="flex items-center space-x-4">";
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">";
                        <span className="text-white font-bold text-xl">;
                          {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                        </span>;
                      </div>;
                      <div>";
                        <h4 className="text-xl font-bold text-white">{currentTestimonialData.name}</h4>";
                        <p className="text-zion-cyan">{currentTestimonialData.position}</p>";
                        <p className="text-gray-300">{currentTestimonialData.comp}</p>";
                        <div className="flex items-center space-x-2 mt-1">";
                          <Building className="w-4 h-4 text-zion-cyan"  />"                          <span className="text-sm text-gray-400">{currentTestimonialData.industry}</span>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </AnimatePresence>;

          {/* Navigation Controls */}";
          <div className="flex items-center justify-center mt-12 space-x-4">;
            <div>Broken JSX</div>
              <ChevronLeft className="w-6 h-6 text-white"  />            </motion.button>;
";
            <div className="flex space-x-2">;
              {};
                  onClick={() => goToTestimonial(index)}
                  className={};
}`}
                  whileHover={{ scale: 1.2 }}
                />) ) }
            </div>;

            <div>Broken JSX</div>
              <ChevronRight className="w-6 h-6 text-white"  />            </motion.button>;
          </div>;
        </div>;

        {/* Trust Indicators */}
        <div>Broken JSX</div>
          <div className="text-center">;";
            <h3 className="text-2xl font-bold text-white mb-8">;
              Trusted by Industry Leaders;
            </h3>";
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8 max-w-4xl mx-auto">;
              {};
                { icon: Users, label: '500+ Clients', value: 'Global Reach' },;
                { icon: Award, label: '15+ Awards', value: 'Industry Recognition' },;
                { icon: Globe, label: '50+ Countries', value: 'Worldwide Service' },;
                { icon: Building, label: '99.9% Uptime', value: 'Reliability' }
              ].map((indicator, index) => (<div>Broken JSX</div>
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30">";
                    <indicator.icon className="w-8 h-8 text-zion-cyan" />;
                  </div>";
                  <div className="text-xl font-bold text-white mb-2">{indicator.label}</div>";
                  <div className="text-sm text-gray-400">{indicator.value}</div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </motion.div>;

        {/* Bottom CTA */}
        <div>Broken JSX</div>
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 max-w-4xl mx-auto">;";
            <h3 className="text-3xl font-bold text-white mb-4">;
              Ready to Join Our Success Stories?;
            </h3>";
            <p className="text-xl text-gray-300 mb-8">;
              Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions.</p>";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
              </a>;
              <div>Broken JSX</div>
              </a>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
'"`;
