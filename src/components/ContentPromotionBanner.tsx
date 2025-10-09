import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - 
          <a href="/ai-analytics-dashboard" className="underline hover:no-underline ml-1">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;