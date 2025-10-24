import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`navigation ${className}`}>
      {children}
    </div>
  );
};

export default Navigation;