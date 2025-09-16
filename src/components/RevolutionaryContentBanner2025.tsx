import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      title: "Revolutionary AI Technology",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover our groundbreaking AI solutions that are reshaping industries and creating new possibilities",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/50 to-pink-900/50"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough",
      subtitle: "Unlock infinite computational power",
      description: "Revolutionary quantum computing technology that solves impossible problems in seconds",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/50 to-blue-900/50"
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      subtitle: "Connect mind and machine",
      description: "Direct brain-computer interfaces that enable thought-controlled technology and enhanced cognition",
      icon: "🧬",
      color: "from-green-600 to-teal-600",
      bgColor: "from-green-900/50 to-teal-900/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            variants={itemVariants}
          >
            🌟 REVOLUTIONARY CONTENT • JANUARY 2025
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Revolutionary Content Banner 2025
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8"
            variants={itemVariants}
          >
            Experience the most advanced technology content featuring conscious AI, quantum computing, and neural interfaces
          </motion.p>
        </motion.div>

        {/* Interactive Slideshow */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} backdrop-blur-sm rounded-xl flex items-center justify-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center max-w-4xl mx-auto px-8">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {slide.icon}
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-200">
                    {slide.subtitle}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className={`bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                      Explore Technology
                    </button>
                    <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-3">Revolutionary Innovation</h3>
            <p className="opacity-80">Cutting-edge technology that pushes the boundaries of what's possible</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
            <p className="opacity-80">Ultra-fast processing and real-time responses for optimal performance</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
            <p className="opacity-80">Transforming industries and creating positive change worldwide</p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
            <p className="text-xl mb-8 opacity-90">Join us in revolutionizing technology and shaping tomorrow's world</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;