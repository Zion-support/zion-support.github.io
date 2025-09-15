import React from 'react';

export default function SEO({ 
  title = 'Zion Tech Group - AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
  keywords = 'AI, automation, technology, cloud, SaaS, innovation, 2025, breakthrough',
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
}) {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    const updatePropertyMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updatePropertyMetaTag('og:title', title);
    updatePropertyMetaTag('og:description', description);
    updatePropertyMetaTag('og:image', image);
    updatePropertyMetaTag('og:url', url);
    updatePropertyMetaTag('og:type', type);
  }, [title, description, keywords, image, url, type]);

  return null;
}