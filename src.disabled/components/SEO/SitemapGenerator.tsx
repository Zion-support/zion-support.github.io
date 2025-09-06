import React from 'react';

interface SitemapGeneratorProps {
  className?: string;
}

const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SitemapGenerator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SitemapGenerator;