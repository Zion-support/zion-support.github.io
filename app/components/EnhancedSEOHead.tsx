import { Helmet } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}
const EnhancedSEOHead: React.FC<SEOProps> = ({
  title = "Zion Tech Group - AI Solutions & IT Services","
  description = "Leading technology solutions provider specializing in AI, 5G technology, cybersecurity, cloud infrastructure, and digital transformation services.","
  keywords = "AI solutions, 5G technology, cybersecurity, cloud services, IT consulting, data analytics, mobile development, digital transformation",
  canonical,
  ogTitle,
  ogDescription,"
  ogImage = "https://ziontechgroup.com/og-image.jpg","
  ogType = "website","
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;

const fullCanonical = canonical || `https://ziontechgroup.com${window.location.pathname}`;

const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>"
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <link rel="canonical" href={fullCanonical} />"
      <meta name="robots" content={robotsContent} />
      {/* Open Graph Meta Tags */}"
      <meta property="og:title" content={ogTitle || fullTitle} />"
      <meta property="og:description" content={ogDescription || description} />"
      <meta property="og:image" content={ogImage} />"
      <meta property="og:url" content={fullCanonical} />"
      <meta property="og:type" content={ogType} />"
      <meta property="og:site_name" content="Zion Tech Group" />
      {/* Twitter Card Meta Tags */}"
      <meta name="twitter:card" content={twitterCard} />"
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />"
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />"
      <meta name="twitter:image" content={twitterImage || ogImage} />
      {/* Additional SEO Meta Tags */}"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />"
      <meta name="language" content="English" />"
      <meta name="revisit-after" content="7 days" />"
      <meta name="distribution" content="global" />"
      <meta name="rating" content="general" />
      {/* Mobile Optimization */}"
      <meta name="mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      {/* Theme Color */}"
      <meta name="theme-color" content="#0f172a" />"
      <meta name="msapplication-TileColor" content="#0f172a" />
      {/* Preconnect to external domains */}"
      <link rel="preconnect" href="https://fonts.googleapis.com" />"
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS Prefetch for performance */}"
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />"
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      {/* Structured Data */}
      {structuredData && ("
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {/* Default Structured Data for Organization */}
      {!structuredData && ("
        <script type="application/ld+json">
          {JSON.stringify({"
            "@context": "https://schema.org","
            "@type": "Organization","
            "name": "Zion Tech Group","
            "url": "https://ziontechgroup.com","
            "logo": "https://ziontechgroup.com/logo.svg","
            "description": description,"
            "address": {"
              "@type": "PostalAddress","
              "addressCountry": "US","
              "addressRegion": "Delaware"
            },"
            "contactPoint": {"
              "@type": "ContactPoint","
              "telephone": "+1-302-464-0950","
              "contactType": "customer service","
              "email": "kleber@ziontechgroup.com"
            },"
            "sameAs": ["
              "https://linkedin.com/company/zion-tech-group","
              "https://twitter.com/ziontechgroup"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};
export default EnhancedSEOHead;"