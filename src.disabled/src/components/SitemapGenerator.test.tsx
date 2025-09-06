import React from 'react';

interface SitemapGenerator.testProps {
  className?: string;
}

const SitemapGenerator.test: React.FC<SitemapGenerator.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SitemapGenerator.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SitemapGenerator.test;