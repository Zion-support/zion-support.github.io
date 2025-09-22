import React from 'react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export default function ContentPromotionBanner({ 
  title = "Discover More AI Solutions",
  description = "Explore our comprehensive AI services and solutions",
  ctaText = "Learn More",
  ctaLink = "/services",
  className = ""
}: ContentPromotionBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100 mb-4">{description}</p>
        <a 
          href={ctaLink}
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}