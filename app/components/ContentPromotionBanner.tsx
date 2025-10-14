import React from 'react';

interface ContentPromotionBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Boost Your Content Performance",
  description = "Get more engagement and reach with our advanced content promotion strategies.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  className = ""
}) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;