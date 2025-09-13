'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  X, 
  Users, 
  TrendingUp,
  Shield,
  Award,
  DollarSign,
  BarChart3,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';

const BusinessSolutionsShowcase2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-20 right-20 w-16 h-16 bg-pink-500/20 rounded-full blur-lg"
            />
            <motion.div
              animate={{ 
                x: [0, 60, 0],
                y: [0, -40, 0],
                rotate: [0, 90, 180]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-10 left-1/3 w-12 h-12 bg-purple-500/20 rounded-full blur-md"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                >
                  <Building2 className="w-6 h-6 text-yellow-300 animate-pulse" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
                    BUSINESS SOLUTIONS 2025
                  </span>
                  <div className="flex items-center gap-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                  Transform Your Business with
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    Intelligent Solutions
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-purple-100 mb-6 max-w-2xl"
                >
                  Discover comprehensive business solutions powered by AI and automation that drive growth, efficiency, and innovation across all industries.
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm font-medium">Enterprise Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium">AI Customer Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-pink-300" />
                    <span className="text-sm font-medium">Advanced Analytics</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Building2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing
                  </button>
                </motion.div>
              </div>

              {/* Right Content - Success Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-shrink-0"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Success Metrics</h3>
                  
                  {/* Key Metrics */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Cost Reduction</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "40%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                        <span className="text-green-300 font-bold">40%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Productivity Boost</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 2, delay: 0.7 }}
                          />
                        </div>
                        <span className="text-blue-300 font-bold">60%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-purple-100">Customer Satisfaction</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "95%" }}
                            transition={{ duration: 2, delay: 0.9 }}
                          />
                        </div>
                        <span className="text-yellow-300 font-bold">95%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success Indicators */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-300 mb-1">5,000+</div>
                      <div className="text-xs text-purple-100">Businesses Transformed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-300 mb-1">$2.5B+</div>
                      <div className="text-xs text-purple-100">Cost Savings Generated</div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-6 text-center"
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      <TrendingUp className="w-4 h-4" />
                      Proven Results
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessSolutionsShowcase2025PromotionBanner;