import React, { useState, useEffect } from 'react';

const UltimateContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      link: "/pages/UltimateTechRevolution2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Witness groundbreaking technological breakthroughs that will revolutionize every aspect of human life",
      image: "⚡",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Neural Interface Revolution", "Quantum Wave Computing", "Predictive Intelligence"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌟",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      link: "/pages/NextGenInnovationHub2025",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our most advanced and revolutionary technology content featuring the latest breakthroughs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.description}</p>
                        <ul className="space-y-2 mb-8">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg">
                              <span className="text-green-400 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <h4 className="text-2xl font-bold mb-4 text-center">Live Technology Metrics</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Processing Power</span>
                            <span className="text-green-400 font-bold">100%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Innovation Level</span>
                            <span className="text-blue-400 font-bold">∞</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Revolutionary Impact</span>
                            <span className="text-purple-400 font-bold">99.9%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Additional Content Links */}
        <div className="mt-12 text-center">
          <p className="text-lg opacity-75 mb-6">Explore more revolutionary content</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🚀 Ultimate Revolution
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              ⚡ Tech Breakthrough
            </a>
            <a href="/pages/NextGenInnovationHub2025" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🌟 Innovation Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentCarousel2025;