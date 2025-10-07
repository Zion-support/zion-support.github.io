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
  description: _description = 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
  keywords: _keywords = ['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services'],
  image: _image = 'https://ziontechgroup.com/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type: _type = 'website'
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

  // Structured data would be implemented here if needed

  return null;
};

export default SEOOptimizer;