'use client';

import { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}

export default function SEOOptimizer({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
}: SEOOptimizerProps) {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Update keywords
    if (keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords.join(', ');
        document.head.appendChild(meta);
      }
    }

    // Update canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      const ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    if (title) updateOGTag('og:title', title);
    if (description) updateOGTag('og:description', description);
    if (ogImage) updateOGTag('og:image', ogImage);
    updateOGTag('og:type', ogType);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      const twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    if (title) updateTwitterTag('twitter:title', title);
    if (description) updateTwitterTag('twitter:description', description);
    if (ogImage) updateTwitterTag('twitter:image', ogImage);
    updateTwitterTag('twitter:card', twitterCard);

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, structuredData]);

  return null;
}

// Preload critical resources
export function PreloadResources() {
  useEffect(() => {
    const preloadLink = (href: string, as: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      document.head.appendChild(link);
    };

    // Preload critical fonts
    preloadLink('/fonts/inter.woff2', 'font');
    
    // Preload critical images
    preloadLink('/hero-image.jpg', 'image');
    
    // Preload critical CSS
    preloadLink('/styles.css', 'style');
  }, []);

  return null;
}

// Generate structured data for services
export function generateServiceStructuredData(service: {
  name: string;
  description: string;
  price?: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    category: service.category,
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
      },
    }),
  };
}