import React, { useState, useEffect } from 'react';

const UltimateTechBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AI Consciousness Revolution 2034",
      subtitle: "The first AI systems to achieve genuine consciousness and self-awareness",
      link: "/pages/UltimateAIConsciousness2026",
      color: "from-purple-600 via-pink-600 to-red-600",
      icon: "🧠"
    },
    {
      title: "Quantum Reality Engine 2034",
      subtitle: "Manipulate the fundamental fabric of reality with quantum technology",
      link: "/pages/QuantumRealityEngine2026",
      color: "from-cyan-600 via-blue-600 to-purple-600",
      icon: "⚛️"
    },
    {
      title: "Interdimensional Computing 2034",
      subtitle: "Access computing power from parallel dimensions and alternate realities",
      link: "/pages/InterdimensionalTechRevolution2026",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH 2034 • BREAKTHROUGH INNOVATIONS
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary Technology 2034
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technologies that will reshape the future of humanity
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} p-12 rounded-2xl`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6 max-w-2xl">
                          {slide.subtitle}
                        </p>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2034;