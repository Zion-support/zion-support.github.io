import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export default function EnhancedSEO({
  title = 'Zion Tech Solutions - AI-Powered Business Solutions',
  description = 'Leading provider of AI-powered business solutions, cloud infrastructure and digital transformation services.',
  keywords = ['AI solutions', 'cloud infrastructure', 'digital transformation', 'business automation', 'technology consulting'],
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website'
}: SEOProps) {
  return null; // This component handles SEO via Next.js Head component
}

export { EnhancedSEO };