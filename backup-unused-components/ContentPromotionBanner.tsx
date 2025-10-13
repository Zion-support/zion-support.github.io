import React from 'react';

interface ContentPromotionBannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentPromotionBanner({ className = '', children }: ContentPromotionBannerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}