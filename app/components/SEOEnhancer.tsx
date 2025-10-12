import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOEnhancer({ className, children }: SEOEnhancerProps) {
  return (
    <div className={}>
      {children || 'SEOEnhancer Component'}
    </div>
  );
}
