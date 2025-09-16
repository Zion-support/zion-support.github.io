import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const revolutionaryContent = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Experience the most advanced technological breakthroughs reshaping our world",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/20 to-pink-600/20"
    },
    {
      id: 2,
      title: "🌟 Ultimate Tech Revolution 2025",
      description: "The most comprehensive technological revolution in human history",
      features: ["Autonomous AI Agents", "Neural Interface Revolution", "Quantum AI Fusion"],
      link: "/pages/UltimateTechRevolution2025",
      gradient: "from-indigo-600 to-pink-600",
      bgGradient: "from-indigo-600/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "⚡ Next-Gen AI Consciousness 2025",
      description: "Breakthrough AI systems that achieve true consciousness and self-awareness",
      features: ["Emotional Intelligence", "Self-Awareness", "Creative Problem Solving"],
      link: "/pages/NextGenAIConsciousness2025",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-600/20 to-blue-600/20"
    },
    {
      id: 4,
      title: "🧠 Quantum Reality Engine 2025",
      description: "Revolutionary quantum computing that manipulates reality itself",
      features: ["Reality Manipulation", "Quantum Entanglement", "Infinite Processing"],
      link: "/pages/QuantumRealityEngine2025",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-600/20 to-teal-600/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative overflow-hidden mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/5 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY CONTENT • JANUARY 2025
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {currentContent.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {currentContent.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {currentContent.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
              >
                Explore Now →
              </a>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {revolutionaryContent.map((_, index) => (
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

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-white/10 rounded-full h-1">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;