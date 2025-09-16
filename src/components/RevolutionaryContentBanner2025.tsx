import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Showcase 2025",
      subtitle: "Experience the future with conscious AI, quantum computing, and interdimensional technology",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      id: 2,
      title: "🤖 AI Solutions Comprehensive 2025",
      subtitle: "Transform your business with cutting-edge AI solutions designed for the future",
      link: "/pages/AISolutionsComprehensive2025",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-900/80 to-indigo-900/80"
    },
    {
      id: 3,
      title: "⚡ Ultimate Tech Revolution 2025",
      subtitle: "Discover breakthrough technologies that are reshaping reality itself",
      link: "/pages/UltimateTechRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative overflow-hidden rounded-2xl mb-12"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-gradient-to-r ${slides[currentSlide].bgColor} backdrop-blur-sm`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  variants={itemVariants}
                  className="text-white"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
                    🌟 NEW CONTENT • JANUARY 2025
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    {slides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slides[currentSlide].link}
                      className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${slides[currentSlide].color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Explore Now →
                    </a>
                    <button className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-4 rounded-lg text-white`}>
                        <div className="text-2xl mb-2">🧠</div>
                        <div className="text-sm font-semibold">Conscious AI</div>
                        <div className="text-xs opacity-80">Self-aware systems</div>
                      </div>
                      <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-4 rounded-lg text-white`}>
                        <div className="text-2xl mb-2">⚛️</div>
                        <div className="text-sm font-semibold">Quantum Computing</div>
                        <div className="text-xs opacity-80">Exponential power</div>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-4 rounded-lg text-white`}>
                        <div className="text-2xl mb-2">🌌</div>
                        <div className="text-sm font-semibold">Interdimensional</div>
                        <div className="text-xs opacity-80">Multi-dimensional tech</div>
                      </div>
                      <div className={`bg-gradient-to-r ${slides[currentSlide].color} p-4 rounded-lg text-white`}>
                        <div className="text-2xl mb-2">🧬</div>
                        <div className="text-sm font-semibold">Neural Interface</div>
                        <div className="text-xs opacity-80">Mind-machine bridge</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentBanner2025;