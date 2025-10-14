import React from 'react';

interface SEOProps {
  className?: string;
}

export default function SEO({ className = '' }: SEOProps) {
  return (
    <div className={`${className}`}>
      <h2>SEO</h2>
      <p>Component content goes here.</p>
    </div>
  );
}