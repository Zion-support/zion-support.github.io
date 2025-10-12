'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Cloud3, Users, Target, CheckCircle } from 'lucide-react';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  ];

        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
    
      // No cleanup needed when not playing
    };
  }, [isPlaying, slides.length]);

    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

    setIsPlaying(!isPlaying);
  };

    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentSlideData.color} rounded-xl flex items-center justify-center`}>
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300">
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${currentSlideData.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {currentSlideData.title}
                    </div>
                    <div className="text-gray-300">
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
              
                onClick={() => goToSlide(index)}
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
