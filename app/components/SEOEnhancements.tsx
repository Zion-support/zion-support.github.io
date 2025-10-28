'use client';

import React from 'react';

interface SEOEnhancementsProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancements: React.FC<SEOEnhancementsProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`seoenhancements-component ${className}`}>
      {children}
    </div>
  );
};

SEOEnhancements.displayName = 'SEOEnhancements';

export default SEOEnhancements;