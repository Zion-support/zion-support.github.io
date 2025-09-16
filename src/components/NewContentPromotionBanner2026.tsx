import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Sparkles, Brain, Zap, Target } from 'lucide-react';

interface NewContentPromotionBanner2026Props {
  className?: string;
}

const NewContentPromotionBanner2026: React.FC<NewContentPromotionBanner2026Props> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const featuredContent = [
    {
      id: 'autonomous-systems',
      title: 'Next-Generation Autonomous AI Systems',
      description: 'Discover the future of enterprise automation with revolutionary autonomous AI systems that learn, adapt, and evolve.',
      icon: Brain,
      gradient: 'from-purple-600 to-blue-600',
      link: '/blog/ai-2026-next-gen-autonomous-systems',
      badge: 'NEW'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Enterprise Solutions',
      description: 'Harness the power of quantum computing to solve complex business challenges with unprecedented computational speed.',
      icon: Zap,
      gradient: 'from-emerald-600 to-cyan-600',
      link: '/blog/quantum-computing-enterprise-solutions-2026',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Breakthrough',
      description: 'Explore the dawn of sentient artificial intelligence and its transformative impact on human-AI collaboration.',
      icon: Sparkles,
      gradient: 'from-rose-600 to-pink-600',
      link: '/blog/ai-consciousness-breakthrough-2026',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'transformation-roadmap',
      title: 'Enterprise AI Transformation 2026',
      description: 'Your complete implementation roadmap for successful AI transformation with proven strategies and frameworks.',
      icon: Target,
      gradient: 'from-orange-600 to-red-600',
      link: '/blog/enterprise-ai-transformation-2026-roadmap',
      badge: 'GUIDE'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredContent.length]);

  if (!isVisible) return null;

  const currentItem = featuredContent[currentContent];
  const IconComponent = currentItem.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative overflow-hidden ${className}`}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${currentItem.gradient} opacity-90`} />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Content Section */}
            <div className="flex-1 flex items-center space-x-6">
              {/* Icon */}
              <motion.div
                key={currentContent}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                key={`content-${currentContent}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                    {currentItem.badge}
                  </span>
                  <span className="text-white/80 text-sm font-medium">
                    Featured Content
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentItem.title}
                </h3>
                
                <p className="text-white/90 text-sm max-w-2xl leading-relaxed">
                  {currentItem.description}
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              {/* CTA Button */}
              <motion.a
                href={currentItem.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Explore Now
                <ChevronRight className="ml-2 w-4 h-4" />
              </motion.a>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVisible(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 pb-4">
            {featuredContent.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentContent(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentContent ? 'bg-white' : 'bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" />
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;