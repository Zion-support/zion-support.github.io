'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  Star,
  BookOpen,
  FileText,
  Lightbulb,
  Target,
  Zap,
  X
} from 'lucide-react';

const NewContent2025Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentHighlights = [
    {
      title: "AI 2025: Enterprise Automation Revolution",
      type: "Blog Post",
      metric: "340% ROI",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Healthcare AI: $200M System Success",
      type: "Case Study", 
      metric: "300% ROI",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "AI Implementation Guide 2025",
      type: "Resource",
      metric: "500+ Success Stories",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { value: "340%", label: "Average ROI", icon: TrendingUp },
    { value: "500+", label: "Projects", icon: Users },
    { value: "$2.8B", label: "Client Savings", icon: DollarSign },
    { value: "98%", label: "Success Rate", icon: CheckCircle }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentHighlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem('new-content-2025-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('new-content-2025-banner-dismissed', 'true');
  };

  if (!isVisible) return null;

  const currentHighlight = contentHighlights[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-1"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <Zap className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-1 text-sm"
                      >
                        <stat.icon className="w-4 h-4" />
                        <span className="font-semibold">{stat.value}</span>
                        <span className="opacity-75">{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Revolutionary AI Content That Drives Real Results
                </h2>
                
                <p className="text-lg opacity-90 mb-6 max-w-2xl">
                  Discover the latest insights, success stories, and implementation guides 
                  that are helping businesses achieve unprecedented ROI with AI automation.
                </p>

                {/* Rotating Content Highlights */}
                <div className="relative h-16 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center gap-4"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${currentHighlight.color} bg-opacity-20`}>
                        <currentHighlight.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-75">{currentHighlight.type}</div>
                        <div className="font-semibold">{currentHighlight.title}</div>
                        <div className="text-sm text-yellow-300">{currentHighlight.metric}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog/ai-2025-enterprise-automation-revolution"
                    className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Read Latest Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Explore All Resources
                  </Link>
                </div>
              </div>

              {/* Right Visual */}
              <div className="hidden lg:block flex-shrink-0 ml-8">
                <div className="relative">
                  <div className="w-64 h-64 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <div className="text-lg font-semibold">Proven Results</div>
                      <div className="text-sm opacity-75">Real ROI Data</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <Star className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors p-2"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContent2025Banner;