'use client';

import React from 'react';

interface ContentPromotionBannerProps {
  children?: React.ReactNode;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ContentPromotionBanner;