import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, BookOpen, TrendingUp, Users, Award } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI 2025: Complete Guide to Autonomous Business Operations",
      type: "Blog Post",
      description: "Discover how AI-powered autonomous business operations are revolutionizing enterprises in 2025",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/blog/ai-2025-autonomous-business-operations-complete-guide",
      featured: true,
      readingTime: "12 min read"
    },
    {
      title: "Enterprise AI Transformation: 300% ROI Success Story",
      type: "Case Study",
      description: "Learn how a Fortune 500 company achieved 300% ROI through comprehensive AI transformation",
      icon: <Award className="w-6 h-6" />,
      link: "/case-studies/enterprise-ai-transformation-2025-complete-success",
      featured: true,
      readingTime: "15 min read"
    },
    {
      title: "AI Implementation Master Guide 2025: Complete Roadmap",
      type: "Resource Guide",
      description: "The ultimate 12-step roadmap to successful AI implementation in 2025",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/resources/ai-implementation-master-guide-2025-complete",
      featured: true,
      readingTime: "20 min read"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContentClick = (link: string) => {
    window.location.href = link;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Left side - New content indicator */}
            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-300">NEW CONTENT</span>
              </motion.div>

              <div className="hidden md:block">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Fresh AI Insights for 2025
                </h2>
                <p className="text-blue-200 text-sm">
                  Latest strategies, case studies, and implementation guides
                </p>
              </div>
            </div>

            {/* Center - Content showcase */}
            <div className="flex-1 max-w-4xl mx-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentContent}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="cursor-pointer"
                  onClick={() => handleContentClick(newContent[currentContent].link)}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-300">
                        {newContent[currentContent].icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-semibold bg-blue-500/30 px-2 py-1 rounded-full">
                            {newContent[currentContent].type}
                          </span>
                          <span className="text-xs text-blue-200">
                            {newContent[currentContent].readingTime}
                          </span>
                          {newContent[currentContent].featured && (
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                          {newContent[currentContent].title}
                        </h3>
                        <p className="text-blue-200 text-sm line-clamp-2">
                          {newContent[currentContent].description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Content indicators */}
              <div className="flex justify-center space-x-2 mt-3">
                {newContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentContent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentContent 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - CTA and close */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/content-showcase'}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Content
              </motion.button>

              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025PromotionBanner;