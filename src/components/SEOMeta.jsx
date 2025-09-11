import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEOMeta = ({ title, description, keywords = 'AI, Machine Learning, Quantum Computing, Technology Solutions, Zion Tech Group', image = '/images/zion-tech-group-og.jpg', url = window.location.href, type = 'website', structuredData }) => {
    const siteName = 'Zion Tech Group';
    const fullTitle = `${title} | ${siteName}`;
    // Default structured data for organization
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",
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
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup",
            "https://github.com/ziontechgroup"
        ],
        "foundingDate": "2015",
        "numberOfEmployees": "50+",
        "serviceArea": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI Strategy Consulting",
                        "description": "Comprehensive AI strategy development and implementation consulting for enterprises"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Quantum AI Fusion Platform",
                        "description": "Revolutionary platform combining quantum computing with artificial intelligence"
                    }
                }
            ]
        }
    };
    const finalStructuredData = structuredData || defaultStructuredData;
    return (<Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta name="author" content="Zion Tech Group"/>
      <meta name="robots" content="index, follow"/>
      <meta name="language" content="English"/>
      <meta name="revisit-after" content="7 days"/>
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle}/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content={type}/>
      <meta property="og:url" content={url}/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:site_name" content={siteName}/>
      <meta property="og:locale" content="en_US"/>
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@ziontechgroup"/>
      <meta name="twitter:creator" content="@ziontechgroup"/>
      <meta name="twitter:title" content={fullTitle}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image}/>
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="theme-color" content="#22ddd2"/>
      <meta name="msapplication-TileColor" content="#22ddd2"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      <meta name="apple-mobile-web-app-title" content={siteName}/>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url}/>
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName}/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="format-detection" content="telephone=no"/>
      <meta name="msapplication-config" content="/browserconfig.xml"/>
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="referrer" content="strict-origin-when-cross-origin"/>
      
      {/* Performance Meta Tags */}
      <meta name="renderer" content="webkit"/>
      <meta name="force-rendering" content="webkit"/>
    </Helmet>);
};
export default SEOMeta;
