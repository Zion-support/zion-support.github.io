"use client";

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { logger } from "../utils/logger";

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  structuredData: object;
}

interface SEOOptimizerProps {
  seoData?: Partial<SEOData>;
  page?: string;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  seoData = {},
  page = "home",
}) => {
  const defaultSEOData: SEOData = {
    title: "Zion Tech Group - Advanced AI and IT Solutions",
    description:
      "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.",
    keywords: [
      "AI solutions",
      "artificial intelligence",
      "cybersecurity",
      "cloud computing",
      "digital transformation",
      "machine learning",
      "quantum computing",
      "IT services",
      "automation",
      "Zion Tech Group",
    ],
    canonical: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/og-image.svg",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      url: "https://ziontechgroup.com",
      logo: "https://ziontechgroup.com/logo.png",
      description:
        "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Technology Drive",
        addressLocality: "Wilmington",
        addressRegion: "DE",
        postalCode: "19801",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-302-464-0950",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup",
      ],
      service: [
        {
          "@type": "Service",
          name: "AI Solutions",
          description:
            "Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.",
        },
        {
          "@type": "Service",
          name: "Cybersecurity",
          description:
            "Comprehensive cybersecurity solutions to protect your business from threats and ensure compliance.",
        },
        {
          "@type": "Service",
          name: "Cloud Infrastructure",
          description:
            "Scalable and secure cloud infrastructure solutions for modern businesses.",
        },
      ],
    },
  };

  const mergedSEOData = { ...defaultSEOData, ...seoData };

  useEffect(() => {
    // Log SEO optimization
    logger.info("SEO optimization applied", {
      page,
      title: mergedSEOData.title,
      description: mergedSEOData.description,
    });

    // Track page view for analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_title: mergedSEOData.title,
        page_location: mergedSEOData.canonical,
        custom_map: {
          page_type: page,
        },
      });
    }
  }, [mergedSEOData, page]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{mergedSEOData.title}</title>
      <meta name="description" content={mergedSEOData.description} />
      <meta name="keywords" content={mergedSEOData.keywords.join(", ")} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="format-detection"
        content="telephone=no,address=no,email=no"
      />
      <meta name="color-scheme" content="dark light" />

      {/* Canonical URL */}
      <link rel="canonical" href={mergedSEOData.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={mergedSEOData.ogType} />
      <meta property="og:url" content={mergedSEOData.canonical} />
      <meta property="og:title" content={mergedSEOData.title} />
      <meta property="og:description" content={mergedSEOData.description} />
      <meta property="og:image" content={mergedSEOData.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={mergedSEOData.twitterCard} />
      <meta property="twitter:url" content={mergedSEOData.canonical} />
      <meta property="twitter:title" content={mergedSEOData.title} />
      <meta
        property="twitter:description"
        content={mergedSEOData.description}
      />
      <meta property="twitter:image" content={mergedSEOData.ogImage} />
      <meta property="twitter:creator" content="@ziontechgroup" />
      <meta property="twitter:site" content="@ziontechgroup" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(mergedSEOData.structuredData)}
      </script>

      {/* Additional structured data for services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI and IT Solutions",
          provider: {
            "@type": "Organization",
            name: "Zion Tech Group",
          },
          description: mergedSEOData.description,
          serviceType: "Technology Services",
          areaServed: "United States",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AI and IT Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Solutions",
                  description: "Advanced artificial intelligence solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cybersecurity",
                  description: "Comprehensive cybersecurity solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Infrastructure",
                  description: "Scalable cloud infrastructure solutions",
                },
              },
            ],
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;
