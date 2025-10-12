import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContentPromotionBannerProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ContentPromotionBanner({ 
  className = '',
  title = "Discover Our Latest Features",
  description = "Explore cutting-edge solutions designed to transform your business",
  buttonText = "Learn More",
  buttonLink = "/services"
}: ContentPromotionBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-8 text-white ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-purple-100 mb-6">{description}</p>
        <a
          href={buttonLink}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
