import React, { useEffect }  from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  robots?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

,const SEO: React.FC<SEOProps> = ({
  title = 'Zion Holdings - Advanced Financial Solutions',
  description = 'Leading provider of comprehensive financial services, investment solutions, and wealth management strategies.',
  keywords = 'financial services, investment, wealth management, banking, fintech',
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  siteName = 'Zion Holdings',
  author = 'Zion Holdings',
  publishedTime,
  modifiedTime,
  canonical,
  robots = 'index, follow',
  noindex = false,
  nofollow = false}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: "string", content: "string", property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } ,else {
          meta.setAttribute('name', name);
        }
        ,document.head.appendChild(meta);
      }
      ,meta.setAttribute('content', content);
  }
];
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', noindex || nofollow ? 'noindex, nofollow' : robots);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    ,if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      ,link.setAttribute('href', canonical);
    }

    // JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'Organization',
      name: "siteName",
      description,
      url,
      ...(type === 'article' && {
        headline: "title",
        author: {
          '@type': 'Person',
          name: "author"},
        publisher: {
          '@type': 'Organization',
          name: "siteName"},
        ...(publishedTime && { datePublished: publishedTime }),
        ...(modifiedTime && { dateModified: modifiedTime })})}
];
    // Remove existing JSON-LD
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    // Add new JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }, [title, description, keywords, image, url, type, siteName, author, publishedTime, modifiedTime, canonical, robots, noindex, nofollow]);

  return null;
  }
];
export default SEO;