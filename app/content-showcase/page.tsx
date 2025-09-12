import React from 'react';
import ContentShowcase2025 from '../../components/ContentShowcase2025';

export const metadata = {
  title: 'Content Library 2025 - AI Resources, Case Studies & Guides | Zion Tech Group',
  description: 'Explore our comprehensive library of AI resources, case studies, guides, and insights. Discover cutting-edge content designed to accelerate your digital transformation.',
  keywords: ['AI resources', 'case studies', 'technology guides', 'AI implementation', 'business intelligence', 'content library'],
  openGraph: {
    title: 'Content Library 2025 - AI Resources, Case Studies & Guides',
    description: 'Explore our comprehensive library of AI resources, case studies, guides, and insights.',
    type: 'website',
    url: '/content-showcase',
  },
};

export default function ContentShowcasePage() {
  return <ContentShowcase2025 />;
}