'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Clock, Sparkles, Rocket, Brain, Zap, TrendingUp, Award } from 'lucide-react';

interface UltraContentPromotionBannerProps {
  className?: string;
}

const UltraContentPromotionBanner: React.FC<UltraContentPromotionBannerProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const ultraContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: Rocket,
      category: "Featured Article",
      readTime: "25 min read",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      badge: "HOT",
      badgeColor: "bg-red-100 text-red-800",
      metrics: "12.5K views"
    },
    {
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: Brain,
      category: "Case Study",
      readTime: "18 min read",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800",
      metrics: "8.7K views"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies and templates",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: Zap,
      category: "Free Download",
      readTime: "200+ pages",
      featured: true,
      gradient: "from-green-500 to-teal-500",
      badge: "MASTER",
      badgeColor: "bg-green-100 text-green-800",
      metrics: "15.2K downloads"
    },
    {
      title: "Generative AI Revolution 2025",
      description: "Transform your business with 10x content output and 60% cost reduction",
      href: "/blog/ai-2025-generative-ai-revolution",
      icon: TrendingUp,
      category: "Trending Now",
      readTime: "22 min read",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      badge: "TRENDING",
      badgeColor: "bg-orange-100 text-orange-800",
      metrics: "9.8K views"
    }
  ];

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto-rotate content every 10 seconds
    const rotationTimer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % ultraContent.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(rotationTimer);
    };
  }, [ultraContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const currentItem = ultraContent[currentContent];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px] animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex items-center space-x-3">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <currentItem.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-sm font-bold bg-yellow-400/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      ULTRA CONTENT
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${currentItem.badgeColor}`}>
                      {currentItem.badge}
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-bold truncate">
                        {currentItem.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-white/80">
                        <Star className="w-3 h-3" />
                        <span>{currentItem.metrics}</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/90 truncate">
                      {currentItem.description}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-white/70">{currentItem.category}</span>
                      <div className="flex items-center gap-1 text-xs text-white/70">
                        <Clock className="w-3 h-3" />
                        <span>{currentItem.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href={currentItem.href}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm hover:scale-105"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/content-showcase"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium hover:underline"
                >
                  View All
                </Link>

                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-pink-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                key={currentContent}
              />
            </div>

            {/* Content indicators */}
            <div className="absolute bottom-2 right-4 flex space-x-1">
              {ultraContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentContent ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UltraContentPromotionBanner;