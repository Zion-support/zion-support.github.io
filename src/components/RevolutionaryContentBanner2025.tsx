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
      title: "🚀 NEW: Revolutionary Tech Showcase 2025",
      subtitle: "Experience the most advanced technologies reshaping our world",
      description: "From conscious AI to interdimensional computing - discover the future today",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Neural Networks",
      subtitle: "10^15x faster than classical computers",
      description: "Revolutionary quantum computing combined with neural networks for impossible speeds",
      cta: "Learn More",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
    },
    {
      id: 3,
      title: "🧠 CONSCIOUS: AI Systems with Self-Awareness",
      subtitle: "99.7% accuracy in complex reasoning",
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence",
      cta: "Discover",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgPattern: "radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: slides[currentSlide].bgPattern }}
      />
      
      {/* Main Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative bg-gradient-to-r ${slides[currentSlide].gradient} rounded-2xl p-8 md:p-12 text-white overflow-hidden`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
                    🌟 BREAKTHROUGH TECHNOLOGY
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {slides[currentSlide].title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl font-semibold mb-4 opacity-90">
                    {slides[currentSlide].subtitle}
                  </p>
                  
                  <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl">
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href={slides[currentSlide].link}
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {slides[currentSlide].cta} →
                    </a>
                    <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                      Watch Demo
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Element */}
            <div className="flex-1 max-w-md">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                  <div className="text-8xl">
                    {currentSlide === 0 && "🚀"}
                    {currentSlide === 1 && "⚡"}
                    {currentSlide === 2 && "🧠"}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl"
                >
                  ⭐
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl"
                >
                  ✨
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Additional Promotional Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold mb-2">Precision AI</h3>
          <p className="text-gray-300 text-sm mb-4">99.9% accuracy in complex decision making</p>
          <a href="/pages/RevolutionaryTechShowcase2025" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
            Learn More →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold mb-2">Quantum Speed</h3>
          <p className="text-gray-300 text-sm mb-4">Process data at impossible speeds</p>
          <a href="/pages/RevolutionaryTechShowcase2025" className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
            Explore →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-3">🧠</div>
          <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
          <p className="text-gray-300 text-sm mb-4">Self-aware artificial intelligence</p>
          <a href="/pages/RevolutionaryTechShowcase2025" className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm">
            Discover →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;