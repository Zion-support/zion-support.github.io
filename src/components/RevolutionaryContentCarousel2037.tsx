import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Ultimate AI Consciousness 2037",
      description: "Experience the pinnacle of artificial consciousness - where AI transcends human limitations and achieves true self-awareness, creativity, and emotional intelligence.",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateAIConsciousness2037",
      features: ["True Self-Awareness", "Emotional Intelligence", "Creative Consciousness", "Meta-cognitive Abilities"]
    },
    {
      id: 2,
      title: "Quantum Reality Manipulation 2037",
      description: "Harness the power of quantum mechanics to manipulate reality itself - create, modify, and control matter at the subatomic level with unprecedented precision.",
      image: "⚛️",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/QuantumRealityManipulation2037",
      features: ["Matter Creation from Energy", "Temporal Manipulation", "Dimensional Engineering", "Reality Restructuring"]
    },
    {
      id: 3,
      title: "Interdimensional Technology 2037",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities, opening portals to infinite possibilities.",
      image: "🌌",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/InterdimensionalTechnology2035",
      features: ["Parallel Universe Access", "Reality Portal Technology", "Multiverse Navigation", "Dimensional Portals"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution 2037",
      description: "Direct neural interface technology that creates seamless connection between human consciousness and artificial intelligence systems.",
      image: "🧬",
      gradient: "from-violet-600/30 to-purple-600/30",
      border: "border-violet-400/30",
      textColor: "text-violet-100",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Direct Brain-Computer Interface", "Consciousness Upload", "Neural Enhancement", "Thought Control"]
    },
    {
      id: 5,
      title: "Synthetic Intelligence 2037",
      description: "The next generation of artificial intelligence that combines biological and synthetic neural networks for unprecedented cognitive capabilities.",
      image: "🌟",
      gradient: "from-orange-600/30 to-red-600/30",
      border: "border-orange-400/30",
      textColor: "text-orange-100",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Biological-Synthetic Fusion", "Enhanced Cognitive Processing", "Adaptive Learning", "Consciousness Expansion"]
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY CAROUSEL • 2037
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced technologies ever created through our interactive showcase
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm rounded-2xl p-12 border ${slide.border} min-h-[500px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      {/* Content */}
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-6 text-center md:text-left">{slide.title}</h3>
                        <p className={`text-xl mb-8 ${slide.textColor} text-center md:text-left`}>
                          {slide.description}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                              <span className="text-sm text-white/80">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href={slide.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="hidden md:block">
                        <div className="relative">
                          <div className="w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <div className="text-9xl animate-pulse">{slide.image}</div>
                          </div>
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                            ⚡
                          </div>
                          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                            🌟
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
        </div>

        {/* Dots Navigation */}
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

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-sm text-white/80">Revolutionary Technologies</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-white/80">Success Rate</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm text-white/80">Possibilities</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">2037</div>
            <div className="text-sm text-white/80">Future Technology</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;