'use client';
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Discover Our Latest Solutions",
  description = "Explore our comprehensive range of AI and IT solutions designed to transform your business.",
  ctaText = "Learn More",
  ctaLink = "/solutions",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;