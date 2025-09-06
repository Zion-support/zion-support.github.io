import React from 'react';

interface SEOHead.testProps {
  className?: string;
}

const SEOHead.test: React.FC<SEOHead.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SEOHead.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SEOHead.test;