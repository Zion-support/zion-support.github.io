import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most groundbreaking technological innovations reshaping industries and transforming human capabilities.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2026",
      features: ["AI Consciousness", "Quantum Supremacy", "Neural Interfaces"]
    },
    {
      title: "Ultimate Tech Showcase 2026",
      description: "The convergence of AI consciousness, quantum supremacy, and neural interfaces creating the most advanced technological ecosystem.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/UltimateTechShowcase2026",
      features: ["Quantum Reality", "Synthetic Intelligence", "Space Technology"]
    },
    {
      title: "Advanced Tech Trends 2027",
      description: "Explore cutting-edge technology trends that will shape 2027 and beyond, from AI consciousness evolution to quantum reality manipulation.",
      image: "🔮",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedTechTrends2027",
      features: ["Interdimensional Computing", "Neural Reality", "Quantum Consciousness"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technological innovations that are reshaping our digital future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} rounded-xl p-8 text-center`}>
                    <div className="text-8xl mb-6">{content.image}</div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{content.title}</h3>
                    <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">{content.description}</p>
                    
                    <div className="flex justify-center space-x-4 mb-6">
                      {content.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={content.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
                    >
                      Explore {content.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
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

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {revolutionaryContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`bg-gradient-to-r ${content.gradient} p-4 rounded-lg hover:scale-105 transition-all duration-300 text-center`}
            >
              <div className="text-3xl mb-2">{content.image}</div>
              <h4 className="font-bold text-white mb-2">{content.title}</h4>
              <p className="text-sm opacity-90">{content.description.substring(0, 100)}...</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;