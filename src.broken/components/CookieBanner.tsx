import React from 'react';

interface CookieBannerProps {
  className?: string;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CookieBanner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CookieBanner;