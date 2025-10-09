import React from 'react';

interface ContentPromotionBannerProps {
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm font-medium">🚀</span>
          <span className="text-sm font-medium">New: AI-Powered Business Intelligence 2025</span>
          <span className="text-sm font-medium">→</span>
          <a 
            href="/ai-business-intelligence" 
            className="text-yellow-300 hover:text-yellow-200 underline font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;