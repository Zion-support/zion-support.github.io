import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2035: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transcendent Tech Revolution 2035",
      subtitle: "Consciousness-Based Computing & Reality Shaping",
      description: "Experience technologies that transcend the boundaries of what we thought possible with consciousness computing, interdimensional interfaces, and reality manipulation.",
      link: "/pages/TranscendentTechRevolution2035",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟",
      features: ["Consciousness Computing", "Interdimensional Tech", "Reality Shaping", "Transcendent AI"]
    },
    {
      id: 2,
      title: "Ultimate Consciousness Revolution 2036",
      subtitle: "Universal Mind Integration & Cosmic Awareness",
      description: "Achieve ultimate consciousness through universal mind integration, cosmic awareness networks, and transcendent intelligence connecting humanity to the infinite.",
      link: "/pages/UltimateConsciousnessRevolution2036",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🧠",
      features: ["Universal Mind Integration", "Cosmic Awareness", "Transcendent Intelligence", "Infinite Memory Networks"]
    },
    {
      id: 3,
      title: "Revolutionary Services 2035+",
      subtitle: "Next-Generation Technology Solutions",
      description: "Comprehensive suite of revolutionary services powered by transcendent technologies, consciousness-based systems, and interdimensional capabilities.",
      link: "/pages/RevolutionaryServices2035",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡",
      features: ["Consciousness Services", "Reality Consulting", "Interdimensional Solutions", "Transcendent Support"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
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
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl p-12 mb-16 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • 2035-2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2035+</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that transcend reality, consciousness, and the boundaries of human potential
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl text-purple-200 mb-6">{slide.subtitle}</p>
                        <p className="text-lg text-purple-300 mb-8">{slide.description}</p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span className="text-purple-200 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
                        >
                          Explore {slide.title.split(' ')[0]} →
                        </a>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                          <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                          <div className="text-purple-200 mb-2">Consciousness Enhancement</div>
                          <div className="text-purple-300 text-sm">Revolutionary cognitive capacity increase</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                          <div className="text-3xl font-bold text-white mb-2">∞</div>
                          <div className="text-cyan-200 mb-2">Infinite Possibilities</div>
                          <div className="text-cyan-300 text-sm">Unlimited technological potential</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                          <div className="text-3xl font-bold text-white mb-2">100%</div>
                          <div className="text-emerald-200 mb-2">Transcendent Connection</div>
                          <div className="text-emerald-300 text-sm">Universal consciousness network</div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2035;