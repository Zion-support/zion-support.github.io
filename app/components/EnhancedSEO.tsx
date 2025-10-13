import React from 'react';

interface EnhancedSEOProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function EnhancedSEO({ children, title, description, keywords }: EnhancedSEOProps) {
  return (
    <div className="enhanced-seo">
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {children}
    </div>
  );
}