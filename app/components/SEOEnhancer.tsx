'use client';

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export default function SEOEnhancer({
  title = 'ZionTechGroup - AI Solutions & Technology Services',
  description = 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords = ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  structuredData
}: SEOEnhancerProps) {
  useEffect(() => {
    // Update page title
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
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ZionTechGroup' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Add performance hints
    const performanceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];

    performanceHints.forEach(hint => {
      let link = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', hint.rel);
        link.setAttribute('href', hint.href);
        if (hint.crossOrigin) {
          link.setAttribute('crossOrigin', hint.crossOrigin);
        }
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return null;
}