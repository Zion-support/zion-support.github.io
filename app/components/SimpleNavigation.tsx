import React from 'react';

interface SimpleNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = ({ className, children }) => {
  return (
    <div className={`simplenavigation-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default SimpleNavigation;
