import React from 'react';

const ContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 text-center">
      <p className="text-sm font-medium">
        🚀 New: AI-Powered Micro SAAS Solutions Now Available! 
        <a href="/micro-saas" className="underline ml-2 hover:text-cyan-200">
          Explore Now →
        </a>
      </p>
    </div>
  );
};

export default ContentPromotionBanner;
