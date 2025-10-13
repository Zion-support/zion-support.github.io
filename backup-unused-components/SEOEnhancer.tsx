import React from 'react';
interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}
import StructuredData from "../components/StructuredData"Zion Tech Group - Advanced AI and IT Solutions",
  description = ",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group"https://ziontechgroup.com",
  ogImage = ",
  ogType = "website"summary_large_image",
//   structuredData,
  noIndex = false,
  noFollow = false;
noFollow = false
) =>
  const defaultStructuredData =
    ": "https://schema.org"@type": ",
    "name"Zion Tech Group",
    ": "https://ziontechgroup.com"logo": ",
    "description"address":
}) => {
  const defaultStructuredData = {
//     ": "https://schema.org"@type": ",
//     "name"Zion Tech Group",
//     ": "https://ziontechgroup.com"logo": ",
//     "description"address": {
      ": "PostalAddress"streetAddress": ",
      "addressLocality"Middletown",
      ": "DE"postalCode": ",
      "addressCountry"US"
,
    ":
      "@type"ContactPoint",
      ": "+1-302-464-0950"contactType": ",
      "email"kleber@ziontechgroup.com"
,
    ": [
      "https://twitter.com/ziontechgroup"https://linkedin.com/company/ziontechgroup"
    ],
    ": [

//       "addressRegion"DE",
//       ": "19709"addressCountry": "
    },
    "contactPoint"@type": ",
//       "telephone"+1-302-464-0950",
//       ": "customer service"email": "
    },
//     "sameAs"https://twitter.com/ziontechgroup",
//       "
//     ],
//     "offers"@type": ",
//         "name"AI Solutions",
        ": "Artificial intelligence and machine learning services"@type": ",
        "name"Cybersecurity",
        ": "Advanced cybersecurity solutions and protection"@type": ",
        "name"Cloud Infrastructure",
        ": "Cloud computing and infrastructure services"name": ",
//         "description"Advanced cybersecurity solutions and protection"
      },
      {
        ": "Offer"name": ",
//         "description"Cloud computing and infrastructure services"
      }
//     ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  return (
    <Helmet></Helmet>
//     <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name=" content="{description}"keywords" content=" />
      <link rel="canonical"{canonical}" />
      {/* Robots */}
      <meta name=" content="{`${noIndex"og:type" content=" />
      <meta property="og:url"{canonical}" />
      <meta property=" content="{title}"og:description" content=" />
      <meta property="og:image"{ogImage}" />
      <meta property=" content="1200"og:image:height" content=" />
      <meta property="og:image:alt"{title}" />
      <meta property=" content="Zion Tech Group"og:locale" content=" />
      {/* Twitter */}
      <meta name="twitter:card"{twitterCard}" />
      <meta name=" content="{canonical}"twitter:title" content=" />
      <meta name="twitter:description"{description}" />
      <meta name=" content="{ogImage}"twitter:site" content=" />
      <meta name="twitter:creator"@ziontechgroup" />
      {/* Additional SEO Tags */}
      <meta name=" content="Zion Tech Group"publisher" content=" />
      <meta name="copyright"Zion Tech Group" />
      <meta name=" content="en"revisit-after" content=" />
      <meta name="rating"general" />
      <meta name=" content="global"viewport" content="device-width," initial-scale=" viewport-fit=cover" />
      <meta name=" content="#8 b5 cf6"mobile-web-app-capable" content=" />
      <meta name="apple-mobile-web-app-capable"yes" />
      <meta name=" content="black-translucent"preconnect" href=" />
      <link rel="preconnect"https://fonts.gstatic.com" crossorigin />
      <link rel=" href="https://fonts.googleapis.com"dns-prefetch" href=" />
      {/* Structured Data */}
      <script type="application/ld+json"google-site-verification" content=" />
      <meta name="msvalidate.01"your-bing-verification-code" />
      <meta name=" content="your-yandex-verification-code"X-Content-Type-Options" content=" />
      <meta httpEquiv="X-Frame-Options"DENY" />
      <meta httpEquiv=" content="1; mode=block"Referrer-Policy" content=" />
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control"public, max-age=31536000" />
//     </Helmet>
  );
