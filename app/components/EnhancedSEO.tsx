import React from 'react';interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedseo-component ${className}`}>
      {children}
    </div>
  );
};

EnhancedSEO.displayName = 'EnhancedSEO';

export default EnhancedSEO;