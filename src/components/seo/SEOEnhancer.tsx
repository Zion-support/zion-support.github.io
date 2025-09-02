import React, { useEffect } from &apos;react';
import Head from &apos;next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any;
}&apos;&apos;

export const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = &apos;Zion Tech Group - Leading Technology Solutions Provider&apos;,
  description = &apos;Transform your business with cutting-edge AI, IT, and Micro SaaS solutions. Expert team, proven results, 24/7 support.&apos;,
  keywords = &apos;AI services, IT solutions, Micro SaaS, cloud computing, cybersecurity, business automation, technology consulting&apos;,
  canonical,
  ogImage = &apos;https://ziontechgroup.com/og-image.jpg&apos;,
  ogType = &apos;website&apos;,
  twitterCard = &apos;summary_large_image&apos;,
  structuredData
}) => {
  useEffect(() => {
    // Update page title dynamically
    if (typeof document !== &apos;undefined&apos;) {
      document.title = title;
    }

    // Add performance monitoring
    if (typeof window !== &apos;undefined&apos; && &apos;performance&apos; in window) {&apos;}
      const observer = new PerformanceObserver((list) => {}
        const;const;const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === &apos;navigation&apos;) {
            console.log(&apos;Page load time:&apos;, entry.duration);
          }
        });
      });
      observer.observe({ entryTypes: [&apos;navigation&apos;] });
    }
  }, [title]);&apos;

  const defaultStructuredData = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Zion Tech Group&quot;,
    &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
    &quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
    &quot;description&quot;: description,
    &quot;address&quot;: {
      &quot;@type&quot;: &quot;PostalAddress&quot;,
      &quot;streetAddress&quot;: &quot;364 E Main St STE 1008&quot;,
      &quot;addressLocality&quot;: &quot;Middletown&quot;,
      &quot;addressRegion&quot;: &quot;DE&quot;,
      &quot;postalCode&quot;: &quot;19709&quot;,
      &quot;addressCountry&quot;: &quot;US&quot;
    },
    &quot;contactPoint&quot;: {
      &quot;@type&quot;: &quot;ContactPoint&quot;,
      &quot;telephone&quot;: &quot;+1-302-464-0950&quot;,
      &quot;contactType&quot;: &quot;customer service&quot;,
      &quot;email&quot;: &quot;kleber@ziontechgroup.com&quot;
    },
    &quot;sameAs&quot;: [
      &quot;https://ziontechgroup.com&quot;
    ]
  };

  return (&quot;
    <Head>
      <title>{title}</title>
      <meta name=&quot;description&quot; content={description} />&quot;
      <meta name=&quot;keywords&quot; content={keywords} />&quot;
      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
      
      {/* Open Graph */}&quot;
      <meta property=&quot;og:title&quot; content={title} />&quot;
      <meta property=&quot;og:description&quot; content={description} />&quot;
      <meta property=&quot;og:type&quot; content={ogType} />&quot;
      <meta property=&quot;og:url&quot; content={canonical || &apos;http,s://ziontechgroup.com&apos;} />&apos;
      <meta property=&quot;og:image&quot; content={ogImage} />&quot;
      <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
      
      {/* Twitter */}&quot;
      <meta name=&quot;twitter:card&quot; content={twitterCard} />&quot;
      <meta name=&quot;twitter:title&quot; content={title} />&quot;
      <meta name=&quot;twitter:description&quot; content={description} />&quot;
      <meta name=&quot;twitter:image&quot; content={ogImage} />
      
      {/* Canonical URL */}
      {canonical &&"}&quot; <link rel=&quot;canonical&quot; href={canonical} />}
      
      {/* Structured Data */}&quot;
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
      
      {/* Performance hints */}&quot;
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; />&quot;
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />&quot;
      <link rel=&quot;dns-prefetch&quot; href=&quot;http,s://ziontechgroup.com&quot; />
      
      {/* Security headers */}&quot;
      <meta httpEquiv=&quot;X-Content-Type-Options&quot; content=&quot;nosniff&quot; />&quot;
      <meta httpEquiv=&quot;X-Frame-Options&quot; content=&quot;DENY&quot; />&quot;
      <meta httpEquiv=&quot;X-XSS-Protection&quot; content=&quot;1; mode=block&quot; />&quot;
    </Head>
  );
};

export default SEOEnhancer;