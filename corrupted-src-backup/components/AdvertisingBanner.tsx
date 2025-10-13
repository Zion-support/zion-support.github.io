import React from 'react';

interface AdvertisingBannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdvertisingBanner({ className = '', children }: AdvertisingBannerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}