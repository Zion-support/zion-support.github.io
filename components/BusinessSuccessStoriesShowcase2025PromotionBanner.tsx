"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
  Star
  TrendingUp
  Users
  DollarSign
  Sparkles,
  X,
  Play,
  ExternalLink,
  CheckCircle,
  Award
} from 'lucide-react';

const BusinessSuccessStoriesShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)1500);
    return () => clearTimeout(timer);
  }[]);

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
          transition={{ duration: 0.6ease: "easeOut" }}
          className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/90 via-emerald-600/90 to-teal-600/90" />
          
          {/* Floating Success Icons */}
          <div className="absolute top-4 left-8 w-6 h-6 text-white/20 animate-bounce">
            <TrendingUp className="w-full h-full" />
          </div>
          <div className="absolute top-8 right-12 w-4 h-4 text-white/30 animate-pulse delay-1000">
            <DollarSign className="w-full h-full" />
          </div>
          <div className="absolute bottom-6 left-16 w-5 h-5 text-white/25 animate-bounce delay-2000">
            <Users className="w-full h-full" />
          </div>
          <div className="absolute bottom-4 right-8 w-3 h-3 text-white/40 animate-pulse delay-500">
            <Award className="w-full h-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-3 mb-3"
                >
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                    <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">
                      Success Stories
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-bold text-white mb-2"
                >
                  🏆 Business Success Stories 2025
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.4 }}
                  className="text-green-100 text-lg mb-4 max-w-2xl"
                >
                  Discover how leading companies achieved 
                  <span className="font-semibold text-white"> 350% average ROI</span>
                  <span className="font-semibold text-white"> 2.5M+ hours saved</span>and 
                  <span className="font-semibold text-white"> $50M+ in cost savings</span> with our solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
                >
                  <div className="flex items-center gap-2 text-sm text-green-100">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>TechCorp: +340% Revenue</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-100">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>RetailMax: +520% Growth</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-100">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>HealthcarePlus: +280% ROI</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0x: -20 }}
                  animate={{ opacity: 1x: 0 }}
                  transition={{ duration: 0.6delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                >
                  <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    View Stories
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Read Case Studies
                  </button>
                </motion.div>
              </div>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0x: 20 }}
                animate={{ opacity: 1x: 0 }}
                transition={{ duration: 0.6delay: 0.7 }}
                className="flex flex-col sm:flex-row lg:flex-col gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">350%</div>
                  <div className="text-green-100 text-sm">Average ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <Users className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-green-100 text-sm">Companies</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <DollarSign className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">$50M+</div>
                  <div className="text-green-100 text-sm">Saved</div>
                </div>
              </motion.div>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-300 p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Animated Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-teal-400 animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessSuccessStoriesShowcase2025PromotionBanner;
