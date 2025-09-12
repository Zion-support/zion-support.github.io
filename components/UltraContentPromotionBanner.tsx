'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Clock, Sparkles, Rocket, Brain, Zap, TrendingUp, Award, BookOpen } from 'lucide-react';

interface UltraContentPromotionBannerProps {
  className?: string;
  variant?: 'default' | 'featured' | 'mega';
  maxItems?: number;
}

const UltraContentPromotionBanner: React.FC<UltraContentPromotionBannerProps> = ({ 
  className = '', 
  variant = 'default',
  maxItems = 6 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const ultraContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: Rocket,
      category: "New Article",
      readTime: "25 min read",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      stats: "500K+ views"
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Complete guide to reskilling strategies for the AI era",
      href: "/blog/ai-workforce-transformation-2025",
      icon: Brain,
      category: "Strategy Guide",
      readTime: "18 min read",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      stats: "300K+ downloads"
    },
    {
      title: "AI Sustainability Success Story",
      description: "60% energy reduction and carbon neutrality achieved",
      href: "/case-studies/ai-sustainability-transformation-2025",
      icon: Award,
      category: "Case Study",
      readTime: "15 min read",
      featured: true,
      gradient: "from-green-500 to-teal-500",
      stats: "200K+ reads"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies and templates",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: BookOpen,
      category: "Free Download",
      readTime: "200+ pages",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      stats: "1M+ downloads"
    },
    {
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: Zap,
      category: "Case Study",
      readTime: "20 min read",
      featured: true,
      gradient: "from-indigo-500 to-purple-500",
      stats: "150K+ views"
    },
    {
      title: "AI Healthcare Diagnosis Success",
      description: "95% accuracy and 60% faster diagnosis times",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: TrendingUp,
      category: "Case Study",
      readTime: "12 min read",
      featured: true,
      gradient: "from-pink-500 to-rose-500",
      stats: "180K+ reads"
    }
  ];

  const displayContent = ultraContent.slice(0, maxItems);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto-rotate content every 10 seconds
    const rotationTimer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % displayContent.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(rotationTimer);
    };
  }, [displayContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const currentItem = displayContent[currentContent];

  if (!isVisible) return null;

  const getBannerStyles = () => {
    switch (variant) {
      case 'mega':
        return "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600";
      case 'featured':
        return "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        <div className={`${getBannerStyles()} text-white relative overflow-hidden`}>
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:30px_30px] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
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
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30"
                  >
                    <currentItem.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="text-sm font-bold bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/30">
                      ULTRA CONTENT
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
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-sm font-bold truncate">
                        {currentItem.title}
                      </h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {currentItem.stats}
                      </span>
                    </div>
                    <p className="text-xs text-white/90 truncate">
                      {currentItem.description}
                    </p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded">
                        {currentItem.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-white/70">
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
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center space-x-2 border border-white/30 hover:border-white/50"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/content-showcase"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
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
                className="h-full bg-white/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                key={currentContent}
              />
            </div>

            {/* Content indicators */}
            <div className="absolute bottom-2 right-4 flex space-x-1">
              {displayContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
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