import React from 'react';
import { Metadata } from 'next';
import UltraContentShowcase from '../../components/UltraContentShowcase';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Ultra Content Showcase - Revolutionary AI Resources | Zion Tech Group',
  description: 'Discover our most comprehensive collection of AI insights, case studies, and resources. From cutting-edge research to proven implementation strategies.',
  keywords: 'AI content, ultra content showcase, AI resources, revolutionary AI, comprehensive AI library',
  openGraph: {
    title: 'Ultra Content Showcase - Revolutionary AI Resources',
    description: 'Discover our most comprehensive collection of AI insights, case studies, and resources. From cutting-edge research to proven implementation strategies.',
    type: 'website',
  },
};

export default function UltraContentShowcasePage() {
  return (
    <>
      <SEO
        title="Ultra Content Showcase - Revolutionary AI Resources | Zion Tech Group"
        description="Discover our most comprehensive collection of AI insights, case studies, and resources. From cutting-edge research to proven implementation strategies."
        keywords="AI content, ultra content showcase, AI resources, revolutionary AI, comprehensive AI library"
        url="/ultra-content-showcase"
      />
      <UltraContentShowcase />
    </>
  );
}