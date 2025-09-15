import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseItems = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      description: "Experience the next evolution of AI with consciousness simulation and quantum-enhanced processing",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Consciousness Simulation", "Quantum Processing", "Distributed Intelligence"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion",
      description: "Revolutionary convergence of quantum computing and neural networks for exponential computational power",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum Superposition", "Entanglement Networks", "Exponential Speedup"]
    },
    {
      id: 3,
      title: "AI Revolution 2025",
      description: "Discover how artificial intelligence is reshaping industries and creating new opportunities",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/AIRevolution2025",
      features: ["Autonomous Agents", "Edge AI Computing", "Generative AI 2.0"]
    },
    {
      id: 4,
      title: "Neural Interface Future",
      description: "Bridge the gap between mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralInterfaceFuture",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough",
      description: "Experience the future of computing with quantum technology that's solving impossible problems",
      image: "⚡",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumComputingBreakthrough",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 6,
      title: "Advanced AI Transformation",
      description: "Complete guide to AI transformation with autonomous agents and intelligent automation",
      image: "🚀",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/AdvancedAITransformation2025",
      features: ["Autonomous Systems", "Intelligent Automation", "Business Transformation"]
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY SHOWCASE • 2026
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Enhanced Technology Experience
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Immerse yourself in the future of technology with our interactive showcase of cutting-edge innovations
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>

          {/* Slide Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${showcaseItems[currentSlide].gradient} p-12 min-h-[600px] flex items-center`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                    {/* Content */}
                    <div className="text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-6xl mb-6"
                      >
                        {showcaseItems[currentSlide].image}
                      </motion.div>
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl font-bold mb-6"
                      >
                        {showcaseItems[currentSlide].title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl opacity-90 mb-8"
                      >
                        {showcaseItems[currentSlide].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="space-y-3 mb-8"
                      >
                        {showcaseItems[currentSlide].features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                      <motion.a
                        href={showcaseItems[currentSlide].link}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Technology →
                      </motion.a>
                    </div>

                    {/* Visual Element */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative"
                    >
                      <div className="w-full h-80 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <div className="text-8xl animate-bounce">
                          {showcaseItems[currentSlide].image}
                        </div>
                      </div>
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Interactive Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
              <p className="text-gray-300">Experience hands-on demonstrations of our cutting-edge technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">Monitor performance metrics and insights in real-time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Future Predictions</h3>
              <p className="text-gray-300">Explore predictions and trends for the next decade</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deeper into our revolutionary technologies and discover how they can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Our Experts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;