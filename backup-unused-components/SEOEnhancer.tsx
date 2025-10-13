import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}
=======
=======
import StructuredData from "../components/StructuredData";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
import { Helmet } from 'react-helmet-async';
interface SEOEnhancerProps;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;

const SEOEnhancer: React.FC<SEOEnhancerProps> = (
  title = "Zion Tech Group - Advanced AI and IT Solutions",
  description = "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, IT services, cybersecurity, cloud computing, digital transformation, technology services, Zion Tech Group",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
//   structuredData,
  noIndex = false,
<<<<<<< HEAD
  noFollow = false;
=======
  noFollow = false
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
) => 
  const defaultStructuredData = 
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": description,
    "address": 
=======
}) => {
  const defaultStructuredData = {
//     "@context": "https://schema.org",
    "@type": "Organization",
//     "name": "Zion Tech Group",
//     "url": "https://ziontechgroup.com",
//     "logo": "https://ziontechgroup.com/logo.svg",
//     "description": description,
    "address": {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      "@type": "PostalAddress",
//       "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
<<<<<<< HEAD
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
,
    "contactPoint": 
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
,
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      
=======
//       "addressRegion": "DE",
//       "postalCode": "19709",
//       "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
//       "telephone": "+1-302-464-0950",
//       "contactType": "customer service",
//       "email": "kleber@ziontechgroup.com"
    },
//     "sameAs": [
//       "https://twitter.com/ziontechgroup",
//       "https://linkedin.com/company/ziontechgroup"
//     ],
//     "offers": [
      {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
        "@type": "Offer",
//         "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
,
      
        "@type": "Offer", 
<<<<<<< HEAD
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
,
      
        "@type": "Offer",
        "name": "Cloud Infrastructure", 
        "description": "Cloud computing and infrastructure services"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

<<<<<<< HEAD
export default function SEOEnhancer({ className = '', children }: SEOEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
=======
    ]
;
=======
//         "name": "Cybersecurity",
//         "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
//         "name": "Cloud Infrastructure", 
//         "description": "Cloud computing and infrastructure services"
      }
//     ]
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  const finalStructuredData = structuredData || defaultStructuredData;
  return (
<<<<<<< HEAD
    <Helmet></Helmet>
=======
//     <Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <link rel="canonical" href="{canonical}" />
      {/* Robots */}
      <meta name="robots" content="{`${noIndex" ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`} />
      {/* Open Graph */}
      <meta property="og:type" content="{ogType}" />
      <meta property="og:url" content="{canonical}" />
      <meta property="og:title" content="{title}" />
      <meta property="og:description" content="{description}" />
      <meta property="og:image" content="{ogImage}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="{title}" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      {/* Twitter */}
      <meta name="twitter:card" content="{twitterCard}" />
      <meta name="twitter:url" content="{canonical}" />
      <meta name="twitter:title" content="{title}" />
      <meta name="twitter:description" content="{description}" />
      <meta name="twitter:image" content="{ogImage}" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />
      {/* Additional SEO Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      {/* Mobile Optimization */}
      <meta name="viewport" content="width="device-width," initial-scale="1," viewport-fit=cover" />
      <meta name="theme-color" content="#8b5cf6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(finalStructuredData)}
<<<<<<< HEAD
      </script>
=======
//       </script>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      {/* Additional Meta Tags for Better SEO */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
//     </Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}