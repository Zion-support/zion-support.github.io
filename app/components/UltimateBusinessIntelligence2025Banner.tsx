import React from 'react';

interface UltimateBusinessIntelligence2025BannerProps {
  className?: string;
  children?: React.ReactNode;
}

const UltimateBusinessIntelligence2025Banner: React.FC<UltimateBusinessIntelligence2025BannerProps> = ({ className = '', children }) => {
  return (
    <div className={`ultimate-business-intelligence-2025-banner ${className}`}>
      {children}
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;
