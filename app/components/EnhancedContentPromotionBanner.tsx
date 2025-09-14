'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Star, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen, 
  FileText, 
  Lightbulb,
  X,
  Play,
  Download,
  ArrowRight
} from 'lucide-react';

interface PromotionItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'content' | 'service' | 'case-study';
  url: string;
  featured: boolean;
  metrics: {
    primary: string;
    secondary: string;
    icon: React.ReactNode;
  };
  cta: string;
  badge?: string;
}

const EnhancedContentPromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const promotionItems: PromotionItem[] = [
    {
      id: 'ai-2026-breakthrough',
      title: 'AI 2026 Enterprise Automation Breakthrough',
      subtitle: '340% ROI • 98% Satisfaction • 500+ Projects',
      type: 'content',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      featured: true,
      metrics: {
        primary: '340%',
        secondary: 'ROI',
        icon: <TrendingUp className="w-6 h-6" />
      },
      cta: 'Read Full Article',
      badge: 'NEW'
    },
    {
      id: 'retail-transformation',
      title: 'Retail AI Success: 400% ROI Case Study',
      subtitle: '$20M Additional Revenue • 67% Cost Reduction',
      type: 'case-study',
      url: '/case-studies/retail-ai-transformation-2026-success',
      featured: true,
      metrics: {
        primary: '400%',
        secondary: 'ROI',
        icon: <Award className="w-6 h-6" />
      },
      cta: 'View Case Study',
      badge: 'SUCCESS'
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2026',
      subtitle: 'Step-by-Step Strategy • ROI Frameworks • Real Examples',
      type: 'content',
      url: '/resources/ai-implementation-master-guide-2026',
      featured: true,
      metrics: {
        primary: '98%',
        secondary: 'Success Rate',
        icon: <Lightbulb className="w-6 h-6" />
      },
      cta: 'Download Guide',
      badge: 'GUIDE'
    },
    {
      id: 'ai-services',
      title: 'Transform Your Business with AI',
      subtitle: 'Custom AI Solutions • Expert Implementation • Guaranteed Results',
      type: 'service',
      url: '/services',
      featured: true,
      metrics: {
        primary: '500+',
        secondary: 'Projects',
        icon: <Users className="w-6 h-6" />
      },
      cta: 'Get Started',
      badge: 'SERVICES'
    }
  ];

  useEffect(() => {
    if (isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotionItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [promotionItems.length, isDismissed]);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('enhanced-content-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('enhanced-content-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  const currentItem = promotionItems[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'content':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <FileText className="w-5 h-5" />;
      case 'service':
        return <Users className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'content':
        return 'from-blue-500 to-blue-600';
      case 'case-study':
        return 'from-green-500 to-green-600';
      case 'service':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NEW':
        return 'bg-red-500 text-white';
      case 'SUCCESS':
        return 'bg-green-500 text-white';
      case 'GUIDE':
        return 'bg-blue-500 text-white';
      case 'SERVICES':
        return 'bg-purple-500 text-white';
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
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent transform rotate-12 scale-150"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-6"
                >
                  {/* Icon and Badge */}
                  <div className="flex-shrink-0 relative">
                    <div className={`p-3 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm`}>
                      {currentItem.metrics.icon}
                    </div>
                    {currentItem.badge && (
                      <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(currentItem.badge)}`}>
                        {currentItem.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center text-sm opacity-90">
                        {getTypeIcon(currentItem.type)}
                        <span className="ml-1 capitalize">{currentItem.type.replace('-', ' ')}</span>
                      </div>
                      <div className="text-sm opacity-75">•</div>
                      <div className="text-sm opacity-75">{currentItem.subtitle}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 leading-tight">
                      {currentItem.title}
                    </h3>

                    {/* Metrics */}
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold">{currentItem.metrics.primary}</div>
                        <div className="text-sm opacity-90">{currentItem.metrics.secondary}</div>
                      </div>
                      <div className="hidden sm:flex items-center space-x-4 text-sm opacity-90">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          <span>98% Satisfaction</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>500+ Projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex-shrink-0 flex items-center space-x-4">
              <Link
                href={currentItem.url}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-gradient-to-r ${getTypeColor(currentItem.type)} hover:shadow-lg`}
              >
                {currentItem.cta}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-4 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Consultation
              </Link>
            </div>

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 flex justify-center space-x-2">
            {promotionItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-8 h-8" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-4 left-4 opacity-20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedContentPromotionBanner;