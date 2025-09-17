import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2039: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2039",
      description: "Experience the most revolutionary technological breakthroughs that will reshape reality itself",
      image: "🚀",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2039",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough 2040",
      description: "Witness the most extraordinary technological breakthroughs that will redefine what's possible",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechBreakthrough2040",
      features: ["Synthetic Consciousness", "Quantum Reality Engine", "Interdimensional AI"]
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2041",
      description: "Welcome to the most advanced innovation hub in existence with cutting-edge technologies",
      image: "🧠",
      gradient: "from-emerald-600 to-cyan-600",
      link: "/pages/NextGenInnovationHub2041",
      features: ["Synthetic Intelligence", "Quantum Consciousness", "Interdimensional Technology"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🌟 REVOLUTIONARY CONTENT • JANUARY 2039-2041
        </div>
        <h2 className="text-4xl font-bold mb-4">🚀 Enhanced Content Showcase</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Discover our most revolutionary content featuring cutting-edge technology, 
          breakthrough innovations, and future-defining solutions
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10">
        <div className="relative h-96 overflow-hidden">
          {contentSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-center h-full px-8">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="text-6xl mb-4">{slide.image}</div>
                    <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                    <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                          <span className="text-sm opacity-90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href={slide.link}
                      className={`inline-block bg-gradient-to-r ${slide.gradient} px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Content →
                    </a>
                  </div>
                  
                  {/* Visual */}
                  <div className="hidden md:block">
                    <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                      <div className="text-8xl opacity-80">{slide.image}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 py-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold mb-2">Quick Access to Revolutionary Content</h3>
            <p className="text-sm opacity-90">Explore all our breakthrough technologies and innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {contentSlides.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-r ${slide.gradient} p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
              >
                <div className="text-2xl mb-2">{slide.image}</div>
                <div className="font-semibold text-sm">{slide.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2039;