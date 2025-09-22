import React from 'react';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEOEnhancer({ 
  title, 
  description, 
  keywords 
}: SEOEnhancerProps) {
  return (
    <div className="seo-enhancer">
      {/* SEO enhancement content */}
      {title && <h1 className="sr-only">{title}</h1>}
      {description && <p className="sr-only">{description}</p>}
      {keywords && <div className="sr-only">{keywords}</div>}
    </div>
  );
}

export function generateSEOMetadata(title: string, description: string, keywords?: string) {
  return {
    title,
    description,
    keywords: keywords || '',
  };
}