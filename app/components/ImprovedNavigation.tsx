import React from 'react';

interface ImprovedNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedNavigation: React.FC<ImprovedNavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`improvednavigation ${className}`}>
      {children}
    </div>
  );
};

export default ImprovedNavigation;