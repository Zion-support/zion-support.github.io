'use client';
import React, { useState } from 'react';
import { X, ArrowRight, Star, Users, Award } from 'lucide-react';

interface PromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const ContentPromotionBanner: React.FC<PromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  variant = 'default',
  dismissible = true,
  onDismiss,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white';
      default:
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white';
    }
  };

  const getVariantIcon = () => {
    switch (variant) {
      case 'success':
        return <Star className="w-5 h-5" />;
      case 'warning':
        return <Award className="w-5 h-5" />;
      case 'info':
        return <Users className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${getVariantStyles()} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">
              {getVariantIcon()}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-2">
                {title}
              </h3>
              <p className="text-sm opacity-90 mb-4">
                {description}
              </p>
              
              {/* CTA Button */}
              <a
                href={ctaLink}
                className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 backdrop-blur-sm border border-white/20"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Dismiss Button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white rounded-full animate-ping" />
        <div className="absolute top-8 right-8 w-4 h-4 border border-white rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default ContentPromotionBanner;