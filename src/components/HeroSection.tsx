import {  import { motion, AnimatePresence  } from 'framer-motion';
;
export default function Page() {};
  return null;
}
[]}
;
const heroSlides: HeroSlide[] = [  {};
      { label: 'Accuracy Rate', value: '95%+', icon: Target },;
      { label: 'ROI Increase', value: '450%', icon: TrendingUp },;
      { label: 'Market Growth', value: '280%', icon: Rocket },;
    ]},;
  {};
      { label: 'Uptime', value: '99.99%', icon: Target },;
      { label: 'Cost Savings', value: '700%', icon: TrendingUp },;
      {};
    setIsAutoPlaying(false)}, [memoizedSlides.length]);
;
    setCurrentSlide();
      prev => (prev - 1 + memoizedSlides.length) % memoizedSlides.length;
    );
    setIsAutoPlaying(false)}, [memoizedSlides.length]);
;
      setCurrentSlide(index);
      setIsAutoPlaying(false)},;
    [currentSlide];
  );
  // Auto-play functionality with pause on hover;
  useEffect(() => {};
};,
}, []);, []);
    if(!isAutoPlaying) return;
;
      setCurrentSlide(prev => (prev + 1) % memoizedSlides.length)}, 6000);
;
    return () => clearInterval(interval) }, [isAutoPlaying, memoizedSlides.length]) ;
;
  // Handle keyboard navigation;
  useEffect(() => {};
};,
}, []);, []);
    ;
      if(e.key === 'ArrowRight') nextSlide();
      if(e.key === ' ') {};
        setIsAutoPlaying(!isAutoPlaying)}
    };
;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)}, [prevSlide, nextSlide, isAutoPlaying]);
;
  // Handle image loading;
  useEffect(() => {};
};,
}, []);, []);
    ;
          img.onload = resolve;
          img.onerror = resolve;
          img.src = slide.image}) }) ;
;
      await Promise.all(imagePromises) ;
      setIsLoading(false) };
;
    preloadImages () }, [memoizedSlides]) ;
;
  if(isLoading) {};
      </div>) }
  return (";
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Background Pattern */}";
      <div className="absolute inset-0 opacity-10">";
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />";
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />;
      </div>;

      {/* Hero Content */}";
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">";
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">;
          {/* Text Content */}
          <div>Broken JSX</div>
            className="space-y-8">";
            <div className="space-y-4">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">";
                <Star className="w-4 h-4 mr-2 text-yellow-400"  />                Leading Technology Solutions;
              </motion.div>;

              <div>Broken JSX</div>
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">";
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                  {currentSlideData.title}
                </span>;
              </motion.h1>;

              <div>Broken JSX</div>
                className="text-xl text-slate-300 leading-relaxed">;
                {currentSlideData.subtitle}
              </motion.p>;

              <div>Broken JSX</div>
                className="text-lg text-slate-400 leading-relaxed">;
                {currentSlideData.description}
              </motion.p>;
            </div>;

            {/* Features */}
            <div>Broken JSX</div>
              className="grid grid-cols-2 gap-3">;
              {};
                <div key={feature} className="flex items-center space-x-2">";
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0"  />"                  <span className="text-slate-300 text-sm">{feature}</span>;
                </div>;
              ))}
            </motion.div>;

            {/* CTA Button */}
            <div>Broken JSX</div>
              className="flex flex-col sm:flex-row gap-4">;
              <div>Broken JSX</div>
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">;
                {currentSlideData.cta}";
                <ArrowRight className="w-5 h-5 ml-2"  />              </Link>;

              <div>Broken JSX</div>
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}";
                className="inline-flex items-center justify-center px-6 py-4 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-lg transition-all duration-300";
                aria-label={};
}
              >;
                {};
                )}              </button>;
            </motion.div>;

            {/* Stats */}
            <div>Broken JSX</div>
              className="grid grid-cols-3 gap-6 pt-8">;
              {};
                <div key={stat.label} className="text-center">";
                  <div className="text-2xl font-bold text-cyan-400 mb-1">;
                    {stat.value}
                  </div>";
                  <div className="text-sm text-slate-400">{stat.label}</div>;
                </div>;
              ))}
            </motion.div>;
          </motion.div>;

          {/* Visual Content */}
          <div>Broken JSX</div>
            className="relative">";
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-8">;
              <div>Broken JSX</div>
              >";
                <currentSlideData.icon className="w-12 h-12 text-white" />;
              </div>;
";
              <div className="text-center space-y-4">";
                <h3 className="text-2xl font-bold text-white">;
                  {currentSlideData.title}
                </h3>";
                <p className="text-slate-300">{currentSlideData.subtitle}</p>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </div>;

      {/* Navigation Controls */}";
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">";
        <div className="flex space-x-2">;
          {};
              onClick={() => goToSlide(index)}`;
              className={};
}`}`;
              aria-label={`Go to slide ${index + 1}`}
            />;
          ))}
        </div>;
      </div>;

      {/* Arrow Navigation */}
      <div>Broken JSX</div>
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">";
        <ChevronLeft className="w-6 h-6"  />      </button>;

      <div>Broken JSX</div>
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/70 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">";
        <ChevronRight className="w-6 h-6"  />;
      </button>;
    </section>) }
export { HeroSection };
'"`;
