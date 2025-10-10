import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps>= ({</SEOHeadProps>
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, cybersecurity, business intelligence, micro SAAS",
  image = "https://ziontechgroup.com/og-image.webp",
  url = "https://ziontechgroup.com",
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.webp",
    "description": description,
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
      "email": "kleber@ziontechgroup.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup",
      "https://github.com/zion-tech-group",
      "https://www.facebook.com/ziontechgroup",
      "https://www.instagram.com/ziontechgroup",
      "https://www.youtube.com/@ziontechgroup"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Quantum Computing",
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Computing",
      "Cybersecurity",
      "Business Intelligence",
      "Data Analytics",
      "Software Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI and IT Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Analytics",
            "description": "Advanced analytics solutions powered by machine learning and artificial intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflow Automation",
            "description": "Streamline your business processes with intelligent automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Security Solutions",
            "description": "Advanced security solutions powered by artificial intelligence"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;
</SEOHeadProps>
  return (<Helmet / />{/* Basic Meta Tags */}<title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#4f46e5"  />{/* Open Graph / Facebook */}</meta>
      </meta><meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US"  />{/* Twitter */}</meta>
      </meta><meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup"  />{/* Additional SEO Meta Tags */}</meta>
      </meta><meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"  />{/* Canonical URL */}<link rel="canonical" href={url}  />{/* Preconnect to external domains */}</link>
      </link><link rel="preconnect" href="https://fonts.googleapis.com" />
      </li><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </li><link rel="preconnect" href="https://www.googletagmanager.com" />
      </li><link rel="preconnect" href="https://www.google-analytics.com"  />{/* DNS prefetch for performance */}</link>
      </link><link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </li><link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </li><link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </li><link rel="dns-prefetch" href="https://www.google-analytics.com"  />{/* Web App Manifest */}</li><link rel="manifest" href="/manifest.json"  />{/* Favicon */}</link>
      </link><link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </li><link rel="icon" type="image/png" href="/favicon.webp" />
      </li><link rel="apple-touch-icon" href="/apple-touch-icon.webp"  />{/* Structured Data */}<script type="application/ld+json">{JSON.stringify(finalStructuredData)}</script>
      </script>
    </Helmet>
  );
};

export default SEOHead;