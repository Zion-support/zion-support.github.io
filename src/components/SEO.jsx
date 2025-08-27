import React, { useEffect } from 'react';

export function SEO({ title, description, keywords, image, canonical, ogImage, url }) {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = ogImage || image || '/og-image.jpg';
  const canonicalUrl = canonical || url;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update description
    updateMetaTag('description', description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', siteName, true);
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update robots and author
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', siteName);

    // Cleanup function
    return () => {
      // Reset title to default if needed
      document.title = siteName;
    };
  }, [title, description, keywords, image, canonical, ogImage, url, fullTitle, imageUrl, canonicalUrl, siteName]);

  // This component doesn't render anything
  return null;
}
