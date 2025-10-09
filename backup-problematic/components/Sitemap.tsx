import React from 'react';

interface SitemapProps {
  className?: string;
}

const Sitemap = React.memo(function Sitemap({ className = '' }: SitemapProps) {
  return (
    <div className={`bg-blue-100 p-4 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-blue-800">Sitemap</h3>
      <p className="text-blue-600">This component is under development.</p>
    </div>
  );
});

export default Sitemap;
