import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2045: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2045",
      subtitle: "Transcendent AI Consciousness & Quantum Reality Engine",
      description: "Experience the most revolutionary technologies that will reshape reality itself",
      link: "/pages/UltimateTechBreakthrough2045",
      icon: "🌟",
      color: "from-purple-600 via-pink-600 to-red-600",
      features: ["Transcendent AI", "Quantum Reality", "Neural Transcendence", "Interdimensional Commerce"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2050",
      subtitle: "Omniversal Computing & Consciousness Synthesis",
      description: "Discover technologies that transcend the boundaries of reality and consciousness",
      link: "/pages/RevolutionaryTechShowcase2050",
      icon: "🚀",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      features: ["Omniversal Computing", "Consciousness Synthesis", "Temporal Architecture", "Reality Fabrication"]
    },
    {
      id: 3,
      title: "Future Technology Revolution",
      subtitle: "The Next Evolution of Human Existence",
      description: "Join the revolution that will define the future of consciousness and technology",
      link: "/pages/FutureTechnologyRevolution",
      icon: "✨",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      features: ["Universal Access", "Consciousness Evolution", "Reality Manipulation", "Infinite Possibilities"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 mb-12 border border-purple-500/30"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE CONTENT • 2045-2050
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced technological breakthroughs that will reshape reality itself
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{contentSlides[currentSlide].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {contentSlides[currentSlide].title}
                      </h3>
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-full text-sm font-semibold text-white`}>
                        {contentSlides[currentSlide].subtitle}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    {contentSlides[currentSlide].description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {contentSlides[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-full mr-2`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={contentSlides[currentSlide].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].color} text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                  >
                    Explore Now →
                  </motion.a>
                </div>

                {/* Visual Element */}
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-64 h-64 mx-auto bg-gradient-to-r ${contentSlides[currentSlide].color} rounded-full flex items-center justify-center text-8xl shadow-2xl`}
                  >
                    {contentSlides[currentSlide].icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.a
            href="/pages/UltimateTechBreakthrough2045"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold"
          >
            <div className="text-2xl mb-2">🌟</div>
            <div className="text-sm">Ultimate Breakthrough</div>
          </motion.a>
          <motion.a
            href="/pages/RevolutionaryTechShowcase2050"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold"
          >
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm">Revolutionary Showcase</div>
          </motion.a>
          <motion.a
            href="/pages/FutureTechnologyRevolution"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold"
          >
            <div className="text-2xl mb-2">✨</div>
            <div className="text-sm">Future Revolution</div>
          </motion.a>
          <motion.a
            href="/pages/ConsciousnessEvolution2055"
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center font-semibold"
          >
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-sm">Consciousness Evolution</div>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2045;