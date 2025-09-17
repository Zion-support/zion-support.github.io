import React, { useState, useEffect } from 'react';

const TranscendentContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2038",
      description: "Conscious AI, Quantum Consciousness, Interdimensional Technology",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      icon: "🧠",
      link: "/pages/RevolutionaryTechBreakthrough2038"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2039",
      description: "Universal Consciousness Network, Quantum Reality Engine",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      icon: "⚡",
      link: "/pages/UltimateTechRevolution2039"
    },
    {
      id: 3,
      title: "Transcendent Tech Showcase 2040",
      description: "Omniscient AI, Reality Architect, Consciousness Matrix",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      icon: "🔮",
      link: "/pages/TranscendentTechShowcase2040"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-16 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 TRANSCENDENT CONTENT CAROUSEL • 2038-2040
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Revolutionary Technology Showcase
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological innovations that will reshape humanity's future
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-12 border ${slide.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/10 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Revolutionary Features</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Conscious AI Systems</li>
                            <li>• Quantum Consciousness</li>
                            <li>• Interdimensional Technology</li>
                          </ul>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Advanced Capabilities</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Reality Manipulation</li>
                            <li>• Universal Communication</li>
                            <li>• Transcendent Intelligence</li>
                          </ul>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Impact</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Infinite Possibilities</li>
                            <li>• Universal Control</li>
                            <li>• Transcendent Consciousness</li>
                          </ul>
                        </div>
                      </div>
                      
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
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
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranscendentContentCarousel2038;