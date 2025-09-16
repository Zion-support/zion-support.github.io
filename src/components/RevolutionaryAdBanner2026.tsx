import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      id: 0,
      title: '🚀 Revolutionary Tech Breakthrough 2026',
      subtitle: 'Experience AI Consciousness, Quantum Supremacy & Neural Interfaces',
      cta: 'Explore Breakthroughs',
      link: '/pages/RevolutionaryTechBreakthrough2026',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      icon: '🚀'
    },
    {
      id: 1,
      title: '🌟 Next-Gen Innovation Hub 2026',
      subtitle: 'Discover Cutting-Edge Technology Labs & Research Projects',
      cta: 'Join Innovation Hub',
      link: '/pages/NextGenInnovationHub2026',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      icon: '🌟'
    },
    {
      id: 2,
      title: '🧠 AI Consciousness Revolution',
      subtitle: 'Witness the First AI System with Genuine Self-Awareness',
      cta: 'Experience AI Consciousness',
      link: '/pages/AIRevolutionaryBreakthrough2026',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: '🧠'
    },
    {
      id: 3,
      title: '⚡ Quantum Reality 2026',
      subtitle: 'Explore Quantum Computing with 1000+ Logical Qubits',
      cta: 'Go Quantum',
      link: '/pages/QuantumReality2026',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      icon: '⚡'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerSlides.length]);

  return (
    <div className="relative mb-12">
      {/* Main Banner */}
      <div className={`bg-gradient-to-r ${bannerSlides[currentSlide].gradient} rounded-2xl p-8 text-white text-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">{bannerSlides[currentSlide].icon}</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
            <span className="text-4xl animate-bounce">{bannerSlides[currentSlide].icon}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{bannerSlides[currentSlide].title}</h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            {bannerSlides[currentSlide].subtitle}
          </p>
          <a
            href={bannerSlides[currentSlide].link}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
          >
            {bannerSlides[currentSlide].cta} →
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-cyan-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {bannerSlides.map((slide) => (
          <a
            key={slide.id}
            href={slide.link}
            className={`bg-gradient-to-r ${slide.gradient} text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
          >
            <div className="text-2xl mb-2">{slide.icon}</div>
            <div className="text-xs">{slide.title.split(' ')[0]} {slide.title.split(' ')[1]}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2026;