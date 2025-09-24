import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, TrendingUp, Users, ArrowRight, X, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2026PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "60+ Revolutionary AI Articles",
    "Quantum Computing Breakthroughs", 
    "Conscious AI Systems Guide",
    "Future Tech Predictions 2026-2030",
    "Enterprise AI Transformation",
    "Neural Interface Technology"
  ];

  const benefits = [
    "Exclusive Access to Premium Content",
    "Advanced AI Implementation Guides",
    "Real-time Tech Trend Analysis",
    "Expert Insights & Case Studies",
    "Future-Ready Business Strategies"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left Content */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <span className="font-bold text-lg">🚀 ULTIMATE CONTENT SHOWCASE 2026</span>
              </div>
              
              {/* Rotating Features */}
              <div className="hidden md:flex items-center space-x-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {features[currentFeature]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Center CTA */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="/ultimate-content-showcase-2026"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <div className="hidden sm:flex items-center space-x-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
                <Users className="w-4 h-4 ml-2" />
                <span>50K+ Users</span>
              </div>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Expanded Benefits (on larger screens) */}
          <div className="hidden lg:block mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <span className="text-sm font-medium">What You Get:</span>
                <div className="flex items-center space-x-4">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-1 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="font-semibold">Limited Time: 50% Off Premium Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="lg:hidden mt-3 pt-3 border-t border-white/20">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Premium Content</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>50% Off</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimateContentShowcase2026PromotionBanner;