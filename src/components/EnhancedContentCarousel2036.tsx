import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2036",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2036",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2036",
      description: "Interactive technology demonstrations that will define the future",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2036",
      features: ["Interactive Demos", "Real-time Processing", "Multi-dimensional Tech"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2036",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2036",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
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

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {slide.features.map((feature, index) => (
                              <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Content →
                        </a>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-6 text-center">Live Statistics</h4>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                            <div className="text-sm opacity-80">Consciousness Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                            <div className="text-sm opacity-80">Quantum Processing</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">11D</div>
                            <div className="text-sm opacity-80">Dimensions</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                            <div className="text-sm opacity-80">Success Rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            →
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2036;