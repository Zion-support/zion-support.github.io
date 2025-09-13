'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Target,
  X,
  Clock,
  BookOpen,
  Code
} from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate content
    const interval = setInterval(() => {
      setCurrentContent(prev => (prev + 1) % featuredContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const featuredContent = [
    {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces are here',
      type: 'article',
      duration: '12 min read',
      views: '15.2k',
      rating: 4.9,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Breakthrough',
      description: '1000x faster processing achieved',
      type: 'video',
      duration: '8:45',
      views: '23.1k',
      rating: 4.8,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Autonomous Business Systems',
      description: 'Self-managing processes that adapt',
      type: 'tutorial',
      duration: '25 min',
      views: '8.9k',
      rating: 4.7,
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Security Framework',
      description: 'Unbreakable quantum encryption',
      type: 'case-study',
      duration: '15 min read',
      views: '12.3k',
      rating: 4.6,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'New Articles', value: '47', icon: BookOpen },
    { label: 'Video Tutorials', value: '23', icon: Play },
    { label: 'Case Studies', value: '15', icon: Target },
    { label: 'Total Views', value: '2.1M+', icon: Users }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'article': return BookOpen;
      case 'tutorial': return Code;
      case 'case-study': return Target;
      default: return BookOpen;
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b border-purple-500/20"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-6">
                  {/* Content Rotator */}
                  <div className="relative w-20 h-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentContent}
                        initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${featuredContent[currentContent].color} flex items-center justify-center shadow-lg`}
                      >
                        <featuredContent[currentContent].icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 text-sm font-medium">NEW CONTENT</span>
                      <span className="text-gray-400 text-sm">•</span>
                      <span className="text-gray-300 text-sm">Updated Daily</span>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentContent}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold text-white mb-1">
                          {featuredContent[currentContent].title}
                        </h2>
                        <p className="text-gray-300 text-sm mb-2">
                          {featuredContent[currentContent].description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <React.createElement(getTypeIcon(featuredContent[currentContent].type), { className: "w-4 h-4 mr-1" }) />
                            {featuredContent[currentContent].type}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredContent[currentContent].duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {featuredContent[currentContent].views}
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                            {featuredContent[currentContent].rating}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Center Stats */}
              <div className="hidden lg:flex items-center space-x-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Now
                </button>
                <button className="px-6 py-2 bg-transparent border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden mt-4 grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600">
            <motion.div
              className="h-full bg-white/30"
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

export default NewContent2025PromotionBanner;