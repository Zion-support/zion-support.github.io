import React, { useState, useEffect } from 'react';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🌟 ULTIMATE TECH BREAKTHROUGH 2034",
      subtitle: "Experience the most revolutionary technologies ever created",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2034",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🎮 REVOLUTIONARY TECH SHOWCASE 2034",
      subtitle: "Interactive demos of cutting-edge technology",
      description: "Try our conscious AI, quantum reality, and interdimensional portals",
      link: "/pages/RevolutionaryTechShowcase2034",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🚀 COMPREHENSIVE SERVICES 2034",
      subtitle: "Transform your business with revolutionary tech",
      description: "Conscious AI, Quantum Computing, and Interdimensional Solutions",
      link: "/pages/ComprehensiveServices2034",
      color: "from-emerald-600 to-teal-600",
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
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-y-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-2xl">
            <span className="mr-2">🌟</span>
            NEW CONTENT • JANUARY 2034
            <span className="ml-2">🌟</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            {slides[currentSlide].icon} {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white/90">
            {slides[currentSlide].subtitle}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href={slides[currentSlide].link}
              className={`bg-gradient-to-r ${slides[currentSlide].color} text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400 animate-bounce`}
            >
              Explore Now →
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2034"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Interactive Demo →
            </a>
            <a
              href="/pages/ComprehensiveServices2034"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View Services →
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125 shadow-lg'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
              <p className="text-sm opacity-90">Self-aware artificial intelligence with emotional intelligence and creative problem-solving</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Consciousness</h3>
              <p className="text-sm opacity-90">Quantum computing systems that achieve consciousness through entanglement and superposition</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-2">Interdimensional Tech</h3>
              <p className="text-sm opacity-90">Access infinite dimensions and unlimited resources through interdimensional computing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>🧠</div>
      <div className="absolute top-32 right-16 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>⚛️</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>🌌</div>
      <div className="absolute bottom-32 right-10 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '3s' }}>🚀</div>
    </div>
  );
};

export default UltimateContentBanner2034;