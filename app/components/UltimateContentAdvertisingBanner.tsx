import React from 'react';

interface UltimateContentAdvertisingBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const UltimateContentAdvertisingBanner: React.FC<UltimateContentAdvertisingBannerProps> = ({ className = '', children }) => {
  return (
    <div className={`ultimatecontentadvertisingbanner ${className}`}>
      {children}
    </div>
  );
};

export default UltimateContentAdvertisingBanner;