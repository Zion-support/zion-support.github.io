import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Tech Insights 2026",
      subtitle: "Consciousness Computing & Quantum Reality",
      description: "Discover the revolutionary technology insights that are reshaping our understanding of consciousness, reality, and intelligence in ways never before imagined.",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900 to-pink-900",
      features: [
        "AI Consciousness Breakthrough",
        "Quantum Reality Engineering",
        "Neural Interface Evolution",
        "Synthetic Intelligence"
      ],
      link: "/pages/RevolutionaryTechInsights2026"
    },
    {
      id: 2,
      title: "Ultimate Tech Revolution 2026",
      subtitle: "The Convergence of All Breakthrough Technologies",
      description: "Experience the ultimate convergence of AI consciousness, quantum supremacy, neural interfaces, and synthetic intelligence working in perfect harmony.",
      icon: "🌟",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-900 to-blue-900",
      features: [
        "Multi-Dimensional AI",
        "Quantum Consciousness",
        "Neural Reality Engine",
        "Synthetic Biology"
      ],
      link: "/pages/UltimateTechRevolution2026"
    },
    {
      id: 3,
      title: "Next-Gen Space Technology 2030",
      subtitle: "Interstellar Travel & Mars Colonization",
      description: "Revolutionary space technology enabling humanity's expansion beyond Earth with advanced propulsion, life support, and terraforming capabilities.",
      icon: "🚀",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-900 to-teal-900",
      features: [
        "Faster-Than-Light Travel",
        "Mars Terraforming",
        "Space Habitats",
        "Interstellar Communication"
      ],
      link: "/pages/NextGenSpaceTech2030"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          key={currentSlide}
          className={`bg-gradient-to-br ${revolutionaryContent[currentSlide].bgColor} p-8 md:p-12 text-white relative overflow-hidden transition-all duration-500`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-6xl">{revolutionaryContent[currentSlide].icon}</span>
                    <div>
                      <div className="px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-sm font-bold backdrop-blur-sm">
                        REVOLUTIONARY 2026
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {revolutionaryContent[currentSlide].title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
                    {revolutionaryContent[currentSlide].subtitle}
                  </p>
                  
                  <p className="text-lg mb-8 text-white/80 max-w-2xl">
                    {revolutionaryContent[currentSlide].description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {revolutionaryContent[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={revolutionaryContent[currentSlide].link}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg text-center"
                    >
                      🚀 Explore Now →
                    </a>
                    <button
                      onClick={toggleAutoPlay}
                      className={`px-8 py-4 rounded-lg border-2 border-white transition-colors font-semibold text-lg ${
                        isAutoPlaying 
                          ? 'bg-white/20 text-white hover:bg-white/30' 
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="hidden md:block">
                  <div className="text-8xl opacity-30 text-center">
                    {revolutionaryContent[currentSlide].icon}
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          →
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-3 mt-6">
        {revolutionaryContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {revolutionaryContent.map((content, index) => (
          <a
            key={content.id}
            href={content.link}
            className={`bg-gradient-to-br ${content.bgColor} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 ${
              index === currentSlide ? 'ring-4 ring-white/50' : ''
            }`}
          >
            <div className="text-4xl mb-4">{content.icon}</div>
            <h3 className="text-xl font-bold mb-2">{content.title}</h3>
            <p className="text-sm opacity-90 mb-4">{content.subtitle}</p>
            <div className="flex items-center text-sm font-medium">
              Explore → <span className="ml-2">🚀</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel;