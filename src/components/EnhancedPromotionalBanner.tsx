import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnhancedPromotionalBanner } from '../content/enhanced-promotional-banners';

interface EnhancedPromotionalBannerProps {
  banner: EnhancedPromotionalBanner;
  className?: string;
  onDismiss?: (bannerId: string) => void;
}

const EnhancedPromotionalBanner: React.FC<EnhancedPromotionalBannerProps> = ({
  banner,
  className = '',
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(banner.hideAfter);

  useEffect(() => {
    if (banner.autoHide && banner.hideAfter > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [banner.autoHide, banner.hideAfter]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss(banner.id);
    }
  };

  const getAnimationClass = () => {
    switch (banner.animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      default:
        return '';
    }
  };

  const getBadgeColor = () => {
    switch (banner.variant) {
      case 'launch':
        return 'bg-green-500 text-white';
      case 'premium':
        return 'bg-purple-500 text-white';
      case 'warning':
        return 'bg-red-500 text-white';
      case 'success':
        return 'bg-yellow-500 text-black';
      case 'special':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden ${banner.backgroundColor} ${banner.textColor} ${className} ${getAnimationClass()}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            {banner.icon && (
              <div className="text-2xl animate-pulse">
                {banner.icon}
              </div>
            )}
            
            {banner.badge && (
              <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeColor()}`}>
                {banner.badge}
              </div>
            )}
            
            <div className="flex-1">
              <p className="font-semibold text-sm md:text-base">
                {banner.message}
              </p>
              
              {banner.autoHide && timeRemaining > 0 && (
                <div className="text-xs opacity-75 mt-1">
                  Auto-hide in {timeRemaining}s
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              to={banner.ctaLink}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              {banner.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            {banner.showClose && (
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-all duration-300"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default EnhancedPromotionalBanner;