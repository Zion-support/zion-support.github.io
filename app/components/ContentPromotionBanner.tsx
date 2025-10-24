'use client';
import React, { useState } from 'react';
import { X, Star, ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'default' | 'success' | 'warning' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = 'Special Offer!',
  description = 'Get 20% off on all our AI solutions this month.',
  buttonText = 'Learn More',
  buttonLink = '#',
  variant = 'default',
  dismissible = true,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) {
    return null;
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className={`promotion-banner ${getVariantClasses()}`}>
      <div className="banner-content">
        <div className="banner-icon">
          <Star size={20} className="text-yellow-500" />
        </div>
        
        <div className="banner-text">
          <h4 className="banner-title">{title}</h4>
          <p className="banner-description">{description}</p>
        </div>
        
        <div className="banner-actions">
          <a
            href={buttonLink}
            className="banner-button"
          >
            {buttonText}
            <ArrowRight size={16} />
          </a>
          
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="banner-dismiss"
              aria-label="Dismiss banner"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;