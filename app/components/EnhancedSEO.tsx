import React from 'react';

interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedseo ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSEO;