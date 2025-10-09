import React from 'react';
import { X } from 'lucide-react';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  onClose: () => void;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  onClose
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={ctaLink}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaText}
          </a>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;