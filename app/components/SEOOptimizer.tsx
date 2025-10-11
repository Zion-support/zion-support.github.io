'use client';

import { useEffect } from 'react-helmet-async';
import Head from 'next/head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullDescription = description || 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.';

  useEffect(() => {
    // Add structured data for breadcrumbs
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ziontechgroup.com"
        }
      ]
    };

const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    script.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb data
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) {
      existing.remove();
    }
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div>

    <Head>
  
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      {/* Twitter Card Meta Tags */}
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      {/* Additional SEO Meta Tags */}
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      <meta>
  
      {/* Structured Data */}
      {structuredData && (
        <script>
  
      )}
    </Head>
  );
};

export default SEOOptimizer;