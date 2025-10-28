'use client';

import React, { memo } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = memo(({ 
  title = 'Zion Tech Group',
  description = 'Professional technology services',
  className = '' 
}) => {
  return (
    <div className={`seo-head ${className}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </div>
  );
});

SEOHead.displayName = 'SEOHead';

export default SEOHead;