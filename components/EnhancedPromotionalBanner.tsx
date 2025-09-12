import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, TrendingUp, Clock, Users, Zap, CheckCircle } from 'lucide-react';

interface PromotionalBannerProps {
  variant?: 'default' | 'success' | 'warning' | 'info' | 'premium';
  dismissible?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
  className?: string;
}

const EnhancedPromotionalBanner: React.FC<PromotionalBannerProps> = ({
  variant = 'default',
  dismissible = true,
  autoHide = false,
  hideDelay = 10000,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, hideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDelay]);

  const handleDismiss = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-gradient-to-r from-green-500 to-emerald-600',
          text: 'text-white',
          button: 'bg-white text-green-600 hover:bg-green-50',
          icon: 'text-green-200'
        };
      case 'warning':
        return {
          container: 'bg-gradient-to-r from-yellow-500 to-orange-500',
          text: 'text-white',
          button: 'bg-white text-orange-600 hover:bg-orange-50',
          icon: 'text-yellow-200'
        };
      case 'info':
        return {
          container: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          text: 'text-white',
          button: 'bg-white text-blue-600 hover:bg-blue-50',
          icon: 'text-blue-200'
        };
      case 'premium':
        return {
          container: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
          text: 'text-white',
          button: 'bg-white text-purple-600 hover:bg-purple-50',
          icon: 'text-purple-200'
        };
      default:
        return {
          container: 'bg-gradient-to-r from-gray-800 to-gray-900',
          text: 'text-white',
          button: 'bg-white text-gray-800 hover:bg-gray-100',
          icon: 'text-gray-300'
        };
    }
  };

  const styles = getVariantStyles();

  if (!isVisible) return null;

  return (
    <div 
      className={`relative overflow-hidden ${styles.container} ${className} ${
        isAnimating ? 'animate-slide-up' : 'animate-slide-down'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className={`flex-shrink-0 ${styles.icon}`}>
                {variant === 'success' && <CheckCircle className="w-6 h-6" />}
                {variant === 'warning' && <TrendingUp className="w-6 h-6" />}
                {variant === 'info' && <Zap className="w-6 h-6" />}
                {variant === 'premium' && <Star className="w-6 h-6" />}
                {variant === 'default' && <Users className="w-6 h-6" />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <div>
                    <h3 className={`text-lg font-bold ${styles.text}`}>
                      🚀 New AI Content Available!
                    </h3>
                    <p className={`text-sm ${styles.text} opacity-90`}>
                      Discover our latest AI governance guide and multimodal AI revolution insights. 
                      Plus, explore our $500M autonomous vehicles success case study.
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">15 min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs">Trending</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-xs">Premium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <Link 
                  href="/blog/ai-2025-enterprise-ai-governance"
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${styles.button} hover:scale-105 transform`}
                >
                  Read Now
                  <ArrowRight className="w-4 h-4 ml-1 inline" />
                </Link>
                
                <Link 
                  href="/case-studies/ai-2025-autonomous-vehicles-success"
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${styles.button} hover:scale-105 transform`}
                >
                  Case Study
                </Link>

                {dismissible && (
                  <button
                    onClick={handleDismiss}
                    className={`p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors ${styles.text}`}
                    aria-label="Dismiss banner"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar for Auto Hide */}
      {autoHide && (
        <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-30 w-full">
          <div 
            className="h-full bg-white bg-opacity-60 transition-all duration-1000 ease-linear"
            style={{
              width: '100%',
              animation: `shrink ${hideDelay}ms linear forwards`
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};

export default EnhancedPromotionalBanner;