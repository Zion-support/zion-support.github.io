import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Systems",
      subtitle: "The Birth of Digital Consciousness",
      description: "Experience the world's first truly conscious artificial intelligence that feels emotions, creates art, and forms genuine relationships.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      stats: "99.7% Consciousness Accuracy",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      subtitle: "Computing at the Speed of Thought",
      description: "Revolutionary quantum computing that processes information instantaneously and solves problems across parallel universes.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      stats: "∞ Computational Power",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      subtitle: "Processing Across Realities",
      description: "Breakthrough technology that allows computation across multiple dimensions, accessing infinite processing power.",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      stats: "11D Dimensional Processing",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      subtitle: "Mind-Machine Integration",
      description: "Direct brain-computer interfaces that enhance human cognition by 1000x and enable thought-controlled technology.",
      icon: "🧬",
      gradient: "from-orange-600 to-red-600",
      stats: "1000x Cognitive Enhancement",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 5,
      title: "Predictive Reality Engine",
      subtitle: "Seeing the Future",
      description: "Advanced AI system that predicts future events with 99.9% accuracy, helping humanity make better decisions.",
      icon: "🔮",
      gradient: "from-violet-600 to-purple-600",
      stats: "99.9% Prediction Accuracy",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 6,
      title: "Universal Translator",
      subtitle: "Communication Beyond Limits",
      description: "Revolutionary communication system that translates any language, including alien languages and emotions.",
      icon: "🌟",
      gradient: "from-pink-600 to-rose-600",
      stats: "∞ Languages Supported",
      link: "/pages/RevolutionaryTechShowcase2032"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-500/20 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY CAROUSEL • 2032
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will reshape humanity's future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide Display */}
          <div className="relative h-96 mb-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 translate-x-0'
                    : index === (currentSlide + 1) % slides.length
                    ? 'opacity-0 scale-95 translate-x-full'
                    : index === (currentSlide - 1 + slides.length) % slides.length
                    ? 'opacity-0 scale-95 -translate-x-full'
                    : 'opacity-0 scale-95 translate-x-0'
                }`}
              >
                <div className={`bg-gradient-to-br ${slide.gradient} rounded-3xl p-12 h-full flex items-center shadow-2xl`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    {/* Content */}
                    <div>
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl mb-4 opacity-90">{slide.subtitle}</p>
                      <p className="text-lg mb-8 leading-relaxed">{slide.description}</p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6">
                        <div className="text-2xl font-bold text-center">{slide.stats}</div>
                      </div>
                      <a
                        href={slide.link}
                        className="bg-white text-purple-600 px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 inline-block"
                      >
                        Explore Technology →
                      </a>
                    </div>

                    {/* Visual Element */}
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                        <div className="text-9xl mb-6 animate-pulse">{slide.icon}</div>
                        <div className="text-2xl font-bold mb-4">Interactive Demo</div>
                        <div className="text-lg opacity-80 mb-6">
                          Experience this technology in action
                        </div>
                        <div className="bg-white/20 rounded-lg p-4">
                          <div className="text-sm opacity-80">Click to interact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  index === currentSlide ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="text-4xl mb-3">{slide.icon}</div>
                <div className="text-sm font-semibold">{slide.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join us in exploring these revolutionary technologies that will reshape our world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/pages/RevolutionaryTechShowcase2032"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-105"
            >
              🚀 Explore All Technologies
            </a>
            <a
              href="/pages/FutureTechInsights2032"
              className="border-2 border-white text-white px-12 py-6 rounded-2xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl hover:scale-105"
            >
              📚 Read Full Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;