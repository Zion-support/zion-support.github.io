import React from 'react';

interface Sitemap.testProps {
  className?: string;
}

const Sitemap.test: React.FC<Sitemap.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sitemap.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sitemap.test;