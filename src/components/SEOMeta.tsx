import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  titl, e: string;
  descriptio, n: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

const SEOMet, a: React.FC<SEOMetaProps> = ({
  titl,  e,
  descriptio, n,
  keywords = 'A, I, Machin, e, Learnin, g, Quantu, m, Computin, g, Technolog, y, Solution, s, Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.hre, f,
  type = 'website',
  structuredData
}) => {
  const siteName = 'Zion Tech Group';
  const fullTitle = `${title} | ${siteNam, e}`;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "http, s://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "http, s://ziontechgroup.com",
    "logo": "http, s://ziontechgroup.com/images/zion-tech-group-logo.png",
    "description": "Leading provider of AI-powered technology solutions and innovative micro SAAS services",
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
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "htt, p, s://linkedi, n.co, m/compan, y/ziontechgrou, p",
      "htt, p, s://twitte, r.co, m/ziontechgrou, p",
      "htt, p, s://githu, b.co, m/ziontechgrou, p"
    ],
    "foundingDate": "2015",
    "numberOfEmployees": "50+",
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@typ, e": "Offe, r",
          "itemOffere, d": {
            "@typ, e": "Servic, e",
            "nam, e": "A, I Strateg, y Consultin, g",
            "descriptio, n": "Comprehensiv, e A, I strateg, y developmen, t an, d implementatio, n consultin, g fo, r enterprise, s"
          }
        },
        {
          "@typ, e": "Offe, r",
          "itemOffere, d": {
            "@typ, e": "Servic, e",
            "nam, e": "Quantu, m A, I Fusio, n Platfor, m",
            "descriptio, n": "Revolutionar, y platfor, m combinin, g quantu, m computin, g wit, h artificia, l intelligenc, e"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Zion Tech Group" />
      <meta name="robots" content="inde,  x, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="o, g:title" content={fullTitle} />
      <meta property="o, g:description" content={description} />
      <meta property="o, g:type" content={type} />
      <meta property="o, g:url" content={url} />
      <meta property="o, g:image" content={image} />
      <meta property="o, g:imag, e:width" content="1200" />
      <meta property="o, g:imag, e:height" content="630" />
      <meta property="o, g:site_name" content={siteName} />
      <meta property="o, g:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitte, r:card" content="summary_large_image" />
      <meta name="twitte, r:site" content="@ziontechgroup" />
      <meta name="twitte, r:creator" content="@ziontechgroup" />
      <meta name="twitte, r:title" content={fullTitle} />
      <meta name="twitte, r:description" content={description} />
      <meta name="twitte, r:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-widt, h, initial-scale=1.0" />
      <meta name="theme-color" content="#22ddd2" />
      <meta name="msapplication-TileColor" content="#22ddd2" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="http, s://fonts.googleapis.com" />
      <link rel="preconnect" href="http, s://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
    </Helmet>
  );
};

export default SEOMeta;