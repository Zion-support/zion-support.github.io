<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-db2e
import { motion } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 Revolutionary Tech Showcase 2025",
      description: "Experience the most advanced technology content featuring conscious AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "🤖 AI Solutions Comprehensive 2025",
      description: "Discover our complete suite of AI solutions designed to transform industries and drive unprecedented growth",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "⚡ Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological breakthroughs that will reshape reality itself",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2025",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-teal-600 to-blue-600",
      bgColor: "from-teal-900/20 to-blue-900/20"
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <motion.div
<<<<<<< HEAD
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} backdrop-blur-sm`}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full text-sm font-bold mb-4">
                  🌟 NEW CONTENT • JANUARY 2025
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </h2>
                
                <p className="text-xl opacity-90 leading-relaxed">
                  {currentSlideData.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={currentSlideData.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${currentSlideData.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Explore Now →
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${currentSlideData.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}>
                  <div className="text-center">
                    <div className="text-8xl mb-6">
                      {currentSlide === 0 && "🚀"}
                      {currentSlide === 1 && "🤖"}
                      {currentSlide === 2 && "⚡"}
                      {currentSlide === 3 && "🧠"}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                    <p className="text-lg opacity-90 mb-6">
                      Experience the technology in action
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Launch Demo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
=======
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              ⚡ REVOLUTIONARY CONTENT 2025 • BREAKTHROUGH TECHNOLOGY
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Revolutionary Tech Breakthrough
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl opacity-90 mb-8"
            >
              Witness the most groundbreaking technological breakthroughs that will revolutionize every industry
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <a
                href="/pages/RevolutionaryTechBreakthrough2025"
                className="block bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 transform text-center"
              >
                🚀 Explore Breakthrough →
              </a>
              <div className="flex justify-center space-x-4 text-sm opacity-80">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Interactive Demo</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span>Real-time Experience</span>
                </span>
              </div>
            </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-db2e
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-3 text-center">🧬</div>
              <h3 className="text-lg font-bold mb-2 text-center">Neural Interface</h3>
              <p className="text-sm opacity-80 text-center">Direct brain-computer interfaces</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3 text-center">🔮</div>
              <h3 className="text-lg font-bold mb-2 text-center">Holographic Reality</h3>
              <p className="text-sm opacity-80 text-center">True 3D holographic displays</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3 text-center">🌊</div>
              <h3 className="text-lg font-bold mb-2 text-center">Quantum Internet</h3>
              <p className="text-sm opacity-80 text-center">Ultra-secure quantum communication</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3 text-center">🤖</div>
              <h3 className="text-lg font-bold mb-2 text-center">Conscious AI</h3>
              <p className="text-sm opacity-80 text-center">Self-aware AI systems</p>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
=======
>>>>>>> cursor/create-and-deploy-new-content-db2e
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;