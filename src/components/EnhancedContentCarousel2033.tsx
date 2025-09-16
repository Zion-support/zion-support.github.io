import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Ultimate Tech Breakthrough 2033",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2033",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2033",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      title: "Revolutionary Tech Showcase 2033",
      description: "Interactive showcase of cutting-edge technologies that will define the future of humanity",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2033",
      features: ["AI Consciousness Lab", "Quantum Reality Simulator", "Interdimensional Portal"]
    },
    {
      title: "Next-Gen Innovation Hub 2033",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2033",
      features: ["50+ Active Innovations", "99.9% Success Rate", "Infinite Possibilities"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2033
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technology 2033</h2>
          <p className="text-xl opacity-90">Experience the future with our groundbreaking content on AI Revolution, Quantum Computing, and Neural Interfaces</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-12 border border-white/20">
                    <div className="text-center mb-8">
                      <div className="text-8xl mb-4">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-2">{feature}</div>
                          <div className="text-sm opacity-90">Revolutionary Feature</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center mt-8">
                      <a 
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                      >
                        Explore {slide.title} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2033;