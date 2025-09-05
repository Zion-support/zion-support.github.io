import React from 'react';
import SEOHead from '../SEOHead';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function Layout({
  children,
  title = "Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions",
  description = "Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.",
  keywords = "micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions",
  canonicalUrl,
  ogImage,
  structuredData
}: LayoutProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <PerformanceOptimizer enableReporting={process.env.NODE_ENV === 'development'} />
      <AccessibilityEnhancer />
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
}