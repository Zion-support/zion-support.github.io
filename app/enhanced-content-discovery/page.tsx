import React from 'react';
import { Metadata } from 'next';
import EnhancedContentDiscovery from '../../components/EnhancedContentDiscovery';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'Enhanced Content Discovery - Revolutionary AI Resources | Zion Tech Group',
  description: 'Discover our most comprehensive collection of AI insights, case studies, and resources with advanced search and filtering capabilities.',
  keywords: 'AI content discovery, enhanced search, AI resources, content filtering, revolutionary AI library',
  openGraph: {
    title: 'Enhanced Content Discovery - Revolutionary AI Resources',
    description: 'Discover our most comprehensive collection of AI insights, case studies, and resources with advanced search and filtering capabilities.',
    type: 'website',
  },
};

export default function EnhancedContentDiscoveryPage() {
  return (
    <>
      <SEO
        title="Enhanced Content Discovery - Revolutionary AI Resources | Zion Tech Group"
        description="Discover our most comprehensive collection of AI insights, case studies, and resources with advanced search and filtering capabilities."
        keywords="AI content discovery, enhanced search, AI resources, content filtering, revolutionary AI library"
        url="/enhanced-content-discovery"
      />
      <EnhancedContentDiscovery />
    </>
  );
}