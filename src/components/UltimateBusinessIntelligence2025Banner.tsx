  const [current Slide, set Current Slide] = use State(0);
  const [is Visible] = use State(true);
  
  ];
  const current Content = content[current Slide];
    
      set Current Slide((prev) => (prev + 1) % content.length);
    }, 5000);
    return () => clear Interval(timer);
  }, [content.length]);
  // Removed unused handle Close function
  if (!is Visible) return null;
    <s ection class Name="r elative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <d iv class Name="a bsolute inset-0">
        <d iv class Name="a bsolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></d iv>
        
        ></d iv>
        
        ></d iv>
      <d iv class Name="r elative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <d iv class Name="t ext-center mb-16">
          <d iv class Name="f lex items-center justify-center gap-3 mb-6">
            <s pan class Name="t ext-2xl">🚀</s pan>
            <s pan class Name="t ext-cyan-400 font-bold text-xl">
              B RE AK IN G: U LT IM AT E B US IN ES S I NT EL LI GE NC E R EV OL UT IO N 2025
            </s pan>
            <s pan class Name='text-2xl'>⚡</s pan>
          </d iv>
          <h1 c lass Name="t ext-4xl md:text-6xl font-extrabold text-white mb-6">
            {current Content.title}
          </h1>
          <p c lass Name="t ext-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {current Content.description}
          </p>
        </d iv>
          <d iv class Name="f lex flex-col sm:flex-row gap-6 justify-center mb-16">
            
            >
              Get Started Today
              <s vg class Name="m l-3 w-6 h-6" fill="none" stroke="current Color" view Box="0 0 24 24">
                
                />
              </s vg>
            </a>
            
            >
              Schedule Consultation
            </a>
          </d iv>
          {/* Key Benefits Grid */}
          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <d iv class Name="b g-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <d iv class Name="w-16 h-16 b g-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                
                >
                  
                  />
                </s vg>
              </d iv>
            {/* Metrics Grid */}
            <d iv class Name="g rid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <d iv key={key} class Name="t ext-center bg-white/5 rounded-xl p-4">
                  <d iv class Name="t ext-3xl font-bold text-cyan-400 mb-2">{value}</d iv>
                  <d iv class Name="t ext-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </d iv>
              ))}
            </d iv>
            {/* Tags */}
            <d iv class Name="f lex flex-wrap gap-2 mb-8">
                
                >
                  {tag}
                </s pan>
              ))}
            </d iv>
            {/* C TA Buttons */}
            <d iv class Name="f lex flex-col sm:flex-row items-center justify-center gap-6">
              
              >
                <s pan class Name="t ext-xl">📖</s pan>
                <s pan>Read {current Content.type}</s pan>
                <s pan class Name="g roup-hover:translate-x-1 transition-transform">→</s pan>
              </a>
              
              >
                <s pan class Name="t ext-xl">📞</s pan>
                <s pan>Call +1 302 464 0950</s pan>
              </a>
            </d iv>
          {/* Slide Indicators */}
          <d iv class Name="f lex justify-center mt-8 space-x-2">
              
                on Click={() => set Current Slide(index)}
                  index === current Slide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </d iv>
        {/* Stats Section */}
        <d iv class Name="m t-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            <d iv key={index} class Name="t ext-center">
              <d iv class Name="t ext-3xl font-bold text-cyan-400 mb-2">{stat.value}</d iv>
              <d iv class Name="t ext-gray-300">{stat.label}</d iv>
          ))}
        </d iv>
    </s ection>
  );
};
export default Ultimate Business Intelligence2025 Banner;
