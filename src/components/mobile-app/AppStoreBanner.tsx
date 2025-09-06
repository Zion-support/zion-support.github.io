import React from 'react';

interface AppStoreBannerProps {
  className?: string;
}

const AppStoreBanner: React.FC<AppStoreBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppStoreBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppStoreBanner;