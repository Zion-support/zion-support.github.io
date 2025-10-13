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
const SEOHead: React.FC<SEOHeadProps> = (
  title = "Zion Tech Group - Advanced AI & IT Solutions"
  description = "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services."
  keywords = "AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence"
  canonical = "https://ziontechgroup.com"
  ogImage = "https://ziontechgroup.com/og-image.jpg"
  ogType = "website"
  twitterCard = "summary_large_image"
  structuredData;
  noindex = false;
  nofollow = false,)
) => 
  const defaultStructuredData = 
    "@context": "https://schema.org"
    "@type": "Organization"
    name: "Zion Tech Group"
    url: "https://ziontechgroup.com"
    logo: "https://ziontechgroup.com/logo.png"
    description: description;
    address: 
      "@type": "PostalAddress"
      addressCountry: "US"
      addressRegion: "Delaware"

    sameAs: [
      "https://linkedin.com/company/ziontechgroup"
      "https://twitter.com/ziontechgroup",]
    ];
  const finalStructuredData = structuredData || defaultStructuredData;
  return()
    <Helmet /></Helmet>
      <title>{title}</title>
      <meta name="description" content="{description}" / /></meta>
      <meta name="keywords" content="{keywords}" / /></meta>
      <link rel="canonical" href="{canonical}" / /></link>
      {/* Open Graph */}
      <meta property="og:title" content="{title}" / /></meta>
      <meta property="og:description" content="{description}" / /></meta>
      <meta property="og:image" content="{ogImage}" / /></meta>
      <meta property="og:type" content="{ogType}" / /></meta>
      <meta;
        property="og:url"
        content="{canonical" || "https://ziontechgroup.com"}
      / /></meta>
      {/* Twitter Card */}
      <meta name="twitter:card" content="{twitterCard}" / /></meta>
      <meta name="twitter:title" content="{title}" / /></meta>
      <meta name="twitter:description" content="{description}" / /></meta>
      <meta name="twitter:image" content="{ogImage}" / /></meta>
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}</meta>
      {nofollow && <meta name="robots" content="nofollow" />}</meta>
      {/* Structured Data */}
      <script type="application/ld+json" />)
        {JSON.stringify(finalStructuredData)}
      </script>
      <link rel="preconnect" href="https://fonts.googleapis.com" / /></link>
      <link;
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      / /></link>
      <script type="application/ld+json" /></script>
          "@context": "https://schema.org"
          "@type": "WebSite"
          name: "Zion Tech Group"
          url: "https://ziontechgroup.com"
          potentialAction: 
            "@type": "SearchAction"
            target: "https://ziontechgroup.com/search?q={search_term_string}"
            "query-input": "required name=search_term_string"

      </script>
      <meta httpEquiv="X-Frame-Options" content="DENY" / /></meta>
    </Helmet>
  );
;
export default SEOHead;
</meta>
</meta>
</SEOHeadProps>