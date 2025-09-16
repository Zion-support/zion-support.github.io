import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Infinity,
  Sparkles,
  ArrowRight,
  X,
  Eye,
  Zap
} from 'lucide-react';

const QuantumConsciousnessBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  const consciousnessLevels = [
    "Quantum Awareness",
    "Conscious Integration", 
    "Universal Connection",
    "Transcendent Being"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLevel((prev) => (prev + 1) % consciousnessLevels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [consciousnessLevels.length]);

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
          className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 border-b border-white/20 backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ 


                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <Atom className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-white">
                  <motion.h3 
                    key={currentLevel}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  >
                    Quantum Consciousness 2035
                  </motion.h3>
                  <motion.p 
                    key={`level-${currentLevel}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm text-gray-300"
                  >
                    {consciousnessLevels[currentLevel]}
                  </motion.p>
                </div>

                <motion.div
                  animate={{ 


                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden md:flex items-center gap-2 text-cyan-400"
                >
                  <Brain className="w-4 h-4" />
                  <span className="text-sm font-semibold">CONSCIOUSNESS</span>
                </motion.div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/quantum-consciousness-2035"
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Eye className="w-4 h-4" />
                  Transcend Reality
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/quantum-consciousness-2035"
                  className="sm:hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  <Infinity className="w-5 h-5" />
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
                  href="/quantum-consciousness-2035"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Explore Quantum Consciousness</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <motion.div
                  animate={{ 


                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">TRANSCEND</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animated quantum particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{




                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          {/* Quantum field effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuantumConsciousnessBanner;