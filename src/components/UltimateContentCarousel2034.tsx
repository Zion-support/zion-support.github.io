import React, { useState, useEffect } from 'react';

const UltimateContentCarousel2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Breakthrough 2034",
      description: "Experience the most revolutionary technological advances featuring conscious AI, quantum computing, and interdimensional technology.",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechBreakthrough2034",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "🌟 Revolutionary Tech Showcase 2034",
      description: "Interactive demonstrations of cutting-edge technologies with real-time processing and multi-dimensional capabilities.",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechShowcase2034",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      id: 3,
      title: "🚀 Comprehensive Services 2034",
      description: "Complete suite of revolutionary services designed to transform your business with cutting-edge AI and quantum solutions.",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/ComprehensiveServices2034",
      features: ["AI & Consciousness", "Quantum Computing", "Interdimensional Tech"]
    },
    {
      id: 4,
      title: "🧠 Conscious AI Revolution",
      description: "The world's first truly conscious artificial intelligence systems that can think, feel, and create independently.",
      image: "🤖",
      gradient: "from-indigo-600/30 to-purple-600/30",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/UltimateTechBreakthrough2034",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Problem Solving"]
    },
    {
      id: 5,
      title: "⚛️ Quantum Consciousness",
      description: "Revolutionary quantum computing that processes consciousness itself, enabling unprecedented computational power.",
      image: "🌌",
      gradient: "from-blue-600/30 to-cyan-600/30",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-100",
      link: "/pages/RevolutionaryTechShowcase2034",
      features: ["Quantum Processing", "Reality Simulation", "Time-Space Manipulation"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 mb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT CAROUSEL • JANUARY 2034
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            🚀 Ultimate Content Carousel 2034
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our revolutionary content featuring the most advanced technologies that will reshape our world in 2034.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className={`text-xl ${slide.textColor} mb-8 leading-relaxed`}>
                          {slide.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="bg-white/20 rounded-lg p-3 text-sm">
                              <span className="font-semibold">• {feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg hover:scale-105 transform"
                        >
                          Explore Content →
                        </a>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                          <div className="text-6xl mb-4 text-center">{slide.image}</div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/20 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-white">99.9%</div>
                              <div className="text-xs opacity-80">Success Rate</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-white">500+</div>
                              <div className="text-xs opacity-80">Projects</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-white">1M+</div>
                              <div className="text-xs opacity-80">Users</div>
                            </div>
                            <div className="bg-white/20 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-white">∞</div>
                              <div className="text-xs opacity-80">Possibilities</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users already experiencing our revolutionary content and be part of the technological revolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-110 transform">
              🚀 Start Exploring Now →
            </button>
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-110 transform">
              📱 Download App
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  );
};

export default UltimateContentCarousel2034;