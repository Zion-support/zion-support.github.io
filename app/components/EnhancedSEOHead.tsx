import React from 'react';

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedseohead ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSEOHead;
