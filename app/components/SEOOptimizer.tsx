import React from 'react';
'use client';
interface SEOOptimizerProps {title: string;,}
  description: string;,
  keywords?: string[]
 origin/cursor/analyze-improve-and-deploy-application-1232;
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
  noIndex = false;
}: SEOOptimizerProps) {
  useEffect(() => {
    // Add structured data to the page;
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
    </string><Helmet>
      {/* Basic Meta Tags */}
      </Helmet><title>{title}</title>
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
 origin/cursor/analyze-improve-and-deploy-application-1247;
};
export default SEOOptimizer;
 origin/cursor/analyze-improve-and-deploy-application-1232
;