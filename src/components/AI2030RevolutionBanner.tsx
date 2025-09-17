import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Star, 
  Zap, 
  ArrowRight,
  X,
  Play,
  Sparkles
} from 'lucide-react';

const AI2030RevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Conscious AI Systems",
    "Quantum Neural Networks", 
    "Instantaneous Learning",
    "Perfect Security",
    "Global Intelligence"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 border-b border-white/20 backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-white">
                  <motion.h3 
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    AI 2030 Ultimate Revolution
                  </motion.h3>
                  <motion.p 
                    key={`desc-${currentFeature}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm text-gray-300"
                  >
                    {features[currentFeature]}
                  </motion.p>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden md:flex items-center gap-2 text-yellow-400"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">NEW</span>
                </motion.div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/ai-2030-ultimate-revolution"
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-4 h-4" />
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/ai-2030-ultimate-revolution"
                  className="sm:hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-2 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Rocket className="w-5 h-5" />
                </Link>

                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <Link
                  href="/ai-2030-ultimate-revolution"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-semibold">Explore AI 2030 Revolution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  <Star className="w-4 h-4" />
                  <span className="text-xs font-bold">BREAKTHROUGH</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AI2030RevolutionBanner;