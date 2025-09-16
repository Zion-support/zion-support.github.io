import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "🌟 Ultimate Tech Breakthrough 2034",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2034",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "🎮 Revolutionary Tech Showcase 2034",
      subtitle: "Interactive demonstrations of cutting-edge technology",
      description: "Experience conscious AI, quantum computing, and interdimensional tech",
      link: "/pages/RevolutionaryTechShowcase2034",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🔬 Comprehensive Services 2034",
      subtitle: "Complete suite of revolutionary technology services",
      description: "Transform your business with our comprehensive technology solutions",
      link: "/pages/ComprehensiveServices2034",
      color: "from-emerald-600 to-teal-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 NEW CONTENT • JANUARY 2034
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ultimate Content Experience 2034
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Discover the most revolutionary technology content featuring conscious AI, quantum computing, and interdimensional breakthroughs
            </p>
          </div>

          {/* Slides */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${slide.color} p-8 md:p-12 rounded-2xl`}>
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <div className="text-6xl mb-4">{slide.icon}</div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {slide.title}
                          </h3>
                          <p className="text-xl text-white/90 mb-4">
                            {slide.subtitle}
                          </p>
                          <p className="text-lg text-white/80 mb-6">
                            {slide.description}
                          </p>
                          <Link
                            to={slide.link}
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                          >
                            Explore Now →
                          </Link>
                        </div>
                        <div className="text-center">
                          <div className="text-8xl mb-4 animate-bounce">{slide.icon}</div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                            <h4 className="text-2xl font-bold text-white mb-4">Key Features</h4>
                            <ul className="space-y-2 text-white/90">
                              <li>• Revolutionary Technology</li>
                              <li>• Interactive Demos</li>
                              <li>• Infinite Possibilities</li>
                              <li>• Perfect Performance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick access buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {slides.map((slide) => (
              <Link
                key={slide.id}
                to={slide.link}
                className={`bg-gradient-to-r ${slide.color} text-white p-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}
              >
                <div className="text-2xl mb-2">{slide.icon}</div>
                <div className="font-bold">{slide.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2034;