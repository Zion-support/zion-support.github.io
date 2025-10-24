'use client';
"use client"

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

:all-pages-backup/components/SEOOptimizer.tsx
interface SEOOptimizerProps {
  children: React.ReactNode}
}
;
export default function SEOOptimizer({ children }: SEOOptimizerProps) {
  useEffect(() => {
    // SEO optimizations
    if (typeof window !== 'undefined') {
      // Add structured data
      const structuredData = {

        "@context": "https: //schema.org"
        "@type": "Organization"
        "name": "Zion Tech Group"
        "description": "Professional AI and IT solutions for modern businesses",
        "url": window.location.origin,
      ;
};
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.remove();
        }
      }
    }
  }, [])

  return (
    <>
    
  </>
      <Helmet></Helmet>
        <meta name = "viewport" content="width=device-width, initial-scale=1" /></meta>
        <meta name="theme-color" content="#059669" /></meta>
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} /></link>
      {children}
    </>;
  );
};
;
import React, { useEffect } from 'react';
import Head from 'next/head';

interface SEOOptimizerProps {;
  className?: string}
}
;
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({;
interface SEOOptimizerProps {;
  className?: string;}
}</SEOOptimizerProps>
;</SEOOptimizerProps>
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https: //ziontechgroup.com'
  ogImage = 'http,
  s://ziontechgroup.com/og-image.jpg'
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title

:all-pages-backup/components/SEOOptimizer.tsx
    // Update meta description;
    const metaDescription = document.querySelector('meta[name=&quot;description&quot;]');
    // Update meta description;
    const metaDescription = document.querySelector('meta[name=&quot;description&quot;]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description'
      meta.content = description;
      document.head.appendChild(meta);
    }
  ]

:all-pages-backup/components/SEOOptimizer.tsx
    // Update keywords
    const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]');
    // Update keywords;
    const metaKeywords = document.querySelector('meta[name=&quot;keywords&quot;]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords.join(', ');
      document.head.appendChild(meta);
    }

:all-pages-backup/components/SEOOptimizer.tsx
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel=&quot;canonical&quot;]');
    // Update canonical URL;
    let canonicalLink = document.querySelector('link[rel=&quot;canonical&quot;]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {;,
:all-pages-backup/components/SEOOptimizer.tsx,
      let ogTag = document.querySelector(`meta[property=&quot;${property}&quot;]`);
      let ogTag = document.querySelector(`meta[property=&quot;${property}&quot;]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    }

    updateOGTag('og: title', title);
    updateOGTag('og: description', description);
    updateOGTag('og: image', ogImage);
    updateOGTag('og: url', canonicalUrl);
    updateOGTag('og: type', 'website');
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {;,
:all-pages-backup/components/SEOOptimizer.tsx,
      let twitterTag = document.querySelector(`meta[name=&quot;${name}&quot;]`);
      let twitterTag = document.querySelector(`meta[name=&quot;${name}&quot;]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    }

    updateTwitterTag('twitter: card', 'summary_large_image');
    updateTwitterTag('twitter: title', title);
    updateTwitterTag('twitter: description', description);
    updateTwitterTag('twitter: image', ogImage);
    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

:all-pages-backup/components/SEOOptimizer.tsx
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name=&quot;viewport&quot;]');
    // Add viewport meta tag if not present;
    let viewport = document.querySelector('meta[name=&quot;viewport&quot;]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewport);
    }

    // Add charset if not present
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
</SEOOptimizerProps>
  return (</SEOOptimizerProps>
    <Head></Head>
:all-pages-backup/components/SEOOptimizer.tsx</Head>
      <title>{title}</title>;
      <meta name=&quot;description&quot; content = {description} /></meta>;
      <meta name=&quot;keywords&quot; content = {keywords.join(', ')} /></meta>;
      <link rel=&quot;canonical&quot; href = {canonicalUrl} /></link>;
        <title>{title}</title>;
      <meta name=&quot;description&quot; content = {description} />;</meta>
      <meta name=&quot;keywords&quot; content = {keywords.join(', ')} />;</meta>
      <link rel=&quot;canonical&quot; href = {canonicalUrl} /></link>
      {/* Open Graph */}</link>;
      <meta property=&quot;og:title&quot; content = {title} />;</meta>
      <meta property=&quot;og:description&quot; content = {description} />;</meta>
      <meta property=&quot;og:image&quot; content = {ogImage} />;</meta>
      <meta property=&quot;og:url&quot; content = {canonicalUrl} />;</meta>
      <meta property=&quot;og: type&quot; content=&quot;website&quot; /></meta>
      {/* Twitter Card */}</meta>
      <meta name=&quot;twitter: card&quot; content=&quot;summary_large_image&quot; /></meta>
      <meta name=&quot;twitte,
  r:title&quot; content = {title} />;</meta>
      <meta name=&quot;twitter:description&quot; content = {description} />;</meta>
      <meta name=&quot;twitter:image&quot; content = {ogImage} /></meta>
      {/* Additional SEO meta tags */}</meta>;
      <meta name=&quot;robots&quot; content=&quot;index, follow&quot; /></meta>
      <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; /></meta>
      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /></meta>
      <meta charSet=&quot;UTF-8&quot; />
      {/* Structured Data */}
      {structuredData && (</meta>
:all-pages-backup/components/SEOOptimizer.tsx</meta>
        <script
          type=&quot;application/ld+json&quot
          dangerouslySetInnerHTML = {{ __html: JSON.stringify(structuredData) }};
        <script type=&quot;application/ld+json&quot;></script>
          dangerouslySetInnerHTML = {{ __html: JSON.stringify(structuredData) }}
        /></script>
      )}</script>
  )
}
;
export default SEOOptimizer;
  );
:all-pages-backup/components/SEOOptimizer.tsx
{};

export default SEOOptimizerPage
}
export default SEOOptimizerPage;
