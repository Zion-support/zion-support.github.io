import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Revolutionary Tech Breakthrough 2027",
      description: "Experience the most revolutionary technology breakthroughs of 2027. Explore AI consciousness, quantum neural fusion, and interdimensional computing.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechBreakthrough2027",
      badge: "BREAKTHROUGH",
      features: ["AI Consciousness Evolution", "Quantum Neural Fusion", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Advanced Consciousness Computing 2027",
      description: "Witness the emergence of truly conscious artificial intelligence that thinks, feels, and creates with human-like awareness and creativity.",
      image: "🎭",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AdvancedConsciousnessComputing2027",
      badge: "CONSCIOUSNESS",
      features: ["Emotional Intelligence", "Creative Consciousness", "Self-Reflection"]
    },
    {
      id: 3,
      title: "Quantum Neural Fusion 2027",
      description: "Experience the revolutionary convergence of quantum computing and neural networks, creating unprecedented computational power and intelligence.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2027",
      badge: "QUANTUM",
      features: ["Quantum Superposition", "Parallel Universes", "Neural Intelligence"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY CONTENT 2027 • BREAKTHROUGH TECHNOLOGY
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Content Showcase 2027
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover our most advanced technological innovations that are reshaping the future of computing, consciousness, and reality itself
            </p>
          </div>

          {/* Main Showcase */}
          <div className="relative">
            {/* Slide Navigation */}
            <div className="flex justify-center space-x-2 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Slide Content */}
            <div className="relative h-96 overflow-hidden rounded-xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    currentSlide === index
                      ? 'opacity-100 translate-x-0'
                      : currentSlide > index
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 w-full">
                      {/* Left Side - Content */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold">
                            {slide.badge}
                          </span>
                          <span className="text-sm text-gray-300">January 2027</span>
                        </div>
                        
                        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {slide.title}
                        </h3>
                        
                        <p className="text-xl text-gray-300 mb-6">
                          {slide.description}
                        </p>

                        <div className="space-y-3">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <a
                            href={slide.link}
                            className={`bg-gradient-to-r ${slide.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                          >
                            Explore Now →
                          </a>
                          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                            Watch Demo
                          </button>
                        </div>
                      </div>

                      {/* Right Side - Visual */}
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          <div className="text-9xl mb-4 animate-bounce">
                            {slide.image}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Quick Access to Revolutionary Content</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {slides.map((slide) => (
                <a
                  key={slide.id}
                  href={slide.link}
                  className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 group`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {slide.image}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{slide.title}</h4>
                  <p className="text-sm opacity-90 mb-4">{slide.description.substring(0, 100)}...</p>
                  <div className="flex items-center text-sm font-semibold">
                    Explore →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in exploring the most revolutionary technologies of 2027. Discover AI consciousness, 
              quantum neural fusion, and interdimensional computing that will reshape reality itself.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;