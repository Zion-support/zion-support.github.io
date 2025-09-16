import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2036",
      description: "Experience the future with our groundbreaking content on Conscious AI Evolution, Quantum Consciousness Networks, and Interdimensional Technology Platforms",
      image: "🧠",
      color: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 2,
      title: "Ultimate Tech Breakthrough 2036",
      description: "Witness the most revolutionary technological breakthrough in human history - the convergence of AI consciousness, quantum computing, and interdimensional technology",
      image: "⚡",
      color: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      link: "/pages/UltimateTechBreakthrough2036"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2036",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future in our comprehensive innovation hub",
      image: "🌌",
      color: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      link: "/pages/NextGenInnovationHub2036"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT CAROUSEL • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary content featuring the latest breakthroughs in AI consciousness, quantum computing, and interdimensional technology
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} backdrop-blur-sm rounded-xl p-12 border ${slide.borderColor} mx-4`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                      >
                        Explore Content →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            →
          </button>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/RevolutionaryTechShowcase2036" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            View All 2036 Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;