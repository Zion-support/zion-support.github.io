import React from 'react';

interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = (_{ className = '', _children }) => {
  return (
    <div className={`contentpromotionbanner-component ${className}`}>
      {children}
    </div>
  );
};

ContentPromotionBanner.displayName = 'ContentPromotionBanner';

export default ContentPromotionBanner;