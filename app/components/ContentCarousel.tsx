import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
}

const ContentCarousel: React.FC  = () => {,
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Cloud, Zap, Shield, Brain } from 'lucide-react'
const ContentCarousel: React.FC  = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 1,
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [,
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',},
    {id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [,
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
      color: 'from-orange-500 to-red-600'
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [,
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    };
  ];

  useEffect(() =></>
                {const timer = setInterval(() =>
                {
      setCurrentSlide((prev) => (prev + 1) % slides.length);}, 5000);
      color: 'from-red-500 to-pink-600'
    }

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide  = () => {;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide  = () => {;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  ]
  useEffect(() =>
                {]
    const timer = setInterval(() =>
                {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])
  const nextSlide  = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide  = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  return (
    <div className="relative w-full max-w-4xl mx-auto"></div>
      </div><div className="relative overflow-hidden rounded-2xl"></div>
        </div><$2 />
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
                {slides.map((slide) => (
            </div><div key={slide.id} className="w-full flex-shrink-0"></div>
              </div><div className={`bg-gradient-to-br ${slide.color} p-8 rounded-2xl text-white`}></div>
                </div><div className="flex items-center justify-between mb-6"></div>
                  </div><div className="flex items-center space-x-4"></div>
                    </div><div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"></div>
                      </div><slide.icon className="w-8 h-8" />
                    </div>
                    <div></div>
                      </div><h3 className="text-2xl font-bold"></h3>
                {slide.title}
                </h3>
                      <p className="text-white/90"></p>
                {slide.description}
                </p>
                </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4"></div>
                {slide.features.map((feature, index) => (
                    </div><div key={index} className="flex items-center space-x-2"></div>
                      </div><div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm"></span>
                {feature}
                </span>
                </div>
                  ))}
                </div>
                </div>
            </div>
          ))}
                </div>
        
        <$2 />
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button><ChevronLeft className="w-6 h-6" />
        </button>
        
        <$2 />
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          </button><ChevronRight className="w-6 h-6" />
        </button>
                </div>
      
      <div className="flex justify-center space-x-2 mt-6"></div>
                {slides.map((_, index) => (
          </div><$2 />
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
          />
        ))}
  const nextSlide  = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide  = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto"></div>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/20"></div>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}></div>
                {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8 md:p-12"></div>
              <div className="text-center"></div>
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${slide.color} rounded-2xl flex items-center justify-center shadow-lg`}></div>
                  <slide.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-enhanced"></h3>
                {slide.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                {slide.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"></div>
                {slide.features.map((feature, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20"></div>
                      <span className="text-cyan-400 font-medium"></span>
                {feature}
                </span>
                </div>
                  ))}
                </div>
                </div>
            </div>
          ))}
                </div>
                {/* Navigation buttons */}
                <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        ></button
>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        ></button
>
          <ChevronRight className="w-6 h-6" />
        </button>
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"></div>
                {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
                </div>
                </div>
    </div>
  )
}
export default ContentCarousel
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
      ]
    }
  const nextSlide  = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide  = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() =>
                {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
                {/* Header */}
                <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
                </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business
          </p>
                </div>
                {/* Carousel */}
                <div className="relative"></div>
                {/* Main Content */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center"></div>
                {/* Left Content */}
                <div className="space-y-8"></div>
                <div className="flex items-center space-x-4"></div>
                  <div className="bg-white/20 p-3 rounded-xl"></div>
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white"></h3>
                {currentSlideData.title}
                </h3>
                    <p className="text-gray-300 mt-2"></p>
                {currentSlideData.description}
                </p>
                </div>
                </div>
                {/* Features */}
                <div className="space-y-4"></div>
                {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3"></div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-200"></span>
                {feature}
                </span>
                </div>
                  ))}
                </div>
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4"></div>
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"></button>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"></button>
                    Get Started
                  </button>
                </div>
              </div>
                {/* Right Content - Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"></div>
                {currentSlideData.stats?.map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 rounded-xl p-6 border border-white/20"></div>
                    <div className="text-3xl font-bold text-white mb-2"></div>
                {stat.value}
                </div>
                    <div className="text-gray-300 text-sm"></div>
                {stat.label}
                </div>
                </div>
                ))}
                </div>
                </div>
          </div>
                {/* Navigation Arrows */}
                <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Previous slide"
          ></button
>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Next slide"
          ></button
>
            <ChevronRight className="w-6 h-6" />
          </button>
                </div>
                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-8"></div>
  ]
  const nextSlide  = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide  = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  useEffect(() =>
                {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])
  const currentSlideData = slides[currentSlide]
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Solutions
          <p className="text-xl text-purple-100 max-w-3xl mx-auto"></p>
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
        <div className="relative"></div>
<div className="overflow-hidden rounded-xl"></div>
            <$2 />
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
<div key={index} className="w-full flex-shrink-0"></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
                    <div className="text-center mb-8"></div>
                      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                        <slide.icon className="h-10 w-10 text-white" />
                      <h3 className="text-2xl font-bold mb-4"></h3>
                {slide.title}
                <p className="text-purple-100 text-lg max-w-2xl mx-auto"></p>
                {slide.description}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center"></div>
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-purple-100"></span>
                {feature}
                      ))}
              ))}
                <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
                {/* Header */}
                <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
        {/* Carousel Container */}
                <div className="relative"></div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden"></div>
            <div className="flex items-center justify-between mb-8"></div>
              <div className="flex items-center gap-4"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center"></div>
                  <currentSlideData.icon className="w-8 h-8 text-slate-900" />
                {/* Features */}
                <div className="space-y-4"></div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features:
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"></div>
                {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300"></span>
                {feature}
                    ))}
                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6"></div>
                {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center"></div>
                        <div className="text-2xl font-bold text-white mb-1"></div>
                {stat.value}
                <div className="text-gray-400 text-sm"></div>
                {stat.label}
                    ))}
                )}
                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4"></div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                    <Zap className="w-5 h-5" />
                    Get Started
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                    <ArrowRight className="w-5 h-5" />
                    Learn More
              {/* Visual Element */}
                <div className="relative"></div>
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"></div>
                  <div className="text-center"></div>
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></div>
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    <div className="text-4xl font-bold text-white mb-2"></div>
                {currentSlideData.title}
                <div className="text-gray-300"></div>
                      Slide {currentSlide + 1} of {slides.length}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
                {currentSlideData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3"></div>
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300"></span>
                {feature}
              ))}
            {/* Stats */}
            {currentSlideData.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-700"></div>
                {currentSlideData.stats.map((stat, index) => (
                  <div key={index} className="text-center"></div>
                    <div className="text-3xl font-bold text-white mb-1"></div>
                {stat.value}
                <div className="text-sm text-gray-400"></div>
                {stat.label}
                ))}
            )}
          {/* Navigation Buttons */}
                <$2 />
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">
            <ChevronLeft className="h-6 w-6" />
          <$2 />
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20">
            <ChevronRight className="h-6 w-6" />
                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-2"></div>
                {slides.map((_, index) => (
            <$2 />
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
                </div>
                {/* Additional Info */}
                <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Clients</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
                </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
                </div>
          </div>
                </div>
      </div>
                </div>
  );
};

export default ContentCarousel;
        {/* Additional Info */}
                <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5
                <div className="text-gray-400 text-sm">Customer Rating
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <Users className="w-6 h-6 text-blue-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">10,000+
                <div className="text-gray-400 text-sm">Happy Customers
            <div className="flex items-center justify-center gap-3 text-white"></div>
              <TrendingUp className="w-6 h-6 text-green-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">99.9%
                <div className="text-gray-400 text-sm">Uptime
  )
}
export default ContentCarousel</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></span>
                </span></span>
                </span></button>
                </button></a>
                </p></p>
                </p></h2>
                </h2></h3>
                </h4>
