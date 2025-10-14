'use client';
import React from 'react';

interface ContentPromotionBannerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContentPromotionBanner({ children, className = '' }: ContentPromotionBannerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}