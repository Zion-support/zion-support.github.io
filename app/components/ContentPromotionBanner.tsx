import React from 'react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Discover More",
  description = "Explore our latest content and insights",
  ctaText = "Learn More",
  ctaLink = "#",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg mb-4 opacity-90">{description}</p>
        <a
          href={ctaLink}
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;