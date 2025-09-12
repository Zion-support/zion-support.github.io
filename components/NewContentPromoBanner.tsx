'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Clock, Sparkles, Rocket, Brain, Zap } from 'lucide-react';

interface NewContentPromoBannerProps {
  className?: string;
}

const NewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: Rocket,
      category: "New Article",
      readTime: "25 min read",
      featured: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: Brain,
      category: "Case Study",
      readTime: "18 min read",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies and templates",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: Zap,
      category: "Free Download",
      readTime: "200+ pages",
      featured: true,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-rotate content every 8 seconds
    const rotationTimer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(rotationTimer);
    };
  }, [newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const currentItem = newContent[currentContent];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex items-center space-x-2">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <currentItem.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold bg-yellow-400/20 px-2 py-1 rounded-full">
                      NEW CONTENT
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-sm font-bold truncate">
                      {currentItem.title}
                    </h3>
                    <p className="text-xs text-white/80 truncate">
                      {currentItem.description}
                    </p>
                  </motion.div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-white/80">
                  <Clock className="w-3 h-3" />
                  <span>{currentItem.readTime}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href={currentItem.href}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors p-1"
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
                transition={{ duration: 8, ease: "linear" }}
                key={currentContent}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromoBanner;