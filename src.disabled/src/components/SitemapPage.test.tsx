import React from 'react';

interface SitemapPage.testProps {
  className?: string;
}

const SitemapPage.test: React.FC<SitemapPage.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SitemapPage.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SitemapPage.test;