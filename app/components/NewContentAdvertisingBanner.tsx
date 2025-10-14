import React from 'react';

interface NewContentAdvertisingBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const NewContentAdvertisingBanner: React.FC<NewContentAdvertisingBannerProps> = ({ className = '', children }) => {
  return (
    <div className={`newcontentadvertisingbanner ${className}`}>
      {children}
    </div>
  );
};

export default NewContentAdvertisingBanner;