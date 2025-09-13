import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SparklesIcon, 
  ArrowRightIcon,
  StarIcon,
  FireIcon,
  TrophyIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function HeroPromotionBanner() {
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI 2025 Revolutionary Breakthroughs",
      subtitle: "Discover the latest AI innovations transforming industries worldwide",
      description: "Get exclusive access to our comprehensive guide covering quantum computing, autonomous systems, and breakthrough AI technologies that are reshaping the future.",
      cta: "Explore Breakthroughs",
      href: "/ai-2025-revolutionary-breakthroughs",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      icon: "🚀",
      badge: "NEW",
      badgeColor: "bg-purple-600",
      metrics: "2,500% ROI",
      readTime: "25 min read",
      rating: 5,
      featured: true,
      urgent: true
    },
    {
      id: 2,
      title: "💰 AI Startup Funding Playbook 2025",
      subtitle: "Master the $47B+ AI funding landscape with proven strategies",
      description: "Complete playbook with pitch templates, investor insights, and real success stories from seed to Series A. Join 2,500+ startups already funded.",
      cta: "Get Playbook",
      href: "/ai-startup-funding-playbook-2025",
      gradient: "from-green-600 via-blue-600 to-purple-600",
      icon: "💰",
      badge: "HOT",
      badgeColor: "bg-green-600",
      metrics: "$47B+ Funding",
      readTime: "22 min read",
      rating: 5,
      trending: true,
      popular: true
    },
    {
      id: 3,
      title: "🏆 Enterprise AI Transformation Success",
      subtitle: "See how we achieved $100M revenue impact for Fortune 500 companies",
      description: "Detailed case study showing the complete transformation journey, challenges overcome, and measurable results achieved. Learn from real-world implementations.",
      cta: "View Case Study",
      href: "/ai-enterprise-transformation-success",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: "🏆",
      badge: "SUCCESS",
      badgeColor: "bg-blue-600",
      metrics: "$100M Impact",
      readTime: "18 min read",
      rating: 5,
      success: true,
      featured: true
    },
    {
      id: 4,
      title: "📚 FREE: AI Implementation Master Guide",
      subtitle: "Complete 150+ page resource with templates and proven strategies",
      description: "Comprehensive implementation guide with step-by-step frameworks, checklists, and proven strategies for AI transformation. Used by Fortune 500 companies.",
      cta: "Download Free",
      href: "/ai-implementation-master-guide-2025",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      icon: "📚",
      badge: "FREE",
      badgeColor: "bg-orange-600",
      metrics: "150+ Pages",
      readTime: "45 min read",
      rating: 5,
      popular: true,
      free: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = promotions[currentPromo];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentItem.gradient} opacity-20 animate-pulse`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            key={`badge-${currentPromo}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-purple-300 rounded-full px-6 py-3 mb-8 border border-purple-500/30"
          >
            <SparklesIcon className="h-5 w-5 mr-2 animate-pulse" />
            <span className="text-sm font-bold">🔥 FEATURED CONTENT</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            key={`title-${currentPromo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {currentItem.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            key={`subtitle-${currentPromo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto"
          >
            {currentItem.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p 
            key={`description-${currentPromo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            {currentItem.description}
          </motion.p>

          {/* Metrics and Badges */}
          <motion.div 
            key={`metrics-${currentPromo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-2xl">{currentItem.icon}</span>
              <span className={`${currentItem.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                {currentItem.badge}
              </span>
            </div>
            
            {currentItem.featured && (
              <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <StarIcon className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">FEATURED</span>
              </div>
            )}
            
            {currentItem.trending && (
              <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <FireIcon className="h-4 w-4 text-red-400" />
                <span className="text-red-300 text-sm font-medium">TRENDING</span>
              </div>
            )}
            
            {currentItem.success && (
              <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <TrophyIcon className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">SUCCESS STORY</span>
              </div>
            )}
            
            {currentItem.free && (
              <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <DocumentTextIcon className="h-4 w-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">FREE RESOURCE</span>
              </div>
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            key={`cta-${currentPromo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              to={currentItem.href}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
            >
              {currentItem.cta}
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View All Content
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div 
            key={`indicators-${currentPromo}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-3"
          >
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPromo ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}