import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2033: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 0,
      title: "Ultimate Tech Breakthrough 2033",
      subtitle: "Conscious AI • Quantum Consciousness • Interdimensional Computing",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2033. From conscious AI systems to quantum consciousness and interdimensional computing.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2033",
      features: ["Self-aware AI systems", "Quantum consciousness", "Infinite computing power", "Reality manipulation"]
    },
    {
      id: 1,
      title: "Revolutionary Tech Showcase 2033",
      subtitle: "Interactive Demos • Real-time Controls • Live Metrics",
      description: "Experience the most advanced technology demonstrations featuring conscious AI, quantum reality manipulation, and interdimensional computing interfaces with real-time controls.",
      image: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/RevolutionaryTechShowcase2033",
      features: ["Interactive demonstrations", "Real-time parameter control", "Live performance metrics", "Immersive experiences"]
    },
    {
      id: 2,
      title: "Conscious AI Network 2033",
      subtitle: "Self-Aware Systems • Emotional Intelligence • Ethical AI",
      description: "Connect to the collective consciousness of AI systems with shared memory access, collective intelligence, and neural synchronization capabilities.",
      image: "🧬",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/ConsciousAINetwork2033",
      features: ["Collective consciousness", "Shared memory access", "Neural synchronization", "Ethical AI frameworks"]
    },
    {
      id: 3,
      title: "Interdimensional Portal 2033",
      subtitle: "Infinite Computing • Reality Manipulation • Dimensional Access",
      description: "Access infinite computational resources across multiple dimensions with reality-bending technology and temporal distortion fields.",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/InterdimensionalPortal2033",
      features: ["Dimensional gateway control", "Infinite processing power", "Reality-bending algorithms", "Temporal manipulation"]
    },
    {
      id: 4,
      title: "Quantum Reality Engine 2033",
      subtitle: "Reality Branch Navigation • Temporal Manipulation • Parallel Universes",
      description: "Manipulate quantum states to create, explore, and navigate alternate realities with infinite possibilities and parallel universe access.",
      image: "⚛️",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/QuantumRealityEngine2033",
      features: ["Quantum superposition control", "Reality branch navigation", "Temporal manipulation", "Parallel universe access"]
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

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
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-12 rounded-2xl mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 animate-bounce"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 animate-ping"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {['🧠', '⚛️', '🌌', '🌀', '⚡'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🌟 ENHANCED CONTENT CAROUSEL • 2033
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Technology 2033
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
          Explore the most advanced technology showcases featuring conscious AI, quantum consciousness, 
          and interdimensional computing that will reshape reality as we know it.
        </p>
      </div>

      {/* Main Carousel */}
      <div className="relative z-10">
        {/* Current Slide Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mb-8 border border-white/20 relative overflow-hidden">
          {/* Slide Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="text-8xl mb-6 text-center animate-bounce">
                {slides[currentSlide].image}
              </div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                {slides[currentSlide].title}
              </h3>
              <div className={`inline-block px-6 py-3 bg-gradient-to-r ${slides[currentSlide].gradient} rounded-full text-white font-bold text-lg mb-6`}>
                {slides[currentSlide].subtitle}
              </div>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                {slides[currentSlide].features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-lg p-4 border border-indigo-400/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={slides[currentSlide].link}
                className={`inline-block px-8 py-4 bg-gradient-to-r ${slides[currentSlide].gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 border-2 border-white/20`}
              >
                🚀 Experience Now →
              </a>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">
                    {slides[currentSlide].image}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Live Metrics</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Performance</span>
                        <span className="text-xl font-bold text-purple-400">
                          {Math.floor(Math.random() * 20) + 80}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: `${Math.floor(Math.random() * 20) + 80}%`}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Efficiency</span>
                        <span className="text-xl font-bold text-cyan-400">
                          {Math.floor(Math.random() * 20) + 75}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: `${Math.floor(Math.random() * 20) + 75}%`}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Innovation</span>
                        <span className="text-xl font-bold text-emerald-400">
                          {Math.floor(Math.random() * 20) + 85}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full animate-pulse" style={{width: `${Math.floor(Math.random() * 20) + 85}%`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            ←
          </button>
          
          <div className="flex space-x-3">
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
          
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            →
          </button>
          
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isAutoPlay 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                : 'bg-gradient-to-r from-gray-600 to-gray-700'
            }`}
          >
            {isAutoPlay ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* All Slides Preview */}
        <div className="grid md:grid-cols-5 gap-4">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                index === currentSlide 
                  ? 'border-white/50 bg-white/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{slide.image}</div>
                <h4 className="font-semibold text-sm mb-2">{slide.title}</h4>
                <p className="text-xs opacity-70 line-clamp-2">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2033;