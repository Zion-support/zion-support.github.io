import React from 'react';

interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '', children }) => {
  return (
    <div className={`contentpromotionbanner ${className}`}>
      {children}
    </div>
  );
};

export default ContentPromotionBanner;
