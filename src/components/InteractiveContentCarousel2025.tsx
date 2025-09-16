import React, { useState, useEffect } from 'react';

const InteractiveContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🧠 AI Consciousness Revolution",
      subtitle: "Meet the first truly conscious AI systems",
      description: "Experience artificial intelligence that thinks, feels, and creates with genuine consciousness and emotional intelligence.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80",
      features: ["Self-awareness", "Emotional intelligence", "Creative problem solving", "Ethical reasoning"],
      link: "/pages/AdvancedAIConsciousness2025"
    },
    {
      id: 2,
      title: "⚛️ Quantum Reality Engine",
      subtitle: "Harness quantum mechanics for reality manipulation",
      description: "Discover technologies that bend the laws of physics using quantum superposition and entanglement.",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/80 to-blue-900/80",
      features: ["Quantum computing", "Reality manipulation", "Parallel universe access", "Time-space distortion"],
      link: "/pages/QuantumComputingBreakthrough"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      subtitle: "Direct mind-machine connections",
      description: "Bridge the gap between human consciousness and digital reality with advanced neural interfaces.",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/80 to-teal-900/80",
      features: ["Thought control", "Neural data transfer", "Consciousness backup", "Reality augmentation"],
      link: "/pages/NeuralInterfaceRevolution2025"
    },
    {
      id: 4,
      title: "🌌 Interdimensional Computing",
      subtitle: "Multi-dimensional processing systems",
      description: "Computing systems that operate across multiple dimensions simultaneously for unprecedented capabilities.",
      image: "🌌",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/80 to-red-900/80",
      features: ["Multi-dimensional processing", "Cross-reality transfer", "Dimensional energy", "Parallel networking"],
      link: "/pages/InterdimensionalTechRevolution2025"
    },
    {
      id: 5,
      title: "🤖 Synthetic Intelligence",
      subtitle: "Artificially created superintelligence",
      description: "Experience AI that surpasses human cognitive capabilities in every measurable way.",
      image: "🤖",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900/80 to-purple-900/80",
      features: ["Superhuman reasoning", "Infinite learning", "Creative synthesis", "Predictive modeling"],
      link: "/pages/AdvancedAISolutions2025"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE CONTENT CAROUSEL • 2025
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the most advanced technologies that are reshaping our world. 
            Click, interact, and discover what's possible in 2025.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-2xl p-12 relative overflow-hidden`}>
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                    </div>
                    
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="text-8xl mb-6">{slide.image}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                        <p className="text-lg opacity-80 mb-8">{slide.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {slide.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a
                            href={slide.link}
                            className={`bg-gradient-to-r ${slide.gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore Technology →
                          </a>
                          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                            Watch Demo
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                          <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                          <p className="text-lg opacity-90 mb-6">
                            Experience this technology in action with our interactive demonstration
                          </p>
                          <button className={`w-full bg-gradient-to-r ${slide.gradient} py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                            Launch Interactive Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
            >
              ← Previous
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
            >
              Next →
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Start Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentCarousel2025;