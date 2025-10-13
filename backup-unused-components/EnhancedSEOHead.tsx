import React from 'react';
import React from "react"../components/StructuredData";
import { Helmet } from ";
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
  title = "Zion Tech Group - Advanced AI & IT Solutions"Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
  keywords = ",
  canonical = "https://ziontechgroup.com"https://ziontechgroup.com/og-image.jpg",
  ogType = ",
  twitterCard = "summary_large_image"@context": ",
    "@type"Organization",
      name: ",
      url: "https://ziontechgroup.com"https://ziontechgroup.com/logo.png",
      description: description,
      address:
      ": "PostalAddress"US",
        addressRegion: ",
,
      sameAs: [
      "https://linkedin.com/company/ziontechgroup"https://twitter.com/ziontechgroup",
    ],
;
}) => {
  const defaultStructuredData = {
//     ": "https://schema.org"@type": ",
//     name: "Zion Tech Group"https://ziontechgroup.com",
//     logo: ",
//     description: description,
    address: {
      "@type"PostalAddress",
//       addressCountry: ",
//       addressRegion: "Delaware"https://linkedin.com/company/ziontechgroup",
//       ",
//     ],
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet></Helmet>
//     <Helmet>
      <title>{title}</title>
      <meta name="description"{description}" />
      <meta name=" content="{keywords}"canonical" href=" />
      {/* Open Graph */}
      <meta property="og:title"{title}" />
      <meta property=" content="{description}"og:image" content=" />
      <meta property="og:type"{ogType}" />
      <meta;
        property="
        content="{canonical"https://ziontechgroup.com"}
      <meta>
  property=">
  content="{canonical"https://ziontechgroup.com"}
      />
      <meta property=" content={title} />
      <meta property="og:description"og:image" content={ogImage} />
      <meta property=" content={ogType} />
//       <meta
        property="og:url"https://ziontechgroup.com"}
//       />

      {/* Twitter Card */}
      <meta name=" content="{twitterCard}"twitter:title" content=" />
      <meta name="twitter:description"{description}" />
      <meta name=" content="{ogImage}"robots" content=" />}</meta>
      {nofollow && <meta name="robots"nofollow" />}</meta>
      {/* Structured Data */}
      <script type="></script>
        {JSON.stringify(finalStructuredData)}
      </script>
//       </script>

      <link rel="preconnect"https://fonts.googleapis.com" />
      <link;
//       <link
        rel="
        href="https://fonts.gstatic.com"anonymous"
      <link>
  rel=">
  href="https://fonts.gstatic.com"anonymous"
      />
      <script type="></script>

          "@context"https://schema.org",
          ": "WebSite"Zion Tech Group",
            url: ",
            potentialAction:
            "@type"SearchAction",
              target: ",
            "query-input"required name=search_term_string",
,

      </script>
//       />

      <script type=">
        {JSON.stringify({
//           "@context"https://schema.org",
          ": "WebSite"Zion Tech Group",
//           url: ",
          potentialAction: {
            "@type"SearchAction",
            target: ",
            "query-input"required name=search_term_string",
          },
        })}
//       </script>
      <meta httpEquiv=" content="DENY" />
    </Helmet>
//     </Helmet>
  );
}
);
