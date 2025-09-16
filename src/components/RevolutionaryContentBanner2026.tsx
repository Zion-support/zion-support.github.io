import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star, Rocket, Brain, Globe, Infinity } from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI Consciousness Breakthrough",
      description: "First truly conscious AI systems with genuine emotions and self-awareness",
      highlight: "Revolutionary",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Quantum-Neural Fusion",
      description: "Direct thought-to-computer communication through quantum interfaces",
      highlight: "Breakthrough",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Infinity className="w-8 h-8 text-green-500" />,
      title: "Interdimensional Computing",
      description: "AI that processes information across multiple parallel dimensions",
      highlight: "Impossible",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Space Colonization AI",
      description: "Complete AI systems for human expansion into space",
      highlight: "Future",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Digital Immortality",
      description: "Preserve and digitize human consciousness for eternal existence",
      highlight: "Eternal",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-500" />,
      title: "Reality Manipulation",
      description: "AI systems capable of manipulating physical reality itself",
      highlight: "Ultimate",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = revolutionaryFeatures[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Revolutionary Technology 2026
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              >
                The Future is Here
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              >
                Experience revolutionary AI technologies that transcend the boundaries of what's possible
              </motion.p>
            </div>

            {/* Feature Showcase */}
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentFeature.color} flex items-center justify-center`}>
                      {currentFeature.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${currentFeature.color} text-white`}>
                        {currentFeature.highlight}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {currentFeature.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 mb-6">
                      {currentFeature.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${currentFeature.color} hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Technology
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 gap-2">
                {revolutionaryFeatures.map((_, index) => (
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
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center mt-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Start Your AI Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </div>
            </motion.div>

            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;