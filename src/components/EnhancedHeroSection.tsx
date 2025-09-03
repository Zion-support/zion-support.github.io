import { Link  } from 'react-router-dom';
;
export default function Page() {};
  return null;
}
        { label: "Accuracy Rate", value: "95%+", icon: Target },";
        { label: "ROI Increase", value: "450%", icon: TrendingUp },";
        { label: "Market Growth", value: "280%", icon: Rocket }
      ];,
},;
    {};
        { label: "Uptime", value: "99.99%", icon: Target },";
        { label: "Cost Savings", value: "700%", icon: TrendingUp },";
        {};
};,
}, []);, []);
    if(!isAutoPlaying) return;
;
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length) }, 6000) ;
    return () => clearInterval(interval) }, [isAutoPlaying, heroSlides.length]) ;
;
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length) ;
    setIsAutoPlaying(false) };
;
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length) ;
    setIsAutoPlaying(false) };
            scale: [1, 1.1, 1];,
}}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>;

        {/* Floating particles */}
        {};
        ))}
      </div>;

      {/* Hero content */}";
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">;";
        <div className="grid lg:grid-cols-2 gap-12 items-center">;
          {/* Left content */}
          <div>Broken JSX</div>
            <AnimatePresence mode="wait">;
              <div>Broken JSX</div>
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} bg-opacity-20 border border-zion-cyan/30`}>";
                    <currentSlideData.icon className="w-8 h-8 text-white" />;
                  </div>";
                  <span className="ml-3 text-zion-cyan font-medium bg-zion-cyan/10 px-3 py-1 rounded-full">Featured Service</span>;
                </motion.div>;

                {/* Title */}";
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">;
                  {currentSlideData.title}
                </h1>;

                {/* Subtitle */}";
                <p className="text-xl sm:text-2xl text-zion-cyan font-semibold mb-4">;
                  {currentSlideData.subtitle}
                </p>;

                {/* Description */}";
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">;
                  {currentSlideData.description}
                </p>;

                {/* Features */}";
                <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">;
                  {};
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"  />                      {feature}
                    </motion.div>;) ) }
                </div>;

                {/* CTA Button */}
                <div>Broken JSX</div>
                    <ArrowRight className="ml-2 w-5 h-5"  />;
                  </Link>";
                  <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm">";
                    <Play className="mr-2 w-5 h-5"  />                    Watch Demo;
                  </button>;
                </motion.div>;
              </motion.div>;
            </AnimatePresence>;
          </motion.div>;

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
        <AnimatePresence mode="wait">;
          <div>Broken JSX</div>
            <div className="relative">;
              <div>Broken JSX</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>";
                <div className="absolute inset-0 flex items-center justify-center">";
                  <div className="text-center text-white">;
                    <div>Broken JSX</div>
                    >";
                      <currentSlideData.icon className="w-12 h-12 text-zion-cyan" />;
                    </motion.div>";
                    <p className="text-lg font-medium">Visual Representation</p>;
                  </div>;
                </div>;
              </motion.div>;
            </div>;

            {/* Enhanced floating stats cards */}";
            <div className="absolute -bottom-6 -left-6 space-y-4">;
              {};
                      <p className="text-xl font-bold text-white">{stat.value}</p>";
                      <p className="text-xs text-gray-300">{stat.label}</p>;
                    </div>;
                  </div>;
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>;
                  <div className="text-sm text-gray-400">{stat.label}</div>;
                </motion.div>;
              ))}
            </motion.div>;

            {/* CTA Button */}
            <div>Broken JSX</div>
              <div className="flex items-center space-x-4">;";
                <div className="p-3 bg-zion-cyan/20 rounded-xl">";
                  <Star className="w-6 h-6 text-zion-cyan"  />                </div>;
                <div>";
                  <p className="text-2xl font-bold text-white">4.9/5</p>";
                  <p className="text-sm text-gray-300">Client Rating</p>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        </div>;

        {/* Enhanced slide navigation */}";
        <div className="flex items-center justify-center mt-16 space-x-4">;
          <div>Broken JSX</div>
            <ChevronLeft className="w-6 h-6 text-white"  />          </motion.button>;
";
          <div className="flex space-x-2">;
            {};
                onClick={() => goToSlide(index)}`;
                className={};
}`}
                whileHover={{ scale: 1.2 }}
              />) ) }
          </div>;

          <div>Broken JSX</div>
            <ChevronRight className="w-6 h-6 text-white"  />          </motion.button>;
        </div>;
      </div>;

      {/* Floating Elements */}
      <div>Broken JSX</div>
  repeat: Infinity }}"          className="w-6 h-10 border-2 border-zion-cyan/50 rounded-full flex justify-center cursor-pointer hover:border-zion-cyan transition-colors duration-300">;
          <div>Broken JSX</div>
          />;
        </motion.div>;";
        <p className="text-xs text-zion-cyan/70 text-center mt-2">Scroll to explore</p>;
      </motion.div>;
    </section>;) }
}) ;
export default EnhancedHeroSection;
'"`;
