import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, Calendar, BookOpen, Users, Zap, Brain } from 'lucide-react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'service';
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  featured?: boolean;
}

const NewContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-quantum-breakthrough',
      title: 'Revolutionary AI-Quantum Breakthrough 2025',
      description: 'Discover our latest quantum AI consciousness platform revolutionizing business intelligence',
      type: 'blog',
      href: '/blog/ai-quantum-breakthrough-2025',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation',
      description: 'See how a Fortune 500 company achieved 300% efficiency increase and $50M+ savings',
      type: 'case-study',
      href: '/case-studies/fortune-500-ai-transformation',
      icon: Users,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-quantum-platform',
      title: 'AI-Quantum Consciousness Platform',
      description: 'The world\'s first fully conscious AI system powered by quantum computing',
      type: 'service',
      href: '/services/ai-quantum-consciousness-platform',
      icon: Zap,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('content-promotion-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }

    // Auto-rotate content every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('content-promotion-banner-dismissed', 'true');
  };

  const currentContent = contentItems[currentIndex];

  if (isDismissed || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-cyan-500/95 to-purple-600/95 backdrop-blur-lg border-b border-cyan-400/30"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              {/* Content Indicator */}
              <div className="flex gap-2">
                {contentItems.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Content Display */}
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 bg-gradient-to-r ${currentContent.color} rounded-xl flex items-center justify-center`}>
                  <currentContent.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {currentContent.type === 'blog' ? 'New Blog Post' : 
                       currentContent.type === 'case-study' ? 'Case Study' : 'New Service'}
                    </span>
                    {currentContent.featured && (
                      <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {currentContent.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {currentContent.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Link href={currentContent.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                
                <button
                  onClick={handleDismiss}
                  className="text-white/70 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner;