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
<<<<<<< HEAD
<<<<<<< HEAD
  description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  keywords = ['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services'],
  image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website'
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description: _description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywords: _keywords = ['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  image: _image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type: _type = 'website'
>>>>>>> cursor/fix-errors-and-merge-to-main-90ff
}) => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof window !== 'undefined' && (window as { gtag?: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, eventName: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_view', {
=======
    if (typeof window !== 'undefined' && (window as { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_view', {
>>>>>>> cursor/fix-errors-and-merge-to-main-90ff
=======
    if (typeof window !== 'undefined' && (window as { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_view', {
>>>>>>> cursor/fix-errors-and-merge-to-main-3b5f
        page_title: title,
        page_location: url + pathname
      });
    }
  }, [title, url, pathname]);

  // Structured data for SEO (currently unused but available for future use)
  // const _structuredData = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Organization',
  //   name: 'Zion Tech Group',
  //   description,
  //   url: url + pathname,
  //   logo: 'https://ziontechgroup.com/logo.png',
  //   image,
  //   contactPoint: {
  //     '@type': 'ContactPoint',
  //     telephone: '+1-302-464-0950',
  //     contactType: 'customer service',
  //     email: 'kleber@ziontechgroup.com',
  //   },
  //   address: {
  //     '@type': 'PostalAddress',
  //     streetAddress: '364 E Main St STE 1008',
  //     addressLocality: 'Middletown',
  //     addressRegion: 'DE',
  //     postalCode: '19709',
  //     addressCountry: 'US',
  //   },
  //   sameAs: [
  //     'https://linkedin.com/company/zion-tech-group',
  //     'https://twitter.com/ziontechgroup',
  //   ],
  //   offers: {
  //     '@type': 'Offer',
  //     name: 'AI Enterprise Transformation Services',
  //     description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
  //     price: '50000',
  //     priceCurrency: 'USD',
  //     availability: 'https://schema.org/InStock',
  //   },
  // };

  return null;
};

export default SEOOptimizer;