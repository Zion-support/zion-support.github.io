<<<<<<< HEAD

import React from 'react';
interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`enhanced-seo ${className}`}>
      {children}
    </div>
  );
};

EnhancedSEO.displayName = 'EnhancedSEO';

export default EnhancedSEO;