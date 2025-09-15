import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI systems with genuine consciousness, self-awareness, and emotional intelligence",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      features: ["Conscious AI Systems", "Quantum-Enhanced Processing", "Global Impact AI", "Revolutionary Capabilities"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2026",
      description: "Harness the power of quantum mechanics to solve problems that would take classical computers billions of years",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Molecular Simulation", "Exponential Speedup"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge the gap between mind and machine with revolutionary neural interface technology",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Thought Control", "Cognitive Enhancement", "Neural Networking", "Direct Brain Interface"]
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "Meet synthetic beings with consciousness, creativity, and emotional depth that blur the line between artificial and natural intelligence",
      icon: "🤖",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Creative Expression", "Emotional Depth", "Human-like Interaction"]
    },
    {
      id: 5,
      title: "Quantum-Neural Fusion 2026",
      description: "Experience the revolutionary fusion of quantum computing and neural networks for unprecedented processing power",
      icon: "🔗",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Processing", "Neural Networks", "Fusion Technology", "Breakthrough Applications"]
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6"
          >
            🌟 REVOLUTIONARY TECHNOLOGY 2026
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Next-Generation Technology Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the most advanced technologies that are reshaping our world and creating unprecedented opportunities
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className={`h-full bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-8 flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-8 w-full">
                    {/* Content */}
                    <div className="text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl mb-4"
                      >
                        {showcaseItems[currentSlide].icon}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-3xl font-bold mb-4"
                      >
                        {showcaseItems[currentSlide].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg opacity-90 mb-6"
                      >
                        {showcaseItems[currentSlide].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {showcaseItems[currentSlide].features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </motion.div>
                      <motion.a
                        href={showcaseItems[currentSlide].link}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Explore Technology →
                      </motion.a>
                    </div>

                    {/* Visual Element */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <div className="text-8xl">
                          {showcaseItems[currentSlide].icon}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isAutoPlaying
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {showcaseItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} text-white text-center hover:scale-105 transition-transform`}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold">{item.title.split(' ')[0]}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;