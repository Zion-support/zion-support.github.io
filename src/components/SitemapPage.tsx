import React from 'react';

interface SitemapPageProps {
  className?: string;
}

const SitemapPage: React.FC<SitemapPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SitemapPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SitemapPage;