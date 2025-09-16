import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  X, 
  Zap, 
  Star,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react';

const NextGenAIContentPromotionBanner2026 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Advanced AI Consciousness",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Quantum Processing Power",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Revolutionary Technologies",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "500% ROI Guaranteed",
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-white/20 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
        <div className="absolute top-6 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" />
        <div className="absolute bottom-6 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />

        <div className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left Content */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                      NEW 2026
                    </span>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
                  </div>
                  
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    Next-Gen AI Content Hub
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Featuring:</span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentFeature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${features[currentFeature].color} text-white text-sm font-medium`}
                      >
                        {features[currentFeature].icon}
                        {features[currentFeature].text}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-green-400" />
                    <span>10K+ Users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                    <span>500% ROI</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" 
             style={{ width: '100%', animation: 'progress 10s linear infinite' }} />
        
        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default NextGenAIContentPromotionBanner2026;