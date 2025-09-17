import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  ArrowRight, 
  X, 
  Zap, 
  Cpu, 
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Sparkles
} from 'lucide-react';
const AIInnovationRevolutionPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const benefits = [
    { icon: Brain, text: "99.7% AI Accuracy", color: "text-purple-400" },
    { icon: Zap, text: "1000x Faster Processing", color: "text-pink-400" },
    { icon: TrendingUp, text: "85% Cost Reduction", color: "text-green-400" },
    { icon: Award, text: "98% Customer Satisfaction", color: "text-yellow-400" }
  ];
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefit((prev) => (prev + 1) % benefits.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  if (isDismissed) return null;
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 border-b border-purple-500/30 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left side - Animated benefit */}
              <div className="flex items-center space-x-4">
                <motion.div
                  key={currentBenefit}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center space-x-2"
                >
                  <benefits[currentBenefit].icon className={`w-6 h-6 ${benefits[currentBenefit].color}`} />
                  <span className="text-white font-semibold">
                    {benefits[currentBenefit].text}
                  </span>
                </motion.div>
                <div className="hidden sm:block w-px h-6 bg-purple-400/30" />
                <div className="hidden sm:flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
              </div>
              {/* Center - Main message */}
              <div className="flex-1 text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4"
                >
                  <span className="text-white font-bold text-lg">
                    🧠 AI Innovation Revolution 2025
                  </span>
                  <div className="hidden sm:block w-px h-6 bg-purple-400/30" />
                  <span className="text-purple-200 text-sm sm:text-base">
                    Transform Your Business with AI
                  </span>
                </motion.div>
              </div>
              {/* Right side - CTA and close */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Explore AI</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="text-purple-300 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Progress bar */}
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

};


export default AIInnovationRevolutionPromotionBanner;
</div></div>
