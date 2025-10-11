'use client';
import React from 'react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ContentPromotionBanner({
  title = "Discover More",
  description = "Explore our latest content and resources",
  ctaText = "Learn More",
  ctaLink = "#"
}: ContentPromotionBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <a 
          href={ctaLink}
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
