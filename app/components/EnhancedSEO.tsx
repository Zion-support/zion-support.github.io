import React from 'react';
interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}





const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`enhanced-seo ${className}`}>
      {children}
    </div>
  );
};

EnhancedSEO.displayName = 'EnhancedSEO';

export default EnhancedSEO;