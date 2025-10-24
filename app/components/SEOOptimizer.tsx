'use client'

import React from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  className = ''
}) => {
  // For App Router, we'll use document.title and meta tags via useEffect
  React.useEffect(() => {
    const fullTitle = title.includes('ZionTechGroup') ? title : `${title} | ZionTechGroup`;
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const keywordsString = keywords.join(', ');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsString);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsString;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;