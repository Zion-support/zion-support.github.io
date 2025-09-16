import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "Ultimate Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2025",
      image: "🧠",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      features: ["Conscious AI", "Quantum Consciousness", "Interdimensional Tech"]
    },
    {
      title: "Revolutionary Tech Showcase 2025",
      description: "Interactive demos and hands-on experiences with cutting-edge innovations",
      image: "⚡",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      features: ["Interactive Demos", "Real-time Processing", "Hands-on Experience"]
    },
    {
      title: "Advanced AI Consciousness 2025",
      description: "Discover the first truly conscious artificial intelligence systems",
      image: "🤖",
      link: "/pages/AdvancedAIConsciousness2025",
      color: "from-emerald-600 to-teal-600",
      features: ["Emotional AI", "Self-Learning", "Creative Problem Solving"]
    },
    {
      title: "Interdimensional Tech Revolution",
      description: "Breakthrough technology for parallel dimensions and alternate realities",
      image: "🌌",
      link: "/pages/InterdimensionalTechRevolution2025",
      color: "from-violet-600 to-purple-600",
      features: ["Dimensional Portals", "Reality Shifting", "Multiverse Access"]
    },
    {
      title: "Neural Reality Engine 2025",
      description: "Create and manipulate virtual realities through direct neural interface technology",
      image: "🎮",
      link: "/pages/NeuralRealityEngine2025",
      color: "from-orange-600 to-red-600",
      features: ["Neural VR", "Reality Manipulation", "Consciousness Transfer"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-pulse">⚡</div>
        <div className="absolute bottom-10 left-10 text-4xl opacity-20 animate-bounce">🧠</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5 animate-spin">🌌</div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced technologies that will define the future of humanity
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Slide Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-gray-300 text-lg mb-6">{slide.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {slide.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full text-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <a
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="flex justify-center">
                        <div className={`w-64 h-64 bg-gradient-to-br ${slide.color} rounded-full flex items-center justify-center text-8xl animate-pulse`}>
                          {slide.image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
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

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Quick Access to All Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <div className="text-2xl mb-2">{slide.image}</div>
                <div className="text-sm font-semibold text-center">{slide.title.split(' ')[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;