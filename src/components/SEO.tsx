import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;

export function SEO({ title, description, keywords, className }: SEOProps) {
  return (
    <div className={className}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </div>
  );
