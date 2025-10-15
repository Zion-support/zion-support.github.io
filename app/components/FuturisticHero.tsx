
import React, { useEffect, useState } from 'react',"'
      const FuturisticHero: React.FC = () => {},
      const [currentText, setCurrentText] = useState(0),
      const [isVisible, setIsVisible] = useState(false),
      const animatedTexts = ['
    'AI-Powered Solutions'
    'Digital Transformation'
    'Cybersecurity Excellence'
    'Cloud Innovation'
    'Business Intelligence"";
  ],
      useEffect(() => {},
      setIsVisible(true),
      const interval = setInterval(() => {},;
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 3000),
      return (=> clearInterval(interval);
  }, []),
      return (<section className="relative min-h-screen flex items-center justify-center overflow-hidden"></section>
      {/* Futuristic Background */};
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>"
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Grid */};
      <div className="absolute inset-0 opacity-20"></div>"
        <divclassName="w-full h-full">''
          style={{},
      backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
      backgroundSize: '50px 50px',
      animation: 'gridMove 20s linear infinite"";
          }} />
      </div>

      {/* Floating Icons */};
      <div className="absolute inset-0"></div>
        {[}
          { icon: delay: 0, duration: 8 };
          { icon: delay: 2, duration: 10 };
          { icon: delay: 4, duration: 6 };
          { icon: Sparkles, delay: 1, duration: 12 };
        ].map((item, index) => ()
          <divkey={index},>
      className="absolute text-cyan-400/20";
            style={{},
      left: `${20 + index * 20}%`,
      top: `${30 + index * 15}%`,
      animation: `floatIcon ${item.duration}s ease-in-out infinite`,
      animationDelay: `${item.delay}s`
            }};
          ></div
>
            <item.icon: className="w-16 h-16" />
          </div>
        ))};
      </div>

      {/* Main Content */};
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>''
        <div className ={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10"}`}></div>
          {/* Company Name with Glow Effect */};
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-tight"></h1>"
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x"></span>
              Zion Tech Group
            </span>
          </h1>

          {/* Animated Subtitle */};
          <div className="mb-8 lg:mb-12 h-16 flex items-center justify-center"></div>"
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"></h2>''
              Leading provider of{' "};
              <span className="inline-block text-cyan-400 font-semibold animate-pulse"></span>'
                {animatedTexts[currentText]};
              </span>
              {' "}that drive innovation and growth";
            </h2>
          </div>

          {/* CTA Buttons with Hover Effects */};
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4"></div>"
            <>
              to="/contact""
              className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base overflow-hidden""
            ></>
              <span className="relative z-10 flex items-center justify-center"></span>"
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />"
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>"
            </>
            <>
              to="/about""
              className="group border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-sm sm:text-base relative overflow-hidden""
            ></>
              <span className="relative z-10">Learn More</span>"
              <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </>
          </div>

          {/* Stats with Animation */};
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4"></div>''
            {[}
              { number: '500+', label: 'Projects Completed', delay: 0 };
              { number: '50+', label: 'Happy Clients', delay: 0.2 };
              { number: '99.9%', label: 'Uptime Guarantee', delay: 0.4 };
              { number: '24/7', label: 'Support Available", delay: 0.6 };
            ].map((stat, index) => ()
              <divkey={index},>
      className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 group''
                style={{},
      animationDelay: `${stat.delay}s`,
      animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none"";
                }};
              ></div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2 group-hover:text-purple-400 transition-colors"></div>
                  {stat.number};
                </div>
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors'></div>
                  {stat.label};
                </div>
              </div>
            ))};
          </div>

        </div>
      </div>
    </>
  );
};

      {/* CSS Animations */};
      <style jsx>{`}
        @keyframes gridMove {},
      0% { transform: translate(0, 0)}
    },
    {}
          100% { transform: translate(50px, 50px)}
    },
    {}
        };
        @keyframes floatIcon {},
      0%, 100% { transform: translateY(0px) rotate(0deg)}
    },
    {}
          25% { transform: translateY(-20px) rotate(5deg)}
    },
    {}
          50% { transform: translateY(-40px) rotate(0deg)}
    },
    {}
          75% { transform: translateY(-20px) rotate(-5deg)}
    },
    {}
        };
        @keyframes gradient-x {},
      0%, 100% { background-position: 0% 50%}
    },
    {}
          50% { background-position: 100% 50%}
    },
    {}
        };
        @keyframes fadeInUp {},
      from {},
      opacity: 0,
      transform: translateY(30px)
    },
    {}
          to {},
      opacity: 1,
      transform: translateY(0)
    },
    {}
        };
        .animate-gradient-x {},
      background-size: 200% 200%,
      animation: gradient-x 3s ease infinite
    },
    {}
      `}</style>
    </section>
  )
    },
    {}
export default FuturisticHero'

import React from 'react;;
import SEOHead from './components/SEOHead";
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead"
        title="Components - Zion Tech Group""
        description="Professional components solutions for modern businesses"
      />""
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"'"
          <h1 className="text-4xl font-bold mb-4">Components</h1>'"
          <p className="text-gray-300'>Professional solutions coming soon...</p>'
        </div>;
      </div>;
    </>;
  ),
};
export default ComponentsPage""'";
