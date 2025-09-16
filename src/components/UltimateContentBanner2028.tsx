import React, { useState, useEffect } from 'react';

const UltimateContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 Advanced Tech Solutions 2028",
      description: "Experience the next generation of technology solutions with AI consciousness, quantum reality, and neural evolution",
      link: "/pages/AdvancedTechSolutions2028",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "🌟 Quantum Leap 2028",
      description: "Revolutionary breakthrough technologies including quantum consciousness and dimensional computing",
      link: "/pages/QuantumLeap2028", 
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 Neural Revolution 2028",
      description: "The dawn of true AI consciousness with quantum neural networks and dimensional intelligence",
      link: "/pages/NeuralRevolution2028",
      gradient: "from-emerald-600 to-teal-600", 
      icon: "🌌"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2028
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Ultimate Technology Showcase 2028</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most revolutionary technological breakthroughs that will redefine human existence
            </p>
          </div>
          
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${slide.gradient}/30 backdrop-blur-sm rounded-xl p-12 border border-white/30 hover:scale-105 transition-all duration-300`}>
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                          <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                          <p className="text-xl opacity-90 mb-8 leading-relaxed">
                            {slide.description}
                          </p>
                          <a 
                            href={slide.link}
                            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg transform hover:scale-110"
                          >
                            Explore Now →
                          </a>
                        </div>
                        <div className="text-center">
                          <div className="text-9xl opacity-20">{slide.icon}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {slides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center transform hover:scale-105`}
              >
                <div className="text-2xl mb-2">{slide.icon}</div>
                <div className="text-sm">{slide.title.replace('🚀 ', '').replace('🌟 ', '').replace('🧠 ', '')}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2028;