'use client'
import React, { useState, useEffect } from 'react'
import { X, ArrowRight, Star } from 'lucide-react'

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  image?: string;
  featured?: boolean;
  onClose?: () => void;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  image,
  featured = false,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem(`banner-dismissed-${title}`);
    if (dismissed) {
      setIsVisible(false);
    }
  }, [title]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(`banner-dismissed-${title}`, 'true');
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-lg shadow-lg mb-6">
      {featured && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}
      
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/90 mb-3">{description}</p>
          <a
            href={ctaUrl}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
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