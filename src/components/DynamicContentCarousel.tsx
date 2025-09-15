import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "AI Consciousness Revolution",
      description: "Experience the dawn of artificial consciousness with self-aware AI systems",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIConsciousnessRevolution2026",
      badge: "NEW"
    },
    {
      id: 2,
      title: "Quantum Reality 2026",
      description: "Step into quantum-powered virtual worlds with unprecedented realism",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumReality2026",
      badge: "HOT"
    },
    {
      id: 3,
      title: "Metaverse AI Integration",
      description: "Enter intelligent virtual worlds powered by advanced AI systems",
      image: "🌐",
      gradient: "from-pink-600 to-purple-600",
      link: "/pages/MetaverseAI2026",
      badge: "TRENDING"
    },
    {
      id: 4,
      title: "Ultimate Tech Trends 2026",
      description: "Stay ahead with comprehensive insights into revolutionary technologies",
      image: "📈",
      gradient: "from-blue-600 to-indigo-600",
      link: "/pages/UltimateTechTrends2026",
      badge: "INSIGHTS"
    },
    {
      id: 5,
      title: "Advanced Biotech Revolution",
      description: "Explore revolutionary biotechnology transforming healthcare and human enhancement",
      image: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      badge: "BREAKTHROUGH"
    },
    {
      id: 6,
      title: "Space Tech Innovation",
      description: "Discover cutting-edge space technologies enabling interstellar exploration",
      image: "🚀",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/SpaceTechInnovation2026",
      badge: "FUTURE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

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
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${slide.gradient} p-12 text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                </div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1 pr-8">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white mr-4`}>
                        {slide.badge}
                      </span>
                      <span className="text-sm opacity-90">Revolutionary Technology</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    
                    <p className="text-xl opacity-90 mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={slide.link}
                        className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                      >
                        Explore Now →
                      </a>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-8xl opacity-20">
                    {slide.image}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
              index === currentSlide 
                ? `bg-gradient-to-br ${slide.gradient} text-white shadow-lg` 
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
            }`}
          >
            <div className="text-3xl mb-2">{slide.image}</div>
            <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
            <div className={`text-xs ${index === currentSlide ? 'text-white/80' : 'text-gray-500'}`}>
              {slide.badge}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;