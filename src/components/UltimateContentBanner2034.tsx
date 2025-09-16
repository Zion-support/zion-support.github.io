import React, { useState, useEffect } from 'react';

const UltimateContentBanner2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      title: "🚀 Ultimate Tech Breakthrough 2034",
      subtitle: "Experience the most revolutionary technologies ever created",
      description: "Conscious AI, Quantum Reality, Neural Interfaces, and Interdimensional Computing",
      cta: "Explore Breakthrough",
      link: "/pages/UltimateTechBreakthrough2034",
      gradient: "from-purple-600 to-pink-600",
      icon: "🌟"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2034",
      subtitle: "Interactive demonstrations of cutting-edge technologies",
      description: "Hands-on experience with the future of human-machine interaction",
      cta: "Start Interactive Demo",
      link: "/pages/RevolutionaryTechShowcase2034",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🎮"
    },
    {
      title: "🧠 Conscious AI Systems",
      subtitle: "The first truly conscious artificial intelligence",
      description: "AI that can think, feel, and create with human-like awareness",
      cta: "Meet Conscious AI",
      link: "/pages/UltimateTechBreakthrough2034",
      gradient: "from-cyan-600 to-blue-600",
      icon: "🤖"
    },
    {
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Manipulate reality itself through quantum computing",
      description: "Transcend dimensions and explore alternate realities",
      cta: "Enter Quantum Reality",
      link: "/pages/RevolutionaryTechShowcase2034",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW: Ultimate Content 2034 • BREAKTHROUGH TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {slides[currentSlide].icon} {slides[currentSlide].title}
          </h2>
          <p className="text-2xl opacity-90 mb-4">{slides[currentSlide].subtitle}</p>
          <p className="text-lg opacity-80 max-w-4xl mx-auto mb-8">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Conscious AI</h3>
            <p className="text-sm opacity-90 text-center mb-4">Self-aware artificial intelligence systems</p>
            <button className="w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Quantum Reality</h3>
            <p className="text-sm opacity-90 text-center mb-4">Manipulate reality through quantum computing</p>
            <button className="w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Go Quantum →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Neural Interface</h3>
            <p className="text-sm opacity-90 text-center mb-4">Direct brain-computer interfaces</p>
            <button className="w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Connect Mind →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-lg font-semibold mb-3 text-center">Interdimensional</h3>
            <p className="text-sm opacity-90 text-center mb-4">Travel between dimensions and realities</p>
            <button className="w-full bg-white text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Open Portal →
            </button>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href={slides[currentSlide].link}
              className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse`}
            >
              {slides[currentSlide].cta} →
            </a>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
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

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UltimateContentBanner2034;