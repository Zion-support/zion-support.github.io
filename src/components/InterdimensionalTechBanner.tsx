import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Globe, 
  Zap,
  ArrowRight,
  X,
  Compass,
  Infinity,
  Sparkles,
  Navigation
} from 'lucide-react';

const InterdimensionalTechBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDimension, setCurrentDimension] = useState(0);

  const dimensions = [
    "Physical Reality",
    "Quantum Realm", 
    "Consciousness Plane",
    "Time Streams",
    "Infinite Realities"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDimension((prev) => (prev + 1) % dimensions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dimensions.length]);

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
          className="fixed top-32 left-0 right-0 z-30 bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 border-b border-white/20 backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ 


                  }}
                  transition={{ 
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center"
                >
                  <Layers className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="text-white">
                  <motion.h3 
                    key={currentDimension}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    Interdimensional Technology 2037
                  </motion.h3>
                  <motion.p 
                    key={`dim-${currentDimension}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-sm text-gray-300"
                  >
                    {dimensions[currentDimension]}
                  </motion.p>
                </div>

                <motion.div
                  animate={{ 


                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="hidden md:flex items-center gap-2 text-cyan-400"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm font-semibold">DIMENSIONS</span>
                </motion.div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/interdimensional-tech-2037"
                  className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Compass className="w-4 h-4" />
                  Enter Dimensions
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/interdimensional-tech-2037"
                  className="sm:hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
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
                  href="/interdimensional-tech-2037"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Explore Interdimensional Tech</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <motion.div
                  animate={{ 


                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="flex items-center gap-1 text-yellow-400"
                >
                  <Infinity className="w-4 h-4" />
                  <span className="text-xs font-bold">REALITIES</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Animated dimensional portals */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{





                }}
                transition={{
                  duration: Math.random() * 10 + 8,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }}
                className="absolute w-2 h-2 border border-indigo-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          {/* Dimensional field effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InterdimensionalTechBanner;