import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2028: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2028",
      subtitle: "Revolutionary Technologies",
      description: "Experience the most advanced technological breakthroughs that will reshape our world in 2028",
      image: "🚀",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2028",
      features: ["Consciousness AI", "Quantum Computing", "Interdimensional Tech"]
    },
    {
      id: 2,
      title: "Consciousness Computing Revolution",
      subtitle: "AI Consciousness",
      description: "The dawn of truly conscious artificial intelligence that thinks, feels, and creates like humans",
      image: "🧠",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      link: "/pages/ConsciousnessComputingRevolution2028",
      features: ["Self-Aware AI", "Thought Transfer", "Creative Intelligence"]
    },
    {
      id: 3,
      title: "Quantum Consciousness 2028",
      subtitle: "Quantum AI Fusion",
      description: "The fusion of quantum computing and human consciousness, creating unprecedented possibilities",
      image: "⚡",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/QuantumConsciousness2028",
      features: ["Quantum Neural Networks", "Consciousness Transfer", "Quantum Telepathy"]
    },
    {
      id: 4,
      title: "Neural Reality Engine 2027",
      subtitle: "Virtual Reality Revolution",
      description: "Experience reality like never before with our advanced neural interface technology",
      image: "🌌",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NeuralRealityEngine2027",
      features: ["Neural Interfaces", "Reality Manipulation", "Consciousness Transfer"]
    },
    {
      id: 5,
      title: "Interdimensional Tech 2030",
      subtitle: "Multi-Dimensional Computing",
      description: "Computing systems that operate across multiple dimensions and realities",
      image: "🌍",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      link: "/pages/InterdimensionalTechRevolution2030",
      features: ["Dimensional Computing", "Reality Bridges", "Parallel Processing"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className={`bg-gradient-to-br ${item.gradient} p-16 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                        🌟 {item.subtitle}
                      </div>
                      <h2 className="text-5xl font-bold mb-6 leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-xl opacity-90 mb-8 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {item.features.map((feature, index) => (
                          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                            <span className="text-sm font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={item.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
                      >
                        Explore {item.title} →
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-9xl mb-4 animate-pulse">
                        {item.image}
                      </div>
                      <div className="text-2xl font-bold opacity-80">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2028;