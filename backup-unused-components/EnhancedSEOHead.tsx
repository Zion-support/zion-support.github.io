import React from 'react';
import React from "react";
import StructuredData from "../components/StructuredData";
import { Helmet } from "react-helmet-async";
interface SEOHeadProps;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEOHead({ className = '', children }: EnhancedSEOHeadProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
const SEOHead: React.FC<SEOHeadProps> = (
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
  keywords = "AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
//   structuredData,
  noindex = false,
  nofollow = false,
) =>
  const defaultStructuredData =
    "@context": "https://schema.org",
    "@type": "Organization",
      name: "Zion Tech Group",
      url: "https://ziontechgroup.com",
      logo: "https://ziontechgroup.com/logo.png",
      description: description,
      address:
      "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "Delaware",
,
      sameAs: [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup",
    ],
;
}) => {
  const defaultStructuredData = {
//     "@context": "https://schema.org",
    "@type": "Organization",
//     name: "Zion Tech Group",
//     url: "https://ziontechgroup.com",
//     logo: "https://ziontechgroup.com/logo.png",
//     description: description,
    address: {
      "@type": "PostalAddress",
//       addressCountry: "US",
//       addressRegion: "Delaware",
    },
//     sameAs: [
//       "https://linkedin.com/company/ziontechgroup",
//       "https://twitter.com/ziontechgroup",
//     ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet></Helmet>
//     <Helmet>
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <link rel="canonical" href="{canonical}" />
      {/* Open Graph */}
      <meta property="og:title" content="{title}" />
      <meta property="og:description" content="{description}" />
      <meta property="og:image" content="{ogImage}" />
      <meta property="og:type" content="{ogType}" />
      <meta;
        property="og:url"
        content="{canonical" || "https://ziontechgroup.com"}
      <meta>
  property="og:url">
  content="{canonical" || "https://ziontechgroup.com"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
//       <meta
        property="og:url"
        content={canonical || "https://ziontechgroup.com"}
//       />

      {/* Twitter Card */}
      <meta name="twitter:card" content="{twitterCard}" />
      <meta name="twitter:title" content="{title}" />
      <meta name="twitter:description" content="{description}" />
      <meta name="twitter:image" content="{ogImage}" />
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}</meta>
      {nofollow && <meta name="robots" content="nofollow" />}</meta>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(finalStructuredData)}
      </script>
//       </script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link;
//       <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      <link>
  rel="preconnect">
  href="https://fonts.gstatic.com">
  crossOrigin="anonymous"
      />
      <script type="application/ld+json"></script>

          "@context": "https://schema.org",
          "@type": "WebSite",
            name: "Zion Tech Group",
            url: "https://ziontechgroup.com",
            potentialAction:
            "@type": "SearchAction",
              target: "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
,

      </script>
//       />

      <script type="application/ld+json">
        {JSON.stringify({
//           "@context": "https://schema.org",
          "@type": "WebSite",
//           name: "Zion Tech Group",
//           url: "https://ziontechgroup.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://ziontechgroup.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
//       </script>
      <meta httpEquiv="X-Frame-Options" content="DENY" />
    </Helmet>
//     </Helmet>
  );
}
);
}
