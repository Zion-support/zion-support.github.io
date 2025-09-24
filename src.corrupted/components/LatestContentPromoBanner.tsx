import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Clock, User } from 'lucide-react';
import { latestContent2025 } from '../data/latestContent2025';

const LatestContentPromoBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestContent2025.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = latestContent2025[currentIndex];

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6"
              >
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </motion.div>
              <span className="text-sm font-medium text-blue-100">NEW CONTENT</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">FEATURED</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h3 className="text-xl font-bold leading-tight">
                  {currentContent.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-2xl">
                  {currentContent.description}
                </p>
                
                <div className="flex items-center space-x-4 text-xs text-blue-200">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentContent.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{currentContent.author}</span>
                  </div>
                  <span className="bg-white/20 px-2 py-1 rounded-full">
                    {currentContent.category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-colors"
            >
              <span>Read Now</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
            
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex space-x-2 mt-4">
          {latestContent2025.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
    </motion.div>
  );
};

export default LatestContentPromoBanner;