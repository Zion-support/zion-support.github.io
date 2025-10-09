'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  locale?: string;
  alternateLocales?: { [key: string]: string };
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = [],
  noIndex = false,
  noFollow = false,
  locale = 'en_US',
  alternateLocales = {}
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Update author
    updateMetaTag('author', author);
    
    // Update robots
    const robotsContent = [];
    if (noIndex) robotsContent.push('noindex');
    else robotsContent.push('index');
    if (noFollow) robotsContent.push('nofollow');
    else robotsContent.push('follow');
    updateMetaTag('robots', robotsContent.join(', '));
    
    // Update language
    updateMetaTag('language', locale.split('_')[0]);
    document.documentElement.lang = locale.split('_')[0];
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    updateMetaTag('og:locale', locale, 'property');
    
    if (author) {
      updateMetaTag('og:author', author, 'property');
    }
    
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property');
    }
    
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, 'property');
    }
    
    if (section) {
      updateMetaTag('article:section', section, 'property');
    }
    
    if (tags.length > 0) {
      tags.forEach(tag => {
        addMetaTag('article:tag', tag, 'property');
      });
    }
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@ziontechgroup', 'name');
    updateMetaTag('twitter:creator', '@ziontechgroup', 'name');
    
    // Update canonical URL
    updateCanonicalUrl(canonicalUrl);
    
    // Add alternate language links
    Object.entries(alternateLocales).forEach(([lang, url]) => {
      addAlternateLink(lang, url);
    });
    
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add additional SEO meta tags
    addAdditionalSEOTags();
    
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, author, publishedTime, modifiedTime, section, tags, noIndex, noFollow, locale, alternateLocales]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  };

  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    const meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    meta.content = content;
    document.head.appendChild(meta);
  };

  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = url;
  };

  const addAlternateLink = (hreflang: string, href: string) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    document.head.appendChild(link);
  };

  const addStructuredData = (data: any) => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const addAdditionalSEOTags = () => {
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      document.head.appendChild(viewport);
    }
    
    // Add theme color
    updateMetaTag('theme-color', '#4f46e5');
    updateMetaTag('msapplication-TileColor', '#4f46e5');
    
    // Add mobile web app capabilities
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', 'Zion Tech Group');
    
    // Add format detection
    updateMetaTag('format-detection', 'telephone=yes');
    
    // Add referrer policy
    updateMetaTag('referrer', 'origin-when-cross-origin');
    
    // Add security headers
    updateMetaTag('X-Content-Type-Options', 'nosniff');
    updateMetaTag('X-Frame-Options', 'DENY');
    updateMetaTag('X-XSS-Protection', '1; mode=block');
    
    // Add preconnect hints for performance
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ];
    
    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        if (domain.includes('fonts.gstatic.com')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });
    
    // Add DNS prefetch for external resources
    const dnsPrefetchDomains = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://fonts.googleapis.com'
    ];
    
    dnsPrefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });
  };

  return null; // This component doesn't render anything visible
};

export default SEOOptimizer;