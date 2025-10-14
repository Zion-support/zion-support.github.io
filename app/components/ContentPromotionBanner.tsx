import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  onClose?: () => void;
}

export const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "New AI Solutions Available",
  description = "Discover our latest artificial intelligence services",
  ctaText = "Learn More",
  ctaLink = "/services",
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-sm md:text-base">{title}</h3>
          <p className="text-xs md:text-sm opacity-90">{description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={ctaLink}
            className="bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaText}
          </a>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};