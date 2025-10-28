'use client';

import React from 'react';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  className = ''
}) => {
  return (
    <div className={`bg-blue-600 text-white p-6 rounded-lg ${className}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a 
        href={ctaLink}
        className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default ContentPromotionBanner;
