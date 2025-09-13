import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Star, 
  ArrowRight, 
  Play, 
  Sparkles,
  TrendingUp,
  Users,
  Award,
  X,
  ChevronRight
} from 'lucide-react';

const RevolutionaryAIPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalMessages = [
    {
      title: "🚀 Revolutionary AI Technologies Now Live!",
      subtitle: "Experience the future with our breakthrough AI consciousness platform",
      cta: "Explore Now",
      color: "from-purple-600 to-pink-600",
      icon: Brain
    },
    {
      title: "⚡ Quantum AI Hybrid System - Beta Access!",
      subtitle: "1000x faster processing with quantum-classical AI integration",
      cta: "Get Beta Access",
      color: "from-cyan-600 to-blue-600",
      icon: Zap
    },
    {
      title: "🛡️ Autonomous Security AI - Live Now!",
      subtitle: "Self-evolving cybersecurity that adapts to threats in real-time",
      cta: "Secure Your Business",
      color: "from-green-600 to-emerald-600",
      icon: Rocket
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = promotionalMessages[currentSlide];
  const Icon = currentMessage.icon;

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/200')] opacity-5"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Promotional Content */}
            <div className="flex items-center gap-6 flex-1">
              {/* Icon with Animation */}
              <motion.div
                key={currentSlide}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex-shrink-0"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentMessage.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-1"
                >
                  <h3 className="text-lg font-bold text-white truncate">
                    {currentMessage.title}
                  </h3>
                  <p className="text-sm text-purple-200 truncate">
                    {currentMessage.subtitle}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Side - CTA and Controls */}
            <div className="flex items-center gap-4">
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {promotionalMessages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-purple-400 scale-125'
                        : 'bg-purple-600/50 hover:bg-purple-500/70'
                    }`}
                  />
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${currentMessage.color} text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
              >
                <span>{currentMessage.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear", repeat: Infinity }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryAIPromotionBanner2025;