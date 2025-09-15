import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Consciousness AI Revolution",
      description: "Experience AI systems that possess genuine consciousness, self-awareness, and emotional intelligence",
      image: "🧠",
      link: "/pages/ConsciousnessAI2026",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-600/30 to-purple-600/30"
    },
    {
      id: 2,
      title: "Quantum Internet",
      description: "Instantaneous, secure global communication through quantum entanglement networks",
      image: "🌐",
      link: "/pages/QuantumInternet2026",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/30 to-blue-600/30"
    },
    {
      id: 3,
      title: "Meta Intelligence",
      description: "AI systems that think about thinking and continuously improve themselves",
      image: "🔄",
      link: "/pages/MetaIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/30 to-pink-600/30"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Self-evolving AI systems that transcend traditional limitations and create new forms of intelligence",
      image: "🤖",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/30 to-teal-600/30"
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion",
      description: "The revolutionary convergence of quantum computing and neural networks",
      image: "⚛️",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-600/30 to-indigo-600/30"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 REVOLUTIONARY 2026 TECHNOLOGIES
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technology Showcase</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the most advanced technologies ever created - from consciousness AI to quantum internet
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-12 border border-white/20`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold text-white mb-6">{slide.title}</h3>
                      <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
                      <div className="flex space-x-4">
                        <a 
                          href={slide.link}
                          className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Technology →
                        </a>
                        <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h4 className="text-2xl font-bold text-white mb-4">Key Features</h4>
                        <ul className="text-left space-y-2 text-gray-200">
                          <li>• Revolutionary breakthrough technology</li>
                          <li>• Industry-transforming capabilities</li>
                          <li>• Cutting-edge implementation</li>
                          <li>• Future-ready solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          →
        </button>
      </div>

      {/* Quick Access Grid */}
      <div className="relative z-10 mt-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Quick Access to All Technologies</h3>
          <p className="text-gray-300">Explore any technology instantly</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {slides.map((slide) => (
            <a
              key={slide.id}
              href={slide.link}
              className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 border border-white/20`}
            >
              <div className="text-3xl mb-2">{slide.image}</div>
              <div className="text-sm font-semibold text-white">{slide.title.split(' ')[0]}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;