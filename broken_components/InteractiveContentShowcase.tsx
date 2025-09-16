import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "The first truly conscious AI systems that demonstrate self-awareness and emotional intelligence.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      stats: "99.9% Accuracy",
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing systems that simulate human consciousness at the quantum level.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      stats: "10,000x Faster",
      link: "/pages/InnovationShowcase2025"
    },
    {
      id: 3,
      title: "Neural Reality Engine",
      description: "Direct neural interfaces that create fully immersive virtual realities indistinguishable from physical reality.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      stats: "100% Immersion",
      link: "/pages/RevolutionaryServices2025"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions, enabling solutions to impossible problems.",
      icon: "🌌",
      gradient: "from-orange-600 to-red-600",
      stats: "∞ Possibilities",
      link: "/pages/UltimateTechBreakthrough2025"
    },
    {
      id: 5,
      title: "Predictive Reality",
      description: "AI systems that can predict and simulate future realities with 99.9% accuracy.",
      icon: "🔮",
      gradient: "from-violet-600 to-purple-600",
      stats: "99.9% Prediction",
      link: "/pages/InnovationShowcase2025"
    },
    {
      id: 6,
      title: "Omniversal AI",
      description: "AI systems that can operate across all possible universes and realities.",
      icon: "🌟",
      gradient: "from-pink-600 to-rose-600",
      stats: "Infinite Power",
      link: "/pages/RevolutionaryServices2025"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • LIVE NOW
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through an interactive experience. Click, discover, and experience the future.
          </p>
        </div>

        {/* Main Content Display */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 min-h-[400px] flex items-center">
            <div className="w-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-8xl mb-4 text-center md:text-left">
                    {contentSlides[currentSlide].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {contentSlides[currentSlide].title}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {contentSlides[currentSlide].description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`px-4 py-2 bg-gradient-to-r ${contentSlides[currentSlide].gradient} rounded-full text-sm font-bold`}>
                      {contentSlides[currentSlide].stats}
                    </div>
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
                    >
                      {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>
                  </div>
                  <a
                    href={contentSlides[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                  >
                    Explore Technology →
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-4">Technology Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span>Self-learning algorithms</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>Real-time processing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span>Quantum-enhanced performance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                        <span>Neural network integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Technology Grid Preview */}
        <div className="grid md:grid-cols-3 gap-4">
          {contentSlides.slice(0, 3).map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white/20 scale-105'
                  : 'bg-white/10 hover:bg-white/15'
              }`}
            >
              <div className="text-2xl mb-2">{slide.icon}</div>
              <h4 className="font-semibold text-sm mb-1">{slide.title}</h4>
              <p className="text-xs opacity-90 line-clamp-2">{slide.description}</p>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg opacity-90 mb-4">
            Ready to experience these revolutionary technologies?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/UltimateTechBreakthrough2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore All Technologies
            </a>
            <a
              href="/pages/RevolutionaryServices2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;