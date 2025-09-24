import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Star, TrendingUp, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';

export function AdvertisingBanner() {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const advertisements = [
    {
      id: 1,
      type: 'blog',
      title: '🚀 New Blog Post',
      subtitle: 'The Future of AI in Business: 2025 Trends',
      description: 'Discover cutting-edge AI technologies revolutionizing business operations',
      cta: 'Read Now',
      link: '/blog/2',
      icon: TrendingUp,
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      id: 2,
      type: 'service',
      title: '💡 Featured Service',
      subtitle: 'Zero-Trust Security Framework',
      description: 'Comprehensive security implementation with 90% breach reduction',
      cta: 'Learn More',
      link: '/services/zero-trust-security-framework',
      icon: Shield,
      gradient: 'from-green-500 to-blue-600',
      featured: true
    },
    {
      id: 3,
      type: 'blog',
      title: '📊 Latest Insights',
      subtitle: 'Edge Computing Revolution',
      description: 'How edge computing is bringing AI closer to data',
      cta: 'Explore',
      link: '/blog/5',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      featured: true
    },
    {
      id: 4,
      type: 'service',
      title: '🎯 Special Offer',
      subtitle: 'AI & ML Consulting',
      description: 'Get expert consultation on implementing AI solutions',
      cta: 'Get Quote',
      link: '/services/ai-ml-consulting',
      icon: Star,
      gradient: 'from-purple-500 to-pink-600',
      featured: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [advertisements.length]);

  const currentAdData = advertisements[currentAd];
  const IconComponent = currentAdData.icon;

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-30"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-400 opacity-20"
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentAdData.gradient} shadow-lg`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-semibold text-blue-400">
                    {currentAdData.title}
                  </span>
                  {currentAdData.featured && (
                    <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {currentAdData.subtitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md">
                  {currentAdData.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button
                asChild
                className={`bg-gradient-to-r ${currentAdData.gradient} hover:opacity-90 text-white border-0 shadow-lg`}
              >
                <a href={currentAdData.link} className="flex items-center space-x-2">
                  <span>{currentAdData.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAd(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentAd 
                    ? 'bg-white scale-125' 
                    : 'bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to advertisement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function PromotionalSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Our Latest Content
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay ahead with cutting-edge insights, expert services, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Blog Post */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-semibold opacity-90">Latest Blog</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI in Business 2025</h3>
              <p className="text-sm opacity-90 mb-4">
                Explore cutting-edge AI technologies revolutionizing business operations
              </p>
              <a 
                href="/blog/2" 
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Featured Service */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 p-8 text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold opacity-90">Featured Service</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Zero-Trust Security</h3>
              <p className="text-sm opacity-90 mb-4">
                Comprehensive security framework with 90% breach reduction
              </p>
              <a 
                href="/services/zero-trust-security-framework" 
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Edge Computing Content */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-semibold opacity-90">Tech Insights</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
              <p className="text-sm opacity-90 mb-4">
                How edge computing is bringing AI closer to data
              </p>
              <a 
                href="/blog/5" 
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* AI Consulting Offer */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-8 text-white">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5" />
                <span className="text-sm font-semibold opacity-90">Special Offer</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Consulting</h3>
              <p className="text-sm opacity-90 mb-4">
                Get expert consultation on implementing AI solutions
              </p>
              <a 
                href="/services/ai-ml-consulting" 
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                Get Quote <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}