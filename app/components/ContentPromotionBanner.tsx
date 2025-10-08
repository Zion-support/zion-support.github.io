import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 text-center">
      <p className="text-sm font-medium">
        🚀 New: AI-Powered Business Intelligence Dashboard - 
        <a href="/ai-analytics" className="underline hover:no-underline ml-1">
          Learn More
        </a>
      </p>
    </div>
  );
};

export default ContentPromotionBanner;