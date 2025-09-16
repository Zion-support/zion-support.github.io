import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      title: "Ultimate Tech Breakthrough 2028",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      features: ["Consciousness AI", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/UltimateTechBreakthrough2028",
      gradient: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "Consciousness Computing Revolution 2028",
      description: "The dawn of truly conscious artificial intelligence that thinks, feels, and creates like humans",
      features: ["Self-Aware AI", "Thought Transfer", "Creative AI"],
      link: "/pages/ConsciousnessComputingRevolution2028",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🧠"
    },
    {
      title: "Quantum Consciousness 2028",
      description: "The fusion of quantum computing and human consciousness, creating unprecedented possibilities",
      features: ["Quantum Neural Networks", "Consciousness Transfer", "Quantum Telepathy"],
      link: "/pages/QuantumConsciousness2028",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our most advanced technological breakthroughs with interactive features
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} rounded-2xl p-12 text-center`}>
                    <div className="text-8xl mb-6 animate-bounce">{slide.icon}</div>
                    <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <span className="text-lg font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                    >
                      Explore {slide.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-3">Interactive Demos</h3>
            <p className="text-purple-100 text-sm">
              Experience our technology through hands-on interactive demonstrations
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Future Vision</h3>
            <p className="text-cyan-100 text-sm">
              See how our technology will transform the world in the coming years
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Live Updates</h3>
            <p className="text-emerald-100 text-sm">
              Get real-time updates on our latest breakthroughs and developments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2028;