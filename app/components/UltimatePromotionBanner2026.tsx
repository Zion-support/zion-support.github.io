'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Star,
  Zap,
  Target,
  Users,
  Award
} from 'lucide-react';

const UltimatePromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { icon: TrendingUp, value: '400%', label: 'Average ROI', color: 'text-green-600' },
    { icon: DollarSign, value: '$50M+', label: 'Cost Savings', color: 'text-green-600' },
    { icon: Clock, value: '90 Days', label: 'Time to Value', color: 'text-blue-600' },
    { icon: Target, value: '95%', label: 'Success Rate', color: 'text-purple-600' },
    { icon: Users, value: '500+', label: 'Organizations', color: 'text-orange-600' },
    { icon: Award, value: '2026', label: 'Latest Content', color: 'text-indigo-600' }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ultimate-banner-2026-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Rotate metrics every 2 seconds
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ultimate-banner-2026-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-4 left-8 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-2000" />
            <div className="absolute bottom-8 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-3000" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                {/* New Badge */}
                <div className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  <Zap className="w-4 h-4 mr-1" />
                  NEW 2026
                </div>
                
                {/* Main Message */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    🚀 AI 2026: Enterprise Automation Breakthrough
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    Discover how organizations achieve <span className="font-semibold">400% ROI in 90 days</span> with our proven AI strategies
                  </p>
                </div>
              </div>
            </div>

            {/* Center - Rotating Metrics */}
            <div className="hidden md:flex items-center space-x-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className={`text-2xl font-bold ${metrics[currentMetric].color}`}>
                    {metrics[currentMetric].value}
                  </div>
                  <div className="text-xs opacity-80">
                    {metrics[currentMetric].label}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/blog/ai-2026-enterprise-automation-breakthrough"
                className="hidden sm:inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Read Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-sm"
              >
                Get Started
              </Link>

              {/* Mobile CTA */}
              <Link
                href="/blog/ai-2026-enterprise-automation-breakthrough"
                className="sm:hidden bg-white text-purple-600 px-3 py-2 rounded-lg font-semibold text-sm"
              >
                Read
              </Link>

              {/* Dismiss Button */}
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Metrics */}
          <div className="md:hidden mt-4">
            <div className="grid grid-cols-3 gap-4">
              {metrics.slice(0, 3).map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-lg font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs opacity-80">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 10, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltimatePromotionBanner2026;