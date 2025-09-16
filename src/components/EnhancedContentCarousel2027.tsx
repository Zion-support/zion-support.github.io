import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      id: 1,
      title: "Revolutionary Tech Trends 2027",
      description: "Discover conscious AI systems, quantum consciousness, and interdimensional computing that will reshape our world",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechTrends2027",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Next-Gen AI Breakthrough 2027",
      description: "Experience synthetic consciousness, quantum neural networks, and autonomous AI ecosystems",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenAIBreakthrough2027",
      features: ["Synthetic Consciousness", "Quantum Neural Networks", "Autonomous AI Ecosystems"]
    },
    {
      id: 3,
      title: "Ultimate Tech Showcase 2027",
      description: "Interactive demos of holographic computing, molecular manufacturing, and reality manipulation",
      image: "🌟",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/UltimateTechShowcase2027",
      features: ["Holographic Computing", "Molecular Manufacturing", "Reality Manipulation"]
    },
    {
      id: 4,
      title: "Revolutionary Services 2025",
      description: "Comprehensive suite of cutting-edge technology services and solutions",
      image: "⚡",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/RevolutionaryServices2025",
      features: ["AI Solutions", "Blockchain Services", "Cloud Computing"]
    },
    {
      id: 5,
      title: "Ultimate Tech Breakthrough 2026",
      description: "The most revolutionary technological advances that will reshape our world in 2026",
      image: "🔮",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2026",
      features: ["Advanced AI", "Quantum Computing", "Neural Interfaces"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 overflow-hidden">
        {contentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.gradient} flex items-center`}>
              <div className="container mx-auto px-8 flex items-center">
                <div className="flex-1 text-white">
                  <div className="text-6xl mb-6">{slide.image}</div>
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">{slide.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {slide.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                  >
                    Explore Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          →
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Grid */}
      <div className="bg-gray-800/50 backdrop-blur-sm p-6">
        <h3 className="text-2xl font-bold text-white mb-4 text-center">Featured Content</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {contentSlides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`bg-gradient-to-br ${slide.gradient} rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform ${
                index === currentSlide ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-3xl mb-2 text-center">{slide.image}</div>
              <h4 className="text-white font-semibold text-sm text-center">{slide.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2027;