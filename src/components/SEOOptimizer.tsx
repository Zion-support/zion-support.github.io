'use client';
import React, { useEffect, memo } from 'react';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  structuredData?: object;
  ogImage?: string;
  twitterCard?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps>= memo(({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  structuredData,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  twitterCard = 'summary_large_image',
}) => {
    useEffect(() => {
    // Update document title;
    document.title = fullTitle;
    
    // Update meta description;
        if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
            meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords;
        if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
            meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update canonical URL;
        if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateMetaProperty('og:title', fullTitle);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:image', ogImage);
    updateMetaProperty('og:type', 'website');

    // Update Twitter Card tags
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateTwitterMeta('twitter:card', twitterCard);
    updateTwitterMeta('twitter:title', fullTitle);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', ogImage);

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, structuredData, ogImage, twitterCard, fullTitle]);

  return null;
});

SEOOptimizer.displayName = 'SEOOptimizer';

export default SEOOptimizer