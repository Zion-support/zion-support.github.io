'use client';

import React, { memo } from 'react';

interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`content-promotion-banner ${className}`}>
      {children}
    </div>
  );
});

ContentPromotionBanner.displayName = 'ContentPromotionBanner';

export default ContentPromotionBanner;