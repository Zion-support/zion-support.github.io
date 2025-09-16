import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 0,
      title: "🚀 Revolutionary AI Technology 2025",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover our breakthrough AI solutions that are reshaping industries worldwide",
      cta: "Explore AI Solutions",
      link: "/pages/AISolutionsComprehensive2025",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)"
    },
    {
      id: 1,
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlock infinite computational power",
      description: "Breakthrough quantum technologies that solve impossible problems",
      cta: "Go Quantum",
      link: "/pages/QuantumComputingRevolution2025",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgPattern: "radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
    },
    {
      id: 2,
      title: "🧬 Neural Interface Technology",
      subtitle: "Connect mind and machine",
      description: "Direct brain-computer interfaces that transcend physical limitations",
      cta: "Connect Now",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgPattern: "radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Technology",
      subtitle: "Bridge multiple realities",
      description: "Revolutionary technology that accesses parallel dimensions",
      cta: "Enter Multiverse",
      link: "/pages/InterdimensionalTechRevolution2026",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      bgPattern: "radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)"
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
      className="relative overflow-hidden rounded-3xl mb-12"
    >
      <div className="relative">
        {/* Background with animated pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ background: slides[currentSlide].bgPattern }}
        />
        
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} opacity-90`} />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 p-12 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse"
                >
                  🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
                </motion.div>
                
                <motion.h2
                  variants={itemVariants}
                  className="text-5xl font-bold leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl opacity-90"
                >
                  {slides[currentSlide].subtitle}
                </motion.h3>
                
                <motion.p
                  variants={itemVariants}
                  className="text-xl opacity-80 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href={slides[currentSlide].link}
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    {slides[currentSlide].cta} →
                  </a>
                  <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>

              {/* Visual Content */}
              <motion.div
                key={`visual-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative">
                  {/* Main visual element */}
                  <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-pulse">
                        {slides[currentSlide].id === 0 && "🤖"}
                        {slides[currentSlide].id === 1 && "⚛️"}
                        {slides[currentSlide].id === 2 && "🧬"}
                        {slides[currentSlide].id === 3 && "🌌"}
                      </div>
                      <div className="text-2xl font-bold mb-2">Interactive Demo</div>
                      <div className="text-white/70">Experience the technology</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="text-2xl">⚡</div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-xl">🚀</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          <div className="text-2xl">‹</div>
        </button>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          <div className="text-2xl">›</div>
        </button>
      </div>
    </motion.div>
  );
};

export default UltimateContentBanner2025;