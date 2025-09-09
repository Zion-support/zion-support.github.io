import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
  alternate?: { hreflang: string; href: string }[];
  structuredData?: any;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, quantum computing, and micro SAAS services for modern businesses. Transform your digital future with our expert team.",
  keywords = "AI solutions, quantum computing, micro SAAS, IT services, technology consulting, digital transformation, cloud infrastructure, cybersecurity",
  image = "/og-image.png",
  url,
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noindex = false,
  nofollow = false,
  canonical,
  alternate = [],
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('name', 'description', description);
    
    // Update meta keywords
    updateMetaTag('name', 'keywords', keywords);
    
    // Update meta author
    updateMetaTag('name', 'author', author);
    
    // Update robots meta
    const robotsContent = [
      noindex ? 'noindex' : 'index',
      nofollow ? 'nofollow' : 'follow'
    ].join(', ');
    updateMetaTag('name', 'robots', robotsContent);
    
    // Update viewport
    updateMetaTag('name', 'viewport', 'width=device-width, initial-scale=1.0');
    
    // Update charset
    updateMetaTag('charset', 'utf-8', '');
    
    // Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'Zion Tech Group');
    updateMetaTag('property', 'og:locale', 'en_US');
    
    // Twitter Card tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:site', '@ZionTechGroup');
    updateMetaTag('name', 'twitter:creator', '@ZionTechGroup');
    
    // Additional meta tags
    if (publishedTime) {
      updateMetaTag('property', 'article:published_time', publishedTime);
    }
    if (modifiedTime) {
      updateMetaTag('property', 'article:modified_time', modifiedTime);
    }
    if (section) {
      updateMetaTag('property', 'article:section', section);
    }
    if (author) {
      updateMetaTag('property', 'article:author', author);
    }
    if (tags.length > 0) {
      updateMetaTag('property', 'article:tag', tags.join(', '));
    }
    
    // Canonical URL
    updateCanonicalUrl(canonicalUrl);
    
    // Alternate language links
    updateAlternateLinks(alternate);
    
    // Structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
    
    // Preload critical resources
    preloadCriticalResources();
    
  }, [title, description, keywords, image, currentUrl, type, author, publishedTime, modifiedTime, section, tags, noindex, nofollow, canonicalUrl, alternate, structuredData]);

  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let tag = document.querySelector(`meta[${attribute}="${value}"]`);
    
    if (!tag) {
      tag = document.createElement('meta');
      if (attribute === 'charset') {
        tag.setAttribute('charset', content);
      } else {
        tag.setAttribute(attribute, value);
      }
      document.head.appendChild(tag);
    }
    
    if (attribute !== 'charset') {
      tag.setAttribute('content', content);
    }
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  };

  const updateAlternateLinks = (alternates: { hreflang: string; href: string }[]) => {
    // Remove existing alternate links
    const existingAlternates = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach(link => link.remove());
    
    // Add new alternate links
    alternates.forEach(alt => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      document.head.appendChild(link);
    });
  };

  const updateStructuredData = (data: any) => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const preloadCriticalResources = () => {
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="preload"][as="style"]');
    if (!criticalCSS) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = '/src/index.css';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    }
    
    // Preload critical fonts
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];
    
    fonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = fontUrl;
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  };

  return null; // This component doesn't render anything
};
export default EnhancedSEO;