import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Next-Gen Innovation Hub 2027",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌟",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/NextGenInnovationHub2027",
      features: ["200+ Active Projects", "99.9% Success Rate", "Infinite Possibilities"]
    },
    {
      id: 3,
      title: "Ultimate Tech Trends 2027",
      description: "Discover the most significant technological trends that will shape our world",
      image: "📈",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/UltimateTechTrends2027",
      features: ["Top 10 Revolutionary Trends", "Industry Impact Analysis", "Future Predictions"]
    },
    {
      id: 4,
      title: "Advanced AI Consciousness 2026",
      description: "Explore the evolution of AI consciousness and its impact on society",
      image: "🤖",
      gradient: "from-orange-600/30 to-red-600/30",
      border: "border-orange-400/30",
      textColor: "text-orange-100",
      link: "/pages/AdvancedAIConsciousness2026",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Problem Solving"]
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Experience the power of quantum computing and its revolutionary applications",
      image: "⚡",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Neural Networks", "Quantum Cryptography", "Quantum Simulation"]
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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ENHANCED CONTENT SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological innovations that will define the future
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border}`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                        <p className={`text-xl ${slide.textColor} mb-8`}>
                          {slide.description}
                        </p>
                        <ul className={`space-y-3 mb-8 ${slide.textColor}`}>
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <span className="w-2 h-2 bg-white rounded-full"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                          <h4 className="text-2xl font-bold mb-4">Key Highlights</h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-lg">Innovation Level</span>
                              <span className="text-2xl font-bold text-green-400">Revolutionary</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg">Impact Score</span>
                              <span className="text-2xl font-bold text-blue-400">10/10</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-lg">Future Potential</span>
                              <span className="text-2xl font-bold text-purple-400">∞</span>
                            </div>
                          </div>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
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

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to All Content</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {slides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-xl p-6 border ${slide.border} hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-3">{slide.image}</div>
                <h4 className="font-bold mb-2 text-sm">{slide.title.split(' ').slice(0, 2).join(' ')}</h4>
                <div className={`w-2 h-2 rounded-full mx-auto ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2028;