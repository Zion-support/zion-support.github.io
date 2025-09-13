import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  XMarkIcon, 
  ArrowRightIcon,
  FireIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function LatestContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromotion, setCurrentPromotion] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: AI 2025 Revolutionary Breakthroughs Guide",
      subtitle: "Discover the latest AI innovations transforming industries worldwide",
      description: "Get exclusive access to our comprehensive guide covering quantum computing, autonomous systems, and breakthrough AI technologies.",
      cta: "Explore Now",
      href: "/ai-2025-revolutionary-breakthroughs",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀",
      badge: "NEW",
      badgeColor: "bg-purple-600",
      metrics: "2,500% ROI",
      readTime: "25 min read",
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: "💰 AI Startup Funding Playbook 2025",
      subtitle: "Master the $47B+ AI funding landscape with proven strategies",
      description: "Complete playbook with pitch templates, investor insights, and real success stories from seed to Series A.",
      cta: "Get Playbook",
      href: "/ai-startup-funding-playbook-2025",
      gradient: "from-green-600 via-blue-600 to-purple-600",
      icon: "💰",
      badge: "HOT",
      badgeColor: "bg-green-600",
      metrics: "$47B+ Funding",
      readTime: "22 min read",
      rating: 5,
      trending: true
    },
    {
      id: 3,
      title: "🏆 Enterprise AI Transformation Case Study",
      subtitle: "See how we achieved $100M revenue impact",
      description: "Detailed case study showing the complete transformation journey, challenges overcome, and measurable results achieved.",
      cta: "View Case Study",
      href: "/ai-enterprise-transformation-success",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-blue-600",
      metrics: "$100M Impact",
      readTime: "18 min read",
      rating: 5,
      success: true
    },
    {
      id: 4,
      title: "📚 FREE: AI Implementation Master Guide",
      subtitle: "Complete 150+ page resource with templates and strategies",
      description: "Comprehensive implementation guide with step-by-step frameworks, checklists, and proven strategies for AI transformation.",
      cta: "Download Free",
      href: "/ai-implementation-master-guide-2025",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "📚",
      badge: "FREE",
      badgeColor: "bg-orange-600",
      metrics: "150+ Pages",
      readTime: "45 min read",
      rating: 5,
      popular: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentItem = promotions[currentPromotion];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${currentItem.gradient} text-white`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl animate-bounce">
                    {currentItem.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${currentItem.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                      {currentItem.badge}
                    </span>
                    {currentItem.featured && (
                      <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ FEATURED
                      </span>
                    )}
                    {currentItem.trending && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        🔥 TRENDING
                      </span>
                    )}
                    {currentItem.success && (
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        🏆 SUCCESS
                      </span>
                    )}
                    {currentItem.popular && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        📈 POPULAR
                      </span>
                    )}
                  </div>
                </div>

                <motion.h3 
                  key={`title-${currentPromotion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-bold text-2xl md:text-3xl mb-3"
                >
                  {currentItem.title}
                </motion.h3>

                <motion.p 
                  key={`subtitle-${currentPromotion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-white/90 text-lg md:text-xl mb-4"
                >
                  {currentItem.subtitle}
                </motion.p>

                <motion.p 
                  key={`description-${currentPromotion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/80 text-sm md:text-base mb-6 max-w-2xl"
                >
                  {currentItem.description}
                </motion.p>

                <motion.div 
                  key={`metrics-${currentPromotion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-6 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    <span>{currentItem.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                    ))}
                    <span className="ml-1">5.0</span>
                  </div>
                  <div className="font-semibold text-yellow-300">
                    {currentItem.metrics}
                  </div>
                </motion.div>
              </div>

              {/* Right Content - CTA */}
              <div className="flex flex-col items-center gap-4">
                <Link
                  to={currentItem.href}
                  className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
                >
                  {currentItem.cta}
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Close banner"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            {/* Progress Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPromotion(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPromotion ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
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