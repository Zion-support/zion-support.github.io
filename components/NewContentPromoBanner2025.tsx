'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Clock, Sparkles, Rocket, Brain, Zap, TrendingUp, Award, BookOpen, Users, Shield } from 'lucide-react';

interface NewContentPromoBanner2025Props {
  className?: string;
  variant?: 'default' | 'featured' | 'mega';
  maxItems?: number;
}

const NewContentPromoBanner2025: React.FC<NewContentPromoBanner2025Props> = ({ 
  className = '', 
  variant = 'default',
  maxItems = 8 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent2025 = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: Rocket,
      category: "New Article",
      readTime: "25 min read",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      stats: "500K+ views",
      badge: "Trending"
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Complete guide to reskilling strategies for the AI era",
      href: "/blog/ai-workforce-transformation-2025",
      icon: Users,
      category: "Strategy Guide",
      readTime: "18 min read",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      stats: "300K+ downloads",
      badge: "Popular"
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
      stats: "200K+ reads",
      badge: "New"
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
      stats: "1M+ downloads",
      badge: "Hot"
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
      stats: "150K+ views",
      badge: "Featured"
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
      stats: "180K+ reads",
      badge: "New"
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: Shield,
      category: "Free Download",
      readTime: "150+ items",
      featured: true,
      gradient: "from-red-500 to-pink-500",
      stats: "250K+ downloads",
      badge: "Essential"
    },
    {
      title: "AI Data Privacy & Compliance 2025",
      description: "Complete guide to AI privacy regulations and best practices",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: Brain,
      category: "New Article",
      readTime: "22 min read",
      featured: true,
      gradient: "from-teal-500 to-cyan-500",
      stats: "120K+ views",
      badge: "Important"
    }
  ];

  const displayContent = newContent2025.slice(0, maxItems);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-rotate content every 12 seconds
    const rotationTimer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % displayContent.length);
    }, 12000);

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
        return "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600";
      case 'featured':
        return "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600";
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Trending':
        return 'bg-red-500 text-white';
      case 'Popular':
        return 'bg-blue-500 text-white';
      case 'New':
        return 'bg-green-500 text-white';
      case 'Hot':
        return 'bg-orange-500 text-white';
      case 'Featured':
        return 'bg-purple-500 text-white';
      case 'Essential':
        return 'bg-yellow-500 text-black';
      case 'Important':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      >
        <div className={`${getBannerStyles()} text-white relative overflow-hidden`}>
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/5 to-white/15"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:40px_40px] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex items-center space-x-3">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg"
                  >
                    <currentItem.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                      <span className="text-sm font-bold bg-yellow-400/25 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/40">
                        NEW CONTENT 2025
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getBadgeColor(currentItem.badge)}`}>
                      {currentItem.badge}
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <motion.div
                    key={currentContent}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-base font-bold truncate">
                        {currentItem.title}
                      </h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-medium">
                        {currentItem.stats}
                      </span>
                    </div>
                    <p className="text-sm text-white/90 truncate mb-2">
                      {currentItem.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-white/80 bg-white/15 px-3 py-1 rounded-full">
                        {currentItem.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-white/70">
                        <Clock className="w-3 h-3" />
                        <span>{currentItem.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-white/80">Featured</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href={currentItem.href}
                  className="bg-white/25 hover:bg-white/35 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 border border-white/40 hover:border-white/60 shadow-lg hover:shadow-xl"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/content-showcase"
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  View All
                </Link>

                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
              <motion.div
                className="h-full bg-white/70"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 12, ease: "linear" }}
                key={currentContent}
              />
            </div>

            {/* Content indicators */}
            <div className="absolute bottom-2 right-4 flex space-x-1.5">
              {displayContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentContent ? 'bg-white scale-110' : 'bg-white/50'
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

export default NewContentPromoBanner2025;