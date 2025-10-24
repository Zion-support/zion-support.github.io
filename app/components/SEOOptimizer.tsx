'use client';

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  children: React.ReactNode;
  structuredData?: any;
  canonicalUrl?: string;
}

export default function SEOOptimizer({ children, structuredData, canonicalUrl }: SEOOptimizerProps) {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      script.id = 'structured-data';
      
      // Remove existing structured data
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
    }

    // Add canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    // Add meta robots for better crawling
    const addMetaRobots = () => {
      let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    };

    // Add Open Graph meta tags
    const addOpenGraphTags = () => {
      const ogTags = [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Zion Tech Group' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@ziontechgroup' },
      ];

      ogTags.forEach(({ property, content }) => {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      });
    };

    // Add performance hints
    const addPerformanceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      ];

      hints.forEach(({ rel, href, crossOrigin }) => {
        let link = document.querySelector(`link[rel="${rel}"][href="${href}"]`) as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          if (crossOrigin) {
            link.crossOrigin = crossOrigin;
          }
          document.head.appendChild(link);
        }
      });
    };

    addMetaRobots();
    addOpenGraphTags();
    addPerformanceHints();

    // Cleanup
    return () => {
      const structuredDataScript = document.getElementById('structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [structuredData, canonicalUrl]);

  return <>{children}</>;
}