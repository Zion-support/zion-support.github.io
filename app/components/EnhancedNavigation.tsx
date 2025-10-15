import React from 'react';

interface EnhancedNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`enhancednavigation ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedNavigation;