import React from 'react';

interface UnifiedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const UnifiedSEOHead: React.FC<UnifiedSEOHeadProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`unifiedseohead ${className}`}>
      {children}
    </div>
  );
};

export default UnifiedSEOHead;