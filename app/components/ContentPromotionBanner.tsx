'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Star, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: string[];
  onClose?: () => void;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = 'Transform Your Business with AI',
  description = 'Discover how our AI solutions can revolutionize your operations and drive growth.',
  ctaText = 'Get Started',
  ctaLink = '/contact',
  features = [
    '24/7 AI-powered automation',
    'Real-time analytics and insights',
    'Seamless integration with existing systems',
    'Expert support and training'
  ],
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-8 relative">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-cyan-400">Special Offer</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
