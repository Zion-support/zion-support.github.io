import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface NewContentPromotionBanner2026Props {
  className?: string;
}

const NewContentPromotionBanner2026: React.FC<NewContentPromotionBanner2026Props> = ({ className = '' }) => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      title: "AI 2026: Next-Generation Breakthrough Technologies",
      excerpt: "Explore revolutionary AI technologies reshaping industries",
      category: "AI Technology",
      readTime: "12 min read",
      views: "15.6K",
      isHot: true,
      urgency: "Hot Topic"
    },
    {
      title: "Quantum Computing for Business: Complete Implementation Guide",
      excerpt: "Learn how businesses leverage quantum computing for competitive advantage",
      category: "Quantum Computing",
      readTime: "15 min read",
      views: "18.9K",
      isHot: true,
      urgency: "Must Read"
    },
    {
      title: "Autonomous Systems in Enterprise: Complete Transformation Guide",
      excerpt: "Discover how autonomous AI systems revolutionize enterprise operations",
      category: "Autonomous Systems",
      readTime: "18 min read",
      views: "22.3K",
      isHot: true,
      urgency: "Trending"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-1 rounded-lg shadow-2xl ${className}`}
      >
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">NEW CONTENT</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-gray-300 text-sm">Featured</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Trending</span>
            </div>
          </div>

          {/* Content Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {newContent[currentContent].category}
                      </span>
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                        {newContent[currentContent].urgency}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-2">
                      {newContent[currentContent].title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {newContent[currentContent].excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{newContent[currentContent].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{newContent[currentContent].views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex space-x-2 mt-4">
              {newContent.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    index === currentContent 
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-cyan-600 transition-all duration-200"
              >
                <span>Explore New Content</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                View All Articles
              </motion.button>
            </div>
            
            <div className="text-right">
              <div className="text-gray-400 text-xs mb-1">Latest Updates</div>
              <div className="text-white text-sm font-medium">
                {newContent.length} New Articles Available
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-yellow-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;