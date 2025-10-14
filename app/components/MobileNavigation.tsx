import React from 'react';

interface MobileNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`mobilenavigation ${className}`}>
      {children}
    </div>
  );
};

export default MobileNavigation;