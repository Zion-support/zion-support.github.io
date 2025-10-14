'use client';
import React from 'react';

interface AdvertisingBannerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AdvertisingBanner({ children, className = '' }: AdvertisingBannerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}