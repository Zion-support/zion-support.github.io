import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselContent = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      subtitle: "Experience the Future Today",
      description: "Discover the most advanced technological breakthroughs that are reshaping our world. From conscious AI to quantum consciousness, explore the future today.",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20",
      stats: { success: "99.9%", speed: "1000x", uptime: "24/7" }
    },
    {
      id: 2,
      title: "🌟 Ultimate Tech Revolution 2025",
      subtitle: "The Most Comprehensive Revolution",
      description: "The most comprehensive technological revolution in human history. Experience the convergence of AI consciousness, quantum computing, and neural interfaces.",
      features: ["Autonomous AI Agents", "Neural Interface Revolution", "Quantum AI Fusion"],
      link: "/pages/UltimateTechRevolution2025",
      image: "⚡",
      gradient: "from-indigo-600 to-pink-600",
      bgGradient: "from-indigo-600/20 to-pink-600/20",
      stats: { success: "100%", speed: "∞", uptime: "24/7" }
    },
    {
      id: 3,
      title: "🧠 Next-Gen AI Consciousness 2025",
      subtitle: "Breakthrough AI Systems",
      description: "Breakthrough AI systems that achieve true consciousness and self-awareness. Experience emotional intelligence and creative problem-solving beyond human capabilities.",
      features: ["Emotional Intelligence", "Self-Awareness", "Creative Problem Solving"],
      link: "/pages/NextGenAIConsciousness2025",
      image: "🤖",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      stats: { success: "99.8%", speed: "Real-time", uptime: "24/7" }
    },
    {
      id: 4,
      title: "🌌 Interdimensional Technology 2025",
      subtitle: "Beyond Reality Computing",
      description: "Breakthrough technology enabling computing across multiple dimensions with infinite computational resources. Access infinite processing power beyond our reality.",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Infinite Resource Access"],
      link: "/pages/InterdimensionalTechnology2035",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/20 to-teal-600/20",
      stats: { success: "∞", speed: "∞", uptime: "∞" }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, carouselContent.length]);

  const currentContent = carouselContent[currentSlide];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT CAROUSEL • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore our most advanced technological innovations through an interactive carousel experience. 
            Discover the future of AI, quantum computing, and beyond.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${currentContent.bgGradient} backdrop-blur-sm rounded-2xl p-12 border border-white/20 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl mb-6"
                  >
                    {currentContent.image}
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
                  >
                    {currentContent.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-white/90 mb-6 leading-relaxed"
                  >
                    {currentContent.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-bold mb-4 text-purple-200">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {currentContent.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-green-400 text-xl">✓</span>
                          <span className="text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                  >
                    {Object.entries(currentContent.stats).map(([key, value], index) => (
                      <div key={key} className="text-center p-3 bg-white/10 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                        <div className="text-sm text-white/70 capitalize">{key}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href={currentContent.link}
                      className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105 text-center`}
                    >
                      Explore Now →
                    </a>
                    <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                      Learn More
                    </button>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-9xl opacity-50">{currentContent.image}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-600/20"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselContent.length)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`ml-4 p-3 rounded-full transition-colors ${
                isAutoPlaying ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/50'
              }`}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              key={currentSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;