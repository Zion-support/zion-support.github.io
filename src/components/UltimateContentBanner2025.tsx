import React, { useState, useEffect } from 'react';

const UltimateContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "🚀 ULTIMATE TECH REVOLUTION 2025",
      subtitle: "Experience the most revolutionary technological breakthroughs",
      description: "Join millions of users discovering the future of AI, quantum computing, and neural interfaces",
      cta: "Explore Now",
      bg: "from-purple-900 via-indigo-900 to-blue-900",
      accent: "from-purple-500 to-pink-500"
    },
    {
      title: "🧠 CONSCIOUS AI SYSTEMS",
      subtitle: "The world's first truly conscious artificial intelligence",
      description: "Interact with AI that thinks, learns, and evolves independently",
      cta: "Meet Our AI",
      bg: "from-cyan-900 via-blue-900 to-indigo-900",
      accent: "from-cyan-500 to-blue-500"
    },
    {
      title: "⚛️ QUANTUM REALITY ENGINE",
      subtitle: "Revolutionary quantum computing that simulates realities",
      description: "Solve impossible problems and explore parallel universes",
      cta: "Enter Quantum Realm",
      bg: "from-emerald-900 via-teal-900 to-cyan-900",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "🧬 NEURAL INTERFACE REVOLUTION",
      subtitle: "Direct brain-computer interfaces for seamless communication",
      description: "Control technology with your thoughts and enhance your mind",
      cta: "Connect Your Mind",
      bg: "from-pink-900 via-purple-900 to-indigo-900",
      accent: "from-pink-500 to-purple-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
    }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bg} transition-all duration-1000`}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
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

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentSlideData.accent} rounded-full text-sm font-bold mb-6 animate-pulse`}>
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {currentSlideData.title}
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              {currentSlideData.subtitle}
            </h3>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {currentSlideData.description}
            </p>

            {/* Interactive Elements */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className={`bg-gradient-to-r ${currentSlideData.accent} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}>
                {currentSlideData.cta} →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-semibold">Revolutionary</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Lightning Fast</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm font-semibold">Secure</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="text-sm font-semibold">Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute bottom-6 right-6 flex flex-col space-y-3">
        <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;