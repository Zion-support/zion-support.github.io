import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star, Sparkles, Zap } from 'lucide-react';

interface PromotionalBannerProps {
  type?: 'announcement' | 'offer' | 'feature' | 'testimonial';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  type = 'announcement',
  title,
  description,
  ctaText,
  ctaLink,
  badge,
  icon,
  dismissible = true,
  autoHide = false,
  autoHideDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay]);

  const handleDismiss = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const getBannerStyles = () => {
    switch (type) {
      case 'offer':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      case 'feature':
        return 'bg-gradient-to-r from-blue-600 to-indigo-600';
      case 'testimonial':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      default:
        return 'bg-gradient-to-r from-zion-blue to-zion-purple';
    }
  };

  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'offer':
        return <Sparkles className="w-5 h-5" />;
      case 'feature':
        return <Zap className="w-5 h-5" />;
      case 'testimonial':
        return <Star className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`relative overflow-hidden ${getBannerStyles()} transition-all duration-300 ${
        isAnimating ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {badge && (
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {badge}
              </span>
            )}
            
            <div className="flex items-center gap-3">
              <div className="text-white animate-bounce">
                {getIcon()}
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {title}
                </h3>
                <p className="text-white/90 text-xs md:text-sm hidden sm:block">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={ctaLink}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>

            {dismissible && (
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;