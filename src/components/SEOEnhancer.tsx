import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
  children?: React.ReactNode;
}

export const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Cutting-edge AI, quantum computing, and digital transformation solutions for modern enterprises. Expert consulting, cloud services, and innovative technology implementations.",
  keywords = "AI solutions, quantum computing, digital transformation, cloud services, enterprise technology, IT consulting, software development, cybersecurity",
  canonicalUrl,
  ogType = "website",
  ogImage = "https://zion.app/og-image.jpg",
  ogImageAlt = "Zion Tech Group - AI & Technology Solutions",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
  children,
}) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const finalCanonicalUrl = canonicalUrl || currentUrl;

  // Generate structured data for organization
  const organizationStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zion Tech Group",
      description: description,
      url: "https://zion.app",
      logo: "https://zion.app/logo.png",
      sameAs: [
        "https://linkedin.com/compunknown/zion-tech-group",
        "https://twitter.com/ziontechgroup",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-ZION-TECH",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Technology Drive",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94105",
        addressCountry: "US",
      },
    }),
    [description],
  );

  // Combine structured data
  const finalStructuredData = useMemo(() => {
    const data: Record<string, unknown>[] = [organizationStructuredData as Record<string, unknown>];
    if (structuredData) {
      data.push(structuredData as Record<string, unknown>);
    }
    return data;
  }, [organizationStructuredData, structuredData]);

  useEffect(() => {
    // Update page title for better UX
    document.title = title;

    // Add performance mark
    if ("performance" in window && "mark" in window.performance) {
      window.performance.mark("seo-enhanced");
    }

    // Track SEO enhancement
    if ("gtag" in window) {
      (
        window as Window & {
          gtag?: (
            command: string,
            eventName: string,
            params: Record<string, unknown>,
          ) => void;
        }
      ).gtag?.("event", "seo_enhanced", {
        page_title: title,
        page_location: currentUrl,
      });
    }
  }, [title, currentUrl]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {noIndex && <meta name="robots" content="noindex,nofollow" />}

        {/* Canonical URL */}
        <link rel="canonical" href={finalCanonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={finalCanonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />

        {/* Additional SEO Tags */}
        <meta name="author" content="Zion Tech Group" />
        <meta name="publisher" content="Zion Tech Group" />
        <meta name="copyright" content="© 2025 Zion Tech Group" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />

        {/* Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>

        {/* Additional Performance Hints */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Cache Control */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />
      </Helmet>

      {children}
    </>
  );
};

export default SEOEnhancer;
