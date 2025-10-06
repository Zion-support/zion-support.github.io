import React, { useState } from 'react';

interface NewContentPromotionBannerProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default' | 'premium';
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'default',
  title = 'New Content Available',
  description = 'Check out our latest articles and insights',
  ctaText = 'Explore Now',
  ctaLink = '/blog',
  dismissible = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const getVariantStyles = () => {
    switch (variant) {
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'premium':
        return 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`border rounded-lg p-4 ${getVariantStyles()} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {ctaText}
            </a>
          )}
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;