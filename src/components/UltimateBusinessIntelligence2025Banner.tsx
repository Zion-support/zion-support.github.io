import React from 'react';

interface UltimateBusinessIntelligence2025BannerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UltimateBusinessIntelligence2025Banner({ className = '', children }: UltimateBusinessIntelligence2025BannerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}