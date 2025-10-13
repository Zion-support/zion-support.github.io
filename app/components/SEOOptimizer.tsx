<<<<<<< HEAD
<<<<<<< HEAD
  keywords?: string[];
=======
import React from 'react';
'use client';
interface SEOOptimizerProps {title: string;,}
  description: string;,
  keywords?: string[]
=======
'use client';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
  noIndex?: boolean;
  description = 'Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology.',
  keywords = [
    'AI solutions',
    'artificial intelligence',
    'cloud infrastructure',
    'IT services',
    'machine learning',
    'cybersecurity',
    '5G solutions',
    'business automation'
  ],
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false
}: SEOOptimizerProps) {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
    return undefined;
  }, [structuredData]);

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": description,
    "url": canonicalUrl || "https://ziontechgroup.com",
    "logo": ogImage,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "name": "AI and IT Solutions",
      "description": description,
      "category": "Technology Services"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="language" content="en-US" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
}
=======
'use client';

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Add structured data for organization
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.",
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
      },
      "sameAs": [
        "https://twitter.com/ziontechgroup",
        "https://linkedin.com/company/ziontechgroup"
      ]
    };

    // Add breadcrumb structured data
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

    // Add FAQ structured data if available
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zion Tech Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zion Tech Group offers AI solutions, quantum computing, autonomous systems, and digital transformation services for enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get started with AI implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact our team for a free consultation to assess your AI readiness and develop a customized implementation strategy."
          }
        }
      ]
    };

    // Add all structured data
    const allStructuredData = [organizationData, breadcrumbData, faqData];
    if (structuredData) {
      allStructuredData.push(structuredData);
    }

    allStructuredData.forEach((data, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.textContent = JSON.stringify(data);
      
      // Remove existing data
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      document.head.appendChild(script);
    });

    // Add meta tags for better SEO
    const metaTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#8b5cf6' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ziontechgroup' },
      { name: 'twitter:creator', content: '@ziontechgroup' }
    ];

    metaTags.forEach(tag => {
      const existing = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
      if (existing) {
        existing.remove();
      }
      
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add canonical URL
    if (canonicalUrl) {
      const existing = document.querySelector('link[rel="canonical"]');
      if (existing) {
        existing.remove();
      }
      
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Add preconnect links for performance
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    preconnectLinks.forEach(href => {
      const existing = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonicalUrl, ogImage, structuredData]);

  return (
    <Helmet>
      <title>{title}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
=======
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsString}/>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl}/>
      
      {/* Open Graph */} <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />,
      <meta property="og: url" content={canonicalUrl,}/>
      
<<<<<<< HEAD
      {/* Twitter Card */} <meta name="twitter: card" content="summary_large_image" />,
      <meta name="twitter: title" content={title,}/>
      <meta name="twitter: description" content={description,}/>
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
    </Helmet>
  );
};

export default SEOOptimizer;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
