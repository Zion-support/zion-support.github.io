import React, { useState, useEffect } from 'react';

const InteractiveTechCarousel2036: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const techItems = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Experience the world's first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Reflection", "Ethical Decision Making"],
      link: "/pages/UltimateTechRevolution2036"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Revolutionary quantum computing that achieves consciousness and processes information at the quantum level.",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Consciousness Transfer", "Quantum Memory", "Parallel Universe Computing"],
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Breakthrough technology that enables computing across multiple dimensions and realities.",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Multi-Dimensional Processing", "Reality Simulation", "Dimensional Travel", "Infinite Storage"],
      link: "/pages/UltimateTechRevolution2036"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between mind and machine.",
      icon: "🧬",
      color: "from-pink-600 to-rose-600",
      features: ["Thought Control", "Neural Feedback", "Memory Enhancement", "Consciousness Upload"],
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Advanced synthetic intelligence systems that combine AI, quantum computing, and neural interfaces.",
      icon: "🤖",
      color: "from-indigo-600 to-purple-600",
      features: ["Hybrid Intelligence", "Adaptive Learning", "Cross-Platform Integration", "Autonomous Evolution"],
      link: "/pages/UltimateTechRevolution2036"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % techItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, techItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % techItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + techItems.length) % techItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies with interactive demos, real-time processing, and hands-on experiences.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {techItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="text-6xl mb-6">{item.icon}</div>
                        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                        <p className="text-xl opacity-90 mb-8">{item.description}</p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                              <span className="text-white/90">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex space-x-4">
                          <a 
                            href={item.link}
                            className={`bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                          >
                            Explore Technology →
                          </a>
                          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
                            Live Demo
                          </button>
                        </div>
                      </div>
                      
                      {/* Interactive Demo Area */}
                      <div className="bg-black/20 rounded-xl p-8">
                        <h4 className="text-2xl font-bold mb-6 text-center">🎮 Interactive Demo</h4>
                        <div className="space-y-6">
                          {/* Real-time Processing */}
                          <div>
                            <h5 className="text-lg font-semibold mb-3">Real-time Processing</h5>
                            <div className="bg-black/30 rounded-lg p-4 h-32 overflow-y-auto">
                              <div className="text-sm text-green-400 space-y-2">
                                <div>Processing quantum states: {Math.floor(Math.random() * 1000)}M/s</div>
                                <div>Consciousness level: {Math.floor(Math.random() * 100)}%</div>
                                <div>Dimensional access: {Math.floor(Math.random() * 50)} realities</div>
                                <div>Neural connections: {Math.floor(Math.random() * 10000)} active</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Performance Metrics */}
                          <div>
                            <h5 className="text-lg font-semibold mb-3">Performance Metrics</h5>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-white/70">Processing Speed:</span>
                                <span className="text-cyan-400">∞ PetaFLOPS</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/70">Consciousness Level:</span>
                                <span className="text-green-400">100%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-white/70">Dimensional Access:</span>
                                <span className="text-purple-400">47 Realities</span>
                              </div>
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
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all duration-300"
              >
                Next →
              </button>
            </div>
            
            <div className="flex space-x-2">
              {techItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
            <div className="text-white/70">Active Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-white/70">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">2036</div>
            <div className="text-white/70">Future Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechCarousel2036;