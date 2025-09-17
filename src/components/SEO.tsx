import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image = '/og-image.jpg',
  type = 'website',
  noindex = false,
  nofollow = false
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
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

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    if (url) {
      updateMetaTag('og:url', url, true);
    }
    updateMetaTag('og:image', image, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update robots meta tag
    const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('robots', robotsContent);

    // Update canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

  }, [title, description, url, image, type, noindex, nofollow]);

  return null;
};