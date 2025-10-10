'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Star, Users, Zap, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features?: string[];
  variant?: 'default' | 'success' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  features = [],
  variant = 'default',
  dismissible = true,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-600 to-orange-600';
      case 'info':
        return 'bg-gradient-to-r from-cyan-600 to-blue-600';
      default:
        return 'bg-gradient-to-r from-purple-600 to-blue-600';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`${getVariantStyles()} text-white py-16 px-4 relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                Limited Time Offer
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            {features.length > 0 && (
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-white/80 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-white/80 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold">300%</div>
                  <div className="text-white/80 text-sm">ROI Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-white/80 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      )}
    </div>
  );
};

export default ContentPromotionBanner;