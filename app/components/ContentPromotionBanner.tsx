import React from "react";

const ContentPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium">
          🚀 New AI Services Available! 
          <a href="/ai-services" className="underline ml-2 hover:text-blue-200">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;