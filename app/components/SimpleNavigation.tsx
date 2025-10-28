
import React from 'react';
import Navigation from './Navigation';

interface SimpleNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const SimpleNavigation: React.FC<SimpleNavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`simplenavigation-component ${className}`}>
      {children}
    </div>
  );
};

SimpleNavigation.displayName = 'SimpleNavigation';

export default SimpleNavigation;