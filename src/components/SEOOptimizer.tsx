'use client';
"use client"

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

:all-pages-backup/components/SEOOptimizer.tsx
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

      return = () => {
  return const existingScript = document.querySelector('script[type="application/ld+json"]')
        if (existingScript) {
          existingScript.remove();
}
      }
    }
  }, [])

  return (<>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#059669" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      {children}
    </>)
  )
};
;
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {;
  className?: string
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({;
interface SEOOptimizerProps {;
  className?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https://ziontechgroup.com'
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title

:all-pages-backup/components/SEOOptimizer.tsx
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    // Update meta description;
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
  ]

:all-pages-backup/components/SEOOptimizer.tsx
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    // Update keywords;
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords'
      meta.content = keywords.join(', ')
      document.head.appendChild(meta)
    }

:all-pages-backup/components/SEOOptimizer.tsx
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    // Update canonical URL;
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl
      document.head.appendChild(canonicalLink)
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {;
:all-pages-backup/components/SEOOptimizer.tsx
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (ogTag) {
        ogTag.setAttribute('content', content)
      } else {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        ogTag.setAttribute('content', content)
        document.head.appendChild(ogTag)
      }
    }

    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:image', ogImage)
    updateOGTag('og:url', canonicalUrl)
    updateOGTag('og:type', 'website')

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {;
:all-pages-backup/components/SEOOptimizer.tsx
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if (twitterTag) {
        twitterTag.setAttribute('content', content)
      } else {
        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        twitterTag.setAttribute('content', content)
        document.head.appendChild(twitterTag)
      }
    }

    updateTwitterTag('twitter:card', 'summary_large_image')
    updateTwitterTag('twitter:title', title)
    updateTwitterTag('twitter:description', description)
    updateTwitterTag('twitter:image', ogImage)

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

:all-pages-backup/components/SEOOptimizer.tsx
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    // Add viewport meta tag if not present;
    let viewport = document.querySelector('meta[name="viewport"]')
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      viewport.setAttribute('content', 'width=device-width, initial-scale=1')
      document.head.appendChild(viewport)
    }

    // Add charset if not present
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.insertBefore(charset, document.head.firstChild)
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])

  return(<Head>
:all-pages-backup/components/SEOOptimizer.tsx
      <title>{title}</title>;
      <meta name="description" content={description} />)
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
        <title>{title}</title>;
      <meta name="description" content = {description} />;
      <meta name="keywords" content = {keywords.join(', ')} />;
      <link rel="canonical" href = {canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content = {title} />;
      <meta property="og:description" content = {description} />;
      <meta property="og:image" content = {ogImage} />;
      <meta property="og:url" content = {canonicalUrl} />;
      <meta property="og: type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter: card" content="summary_large_image" />
      <meta name="twitter:title" content = {title} />;
      <meta name="twitter:description" content = {description} />;
      <meta name="twitter:image" content = {ogImage} />
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      {/* Structured Data */}
      {structuredData && (
:all-pages-backup/components/SEOOptimizer.tsx
        <script
          type="application/ld+json&quot
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        <script type="application/ld+json">
          dangerouslySetInnerHTML = {{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default SEOOptimizer;
  );
:all-pages-backup/components/SEOOptimizer.tsx
{};

export default SEOOptimizerPage
}
export default SEOOptimizerPage;
