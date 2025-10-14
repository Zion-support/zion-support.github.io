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
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - 
          <a href="/business-intelligence" className="underline hover:no-underline ml-1">
            Learn More →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
