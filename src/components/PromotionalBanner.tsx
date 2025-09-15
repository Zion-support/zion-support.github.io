import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromotionalBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info';
  closable?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

const promotionalContent = [
  {
    id: 1,
    title: "🚀 New AI Services Available!",
    description: "Discover our cutting-edge AI-powered solutions for 2025",
    cta: "Explore AI Services",
    link: "/services/ai-solutions",
    icon: Zap,
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    id: 2,
    title: "🛡️ Enhanced Security Features",
    description: "Protect your business with our advanced cybersecurity solutions",
    cta: "Learn More",
    link: "/services/cybersecurity",
    icon: Shield,
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    id: 3,
    title: "⭐ Client Success Stories",
    description: "See how we've helped 500+ companies transform digitally",
    cta: "View Case Studies",
    link: "/case-studies",
    icon: Star,
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50"
  }
];

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  variant = 'default',
  closable = true,
  autoHide = false,
  autoHideDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissedBanners = JSON.parse(localStorage.getItem('dismissedBanners') || '[]');
    if (dismissedBanners.includes(promotionalContent[currentContent].id)) {
      setIsDismissed(true);
    }
  }, [currentContent]);

  useEffect(() => {
    if (autoHide && isVisible && !isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, isVisible, isDismissed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % promotionalContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    const dismissedBanners = JSON.parse(localStorage.getItem('dismissedBanners') || '[]');
    dismissedBanners.push(promotionalContent[currentContent].id);
    localStorage.setItem('dismissedBanners', JSON.stringify(dismissedBanners));
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  const content = promotionalContent[currentContent];
  const IconComponent = content.icon;

  const variantStyles = {
    default: 'border-blue-200 bg-blue-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    info: 'border-cyan-200 bg-cyan-50'
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`relative overflow-hidden border-b ${variantStyles[variant]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r opacity-5 from-gray-900 to-gray-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full bg-gradient-to-r ${content.gradient} text-white`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {content.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {content.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link
                to={content.link}
                className={`inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r ${content.gradient} rounded-lg hover:shadow-md transition-all duration-200`}
              >
                {content.cta}
                <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
              
              {closable && (
                <button
                  onClick={handleDismiss}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full">
          <motion.div
            className={`h-full bg-gradient-to-r ${content.gradient}`}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionalBanner;