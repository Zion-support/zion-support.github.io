'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - AI & IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  keywords = ['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services'],
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
}) => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag('event', 'page_view', {
        page_title: title,
        page_location: url + pathname
      });
    }
  }, [title, url, pathname]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description,
    url: url + pathname,
    logo: 'https://ziontechgroup.com/logo.png',
    image,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return null;
};

export default SEOOptimizer;