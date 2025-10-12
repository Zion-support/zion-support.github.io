  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible] = useState(true);
  
  ];
  currentContent = content[currentSlide];
    
      setCurrentSlide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [content.length]);
  // Removed unused handleClose function
  if (!isVisible) return null;
    <section className="relativ e min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolut e inset-0">
        <div className="absolut e top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        
        ></div>
        
        ></div>
      <div className="relativ e z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="tex t-center mb-16">
          <div className="fle x items-center justify-center gap-3 mb-6">
            <span className="tex t-2xl">🚀</span>
            <span className="tex t-cyan-400 font-bold text-xl">
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025
            </span>
            <span className='text-2xl'>⚡</span>
          </div>
          <h1 className="tex t-4xl md:text-6xl font-extrabold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="tex t-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {currentContent.description}
          </p>
        </div>
          <div className="fle x flex-col sm:flex-row gap-6 justify-center mb-16">
            
            >
              Get Started Today
              <svg className="m l-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                
                />
              </svg>
            </a>
            
            >
              Schedule Consultation
            </a>
          </div>
          {/* Key Benefits Grid */}
          <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="b g-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-1 6 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                
                >
                  
                  />
                </svg>
              </div>
            {/* Metrics Grid */}
            <div className="gri d grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div key={key} className="tex t-center bg-white/5 rounded-xl p-4">
                  <div className="tex t-3xl font-bold text-cyan-400 mb-2">{value}</div>
                  <div className="tex t-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
              ))}
            </div>
            {/* Tags */}
            <div className="fle x flex-wrap gap-2 mb-8">
                
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="fle x flex-col sm:flex-row items-center justify-center gap-6">
              
              >
                <span className="tex t-xl">📖</span>
                <span>Read {currentContent.type}</span>
                <span className="grou p-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              >
                <span className="tex t-xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          {/* Slide Indicators */}
          <div className="fle x justify-center mt-8 space-x-2">
              
                onClick={() => setCurrentSlide(index)}
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        {/* Stats Section */}
        <div className="m t-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            <div key={index} className="tex t-center">
              <div className="tex t-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="tex t-gray-300">{stat.label}</div>
          ))}
        </div>
    </section>
  );
};
export default UltimateBusinessIntelligence2025Banner;
