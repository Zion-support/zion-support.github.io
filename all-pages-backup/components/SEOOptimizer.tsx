<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
interface SEOOptimizerProps {
  children: React.ReactNode
}

export default function SEOOptimizer({ children }: SEOOptimizerProps) {
  useEffect(() => {
    // SEO optimizations
    if (typeof window !== 'undefined') {
      // Add structured data
      const structuredData = {
        "@context": "https://schema.org"
        "@type": "Organization"
        "name": "Zion Tech Group"
        "description": "Professional AI and IT solutions for modern businesses"
        "url": window.location.origin
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (existingScript) {
          existingScript.remove()
        }
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      {children}
    </>
  )
};
'use client';
;
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {;
  className?: string
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({;
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
    // Update meta description
    const metaDescription = document.querySelector('meta[name=&quot;description&quot;]');
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
    // Update keywords
    const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]');
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel=&quot;canonical&quot;]');
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
      let ogTag = document.querySelector(`meta[property=&quot;${property}&quot;]`);
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
      let twitterTag = document.querySelector(`meta[name=&quot;${name}&quot;]`);
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name=&quot;viewport&quot;]');
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
      <title>{title}</title>;
      <meta name=&quot;description&quot; content={description} />
      <meta name=&quot;keywords&quot; content={keywords.join(', ')} />
      <link rel=&quot;canonical&quot; href={canonicalUrl} />
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
        <script
          type=&quot;application/ld+json&quot
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
<<<<<<< HEAD:all-pages-backup/components/SEOOptimizer.tsx
{};

export default SEOOptimizerPage
=======
"use client""
        "@context": ""https": //schema.org"",
        "@type": "Organization""
        "name": "Zion Tech Group""
        "description": "Professional AI and IT solutions for modern businesses""
        "url""
        const existingScript = document.querySelector(''
>>>>>>> origin/main
