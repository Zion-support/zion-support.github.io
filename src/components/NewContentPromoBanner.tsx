import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  X, 
  Star, 
  Rocket, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Zap,
  Gift,
  Bell
} from 'lucide-react';

interface PromoBannerProps {
  variant?: 'top' | 'floating' | 'inline';
  showCloseButton?: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export function NewContentPromoBanner({ 
  variant = 'top', 
  showCloseButton = true,
  autoClose = false,
  autoCloseDelay = 10000
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show banner after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Auto close if enabled
    if (autoClose) {
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, autoCloseDelay);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(autoCloseTimer);
      };
    }

    return () => clearTimeout(showTimer);
  }, [autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    // Store in localStorage to remember user's choice
    localStorage.setItem('newContentBannerClosed', 'true');
  };

  // Check if user previously closed the banner
  useEffect(() => {
    const wasClosed = localStorage.getItem('newContentBannerClosed');
    if (wasClosed === 'true') {
      setIsClosed(true);
    }
  }, []);

  if (isClosed) return null;

  const bannerContent = (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                <Star className="w-3 h-3 mr-1" />
                NEW
              </span>
              <span className="text-cyan-400 text-sm font-medium">Limited Time Offer</span>
            </div>
            <h3 className="text-white font-bold text-lg">
              🚀 New: GenAI Compliance + Agentic CRM Guides
            </h3>
            <p className="text-gray-300 text-sm">
              Learn practical patterns for regulated GenAI and autonomous revenue workflows
            </p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <Link
            to="/blog/genai-2025-practical-compliance-patterns"
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Read GenAI Compliance
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/blog/agentic-crm-autonomous-revenue-workflows-2025"
            className="inline-flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Agentic CRM
          </Link>
          
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors duration-200"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (variant === 'floating') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 max-w-md"
          >
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
              {bannerContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  if (variant === 'inline') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="bg-slate-800/50 rounded-xl border border-cyan-500/30 shadow-lg overflow-hidden">
              {bannerContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Top banner variant (default)
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-40"
        >
          <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-b border-cyan-500/30 shadow-lg">
            {bannerContent}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Special promotional sections for homepage
export function NewContentPromoSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <Bell className="w-4 h-4" />
            Just Released
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎉 New Content Just Dropped!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest AI innovations, cutting-edge technology platforms, and revolutionary services 
            that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">50+ New AI Services</h3>
            <p className="text-gray-300 mb-4">From Legal AI to Healthcare Diagnostics, explore our expanded portfolio</p>
            <Link to="/services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              View All Services →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Revolutionary Platforms</h3>
            <p className="text-gray-300 mb-4">Quantum AI, Space Tech, and Metaverse solutions for the future</p>
            <Link to="/new-content-showcase" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Explore Platforms →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Special Launch Offers</h3>
            <p className="text-gray-300 mb-4">Limited-time pricing on new services and exclusive early access</p>
            <Link to="/pricing" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              View Offers →
            </Link>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            to="/new-content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Discover All New Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}