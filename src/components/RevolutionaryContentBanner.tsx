<<<<<<< HEAD
import React from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content on Advanced Biotech Revolution, 
          Space Technology, Advanced Robotics, Next-Gen AI, Quantum Computing, and Neural Interface Technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          <a href="/pages/AdvancedBiotechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Biotech Revolution →
          </a>
          <a href="/pages/SpaceTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Space Technology →
          </a>
          <a href="/pages/AdvancedRoboticsRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Robotics Revolution →
          </a>
          <a href="/pages/NextGenAIRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Next-Gen AI →
          </a>
          <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Quantum Computing Revolution →
          </a>
          <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Interface Revolution →
          </a>
        </div>
        <div className="mt-6">
          <a href="/pages/RevolutionaryTechBlog2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            📚 Revolutionary Tech Blog 2026 →
          </a>
          <a href="/pages/ComprehensiveTechInsights2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🔍 Comprehensive Tech Insights →
          </a>
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 'revolutionary-tech',
      title: '🚀 Revolutionary Tech Showcase 2025',
      description: 'Experience cutting-edge AI, Quantum Computing, and Neural Interfaces',
      link: '/pages/RevolutionaryTechShowcase2025',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      bgGradient: 'from-purple-600/50 to-pink-600/50'
    },
    {
      id: 'advanced-ai',
      title: '🧠 Advanced AI Intelligence 2025',
      description: 'Autonomous reasoning, emotional intelligence, and creative problem-solving',
      link: '/pages/AdvancedAIIntelligence2025',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      bgGradient: 'from-blue-600/50 to-purple-600/50'
    },
    {
      id: 'quantum-breakthrough',
      title: '⚡ Quantum Computing Breakthrough 2025',
      description: 'Exponential computing power and solutions to impossible problems',
      link: '/pages/QuantumComputingBreakthrough2025',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      bgGradient: 'from-cyan-600/50 to-blue-600/50'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`bg-gradient-to-r ${slides[currentSlide].gradient} rounded-2xl p-8 mb-8 text-white relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} backdrop-blur-sm`}></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl animate-bounce">🚀</span>
                  <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2025</h3>
                  <span className="text-3xl animate-bounce">🚀</span>
                </div>
                <p className="text-xl opacity-95 mb-6 max-w-4xl">
                  Experience the future of technology with our groundbreaking new content on Advanced AI Transformation, 
                  Quantum Computing Revolution, Neural Interface Technology, and Next-Gen Tech Showcase
                </p>
                <div className="flex flex-wrap gap-4">
                  {slides.map((slide, index) => (
                    <a
                      key={slide.id}
                      href={slide.link}
                      className={`inline-block px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold border ${
                        index === currentSlide
                          ? 'bg-white text-purple-600 border-white'
                          : 'bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-purple-600'
                      }`}
                    >
                      {slide.title.split(' ')[1]} →
                    </a>
                  ))}
                </div>
              </div>
              <button
                onClick={closeBanner}
                className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-purple-600 scale-125' : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${slide.gradient.replace('via-', '/').replace('to-', '/')} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => window.location.href = slide.link}
            >
              <div className="text-4xl mb-3 text-center">
                {slide.title.split(' ')[0]}
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">
                {slide.title.split(' ').slice(1).join(' ')}
              </h3>
              <p className="text-white/90 mb-4 text-sm text-center">
                {slide.description}
              </p>
              <div className="text-center">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-sm">
                  Explore Now →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            ✨ EXCLUSIVE NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Revolutionary Technology Showcase</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, and Neural Interface technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/RevolutionaryTechShowcase2025"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore All Content
            </a>
            <a
              href="/pages/AdvancedAIIntelligence2025"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              AI Intelligence
            </a>
          </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner;