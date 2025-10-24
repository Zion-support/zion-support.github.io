import React from 'react';

interface SEOHeadProps {
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '' }) => {
  return (
    <div className={`seohead ${className}`}>
      <h2>S E O Head</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default SEOHead;