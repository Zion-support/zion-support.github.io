import React, { useState, useEffect } from 'react';

const UltimateAdBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      id: 0,
      title: '🚀 Ultimate Tech Revolution 2026',
      subtitle: 'Experience AI Consciousness, Quantum Supremacy & Neural Interfaces',
      cta: 'Explore Revolution',
      link: '/pages/UltimateTechRevolution2026',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '🚀'
    },
    {
      id: 1,
      title: '🧠 AI Consciousness Breakthrough',
      subtitle: 'Advanced AI with true consciousness and emotional understanding',
      cta: 'Discover AI',
      link: '/pages/AIRevolutionaryBreakthrough2026',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      icon: '🧠'
    },
    {
      id: 2,
      title: '⚛️ Quantum Supremacy Achieved',
      subtitle: 'Breakthrough quantum computing achieving computational supremacy',
      cta: 'Explore Quantum',
      link: '/pages/QuantumReality2026',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: '⚛️'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16 mb-12">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-sm font-bold mb-4 animate-pulse">
            🔥 ULTIMATE REVOLUTION 2026 • LIMITED TIME
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl text-indigo-200 max-w-4xl mx-auto">
            Discover the most advanced technological breakthroughs in human history
          </p>
        </div>

        {/* Rotating Banner */}
        <div className="relative h-64 mb-8">
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`bg-gradient-to-r ${slide.gradient} p-8 rounded-2xl shadow-2xl h-full flex items-center justify-between`}>
                <div className="flex-1">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h3 className="text-4xl font-bold text-white mb-4">{slide.title}</h3>
                  <p className="text-2xl text-white/90 mb-6">{slide.subtitle}</p>
                  <a
                    href={slide.link}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transition-all duration-300 inline-block"
                  >
                    {slide.cta}
                  </a>
                </div>
                <div className="text-8xl opacity-20">{slide.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateAdBanner2026;
