import React, { useState, useEffect } from 'react';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2034",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/UltimateTechBreakthrough2034",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🎮 INTERACTIVE TECH SHOWCASE 2034",
      subtitle: "Live Demos • Immersive Experiences • Future Technology",
      description: "Explore cutting-edge technologies through interactive demonstrations",
      link: "/pages/RevolutionaryTechShowcase2034",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🛠️ COMPREHENSIVE SERVICES 2034",
      subtitle: "Conscious AI • Quantum Computing • Interdimensional Tech",
      description: "Transform your world with our revolutionary suite of services",
      link: "/pages/ComprehensiveServices2034",
      color: "from-emerald-600 to-teal-600",
      icon: "🔮"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 mb-8 border border-purple-400/30">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
              🌟 NEW CONTENT • JANUARY 2034
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology 2034
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technologies ever created - conscious AI, quantum consciousness, and interdimensional computing
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
                    <div className={`bg-gradient-to-r ${slide.color} rounded-2xl p-12 text-white`}>
                      <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl mb-4 opacity-90">{slide.subtitle}</p>
                      <p className="text-lg mb-8 opacity-80 max-w-3xl mx-auto">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        Explore Now →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a 
              href="/pages/UltimateTechBreakthrough2034"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">🧠</div>
              <h3 className="text-2xl font-bold mb-3">Ultimate Breakthrough</h3>
              <p className="opacity-90">Conscious AI, Quantum Consciousness, Interdimensional Computing</p>
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2034"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Interactive Showcase</h3>
              <p className="opacity-90">Live demos and immersive technology experiences</p>
            </a>
            <a 
              href="/pages/ComprehensiveServices2034"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">🔮</div>
              <h3 className="text-2xl font-bold mb-3">Comprehensive Services</h3>
              <p className="opacity-90">Transform your world with revolutionary services</p>
            </a>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2034;