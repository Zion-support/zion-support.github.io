import React from 'react';

interface UltimateBusinessIntelligence2025BannerProps {
  className?: string;
  children?: React.ReactNode;
}

export const UltimateBusinessIntelligence2025Banner: React.FC<UltimateBusinessIntelligence2025BannerProps> = ({ className = '', children }) => {
  return (
    <div className={`ultimatebusinessintelligence2025banner ${className}`}>
      {children}
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;