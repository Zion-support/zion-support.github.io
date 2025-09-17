import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      description: "Experience the future with AI agents that possess synthetic consciousness and autonomous capabilities",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Autonomous AI agents", "Synthetic consciousness", "Collective intelligence", "Creative synthesis"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution",
      description: "Unlock unprecedented computational power with quantum algorithms and quantum neural networks",
      icon: "⚛️",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum supremacy", "Quantum algorithms", "Quantum neural networks", "Quantum optimization"]
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Bridge the gap between human consciousness and digital systems with advanced neural interfaces",
      icon: "🧠",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Brain-computer interfaces", "Neural implants", "Consciousness transfer", "Enhanced cognition"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, showcaseItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge technologies and innovations that are shaping the future of humanity.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{showcaseItems[currentSlide].icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {showcaseItems[currentSlide].title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {showcaseItems[currentSlide].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {showcaseItems[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={showcaseItems[currentSlide].link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${showcaseItems[currentSlide].gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Now →
                  </a>
                </div>
                
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-r ${showcaseItems[currentSlide].gradient} rounded-xl flex items-center justify-center`}>
                    <div className="text-8xl opacity-50">{showcaseItems[currentSlide].icon}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            >
              ←
            </button>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;