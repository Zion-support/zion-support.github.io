import React from "react";
import { Helmet } from "react-helmet-async";

const SEOMeta = ({ 
    title, 
    description, 
    keywords = "AI, Machine Learning, Quantum Computing, Technology Solutions, Zion Tech Group", 
    image = "/images/zion-tech-group-og.jpg", 
    url = typeof window !== 'undefined' ? window.location.href : '', 
    type = "website", 
    structuredData 
}) => {
    const siteName = "Zion Tech Group";
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
            "email": "info@ziontechgroup.com"
        },
        "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup",
            "https://github.com/ziontechgroup"
        ]
    };

    const finalStructuredData = structuredData || defaultStructuredData;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Zion Tech Group" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@ziontechgroup" />
            <meta name="twitter:creator" content="@ziontechgroup" />
            
            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#1a1a1a" />
            <meta name="msapplication-TileColor" content="#1a1a1a" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            
            {/* Canonical URL */}
            <link rel="canonical" href={url} />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(finalStructuredData)}
            </script>
        </Helmet>
    );
};

export default SEOMeta;