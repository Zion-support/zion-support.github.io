'use client';
:all-pages-backup/components/SEOHead.tsx
import React from 'react';

interface SEOHeadProps {


  className?: string;


}
const SEOHead: React.FC<SEOHeadProps> = ({ className = '' }) => {
  return (
    <div className={className}></div>
      <h2>SEOHead</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default SEOHead;
