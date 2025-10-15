import React from 'react';

interface AdvertisingbannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Advertisingbanner({ className = '', children }: AdvertisingbannerProps) {
  return (
    <div className={`AdvertisingBanner-component ${className}`}>
      {children}
    </div>
  );
}