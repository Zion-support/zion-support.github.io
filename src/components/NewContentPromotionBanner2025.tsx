import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  BookOpenIcon,
  ChartBarIcon,
  LightBulbIcon,
  XMarkIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  featured: boolean;
  publishDate: string;
}

const NewContentPromotionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Enterprise Automation Revolution',
      description: 'Discover how AI is transforming enterprise operations in 2025. Learn about the latest breakthroughs and implementation strategies.',
      type: 'blog',
      url: '/blog/ai-2025-enterprise-automation-revolution',
      featured: true,
      publishDate: '2025-01-15'
    },
    {
      id: '2',
      title: 'Global Manufacturing AI Transformation Success Story',
      description: 'See how a Fortune 500 manufacturer achieved 40% cost reduction and 60% efficiency improvement through AI implementation.',
      type: 'case-study',
      url: '/case-studies/global-manufacturing-ai-transformation-2025',
      featured: true,
      publishDate: '2025-01-12'
    },
    {
      id: '3',
      title: 'AI Implementation Roadmap 2025',
      description: 'Your complete guide to digital transformation. Step-by-step roadmap for successful AI adoption in your organization.',
      type: 'resource',
      url: '/resources/ai-implementation-roadmap-2025',
      featured: true,
      publishDate: '2025-01-10'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpenIcon className="w-5 h-5" />;
      case 'case-study':
        return <ChartBarIcon className="w-5 h-5" />;
      case 'resource':
        return <LightBulbIcon className="w-5 h-5" />;
      default:
        return <BookOpenIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-blue-500';
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleReadMore = () => {
    window.location.href = newContent[currentItem].url;
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
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left side - Icon and title */}
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0"
                >
                  <SparklesIcon className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <div className="flex items-center space-x-2">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                  <span className="text-white font-bold text-lg">
                    New Content Available!
                  </span>
                </div>
              </div>

              {/* Center - Content showcase */}
              <div className="flex-1 mx-8">
                <motion.div
                  key={currentItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getTypeColor(newContent[currentItem].type)} text-white`}>
                    {getTypeIcon(newContent[currentItem].type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">
                      {newContent[currentItem].title}
                    </h3>
                    <p className="text-gray-200 text-xs truncate max-w-md">
                      {newContent[currentItem].description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleReadMore}
                  className="flex items-center space-x-2 bg-white text-indigo-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200"
                >
                  <span>Read More</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 pb-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentItem(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentItem ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2025;