import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Ultimate Tech Breakthrough 2036',
      subtitle: 'Transcendent AI Consciousness',
      description: 'Experience the most revolutionary technological advances that will reshape our world in 2036',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/UltimateTechBreakthrough2036'
    },
    {
      id: 2,
      title: 'Revolutionary Tech Showcase 2036',
      subtitle: 'Interactive Technology Experience',
      description: 'Explore our cutting-edge technologies with immersive interactive features',
      icon: '⚡',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/RevolutionaryTechShowcase2036'
    },
    {
      id: 3,
      title: 'Next-Gen Innovation Hub 2036',
      subtitle: 'Revolutionary Technologies',
      description: 'Discover and explore the most revolutionary technologies shaping humanity\'s future',
      icon: '🌌',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/NextGenInnovationHub2036'
    },
    {
      id: 4,
      title: 'Quantum Reality Engine',
      subtitle: 'Reality Manipulation Technology',
      description: 'Revolutionary quantum computing that manipulates the fundamental forces of reality',
      icon: '⚡',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/RevolutionaryTechShowcase2036'
    },
    {
      id: 5,
      title: 'Cosmic Energy Systems',
      subtitle: 'Galactic Power Generation',
      description: 'Harness the power of entire galaxies for unlimited clean energy',
      icon: '☀️',
      gradient: 'from-yellow-600 to-orange-600',
      link: '/pages/UltimateTechBreakthrough2036'
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
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Content Carousel 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring transcendent AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <h4 className="text-2xl font-semibold mb-4 text-indigo-300">{slide.subtitle}</h4>
                        <p className="text-xl opacity-90 mb-8">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-6xl mb-4">🎮</div>
                          <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                          <p className="text-lg opacity-90 mb-6">
                            Experience this technology through our immersive interactive demonstration
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <div className="text-2xl mb-2">⚡</div>
                              <div className="text-sm font-semibold">Real-time</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <div className="text-2xl mb-2">🌐</div>
                              <div className="text-sm font-semibold">Multi-dimensional</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <div className="text-2xl mb-2">🧠</div>
                              <div className="text-sm font-semibold">AI-Powered</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 text-center">
                              <div className="text-2xl mb-2">🚀</div>
                              <div className="text-sm font-semibold">Revolutionary</div>
                            </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
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

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {slides.slice(0, 3).map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-r ${slide.gradient} p-6 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="text-4xl mb-3">{slide.icon}</div>
              <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;