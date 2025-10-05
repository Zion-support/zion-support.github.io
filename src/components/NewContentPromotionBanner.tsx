import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NewContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'default' | 'gradient' | 'dark';
  dismissible?: boolean;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  variant = 'default',
  dismissible = true
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white';
      case 'dark':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-blue-50 border border-blue-200 text-blue-900';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`relative ${getVariantClasses()} py-4 px-6`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        
        <div className="flex items-center space-x-4 ml-6">
          <Link
            to={ctaLink}
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {ctaText}
          </Link>
          
          {dismissible && (
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;