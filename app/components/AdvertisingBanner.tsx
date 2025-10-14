import React from 'react';

interface AdvertisingBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const AdvertisingBanner: React.FC<AdvertisingBannerProps> = ({ className = '', children }) => {
  return (
    <div className={`advertisingbanner ${className}`}>
      {children}
    </div>
  );
};

export default AdvertisingBanner;