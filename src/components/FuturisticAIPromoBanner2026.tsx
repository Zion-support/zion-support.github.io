import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  X,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Play
} from 'lucide-react';

const FuturisticAIPromoBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: "1M+ Ops/sec", label: "Processing Speed" },
    { value: "99.97%", label: "Accuracy Rate" },
    { value: "50M+", label: "Global Users" },
    { value: "99.99%", label: "Uptime" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev: number) => (prev + 1) % metrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [metrics.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl"
      >
        <div className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Left Side - Main Message */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ 
                    transition={{ 
                      ease: "easeInOut"
                    }}
                  >
                    <Brain className="w-6 h-6 text-cyan-300" />
                  </motion.div>
                  <motion.div
                    animate={{ 
                    transition={{ 
                      ease: "easeInOut"
                    }}
                  >
                    <Zap className="w-5 h-5 text-yellow-300" />
                  </motion.div>
                  <motion.div
                    animate={{ 
                    transition={{ 
                      ease: "easeInOut"
                    }}
                  >
                    <Brain className="w-5 h-5 text-pink-300" />
                  </motion.div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg">
                    🧠 Futuristic AI 2026:
                  </span>
                  <motion.div
                    key={currentMetric}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-cyan-300 font-bold text-lg">
                      {metrics[currentMetric].value}
                    </span>
                    <span className="text-white/80 text-sm">
                      {metrics[currentMetric].label}
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - CTA and Close */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-pink-400"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 12, ease: "linear" }}
              onAnimationComplete={() => setIsVisible(false)}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FuturisticAIPromoBanner2026;