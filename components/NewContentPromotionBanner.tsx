import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SparklesIcon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function NewContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: AI 2025 Revolutionary Breakthroughs Guide",
      subtitle: "Discover the latest AI innovations transforming industries",
      cta: "Explore Now",
      href: "/ai-2025-revolutionary-breakthroughs",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "💰 AI Startup Funding Playbook 2025",
      subtitle: "Master $47B+ AI funding landscape with proven strategies",
      cta: "Get Playbook",
      href: "/ai-startup-funding-playbook-2025",
      gradient: "from-green-600 via-blue-600 to-purple-600",
      icon: "💰"
    },
    {
      id: 3,
      title: "🏆 Enterprise AI Transformation Case Study",
      subtitle: "See how we achieved $100M revenue impact",
      cta: "View Case Study",
      href: "/ai-enterprise-transformation-success",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "🏆"
    },
    {
      id: 4,
      title: "📚 FREE: AI Implementation Master Guide",
      subtitle: "Complete 150+ page resource with templates",
      cta: "Download Free",
      href: "/ai-implementation-master-guide-2025",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "📚"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${promotions[currentSlide].gradient} text-white`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl animate-pulse">
                  {promotions[currentSlide].icon}
                </div>
                <div>
                  <motion.h3 
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-bold text-lg md:text-xl"
                  >
                    {promotions[currentSlide].title}
                  </motion.h3>
                  <motion.p 
                    key={`${currentSlide}-subtitle`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/90 text-sm md:text-base"
                  >
                    {promotions[currentSlide].subtitle}
                  </motion.p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  to={promotions[currentSlide].href}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {promotions[currentSlide].cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Close banner"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}