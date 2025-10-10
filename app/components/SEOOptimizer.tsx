<<<<<<< HEAD
'use client'import React from 'react'
import { Helmet  } from 'react-helmet-async'
interface SEOOptimizerProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  structuredData?: object
=======
'use client';
<<<<<<< HEAD
import React from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: any;
=======
import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  enableMetaTags?: boolean;
  enableStructuredData?: boolean;
  enableSitemap?: boolean;
  enableRobots?: boolean;
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
>>>>>>> main
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
<<<<<<< HEAD
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData
}) => {
<<<<<<< HEAD
  return null; // SEO optimizer placeholder
=======
  const keywordsString = keywords.join(', ')return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
=======
  enableMetaTags = true,
  enableStructuredData = true,
  enableSitemap = true,
  enableRobots = true
}) => {
  useEffect(() => {
    if (enableMetaTags) {
      // Add meta tags for SEO
      const addMetaTag = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      addMetaTag('description', 'Zion Tech Group - Advanced AI and IT Solutions');
      addMetaTag('keywords', 'AI solutions, IT services, cloud computing, cybersecurity, digital transformation');
      addMetaTag('author', 'Zion Tech Group');
      addMetaTag('robots', 'index, follow');
      addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    }

    if (enableStructuredData) {
      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "description": "Leading provider of AI and IT solutions",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "364 E Main St STE 1008",
          "addressLocality": "Middletown",
          "addressRegion": "DE",
          "postalCode": "19709",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-302-464-0950",
          "contactType": "customer service",
          "email": "kleber@ziontechgroup.com"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    if (enableSitemap) {
      // Add sitemap link
      const sitemapLink = document.createElement('link');
      sitemapLink.rel = 'sitemap';
      sitemapLink.type = 'application/xml';
      sitemapLink.href = '/sitemap.xml';
      document.head.appendChild(sitemapLink);
    }

    if (enableRobots) {
      // Add robots.txt link
      const robotsLink = document.createElement('link');
      robotsLink.rel = 'robots';
      robotsLink.href = '/robots.txt';
      document.head.appendChild(robotsLink);
    }
  }, [enableMetaTags, enableStructuredData, enableSitemap, enableRobots]);

  return null; // This component doesn't render anything visible
>>>>>>> cursor/analyze-improve-and-deploy-application-e765
>>>>>>> main
};

export default SEOOptimizer;
