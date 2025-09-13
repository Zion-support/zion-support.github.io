import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowRight, 
  BookOpen, 
  BarChart3,
  Target,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems = [
    {
      id: 'automation-revolution',
      title: 'AI 2025: Next Generation Business Automation Revolution',
      category: 'Blog Post',
      description: 'Discover how AI-powered automation is revolutionizing business operations, delivering 300% efficiency gains and unprecedented ROI.',
      stats: ['300% efficiency increase', '50% cost reduction', '99.9% accuracy'],
      link: '/blog/ai-2025-next-generation-business-automation-revolution',
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      id: 'fortune-500-case-study',
      title: 'Fortune 500 AI Transformation: $50M Success Story',
      category: 'Case Study',
      description: 'How a Fortune 500 company achieved $50M in cost savings and 400% efficiency gains through comprehensive AI transformation.',
      stats: ['$50M cost savings', '400% efficiency gain', '1,200% ROI'],
      link: '/case-studies/fortune-500-ai-transformation-2025-mega-success',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2025',
      category: 'Implementation Guide',
      description: 'The definitive enterprise roadmap for AI implementation, covering strategy, technology, and best practices for maximum ROI.',
      stats: ['Complete roadmap', 'Proven methodology', 'ROI framework'],
      link: '/resources/ai-implementation-master-guide-2025-complete',
      icon: BookOpen,
      color: 'from-orange-500 to-red-600',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              NEW CONTENT AVAILABLE
            </motion.div>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Revolutionary AI Content for 2025
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              Discover cutting-edge insights, success stories, and implementation guides 
              that will transform your business with AI in 2025
            </motion.p>
          </div>

          {/* Content showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contentItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`relative group cursor-pointer ${index === currentSlide ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    {/* Featured badge */}
                    {item.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      <Icon className="w-3 h-3" />
                      {item.category}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      {item.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 + statIndex * 0.1 }}
                          className="flex items-center gap-2 text-sm text-green-300"
                        >
                          <CheckCircle className="w-4 h-4" />
                          {stat}
                        </motion.div>
                      ))}
                    </div>

                    {/* Read more button */}
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mb-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Link
              href="/resources"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Explore All AI Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContentPromotionBanner2025;