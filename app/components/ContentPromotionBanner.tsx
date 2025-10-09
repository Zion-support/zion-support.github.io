import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-4">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm md:text-base">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - Transform your data into actionable insights
          <a href="/ai-data-analytics" className="ml-2 underline hover:no-underline">
            Learn More →
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
