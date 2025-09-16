import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Automation Guide",
      description: "Discover how AI is transforming business operations with 200% productivity gains",
      category: "AI & Automation",
      readTime: "15 min read",
      featured: true,
      stats: "60% cost reduction"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Breakthrough",
      description: "Real-world applications solving impossible problems in 2026",
      category: "Quantum Computing",
      readTime: "18 min read",
      featured: true,
      stats: "1000x faster processing"
    },
    {
      id: 3,
      title: "🧠 Neural Interface Technology",
      description: "The next frontier of human-computer interaction",
      category: "Neural Interfaces",
      readTime: "20 min read",
      featured: true,
      stats: "99.7% accuracy"
    },
    {
      id: 4,
      title: "🛡️ AI-Powered Cybersecurity",
      description: "Detecting and preventing 99.9% of cyber threats in real-time",
      category: "Cybersecurity",
      readTime: "16 min read",
      featured: true,
      stats: "95% incident reduction"
    },
    {
      id: 5,
      title: "🌐 Metaverse Revolution",
      description: "Building immersive digital worlds that rival reality",
      category: "Metaverse",
      readTime: "14 min read",
      featured: true,
      stats: "300% engagement boost"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  if (!isVisible) return null;

  const currentItem = newContent[currentContent];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  {/* Trending Icon */}
                  <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">NEW CONTENT</span>
                  </div>

                  {/* Content Info */}
                  <div className="flex-1">
                    <motion.div
                      key={currentItem.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">
                          {currentItem.title}
                        </h3>
                        <p className="text-blue-100 text-sm mb-2">
                          {currentItem.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className="bg-white/20 rounded-full px-2 py-1">
                            {currentItem.category}
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{currentItem.readTime}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-yellow-300">
                            <Zap className="w-3 h-3" />
                            <span>{currentItem.stats}</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4 ml-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 rounded-full px-6 py-2 flex items-center space-x-2 transition-colors"
                >
                  <span className="font-medium">Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentContent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentContent
                      ? 'bg-white w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <Star className="w-6 h-6 animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20">
          <Zap className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;