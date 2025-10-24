import React from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string | string[];
  ogImage?: string;
  className?: string;
}

export default function SEOOptimizer({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  className 
}: SEOOptimizerProps) {
  return (
    <div className={className}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && (
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </div>
  );
}