import React from 'react';

interface SEO.testProps {
  className?: string;
}

const SEO.test: React.FC<SEO.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SEO.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SEO.test;