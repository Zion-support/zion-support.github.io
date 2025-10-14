import React from 'react';

interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '', children }) => {
  return (
    <div className={`contentpromotionbanner-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">ContentPromotionBanner</h3>
          <p className="text-gray-600">This is the ContentPromotionBanner component.</p>
        </div>
      )}
    </div>
  );
};

export default ContentPromotionBanner;