import React, { useState } from 'react';

interface NewContentPromotionBannerProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default' | 'premium';
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className?: string;
  onDismiss?: () => void;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'default',
  title = 'New Content Available!',
  description = 'Check out our latest articles and insights.',
  ctaText = 'Explore Now',
  ctaLink = '/blog',
  dismissible = true,
  className = '',
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

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

  const getIcon = () => {
    switch (variant) {
      case 'info':
        return 'ℹ️';
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'premium':
        return '⭐';
      default:
        return '📢';
    }
  };

  return (
    <div className={`border rounded-lg p-4 ${getVariantStyles()} ${className}`}>
      <div className="flex items-start space-x-3">
        <div className="text-2xl">{getIcon()}</div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm opacity-90 mb-3">{description}</p>
          
          <div className="flex items-center space-x-3">
            {ctaLink && (
              <a
                href={ctaLink}
                className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md text-sm font-medium transition-colors"
              >
                {ctaText}
              </a>
            )}
            
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Dismiss banner"
              >
                Dismiss
              </button>
            )}
          </div>
        </div>
        
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="text-lg opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Close banner"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;