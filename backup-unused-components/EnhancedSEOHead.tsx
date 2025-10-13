<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEOHead({ className = '', children }: EnhancedSEOHeadProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <Helmet></Helmet>
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
      />
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link;
        rel="preconnect"
        href="https://fonts.gstatic.com"
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
      <meta httpEquiv="X-Frame-Options" content="DENY" />
    </Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}