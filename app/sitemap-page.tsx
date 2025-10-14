import React from 'react';

interface SitemapPageProps {
  className?: string;
}

export default function SitemapPage({ className = '' }: SitemapPageProps) {
  return (
    <div className={`${className}`}>
      <h2>sitemap-page</h2>
      <p>Component content goes here.</p>
    </div>
  );
}