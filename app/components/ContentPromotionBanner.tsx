'use client';

import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onClose?: () => void;
  variant?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  buttonText = 'Learn More',
  buttonLink,
  onClose,
  variant = 'info',
  dismissible = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'warning':
        return 'bg-yellow-600 hover:bg-yellow-700 text-white';
      case 'error':
        return 'bg-red-600 hover:bg-red-700 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${getVariantStyles()}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          {description && (
            <p className="text-sm opacity-90 mb-3">{description}</p>
          )}
          {buttonLink && (
            <a
              href={buttonLink}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getButtonStyles()}`}
            >
              {buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          )}
        </div>
        {dismissible && (
          <button
            onClick={handleClose}
            className="ml-4 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentPromotionBanner;