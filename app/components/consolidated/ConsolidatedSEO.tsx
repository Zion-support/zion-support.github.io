'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface ConsolidatedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const ConsolidatedSEO: React.FC<ConsolidatedSEOProps> = memo(({ 
  title = 'Zion Tech Group',
  description = 'Professional technology services by Zion Tech Group',
  keywords = 'technology, services, AI, automation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const updateMetaTags = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description, keywords, image, url, type]);

  const addCanonicalURL = useCallback(() => {
    if (typeof window === 'undefined') return;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [url]);

  useEffect(() => {
    updateMetaTags();
    addCanonicalURL();
  }, [updateMetaTags, addCanonicalURL]);

  return null;
});

ConsolidatedSEO.displayName = 'ConsolidatedSEO';

export default ConsolidatedSEO;