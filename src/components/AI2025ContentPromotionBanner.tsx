import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  BookOpenIcon,
  ChartBarIcon,
  LightBulbIcon,
  XMarkIcon,
  ChevronRightIcon,
  StarIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface PromotionalContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'featured' | 'new' | 'trending';
  url: string;
  stats: {
    views: number;
    rating: number;
    downloads: number;
  };
}

const AI2025ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const promotionalContent: PromotionalContent[] = [
    {
      id: '1',
      title: 'AI Implementation Roadmap 2025',
      subtitle: 'Complete Digital Transformation Guide',
      description: 'Step-by-step roadmap for successful AI adoption. Includes readiness assessment, best practices, and ROI frameworks.',
      type: 'featured',
      url: '/resources/ai-implementation-roadmap-2025',
      stats: {
        views: 3567,
        rating: 4.9,
        downloads: 1243
      }
    },
    {
      id: '2',
      title: 'Manufacturing AI Success Story',
      subtitle: '40% Cost Reduction Achieved',
      description: 'See how a Fortune 500 manufacturer achieved unprecedented results through strategic AI implementation.',
      type: 'trending',
      url: '/case-studies/global-manufacturing-ai-transformation-2025',
      stats: {
        views: 2847,
        rating: 4.8,
        downloads: 892
      }
    },
    {
      id: '3',
      title: 'Enterprise Automation Revolution',
      subtitle: 'The Future is Now',
      description: 'Discover how AI is transforming enterprise operations in 2025. Latest breakthroughs and implementation strategies.',
      type: 'new',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      stats: {
        views: 1923,
        rating: 4.7,
        downloads: 567
      }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % promotionalContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [promotionalContent.length]);

  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'featured':
        return {
          color: 'from-yellow-400 to-orange-500',
          bgColor: 'bg-yellow-500/20',
          borderColor: 'border-yellow-400/50',
          label: 'Featured',
          icon: <StarIcon className="w-4 h-4" />
        };
      case 'trending':
        return {
          color: 'from-red-400 to-pink-500',
          bgColor: 'bg-red-500/20',
          borderColor: 'border-red-400/50',
          label: 'Trending',
          icon: <RocketLaunchIcon className="w-4 h-4" />
        };
      case 'new':
        return {
          color: 'from-green-400 to-blue-500',
          bgColor: 'bg-green-500/20',
          borderColor: 'border-green-400/50',
          label: 'New',
          icon: <SparklesIcon className="w-4 h-4" />
        };
      default:
        return {
          color: 'from-blue-400 to-purple-500',
          bgColor: 'bg-blue-500/20',
          borderColor: 'border-blue-400/50',
          label: 'Content',
          icon: <BookOpenIcon className="w-4 h-4" />
        };
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleExplore = () => {
    window.location.href = promotionalContent[currentContent].url;
  };

  if (isDismissed) return null;

  const currentItem = promotionalContent[currentContent];
  const typeConfig = getTypeConfig(currentItem.type);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 shadow-2xl border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left side - Branding */}
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
                </motion.div>
                
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-lg">Zion Tech Group</span>
                    <span className={`${typeConfig.bgColor} ${typeConfig.borderColor} border px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1`}>
                      {typeConfig.icon}
                      <span>{typeConfig.label}</span>
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm">AI Solutions & Digital Transformation</span>
                </div>
              </div>

              {/* Center - Content showcase */}
              <div className="flex-1 mx-8">
                <motion.div
                  key={currentContent}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="text-white font-bold text-lg mb-1">
                    {currentItem.title}
                  </h3>
                  <p className="text-blue-300 font-medium text-sm mb-2">
                    {currentItem.subtitle}
                  </p>
                  <p className="text-gray-300 text-xs max-w-md mx-auto leading-relaxed">
                    {currentItem.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <EyeIcon className="w-3 h-3" />
                      <span>{currentItem.stats.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400 text-xs">
                      <StarIcon className="w-3 h-3" />
                      <span>{currentItem.stats.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400 text-xs">
                      <BookOpenIcon className="w-3 h-3" />
                      <span>{currentItem.stats.downloads}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleExplore}
                  className={`flex items-center space-x-2 bg-gradient-to-r ${typeConfig.color} text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  <span>Explore Now</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 pb-3">
              {promotionalContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentContent 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-500 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 120, 0],
                y: [0, -60, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-2 right-8 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 40, 0],
                opacity: [0.15, 0.35, 0.15],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-2 left-8 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, 60, 0],
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AI2025ContentPromotionBanner;