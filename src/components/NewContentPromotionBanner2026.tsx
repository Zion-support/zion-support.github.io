import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Sparkles, TrendingUp, Star } from 'lucide-react';

const NewContentPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const newContent = [
    {
      title: "AI Trends 2026 Insights",
      description: "Discover the revolutionary AI technologies shaping the future",
      link: "/pages/AITrends2026Insights",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Revolutionary Case Studies 2026",
      description: "Explore groundbreaking success stories across industries",
      link: "/pages/RevolutionaryCaseStudies2026",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ultimate Tech Showcase 2026",
      description: "Experience the pinnacle of revolutionary technologies",
      link: "/pages/UltimateTechShowcase2026",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate content every 4 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % newContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newContent.length]);

  const current = newContent[currentContent];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="animate-pulse">🚀</div>
                  <span className="font-bold text-lg">NEW CONTENT 2026</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${current.color} flex items-center justify-center text-white`}>
                    {current.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{current.title}</div>
                    <div className="text-sm opacity-90">{current.description}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to={current.link}
                  className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors font-medium flex items-center space-x-2"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden mt-4">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${current.color} flex items-center justify-center text-white`}>
                  {current.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{current.title}</div>
                  <div className="text-xs opacity-90">{current.description}</div>
                </div>
                <Link
                  to={current.link}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium text-sm flex items-center space-x-1"
                >
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2026;