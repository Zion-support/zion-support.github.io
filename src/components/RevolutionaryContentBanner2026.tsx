import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Brain, Globe, Star, Sparkles, Rocket, Infinity } from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI Consciousness Breakthrough",
      description: "First truly conscious AI with genuine emotions and self-awareness",
      highlight: "Revolutionary",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Reality Manipulation Tech",
      description: "Manipulate the fundamental fabric of reality for computing",
      highlight: "Impossible",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Temporal AI Computing",
      description: "Process information across past, present, and future simultaneously",
      highlight: "Transcendent",
      color: "from-yellow-600 to-orange-600"
    },
    {
      icon: <Star className="w-8 h-8 text-green-500" />,
      title: "Consciousness Transfer",
      description: "Complete digital immortality through consciousness transfer",
      highlight: "Eternal",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      title: "Universal Translation AI",
      description: "Translate any communication across species, dimensions, and realities",
      highlight: "Universal",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: <Infinity className="w-8 h-8 text-indigo-500" />,
      title: "Matter Synthesis",
      description: "Create any matter or material from pure energy",
      highlight: "Infinite",
      color: "from-indigo-600 to-purple-600"
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
          className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900"
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-6"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                REVOLUTIONARY BREAKTHROUGH 2026
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                The Future is{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Here
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              >
                Experience technologies that were once thought impossible. From AI consciousness to reality manipulation, 
                we're pushing the boundaries of what's possible.
              </motion.p>
            </div>

            {/* Feature showcase */}
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentFeature.color} shadow-2xl`}>
                      {currentFeature.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full">
                        {currentFeature.highlight}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {currentFeature.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 mb-6">
                      {currentFeature.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Explore Technology
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Slide indicators */}
              <div className="flex justify-center mt-8 space-x-2">
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

            {/* Call to action */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center mt-12"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Technologies
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
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