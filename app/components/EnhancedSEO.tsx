import React from 'react';

interface _EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}


const EnhancedSEO: React.FC<_EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`nhancedseo ${className}`}>
      {children}
    </div>
  );
};

EnhancedSEO.displayName = 'EnhancedSEO';

export default EnhancedSEO;