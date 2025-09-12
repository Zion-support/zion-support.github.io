import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Sparkles, ArrowRight, Calendar, BookOpen, Users, Award, 
  X, TrendingUp, Star, Zap, Brain, Shield, Globe
} from 'lucide-react';

interface ContentItem {
  id: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar';
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  readTime?: string;
  category: string;
  featured?: boolean;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
}

const NewContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // New content items to promote
  const newContent: ContentItem[] = [
    {
      id: 'future-of-work-2025',
      type: 'blog',
      title: 'AI 2025: The Future of Work Revolution',
      description: 'Discover how AI is revolutionizing the workplace and creating new opportunities for human-AI collaboration.',
      url: '/blog/ai-2025-future-of-work-revolution',
      publishedDate: '2025-01-27',
      readTime: '15 min read',
      category: 'AI & Automation',
      featured: true,
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'global-tech-giant-case-study',
      type: 'case-study',
      title: 'Global Tech Giant Achieves 400% ROI',
      description: 'Comprehensive case study of a Fortune 500 company\'s successful AI transformation journey.',
      url: '/case-studies/ai-transformation-global-tech-giant-2025',
      publishedDate: '2025-01-27',
      readTime: '12 min read',
      category: 'Success Stories',
      featured: true,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'implementation-master-guide',
      type: 'resource',
      title: 'AI 2025 Complete Implementation Master Guide',
      description: 'Download our comprehensive 213-page guide covering everything you need for successful AI transformation.',
      url: '/resources/ai-2025-complete-implementation-master-guide',
      publishedDate: '2025-01-27',
      category: 'Implementation',
      featured: true,
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'ai-autonomous-ecosystem',
      type: 'blog',
      title: 'Revolutionary AI Autonomous Ecosystem 2025',
      description: 'Explore cutting-edge autonomous AI solutions that are reshaping industries worldwide.',
      url: '/blog/ai-2025-autonomous-ecosystem-revolution',
      publishedDate: '2025-01-26',
      readTime: '18 min read',
      category: 'Emerging Tech',
      featured: false,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Auto-rotate content every 8 seconds
    const rotationTimer = setInterval(() => {
      setCurrentContentIndex((prev) => (prev + 1) % newContent.length);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(rotationTimer);
    };
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return BookOpen;
      case 'case-study':
        return Award;
      case 'resource':
        return BookOpen;
      case 'webinar':
        return Users;
      default:
        return Sparkles;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'New Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Free Resource';
      case 'webinar':
        return 'Webinar';
      default:
        return 'New Content';
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md border-b border-cyan-500/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Content Display */}
              <div className="flex-1 flex items-center space-x-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentContentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-4 flex-1"
                  >
                    {/* Content Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${newContent[currentContentIndex].color} flex items-center justify-center flex-shrink-0`}>
                      <newContent[currentContentIndex].icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${newContent[currentContentIndex].gradient} border border-current/30 text-cyan-400`}>
                          {getTypeLabel(newContent[currentContentIndex].type)}
                        </span>
                        {newContent[currentContentIndex].featured && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400">
                            <Star className="w-3 h-3 inline mr-1" />
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-sm md:text-base truncate">
                        {newContent[currentContentIndex].title}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm truncate">
                        {newContent[currentContentIndex].description}
                      </p>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{newContent[currentContentIndex].publishedDate}</span>
                        </span>
                        {newContent[currentContentIndex].readTime && (
                          <span>{newContent[currentContentIndex].readTime}</span>
                        )}
                        <span className="text-cyan-400">{newContent[currentContentIndex].category}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href={newContent[currentContentIndex].url}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                  aria-label="Dismiss banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-3">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentContentIndex 
                      ? 'bg-cyan-400 w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner;