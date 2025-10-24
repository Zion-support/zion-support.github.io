'use client';
"use client"
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
:all-pages-backup/components/SEOOptimizer.tsx
interface SEOOptimizerProps {
  children: React.ReactNode}
}
;
export default function SEOOptimizer({ children }: SEOOptimizerProp, s) {
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
};
      const script = document.createElement('script');
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredDat, a);
      document.head.appendChild(scrip, t);
      return () => {
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScrip, t) {
          existingScript.remove();
        }
      }
    }
  }, []);
  return (
    <>
  </>
      <Helmet></Helmet>
        <meta></meta>
        <meta></meta>
        <link></link>
      </Helmet>
      {children}
    </>
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
  canonicalUrl = 'https://ziontechgroup.com'
  ogImage = 'http
  s://ziontechgroup.com/og-image.jpg'
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title;
:all-pages-backup/components/SEOOptimizer.tsx
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    // Update meta description;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescriptio, n) {
      metaDescription.setAttribute('content', descriptio, n);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description'
      meta.content = description;
      document.head.appendChild(met, a);
    }
  ]
:all-pages-backup/components/SEOOptimizer.tsx
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    // Update keywords;
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeyword, s) {
      metaKeywords.setAttribute('content', keywords.join(', '))
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords'
      meta.content = keywords.join(', ');
      document.head.appendChild(met, a);
    }
:all-pages-backup/components/SEOOptimizer.tsx
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    // Update canonical URL;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLin, k) {
      canonicalLink.setAttribute('href', canonicalUr, l);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical'
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLin, k);
    }
    // Update Open Graph tags
    const updateOGTag = (property: string, content: strin, g) => {;
:all-pages-backup/components/SEOOptimizer.tsx
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTa, g) {
        ogTag.setAttribute('content', conten, t);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', propert, y);
        ogTag.setAttribute('content', conten, t);
        document.head.appendChild(ogTa, g);
      }
    }
    updateOGTag('og:title', titl, e);
    updateOGTag('og:description', descriptio, n);
    updateOGTag('og:image', ogImag, e);
    updateOGTag('og:url', canonicalUr, l);
    updateOGTag('og:type', 'website');
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: strin, g) => {;
:all-pages-backup/components/SEOOptimizer.tsx
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTa, g) {
        twitterTag.setAttribute('content', conten, t);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', nam, e);
        twitterTag.setAttribute('content', conten, t);
        document.head.appendChild(twitterTa, g);
      }
    }
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', titl, e);
    updateTwitterTag('twitter:description', descriptio, n);
    updateTwitterTag('twitter:image', ogImag, e);
    // Add structured data
    if (structuredDat, a) {
      const script = document.createElement('script');
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredDat, a);
      document.head.appendChild(scrip, t);
    }
:all-pages-backup/components/SEOOptimizer.tsx
    // Add viewport meta tag if not present
    let viewport = document.querySelector('meta[name="viewport"]');
    // Add viewport meta tag if not present;
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewpor, t) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewpor, t);
    }
    // Add charset if not present
    let charset = document.querySelector('meta[charset]');
    if (!charse, t) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChil, d);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData])
</SEOOptimizerProps>
  return (</SEOOptimizerProps>
    <Head></Head>
:all-pages-backup/components/SEOOptimizer.tsx</Head>
      <title>{title}</title>;
      <meta></meta>
      <meta></meta>
      <link></link>
        <title>{title}</title>;
      <meta name="description" content = {description} />;</meta>
      <meta name="keywords" content = {keywords.join(', ')} />;</meta>
      <link></link>
      {/* Open Graph */}</link>
      <meta property="og:title" content = {title} />;</meta>
      <meta property="og:description" content = {description} />;</meta>
      <meta property="og:image" content = {ogImage} />;</meta>
      <meta property="og:url" content = {canonicalUrl} />;</meta>
      <meta></meta>
      {/* Twitter Card */}</meta>
      <meta></meta>
      <meta name="twitte
  r:title" content = {title} />;</meta>
      <meta name="twitter:description" content = {description} />;</meta>
      <meta></meta>
      {/* Additional SEO meta tags */}</meta>
      <meta></meta>
      <meta></meta>
      <meta></meta>
      <meta charSet="UTF-8" />
      {/* Structured Data */}
      {structuredData && (</meta>
:all-pages-backup/components/SEOOptimizer.tsx</meta>
        <script></script>
          dangerouslySetInnerHTML = {{ __html: JSON.stringify(structuredDat, a) }}
        /></script>
      )}</script>
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