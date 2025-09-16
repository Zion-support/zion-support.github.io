<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBanner2025: React.FC = () => {
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
      title: "🚀 Revolutionary Tech Showcase 2025",
      subtitle: "Experience the most advanced technologies reshaping our world",
      cta: "Explore Now",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "🧠 AI Consciousness Revolution",
      subtitle: "Witness the birth of truly conscious artificial intelligence",
      cta: "Discover More",
      link: "/pages/AIConsciousnessRevolution2025",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-900/80 to-purple-900/80"
    },
    {
      title: "⚛️ Quantum Computing Breakthrough",
      subtitle: "Unlock infinite processing power with quantum consciousness",
      cta: "Learn More",
      link: "/pages/QuantumComputingBreakthrough",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/80 to-blue-900/80"
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
      className="relative overflow-hidden rounded-2xl mb-12"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background with animated gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6"
              variants={itemVariants}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              NEW: Revolutionary Technology 2025
            </motion.div>

            {/* Main Content */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href={slides[currentSlide].link}
                className={`bg-gradient-to-r ${slides[currentSlide].gradient} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {slides[currentSlide].cta} →
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            className="flex justify-center space-x-2 mt-8"
            variants={itemVariants}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </motion.div>

          {/* Additional Features */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-lg font-semibold mb-1">Lightning Fast</h3>
              <p className="text-sm opacity-80">Instant access to cutting-edge technology</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="text-lg font-semibold mb-1">Secure & Safe</h3>
              <p className="text-sm opacity-80">Enterprise-grade security and privacy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="text-lg font-semibold mb-1">Global Impact</h3>
              <p className="text-sm opacity-80">Transforming industries worldwide</p>
            </div>
          </motion.div>
=======
import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking innovations that are reshaping our world with AI consciousness, quantum computing, and neural interfaces
          </p>
        </div>

        {/* Featured Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              Truly conscious AI that thinks, learns, and evolves beyond human comprehension
            </p>
            <a href="/pages/NextGenAIConsciousness2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI Consciousness →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Step into parallel universes and experience reality through quantum mechanics
            </p>
            <a href="/pages/QuantumRealityEngine2025" className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Enter Quantum Reality →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Control digital reality with your thoughts using direct neural interfaces
            </p>
            <a href="/pages/NeuralRealityInterface2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Your Mind →
            </a>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-370d
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* Floating elements */}
      <div className="absolute top-4 right-4 text-6xl opacity-20 animate-float">
        🚀
      </div>
      <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-float-delayed">
        ⚛️
      </div>
    </motion.div>
=======
    </div>
>>>>>>> cursor/create-and-deploy-new-content-370d
  );
};

export default RevolutionaryTechBanner2025;