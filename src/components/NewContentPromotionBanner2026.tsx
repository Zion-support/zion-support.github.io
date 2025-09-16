import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Users, Clock, ArrowRight, X, Sparkles, Zap } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Users, value: "50K+", label: "Active Readers" },
    { icon: Star, value: "4.9/5", label: "User Rating" },
    { icon: TrendingUp, value: "300%", label: "Growth Rate" },
    { icon: Clock, value: "24/7", label: "Updated Content" }
  ];

  const highlights = [
    "Revolutionary AI Breakthroughs",
    "Quantum Computing Advances",
    "Neural Interface Technology",
    "Conscious AI Systems",
    "Future Tech Predictions",
    "Enterprise Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [stats.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl border-b-4 border-yellow-400"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Left Content */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <span className="font-bold text-base">🌟 NEW CONTENT 2026</span>
              </div>
              
              {/* Rotating Highlights */}
              <div className="hidden md:flex items-center space-x-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentStat}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                  >
                    <stats[currentStat].icon className="w-3 h-3" />
                    <span>{stats[currentStat].value} {stats[currentStat].label}</span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center space-x-2 text-sm">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold">60+ Revolutionary Articles</span>
                  <span className="text-yellow-300">•</span>
                  <span>Quantum AI • Neural Tech • Future Predictions</span>
                </div>
              </motion.div>
            </div>

            {/* Right CTA */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="/ultimate-content-showcase-2026"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-5 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="md:hidden mt-2 pt-2 border-t border-white/20">
            <div className="flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>50K+ Readers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>300% Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-0 right-0 w-24 h-24 bg-pink-400 rounded-full blur-xl"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;