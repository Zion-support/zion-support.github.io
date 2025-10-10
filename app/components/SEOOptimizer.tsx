'use client';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Zion Tech Group - AI & IT Solutions | Transform Your Business",
  description = "Leading provider of AI and IT solutions for modern businesses. We help companies transform their operations with cutting-edge technology including AI automation, cloud services, cybersecurity, and custom development.",
  keywords = "AI solutions, IT services, artificial intelligence, cloud computing, cybersecurity, custom development, business automation, machine learning, data analytics, digital transformation",
  canonicalUrl = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  structuredData
}) => {
  useEffect(() => {
    // Add meta tags for better SEO
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add language meta tag
    addMetaTag('language', 'en-US');
    addMetaTag('geo.region', 'US-CA');
    addMetaTag('geo.placename', 'San Francisco');
    addMetaTag('author', 'Zion Tech Group');
    addMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    addMetaTag('googlebot', 'index, follow');
    addMetaTag('bingbot', 'index, follow');

    // Add Open Graph meta tags
    const addOGTag = (property: string, content: string) => {
      if (!document.querySelector(`meta[property="${property}"]`)) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    addOGTag('og:title', title);
    addOGTag('og:description', description);
    addOGTag('og:type', 'website');
    addOGTag('og:url', canonicalUrl);
    addOGTag('og:image', ogImage);
    addOGTag('og:image:width', '1200');
    addOGTag('og:image:height', '630');
    addOGTag('og:site_name', 'Zion Tech Group');

    // Add Twitter Card meta tags
    const addTwitterTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    addTwitterTag('twitter:card', 'summary_large_image');
    addTwitterTag('twitter:title', title);
    addTwitterTag('twitter:description', description);
    addTwitterTag('twitter:image', ogImage);

    // Add canonical link
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add performance hints
    const addPreloadHint = (href: string, as: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
      }
    };

    // Preload critical resources
    addPreloadHint('https://fonts.googleapis.com', 'style');
    addPreloadHint('https://fonts.gstatic.com', 'font');

    // Add favicon if not present
    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/x-icon';
      favicon.href = '/favicon.ico';
      document.head.appendChild(favicon);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEOOptimizer;