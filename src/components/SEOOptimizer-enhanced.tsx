'use client';
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData,
  noIndex = false,
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = []
}) => {
  useEffect(() => {
    // Update page title with enhanced formatting
    document.title = title;
    
    // Update meta description with enhanced content
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    
    // Enhanced Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Zion Tech Group', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    // Enhanced Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@ziontechgroup', 'name');
    updateMetaTag('twitter:creator', '@ziontechgroup', 'name');
    
    // Additional SEO meta tags
    updateMetaTag('author', author);
    updateMetaTag('robots', noIndex ? 'noindex,nofollow' : 'index,follow');
    updateMetaTag('googlebot', noIndex ? 'noindex,nofollow' : 'index,follow');
    updateMetaTag('bingbot', noIndex ? 'noindex,nofollow' : 'index,follow');
    
    // Article specific meta tags
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
    
    // Enhanced canonical URL
    updateCanonicalUrl(canonicalUrl);
    
    // Add enhanced structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    // Add additional performance and SEO meta tags
    addPerformanceMetaTags();
    
    // Add language and region meta tags
    addLanguageMetaTags();
    
    // Add viewport and mobile optimization
    addMobileOptimizationTags();
    
    // Add security headers
    addSecurityMetaTags();
    
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, noIndex, author, publishedTime, modifiedTime, section, tags]);

  const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
    if (typeof document === 'undefined') return;
    
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (metaTag) {
      metaTag.content = content;
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      metaTag.content = content;
      document.head.appendChild(metaTag);
    }
  };

  const addMetaTag = (name: string, content: string, attribute: string = 'name') => {
    if (typeof document === 'undefined') return;
    
    const metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, name);
    metaTag.content = content;
    document.head.appendChild(metaTag);
  };

  const updateCanonicalUrl = (url: string) => {
    if (typeof document === 'undefined') return;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonicalLink) {
      canonicalLink.href = url;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = url;
      document.head.appendChild(canonicalLink);
    }
  };

  const addStructuredData = (data: any) => {
    if (typeof document === 'undefined') return;
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  const addPerformanceMetaTags = () => {
    if (typeof document === 'undefined') return;
    
    const performanceTags = [
      { name: 'theme-color', content: '#4f46e5' },
      { name: 'msapplication-TileColor', content: '#4f46e5' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Zion Tech Group' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Zion Tech Group' },
      { name: 'msapplication-tooltip', content: 'Zion Tech Group - Advanced AI and IT Solutions' },
      { name: 'msapplication-starturl', content: '/' },
      { name: 'msapplication-navbutton-color', content: '#4f46e5' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' }
    ];
    
    performanceTags.forEach(tag => {
      updateMetaTag(tag.name, tag.content);
    });
  };

  const addLanguageMetaTags = () => {
    if (typeof document === 'undefined') return;
    
    const languageTags = [
      { name: 'language', content: 'en-US' },
      { name: 'geo.region', content: 'US-DE' },
      { name: 'geo.placename', content: 'Middletown' },
      { name: 'geo.position', content: '39.4496;-75.7163' },
      { name: 'ICBM', content: '39.4496, -75.7163' }
    ];
    
    languageTags.forEach(tag => {
      updateMetaTag(tag.name, tag.content);
    });
  };

  const addMobileOptimizationTags = () => {
    if (typeof document === 'undefined') return;
    
    const mobileTags = [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'apple-touch-fullscreen', content: 'yes' }
    ];
    
    mobileTags.forEach(tag => {
      updateMetaTag(tag.name, tag.content);
    });
  };

  const addSecurityMetaTags = () => {
    if (typeof document === 'undefined') return;
    
    const securityTags = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' }
    ];
    
    securityTags.forEach(tag => {
      updateMetaTag(tag.name, tag.content);
    });
  };

  return null;
};

export default SEOOptimizer;