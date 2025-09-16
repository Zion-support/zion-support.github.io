<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> cursor/create-and-deploy-new-content-f2a8

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: Revolutionary AI Solutions 2025",
      description: "Experience groundbreaking AI technologies that are reshaping industries",
      link: "/pages/RevolutionaryAISolutions2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/90 to-pink-900/90"
    },
    {
      id: 2,
      title: "⚡ BREAKTHROUGH: Quantum Computing Revolution",
      description: "Discover quantum-powered solutions that solve impossible problems",
      link: "/pages/QuantumComputingRevolution2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/90 to-blue-900/90"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Technology",
      description: "Connect your mind directly to AI systems with neural interfaces",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/90 to-teal-900/90"
    },
    {
      id: 4,
      title: "🌟 ULTIMATE: Next-Gen Innovation Hub",
      description: "Explore the most advanced technologies shaping our future",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/90 to-red-900/90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden mb-12">
      <div className={`bg-gradient-to-r ${promotions[currentSlide].bgColor} backdrop-blur-sm rounded-2xl p-8 text-white relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold animate-pulse">
                  NEW CONTENT
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-semibold">
                  JANUARY 2025
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {promotions[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                {promotions[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={promotions[currentSlide].link}
                  className={`bg-gradient-to-r ${promotions[currentSlide].color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                >
                  Explore Now →
                </a>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="hidden md:block ml-8">
              <div className="text-8xl opacity-20">
                {currentSlide === 0 && "🤖"}
                {currentSlide === 1 && "⚛️"}
                {currentSlide === 2 && "🧠"}
                {currentSlide === 3 && "🌟"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
=======
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse text-black"
          >
            🎉 NEW CONTENT ALERT • JANUARY 2025
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary New Content Just Dropped!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl opacity-90 max-w-4xl mx-auto mb-8"
          >
            Discover the latest breakthroughs in AI consciousness, quantum computing, and interdimensional technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
          >
            {[
              {
                icon: "🧠",
                title: "AI Consciousness",
                description: "Self-aware AI systems",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Quantum Computing",
                description: "Impossible problem solving",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🧬",
                title: "Neural Interfaces",
                description: "Mind-machine connection",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: "🌌",
                title: "Interdimensional Tech",
                description: "Multi-dimensional computing",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-sm opacity-90 text-center">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore New Content →
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400/20 transition-all duration-300 font-semibold text-lg">
              Watch Trailer
            </button>
            <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-400/20 transition-all duration-300 font-semibold text-lg">
              Download PDF
            </button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                50+
              </motion.div>
              <div className="text-sm opacity-90">New Technologies</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                1000+
              </motion.div>
              <div className="text-sm opacity-90">Interactive Demos</div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
              >
                24/7
              </motion.div>
              <div className="text-sm opacity-90">Content Updates</div>
            </div>
          </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-f2a8
        </div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;